import React, {useState} from 'react';
import './CreatePage.css';
import MealForm from '../../components/MealForm/MealForm';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




const CreatePage = () => {

  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();


  // create one meal
  const createMeal = (mealObj) => {
    axios
      .post(
        "http://localhost:8000/api/meals", mealObj 
      )
      .then((res) => {
        console.log(res.data);
        setErrors({});
        navigate("/meals");
      })
      .catch(err=>{
        console.log("err//////", err)
        const errorResponse = err.response.data.errors; 
        // Set Errors
        setErrors(errorResponse);
      }) 
  };

  return (
    <div className="CreatePage">
      <div className="page-top">
        <h1>Speedy Meals</h1>
         <Link to="/">
           back to Home
          </Link>
      </div>
        <h4>Add the next culinary masterpiece!</h4>
      <div className="page-content">
        <MealForm
          requestPostorPatch={createMeal}
          initialName=""
          initialcookTime={2}
          initialdirections=""
          initialingredientsOne=""
          initialingredientsTwo=""
          initialingredientsThree=""
          errors={errors}
          create="create"
          update=""
          deletes=""
          setErrors = {setErrors}
        />
      </div> 
    </div>
  );

};











CreatePage.propTypes = {};

CreatePage.defaultProps = {};

export default CreatePage;

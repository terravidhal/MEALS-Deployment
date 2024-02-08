import React, {useState, useEffect} from 'react';
import './UpdatePage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import MealForm from '../../components/MealForm/MealForm';





const UpdatePage = (props) => {

  const { id } = useParams();
  const [mealObj, setMealObj] = useState({});
  const [loaded, setLoaded] = useState(false); // check if the data is available
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); 


  //get  data one specific meal
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/meals/" + id)
      .then((res) => {
        setMealObj(res.data);
        setLoaded(true); // data available => set "true"
      })
      .catch((err) => console.log(err));
      
    }, [id]); // updating "MealObj" based on "id"



  // update one specific meal
  const updateMeal = (mealObj) => {
    axios
      .patch(
        "http://localhost:8000/api/meals/" + id,

        mealObj 
      )
      .then((res) => {
       // console.log(res.data);
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
    <div className="UpdatePage">
      <div className="page-top">
        <h1>Speedy Meals</h1>
         <Link to={"/meals/" + id}>
           meal details
          </Link>
      </div>
      <h4>Update your {mealObj.name} recipe</h4>
      <div className="page-content">
        {loaded === true ? 
          <MealForm requestPostorPatch={updateMeal} 
        initialName={mealObj.name}
        initialcookTime={mealObj.cookTime}
        initialdirections={mealObj.directions}
        initialingredientsOne={mealObj.ingredientsOne}
        initialingredientsTwo={mealObj.ingredientsTwo}
        initialingredientsThree={mealObj.ingredientsThree}
        create=""
        update="update"
        deletes=""
        errors={errors} 
          setErrors = {setErrors}/>
         : null}
      </div>
    </div>
  );

};



export default UpdatePage;

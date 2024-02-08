import React, { useEffect, useState } from 'react';
import './DetailsPage.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';


const DetailsPage = () => {

  const [OneMeal, setOneMeal] = useState({})
  const {id} = useParams(); 
  const navigate = useNavigate();

  
  useEffect(() => {
    axios.get("http://localhost:8000/api/meals/" + id)
        .then( res => {
          setOneMeal(res.data);
        })
        .catch( err => console.log(err) );
  }, [id]); 


  // delete One specific meal
  const deleteMeal = (mealId) => {
    axios
      .delete("http://localhost:8000/api/meals/" + mealId)
      .then((res) => {
        console.log(res.data);
        navigate("/meals");
      })
      .catch((err) => console.log(err));
  };



  return(
    <div className="DetailsPage">
      <div className="page-top">
        <h1>Speedy Meals</h1>
         <Link to="/">
           back to Home
          </Link>
      </div>  
      <div className="page-top">
        <h2>{OneMeal.name} recipe</h2>
        <Button mealId={OneMeal._id} create="" update="" 
        deletes="delete" 
        isActive={true}
        successCallback={() => deleteMeal(OneMeal._id)}/>
      </div>  
      <div className="page-content">
        <div className="fields">
            <p><span className='infos'>Cook Time:</span> {OneMeal.cookTime} minutes</p>
            <p>
              <span className='infos'>ingredients:</span>
              {OneMeal.ingredientsOne}
              {OneMeal.ingredientsTwo}
              {OneMeal.ingredientsThree}
            </p>
            <p><span className='infos'>Directions:</span> {OneMeal.directions} minutes</p>
        </div>
      </div>
    </div>
  );
};



export default DetailsPage;

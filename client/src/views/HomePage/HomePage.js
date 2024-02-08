import React, {useState, useEffect} from 'react';
import './HomePage.css';
import MealTable from '../../components/MealTable/MealTable';
import axios from 'axios';
import { Link } from 'react-router-dom';





const HomePage = () => {
  const [allMeals, setAllMeals] = useState([]);

 
  // get all meals
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/meals")
      .then((res) => setAllMeals(res.data))
      .catch((err) => console.log(err));
  }, []); 


  
  return (
    <div className="HomePage">
      <div className="page-top">
        <h1>Speedy Meals</h1>
         <Link to="/meals/new">
           add a meal
          </Link>
      </div>
      <h4>Find inspiration with these delicious meals!</h4>
      <MealTable allMeals={allMeals} />
    </div>
  );

};


export default HomePage;

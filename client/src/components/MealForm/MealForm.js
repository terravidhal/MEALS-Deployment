import React, { useEffect, useState } from 'react';
import './MealForm.css';
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button';





const MealForm = (props) => {

    
  const { initialName, 
          initialdirections,
          initialcookTime,
          initialingredientsOne,
          initialingredientsTwo,
          initialingredientsThree,
          requestPostorPatch,  // requestPostorPatch (lifting state)
          setErrors, // setErrors
          errors ,
          create,
          update,
          deletes,
        } = props;
  const [name, setName] = useState(initialName);  // initialName = ""
  const [directions, setDirections] = useState(initialdirections);
  const [cookTime, setCookTime] = useState(initialcookTime);
  const [ingredientsOne, setIngredientsOne] = useState(initialingredientsOne);
  const [ingredientsTwo, setIngredientsTwo] = useState(initialingredientsTwo);
  const [ingredientsThree, setIngredientsThree] = useState(initialingredientsThree);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false); // state button submit
  
  
  useEffect(() => {
    SubmitButton();
  }, [name,cookTime, 
      directions, 
    ]);



  const SubmitButton =  () =>{
    if (name.length < 3 || name.length > 20) {
      setIsActive(false);
    } else if (parseInt(cookTime) < 2 || parseInt(cookTime) > 240) {
      setIsActive(false);
    } else if (directions.length < 10) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
    };



  const onSubmitHandler =  async(e) => {
      e.preventDefault();

      requestPostorPatch({ 
        name,
        cookTime,
        directions,
        ingredientsOne,
        ingredientsTwo,
        ingredientsThree,
      }); 

      console.log("errors:::::::", errors);
  }
  
 //VALIDATIONS FRONT-END
  const handleNameErrors = (e) =>{ 
    setName(e.target.value);
   
   if (3 > e.target.value.length || e.target.value.length > 20 ) {
      setErrors({...errors,name:{ message: "Meal names must be at least 3 characters long and no more than 20 characters long" }});
   } 
   else  {
      setErrors({...errors,name:{ message: "" }});
   }
 } 

  const handleCookTimeErrors = (e) =>{ 
     setCookTime(e.target.value);
    
    if (2 > parseInt(e.target.value) || parseInt(e.target.value) > 240) {
       setErrors({...errors,cookTime:{ message: "Cook time must be a minimum of 2 minutes and no more than 240 minutes long" }});
    } 
    else  {
       setErrors({...errors,cookTime:{ message: "" }});
    }
  } 
  
  const handleDirectionsErrors = (e) =>{ 
    setDirections(e.target.value);
   
   if (e.target.value.length < 10) {
      setErrors({...errors,directions:{ message: "Directions must be at least 10 characters long" }});
   } 
   else  {
      setErrors({...errors,directions:{ message: "" }});
   }
 } 




  return (
      <div className="MealForm">
        <form onSubmit={onSubmitHandler}>
            <div className="form-left">
              <div className='field'>
               <label>Dish Name :</label><br/>
               <input type="text" value={name} onChange = {(e)=>handleNameErrors(e)}/>
               { errors.name ? 
                      <p style={{color:"red",fontWeight:"bold"}}>{errors.name.message}</p>
                      : null
               }
              </div>
              <div className='field'>
               <label>Total Minutes :</label><br/>
               <input type="number" value={cookTime} onChange = {(e)=>handleCookTimeErrors(e)}/>
               { errors.cookTime ? 
                      <p style={{color:"red",fontWeight:"bold"}}>{errors.cookTime.message}</p>
                      : null
               }
              </div>
              <div className='field'>
               <label>Directions :</label><br/>
               <input type="text" value={directions} onChange = {(e)=>handleDirectionsErrors(e)}/>
               { errors.directions ? 
                      <p style={{color:"red",fontWeight:"bold"}}>{errors.directions.message}</p>
                      : null
               }
              </div>
              <Button mealId="" create={create} update={update} 
                deletes={deletes}
                isActive={isActive}
                successCallback={() => console.log('form')}/>
              </div>
            <div className="form-right">
              <div className='field'>
                <label>Ingredients One :</label><br/>
                <input type="text" value={ingredientsOne} onChange = {(e)=>setIngredientsOne(e.target.value)}/>
              </div>
              <div className='field'>
                <label>Ingredients Two :</label><br/>
                <input type="text" value={ingredientsTwo} onChange = {(e)=>setIngredientsTwo(e.target.value)}/>
              </div>
              <div className='field'>
                <label>Ingredients Three :</label><br/>
                <input type="text" value={ingredientsThree} onChange = {(e)=>setIngredientsThree(e.target.value)}/>
              </div>
            </div>
        </form>
      </div>
   )
};


export default MealForm;

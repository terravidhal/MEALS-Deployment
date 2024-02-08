
const MealController = require('../controllers/meal.controller');
 

module.exports = app => {
    app.get('/api/meals',MealController.findAllMeals);  
    app.get('/api/meals/:id',MealController.findOneSingleMeal);
    app.patch('/api/meals/:id',MealController.updateExistingMeal); 
    app.post('/api/meals',MealController.createNewMeal);
    app.delete('/api/meals/:id',MealController.deleteAnExistingMeal);
}


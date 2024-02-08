const Meal = require('../models/meal.model');
 


module.exports.findAllMeals = (req, res) => {
    Meal.find()
        .sort({ name: 1 }) // Trie les meals par ordre alphabétique du nom / -1 implique ordre decroissant
        .then((allMeals) => {
            res.json(allMeals)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });
}


 
module.exports.findOneSingleMeal = (req, res) => {
    Meal.findOne({ _id: req.params.id })
        .then(oneSingleMeal => {
            res.json(oneSingleMeal)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}
 

module.exports.createNewMeal = (req, res) => {
    Meal.create(req.body)
        .then(newlyCreatedMeal => {
            res.json(newlyCreatedMeal)
        })
        .catch((err) => {
            res.status(400).json(err) 
        });}
 

module.exports.updateExistingMeal = (req, res) => {
    Meal.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedMeal => {
            res.json(updatedMeal)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}
 
        
module.exports.deleteAnExistingMeal = (req, res) => {
    Meal.deleteOne({ _id: req.params.id })
        .then(deletedMeal => {
            res.json(deletedMeal)
        })
        .catch((err) => {
             res.status(400).json(err) 
        });}


    
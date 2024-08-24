const express = require('express')
const mongoose = require("mongoose");
const user = require('../models/usermodel')
const app = express()

const router = express.Router();


router.post('/', async (req, res) => {
    const { name, email, age } = req.body

    try {
        const userAdd = await user.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).json(userAdd)
    }

    catch (error) {
        res.status(400).json(error.message)
    }
});




router.get('/', async (req, res) => {

    try {
        const show = await user.find()
        res.status(200).json(show)
    } catch (error) {
        res.status(400).json(error.message)
    }
});


router.get('/:id', async (req, res) => {

    try {
        const showOne = await user.findById({ _id: req.params.id })
        res.status(200).json(showOne)
    } catch (error) {
        res.status(400).json(error.message)
    }
});







router.patch('/:id', async (req, res) => {
    const { name, email, age } = req.body
    const { id } = req.params
    try {
        const UpdateOne = await user.findByIdAndUpdate({ _id: id }, { name:name, email:email, age:age }, { new: true })
        res.status(200).json(UpdateOne)
    } catch (error) {
        res.status(400).json(error.message)
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteOne = await user.findByIdAndDelete({ _id: id})
        res.status(200).json(deleteOne)
    } catch (error) {
        res.status(400).json(error.message)
    }
});


module.exports = router;
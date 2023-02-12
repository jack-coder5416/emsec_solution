
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Task } = require('../models/task');


// All Tasks
router.get('/api/task', (req, res) => {
    Task.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});


// Only Single Task 

router.get('/api/task/:id', (req, res) => {
    Task.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});



// Save Task
router.post('/api/task/add', (req, res) => {
    const emp = new Task({
        Taskname: req.body.Taskname,
        is_completed: req.body.is_completed,
        end_date: req.body.end_date
    });
    emp.save((err, data) => {
        if(!err) {
           
            res.status(200).json({code: 200, message: 'Task Added Successfully', addTask: data})
        } else {
           console.log(err);
        }
    });
});



// Update Task

router.put('/api/task/update/:id', (req, res) => {


    const emp = {
        Taskname: req.body.Taskname,
        end_date: req.body.end_date
    };
    Task.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Task Updated Successfully', updateTask: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Task
router.delete('/api/task/:id', (req, res) => {

    Task.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
           
            res.status(200).json({code: 200, message: 'Task deleted', deleteTask: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
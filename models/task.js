let mongoose = require('mongoose');



// TO-DO Schema
const Task = mongoose.model('Task', { // //
    Taskname: {//
        type: String,
        require:true
    }, 
    is_completed: {//
        type:String,//
        require:true
    },
    end_date: {//
        type:String,
        require:true
    }
});



module.exports = {Task}//
var User = require('../models/User');
var csv = require ('csvtojson');
const importUser = async()=>
{
    try{
         
        var userData=[];

        csv()
        .fromFile(req.fromFile.path)
        .then(async(response)=> {
            
            for(var x=0; x<response.length; x++)
            {
                userData.push({
                    Taskname:response[x].TaskName, //
                    is_completed: response[x].TaskComplete,//
                    end_date: response[x].EndDate,//
                })  ;     
            
            }

            await User.insertMany(userData);
        })



        res.send({status:200, success: true , msg:'CSV Imported'});


    } catch(error){

        res.send({status:400, success:false, msg:error.message});
    }
}
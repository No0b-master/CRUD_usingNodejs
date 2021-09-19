const { request } = require("express");
const express = require("express");
const { id } = require("monk");
const router = express.Router();

const {Employee} = require("../models/employee")



router.get('/api/employees',(req,res)=>{
    Employee.find({},(err,data) =>{
     if(!err){
         res.send(data)
     }
     else{
         console.log(err);
     }
    }) ;
});


router.post('/api/employees/add',(req,res) =>{
 const emp = new Employee({
        name : req.body.name,
        email :req.body.email,
        salary :req.body.salary
 });
emp.save((err,data) => {
    res.status(200).json({code:200, message:"Employee added succesfullt ahmad !!!" , addEmployee:data})
})
}) ;

router.get('/api/employee/:id' ,(req,res) =>{
    Employee.findById(req.params.id , (err,data) => {
        if(!err){
            res.send(data)
            console.log(data)
        }
        else{
            console.log(err)
        }
    })
} );

router.put('/api/employee/edit/:id' ,(req,res) =>{
 const emp = new Employee({        
        name:req.body.name,
        email:req.body.email,
        salary:req.body.salary
    });
    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, (err,data) => {
        if(!err){
             res.status(200).json({code:200,message:"Employee updated successfully ahmad!!! ",
            updateEmployee:data
            })
            console.log(data);
           }
        else{
            console.log(err);
}
    })
});

router.delete('/api/employee/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err){
            res.status(200).json({code:200,message:"Employee deleted succefully",
        deletedEmployee:data
        })
        }
        else{
            console.log(err);
        }
    })
})

module.exports = router;

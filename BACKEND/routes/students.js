const router = require("express").Router();

let Student = require("../models/Student");

http://localhost:8070/student/add

router.route("/add").post((req, res) => {


const name=req.body.name;

const age= Number(req.body.age);

const gender=req.body.gender;

const newStudent = new Student({

    name,
    age,
    gender


});

    newStudent.save.then(()=>{

        res.json("Student Added")

    }).catch((err)=>{


        console.log(err);

    })

})

//http:localhost:8070/student/ - fetch all student data

//fetch student using get method
    router.route("/").get((req,res)=>{


    Student.find.save.then((students)=>{

        res.json(students)

    }).catch((err)=>{

        console.log(err);

    })

})


//http:localhost:8070/student/update/ - only for update


router.route("/update/:id").put(async (req, res)=>{

let userId=req.params.id;

//Update function with destructure method 
const{name,age,gender} = req.body;

const updateStudent= {

    name,
    age,
    gender
}

const update = await Student.findByIdAndUpdate(userId, updateStudent)
.then(()=>{

//request success and set the status user updated
    res.status(200).send({status:"User updated", user: update});

    }).catch((err)=>{

        console.log(err);
        
        res.status(500).send({status: "Error of updating data"});
    })

});

//function for delete a student
router.route("/delete/:id").delete(async(req, res) => {

let userId = req.params.id;

await Student.findByIdAndDelete(userId).

then(()=>{

res.status(200).send({status: "User deleted"});

    }).catch((err) => {

    console.log(err.message);
        
    res.status(500).send({status: "Error of deleting data"});
  })

})

//function for fetch data of a single student
router.route("/get/:id").get(async (req,res) => {
    
    let userId=req.params.id;

    const user=await Student.findById(userId)
    
    .then(()=>{

        res.status(200).send({status: "User fetched", user: user})

    .catch((err)=>{

        console.log(err.message);
        
        res.status(500).send({status: "Error of fetching data"});
    })

    })
})


module.exports = router;


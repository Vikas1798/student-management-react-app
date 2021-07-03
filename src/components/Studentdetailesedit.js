import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Studentdetailsedit = () => {
  let history = useHistory(); //used for push rout from one page to another page
  const { id } = useParams(); // used to delete the perticular selected student data with id

  const [students, setStudents] = useState({
    name: "",
    dateOfBirth: "",
    age: "",
    gender: "",
  });

  const { name, dateOfBirth, age, gender } = students;

  const onInputChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });

    // age input field validation
  // Get the value of the input field with id="number"
  let age = document.getElementById("number").value;
  // If age is Not a Number or less than 8

  if (isNaN(age) || age < 8) {
   
    document.getElementById("demo").innerText =  "Input is not valid.Please enter >8 value";
   document.getElementById("demo").style.color="red";
  } else {
    document.getElementById("demo").innerText =  "Input is valid";
    document.getElementById("demo").style.color="green";
  }
 

  //name input field validation
  let name = document.getElementById("name").value;
   if(name === ""){
   document.getElementById("demoname").innerText = "please enter you name ";
   document.getElementById("demoname").style.color="red";
   }else {
    document.getElementById("demoname").innerText = "Input OK,it is valid";
    document.getElementById("demoname").style.color="green";
    }
   
   
  //date of birth input field validation
   let dob = document.getElementById("dob").value;
   if(dob === ""){
    
    document.getElementById("demodob").innerText = "please enter DOB in the form eg: 17,may,1998";
   document.getElementById("demodob").style.color="red";
   }else {
    document.getElementById("demodob").innerText = "Input OK,it is valid";
    document.getElementById("demodob").style.color="green";
  }
   
  //gender input field validation
  let gender = document.getElementById("gender").value;
  if( !isNaN(gender) || gender === ""){
   
   document.getElementById("demogender").innerText = "please enter your valid gender";
  document.getElementById("demogender").style.color="red";
  }else {
   document.getElementById("demogender").innerText = "it is valid";
   document.getElementById("demogender").style.color="green";
 }
  };

  useEffect(() => {
    loadData();
  }, []);

  // data should be displayed on edit page (no empty input fields) to edit and update the data
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/students/${id}`, students);
    history.push("/"); //onclick upadate and save button .as soon as it will route to home page
  };

  // again load the data
  const loadData = async () => {
    const result = await axios.get(`http://localhost:8000/students/${id}`);
    setStudents(result.data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <h1> Edit Student Details student</h1>
            <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <lable>Name:</lable>
                <input
                id="name"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
                 <p id="demoname"></p>
                {/* age lable and input field with age validation */}
                <lable>Age</lable>
                <input
                 
                  id="number"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="enter your age"
                  name="age"
                  value={age}
                  onChange={(e) => onInputChange(e)}
                />
                 <p id="demo" ></p>

                <lable>DOB:</lable>
                <input
                 id="dob"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your date of birth"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => onInputChange(e)}
                />
                 <p id="demodob"></p>

                <lable>Gender</lable>
                <input
                id="gender"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="select your gender Male,Female,others"
                  name="gender"
                  value={gender}
                  onChange={(e) => onInputChange(e)}
                />
                 <p id="demogender"></p>
                <br />
                {/* update and save button */}
                <button className="btn btn-warning"> Update and Save </button>
              </div>
            </form>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Studentdetailsedit;

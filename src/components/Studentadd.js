import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Studentadd = () => {
  let history = useHistory();

  // creating a state to hold complete input value in a single state
  const [students, setStudents] = useState({
    name: "",
    dateOfBirth: "",
    age: "",
    gender: "",
  });
  // destructuring
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

    // post the data to home page (table)  after submiting the form 
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/students", students);
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <h1> Add student</h1>
            {/* form with name, age,gender and date of birth */}
            <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                {/* name input field */}
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
                <br />

                  {/* age input field */}
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
                <p id="demo"></p>
                <br />
                  {/* date of birth input field */}
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
                <br />
                  {/*gender input field */}

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
                {/* form submitting button */}
                <button className="btn btn-secondary"> Add New student</button>
              </div>
            </form>
          </div>

          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Studentadd;

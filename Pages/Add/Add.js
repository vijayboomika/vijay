import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Add.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Add() {


  const [addata, setadData]=useState( {
    name :"",
    mobile :"",
    email :"",
    password :"",

  });
   const{name,mobile,email,password}=addata;

    const setInputValue=(e)=>{
      const {name, value}=e.target;
      setadData({...addata,[name]:value})
    }

    // console.log(addata);
    const submitUserData=async(e)=>{

      e.preventDefault();


      if(name==="")
        {
          toast.error("Enter your name!");
        } else if(mobile===""){
          toast.error("Enter your mobile!");
        } else if(email===""){
          toast.error("Enter your email!");
        } else if(password===""){
          toast.error("Enter your pwd!");
        }
        else{
          await axios.post("http://localhost/vijay/add.php", addata);
          toast.success("User added successfully");
        }
    };
  
  return (
    <div className='addpg'>
        <Container>
      <Row>
        <Col>
        <Card>
          <Card.Body>
            <h1 className="text-center">Add Users</h1>
            <div className="row">
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" onChange={setInputValue} />
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Mobile</label>
                <input type="text" name="mobile" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile" onChange={setInputValue} />
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full email" onChange={setInputValue} />
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" onChange={setInputValue} />
              </div>
            </div>
            <div className="row">
              <div className="col mt-2 text-center">
                <button type="button" className="btn btn-primary " onClick={submitUserData}>Submit</button>
                <a href="/" className="btn btn-danger ms-2">Back</a>
              </div>
            </div>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    <ToastContainer position="top-center"/>
    </div>
  )
}

export default Add;
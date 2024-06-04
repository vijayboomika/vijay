import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";

function Edit() {

  let history = useNavigate();

  const { id} = useParams();

  const [user, setUser]= useState({
    name :"",
    mobile :"",
    email :"",
    password :"",

  });
  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };


  useEffect (() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost/vijay/update.php?id=${id}`, user); 
    alert ("User Updated Successfully");
    toast.success("User updated successfully");
    history("/");
  };


  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost/vijay/details.php?id=${id}`
    );
    setUser(result.data[0]);
    console.log(result.data[0]);
  };


  return (
    <div>
      <Container>
      <Row>
        <Col>
        <Card>
          <Card.Body>
            <h1 className="text-center">Update Users</h1>
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" value={user.name} onChange={(e) => onInputChange(e)} />
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Mobile</label>
                <input type="text" name="mobile" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mobile" value={user.mobile} onChange={(e) => onInputChange(e)} />
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full email"  value={user.email} onChange={(e) => onInputChange(e)}/>
              </div>
              <div className="col-sm-6">
              <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password"  value={user.password} onChange={(e) => onInputChange(e)}/>
              </div>
            </div>
            <div className="row">
              <div className="col mt-2 text-center">
                <button  className="btn btn-danger " >Update</button>
                <a href="/" className="btn btn-warning ms-2">Back</a>
              </div>
            </div>
            </form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    <ToastContainer position="top-center"/>
    </div>
  )
}

export default Edit;
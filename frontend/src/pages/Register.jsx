import React, { useState } from 'react'
import '../styles/register.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link} from 'react-router-dom';
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'


export default function Register() {

  const [credentials,setCredentials]=useState({
    username:undefined,
   email:undefined,
   passwords:undefined,
})

  const handleChange = e => {
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))

};

const handleClick = e => {
  e.preventDefault();
  
};

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
             <div className="register__container d-flex justify-content-between">
              <div className="register__img">
                <img src={registerImg} alt="" />
              </div>
              <div className="register__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type='text' placeholder='Username' required id='username' onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='Email' required id='email' onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                  </FormGroup>
                  <Button className='btn secondory__btn auth__btn' type='submit'>
                   Create Account
                  </Button>

                </Form>
                <p>Already have an account? <Link to='/login'>Login </Link></p>
              </div>
             </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React from 'react'
import "./newsletter.css"
import { Container,Row,Col } from 'reactstrap'
import femaleTourist from '../assets/images/female-tourist.png'

const Newsletter = () => {
  return (
   <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful travelling information</h2>
                <div className="newsletter__input">
                    <input type='email' placeholder='Email address'/>
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsum quasi obcaecati aperiam qui nihil.</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={femaleTourist} alt="" />
            </div>
            </Col>
            
        </Row>
    </Container>
   </section>
  )
}

export default Newsletter
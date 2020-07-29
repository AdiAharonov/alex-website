import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Button, Col } from 'react-bootstrap';

export function Contact() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    
    return (
        <div className="contact main-container">
            <h1>נדאג לחזור אליכם במהרה</h1>
            <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>שם פרטי</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="שם פרטי"
          />
          <Form.Control.Feedback>מצויין</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
            
        <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>שם משפחה</Form.Label>
          <Form.Control
            type="text"
            placeholder="שם משפחה"
          />
          <Form.Control.Feedback>מצויין</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>אי-מייל</Form.Label>
          <Form.Control type="text" placeholder="example@gmail.com" required />
          <Form.Control.Feedback type="invalid">
            כתוב בבקשה כתובה אי-מייל נכונה
          </Form.Control.Feedback>
          
        </Form.Group>
        </Form.Row>
            
        <Form.Row>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>טלפון</Form.Label>
          <Form.Control type="text" placeholder="000-0000000" required />
          <Form.Control.Feedback type="invalid">
            כתוב בבקשה מספר פלאפון נכון
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          label="שלח לי הטבות ומבצעים למייל"
        />
      </Form.Group>
      <Button type="submit" variant="danger">שלח טופס</Button>
    </Form>
            </div>

            

        </div>
    )
}

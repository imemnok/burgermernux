import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { login } from "../actions/session"

const mapStateToProps = ({ errors }) => ({
    errors
  });

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
  });

const Login = ({ login }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const loginUser = {
            "email": email,
            "password": password
        }
        console.log(loginUser)
        login(loginUser)  
    }

    return (
        <div className="more-body">
        <Form onSubmit={handleSubmit}>
            <Form.Group control="formadditem">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text"  value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
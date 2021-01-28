import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [role, setRole] = useState("Customer")


    const handleSubmit = (evt) => {
        evt.preventDefault()
        const user = {
            "name": name,
            "email": email,
            "password": password,
            "password2": password2,
            "role": role
        }
        console.log(user)
        fetch("/users/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });

        
    }

    return (
        <div className="more-body">
        <Form onSubmit={handleSubmit}>
            <Form.Group control="formadditem">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={e => setPassword2(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
    )
}

// Register.propTypes = {
//     registerUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
//   };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser }
  )(Register);
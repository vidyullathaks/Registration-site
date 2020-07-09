import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/register.css';


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

class Register extends React.Component {
    state = {
        formData1 : "",
        formData2 : ""
    }  

    handleFormData1 = (name) => {
        const name1 = name.target.value
        this.setState({formData1 : name1})

    }
    handleFormData2 = (uid) => {
        const uid1 = uid.target.value
        this.setState({formData2 : uid1})

    }

    onPressBtn = () => {
        console.log(this.state)

        const send_obj = {
            "name" : this.state.formData1,
            "id" : this.state.formData2
        }

        postData('http://127.0.0.1:8000/post',send_obj)
        .then(dat => {
            console.log(dat); // JSON data parsed by `data.json()` call
        });
        console.log(this.send_obj)
    }

    render(){

        return (
            <div className="register">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter your name" onChange = {this.handleFormData1}/>
                    <Form.Text className="text-muted">
                    We'll never share your name with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>ID</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter your ID" onChange = {this.handleFormData2}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={this.onPressBtn}>
                    Submit
                </Button>
                </Form>

            </div>
        )
    }

}

export default Register;

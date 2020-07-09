import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/display.css';

class Display extends React.Component {

    state = {
        uid : "",
        display_data : [""]
    }  

    handleFormData = (data) => {
        const buffer_data = data.target.value
        this.setState({uid : buffer_data})
    }

render() {
    
    const onPressBtn = () => {

        console.log("btn pressed")

        fetch("http://127.0.0.1:8000/show_db?id="+(this.state.uid))
        .then((resp) => resp.json()) // Transform the data into json
        .then((jsonData) => {
            console.log("data ::", jsonData)  
            this.setState({display_data: "The detail name, id are : " + jsonData.detail})
        })       
    }

    return (
    <div className="display">
    <Form>
        <Form.Group controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter your ID" onChange = {this.handleFormData}/>
        </Form.Group>       
    </Form>

    <Button variant="primary" type="submit" onClick={onPressBtn}>Display</Button>
    <p className="fetchedData" > {this.state.display_data} </p>
    </div>
        )
    }
}

export default Display;
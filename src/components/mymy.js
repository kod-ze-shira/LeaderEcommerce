import React from 'react'
import { Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions } from "../redux/action";

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function Mymy(props) {
    return (
        <div>
            <h1>welcome!!!!!</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Mymy);


/////////////////////////////



import '../App.css'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

export default function Contact(){
    return(
        <div>
            <h1>Contact Form</h1>

            <div>
            <Form.Control type="text" placeholder="Name" />
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="outline-secondary">Send</Button>
            </div>
        </div>
    );
}
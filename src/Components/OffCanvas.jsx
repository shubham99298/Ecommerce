import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.css'

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button style={{backgroundColor:"orangered ", marginTop:"-15px"}} variant="primary" onClick={handleShow}>
        Account
      </Button>

      <Offcanvas   show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
         
          <Button style={{backgroundColor:"orangered ", marginTop:"10px"}}>Realme store</Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <main >
        <h1 >Signup Form</h1>

        <form >
             <div>
                <label>UserName:</label>
                <input type="text"  required placeholder='Abc' />

             </div>

             <div>
                <label>Password:</label>
                <input type="password"  required placeholder='Abc123'/>

             </div>
    
             {/* <button className='btn1' type='submit' >Login</button>
             
             <button  className='btn1' type='submit'>Signup</button> */}
             <Button className='btn1' style={{backgroundColor:"orangered ", marginLeft:"30px"}}>Signup</Button>
             <Button  className='btn1' style={{backgroundColor:"orangered ", marginLeft:"-8px"}}>Login</Button>


        </form>
       </main>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvas;
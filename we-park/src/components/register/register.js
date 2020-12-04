import React from 'react';
import './register.css';
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom"

import logo from "../../assets/logo_tp.png"
const Register = (props) => {
    let history = useHistory();

    return (
        <div>
            <div className='RegisterForm'>
                <div>
                    <img className="logo__tp" src={logo} />

                </div>
                <div className="RegisterBox">
                    <form >
                        <div>
                            <label ><b>Fisrt Name:</b></label>
                            <br></br>
                            <input type="text" id="Fname" placeholder="Enter Fist Name" name="Fname" required />
                        </div>
                        <div>
                            <label ><b>Last Name:</b></label>
                            <br></br>
                            <input type="text" id="Lname" placeholder="Enter Last Name" name="Lname" required />
                        </div>
                        <div>
                            <label ><b>Registration plate </b></label>
                            <br></br>
                            <input type="number" id="RegistrationPlate" pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}" placeholder="Enter Registration plate" name="RegistrationPlate" required />
                        </div>
                        <div>
                            <label  ><b>Email:</b></label>
                            <br></br>
                            <input type="text" id="UserMail" placeholder="Enter email" name="umail" required />
                        </div>
                        <div>
                            <label  ><b>Phone number:</b></label>
                            <br></br>
                            <input type="number" id="PhNumber"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter Phone number" name="PhNumber" required />
                        </div>
                        <div>
                            <label  ><b>Password:</b></label>
                            <br></br>
                            <input type="Password" id="Password"   placeholder="Password" name="Password" required />
                        </div>
                        <div>
                        <label  ><b>Credit card Number:</b></label>
                        <br></br>
                        <input type="number" id="Ccard"   placeholder="Enter Credit Card Number" name="Ccard" required />
                         </div> 
                         
                         <div>
                             <br></br>
                         <label  ><b>CVC:</b></label>
                        
              <input  name="CVC"  type="number" placeholder="CVC"  style={{width:50}} />
           
            
            <label  ><b>EXPIRE DATE:</b></label>
                         
              <input name="expiry"  type="text" pattern="\d\d/\d\d" placeholder="Valid Thru" style={{width:50}}/>
              </div>
              
                        <br></br>
                        <input className="button" type="submit" value="Register" onClick={(event) => { addUser(event) }}></input>
                        <button className="button" type="" value="Login" onClick={() => {
                            history.push('/Login')
                        }}>Login</button>

                    </form>
                </div>

            </div>
        </div>

    );

    async function addUser(e) {
        e.preventDefault();
        const UserName = document.getElementById("UserName").value;
        const UserMail = document.getElementById("UserMail").value;
        const Password = document.getElementById("Password").value;
        const Ccard = document.getElementById("Ccard").value;

        // console.log(UserName, UserMail, Password)
        await fetch("/AddUser", {
            method: "PUT",
            body: JSON.stringify({
                UserName: UserName,
                UserMail: UserMail,
                Password: Password,
                Ccard:Ccard
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
            .then(data => {
                console.log('SuccessRRRR:', data[0].success);
                if (data[0].success) {//true

                    history.push('/Login');

                }
                else {
                    alert("User Exist in DB....");
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default Register;
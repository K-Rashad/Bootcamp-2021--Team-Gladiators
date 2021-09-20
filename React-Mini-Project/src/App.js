import React, { useState, useEffect } from 'react'
import './App.css';
import {APIService} from './api.service'



function apiCall(e){

  e.preventDefault();
  console.log(e.target.uname.value);
  console.log(e.target.amount.value);
  let data={username:e.target.uname.value,amount:e.target.amount.value}
  APIService.makeWithdraw(data).then((response)=>{
    if (response.status === "SUCCESS") {
              document.getElementById("etBalance").value = `Rs. ${response.user.balance}`;
              document.getElementById("sectionWithdraw").style.display="none"
              document.getElementById("sectionBalance").style.display="block"
              
              
            } else {
              document.getElementById("sectionWithdraw").style.display="none"
              document.getElementById("cs").style.display="block"
             
            }
        
      })
}
function App() {
    
  // useEffect(() => {
  //   APIService.makeWithdraw().then((response)=>{
  //     console.log(response);
  //   })

  // }, [])
  
  return (
    
  <>
 
    <div className="container" id="sectionWithdraw">
      <h2>Treasury Bank ATM</h2>
    <form onSubmit={apiCall}>
      <label for="uname">User Name</label>

      <input type="text" id="etUsername" name="uname" placeholder="User Name" />

      <br /><br />
      <label for="amount">Withdrawal Amount</label>
      <input type="number" id="etAmount" name="amount" placeholder="Withdrawal Amount" autocomplete="off" />
      <br /><br />
      <button id="btnWithdraw" type="submit" >WITHDRAW</button>
    </form>
  
      <div className="bottom_container">
        <h5>Contact Us</h5>
      </div>
     </div> 


       
      <div className="container" id="sectionBalance"  >
        <h2>Treasury Bank ATM</h2><br />
        <h3>Withdrawal Successful</h3>
        <br />
        <label for="balance" className ="label">Savings Balance</label>
        <input type ="text" id="etBalance" name="balance" disabled /><br />
        <br />
        <br />
        <br />

        <h3>Thank You For Banking With Us</h3>
        <div className ="bottom_container">
        <h5>Contact Us</h5>
        </div>
      </div>
      <div className="container" id="cs"  >
        <h2>Treasury Bank ATM</h2>

        <h3>Invalid credentials or insufficient balance</h3>


        <div className="bottom_container">
          <h5>Contact Us</h5>
        </div>
      </div>

    </>







  )
}

export default App;

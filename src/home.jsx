import './home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  
const navigate=useNavigate();
  
  function signin(){
    localStorage.setItem(
      prompt("Enter your Username"),
      prompt("Set Your Password")
    )
  console.log(localStorage)  
  
  }

  function login(){

    navigate("/login")
    
  }  
  
  return (
    <>    
      <div className="firsthead ">
        Welcome to Our Website !!!
      </div>
      <div className="login">
        <button onClick={login} className="loginbox">Log In </button>
      </div>
      
      <h1 className="signin">Not a user !</h1>
      <div className="signin">
          <button onClick={signin} className="signinbox"> Sign In</button>
      </div> 
    </>
  )

  }  

export default Home
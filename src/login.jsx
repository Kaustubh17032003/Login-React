import "./login.css"
import { useState,useRef } from "react"
import { useNavigate } from "react-router-dom";



function LogIn(){
    const navigate=useNavigate();
    
    let [user,setUser] = useState();
    let [show_user_btn,setshow_user_btn]= useState(true)
    let [showSuccess,setshowSuccess] = useState(false);
    let [showcontent,setShowcontent] = useState(true);

    let [userFailure,setUserFailure] = useState(false);
    let [passFailure,setPassFailure] = useState(false);
    
    let username=useRef(null);
    let password=useRef(null);
    let user_btn=useRef();
    
    
    

    function pass_entry(){

        if (password.current.value==localStorage.getItem(user)){
        setshowSuccess(true)
        setShowcontent(false)
        setTimeout(() => {
            navigate(-1)
        }, 3000);
        } else {
        setPassFailure(true)
        }

    }

    function user_entry(){
        
        if (localStorage.getItem(username.current.value)){
            setUser(username.current.value)
            username.current.disabled = 'true'
            setshow_user_btn(false)
            setUserFailure(false)
            
        }else {
            setUserFailure(true)
        }

        // if (Object.keys(data).includes(username.current.value)){
        //     setUser(username.current.value)
        //     username.current.disabled = 'true'
        //     setshow_user_btn(false)
        //     setUserFailure(false)
            
        // }else {
        //     setUserFailure(true)
        // }
    }

    return(
        <>
        {/* Heading */}
        <div className="title ">
        Login Page 
        </div>
        {
            showcontent &&
        (<div className="form">
            {/* Username Box */}
            <div className="username_box">
                <label style={{fontSize:18}}>Username :</label>
                <input ref={username} className="username" type="text"  ></input>
                {
                show_user_btn && (<button ref={user_btn} onClick={user_entry} className="user_entry" >Enter</button>)
                }                
            </div>
            <div>
                {
                userFailure && (<h3 style={{color:"red"}} className="login_text"> Can't find Username </h3>)
                }
            </div>
            {/* onChangeCapture={handleUser} */}
            {/* Password Box */}
            <div className="password_box ">
                <label style={{fontSize:18}}>Password : </label>
                <input ref={password} className="password" type="password" ></input>
                <button onClick={pass_entry} className="pass_entry" >Enter</button>
            </div>
            <div>
                {
                passFailure && (<h3 style={{color:"red"}} className="login_text"> Please Enter valid password </h3>)
                }
            </div>
        </div>
        )}        
        {/* Success Message */}
        {
        showSuccess && (
            <h1 className="login_text">Dear {user} ,  You've Logged In Succesfully </h1>
            )
        }        
        </>
    )
}

export default LogIn
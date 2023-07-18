import React, { useRef,useState,useEffect} from 'react';
import './Login.css'
import { Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import axios from 'axios';


function Login() {
     
    const [{ basket,user }, dispatch] = useStateValue();
    const [data,setdata]=useState();
    const [userlist,setuserList]=useState()
    var rest_api=process.env.REACT_APP_API;
    console.log(rest_api)
    
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const navigate=useNavigate();

    useEffect(()=>{
          axios.get(`${rest_api}`)
          .then(res=>{
           setuserList(res.data)
          }).catch(err => console.log(err));
       },[])

       useEffect(()=>{
        if(data){
          console.log("ok")
           axios.post(`${rest_api}`,data)
              .then(res =>{
                 alert('success')
                 navigate('/')
              }).catch(err => console.log(err));
          }
      
       },[data])
    
    const register = (e) => {
      e.preventDefault();
      var data1={};
      if(emailRef.current.value&&passwordRef.current.value){
      data1.Email=emailRef.current.value;
      data1.Password=passwordRef.current.value;
      }else{
            alert("please enter Email and Password")
      }
        
      const userEmail =  userlist.find((user) => {
              return user.Email === emailRef.current.value;
              })
      if(userEmail){
            alert('Please "sign in" you already user');
      }else{
            setdata(data1)
            dispatch({
            type: "SET_USER",
            user: emailRef.current.value
            });
            reset();
            }
        }
        const reset=()=>{
          emailRef.current.value='';
          passwordRef.current.value='';
         }
    

    const validateUser = (userInfo) => {
        const userData =  userlist.filter((user) => {
            return user.Email === userInfo.Email
                })
       //console.log(userData)
            if(userData.length>=1){
             // console.log(userData[0].Password)
              if(userData[0].Password === userInfo.Password){
                  console.log('test');
                  dispatch({
                    type: "SET_USER",
                    user: userInfo.Email
                     })
                     navigate('/');
                }else{
                       alert("Password doesnt match");
                     }
            }else{
              alert("User not found please rigister");
            }
          }
              

  const signIn = (e) => {
    let userInfo = {}
    e.preventDefault();
    let email= emailRef.current.value;
    let password = passwordRef.current.value;
    // console.log(userInfo); //make an api call and save data 
    userInfo.Email=email
    userInfo.Password=password

    if(email&&password){
      validateUser(userInfo);
    }else{
      alert("Pease enter Email and Password")
    }
  }
  const setlogout=()=>{
    dispatch({
        type: "SET_USER",
        user: ""
         })
         navigate('/');
  }
    return (
        <div className='login'>
            <Link to='/login'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt="Login-ogo"
                />
            </Link>
        {!user?
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' name="email" ref={emailRef} />

                    <h5>Password</h5>
                    <input type='current-password' name="password" ref={passwordRef} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>:
            <div>
            <h1 className='user'>Hello! {user}</h1>
            <button className='logout' onClick={setlogout}>Logout</button>
            </div>
}
        </div>
    )
}

export default Login

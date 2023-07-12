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

    //var user=0;
    const emailRef =  useRef();
    const passwordRef =  useRef();
    const navigate=useNavigate();

    useEffect(()=>{
          axios.get(`${rest_api}`)
          .then(res=>{
            console.log(res.data)
           setuserList(res.data)
          }).catch(err => console.log(err));
       },[])

    useEffect(()=>{
     if(data){
       axios.post(`${rest_api}`,data)
       .then(res=>{
        alert('success')
       }).catch(err => console.log(err));
    }
    },[data])
    
    // const saveUser = (user) => {
    //     const userData = JSON.parse(localStorage.getItem('userData'));
    //     //console.log('userData', userData.length);
    //     if(userData){
    //         userData.push(user)
    //         localStorage.setItem('userData', JSON.stringify(userData))
    //     }else{
    //         let userList = []
    //         userList.push(user)
    //         localStorage.setItem('userData', JSON.stringify(userList))
    //     }
    // }
    const register = (e) => {
        e.preventDefault();
        let  email=emailRef.current.value;
        let password=passwordRef.current.value;
        var userInfo = {}
        
        if(email&&password){
          userInfo.Email = email;
          userInfo.Password = password;
        }else{
            alert("please enter Email and Password")
        }
        
        const userEmail =  userlist.find((user) => {
              return user.Email === email
              })
        console.log(userEmail)
        if(userEmail){
            alert('Please "sign in" you already user');
        }else{
            setdata(userInfo)
            dispatch({
            type: "SET_USER",
            user: email
            });
            navigate('/')
            }
        }

    const validateUser = (userInfo) => {
        const userData =  userlist.filter((user) => {
            return user.Email === userInfo.Email
                })
        console.log(userData)
            if(userData){
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

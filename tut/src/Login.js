import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [auth,setAuth]=useState(false);
  const [data,setData]=useState({
    email:'',password:''
  })
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=async (e)=>{
    e.preventDefault();
    console.log(data);
    await axios.post('https://jobsa-deply.onrender.com/login',data).then(res=>{localStorage.setItem('token',res.data.token);setAuth(true)});

  }
  if(auth){
    return <Redirect to='/dashboard' />
  }
  return (
    <>





<div id="contact" class="form-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <div class="section-title">Login Form</div>
                            <h2>Submit the form to login</h2>
                            <p>Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum. Sed ut enim non nunc fermentum dictum et sit amet erat. Maecenas</p>
                          
                        </div> 
                    </div> 
                    <div class="col-lg-6">
                       
                        <form  onSubmit={submitHandler}>
                          
                            <div class="form-group">
                                <input type="email" class="form-control-input" name="email" placeholder="Email" onChange={changeHandler} required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control-input" name="password" placeholder="password" onChange={changeHandler}   required />
                            </div>
                          
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">Submit</button>
                            </div>
                            <p>Not Registered !! <a href="/register">Sign-Up</a></p>
                        </form>
                      
                    </div> 
                </div>
            </div> 
        </div>
    
    
    </>
    
  )
}

export default Login





    {/* <form  style={{padding:'15px',paddingRight:'60%'}}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p className="forgot-password">
          No Account <a href="/register">sign up?</a>
        </p>
        </div>
      
         
     
        
      </form> */}

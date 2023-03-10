import React,{useState} from 'react'
import axios from 'axios';

const Register = () => {
  const [data,setData]=useState({
    fullname:'',email:'',mobile:'',skill:'',password:'',confirmpassword:''
  })
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(data);
    await axios.post('https://jobsa-deply.onrender.com/register',data).then(res=>{console.log(res);alert('Registered Successfully')});


  }
  return (
    <>



<div id="contact" class="form-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <div class="section-title">SIGN UP</div>
                            <h2>Submit the form to sign-up</h2>
                            <p>Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum. Sed ut enim non nunc fermentum dictum et sit amet erat. Maecenas</p>
                          
                        </div> 
                    </div> 
                    <div class="col-lg-6">
                       
                        <form onSubmit={submitHandler}>
                            <div class="form-group">
                                <input type="text" class="form-control-input" name="fullname" onChange={changeHandler} placeholder="FullName" required />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control-input" name='email' onChange={changeHandler} placeholder="Email" required />
                            </div>
                            <div class="form-group">
                                <input type="number" class="form-control-input" name='mobile' onChange={changeHandler}placeholder="Mobile" required />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" name='skill'onChange={changeHandler} placeholder="Skills    **Please Provide skills by separation of Comma ( , )" required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control-input" name='password'onChange={changeHandler} placeholder="password" required />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control-input" name='confirmpassword'onChange={changeHandler} placeholder="confirm password" required />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">Submit</button>
                            </div>
                            <p>Already a User!! <a href="/login">login</a></p>
                        </form>
                      
                    </div> 
                </div>
            </div> 
        </div>
   
    
    </>
  )
}

export default Register






  {/* <form  style={{padding:'15px',paddingRight:'60%'}}>
        <h3>Sign Up</h3>
        <div className="mb-2">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
          />
        </div>
      
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-2">
          <label>Mobile</label>
          <input
            type="number"
            className="form-control"
            placeholder="mobile"
          />
        </div>
        <div className="mb-2">
          <label>Skills <p style={{color:'red',display:'inline'}}>*</p></label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
          />
         <p>Please Provide skills by separation of Comma ( , )</p> 
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <br/>
        <p className="forgot-password">
          Already registered <a href="/login">Log in?</a>
        </p>
      </form> */}

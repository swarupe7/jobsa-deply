import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const IndProfile = ({match}) => {
    const [rating,setRating]=useState(null);
    const [taskprovider,setTaskprovider]=useState(null);
    const submitHandler=async (e)=>{
        e.preventDefault();
       await axios.get('http://localhost:3050/myprofile',{headers:{'x-token':localStorage.getItem('token')}}).then(res=>{setTaskprovider(res.data.fullname)});

       let review={taskprovider,taskworker:match.params.id,rating};
        
        await axios.post('http://localhost:3050/addreview',review,{headers:{'x-token':localStorage.getItem('token')}}).then(res=>{alert('rating was submitted')});
    
      }
  return (
    <>
    
    
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div class="container">

              
              
                 <a class="navbar-brand logo-text" href="/">Jobsa</a> 

                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                       
                        
                        
                    </ul>

                    <span class="nav-item " style={{color:'green'}}>
                        <a class="btn-solid-sm" href="/dashboard">Dashboard</a>
                    </span>
                    <span class="nav-item">
                        <a class="btn-solid-sm" href="/login" onClick={()=>localStorage.removeItem('token')}> Logout</a>
                    </span>
                </div> 
            </div> 
        </nav>





        <div id="features" class="accordion-1">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <h2 class="h2-heading">{match.params.fullname}</h2>
                        <p class="h2-heading">{match.params.email}</p>
                         <p class="h2-heading">Skills:{match.params.skill}</p>
                   
                    
                   
                        
                    </div> 
                </div>
                </div>
                </div>
    




    
       
       

     

     
<div id="contact" class="form-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                           
                            <h2>Enter Your Review</h2>
                            <p>Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem. Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum. Sed ut enim non nunc fermentum dictum et sit amet erat. Maecenas</p>
                          
                        </div> 
                    </div> 
                    <div class="col-lg-6">
                       
                        <form onSubmit={submitHandler}>
                          
                            <div class="form-group">
                                <input type="text" name="rating" onChange={e=>setRating(e.target.value)}  class="form-control-input" placeholder="Enter rating out of 5" required />
                            </div>
                          
                          
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">Submit</button>
                            </div>
                         
                        </form>
                      
                    </div> 
                </div>
            </div> 
        </div>
       
    
    </>
  )
}

export default IndProfile;
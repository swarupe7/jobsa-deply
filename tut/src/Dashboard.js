import React,{useState,useEffect}from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
      const [datas,setDatas]=useState([]);
      useEffect(()=>{
        axios.get('https://jobsa-deply.onrender.com/allprofiles',{headers:{'x-token':localStorage.getItem('token')}}).then(res=>{setDatas(res.data);
        console.log(res.data);
    });
       
      },[]);



if(!localStorage.getItem('token')){
    return <Redirect to='/login'/>
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
                        <a class="btn-solid-sm" href="/myprofile">My Profile</a>
                    </span>
                    <span class="nav-item">
                        <a class="btn-solid-sm" href="/login" onClick={()=>localStorage.removeItem('token')}> Logout</a>
                    </span>

                </div> 
            </div> 
        </nav>



   
        <div class="cards-2 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h2-heading">Developer profiles </h2>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-lg-12">

                        {datas.length>=1 ? 
                        
                        datas.map(profile=>

                            <div class="card">
                            <img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
                            <div class="card-body">
                               
                                <div class="testimonial-author">{profile.fullname}</div>
                                <div class="testimonial-text">skills:{profile.skill}</div>
                                <div class="testimonial-text">ph:{profile.mobile}</div>

                                <p class="testimonial-text">{profile.email}</p>
                               
                                <span class="nav-item">
                        <Link class="btn-solid-sm" to={`/indProfile/${profile.fullname}/${profile.email}/${profile.skill}/${profile._id}`}>View Profile</Link>
                    </span>
                            </div>
                            <div class="gradient-floor red-to-blue"></div>
                        </div>
                      

                        )
                        
                        
                        :null}
                       

                        
                      
                      

                    </div> 
                </div>
            </div> 
        </div> 
   
   </>
  )
}

export default Dashboard;

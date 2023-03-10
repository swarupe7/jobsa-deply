import React,{useState,useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import axios from 'axios';
const Myprofile = () => {

    const [data,setData]=useState([]);
    const [review,setReview]=useState([]);
      useEffect(async()=>{
        await axios.get('https://jobsa-deply.onrender.com/myprofile',{headers:{'x-token':localStorage.getItem('token')}}).then(res=>{setData(res.data);
        console.log(res.data);
    });//for reviews on me
      
    await axios.get('https://jobsa-deply.onrender.com/myreview',{headers:{'x-token':localStorage.getItem('token')}}).then(res=>{setReview(res.data.myreview);
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
                        <a class="btn-solid-sm" href="/dashboard">Dashboard</a>
                    </span>
                    <span class="nav-item">
                        <a class="btn-solid-sm" href="/login"  onClick={()=>localStorage.removeItem('token')}> Logout</a>
                    </span>
                </div> 
            </div> 
        </nav>



        {data &&
        
        <div id="features" class="accordion-1">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <h2 class="h2-heading">{data.fullname}</h2>
                    <p class="h2-heading">{data.email}</p>
                    <p class="h2-heading">ph:{data.mobile}</p>
                    <p class="h2-heading">{data.skill}</p>
                    
                </div> 
            </div>
            </div>
            </div>

        }

       




    
       
                <div class="cards-2 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h2-heading">Ratings </h2>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-lg-12">

                       {review.length>=1 ? review.map(reviews=>

                       
                       
                          

                        <div class="card">
<img class="quotes" src="assets/images/quotes.svg" alt="alternative" />
<div class="card-body">
   
    <div class="testimonial-author">{reviews.taskprovider}</div>
    <div class="occupation">Rating:{reviews.rating}</div>
</div>
<div class="gradient-floor red-to-blue"></div>
</div>


                      
                      


                            
                             ):<p>No Review is added</p>} 
                      

                      

                    </div> 
                </div>
            </div> 
        </div> 
      


     

     
       
    </>
  )
}

export default Myprofile

import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import indProfile from './IndProfile';




const App = () => {
  return (
    <>
    
    
     <div className="App">
        <BrowserRouter>
        <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/login' exact component={Login} />
           <Route path='/register' exact component={Register} />
           <Route path='/Dashboard' exact component={Dashboard}/>
           <Route path='/Myprofile' exact component={Myprofile}/>
           <Route path='/indprofile/:fullname/:email/:skill/:id' exact component={indProfile}/>
          


        </Switch>
        
        
        </BrowserRouter>





    </div> 
    </>
  )
}

export default App
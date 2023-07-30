import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';
import ProjectList from './components/ProjectList';
import Header from './components/Header';
import CreateProject from './components/CreateProject';


function App() {
  return (
    <div className="main-app"> 
      <Router>
       
          
            <Header/>

              <div className="main-container">
                <Routes>
                    <Route path="/" exact element={<ProjectList />}/>
                    <Route path="/projects"  element={<ProjectList />}/>
                    <Route path="/addproject"  element={<CreateProject />}/>
                    <Route path="/editproject/:id"  element={<CreateProject />}/>
                    
                </Routes>  
                
              </div>

        
      </Router>
    </div>


      
  );
}

export default App;

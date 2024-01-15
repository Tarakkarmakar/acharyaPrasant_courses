import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Courses from './Pages/Courses/Courses';

function App() {

 
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    
  };
  const closeDrawer = () => {
   setIsDrawerOpen(false)
  };
  return (
    <div className=" font-sans">
      <Navbar toggleDrawer={toggleDrawer} closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen}/>
<Courses  />
    </div>
  );
}

export default App;

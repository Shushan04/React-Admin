import React from 'react';
import Login from './view/pages/login';
import Register from './view/pages/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {



  return (
    <div className="App">

      <BrowserRouter>
          <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
 
    </div>
  );
}


export default App;
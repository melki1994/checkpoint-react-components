import React from 'react';
import './App.css';
import FullName from './component/Profile/FullName';
import ProfilPhoto from './component/Profile/ProfilePhoto';
import Address from './component/Profile/Address';


function App() {
  return (
    <div className ='profile'>
      <FullName/>
      <div style = {{display:'flex'}}>
        <ProfilPhoto/>
        <Address/>
      </div>
    </div>
  );
}

export default App;

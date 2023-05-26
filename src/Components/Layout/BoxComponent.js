import React from 'react';
import './BoxComponent.css'; // Import your CSS file for styling
import shoppingCartIcon from './assets/shopping-cart.png';
const boxData = [
  { 
    icon: shoppingCartIcon,
   text: 'ORDER' ,
   number: 16
},
  {
    icon: shoppingCartIcon,
   text: 'SESSIONS' ,
   number: 463
},
  {
    icon: shoppingCartIcon,
  
  text: 'USERS',
  number: 17
 },
  { 
    icon: shoppingCartIcon, 
  text: 'RETURNS',
  number: 2
 },
  { 
    icon: shoppingCartIcon,
  
  text: 'COMMENTS',
  number: 5

}
];

const BoxComponent = () => {
  return (
    <div className='box-inner'>
      <div className='top-text'><p>lorem ipsum</p></div>
       
   
    <div className="box-container">
     
      {boxData.map((box, index) => (
        <div className="box" key={index}>
          <img className="box-icon" src={box.icon} alt="Box Icon" />
          <div className='box-content'>
          <p className="box-text">{box.text}</p>
          <p className="box-number">{box.number}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BoxComponent;

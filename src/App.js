
import './App.css';
import BoxComponent from './Components/Layout/BoxComponent';
import Sidebar from './Components/Layout/Sidebar';

import React from 'react';
import StatusBox from './Components/Layout/StatusBox';
import ChartComponent from './Components/Layout/ChartComponent';
import acorn  from './assets1/monitor.png';
import RightIcon from './Components/Layout/RightIcon';


const App = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: acorn,
      link: '/dashboard',
    },
    {
      label: 'Product',
      icon: acorn,
      dropdown: true,
      dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
      link: '/product',
    },
    {
      label: 'Orders',
      icon: acorn,
      dropdown: true,
      dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
      link: '/orders',
    },
    {
      label: 'Customers',
      icon: acorn,
      dropdown: true,
      dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
      link: '/customers',
    },
    {
      label: 'Storefront',
      icon: acorn,
      dropdown: true,
      dropdownOptions: ['Option 1', 'Option 2', 'Option 3'],
      link: '/storefront',
    },
    {
      label: 'Shipping',
      icon: acorn,
      link: '/shipping',
    },
    {
      label: 'Discount',
      icon: acorn,
      link: '/discount',
    },
    {
      label: 'Settings',
      icon: acorn,
      link: '/settings',
    },
  ];





  return (
    <div className='dashboard'>
      <div className='leftmenu'>
      <Sidebar menuItems={menuItems} />
      </div>
      <div className='right-sec container'>
        <div className='top-sec'> <BoxComponent></BoxComponent></div>
        <div className='bottom-sec'>
          <div className='bottom-left-sec'>
            <StatusBox/>
          </div>
          <div className='bottom-right-sec'>
            <ChartComponent/>
          </div>
        </div>
     
      </div>
     <div className='lastSec'>
      <RightIcon/>
     </div>
    </div>
  );
};

export default App;


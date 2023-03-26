import React from 'react';
import CHome from '../Components/CHome';
import Category from '../Components/Category'
import Deliver from '../Components/Deliver/Deliver';
import Restaurants from '../Components/Restaurants';
import Download from '../Components/Download'
import Client from '../Components/Client';
import Subscribe from '../Components/Subscribe';

function Home() {
  return (
    <div>
      <CHome />
      <Category />
      <Deliver />
      <Restaurants />
      <Download />
      <Client />
      <Subscribe />
    </div>
  )
}

export default Home
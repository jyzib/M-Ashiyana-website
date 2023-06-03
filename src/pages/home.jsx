import React from 'react';
import Herosection from './Herosection';
import OurMission from './ourMission';
import Donation from '../component/donation';
import Bar from './bar';

const home = () => {
  return (
    <>
      <Herosection/>
      <Bar/>
      <OurMission />
      <Donation/>
    </>
  )
}

export default home

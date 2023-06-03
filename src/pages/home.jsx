import React from 'react';
import Herosection from './Herosection';
import OurMission from './ourMission';
import Donation from '../component/donation';
import Bar from './bar';
import Joinus from './Joinus'

const home = () => {
  return (
    <>
      <Herosection/>
      <Bar/>
      <OurMission />
      <Joinus/>
      <Donation/>
    </>
  )
}

export default home

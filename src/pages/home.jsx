import React from 'react';
import Herosection from './Herosection';
import OurMission from './ourMission';
import Donation from '../component/donation';
import Bar from './bar';
import Joinus from './Joinus'
import OurCampaigns from './ourCampaigns'
import GetInTouch from './getInTouch'

const home = () => {
  return (
    <>
      <Herosection/>
      <Bar/>
      <OurMission />
      <Joinus/>
      <Donation/>
      <OurCampaigns/>
      <GetInTouch/>
    </>
  )
}

export default home

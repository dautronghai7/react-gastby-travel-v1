import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck}from 'react-icons/fa'

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        style={{ color: '#047bf1'}}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
      color='#f3a82e'
      />
    ),
    title: "1 Milion Trips Made",
    desc: "Over 1 million trips complated last year",
  },
  {
    icon: (
      <MdTimer
      color='#f34f2e'
      />
    ),
    title: "Faster support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
      color='#3af576'
      />
    ),
    title: "Best Deals",
    desc: "We offer the bes prices",
  },
];
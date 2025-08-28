import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeImg2 from'../components/HeroImg2'
import PricingCards from '../components/PricingCards'
import Work from '../components/work'
const Project = () => {
  return (
    <div>
     <Navbar/>
     <Footer/>
     <HomeImg2 heading="PROJECTS." text="Some of My Recent works" />
     <PricingCards/>
     <Work/>
    </div>
  )
}

export default Project

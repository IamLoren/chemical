import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import DealsList from '../../components/DealsList/DealsList'

const Homepage = () => {

  return (
<>
<Header/>
    <main>
        <section>
            <HeroSection/>
        </section>
        <DealsList/>
    </main>
</>
  )
}

export default Homepage
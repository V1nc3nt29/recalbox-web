import React from "react"
import Navbar from "../components/App/Navbar"
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Banner from "../components/Index/Banner"
import OurSolutions from "../components/Index/OurSolutions"
import OurFeatures from "../components/Index/OurFeatures"
import FunFacts from '../components/SEOAgency/FunFacts'
import TeamMember from "../components/Index/TeamMember"
/*import Pricing from "../components/Index/Pricing"*/   /*<Pricing />*/


const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <OurSolutions />
      <OurFeatures />
      <TeamMember />
      <FunFacts />
      <Footer />
    </Layout>
  )
}

export default Home
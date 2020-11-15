import React from "react"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import HowItWork from "../components/DataScienceAndMLCompany/HowItWork"
import CaseStudySlider from "../components/DataScienceAndMLCompany/CaseStudySlider"
import TeamMembers from "../components/DataScienceAndMLCompany/TeamMembers"
import Testimonials from "../components/DataScienceAndMLCompany/Testimonials"
import Partner from "../components/DataScienceAndMLCompany/Partner"
import OurBlog from "../components/DataScienceAndMLCompany/BlogPost"
import StartProject from "../components/DataScienceAndMLCompany/StartProject"

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
                pageTitle="Téléchargement"  
            />
      <HowItWork />
      <CaseStudySlider />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <OurBlog />
      <StartProject />
      <Footer />
    </Layout>
  )
}

export default Home
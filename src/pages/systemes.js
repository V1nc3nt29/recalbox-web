import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import Pricing from '../components/Index/Pricing'
import StartProject from '../components/Common/StartProject'

const Services = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Systemes et Comatibilité" 
                
            />
            <Pricing/>
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Services
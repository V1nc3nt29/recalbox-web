import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>Recalbox - The retrogaming os for Raspberry Pi, Odroid, Pine64 and PC!</title>
                <meta name="description" content="Recalbox - The retrogaming os for Raspberry Pi, Odroid, Pine64 and PC!" />
                <meta name="og:title" property="og:title" content="Recalbox - The retrogaming os for Raspberry Pi, Odroid, Pine64 and PC!"></meta>
                <meta name="twitter:card" content="Recalbox - The retrogaming os for Raspberry Pi, Odroid, Pine64 and PC!"></meta>
                <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Helmet>
        </div>
    )
}

export default SEO

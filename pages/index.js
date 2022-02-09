import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from '../components/banner'
import ServiceSection from '../components/services'

import ScheduleSection from '../components/schedule'
import ProjectsSection from '../components/projects'
import FooterSection from '../components/footer'

const Resume = () => {

    useEffect(() => {
        document.body.style.setProperty('--primary', '#1f232c')
        document.body.style.setProperty('--secondary', '#676767')
        document.body.style.setProperty('--light', '#000')
        document.body.style.setProperty('--dark', '#000')
    })

    return (
        <div>
            <Head>
                <title>Zyad Mahmoud Muhammed Resume</title>
            </Head>

            <Header className="dark" />

            <BannerSection />

            {/* <AboutSection /> */}

            <ServiceSection />

            {/* <Section /> */}

            {/* <CounterSection /> */}

            <ScheduleSection />

            <ProjectsSection />

            {/* <SubscribeSection /> */}

            <FooterSection />

        </div>
    )
}

export default Resume;
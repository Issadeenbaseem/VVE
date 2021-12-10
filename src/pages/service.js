import React from 'react'
import Layout from '../components/Layout'
import ServicesHeader from '../components/ServicesHeader'
import ServicesBody1 from '../components/ServicesBody1'
import ServiceBody2 from '../components/ServiceBody2'

function service() {
    return (
        <div>
            <Layout>
                <ServicesHeader/>
                <ServicesBody1/>
                <ServiceBody2/>
            </Layout>
            
        </div>
    )
}
export default service

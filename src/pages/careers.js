import React from 'react'
import Layout from '../components/Layout'
import CareerHeader from '../components/CareerHeader'
import CareerBody from '../components/CareerBody'
import CareerUpload from '../components/CareerUpload'

export default function careers() {
    return (
        <Layout>
            
            <CareerHeader/>
            <CareerBody/>
            <CareerUpload/>
        </Layout>
    )
}

import React from "react"
import Navbar from "./Navbar"
import Side from "./Side"
import Footer from "./Footer"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <body>
      <Helmet>
        <script src={withPrefix("/js/jquery.min.js")} type="text/javascript" />
        <script
          src={withPrefix("/js/bootstrap.min.js")}
          type="text/javascript"
        />
        <script src={withPrefix("/js/swiper.min.js")} type="text/javascript" />
        <script src={withPrefix("/js/odometer.min.js")} type="text/javascript" />
        <script src={withPrefix("/js/fancybox.min.js")} type="text/javascript" />
        <script src={withPrefix("/js/scripts.js")} type="text/javascript" />
        <title>Virtue Value Engineering</title>
      </Helmet>
      <div className="first-transition"></div>

      <div className="page-transition"></div>

      <Side />
      <Navbar />

      {children}
      <Footer />
    </body>
  )
}

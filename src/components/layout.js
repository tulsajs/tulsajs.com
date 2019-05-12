import "./base.css"
import React from "react"
import { ThemeProvider } from "emotion-theming"
import Seo from "./Seo"
import Nav from "./Nav"
import Footer from "./Footer"
import theme from "../theme.config"

export default function Layout({
  children,
  pageTitle,
  description,
  keywords,
  meta,
}) {
  return (
    <>
      <Seo
        title={pageTitle}
        description={description}
        keywords={keywords}
        meta={meta}
      />
      <ThemeProvider theme={theme}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

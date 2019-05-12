import React from "react"
import { Div } from "../components/Base"
import Img from "../images/NotFound"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <Div p={32} flexd ai="center" jc="center">
        <Img width="100%" height="100%" />
      </Div>
    </Layout>
  )
}

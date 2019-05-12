import React from "react"
import Header from "../components/Header"
import Button from "../components/Button"
import { Div, P, Span } from "../components/Base"
import Img from "../images/Hangout"
import Layout from "../components/Layout"

export default function Meetings() {
  return (
    <Layout
      pageTitle="Meetings"
      description="Want to come join in on the fun at our next meetup? Visit the link below to find out when we will be having our next event."
    >
      <Div
        maxWidth="1200px"
        flexd
        flexWrap="wrap"
        mt={12}
        mx="auto"
        mb={24}
        jc="space-around"
        ai="center"
      >
        <Span p={[4]} width={[1, 1, 1 / 2]} maxWidth="400px">
          <Img />
        </Span>
        <Div p={[8, 8, 4]} pb={[4, 0]} width={[1, 1, 1 / 2]} ff="sans.0">
          <Header type={1} fs={["2xl", "3xl"]} color="grey8">
            Next Meetup Event
          </Header>
          <P fs="lg" color="grey8" lh="normal">
            Want to come join in on the fun at our next meetup? Visit the link
            below to find out when we will be having our next event.
          </P>
          <Span>
            <Button
              as="a"
              href="https://www.meetup.com/TulsaJS/"
              target="_blank"
              rel="nofollow"
              type="primary"
              small
            >
              Meetup Page
            </Button>
          </Span>
        </Div>
      </Div>
    </Layout>
  )
}

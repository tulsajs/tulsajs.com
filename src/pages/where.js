import React from "react"
import Header from "../components/Header"
import Button from "../components/Button"
import { Div, P, Span, A } from "../components/Base"
import Layout from "../components/Layout"
import Img from "../images/Map"

export default function Where() {
  return (
    <Layout
      pageTitle="Where"
      description="TulsaJS is hosted at the Tulsa Central Library. Check out our meetings page for specific times."
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
            Where are we located?
          </Header>
          <P fs="lg" color="grey8" lh="normal">
            TulsaJS is hosted at the Tulsa Central Library. Check out our
            meetings page for specific times.
          </P>
          <P fs="md">
            <Span fw="medium">Address: </Span>
            <A
              color={{ base: "teal7", hover: "teal6" }}
              href="https://www.google.com/maps/place/400+Civic+Center,+Tulsa,+OK+74103/@36.1505209,-95.9964198,17z/data=!3m1!4b1!4m5!3m4!1s0x87b6eb70a5829153:0x11f8aecd5686491c!8m2!3d36.1505209!4d-95.9942311"
            >
              400 Civic Center Tulsa, OK 74103
            </A>
          </P>
          <Span>
            <Button to="/meetings" mr={4} small="true">
              Meetings
            </Button>
            <Button
              as="a"
              href="https://www.tulsalibrary.org/locations/central"
              target="_blank"
              rel="nofollow"
              type="secondary"
              small
            >
              Tulsa Central Library
            </Button>
          </Span>
        </Div>
      </Div>
    </Layout>
  )
}

import React from "react"
import { Div, P, Span, A } from "../components/Base"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Friends from "../images/Friends"
import Meetings from "../images/Meetings"
import Help from "../images/Help"

function SubHero({ headerText, paragraphText, img: Img }) {
  return (
    <Div
      maxWidth={["90%", "70%"]}
      p={8}
      flexd
      jc="center"
      ai="center"
      ff="sans.0"
      flexDirection="column"
    >
      <Img p={4} h="auto" w="100%" maxWidth="400px" />
      <Header m={2} type={3} color="grey8" fs={["xl", "2xl"]}>
        {headerText}
      </Header>
      <P fs="lg" color="grey7" ta="center" lh="normal">
        {paragraphText}
      </P>
    </Div>
  )
}

export default function About() {
  return (
    <Layout
      pageTitle="About"
      description="TulsaJS is the place to come and learn about all things javascript. Whether your a seasoned javascript developer or you are just starting your development career, we are always looking to expand our user base. We are a fairly new user group, and we plan to have meetups once a month. "
    >
      <Div
        w="full"
        h="full"
        flexd
        flexDirection="column"
        jc="center"
        ai="center"
      >
        <SubHero
          img={Friends}
          headerText="Why Join Us?"
          paragraphText={
            <Span>
              TulsaJS is the place to come and learn about all things
              javascript. Whether your a seasoned javascript developer or you
              are just starting your development career, we are always looking
              to expand our user base. We are a fairly new user group, and we
              plan to have meetups once a month. For more info visit our{" "}
              <A
                color={{ base: "teal7", hover: "teal6" }}
                target="_blank"
                rel="nofollow"
                href="https://www.meetup.com/TulsaJS/"
              >
                (Meetups Page)
              </A>
              .
            </Span>
          }
        />
        <SubHero
          img={Meetings}
          headerText="Why Another Tulsa Dev Meetup?"
          paragraphText="For anyone who has been to the TulsaWebDevs meetups, you may ask why another user group. For you I ask, why not? Some developers may get deterred from a larger group meetup and smaller groups may be more welcoming. In addition Tulsa could use some healthy expanding within the development community."
        />
        <SubHero
          img={Help}
          headerText="How Can TulsaJS Help You?"
          paragraphText="You may ask yourself, how can TulsaJS possibly help the development community and more importantly yourself? Well we plan to have meetups once a month and mix interaction with tutorials. Want to learn the newest javascript framework? Need to sharpen your vanilla javascript skills? We have something for everyone."
        />
      </Div>
    </Layout>
  )
}

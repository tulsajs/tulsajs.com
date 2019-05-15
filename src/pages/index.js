import React from "react"
import { Div, Img as BaseImage } from "../components/Base"
import Hero from "../layouts/home/Hero"
import SubHero from "../layouts/home/SubHero"
import InfoCard from "../layouts/home/InfoCard"
import UserCard from "../layouts/home/UserCard"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function Index({ data }) {
  return (
    <Layout pageTitle="Home">
      <Div w="full" h="full">
        <Hero />
        <SubHero
          headerText="Grow the career you want"
          paragraphText="Learn something new monthly that you can use to advance the career that you want"
        />
        <Div bg="white" my={12}>
          <Div maxWidth="1200px" mx="auto" flexd flexWrap="wrap">
            <InfoCard
              headerText="Communication is key"
              paragraphText="We provide a way to communicate with all members of TulsaJS through
          our own Slack Group. Join us to learn, grow and share your knowledge
          with others."
              linkText="Join Slack"
              linkUrl="https://join.slack.com/t/tulsajs/shared_invite/enQtNjIxNzc4ODI4MjI3LWU3YWY2M2VjZmNlMzhiZWFjY2NlMzNiZjk0ZTZlMWI1MWNhOTI2OTZlYzdkMjA2YmExZDY3OTZiZDc0YmI0M2E"
              icon={
                <path d="M10,15 L18.0092049,15 C19.1017876,15 20,14.1019465 20,12.9941413 L20,3.00585866 C20,1.89706013 19.1086907,1 18.0092049,1 L1.99079514,1 C0.898212381,1 0,1.89805351 0,3.00585866 L0,12.9941413 C0,14.1029399 0.891309342,15 1.99079514,15 L6,15 L6,19 L10,15 Z M5,7 L7,7 L7,9 L5,9 L5,7 Z M9,7 L11,7 L11,9 L9,9 L9,7 Z M13,7 L15,7 L15,9 L13,9 L13,7 Z" />
              }
            />
            <InfoCard
              headerText="Open Source Examples"
              paragraphText="All of the code for TulsaJS and most of the talks given are open source. This gives you the ability to dive deep into how things work."
              linkText="Github Org"
              linkUrl="https://github.com/tulsajs"
              icon={
                <path d="M0.707106781,10.7071068 L-2.00988464e-13,10 L5.48528137,4.51471863 L6.89949494,5.92893219 L2.82842712,10 L6.89949494,14.0710678 L5.48528137,15.4852814 L0.707106781,10.7071068 Z M19.2928932,10.7071068 L20,10 L14.5147186,4.51471863 L13.1005051,5.92893219 L17.1715729,10 L13.1005051,14.0710678 L14.5147186,15.4852814 L19.2928932,10.7071068 Z" />
              }
            />
            <InfoCard
              headerText="Livestream Access"
              paragraphText="We provide the ability to learn at various times through our online streaming platform on twitch.tv"
              linkText="Twitch Channel"
              linkUrl="https://www.twitch.tv/tulsajs"
              icon={
                <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
              }
            />
          </Div>
        </Div>
        <SubHero
          headerText="Organized by passionate people"
          paragraphText="We do this because we are thrilled to see developers thriving in the community"
        />
        <Div bg="white" my={12}>
          <Div maxWidth="1200px" mx="auto" flexd flexWrap="wrap">
            <UserCard
              img={
                <BaseImage
                  width="128px"
                  height="128px"
                  as={Img}
                  fluid={data.wassim.childImageSharp.fluid}
                />
              }
              headerText="Wassim Metallaoui"
              paragraphText="Wassim is a full stack web developer happily slinging code for Planning Center. He enjoys working with technologies such as Ruby on Rails and React. He lives in Tulsa with his wife, two kids, and an incredibly annoying cat."
              linkText="@wassimk"
              linkUrl="https://twitter.com/wassimk"
            />
            <UserCard
              img={
                <BaseImage
                  width="128px"
                  height="128px"
                  as={Img}
                  fluid={data.josh.childImageSharp.fluid}
                />
              }
              headerText="Josh Hamilton"
              paragraphText="Josh is a passionate developer. His knack for problem solving is only succeeded by his love for learning. He spends his off hours soaking up new open source projects. He currently lives in Tulsa with his wife, Jessica."
              linkText="@nearbycoder"
              linkUrl="https://twitter.com/nearbycoder"
            />
          </Div>
        </Div>
      </Div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wassim: file(relativePath: { eq: "wassim.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    josh: file(relativePath: { eq: "josh.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

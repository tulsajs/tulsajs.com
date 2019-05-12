import React from "react"
import { Div, Span, P } from "../../components/Base"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Img from "../../images/Code"

export default function Hero() {
  return (
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
          Empower yourself to learn and grow
        </Header>
        <P fs="lg" color="grey8" lh="normal">
          Join a community of enthusiastic developers achieving goals and
          reaching them together.
        </P>
        <Span>
          <Button
            as="a"
            href="https://www.meetup.com/TulsaJS/"
            target="_blank"
            rel="nofollow"
            mr={4}
            small
          >
            Meetup
          </Button>
          <Button
            as="a"
            href="https://www.youtube.com/channel/UCiDTbLkhMpL3MyGoSFXnVjg"
            target="_blank"
            rel="nofollow"
            type="secondary"
            small
          >
            Youtube Channel
          </Button>
        </Span>
      </Div>
    </Div>
  )
}

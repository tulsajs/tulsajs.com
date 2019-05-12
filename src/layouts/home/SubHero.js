import React from "react"
import { Div, P } from "../../components/Base"
import Header from "../../components/Header"

export default function SubHero({ headerText, paragraphText }) {
  return (
    <Div m={8} flexd jc="center" ai="center" ff="sans.0" flexDirection="column">
      <Header m={2} type={3} color="grey8" fs={["xl", "2xl"]}>
        {headerText}
      </Header>
      <P fs="lg" color="grey7" ta="center">
        {paragraphText}
      </P>
    </Div>
  )
}

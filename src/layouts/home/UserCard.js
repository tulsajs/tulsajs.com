import React from "react"
import { Div, P, A, Img, Span } from "../../components/Base"
import Header from "../../components/Header"

export default function UserCard({
  imgUrl,
  headerText,
  paragraphText,
  linkText,
  linkUrl,
}) {
  return (
    <Div
      ff="sans.0"
      relative
      p={12}
      width={[1, 1, 1 / 2]}
      flexd
      flexDirection="column"
    >
      <Div flexd ai="center">
        <Img src={imgUrl} />
        <Header ml={4} type={5} color="teal9">
          {headerText}
        </Header>
      </Div>
      <P color="grey8" width={["auto", "80%"]}>
        {paragraphText}
      </P>
      <Span>
        <A
          href={linkUrl}
          target="_blank"
          rel="nofollow"
          color={{ base: "teal5", hover: "teal6", active: "teal6" }}
        >
          {linkText}
        </A>
      </Span>
    </Div>
  )
}

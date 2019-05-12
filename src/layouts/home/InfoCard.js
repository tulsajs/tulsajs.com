import React from "react"
import { Div, Svg, P, A, Span } from "../../components/Base"
import Header from "../../components/Header"

export default function InfoCard({
  headerText,
  paragraphText,
  linkText,
  linkUrl,
  icon,
}) {
  return (
    <Div width={[1, 1, 1 / 3]} p={8} ff="sans.0">
      <Div h="full" flexd flexDirection="column">
        <Div
          border="1:teal5"
          bs="md"
          flexd
          jc="center"
          ai="center"
          w={12}
          h={12}
          mb={4}
          bg="teal4"
          color="grey1"
          rd="full"
        >
          <Svg
            w={6}
            h={6}
            fill="white"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icon}
          </Svg>
        </Div>
        <Header m={0} type={5}>
          {headerText}
        </Header>
        <P>{paragraphText}</P>
        <Span>
          <A
            href={linkUrl}
            target="_blank"
            rel="nofollow"
            js="flex-end"
            td
            color={{ base: "teal5", hover: "teal6", active: "teal6" }}
          >
            {linkText}
          </A>
        </Span>
      </Div>
    </Div>
  )
}

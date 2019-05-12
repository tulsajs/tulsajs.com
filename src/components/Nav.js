import React from "react"
import { Div, Span, Ul, Li, A } from "./Base"
import Button from "./Button"
import { Link } from "gatsby"

function CustomLink({ to, exact, children }) {
  return (
    <>
      <style>
        {`
        .active {
          color: #38b2ac;
          text-decoration: underline;
        }
        .active:hover {
          color: #319795;
        }
      `}
        >
      </style>
      <A
        as={Link}
        to={to}
        color={{ base: "grey5", hover: "grey6" }}
        activeClassName="active"
      >
        {children}
      </A>
    </>
  )
}

function Nav(prop) {
  return (
    <Div
      mx="auto"
      maxWidth="1200px"
      width="100%"
      ff="sans.0"
      px={4}
      py={8}
      flexd
      flexWrap="wrap"
      ai="center"
      jc="space-between"
    >
      <Span fw="bold" fs="2xl">
        <A to="/" color="teal6">
          TulsaJS
        </A>
      </Span>
      <Ul
        order={[1, 0]}
        width={[1, 1 / 3]}
        flexd
        p={[4, 0]}
        ai="center"
        jc="center"
        fs="lg"
      >
        <Li px={4}>
          <CustomLink exact={true} to="/">
            Home
          </CustomLink>
        </Li>
        <Li px={4}>
          <CustomLink to="/about">About</CustomLink>
        </Li>
        <Li px={4}>
          <CustomLink to="/meetings">Meetings</CustomLink>
        </Li>
        <Li px={4}>
          <CustomLink to="/where">Where</CustomLink>
        </Li>
      </Ul>
      <Span>
        <Button as="a" href="mailto:contact@tulsajs.com" small>
          Contact Us
        </Button>
      </Span>
    </Div>
  )
}

export default Nav

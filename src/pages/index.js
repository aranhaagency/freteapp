import React from "react"
import { Link } from "gatsby"
import { scale, rhythm } from "../utils/typography"
import logo from "https://instagram.fbfh10-1.fna.fbcdn.net/vp/892a4c2b6fdca8246b2923b398d8168a/5DF591EE/t51.2885-19/s320x320/68857112_490740921727836_1729163376786931712_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net"

const NoStyleLink = props => (
  <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)



const whitish = `#fff`

export default () => {
  return (
    <div
      css={{
        display: `flex`,
        height: `100vh`,
        background: whitish,
      }}
    >
      <div
        css={{
          position: `absolute`,
          left: `33.333%`,
          width: rhythm(1),
          height: `22vh`,
          zIndex: 10,
          background: whitish,
          borderBottomRightRadius: `34px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `33.33%`,
          bottom: 0,
          width: rhythm(1),
          height: `24vh`,
          zIndex: 10,
          background: whitish,
          borderTopLeftRadius: `34px 41%`,
        }}
      />
      <div
        css={{
          display: `flex`,
          position: `absolute`,
          margin: rhythm(3 / 4),
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: `center`,
          alignItems: `center`,
          background: `#ffbd59`,
        }}
      >
        <h1
          css={{
            width: `80%`,
            color: whitish,
            fontWeight: 600,
            fontSize: scale(5 / 5).fontSize,
            lineHeight: 1.1,
            "@media (min-width: 420px)": {
              fontSize: scale(7 / 5).fontSize,
            },
            "@media (min-width: 768px)": {
              fontSize: scale(10 / 5).fontSize,
            },
          }}
        >
          <span css={{ fontWeight: 400 }}>Mudamos</span>o conceito de 
          entrega no Brasil. {` `}
          <span css={{ fontWeight: 400 }}>Faça parte dessa transformação.</span>
        </h1>
      </div>
      <div
        css={{
          color: whitish,
          position: `absolute`,
          top: rhythm(1.5),
          zIndex: 10,
          transform: `rotate(90deg)`,
          transformOrigin: `left top 0`,
          left: rhythm(2.5),
          fontSize: scale(2 / 5).fontSize,
          lineHeight: scale(2 / 5).lineHeight,
          "@media (min-width: 420px)": {
            left: rhythm(1.5),
            transform: `none`,
          },
        }}
      >
        <NoStyleLink to="/"><img 
          css={{
            width: `30%`,
          }}
        src={logo} alt="Logo" /></NoStyleLink>
      </div>
      <div
        css={{
          color: whitish,
          position: `absolute`,
          right: rhythm(1.5),
          top: rhythm(1.5),
          zIndex: 10,
          fontSize: scale(2 / 5).fontSize,
          lineHeight: scale(2 / 5).lineHeight,
        }}
      >
        <NoStyleLink to="/blog/">blog</NoStyleLink>,{" "}
        <NoStyleLink to="/about/">about</NoStyleLink>
      </div>
    </div>
  )
}

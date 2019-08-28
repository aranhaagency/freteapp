import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import logo from "../images/logo.png"

import typography from "../utils/typography"
const rhythm = typography.rhythm
const scale = typography.scale

const NoStyleLink = props => (
  <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)

class Wrapper extends React.Component {
  render() {
    return (
      <div
        css={{
          minHeight: `100vh`,
          borderTop: `${rhythm(3 / 4)} solid #ffbd59`,
          "@media (min-width: 420px)": {
            border: `${rhythm(3 / 4)} solid #ffbd59`,
          },
        }}
      >
        <div css={{ minHeight: rhythm(1) }}>
          <div
            css={{
              float: `left`,
              // color: `#ffbd59`,
              marginTop: rhythm(3 / 4),
              marginLeft: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/"><img
              css={{
                width: `50%`,
              }}
              src={logo} alt="Logo" /></NoStyleLink>
          </div>
          <div
            css={{
              float: `right`,
              // color: `#ffbd59`,
              marginTop: rhythm(3 / 4),
              marginRight: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/freteapp/blog/">blog</NoStyleLink>,{" "}
            <NoStyleLink to="/freteapp/about/">about</NoStyleLink>
          </div>
        </div>
        <div
          css={{
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
            "@media (min-width: 420px)": {
              padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
            },
            maxWidth: rhythm(22),
            margin: `0 auto`,
          }}
        >
          <Helmet defaultTitle="Frete App." titleTemplate="Frete App. | %s" />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper

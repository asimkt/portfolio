import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import instaSvg from "../icons/insta.svg"
import mediumSvg from "../icons/medium.svg"
import linkedinSvg from "../icons/linkedin.svg"
import stackoverflowSvg from "../icons/stackoverflow.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to={ "/" }
        >
          { "AKT" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.linkedin &&
          <a
            href={ `https://www.linkedin.com/in/${pkg.linkedin}` }
            className={ styles.link }
          >
            <Svg svg={ linkedinSvg } cleanup />
          </a>
        }
        {
          pkg.stackoverflow &&
          <a
            href={ `https://stackoverflow.com/users/${pkg.stackoverflow}` }
            className={ styles.link }
          >
            <Svg svg={ stackoverflowSvg } cleanup />
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
          </a>
        }
<a rel="me" href="https://mastodon.social/@ktasim">M</a>
        {
          pkg.medium &&
          <a
            href={ `https://medium.com/@${pkg.medium}` }
            className={ styles.link }
          >
            <Svg svg={ mediumSvg } cleanup />
          </a>
        }
        {
          pkg.instagram &&
          <a
            href={ `https://instagram.com/${pkg.instagram}` }
            className={ styles.link }
          >
            <Svg svg={ instaSvg } cleanup />
          </a>
        }
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
          </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header

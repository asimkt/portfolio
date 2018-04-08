import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import instaSvg from "../icons/insta.svg"
import mediumSvg from "../icons/medium.svg"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to={ "/" }
        >
          { "Home" }
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Twitter" }
          </a>
        }
        {
          pkg.linkedin &&
          <a
            href={ `https://www.linkedin.com/in/${pkg.linkedin}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } cleanup />
            { "Linkedin" }
          </a>
        }
        {
          pkg.stackoverflow &&
          <a
            href={ `https://stackoverflow.com/users/${pkg.stackoverflow}` }
            className={ styles.link }
          >
            { "Stack Overflow" }
          </a>
        }
        {
          pkg.medium &&
          <a
            href={ `https://medium.com/@${pkg.medium}` }
            className={ styles.link }
          >
            <Svg svg={ mediumSvg } cleanup />
            { "Medium" }
          </a>
        }
        {
          pkg.instagram &&
          <a
            href={ `https://instagram.com/${pkg.instagram}` }
            className={ styles.link }
          >
            <Svg svg={ instaSvg } cleanup />
            { "Instagram" }
          </a>
        }
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
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

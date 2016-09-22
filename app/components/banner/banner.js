import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const BannerComponent = React.createClass({
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.heading}>
          <Link className={styles.link} to="/">{this.props.name}</Link>
        </h1>
      </header>
    )
  }
})

export default BannerComponent

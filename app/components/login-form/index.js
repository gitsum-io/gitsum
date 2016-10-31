import React from 'react'
import styles from './styles.css'
import GitHubIcon from 'assets/images/octocat-inverted.svg'

// TODO Get repo settings from backend for posting to Github
// TODO Style github button
// TODO Add a loading animation

const LoginForm = React.createClass({
  propTypes: {
    heading: React.PropTypes.string,
    globals: React.PropTypes.shape({
      stateToken: React.PropTypes.string
    }),
    getStateToken: React.PropTypes.func
  },
  componentWillMount() {
    this.props.getStateToken() // TODO Should this be a part of the gitsum file and app bootstrapping?
  },
  render() {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=183eb9754ab178e57b49&scope=repo%20user&state=${this.props.globals.stateToken}`
    return (
      <div className={styles.loginForm}>
        <h1 className={styles.heading}>{this.props.heading}</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <a className={styles.githubButton} href={githubAuthUrl}><GitHubIcon className={styles.githubIcon} />Log in with Github</a>
        </form>
      </div>
    )
  }
})

export default LoginForm

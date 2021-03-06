import React, { Component } from 'react'

let feedbackUrl
if (typeof process.env.REACT_APP_ZORKO_FEEDBACK_FORM !== 'undefined') {
  feedbackUrl = process.env.REACT_APP_ZORKO_FEEDBACK_FORM
}

class HomeIntroSection extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              An online community to share, find and build vega visualizations
            </h1>
            <h2 className="subtitle">
              Charts, graphincs and maps build on top of public data (json,csv) in the web
            </h2>
            {feedbackUrl && (
              <a className="button is-primary" href={feedbackUrl}>
                Contact us
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default HomeIntroSection

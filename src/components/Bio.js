import React from 'react';

import profilePic from './headshot.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt="Eli Perkins"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p>
          Written by <strong>Eli Perkins</strong>.{' '}
          <a href="https://twitter.com/_eliperkins">Say hello on Twitter.</a>
        </p>
      </div>
    );
  }
}

export default Bio;

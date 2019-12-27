import React from 'react'
import Nav from '../components/nav';

export default function About() {
    return (
      <div>
        <Nav></Nav>
        <p>This is the about page</p>
        <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
      </div>
    );
  }
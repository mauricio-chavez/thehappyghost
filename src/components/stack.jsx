import React from "react"
import ReactTooltip from "react-tooltip"
import Technology from "./technology"

import django from "../images/stack/django.jpg"
import python from "../images/stack/python.png"
import js from "../images/stack/js.png"
import docker from "../images/stack/docker.png"
import react from "../images/stack/react.png"
import electron from "../images/stack/electron.png"
import graphql from "../images/stack/graphql.png"
import flutter from "../images/stack/flutter.png"
import firebase from "../images/stack/firebase.png"
import gcp from "../images/stack/gcp.jpg"

import "../styles/stack.scss"

const Stack = () => (
  <section className="section" id="stack">
    <ReactTooltip />
    <div className="container has-text-centered">
      <h1 className="title section-title">
        {"{"} Stack {"}"}
      </h1>
      <div className="container">
        <div className="Stack__columns columns is-mobile">
          <Technology image={django} name="Django" />
          <Technology image={python} name="Python" />
          <Technology image={js} name="Javascript" />
          <Technology image={docker} name="Docker" />
          <Technology image={react} name="React" />
          <Technology image={flutter} name="Flutter" />
          <Technology image={electron} name="Electron" />
          <Technology image={gcp} name="Google Cloud Platform" />
          <Technology image={graphql} name="GraphQL" />
          <Technology image={firebase} name="Firebase" />
        </div>
      </div>
    </div>
  </section>
)

export default Stack

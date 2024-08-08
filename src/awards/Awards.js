import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import AwardsMenu from "./AwardsMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="awards" />
        <AwardsMenu />
      </>
    );
  }
}

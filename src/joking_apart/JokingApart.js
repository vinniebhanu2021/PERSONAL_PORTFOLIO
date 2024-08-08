import React, { Component } from "react";
import Avatar from "../avatar/Avatar.js";
import JokingApartMenu from "./JokingApartMenu.js";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="joking-apart" />
        <JokingApartMenu />
      </>
    );
  }
}

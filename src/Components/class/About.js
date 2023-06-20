import { Component } from "react";
import Profile from "./Profile";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      count: 0,
    };
    console.log("Parent - Component Constructor");
  }
  componentDidMount() {
    console.log("parent - Component Mounted");

    console.log("Parent - Component Mounted");
  }
  render() {
    console.log("Parent - Component Rendered");
    return (
      <>
        <div className="container-flex">
          <h1>About Us</h1>
          <p>I am falling in love with react as we go.</p>
          <Profile name="first child" />
          {/* <Profile name="second child" /> */}
        </div>
      </>
    );
  }
}

export default About;

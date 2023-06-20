import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { useEffect } from "react";

const About = () => {
  const doSomething = () => {
    console.log(1);
  };
  useEffect(() => {
    const timer = setInterval(doSomething, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="container-flex">
        <h1>About Us</h1>
        <p>I am falling in love with react as we go.</p>
        <Profile name="om205" />
        <Profile name="codewithharry" />
      </div>
    </>
  );
};

export default About;

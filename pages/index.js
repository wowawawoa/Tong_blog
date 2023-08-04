import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";

function HomePage() {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Hero />
    </Fragment>
  );
}

export default HomePage;
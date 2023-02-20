import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../navbar";
import Footer from "../footer";

const Main = (props) => {
  return (
    <>
      <Navbar />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nandan's homepage" />
        <meta name="author" content="Nandan Patel" />
        <title>Nandan Patel - Homepage</title>
      </head>
      <body>{...props.children}</body>
      <Footer />
    </>
  );
};

export default Main;

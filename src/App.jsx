import "./App.css";
import { Greeting } from "./components/Greeting";
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Li from "./components/Li";
import data from "../data"

// Parent Component
function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      {/* Header is a child */}
      <Header />
      {/* Content is a child */}
      <Content />
      {/* Footer is a child */}
      <Footer />
    </section>
  );
}

function App() {
  let newValue = <Header children={"Hello"} />;

  return (
    <React.Fragment>
      <ul style={{ listStyleType: "none" }}>
        {data.map((person) => 
          <Li key={crypto.randomUUID()} name={person?.name} email={person?.email} job={person?.job} />
        )}
      </ul>
    </React.Fragment>
  );
}

export default App;

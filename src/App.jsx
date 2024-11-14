import './App.css'
import { Greeting } from './components/Greeting'
import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Avatar from './components/Avatar'
import Li from './components/Li'


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
  )
}

function App() {

  return (
    <React.Fragment>
      <h1> React Component </h1>
      <Header children={"Hello"} />
      <Header>This a Children Header</Header>
      <Greeting name={"Khadijah Kabir"} list={['Khadijah', 'Kabir', 'Kabiru', 'Kabirat', 'Kabirudeen']} />
      {Greeting({ name: 'Oluwasetemi Ojo', list: ['Oluwasetemi', 'Ojo', 'Ojoade', 'Ojoadeyemi'] })}
      <Blog />
      <Content />
      <Footer />

      <ul>
        <Li key={1} name="XY. Z" email="email@email.com" job="plumber" />
      </ul>
    </React.Fragment>
  )
}

export default App

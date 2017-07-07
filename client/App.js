import React from 'react'
import WrestlerList from './WrestlerList'
import Navbar from './Navbar'

const App = (props) => (
  <div>
    <Navbar />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Wrestlerpedia
          </h1>
          <h2 className="subtitle">
            Wrestling facts, information, pictures
          </h2>
        </div>
      </div>
    </section>
    <WrestlerList />
  </div>
)

export default App

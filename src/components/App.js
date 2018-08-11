import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Background Noise App </h1>
  </header>
)

const Main = (props) => (
  <div className=' main ' >

     
      
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>
      
    </div>
  </div>
)

class BackgroundNoiseApp extends Component {
  
  state = {
    
 
  }
  


  componentDidMount() {


  }

  

  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          
        />
        <Main 
      
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <BackgroundNoiseApp/>

  </div>
)

export default App


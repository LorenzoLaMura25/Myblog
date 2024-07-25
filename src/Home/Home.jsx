import React from 'react'
import "./Home.css"

const Home = () => {

  function AboutClick(){
    window.location.href = './about'
  }

  function ContactsClick(){
    window.location.href = './contacts'
  }

  function ProjectsClick(){
    window.location.href = './projects'
  }

  function ResumeeClick(){
    window.location.href = './resumee'
  }
  return (
    <>
    

    <div className="container-home">
      <div className="container-menu" onClick={AboutClick}>
        <h1>About Me</h1>
      </div>

      <div className="container-menu" onClick={ContactsClick}>
      <h1>Contacts</h1>
      </div>

      <div className="container-menu" onClick={ProjectsClick}>
      <h1>Projects</h1>
      </div>

      <div className="container-menu" onClick={ResumeeClick}>
      <h1>Resumee</h1>
      </div>

      

      
    </div>
    
    </>
  )
}

export default Home
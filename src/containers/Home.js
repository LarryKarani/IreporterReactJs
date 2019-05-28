import React from 'react'

const  Home = () => {
  return (
    <div  id="wrapper" className="text-center">
    <div className="cover-container d-flex p-3 mx-auto flex-column">
  <main role="main" className="inner cover">
    <h1 className="cover-heading">Welcome to iReporter.</h1>
    <p className="lead">iReporter is an application that enables users to report incidents as either redflags or interventions.</p>
    <p className="lead">
      <a href={`/#/signup`} className="btn btn-lg btn-secondary">Get started</a>
    </p>
  </main>

  <footer className="mastfoot mt-auto">
  </footer>
</div>
</div>
  )
}


export default Home
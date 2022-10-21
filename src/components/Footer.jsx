import React from 'react'

const Footer = (props) => {
  const {text} = props
  return (
   <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>&copy; {text} &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
   </footer>
  )
}

export default Footer
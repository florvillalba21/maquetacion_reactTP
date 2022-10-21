import React from 'react'

const Footer = (props) => {
  const {text} = props
  // const text2 = props
  return (
   <footer className="container">
      <p className="float-right"><a href="#">Back to top</a></p>
      <p>&copy; {text} &middot; <a href="#"></a> &middot; <a href="#">Terms</a></p>
   </footer>
  )
}

export default Footer
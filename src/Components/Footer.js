import React from 'react'

export const Footer = () => {
  let cssStyle={
    padding: "5px",
    top: "75%"
  }
  return (
    <footer className='bg-dark text-light  ' style={cssStyle}>
      <p className="text-center align-center">
        Copyright &copy; MytodoList.com
      </p>
    </footer>
  )
}

export default Footer

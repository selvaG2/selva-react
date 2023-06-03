import React from 'react'

const Header = ({title}) => {
  return (
    <header>
      <h1>Hello, {title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title : "user"
}
export default Header
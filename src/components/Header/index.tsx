import React from 'react'
import { Link} from 'react-router-dom'

// import useUser from 'hooks/useUser'

 // import './Header.css'

export default function Header () {
  // const {isLogged, logout} = useUser()
  // const [match] = useRoute("/login");  // viene de wouter check documantation

  /* const handleClick = e => {
    e.preventDefault()
    logout()
  }
 */
  const renderLoginButtons = ({isLogged = false}) => {
    return isLogged
      ? <Link to='#'>
      Logout
      </Link>
      : <>
        <Link to='/login'>
          Login
        </Link>
        <Link to='/register'>
          Register
        </Link>
        </>
  }

  const content = false
    ? null
    : renderLoginButtons({})

  return (
    <header>
      {content}
    </header>
  )
}
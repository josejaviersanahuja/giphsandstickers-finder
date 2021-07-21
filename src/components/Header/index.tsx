import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { showGifs, showStickers } from '../../feature/gifORstickers/gifORstickerSlice'
import { useAppDispatch } from '../../redux/hooks'
import ButtonComponent from '../Boton'

// import useUser from 'hooks/useUser'

 // import './Header.css'

export default function Header () {
  const location = useLocation()
    const showGifOrSticker = location.pathname === '/'
  const dispatch = useAppDispatch()
  // const {isLogged, logout} = useUser()
  // const [match] = useRoute("/login");  // viene de wouter check documantation

  /* const handleClick = e => {
    e.preventDefault()
    logout()
  }
 */
  const renderLoginButtons = ({isLogged = false}) => {
    return isLogged
      ? <Link to='#' className="header__btn__logout">
      Logout
      </Link>
      : <>
        <Link to='/login' className="header__btn">
          Login
        </Link>
        <Link to='/register' className="header__btn__register">
          Register
        </Link>
        </>
  }

  const content = false
    ? null
    : renderLoginButtons({})

  return (
    <header>
        {showGifOrSticker && <>
         <ButtonComponent
            onClick={() => dispatch(showGifs())}
            id="home__btn__gif"
          >
            Gifs
          </ButtonComponent>
          <ButtonComponent
            onClick={() => dispatch(showStickers())}
            id="home__btn__sticker"
          >
            Stickers
          </ButtonComponent>
        </>}
      {content}
    </header>
  )
}
import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import './nevigation.style.scss'

const Nevigation = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/' >
                <Crown className='logo' />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop' >
                    SHOP
                </Link>
                <Link className="nav-link" to='/shop' >
                    CONTACT
                </Link>
                <Link className="nav-link" to='/signin' >
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Nevigation
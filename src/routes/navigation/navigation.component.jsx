import React from 'react';
import {Outlet, Link} from 'react-router-dom'
import '../navigation/navigation.styles.scss'

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

const Navigation = () => {
    return (
      <React.Fragment>
        <div className='navigation'>

        <Link className='logo-container' to='/'><CrwnLogo/></Link>

            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className='nav-link' to='/contact'>CONTACT</Link>
                <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                <Link className='nav-link' to='/cart'>CART</Link>
            </div>
        </div>
        <Outlet/>
      </React.Fragment>
    )
  };

export default Navigation;
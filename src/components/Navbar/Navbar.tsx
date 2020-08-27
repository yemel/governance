import React from 'react'
// import { Menu, Icon } from 'decentraland-ui'
import { Navbar as BaseNavbar } from 'decentraland-dapps/dist/containers'

// import { locations } from '../../routing/locations'
import { Props } from './Navbar.types'
import './Navbar.css'

const Navbar = (props: Props) => {
  // const { pathname, hasPendingTransactions, onNavigate } = props

  // const handleOnSignIn = useCallback(() => {
  //   onNavigate(locations.signIn())
  // }, [onNavigate])

  // const handleOnClickAccount = useCallback(() => {
  //   onNavigate(locations.settings())
  // }, [onNavigate])

  // const handleClickActivity = useCallback(() => {
  //   onNavigate(locations.activity())
  // }, [onNavigate])

  return (
    <BaseNavbar
      {...props}
      activePage="dao"
      isFullscreen
      // isSignIn={pathname === locations.signIn()}
      // onSignIn={handleOnSignIn}
      // onClickAccount={handleOnClickAccount}
      middleMenu={
        undefined
        // <Menu.Item
        //   className={pathname === locations.activity() ? 'active' : ''}
        // >
        //   <Icon
        //     className={hasPendingTransactions ? 'pending' : ''}
        //     name="bell"
        //     onClick={handleClickActivity}
        //   />
        // </Menu.Item>
      }
    />
  )
}

export default React.memo(Navbar)
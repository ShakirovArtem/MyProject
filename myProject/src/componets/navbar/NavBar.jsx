import React from "react"
import s from './NavBar.module.css'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Profile' activeClassName = {s.goldColor}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' activeClassName = {s.goldColor}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to ='/News' activeClassName = {s.goldColor}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = '/Music' activeClassName = {s.goldColor}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to = '/Settings' activeClassName = {s.goldColor}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
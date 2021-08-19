import React from 'react'

import Menu from '../menu'

import '../../assets/styles/components.scss'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo">Project WebSite</span>
        <Menu />
    </header>
)

export default Header

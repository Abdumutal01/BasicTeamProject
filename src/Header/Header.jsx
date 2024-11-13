import React from 'react'
import './Header.css'
import HeaderHero from './HeaderHero/HeaderHero'
import HeaderNav from './HeaderNav/HeaderNav'

import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <header className='header'>
            <HeaderHero />
            <HeaderNav t={t} />
        </header>
    )
}

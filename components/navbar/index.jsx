'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './components/logo'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '@/store/features/main/mainSlice'
import { useTranslations } from 'next-intl'
function NavBar({ Lang }) {
  const dispatch = useDispatch()

  const lang = useSelector(state => state.main.lang)
  const navigation = [
    { name: 'Diaspora', href: '/' },
    { name: 'Recharge', href: '/recharge' },
    { name: 'Logistique', href: '#' },
    { name: 'Actualité Algérie', href: '#' }
  ]
  const Language = lang == 'en' ? 'GB' : lang == 'fr' ? 'FR' : 'DZ'
  const handleSwitcherOpen = () => {
    setSwitcherOpen(true)
  }

  const onChangeLanguage = lang => e => {
    dispatch(setLang(lang))
  }

  const handleSwitcherClose = () => {
    setSwitcherOpen(false)
  }
  const [switcherOpen, setSwitcherOpen] = useState(false)
  const t = useTranslations('Index')
  return (
    <div className='max-h-15 overflow-visible  '>
      <nav className='flex  justify-between p-6 lg:px-8' aria-label='Global'>
        <div className=' cursor-pointer lg:flex-1'>
          <Logo textColor='white' />
        </div>

        <div className=' space-x-2 lg:ml-8 lg:flex lg:justify-end xl:ml-0 xl:flex-1'>
          {!switcherOpen && (
            <div onMouseEnter={handleSwitcherOpen} className=' cursor-pointer'>
              <span className=' flex justify-center justify-items-center '>
                <img
                  className='mr-1 w-5 '
                  alt='United States'
                  src={
                    'http://purecatamphetamine.github.io/country-flag-icons/3x2/' +
                    Language +
                    '.svg'
                  }
                />
                <span>
                  {lang.toUpperCase()} <span>&#x22BD;</span>
                </span>
              </span>
            </div>
          )}
          {switcherOpen && (
            <div
              onMouseLeave={handleSwitcherClose}
              className='z-[100] flex cursor-pointer flex-col items-start bg-green-500 p-2 '
            >
              <Link
                onClick={onChangeLanguage('ar')}
                href='/ar'
                className='flex justify-around justify-items-center pb-1 '
              >
                <img
                  className='  w-5 pr-1'
                  alt='United States'
                  src='http://purecatamphetamine.github.io/country-flag-icons/3x2/DZ.svg'
                />
                <span>العربية</span>
              </Link>
              <Link
                onClick={onChangeLanguage('fr')}
                href='/fr'
                className=' flex justify-around justify-items-center pb-1'
              >
                <img
                  className='  w-5 pr-1'
                  alt='United States'
                  src='http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg'
                />
                <span>Francais</span>
              </Link>
              <Link
                onClick={onChangeLanguage('en')}
                href='/en'
                className=' flex justify-around justify-items-center pb-1'
              >
                <img
                  className='  w-5 pr-1'
                  alt='United States'
                  src='http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
                />
                <span>English</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavBar

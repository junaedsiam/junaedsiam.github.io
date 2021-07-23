import clsx from 'clsx'
import React from 'react'
import styles from './navbar.module.css'

interface NavProps {
  title: string
  url?: string
}

const NavMenu = ({ title, url }: NavProps) => {
  // TODO: Update active hover logic here
  return (
    <a href={url || '#'} className={styles.navWaveSvg}>
      {title}
      <svg width="40" height="4" viewBox="0 0 40 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
            d="M51.9 3C49 3 49 1 46.2 1c-2.8 0-2.8 2-5.7 2-2.8 0-2.8-2-5.7-2C32 1 32 3 29.1 3c-2.8 0-2.8-2-5.7-2-2.8 0-2.8 2-5.6 2S15 1 12.1 1C9.5 1 9.5 3 6.7 3 3.8 3 3.8 1 1 1"
            className={clsx('text-gray-600 stroke-current')}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="52.9" height="4" fill="" />
          </clipPath>
        </defs>
      </svg>
    </a>
  )
}

export default NavMenu

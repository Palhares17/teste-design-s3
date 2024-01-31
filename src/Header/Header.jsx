import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/logoS3.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo S3" />
      <nav>
        <ul className={styles.navegation}>
          <li className={styles.list}>Produto</li>
          <li className={styles.list}>Revendedor</li>
          <li className={styles.list}>Funcionário</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
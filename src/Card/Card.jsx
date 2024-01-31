import React from 'react'
import Imagem from '../assets/image.svg'
import styles from './Card.module.css'

const Card = () => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.image}>
        <img src={Imagem} alt="" />
      </div>
      <span className={styles.divider}></span>
      <h3>Nome do Produto</h3>
      <div className={styles.tags}>
        <span className={styles.tag}>400g</span>
        <span className={styles.tag}>400g</span>
        <span className={styles.tag}>400g</span>
      </div>
      <h3>Ultimo cadastro:</h3>
      <p className={styles.data}>12/09/2023</p>
    </section>
  )
}

export default Card
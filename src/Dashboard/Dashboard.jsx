import React from 'react'
import styles from './Dashboard.module.css'
import { CaretDown, ChartLineUp } from '@phosphor-icons/react'

const Dashboard = () => {
  return (
    <aside>
      <h3 className={styles.title}><ChartLineUp size={24} />Gerência de Produtos</h3>

      <div>
        <p className={styles.groupText}><CaretDown size={14} />Produtos</p>
        <nav>
          <ul className={styles.gap}>
            <li className={styles.active}>Meus Produtos</li>
            <li className={styles.tabs}>Cadastro</li>
            <li className={styles.tabs}>Editar</li>
          </ul>
        </nav>
      </div>

    </aside>
  )
}

export default Dashboard
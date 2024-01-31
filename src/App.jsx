import './App.css'
import Card from './Card/Card'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header'

function App() {
  return (
    <>
      <Header />
      <section>
        <Dashboard />
        <main>
          <span className='bradcrambs'>Produto/Meus Produtos</span>
          <h1>Meus Produtos</h1>
          <div className='containerGrid'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </section>
    </>
  )
}

export default App

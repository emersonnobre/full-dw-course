import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes: Cliente[] = [
    new Cliente('Tayara', 14, 'bx19'),
    new Cliente('Marcela', 17, 'bx19'),
    new Cliente('Rafaela', 24, 'bx19'),
    new Cliente('Sarah', 19, 'bx19'),
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}

import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [ visivel, setVisivel ] = useState<'tabela' | 'form'>("tabela")
  const [ cliente, setCliente ] = useState<Cliente>(Cliente.empty())

  const clientes: Cliente[] = [
    new Cliente('Tayara', 14, 'bx19'),
    new Cliente('Marcela', 17, 'bx122'),
    new Cliente('Rafaela', 24, 'b329'),
    new Cliente('Sarah', 19, 'hyp19'),
  ]


  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }
  
  function clienteExcluido(cliente: Cliente) {
    setCliente(cliente)
  }
  
  function salvarCliente(cliente: Cliente) {
    setVisivel("tabela")
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Cadastro simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-2" cor="green"
                onClick={() => {
                  setCliente(Cliente.empty())
                  setVisivel("form")
                }}
              >
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={() => setVisivel("tabela")} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}

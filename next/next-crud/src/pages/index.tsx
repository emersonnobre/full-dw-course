import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import useClients from "../hooks/useClient";

export default function Home() {
  const { 
    cliente,
    setCliente,
    clientes,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    isTableVisible,
    showTable,
    showForm,

  } = useClients();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Cadastro simples">
        {isTableVisible ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-2" cor="green"
                onClick={() => {
                  setCliente(Cliente.empty());
                  showForm();
                }}
              >
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={showTable} clienteMudou={salvarCliente} />
        )}
      </Layout>
    </div>
  )
}

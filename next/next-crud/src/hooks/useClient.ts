import { useEffect, useState } from "react";
import useTableOrForm from "./useTableOrForm";
import Cliente from "../core/Cliente";
import ClientCollection from "../database/repositories/ClientCollection";
import ClientCollectionInterface from "../database/repositories/interfaces/clientCollectionInterface";

export default function useClients() {
    const repo: ClientCollectionInterface = new ClientCollection();
    const [ cliente, setCliente ] = useState<Cliente>(Cliente.empty());
    const [ clientes, setClientes ] = useState<Cliente[]>([]);
    const { isTableVisible, isFormVisible, showTable, showForm } = useTableOrForm();

    useEffect(() => {
        getAll();
    }, []);
    
    function getAll() {
        repo.getAll().then(clients => {
            setClientes(clients);
            showTable();
        });
    }
    
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        showForm();
    }
    
    async function excluirCliente(cliente: Cliente) {
        await repo.delete(cliente.id);
        getAll();
    }
    
    async function salvarCliente(cliente: Cliente) {
        await repo.save(cliente);
        getAll();
    }

    return {
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        getAll,
        cliente,
        setCliente,
        clientes,
        isTableVisible,
        showForm,
        showTable,
    }
}

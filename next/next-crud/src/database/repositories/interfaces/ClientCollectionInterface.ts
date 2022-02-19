import Cliente from "../../../core/Cliente";

export default interface clientCollectionInterface {
    save: (client: Cliente) => Promise<Cliente | null>;
    delete: (id: string) => Promise<void>;
    getAll: () => Promise<Cliente[] | null>;
}
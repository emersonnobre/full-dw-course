import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClientCollectionInterface from "./interfaces/clientCollectionInterface";

export default class ClientCollection implements ClientCollectionInterface {
    private conversor = {
        toFirestore(client: Cliente) {
            return {
                nome: client.nome,
                idade: client.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, 
        options: firebase.firestore.SnapshotOptions): Cliente {
            const data = snapshot.data(options);
            return new Cliente(data.nome, data.idade, snapshot.id);
        },
    }

    private collection() {
        return firebase.firestore().collection('clients').withConverter(this.conversor);
    }

    async save(client: Cliente): Promise<Cliente | null> {
        if (client?.id) {
            await this.collection().doc(client.id).set(client);
            return client;
        }

        const docRef = await this.collection().add(client);
        const doc = await docRef.get();
        return doc.data();
    }

    async delete(id: string): Promise<void> {
        return await this.collection().doc(id).delete();
    }

    async getAll(): Promise<Cliente[] | null> {
        const query = await this.collection().get();
        return query.docs.map(doc => doc.data());
    }
}
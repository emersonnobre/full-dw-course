import { useState } from "react";

export default function useTableOrForm() {
    const [ visible, setVisible ] = useState<"tabela" | "form">("tabela");

    const showTable = () => setVisible("tabela");
    const showForm = () => setVisible("form");

    return {
        isTableVisible: visible === "tabela",
        isFormVisible: visible === "form",
        showTable,
        showForm,
    }
}
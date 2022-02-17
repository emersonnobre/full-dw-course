import Navegador from '../components/Navegador'

export default function Index() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <Navegador destino='/styled' nomeLink='Styled' />
            <Navegador destino='/jsx' nomeLink='JSX' cor='crimson' />
            <Navegador destino='/exemplo' nomeLink='Exemplo' cor='#e3e' />
            <Navegador destino='/navegacao' nomeLink='Navegação#01' cor='purple' />
            <Navegador destino='/cliente/123' nomeLink='Navegação#02' cor='#66ff2e' />
            <Navegador destino='/state' nomeLink='Componente c/estado' cor='#4a3b5c' />
            <Navegador destino='/integracao_1' nomeLink='Integração com API' cor='#848ab8' />
            <Navegador destino='/estatico' nomeLink='Conteúdo estático' cor='#875a56' />
        </div>
    )
}
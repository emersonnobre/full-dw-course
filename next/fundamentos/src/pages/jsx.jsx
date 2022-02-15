import Layout from "../components/Layout"

export default function Jsx() {
    const titleComponent = <h1>THIS is the title of the application</h1>

    const subtitleComponent = subtitle => <h3>{subtitle.toUpperCase()}</h3>
    return (
        <Layout title={titleComponent}>
            {subtitleComponent('I like potatos!!')}
        </Layout>
    )
}
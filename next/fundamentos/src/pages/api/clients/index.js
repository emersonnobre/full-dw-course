export default function handler(req, res) {
    if (req.method !== 'GET')
        return res.status(405).send()
    
    handleGet(req, res)
}

function handleGet(req, res) {
    res.status(200).json({
        id: '3efa4',
        name: 'Clarissa',
        age: '19',
    })
}
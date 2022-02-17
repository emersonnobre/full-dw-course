export default function handler(req, res) {
    const { key } = req.query

    res.status(200).json({
        id: key,
        username: `nicholaw${key}`,
        registerDate: new Date(),
    })
}
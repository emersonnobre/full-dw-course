function logReq(req, res, next) {
    console.log('---------- REQ ----------')
    console.log(`
        path: ${req.path}
    `)
    console.log('---------- END ----------')
    next()
}

export default logReq

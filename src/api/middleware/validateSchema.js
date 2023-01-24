export default (schema, propertyFromReq) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[propertyFromReq])

        if (error) {
            const { details } = error
            const message = details.map(i => i.message).join(',')
            return next(new Error({error: message}))
        }

        next()
    }
}
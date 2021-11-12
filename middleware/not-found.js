const notFound = (req, res) => res.status(404).send("URL doesn't exist")
module.exports =  notFound


const hola = async (req, res) => {
    return res.status(200).send('adios')
}

const nombre = async (req, res) => {
    return res.status(200).send('Ana Morales')
}

export default {hola, nombre} 
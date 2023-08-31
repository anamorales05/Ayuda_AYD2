

const hola = async (req, res) => {
    return res.status(200).send('adios')
}

const pizza = async (req, res) => {
    return res.status(200).send('Con queso')
}

export default {hola, pizza} 


const pizza = async (req, res) => {
    return res.status(200).send('Con queso')
}

const princesas = async (req,res) =>{
    return res.status(200).send({
        "princesas":[{
            "nombre":"Ariel"              
        },
        {
            "nombre":"Jaszmin"              
        },
        {
            "nombre":"Bella"              
        },
        {
            "nombre":"Aurora"              
        },
        {
            "nombre":"Tiana"              
        },
        {
            "nombre":"Cenicienta"              
        },
        {
            "nombre":"Mulan"              
        }
    ]
    })
}

const hamburguesa = async (req, res) => {
    return res.status(200).send('Doble con gasesa')
}

export default {pizza, hamburguesa,princesas} 
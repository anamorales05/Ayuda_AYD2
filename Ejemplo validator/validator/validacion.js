import schema from "./condiciones.js";

const valPubli = (body) => schema.validate(body)

const validator = (req,res,next) => {
    const {body} = req
    const response = valPubli(body)

    if(response.error){
        return res.status(400).send(response.error)
    }

    next()
}

export default validator
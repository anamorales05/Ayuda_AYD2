import Joi from "joi";

const schema = Joi.object({
    id: Joi.number().required().min(1),
    nombre: Joi.string().required(),
    edad: Joi.number().optional(),
})

export default schema
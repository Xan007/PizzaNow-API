import Joi from "joi"

export const validateId = Joi.object().keys({
    customer_id: Joi.number()
})
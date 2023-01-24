import Joi from "joi"

export const validateId = Joi.object().keys({
    worker_id: Joi.number()
})
import Joi from "joi"

export const postOrder = Joi.object().keys({
    pizza_id: Joi.number(),
    customer_id: Joi.number()
})

export const validateId = Joi.object().keys({
    order_id: Joi.number()
})

export const validateState = Joi.object().keys({
    new_state: Joi.allow("Requested", "In the kitchen", "On the way", "Delivered")
})
const Joi = require("joi")

const validateMe =(req,res,next)=>{
    const schema = Joi.object({
        task:Joi.string().min(3).max(188).required(),
        completed:Joi.boolean().default(false).required()
    })

    const {error} = schema.validate(req.body)
    if (error) return res.json({error:error.details[0].message})
    next()
}

module.exports = validateMe
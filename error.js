const error= (error,req,res,next)=>{
    console.error(error.message)
    const statusCode = error.status || 500
    res.status(statusCode).json({error:error.message})
}

module.exports = error
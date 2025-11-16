const logger = (req,res,next)=>{
    console.log("--".repeat(40))
    console.log(new Date().toISOString(),"--", req.method ,"---" ,req.url,"---",req.ip)
    console.log("--".repeat(40)) 
    next()
}

module.exports = logger
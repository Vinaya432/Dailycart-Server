
const jwt =require('jsonwebtoken')

//creating a middleware
const jwtMiddleware=(req,res,next)=>{
    console.log("Inside JWT Middleware!!!");

    try{
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);

        if(token){
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET) 
            console.log(jwtResponse);
            req.payload=jwtResponse.userId 
            next()
        }else{
            res.status(406).json("Token not Available...")
        }

    }catch{
        res.status(401).json("Authorization failed!!!Please Login..")
    }
}

module.exports =jwtMiddleware
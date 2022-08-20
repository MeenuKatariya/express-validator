const users=[]

function validator(req,res,next){
    const body=req.body;
    if(!body.id){
        return res.status(400).send("id is required")
    }

    if(!body.name){
        return res.status(400).send("Name is required")
    }

    if(!body.rating){
        return res.status(400).send("Rating is required")
    }

    if(!body.description){
        return res.status(400).send("Description is required")
    }

    if(!body.genre){
        return res.status(400).send("Genre is required")
    }

    if(!body.cast){
        return res.status(400).send("Cast is required")
    }
    next()
}

function getMovie(req,res){
    res.status(200).send(users)
} 

function registerMovie(req,res){
    users.push(req.body)
    res.status(200).send("register")
}

module.exports={
    validator,getMovie,registerMovie
}
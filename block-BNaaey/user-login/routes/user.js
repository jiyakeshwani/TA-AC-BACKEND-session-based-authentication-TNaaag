const router  = require("express");

router.get('/login' ,(res,req,next)=>{
    res.render('login')
})

router.post("/login", (res,req,next)=>{
var {email , password} = req.body
if(!email || !password){
    res.redirect('/users/login')

}
User.findOne({email} , (err,user)=>{
    if(err) return next(err)
    if(!user){
        res.redirect('/users/login')

    }
    user.verifyPassword(password ,(err,result)=>{
        if(err) return next(err)
        if(!result){
            res.redirect('/users/login')
        }
        res.session.userId = user.id 
        res.redirect('/users')
    })
})
})
const admin = ['greta', 'ana', 'vin', 'tim' ];
const accessAdmin = (req, res, next)=>{
    if (admin.includes(req.query.user.toLowerCase())){
        next()
    }
    return res.redirect('/noEntry')
}
module.exports = accessAdmin
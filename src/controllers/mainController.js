module.exports ={
    index : (req,res) =>{
        return res.render('index'
, {title: "Home"}    ) },
    about : (req,res) =>{
        return res.render('about', {title: "About"}     )},
    contact : (req,res) =>{
        return res.render('contact', {title: "Contact"} )
    },
    music : (req,res) =>{
        return res.render('music', {title: "Music"}    ) },
    admin : (req,res) =>{
        return res.render('admin', {title: "Admin"}     )},
    noEntry : (req,res) =>{
        return res.render('noEntry',{title:'No Entry'})
    },
    login : (req,res) =>{
        return res.render('login', {title: 'Login'})
    },
    
}
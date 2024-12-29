const loadSignUp = (req,res)=>{
    try {
        return res.render('register.ejs')
    } catch (error) {
        console.log("signUppage not found",error.message)
        res.staus(500).send('pageNotFound Error')
    }
}
const test1 =async(req,res)=>{
    try {
        return res.render('home')
    } catch (error) {
        console.log("homePage not found",error.message)
       
    }
}

export default { 
    loadSignUp,test1
};

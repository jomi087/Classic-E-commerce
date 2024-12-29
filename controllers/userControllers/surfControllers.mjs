const landingPage =async(req,res)=>{
    try {
        return res.render('home')
    } catch (error) {
        console.log("homePage not found",error.message)
       
    }
}

const test =async(req,res)=>{
    try {
        return res.render('register')
    } catch (error) {
        console.log("homePage not found",error.message)
       
    }
}

export default { 
    landingPage,test
};

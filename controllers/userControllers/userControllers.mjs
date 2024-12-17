const landingPage =async(req,res)=>{
    try {
        return res.render('home')
    } catch (error) {
        console.log("homePage not found")
        res.staus(500).send('Server Error')
    }
}

export default { 
    landingPage, 
};

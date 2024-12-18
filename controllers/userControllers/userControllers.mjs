const landingPage =async(req,res)=>{
    try {
        return res.render('home')
    } catch (error) {
        console.log("homePage not found")
        res.staus(500).send('Server Error')
    }
}

const pageNotFound = async(req,res)=>{
    try {
        return res.render('404')
    } catch (error) {
        console.log("pageNotFound not found")
        res.staus(500).send('pageNotFound Error')
    }
}

export default { 
    landingPage, 
    pageNotFound
};

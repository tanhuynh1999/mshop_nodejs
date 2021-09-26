class HomeControlelr{
    getHome = (req, res) => {
        res.render('home/home')
    }
}

module.exports = new HomeControlelr();
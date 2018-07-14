module.exports = {
    userCreate : (req, res) => {
        res.json({action: "user create"});
    },
    userGet : (req, res) => {
        res.json({action: "user get"});
    }
}
const ConfigurationController = require("../creditone/ConfigurationController.js")
const LoginController = require("../creditone/LoginController.js")
module.exports = {
    redirect: function(req, res) {
        console.log(req.headers["x-c1b-jhcn"])
        switch (req.headers["x-c1b-jhcn"]) {
            case "configuration":

                    let response = ConfigurationController.configurationAPI()
                    console.log(response)
                    res.send(response)
            case "login_data_exposure":
                let loginResponse = LoginController.loginAPI()
                console.log(loginResponse)
                res.send(loginResponse)
            }
            res.end()
               
    }
}

const ConfigurationController = require("../creditone/ConfigurationController.js")
module.exports = {
    configurationAPI: function() {
        let configResponse = {
            "DueDateWarningDays": 5,
            "ApiUrl": "http://localhost:1337/",
            "WebsiteHomeUrl": "https://testxxaem.creditone.com/",
            "IsResetPasswordEnabled": true,
            "WebsiteMode": 1,
            "WebsiteSectionsUrl": {
                "CreditScore": "credit-auth.aspx",
                "ExpressPayment": "paymentselection.aspx",
                "AddUpdateBank": "updatebank.aspx",
                "TermsOfUse": "terms-use.aspx",
                "Privacy": "privacy-policy.aspx",
                "Security": "security.aspx",
                "PaperlessDocument": "",
                "Home": "home.aspx",
                "AdditionalAccountOffer": "additionalaccountapplication.aspx",
                "CreditProtectionOffer": "offercp.aspx",
                "AuthorizedUserOffer": "updateauthorizeduser.aspx",
                "PlasticDesignOffer": "premium-card.aspx",
                "EsignOffer": "mydocumentsagreement.aspx",
                "CreditScoreOffer": "credit-auth.aspx",
                "Offers": "specialoffers.aspx",
                "ApplicationStatus": "applicationstatus.aspx"
            },
            "NotificationsAndAlertsUrl": "https://alert.smsservicesnow.com/Landing/CREDITONE" 
          }
return configResponse
    }
}
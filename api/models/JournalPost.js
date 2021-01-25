const { models } = require("../../config/models");

module.exports = {
    attributes: {
        title: {
            type: 'string',
            required: true
        },

        body: {
            type: 'string',
            required: true
        }

    }
}
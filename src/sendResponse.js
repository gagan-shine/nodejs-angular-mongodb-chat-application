const responseMessage = require('../config/response-messages');


exports.sendSuccessData = async function (data, statusCode, language, message, res, decryptColumns = []) {

    let lang = language ? language : 'en';

    var successData = {
        status: 1,
        statusCode: statusCode,
        data: data,
        message:  message.message ? message.message[lang] : responseMessage.STATUS_MSG.ERROR.DEFAULT.message[lang]
    };
    sendData(successData, statusCode, res);
};
exports.sendErrorMessage = function (statusCode, language, message, res) {

    let lang = language ? language : 'en';
    var successData = {
        status: 0,
        statusCode: statusCode,
        data: {},
        message: message.message ? message.message[lang] : responseMessage.STATUS_MSG.ERROR.DEFAULT.message[lang]
    };
    sendData(successData, statusCode, res);
};

async function sendData(data, statusCode, res) {
    return res.status(statusCode).json(data);
}


exports.sendData = async function (data, statusCode, res) {
    return res.status(statusCode).json(data);
};
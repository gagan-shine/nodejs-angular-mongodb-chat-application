'use strict';
const Models = require('../../../models'),
	sendResponse = require('../../sendResponse'),
	RESPONSE_MESSAGES = require('../../../config/response-messages');

module.exports = {
	get_users_and_group_data: async (req, res) => {
		try {
			var criteria = { role: "0" }
			if(req.query?.id){
				criteria = { role: "0", '_id':{$ne:ObjectId(req.query.id)} }
			}
			var usersData = await Models.Users.find(criteria)

			var groupData = await Models.Group.find();
			var dataToSend = {
				usersList: usersData,
				groupList: groupData
			}
			return sendResponse.sendSuccessData(dataToSend, 200, req.headers.language, RESPONSE_MESSAGES.STATUS_MSG.SUCCESS.DEFAULT, res);
		} catch (err) {
			console.log("err ------------ ", err)
			return sendResponse.sendErrorMessage(500, req.headers.language, RESPONSE_MESSAGES.STATUS_MSG.ERROR.APP_ERROR, res);
		}
	},
};

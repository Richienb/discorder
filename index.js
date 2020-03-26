"use strict"

const Discord = require("discord.js")

module.exports = (token, options = {}) => {
	if (typeof token !== "string") throw new TypeError("Token was not specified!")

	const client = new Discord.Client(options)
	client.login(token)

	return client
}

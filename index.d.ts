import { ClientOptions, Client } from "discord.js"

/**
 * Create Discord bots.
 * @param token The Discord bot token.
 * @example
 * ```
 * const discorder = require("discorder");
 *
 * const bot = discorder("bot token");
 *
 * client.on("ready", () => {
 * 	console.log("Connected!");
 * });
 * ```
*/
declare function discorder<Options extends ClientOptions>(token: string, options?: Options): new (options: Options) => Client

export = discorder

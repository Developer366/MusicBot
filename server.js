//import discord.js classes
//node server.js "to run the discord bot"
const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');
const Discord = require('discord.js');
//const Client = new Discrod.Client();

var invite = "https://discord.com/api/oauth2/authorize?client_id=1093926769368776786&permissions=40671259392832&scope=bot";
var token = "MTA5MzkyNjc2OTM2ODc3Njc4Ng.G2eeWR.grg9znrNlaR7gRILwxz6MV5P47f65BJ4soDG9Y";

const client = new Client({intents: [GatewayIntentBits.Guilds] });

//guild means discrod server
//when client is ready run code to login. You LOgin the MusicBot1, then start the commands "Always logged in unless the bot breaks"
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`)
})
client.login(token)

data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Replies with Pong!"),
    async execute(interation) {
        await interaction.reply("PONGGG!!!"),
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
}



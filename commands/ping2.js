//secret ping
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping2')
		.setDescription('Replies with a Secret Pong hehehe!!!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!!!!', ephemeral: true });
	},
};
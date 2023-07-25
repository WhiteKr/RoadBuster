import { CacheType, Interaction, SlashCommandBuilder } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction: Interaction<CacheType>) {
        if (!interaction.isChatInputCommand()) return;
        await interaction.reply('Pong!');
    },
};
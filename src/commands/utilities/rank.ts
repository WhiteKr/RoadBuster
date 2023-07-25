import { CacheType, Interaction, SlashCommandBuilder, SlashCommandMentionableOption } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rank')
        .setDescription('Shows ft10 rank of mentioned user, or all if no user is mentioned.')
        .addMentionableOption((option: SlashCommandMentionableOption) =>
            option
                .setName('user')
                .setDescription('User to get rank of.')
                .setRequired(false)
        ),
    async execute(interaction: Interaction<CacheType>) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.options.getMentionable('user')) {
            await interaction.reply(`RANK OF ${interaction.options.getMentionable('user')}`);
        } else {
            await interaction.reply('LISTED RANK OF ALL USERS');
        }
    },
};
import { CacheType, Embed, EmbedBuilder, Interaction, SlashCommandBuilder, SlashCommandNumberOption, SlashCommandUserOption, User } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ft10')
        .setDescription('Push ft10 result in.')
        .addUserOption((option: SlashCommandUserOption) =>
            option
                .setName('winner')
                .setDescription('Winner of the ft10.')
                .setRequired(true)
        )
        .addUserOption((option: SlashCommandUserOption) =>
            option
                .setName('loser')
                .setDescription('Loser of the ft10.')
                .setRequired(true)
        )
        .addNumberOption((option: SlashCommandNumberOption) =>
            option
                .setName('score')
                .setDescription('Score of the loser')
                .setRequired(true)
        ),
    async execute(interaction: Interaction<CacheType>) {
        if (!interaction.isChatInputCommand()) return;

        const winner: User | null = interaction.options.getUser('winner');
        const loser: User | null = interaction.options.getUser('loser');
        const loseScore: number | null = interaction.options.getNumber('score');

        if (winner === loser) {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('#ff0000')
                        .setTitle('FT10 result NOT published.')
                        .setDescription('You cannot play against yourself.'),
                ],
                ephemeral: true,
            });
        }

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor('#00ff00')
                    .setTitle('FT10 result published!')
                    .addFields(
                        { name: 'Winner (10)', value: `${winner}`, inline: true },
                        { name: `Loser (${loseScore})`, value: `${loser}`, inline: true }
                    ),
            ],
        });
    },
};
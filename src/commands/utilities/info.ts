import { CacheType, EmbedBuilder, Interaction, SlashCommandBuilder, User } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Show info about the user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('The user to show info about')
                .setRequired(true)
        ),
    async execute(interaction: Interaction<CacheType>) {
        if (!interaction.isChatInputCommand()) return;

        const user: User | null = interaction.options.getUser('user');

        const infoEmbed: EmbedBuilder = new EmbedBuilder();
        infoEmbed
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL(),
            })
            .setTitle('Info')
            .setDescription(`about ${user}`)
            .addFields(
                { name: 'Rank', value: '4', inline: true },
                { name: 'Tier', value: 'S+', inline: true },
            )
            .setFooter({text: 'RoadBuster by @whitekr'})

        await interaction.reply({ embeds: [infoEmbed] });
    },
};
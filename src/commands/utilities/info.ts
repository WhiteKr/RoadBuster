import { CacheType, EmbedBuilder, Interaction, SlashCommandBuilder, User } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('정보')
        .setNameLocalizations({
            'en-GB': 'info',
            'en-US': 'info',
        })
        .setDescription('유저 정보를 열람합니다.')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('정보를 열람할 대상을 선택합니다.')
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
            .setTitle(`${user?.username} 정보`)
            .setDescription(`${user}`)
            .addFields(
                { name: '순위', value: '4', inline: true },
                { name: '티어', value: 'S+', inline: true },
            )
            .setFooter({ text: 'RoadBuster by @whitekr' });

        await interaction.reply({ embeds: [infoEmbed] });
    },
};
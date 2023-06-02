module.exports = {
    data: {
        name: 'sub-yt'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `here's a reply for ya`
        })
    }
}
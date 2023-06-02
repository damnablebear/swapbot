module.exports = {
    data: {
        name: 'add-your-tracking'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `Thanks for confirming your shipment. You've confirmed that you're sending a package with tracking number ${interaction.fields.getTextInputValue("tracking-num")} using delivery service ${interaction.fields.getTextInputValue("courier-service")} (if applicable), for trade ID ${interaction.fields.getTextInputValue("trade-id")}.`
        });
    }
}
const config = require('../config')
const {cmd , commands} = require('../command')
        cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Ping!!!```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key});
    }
);

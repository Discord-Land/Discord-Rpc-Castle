const client = require('discord-rich-presence')('625398970662780959');
client.on('connected' , ()=>{
    console.log('connected ');
    client.updatePresence({
        details: "Listining to castle music",
        state: "coding",
        largeImageKey: 'logo-2',
        largeImageText: "castle-music.site",
        smallImageKey: 'smallimage',
        smallImageText: "Small Image Hover Text",
        instance: true,
      });
})
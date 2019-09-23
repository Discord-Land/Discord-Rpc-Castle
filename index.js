const client = require('discord-rich-presence')('625398970662780959');
const path = require('path');
client.on('connected' , ()=>{
  console.log('connected')
})
setInterval(()=>{
  const fileName = path.resolve('./current.json')
  delete require.cache[fileName];
  const current = require('./current.json')
  client.updatePresence({
    details: current[0].song_artist,
    state:   current[0].song_name,
    largeImageKey: 'logo-2',
    largeImageText: "castle-music.site",
    instance: true,
  });
} , 5000)
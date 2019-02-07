var prefix = "$"
   client.on('message', message => {
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;
   
     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
   
     let args = message.content.split(" ").slice(1);
   
     if (command == "kick") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');
            
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
     if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     
   
     if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
   
     message.guild.member(user).kick();
   
     const kickembed = new Discord.RichEmbed()
     .setAuthor(`KICKED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : kickembed
     })
   }
   });
   client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc-users')){
if(!message.author.id === 'اي دي صاحب البوت') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', ra3d => {
var prefix = "البرفكس حقك"; /// Mal , Codes // Galal
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
var prefix = "!!";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
const Discord = require("discord.js");

var prefix = "&" //هنا البرفكس حقك

if (message.content === ( prefix + 'clear')) {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❎ لا تمتلك صلاحية تعديل الرسائل.");

  if(!args[0]) return message.channel.send("لا");

  message.channel.bulkDelete(args[0]).then(() => {

  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}// By L̸̮̮G̸̮̮S̸̮̮_HamoGamer_YT#2019
client.on('guildMemberAdd', member => {
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    const days = createdAt.toFixed(0); ////////// Mal , Codes //// Galal
    if(!days) return;
    if( days < 10 ) { member.ban() };    
}); ////////// Mal , Codes //// Galal
client.on('guildMemberAdd', member => {
var role = member.guild.roles.find('name', 'User');
member.addRole(role)
});
client.login(process.env.BOT_TOKEN);
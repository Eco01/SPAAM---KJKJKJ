const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const myid = [''];
const prefix = ['!'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`3 Account Online ✩' `);
   console.log(`----------------`);
});


//bot 1
client.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** يا ايكو  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

//bot 2
client2.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** Redo is 💜 !! **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

//bot 3
client3.on('message', message => {
    if(message.content === prefix+'daily'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'credits'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send('#rep <@286088294234718209>')
    }
});

client3.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`** يا يوسف  **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
//say bot 1
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

//say bot 2
client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "2say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

//say bot 3
client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "3say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

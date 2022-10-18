// Require the necessary discord.js classes

const { token } = require('./config.json');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const {exec} = require('child_process');
const scriptLocation = './script.sh';

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
	//the funny part
	else if (commandName === 'test'){
		await interaction.reply('test');
		prompt = interaction.options.getString('prompt');
		exec('python ${scriptLocation}', (err, stdout, stderr) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(stdout);
			// interaction.reply(stdout);
		});	
	} 
});

// Login to Discord with your client's token
client.login(token);
 

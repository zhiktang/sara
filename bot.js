// Require the necessary discord.js classes

const { token, pathToModel } = require('./config.json');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const {exec} = require('child_process');

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
		interaction.reply('test');
		prompt = "masterpiece, best quality, " + interaction.options.getString('prompt');
		exec(`python stable-diffusion/scripts/txt2img.py --prompt ${prompt} --ckpt ${pathToModel} --outdir /output.png`, (err, stdout, stderr) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(stdout);
			// interaction.reply(stdout);
		});	
		interaction.reply ({files: ['stable-diffusion/output.png']});
	} 
	else if (commandName === 'test2'){
		interaction.reply('test2');
		promt = "masterpiece, best quality, " + interaction.options.getString('prompt');
		await interaction.reply("prompt: " + prompt);
	}
});
client.login(token);
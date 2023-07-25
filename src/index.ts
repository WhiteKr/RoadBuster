import fs from 'node:fs';
import path from 'node:path';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { token } from './config.json';

const client: Client<boolean> = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const foldersPath: string = path.join(__dirname, 'commands');
const commandFolders: string[] = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath: string = path.join(foldersPath, folder);
    const commandFiles: string[] = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath: string = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

client.login(token);
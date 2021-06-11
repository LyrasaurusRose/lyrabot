const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class MotivationCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'motivation',
      aliases: ['motivational', 'motivation-quote', 'motivate'],
      group: 'fun',
      memberName: 'motivation',
      description: 'Get a random motivational quote!'
    });
  }
  run(message) {
    // thanks to https://type.fit/api/quotes

    const jsonQuotes = fs.readFileSync(
      '././resources/quotes/motivational.json',
      'utf8'
    );
    const quoteArray = JSON.parse(jsonQuotes).quotes;

    const randomQuote =
      quoteArray[Math.floor(Math.random() * quoteArray.length)];

    const quoteEmbed = new MessageEmbed()
      .setAuthor(
        'Motivational Quote',
        'https://i.imgur.com/Cnr6cQb.png',
        'https://type.fit'
      )
      .setDescription(`*"${randomQuote.text}*"\n\n-${randomQuote.author}`)
      .setTimestamp()
      .setFooter('LyraBot - Made with ❤️ by Lyra Rose • Powered by type.fit')
      .setColor('#32A8A0');
    return message.channel.send(quoteEmbed);
  }
};

const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'XBG4u.aternos.me',
    username: 'noty hawa',
    version: '1.21'
  });

  bot.on('login', () => {
    console.log('Bot successfully connected to the server!');
  });

  bot.on('spawn', () => {
    console.log('Bot spawned in the world.');
    
    // Jump every 30 seconds to prevent AFK kick
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('error', (err) => {
    console.log('Error:', err);
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 10 seconds...');
    setTimeout(createBot, 10000);
  });
}

createBot();

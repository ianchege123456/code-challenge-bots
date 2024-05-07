import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} />
      ))}
    </div>
  );
}

export default BotCollection;


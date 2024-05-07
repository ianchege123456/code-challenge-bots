import React from 'react';

function BotCard({ bot, addToArmy }) {
  return (
    <div className="bot-card" onClick={() => addToArmy(bot)}>
      {/* Render bot card content */}
    </div>
  );
}

export default BotCard;

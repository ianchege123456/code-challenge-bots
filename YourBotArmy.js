import React from 'react';

function YourBotArmy({ botArmy, releaseFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {botArmy.map(bot => (
        <div key={bot.id} className="your-bot">
          {/* Render bot army content */}
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;



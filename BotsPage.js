import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function BotPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch('/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
      })
      .catch(error => {
        console.error('Error fetching bot data:', error);
      });
  }, []);

  const addToArmy = (bot) => {
    setBotArmy([...botArmy, bot]);
  };

  const releaseFromArmy = (bot) => {
    setBotArmy(botArmy.filter(selectedBot => selectedBot.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`/bots/${botId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setBotArmy(botArmy.filter(bot => bot.id !== botId));
      }
    })
    .catch(error => {
      console.error('Error discharging bot:', error);
    });
  };

  return (
    <div>
      <BotCollection bots={bots} addToArmy={addToArmy} />
      <YourBotArmy botArmy={botArmy} releaseFromArmy={releaseFromArmy} dischargeBot={dischargeBot} />
    </div>
  );
}

export default BotPage;

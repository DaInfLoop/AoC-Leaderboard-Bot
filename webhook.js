const { fetch } = require('undici');
const DISCORD_USERS_AOC_USERS = require('./users');
const config = require('./config.json');

(async () => {
  let leaderboard = await fetch(`https://adventofcode.com/2023/leaderboard/private/view/${config.leaderboard}.json?order=stars`, {
    headers: {
      'Cookie': process.env.COOKIE,
      'Accept': 'application/json'
    }
  }).then(response => response.json());

  leaderboard = leaderboard.members

  leaderboard = Object.values(leaderboard).sort((a, b) => b.local_score - a.local_score).map((m, i) => `${['🥇','🥈','🥉'][i] || `${i+1})`} ${m.name || `(anonymous user #${m.id})`}${DISCORD_USERS_AOC_USERS[m.id]?` (<@${DISCORD_USERS_AOC_USERS[m.id]}>)`:''} - ${m.local_score} (⭐ ${m.stars})`);

  leaderboard.length = Math.min(leaderboard.length, 10);

  fetch(process.env.WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "Advent of Code Leaderboard",
          description: leaderboard.join('\n'),
          color: 0xFFEB3B,
          url: `https://adventofcode.com/2023/leaderboard/private/view/${config.leaderboard}`,
        }
      ],
    })
  })
})();

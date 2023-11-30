const { fetch } = require('undici');

const DISCORD_USERS_AOC_USERS = {
  "2246559": "<@658650587679948820>",
  "1567599": "<@456220387148169236>",
  "2246601": "<@803612750718697493>",
  "2246651": "<@639599540512620544>",
  "2246603": "<@790232461052608554>",
  "2246891": "<@952494565808570368>",
  "2246602": "<@660917925019910144>",
  "969872": "<@711455782746587197>",
  "1492005": "<@875067761557127178>",
  "2246718": "<@958519152878964756>",
  "364947": "<@400476562752929804>",
  "1321927": "<@813790398015209492>",
  "1573950": "<@543384567797776384>",
  "1994636": "<@834479429748654101>",
  "963501": "<@975920435432661052>",
  "3310137": "<@763253793990115338>"
};

(async () => {
  let leaderboard = await fetch('https://adventofcode.com/2023/leaderboard/private/view/970245.json?order=stars', {
    headers: {
      'Cookie': process.env.COOKIE,
      'Accept': 'application/json'
    }
  }).then(response => response.json());

  leaderboard = leaderboard.members

  leaderboard = Object.values(leaderboard).sort((a, b) => b.local_score - a.local_score).map((m, i) => `${['🥇','🥈','🥉'][i] || `${i+1})`} ${m.name || `(anonymous user #${m.id})`}${DISCORD_USERS_AOC_USERS[m.id]?` (${DISCORD_USERS_AOC_USERS[m.id]})`:''} - ${m.local_score} (⭐ ${m.stars})`);

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
          url: 'https://adventofcode.com/2023/leaderboard/private/view/970245',
          footer: {
            text: "Want to link your Discord Account? Ping @dainfloop (Don't spam though!) | View the full leaderboard by clicking the title"
          }
        }
      ],
    })
  })
})();

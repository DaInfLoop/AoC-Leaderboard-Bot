# Advent of Code Leaderboard Webhook

Cool script that posts a Advent of Code private leaderboard on Discord

> [!NOTE]  
> This version of the webhook runs in the [Friends of Replit](https://discord.gg/friendsofreplit) Discord server, running every day at about 5:30AM UTC.

## Setup

### GitHub Actions (recommended)
1. Fork this repo [(fork)](https://github.com/DaInfLoop/AoC-Leaderboard-Bot/fork)
2. Edit `config.json` with your private leaderboard ID
3. Open your Repository settings and head to `Secrets and variables` > `Actions`
4. Create two **Secrets**, called `COOKIE` (contains your Advent of Code session ID), and `WEBHOOK` (contains a Discord webhook URL)
5. Voila!

### Self-hosting
1. Clone this repo:
```sh
$ git clone https://github.com/DaInfLoop/AoC-Leaderboard-Bot.git
```
2. Move into the newly made directory
3. Run `npm i`
4. Edit `config.json` with your private leaderboard ID
5. Set up two environmental variables, called `COOKIE` (contains your Advent of Code session ID), and `WEBHOOK` (contains a Discord webhook URL)
6. Set up a cron-job or similar to run `node .` in the current directory at a certain time (e.g. 5:00AM UTC). The script does not do this by default.

## Linking Discord Users
To link a Discord user, open up `users.js` and add a new property to the object. The format is:

```js
{
  // other fields

  // An Identifier of sorts (not required)
  "AoC ID": "Discord ID",
}
```

### "Hey, but how do I get my Advent of Code ID?"

To get **your** Advent of Code ID, first go to your [settings page](https://adventofcode.com/settings). It should look something like this:  
![AoC Settings Page](https://github.com/DaInfLoop/AoC-Leaderboard-Bot/assets/92693892/6c5b10b2-c252-455e-b32c-41e492350005)

Grab your User ID from the `(anonymous user XXXXXX)` option. Voila.

### "Okay, how do I get my Discord ID?"

First of all:

![Frost Keeper from "House Vibe" kicking you](https://media.tenor.com/RU4kYByG3igAAAAC/house-vibe-roblox.gif)

Jokes aside, to get your Discord User ID, first enable Developer Mode (User Settings > Advanced > Developer Mode):

![Developer Mode](https://github.com/DaInfLoop/AoC-Leaderboard-Bot/assets/92693892/2af0cf9d-b9cd-41b9-a88e-4679ac3d4fc8)

Then click your user profile and click `Copy User ID`: 

![image](https://github.com/DaInfLoop/AoC-Leaderboard-Bot/assets/92693892/579a3f4e-9787-4a47-8ca8-8d964142fe03)

Voila!

### Cool, but how do I get my leaderboard ID?

<img src="https://discord.com/assets/1f0555b99bb187cbc6c4.svg" width="64px"/>

![Incoming Sword](https://media.discordapp.net/attachments/713391255480172565/1127957841177747558/interesting-sandbox-game-house-vibe.gif)

Open your private leaderboard (e.g. https://adventofcode.com/2023/leaderboard/private/view/970245) and grab the ID. It's that easy.

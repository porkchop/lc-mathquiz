module.exports = {
  url: "dev01-dot-1337coin.appspot.com",
  // Developer key and secret, Obtainable here:  www.leetcoin.com/developer/
  developer_api_key: process.env.LCAPIKEY, // "xxxxxx-xxxxxx-xxxxxx-xxxxxx",
  developer_shared_secret: process.env.LCSHAREDSECRET, // "xxxxxxxx",
  // Game key, which is used to identify the game that is being played
  // This points to leetcoin-math-quiz, which can be viewed here:  www.leetcoin.com/game/view/agpzfjEzMzdjb2luchELEgRHYW1lGICAgMDd5dgKDA
  game_key: process.env.LCGAMEKEY, // "xxxxxxxxxx",
  // Are we running on the development server?
  local_testing: !!process.env.LOCALTESTING,
  port: process.env.PORT || 3000,
  myURL: process.env.MYURL || 'http://localhost:3000'
}
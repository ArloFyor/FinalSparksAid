import 'dotenv/config';

export default {
  "expo": {
    "name": "SparksAid",
    "slug": "your-app-sparksAid",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "icon": "https://media.discordapp.net/attachments/773131285505245186/1219036391619428382/sparksAidLogo.png?ex=6609d71c&is=65f7621c&hm=f55baa3e27cf7a4c709ff48e869bddeb8183f7b05372354b0579897013b2a694&=&format=webp&quality=lossless",
    "splash": {
      "image": "https://media.discordapp.net/attachments/773131285505245186/1219036392105971762/slugImage.png?ex=6609d71c&is=65f7621c&hm=5ab6ab7dded784d8f5a8402831bd4707da12cfedb74e34ff24aa4cecc8b53708&=&format=webp&quality=lossless&width=276&height=597",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "extra": {
      "apiKey": process.env.API_KEY,
      "authDomain": process.env.AUTH_DOMAIN,
      "projectId": process.env.PROJECT_ID,
      "storageBucket": process.env.STORAGE_BUCKET,
      "messagingSenderId": process.env.MESSAGING_SENDER_ID,
      "appId": process.env.APP_ID
    }
  }
}

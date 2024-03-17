import 'dotenv/config';

export default {
  "expo": {
    "name": "SparksAid",
    "slug": "your-app-sparksAid",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "icon": "./assets/logoAndSlug/sparksAidLogo.png",
    "splash": {
      "image": "./assets/logoAndSlug/slugImage.png",
      "resizeMode": "contain",
      "backgroundColor": "#F5F5DC"
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
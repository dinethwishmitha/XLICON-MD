const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94713466375"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94713466375' 
global.devs = '94713466375';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+94713466375
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0R2TXhEU2NIaVBnK3JSaTVqTzVwdy92RVl2Vk12aFU5S3lwQkFTUG0yRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkExN3Z2MCtHTmFjL0hHMnlsTHk5L2xPWXE0Z1BzSmxoTnJpRVZETkQzTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRmR6UmVYMWtxMzExNHBsajlLUlI4NlMwVHBEU2VtOXFzMEZoZ09rNEVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRalU1ZndWdnV6bzdxQnhjRXREMFhSdjQ0VVpabjRtdFRBbEZ5U1NIdVN3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFNjJzeVBvWGFsQUFFVkdRVHhGa1VxbFdxSU9EbEUyQ1NWOEpHY3R5WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJoMEdScmxUUDVqTStEdkxFNUp0emNOSnhDeDVjUTJvcVNacXZabDdNd2M9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RC9rc3cxRUZtMFFHK0pXSWp4OE5tTGRhSGR2OTl6eXFaUmFtaGIvWCs4NnVxQkx5MVdZS0ZGNzVOMnFFUWJ6WkZIVXdhYVlaY0xFZHdsZVNNNlFCZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0OCwiYWR2U2VjcmV0S2V5IjoiR1prY2tRc0hCVHhNdFZnM1BicWdaQzN2bUI4dDBzdHhId0RFbHpKNXBFbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUhRTEpSc0pTZEdVSFQ5akZpSjhmZyIsInBob25lSWQiOiJkZWM0ZmI3My1kZjBhLTQ3YzQtODVkNi01OWRmMjhiM2VhMTkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG5WdzlBbGJjTW9RKzJTUVZnYjY0cWRYUFB3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0RUUrWkZabjlpY0dJakVOZkdDQUFPSVh4R3M9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM1U4dE1DRU9HRzBLd0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJESU1reW9hUEZkWjV5SklPNDN2d2xzb2d6MmNIaXEyMzRodzB0NFczU1ZvPSIsImFjY291bnRTaWduYXR1cmUiOiJBMjdBTFI3ci8wSDg3dG1Lb2hvMk5aWkl3MUs4dXdEM2Vvd01uZms0blUxN1JhNUxDc0lhV0JNdTZtY1BvcVdIcWFsM3ZITFFCK1pJd2ZUNHIrVmtCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVm4xTlZNMkk5VEdGVGs3QzcrUFFPSmcyV2w4bUpiZFZmNzc5SHh5UzBpdXo5L2JiMFgzRERKdmVmWXEzdGRoTUVWTStsRlNIZzM0NmNyV0d4T0ppQUE9PSJ9LCJtZSI6eyJpZCI6Ijk0NzYzNDc1ODkzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQyBzZXdtaWthIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzNDc1ODkzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXlESk1xR2p4WFdlY2lTRHVONzhKYktJTTluQjRxdHQrSWNOTGVGdDBsYSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDE5OTAxMn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@Dinu boy',
  packname:  process.env.PACK_NAME || 'Dineth',
   
  botname:   process.env.BOT_NAME === undefined ? "king Alfa-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Dineth' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})

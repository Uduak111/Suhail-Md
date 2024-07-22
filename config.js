const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349033769727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_31_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicFdwK0E3WDNlSXRFNGRrNG5WbEtpZVRjQnVUWU0yN2tpaVJVMmlSemYraz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDMzNzY5NzI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RUU4Rjc0OUVDMjNGNDY5MTg5Rjk0OTJFQjU1NEQ5M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2Njk0ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUWlldmZFUWFTUmFySUV1OVhZREtGUVwiLFxuICBcInBob25lSWRcIjogXCIzZWRkMzYwOC0zMWYxLTQ0M2EtODI1Ny03ODY0MDJjNjQwMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgOTEsXG4gICAgICAyMjUsXG4gICAgICAxMjMsXG4gICAgICAyNDgsXG4gICAgICAxMzYsXG4gICAgICAyNTMsXG4gICAgICA1NixcbiAgICAgIDEzOCxcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDYyLFxuICAgICAgMTQwLFxuICAgICAgMjA2LFxuICAgICAgMTE1LFxuICAgICAgMTU0LFxuICAgICAgMjUxLFxuICAgICAgODgsXG4gICAgICAyMzEsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTE3LFxuICAgICAgMTU2LFxuICAgICAgMjMxLFxuICAgICAgMjI5LFxuICAgICAgOSxcbiAgICAgIDY0LFxuICAgICAgOTAsXG4gICAgICAyNDksXG4gICAgICAxMDksXG4gICAgICAyMjUsXG4gICAgICAxNjYsXG4gICAgICAxMjgsXG4gICAgICA4NixcbiAgICAgIDMxLFxuICAgICAgMTM0LFxuICAgICAgMTEzLFxuICAgICAgNjIsXG4gICAgICA0NSxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTkpBRjFWWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMzc2OTcyNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNvYWNoIEpvc2VwaFwiLFxuICAgIFwibGlkXCI6IFwiMjM3OTQ1MDQ3NDkwNjg6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlWMEpJRUVOMnUrclFHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJocWREQkNPRm81cWVmSHdyQmhVcGc5K2VidnNUb25JYXdQY0lkcWFQdGlNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInV4eEx5ZEdoTzZFTFE5K3RMWnNCMDZTWXY0alNNVjZma0RSRnNpNGwxamgrRUpCb0Vtd0p2WDZnR3ZpcjVKN04vb2oycy90NnF0K2VHOTJ5NUV4aUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkkxVjBHQ1MzZy9acXpiaW5Ic041anRMNFNTM2c5OGVQV2RJdkNSVWlQRU9YdHY3VlFQTkI0Q3Y4M3ZwUGd3QVpQS1VqcDNwY0MzeXNlY1Bsa3BmWENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzM3Njk3Mjc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjY5NDczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2NmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHY2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzdlZqRXhGQStZV2VDZnIzc25iQXZnMXJiMzFvb2pjUFpkWUw2aXoxSDR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTI4MDQwODgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

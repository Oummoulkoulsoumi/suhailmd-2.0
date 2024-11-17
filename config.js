const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237658931101";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "bonne suit"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_50_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDksXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4Nnk2SUFIT3NtaWI2WnFkSWk3MGZ1MC9mMStGYmZCSEpaSTFEZnZUYXVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnU2pzc0pDUFNQQ085MUYtUDRCZ2lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY4NjBjNGM5LTY2MDgtNDc2Yy05N2U1LWY3MWVhOTJhNDM4ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAzNSxcbiAgICAgIDksXG4gICAgICAzMCxcbiAgICAgIDIyNSxcbiAgICAgIDgxLFxuICAgICAgNyxcbiAgICAgIDEwNSxcbiAgICAgIDM5LFxuICAgICAgMTU5LFxuICAgICAgNzUsXG4gICAgICA3OSxcbiAgICAgIDU0LFxuICAgICAgMjksXG4gICAgICA5OSxcbiAgICAgIDE5NyxcbiAgICAgIDEyOSxcbiAgICAgIDM4LFxuICAgICAgMTc2LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjQ2LFxuICAgICAgMjEzLFxuICAgICAgMTMzLFxuICAgICAgMTEsXG4gICAgICAxNzUsXG4gICAgICAxNjIsXG4gICAgICAxMDIsXG4gICAgICA5OCxcbiAgICAgIDE4MCxcbiAgICAgIDIxNSxcbiAgICAgIDgxLFxuICAgICAgNTcsXG4gICAgICAxOTcsXG4gICAgICAyNDksXG4gICAgICAxMjMsXG4gICAgICAxOTIsXG4gICAgICAxNDcsXG4gICAgICA1NCxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQMkRaU0JSRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjU4OTMxMTAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDUzMzM0MzM5NjEyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS095NUtjR0VPaVU1N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFNGJUcmRXd25lZ0VkUDBxOTZEVWxFeDkrY0tSc1FMVVJCZnRJbGNUWkQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlM4OHFEQ1FGNXpobWJxWEpXcXpVWVNlRWpIbytPZ3FZNzZhOFpJUUkzL1FyTndjK3ZsTnJQSDRIaFd6aEZDcUpaUHRpZ041dTJacThKQmptd3FMa0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVzeGhWeVVBbDljY0Q1QmRSMStEL3prNHp2aG04M3hyUEp6bi8wQndFNjRGc2NHTlAxWGhMbW8wbWlpcWNhc2JoQ2VQK3MxTFF6Mmk3M1FNRSsrQUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODkzMTEwMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE4NDA2MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOQS5qc29uIjogIntcImtleURhdGFcIjpcIkhnZEpyT3hYcW1VTkZLQnRmQVBiYWZiRnV0YlJYZ0c5OURwVURKdGlIbjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY5NDA0NjQ5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxODQwNjI1NzgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

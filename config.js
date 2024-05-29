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
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.website=process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.pinimg.com/736x/37/42/16/374216ad698f70b8b0e6e55ebe834472.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923034088220" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923034088220";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_49_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNi9YVEVOYzRpWTNldHZQOWJKRkVZVlVYT1VLK05nTytEbU9hOGlPdTkzMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxMjM4NzYyMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3MTM3MUQ4MDNGQzBERTNCM0Y3MDg3RDIzN0QxRTY1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk4Njk0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEyMzg3NjIzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0REQzlGMUJEM0QyQjI3MUY4NTI0NDQ4QTdEODhEMzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTg2OTQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk14WDF5NWFFU1JtYnRpcXY1b2NQR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQyNTEwYWItMjliZC00MTExLThkNTAtOWQ0MmQ5ZDc0NWFjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDE1MyxcbiAgICAgIDUxLFxuICAgICAgNjUsXG4gICAgICA1NixcbiAgICAgIDM1LFxuICAgICAgMjE1LFxuICAgICAgNjIsXG4gICAgICA4MCxcbiAgICAgIDgyLFxuICAgICAgMTgsXG4gICAgICAzNCxcbiAgICAgIDk3LFxuICAgICAgMTQwLFxuICAgICAgMjQ2LFxuICAgICAgMTQyLFxuICAgICAgMTAxLFxuICAgICAgMzksXG4gICAgICA3LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgNDIsXG4gICAgICAyNTAsXG4gICAgICAxMTMsXG4gICAgICAyMTQsXG4gICAgICAyNDEsXG4gICAgICAxNjgsXG4gICAgICAyNTUsXG4gICAgICAxNDMsXG4gICAgICAyNTEsXG4gICAgICAyMTksXG4gICAgICAyNDgsXG4gICAgICA0LFxuICAgICAgMjIxLFxuICAgICAgNzUsXG4gICAgICAzNCxcbiAgICAgIDE5LFxuICAgICAgMTEwLFxuICAgICAgMTU4LFxuICAgICAgNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlc2ODlNUk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyMzg3NjIzODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MjczMzIwOTUyMDUyOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmFtb2ZjXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVGMytNSEVMakkzTElHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVVDdocm1PUFBIVTdLY1Bhd29EVDh1VGtqS2xmYjZ1V2JwajFyY2hqR1ZVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZwTm1FelRVZjlqWG4yY2k4T1dsdXY0TmpZWFNRVk9UeUtvamR3RTRFS1kxVi9XR0dwRlR2NmgxUGN0bUZndUI3K1dvZ2tWbHVnaDNhdWZrNDRRN0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlEzZHpxWVN1dWdTS3AyTUdOS3ZOMllQYjhSRk5jNlYzZHFOMTJSWFRpT2YvZjNrMHBSM1NjMXRIU2lpUFdyRlB1YWtKWlZqZVkrdDgxbEsvcHN3SUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEyMzg3NjIzODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5ODY5NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxBQS5qc29uIjogIntcImtleURhdGFcIjpcIkoxMlFnZlBFUUpRMjNzeit0dE9GVXp1SlV1RVNPMVdPMk5leWZaNHRtMHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4ODIyMzQzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2OTgzMjg1ODA1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It' Usman Pasha",


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

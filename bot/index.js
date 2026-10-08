// ==========================================
// ⚡ XMATRIX — FUTURISTIC TELEGRAM BOT
// Version 1.0.0
// ==========================================

const http = require("http");
const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

// ==========================================
// CONFIGURATION
// ==========================================

const BOT_TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = Number(process.env.OWNER_ID);
const PORT = process.env.PORT || 10000;

if (!BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing.");
  process.exit(1);
}

if (!OWNER_ID) {
  console.error("❌ OWNER_ID is missing.");
  process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// ==========================================
// RENDER WEB SERVER
// ==========================================

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: "online",
        system: "XMATRIX",
        version: "1.0.0"
      })
    );

    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("⚡ XMATRIX ONLINE");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🌐 XMATRIX WEB SERVER ONLINE ON PORT ${PORT}`);
});

// ==========================================
// MAIN MENU
// ==========================================

function mainMenu() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback("🧠 AI CORE", "ai"),
      Markup.button.callback("🎙 VOICE AI", "voice")
    ],
    [
      Markup.button.callback("🖼 AI VISION", "vision"),
      Markup.button.callback("📄 DOC AI", "docs")
    ],
    [
      Markup.button.callback("💎 PREMIUM", "premium"),
      Markup.button.callback("👤 PROFILE", "profile")
    ],
    [
      Markup.button.callback("🎟 PROMO", "promo"),
      Markup.button.callback("💳 PAYMENTS", "payments")
    ],
    [
      Markup.button.callback("📥 DOWNLOADER", "download"),
      Markup.button.callback("🎮 GAMES", "games")
    ],
    [
      Markup.button.callback("🔧 TOOLS", "tools"),
      Markup.button.callback("📡 STATUS", "status")
    ],
    [
      Markup.button.callback("🚀 MINI APP", "miniapp")
    ]
  ]);
}

// ==========================================
// BACK BUTTON
// ==========================================

function backButton() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback("⬅️ BACK TO XMATRIX", "home")
    ]
  ]);
}

// ==========================================
// /START
// ==========================================

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";

  await ctx.reply(
`⚡ XMATRIX

👋 Welcome, ${name}.

🟢 CORE: ONLINE
🧠 AI: READY
💎 PREMIUM: AVAILABLE
🔐 SECURITY: ACTIVE

━━━━━━━━━━━━━━━━━━

🚀 NEXT-GENERATION
TELEGRAM INTELLIGENCE

Select a module below.`,
    mainMenu()
  );
});

// ==========================================
// /ID
// ==========================================

bot.command("id", async (ctx) => {
  await ctx.reply(
`🆔 YOUR TELEGRAM ID

${ctx.from.id}`
  );
});

// ==========================================
// /HELP
// ==========================================

bot.command("help", async (ctx) => {
  await ctx.reply(
`⚡ XMATRIX HELP

/start
Open XMATRIX

/id
Show your Telegram ID

/profile
View your profile

/premium
View Premium

/status
System status

/panel
Owner control panel

/help
Show this help`
  );
});

// ==========================================
// /PROFILE
// ==========================================

bot.command("profile", async (ctx) => {
  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : "Not set";

  const isOwner = ctx.from.id === OWNER_ID;

  await ctx.reply(
`👤 XMATRIX PROFILE

━━━━━━━━━━━━━━━━━━

👤 Name:
${ctx.from.first_name || "Unknown"}

🔗 Username:
${username}

🆔 Telegram ID:
${ctx.from.id}

💎 Plan:
${isOwner ? "👑 OWNER" : "FREE"}

━━━━━━━━━━━━━━━━━━

⚡ XMATRIX ACCOUNT`
  );
});

// ==========================================
// /PREMIUM
// ==========================================

bot.command("premium", async (ctx) => {
  await ctx.reply(
`💎 XMATRIX PREMIUM

━━━━━━━━━━━━━━━━━━

⚡ Advanced AI
🎙 Voice AI
🖼 AI Vision
📄 Document AI
📥 Advanced Downloader
🚀 Priority Processing
🧠 Extended AI Features

━━━━━━━━━━━━━━━━━━

💎 PREMIUM SYSTEM
COMING SOON`
  );
});

// ==========================================
// /STATUS
// ==========================================

bot.command("status", async (ctx) => {
  await ctx.reply(
`📡 XMATRIX SYSTEM STATUS

━━━━━━━━━━━━━━━━━━

🟢 CORE ........ ONLINE
🟢 TELEGRAM .... ONLINE
🟢 SERVER ...... ONLINE
🟢 COMMANDS .... ONLINE
🟡 AI ENGINE ... STANDBY
🟡 DATABASE .... STANDBY
🟡 MINI APP .... STANDBY

━━━━━━━━━━━━━━━━━━

⚡ SYSTEM v1.0.0`
  );
});

// ==========================================
// HOME BUTTON
// ==========================================

bot.action("home", async (ctx) => {
  await ctx.answerCbQuery();

  const name = ctx.from.first_name || "User";

  await ctx.editMessageText(
`⚡ XMATRIX

👋 Welcome back, ${name}.

🟢 CORE: ONLINE
🧠 AI: READY
💎 PREMIUM: AVAILABLE
🔐 SECURITY: ACTIVE

━━━━━━━━━━━━━━━━━━

Select a module below.`,
    mainMenu()
  );
});

// ==========================================
// AI CORE
// ==========================================

bot.action("ai", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🧠 AI CORE

━━━━━━━━━━━━━━━━━━

XMATRIX intelligence center.

Planned capabilities:

💬 AI Chat
🧠 Context-aware answers
📝 Summarization
🌐 Translation
💻 Coding Assistant
📚 Smart Learning
🔎 Research Assistant

━━━━━━━━━━━━━━━━━━

⚡ AI ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// VOICE AI
// ==========================================

bot.action("voice", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎙 VOICE AI

━━━━━━━━━━━━━━━━━━

Talk to XMATRIX using your voice.

Planned capabilities:

🎤 Speech → Text
🧠 Voice Understanding
⚡ Voice Commands
📝 Action Items
🔊 AI Responses

━━━━━━━━━━━━━━━━━━

🎙 VOICE ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// AI VISION
// ==========================================

bot.action("vision", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🖼 AI VISION

━━━━━━━━━━━━━━━━━━

Send an image to XMATRIX.

Planned capabilities:

🔍 Image Analysis
📖 OCR / Text Extraction
🧠 Image Understanding
🎨 Visual Intelligence
📊 Image Questions

━━━━━━━━━━━━━━━━━━

🖼 VISION ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// DOCUMENT AI
// ==========================================

bot.action("docs", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📄 DOC AI

━━━━━━━━━━━━━━━━━━

Upload a document and let
XMATRIX understand it.

Planned capabilities:

📚 PDF Q&A
📝 Document Summaries
🔎 Smart Search
🧠 Document Analysis
📖 Study Assistant

━━━━━━━━━━━━━━━━━━

📄 DOC ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// PREMIUM
// ==========================================

bot.action("premium", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💎 XMATRIX PREMIUM

━━━━━━━━━━━━━━━━━━

Unlock advanced XMATRIX features.

⚡ Advanced AI
🎙 Voice AI
🖼 AI Vision
📄 Document AI
📥 Premium Tools
🚀 Priority Processing
🧠 Extended Intelligence

━━━━━━━━━━━━━━━━━━

💎 PREMIUM
COMING SOON`,
    backButton()
  );
});

// ==========================================
// PROFILE
// ==========================================

bot.action("profile", async (ctx) => {
  await ctx.answerCbQuery();

  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : "Not set";

  const isOwner = ctx.from.id === OWNER_ID;

  await ctx.editMessageText(
`👤 PROFILE

━━━━━━━━━━━━━━━━━━

👤 ${ctx.from.first_name || "Unknown"}

🔗 ${username}

🆔 ${ctx.from.id}

💎 ${isOwner ? "OWNER" : "FREE USER"}

━━━━━━━━━━━━━━━━━━

⚡ XMATRIX ACCOUNT`,
    backButton()
  );
});

// ==========================================
// PROMO
// ==========================================

bot.action("promo", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎟 PROMO CENTER

━━━━━━━━━━━━━━━━━━

Have an XMATRIX promo code?

Use:

/promo YOUR_CODE

━━━━━━━━━━━━━━━━━━

🎟 PROMO SYSTEM
COMING SOON`,
    backButton()
  );
});

// ==========================================
// PAYMENTS
// ==========================================

bot.action("payments", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💳 PAYMENTS

━━━━━━━━━━━━━━━━━━

XMATRIX payment infrastructure.

Planned:

⭐ Telegram Stars
💎 Premium Subscriptions
🛒 Digital Products
🌐 TON Payments

━━━━━━━━━━━━━━━━━━

💳 PAYMENT ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// DOWNLOADER
// ==========================================

bot.action("download", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📥 DOWNLOADER

━━━━━━━━━━━━━━━━━━

Media tools will be connected
to XMATRIX here.

Planned:

🎵 Music
🎬 Video
📷 Media
📁 Files
🔗 URL Processing

━━━━━━━━━━━━━━━━━━

📥 DOWNLOAD ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// GAMES
// ==========================================

bot.action("games", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎮 XMATRIX GAMES

━━━━━━━━━━━━━━━━━━

Interactive Telegram games.

Planned:

🎯 Challenges
🏆 Leaderboards
🧠 Trivia
🎲 Mini Games
⚡ Multiplayer

━━━━━━━━━━━━━━━━━━

🎮 GAME ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// TOOLS
// ==========================================

bot.action("tools", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🔧 XMATRIX TOOLS

━━━━━━━━━━━━━━━━━━

🧮 Calculator
📝 Text Tools
🔐 Security Tools
🌐 Web Utilities
💻 Developer Tools
📊 Data Tools
⚙️ Automation

━━━━━━━━━━━━━━━━━━

🔧 TOOL ENGINE
STANDBY`,
    backButton()
  );
});

// ==========================================
// STATUS BUTTON
// ==========================================

bot.action("status", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📡 XMATRIX STATUS

━━━━━━━━━━━━━━━━━━

🟢 CORE ........ ONLINE
🟢 BOT ......... ONLINE
🟢 TELEGRAM .... ONLINE
🟢 SERVER ...... ONLINE

🟡 AI .......... STANDBY
🟡 DATABASE .... STANDBY
🟡 MINI APP .... STANDBY

━━━━━━━━━━━━━━━━━━

VERSION 1.0.0`,
    backButton()
  );
});

// ==========================================
// MINI APP
// ==========================================

bot.action("miniapp", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🚀 XMATRIX MINI APP

━━━━━━━━━━━━━━━━━━

The XMATRIX full-screen
experience will live here.

Planned:

📊 Dashboard
🧠 AI Workspace
💎 Premium Center
⚙️ Settings
📱 Interactive Tools
👤 Account Center

━━━━━━━━━━━━━━━━━━

🚀 MINI APP
COMING SOON`,
    backButton()
  );
});

// ==========================================
// OWNER PANEL
// ==========================================

bot.command("panel", async (ctx) => {
  if (ctx.from.id !== OWNER_ID) {
    return ctx.reply(
`⛔ ACCESS DENIED

This command is restricted
to the XMATRIX owner.`
    );
  }

  await ctx.reply(
`👑 XMATRIX OWNER PANEL

━━━━━━━━━━━━━━━━━━

🟢 SYSTEM ONLINE

Available controls:

👥 User Management
💎 Premium Management
🎟 Promo Management
📢 Broadcast
📊 Statistics
⚙️ System Settings
🔧 Maintenance

━━━━━━━━━━━━━━━━━━

👑 OWNER ACCESS VERIFIED`
  );
});

// ==========================================
// UNKNOWN COMMAND HANDLER
// ==========================================

bot.on("text", async (ctx) => {
  const message = ctx.message.text;

  if (!message.startsWith("/")) {
    return;
  }

  await ctx.reply(
`⚡ XMATRIX

❌ Unknown command.

Use /help to see available commands.`
  );
});

// ==========================================
// ERROR HANDLER
// ==========================================

bot.catch((err, ctx) => {
  console.error(
    "❌ XMATRIX ERROR:",
    err
  );

  try {
    ctx.reply(
      "⚠️ XMATRIX encountered an error. Please try again."
    );
  } catch (_) {}
});

// ==========================================
// LAUNCH
// ==========================================

console.log("⚡ XMATRIX CORE INITIALIZING...");
console.log("🧠 AI SYSTEM: READY");
console.log("🔐 SECURITY SYSTEM: READY");
console.log("📡 TELEGRAM ENGINE: STARTING...");

bot.launch()
  .then(() => {
    console.log("🟢 XMATRIX ONLINE");
    console.log("🚀 XMATRIX IS READY");
  })
  .catch((err) => {
    console.error(
      "❌ XMATRIX FAILED TO START:",
      err
    );

    process.exit(1);
  });

// ==========================================
// SAFE SHUTDOWN
// ==========================================

process.once("SIGINT", () => {
  console.log("🛑 XMATRIX STOPPING...");
  bot.stop("SIGINT");
});

process.once("SIGTERM", () => {
  console.log("🛑 XMATRIX STOPPING...");
  bot.stop("SIGTERM");
});
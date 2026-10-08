// ======================================================
// ⚡ XMATRIX 2.0
// Futuristic Telegram Bot
// ======================================================

const http = require("http");
const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

// ======================================================
// CONFIG
// ======================================================

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

// ======================================================
// RENDER HEALTH SERVER
// ======================================================

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: "online",
        bot: "XMATRIX",
        version: "2.0.0"
      })
    );

    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("⚡ XMATRIX 2.0 ONLINE");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

// ======================================================
// XMATRIX MAIN MENU
// ======================================================

function mainMenu() {
  return Markup.inlineKeyboard([

    // AI
    [
      Markup.button.callback("🧠 AI CORE", "ai"),
      Markup.button.callback("🎙 VOICE AI", "voice")
    ],

    [
      Markup.button.callback("🖼 AI VISION", "vision"),
      Markup.button.callback("📄 DOC AI", "docs")
    ],

    // MEDIA
    [
      Markup.button.callback("📥 DOWNLOADER", "download"),
      Markup.button.callback("🎮 GAMES", "games")
    ],

    // ACCOUNT
    [
      Markup.button.callback("💎 PREMIUM", "premium"),
      Markup.button.callback("👤 PROFILE", "profile")
    ],

    // ECONOMY
    [
      Markup.button.callback("🏆 LEADERBOARD", "leaderboard"),
      Markup.button.callback("💰 TREASURY", "treasury")
    ],

    // COMMUNITY
    [
      Markup.button.callback("🎟 PROMO", "promo"),
      Markup.button.callback("⭐ SUPPORT", "support")
    ],

    // TOOLS
    [
      Markup.button.callback("🔧 TOOLS", "tools"),
      Markup.button.callback("📡 STATUS", "status")
    ],

    // MINI APP
    [
      Markup.button.callback("🚀 MINI APP", "miniapp")
    ],

    // OWNER
    [
      Markup.button.callback("👨‍💻 DEVELOPER", "developer")
    ]
  ]);
}

// ======================================================
// BACK BUTTON
// ======================================================

function backButton() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback("⬅️ XMATRIX HOME", "home")
    ]
  ]);
}

// ======================================================
// WELCOME MESSAGE
// ======================================================

function welcomeText(name) {
  return `
<b>👋 Hello ${name}! I'm XMATRIX ⚡</b>

<b>🤖 Your next-generation Telegram assistant.</b>

━━━━━━━━━━━━━━━━━━

<b>🧠 Artificial Intelligence</b>
AI chat, vision, voice and document
intelligence.

<b>📥 Media & Tools</b>
Powerful utilities and media tools
inside Telegram.

<b>🎮 Fun & Economy</b>
Games, rewards, leaderboards and
future XMATRIX economy features.

<b>🔐 Security & Automation</b>
Smart automation and protected
owner controls.

━━━━━━━━━━━━━━━━━━

<b>⚡ XMATRIX 2.0</b>
<i>Think faster. Automate smarter.</i>

Select a module below.
`;
}

// ======================================================
// START
// ======================================================

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";

  await ctx.replyWithHTML(
    welcomeText(name),
    mainMenu()
  );
});

// ======================================================
// /MENU
// ======================================================

bot.command("menu", async (ctx) => {
  const name = ctx.from.first_name || "User";

  await ctx.replyWithHTML(
    welcomeText(name),
    mainMenu()
  );
});

// ======================================================
// /ID
// ======================================================

bot.command("id", async (ctx) => {
  await ctx.reply(
`🆔 YOUR TELEGRAM ID

${ctx.from.id}`
  );
});

// ======================================================
// /HELP
// ======================================================

bot.command("help", async (ctx) => {
  await ctx.replyWithHTML(`
<b>⚡ XMATRIX HELP</b>

━━━━━━━━━━━━━━━━━━

/start — Open XMATRIX
/menu — Open main menu
/id — Your Telegram ID
/profile — Your profile
/premium — Premium
/status — System status
/panel — Owner panel

━━━━━━━━━━━━━━━━━━

<b>Use the buttons for XMATRIX modules.</b>
`);
});

// ======================================================
// /PROFILE
// ======================================================

bot.command("profile", async (ctx) => {
  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : "Not set";

  const owner = ctx.from.id === OWNER_ID;

  await ctx.replyWithHTML(`
<b>👤 XMATRIX PROFILE</b>

━━━━━━━━━━━━━━━━━━

👤 <b>Name:</b>
${ctx.from.first_name || "Unknown"}

🔗 <b>Username:</b>
${username}

🆔 <b>ID:</b>
<code>${ctx.from.id}</code>

💎 <b>Plan:</b>
${owner ? "👑 OWNER" : "FREE"}

━━━━━━━━━━━━━━━━━━

⚡ <b>XMATRIX ACCOUNT</b>
`);
});

// ======================================================
// /PREMIUM
// ======================================================

bot.command("premium", async (ctx) => {
  await ctx.replyWithHTML(`
<b>💎 XMATRIX PREMIUM</b>

━━━━━━━━━━━━━━━━━━

⚡ Advanced AI
🎙 Voice AI
🖼 AI Vision
📄 Document AI
📥 Premium tools
🚀 Priority processing
🧠 Extended intelligence

━━━━━━━━━━━━━━━━━━

💎 <b>PREMIUM SYSTEM</b>

<i>Subscription system will be
connected in a later stage.</i>
`);
});

// ======================================================
// /STATUS
// ======================================================

bot.command("status", async (ctx) => {
  await ctx.reply(`
📡 XMATRIX STATUS

━━━━━━━━━━━━━━━━━━

🟢 CORE ........ ONLINE
🟢 TELEGRAM .... ONLINE
🟢 SERVER ...... ONLINE
🟢 COMMANDS .... ONLINE

🟡 AI ENGINE ... READY
🟡 DATABASE .... STANDBY
🟡 MINI APP .... STANDBY

━━━━━━━━━━━━━━━━━━

⚡ XMATRIX 2.0
`);
});

// ======================================================
// HOME
// ======================================================

bot.action("home", async (ctx) => {
  await ctx.answerCbQuery();

  const name = ctx.from.first_name || "User";

  await ctx.editMessageText(
    welcomeText(name),
    {
      parse_mode: "HTML",
      ...mainMenu()
    }
  );
});

// ======================================================
// AI CORE
// ======================================================

bot.action("ai", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🧠 AI CORE

━━━━━━━━━━━━━━━━━━

Your XMATRIX intelligence center.

💬 AI conversation
🧠 Smart answers
📝 Summarization
🌐 Translation
💻 Coding assistant
📚 Learning assistant
🔎 Research tools

━━━━━━━━━━━━━━━━━━

🟢 AI MODULE READY

Advanced AI providers will be
connected in the next stage.`,
    backButton()
  );
});

// ======================================================
// VOICE AI
// ======================================================

bot.action("voice", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎙 VOICE AI

━━━━━━━━━━━━━━━━━━

Talk naturally with XMATRIX.

🎤 Speech → Text
🧠 Voice understanding
⚡ Voice commands
📝 Action extraction
🔊 AI responses

━━━━━━━━━━━━━━━━━━

🟢 VOICE MODULE READY

Send voice messages once the
speech engine is connected.`,
    backButton()
  );
});

// ======================================================
// VISION
// ======================================================

bot.action("vision", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🖼 AI VISION

━━━━━━━━━━━━━━━━━━

XMATRIX will understand images.

🔍 Image analysis
📖 Text extraction
🧠 Image questions
🎨 Visual intelligence
📊 Image understanding

━━━━━━━━━━━━━━━━━━

🟢 VISION MODULE READY`,
    backButton()
  );
});

// ======================================================
// DOC AI
// ======================================================

bot.action("docs", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📄 DOC AI

━━━━━━━━━━━━━━━━━━

Upload documents and interact
with their contents.

📚 PDF Q&A
📝 Summaries
🔎 Document search
🧠 Document analysis
📖 Study assistant

━━━━━━━━━━━━━━━━━━

🟢 DOCUMENT MODULE READY`,
    backButton()
  );
});

// ======================================================
// DOWNLOADER
// ======================================================

bot.action("download", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📥 XMATRIX DOWNLOADER

━━━━━━━━━━━━━━━━━━

Media processing center.

🎬 Video
🎵 Audio
📷 Images
📁 Files
🔗 URL tools

━━━━━━━━━━━━━━━━━━

🟡 DOWNLOAD ENGINE

Download providers will be
connected during the next stage.`,
    backButton()
  );
});

// ======================================================
// GAMES
// ======================================================

bot.action("games", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎮 XMATRIX GAMES

━━━━━━━━━━━━━━━━━━

Enter the XMATRIX game zone.

🎯 Challenges
🧠 Trivia
🎲 Mini games
🏆 Leaderboards
⚡ Multiplayer

━━━━━━━━━━━━━━━━━━

🟢 GAME SYSTEM

Game modules will be added
during the next development stage.`,
    backButton()
  );
});

// ======================================================
// PREMIUM
// ======================================================

bot.action("premium", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💎 XMATRIX PREMIUM

━━━━━━━━━━━━━━━━━━

Unlock advanced features.

⚡ Advanced AI
🎙 Voice AI
🖼 Vision
📄 Document AI
📥 Premium tools
🚀 Priority processing

━━━━━━━━━━━━━━━━━━

💎 PREMIUM

Subscription system coming soon.`,
    backButton()
  );
});

// ======================================================
// PROFILE
// ======================================================

bot.action("profile", async (ctx) => {
  await ctx.answerCbQuery();

  const username = ctx.from.username
    ? `@${ctx.from.username}`
    : "Not set";

  const owner = ctx.from.id === OWNER_ID;

  await ctx.editMessageText(
`👤 XMATRIX PROFILE

━━━━━━━━━━━━━━━━━━

👤 ${ctx.from.first_name || "Unknown"}

🔗 ${username}

🆔 ${ctx.from.id}

💎 ${owner ? "👑 OWNER" : "FREE USER"}

━━━━━━━━━━━━━━━━━━

⚡ XMATRIX ACCOUNT`,
    backButton()
  );
});

// ======================================================
// LEADERBOARD
// ======================================================

bot.action("leaderboard", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🏆 XMATRIX LEADERBOARD

━━━━━━━━━━━━━━━━━━

🥇 Coming soon
🥈 Coming soon
🥉 Coming soon

━━━━━━━━━━━━━━━━━━

⭐ XP SYSTEM
💎 Premium rewards
🎮 Game points
🏆 Global ranking

The economy system will be
connected later.`,
    backButton()
  );
});

// ======================================================
// TREASURY
// ======================================================

bot.action("treasury", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`💰 XMATRIX TREASURY

━━━━━━━━━━━━━━━━━━

Your future XMATRIX economy.

💰 Balance
🎁 Daily rewards
⭐ XP
💎 Premium
🎟 Promo codes
🏆 Rewards

━━━━━━━━━━━━━━━━━━

💰 ECONOMY ENGINE
STANDBY`,
    backButton()
  );
});

// ======================================================
// PROMO
// ======================================================

bot.action("promo", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🎟 XMATRIX PROMO

━━━━━━━━━━━━━━━━━━

Have a promo code?

Use:

/promo YOUR_CODE

━━━━━━━━━━━━━━━━━━

🎟 PROMO SYSTEM
COMING SOON`,
    backButton()
  );
});

// ======================================================
// SUPPORT
// ======================================================

bot.action("support", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`⭐ XMATRIX SUPPORT

━━━━━━━━━━━━━━━━━━

Need help?

⚙️ Technical support
🐞 Bug reports
💡 Feature requests
📢 Updates

━━━━━━━━━━━━━━━━━━

Support center will be
connected soon.`,
    backButton()
  );
});

// ======================================================
// TOOLS
// ======================================================

bot.action("tools", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🔧 XMATRIX TOOLS

━━━━━━━━━━━━━━━━━━

🧮 Calculator
📝 Text tools
🔐 Security utilities
🌐 Web utilities
💻 Developer tools
📊 Data tools
⚙️ Automation

━━━━━━━━━━━━━━━━━━

🔧 TOOLBOX
READY FOR EXPANSION`,
    backButton()
  );
});

// ======================================================
// STATUS BUTTON
// ======================================================

bot.action("status", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`📡 XMATRIX STATUS

━━━━━━━━━━━━━━━━━━

🟢 CORE ........ ONLINE
🟢 TELEGRAM .... ONLINE
🟢 SERVER ...... ONLINE
🟢 COMMANDS .... ONLINE

🟢 AI .......... READY
🟡 DATABASE .... STANDBY
🟡 MINI APP .... STANDBY

━━━━━━━━━━━━━━━━━━

⚡ XMATRIX 2.0`,
    backButton()
  );
});

// ======================================================
// MINI APP
// ======================================================

bot.action("miniapp", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.editMessageText(
`🚀 XMATRIX MINI APP

━━━━━━━━━━━━━━━━━━

The full XMATRIX interface
will eventually open here.

Planned:

📊 Dashboard
🧠 AI workspace
💎 Premium center
👤 Account
⚙️ Settings
🛠 Tools
📈 Statistics

━━━━━━━━━━━━━━━━━━

🚀 MINI APP
UNDER DEVELOPMENT`,
    backButton()
  );
});

// ======================================================
// DEVELOPER
// ======================================================

bot.action("developer", async (ctx) => {
  await ctx.answerCbQuery();

  const isOwner = ctx.from.id === OWNER_ID;

  if (!isOwner) {
    await ctx.editMessageText(
`👨‍💻 DEVELOPER

━━━━━━━━━━━━━━━━━━

⛔ OWNER ACCESS ONLY

This section is restricted
to the XMATRIX owner.`,
      backButton()
    );

    return;
  }

  await ctx.editMessageText(
`👑 XMATRIX DEVELOPER

━━━━━━━━━━━━━━━━━━

🟢 OWNER VERIFIED

⚙️ Bot management
👥 User management
💎 Premium management
🎟 Promo management
📢 Broadcast
📊 Statistics
🔧 Maintenance

━━━━━━━━━━━━━━━━━━

👑 FULL ACCESS GRANTED`,
    backButton()
  );
});

// ======================================================
// OWNER PANEL
// ======================================================

bot.command("panel", async (ctx) => {
  if (ctx.from.id !== OWNER_ID) {
    return ctx.reply(
`⛔ ACCESS DENIED

Owner access required.`
    );
  }

  await ctx.reply(
`👑 XMATRIX OWNER PANEL

━━━━━━━━━━━━━━━━━━

🟢 OWNER VERIFIED

👥 Users
💎 Premium
🎟 Promo
📢 Broadcast
📊 Statistics
⚙️ Settings
🔧 Maintenance

━━━━━━━━━━━━━━━━━━

Use the developer section
for future controls.`
  );
});

// ======================================================
// PROMO COMMAND
// ======================================================

bot.command("promo", async (ctx) => {
  const args = ctx.message.text.split(" ").slice(1);
  const code = args.join(" ").trim();

  if (!code) {
    return ctx.reply(
`🎟 PROMO

Usage:

/promo YOUR_CODE`
    );
  }

  await ctx.reply(
`🎟 PROMO CODE

Code received:

${code}

🟡 Promo validation system
is being prepared.`
  );
});

// ======================================================
// UNKNOWN COMMAND
// ======================================================

bot.on("text", async (ctx) => {
  const text = ctx.message.text;

  if (!text.startsWith("/")) {
    return;
  }

  await ctx.reply(
`⚡ XMATRIX

❌ Unknown command.

Use /help or /menu.`
  );
});

// ======================================================
// ERROR HANDLER
// ======================================================

bot.catch((err) => {
  console.error("❌ XMATRIX ERROR:", err);
});

// ======================================================
// TELEGRAM COMMAND MENU
// ======================================================

async function configureTelegram() {
  try {
    await bot.telegram.setMyCommands([
      {
        command: "start",
        description: "Open XMATRIX"
      },
      {
        command: "menu",
        description: "Open main menu"
      },
      {
        command: "profile",
        description: "View your profile"
      },
      {
        command: "premium",
        description: "View Premium"
      },
      {
        command: "status",
        description: "System status"
      },
      {
        command: "help",
        description: "Show help"
      },
      {
        command: "id",
        description: "Show your Telegram ID"
      }
    ]);

    await bot.telegram.setChatMenuButton({
      menuButton: {
        type: "commands"
      }
    });

    console.log("✅ Telegram menu configured.");
  } catch (error) {
    console.error(
      "⚠️ Could not configure Telegram menu:",
      error.message
    );
  }
}

// ======================================================
// START XMATRIX
// ======================================================

console.log("⚡ XMATRIX 2.0 INITIALIZING...");
console.log("🧠 AI SYSTEM: READY");
console.log("🔐 SECURITY SYSTEM: READY");
console.log("📡 TELEGRAM ENGINE: STARTING...");

bot.launch()
  .then(async () => {
    console.log("🟢 XMATRIX 2.0 ONLINE");

    await configureTelegram();

    console.log("🚀 XMATRIX 2.0 READY");
  })
  .catch((err) => {
    console.error("❌ XMATRIX FAILED TO START:");
    console.error(err);

    process.exit(1);
  });

// ======================================================
// SAFE SHUTDOWN
// ======================================================

process.once("SIGINT", () => {
  console.log("🛑 XMATRIX STOPPING...");
  bot.stop("SIGINT");
});

process.once("SIGTERM", () => {
  console.log("🛑 XMATRIX STOPPING...");
  bot.stop("SIGTERM");
});
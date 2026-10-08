const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const OWNER_ID = Number(process.env.OWNER_ID);

// ===============================
// XMATRIX MAIN MENU
// ===============================

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

// ===============================
// START
// ===============================

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

🚀 Welcome to the next generation
of Telegram automation.

Select a module below.`,
    mainMenu()
  );
});

// ===============================
// BASIC COMMANDS
// ===============================

bot.command("id", (ctx) => {
  ctx.reply(
`🆔 YOUR TELEGRAM ID

${ctx.from.id}`
  );
});

bot.command("help", (ctx) => {
  ctx.reply(
`⚡ XMATRIX HELP

/start — Open XMATRIX
/id — Show your Telegram ID
/help — Show help
/profile — Your profile
/premium — Premium information
/status — System status`
  );
});

bot.command("profile", (ctx) => {
  ctx.reply(
`👤 XMATRIX PROFILE

Name: ${ctx.from.first_name || "Unknown"}
Username: @${ctx.from.username || "none"}
ID: ${ctx.from.id}

💎 Plan: FREE`
  );
});

bot.command("premium", (ctx) => {
  ctx.reply(
`💎 XMATRIX PREMIUM

Premium features are being prepared.

🚀 Advanced AI
🎙 Voice AI
📄 Document AI
📥 Advanced tools
⚡ Priority processing`
  );
});

bot.command("status", (ctx) => {
  ctx.reply(
`📡 XMATRIX SYSTEM STATUS

🟢 CORE ........ ONLINE
🟢 TELEGRAM .... ONLINE
🟢 COMMANDS .... ONLINE
🟡 AI ENGINE ... STANDBY
🟡 DATABASE .... STANDBY
🟡 MINI APP .... STANDBY

SYSTEM v1.0`
  );
});

// ===============================
// BUTTON HANDLERS
// ===============================

bot.action("ai", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🧠 AI CORE

Your XMATRIX intelligence center.

Available soon:

• AI Chat
• Smart answers
• Summarization
• Translation
• Coding assistant
• Context memory`
  );
});

bot.action("voice", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🎙 VOICE AI

Send a voice message.

XMATRIX will eventually be able to:

🎤 Transcribe speech
🧠 Understand commands
📝 Create action items
⚡ Execute voice commands`
  );
});

bot.action("vision", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🖼 AI VISION

Send an image to XMATRIX.

Planned capabilities:

🔍 Image analysis
📖 Text extraction
🧠 Image understanding
🎨 Visual AI`
  );
});

bot.action("docs", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`📄 DOC AI

Upload a document.

Planned:

📚 PDF Q&A
📝 Summaries
🔎 Document search
🧠 Smart explanations`
  );
});

bot.action("premium", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`💎 PREMIUM

Unlock the full XMATRIX system.

⚡ Advanced AI
🎙 Voice AI
📄 Document AI
📥 Premium tools
🚀 Priority processing

Coming soon.`
  );
});

bot.action("profile", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`👤 PROFILE

Name: ${ctx.from.first_name || "Unknown"}
Username: @${ctx.from.username || "none"}
Telegram ID: ${ctx.from.id}

💎 Plan: FREE`
  );
});

bot.action("promo", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🎟 PROMO CENTER

Have an XMATRIX promo code?

Send:

/promo YOUR_CODE

Promo system coming soon.`
  );
});

bot.action("payments", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`💳 PAYMENTS

XMATRIX payment infrastructure.

Planned:

⭐ Telegram Stars
💎 Premium subscriptions
⚡ Digital products
🌐 TON payments`
  );
});

bot.action("download", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`📥 DOWNLOADER

Media tools will be connected here.

Supported modules will be added
during the next development stage.`
  );
});

bot.action("games", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🎮 XMATRIX GAMES

Mini games and interactive
Telegram experiences will appear here.`
  );
});

bot.action("tools", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🔧 XMATRIX TOOLS

🧮 Calculator
🔐 Security tools
📝 Text tools
🌐 Web utilities
⚙️ Developer tools

More tools coming soon.`
  );
});

bot.action("status", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`📡 XMATRIX STATUS

🟢 CORE ONLINE
🟢 BOT ONLINE
🟢 TELEGRAM ONLINE

VERSION: 1.0`
  );
});

bot.action("miniapp", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
`🚀 XMATRIX MINI APP

The XMATRIX full-screen interface
will be connected here.

Coming soon:

📊 Dashboard
🧠 AI workspace
💎 Premium center
⚙️ Settings
📱 Interactive tools`
  );
});

// ===============================
// OWNER COMMAND
// ===============================

bot.command("panel", (ctx) => {
  if (ctx.from.id !== OWNER_ID) {
    return ctx.reply("⛔ Owner access required.");
  }

  ctx.reply(
`👑 XMATRIX OWNER PANEL

🟢 SYSTEM ONLINE

Available controls:

• Bot management
• User management
• Premium management
• Promo management
• System statistics
• Broadcast
• Maintenance mode`
  );
});

// ===============================
// UNKNOWN COMMAND
// ===============================

bot.on("text", (ctx) => {
  if (ctx.message.text.startsWith("/")) {
    ctx.reply(
`⚡ XMATRIX

Unknown command.

Use /help to see available commands.`
    );
  }
});

// ===============================
// ERROR HANDLER
// ===============================

bot.catch((err) => {
  console.error("XMATRIX ERROR:", err);
});

// ===============================
// START BOT
// ===============================

if (!process.env.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing.");
  process.exit(1);
}

console.log("⚡ XMATRIX CORE INITIALIZING...");

bot.launch()
  .then(() => {
    console.log("🟢 XMATRIX ONLINE");
  })
  .catch((err) => {
    console.error("❌ Failed to start XMATRIX:", err);
  });

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
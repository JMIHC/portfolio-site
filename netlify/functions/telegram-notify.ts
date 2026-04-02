export default async (req: Request) => {
  const body = await req.json();
  const { name, email, message } = body.data;

  const text = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const token = Netlify.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Netlify.env.get("TELEGRAM_CHAT_ID");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  return new Response("OK", { status: 200 });
};

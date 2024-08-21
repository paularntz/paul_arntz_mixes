import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    const timestamp = new Date().toISOString();

    // Ensure the messages directory exists
    const messagesDir = path.join(process.cwd(), 'public/messages');
    if (!fs.existsSync(messagesDir)) {
      fs.mkdirSync(messagesDir, { recursive: true });
    }

    // Create a new message file
    const fileName = `${timestamp}.json`;
    const filePath = path.join(messagesDir, fileName);

    const messageData = {
      name,
      email,
      phone,
      message,
      date: timestamp,
    };

    // Write the message to the file system
    fs.writeFileSync(filePath, JSON.stringify(messageData, null, 2));

    return new Response(JSON.stringify({ status: 'success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing message:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

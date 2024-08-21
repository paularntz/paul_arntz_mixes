import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import RemoveButton from 'components/RemoveButton';

export default async function MessagesList() {
  const directoryPath = path.join(process.cwd(), 'public/messages');
  const files = fs.readdirSync(directoryPath);

  const messages = files.map((file) => {
    const filePath = path.join(directoryPath, file);
    try {
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return { ...content, fileName: file };
    } catch (error) {
      console.error(`Error parsing JSON in file: ${filePath}`, error);
      return null;
    }
  }).filter(Boolean);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Date/Time</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{message.name}</td>
              <td className="border px-4 py-2">{message.email}</td>
              <td className="border px-4 py-2">{message.phone || 'N/A'}</td>
              <td className="border px-4 py-2">{new Date(message.date).toLocaleString()}</td>
              <td className="border px-4 py-2">
                <Link href={`/messages/${message.fileName}`}>
                  <span className="text-blue-500 hover:underline">View</span>
                </Link>
                <RemoveButton fileName={message.fileName} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

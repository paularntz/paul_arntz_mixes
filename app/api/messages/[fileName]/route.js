import fs from 'fs';
import path from 'path';

export async function DELETE(req, { params }) {
  const { fileName } = params; // Capture the dynamic file name from the URL

  try {
    // Construct the path to the file in the public/messages directory
    const filePath = path.join(process.cwd(), 'public/messages', fileName);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Delete the file
    fs.unlinkSync(filePath);

    return new Response(JSON.stringify({ message: 'File deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

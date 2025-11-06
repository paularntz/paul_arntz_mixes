// app/messages/thank-you/page.js
export default function ThankYou() {
  return (
    <div className="container mx-auto p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Thank You!</h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-xl mb-4 text-gray-300">
            I have received your message and will get back to you ASAP.
          </p>
          <p className="text-lg text-gray-400 mb-6">
            Thank You,<br />
            Paul
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
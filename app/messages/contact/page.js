// app/messages/contact/page.js
export default function ContactForm() {
  return (
    <div className="container mx-auto p-6">
      <div style={{ marginBottom: 50 }}>
        <h1 className="text-3xl font-bold mb-6">Call Me: (615) 390-3848</h1>
        <h1 className="text-3xl font-bold mb-6">Leave A Message:</h1>
      </div>

      <form 
        name="contact" 
        method="POST" 
        action="/messages/thank-you"
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        
        <div>
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full p-2 border rounded text-black"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-2 border rounded text-black"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block font-semibold">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full p-2 border rounded text-black"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block font-semibold">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="w-full p-2 border rounded text-black"
            rows="5"
          />
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

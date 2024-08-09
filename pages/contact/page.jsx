
const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
            >
                <input type="hidden" name="form-name" value="contact" />
                <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        name="message"
                        id="message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Page
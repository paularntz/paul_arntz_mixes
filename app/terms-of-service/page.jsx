import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">Paul Arntz Mixes</p>
          <p className="text-sm text-gray-500 mt-2">Effective Date: January 17, 2025</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Welcome to <span className="text-blue-400 font-semibold">Paul Arntz Mixes</span>. By accessing or using our services, you agree to comply with these Terms of Service. Please read them carefully before proceeding.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                  Services Provided
                </h2>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">Paul Arntz Mixes</span> provides professional audio mixing and related services. These services are tailored to your project needs and delivered with industry-standard quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  Payment and Pricing
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>All services must be paid in full before final deliverables are provided unless otherwise agreed upon.</li>
                  <li>Prices are subject to change without prior notice, but any agreed-upon rates at the time of booking will be honored.</li>
                  <li>Payments are accepted through secure methods. We do not store your payment details.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  Client Responsibilities
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide accurate and complete project details, including audio files and session notes.</li>
                  <li>Ensure all files comply with our technical requirements (e.g., format, sample rate).</li>
                  <li>Respect the agreed-upon timeline and communicate promptly regarding revisions or approvals.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
                  Revisions and Deliverables
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Revisions are limited to the number specified during the project agreement. Additional revisions may incur extra charges.</li>
                  <li>Final deliverables will be provided in the agreed formats (e.g., WAV, MP3) once all payments are received.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
                  Intellectual Property
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>You retain all rights to your original recordings and project files.</li>
                  <li>Final mixed versions may not be used in marketing or promotional materials without your prior consent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
                  Limitations of Liability
                </h2>
                <p className="text-gray-300">
                  <span className="text-blue-400 font-semibold">Paul Arntz Mixes</span> is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
                  Refunds and Cancellations
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Refunds are not available once mixing work has begun.</li>
                  <li>If a cancellation request is made before work begins, a full or partial refund may be issued at our discretion.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">8</span>
                  Modifications to Terms
                </h2>
                <p className="text-gray-300">
                  We reserve the right to update these Terms of Service at any time. Any changes will be effective immediately upon posting. Continued use of our services constitutes your acceptance of the updated terms.
                </p>
              </section>

              <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">9</span>
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p><span className="text-blue-400 font-semibold">Paul Arntz Mixes</span></p>
                  <p>Nashville, TN</p>
                  <p>Email: <a href="mailto:paul@paularntz.com" className="text-blue-400 hover:text-blue-300 transition-colors">paul@paularntz.com</a></p>
                  <p>Phone: <a href="tel:+16153903848" className="text-blue-400 hover:text-blue-300 transition-colors">(615) 390-3848</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
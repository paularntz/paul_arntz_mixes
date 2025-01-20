import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Terms of Service for Paul Arntz Mixes</h1>
        <p className="text-sm text-gray-600 mb-6">Effective Date: January 17, 2025</p>

        <p className="mb-4">
          Welcome to <strong>Paul Arntz Mixes</strong>. By accessing or using our services, you agree to comply with these Terms of Service. Please read them carefully before proceeding.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Services Provided</h2>
        <p className="mb-4">
          <strong>Paul Arntz Mixes</strong> provides professional audio mixing and related services. These services are tailored to your project needs and delivered with industry-standard quality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Payment and Pricing</h2>
        <ul className="list-disc list-inside mb-4">
          <li>All services must be paid in full before final deliverables are provided unless otherwise agreed upon.</li>
          <li>Prices are subject to change without prior notice, but any agreed-upon rates at the time of booking will be honored.</li>
          <li>Payments are accepted through secure methods. We do not store your payment details.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Client Responsibilities</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide accurate and complete project details, including audio files and session notes.</li>
          <li>Ensure all files comply with our technical requirements (e.g., format, sample rate).</li>
          <li>Respect the agreed-upon timeline and communicate promptly regarding revisions or approvals.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Revisions and Deliverables</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Revisions are limited to the number specified during the project agreement. Additional revisions may incur extra charges.</li>
          <li>Final deliverables will be provided in the agreed formats (e.g., WAV, MP3) once all payments are received.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You retain all rights to your original recordings and project files.</li>
          <li>Final mixed versions may not be used in marketing or promotional materials without your prior consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitations of Liability</h2>
        <p className="mb-4">
          <strong>Paul Arntz Mixes</strong> is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Refunds and Cancellations</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Refunds are not available once mixing work has begun.</li>
          <li>If a cancellation request is made before work begins, a full or partial refund may be issued at our discretion.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modifications to Terms</h2>
        <p className="mb-4">
          We reserve the right to update these Terms of Service at any time. Any changes will be effective immediately upon posting. Continued use of our services constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <p className="mb-2"><strong>Paul Arntz Mixes</strong></p>
        <p className="mb-2">Nashville, TN</p>
        <p className="mb-2">Email: <a href="mailto:paul@paularntz.com" className="text-blue-500 hover:underline">paul@paularntz.com</a></p>
        <p>Phone: <a href="tel:+16153903848" className="text-blue-500 hover:underline">(615) 390-3848</a></p>
      </div>
    </div>
  );
};

export default TermsOfService;
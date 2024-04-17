import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <main>
        <div className="w-screen h-screen mx-8 my-4 bg-gray-300 rounded-lg overflow-hidden">
          <div className="mx-12 pt-16">
            <div className="ml-8 cursor-pointer text-right pr-16">
              <h1 className="text-4xl font-bold text-blue-500 px-8">
                HealthQure+
              </h1>
              <p className="text-md text-blue-500 pr-12">your health matters</p>
            </div>
            <h2 className="text-3xl font-bold text-blue-400">Our Mission</h2>
            <p className="mr-36 text-sm mt-2">
              At MediConnect, our mission is to make healthcare accessible,
              affordable, and comprehensible for everyone, everywhere. We
              understand the challenges that come with managing health,
              especially in remote or underserved areas. Our app provides
              instant access to qualified healthcare professionals, personalized
              health management tools, and up-to-date medical information, all
              at your fingertips.
            </p>

            <h2 className="text-3xl font-bold text-blue-400 mt-4">
              Our Values
            </h2>
            <p className="mr-36 text-sm mt-2">
              {" "}
              Your health and privacy are our top priorities. We are dedicated
              to providing a secure platform where your medical data is
              protected with the highest standards of privacy. We are committed
              to continuous improvement and innovation to provide the best
              possible experience and outcomes for our users. We uphold the
              highest standards of ethical practice, ensuring that all medical
              information and consultations are accurate, private, and compliant
              with global health regulations.
            </p>

            <h2 className="text-3xl font-bold text-blue-400  mt-4">
              The Future of MediConnect
            </h2>
            <p className="mr-36 text-sm mt-2">
              Looking ahead, we are excited about introducing machine learning
              algorithms to provide even more personalized health
              recommendations and expanding our service to include more
              languages and regions.
            </p>

            <h2 className="text-3xl font-bold text-blue-400  mt-4">Join Us</h2>
            <p className="mr-36 text-sm mt-2">
              Experience a new era of healthcare. Download MediConnect today and
              take the first step towards a healthier tomorrow. Stay connected
              by subscribing to our newsletter for health tips, updates, and
              more. For support or inquiries, reach out to us at
              support@healthqure.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

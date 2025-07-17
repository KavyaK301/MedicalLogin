import React from "react";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-blue-100">
          {/* Medilab Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">MediTrack</h2>
            <p>Kce othakalmandabam </p>
            <p>Coimbatore, NY 535022</p>
            <p className="mt-4 font-semibold">
              Phone: <span className="font-normal">+1 5589 55488 55</span>
            </p>
            <p className="font-semibold">
              Email: <span className="font-normal">meditrack@example.com</span>
            </p>

            <div className="flex space-x-4 mt-4">
              <div className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <X className="h-4 w-4 text-white" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Hic solutastep */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hic solutastep</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Molestiae accusamus iure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Excepturi dignissimos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Suscipit distinctio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Dilecta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sit quas consectetur
                </a>
              </li>
            </ul>
          </div>

          {/* Nobis illum */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nobis illum</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Ipsam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Laudantium dolorum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Dinera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Trodela
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Flexo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © Copyright <span className="font-bold text-gray-700">Medilab</span>
            . All Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              className="text-blue-600 hover:underline"
            >
              BootstrapMade
            </a>
            &nbsp;| Distributed by{" "}
            <a
              href="https://themewagon.com/"
              className="text-blue-600 hover:underline"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-600 text-white p-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;

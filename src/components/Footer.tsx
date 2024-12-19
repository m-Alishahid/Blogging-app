import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8">
            <div className="container mx-auto px-6">
                {/* Footer Sections */}
                <div className="flex flex-wrap justify-between gap-6">
                    {/* About Section */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            Welcome to our blog! We share insightful articles on various topics,
                            keeping you informed and entertained. Stay tuned for more updates!
                        </p>
                    </div>

                    {/* Categories Section */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <ul>
                            <li className="text-sm mb-2"><a href="#">Technology</a></li>
                            <li className="text-sm mb-2"><a href="#">Health</a></li>
                            <li className="text-sm mb-2"><a href="#">Lifestyle</a></li>
                            <li className="text-sm mb-2"><a href="#">Travel</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://facebook.com" className="text-white hover:text-blue-600">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="text-white hover:text-blue-400">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="text-white hover:text-pink-600">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="text-white hover:text-blue-700">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 border-t pt-4 text-center text-sm">
                    <p>&copy; 2024 Codecraft Blog. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
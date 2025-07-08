import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-10 px-6">
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				
				{/* Logo & Description */}
				<div className="">
					<h2 className="text-2xl font-bold text-white mb-2 border-b border-gray-700">My App</h2>
					<p className="text-sm text-gray-400">
						Empowering ideas through code. We craft full-stack websites & apps with clean design and powerful functionality.
					</p>
				</div>

				{/* Quick Links */}
				<div className="">
					<h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700">Quick Links</h3>
					<ul className="space-y-2 text-sm">
						<li><a href="#" className="hover:text-white transition">Home</a></li>
						<li><a href="#" className="hover:text-white transition">About</a></li>
						<li><a href="#" className="hover:text-white transition">Projects</a></li>
						<li><a href="#" className="hover:text-white transition">Contact</a></li>
					</ul>
				</div>

				{/* Contact Info */}
				<div className="">
					<h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700">Contact</h3>
					<ul className="space-y-2 text-sm">
						<li>Email: <a href="mailto:shree@domain.com" className="hover:text-white">mr.kant.sk@gmail.com</a></li>
						<li>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a></li>
						<li>Location: Haryana, India</li>
					</ul>
				</div>

				{/* Social Media */}
				<div className="">
					<h3 className="text-xl font-semibold text-white mb-3 border-b border-gray-700">Follow Us</h3>
					<div className="flex space-x-4 text-white text-2xl">
						<a href="#"><i className="fab fa-facebook-f hover:text-blue-500"></i></a>
						<a href="#"><i className="fab fa-twitter hover:text-sky-400"></i></a>
						<a href="#"><i className="fab fa-instagram hover:text-pink-500"></i></a>
						<a href="#"><i className="fab fa-github hover:text-gray-400"></i></a>
					</div>
				</div>
			</div>

			{/* Bottom Credits */}
			<div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
				<p>© {new Date().getFullYear()} ShreeTech. All rights reserved.</p>
				<p>Built with ❤️ by <span className="text-white font-semibold">Shree Kant, Hemant, Saksham</span></p>
			</div>
		</footer>
	);
};

export default Footer;

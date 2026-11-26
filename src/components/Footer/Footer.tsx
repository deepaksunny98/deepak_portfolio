import "./Footer.css";

const Footer = () => {
	const handleScroll = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className='footer'>
			<h2 className='footer-logo'>
				<span>Deepak</span> <span>Karanam</span>
			</h2>

			<nav className='footer-nav'>
				{[
					{ name: "Home", id: "hero" },
					{ name: "About", id: "about" },
					{ name: "Skills", id: "skills" },
					{ name: "Portfolio", id: "mywork" },
					{ name: "Contact", id: "contact" },
				].map((item, index) => (
					<button
						key={index}
						onClick={() => handleScroll(item.id)}
						className='footer-link'
					>
						{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
					</button>
				))}
			</nav>

			<p className='footer-copy'>
				&copy;2025 Deepak Karanam. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;

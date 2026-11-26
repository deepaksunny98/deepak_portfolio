import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
	const [menu, setMenu] = useState("Home");
	const menuRef = useRef<HTMLUListElement>(null);

	const openMenu = () => {
		if (menuRef.current) menuRef.current.style.right = "0";
	};
	const closeMenu = () => {
		if (menuRef.current) menuRef.current.style.right = "-350px";
	};

	const handleScroll = (item: { name: string; id: string }) => {
		setMenu(item.name);
		const section = document.getElementById(item.id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className='navbar'>
			<div className='logo'>
				<span className='logo-symbol'>&lt;</span>
				<span className='logo-name'> Deepak </span>
				<span className='logo-symbol left'>&#47;</span>
				<span className='logo-name'> Karanam </span>
				<span className='logo-symbol'>&gt;</span>
			</div>

			<img
				src={menu_open}
				alt=''
				className='nav-mob-open'
				onClick={openMenu}
			/>
			<ul
				className='nav-menu'
				ref={menuRef}
			>
				<img
					src={menu_close}
					alt=''
					className='nav-mob-close'
					onClick={closeMenu}
				/>
				{[
					{ name: "Home", id: "hero" },
					{ name: "About", id: "about" },
					{ name: "Skills", id: "skills" },
					{ name: "Portfolio", id: "mywork" },
					{ name: "Contact", id: "contact" },
				].map((item, index) => (
					<li
						key={index}
						onClick={closeMenu}
					>
						<p onClick={() => handleScroll(item)}>{item.name}</p>
						{menu === item.name ? <img src={underline} /> : <></>}
					</li>
				))}
			</ul>
			<div className='nav-connect'>Connect With Me</div>
		</div>
	);
};

export default Navbar;

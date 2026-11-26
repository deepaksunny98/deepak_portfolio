import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<MyWork />
			<Contact />
			<Footer />
		</>
	);
};

export default App;

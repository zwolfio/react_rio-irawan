import React from "react";
import Footer from "../../component/Organism/Footer/Footer";
import Hero from "../../component/Organism/Hero/Hero";
import JoinUs from "../../component/Organism/JoinUs/JoinUs";
import Navbar from "../../component/Organism/Navbar/Navbar";
import Product from "../../component/Organism/product/Product";
const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<JoinUs />
			<Product/>
			<Footer />
		</>
	);
};

export default LandingPage;

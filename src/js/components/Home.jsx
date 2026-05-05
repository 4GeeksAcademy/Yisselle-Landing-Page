import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const cards = [
		{
			title: "Paisaje",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
			image: "https://i.pinimg.com/736x/2b/62/3c/2b623c94a8d112e1493524b335430402.jpg"
		},
		{
			title: "Avocado",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
			image: "https://i.pinimg.com/736x/02/fb/c1/02fbc128433202f0e9d8e144daed9caa.jpg"	
		},
		{
			title: "Concert",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
			image: "https://i.pinimg.com/736x/f8/f8/1b/f8f81b5ef4762119f406cea58abfdabf.jpg"
		},
		{
			title: "Card title",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
			image: "https://i.pinimg.com/736x/88/0e/fd/880efdd83d2c7bb1d991985ff38b2de3.jpg"
		}

	];

	return (
		<>
			<Navbar />

			<main className="container">
				<Jumbotron />

				<div className="row">
					{cards.map((card, index) => (
						<Card key={index} title={card.title} text={card.text} image={card.image} />
					))}
				</div>
			</main>

			<Footer />
		</>
	)
};

export default Home;
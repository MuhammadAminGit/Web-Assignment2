import React from "react";
import MenuItem from "./MenuItem";

const menuItems = [
	{
		name: "Lobster Bisque",
		price: "$5.95",
		ingredients: "Lorem, deren, trataro, filede, nerada",
	},
	{
		name: "Bread Barrel",
		price: "$6.95",
		ingredients: "Lorem, deren, trataro, filede, nerada",
	},
	{
		name: "Crab Cake",
		price: "$7.95",
		ingredients:
			"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
	},
	{
		name: "Caesar Selections",
		price: "$8.95",
		ingredients: "Lorem, deren, trataro, filede, nerada",
	},
	{
		name: "Tuscan Grilled",
		price: "$9.95",
		ingredients:
			"Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
	},
	{
		name: "Mozzarella Stick",
		price: "$4.95",
		ingredients: "Lorem, deren, trataro, filede, nerada",
	},
	{
		name: "Greek Salad",
		price: "$9.95",
		ingredients: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
	},
	{
		name: "Spinach Salad",
		price: "$9.95",
		ingredients:
			"Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
	},
	{
		name: "Lobster Roll",
		price: "$12.95",
		ingredients:
			"Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
	},
];

const Menu = () => {
	return (
		<section id="menu" className="menu section py-12 bg-white">
			<div className="container mx-auto text-center mb-12">
				<h2 className="text-4xl font-bold mb-4">Menu</h2>
				<p className="text-lg text-gray-600">Check Our Tasty Menu</p>
			</div>

			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{menuItems.map((item, index) => (
						<MenuItem
							key={index}
							name={item.name}
							price={item.price}
							ingredients={item.ingredients}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Menu;

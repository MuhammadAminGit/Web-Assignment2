import React from "react";

const MenuItem = ({ name, price, ingredients }) => {
	return (
		<div className="col-lg-6 mb-8">
			<div className="flex items-center">
				<div className="w-32 h-32 bg-gray-300 rounded mr-6"></div>

				<div>
					<div className="w-full flex items-center justify-between">
						{" "}
						<a
							href="#"
							className="text-lg font-bold text-gray-800 hover:text-red-500"
						>
							{name}
						</a>
						<div className="flex-grow border-b border-gray-600 border-dotted mx-4"></div>{" "}
						<span className="text-lg font-semibold text-red-500">
							{price}
						</span>
					</div>

					<p className="text-gray-600 text-sm mt-2">{ingredients}</p>
				</div>
			</div>
		</div>
	);
};

export default MenuItem;

import React from "react";
import { RatingRow } from "../../components/rating-row";

import "./rating.scss";
import "../rating-row/rating-row.scss";

const LIST = [
	{
		id: 1,
		mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore eaque id culpa officiis a, ipsam minus pariatur quasi modi nihil sequi soluta ullam ab consectetur cupiditate laborum corporis dignissimos!",
		name: "Danil",
	},
	{
		id: 2,
		mess: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		name: "Adimin",
	},

	// 1, 2, 3,
];

export const Rating = () => {
	return (
		<section className="rating">
			<div className="rating__container">
				<div className="rating__inner">
					<div className="rating__header">
						<h1>Цей список де ти можеш залишити щось на згадку</h1>
					</div>
					<div className="rating__body">
						<table className="rating__table">
							{LIST.map((list) => (
								<RatingRow
									num={list.id}
									mess={list.mess}
									name={list.name}
								/>
							))}
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

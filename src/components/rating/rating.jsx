import React from "react";
import { RatingRow } from "../../components/rating-row";

import "./rating.scss";

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
							<RatingRow />
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

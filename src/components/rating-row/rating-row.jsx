import React from "react";

import "./rating-row.scss";

export const RatingRow = ({ num, mess, name }) => {
	// console.log(list);

	return (
		<tr className="rating-row">
			<td className="rating-row__num">{num}</td>
			<td className="rating-row__mess">{mess}</td>
			<td className="rating-row__name">{name}</td>
		</tr>
	);
};

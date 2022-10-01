import React from "react";

import { Logo } from "../logo";

import "./header.scss";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__inner">
					<Logo />
				</div>
			</div>
		</header>
	);
};

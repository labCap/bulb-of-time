import React from "react";
import { RatingRow } from "../../components/rating-row";

import "./rating.scss";

const LIST = [];

let num = 0;

export const Rating = () => {
	const [listItem, setListItem] = React.useState(LIST);

	const [openInputBox, setOpenInputBox] = React.useState(false);

	const addNewItemList = () => {
		const inputMess = document.getElementById("mess").value;
		const inputName = document.getElementById("name").value;

		if (inputMess && inputName) {
			num++;
			setListItem((prev) => [
				...prev,
				{ id: num, mess: inputMess, name: inputName },
			]);
		} else {
			alert("Заповни всі поля");
		}
	};

	return (
		<section className="rating">
			<div className="rating__container">
				<div className="rating__inner">
					<div className="rating__header">
						<h1>Цей список де ти можеш залишити щось на згадку</h1>
					</div>

					<button
						className="rating__add-mess"
						onClick={() => setOpenInputBox(!openInputBox)}
					></button>

					<div
						className={
							openInputBox
								? "rating__input-box open"
								: "rating__input-box"
						}
					>
						<div className="rating__input-box-inner">
							<label htmlFor="mess">Що ти хочеш нописати?</label>
							<input
								type="text"
								className="input"
								id="mess"
								// value={""}
							/>
							<label htmlFor="name">Твоє ім'я:</label>
							<input
								type="text"
								className="input"
								id="name"
								// value={""}
							/>
						</div>
						<button
							className="rating__add-btn"
							onClick={addNewItemList}
						></button>
					</div>
					<div
						className={openInputBox ? "overlay open" : "overlay"}
						onClick={() => {
							setOpenInputBox(false);
						}}
					></div>

					<div className="rating__body">
						{listItem.length > 0 ? (
							<table className="rating__table">
								{listItem.map((list) => (
									<RatingRow
										key={list.id}
										num={list.id}
										mess={list.mess}
										name={list.name}
									/>
								))}
							</table>
						) : (
							<div className="rating__info">Нічого немає</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

// const btnShow = document.querySelector(".rating__add-mess");
// const inputBox = document.querySelector(".rating__input-box");
// const overlay = document.querySelector(".overlay");

// console.log(btnShow);
// console.log(inputBox);
// console.log(overlay);

// btnShow.addEventListener("click", () => {
// 	inputBox.classList.add("open");
// 	overlay.classList.add("open");
// });

// overlay.addEventListener("click", () => {
// 	overlay.classList.remove("open");
// 	inputBox.classList.remove("open");
// });

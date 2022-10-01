import { Header } from "./components/header";
import { Rating } from "./components/rating";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Rating />
			</main>
		</div>
	);
}

export default App;

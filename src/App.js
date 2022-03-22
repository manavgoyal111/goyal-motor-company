import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Quotation from "./components/Quotation";
import Letter from "./components/Letter";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Quotation />} />
					<Route path="/quotation" element={<Quotation />} />
					<Route path="/letter" element={<Letter />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

// Make every Text Customizable
// Save Letter data in Local Storage

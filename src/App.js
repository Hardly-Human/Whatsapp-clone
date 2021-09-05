import React from "react";
import "./App.css";
import Login from "./components/Login";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
	const page = useWindowSize();

	return (
		<div className="app" style={{ ...page }}>
			<Login />
		</div>
	);
}

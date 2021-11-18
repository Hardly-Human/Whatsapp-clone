import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const basename = document.querySelector("base")?.getAttribute("href") ?? "/";

ReactDOM.render(
	<React.StrictMode>
		<Router basename={basename}>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

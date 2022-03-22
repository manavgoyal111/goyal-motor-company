import React from "react";
import { Link } from "react-router-dom";
import logo from "./GMC_Logo.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navLength">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="GMC" height="40px" className="mx-5" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
						<li className="nav-item">
							<Link className="nav-link" aria-current="page" to="/quotation">
								Quotation
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/letter">
								Letter
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

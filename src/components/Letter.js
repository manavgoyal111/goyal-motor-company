import React, { useRef, useEffect } from "react";
// import useLocalStorage from "../hooks/useLocalStorage.js";
import DonwloadPDF from "./DonwloadPDF";

const Letter = () => {
	const printEle = useRef();
	// const [letterValue, setLetterValue] = useLocalStorage("letter", "");

	useEffect(() => {
		// console.log(printEle.current);
	}, []);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<h1 className="mt-2">Letter</h1>
			<div
				className="container d-flex flex-column border p-4 shadow rounded printBody"
				ref={printEle}
				id="printElement"
			>
				<div className="d-flex flex-column lh-lg">
					<div>GSTIN - 10AHZPG0994M1ZV</div>
					<h2 className="align-self-center mt-2">
						<strong>GOYAL MOTOR COMPANY</strong>
					</h2>
					<div className="align-self-center">MOTOR PARTS DEALER</div>
					<div className="align-self-center">
						SUBHASH CHOWK, POST BOX No. – 19
					</div>
					<div className="align-self-center">
						P.O. – FORBESGANJ-854 318, DISTT. -ARARIA (BIHAR) N.F.RLY
					</div>
					<textarea
						className="align-self-end"
						name="letterDate"
						id="letterDate"
						rows="1"
						placeholder="DATE: - 16/12/21"
						style={{ width: "9rem" }}
					></textarea>
				</div>
				<div className="mt-5 d-flex flex-column">
					<textarea
						name="letterHead"
						id="letterHead"
						rows="4"
						placeholder="To,"
					></textarea>
					<textarea
						className="fw-bold mb-4 mt-4"
						name="letterSubject"
						id="letterSubject"
						rows="2"
						placeholder="Sub: - "
					></textarea>
					<textarea
						name="letterBody1"
						id="letterBody1"
						rows="7"
						placeholder="Sir/Madam,"
					></textarea>
					<textarea
						name="letterBody2"
						id="letterBody2"
						rows="2"
						placeholder="Hence, I am"
					></textarea>
					<textarea
						className="mt-3 mb-2"
						name="letterThank"
						id="letterThank"
						rows="1"
						placeholder="Thanking you"
					></textarea>
					<textarea
						className="fw-bold mb-4 mt-5"
						name="letterFrom"
						id="letterFrom"
						rows="2"
						placeholder="Form Goyal Motor Company"
					></textarea>
					<textarea
						name="letterCopy"
						id="letterCopy"
						rows="2"
						placeholder="Copy to: - "
					></textarea>
				</div>
			</div>

			<DonwloadPDF
				printEle={printEle.current}
				PDFName={"GMC_Letter.pdf"}
				tooManyItems={false}
			/>
			{/* <DonwloadPDF printEle={document.getElementById("printElement")} /> */}
		</div>
	);
};

export default Letter;

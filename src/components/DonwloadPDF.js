import React from "react";
// import jsPDF from "jspdf";
import ReactToPdf from "react-to-pdf";

const DonwloadPDF = ({ printEle, PDFName, tooManyItems }) => {
	// const generatePDF = () => {
	// 	console.log("PDF Downloading");

	// 	const doc = new jsPDF("p", "px", "a4");
	// 	doc.html(printEle, {
	// 		callback: function (pdf) {
	// 			var pageCount = doc.internal.getNumberOfPages();
	// 			pdf.deletePage(pageCount);
	// 			pdf.save("GMC_Quotation.pdf");
	// 		},
	// 	});
	// };

	// const options = {
	// 	orientation: "landscape",
	// 	unit: "in",
	// 	format: [4, 2],
	// };

	return (
		<div className="mt-4 mb-4">
			{/* <button
				type="button"
				className="btn btn-outline-success mx-2"
				onClick={generatePDF}
			>
				PDF by jsPdf
			</button> */}
			<ReactToPdf
				targetRef={printEle}
				filename={PDFName}
				// options={options}
				x={20}
				y={tooManyItems ? 5 : 15}
				// scale={0.8}
			>
				{({ toPdf }) => (
					<button className="btn btn-outline-primary" onClick={toPdf}>
						Download PDF
					</button>
				)}
			</ReactToPdf>
		</div>
	);
};

DonwloadPDF.defaultProps = {
	tooManyItems: false,
};

export default DonwloadPDF;

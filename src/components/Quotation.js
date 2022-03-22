import React, { useState, useRef, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import TableItem from "./TableItem";
import DonwloadPDF from "./DonwloadPDF";

const Quotation = () => {
	// Variables
	const [tooManyItems, setTooManyItems] = useState(false);
	const [itemNo, setItemNo] = useState(1);
	const [inputVal, setInputVal] = useState({
		sno: 1,
		particular: "",
		hsn: "",
		gst: "",
		price: "",
	});
	const [othersVal, setOthersVal] = useState({
		quotationDate: "DATE: - 16/12/21",
		quotationCompanyPlace: "Bheja",
		quotationCompanyName: "Transrail Lighting Ltd.",
		GSTExtra: "GST Extra 18%",
		less: "Less 5%",
	});

	// Table Entry Array
	const [items, setItems] = useState([]);

	// Reference Variables
	const printEle = useRef();

	// Local Storage Variables
	const [quotationValue, setQuotationValue] = useLocalStorage(
		"quotation-items",
		""
	);
	const [quotationOthersValue, setQuotationOthersValue] = useLocalStorage(
		"quotation-others",
		""
	);

	// CSS Variable
	let cssProperties = {};

	useEffect(() => {
		if (quotationValue === "") {
			setQuotationValue([]);
		} else {
			setItems(quotationValue);
		}
		if (quotationOthersValue !== "") {
			setOthersVal(quotationOthersValue);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setQuotationValue(items);
		setQuotationOthersValue(othersVal);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, othersVal]);

	if (tooManyItems) {
		// console.log("Applying CSS Properties");
		cssProperties["--textHeight"] = "25px";
		cssProperties["--textFont"] = "0.8rem";
	}

	const addItem = (e) => {
		// console.log("Adding Item");
		e.preventDefault();

		let tempArr = {
			sno: itemNo,
			particular: e.target[0].value,
			hsn: e.target[1].value,
			gst: e.target[2].value,
			price: e.target[3].value,
		};

		setItems([...items, tempArr]);
		setItemNo(itemNo + 1);
		setInputVal({
			...inputVal,
			// sno: inputVal.sno + 1,
			particular: "",
			price: "",
		});
	};

	const deleteAll = () => {
		alert("Delete All");
		// console.log("Deleting All");
		setItemNo(1);
		setItems([]);
	};

	const handleChange = (e) => {
		setInputVal({ ...inputVal, [e.target.name]: e.target.value });
	};

	const handleChangeOthers = (e) => {
		setOthersVal({ ...othersVal, [e.target.name]: e.target.value });
	};

	const showItem = (sno, particular, hsn, gst, price) => {
		// console.log("Showing Item");
		setInputVal({
			sno: sno,
			particular: particular,
			hsn: hsn,
			gst: gst,
			price: price,
		});
	};

	const updateItem = () => {
		// console.log("Updating", inputVal.sno);
		let tempArr = {
			sno: inputVal.sno,
			particular: inputVal.particular,
			hsn: inputVal.hsn,
			gst: inputVal.gst,
			price: inputVal.price,
		};

		let itemNo = inputVal.sno;
		const newArr = items.map((val) => {
			if (val.sno === itemNo) {
				return tempArr;
			}

			return val;
		});

		setItems(newArr);
	};

	const deleteItem = () => {
		// console.log("Deleting");
		let itemName = inputVal.sno;
		let tempArr = items.filter((val) => val.sno !== itemName);

		var newArr = tempArr.map((val, idx) => {
			return { ...val, sno: idx + 1 };
		});

		setItemNo(itemNo - 1);
		setItems(newArr);
	};

	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center"
			id="quotationBody"
			style={cssProperties}
		>
			<h1 className="mt-2">Quotation</h1>
			<div
				className="d-flex flex-column border p-2 shadow rounded m-2 printBody"
				ref={printEle}
			>
				<div className="d-flex flex-column lh-lg">
					<textarea
						className="align-self-end textArea"
						name="quotationDate"
						rows="1"
						placeholder="Date"
						value={othersVal.quotationDate}
						onChange={handleChangeOthers}
						style={{ width: "9rem" }}
					></textarea>
					<h2 className="align-self-center mt-2">
						<strong>GOYAL MOTOR COMPANY</strong>
					</h2>
					<div id="responsiveText" className="align-self-center">
						Forbesganj (Bihar - 854318)
					</div>
					<div id="responsiveText" className="align-self-center">
						GSTIN - 10AHXPG0994M1ZV
					</div>
				</div>

				<div
					className="d-flex flex-column"
					id={tooManyItems ? "marginReduce" : "marginNotReduce"}
				>
					<div id="responsiveText" className="fw-bold">
						To,
					</div>
					<textarea
						className="fw-bold textArea"
						name="quotationCompanyName"
						rows="1"
						placeholder="Name"
						value={othersVal.quotationCompanyName}
						onChange={handleChangeOthers}
					></textarea>
					<textarea
						className="fw-bold textArea"
						name="quotationCompanyPlace"
						rows="1"
						placeholder="Place"
						value={othersVal.quotationCompanyPlace}
						onChange={handleChangeOthers}
					></textarea>
					<div id="responsiveText" className="fw-bold">
						GSTIN - 10AACCT8765G1ZC
					</div>
				</div>

				<table
					className="mt-4 table table-hover table-bordered table-sm border border-2 border-dark align-top"
					id="quotationTable"
				>
					<thead className="table-light">
						<tr id="tableHeading">
							<th scope="col" className="text-center">
								S.No.
							</th>
							<th scope="col" className="text-center">
								Particulars
							</th>
							<th scope="col" className="text-center">
								HSN
							</th>
							<th scope="col" className="text-center">
								GST Extra
							</th>
							<th scope="col" className="text-center">
								Price (Exclusive GST)
							</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, idx) => (
							<TableItem
								sno={idx + 1}
								key={idx}
								particular={item.particular}
								hsn={item.hsn}
								gst={item.gst}
								price={item.price}
								showItem={showItem}
								setTooManyItems={setTooManyItems}
							/>
						))}
						{/* <tr style={{ height: "5rem" }}>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr> */}
					</tbody>
				</table>

				<div
					className="d-flex flex-column lh-lg mx-3"
					id={tooManyItems ? "marginReduce" : "marginNotReduce"}
				>
					<h5 className="align-self-end">
						<strong>For Goyal Motor Company</strong>
					</h5>
					<div id="responsiveText">(Payment within 30 Days)</div>
					<textarea
						name="GSTExtra"
						className="textArea"
						rows="1"
						placeholder="GST Extra"
						value={othersVal.GSTExtra}
						onChange={handleChangeOthers}
					></textarea>
					<textarea
						name="less"
						className="textArea"
						rows="1"
						placeholder="Less"
						value={othersVal.less}
						onChange={handleChangeOthers}
					></textarea>
				</div>
			</div>

			<form
				className="d-flex flex-column border p-3 m-4 shadow rounded"
				onSubmit={addItem}
				// style={{ width: "40rem" }}
			>
				<div className="d-flex formInputs">
					<div className="m-1">
						<input
							type="text"
							className="form-control"
							name="particular"
							placeholder="Particular"
							value={inputVal.particular}
							onChange={handleChange}
						/>
					</div>
					<div className="m-1">
						<input
							type="number"
							className="form-control"
							name="hsn"
							placeholder="HSN"
							value={inputVal.hsn}
							onChange={handleChange}
						/>
					</div>
					<div className="m-1">
						<input
							type="number"
							className="form-control"
							name="gst"
							placeholder="GST Rate"
							value={inputVal.gst}
							onChange={handleChange}
						/>
					</div>
					<div className="m-1">
						<input
							type="text"
							className="form-control"
							name="price"
							placeholder="Price"
							value={inputVal.price}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center my-2">
					<button type="submit" className="btn btn-outline-success">
						Add
					</button>
				</div>
			</form>

			<div className="d-flex mt-3">
				<button
					type="button"
					className="btn btn-outline-danger mx-2"
					onClick={deleteAll}
				>
					Clear All
				</button>
				<button className="btn btn-outline-warning mx-2" onClick={updateItem}>
					Update
				</button>
				<button className="btn btn-outline-danger mx-2" onClick={deleteItem}>
					Delete
				</button>
			</div>

			<DonwloadPDF
				printEle={printEle.current}
				PDFName={"GMC_Quotation.pdf"}
				tooManyItems={tooManyItems}
			/>
		</div>
	);
};

export default Quotation;

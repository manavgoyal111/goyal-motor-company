import React, { useEffect } from "react";

const TableItem = ({
	sno,
	particular,
	hsn,
	gst,
	price,
	showItem,
	setTooManyItems,
}) => {
	useEffect(() => {
		if (sno > 20) {
			setTooManyItems(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<tr
			onClick={() => showItem(sno, particular, hsn, gst, price)}
			id="tableRow"
		>
			<td className="text-center">{sno}.</td>
			<td>{particular}</td>
			<td className="text-center">{hsn}</td>
			<td className="text-center">{gst ? `${gst}%` : ""}</td>
			<td>{price}</td>
		</tr>
	);
};

export default TableItem;

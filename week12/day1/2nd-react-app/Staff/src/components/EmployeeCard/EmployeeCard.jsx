import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ person }) => {
	console.log(person);
	return (
		<div>
			<h2>
				{person.first_name} {person.last_name}
			</h2>
		</div>
	);
};

export default EmployeeCard;
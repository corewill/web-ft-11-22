import EmployeeCard from "../EmployeeCard/EmployeeCard";
import {employeeData} from "../Employees/employeeData.js"
import { useState } from "react";

export const EmployeeContainer = () => {
	const [employee, setEmployee] = useState(employeeData);
	return (
		<div>
			{employee.map((person) => {
				return <EmployeeCard person={person} />;
			})}
		</div>
	);
};

export default EmployeeContainer;
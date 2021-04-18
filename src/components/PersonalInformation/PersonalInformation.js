import React from "react";
import TextInputUtility from "../TextInputUtility.js";
import SelectInputUtility from "../SelectInputUtility.js";

export default class PersonalInformation extends React.Component {
	render() {
		return (
			<div className="w-100">
				<h5 className="mb-4">Personal Information</h5>
				<form className="form-group">
					<TextInputUtility label="First Name" name="firstName" />
					<TextInputUtility label="Last Name" name="lastName" />
					<TextInputUtility
						label="Date of Birth"
						name="DoB"
						type="date"
					/>
					<SelectInputUtility
						label="Gender"
						name="gender"
						options={["Male", "Female"]}
					/>
				</form>
			</div>
		);
	}
}

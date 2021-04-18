import React from "react";
import TextInputUtility from "../TextInputUtility.js";
import SelectInputUtility from "../SelectInputUtility.js";

export default class PersonalInformation extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="w-100">
				<h5 className="mb-4">Personal Information</h5>
				<form className="form-group">
					<TextInputUtility
						label="First Name"
						name="firstName"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Last Name"
						name="lastName"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Date of Birth"
						name="DoB"
						type="date"
						handleChange={this.props.handleChange}
					/>
					<SelectInputUtility
						label="Gender"
						name="gender"
						options={["Male", "Female"]}
						handleChange={this.props.handleChange}
					/>
				</form>
			</div>
		);
	}
}

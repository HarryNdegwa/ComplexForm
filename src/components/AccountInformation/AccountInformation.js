import React from "react";
import TextInputUtility from "../TextInputUtility.js";

export default class AccountInformation extends React.Component {
	render() {
		return (
			<div className="w-100 mt-5">
				<h5 className="mb-4">Account Information</h5>
				<form className="form-group">
					<TextInputUtility label="Email" name="email" />
					<TextInputUtility
						label="Re-type Email"
						name="emailConfirm"
					/>
					<TextInputUtility label="Password" name="password" />
					<TextInputUtility
						label="Re-type Password"
						name="passwordConfirm"
					/>
					<TextInputUtility
						label="Security Question"
						name="securityQuestion"
					/>
					<TextInputUtility
						label="Security Answer"
						name="securityAnswer"
					/>
				</form>
			</div>
		);
	}
}

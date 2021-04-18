import React from "react";
import TextInputUtility from "../TextInputUtility.js";

export default class ContactInformation extends React.Component {
	render() {
		return (
			<div className="w-100 mt-5">
				<h5 className="mb-4">Contact Information</h5>
				<form className="form-group">
					<TextInputUtility label="Address" name="address" />
					<TextInputUtility label="City" name="city" />
					<TextInputUtility label="State" name="state" />
					<TextInputUtility label="Zip Code" name="zipCode" />
					<TextInputUtility label="Phone" name="sphone" />
				</form>
			</div>
		);
	}
}

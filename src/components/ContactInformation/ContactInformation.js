import React from "react";
import TextInputUtility from "../TextInputUtility.js";
import SelectInputUtility from "../SelectInputUtility.js";

export default class ContactInformation extends React.Component {
	render() {
		return (
			<div className="w-100 mt-5">
				<h5 className="mb-4">Contact Information</h5>
				<form className="form-group">
					<TextInputUtility label="Address" name="address" />
					<TextInputUtility label="City" name="city" />
					<SelectInputUtility
						label="State"
						name="state"
						options={[
							"Choose a state",
							"Denver",
							"Nairobi",
							"Tokyo",
							"Helsinki",
						]}
					/>
					<TextInputUtility label="Zip Code" name="zipCode" />
					<TextInputUtility label="Phone" name="sphone" />
				</form>
			</div>
		);
	}
}

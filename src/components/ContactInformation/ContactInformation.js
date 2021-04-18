import React from "react";
import TextInputUtility from "../TextInputUtility.js";
import SelectInputUtility from "../SelectInputUtility.js";

export default class ContactInformation extends React.Component {
	render() {
		return (
			<div className="w-100 mt-5">
				<h5 className="mb-4">Contact Information</h5>
				<form className="form-group">
					<TextInputUtility
						label="Address"
						name="address"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="City"
						name="city"
						handleChange={this.props.handleChange}
					/>
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
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Zip Code"
						name="zipCode"
						handleChange={this.props.handleChange}
					/>
					<TextInputUtility
						label="Phone"
						name="phone"
						handleChange={this.props.handleChange}
					/>
				</form>
			</div>
		);
	}
}

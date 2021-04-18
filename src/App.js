import React from "react";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation.js";
import AccountInformation from "./components/AccountInformation/AccountInformation.js";
import ContactInformation from "./components/ContactInformation/ContactInformation.js";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			DoB: "",
			gender: "",
			email: "",
			password: "",
			securityQuestion: "",
			securityAnswer: "",
			address: "",
			city: "",
			state: "",
			zipCode: "",
			phone: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		alert("Information successfully submitted!");
	}

	render() {
		console.log("this.state", this.state);
		return (
			<div className="col-md-10 col-lg-7 mx-auto my-5">
				<PersonalInformation handleChange={this.handleChange} />
				<AccountInformation handleChange={this.handleChange} />
				<ContactInformation handleChange={this.handleChange} />
				<div className="text-right">
					<button
						className="btn btn-md btn-outline-primary"
						onClick={this.handleSubmit}
						disabled={!this.state.phone}
					>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

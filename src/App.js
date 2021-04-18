import React from "react";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation.js";
import AccountInformation from "./components/AccountInformation/AccountInformation.js";
import ContactInformation from "./components/ContactInformation/ContactInformation.js";

export default class App extends React.Component {
	render() {
		return (
			<div className="col-md-10 col-lg-7 mx-auto my-5">
				<PersonalInformation />
				<AccountInformation />
				<ContactInformation />
			</div>
		);
	}
}

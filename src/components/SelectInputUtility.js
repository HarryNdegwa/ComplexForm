import React from "react";

export default class SelectInputUtility extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="row flex-column flex-md-row align-items-md-start mb-3">
				<div className="col-md-3 d-flex justify-content-start justify-content-md-end pr-0">
					<p>{`${this.props.label}:`}</p>
				</div>
				<div className="col-md-9">
					<select
						value={this.props.value}
						name={this.props.name}
						onChange={this.props.handleChange}
						className="form-control"
					>
						{this.props.options.map((option, idx) => {
							return (
								<option key={idx} value={option.toLowerCase()}>
									{option}
								</option>
							);
						})}
					</select>
				</div>
			</div>
		);
	}
}

import React from "react";

export default class TextInputUtility extends React.Component {
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
					<input
						type={this.props.type ? this.props.type : "text"}
						onChange={this.props.handleChange}
						value={this.props.value}
						name={this.props.name}
						className="form-control"
					/>
					{this.props.hasSecondaryTest && (
						<span className="mb-2 d-block">
							{this.props.secodaryText}
						</span>
					)}
				</div>
			</div>
		);
	}
}

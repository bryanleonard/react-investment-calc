import { useState } from "react";
// import FormControl from "./FormControl";

export default function inputs({onChangeInput, input}) {

	return (
		<section className="user-input" id="user-input">
			{/* <FormControl formId={'one'} labelText={'Initial Investment'} />
			<FormControl formId={'two'} labelText={'Annual Investment'} />
			<FormControl formId={'three'} labelText={'Expected Return (%)'} />
			<FormControl formId={'four'} labelText={'Duration (Years)'} /> */}

			<div className="input-group">
				<label htmlFor="initInv">Initial Investment</label>
				<input id="initInv" type="number" required 
					value={input.initialInvestment}
					onChange={(evt) => onChangeInput('initialInvestment', evt.target.value)} />
			</div>

			<div className="input-group">
				<label htmlFor="annInv">Annual Investment</label>
				<input id="annInv" type="number" required 
					value={input.annualInvestment}
					onChange={(evt) => onChangeInput('annualInvestment', evt.target.value)} />
			</div>

			<div className="input-group">
				<label htmlFor="expRet">Expected Return (%)</label>
				<input id="expRet" type="number" required 
					onChange={(evt) => onChangeInput('expectedReturn', evt.target.value)}
					value={input.expectedReturn}
					/>
			</div>

			<div className="input-group">
				<label htmlFor="dur">Duration (Years)</label>
				<input id="dur" type="number" required 
					value={input.duration}
					onChange={(evt) => onChangeInput('duration', evt.target.value)} />
			</div>
		</section>
	);
}

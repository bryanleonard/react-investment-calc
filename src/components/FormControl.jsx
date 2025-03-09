export default function FormControl({formId, labelText, inputType='number'}) {
	
	return (
	
		<div className="input-group">
			<label htmlFor={formId}>{labelText}</label>
			<input id={formId} type={inputType} />
		</div>

	)
}
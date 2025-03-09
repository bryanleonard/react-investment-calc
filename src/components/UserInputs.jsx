import FormControl from './FormControl';

export default function UserInputs() {
	return (
		<section className="user-input" id="user-input">
			<FormControl formId={'one'} labelText={'Initial Investment'} />
			<FormControl formId={'two'} labelText={'Annual Investment'} />
			<FormControl formId={'three'} labelText={'Expected Return'} />
			<FormControl formId={'four'} labelText={'Duration'} />
		</section>
	);
}

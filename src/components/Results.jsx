import { calculateInvestmentResults } from "../util/investment"

export default function Results({ input}) {
	
	const results = calculateInvestmentResults(input);

	return (
		<section className="data-results">
			<table className="results">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>

				<tbody>
					{
						results.map(itm => {
							return (<tr>
								<td>{itm.year}</td>
								<td>{itm.interest}</td>
								<td>{itm.valueEndOfYear}</td>
								<td>{itm.annualInvestment}</td>
								<td>n'stuff</td>
							</tr>);
						})
					}
					<tr>
						<td>lipsum</td>
						<td>dolor</td>
						<td>sit</td>
						<td>amet</td>
						<td>n'stuff</td>
					</tr>
					
				</tbody>
			</table>

		</section>
		
	)
}
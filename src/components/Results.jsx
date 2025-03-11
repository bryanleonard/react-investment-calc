import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
	const results = calculateInvestmentResults(input);
	const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
	

	return (
		<section className="data-results">
			<table id="results" className="results">
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
					{results.map((row) => {
						const totalInt = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
						const totalInvested = row.valueEndOfYear - initialInvestment;

						return (
							<tr key={row.year}>
								<td>{formatter.format(row.valueEndOfYear)}</td>
								<td>{formatter.format(row.interest)}</td>
								<td>{formatter.format(row.annualInvestment)}</td>
								<td>{formatter.format(totalInt)}</td>
								<td>{formatter.format(totalInvested)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}

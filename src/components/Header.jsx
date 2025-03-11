import logo from '../assets/logo.svg';

export default function Header() {
	
	return (
		<header className="header">
			<img src={logo} alt="Logo image of a calculator" />
			<h1>Investment <span>Calculator</span></h1>
		</header>
	)
}
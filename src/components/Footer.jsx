export default function Footer () {
  const currYear = new Date().getFullYear();
	return (
		<footer className="footer">
      <p>{currYear} | Something, something, something Dark Side.</p>
    </footer>
    
	)
}
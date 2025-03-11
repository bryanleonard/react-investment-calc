import { useState } from 'react';
import Header from "./components/Header";
import UserInputs from './components/UserInputs';
import Results from './components/Results';

function App() {

  const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
		setUserInput(prevValue => {
			return {
				...prevValue,
				[inputId]: +newValue,
			}
		})
	};

  return (
    <main>
      <Header />
      <UserInputs input={userInput} onChangeInput={handleChange} />
      {inputIsValid && <Results input={userInput} /> }
      {!inputIsValid &&  <p className="center">Please enter a duration greater than zero.</p> }
    </main>
  )
}

export default App

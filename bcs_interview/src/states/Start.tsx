export function Start(props) {
    const { setCurrentState, setQuestion } = props;

    const handleRandomClick = () => {
        // Code to generate random question goes here
        setQuestion("What is your biggest weakness?")
        setCurrentState("respond")
    }

    const handleCustomClick = () => {
        setCurrentState("respond")
    }

    return (
        <div>
            <p>Welcome to APP NAME!</p>
            <button onClick={handleRandomClick}>Start Interview with random generated question</button>
            <button onClick={handleCustomClick}>Start Interview with my own question</button>
        </div>);
}
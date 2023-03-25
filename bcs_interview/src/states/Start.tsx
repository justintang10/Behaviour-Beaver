export function Start(props) {
    const { setCurrentState, setQuestion } = props;

    const handleRandomClick = () => {
        // Code to generate random question goes here
        const questions = ["What is your biggest weakness?",
    "Tell me about a time where you had to face criticism",
    "Tell me about a time where you had to make a decision with limited data",
    "Tell me about a time where you had to explain a concept to someone who had less experience in the topic",
    "Tell me about a time where you had a conflict with another teammember"]
        setQuestion(questions[Math.trunc(Math.random()*questions.length)]);
        setCurrentState("respond")
    }

    const handleCustomClick = () => {
        setCurrentState("respond")
    }

    return (
        <div>
            <p>Welcome to APP NAME!</p>
            <button onClick={handleRandomClick}>Start Interview with random generated question</button>
            {/* <button onClick={handleCustomClick}>Start Interview with my own question</button> */}
        </div>);
}
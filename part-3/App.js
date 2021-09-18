
const App = () => {
    return (
        <div>
            <Person name="Sam" age={17} hobbies={['painting', 'travelling', 'sking']} />
            <Person name="DeanWinchester" age={21} hobbies={['swimming', 'reading', 'playing golf']} />
            <Person name="Dainel" age={32} hobbies={["tennis", "gaming"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
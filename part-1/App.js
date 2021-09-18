const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="TOM" />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
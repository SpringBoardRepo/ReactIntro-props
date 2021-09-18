
const App = () => {
    return (
        <div>
            <Tweet username='Jennifer' name="Jenny" date={new Date().toDateString()} tweet="A very first tweet" />
            <Tweet username='Kim' name="KimK" date={new Date().toDateString()} tweet="Intresting dree at meet Gala" />
            <Tweet username='Jack' name="Jackson" date={new Date().toDateString()} tweet="No tweet" />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
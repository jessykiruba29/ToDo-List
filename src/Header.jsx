function App() {
    return(
        <header>
            <h1>REST'au</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <p>Day: {new Date().getDay()}</p>
                </ul>
            </nav>
        </header>
    );
}

export default App

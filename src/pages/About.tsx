export function About() {
    return(
        <>
        <div style={{display: "flex"}}>
            <div className="text" style={{textAlign: "left"}}>
                <h1 style={{fontSize: "100px"}}>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="https://google.com" target="_blank">
                    <button style={{
                    borderRadius: "15px", 
                    borderColor: "black", 
                    backgroundColor: "#68a0cf", 
                    marginLeft: "125px",
                    marginTop: "40px",
                    padding: "50px",
                    fontSize: "25px"
                    }}
                    >
                        Click here to learn more
                    </button>
                </a>
            </div>
            <div className="image" style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%"}}
            >
                <img src="./imgs/people.jpeg" style={{
                    width: "650px",
                    height: "500px",
                    display: "flex",
                    marginRight: "20px"
                }}/>
            </div>
        </div>
        </>
    )
}
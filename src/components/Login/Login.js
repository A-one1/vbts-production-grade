const Login = () => {
    return (
        <>
         <div className="d-flex justify-content-center">
            <div
                className="p-4 mt-4"
                style={{
                background: "#fff",
                border: "1px solid #fff",
                borderRadius: "8px",
                boxShadow: "2px 2px 10px -1px #b9b3b3",
                }}
            >
                <p className="text-center">Enter your ID and Passcode</p>
                <input
                className="text-center"
                type="text"
                value={inputId}
                onChange={handleInputId}
                placeholder="Your ID"
                />
                <input
                className="text-center"
                type="text"
                value={inputPasscode}
                onChange={handleInputPasscode}
                placeholder="Your Passcode"
                />
                <div className="d-flex justify-content-center mt-4">
                <button
                    className="border-0 text-center"
                    onClick={handleButtonClick}
                >
                    Show grades
                </button>
                </div>
                <div className="d-flex justify-content-center">
                <button className="border-0 mt-4" onClick={handleForgotPassword}>
                    Forgot Passcode?
                </button>
                </div>
            </div>
            </div></>
    )
}

export default Login;
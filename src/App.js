import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { database } from "./firebase";
import { ref, onValue } from "firebase/database";
import Students from "./pages/Students/Students";

function App() {
  const [data, setData] = useState([]);
  const [inputId, setInputId] = useState("");
  const [inputPasscode, setInputPasscode] = useState("");
  const [matchingId, setMatchingId] = useState(null);
  const [matchingPasscode, setMatchingPasscode] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    // Reference to your database path
    const databaseRef = ref(database, "/vbts/grade-post/student");

    // Fetch data from the database
    onValue(databaseRef, (snapshot) => {
      const fetchedData = snapshot.val();
      if (fetchedData) {
        setData(Object.values(fetchedData));
      }
    });
  }, []);

  const handleInputId = (event) => {
    setInputId(event.target.value);
  };
  const handleInputPasscode = (event) => {
    setInputPasscode(event.target.value);
  };

  const handleButtonClick = () => {
    const inputIdAsNumber = parseInt(inputId);

    const foundId = data
      ? data.find((item) => item.t1key110 === inputIdAsNumber)
      : null;

    const foundPasscode = data
      ? data.find((item) => item.t1key112 === inputPasscode)
      : null;

    setMatchingId(foundId);
    setMatchingPasscode(foundPasscode);
    setShowLogin(false);
    setShowTable(true);
  };

  const handleLogOut = () => {
    console.log("function called");
    setShowLogin(true);
    setShowTable(false);
    setInputId("");
    setInputPasscode("");
  };

  return (
    <>
      <ToastContainer />
      {/* showing the login table */}
      {showLogin && (
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
            <button
              className="btn-primary border-0 text-white text-center mt-4"
              onClick={handleButtonClick}
            >
              Login
            </button>
          </div>
        </div>
      )}
      {showTable &&
      matchingId !== undefined &&
      matchingId !== null &&
      matchingPasscode !== undefined &&
      matchingPasscode !== null ? (
        <div>
          <div
            className=""
            style={{
              background: "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              boxShadow: "2px 2px 10px -1px #b9b3b3",
            }}
          >
            {/* this is for the top part */}
            <Students
              matchingId={matchingId}
              data={data}
              isEdit={isEdit}
              saveData={saveData}
              setSaveData={setSaveData}
              handleLogOut={handleLogOut}
            />

            {/* this is for the table part */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;

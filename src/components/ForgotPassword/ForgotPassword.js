
// const ForgotPassword = ({id,dob}) => {

//     const [inputId, setInputId] = useState("");
//     const [inputDob, setInputDob] = useState("");

//     const handleInputId = (event) => {
//         setInputId(event.target.value);
//       };

//     const handleInputDob = (event) => {
//         setInputDob(event.target.value);
//       };  

//     const handleShowPasscode = () => {
//         const inputIdAsNumber = parseInt(inputId);
    
//         const foundId = data
//           ? data.find((item) => item.t1key110 === inputIdAsNumber)
//           : null;
//         const foundDob = data
//           ? data.find((item) => item.t1item170 === inputDob)
//           : null;
//         if (!foundId && foundDob) {
//           toast.error("Id invalid");
//         } else if (!foundDob && foundId) {
//           toast.error("Date of birth invalid");
//         } else if (!foundId && !foundDob) {
//           toast.error("Id and Dob invalid");
//         } else {
//         }
//         setMatchingId(foundId);
//         setMatchingDob(foundDob);
//         setShowPasscode(true);
//       };  

//     return (
//         <>
//             <div
//                 className="p-4 mt-4"
//                 style={{
//                 background: "#fff",
//                 border: "1px solid #fff",
//                 borderRadius: "8px",
//                 boxShadow: "2px 2px 10px -1px #b9b3b3",
//                 }}
//             >
//                 <p className="text-center">Enter your ID and Date of Birth</p>
//                 <input
//                 className="text-center"
//                 type="text"
//                 value={inputId}
//                 onChange={handleInputId}
//                 placeholder="Your ID"
//                 />
//                 <input
//                 className="text-center"
//                 type="text"
//                 value={inputDob}
//                 onChange={handleInputDob}
//                 placeholder="Your Date of Birth (MM/DD/YY)"
//                 />
//                 <div className="d-flex justify-content-center">
//                 <button
//                     className="border-0 text-center mt-4"
//                     onClick={handleShowPasscode}
//                 >
//                     Show Passcode
//                 </button>
//                 </div>
//             </div>
//         </>
//     )
//   }

//   export default ForgotPassword;
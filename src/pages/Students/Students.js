import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import "./Students.css";
import {
  FaUserTie,
  FaPencilAlt,
  FaUniversity,
  FaPhone,
  FaEnvelopeOpen,
  FaRegCalendarTimes,
} from "react-icons/fa";
import { database } from "../../firebase";
import { ref, set } from "firebase/database";
import { DateTime } from "luxon";
import { toast } from "react-toastify";

const Students = ({ matchingId, data, handleLogOut }) => {
  const [t1key110, sett1key110] = useState(matchingId.t1key110);
  const [t1item120, setName] = useState(matchingId.t1item120);
  const [t1item130, setProgram] = useState(matchingId.t1item130);
  const [t1item140, setPhone] = useState(matchingId.t1item140);
  const [t1item150, setEmail] = useState(matchingId.t1item150);
  const [t1item160, setRegistrationDate] = useState(matchingId.t1item160);
  const [isEditing, setIsEdit] = useState(false);
  var time = t1item160.slice(0, 10) + " " + t1item160.slice(11, 16);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEditing) {
      setIsEdit(!isEditing);
    } else if (isEditing) {
      set(ref(database, `vbts/multiUsers/${t1key110}`), {
        t1_key110: t1key110,
        t1item120: t1item120,
        t1item130: t1item130,
        t1item140: t1item140,
        t1item150: t1item150,
        t1item160: DateTime.now().toFormat("yyyy-MM-dd hh:mm a"),
      })
        .catch((e) => {
          console.log("SAVING ERROR", e);
          toast.error("Error: ", e, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .then(() =>
          toast.success("Successfully Saved!", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        );
      setIsEdit(!isEditing);
    }
  };

  return (
    <>
      <div className="form-heading">
        <h2>Student Registration </h2>
        <button
          type="button"
          className="btn btn-danger "
          style={{
            padding: "7px",
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
          onClick={handleLogOut}
        >
          Sign out
        </button>
      </div>
      <div className="Student-form">
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label className="form-label">
                <FaUserTie />
                {data[0].t1key110}
              </Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                value={t1key110}
                readOnly
                onChange={(event) => {
                  sett1key110(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label>
                <FaPencilAlt />
                {data[0].t1item120}
              </Form.Label>
              <Form.Control
                className={isEditing ? "editable" : "form-control"}
                type="text"
                value={t1item120}
                readOnly={!isEditing}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label>
                <FaUniversity />
                {data[0].t1item130}
              </Form.Label>
              <Form.Control
                className={isEditing ? "editable" : "form-control"}
                type="text"
                value={t1item130}
                readOnly={!isEditing}
                onChange={(event) => {
                  setProgram(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label>
                <FaPhone />
                {data[0].t1item140}
              </Form.Label>
              <Form.Control
                className={isEditing ? "editable" : "form-control"}
                type="text"
                value={t1item140}
                readOnly={!isEditing}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label>
                <FaEnvelopeOpen />
                {data[0].t1item150}
              </Form.Label>
              <Form.Control
                className={isEditing ? "editable" : "form-control"}
                type="text"
                value={t1item150}
                readOnly={!isEditing}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label className="form-label">
                <FaRegCalendarTimes />
                {data[0].t1item160}
              </Form.Label>
              <Form.Control
                className="form-control"
                type="email"
                value={time}
                readOnly
                onChange={(event) => {
                  setRegistrationDate(event.target.value);
                }}
              />
            </Form.Group>

            <div className="editButton">
              <button
                className={isEditing ? "btn btn-success" : "btn btn-info"}
                style={{ border: "none", padding: "4px 4px" }}
                type="submit"
              >
                {isEditing ? "Save Data" : "Edit Data"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Students;

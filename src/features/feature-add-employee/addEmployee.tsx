import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../employeeSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Form from "../../shared/Form/form";

export default function AddEmployee() {
  const [fullName, setFullName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [experience, setExperience] = useState<number>(0);

  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const [nameErrorMessage, setNameErrorMessage] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handles the form submission event.
   * @param e Form Event
   */
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      addEmployee({
        id: uuidv4(),
        fullName,
        birthDate,
        department,
        experience,
      })
    );
    setFullName("");
    setBirthDate("");
    setDepartment("");
    setExperience(0);
    navigate("/list");
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        department={department}
        setDepartment={setDepartment}
        experience={experience}
        setExperience={setExperience}
        isInvalid={isInvalid}
        setIsInvalid={setIsInvalid}
        nameErrorMessage={nameErrorMessage}
        setNameErrorMessage={setNameErrorMessage}
        buttonName="Add Employee"
        formTitle="Add Employee"
      />
    </>
  );
}

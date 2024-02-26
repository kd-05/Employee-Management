import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate, useParams } from "react-router-dom";
import { FormEventHandler, useState } from "react";
import { editEmployee } from "../employeeSlice";
import Form from "../../shared/Form/form";

export default function EditEmployee() {
  const { id } = useParams();
  const employee = useSelector((state: RootState) =>
    state.employee.find((employee) => employee.id === id)
  );

  const [fullName, setFullName] = useState<string>(employee?.fullName || "");
  const [birthDate, setBirthDate] = useState(employee?.birthDate || "");
  const [department, setDepartment] = useState<string>(
    employee?.department || ""
  );
  const [experience, setExperience] = useState<number>(
    employee?.experience || 0
  );

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
    if (id !== undefined) {
      dispatch(
        editEmployee({
          id,
          fullName,
          birthDate,
          department,
          experience,
        })
      );
    }
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
        buttonName="Update Employee details"
        formTitle="Edit Employee"
      />
    </>
  );
}

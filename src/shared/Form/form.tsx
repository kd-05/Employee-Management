import styles from "./form.module.css";
import { FormProps } from "../../model/fromProp";
import { Link } from "react-router-dom";

export default function Form(formProps: FormProps) {
  const {
    onSubmit,
    fullName,
    setFullName,
    birthDate,
    setBirthDate,
    department,
    setDepartment,
    experience,
    setExperience,
    isInvalid,
    setIsInvalid,
    nameErrorMessage,
    setNameErrorMessage,
    buttonName,
    formTitle
  } = formProps;

  // Regular expression to validate full name
  const fullNameRegex = /^[A-Za-z ]+$/;

  /**
   * Method to handle change in full name field
   * @param name Name entered in input box
   */
  const handleFullNameChange = (name: string) => {
    setFullName(name);

    if (fullNameRegex.test(name)) {
      setNameErrorMessage("");
      setIsInvalid(false);
    } else {
      setNameErrorMessage("Name should only contain letters");
      setIsInvalid(true);
    }
  };

  /**
   * Handles the change event for the experience input field.
   * @param e Event
   */
  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setExperience(value);
  };

  return (
    <>
      <div className={styles["container"]}>
        <h2>{formTitle}</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => handleFullNameChange(e.target.value)}
              required
            />
            <p className={styles["error-message"]}>{nameErrorMessage}</p>
          </div>
          <div>
            <label>Birth Date</label>
            <input
              type="date"
              id="birthDate"
              placeholder="Birth date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Department</label>
            <input
              type="text"
              id="department"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
              value={department}
            />
          </div>
          <div>
            <label>Experience</label>
            <input
              type="number"
              id="experience"
              placeholder="Experience (in years)"
              onChange={handleExperienceChange}
              value={experience}
            />
          </div>

          <button type="submit" disabled={isInvalid}>
            {buttonName}
          </button>
        </form>
        <div style={{ textAlign: "center" }}>
        <Link to="/list">Go to List Page</Link>
      </div>
      </div>
    </>
  );
}

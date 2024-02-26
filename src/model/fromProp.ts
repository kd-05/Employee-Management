import { Dispatch, FormEventHandler, SetStateAction } from "react";

export interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  fullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  birthDate: string;
  setBirthDate: Dispatch<SetStateAction<string>>;
  department: string;
  setDepartment: Dispatch<SetStateAction<string>>;
  experience: number;
  setExperience: Dispatch<SetStateAction<number>>;
  isInvalid: boolean;
  setIsInvalid: Dispatch<SetStateAction<boolean>>;
  nameErrorMessage: string;
  setNameErrorMessage: Dispatch<SetStateAction<string>>;
  buttonName: string;
  formTitle: string,
}

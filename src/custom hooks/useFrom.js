import { useState } from "react";

const useForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const [branch, setBranch] = useState("");

  return {
    firstname,
    lastname,
    email,
    phone,
    password,
    confirm,
    college,
    course,
    subject,
    branch,
    FirstnameChangeHandler: (event) => setFirstName(event.target.value),
    LastnameChangeHandler: (event) => setLastName(event.target.value),
    emailChangeHandler: (event) => setEmail(event.target.value),
    phoneChangeHandler: (event) => setPhone(event.target.value),
    passwordChangeHandler: (event) => setPassword(event.target.value),
    confirmChangeHandler: (event) => setConfirm(event.target.value),
    collegeChangeHandler: (event) => setCollege(event.target.value),
    courseChangeHandler: (event) => setCourse(event.target.value),
    subjectChangeHandler: (event) => setSubject(event.target.value),
    branchChangeHandler: (event) => setBranch(event.target.value),
  };
};

export default useForm;


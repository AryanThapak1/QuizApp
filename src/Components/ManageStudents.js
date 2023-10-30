import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ManageStudents.module.css"; // Import the CSS module

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:8080/api/v1/students');
    const names = await response.json();
    setStudents(names.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <ul className={styles.list}>
      {students.map((el, index) => (
        <li key={index} className={styles.item}>
          <Link to={el} className={styles.link}>
            {el}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ManageStudents;

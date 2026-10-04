function StudentsList() {
  const students = [
    "Ahmad",
    "Ali",
    "Amir",
    "Abdullah",
    "Sarah",
    "Zainab",
    "Raghad",
    "Sayed Hamed",
  ];

  return (
    <>
      <ul>
        {students
          .filter((student) => student !== "Sayed Hamed")
          .map((student) => (
            <li key={student}>{student}</li>
          ))}
      </ul>
    </>
  );
}

export default StudentsList;

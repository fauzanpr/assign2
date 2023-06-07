import { useEffect, useState } from "react";

const Table = (props) => {
  const [students, setStudents] = useState(props.students);
  const [change, setChange] = useState(false);

  const deleteBtnHandler = async (e, id) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    });
    setChange(!change);
  };

  useEffect(() => {
    const reRender = async () => {
      const res = await fetch("http://localhost:3001/student");
      if (!res) return false;
      const datas = await res.json();
      setStudents(datas);
    };
    reRender();
  });

  return (
    <>
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => {
              return (
                <tr key={student.id} className="student-data-row">
                  <td>{student.id}</td>
                  <td>{student.fullname}</td>
                  <td>{student.birthDate}</td>
                  <td>{student.gender}</td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      data-testid={`delete-${student.id}`}
                      onClick={(e) => deleteBtnHandler(e, student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

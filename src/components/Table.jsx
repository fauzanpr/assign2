const Table = (props) => {
  const deleteBtnHandler = async (e, id) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/student/${id}`, {
      method: "DELETE",
    });
  };

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
          {props.students &&
            props.students.map((student) => {
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

import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:3001/student")
        .then((res) => res.json())
        .then((res) => {
          setStudents(res);
          setLoading(false);
        });
    };
    getData();
  });
  return (
    <>
      <Form />
      {loading ? <p>Loading ...</p> : <Table students={students} />}
    </>
  );
};

export default App;

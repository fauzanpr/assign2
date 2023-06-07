import { useEffect, useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const pleaseReload = (decision) => {
    if (decision) {
      setReload(!reload);
      decision = false;
    }
  };
  useEffect(() => {
    console.log("msokkkk");
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/student");
        const datas = await res.json();
        console.log(datas);
        setStudents(datas);
        setLoading(false);
      } catch (e) {
        console.log(e.massage);
        setLoading(false);
      }
      // await fetch("")
      //   .then((res) => {
      //     if (!res.ok) return false;
      //     res.json();
      //   })
      //   .then((res) => {
      //     setStudents(res);
      //     setLoading(false);
      //   })
      //   .catch((e) => console.log(e));
    };
    getData();
  }, [reload]);
  return (
    <>
      <Form onSubmit={pleaseReload} />
      {loading ? <p>Loading ...</p> : <Table students={students} />}
    </>
  );
};

export default App;

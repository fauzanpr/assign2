import { useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [prody, setPrody] = useState("Ekonomi");

  const cekFaculty = (prody) => {
    if (prody === "Ekonomi" || prody === "Manajemen" || prody === "Akuntansi")
      return "Fakultas Ekonomi";
    else if (
      prody === "Administrasi Publik" ||
      prody === "Administrasi Bisnis" ||
      prody === "Hubungan Internasional"
    )
      return "Fakultas Ilmu Sosial dan Politik";
    else if (prody === "Teknik Sipil" || prody === "Arsitektur")
      return "Fakultas Teknik";
    else if (
      prody === "Matematika" ||
      prody === "Fisika" ||
      prody === "Informatika"
    )
      return "Fakultas Teknologi Informasi dan Sains";
  };

  const submitBtnHandler = async (e) => {
    e.preventDefault();
    // const faculty = cekFaculty(prody) || 'Fakultas Ekonomi';
    await fetch("http://localhost:3001/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        birthDate: date,
        gender,
        faculty: cekFaculty(prody) || 'Fakultas Ekonomi',
        programStudy: prody,
      }),
    });
  };
  return (
    <>
      <form id="form-student">
        <div>
          <label htmlFor="input-name">Fullname</label>
          <input
            type="text"
            id="input-name"
            data-testid="name"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-date">Birth Date</label>
          <input
            type="date"
            id="input-date"
            data-testid="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-gender">Gender</label>
          <select
            name="gender"
            id="input-gender"
            data-testid="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="input-prody">Program Study</label>
          <select
            name="prody"
            id="input-prody"
            data-testid="prody"
            onChange={(e) => setPrody(e.target.value)}
          >
            <option value="ekonomi">Ekonomi</option>
            <option value="manajemen">Manajemen</option>
            <option value="akuntansi">Akuntansi</option>
            <option value="AdministrasiPublik">Administrasi Publik</option>
            <option value="AdministrasiBisnis">Administrasi Bisnis</option>
            <option value="HubunganInternasional">
              Hubungan Internasional
            </option>
            <option value="TeknikSipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </div>
        <input
          type="submit"
          value="Add student"
          id="add-btn"
          data-testid="submit"
          onClick={(e) => submitBtnHandler(e)}
        />
      </form>
    </>
  );
};

export default Form;

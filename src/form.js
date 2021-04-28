import React, { useState } from "react";

export default function Form(params) {
  const [information, setInformation] = useState({ name: "", surname: "" });
  const [data, setData] = useState([]);
  const handleChange = (event) => {
    setInformation({ ...information, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    setData(information);
    console.log(information);
  };
  return (
    <div>
      Name:
      <input
        onChange={handleChange}
        name="name"
        type="text"
        value={information.name}
      />
      Surname:
      <input
        onChange={handleChange}
        name="surname"
        type="text"
        value={information.surname}
      />
      <input onClick={handleSubmit} type="submit" value="Submit" />
      <br />
      {/* {data.map(t => <div>{t.name}  {t.surname}</div>)} */}
      Name: {data.name} <br />
      Surname:{data.surname}
    </div>
  );
}

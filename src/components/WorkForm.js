import { useState } from "react";
import { addWork } from "../redux/actions/workShop";
import { useDispatch } from "react-redux";

function WorkForm() {
  const [work, setWork] = useState({
    name: "",
    surname: "",
    taskName: "",
    isComplete: false,
  });
  const dispatch = useDispatch();

  const addWorkWithId = (work) => {
    const workWithId = { ...work, id: Math.random() };
    dispatch(addWork(workWithId));
  };

  return (
    <div className="App">
      <input
        value={work.name}
        name="name"
        onChange={(e) => setWork({ ...work, [e.target.name]: e.target.value })}
        placeholder="name"
      />

      <input
        value={work.surname}
        name="surname"
        onChange={(e) => setWork({ ...work, [e.target.name]: e.target.value })}
        placeholder="surname"
      />

      <input
        value={work.workName}
        name="workName"
        onChange={(e) => setWork({ ...work, [e.target.name]: e.target.value })}
        placeholder="work Name"
      />

      <button onClick={() => addWorkWithId(work)}> add </button>
    </div>
  );
}

export default WorkForm;

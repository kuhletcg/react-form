import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteWork,
  editWork,
  changeIsComplete,
} from "../redux/actions/workShop";

function WorkOn() {
  const workOn = useSelector((state) => state.workShop.workOn);
  const dispatch = useDispatch();
  console.log(workOn);
  const [editValue, setEditValue] = useState({ index: null, workName: null });

  const changeStyle = (isComplete) => {
    if (isComplete == true) {
      return { backgroundColor: "red" };
    } else {
      return null;
    }
  };
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          {workOn.map((work, index) => {
            return (
              <tr style={changeStyle(work.isComplete)} key={index}>
                <td>{work.name}</td>
                <td>{work.surname}</td>
                <td>{work.workName}</td>
                <button onClick={() => dispatch(deleteWork(index))}>
                  delete{" "}
                </button>
                <button
                  onClick={() =>
                    setEditValue({ id: work.id, workName: work.workName })
                  }
                >
                  edit{" "}
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      changeIsComplete({ id: work.id, isComplete: true })
                    )
                  }
                >
                  IsComplete{" "}
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        value={editValue.workName}
        onChange={(e) =>
          setEditValue({ ...editValue, workName: e.target.value })
        }
        placeholder="edit value"
      />
      <button onClick={() => dispatch(editWork(editValue))}> SAVE EDIT</button>
    </div>
  );
}

export default WorkOn;

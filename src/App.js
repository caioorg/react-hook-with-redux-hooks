import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [title, setTitle] = useState("");
  const courses = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const addCourseSubmit = () => {
    dispatch({ type: "ADD_COURSE", title });
  };

  return (
    <div className="App">
      <input onChange={({ target: { value } }) => setTitle(value)} />
      <button onClick={addCourseSubmit}>Adicionar o Curso</button>
      <ul>
        {courses?.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

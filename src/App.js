import './App.css';
import { useState } from 'react';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState();
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          ></input>
          <Employee name="Vala" role="Developer" />
          <Employee name="Hamed" role={role} />
          <Employee name="Omid" />
        </>
      ) : (
        <p>Employee not found</p>
      )}
    </div>
  );
}

export default App;

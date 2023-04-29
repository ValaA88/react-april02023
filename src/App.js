import './index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Mary',
      role: 'Developer',
      img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
    },
    {
      id: 2,
      name: 'Nikta',
      role: 'UX Design',
      img: 'https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg',
    },
    {
      id: 3,
      name: 'Omid',
      role: 'singer',
      img: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg',
    },
    {
      id: 4,
      name: 'Vala',
      role: 'Composer',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      id: 5,
      name: 'Melanie',
      role: 'Frontend',
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      id: 6,
      name: 'Teresa',
      role: 'Writer',
      img: 'https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg',
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          ></input>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>Employee not found</p>
      )}
    </div>
  );
}

export default App;

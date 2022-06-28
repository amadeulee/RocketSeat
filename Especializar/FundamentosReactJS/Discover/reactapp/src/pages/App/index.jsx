import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import './styles.css';

export function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
    setStudents([...students, newStudent]);
  }
  // console.log(students);
  useEffect(() => {
    fetch('https://api.github.com/users/amadeulee')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presenca: {studentName}</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto perfil" />
        </div>
      </header>
      <input
        type="text"
        value={studentName}
        placeholder="Insira seu nome"
        onChange={e => {
          setStudentName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleAddStudent();
          setStudentName('');
        }}
      >
        Enter
      </button>

      {students.map(student => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

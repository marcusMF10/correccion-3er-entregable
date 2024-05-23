import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import StudentForm from './components/studentForm';

const Edit = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    console.log('Id del estudiante::', studentId);
    const fetchData = async () => {
      if (!studentId) return; // Verificar si studentId es undefined
      try {
        const response = await fetch(`http://localhost:9000/api/students/${studentId}`);
        if (response.ok) {
          const data = await response.json();
          setStudent(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [studentId]);

  if (!student) {
    return <LinearProgress />;
  }

  return <StudentForm student={student} isEdit />;
};

export default Edit;

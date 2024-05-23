import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import TeacherFrom from './components/TeacherFrom';

const Edit = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    console.log('Id del docente:', teacherId);
    const fetchData = async () => {
      if (!teacherId) return; // Verificar si es undefing
      try {
        const response = await fetch(`http://localhost:9000/api/teachers/${teacherId}`);
        if (response.ok) {
          const data = await response.json();
          setTeacher(data);
        } else {
          throw new Error('Error getting the data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [teacherId]);

  if (!teacher) {
    return <LinearProgress />;
  }

  return <TeacherFrom teacher={teacher} isEdit />;
};

export default Edit;

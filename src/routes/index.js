import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
//students
import StudentsRoutes from './StudentsRoutes';
//teachers
import TeachersRoutes from './TeachersRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes, TeachersRoutes]);
}

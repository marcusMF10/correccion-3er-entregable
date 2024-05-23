// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { element } from 'prop-types';
import { lazy } from 'react';

// ==============================|| MAIN ROUTING ||============================== //

const Students = Loadable(lazy(() => import('pages/dashboard/students')));
const Create = Loadable(lazy(() => import('pages/dashboard/students/create')));
const Edit = Loadable(lazy(() => import('pages/dashboard/students/edit')));
const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students', // ruta asignada en menu-items
      element: <Students /> // la vista de estudiantes
    },
    {
      path: 'students/create',
      element: <Create />
    },
    {
      path: 'students/edit/:studentId',
      element: <Edit />
    }
  ]
};

export default StudentsRoutes;

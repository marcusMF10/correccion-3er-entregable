// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { element } from 'prop-types';
import { lazy } from 'react';

// ==============================|| MAIN ROUTING ||============================== //
const Teachers = Loadable(lazy(() => import('pages/dashboard/teachers')));
const Create = Loadable(lazy(() => import('pages/dashboard/teachers/create')));
const Edit = Loadable(lazy(() => import('pages/dashboard/teachers/edit')));

const TeachersRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'teachers', // ruta asignada en menu-items
      element: <Teachers /> // la vista de estudiantes
    },
    {
      path: 'teachers/create',
      element: <Create />
    },
    {
      path: 'teachers/edit/:teacherId',
      element: <Edit />
    }
  ]
};

export default TeachersRoutes;

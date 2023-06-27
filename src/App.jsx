import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import Blog from './pages/blog/Blog';
import Job from './pages/job/Job';
import Team from './pages/team/Team';
import Gallery from './pages/gallery/Gallery';
import { useSelector } from 'react-redux';
import BlogInput from './components/blogInput/BlogInput';

function App() {
  const {navStatus} = useSelector(state => state.nav);

  const Layout = () => {
    return (
      <div className='app'>
        <div className="app-topbar"><Topbar /></div>
        <div className="app-home">
          <div className={`app-home-sidebar ${!navStatus ? 'active' : ''}`}><Sidebar /></div>
          <div className="app-home-outlet"><Outlet /></div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/job',
          element: <Job />
        },
        {
          path: '/team',
          element: <Team />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '/blog/create',
          element: <BlogInput />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

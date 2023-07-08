import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Dashboard from './pages/dashboard/Dashboard';
import Blog from './pages/blog/Blog';
import Job from './pages/job/Job';
import Team from './pages/team/Team';
import Gallery from './pages/gallery/Gallery';
import { useSelector } from 'react-redux';
import BlogInput from './components/blogInput/BlogInput';
import JobInput from './components/jobInput/JobInput';
import EditJob from './components/editJob/EditJob';
import EditBlog from './components/editBlog/EditBlog';
import TeamAdd from './components/teamAdd/TeamAdd';
import Login from './pages/login/Login';

function App() {
  const { navStatus } = useSelector(state => state.nav);
  const { admin } = useSelector(state => state.admin);

  const Verify = ({ children }) => {
    if (admin) {
      return children
    } else {
      return <Navigate to={'/login'} />
    }
  }

  const Layout = () => {
    return (
      <div className='app'>
        <Verify>
          <div className="app-topbar"><Topbar /></div>
          <div className="app-home">
            <div className={`app-home-sidebar ${navStatus ? 'active' : ''}`}><Sidebar /></div>
            <div className="app-home-outlet"><Outlet /></div>
          </div>
        </Verify>
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
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'blog/create',
          element: <BlogInput />
        },
        {
          path: 'blog/:blogId',
          element: <EditBlog />
        },
        {
          path: 'job',
          element: <Job />
        },
        {
          path: 'job/create',
          element: <JobInput />
        },
        {
          path: 'job/:jobId',
          element: <EditJob />
        },
        {
          path: 'team',
          element: <Team />
        },
        {
          path: 'team/add',
          element: <TeamAdd />
        },
        {
          path: 'gallery',
          element: <Gallery />
        },
      ],
    },
    {
      path: '/login',
      element: admin ? <Navigate to={'/'} /> : <Login />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;

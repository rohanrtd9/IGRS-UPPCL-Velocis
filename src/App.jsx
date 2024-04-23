import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import PendingComplaint from './pages/Pending/PendingComplaint';
import ForwardComplaint from './pages/Forward/ForwardComplaint';
import RejectedComplaint from './pages/Rejected/RejectedComplaint';
import SolvedComplaint from './pages/Solved/SolvedComplaint';
import ActionTakeComplaint from './pages/Action/ActionTake';
import { AppProvider } from './hooks/userContext';
import NewComplaint from './pages/Complaint/AddComplaint';
import ViewComplaint from './pages/Complaint/ViewComplaint';
import AddFeedback from './pages/Feedbak/AddFeedback';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <AppProvider>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageTitle title="IGRS | Dashboard" />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/pending-complaint"
            element={
              <>
                <PageTitle title="IGRS | Pending Complaint" />
                <PendingComplaint />
              </>
            }
          />

          <Route
            path="/forward-complaint"
            element={
              <>
                <PageTitle title="IGRS | Forward Complaint" />
                <ForwardComplaint />
              </>
            }
          />

          <Route
            path="/rejected-complaint"
            element={
              <>
                <PageTitle title="IGRS | Rejected Complaint" />
                <RejectedComplaint />
              </>
            }
          />

          <Route
            path="/solved-complaint"
            element={
              <>
                <PageTitle title="IGRS | Solved Complaint" />
                <SolvedComplaint />
              </>
            }
          />

          <Route
            path="/action-complaint"
            element={
              <>
                <PageTitle title="IGRS | Action Take" />
                <ActionTakeComplaint />
              </>
            }
          />
          <Route
            path="/new-complaint"
            element={
              <>
                <PageTitle title="IGRS | New Complaint" />
                <NewComplaint />
              </>
            }
          />
          <Route
            path="/view-complaint"
            element={
              <>
                <PageTitle title="IGRS | View Complaint" />
                <ViewComplaint />
              </>
            }
          />
          <Route
            path="/feedback"
            element={
              <>
                <PageTitle title="IGRS | Feedback" />
                <AddFeedback />
              </>
            }
          />
          <Route
            index
            path="/auth/signin"
            element={
              <>
                <PageTitle title="IGRS | Signin" />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="IGRS | Signup" />
                <SignUp />
              </>
            }
          />
        </Routes>
      </>
    </AppProvider>
  );
}

export default App;

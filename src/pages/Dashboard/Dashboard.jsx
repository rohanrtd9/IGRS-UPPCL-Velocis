import React, { useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import DefaultLayout from '../../layout/DefaultLayout';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import GppBadIcon from '@mui/icons-material/GppBad';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import { useUserContext } from '../../hooks/userContext';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Dashboard = () => {
  const { userType, setUserType } = useUserContext();
  const [category, setCategory] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const handleSearch = () => {
    setBtnLoading(true);
    setTimeout(function () {
      setBtnLoading(false);
    }, 3000);
  };
  return (
    <DefaultLayout>
      {userType === 'admin' ? (
        <>
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 mb-6">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 p-6.5">
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Year
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option>All</option>
                    <option>2024</option>
                    <option>2023</option>
                  </select>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Month
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option>All</option>
                    <option>Jan</option>
                    <option>Feb</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    Category
                  </label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Forwarded">Forwarded</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Solved">Solved</option>
                    <option value="Take Action">Take Action</option>
                  </select>
                </div>
                <div>
                  <label className="mb-3 block text-black dark:text-white">
                    &nbsp;
                  </label>
                  <Button
                    onClick={handleSearch}
                    loading={btnLoading}
                    color="blue"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {category === '' ? (
              <>
                <CardDataStats title="Pending Complaint" total="124">
                  <PendingActionsIcon />
                </CardDataStats>
                <CardDataStats title="Forwarded Complaint" total="257">
                  <ForwardToInboxIcon />
                </CardDataStats>
                <CardDataStats title="Rejected Complaint" total="98">
                  <GppBadIcon />
                </CardDataStats>
                <CardDataStats title="Solved Complaint" total="247">
                  <GppGoodIcon />
                </CardDataStats>
                <CardDataStats title="Total Action" total="456">
                  <CallToActionIcon />
                </CardDataStats>
              </>
            ) : category === 'Pending' ? (
              <CardDataStats title="Pending Complaint" total="124">
                <PendingActionsIcon />
              </CardDataStats>
            ) : category === 'Forwarded' ? (
              <CardDataStats title="Forwarded Complaint" total="257">
                <ForwardToInboxIcon />
              </CardDataStats>
            ) : category === 'Rejected' ? (
              <CardDataStats title="Rejected Complaint" total="98">
                <GppBadIcon />
              </CardDataStats>
            ) : category === 'Solved' ? (
              <CardDataStats title="Solved Complaint" total="98">
                <GppGoodIcon />
              </CardDataStats>
            ) : (
              <CardDataStats title="Total Action" total="456">
                <CallToActionIcon />
              </CardDataStats>
            )}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <Link to={'/new-complaint'}>
            <CardDataStats title="New Complaint">
              <PendingActionsIcon />
            </CardDataStats>
          </Link>
          <Link to={'/view-complaint'}>
            <CardDataStats title="View Your Complaint">
              <ForwardToInboxIcon />
            </CardDataStats>
          </Link>
          <Link to={'/feedback'}>
            <CardDataStats title="Your Feedback">
              <ForwardToInboxIcon />
            </CardDataStats>
          </Link>
        </div>
      )}
    </DefaultLayout>
  );
};
export default Dashboard;

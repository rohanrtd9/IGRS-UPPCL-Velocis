import { Button } from '@material-tailwind/react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';

function ViewComplaint() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="View Complaint" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 mb-6">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                From Date
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Lucknow</option>
                <option>Kanpur</option>
              </select>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                To Date
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Lucknow</option>
                <option>Kanpur</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Unique Complaint ID
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Lucknow</option>
                <option>Kanpur</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                District
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Lucknow</option>
                <option>Kanpur</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Complaint Type
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Lucknow</option>
                <option>Kanpur</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                &nbsp;
              </label>
              <Button variant="gradient" className="capitalize" color="blue">
                Search
              </Button>
              <Button
                variant="gradient"
                className="ms-2 capitalize"
                color="green"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 mb-6">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-1 2xl:gap-7.5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-2">
                      S.No.
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Unique Complained ID
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Mobile Number
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Email ID
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Complaint Type
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Compalint Status
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Forward
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Complaint Date
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-2 py-4">1</td>
                    <td className="px-2 py-4">ETA123128673812ver</td>
                    <td className="px-2 py-4">9450087881</td>
                    <td className="px-2 py-4"></td>
                    <td className="px-2 py-4">Transformer Issue</td>
                    <td className="px-2 py-4">Open</td>
                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Forward
                      </a>
                    </td>
                    <td className="px-2 py-4">23/04/2024</td>
                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Feedback
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
export default ViewComplaint;

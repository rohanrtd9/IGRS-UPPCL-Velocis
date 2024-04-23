import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DefaultLayout from '../../layout/DefaultLayout';

function PendingComplaint() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pending Complaint" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 mb-6">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Complaint ID
              </label>
              <input
                placeholder="Enter Complaint ID"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
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
                Name
              </label>
              <input
                placeholder="Enter Name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Mobile
              </label>
              <input
                placeholder="Enter Mobile Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Diary No.
              </label>
              <input
                placeholder="Enter Diary No."
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Diary Date
              </label>
              <DatePickerOne />
            </div>
            <div>
              <button className="inline-flex items-center justify-center bg-primary py-1.5 rounded px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Search
              </button>
              <button className="ms-2 inline-flex items-center justify-center bg-green-500 py-1.5 rounded px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Reset
              </button>
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
                      District
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Redressal Unit
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Diary Number
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Diary Date
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Name
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Mobile Number
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Email ID
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Forward
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Status
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Upload Action Against Complaint
                    </th>
                    <th scope="col" className="px-2 py-2">
                      Close
                    </th>
                    <th scope="col" className="px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className="px-2 py-4">1</th>
                    <td className="px-2 py-4">ETA123128673812ver</td>
                    <td className="px-2 py-4">Etah</td>
                    <td className="px-2 py-4">Dakshinanchal</td>
                    <td className="px-2 py-4">1800</td>
                    <td className="px-2 py-4">14/04/2024</td>
                    <td className="px-2 py-4">Manohar Lal</td>
                    <td className="px-2 py-4">9450087881</td>
                    <td className="px-2 py-4">N/A</td>
                    <td className="px-2 py-4">Forward</td>
                    <td className="px-2 py-4">
                      Pending at: Dakhinanchal(Discom)
                    </td>
                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Action Taken
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Close Complaint
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Send Notification
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className="px-2 py-4">2</th>
                    <td className="px-2 py-4">ETA123128673812ver</td>
                    <td className="px-2 py-4">Etah</td>
                    <td className="px-2 py-4">Dakshinanchal</td>
                    <td className="px-2 py-4">1800</td>
                    <td className="px-2 py-4">14/04/2024</td>
                    <td className="px-2 py-4">Manohar Lal</td>
                    <td className="px-2 py-4">9450087881</td>
                    <td className="px-2 py-4">N/A</td>
                    <td className="px-2 py-4">Forward</td>
                    <td className="px-2 py-4">
                      Pending at: Dakhinanchal(Discom)
                    </td>
                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Action Taken
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Close Complaint
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Send Notification
                      </a>
                    </td>
                  </tr>
                  <tr className="dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className="px-2 py-4">3</th>
                    <td className="px-2 py-4">ETA123128673812ver</td>
                    <td className="px-2 py-4">Etah</td>
                    <td className="px-2 py-4">Dakshinanchal</td>
                    <td className="px-2 py-4">1800</td>
                    <td className="px-2 py-4">14/04/2024</td>
                    <td className="px-2 py-4">Manohar Lal</td>
                    <td className="px-2 py-4">9450087881</td>
                    <td className="px-2 py-4">N/A</td>
                    <td className="px-2 py-4">Forward</td>
                    <td className="px-2 py-4">
                      Pending at: Dakhinanchal(Discom)
                    </td>
                    <td className="px-2 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Action Taken
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Close Complaint
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Send Notification
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
export default PendingComplaint;

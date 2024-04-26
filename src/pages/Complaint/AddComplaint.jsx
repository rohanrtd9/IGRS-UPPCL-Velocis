import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Popup from '../../components/popup/popup';
import DefaultLayout from '../../layout/DefaultLayout';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';
import { Alert, Button } from '@material-tailwind/react';
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function NewComplaint() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <DefaultLayout>
      <Breadcrumb pageName="New Complaint" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 mb-6">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 p-6.5">
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
                Department
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>IT</option>
                <option>Accounts</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Category(Unit Type)
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Zone</option>
                <option>Circle</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Sub Category(Unit)
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Division</option>
                <option>Feeder</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Complaint Type
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Electricity</option>
                <option>power cut</option>
              </select>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Mobile Number
              </label>
              <input
                placeholder="Enter Mobile Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                State
              </label>
              <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
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
                Pincode
              </label>
              <input
                type="text"
                placeholder="Enter Pincode"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Address
              </label>
              <textarea
                placeholder="Enter Address"
                rows={'4'}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Complaint Description
              </label>
              <textarea
                placeholder="Enter Complaint Description"
                rows={'4'}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              ></textarea>
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Attachment(image/video/document)
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                &nbsp;
              </label>
              <Button variant="gradient" className="capitalize" color="blue">
                Submit
              </Button>
              <Button
                variant="gradient"
                className="ms-2 capitalize"
                color="green"
              >
                Reset
              </Button>
            </div>
            <Popup
              title="Complain Details"
              status={showPopup}
              onStatusChange={(sts) => {
                setShowPopup(sts);
              }}
              actions={{
                title: 'View Complaints',
                title2: 'Print',
                link: '',
                link2: '',
                icon: '',
                icon2: '',
              }}
            >
              <div className="overflow-y-auto" style={{ maxHeight: 400 }}>
                <Alert
                  icon={<Icon />}
                  className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                >
                  Complaint Added
                </Alert>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td style={{ width: 180 }} className="p-2">
                          District
                        </td>
                        <td style={{ width: 400 }} className="p-2">
                          Agra
                        </td>
                        <td style={{ width: 180 }} className="p-2">
                          Department
                        </td>
                        <td className="p-2">IT</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-2">Category</td>
                        <td className="p-2">Zone</td>
                        <td className="p-2">Sub Category</td>
                        <td className="p-2">Central</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-2">Complaint Type</td>
                        <td className="p-2">Transformer Issue</td>
                        <td className="p-2">Address</td>
                        <td className="p-2">Hazratganj Lucknow</td>
                      </tr>

                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-2">Pincode</td>
                        <td className="p-2">226001</td>
                        <td className="p-2">Mobile</td>
                        <td className="p-2">9450087881</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-2">Name</td>
                        <td className="p-2">Rajan Yadav</td>
                        <td className="p-2">Email</td>
                        <td className="p-2">rajan@gmail.com</td>
                      </tr>
                      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-2">Complain Description</td>
                        <td className="p-2" colSpan={'3'}>
                          abc
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
export default NewComplaint;

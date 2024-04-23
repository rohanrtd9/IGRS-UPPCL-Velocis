import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Popup from '../../components/popup/popup';
import DefaultLayout from '../../layout/DefaultLayout';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';

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
              <button
                className="inline-flex items-center justify-center bg-primary py-1.5 rounded px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                onClick={() => setShowPopup(true)}
              >
                Submit
              </button>
              <button className="ms-2 inline-flex items-center justify-center bg-green-500 py-1.5 rounded px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Reset
              </button>
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
                icon: <ArticleIcon />,
                icon2: <LocalPrintshopIcon />,
              }}
            >
              <div className="overflow-y-auto" style={{ maxHeight: 400 }}>
                <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-1 shadow-md dark:bg-gray-200 dark:bg-opacity-30 md:p-5">
                  <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                        fill="white"
                        stroke="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                      Complaint Sent Successfully
                    </h5>
                    <p className="text-base leading-relaxed text-body">
                      Complaint No. 2149873
                    </p>
                  </div>
                </div>
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
                        <td className="p-2">abc</td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
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

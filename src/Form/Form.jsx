import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Form.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addStudent} from './duck/reducer'
import StudentList from './StudentList/StudentList';

export default function Form() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            studentId: '',
            fullName: '',
            phoneNumber: '',
            email: '',
        },
        validationSchema: Yup.object({
            studentId: Yup.string().required('Mã sinh viên không được để trống'),
            fullName: Yup.string().required('Họ và tên không được để trống'),
            phoneNumber: Yup.string().required('Số điện thoại không được để trống').matches(/^[0-9]{10}$/, 'Số điện thoại phải là 10 chữ số'),
            email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
        }),
        onSubmit: (values) => {
            dispatch(addStudent(values));
        }
    });

    const props = useSelector((state) =>{
        return state.studentReducer;
    });
    
  return (
    <div>
        <div className="p-8 bg-black text-center">
            <h1 className=''>Thông tin sinh viên</h1>
        </div>

        <form className="my-8" onSubmit={formik.handleSubmit}>
            <div className="mb-5 grid grid-cols-2 gap-12">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã sinh viên</label>
                    <input
                    name='studentId'
                    value={formik.values.studentId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    {formik.touched.studentId && formik.errors.studentId && (
                        <span className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                         {formik.errors.studentId}
                      </span>
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
                    <input type='text'
                    name='fullName' 
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {formik.touched.fullName && formik.errors.fullName && (
                        <span className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                         {formik.errors.fullName}
                      </span>
                    )}
                </div>
            </div>
            <div className="mb-5 grid grid-cols-2 gap-12">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                    <input type='number'
                    name='phoneNumber' 
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                        <span className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                         {formik.errors.phoneNumber}
                      </span>
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type='email' 
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {formik.touched.email && formik.errors.email && (
                        <span className="p-4 my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                         {formik.errors.email}
                      </span>
                    )}
                </div>
            </div>
        
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm/Cập nhật sinh viên</button>
        </form>
        {/* table */}
        {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Mã sinh viên
                </th>
                <th scope="col" className="px-6 py-3">
                Họ và tên
                </th>
                <th scope="col" className="px-6 py-3">
                Số điện thoại
                </th>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                Silver
                </td>
                <td className="px-6 py-4">
                Laptop
                </td>
                <td className="px-6 py-4">
                $2999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                White
                </td>
                <td className="px-6 py-4">
                Laptop PC
                </td>
                <td className="px-6 py-4">
                $1999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                Black
                </td>
                <td className="px-6 py-4">
                Accessories
                </td>
                <td className="px-6 py-4">
                $99
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                Gray
                </td>
                <td className="px-6 py-4">
                Phone
                </td>
                <td className="px-6 py-4">
                $799
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
                </th>
                <td className="px-6 py-4">
                Red
                </td>
                <td className="px-6 py-4">
                Wearables
                </td>
                <td className="px-6 py-4">
                $999
                </td>
                <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            </tbody>
        </table>
        </div> */}
        <StudentList />

    </div>
  )
}

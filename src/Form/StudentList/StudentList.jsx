import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { deleteStudent } from "../duck/reducer";

export default function StudentList() {
  const dispatch = useDispatch();
  const list = useSelector((state)=>{
    return state.studentReducer.listStudent;
  })

  const renderStudentList = () =>{
    return list.map((student)=>{
      return(
        <tr key={student.studentId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {student.studentId}
                </th>
                <td className="px-6 py-4">
                {student.fullName}
                </td>
                <td className="px-6 py-4">
                {student.phoneNumber}
                </td>
                <td className="px-6 py-4">
                {student.email}
                </td>
                <td className="px-6 py-4">
                <button type="button" 
                onClick={()=>{dispatch(deleteStudent({studentId: student.studentId}))}}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xoá</button>
                </td>
            </tr>
      )
    })
  }

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                Tuỳ chỉnh
                </th>
            </tr>
            </thead>
            <tbody>
            {renderStudentList()}
            </tbody>
        </table>
        </div>
    </>
  )
}

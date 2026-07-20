import { onGetItemEmployee, onDeleteItemEmployee } from "./slice";
import { useSelector, useDispatch } from "react-redux";

export default function ListEmployee(props) {
  const { onOpenEditModal, onOpenDeleteModal } = props;
  const disPatch = useDispatch();
  const { listArr, keyword } = useSelector(
    (state) => state.manageEmployeeSlice,
  );

  // Tìm kiếm theo HỌ TÊN trên mảng nếu keyword rỗng thì hiển thị toàn mảng
  const listEmployee = listArr.filter((item) =>
    item.name.toLowerCase().includes(keyword),
  );

  const renderListItemEmployee = () => {
    const result = listEmployee.map((item) => {
      return (
        <tr
          key={item.id}
          className="border-b dark:border-gray-700 hover:bg-cyan-800"
        >
          <th
            scope="row"
            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.id}
          </th>
          <td className="px-4 py-3">{item.name}</td>
          <td className="px-4 py-3">{item.phone}</td>
          <td className="px-4 py-3">{item.email}</td>
          <td className="px-4 py-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                onOpenEditModal();
                disPatch(onGetItemEmployee(item.id));
              }}
              className="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800"
            >
              Sửa
            </button>
            <button
              type="button"
              onClick={() => {
                onOpenDeleteModal();
                disPatch(onDeleteItemEmployee(item.id));
              }}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
    return result;
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Mã nhân viên
            </th>
            <th scope="col" className="px-4 py-3">
              Họ và tên
            </th>
            <th scope="col" className="px-4 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-4 py-3">
              Email
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>Actions
            </th>
          </tr>
        </thead>
        <tbody>{renderListItemEmployee()}</tbody>
      </table>
    </div>
  );
}

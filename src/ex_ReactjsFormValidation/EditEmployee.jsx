import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { onUpdateItemEmployee } from "./slice";

export default function EditEmployee(props) {
  const { open, onClose } = props;
  const [formData, setFormData] = useState({
    id: null,
    name: null,
    phone: null,
    email: null,
  });

  const [validEmployee, setValidEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const getItemEmployee = useSelector(
    (state) => state.manageEmployeeSlice.employee,
  );

  const disPatch = useDispatch();

  const onChangeFields = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onBlurValidFields = (e) => {
    const { name, value } = e.target;
    let nameRel = "";
    if (name === "id") {
      nameRel = "mã nhân viên";
    } else if (name === "name") {
      nameRel = "họ tên";
    } else if (name === "phone") {
      nameRel = "số điện thoại";
    } else if (name === "email") {
      nameRel = "email";
    }
    let message = "";
    if (value.trim() === "") {
      message = `Vui lòng nhập thông tin cho ${nameRel}`;
    }

    setValidEmployee((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const alertValidFields = (content) => {
    return (
      <div
        className="px-4 py-3 mt-2 text-sm text-fg-danger-strong rounded-base bg-danger-soft"
        role="alert"
      >
        {content}
      </div>
    );
  };

  const currentFormData = {
    id: formData.id ?? getItemEmployee?.id ?? "",
    name: formData.name ?? getItemEmployee?.name ?? "",
    phone: formData.phone ?? getItemEmployee?.phone ?? "",
    email: formData.email ?? getItemEmployee?.email ?? "",
  };

  const disable =
    !currentFormData.id ||
    !currentFormData.name ||
    !currentFormData.phone ||
    !currentFormData.email;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    disPatch(onUpdateItemEmployee(currentFormData));
  };

  return (
    <div
      id="editModal"
      tabIndex={-1}
      aria-hidden={!open}
      className={`${open ? "flex" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Chỉnh sửa nhân viên
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <form onSubmit={handleOnSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label
                  htmlFor="maNV"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mã nhân viên
                </label>
                <input
                  type="text"
                  name="id"
                  value={currentFormData.id}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, id: e.target.value }))
                  // }
                  onChange={onChangeFields}
                  onBlur={onBlurValidFields}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {validEmployee.id && alertValidFields(validEmployee.id)}
              </div>
              <div className="w-full">
                <label
                  htmlFor="hoTen"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Họ tên
                </label>
                <input
                  type="text"
                  name="name"
                  value={currentFormData.name}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, name: e.target.value }))
                  // }
                  onChange={onChangeFields}
                  onBlur={onBlurValidFields}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {validEmployee.name && alertValidFields(validEmployee.name)}
              </div>
              <div>
                <label
                  htmlFor="soDT"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số ĐT
                </label>
                <input
                  type="number"
                  name="phone"
                  value={currentFormData.phone}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  // }
                  onChange={onChangeFields}
                  onBlur={onBlurValidFields}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {validEmployee.phone && alertValidFields(validEmployee.phone)}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={currentFormData.email}
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, email: e.target.value }))
                  // }
                  onChange={onChangeFields}
                  onBlur={onBlurValidFields}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                {validEmployee.email && alertValidFields(validEmployee.email)}
              </div>
            </div>
            <button
              disabled={disable}
              type="submit"
              className="disabled:bg-gray-400 flex items-center justify-center mt-4 sm:mt-6 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              <svg
                aria-hidden="true"
                className="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Cập nhật thông tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

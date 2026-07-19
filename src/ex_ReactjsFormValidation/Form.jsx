import { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddItemEmployee, clearItemEmployee } from "./slice";

export default function Form() {
  const disPatch = useDispatch();
  const [employee, setEmployee] = useState({
    maNV: "",
    hoTen: "",
    soDT: "",
    email: "",
  });

  const [validEmployee, setValidEmployee] = useState({
    maNV: "",
    hoTen: "",
    soDT: "",
    email: "",
  });

  const onChangeFields = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const onBlurValidFields = (e) => {
    const { name, value } = e.target;
    let nameRel = "";
    if (name === "maNV") {
      nameRel = "mã nhân viên";
    } else if (name === "hoTen") {
      nameRel = "họ tên";
    } else if (name === "soDT") {
      nameRel = "số điện thoại";
    } else if (name === "email") {
      nameRel = "email";
    }
    let message = "";
    if (value.trim() === "") {
      message = `Vui lòng nhập thông tin cho ${nameRel}`;
    }

    setValidEmployee({
      ...validEmployee,
      [name]: message,
    });
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

  const disable =
    !employee.maNV || !employee.hoTen || !employee.soDT || !employee.email;

  const onAddEmployee = (e) => {
    e.preventDefault();
    disPatch(onAddItemEmployee(employee));
    disPatch(clearItemEmployee());
    setEmployee({
      maNV: "",
      hoTen: "",
      soDT: "",
      email: "",
    });
    setValidEmployee({
      maNV: "",
      hoTen: "",
      soDT: "",
      email: "",
    });
  };

  return (
    <section className="text-fg-brand-strong bg-white dark:bg-gray-800">
      <div className="max-w-2xl py-8 mx-auto lg:py-16">
        <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Thông tin nhân viên
        </h1>
        <form onSubmit={onAddEmployee}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="maNV"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã nhân viên
              </label>
              <input
                value={employee.maNV}
                onChange={onChangeFields}
                onBlur={onBlurValidFields}
                type="text"
                name="maNV"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {validEmployee.maNV && alertValidFields(validEmployee.maNV)}
            </div>
            <div className="w-full">
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Họ tên
              </label>
              <input
                value={employee.hoTen}
                onChange={onChangeFields}
                onBlur={onBlurValidFields}
                type="text"
                name="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {validEmployee.hoTen && alertValidFields(validEmployee.hoTen)}
            </div>
            <div>
              <label
                htmlFor="soDT"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số ĐT
              </label>
              <input
                value={employee.soDT}
                onChange={onChangeFields}
                onBlur={onBlurValidFields}
                type="number"
                name="soDT"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {validEmployee.soDT && alertValidFields(validEmployee.soDT)}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={employee.email}
                onChange={onChangeFields}
                onBlur={onBlurValidFields}
                type="email"
                name="email"
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
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm nhân viên
          </button>
        </form>
      </div>
    </section>
  );
}

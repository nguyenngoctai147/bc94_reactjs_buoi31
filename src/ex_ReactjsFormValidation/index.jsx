import { useState } from "react";
import Form from "./Form";
import ListEmployee from "./ListEmployee";
import EditEmployee from "./EditEmployee";
import DelEmployee from "./DelEmployee";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function ReactFormValidation() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <Form />
      <section className="bg-gray-50 dark:bg-gray-900 py-5 sm:py-16">
        <div className="mx-auto max-w-screen-xl lg:px-12">
          {/* Start coding here */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
            <Filter />
            <ListEmployee
              onOpenEditModal={() => setOpenModal("edit")}
              onOpenDeleteModal={() => setOpenModal("delete")}
            />
            <Pagination />
          </div>
        </div>
      </section>
      <EditEmployee
        open={openModal === "edit"}
        onClose={() => setOpenModal(null)}
      />
      <DelEmployee
        open={openModal === "delete"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
}

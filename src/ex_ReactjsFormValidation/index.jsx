import { useState } from "react";
import Form from "./Form";
import ListEmployee from "./ListEmployee";
import EditEmployee from "./EditEmployee";
import DelEmployee from "./DelEmployee";

export default function ReactFormValidation() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <Form />
      <ListEmployee
        onOpenEditModal={() => setOpenModal("edit")}
        onOpenDeleteModal={() => setOpenModal("delete")}
      />
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

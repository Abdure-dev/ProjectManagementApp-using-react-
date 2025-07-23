import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProjects({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredtitle = title.current.value;
    const entereddescpption = description.current.value;
    const enteredduedate = duedate.current.value;
    if (
      enteredtitle.trim() === "" ||
      entereddescpption.trim() === "" ||
      enteredduedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredtitle,
      description: entereddescpption,
      duedate: enteredduedate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-400 mb-4">
          opps...looks like you forgot to enter a value
        </p>
        <p className="text-stone-400 mb-4">
          plase make user ot provide a valid value for every input field
        </p>
      </Modal>
      <div className="w=[35rem]" mt-16>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={duedate} label="Due date" />
      </div>
    </>
  );
}

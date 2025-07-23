import Input from "./Input";
import { useRef } from "react";

export default function NewProjects({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredtitle = title.current.value;
    const entereddescpption = description.current.value;
    const enteredduedate = duedate.current.value;
    onAdd({
      title: enteredtitle,
      description: entereddescpption,
      duedate: enteredduedate,
    });
  }
  return (
    <div className="w=[35rem]" mt-16>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}

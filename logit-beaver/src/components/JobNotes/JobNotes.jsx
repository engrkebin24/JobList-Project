import { useState, useEffect } from "react";
import styles from "./JobNotes.module.css";

// Component to display a list of notes that can be edited
function EditableList({ job }) {
  // State to manage the list of Job Notes
  const [inputList, setInputList] = useState([]);

  // State to manage the value of the input field for new Job Notes
  const [inputVal, setInputVal] = useState("");

  // State to manage the index of the Job Note being edited
  const [editIndex, setEditIndex] = useState(null);

  // State to manage the value of the input field for editing Job Notes
  const [editVal, setEditVal] = useState("");

  // Effect to initialise the Job Notes list when the selected Job changes
  useEffect(() => {
    if (job && job.notes) {
      setInputList(job.notes);
    } else {
      setInputList([]);
    }
  }, [job]);

  // Function to add a new note to the list
  const addItem = () => {
    if (editIndex === null && inputVal.trim() !== "") {
      setInputList((prevInputList) => [...prevInputList, inputVal]);
      setInputVal(""); // Reset the input field
    }
  };

  // Function to enable edit mode for a specific Job Note
  const enableEdit = (index) => {
    setEditIndex(index);
    setEditVal(inputList[index]); // Set the value of the item being edited
  };

  // Function to submit the edited Job Note
  const submitEdit = () => {
    const updatedList = inputList.map((item, index) =>
      index === editIndex ? editVal : item
    );
    setInputList(updatedList);
    setEditIndex(null); // Exit edit mode
    setEditVal(""); // Reset the edit field
  };

  // Render the Job Notes list component
  return (
    <div>
      {/* List of job notes */}
      <div className={styles.jobNotesList}>
        <h3>Job Notes:</h3>
        <ul>
          {inputList.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <span className={styles.editJobNotesToSave}>
                  <textarea
                    type="text"
                    value={editVal}
                    onChange={(e) => setEditVal(e.target.value)}
                    className={styles.noteEditTextField}
                  />
                  <button
                    onClick={submitEdit}
                    className={styles.saveNoteButton}
                  >
                    {" "}
                    Save
                  </button>
                </span>
              ) : (
                <span className={styles.editJobNotes}>
                  {item}
                  <button
                    onClick={() => enableEdit(index)}
                    className={styles.editNoteButton}
                  >
                    Edit
                  </button>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Input field and button to add a new Job Note */}
      <div className={styles.newNoteInput}>
        <textarea
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className={styles.noteInputField}
          placeholder="Add a new Note here..."
        />

        <button
          onClick={addItem}
          disabled={inputVal.trim() === ""}
          className={styles.addNoteButton}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}

export default EditableList;

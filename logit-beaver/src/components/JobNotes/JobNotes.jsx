import { useState, useEffect } from "react";
import styles from "./JobNotes.module.css";

function EditableList({ job }) {
  const [inputList, setInputList] = useState([]); // List of items
  const [inputVal, setInputVal] = useState(""); // Value of input field
  const [editIndex, setEditIndex] = useState(null); // Index of the item being edited
  const [editVal, setEditVal] = useState(""); // Value for editing

  useEffect(() => {
    if (job && job.notes) {
      setInputList(job.notes);
    } else {
      setInputList([]);
    }
  }, [job]);

  // Add new item
  const addItem = () => {
    if (editIndex === null && inputVal.trim() !== "") {
      setInputList((prevInputList) => [...prevInputList, inputVal]);
      setInputVal(""); // Reset the input field
    }
  };

  // Enable edit mode
  const enableEdit = (index) => {
    setEditIndex(index);
    setEditVal(inputList[index]); // Set the value of the item being edited
  };

  // Submit the edited value
  const submitEdit = () => {
    const updatedList = inputList.map((item, index) =>
      index === editIndex ? editVal : item
    );
    setInputList(updatedList);
    setEditIndex(null); // Exit edit mode
    setEditVal(""); // Reset the edit field
  };

  // Render the component
  return (
    <div>
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
                  className={styles.saveNoteButton}> Save</button>
              </span>
            ) : (
              <span className={styles.editJobNotes}>
                {item}
                <button 
                onClick={() => enableEdit(index)}
                className={styles.editNoteButton}>Edit</button>
              </span>
            )}
          </li>
        ))}
      </ul>
      </div>
       

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
          className={styles.addNoteButton}>
          Add Note 
      </button>

      </div>
    

   
    </div>
  );
}

export default EditableList;
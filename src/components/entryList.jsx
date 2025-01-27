import '../styles/entryList.css';
import { useState } from 'react';

const EntryList = ({ items, onAddItem, onRemoveItem, onEditItem }) => {
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      onAddItem(newItem);
      setNewItem('');
    }
  };

  const handleEdit = (index, item) => {
    setEditIndex(index);
    setEditText(item);
  };

  const handleSaveEdit = (index) => {
    if (editText.trim()) {
      onEditItem(index, editText);
      setEditIndex(null);
      setEditText('');
    }
  };

  return (
    <div className="entryList">
      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    autoFocus
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div className="entry-actions">
                    <button onClick={() => handleSaveEdit(index)}>
                      &#10004;
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>{item}</p>
                  <div className="entry-actions">
                    <button onClick={() => handleEdit(index, item)}>
                      &#9998;
                    </button>
                    <button onClick={() => onRemoveItem(index)}>
                      &#128465;
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <div>
        <div className="add-item">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
          ></input>
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default EntryList;

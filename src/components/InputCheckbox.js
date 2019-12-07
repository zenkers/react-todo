import React from 'react';

const formatId = (name) => `input__${name}`;

function InputCheckbox(props) {
  const updateItem = (item) => {
    const updatedItem = item;
    updatedItem.checked = !updatedItem.checked;
    props.update(updatedItem);
  };

  return(
    <>
      <input
        id={formatId(props.item.slug)}
        type="checkbox"
        name={props.item.name}
        checked={props.item.checked}
        onChange={() => updateItem(props.item)}
      />
      <label
        htmlFor={formatId(props.item.slug)}>
        {props.item.name}
      </label>
    </>
  );
}

export default InputCheckbox;

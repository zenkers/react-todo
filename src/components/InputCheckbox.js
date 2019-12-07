import React, { useState } from 'react';

const formatId = (name) => `input__${name}`;

function InputCheckbox(props) {
  const [checked, setChecked] = useState(props.checked);

  return(
    <>
      <input
        id={formatId(props.slug)}
        type="checkbox"
        name={props.name}
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      />
      <label
        htmlFor={formatId(props.slug)}>
        {props.name}
      </label>
    </>
  );
}

export default InputCheckbox;

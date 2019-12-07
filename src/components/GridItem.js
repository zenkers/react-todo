import React from 'react';
import InputCheckbox from './InputCheckbox';

function GridItem(props) {
  return (
    <div className="grid-item">
      <InputCheckbox
        item={props.item}
        update={props.update} />
    </div>
  );
}

export default GridItem;

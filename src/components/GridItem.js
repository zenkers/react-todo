import React from 'react';
import InputCheckbox from './InputCheckbox';

function GridItem(props) {
  return (
    <div className="grid-item">
      <InputCheckbox
        name={props.item.name}
        slug={props.item.slug}
        checked={props.item.checked} />
    </div>
  );
}

export default GridItem;

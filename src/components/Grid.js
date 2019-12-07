import React, { useState } from 'react';
import GridItem from './GridItem';

const data = [{
  name: 'Test 1',
  slug: 'test-1',
  checked: false,
}, {
  name: 'Test 2',
  slug: 'test-2',
  checked: true,
}, {
  name: 'Test 3',
  slug: 'test-3',
  checked: false,
}];

function Grid() {
  const [items, setItems] = useState(data);
  const updateItem = (item) => {
    const index = items.findIndex(obj => obj.slug === item.slug);
    const updatedItemsArr = [...items];
    updatedItemsArr[index] = item;
    setItems(updatedItemsArr);
  };

  const itemsRendered = items.map((item) => <GridItem key={item.slug} item={item} update={updateItem} />);

  return (
    <div className="grid">
      <h1 className="grid-title">
        Todo:
      </h1>
      {itemsRendered}
    </div>
  );
}
export default Grid;

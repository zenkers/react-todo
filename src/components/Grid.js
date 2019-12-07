import React from 'react';
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
  const items = data.map(item => <GridItem key={item.slug} item={item} />);

  return (
    <div className="grid">
      <h1 className="grid-title">
        Todo:
      </h1>
      {items}
    </div>
  );
}
export default Grid;

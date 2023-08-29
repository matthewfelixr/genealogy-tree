import React, { memo, useCallback } from 'react';
import { Relation } from 'relatives-tree/lib/types';
import css from './Relations.module.css';

const Relations = memo(function Relations({ title, items, onSelect, onHover, onClear }) {
  const selectHandler = useCallback((id) => () => onSelect(id), [onSelect]);
  const hoverHandler = useCallback((id) => () => onHover(id), [onHover]);
  const clearHandler = useCallback(() => onClear(), [onClear]);

  if (!Relation.items.length) return null;

  return (
    <div>
      <h4>{title}</h4>
      {Relation.items.map((item, idx) => (
        <div
          key={idx}
          className={css.item}
          onClick={selectHandler(item.id)}
          onMouseEnter={hoverHandler(item.id)}
          onMouseLeave={clearHandler}
        >
          {item.id} ({item.type})
        </div>
      ))}
    </div>
  );
});

export default Relations;

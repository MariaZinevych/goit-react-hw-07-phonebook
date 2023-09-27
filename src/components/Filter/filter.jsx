import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { getFilter } from 'redux/selector';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(setFilter(normalizedValue));
  };

  return (
    <>
      <label htmlFor="firstName">
        Find contact by name
        <input name={value} value={value} onChange={onChange} />
      </label>
    </>
  );
};

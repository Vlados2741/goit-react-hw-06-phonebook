import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilter);
  const handleInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <div className="filter-input">
      <input type="text" value={filterName} onChange={handleInput} />
    </div>
  );
};

export default Filter;

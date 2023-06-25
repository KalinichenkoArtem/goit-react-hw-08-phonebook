import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterRedux } from 'redux/Slice';
import { getStatusFilter } from 'redux/Selector';

export const FindFilt = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getStatusFilter);

  return (
    <div className="filtr">
      <span>Find contacts by name</span>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={contact}
        type="text"
        onChange={e => dispatch(changeFilterRedux(e.target.value))}
      />
    </div>
  );
};

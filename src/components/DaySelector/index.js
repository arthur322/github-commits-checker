import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from 'store/ducks/commits';
import { Container } from './styled';

const DaySelector = () => {
  const selectedDay = useSelector(({ commits }) => commits.day);
  const dispatch = useDispatch();

  const handleDateChange = ({target}) => {
    dispatch(Creators.setSelectedDay(target.value));
  }

  return (
    <Container>
      Data selecionada: <input type='date' value={selectedDay} onChange={handleDateChange} />
    </Container>
  );
}

export default DaySelector;

import React, { useState, useEffect } from 'react';

import { Container } from './styled';

const DaySelector = () => {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const todayDate = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, 10);

  const [day, setDay] = useState(todayDate);

  return (
    <Container>
      Data selecionada: {day}
    </Container>
  );
}

export default DaySelector;

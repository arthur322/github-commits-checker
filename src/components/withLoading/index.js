import React, { useState, useEffect, useRef } from "react";

import { Container } from "./styled";

const Loading = () => {
  const [dots, setDots] = useState(1);
  const countRef = useRef(dots);
  countRef.current = dots;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDots(countRef.current <= 3 ? countRef.current + 1 : 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return <Container>Loading{".".repeat(dots)}</Container>;
};

export default Loading;

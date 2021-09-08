import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  grid-area: clock;
  display: flex;
  flex-direction: column;
`;

const ClockText = styled.span`
  font-size: 3.5vw;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
`;

const DateText = styled.span`
  font-size: 1.25vw;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
`;

const Clock = () => {
  const [date, setDate] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    date: "siema siema kurwa witam",
  });

  useEffect(() => {
    const padNumber = (number) => {
      return String(number).padStart(2, "0");
    };

    const updateDate = () => {
      const newDate = new Date();
      setDate({
        hours: padNumber(newDate.getHours()),
        minutes: padNumber(newDate.getMinutes()),
        seconds: padNumber(newDate.getSeconds()),
        date: new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
          newDate
        ),
      });
    };

    updateDate();
    const updater = setInterval(updateDate, 1000);
    return () => clearInterval(updater);
  }, []);

  return (
    <ClockContainer>
      <ClockText>{`${date.hours}:${date.minutes}:${date.seconds}`}</ClockText>
      <DateText>{date.date}</DateText>
    </ClockContainer>
  );
};

export default Clock;

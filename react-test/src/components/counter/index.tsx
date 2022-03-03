import React from "react";
import Card from "../card";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Card title="Counter" value={counter} color="#D72638" />;
};
export default Counter;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Counter = () => {
  const [count, updateCount] = useState(1);

  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="h2">
        {count}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          count > 0 && count < 100
            ? updateCount((prevCount) => prevCount + 1)
            : null
        }
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          count > 1 && count < 101
            ? updateCount((prevCount) => prevCount - 1)
            : null
        }
      >
        Decrement
      </Button>

      <Typography variant="h3">
        {count % 3 === 0 && "fizz"}
        {count % 5 === 0 && "buzz"}
      </Typography>
    </Container>
  );
};

export default Counter;

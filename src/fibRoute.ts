// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: any, res: any) => {
  const { num } = req.params;

  const fibN = fibonacci(Number(num));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};

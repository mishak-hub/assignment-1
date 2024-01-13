// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
export default (req: { params: { num: string } }, res: { send: (result: string) => void }) => {
    const { num } = req.params;

    const fibN = fibonacci(parseInt(num, 10));
    let result: string;

    if (fibN < 0) {
        result = `fibonacci(${num}) is undefined`;
    } else {
        result = `fibonacci(${num}) is ${fibN}`;
    }

    res.send(result);
};


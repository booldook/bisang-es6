const msg = '내부변수';
const sum = (...arg) => arg.reduce((prev, curr) => prev + curr, 0);
const multi = (...arg) => arg.reduce((prev, curr) => prev * curr, 1);

const calc = {sum, multi};

export {sum, multi};
export default calc;

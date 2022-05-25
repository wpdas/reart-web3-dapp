const bigNumberToNumber = (bigNumber: {
  _hex: string;
  _isBigNumber: boolean;
}) => parseInt(bigNumber._hex) / 10 ** 18;

export default bigNumberToNumber;

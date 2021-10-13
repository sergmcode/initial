export const checkInputIsANumber = (inputValue: string) => {
  const outputValue: number = parseInt(inputValue);
  if (isNaN(outputValue)) return 0;
  return outputValue;
};

export const getDifferenceOrNull = (a: number, b: number): number => {
  const expectedDifference = a - b;
  return expectedDifference > 0 ? expectedDifference : 0;
};

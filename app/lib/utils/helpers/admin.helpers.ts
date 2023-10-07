export const formatToArray = (text: string): string[] => {
  const array = text.split('**');
  const formattedArray = array.map(str => str.trim());
  return formattedArray;
};

export const formatToArray = (text: string | undefined): string[] => {
  if (!text) return [];
  const array = text.split('**');
  const formattedArray = array.map(str => str.trim());
  return formattedArray;
};

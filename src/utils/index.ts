export const truncateTitle = (title: string, length: number) => {
  if (title.length > length) {
    return title.substring(0, length) + "...";
  }
  return title;
};

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export default convertToSubcurrency;

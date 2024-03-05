export const trimText = (str: string, length: number | undefined) => {
  if (!length) return str;
  if (length <= 3) throw new Error("Trim length must not be less than 4");
  if (str.length <= length - 3) return str;
  return str.slice(0, length - 3).trim() + "...";
};

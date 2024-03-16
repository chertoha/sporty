export const trimText = (
  str: string | null | undefined,
  length: number | null | undefined = 10
) => {
  if (!str) return;
  if (!length || str.length <= length - 3 || length <= 3) return str;
  return str.slice(0, length - 3).trim() + "...";
};

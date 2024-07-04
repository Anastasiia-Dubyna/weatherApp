// export const calculateAverage = (arr, key) => {
//   return (arr.reduce((acc, item) => acc + item[key], 0) / arr.length).toFixed(
//     2
//   );
// };

export const calculateMax = (arr, key) => {
  if (arr.length === 0) return null;
  return arr.reduce(
    (max, item) => (item[key] > max ? item[key] : max),
    arr[0][key]
  );
};


// function that filters the data to make it unique
export const uniqBy = <Data>(arr: Data[], key: keyof Data): Data[] => {
  const tmp = new Set();
  return (arr?.filter((a: any) => !tmp.has(a[key]) && tmp.add(a[key])) ||
    []) as Data[];
};
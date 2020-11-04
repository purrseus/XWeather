/**
 * @format
 */

import { HourlyInterface } from 'api/interface';

interface Result {
  title: string;
  data?: HourlyInterface[];
}

// type CustomHook = (data: HourlyInterface[]) => Result[];

const useSectionHourlyList = (data: HourlyInterface[]) => {
  let newData = data.slice(3, 11);
  const result: Result[] = [{ title: 'Today' }, { title: 'Tomorrow' }];

  const convertData = Array.from(
    new Set(
      newData.map(element => {
        return element.dt_txt.slice(0, 11);
      })
    )
  );

  const filterSections = convertData.map(element => {
    return newData.filter(ele => {
      return ele.dt_txt.includes(element);
    });
  });

  result[0].data = filterSections[0];
  result[1].data = filterSections[1];

  return result;
};

export default useSectionHourlyList;

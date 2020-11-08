/**
 * @format
 */

import moment from 'moment';
import { HourlyInterface } from 'types/interface';

export interface Result {
  title: string;
  data: HourlyInterface[];
}

// type CustomHook = (data: HourlyInterface[]) => Result[];

const useSectionHourlyList = (data: HourlyInterface[] | null) => {
  if (data) {
    let newData: HourlyInterface[] = data.slice(2, 10);

    const convertToDate: string[] = Array.from(
      new Set(
        newData.map(element => {
          return element.dt_txt.slice(0, 10);
        })
      )
    );

    const result = convertToDate.map(
      (element: string): Result => {
        return {
          title:
            moment(element).date() === new Date().getDate()
              ? 'Today'
              : 'Tomorrow',
          data: newData.filter(ele => {
            return ele.dt_txt.includes(element);
          }),
        };
      }
    );

    return result;
  }
};

export default useSectionHourlyList;

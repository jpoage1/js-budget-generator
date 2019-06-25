import devsWeeklyRevenue from './devsWeeklyRevenue';
import sdrsWeeklyWages from './sdrsWeeklyWages';
import devsWeeklyWages from './devsWeeklyWages';
export default function managerWeeklyWages(devs, sdrs, productRate) {
    const difference = [devsWeeklyRevenue(devs, productRate), sdrsWeeklyWages(devs, productRate, sdrs), devsWeeklyWages(devs)];
    return difference.reduce( (acc, int) => acc-int );
};
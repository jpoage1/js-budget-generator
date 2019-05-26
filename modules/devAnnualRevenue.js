import devWeeklyRevenue from './devWeeklyRevenue';
import workWeeks from './workWeeks';
export default function devAnnualRevenue(dev, productRate) {
    return devWeeklyRevenue(dev, productRate)*workWeeks(dev);
};
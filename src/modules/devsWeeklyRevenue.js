import devWeeklyRevenue from './devWeeklyRevenue';
export default function devsWeeklyRevenue(devs, productRate) {
    return devs.map(dev => devWeeklyRevenue(dev, productRate)).reduce( (acc, num) => acc+num);
};
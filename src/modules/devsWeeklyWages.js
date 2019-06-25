import devWeeklyWages from './devWeeklyWages';
export default function devsWeeklyWages(devs, productRate) {
    return devs.map(dev => devWeeklyWages(dev, productRate)).reduce( (acc, num) => acc+num);;
};
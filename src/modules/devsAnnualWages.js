import devAnnualWages from './devAnnualWages';
export default function devsAnnualWages(devs) {
    return devs.map(dev => devAnnualWages(dev, rate)).reduce( (acc, num) => acc+num);
};
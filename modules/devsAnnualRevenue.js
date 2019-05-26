import devAnnualRevenue from './devAnnualRevenue';
export default function devsAnnualRevenue(devs, productRate) {
    return devs.map( dev => devAnnualRevenue(dev, productRate)).reduce( ( acc, num) => acc+num);
};
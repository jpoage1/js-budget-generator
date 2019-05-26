import neededDeals from './neededDeals';
export default function neededCoversions(revenue, averageDeal, conversionToDeal) {
    return neededDeals(revenue, averageDeal) / conversionToDeal;
};
import neededCoversions from './neededCoversions';
export default function neededLeads(revenue, averageDeal, conversionToDeal, leadToConversion ) {
    return neededCoversions(revenue, averageDeal, conversionToDeal) / leadToConversion;
};
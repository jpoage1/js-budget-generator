import devWeeklyEarnings from './devWeeklyEarnings';
export default function devWeeklyWages(dev) {
    return devWeeklyEarnings(dev, dev.rate);
};
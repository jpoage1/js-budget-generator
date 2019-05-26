import calcHours from './calcHours';
export default function devWeeklyEarnings(dev, rate = null, hours = false, config = {}, overtime = false) {
    const nHours = hours ? hours : dev.hours;
    const totalHours = calcHours(config, nHours, overtime);
    return totalHours*rate;
};
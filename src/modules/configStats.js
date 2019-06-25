import { developer, sdr, manager }  from '../data/labels';
import staffByRole from './staffByRole';
import devsAnnualRevenue from './devsAnnualRevenue';
import devsWeeklyRevenue from './devsWeeklyRevenue';
export default function configStats(config, staff) {
    const devs = staffByRole(staff, developer);
    const annualRevenue = devsAnnualRevenue(devs, config.productRate);
    const weeklyRevenue = devsWeeklyRevenue(devs, config.productRate);
    return {
        ...config,
        annualRevenue: annualRevenue,
        monthlyRevenue: annualRevenue/12,
        weeklyRevenue: weeklyRevenue,
        dailyRevenue: weeklyRevenue/5,
    }
};
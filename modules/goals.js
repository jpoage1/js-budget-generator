import { developer, sdr, manager }  from '../data/labels';

import staffByRole from './staffByRole';
import allConfigStats from './allConfigStats';

import deals from './deals';
import profit from './profit';
import costPerEmployee from './costPerEmployee';

const g = function(config, staff, x = null) {
    const { averageDeal,
        prospectToLead, leadToQualified, qualifiedToSale,
        annualRevenue } = config;
    const sdrCommission = .15;
    const y = {
        /*
            This is all wrong. we arent' going to say, 
            'we need this many deals to prospect ths many people'
            but rather
            'we need this many leads to get this many deals'

            Revenue goal should be calculated by figuring out how much it costs
            to be in business at the MINIMUM
        */
       ...config,
        prospects: _=> g(config, staff, 'leads') / prospectToLead,
        leads: _=> g(config, staff, 'conversions') / leadToQualified,
        conversions: _=> g(config, staff, 'deals') / qualifiedToSale,
        deals: _=> deals(annualRevenue, averageDeal),
        revenuePerDev: _=> {
            const noOfDevs = staffByRole(staff, developer).length;
            return annualRevenue / noOfDevs
        },
        costPerManager: _=> costPerEmployee(staff,manager),
        costPerDev: _=> costPerEmployee(staff, developer),
        costPerSDR: _=> annualRevenue * sdrCommission, // calculate average commission rate
        revenuePerSDR: _=> {
            const sdrs = staffByRole(staff, 'sdrs');
            return annualRevenue / sdrs.length;
        },
        profit: _=> {
            const noOfDevs = staffByRole(staff, developer).length;
            return profit(annualRevenue, [g(config, staff, 'costPerManager'),g(config, staff, 'costPerDev')*noOfDevs,g(config, staff, 'costPerSDR')])
        },
    };
    return x !== null ? y[x]() : y;
};
export default function goals(config, staff) {
    return allConfigStats(config, staff).map( config => function(config) {
        let goals = g(config, staff);
        Object.keys(goals).forEach( (name) => {
            goals[name] = typeof goals[name] === 'function' ? goals[name]() : goals[name];
        });
        return goals;
    }(config));
}
import employeeStats from './employeeStats';

import goals from './goals';


export default function stats(config, staff) {
    const companyGoals = goals(config, staff);
    return {
        // Calculates how much in total it costs to keep devs happy and busy
        companyGoals: companyGoals,
        // Goals for specific employees set based on information stored in staff variables
        employeeGoals: companyGoals.map( config => employeeStats(config, staff) ),
    };
}
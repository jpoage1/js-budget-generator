import { developer, sdr, manager }  from '../data/labels';
import hourlyWageHelper from './hourlyWageHelper';
import commissionHelper from './commissionHelper';
export default function wageHelper (config, role) {
    return {
        [manager]: (employee, revenue) => hourlyWageHelper(config, employee, revenue),
        [developer]: (employee, revenue)  => hourlyWageHelper(config, employee, revenue),
        [sdr]: (employee, revenue) => commissionHelper(employee, revenue),
    }[role];
}
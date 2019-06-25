import math from 'mathjs';
import workWeeks from './workWeeks'
export default function totalCost(staff) {
    return staff.map(staff => math.eval(staff.rate)*staff.hours*workWeeks(staff)).reduce((acc,num) => acc+num);
};
import workWeeks from './workWeeks'
export default function totalCost(staff) {
    return staff.map(staff => staff.rate*staff.hours*workWeeks(staff)).reduce((acc,num) => acc+num);
};
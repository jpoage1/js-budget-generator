import math from 'mathjs';
export default function hourlyWageHelper(config, employee, revenue) {
    return revenue / parseInt(config.productRate) * math.eval(employee.rate);
}
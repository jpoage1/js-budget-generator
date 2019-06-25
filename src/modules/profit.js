export default function profit(rev, exp) {
    const revenue = Array.isArray(rev) ? rev.reduce( (acc, num) => acc+num) : rev;
    const expenses = Array.isArray(exp) ? exp.reduce( (acc, num) => acc+num) : exp;
    return revenue - expenses
};
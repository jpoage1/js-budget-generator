export default function totalHours(staff) {
    return staff.map(staff => staff.hours).reduce( (acc, num) => parseInt(acc)+parseInt(num));
}
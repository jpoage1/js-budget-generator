export default function staffByRole(staff, role) {
    return staff.filter( employee => employee.role == role)
};
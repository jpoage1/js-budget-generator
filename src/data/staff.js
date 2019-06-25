import { developer, sdr, manager }  from './labels.js';
export const staff = [
    {
        id: 1,
        name: '',
        team: null,
        role: manager,
        vacation: 4, // In Weeks
        rate: 50, // Dollars Per Hour
        hours: 40,
    },
    {
        id: 2,
        name: '',
        team: 1, // Team number is the product manager's id
        role: developer,
        vacation: 4,
        rate: .6*150,
        hours: 40,
    },
    {
        id: 3,
        name: '',
        team: 1,
        role: developer,
        vacation: 4,
        rate: .6*150,
        hours: 40,
    },
    {
        id: 4,
        name: 'Jason',
        team: 1,
        role: sdr,
        vacation: 4,
        rate: .15,
        hours: 40,
    },
];
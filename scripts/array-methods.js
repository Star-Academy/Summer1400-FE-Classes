// users
logSeparator('users');

const users = [
    {
        firstName: 'Bijan',
        lastName: 'Eisapour',
        major: 'CE',
        job: 'Frontend Developer',
    },
    {
        firstName: 'Reza',
        lastName: 'Eisapour',
        major: 'CE',
        job: 'Software Engineer',
    },
    {
        firstName: 'Javad',
        lastName: 'Ezati',
        major: 'N/A',
        job: 'Actor',
    },
    {
        firstName: 'Shahab',
        lastName: 'Hosseini',
        major: 'N/A',
        job: 'Actor',
    },
];

// TODO: challenge - is there a better way?
console.table(users);

// numbers
logSeparator('numbers');

const numbers = [4, 8, 15, 16, 23, 42];
console.log(numbers);

// forEach
logSeparator('forEach');

const print = (x, i) => {
    console.log(`${i}: ${x}`);
};

numbers.forEach(print);

// filter
logSeparator('filter');

const largeNumbers = numbers.filter((x) => x > 20);
console.log('largeNumbers', largeNumbers);

// map
logSeparator('map');

// const diagrams = numbers.map((x) => '='.repeat(x));
// diagrams.forEach((d) => console.log(d));

numbers.map((x) => '='.repeat(x)).forEach((d) => console.log(d));

const reports = users.map((u) => {
    if (u.major === 'N/A') {
        return `${u.firstName} ${u.lastName} currently is a/an ${u.job}.`;
    } else {
        return `${u.firstName} ${u.lastName} has studied ${u.major} and currently is a/an ${u.job}.`;
    }
});

reports.forEach((r) => console.log(r));
// reports.forEach(console.log);

// reduce
logSeparator('reduce');

const result = numbers.reduce((sum, x) => {
    return sum + x;
});

console.log(result);

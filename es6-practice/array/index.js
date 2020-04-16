const userInfoList = [
    {
        name: 'Uncle Bobby',
        point: 500
    },
    {
        name: 'Suzie Q',
        point: 1500
    },
    {
        name: 'Jimmy Gosling',
        point: 150
    },
    {
        name: 'Gracie Hopper',
        point: 700
    },
    {
        name: 'Linus Benedict Torvalds',
        point: 1800
    },
    {
        name: 'Martin Fowler',
        point: 2000
    }
];

let totalPoint = 0;

for(let i=0; i<userInfoList.length; i++){
    totalPoint += userInfoList[i].point; 
}

console.log(totalPoint);

const sumOfPoint = userInfoList.map(i => i.point).reduce((prev, next) => prev + next);

console.log(sumOfPoint);

const name = userInfoList.find(u => u.name === "Jimmy Gosling");

console.log(name);

const filter = userInfoList.filter(u => u.point > 1000);

console.log(filter);

const index = userInfoList.findIndex(u => u.name === "Jimmy Gosling");

console.log(index);
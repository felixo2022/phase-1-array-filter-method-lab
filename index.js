// Code your solution here

const drivers = ['Bobby' , 'Sammy' , 'Sally' , 'Annette' , 'Sarah' , 'Bobby']

function findMatching(drivers, name) {
    let driver = drivers.filter(drive =>drive.toLowerCase() === name.toLowerCase());

    return driver


}
 function fuzzyMatch(drivers, name) {
    let driver = drivers.filter(drive => drive.indexOf(name) === 0)
    return driver;
 }



 function matchName(drivers, name) {
    let driver = drivers.filter(drive => drive.name ===name)
    return driver
}
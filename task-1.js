//Problem 1 - Get Day Name

function getDayName(dayNumber) {
    const dayName = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
    return dayName[dayNumber - 1]
}
console.log(getDayName(1));


//Problem 2 — Get Fruit Name

function getFruitName(fruitNumber) {
    const fruitName = [
        "Apple",
        "Banana",
        "Mango",
        "Orange",
        "Grapes"
    ];
    return fruitName[fruitNumber - 1]
}
console.log(getFruitName(2));

//Problem 3 — Get Month Short Name

function getMonthName(monthNum) {
    const monthName = [
        " Jan",
        "Feb",
        "Mar",
        "Apr",
        " May",
        "Jun",
        " Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    return monthName[monthNum - 1];
}
console.log(getMonthName(8))


//Problem 4 — Get Grade

function getGradeNumber(gradeNumber) {
    const gradeName = ["A", "B", "C", "D", "F"];
    return gradeName[gradeNumber - 1];
}
console.log(getGradeNumber(3))

//Problem 5 — Get Menu Item

function getMenuItem(menuNumber) {
    const item = [
        "Burger",
        "Pizza",
        "Pasta",
        "Sandwich",
        "Salad",
        "Fried Chicken"
    ]
    return item[menuNumber - 1];
}
console.log(getMenuItem(5))

//Problem-6 : Get Season Name problem

function getSeasonName(monthNumber) {

    if (monthNumber >= 1 && monthNumber <= 3) {
        return "Winter"
    }
    else if (monthNumber >= 4 && monthNumber <= 6) {
        return "Spring"
    }
    else if (monthNumber >= 7 && monthNumber <= 9) {
        return "Summer"
    }
    else {
        return "Autumn"
    }

}
console.log(getSeasonName(3))
console.log(getSeasonName(5))
console.log(getSeasonName(8))
console.log(getSeasonName(12))
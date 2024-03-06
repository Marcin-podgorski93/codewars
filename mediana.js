// Zadanie
// Wyznacz medianę wydatków do pierwszej niedzieli (włącznie) każdego miesiąca (np. dla 2023-09 i 2023-10 są to dni 1, 2, 3 wrz i 1 paź).

// expenses = {
//     "2023-01": {
//         "01": {
//             "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
//             "fuel": [ 210.22 ]
//         },
//         "09": {
//             "food": [ 11.9 ],
//             "fuel": [ 190.22 ]
//         }
//     },
//     "2023-03": {
//         "07": {
//             "food": [ 20, 11.9, 30.20, 11.9 ]
//         },
//         "04": {
//             "food": [ 10.20, 11.50, 2.5 ],
//             "fuel": []
//         }
//     },
//     "2023-04": {}
// }

// Należy zastosować rozwiązanie zgodnie z poniższym pseudokodem.

// func get_median_of_first_week_expenses(expenses) {
//     result = null
//     // ...
//     return result
// }
// print(get_median_of_first_week_expenses(expenses))

// Uwagi
// Należy użyć tylko funkcji/modułów ze standardowej biblioteki (np. math).
// Po przesłaniu poprawnego wyniku:
// przesłany plik jest finalnym rozwiązaniem
// uruchomione zostaną testy automatyczne (na różnych danych) badające zużycie pamięci i procesora
// Zadanie może zostać wykonane w języku Python lub JavaScript.
// Wynik to jedna liczba dla wszystkich danych spełniających kryteria.


function get_median_of_first_week_expenses(expenses) {
    let totalExpenses = [];

    function calculateMedian(expenses) {
        let median;
        let length = expenses.length;
        if (length > 0) {
            expenses.sort((a, b) => a - b);
            if (length % 2 === 0) {
                median = (expenses[length / 2 - 1] + expenses[length / 2]) / 2;
            } else {
                median = expenses[Math.floor(length / 2)];
            }
        } else {
            median = null;
        }
        return median;
    }

    function getFirstWeekDays(expenses) {
        let firstWeekDays = {};

        for (let yearMonth in expenses) {
            let [year, month] = yearMonth.split('-').map(Number);
            let firstDayOfMonth = new Date(year, month - 1, 1);
            let firstSundayOfMonth = 7 - firstDayOfMonth.getDay() + 1;

            if (firstSundayOfMonth <= 7 || firstDayOfMonth.getDay() === 0) {
                firstWeekDays[yearMonth] = Array.from({ length: Math.min(firstSundayOfMonth, 7) }, (_, i) => i + 1);
                console.log(firstSundayOfMonth);
            } else {
                firstWeekDays[yearMonth] = [];
            }
        }

        return firstWeekDays;
    }

    let firstWeekDays = getFirstWeekDays(expenses);

    console.log("Dni brane pod uwagę do obliczenia mediany:");

    for (let yearMonth in expenses) {
        for (let day in expenses[yearMonth]) {
            if (firstWeekDays[yearMonth].includes(Number(day))) {
                console.log(`${yearMonth}-${day}:`);
                for (let category in expenses[yearMonth][day]) {
                    console.log(`  Kategoria: ${category}`);
                    console.log(`  Wartości: ${expenses[yearMonth][day][category]}`);
                    totalExpenses.push(...expenses[yearMonth][day][category]);
                }
            }
        }
    }

    console.log("Wszystkie wydatki brane pod uwagę:");
    console.log(totalExpenses);

    let median = calculateMedian(totalExpenses);
    console.log("Mediana wydatków do pierwszej niedzieli (włącznie) każdego miesiąca:");
    console.log(median);

    return median;
}

let expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

console.log(get_median_of_first_week_expenses(expenses));

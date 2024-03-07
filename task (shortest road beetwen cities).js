// Lista danych z miastami i czasami podróży
const listaMiast = [
    "Białystok Olsztyn 210",
    "Białystok Warszawa 132",
    "Białystok Lublin 226",
    "Białystok Bydgoszcz 306",
    "Białystok Gdańsk 289",
    "Białystok Łódź 209",
    "Białystok Poznań 306",
    "Białystok Szczecin 448",
    "Białystok Gorzów 391",
    "Białystok Wrocław 333",
    "Białystok Opole 343",
    "Białystok Katowice 309",
    "Białystok Kielce 247",
    "Białystok Kraków 327",
    "Białystok Rzeszów 320",
    "Olsztyn Warszawa 161",
    "Olsztyn Lublin 263",
    "Olsztyn Bydgoszcz 187",
    "Olsztyn Gdańsk 114",
    "Olsztyn Łódź 211",
    "Olsztyn Poznań 268",
    "Olsztyn Szczecin 367",
    "Olsztyn Gorzów 353",
    "Olsztyn Wrocław 335",
    "Olsztyn Opole 350",
    "Olsztyn Katowice 316",
    "Olsztyn Kielce 273",
    "Olsztyn Kraków 353",
    "Olsztyn Rzeszów 355",
    "Warszawa Lublin 118",
    "Warszawa Bydgoszcz 200",
    "Warszawa Gdańsk 229",
    "Warszawa Łódź 104",
    "Warszawa Poznań 198",
    "Warszawa Szczecin 340",
    "Warszawa Gorzów 283",
    "Warszawa Wrocław 225",
    "Warszawa Opole 228",
    "Warszawa Katowice 193",
    "Warszawa Kielce 128",
    "Warszawa Kraków 209",
    "Warszawa Rzeszów 207",
    "Lublin Bydgoszcz 286",
    "Lublin Gdańsk 341",
    "Lublin Łódź 189",
    "Lublin Poznań 287",
    "Lublin Szczecin 429",
    "Lublin Gorzów 372",
    "Lublin Wrocław 314",
    "Lublin Opole 319",
    "Lublin Katowice 248",
    "Lublin Kielce 148",
    "Lublin Kraków 211",
    "Lublin Rzeszów 114",
    "Bydgoszcz Gdańsk 116",
    "Bydgoszcz Łódź 155",
    "Bydgoszcz Poznań 97",
    "Bydgoszcz Szczecin 219",
    "Bydgoszcz Gorzów 183",
    "Bydgoszcz Wrocław 197",
    "Bydgoszcz Opole 254",
    "Bydgoszcz Katowice 258",
    "Bydgoszcz Kielce 262",
    "Bydgoszcz Kraków 312",
    "Bydgoszcz Rzeszów 380",
    "Gdańsk Łódź 206",
    "Gdańsk Poznań 197",
    "Gdańsk Szczecin 262",
    "Gdańsk Gorzów 281",
    "Gdańsk Wrocław 295",
    "Gdańsk Opole 345",
    "Gdańsk Katowice 311",
    "Gdańsk Kielce 314",
    "Gdańsk Kraków 365",
    "Gdańsk Rzeszów 422",
    "Łódź Poznań 143",
    "Łódź Szczecin 282",
    "Łódź Gorzów 226",
    "Łódź Wrocław 145",
    "Łódź Opole 167",
    "Łódź Katowice 137",
    "Łódź Kielce 139",
    "Łódź Kraków 193",
    "Łódź Rzeszów 274",
    "Poznań Szczecin 168",
    "Poznań Gorzów 109",
    "Poznań Wrocław 127",
    "Poznań Opole 182",
    "Poznań Katowice 232",
    "Poznań Kielce 260",
    "Poznań Kraków 286",
    "Poznań Rzeszów 368",
    "Szczecin Gorzów 73",
    "Szczecin Wrocław 247",
    "Szczecin Opole 289",
    "Szczecin Katowice 337",
    "Szczecin Kielce 402",
    "Szczecin Kraków 391",
    "Szczecin Rzeszów 473",
    "Gorzów Wrocław 187",
    "Gorzów Opole 229",
    "Gorzów Katowice 278",
    "Gorzów Kielce 342",
    "Gorzów Kraków 332",
    "Gorzów Rzeszów 414",
    "Wrocław Opole 81",
    "Wrocław Katowice 129",
    "Wrocław Kielce 252",
    "Wrocław Kraków 183",
    "Wrocław Rzeszów 265",
    "Opole Katowice 83",
    "Opole Kielce 210",
    "Opole Kraków 138",
    "Opole Rzeszów 220",
    "Katowice Kielce 132",
    "Katowice Kraków 67",
    "Katowice Rzeszów 148",
    "Kielce Kraków 100",
    "Kielce Rzeszów 145",
    "Kraków Rzeszów 112"
];

// Implementacja algorytmu najbliższego sąsiada
function znajdzNajkrotszaTrase(listaMiast) {
    // Funkcja do obliczenia odległości między dwoma miastami
    function obliczOdleglosc(miasto1, miasto2) {
        const trasa = listaMiast.find(dane => {
            const [miastoA, miastoB] = dane.split(" ").slice(0, 2);
            return (miastoA === miasto1 && miastoB === miasto2) || (miastoA === miasto2 && miastoB === miasto1);
        });
        if (!trasa) {
            console.log("Nie znaleziono trasy między", miasto1, "i", miasto2); // Dodaj debugger
            debugger; // Punkt zatrzymania (debugger)
        }
        if (trasa) {
            return parseFloat(trasa.split(" ")[2]); // Zwraca czas jako liczbę zmiennoprzecinkową
        } else {
            return Infinity; // Zwraca nieskończoność, jeśli trasy nie ma w danych
        }
    }

    // Wybierz miasto początkowe
    let aktualneMiasto = "Warszawa";
    let trasa = [aktualneMiasto];
    let czasPodrozy = 0;

    // Iteracyjne wybieranie najbliższego miasta i aktualizacja trasy
    while (trasa.length < listaMiast.length + 1) {
        let najkrotszaOdleglosc = Infinity;
        let najblizszeMiasto;

        // Szukaj najbliższego miasta
        listaMiast.forEach(dane => {
            const [miastoA, miastoB] = dane.split(" ").slice(0, 2);
            if (aktualneMiasto && miastoA && miastoB && miastoA === aktualneMiasto && !trasa.includes(miastoB)) {
                const odleglosc = obliczOdleglosc(miastoA, miastoB);
                if (odleglosc < najkrotszaOdleglosc) {
                    najkrotszaOdleglosc = odleglosc;
                    najblizszeMiasto = miastoB;
                }
            } else if (aktualneMiasto && miastoA && miastoB && miastoB === aktualneMiasto && !trasa.includes(miastoA)) {
                const odleglosc = obliczOdleglosc(miastoA, miastoB);
                if (odleglosc < najkrotszaOdleglosc) {
                    najkrotszaOdleglosc = odleglosc;
                    najblizszeMiasto = miastoA;
                }
            }
        });

        // Dodaj najbliższe miasto do trasy
        trasa.push(najblizszeMiasto);
        czasPodrozy += najkrotszaOdleglosc;
        aktualneMiasto = najblizszeMiasto;
    }

    // Dodaj powrót do miasta początkowego
    czasPodrozy += obliczOdleglosc(aktualneMiasto, "Warszawa");
    console.log(czasPodrozy)
    return czasPodrozy;
}

// Obliczenie i wyświetlenie czasu najkrótszej trasy
const czasTrasy = znajdzNajkrotszaTrase(listaMiast);
console.log("Czas najkrótszej trasy:", czasTrasy, "minut");

console.log(czasTrasy)

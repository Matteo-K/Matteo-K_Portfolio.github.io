/* Api Github */

const projects = [
    { name: "flashcard", full_name: "Matteo-K/flashcard" },
    { name: "Matteo-K_Portfolio.github.io", full_name: "Matteo-K/Matteo-K_Portfolio.github.io" },
    { name: "S2.02", full_name: "Matteo-K/S2.02" },
    { name: "Sudoku-Solver", full_name: "Matteo-K/Sudoku-Solver" },
];

// https://api.github.com/users/Matteo-K/repos

/* Prend le nom de tout les répertoires */

for (let index = 0; index < projects.length; index++) {
    fetch("https://raw.githubusercontent.com/"+ projects[index]["full_name"]+"/main/Portfolio.json")
    .then(response => {
        if (response.ok) {
            response.json().then(file => {
                // Affiche le contenu du fichier JSON
                console.log(file);
            });
        } else {
            console.log("fichier Portfolio.json non trouvé dans le répertoire "+ projects[index]["full_name"]);
        }
          
    });
         
};
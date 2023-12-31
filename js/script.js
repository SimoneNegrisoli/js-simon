/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Bonus :100: :
Realizzare l'esercizio con grafica e senza utilizzo di prompt ma con casella/e  di input*/



/*
Logica e passi che passaggi che voglio applicare:
- faccio un div dove visualizzo i numeri, -> done
- un btn sotto che clicco e mi fa visualizzare i numeri per 30 sec, li deco salvare in array e stamparli in cosole per 30 sec
- quando i numeri spariscono il btn non è piu cliccabile, 
- ma si sblocca la possibilità di scrivere i numeri dentro una casella di input (devo verificare che non siano attaccati). 
- dopodichè invio i numei scritti con unaltro bottone (quindi altro event listner) 
- quindi devo prendermi il valore di questa casella di input li metto dentro un nuovo array, 
- questo array lo devo confrontare (con includes) con i numeri che erano stati generarti randomicamente nel primo array.
- fare la condizione che se non ne ho trovato neanche uno ho perso, se ne ho trovato qualcuno stampo il numero, se li ho trovati tutti stampo che ho vinto 
*/

"use strict";

simonSay();

// Main function
function simonSay() {

    // tutte le variabili che possono servirmi
    const minN = 1
    const maxN = 100
    const numeriDaGenerare = 5;
    const numeriGenerati = [];  //i numeri random generati li pusho qui dentro
    let gameOver;  // la faccio partire quando il giocatore vince o perde con il risultato
    const numeriUtente = [];  //qui pusho il value che prendo dalla casella di input 
    const numeriIndovinati = [];  // qui confronto i numeruUtente con questi

    // questo lo faccio vedere dopo 30 secondi
    const checkResult = document.querySelector('.check-result')
    checkResult.classList.add('d-none')

    // lo faccio vedere come risultato finale quando stampo il messaggio
    const endGame = document.getElementById('risultato')
    endGame.classList.add('d-none')

    // bottone per far partire il gioco 
    const btnStart = document.getElementById('btn-start')
    btnStart.addEventListener('click', play);

    // qui parte il gioco 
    function play() {

        gameOver = false;

        // qui faccio il ciclo per trovare il n rnd e pusharlo nell'array
        while (numeriGenerati.length < numeriDaGenerare) {
            let numberToRember = getRndInteg(minN, maxN);
            if (!numeriGenerati.includes(numberToRember)) {
                numeriGenerati.push(numberToRember);
            }
            document.getElementById('numeri-random').innerHTML = numeriGenerati;
        }

        // adesso faccio una funzione e mi stampo dentro i numeri rnd, faccio una funzione perche cosi poi possi richiamarla con il set timeout

        function remuveRndNumber (){
            document.getElementById('numeri-random').innerHTML = ''
        }
        setTimeout (remuveRndNumber, 3000)











    }





}


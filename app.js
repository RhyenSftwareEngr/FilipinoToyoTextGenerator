const input = document.getElementById('password-input');
const button = document.querySelector('.btn');
const copyBtn = document.getElementById('copy_to_clipboard');
console.log(copyBtn);
button.addEventListener('click', () => {
    // console.log(generateRandNum(collection.length));
    const randNum = generateRandNum(collection.length);
    console.log(randNum);

    document.getElementById('para').innerHTML = collection[randNum];
});
console.log('HII');
console.log(button);

// Array data
let collection = ['DUN KA NALANG SA KANYAππππ WALA NAMAN NAKONG PAKEπππ', 'SORRY NAMAN NO?π NAKAKAISTORBO ATA AKO SA IYOπ', 'BAHALA KA NA SA BUHAY MOπππππ', 'HAHAHA AKO LANG TOπ!. DI NAMAN AKO MAHALAGA SA IYO EHππππ', 'πππππππππ', 'HUWAG MO AKO KAUSAPINπ! KAUSAPIN MO YUNG BESPREN MO!!!!', 'HUWAG MO AKO KAUSAPINππ! KAUSAPIN MO NALANG MGA BARKADA MOππππ', 'SO WALA KANG BALAK KAUSAPIN AKOπ? SIGE, DYAN KA NA SA ML MOπ! KAININ MO YANG GUSION MOππππ', 'SO WALA KANG BALAK KAUSAPIN AKOππ SGE DUN KA NA SA KADUO MOπ', 'SO WALA KANG BALAK KAUSAPIN AKOπ? SIGE, DYAN KA NA SA ML MOπ! KAININ MO YANG SELPON MOππππ', 'DUN KA NALANG SA BESPREN MOOOOπππ MAGSAMA KAYOOOOOOOOπ', 'WAGGGGG MO AKONG IISTORBOHINπππ', 'SINO SI BABY?π DIBA CALLSIGN NYO YUN NG DATI MOπ? MISS MO NA BA? OH EDI KAYO NALANG ULITπ MAGSAMA NALANG KAYO NI BABY MOππ', 'AH! SO MOMMY DADDY PALA ANG TAWAGAN NIYO NG EX MOπ? TAPOS BABY ANG TAWAG MO SA AKIN? ANO AKO? ANAK NIYO? DOON KA NA SA MOMMY MOππ', 'AH SO MAHAL MO PARIN PALA EX MO???πππ WHAT IF BUMALIK KA NALANG SA KANYA?ππ'];

function generateRandNum(num) {
    return Math.floor(Math.random() * num);
}

document.addEventListener('DOMContentLoaded', function() {

    copyBtn.addEventListener('click', function() {
        navigator.clipboard
            .writeText(document.getElementById('para').innerText)
            .then(
                success => alert("Text Copied: PWEDE MO NA ULIT AWAYIN JOWA MOπ"), err => console.log("error copying text")
            );
    });
});
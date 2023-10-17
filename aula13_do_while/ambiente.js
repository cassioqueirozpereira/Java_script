var i = 0;

while (i < 10) {
    console.log(`Passo ${i+1}`);
    i++;
}

var cont = 0;

do {
    if (cont == 0)
        console.log("\n");
    console.log(`\tteste ${cont+1}`);
    cont++;
} while (cont < 10);
// Connexion d'un écouteur d'événement au bouton de calcul


document.addEventListener('DOMContentLoaded', () => {
document.getElementById("soumettre").addEventListener("click",calculer);

})

function calculer() {
    var monOperat;
    var valeurRenvoi;
    
    // Extraction des opérandes
    const vOp1 =  $('#operande1')[0];
    const vOp2 = $('#operande2')[0];

    // Extraction des types des opérandes
    var select1 = document.getElementById("operande1-type");
    var select2 = document.getElementById("operande2-type");
  
    var typeOp1 = select1.value;
    var typeOp2 = select2.value;
    
    // Extraction de l'opérateur
    var radios = document.getElementsByName('operateur');

    let res1;
    let res2;
    
    // Conversion des opérandes
    switch (typeOp1) {
        case "string":
            res1 = String(vOp1.value);
            break;
        case "number":
            res1 = Number(vOp1.value);
            break;
    }
    
    switch (typeOp2) {
        case "string":
            res2 = String(vOp2.value);
            break;
        case "number":
            res2 = Number(vOp2.value);
            break;
    }
    // loop through each possible operand value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {
 
        if (radios[i].checked) {
            monOperat = radios[i].value;
            
        //do a different operation depending on which operator was selected
            switch (radios[i].value) {
                case "+":
                    valeurRenvoi = res1 + res2;
                    break;
                case "-":
                    valeurRenvoi = res1 - res2;
                    break;
                case "*":
                    valeurRenvoi = res1 * res2;
                    break;
                case "/":
                    valeurRenvoi = res1 * res2;
                    break;
                case "%":
                    valeurRenvoi = res1 % res2;
                    break;
                case "concat":
                    valeurRenvoi = res1 + res2;
                    monOperat = "+";
                    break;
                case "==":
                    valeurRenvoi = res1 == res2;
                    break;
                case "===":
                    valeurRenvoi = res1 === res2;
                    break;
                case "!=":
                    valeurRenvoi = res1 != res2;
                    break;
                case "!==":
                    valeurRenvoi = res1 !== res2;
                    break;
                case ">":
                    valeurRenvoi = res1 > res2;
                    break;
                case ">=":
                    valeurRenvoi = res1 >= res2;
                    break;
                case "<":
                    valeurRenvoi = res1 < res2;
                    break;
                case "<=":
                    valeurRenvoi = res1 <= res2;
                    break;
            }

            break;
        }
    }

    // Affichage de l'expression
    
    if (typeof(res1)==="string"){
        res1 = `"${res1}"`;
    }
    if (typeof(res2)==="string"){
        res2 = '"' + res2 + '"';
    }
    document.getElementById("final-operation").innerHTML = res1 + monOperat + res2;
    
    // Affichage du résultat
    document.getElementById("resultat").innerHTML = valeurRenvoi;
};
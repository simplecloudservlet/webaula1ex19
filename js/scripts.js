
function listarDecimais (){
    let valor = 0.1;
    console.log('Float binário: ' + valor.toPrecision(21));
    
    let d1 = new Decimal(valor);
    console.log('Float decimal: ' + d1.toPrecision(21));
}

function somarDecimais (){
    //Recebe texto
    let v1 = document.getElementById('valor1').value;
    let v2 = document.getElementById('valor2').value;
    console.log(v1);
    console.log(v2);

    //Cria decimal 
    let d1 = new Decimal(v1).toNumber();
    let d2 = new Decimal(v2).toNumber();
    let d3 = new Decimal(d1 + d2);

    console.log('Soma decimais: ' + d3.toPrecision(21));

}

function somar (){
    let v1 = document.getElementById('valor1').value;
    let v2 = document.getElementById('valor2').value;

    console.log(v1);
    console.log(v2);
    console.log(parseInt(v1) + parseInt(v2));
}
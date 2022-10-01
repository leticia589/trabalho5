let titular = "titular"
let numero = "numero"
let tipo = "tipo"
let saldo = "saldo"
let clientes ="clientes"
const dados = [
    {
        "titular": "Abigael Natte",
        "numero": 5486273622,
        "tipo": "Conta Corrente",
        "saldo": 27771
    },
    {
        "titular": "Ramon Connell",
        "numero": 1183971869,
        "tipo": "Conta Corrente",
        "saldo":5789
    },
    {
        "titular": "Fulano",
        "numero": 1183971869,
        "tipo": "Conta Corrente",
        "saldo": 8675
    },
    {
        "titular": "Jarret Lafuente",
        "numero": 9582019689,
        "tipo": "Conta Poupança",
        "saldo": 27363
    },
    {
        "titular": "Ansel Ardley",
        "numero": 1761924656,
        "tipo": "Conta Poupança",
        "saldo": 32415
    },
    {
        "titular": "Jacki Shurmer",
        "numero": 7401971607,
        "tipo": "Conta Poupanca",
        "saldo": 18789
    },
    {
        "titular": "Jobi MAwtus",
        "numero": 63081470,
        "tipo": "Conta Corrente",
        "saldo": 28776
    },
    {
        "titular": "Thomasin Latour",
        "numero": 4223508636,
        "tipo": "Conta Corrente",
        "saldo": 2177
    },
    {
        "titular": "Lonnier Verheijden",
        "numero": 185979521,
        "tipo": "Conta Poupanca",
        "saldo": 25994
    },
    {
        "titular": "Alonso Wannan",
        "numero": 3151956165,
        "tipo": "Conta Corrente",
        "saldo": 7601
    },
    {
        "titular": "Bendite Huggett",
        "numero": 2138105881,
        "tipo": "Conta Poupança",
        "saldo": 33196
    }
]

function conta(titular,numero,tipo,saldo) {
    this.titular = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}
//let conta1 = new conta(dados[0].titular, ados[0].numero, dados[0].tipo, dados[0].saldo);
//let conta2 = new conta(dados[1].titular, dados[1].numero, dados[1].tipo, dados[1].saldo);
let listaContas =[];
for (let contador =0; contador < dados.length; contador++){
    listaContas.push(new conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}
const listaClientes =  require('./clientes')


console.log(listaClientes);

return result/listaContas.length;





console.log(listaContas);
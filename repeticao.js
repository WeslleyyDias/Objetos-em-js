const cliente ={
    nome: "Weslley",
    idade: 27,
    email: "weslleyy3389@gmail.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereco = [
{
    rua: "R. Waldemar Ortega",
    numero: 141,
    apartamento: "Comercial",
    complemento: "fds",
},
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
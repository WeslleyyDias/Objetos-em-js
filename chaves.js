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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessario ter um endereço cadastrado");
}
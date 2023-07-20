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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],  
};

console.log(encomenda);
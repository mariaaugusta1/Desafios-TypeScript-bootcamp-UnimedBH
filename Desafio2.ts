//Desafio 2

enum profissao {
    atriz,
    padeiro
}

type pessoa = { nome: string, idade: number, profissao: profissao }


let pessoa1: pessoa = {
nome: "maria",
idade: 29,
profissao: profissao.atriz};

let pessoa2: pessoa = {
nome: "roberto",
idade: 19,
profissao: profissao.padeiro};

let pessoa3: pessoa = {
nome: "laura",
idade: 32,
profissao: profissao.atriz};

let pessoa4: pessoa = {
nome: "carlos",
idade: 19,
profissao: profissao.padeiro}
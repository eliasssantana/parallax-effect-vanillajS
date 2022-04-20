var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var pessoa1 = {
    nome: "whindersson",
    sobrenome: "nunes",
    idade: 26
};
var escreverNome = function (_a) {
    var nome = _a.nome, rest = __rest(_a, ["nome"]);
    var sobrenome = rest.sobrenome, idade = rest.idade;
    console.log("Ol\u00E1! meu nome \u00E9 ".concat(nome, " ").concat(sobrenome, " e tenho ").concat(idade, " anos"));
};
escreverNome(pessoa1);

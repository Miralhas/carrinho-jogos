const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cartDB"
    
});
connection.connect(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso! \n");
});

const inserir = function insert(user_e, user_p){
    let sql = "insert into user(email, password) values (?,?)";
    let dados = [user_e, user_p];
    connection.query(sql, dados, (error, results, fields) => {
        if (error) console.log("Erro ao cadastrar!");
        else console.log(`User cadastrado`);
    })
}

const mostrar = function visualizar() {
    let sql = "SELECT * FROM products";
    return new Promise((resolve, reject) => {
        connection.query(sql, function(error, results, fields) {
            if (error) {
                console.error("Erro ao visualizar!", error);
                reject(error);
            } else {
                // Transforma os resultados em um objeto JSON
                const livros = results;
                resolve(livros);
            }
        });
    });
}

const atualizar = function att(idCarro, novaMarca, novoNome, novoAno){
    let sql = "update carro set ? where id = ?";
    let dados = {marcaCarro:novaMarca, nomeCarro:novoNome, anoCarro:novoAno};
    let id = idCarro;
    connection.query(sql, [dados, id], (error, results, fields) =>{
        if (error) console.log(`Erro ao atualizar carro de id: ${id}!`);
        else console.log(`Carro de id: ${id} atualizado com sucesso!\n`);
    })
}

const apagar = function apagar(idCarro){
    let sql = "delete from carro where id = ?";
    let id = idCarro;
    connection.query(sql, id, (error, results, fields) => {
        if (error) console.log(`Erro ao apagar carro de id: ${id}`);
        else console.log(`Carro de id: ${id} apagado com sucesso!\n`);
    })
}

const truncar = function truncate(){
    let sql = "truncate table carro";
    connection.query(sql, (error, results, fields) => {
        if (error) console.log("Erro ao truncar a tabela!");
        else console.log("Tabela truncada com sucesso!\n");
    })
}



module.exports = { 
    inserir,
    apagar,
    truncar,
    atualizar,
    mostrar,
}
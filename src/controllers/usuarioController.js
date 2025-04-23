const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function criarUsuario(dados){
    try {
        const request = await prisma.usuarios.create({
            data: dados
        })
        if(request){
            return {
                type: "success",
                message: "Registro cadastrado com sucesso!"
            }
        }
        return {
            type: "error",
            message: "Ocorreu um erro!"
        }
    } catch (error) {
        return {
            type: "error",
            message: error.message
        }
    }
    
}

module.exports = {
    criarUsuario
}
const { criarUsuario, login } = require('../controllers/usuarioController');

const router = require('express').Router();

router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
})

router.post("/login", async (req, res) => {
    res.send(await login(req.body));
})

module.exports = router;

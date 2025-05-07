const { criarUsuario, login } = require('../controllers/usuarioController');
const { safeMode } = require('../utils');

const router = require('express').Router();

router.post("/", safeMode, async (req, res) => {
    res.send(await criarUsuario(req.body));
})

router.post("/login", async (req, res) => {
    res.send(await login(req.body));
})

module.exports = router;

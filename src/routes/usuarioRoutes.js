const { criarUsuario } = require('../controllers/usuarioController');

const router = require('express').Router();

router.post("/", async (req, res) => {
    res.send(await criarUsuario(req.body));
})

module.exports = router;

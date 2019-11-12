const DevModel = require('../../models/Dev');

async function store(req, res) {
  const { login } = req.body;
  const newDev = await DevModel.create({ login });

  console.log(`New dev created: ${login}`);

  return res.json(newDev);
}

module.exports = { store };

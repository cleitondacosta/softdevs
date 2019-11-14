const DevModel = require('../../models/Dev');

async function store(req, res) {
  try {
    const { login, reposMarkedAsPublic } = req.body;

    const dev = await DevModel.findOneAndUpdate(
      { login }, 
      { login, reposMarkedAsPublic }, 
      { new: true, upsert: true }
    );

    return res.json(dev);
  }
  catch(err) {
    console.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = { store };

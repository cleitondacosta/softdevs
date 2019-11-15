const DevModel = require('../../models/Dev');

function handleError(err, res) {
    console.error(`Error: ${err.message}`);
    return res.status(500).json({ error: 'Internal server error.' });
}

async function store(req, res) {
  try {
    const { login, reposMarkedAsPublic } = req.body;

    const exists = await DevModel.findOne({ login });

    if(exists) {
      return res.json(exists);
    }
    else {
      const newDev = await DevModel.create({ login, reposMarkedAsPublic });
      return res.json(newDev);
    }
  }
  catch(err) {
    return handleError(err, res);
  }
}

async function deleteAll(req, res) {
  try {
    await DevModel.deleteMany({});
    return res.json({ message: 'All users deleted.' });
  }
  catch(err) {
    return handleError(err, res);
  }
}

module.exports = { store, deleteAll };

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

async function update(req, res) {
  try {
    const { user } = req.headers;
    const { 
      login: newLogin, 
      reposMarkedAsPublic: newReposMarkedAsPublic 
    } = req.body;

    const dev = await DevModel.findOne({ login: user });

    if(!dev)
      return res.status(404).json({ error: 'User not found' });

    if(newLogin)
      dev.login = newLogin;

    if(newReposMarkedAsPublic)
      dev.reposMarkedAsPublic = newReposMarkedAsPublic;

    await dev.save();

    return res.json({ message: 'OK' });
  }
  catch(err) {
    return handleError(err, res);
  }
}

module.exports = { store, update, deleteAll };

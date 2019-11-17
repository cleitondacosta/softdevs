const CompanyModel = require('../../models/Company');

function handleError(err, res) {
  console.error(`Error: ${err.message}`);
  return res.status(500).json({ error: 'Internal server error.' });
}

async function store(req, res) {
  try {
    const { login } = req.body;

    if(!login)
      return res.status(400).json({ error: 'Bad request.' });

    const exists = await CompanyModel.findOne({ login });

    if(exists)
      return res.json(exists);

    const newCompany = await CompanyModel.create({ login });

    return res.json(newCompany);
  }
  catch(err) {
    return handleError(err, res);
  }
}

async function deleteAll(req, res) {
  try {
    await CompanyModel.deleteMany({});
    return res.json({ message: 'All companies deleted.' });
  }
  catch(err) {
    return handleError(err, res);
  }
}

module.exports = { store, deleteAll };

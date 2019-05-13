const Dinosaure = require('../models/dinosaure');

const dinosaureController = {};

dinosaureController.getIfAccountExists = async (req, res, next) => {
    const dinosaure = await Dinosaure.findOne({
        login: req.body.login,
        mdp: req.body.mdp
    });

    res.json(dinosaure);
};

dinosaureController.getFriends = async (req, res, next) => {
    const { id } = req.params
    if (id) {
        const friends = await Dinosaure.find({
            proprio_key: id
        });
        res.json(friends);
    } else {
        res.send('Connexion requise');
    }
};

dinosaureController.createDinoAccount = async (req, res, next) => {
  const dinosaure = new Dinosaure({
      login: req.body.login,
      mdp: req.body.mdp,
      age: req.body.age,
      famille: req.body.famille,
      race: req.body.race,
      nourriture: req.body.nourriture
  });
  await dinosaure.save();
  res.json({ status: 'Compte du dinosaure créé' });
};

dinosaureController.createDinoFriend = async (req, res, next) => {
    const { id } = req.params;
    const dinosaure = new Dinosaure({
        login: req.body.login,
        mdp: req.body.mdp,
        age: req.body.age,
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture,
        proprio_key: id
    });
    await dinosaure.save();
    res.json({ status: 'Ami ajouté' });
};

dinosaureController.editDinoFriend = async (req, res, next) => {
    const { id } = req.params;
    const dinosaure = {
        login: req.body.login,
        age: req.body.age,
        famille: req.body.famille,
        race: req.body.race,
        nourriture: req.body.nourriture
    };
    await Dinosaure.findByIdAndUpdate(id, {$set: dinosaure}, {new: true});
    res.json({status: 'Ami modifié'})
};

dinosaureController.deleteDinoFriend = async (req, res, next) => {
    await Dinosaure.findByIdAndRemove(req.params.id);
    res.json({status: 'Ami supprimé'});
}

module.exports = dinosaureController;
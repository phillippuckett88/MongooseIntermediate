module.exports = {

    create: function (req, res) {
        var newSighting = new Sighting(req.body);

        newSighting.save(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    read: function (req, res) {
        Sighting.find(req.query).exec(function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    update: function (req, res) {
        Sighting.findByIdAndUpdate(req.query.id, { $set: req.body }, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    },

    delete: function (req, res) {
        Sighting.findByIdAndRemove(req.query.id, function (err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        })
    }
};
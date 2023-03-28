const mongoose = require("mongoose");
const model = mongoose.model("trips");

// GET /trips
const tripsList = async (req, res) => {
  model
    .find({}) // empty filter for all trips
    .exec((err, trips) => {
      if (!trips) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trips);
      }
    });
};

// GET /trips/:tripCode
const tripsFindCode = async (req, res) => {
  model
    .find({ code: req.params.tripCode }) // empty filter for all trips
    .exec((err, trip) => {
      if (!trip) {
        return res.status(404).json({ message: "trip not found" });
      } else if (err) {
        return res.status(404).json(err);
      } else {
        return res.status(200).json(trip);
      }
    });
};

module.exports = {
  tripsList,
  tripsFindCode
};
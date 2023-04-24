import { Rovers } from "./models/Rovers.js";

Rovers.find({}).lean()
  .then((rovers) => {
    console.log(rovers);
  })
  .catch(err => next(err));

// return a single record
Rovers.findOne({"name": "Curiosity" }).lean()
  .then((rover) => {
      console.log(rover);;
  })
  .catch(err => next(err));
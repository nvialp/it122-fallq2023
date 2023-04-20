import { Rovers } from "./models/Rovers.js";

Rovers.find({}).lean()
  .then((rovers) => {
    console.log(rovers);
  })
  .catch(err => next(err));
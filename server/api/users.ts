import { Router } from "express";

const routes = Router();

routes.route("/").get((req, res) => {
  res.json({});
});

export default routes;

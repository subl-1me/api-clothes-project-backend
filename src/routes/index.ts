import express from "express";
import fs from "fs";
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (fileName: string) => {
  return fileName.split(".").shift();
};

const files = fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  return name !== "index" && name !== "swagger";
});

Promise.all(
  files.map(async (file) => {
    const name = removeExtension(file);
    const routerModule = await import(`./${file}`);
    router.use(`/${name}`, routerModule.default || routerModule);
  })
)
  .then(() => {
    console.log("All routing modules were imported successfully.");
  })
  .catch((err) => {
    console.log("An error ocurred trying to import a routing module.");
    console.log(err);
  });

export default router;

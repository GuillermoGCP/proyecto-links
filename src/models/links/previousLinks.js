import pool from "../../db/getPool.js";
import useDb from "../../db/useDb.js";

const previousLinks = async () => {
  const todayDate = new Date();
  await useDb();
  const [[links]] = await pool.query(
    "SELECT * FROM links WHERE DATE(createdAt) != DATE(?)",
    [todayDate]
  );
  return links;
};

export default previousLinks;

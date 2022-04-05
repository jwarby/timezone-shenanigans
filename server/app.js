const NTP = require("ntp-time").Client;
const client = new NTP("a.st1.ntp.br", 123, { timeout: 5000 });

const app = require("express")();
const cors = require("cors");

app.use(cors({ exposedHeaders: ["Date"] }));

app.get("/", async (req, res) => {
  const time = await client.syncTime();
  console.log(time);

  res.set("Date", time.time).sendStatus(204);
});

app.listen(4000);

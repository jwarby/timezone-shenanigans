(async () => {
  const serverTime = await fetch("http://localhost:4000").then((res) => {
    const date = new Date(res.headers.get("Date"));

    return date;
  });

  document.getElementById("server-time").innerText = serverTime.toString();
  document.getElementById("server-time-as-gmt").innerText =
    serverTime.toGMTString();

  const offset = new Date() - serverTime;

  document.getElementById("offset").innerText = offset;

  const getServerTime = () => {
    return new Date(Date.now() - offset);
  };

  setInterval(() => {
    const localTime = new Date();

    document.getElementById("local-time").innerText = localTime.toString();

    document.getElementById("calculated-time").innerText =
      getServerTime().toString();

    document.getElementById("local-time-as-gmt").innerText =
      localTime.toGMTString();
    document.getElementById("calculated-time-as-gmt").innerText =
      getServerTime().toGMTString();
  }, 1000);
})();

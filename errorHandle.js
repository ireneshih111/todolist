const errorHandle = (res) => {
  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
    "Content-Type": "application/json",
  };

  res.writeHead(404, headers);
  res.write(
    JSON.stringify({
      status: "fail",
      message: "data is not filled in correctly",
    })
  );
  res.end();
};

module.exports = errorHandle;

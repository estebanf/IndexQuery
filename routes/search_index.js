var routes = function(app) {
  return app.get('/search_indexes', function(req, res) {
    var data;
    data = [
      {
        name: 'abc',
        value: 1
      }, {
        name: 'cvb',
        value: 2
      }
    ];
    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    return res.end(JSON.stringify(data));
  });
};

module.exports = routes;


routes =(app) ->
  app.get '/search_indexes',(req,res) ->
    data = [{name:'abc',value:1},{name:'cvb',value:2}]
    res.writeHead 200,
      "Content-Type": "application/json"
      "Access-Control-Allow-Origin": "*"
    res.end JSON.stringify(data)

module.exports = routes

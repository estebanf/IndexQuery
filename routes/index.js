
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', support_script: 'index-app' });
};
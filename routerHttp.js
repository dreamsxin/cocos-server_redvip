
// Router HTTP / HTTPS
let mobile = require('is-mobile');

module.exports = function(app, redT) {
	// Home
	app.get('/', function(req, res) {
		if (mobile({ua:req})){
			return res.redirect('/mobile/');
		} else {
			return res.redirect('/web/');
		}
	});
	app.get('/web/', function(req, res) {
		if (mobile({ua:req})){
			return res.redirect('/mobile/');
		} else {
			return res.render('index');
		}
	});
	app.get('/mobile/', function(req, res) {
		if (mobile({ua:req})){
			return res.render('index_mobile');
		} else {
			return res.redirect('/web/');
		}
	});

	// Admin
	app.get('/68ClubA/', function(req, res) {
		return res.render('admin');
	});

	// Fanpage
	app.get('/fanpage/', function(req, res) {
		return require('./routes/fanpage/redirect')(res);
	});

	// Help IOS
	app.get('/help/ios/', function(req, res) {
		return res.render('help/ios');
	});

	// Help telegram
	app.get('/help/telegram/', function(req, res) {
		return res.render('help/telegram');
	});

	// Bank
	app.get('/bank/', function(req, res) {
		let data = req.query;
		console.log('http success');
		console.log(data);
		if (!!data.success) {
		}else{
		}
		return res.render('bank/success');
	});

	// Sign API
	require('./routes/api')(app, redT);  // load routes API
};

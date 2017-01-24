module.exports = {
	checkLogin: function checkLogin(req, res, next){
		if(!req.session.user){
			req.flash('error', 'Not Login');
			return res.redirect('/sighin');
		}
		next();						
	},

	checkNotLogin: function checkNotLogin(req, res, next){
		if(req.session.user){
			req.flash('error', 'Aready Login');
			return res.redirect('back');
		}
		next();
	}
};

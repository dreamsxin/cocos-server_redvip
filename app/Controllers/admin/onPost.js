
var Admin    = require('./Admin');
var Users    = require('./panel/Users');
var NapThe   = require('./panel/NapThe');
var MuaThe   = require('./panel/MuaThe');
var Shop     = require('./panel/Shop');
var GiftCode = require('./panel/GiftCode');
var HeThong  = require('./panel/HeThong');

var TaiXiu       = require('./game/taixiu');
var BauCua       = require('./game/baucua');
var MiniPoker    = require('./game/mini_poker');
var BigBabol     = require('./game/big_babol');
var VuongQuocRed = require('./game/vq_red');
var mini3cay     = require('./game/mini3cay');
var angrybirds   = require('./game/angrybirds');

var candy        = require('./game/candy');
var longlan      = require('./game/longlan');

module.exports = function(client, data) {
	if (!!data) {
		if (!!data.admin) {
			Admin.onData(client, data.admin)
		}

		// Begin Game
		if (!!data.taixiu) {
			TaiXiu(client, data.taixiu)
		}
		if (!!data.baucua) {
			BauCua(client, data.baucua)
		}
		if (!!data.mini_poker) {
			MiniPoker(client, data.mini_poker)
		}
		if (!!data.big_babol) {
			BigBabol(client, data.big_babol)
		}
		if (!!data.vq_red) {
			VuongQuocRed(client, data.vq_red)
		}
		if (!!data.mini3cay) {
			mini3cay(client, data.mini3cay)
		}
		if (!!data.angrybird) {
			angrybirds(client, data.angrybird)
		}
		if (!!data.candy) {
			candy(client, data.candy)
		}
		if (!!data.longlan) {
			longlan(client, data.longlan)
		}
		// End Game

		if (!!data.nap_the) {
			NapThe(client, data.nap_the)
		}
		if (!!data.mua_the) {
			MuaThe(client, data.mua_the)
		}
		if (!!data.users) {
			Users(client, data.users)
		}
		if (!!data.shop) {
			Shop(client, data.shop)
		}
		if (!!data.giftcode){
			GiftCode(client, data.giftcode);
		}
		if (!!data.sys){
			HeThong(client, data.sys);
		}
	}
}

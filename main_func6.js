function func600(){
	var_1292 = var_83[var_673][5];
	var_1293 = (var_83[var_673][1] - var_66 + 4) * 40;
	var_1294 = (var_83[var_673][2] - var_67 + 4) * 40;
	func601();
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_83[var_673][18] = 0;
	var_772 = 1;
	var_1296 = 1;
	for(var i=0; i<10; i++){
		if ( var_1296 == 6 ) {
			var_747 = 1;
			var_389 = 1;
			DSPLAY(105);
		}
		func337();
		var_1296++;
	}
	var_772 = 0;
	var_1296 = 0;
	var_742 = 0;
	var_83[var_673][7] = 0;
	var_83[var_673][18] = 0;
	if ( var_128 >= 1 ) {
		func023();
	}
	var_211 = var_211 - var_209;
	var_208 = var_208 + var_209;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 281;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「ワハハハハハ！」";
	var_294 = "" + var_209 + "のダメージをうけた。";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	for(var i=0; i<6; i++){
		func337();
	}
	var_389 = 0;
	if ( var_156[115] == 1 ) {
		func695();
		if ( var_2855 != 0 ) {
			var_2855 = 0;
			return;
		}
	}
	var_240 = 0;
	return;
}
function func601(){
	var_437 = var_83[var_673][0];
	func626();
	if ( var_83[var_673][39] >= 2 ) {
		var_967 = Math.floor(var_967 * (var_83[var_673][39] * 2 + 10) / 10);
	}
	if ( var_83[var_673][25] >= 1 && var_83[var_673][25] <= 50 ) {
		var_967 = var_967 + var_83[var_673][25];
	}
	if ( var_83[var_673][25] >= 51 && var_83[var_673][25] < 99 ) {
		var_967 = var_967 - (var_83[var_673][25] - 50);
		if ( var_967 <= 1 ) {
			var_967 = 1;
		}
	}
	var_949 = Math.floor(var_967 * (var_967 + var_967 - 8) / 16) + var_967;
	for(var i=0; i<var_581; i++){
		var_949 = Math.floor(var_949 * 15 / 16);
	}
	var_2817 = rnd(33);
	var_2817 = var_2817 + 111;
	var_209 = Math.floor(var_949 * var_2817 / 128);
	if ( var_128 >= 1 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_113 == 1 ) {
		var_209 = Math.floor(var_209 * 2 / 3);
	}
	if ( var_209 <= 1 ) {
		var_209 = 1;
	}
	return;
}
function func602(){
	var_2856 = var_83[var_673][0];
	var_2749 = var_83[var_673][18];
	var_83[var_673][18] = 0;
	var_2747 = var_83[var_673][1];
	var_2748 = var_83[var_673][2];
	var_1993 = var_83[var_673][1] - 1;
	if ( var_1993 < 0 ) {
		var_1993 = 0;
	}
	var_1994 = var_83[var_673][1] + 1;
	if ( var_1994 > var_33 ) {
		var_1994 = var_33;
	}
	var_1995 = var_83[var_673][2] + 1;
	if ( var_1995 > var_34 ) {
		var_1995 = var_34;
	}
	var_1996 = var_83[var_673][2] - 1;
	if ( var_1996 < 0 ) {
		var_1996 = 0;
	}
	var_2857 = 0;
	if ( var_82[var_2747][var_1995] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 2;
		}
	}
	if ( var_82[var_2747][var_1996] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 8;
		}
	}
	if ( var_82[var_1993][var_2748] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 4;
		}
	}
	if ( var_82[var_1994][var_2748] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 6;
		}
	}
	if ( var_82[var_1993][var_1995] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 1;
		}
	}
	if ( var_82[var_1993][var_1996] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 7;
		}
	}
	if ( var_82[var_1994][var_1995] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 3;
		}
	}
	if ( var_82[var_1994][var_1996] == var_2749 ) {
		var_2646 = var_2749;
		func578();
		if ( var_2647 >= 1 ) {
			var_2857 = 1;
			var_83[var_673][5] = 9;
		}
	}
	if ( var_2857 == 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		if ( var_2856 == 134 ) {
			var_293 = "ｼﾞｮﾘｰﾝは仲間を心配している。";
		}
		if ( var_2856 == 35 ) {
			var_293 = "仗助は仲間を心配している。";
		}
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_2856 == 134 ) {
		var_293 = "「ストーンフリー」！！";
	}
	if ( var_2856 == 35 ) {
		var_293 = "「クレイジー・ダイヤモンド」！！";
	}
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_2856 == 134 ) {
		var_1558 = (var_83[var_2749][1] - var_66 + 4) * 40;
		var_1559 = (var_83[var_2749][2] - var_67 + 4) * 40;
		var_83[var_673][21] = 1;
		if ( var_83[var_673][5] == 2 ) {
			var_411 = 1;
		}
		if ( var_83[var_673][5] == 4 ) {
			var_411 = 2;
		}
		if ( var_83[var_673][5] == 8 ) {
			var_411 = 3;
		}
		if ( var_83[var_673][5] == 6 ) {
			var_411 = 4;
		}
		if ( var_83[var_673][5] == 1 ) {
			var_411 = 5;
		}
		if ( var_83[var_673][5] == 7 ) {
			var_411 = 6;
		}
		if ( var_83[var_673][5] == 3 ) {
			var_411 = 7;
		}
		if ( var_83[var_673][5] == 9 ) {
			var_411 = 8;
		}
		DSPLAY(136);
		var_271 = 1;
		var_1557 = 1;
		for(var j=0; j<20; j++){
			func337();
			var_1557++;
		}
		var_271 = 0;
		var_1557 = 0;
		var_411 = 0;
		var_83[var_673][21] = 0;
	}
	if ( var_2856 == 35 ) {
		var_742 = 1;
		var_83[var_673][7] = 1;
		var_743 = 1;
		for(var j=0; j<3; j++){
			func337();
		}
		DSPLAY(143);
		for(var j=0; j<3; j++){
			var_83[var_2749][8] = 1;
			func337();
			var_83[var_2749][8] = 0;
			func337();
		}
		var_742 = 0;
		var_83[var_673][7] = 0;
		var_743 = 0;
	}
	var_437 = var_83[var_2749][0];
	func626();
	var_83[var_2749][3] = var_83[var_2749][3] + 50;
	if ( var_83[var_2749][3] > var_2792 ) {
		var_83[var_2749][3] = var_2792;
	}
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "" + var_891 + "の";
	var_297 = "傷がふさがった。";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func603(){
	var_2749 = var_83[var_673][18];
	var_83[var_673][18] = 0;
	var_2858 = var_83[var_673][0];
	var_2747 = var_83[var_673][1];
	var_2748 = var_83[var_673][2];
	var_1993 = var_83[var_673][1] - 1;
	if ( var_1993 < 0 ) {
		var_1993 = 0;
	}
	var_1994 = var_83[var_673][1] + 1;
	if ( var_1994 > var_33 ) {
		var_1994 = var_33;
	}
	var_1995 = var_83[var_673][2] + 1;
	if ( var_1995 > var_34 ) {
		var_1995 = var_34;
	}
	var_1996 = var_83[var_673][2] - 1;
	if ( var_1996 < 0 ) {
		var_1996 = 0;
	}
	var_2857 = 0;
	if ( var_82[var_2747][var_1995] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 2;
	}
	if ( var_82[var_2747][var_1996] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 8;
	}
	if ( var_82[var_1993][var_2748] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 4;
	}
	if ( var_82[var_1994][var_2748] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 6;
	}
	if ( var_82[var_1993][var_1995] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 1;
	}
	if ( var_82[var_1993][var_1996] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 7;
	}
	if ( var_82[var_1994][var_1995] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 3;
	}
	if ( var_82[var_1994][var_1996] == var_2749 ) {
		var_2857 = 1;
		var_83[var_673][5] = 9;
	}
	var_2857 = 1;
	if ( var_2857 == 0 || var_83[var_2749][0] == 0 ) {
		var_2740 = var_83[var_673][1];
		var_2741 = var_83[var_673][2];
		var_2742 = var_66 - 3;
		if ( var_2742 < 0 ) {
			var_2742 = 0;
		}
		var_2743 = var_66 + 3;
		if ( var_2743 > var_33 ) {
			var_2743 = var_33;
		}
		var_2744 = var_67 + 3;
		if ( var_2744 > var_34 ) {
			var_2744 = var_34;
		}
		var_2745 = var_67 - 3;
		if ( var_2745 < 0 ) {
			var_2745 = 0;
		}
		if ( var_2740 >= var_2742 && var_2740 <= var_2743 && var_2741 >= var_2745 && var_2741 <= var_2744 ) {
			var_240 = 0;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			if ( var_2858 == 164 ) {
				var_293 = "ｴｼﾃﾞｨｼの脳は";
			}
			if ( var_2858 == 165 ) {
				var_293 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは";
			}
			var_294 = "恨みに震えている。";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			var_83[var_673][21] = 1;
			for(var k=0; k<10; k++){
				var_411 = 1;
				func337();
				var_411 = 2;
				func337();
			}
			var_411 = 1;
			var_83[var_673][21] = 0;
		}
		return;
	}
	var_240 = 0;
	DSPLAY(197);
	var_742 = 1;
	var_83[var_673][7] = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	var_742 = 0;
	var_83[var_673][7] = 0;
	var_2859 = var_83[var_673][1];
	var_2860 = var_83[var_673][2];
	var_82[var_2859][var_2860] = 0;
	var_83[var_673][0] = 0;
	var_83[var_673][1] = 0;
	var_83[var_673][2] = 0;
	func331();
	var_83[var_2749][12] = 0;
	var_83[var_2749][39] = var_83[var_2749][39] + 1;
	if ( var_83[var_2749][39] == 1 ) {
		var_83[var_2749][39] = 2;
	}
	if ( var_2858 == 164 ) {
		var_83[var_2749][39] = var_83[var_2749][39] + 1;
	}
	var_437 = var_83[var_2749][0];
	func626();
	var_83[var_2749][3] = Math.floor(var_438 * (var_83[var_2749][39] + 10) / 10);
	if ( var_83[var_2749][3] >= 999 ) {
		var_83[var_2749][3] = 999;
	}
	var_2861 = var_891;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_2858 == 164 ) {
		var_293 = "ｴｼﾃﾞｨｼの脳は";
	}
	if ( var_2858 == 165 ) {
		var_293 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは";
	}
	var_294 = "" + var_2861 + "に取り憑いた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	func340();
	DSPLAY(198);
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "" + var_2861 + "は";
	var_297 = "レベル " + var_83[var_2749][39] + " になった！";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return;
}
function func604(){
	var_2862 = rnd(2);
	if ( var_2862 == 0 && var_83[var_673][0] == 30 && var_83[var_673][29] == 0 ) {
		var_240 = 0;
		var_83[var_673][7] = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ﾎﾙ･ﾎｰｽはﾄﾄ神のﾏﾝｶﾞを読んだ。";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		DSPLAY(118);
		var_83[var_673][21] = 1;
		for(var j=0; j<10; j++){
			var_411 = 4;
			func337();
			var_411 = 5;
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		var_411 = 6;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾎﾙ･ﾎｰｽ「新しいﾍﾟｰｼﾞが現れたぞ…」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		DSPLAY(118);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "【ﾎﾙ･ﾎｰｽの次の攻撃は…】";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		DSPLAY(118);
		var_293 = var_296;
		var_294 = var_297;
		var_1073 = rnd(4);
		if ( var_1073 <= 1 ) {
			var_296 = "【ウオオン！";
			var_297 = "　　いつもの２倍のダメージだッ！】";
			var_83[var_673][29] = 1;
		}
		if ( var_1073 == 2 ) {
			var_296 = "【いつもの３倍ダメージだッ！";
			var_297 = "　　ﾎﾙ･ﾎｰｽは本当にラッキー！】";
			var_83[var_673][29] = 2;
		}
		if ( var_1073 == 3 ) {
			var_296 = "【いつもの半分のダメージでした…";
			var_297 = "　でもくじけちゃダメだよ ﾎﾙ･ﾎｰｽ！】";
			var_83[var_673][29] = 3;
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		if ( var_1073 <= 1 ) {
			var_296 = "ﾎﾙ･ﾎｰｽ「こ…　こいつはすげえ！」";
			var_297 = "　　";
		}
		if ( var_1073 == 2 ) {
			var_296 = "ﾎﾙ･ﾎｰｽ「おれたちは無敵だッ！」";
			var_297 = "";
		}
		if ( var_1073 == 3 ) {
			var_296 = "ﾎﾙ･ﾎｰｽ「にゃんじゃああ〜〜〜ッ";
			var_297 = "　　　これは！？」";
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<6; j++){
			func337();
		}
		var_83[var_673][21] = 0;
		var_411 = 0;
		return;
	}
	var_240 = 0;
	DSPLAY(141);
	var_83[var_673][21] = 1;
	var_411 = 2;
	func337();
	var_411 = 3;
	func337();
	var_411 = 2;
	func337();
	var_411 = 3;
	func337();
	var_411 = 2;
	func337();
	var_411 = 3;
	func337();
	var_411 = 1;
	func337();
	var_83[var_673][21] = 0;
	var_411 = 0;
	DSPLAY(116);
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_271 = 1;
	var_1435 = 1;
	var_1430 = var_83[var_673][1];
	var_1431 = var_83[var_673][2];
	for(var i=0; i<10; i++){
		func337();
		var_1435 = var_1435 + 1;
	}
	var_742 = 0;
	var_271 = 0;
	var_1435 = 0;
	var_83[var_673][7] = 0;
	var_2862 = rnd(3);
	if ( var_2862 == 0 && var_83[var_673][0] == 46 && var_337 < 50 ) {
		var_2863 = 0;
		var_2864 = var_67 - 1;
		for(var j=0; j<3; j++){
			var_2865 = var_66 - 1;
			for(var k=0; k<3; k++){
				if ( var_71[var_2865][var_2864] != 0 && var_71[var_2865][var_2864] != 13 && var_77[var_2865][var_2864] == 0 && var_80[var_2865][var_2864] == 0 && var_73[var_2865][var_2864] == 0 ) {
					var_768 = 1;
					var_1728 = 1;
					var_2424 = 1;
					var_1550 = var_2865;
					var_230 = var_2864;
					var_2412 = 1;
					func536();
					var_768 = 0;
					var_1728 = 0;
					var_2424 = 0;
					var_2412 = 0;
					var_83[var_2611][22] = 1;
					var_83[var_2611][9] = 0;
					func337();
					var_2863 = 1;
				}
				var_2865++;
			}
			var_2864++;
		}
		if ( var_2863 == 1 ) {
			var_240 = 0;
			DSPLAY(205);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「J・ガイルの旦那！」";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			var_83[var_673][7] = 0;
			return;
		}
	}
	var_271 = 1;
	var_1434 = 1;
	var_1426 = rnd(3);
	if ( var_1426 == 0 ) {
		var_1427 = 160;
		var_1428 = 0;
	}
	if ( var_1426 == 1 ) {
		var_1427 = 0;
		var_1428 = 0;
	}
	if ( var_1426 == 2 ) {
		var_1427 = 320;
		var_1428 = 0;
	}
	for(var i=0; i<4; i++){
		func337();
		if ( var_1426 == 0 ) {
			var_1427 = var_1427;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 1 ) {
			var_1427 = var_1427 + 40;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 2 ) {
			var_1427 = var_1427 - 40;
			var_1428 = var_1428 + 40;
		}
	}
	var_271 = 0;
	var_1434 = 0;
	var_83[var_673][18] = 0;
	var_83[var_673][7] = 0;
	func584();
	if ( var_2803 == 1 ) {
		return;
	}
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_2852 = 15;
	if ( var_83[var_673][0] == 30 ) {
		var_2852 = 30;
	}
	if ( var_83[var_673][0] == 30 && var_83[var_673][29] == 1 ) {
		var_2852 = 60;
		var_83[var_673][29] = 0;
	}
	if ( var_83[var_673][0] == 30 && var_83[var_673][29] == 2 ) {
		var_2852 = 90;
		var_83[var_673][29] = 0;
	}
	if ( var_83[var_673][0] == 30 && var_83[var_673][29] == 3 ) {
		var_2852 = 15;
		var_83[var_673][29] = 0;
	}
	if ( var_83[var_673][39] >= 2 ) {
		var_2852 = (var_83[var_673][39] - 1) * 2 + var_2852;
	}
	if ( var_128 >= 1 ) {
		var_2852 = Math.floor(var_2852 * 3 / 2);
	}
	if ( var_156[205] == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	if ( var_168 == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	var_209 = var_2852;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｴﾝﾍﾟﾗｰの弾丸を喰らった！";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	for(var i=0; i<8; i++){
		func337();
	}
	var_389 = 0;
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 215;
		if ( var_83[var_673][0] == 30 ) {
			var_356 = 263;
		}
	}
	var_240 = 0;
	return;
}
function func605(){
	var_240 = 0;
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_743 = 1;
	DSPLAY(102);
	for(var i=0; i<10; i++){
		func337();
	}
	var_742 = 0;
	var_743 = 0;
	var_83[var_673][18] = 0;
	var_83[var_673][7] = 0;
	var_2866 = 0;
	var_2867 = rnd(8);
	if ( var_105 == 1 ) {
		if ( var_2867 == 2 || var_2867 == 3 ) {
			var_2867 = 0;
			var_2868 = 1;
		}
	}
	if ( var_62 == 99 ) {
		var_2867 = 1;
	}
	if ( var_2867 == 0 ) {
		var_2866 = 1;
	}
	var_2764 = var_66 - 1;
	var_2765 = var_66 + 1;
	var_2766 = var_67 + 1;
	var_2767 = var_67 - 1;
	if ( var_2764 < 5 ) {
		var_2764 = 5;
	}
	if ( var_2767 < 5 ) {
		var_2767 = 5;
	}
	if ( var_2765 > var_33 ) {
		var_2765 = var_33;
	}
	if ( var_2766 > var_34 ) {
		var_2766 = var_34;
	}
	if ( var_71[var_2764][var_67] == 0 ) {
		var_1449 = 4;
	}
	if ( var_71[var_2765][var_67] == 0 ) {
		var_1449 = 6;
	}
	if ( var_71[var_66][var_2766] == 0 ) {
		var_1449 = 2;
	}
	if ( var_71[var_66][var_2767] == 0 ) {
		var_1449 = 8;
	}
	if ( var_71[var_2764][var_2766] == 0 ) {
		var_1449 = 1;
	}
	if ( var_71[var_2764][var_2767] == 0 ) {
		var_1449 = 7;
	}
	if ( var_71[var_2765][var_2766] == 0 ) {
		var_1449 = 3;
	}
	if ( var_71[var_2765][var_2767] == 0 ) {
		var_1449 = 9;
	}
	var_1450 = 160;
	var_1451 = 150;
	var_1448 = 1;
	var_1447 = 1;
	var_271 = 1;
	for(var i=0; i<8; i++){
		func337();
		if ( var_1447 == 4 ) {
			if ( var_1449 == 4 ) {
				var_199 = 4;
			}
			if ( var_1449 == 6 ) {
				var_199 = 6;
			}
			if ( var_1449 == 2 ) {
				var_199 = 2;
			}
			if ( var_1449 == 8 ) {
				var_199 = 8;
			}
			if ( var_1449 == 1 ) {
				var_199 = 1;
			}
			if ( var_1449 == 3 ) {
				var_199 = 3;
			}
			if ( var_1449 == 7 ) {
				var_199 = 7;
			}
			if ( var_1449 == 9 ) {
				var_199 = 9;
			}
			if ( var_2866 == 1 ) {
				var_672 = 157;
				func093();
				if ( var_2868 == 1 ) {
					var_2869 = var_199;
				}
			}
			if ( var_2866 == 0 ) {
				func601();
				var_2852 = var_209;
				var_747 = 1;
				var_389 = 2;
				DSPLAY(105);
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "「ダイバー・ダウン！」";
				var_294 = "" + var_2852 + "のダメージをうけた！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func047();
				if ( var_128 >= 1 ) {
					func023();
				}
			}
		}
		if ( var_2868 == 1 ) {
			if ( var_199 == 1 ) {
				var_2870 = 2;
			}
			if ( var_199 == 2 ) {
				var_2870 = 3;
			}
			if ( var_199 == 3 ) {
				var_2870 = 6;
			}
			if ( var_199 == 6 ) {
				var_2870 = 9;
			}
			if ( var_199 == 9 ) {
				var_2870 = 8;
			}
			if ( var_199 == 8 ) {
				var_2870 = 7;
			}
			if ( var_199 == 7 ) {
				var_2870 = 4;
			}
			if ( var_199 == 4 ) {
				var_2870 = 1;
			}
			var_199 = var_2870;
			if ( var_1447 >= 6 ) {
				var_199 = var_2869;
			}
		}
		var_1447++;
	}
	var_1447 = 0;
	var_271 = 0;
	for(var i=0; i<7; i++){
		func337();
	}
	var_1448 = 0;
	var_2868 = 0;
	var_389 = 0;
	if ( var_2866 == 0 ) {
		var_211 = var_211 - var_2852;
		var_208 = var_208 + var_2852;
		if ( var_211 <= 0 ) {
			var_211 = 0;
			var_356 = 285;
		}
	}
	return;
}
function func606(){
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_271 = 1;
	var_1433 = 1;
	var_1430 = var_83[var_673][1];
	var_1431 = var_83[var_673][2];
	DSPLAY(116);
	for(var i=0; i<10; i++){
		func337();
		var_1433 = var_1433 + 1;
	}
	var_742 = 0;
	var_271 = 0;
	var_1433 = 0;
	var_83[var_673][18] = 0;
	var_83[var_673][7] = 0;
	var_2862 = rnd(3);
	var_271 = 1;
	var_1432 = 1;
	var_1426 = rnd(3);
	if ( var_1426 == 0 ) {
		var_1427 = 160;
		var_1428 = 0;
	}
	if ( var_1426 == 1 ) {
		var_1427 = 0;
		var_1428 = 0;
	}
	if ( var_1426 == 2 ) {
		var_1427 = 320;
		var_1428 = 0;
	}
	for(var i=0; i<4; i++){
		func337();
		if ( var_1426 == 0 ) {
			var_1427 = var_1427;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 1 ) {
			var_1427 = var_1427 + 40;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 2 ) {
			var_1427 = var_1427 - 40;
			var_1428 = var_1428 + 40;
		}
	}
	var_271 = 0;
	var_1432 = 0;
	func584();
	if ( var_2803 == 1 ) {
		return;
	}
	var_2852 = 10;
	if ( var_83[var_673][39] >= 2 ) {
		var_2852 = (var_83[var_673][39] - 1) * 2 + var_2852;
	}
	if ( var_128 >= 1 ) {
		var_2852 = Math.floor(var_2852 * 3 / 2);
	}
	if ( var_156[205] == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	if ( var_168 == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	var_209 = var_2852;
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰの弾丸を喰らった！";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	for(var i=0; i<8; i++){
		func337();
	}
	var_389 = 0;
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 246;
	}
	var_240 = 0;
	return;
}
function func607(){
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_240 = 0;
	var_2871 = var_66 - 5;
	var_2872 = var_66 + 5;
	var_2873 = var_67 + 5;
	var_2874 = var_67 - 5;
	if ( var_2871 < 5 ) {
		var_2871 = 5;
	}
	if ( var_2874 < 5 ) {
		var_2874 = 5;
	}
	if ( var_2872 > var_33 ) {
		var_2872 = var_33;
	}
	if ( var_2873 > var_34 ) {
		var_2873 = var_34;
	}
	if ( var_83[var_673][1] > var_2621 && var_83[var_673][1] < var_2622 && var_83[var_673][2] > var_2624 && var_83[var_673][2] < var_2623 ) {
		var_83[var_673][21] = 1;
		var_411 = 1;
		func337();
		func337();
		func337();
		var_411 = 2;
		func337();
		func337();
		func337();
		var_411 = 3;
		func337();
		func337();
		func337();
		var_411 = 4;
		func337();
		func337();
		func337();
		var_411 = 3;
		func337();
		func337();
		func337();
		var_411 = 4;
		func337();
		func337();
		func337();
		var_411 = 6;
		func337();
		var_411 = 7;
		func337();
	}
	var_271 = 1;
	var_1429 = 1;
	var_1430 = var_83[var_673][1];
	var_1431 = var_83[var_673][2];
	DSPLAY(116);
	for(var i=0; i<10; i++){
		func337();
		var_1429 = var_1429 + 1;
	}
	var_742 = 0;
	var_271 = 0;
	var_1429 = 0;
	var_271 = 1;
	var_1425 = 1;
	var_1426 = rnd(3);
	if ( var_1426 == 0 ) {
		var_1427 = 160;
		var_1428 = 0;
	}
	if ( var_1426 == 1 ) {
		var_1427 = 0;
		var_1428 = 0;
	}
	if ( var_1426 == 2 ) {
		var_1427 = 320;
		var_1428 = 0;
	}
	for(var i=0; i<4; i++){
		func337();
		if ( var_1426 == 0 ) {
			var_1427 = var_1427;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 1 ) {
			var_1427 = var_1427 + 40;
			var_1428 = var_1428 + 40;
		}
		if ( var_1426 == 2 ) {
			var_1427 = var_1427 - 40;
			var_1428 = var_1428 + 40;
		}
	}
	var_271 = 0;
	var_1425 = 0;
	var_83[var_673][18] = 0;
	var_83[var_673][7] = 0;
	var_411 = 0;
	var_83[var_673][21] = 0;
	func584();
	if ( var_2803 == 1 ) {
		return;
	}
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_2852 = 30;
	if ( var_83[var_673][39] >= 2 ) {
		var_2852 = (var_83[var_673][39] - 1) * 2 + var_2852;
	}
	if ( var_128 >= 1 ) {
		var_2852 = Math.floor(var_2852 * 3 / 2);
	}
	if ( var_156[205] == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	if ( var_168 == 1 ) {
		var_2852 = Math.floor(var_2852 * 2 / 3);
	}
	var_209 = var_2852;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾋﾟｽﾄﾙｽﾞの弾丸を喰らった！";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	for(var i=0; i<8; i++){
		func337();
	}
	var_389 = 0;
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 240;
	}
	var_240 = 0;
	return;
}
function func608(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 ) {
		return;
	}
	var_2751 = rnd(30);
	if ( var_2751 == 1 ) {
		var_747 = 1;
		var_389 = 2;
		var_271 = 1;
		var_1490 = 1;
		var_209 = var_1022;
		DSPLAY(176);
		for(var j=0; j<10; j++){
			func337();
			var_1490++;
		}
		var_271 = 0;
		var_1490 = 0;
		var_389 = 0;
		var_2852 = var_1022;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "太陽から発射されたレーザーで";
		var_294 = "" + var_2852 + "のダメージをうけた！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<8; j++){
			func337();
		}
		var_211 = var_211 - var_2852;
		var_208 = var_208 + var_2852;
		if ( var_211 <= 0 ) {
			var_211 = 0;
			var_356 = 207;
		}
		var_240 = 0;
	}
	if ( var_2751 == 2 ) {
		gsel(19);
		color(255, 0, 0);
		boxf(0, 0, 340, 340);
		gsel(0);
		var_1165 = 1;
		var_2875 = rnd(2);
		var_2875 = var_2875 + 1;
		var_1022 = var_1022 + var_2875;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "周りの気温が" + var_2875 + "度 上がった！";
		var_294 = "太陽のエネルギーがアップした！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_1165 = 0;
		var_240 = 0;
	}
	return;
}
function func609(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 ) {
		return;
	}
	gsel(19);
	color(255, 0, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_529 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾌｰｺﾞは殺人ウイルスを撒いた！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<20; i++){
		func337();
	}
	var_403 = "ウイルスが敵の体を蝕んでいる！";
	var_2217 = 1;
	var_2196 = 1;
	var_2194 = 1;
	var_2852 = 20;
	if ( var_83[var_673][39] >= 2 ) {
		var_2852 = (var_83[var_673][39] - 1) * 2 + var_2852;
	}
	var_2876 = var_2852;
	for(var i=0; i<var_97; i++){
		if ( var_2194 != var_124 && var_2194 != var_673 ) {
			var_2220 = 0;
			if ( var_83[var_2194][0] != 0 && var_83[var_2194][10] == var_201 && var_201 > 0 && var_201 <= 12 ) {
				var_402 = var_2194;
				var_209 = var_2852;
				func516();
				func705();
				for(var l=0; l<2; l++){
					func337();
				}
				var_2220 = 1;
			}
			if ( var_2220 == 0 ) {
				var_1993 = var_83[var_673][1] - 1;
				if ( var_1993 < 0 ) {
					var_1993 = 0;
				}
				var_1994 = var_83[var_673][1] + 1;
				if ( var_1994 > var_33 ) {
					var_1994 = var_33;
				}
				var_1995 = var_83[var_673][2] + 1;
				if ( var_1995 > var_34 ) {
					var_1995 = var_34;
				}
				var_1996 = var_83[var_673][2] - 1;
				if ( var_1996 < 0 ) {
					var_1996 = 0;
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
			}
		}
		var_2194 = var_2194 + 1;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	var_2196 = 0;
	var_2217 = 0;
	if ( var_410 == 408 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "まだ遅くない…";
		var_294 = "「マン・イン・ザ・ミラー！」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ウイルスは許可しないィィィィ——ッ";
		var_297 = "";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_2876 = Math.floor(var_2876 / 2);
		if ( var_2876 < 1 ) {
			var_2876 = 1;
		}
	}
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_2852 = var_2876;
	var_209 = var_2852;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾃﾞｨｱﾎﾞﾛは";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 241;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	var_389 = 0;
	var_529 = 0;
	var_240 = 0;
	return;
}
function func610(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 ) {
		return;
	}
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_529 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｴﾝﾎﾟﾘｵは純粋酸素を大量に集めた！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<20; i++){
		func337();
	}
	var_403 = "酸素が細胞組織を破壊している！";
	var_2217 = 1;
	var_2196 = 1;
	var_2194 = 1;
	var_2852 = 20;
	if ( var_83[var_673][39] >= 2 ) {
		var_2852 = (var_83[var_673][39] - 1) * 2 + var_2852;
	}
	var_2876 = var_2852;
	for(var i=0; i<var_97; i++){
		if ( var_2194 != var_124 && var_2194 != var_673 ) {
			var_2220 = 0;
			if ( var_83[var_2194][0] != 0 && var_83[var_2194][10] == var_201 && var_201 > 0 && var_201 <= 12 ) {
				var_402 = var_2194;
				var_209 = var_2852;
				func516();
				func705();
				for(var l=0; l<2; l++){
					func337();
				}
				var_2220 = 1;
			}
			if ( var_2220 == 0 ) {
				var_1993 = var_83[var_673][1] - 1;
				if ( var_1993 < 0 ) {
					var_1993 = 0;
				}
				var_1994 = var_83[var_673][1] + 1;
				if ( var_1994 > var_33 ) {
					var_1994 = var_33;
				}
				var_1995 = var_83[var_673][2] + 1;
				if ( var_1995 > var_34 ) {
					var_1995 = var_34;
				}
				var_1996 = var_83[var_673][2] - 1;
				if ( var_1996 < 0 ) {
					var_1996 = 0;
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					var_209 = var_2852;
					func516();
					func705();
					for(var m=0; m<2; m++){
						func337();
					}
				}
			}
		}
		var_2194 = var_2194 + 1;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	var_529 = 0;
	var_2196 = 0;
	var_2217 = 0;
	var_529 = 0;
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_2852 = var_2876;
	var_209 = var_2852;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾃﾞｨｱﾎﾞﾛは";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	for(var i=0; i<10; i++){
		func337();
	}
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 251;
	}
	var_389 = 0;
	var_240 = 0;
	return;
}
function func611(){
	if ( var_83[var_673][12] != 0 || var_83[var_673][13] != 0 || var_83[var_673][17] != 0 || var_83[var_673][23] != 0 ) {
		return;
	}
	var_2877 = rnd(2);
	if ( var_2877 == 0 ) {
		return;
	}
	var_2878 = 0;
	var_2879 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2879][0] != 0 && var_83[var_2879][10] == var_201 && var_201 != 14 && var_2879 != var_673 ) {
			var_2878 = 1;
		}
		var_2879 = var_2879 + 1;
	}
	if ( var_2878 == 1 ) {
		return;
	}
	var_2879 = 1;
	for(var i=0; i<var_336; i++){
		if ( var_78[var_2879][0] == 650 || var_78[var_2879][0] == 651 || var_78[var_2879][0] == 652 || var_78[var_2879][0] == 653 ) {
			if ( var_78[var_2879][9] == var_201 && var_201 != 14 ) {
				var_2878 = 1;
			}
		}
		var_2879 = var_2879 + 1;
	}
	if ( var_2878 == 1 ) {
		return;
	}
	var_2880 = rnd(2);
	var_2852 = Math.floor(var_352 / 15) + var_2880;
	var_747 = 1;
	var_389 = 2;
	DSPLAY(104);
	var_209 = var_2852;
	for(var i=0; i<10; i++){
		func337();
	}
	var_389 = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾖｰﾖｰﾏｯの謎の攻撃を喰らった！";
	var_294 = "" + var_2852 + "のダメージをうけた！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	if ( var_128 >= 1 ) {
		func023();
	}
	for(var i=0; i<6; i++){
		func337();
	}
	var_211 = var_211 - var_2852;
	var_208 = var_208 + var_2852;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 222;
	}
	var_240 = 0;
	return;
}
function func612(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 || var_178 != 0 ) {
		var_83[var_673][18] = 0;
		return;
	}
	var_1393 = var_673;
	var_178 = 1;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ウワハハハハハハーッ！！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	var_1399 = (var_83[var_1393][1] - var_66 + 4) * 40;
	var_1400 = (var_83[var_1393][2] - var_67 + 4) * 40 - 10;
	var_271 = 1;
	var_83[var_1393][21] = 1;
	var_959 = 0;
	for(var i=0; i<10; i++){
		if ( var_959 == 0 || var_959 == 4 || var_959 == 8 ) {
			var_1398 = 1;
		}
		if ( var_959 == 1 || var_959 == 5 || var_959 == 9 ) {
			var_1401 = 1;
		}
		if ( var_959 == 2 || var_959 == 6 ) {
			var_1402 = 1;
		}
		if ( var_959 == 3 || var_959 == 7 ) {
			var_1403 = 1;
		}
		var_411 = 1;
		func337();
		var_411 = 2;
		func337();
		var_411 = 3;
		func337();
		var_959++;
	}
	var_83[var_1393][21] = 0;
	var_271 = 0;
	var_1398 = 0;
	var_1401 = 0;
	var_1402 = 0;
	var_1403 = 0;
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "西戸の嘲笑は";
	var_297 = "ﾃﾞｨｱﾎﾞﾛを恐怖で呪縛した！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_198 = 1;
	var_300 = 0;
	func050();
	func047();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ぼくをチェーンで殴る気だッ！";
	var_297 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_198 = 1;
	var_300 = 0;
	func050();
	func047();
	var_240 = 0;
	var_83[var_1393][6] = 1;
	var_83[var_1393][18] = 0;
	var_2708 = 1;
	var_2197 = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func613(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 ) {
		var_83[var_673][18] = 0;
		return;
	}
	var_1393 = var_673;
	gsel(19);
	color(150, 150, 150);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_271 = 1;
	var_1392 = 1;
	var_83[var_673][18] = 0;
	var_1165 = 1;
	var_389 = 2;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｸﾞﾚｲﾄﾌﾙﾃﾞｯﾄﾞの老化攻撃だ！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<30; i++){
		if ( var_1392 == 11 ) {
			DSPLAY(161);
		}
		func337();
		var_1392 = var_1392 + 1;
	}
	var_1392 = 0;
	var_271 = 0;
	func340();
	var_389 = 0;
	if ( var_128 >= 1 ) {
		func023();
	}
	if ( var_156[207] == 1 ) {
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "しかし 装備中のDISCによって";
		var_297 = "老化攻撃を防いだ！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_1165 = 0;
		var_240 = 0;
		var_83[var_1393][6] = 1;
		var_2708 = 1;
		var_2197 = 1;
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_215 == 202 || var_410 == 404 ) {
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "しかし 装備中のDISCによって";
		var_297 = "体が冷やされ 無事だった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_1165 = 0;
		var_240 = 0;
		var_83[var_1393][6] = 1;
		var_2708 = 1;
		var_2197 = 1;
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	DSPLAY(164);
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "精神力が下がってしまった！";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	var_565 = var_565 - 1;
	if ( var_565 < 0 ) {
		var_565 = 0;
	}
	var_1165 = 0;
	var_240 = 0;
	var_83[var_1393][6] = 1;
	var_2708 = 1;
	var_2197 = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func614(){
	if ( var_83[var_673][12] >= 1 || var_83[var_673][13] == 1 || var_83[var_673][17] == 1 || var_83[var_673][23] == 1 ) {
		var_83[var_673][18] = 0;
		return;
	}
	var_152 = var_673;
	if ( var_83[var_673][0] == 113 ) {
		var_151 = 5;
	}
	if ( var_83[var_673][0] == 114 ) {
		var_151 = 7;
	}
	if ( var_83[var_673][0] == 128 ) {
		var_151 = 4;
	}
	var_83[var_673][18] = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「ザ・ワールド」！！";
	var_294 = "時よ止まれ！";
	if ( var_83[var_673][0] == 128 ) {
		var_293 = "「スタープラチナ・ザ・ワールド」！！";
		var_294 = "";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	DSPLAY(185);
	var_271 = 1;
	var_1491 = 1;
	for(var i=0; i<20; i++){
		func337();
		var_1491++;
	}
	var_271 = 0;
	var_1491 = 0;
	for(var i=0; i<20; i++){
		func337();
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "フフフフフ…";
	var_294 = "これが「世界」だ…";
	if ( var_83[var_673][0] == 128 ) {
		var_293 = "ひさしぶりに……";
		var_294 = "時をとめられたぜ";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	var_240 = 0;
	var_83[var_673][6] = 1;
	var_2708 = 1;
	var_2197 = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	var_2392 = 1;
	for(var i=0; i<var_97; i++){
		var_83[var_2392][6] = 0;
		var_83[var_2392][9] = 0;
		var_83[var_2392][18] = 0;
		var_2392 = var_2392 + 1;
	}
	if ( var_215 == 100 || var_215 == 111 || var_215 == 398 ) {
		for(var j=0; j<10; j++){
			func337();
		}
		var_114 = 0;
		var_463 = 0;
		var_464 = 0;
		var_461 = 0;
		var_462 = 0;
		var_151 = 0;
		var_152 = 0;
		var_163 = 1;
		var_164 = 1;
		DSPLAY(185);
		var_271 = 1;
		var_1493 = 1;
		for(var j=0; j<20; j++){
			func337();
			var_1493++;
		}
		var_271 = 0;
		var_1493 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ﾃﾞｨｱﾎﾞﾛ「おれが時を止めた…」";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[6];
		var_26_1 = var_26[6];
		var_27_1 = var_27[6];
		func047();
		for(var j=0; j<2; j++){
			func337();
		}
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "どんな気分だ？";
		var_297 = "動けねえのに背後に立たれる気分はよ？";
		var_25_1 = var_25[6];
		var_26_1 = var_26[6];
		var_27_1 = var_27[6];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<2; j++){
			func337();
		}
		func340();
		var_153 = 1;
		return;
	}
	return;
}
function func615(){
	if(func){
		throw "";
	}
	var_83[var_673][30] = 0;
	var_83[var_673][21] = 1;
	var_411 = 1;
	for(var i=0; i<3; i++){
		func337();
	}
	var_411 = 2;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 3;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 4;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 5;
	for(var i=0; i<4; i++){
		func337();
	}
	var_411 = 4;
	for(var i=0; i<4; i++){
		func337();
	}
	var_411 = 5;
	for(var i=0; i<4; i++){
		func337();
	}
	var_411 = 4;
	for(var i=0; i<4; i++){
		func337();
	}
	var_411 = 5;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 3;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 2;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 1;
	for(var i=0; i<3; i++){
		func337();
	}
	var_2705 = var_83[var_673][1];
	var_2706 = var_83[var_673][2];
	if ( var_66 < var_2705 && var_67 > var_2706 ) {
		var_83[var_673][5] = 1;
	}
	if ( var_66 > var_2705 && var_67 > var_2706 ) {
		var_83[var_673][5] = 3;
	}
	if ( var_66 < var_2705 && var_67 < var_2706 ) {
		var_83[var_673][5] = 7;
	}
	if ( var_66 > var_2705 && var_67 < var_2706 ) {
		var_83[var_673][5] = 9;
	}
	if ( var_66 == var_2705 && var_67 > var_2706 ) {
		var_83[var_673][5] = 2;
	}
	if ( var_66 == var_2705 && var_67 < var_2706 ) {
		var_83[var_673][5] = 8;
	}
	if ( var_67 == var_2706 && var_66 < var_2705 ) {
		var_83[var_673][5] = 4;
	}
	if ( var_67 == var_2706 && var_66 > var_2705 ) {
		var_83[var_673][5] = 6;
	}
	var_411 = 0;
	var_83[var_673][21] = 0;
	var_83[var_673][30] = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	return;
	var_768 = 1;
	var_2417 = 1;
	for(var i=0; i<4; i++){
		for(var j=0; j<500; j++){
			var_1550 = rnd(var_33);
			var_230 = rnd(var_34);
			if ( var_71[var_1550][var_230] == var_201 && var_77[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_65[var_1550][var_230] == 0 ) {
				func536();
				break;
			}
		}
	}
	var_768 = 0;
	var_2417 = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "シャボンランチャー！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	func331();
	return;
}
function func616(){
	if ( var_83[var_2791][0] == 0 ) {
		var_83[var_673][18] = 0;
		return;
	}
	var_83[var_673][21] = 1;
	var_411 = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	var_411 = 2;
	var_83[var_673][7] = 1;
	var_271 = 1;
	var_1439 = 1;
	var_1430 = var_83[var_673][1];
	var_1431 = var_83[var_673][2];
	for(var i=0; i<10; i++){
		func337();
		var_1439 = var_1439 + 1;
	}
	var_742 = 0;
	var_271 = 0;
	var_1439 = 0;
	var_83[var_673][18] = 0;
	var_83[var_673][7] = 0;
	var_271 = 1;
	var_1436 = 1;
	var_1437 = (var_2789 - var_66 + 4) * 40;
	var_1438 = (var_2790 - var_67 + 4) * 40 - 170;
	for(var i=0; i<4; i++){
		func337();
		var_1438 = var_1438 + 40;
	}
	var_455 = var_2789;
	var_456 = var_2790;
	func586();
	var_271 = 0;
	var_1436 = 0;
	var_83[var_673][21] = 0;
	var_411 = 0;
	for(var i=0; i<5; i++){
		func337();
	}
	return;
}
function func617(){
	var_240 = 0;
	var_83[var_673][21] = 1;
	var_411 = 1;
	for(var i=0; i<5; i++){
		func337();
	}
	var_411 = 2;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 3;
	for(var i=0; i<10; i++){
		func337();
	}
	var_411 = 2;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 1;
	for(var i=0; i<2; i++){
		func337();
	}
	var_411 = 0;
	var_83[var_673][21] = 0;
	var_768 = 1;
	var_2418 = 1;
	for(var i=0; i<4; i++){
		for(var j=0; j<500; j++){
			var_1550 = rnd(var_33);
			var_230 = rnd(var_34);
			if ( var_71[var_1550][var_230] == var_201 && var_77[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_65[var_1550][var_230] == 0 ) {
				func536();
				break;
			}
		}
	}
	var_768 = 0;
	var_2418 = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ケンゾーはドラゴンに手を入れた！";
	var_294 = "周囲の危険が増えた気がする…";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	func331();
	return;
}
function func618(){
	var_240 = 0;
	var_2881 = var_673;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_2882 = rnd(2);
	if ( var_2882 == 0 ) {
		var_293 = "";
		var_294 = "全隊戦闘態勢ッ！";
	}
	if ( var_2882 == 1 ) {
		var_293 = "";
		var_294 = "狙えェェェェェェェ〜〜〜〜〜筒！";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<20; i++){
		func337();
	}
	var_83[var_2881][18] = 0;
	var_2883 = var_83[var_2881][1];
	var_2884 = var_83[var_2881][2];
	var_2546 = 1;
	var_1845 = 5;
	var_2519 = var_83[var_2881][10];
	var_2353 = var_673;
	for(var i=0; i<7; i++){
		func556();
	}
	var_673 = var_2353;
	var_1845 = 0;
	var_2546 = 0;
	func331();
	DSPLAY(199);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "形兆はﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ部隊を呼び出した！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func619(){
	if ( var_127 == 0 && var_132 == 0 && var_83[var_673][30] == 0 ) {
		if ( var_83[var_673][5] == 2 ) {
			var_199 = 8;
		}
		if ( var_83[var_673][5] == 8 ) {
			var_199 = 2;
		}
		if ( var_83[var_673][5] == 4 ) {
			var_199 = 6;
		}
		if ( var_83[var_673][5] == 6 ) {
			var_199 = 4;
		}
		if ( var_83[var_673][5] == 1 ) {
			var_199 = 9;
		}
		if ( var_83[var_673][5] == 3 ) {
			var_199 = 7;
		}
		if ( var_83[var_673][5] == 7 ) {
			var_199 = 3;
		}
		if ( var_83[var_673][5] == 9 ) {
			var_199 = 1;
		}
	}
	return;
}
function func620(func){
	if(!func){
		throw "";
	}
	funclist.push(func);
	if ( var_83[var_673][17] != 0 || var_83[var_673][23] != 0 ) {
		return funclist.pop()();
	}
	if ( var_437 == 4 ) {
		var_2830 = rnd(5);
		if ( var_2830 == 0 && var_219 == 0 && var_128 == 0 ) {
			DSPLAY(131);
			var_83[var_673][21] = 1;
			var_271 = 1;
			var_1286 = var_83[var_673][1] - var_66 + 4 * 40;
			var_1287 = var_83[var_673][2] - var_67 + 4 * 40 - 50;
			var_1309 = 1;
			for(var k=0; k<15; k++){
				if ( var_83[var_673][5] == 1 || var_83[var_673][5] == 2 || var_83[var_673][5] == 3 ) {
					var_411 = 1;
				}
				if ( var_83[var_673][5] == 7 || var_83[var_673][5] == 8 || var_83[var_673][5] == 9 ) {
					var_411 = 2;
				}
				if ( var_83[var_673][5] == 4 ) {
					var_411 = 3;
				}
				if ( var_83[var_673][5] == 6 ) {
					var_411 = 4;
				}
				var_1309 = var_1309 + 1;
				func337();
			}
			var_271 = 0;
			var_1309 = 0;
			var_83[var_673][21] = 0;
			func619();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			if ( var_120 == 0 ) {
				var_293 = "ﾃﾞｨｱﾎﾞﾛは眠ってしまった！";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				DSPLAY(132);
				var_219 = 1;
			}
			if ( var_120 == 1 ) {
				var_293 = "10時間熟睡した気分になっていて";
				var_294 = "眠くならなかった！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_219 = 0;
			}
			if ( var_156[351] == 1 ) {
				var_293 = "装備DISCの効果によって";
				var_294 = "眠くならなかった！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_219 = 0;
			}
			if ( var_410 == 400 || var_410 == 407 ) {
				var_293 = "装備DISCの効果によって";
				var_294 = "眠らずにすんだ！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_219 = 0;
			}
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 158 || var_437 == 45 ) {
		var_412 = var_673;
		if ( var_224 == 0 ) {
			return funclist.pop()();
		}
		var_2885 = rnd(4);
		if ( var_2885 != 0 ) {
			return funclist.pop()();
		}
		var_474 = 0;
		for(var j=0; j<100; j++){
			var_475 = rnd(var_224);
			var_475 = var_475 + 1;
			if ( var_233[var_475][0] >= 100 && var_233[var_475][0] < 400 && var_233[var_475][12] != 1 ) {
				var_474 = 1;
				break;
			}
		}
		if ( var_474 == 0 ) {
			return funclist.pop()();
		}
		var_232 = var_233[var_475][0];
		var_487 = var_233[var_475][13];
		func492();
		var_2886 = var_489;
		var_2887 = 0;
		if ( var_233[var_475][12] != 2 ) {
			if ( var_410 != 405 ) {
				var_233[var_475][12] = 1;
				var_233[var_475][14] = 1;
				func426();
				if ( var_553 == var_475 ) {
					var_896 = 1;
				}
				func427();
				if ( var_554 == var_475 ) {
					var_897 = 1;
				}
				func428();
				if ( var_555 == var_475 ) {
					var_898 = 1;
				}
			}
			if ( var_410 == 405 ) {
				func426();
				func427();
				func428();
				if ( var_553 != var_475 && var_554 != var_475 && var_555 != var_475 ) {
					var_233[var_475][12] = 1;
					var_233[var_475][14] = 1;
				}
				if ( var_553 == var_475 || var_554 == var_475 || var_555 == var_475 ) {
					var_2887 = 2;
				}
			}
		}
		if ( var_233[var_475][12] == 2 ) {
			var_2887 = 1;
		}
		func619();
		var_83[var_412][21] = 1;
		if ( var_83[var_412][5] == 2 ) {
			var_411 = 1;
		}
		if ( var_83[var_412][5] == 4 ) {
			var_411 = 2;
		}
		if ( var_83[var_412][5] == 8 ) {
			var_411 = 3;
		}
		if ( var_83[var_412][5] == 6 ) {
			var_411 = 4;
		}
		if ( var_83[var_412][5] == 1 ) {
			var_411 = 5;
		}
		if ( var_83[var_412][5] == 7 ) {
			var_411 = 6;
		}
		if ( var_83[var_412][5] == 3 ) {
			var_411 = 7;
		}
		if ( var_83[var_412][5] == 9 ) {
			var_411 = 8;
		}
		var_389 = 2;
		DSPLAY(220);
		for(var j=0; j<5; j++){
			var_2578 = 1;
			func337();
			var_2578 = 0;
			func337();
		}
		for(var j=0; j<5; j++){
			func337();
		}
		var_411 = 0;
		var_83[var_412][21] = 0;
		var_389 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_2886 + "が";
		var_294 = "呪われた！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		if ( var_2887 == 1 ) {
			func340();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "･･･と思ったが、";
			var_297 = "漆黒のオーラに守られて無事だった。";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
		if ( var_2887 == 2 ) {
			func340();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "･･･と思ったが、";
			var_297 = "装備DISCの効果によって呪いを防いだ！";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			func340();
			var_293 = var_296;
			var_294 = var_297;
			var_1073 = rnd(4);
			if ( var_1073 == 0 ) {
				var_296 = "君はもう「エコーズact2」の能力に";
				var_297 = "勝つことはできない！";
			}
			if ( var_1073 == 1 ) {
				var_296 = "「大嫌い」だ！";
				var_297 = "";
			}
			if ( var_1073 == 2 ) {
				var_296 = "言ったってわからないから";
				var_297 = "こんな目に遭ったんだよ！";
			}
			if ( var_1073 == 3 ) {
				var_296 = "僕を捕まえることはできない…！";
				var_297 = "";
			}
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 170 ) {
		if ( var_133 == 0 && var_127 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			DSPLAY(123);
			if ( var_128 >= 1 ) {
				func023();
			}
			func619();
			for(var k=0; k<10; k++){
				func337();
			}
			if ( var_156[396] == 0 ) {
				if ( var_157 == 0 ) {
					var_133 = 1;
					var_397 = 0;
				}
				if ( var_157 != 0 ) {
					var_157 = 0;
					var_158 = 0;
				}
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "動作がノロくなってしまった！";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			if ( var_156[396] == 1 ) {
				func340();
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかし装備スタンドの効果で";
				var_297 = "速度は遅くならない！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
			}
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 12 || var_437 == 145 || var_437 == 150 ) {
		var_2830 = rnd(3);
		if ( var_2830 == 0 && var_133 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			DSPLAY(122);
			if ( var_437 == 145 || var_437 == 150 ) {
				var_743 = 1;
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「エコーズ ３ FREEZE ！」";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			func340();
			var_743 = 0;
			if ( var_128 >= 1 ) {
				func023();
			}
			if ( var_156[396] == 0 ) {
				if ( var_157 == 0 ) {
					var_133 = 1;
					var_397 = 0;
				}
				if ( var_157 != 0 ) {
					var_157 = 0;
					var_158 = 0;
				}
			}
			func619();
			DSPLAY(162);
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "体が重くなってしまった！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			if ( var_156[396] == 1 ) {
				func340();
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかし装備スタンドの効果で";
				var_297 = "速度は遅くならない！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
			}
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 77 ) {
		var_2830 = rnd(5);
		if ( var_2830 == 0 && var_126 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			DSPLAY(149);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ドガ！」「バキ！」「ボ！」「ビシ！」";
			var_294 = "　　「ボ！」「ドヒュン！」「バキ！」";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			func340();
			if ( var_128 >= 1 ) {
				func023();
			}
			var_126 = 1;
			var_166 = 0;
			DSPLAY(134);
			func619();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "頭がおかしくなってしまった！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 132 ) {
		if ( var_146 >= 1 && var_147 == var_66 && var_148 == var_67 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_743 = 1;
			DSPLAY(121);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			func340();
			var_743 = 0;
			var_146 = 0;
			var_147 = 0;
			var_148 = 0;
			func619();
			var_389 = 2;
			var_1320 = 100;
			var_1319 = 155;
			DSPLAY(200);
			var_1316 = 1;
			var_271 = 1;
			for(var k=0; k<10; k++){
				func337();
				var_1316++;
			}
			var_1316 = 0;
			var_271 = 0;
			var_1906 = var_66;
			var_1907 = var_67;
			var_1908 = var_66;
			var_1909 = var_67;
			for(var k=0; k<5; k++){
				var_309 = var_66;
				var_310 = var_67;
				var_66 = var_1906;
				var_67 = var_1907;
				func405();
				var_66 = var_309;
				var_67 = var_310;
				if ( var_446 == 0 ) {
					break;
				}
				func724();
				var_77[var_448][var_450] = var_854;
				var_78[var_854][0] = 650;
				var_78[var_854][1] = var_448;
				var_78[var_854][2] = var_450;
				var_78[var_854][9] = var_71[var_448][var_450];
				var_78[var_854][10] = 1;
			}
			func018();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "鉄塔がカエルに変化した！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_389 = 0;
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 130 ) {
		if ( var_415 == 0 || var_169 <= 0 || var_169 == 999999 ) {
			var_2197 = 1;
			return funclist.pop()();
		}
		var_2888 = 500;
		if ( var_169 < 500 ) {
			var_2888 = var_169;
		}
		if ( var_415 < 500 ) {
			var_2888 = var_415;
		}
		if ( var_2888 > var_415 ) {
			var_2888 = var_415;
		}
		if ( var_169 < var_2888 ) {
			var_2888 = var_169;
		}
		var_169 = var_169 - var_2888;
		if ( var_169 <= 0 ) {
			var_169 = 0;
		}
		if ( var_169 == 0 ) {
			var_169 = 999999;
		}
		var_742 = 1;
		var_83[var_673][7] = 1;
		if ( var_128 >= 1 ) {
			func023();
		}
		func619();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_673][7] = 0;
		var_415 = var_415 - var_2888;
		if ( var_415 < 0 ) {
			var_415 = 0;
		}
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_2888 + " G奪われた！";
		var_294 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 999 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 && var_565 >= 1 ) {
			if ( var_128 >= 1 ) {
				func023();
			}
			func619();
			if ( var_83[var_673][5] == 2 ) {
				var_2889 = 8;
			}
			if ( var_83[var_673][5] == 8 ) {
				var_2889 = 2;
			}
			if ( var_83[var_673][5] == 4 ) {
				var_2889 = 6;
			}
			if ( var_83[var_673][5] == 6 ) {
				var_2889 = 4;
			}
			if ( var_83[var_673][5] == 7 ) {
				var_2889 = 3;
			}
			if ( var_83[var_673][5] == 9 ) {
				var_2889 = 1;
			}
			if ( var_83[var_673][5] == 1 ) {
				var_2889 = 9;
			}
			if ( var_83[var_673][5] == 3 ) {
				var_2889 = 7;
			}
			var_83[var_673][5] = var_2889;
			var_83[var_673][7] = 1;
			for(var k=0; k<10; k++){
				func337();
				var_742 = 1;
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "『プ…』";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			var_389 = 2;
			var_271 = 1;
			var_458 = 1;
			for(var k=0; k<10; k++){
				func337();
				var_458++;
				var_742 = 1;
			}
			var_271 = 0;
			var_458 = 0;
			var_389 = 0;
			var_742 = 0;
			for(var k=0; k<5; k++){
				func337();
			}
			var_565 = var_565 - 1;
			if ( var_565 <= 0 ) {
				var_565 = 0;
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "精神力が下がってしまった！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 9999 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 && var_134 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			if ( var_215 != 116 && var_125 == 0 ) {
				var_134 = 1;
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "オーバードライブ！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<9; k++){
				func337();
			}
			if ( var_215 == 116 || var_125 >= 1 ) {
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかし波紋に強くなっていて平気だった";
				var_297 = "";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
			}
			func619();
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 15 || var_437 == 64 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 && var_128 == 0 && var_219 == 0 ) {
			var_1359 = 0;
			if ( var_437 == 15 ) {
				var_1359 = 1;
			}
			var_314 = var_673;
			var_1360 = var_83[var_673][1];
			var_1361 = var_83[var_673][2];
			var_271 = 1;
			var_1358 = 1;
			DSPLAY(215);
			for(var k=0; k<20; k++){
				func337();
				var_1358 = var_1358 + 1;
			}
			var_1358 = 0;
			var_271 = 0;
			if ( var_173 == 1 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "冷やされる攻撃に強くなっていて";
				var_294 = "冷凍攻撃を防いだ！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<9; l++){
					func337();
				}
				var_2197 = 1;
				return;
			}
			if ( var_215 == 109 || var_410 == 404 || var_215 == 202 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "装備中のDISCの効果で";
				var_294 = "冷凍攻撃を防いだ！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<9; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			var_128 = 1;
			DSPLAY(126);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "体を凍らされてしまった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<9; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 17 ) {
		if ( var_83[var_673][3] == 2 ) {
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「コッチヲ見ロォ〜」";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_83[var_673][3] == 1 ) {
			var_2890 = var_673;
			func698();
			var_2197 = 1;
			return funclist.pop()();
		}
	}
	if ( var_437 == 18 ) {
		var_2830 = rnd(8);
		if ( var_2830 == 0 ) {
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「チャンスをやろう…";
			var_294 = "　向かうべき『２つの道』を……！」";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<15; k++){
				func337();
			}
			var_742 = 1;
			var_83[var_673][7] = 1;
			for(var k=0; k<3; k++){
				func337();
			}
			func619();
			DSPLAY(103);
			var_747 = 1;
			var_209 = 20;
			var_389 = 2;
			DSPLAY(111);
			for(var k=0; k<10; k++){
				func337();
			}
			var_2228 = 1;
			func531();
			if ( var_2228 == 0 ) {
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "" + var_418 + "に";
				var_297 = "新たな装備効果が発現した！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_198 = 1;
				var_300 = 0;
				func050();
			}
			if ( var_2228 == 1 ) {
				func340();
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "「この【魂】　選ばれるものでは…」";
				var_297 = "";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_198 = 1;
				var_300 = 0;
				func050();
				func340();
				var_2891 = Math.floor(var_211 / 2);
				var_211 = var_211 - var_2891;
				if ( var_211 <= 1 ) {
					var_211 = 1;
				}
				var_208 = var_208 + var_2891;
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "「なかった！」";
				var_297 = "";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_198 = 1;
				var_300 = 0;
				func050();
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "HPが半分になった。";
				var_297 = "";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				var_198 = 1;
				var_300 = 0;
				func050();
			}
			var_389 = 0;
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 20 ) {
		var_2830 = rnd(3);
		if ( var_2830 == 0 ) {
			DSPLAY(161);
			var_1163 = 1;
			for(var k=0; k<16; k++){
				func337();
			}
			var_1163 = 0;
			var_2521 = 1;
			var_1845 = 1;
			var_2353 = var_673;
			var_2471 = rnd(4);
			for(var k=0; k<var_2471 + 1; k++){
				func556();
			}
			var_673 = var_2353;
			var_2521 = 0;
			var_1845 = 0;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ｴﾝﾔ婆は 死体 を呼び寄せた！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			func331();
			for(var k=0; k<16; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 26 ) {
		var_412 = var_673;
		if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 || var_83[var_412][26] != 0 ) {
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_224 == 0 || var_97 > 90 || var_336 > 90 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾊｰｳﾞｪｽﾄは様子をうかがっている…";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		var_474 = 0;
		for(var j=0; j<20; j++){
			var_475 = rnd(var_224);
			var_475 = var_475 + 1;
			if ( var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475][11] == 0 ) {
				var_474 = 1;
				break;
			}
		}
		var_2885 = rnd(3);
		if ( var_2885 == 0 ) {
			var_474 = 0;
		}
		if ( var_474 == 0 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾊｰｳﾞｪｽﾄは様子をうかがっている…";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		DSPLAY(122);
		var_742 = 1;
		var_83[var_412][7] = 1;
		var_389 = 3;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_83[var_412][7] = 0;
		var_742 = 0;
		if ( var_156[362] == 1 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "装備DISCの効果で盗まれなかった。";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		var_83[var_412][15] = 1;
		var_83[var_412][14] = 0;
		var_83[var_412][26] = 1;
		var_232 = var_233[var_475][0];
		var_417 = var_232;
		var_1249 = var_233[var_475][13];
		var_487 = var_233[var_475][13];
		func492();
		var_418 = var_489;
		var_419 = var_412 + 200;
		var_78[var_419][0] = var_233[var_475][0];
		var_78[var_419][1] = var_233[var_475][1];
		var_78[var_419][2] = var_233[var_475][2];
		var_78[var_419][3] = var_233[var_475][3];
		var_78[var_419][4] = var_233[var_475][4];
		var_78[var_419][5] = var_233[var_475][5];
		var_78[var_419][6] = var_233[var_475][6];
		var_78[var_419][7] = var_233[var_475][7];
		var_78[var_419][8] = var_233[var_475][8];
		var_78[var_419][9] = var_233[var_475][9];
		var_78[var_419][10] = var_233[var_475][10];
		var_78[var_419][11] = var_233[var_475][11];
		var_78[var_419][12] = var_233[var_475][12];
		var_78[var_419][13] = var_233[var_475][13];
		var_78[var_419][14] = var_233[var_475][14];
		var_78[var_419][15] = var_233[var_475][15];
		var_78[var_419][16] = var_233[var_475][16];
		var_78[var_419][17] = var_233[var_475][17];
		var_78[var_419][18] = var_233[var_475][18];
		var_78[var_419][19] = var_233[var_475][19];
		var_78[var_419][20] = var_233[var_475][20];
		var_78[var_419][21] = var_233[var_475][21];
		var_78[var_419][22] = var_233[var_475][22];
		var_78[var_419][23] = var_233[var_475][23];
		var_78[var_419][24] = var_233[var_475][24];
		var_78[var_419][25] = var_233[var_475][25];
		var_78[var_419][26] = var_233[var_475][26];
		var_78[var_419][27] = var_233[var_475][27];
		var_78[var_419][28] = var_233[var_475][28];
		var_78[var_419][29] = var_233[var_475][29];
		var_225 = var_475;
		func433();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_418 + "を盗まれた！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		var_2695 = var_83[var_412][1];
		var_2696 = var_83[var_412][2];
		var_1349 = 0;
		if ( var_78[var_419][15] == 2 ) {
			var_78[var_419][15] = 0;
			var_83[var_412][11] = 1;
			var_271 = 1;
			var_1345 = 1;
			for(var k=0; k<14; k++){
				func337();
				var_1345 = var_1345 + 1;
				var_198 = 1;
				var_300 = 0;
			}
			var_271 = 0;
			var_1345 = 0;
			var_83[var_412][11] = 0;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "なんと" + var_418 + "は";
			var_294 = "爆弾だった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			var_455 = var_2695;
			var_456 = var_2696;
			var_83[var_412][8] = 1;
			func668();
			return funclist.pop()();
		}
		for(var j=0; j<500; j++){
			var_2350 = rnd(var_33);
			var_2351 = rnd(var_34);
			if ( var_65[var_2350][var_2351] == 0 && var_82[var_2350][var_2351] == 0 && var_71[var_2350][var_2351] != 13 && var_71[var_2350][var_2351] != 0 && var_71[var_2350][var_2351] != var_201 ) {
				var_1349 = 1;
				break;
			}
		}
		if ( var_1349 == 0 ) {
			var_83[var_412][11] = 1;
			var_271 = 1;
			var_1345 = 1;
			for(var k=0; k<14; k++){
				func337();
				var_1345 = var_1345 + 1;
			}
			var_271 = 0;
			var_1345 = 0;
			var_83[var_412][11] = 0;
			return funclist.pop()();
		}
		if ( var_1349 == 1 ) {
			var_83[var_412][11] = 1;
			var_271 = 1;
			var_1345 = 1;
			for(var k=0; k<20; k++){
				func337();
				var_1345 = var_1345 + 1;
				if ( var_1345 == 16 ) {
					DSPLAY(216);
				}
			}
			var_271 = 0;
			var_1345 = 0;
			var_83[var_412][1] = var_2350;
			var_83[var_412][2] = var_2351;
			var_82[var_2350][var_2351] = var_82[var_2695][var_2696];
			var_82[var_2695][var_2696] = 0;
			var_83[var_412][11] = 0;
			var_83[var_412][10] = var_71[var_2350][var_2351];
			func331();
		}
		return funclist.pop()();
	}
	if ( var_437 == 144 ) {
		var_412 = var_673;
		if ( var_415 < 10 ) {
			return funclist.pop()();
		}
		if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 || var_83[var_412][26] != 0 ) {
			return funclist.pop()();
		}
		var_2885 = rnd(4);
		DSPLAY(122);
		var_742 = 1;
		var_743 = 1;
		var_83[var_412][7] = 1;
		var_389 = 3;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_83[var_412][7] = 0;
		var_742 = 0;
		var_743 = 0;
		var_83[var_412][26] = 1;
		var_232 = 1;
		var_417 = var_232;
		var_416 = Math.floor(var_415 / 2);
		var_415 = var_415 - var_416;
		if ( var_415 < 0 ) {
			var_415 = 0;
		}
		var_418 = "" + var_416 + "G";
		var_419 = var_412 + 200;
		var_78[var_419][0] = 1;
		var_78[var_419][1] = 0;
		var_78[var_419][2] = 0;
		var_78[var_419][3] = 0;
		var_78[var_419][4] = 0;
		var_78[var_419][5] = 0;
		var_78[var_419][6] = 0;
		var_78[var_419][7] = 0;
		var_78[var_419][8] = 0;
		var_78[var_419][9] = 0;
		var_78[var_419][10] = 0;
		var_78[var_419][11] = 0;
		var_78[var_419][12] = 0;
		var_78[var_419][13] = var_416;
		var_78[var_419][14] = 0;
		var_78[var_419][15] = 0;
		var_78[var_419][16] = 0;
		var_78[var_419][17] = 0;
		var_78[var_419][18] = 0;
		var_78[var_419][19] = 0;
		var_78[var_419][20] = 0;
		var_78[var_419][21] = 0;
		var_78[var_419][22] = 0;
		var_78[var_419][23] = 0;
		var_78[var_419][24] = 0;
		var_78[var_419][25] = 0;
		var_78[var_419][26] = 0;
		var_78[var_419][27] = 0;
		var_78[var_419][28] = 0;
		var_78[var_419][29] = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "川尻浩作に";
		if ( var_127 == 1 || var_132 >= 1 ) {
			var_293 = "何者かに";
		}
		var_294 = "" + var_418 + "を盗まれた！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 87 ) {
		var_412 = var_673;
		if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 ) {
			return funclist.pop()();
		}
		if ( var_224 == 0 || var_97 > 90 || var_336 > 90 ) {
			return funclist.pop()();
		}
		var_474 = 0;
		for(var j=0; j<20; j++){
			var_475 = rnd(var_224);
			var_475 = var_475 + 1;
			if ( var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475][11] == 0 && var_233[var_475][0] != 641 ) {
				var_474 = 1;
				break;
			}
		}
		var_2885 = rnd(3);
		if ( var_2885 != 0 ) {
			var_474 = 0;
		}
		if ( var_474 == 0 ) {
			return funclist.pop()();
		}
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "くらってくたばれ";
		var_294 = "「怪焔王」の流法！！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<5; j++){
			func337();
		}
		var_742 = 1;
		var_83[var_412][7] = 1;
		var_83[var_412][21] = 1;
		var_411 = 1;
		func337();
		var_411 = 2;
		func337();
		var_411 = 3;
		DSPLAY(128);
		var_271 = 1;
		for(var j=0; j<6; j++){
			var_389 = 1;
			var_1305++;
			func337();
			var_389 = 3;
			var_1305++;
			func337();
		}
		var_411 = 0;
		var_83[var_412][21] = 0;
		var_271 = 0;
		var_1305 = 0;
		var_389 = 0;
		var_83[var_412][7] = 0;
		var_742 = 0;
		if ( var_173 == 1 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "燃やす攻撃に強くなっていて平気だった";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_215 == 109 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "装備DISCの効果で燃やされなかった";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		var_225 = var_475;
		if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 ) {
			var_455 = var_66;
			var_456 = var_67;
			var_448 = var_66;
			var_450 = var_67;
			var_1903 = 1;
			func414();
			var_1903 = 0;
		}
		var_232 = var_233[var_475][0];
		var_487 = var_233[var_475][13];
		func492();
		var_418 = var_489;
		for(var j=0; j<30; j++){
			var_233[var_475][j] = 0;
		}
		var_233[var_475][0] = 641;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_418 + "は";
		var_294 = "消し炭になった！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 157 ) {
		var_412 = var_673;
		if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 ) {
			return funclist.pop()();
		}
		if ( var_224 == 0 || var_97 > 90 || var_336 > 90 ) {
			return funclist.pop()();
		}
		var_474 = 0;
		for(var j=0; j<20; j++){
			var_475 = rnd(var_224);
			var_475 = var_475 + 1;
			if ( var_233[var_475][0] >= 800 && var_233[var_475][0] < 900 && var_233[var_475][11] == 0 ) {
				var_474 = 1;
				break;
			}
		}
		var_2885 = rnd(3);
		if ( var_2885 != 0 ) {
			var_474 = 0;
		}
		if ( var_474 == 0 ) {
			return funclist.pop()();
		}
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "いいもの持ってるな…";
		var_294 = "解体してやる！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
		DSPLAY(122);
		var_742 = 1;
		var_83[var_412][7] = 1;
		var_389 = 3;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_83[var_412][7] = 0;
		var_742 = 0;
		if ( var_156[119] ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "破壊されそうになったが";
			var_294 = "柔らかくしていて平気だった。";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		var_488 = var_233[var_225][0];
		func100();
		var_225 = var_475;
		if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 ) {
			var_455 = var_66;
			var_456 = var_67;
			var_448 = var_66;
			var_450 = var_67;
			var_1903 = 1;
			func414();
			var_1903 = 0;
		}
		var_232 = var_233[var_475][0];
		func492();
		var_418 = var_489;
		var_225 = var_475;
		func433();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_418 + "は";
		var_294 = "バラバラにされてしまった！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 131 ) {
		var_412 = var_673;
		if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 ) {
			return funclist.pop()();
		}
		if ( var_224 == 0 || var_97 > 90 || var_336 > 90 ) {
			return funclist.pop()();
		}
		var_474 = 0;
		for(var j=0; j<20; j++){
			var_475 = rnd(var_224);
			var_475 = var_475 + 1;
			if ( var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475][11] == 0 && var_233[var_475][0] != 650 && var_233[var_475][0] != 651 && var_233[var_475][0] != 653 && var_233[var_475][0] != 654 ) {
				var_474 = 1;
				break;
			}
		}
		var_2885 = rnd(5);
		if ( var_2885 != 0 ) {
			var_474 = 0;
		}
		if ( var_474 == 0 ) {
			return funclist.pop()();
		}
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「ゴールド・エクスペリエンス！」";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
		DSPLAY(121);
		var_742 = 1;
		var_83[var_412][7] = 1;
		var_743 = 1;
		var_389 = 3;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_389 = 3;
		func337();
		var_389 = 1;
		func337();
		var_83[var_412][7] = 0;
		var_742 = 0;
		var_743 = 0;
		if ( var_215 == 202 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの能力によって";
			var_294 = "生命が生まれるのを防いだ！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_156[360] == 1 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "装備DISCの効果で きかなかった";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		var_225 = var_475;
		if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 ) {
			var_455 = var_66;
			var_456 = var_67;
			var_448 = var_66;
			var_450 = var_67;
			var_1903 = 1;
			func414();
			var_1903 = 0;
		}
		var_232 = var_233[var_475][0];
		var_487 = var_233[var_475][13];
		func492();
		var_418 = var_489;
		for(var j=0; j<30; j++){
			var_233[var_475][j] = 0;
		}
		var_2892 = "";
		var_233[var_475][0] = 650;
		var_2892 = "ｶｴﾙ";
		DSPLAY(200);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_418 + "は";
		var_294 = "" + var_2892 + "に生まれ変わった！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		if ( var_128 >= 1 ) {
			func023();
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 27 ) {
		if ( var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2893 = rnd(4);
		if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
			var_2893 = 2;
		}
		if ( var_2893 == 1 && var_127 == 0 ) {
			DSPLAY(140);
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_389 = 2;
			var_199 = 2;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "目を切り裂かれた！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			var_271 = 1;
			var_1499 = 1;
			for(var k=0; k<10; k++){
				func337();
				var_1499++;
			}
			var_271 = 0;
			var_1499 = 0;
			var_83[var_673][7] = 0;
			for(var k=0; k<10; k++){
				func337();
			}
			var_389 = 0;
			var_127 = 1;
			var_167 = 0;
			func331();
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_2893 == 0 || var_114 >= 1 || var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		DSPLAY(136);
		var_742 = 1;
		var_83[var_673][7] = 1;
		var_463 = var_83[var_673][1];
		var_464 = var_83[var_673][2];
		var_114 = var_673;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ｹﾞﾌﾞ神に足をつかまれた！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_673][7] = 0;
		var_461 = var_66;
		var_462 = var_67;
		func619();
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 94 ) {
		if ( var_114 >= 1 || var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2893 = rnd(3);
		if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
			var_2893 = 1;
		}
		if ( var_2893 == 0 ) {
			return funclist.pop()();
		}
		DSPLAY(136);
		var_742 = 1;
		var_83[var_673][7] = 1;
		var_463 = var_83[var_673][1];
		var_464 = var_83[var_673][2];
		var_114 = var_673;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ブルりんにつかまった！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_673][7] = 0;
		var_461 = var_66;
		var_462 = var_67;
		func619();
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 160 ) {
		if ( var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		if ( var_114 == 0 ) {
			var_2893 = rnd(9);
			if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
				var_2893 = 6;
			}
			if ( var_2893 <= 5 ) {
				return funclist.pop()();
			}
			DSPLAY(136);
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_463 = var_83[var_673][1];
			var_464 = var_83[var_673][2];
			var_114 = var_673;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ｳｴｽﾄｳｯﾄﾞ看守「完全に【ロック】したぜ」";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_83[var_673][7] = 0;
			var_461 = var_66;
			var_462 = var_67;
			func619();
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_114 != 0 && var_114 == var_673 ) {
			var_601 = rnd(5);
			for(var k=0; k<12; k++){
				func337();
			}
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			if ( var_601 == 0 ) {
				var_293 = "「スカッとキレまくって　はらしてやる！！」";
				var_294 = "";
			}
			if ( var_601 == 1 ) {
				var_293 = "「カスのくせによォォ〜〜";
				var_294 = "　ええ！　ナメやがって　てめえ」";
			}
			if ( var_601 == 2 ) {
				var_293 = "「オレは最強だ！はらしてやる！」";
				var_294 = "";
			}
			if ( var_601 == 3 ) {
				var_293 = "「お前はもう戦闘不能なんだあああ」";
				var_294 = "";
			}
			if ( var_601 == 4 ) {
				var_293 = "「とどめが来たぞォ———ッ！」";
				var_294 = "";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			func340();
			var_601 = rnd(20);
			var_293 = var_296;
			var_294 = var_297;
			if ( var_601 == 0 ) {
				var_296 = "「ｱｰｽ･ｳｨﾝﾄﾞ･ｱﾝﾄﾞ･ﾌｧｲﾔｰ」！！";
				var_297 = "";
			}
			if ( var_601 >= 1 ) {
				var_296 = "「プラネット・ウェイブス」！！";
				var_297 = "";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			func050();
			func340();
			var_271 = 1;
			var_1440 = 1;
			var_1442 = rnd(2);
			if ( var_1442 == 0 ) {
				var_1427 = 0;
				var_1428 = 0;
			}
			if ( var_1442 == 1 ) {
				var_1427 = 320 - 40;
				var_1428 = 0;
			}
			DSPLAY(201);
			for(var k=0; k<7; k++){
				func337();
				if ( var_1442 == 0 ) {
					var_1427 = var_1427 + 20;
					var_1428 = var_1428 + 20;
				}
				if ( var_1442 == 1 ) {
					var_1427 = var_1427 - 20;
					var_1428 = var_1428 + 20;
				}
				var_1440 = var_1440 + 1;
			}
			var_271 = 0;
			var_1440 = 0;
			func584();
			if ( var_2803 == 1 ) {
				var_2197 = 1;
				return funclist.pop()();
			}
			var_389 = 2;
			var_209 = 50;
			DSPLAY(115);
			if ( var_83[var_673][39] >= 2 ) {
				var_209 = (var_83[var_673][39] - 1) * 2 + var_209;
			}
			if ( var_128 >= 1 ) {
				var_209 = Math.floor(var_209 * 3 / 2);
			}
			if ( var_128 >= 1 ) {
				func023();
			}
			if ( var_156[205] == 1 ) {
				var_209 = Math.floor(var_209 * 2 / 3);
			}
			if ( var_168 == 1 ) {
				var_209 = Math.floor(var_209 * 2 / 3);
			}
			var_747 = 1;
			var_389 = 2;
			var_211 = var_211 - var_209;
			var_208 = var_208 + var_209;
			if ( var_211 <= 0 ) {
				var_211 = 0;
				var_356 = 257;
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "隕石が直撃した！";
			var_294 = "" + var_209 + "のダメージを喰らった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<3; k++){
				var_585 = 3;
				func337();
				var_585 = 0;
				func337();
			}
			for(var k=0; k<5; k++){
				func337();
			}
			var_389 = 0;
			var_2197 = 1;
			return funclist.pop()();
		}
		return funclist.pop()();
	}
	if ( var_437 == 69 ) {
		if ( var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2893 = rnd(3);
		if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
			var_2893 = 1;
		}
		if ( var_2893 == 0 ) {
			return;
		}
		if ( var_114 == 0 ) {
			func619();
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_463 = var_83[var_673][1];
			var_464 = var_83[var_673][2];
			var_114 = var_673;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾌﾞﾗﾌｫｰﾄﾞに髪の毛で掴まれた！";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<3; k++){
				func337();
			}
			DSPLAY(136);
			var_1382 = 1;
			var_271 = 1;
			for(var k=0; k<10; k++){
				func337();
				var_1382++;
			}
			var_1382 = 0;
			var_271 = 0;
			var_83[var_673][7] = 0;
			var_461 = var_66;
			var_462 = var_67;
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_114 == var_673 ) {
			var_2893 = rnd(3);
			if ( var_2893 == 0 ) {
				return funclist.pop()();
			}
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "髪の毛から血を吸い取られている！";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			DSPLAY(123);
			var_389 = 2;
			for(var k=0; k<3; k++){
				var_1273 = 1;
				for(var l=0; l<2; l++){
					func337();
				}
				var_1273 = 2;
				for(var l=0; l<2; l++){
					func337();
				}
				var_1273 = 3;
				for(var l=0; l<2; l++){
					func337();
				}
				var_198 = 1;
				var_300 = 0;
			}
			var_1273 = 0;
			DSPLAY(129);
			var_293 = var_296;
			var_294 = var_297;
			if ( var_156[352] == 0 ) {
				var_296 = "満腹度が急激に下がった！";
				var_297 = "";
				DSPLAY(129);
				var_350 = var_350 - 20;
				if ( var_350 < 0 ) {
					var_350 = 0;
				}
			}
			if ( var_156[352] == 1 ) {
				var_296 = "しかし装備DISCの効果によって";
				var_297 = "腹ヘリを防いだ！";
			}
			func047();
			func050();
			for(var k=0; k<10; k++){
				func337();
			}
			var_389 = 0;
			var_2197 = 1;
			return funclist.pop()();
		}
		return funclist.pop()();
	}
	if ( var_437 == 1580 ) {
		var_2893 = rnd(3);
		if ( var_2893 == 0 || var_114 >= 1 || var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		func619();
		var_742 = 1;
		var_83[var_673][7] = 1;
		var_463 = var_83[var_673][1];
		var_464 = var_83[var_673][2];
		var_114 = var_673;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「絶対に逃がさないわッ！」";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<3; j++){
			func337();
		}
		DSPLAY(136);
		var_1382 = 1;
		var_271 = 1;
		for(var j=0; j<10; j++){
			func337();
			var_1382++;
		}
		var_1382 = 0;
		var_271 = 0;
		var_83[var_673][7] = 0;
		var_461 = var_66;
		var_462 = var_67;
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 119 ) {
		if ( var_114 >= 1 || var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2893 = rnd(3);
		if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
			var_2893 = 1;
		}
		if ( var_2893 == 0 ) {
			return funclist.pop()();
		}
		func619();
		var_742 = 1;
		var_743 = 1;
		var_83[var_673][7] = 1;
		var_463 = var_83[var_673][1];
		var_464 = var_83[var_673][2];
		var_114 = var_673;
		DSPLAY(127);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ハーミットパープルが絡みついた！";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<3; j++){
			func337();
		}
		DSPLAY(136);
		var_1381 = 1;
		var_271 = 1;
		for(var j=0; j<10; j++){
			func337();
			var_1381++;
		}
		var_1381 = 0;
		var_271 = 0;
		var_83[var_673][7] = 0;
		var_743 = 0;
		var_461 = var_66;
		var_462 = var_67;
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 78 ) {
		if ( var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2893 = rnd(4);
		if ( var_62 == 99 && var_83[var_673][16] == 1 ) {
			var_2893 = 0;
		}
		if ( var_2893 == 0 && var_114 == 0 ) {
			func619();
			DSPLAY(128);
			var_742 = 1;
			var_743 = 1;
			var_83[var_673][7] = 1;
			var_463 = var_83[var_673][1];
			var_464 = var_83[var_673][2];
			var_114 = var_673;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ムウン！";
			var_294 = "　レッド・バインド」！！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<3; k++){
				func337();
			}
			DSPLAY(136);
			var_1380 = 1;
			var_271 = 1;
			for(var k=0; k<10; k++){
				func337();
				var_1380++;
			}
			var_1380 = 0;
			var_271 = 0;
			var_83[var_673][7] = 0;
			var_743 = 0;
			if ( var_215 == 109 || var_173 == 1 ) {
				func340();
				var_114 = 0;
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "装備DISCの効果で平気だった";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<10; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			var_461 = var_66;
			var_462 = var_67;
			var_2473 = 0;
			var_2474 = 0;
			if ( var_357 != 0 && var_358 == 0 ) {
				func426();
				if ( var_233[var_553][4] != 0 ) {
					var_2474 = 1;
				}
			}
			if ( var_357 == 0 && var_358 != 0 ) {
				func427();
				if ( var_233[var_554][4] != 0 ) {
					var_2474 = 2;
				}
			}
			if ( var_357 != 0 && var_358 != 0 ) {
				func426();
				func427();
				if ( var_233[var_553][4] == 0 && var_233[var_554][4] == 0 ) {
					var_2474 = 0;
					var_2473 = 0;
				}
				if ( var_233[var_553][4] != 0 && var_233[var_554][4] == 0 ) {
					var_2474 = 1;
				}
				if ( var_233[var_553][4] == 0 && var_233[var_554][4] != 0 ) {
					var_2474 = 2;
				}
				if ( var_233[var_553][4] != 0 && var_233[var_554][4] != 0 ) {
					var_2475 = rnd(2);
					if ( var_2475 == 0 ) {
						var_2474 = 1;
					}
					if ( var_2475 == 1 ) {
						var_2474 = 2;
					}
				}
			}
			if ( var_357 == 0 && var_358 == 0 ) {
				var_2474 = 0;
				var_2473 = 0;
			}
			if ( var_211 <= 0 ) {
				var_2474 = 0;
				var_2473 = 0;
			}
			if ( var_2474 == 1 && var_233[var_553][12] == 2 ) {
				var_2474 = 0;
				var_2473 = 3;
			}
			if ( var_2474 == 2 && var_233[var_554][12] == 2 ) {
				var_2474 = 0;
				var_2473 = 3;
			}
			if ( var_2474 == 1 ) {
				func426();
				var_233[var_553][4] = var_233[var_553][4] - 1;
				var_580 = var_580 - 1;
				var_894 = var_894 - 1;
				var_2473 = 1;
				var_232 = var_357;
				var_487 = var_233[var_553][13];
				func492();
			}
			if ( var_2474 == 2 ) {
				func427();
				var_233[var_554][4] = var_233[var_554][4] - 1;
				var_581 = var_581 - 1;
				var_895 = var_895 - 1;
				var_2473 = 1;
				var_232 = var_358;
				var_487 = var_233[var_554][13];
				func492();
			}
			if ( var_2473 == 1 ) {
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "い・・・息が・・・";
				var_297 = "";
				func047();
				func050();
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "熱で呼吸が苦しくなると";
				var_297 = "スタンドは弱まってしまう！";
				func047();
				func050();
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "" + var_489 + "は";
				var_297 = "弱くなってしまった…";
				func047();
				func050();
				func340();
			}
			if ( var_2473 == 3 ) {
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "スタンドが弱まりそうになったが";
				var_297 = "漆黒のオーラに包まれていて無事だった";
				func047();
				func050();
				func340();
			}
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_2893 == 1 ) {
			var_412 = var_673;
			if ( var_83[var_412][17] != 0 || var_83[var_412][23] != 0 ) {
				return funclist.pop()();
			}
			if ( var_224 == 0 || var_97 > 90 || var_336 > 90 ) {
				return funclist.pop()();
			}
			var_474 = 0;
			for(var k=0; k<20; k++){
				var_475 = rnd(var_224);
				var_475 = var_475 + 1;
				if ( var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475][11] == 0 && var_233[var_475][0] != 641 ) {
					var_474 = 1;
					break;
				}
			}
			if ( var_474 == 0 ) {
				return funclist.pop()();
			}
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「消し炭にしてくれる！」";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<5; k++){
				func337();
			}
			func619();
			var_742 = 1;
			var_743 = 1;
			var_83[var_412][7] = 1;
			for(var k=0; k<3; k++){
				func337();
			}
			DSPLAY(128);
			var_271 = 1;
			for(var k=0; k<6; k++){
				var_389 = 2;
				var_1305++;
				func337();
				var_389 = 0;
				var_1305++;
				func337();
			}
			var_271 = 0;
			var_1305 = 0;
			var_742 = 0;
			var_743 = 0;
			var_83[var_412][7] = 0;
			var_389 = 0;
			if ( var_173 == 1 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "燃やす攻撃に強くなっていて平気だった";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<10; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			if ( var_215 == 109 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "装備DISCの効果で燃やされなかった";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<10; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			var_225 = var_475;
			if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 ) {
				var_455 = var_66;
				var_456 = var_67;
				var_448 = var_66;
				var_450 = var_67;
				var_1903 = 1;
				func414();
				var_1903 = 0;
			}
			var_232 = var_233[var_475][0];
			var_487 = var_233[var_475][13];
			func492();
			var_418 = var_489;
			for(var k=0; k<30; k++){
				var_233[var_475][k] = 0;
			}
			var_233[var_475][0] = 641;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "" + var_418 + "は";
			var_294 = "消し炭になった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			if ( var_128 >= 1 ) {
				func023();
			}
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		return funclist.pop()();
	}
	if ( var_437 == 137 ) {
		var_2830 = rnd(6);
		if ( var_2830 == 1 ) {
			if ( var_224 == 0 ) {
				return funclist.pop()();
			}
			var_474 = 0;
			for(var k=0; k<20; k++){
				var_475 = rnd(var_224);
				var_475 = var_475 + 1;
				if ( var_233[var_475][0] >= 500 && var_233[var_475][0] < 800 && var_233[var_475][15] == 0 ) {
					var_474 = 1;
					break;
				}
				if ( var_233[var_475][0] >= 900 && var_233[var_475][15] == 0 ) {
					var_474 = 1;
					break;
				}
			}
			if ( var_474 == 1 ) {
				var_742 = 1;
				var_83[var_673][7] = 1;
				var_743 = 1;
				for(var l=0; l<10; l++){
					func337();
				}
				var_743 = 0;
				var_742 = 0;
				var_83[var_673][7] = 0;
				var_233[var_475][15] = 2;
				DSPLAY(181);
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "何かが爆弾にされた！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func047();
				for(var l=0; l<15; l++){
					func337();
				}
				var_2197 = 1;
			}
		}
		if ( var_2830 == 0 && var_83[var_673][10] == var_201 && var_201 != 14 && var_201 != 13 && var_201 != 0 ) {
			var_1920 = 2;
			var_1914 = var_83[var_673][1];
			var_1915 = var_83[var_673][2];
			var_1845 = 3;
			var_2353 = var_673;
			func556();
			var_673 = var_2353;
			var_1920 = 0;
			var_1845 = 0;
			if ( var_2110 == 0 ) {
				return funclist.pop()();
			}
			var_2273 = var_97;
			var_83[var_2273][7] = 1;
			var_83[var_2273][5] = 3;
			func337();
			var_83[var_2273][5] = 6;
			func337();
			var_83[var_2273][5] = 9;
			func337();
			var_83[var_2273][5] = 8;
			func337();
			var_83[var_2273][5] = 7;
			func337();
			var_83[var_2273][5] = 4;
			func337();
			var_83[var_2273][5] = 1;
			func337();
			var_83[var_2273][5] = 2;
			func337();
			var_83[var_2273][7] = 0;
			func331();
			var_1073 = rnd(3);
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			if ( var_1073 == 0 ) {
				var_293 = "こォ〜〜ろォ〜〜すゥ〜〜っ！";
				var_294 = "";
			}
			if ( var_1073 == 1 ) {
				var_293 = "カワイイおまえを守ってやるよ…";
				var_294 = "";
			}
			if ( var_1073 == 2 ) {
				var_293 = "吉影や…";
				var_294 = "";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<15; k++){
				var_300 = 0;
				func337();
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "写真の親父が吉良を助けに来た！";
			var_297 = "";
			func047();
			func050();
			for(var k=0; k<15; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 28 ) {
		var_2830 = rnd(3);
		if ( var_2830 == 0 ) {
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "HAIL 2 U !!";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<16; k++){
				var_300 = 0;
				func337();
			}
			var_2524 = 1;
			var_1845 = 1;
			var_2353 = var_673;
			func556();
			var_673 = var_2353;
			var_2524 = 0;
			var_1845 = 0;
			if ( var_2110 == 0 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "お前の願いを言え！";
				var_297 = "";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				var_2197 = 1;
				return funclist.pop()();
			}
			DSPLAY(166);
			var_2273 = var_97;
			var_83[var_2273][21] = 1;
			var_411 = 1;
			for(var k=0; k<3; k++){
				var_300 = 0;
				func337();
			}
			var_411 = 2;
			for(var k=0; k<3; k++){
				var_300 = 0;
				func337();
			}
			var_411 = 3;
			for(var k=0; k<3; k++){
				var_300 = 0;
				func337();
			}
			var_411 = 4;
			for(var k=0; k<3; k++){
				var_300 = 0;
				func337();
			}
			var_411 = 0;
			var_83[var_2273][21] = 0;
			var_83[var_2273][5] = 2;
			func331();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "地面から 土人形 が現れた！";
			var_297 = "";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 65 ) {
		var_2830 = rnd(2);
		if ( var_2830 == 0 ) {
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_2882 = rnd(6);
			if ( var_2882 == 0 ) {
				var_293 = "全隊戦闘態勢ッ！";
				var_294 = "";
			}
			if ( var_2882 == 1 ) {
				var_293 = "お前を殺す決定には変わりはない…";
				var_294 = "";
			}
			if ( var_2882 == 2 ) {
				var_293 = "几帳面な性格でね———";
				var_294 = "必ずやると言ったらやる！";
			}
			if ( var_2882 == 3 ) {
				var_293 = "はたして無事でいられるかなあァ";
				var_294 = "———————ッ";
			}
			if ( var_2882 == 4 ) {
				var_293 = "予告どおりは気分がいい〜〜〜ッ";
				var_294 = "";
			}
			if ( var_2882 == 5 ) {
				var_293 = "キッカケを与えてやるよォ——ッ";
				var_294 = "";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			var_83[var_673][21] = 1;
			var_411 = 1;
			for(var k=0; k<16; k++){
				var_300 = 0;
				func337();
			}
			var_83[var_673][21] = 0;
			var_411 = 0;
			var_2534 = 1;
			var_1845 = 1;
			var_2353 = var_673;
			func556();
			var_673 = var_2353;
			var_2534 = 0;
			var_1845 = 0;
			if ( var_2110 == 0 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "攻撃開始イ—————ッ！";
				var_297 = "";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				var_2197 = 1;
				return funclist.pop()();
			}
			func331();
			func094();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "グリーンベレーッ！";
			var_297 = "やれッ！";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
		var_2197 = 1;
		return funclist.pop()();
	}
	if ( var_437 == 9999 ) {
		if ( var_128 != 0 || var_219 != 0 ) {
			return funclist.pop()();
		}
		var_2894 = 0;
		var_2895 = 0;
		var_2896 = var_673;
		if ( var_357 != 0 ) {
			func426();
			if ( var_233[var_553][4] != 0 ) {
				var_2895 = 1;
				var_2897 = var_553;
			}
		}
		if ( var_358 != 0 ) {
			func427();
			if ( var_233[var_554][4] != 0 ) {
				var_2895 = 2;
				var_2897 = var_554;
			}
		}
		if ( var_215 != 0 ) {
			func428();
			if ( var_233[var_555][4] != 0 ) {
				var_2895 = 4;
				var_2897 = var_555;
			}
		}
		if ( var_410 != 0 ) {
			var_2895 = 3;
		}
		if ( var_2895 >= 1 ) {
			if ( var_83[var_2896][5] == 2 ) {
				var_199 = 8;
			}
			if ( var_83[var_2896][5] == 8 ) {
				var_199 = 2;
			}
			if ( var_83[var_2896][5] == 4 ) {
				var_199 = 6;
			}
			if ( var_83[var_2896][5] == 6 ) {
				var_199 = 4;
			}
			if ( var_83[var_2896][5] == 1 ) {
				var_199 = 9;
			}
			if ( var_83[var_2896][5] == 3 ) {
				var_199 = 7;
			}
			if ( var_83[var_2896][5] == 7 ) {
				var_199 = 3;
			}
			if ( var_83[var_2896][5] == 9 ) {
				var_199 = 1;
			}
			var_83[var_2896][21] = 1;
			var_411 = 1;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_2898 = rnd(3);
			var_293 = "いくぞッ！";
			var_294 = "ジャアァ〜〜〜ン　ケン！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<3; k++){
				func337();
			}
			func340();
			var_2899 = rnd(6);
			if ( var_2899 == 0 ) {
				var_411 = 2;
				var_2894 = 2;
				var_1258 = 3;
			}
			if ( var_2899 == 1 ) {
				var_411 = 2;
				var_2894 = 1;
				var_1258 = 2;
			}
			if ( var_2899 == 2 ) {
				var_411 = 3;
				var_2894 = 2;
				var_1258 = 1;
			}
			if ( var_2899 == 3 ) {
				var_411 = 3;
				var_2894 = 1;
				var_1258 = 3;
			}
			if ( var_2899 == 4 ) {
				var_411 = 4;
				var_2894 = 2;
				var_1258 = 2;
			}
			if ( var_2899 == 5 ) {
				var_411 = 4;
				var_2894 = 1;
				var_1258 = 1;
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "";
			var_297 = "『ホイッ！！』";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			func050();
			for(var k=0; k<9; k++){
				func337();
			}
		}
		if ( var_2894 == 1 ) {
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "勝ったッ！";
			var_297 = "エネルギーをいただくよッ！";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			func050();
			for(var k=0; k<9; k++){
				func337();
			}
			var_1258 = 0;
			var_389 = 2;
			for(var k=0; k<3; k++){
				var_411 = 5;
				for(var l=0; l<2; l++){
					func337();
				}
				var_411 = 6;
				for(var l=0; l<2; l++){
					func337();
				}
				var_411 = 7;
				for(var l=0; l<2; l++){
					func337();
				}
			}
			var_411 = 8;
			for(var k=0; k<9; k++){
				func337();
			}
			var_83[var_2896][21] = 0;
			var_411 = 0;
			var_389 = 0;
			if ( var_2895 == 1 || var_2895 == 2 || var_2895 == 4 ) {
				if ( var_2895 == 1 ) {
					var_580 = var_580 - 1;
					var_894 = var_894 - 1;
				}
				if ( var_2895 == 2 ) {
					var_581 = var_581 - 1;
					var_895 = var_895 - 1;
				}
				var_233[var_2897][4] = var_233[var_2897][4] - 1;
				var_232 = var_233[var_2897][0];
				var_487 = var_233[var_2897][13];
				func492();
				var_2900 = var_489;
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "" + var_2900 + " の";
				var_297 = "エネルギーを １ 吸い取られた！";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				var_198 = 1;
				var_300 = 0;
				func047();
				func050();
				for(var l=0; l<9; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			if ( var_2895 == 3 ) {
				func429();
				var_2897 = var_556;
				var_2901 = rnd(5);
				var_2901 = var_2901 + 3;
				var_233[var_2897][3] = var_233[var_2897][3] - var_2901;
				var_232 = var_233[var_2897][0];
				var_487 = var_233[var_2897][13];
				func492();
				var_2900 = var_489;
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "" + var_2900 + " の";
				var_297 = "エネルギーを " + var_2901 + " 吸い取られた！";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				var_198 = 1;
				var_300 = 0;
				func047();
				func050();
				if ( var_233[var_2897][3] < 1 && var_233[var_2897][0] >= 400 && var_233[var_2897][0] < 500 ) {
					for(var m=0; m<20; m++){
						func337();
					}
					var_293 = var_296;
					var_294 = var_297;
					var_296 = "" + var_2900 + "は";
					var_297 = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
					var_25_1 = var_25[1];
					var_26_1 = var_26[1];
					var_27_1 = var_27[1];
					var_198 = 1;
					var_300 = 0;
					func047();
					func050();
					var_225 = var_2897;
					func433();
					var_479 = dim(40);
					var_250 = 0;
					var_410 = 0;
					func494();
				}
				for(var l=0; l<9; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
		}
		if ( var_2894 == 2 ) {
			var_83[var_2896][21] = 0;
			var_411 = 0;
			var_1258 = 0;
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "ま…　負け…　た";
			var_297 = "う〜〜〜う〜〜〜うう〜〜〜";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			func050();
			for(var k=0; k<9; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		if ( var_2895 == 0 ) {
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_2898 = rnd(3);
			if ( var_2898 == 0 ) {
				var_293 = "ジャンケンしようよぉ〜〜";
			}
			if ( var_2898 == 1 ) {
				var_293 = "ねえったら〜〜";
			}
			if ( var_2898 == 2 ) {
				var_293 = "ジャンケンがしたいんだよ…";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<9; k++){
				func337();
			}
			var_2197 = 1;
			return funclist.pop()();
		}
		return funclist.pop()();
	}
	if ( var_437 == 38 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 ) {
			DSPLAY(156);
			var_83[var_673][21] = 1;
			var_411 = 1;
			var_1495 = 1;
			var_271 = 1;
			var_389 = 2;
			for(var k=0; k<20; k++){
				func337();
				var_1495++;
			}
			var_83[var_673][21] = 0;
			var_411 = 0;
			var_1495 = 0;
			var_271 = 0;
			var_389 = 0;
			func619();
			if ( var_128 >= 1 ) {
				func023();
			}
			if ( var_156[207] == 1 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "しかし 装備中のDISCによって";
				var_294 = "若返りを防いだ！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func047();
				for(var l=0; l<9; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			if ( var_840 > 1 ) {
				var_840 = var_840 - 1;
				var_352 = var_352 - 3;
				var_211 = var_211 - 3;
				var_568 = var_948[var_840] - 1;
				if ( var_352 < 1 ) {
					var_352 = 1;
				}
				if ( var_211 < 1 ) {
					var_211 = 1;
				}
			}
			if ( var_840 == 1 ) {
				DSPLAY(151);
				var_211 = 0;
				var_356 = 213;
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "胎児にまで戻された！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func047();
				for(var l=0; l<20; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			DSPLAY(151);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "レベルが下がってしまった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<9; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 39 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 && var_350 >= 11 ) {
			var_83[var_673][21] = 1;
			if ( var_83[var_673][5] == 2 ) {
				var_411 = 1;
			}
			if ( var_83[var_673][5] == 4 ) {
				var_411 = 2;
			}
			if ( var_83[var_673][5] == 8 ) {
				var_411 = 3;
			}
			if ( var_83[var_673][5] == 6 ) {
				var_411 = 4;
			}
			if ( var_83[var_673][5] == 1 ) {
				var_411 = 5;
			}
			if ( var_83[var_673][5] == 7 ) {
				var_411 = 6;
			}
			if ( var_83[var_673][5] == 3 ) {
				var_411 = 7;
			}
			if ( var_83[var_673][5] == 9 ) {
				var_411 = 8;
			}
			var_389 = 2;
			var_271 = 1;
			var_1481 = 1;
			DSPLAY(161);
			for(var k=0; k<20; k++){
				func337();
				var_1481++;
			}
			var_271 = 0;
			var_1481 = 0;
			var_389 = 0;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			if ( var_156[352] == 0 ) {
				var_293 = "養分を吸われて満腹度が下がった！";
				var_294 = "";
				DSPLAY(129);
				var_350 = var_350 - 10;
				if ( var_350 < 0 ) {
					var_350 = 0;
				}
			}
			if ( var_156[352] == 1 ) {
				var_293 = "しかし装備DISCの効果によって";
				var_294 = "腹ヘリを防いだ！";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			if ( var_128 >= 1 ) {
				func023();
			}
			func619();
			for(var k=0; k<9; k++){
				func337();
			}
			var_83[var_673][21] = 0;
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 32 ) {
		var_2830 = rnd(6);
		if ( var_2830 == 0 ) {
			if ( var_224 == 0 ) {
				return funclist.pop()();
			}
			var_474 = 0;
			for(var k=0; k<20; k++){
				var_475 = rnd(var_224);
				var_475 = var_475 + 1;
				if ( var_233[var_475][0] >= 500 && var_233[var_475][0] < 800 && var_233[var_475][15] == 0 ) {
					var_474 = 1;
					break;
				}
				if ( var_233[var_475][0] >= 900 && var_233[var_475][15] == 0 ) {
					var_474 = 1;
					break;
				}
			}
			if ( var_474 == 1 ) {
				var_742 = 1;
				var_83[var_673][7] = 1;
				var_743 = 1;
				for(var l=0; l<10; l++){
					func337();
				}
				var_743 = 0;
				var_742 = 0;
				var_83[var_673][7] = 0;
				var_233[var_475][15] = 2;
				DSPLAY(181);
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "何かが爆弾にされた！";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func047();
				for(var l=0; l<15; l++){
					func337();
				}
				var_2197 = 1;
			}
		}
		if ( var_2830 == 1 ) {
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "誰にも私を追うことはできない…";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<16; k++){
				var_300 = 0;
				func337();
			}
			var_2523 = 1;
			var_1845 = 1;
			var_2353 = var_673;
			func556();
			var_2457 = var_673;
			var_673 = var_2353;
			var_2523 = 0;
			var_1845 = 0;
			if ( var_2110 == 0 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "君さえ消えていなくなってくれればね…";
				var_297 = "";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				var_2197 = 1;
				return funclist.pop()();
			}
			var_1584 = (var_83[var_2457][1] - var_66 + 4) * 40;
			var_1585 = (var_83[var_2457][2] - var_67 + 4) * 40;
			var_271 = 1;
			var_1583 = 1;
			DSPLAY(168);
			for(var k=0; k<10; k++){
				func337();
				var_198 = 1;
				var_300 = 0;
				var_1583++;
			}
			var_271 = 0;
			var_1583 = 0;
			func331();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "吉良はｼｱｰﾊｰﾄｱﾀｯｸを繰り出した！";
			var_297 = "";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 59 ) {
		var_412 = var_673;
		if ( var_83[var_412][26] == 1 ) {
			return funclist.pop()();
		}
		if ( var_357 == 0 && var_358 == 0 && var_215 == 0 ) {
			return funclist.pop()();
		}
		if ( var_72[var_66][var_67] != 0 ) {
			return funclist.pop()();
		}
		var_2830 = rnd(3);
		if ( var_2830 == 0 ) {
			var_742 = 1;
			var_83[var_412][7] = 1;
			var_83[var_412][21] = 1;
			var_2902 = 1;
			var_743 = 0;
			DSPLAY(122);
			for(var k=0; k<10; k++){
				if ( k == 0 || k == 1 || k == 9 ) {
					if ( var_83[var_412][5] == 2 ) {
						var_411 = 7;
					}
					if ( var_83[var_412][5] == 8 ) {
						var_411 = 6;
					}
					if ( var_83[var_412][5] == 4 ) {
						var_411 = 5;
					}
					if ( var_83[var_412][5] == 6 ) {
						var_411 = 7;
					}
					if ( var_83[var_412][5] == 1 ) {
						var_411 = 7;
					}
					if ( var_83[var_412][5] == 3 ) {
						var_411 = 1;
					}
					if ( var_83[var_412][5] == 7 ) {
						var_411 = 2;
					}
					if ( var_83[var_412][5] == 9 ) {
						var_411 = 4;
					}
				}
				if ( k == 2 || k == 3 || k == 8 ) {
					if ( var_83[var_412][5] == 2 ) {
						var_411 = 1;
					}
					if ( var_83[var_412][5] == 8 ) {
						var_411 = 3;
					}
					if ( var_83[var_412][5] == 4 ) {
						var_411 = 2;
					}
					if ( var_83[var_412][5] == 6 ) {
						var_411 = 4;
					}
					if ( var_83[var_412][5] == 1 ) {
						var_411 = 5;
					}
					if ( var_83[var_412][5] == 3 ) {
						var_411 = 7;
					}
					if ( var_83[var_412][5] == 7 ) {
						var_411 = 6;
					}
					if ( var_83[var_412][5] == 9 ) {
						var_411 = 9;
					}
				}
				if ( k == 4 || k == 5 || k == 6 || k == 7 ) {
					if ( var_83[var_412][5] == 2 ) {
						var_411 = 5;
					}
					if ( var_83[var_412][5] == 8 ) {
						var_411 = 8;
					}
					if ( var_83[var_412][5] == 4 ) {
						var_411 = 6;
					}
					if ( var_83[var_412][5] == 6 ) {
						var_411 = 8;
					}
					if ( var_83[var_412][5] == 1 ) {
						var_411 = 2;
					}
					if ( var_83[var_412][5] == 3 ) {
						var_411 = 4;
					}
					if ( var_83[var_412][5] == 7 ) {
						var_411 = 3;
					}
					if ( var_83[var_412][5] == 9 ) {
						var_411 = 3;
					}
				}
				func337();
			}
			var_743 = 0;
			var_742 = 0;
			var_83[var_412][7] = 0;
			var_83[var_412][21] = 0;
			var_411 = 0;
			var_2902 = 0;
			if ( var_128 >= 1 ) {
				func023();
			}
			if ( var_156[361] == 1 ) {
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				var_293 = "装備スタンドの効果のおかげで";
				var_294 = "DISCを抜き取られなかった。";
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func047();
				for(var l=0; l<10; l++){
					func337();
				}
				var_2197 = 1;
				return funclist.pop()();
			}
			if ( var_357 != 0 && var_358 != 0 && var_215 != 0 ) {
				var_2396 = rnd(3);
				if ( var_2396 == 0 ) {
					var_2397 = 0;
				}
				if ( var_2396 == 1 ) {
					var_2397 = 1;
				}
				if ( var_2396 == 2 ) {
					var_2397 = 2;
				}
			}
			if ( var_357 != 0 && var_358 != 0 && var_215 == 0 ) {
				var_2396 = rnd(2);
				if ( var_2396 == 0 ) {
					var_2397 = 0;
				}
				if ( var_2396 == 1 ) {
					var_2397 = 1;
				}
			}
			if ( var_357 != 0 && var_358 == 0 && var_215 != 0 ) {
				var_2396 = rnd(2);
				if ( var_2396 == 0 ) {
					var_2397 = 0;
				}
				if ( var_2396 == 1 ) {
					var_2397 = 2;
				}
			}
			if ( var_357 == 0 && var_358 != 0 && var_215 != 0 ) {
				var_2396 = rnd(2);
				if ( var_2396 == 0 ) {
					var_2397 = 1;
				}
				if ( var_2396 == 1 ) {
					var_2397 = 2;
				}
			}
			if ( var_357 != 0 && var_358 == 0 && var_215 == 0 ) {
				var_2397 = 0;
			}
			if ( var_357 == 0 && var_358 != 0 && var_215 == 0 ) {
				var_2397 = 1;
			}
			if ( var_357 == 0 && var_358 == 0 && var_215 != 0 ) {
				var_2397 = 2;
			}
			if ( var_2397 == 0 ) {
				func426();
				var_476 = dim(40);
				var_580 = var_580 - var_894;
				var_894 = 0;
				var_357 = 0;
				func494();
				var_232 = var_233[var_553][0];
				var_487 = var_233[var_553][13];
				var_475 = var_553;
				var_896 = 0;
			}
			if ( var_2397 == 1 ) {
				func427();
				var_477 = dim(40);
				var_581 = var_581 - var_895;
				var_895 = 0;
				var_358 = 0;
				func494();
				var_232 = var_233[var_554][0];
				var_487 = var_233[var_554][13];
				var_475 = var_554;
				var_897 = 0;
			}
			if ( var_2397 == 2 ) {
				func428();
				var_478 = dim(40);
				var_215 = 0;
				func494();
				var_232 = var_233[var_555][0];
				var_487 = var_233[var_555][13];
				var_475 = var_555;
				var_898 = 0;
			}
			var_83[var_412][26] = 1;
			var_232 = var_233[var_475][0];
			func106();
			func492();
			var_418 = var_489;
			var_419 = var_412 + 200;
			var_78[var_419][0] = var_233[var_475][0];
			var_78[var_419][1] = var_233[var_475][1];
			var_78[var_419][2] = var_233[var_475][2];
			var_78[var_419][3] = var_233[var_475][3];
			var_78[var_419][4] = var_233[var_475][4];
			var_78[var_419][5] = var_233[var_475][5];
			var_78[var_419][6] = var_233[var_475][6];
			var_78[var_419][7] = var_233[var_475][7];
			var_78[var_419][8] = var_233[var_475][8];
			var_78[var_419][9] = var_233[var_475][9];
			var_78[var_419][10] = var_233[var_475][10];
			var_78[var_419][11] = var_233[var_475][11];
			var_78[var_419][12] = var_233[var_475][12];
			var_78[var_419][13] = var_233[var_475][13];
			var_78[var_419][14] = var_233[var_475][14];
			var_78[var_419][15] = var_233[var_475][15];
			var_78[var_419][16] = var_233[var_475][16];
			var_78[var_419][17] = var_233[var_475][17];
			var_78[var_419][18] = var_233[var_475][18];
			var_78[var_419][19] = var_233[var_475][19];
			var_78[var_419][20] = var_233[var_475][20];
			var_78[var_419][21] = var_233[var_475][21];
			var_78[var_419][22] = var_233[var_475][22];
			var_78[var_419][23] = var_233[var_475][23];
			var_78[var_419][24] = var_233[var_475][24];
			var_78[var_419][25] = var_233[var_475][25];
			var_78[var_419][26] = var_233[var_475][26];
			var_78[var_419][27] = var_233[var_475][27];
			var_78[var_419][28] = var_233[var_475][28];
			var_78[var_419][29] = var_233[var_475][29];
			var_225 = var_475;
			func433();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "装備中の" + var_418 + "を";
			var_294 = "抜き取られてしまった！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			func619();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 63 ) {
		var_2830 = rnd(5);
		if ( var_566 <= 0 ) {
			return funclist.pop()();
		}
		if ( var_2830 == 0 || var_2830 == 1 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_742 = 1;
			var_83[var_673][7] = 1;
			var_743 = 1;
			var_389 = 2;
			DSPLAY(121);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "接触老化攻撃だ！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			func619();
			for(var k=0; k<10; k++){
				func337();
			}
			var_83[var_673][7] = 0;
			var_743 = 0;
			if ( var_128 >= 1 ) {
				func023();
			}
			func340();
			var_389 = 0;
		}
		if ( var_2830 == 0 || var_2830 == 1 ) {
			if ( var_156[207] == 1 ) {
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかし 装備中のDISCによって";
				var_297 = "老化攻撃を防いだ！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				var_2197 = 1;
				return funclist.pop()();
			}
			if ( var_215 == 202 || var_410 == 404 ) {
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかし 装備中のDISCによって";
				var_297 = "体が冷やされ 無事だった！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				var_2197 = 1;
				return funclist.pop()();
			}
		}
		if ( var_2830 == 0 ) {
			var_566 = var_566 - 1;
			if ( var_566 < 0 ) {
				var_566 = 0;
			}
			if ( var_565 > var_566 ) {
				var_565 = var_566;
			}
			DSPLAY(164);
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "精神力の最大値が １下がった！";
			var_297 = "";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			var_2197 = 1;
		}
		if ( var_2830 == 1 ) {
			DSPLAY(164);
			var_2903 = rnd(3);
			var_2903 = var_2903 + 3;
			var_352 = var_352 - var_2903;
			if ( var_352 < 1 ) {
				var_352 = 1;
				var_2903 = 0;
			}
			if ( var_211 > var_352 ) {
				var_211 = var_352;
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "最大HPが " + var_2903 + "下がった！";
			var_297 = "";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 127 ) {
		var_2830 = rnd(3);
		if ( var_2830 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			DSPLAY(147);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "C-MOONの裏返り攻撃！";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func047();
			for(var k=0; k<9; k++){
				func337();
			}
			func619();
			if ( var_215 != 120 ) {
				var_2904 = var_352 - var_211;
				var_211 = var_2904;
				if ( var_211 == 0 ) {
					var_211 = 1;
				}
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "体力が逆転してしまった！！";
				var_297 = "";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
			}
			if ( var_215 == 120 ) {
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "しかしメビウスの輪を作って";
				var_297 = "裏返り攻撃を防いだ！";
				var_25_1 = var_25[1];
				var_26_1 = var_26[1];
				var_27_1 = var_27[1];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	if ( var_437 == 80 ) {
		var_2830 = rnd(4);
		if ( var_2830 == 0 && var_126 == 0 ) {
			var_742 = 1;
			var_83[var_673][7] = 1;
			DSPLAY(161);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰは無重力を作り出した！";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			func340();
			if ( var_128 >= 1 ) {
				func023();
			}
			var_126 = 1;
			var_166 = 0;
			DSPLAY(134);
			func619();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "思うように動けなくなってしまった！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_2197 = 1;
		}
		return funclist.pop()();
	}
	return funclist.pop()();
}
function func621(){
	if ( var_1238 >= 1 ) {
		gmode(2);
		pos((var_83[var_314][1] - var_66 + 4) * 40, (var_83[var_314][2] - var_67 + 4) * 40 - 10);
		gcopy(3, 640, 360, 40, 40);
	}
	return;
}
function func622(){
	if ( var_92 == 1 || var_92 == 7 || var_92 == 16 || var_262 == 1 ) {
		return;
	}
	if ( var_347 >= 5 && var_348 >= 5 && var_347 <= var_33 && var_348 <= var_34 ) {
		var_71[var_347][var_348] = 14;
		var_303 = var_347;
		var_304 = var_348;
		var_305 = var_347 - 1;
		if ( var_305 < 0 ) {
			var_305 = 0;
		}
		var_306 = var_347 + 1;
		if ( var_306 > var_33 ) {
			var_306 = var_33;
		}
		var_307 = var_348 + 1;
		if ( var_307 > var_34 ) {
			var_307 = var_34;
		}
		var_308 = var_348 - 1;
		if ( var_308 < 0 ) {
			var_308 = 0;
		}
		if ( var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12 && var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12 ) {
			var_71[var_347][var_348] = var_71[var_305][var_304];
		}
		if ( var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12 && var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12 ) {
			var_71[var_347][var_348] = var_71[var_303][var_307];
		}
	}
	return;
}
function func623(){
	var_2905 = var_347;
	var_2906 = var_348;
	var_2907 = var_347 - 1;
	if ( var_2907 < 0 ) {
		var_2907 = 0;
	}
	var_2908 = var_347 + 1;
	if ( var_2908 > var_33 ) {
		var_2908 = var_33;
	}
	var_2909 = var_348 + 1;
	if ( var_2909 > var_33 ) {
		var_2909 = var_33;
	}
	var_2910 = var_348 - 1;
	if ( var_2910 < 0 ) {
		var_2910 = 0;
	}
	var_2911 = 0;
	if ( var_2911 == 0 && var_71[var_2907][var_2906] != 0 && var_71[var_2907][var_2906] != 13 && var_65[var_2907][var_2906] == 0 && var_82[var_2907][var_2906] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2906;
		var_2914 = var_71[var_2907][var_2906];
		var_1365 = 4;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2906] != 0 && var_71[var_2908][var_2906] != 13 && var_65[var_2908][var_2906] == 0 && var_82[var_2908][var_2906] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2906;
		var_2914 = var_71[var_2908][var_2906];
		var_1365 = 6;
	}
	if ( var_2911 == 0 && var_71[var_2905][var_2909] != 0 && var_71[var_2905][var_2909] != 13 && var_65[var_2905][var_2909] == 0 && var_82[var_2905][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2905;
		var_2913 = var_2909;
		var_2914 = var_71[var_2905][var_2909];
		var_1365 = 2;
	}
	if ( var_2911 == 0 && var_71[var_2905][var_2910] != 0 && var_71[var_2905][var_2910] != 13 && var_65[var_2905][var_2910] == 0 && var_82[var_2905][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2905;
		var_2913 = var_2910;
		var_2914 = var_71[var_2905][var_2910];
		var_1365 = 8;
	}
	if ( var_2911 == 0 && var_71[var_2907][var_2909] != 0 && var_71[var_2907][var_2909] != 13 && var_65[var_2907][var_2909] == 0 && var_82[var_2907][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2909;
		var_2914 = var_71[var_2907][var_2909];
		var_1365 = 1;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2909] != 0 && var_71[var_2908][var_2909] != 13 && var_65[var_2908][var_2909] == 0 && var_82[var_2908][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2909;
		var_2914 = var_71[var_2908][var_2909];
		var_1365 = 3;
	}
	if ( var_2911 == 0 && var_71[var_2907][var_2910] != 0 && var_71[var_2907][var_2910] != 13 && var_65[var_2907][var_2910] == 0 && var_82[var_2907][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2910;
		var_2914 = var_71[var_2907][var_2910];
		var_1365 = 7;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2910] != 0 && var_71[var_2908][var_2910] != 13 && var_65[var_2908][var_2910] == 0 && var_82[var_2908][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2910;
		var_2914 = var_71[var_2908][var_2910];
		var_1365 = 9;
	}
	if ( var_2911 == 1 ) {
		var_1366 = 0;
		var_1368 = 0;
		var_1367 = 5;
		var_1369 = var_2905 - var_66 + 4;
		var_1370 = var_2906 - var_67 + 4;
		var_271 = 1;
		var_1364 = 1;
		var_1371 = 1;
		DSPLAY(156);
		for(var j=0; j<8; j++){
			func337();
			var_1364++;
		}
		var_271 = 0;
		var_1364 = 0;
		var_440 = var_2912;
		var_441 = var_2913;
		var_2499 = var_2914;
		func556();
		var_1371 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_2915 = rnd(9);
		if ( var_2915 == 0 ) {
			var_293 = "マギ————ッ！";
			var_294 = "";
		}
		if ( var_2915 == 1 ) {
			var_293 = "やっぱりわたし！";
			var_294 = "わたし　わたし　わたし　わたし";
		}
		if ( var_2915 == 2 ) {
			var_293 = "ムギ———ッ！";
			var_294 = "";
		}
		if ( var_2915 == 3 ) {
			var_293 = "ハアァアアアアアア———";
			var_294 = "";
		}
		if ( var_2915 == 4 ) {
			var_293 = "まんまとだまされおったな";
			var_294 = "このバカタレがァーッ";
		}
		if ( var_2915 == 5 ) {
			var_293 = "ウジュル　　　　ウジュ";
			var_294 = "　　　　ウジュル";
		}
		if ( var_2915 == 6 ) {
			var_293 = "おしい！おしい！";
			var_294 = "その隣のわたしだったな";
		}
		if ( var_2915 == 7 ) {
			var_293 = "わたあああ〜〜〜〜〜〜しｨｨｨｨｨ";
			var_294 = "だよ〜〜〜〜〜〜〜〜〜〜〜オン！！";
		}
		if ( var_2915 == 8 ) {
			var_293 = "史上最弱が最も最も最も最も最も最も";
			var_294 = "最も最も最も最も最も最も　恐ろしィィ";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
	}
	var_673 = var_1912;
	return;
}
function func624(){
	var_2905 = var_347;
	var_2906 = var_348;
	var_2907 = var_347 - 1;
	if ( var_2907 < 0 ) {
		var_2907 = 0;
	}
	var_2908 = var_347 + 1;
	if ( var_2908 > var_33 ) {
		var_2908 = var_33;
	}
	var_2909 = var_348 + 1;
	if ( var_2909 > var_33 ) {
		var_2909 = var_33;
	}
	var_2910 = var_348 - 1;
	if ( var_2910 < 0 ) {
		var_2910 = 0;
	}
	var_2911 = 0;
	if ( var_2911 == 0 && var_71[var_2907][var_2906] != 0 && var_71[var_2907][var_2906] != 13 && var_65[var_2907][var_2906] == 0 && var_82[var_2907][var_2906] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2906;
		var_2914 = var_71[var_2907][var_2906];
		var_1365 = 4;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2906] != 0 && var_71[var_2908][var_2906] != 13 && var_65[var_2908][var_2906] == 0 && var_82[var_2908][var_2906] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2906;
		var_2914 = var_71[var_2908][var_2906];
		var_1365 = 6;
	}
	if ( var_2911 == 0 && var_71[var_2905][var_2909] != 0 && var_71[var_2905][var_2909] != 13 && var_65[var_2905][var_2909] == 0 && var_82[var_2905][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2905;
		var_2913 = var_2909;
		var_2914 = var_71[var_2905][var_2909];
		var_1365 = 2;
	}
	if ( var_2911 == 0 && var_71[var_2905][var_2910] != 0 && var_71[var_2905][var_2910] != 13 && var_65[var_2905][var_2910] == 0 && var_82[var_2905][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2905;
		var_2913 = var_2910;
		var_2914 = var_71[var_2905][var_2910];
		var_1365 = 8;
	}
	if ( var_2911 == 0 && var_71[var_2907][var_2909] != 0 && var_71[var_2907][var_2909] != 13 && var_65[var_2907][var_2909] == 0 && var_82[var_2907][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2909;
		var_2914 = var_71[var_2907][var_2909];
		var_1365 = 1;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2909] != 0 && var_71[var_2908][var_2909] != 13 && var_65[var_2908][var_2909] == 0 && var_82[var_2908][var_2909] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2909;
		var_2914 = var_71[var_2908][var_2909];
		var_1365 = 3;
	}
	if ( var_2911 == 0 && var_71[var_2907][var_2910] != 0 && var_71[var_2907][var_2910] != 13 && var_65[var_2907][var_2910] == 0 && var_82[var_2907][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2907;
		var_2913 = var_2910;
		var_2914 = var_71[var_2907][var_2910];
		var_1365 = 7;
	}
	if ( var_2911 == 0 && var_71[var_2908][var_2910] != 0 && var_71[var_2908][var_2910] != 13 && var_65[var_2908][var_2910] == 0 && var_82[var_2908][var_2910] == 0 ) {
		var_2911 = 1;
		var_2912 = var_2908;
		var_2913 = var_2910;
		var_2914 = var_71[var_2908][var_2910];
		var_1365 = 9;
	}
	if ( var_2911 == 1 ) {
		var_1366 = 0;
		var_1368 = 0;
		var_1367 = 2;
		var_1369 = var_2905 - var_66 + 4;
		var_1370 = var_2906 - var_67 + 4;
		var_271 = 1;
		var_1373 = 1;
		var_1371 = 1;
		DSPLAY(156);
		for(var j=0; j<8; j++){
			func337();
		}
		var_271 = 0;
		var_1373 = 0;
		var_440 = var_2912;
		var_441 = var_2913;
		var_2499 = var_2914;
		func556();
		var_1371 = 0;
		var_1374 = 0;
		for(var j=0; j<15; j++){
			func337();
		}
	}
	var_1371 = 0;
	var_1374 = 0;
	return;
}
function func625(){
	if ( var_2352 == 0 ) {
		var_2916 = rnd(7);
		if ( var_2916 == 0 ) {
			var_2355 = 5;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 51;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 52;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 73;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 71;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 69;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 66;
		}
	}
	if ( var_2352 == 1 ) {
		var_2916 = rnd(10);
		if ( var_2916 == 0 ) {
			var_2355 = 88;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 94;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 56;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 11;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 135;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 95;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 136;
		}
		if ( var_2916 == 7 ) {
			var_2355 = 87;
		}
		if ( var_2916 == 8 ) {
			var_2355 = 109;
		}
		if ( var_2916 == 9 ) {
			var_2355 = 110;
		}
		if ( var_2916 == 10 ) {
			var_2355 = 111;
		}
	}
	if ( var_2352 == 2 ) {
		var_2916 = rnd(20);
		if ( var_2916 == 0 ) {
			var_2355 = 2;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 3;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 6;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 7;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 9;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 155;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 4;
		}
		if ( var_2916 == 7 ) {
			var_2355 = 13;
		}
		if ( var_2916 == 8 ) {
			var_2355 = 119;
		}
		if ( var_2916 == 9 ) {
			var_2355 = 28;
		}
		if ( var_2916 == 10 ) {
			var_2355 = 122;
		}
		if ( var_2916 == 11 ) {
			var_2355 = 38;
		}
		if ( var_2916 == 12 ) {
			var_2355 = 46;
		}
		if ( var_2916 == 13 ) {
			var_2355 = 14;
		}
		if ( var_2916 == 14 ) {
			var_2355 = 46;
		}
		if ( var_2916 == 15 ) {
			var_2355 = 113;
		}
		if ( var_2916 == 16 ) {
			var_2355 = 15;
		}
		if ( var_2916 == 17 ) {
			var_2355 = 78;
		}
		if ( var_2916 == 18 ) {
			var_2355 = 121;
		}
		if ( var_2916 == 19 ) {
			var_2355 = 133;
		}
	}
	if ( var_2352 == 3 ) {
		var_2916 = rnd(18);
		if ( var_2916 == 0 ) {
			var_2355 = 79;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 128;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 77;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 39;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 26;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 76;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 12;
		}
		if ( var_2916 == 7 ) {
			var_2355 = 31;
		}
		if ( var_2916 == 8 ) {
			var_2355 = 115;
		}
		if ( var_2916 == 9 ) {
			var_2355 = 47;
		}
		if ( var_2916 == 10 ) {
			var_2355 = 17;
		}
		if ( var_2916 == 11 ) {
			var_2355 = 145;
		}
		if ( var_2916 == 12 ) {
			var_2355 = 35;
		}
		if ( var_2916 == 13 ) {
			var_2355 = 21;
		}
		if ( var_2916 == 14 ) {
			var_2355 = 147;
		}
		if ( var_2916 == 15 ) {
			var_2355 = 44;
		}
		if ( var_2916 == 16 ) {
			var_2355 = 150;
		}
		if ( var_2916 == 17 ) {
			var_2355 = 158;
		}
	}
	if ( var_2352 == 4 ) {
		var_2916 = rnd(16);
		if ( var_2916 == 0 ) {
			var_2355 = 1;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 131;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 29;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 48;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 62;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 10;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 63;
		}
		if ( var_2916 == 7 ) {
			var_2355 = 84;
		}
		if ( var_2916 == 8 ) {
			var_2355 = 43;
		}
		if ( var_2916 == 9 ) {
			var_2355 = 85;
		}
		if ( var_2916 == 10 ) {
			var_2355 = 18;
		}
		if ( var_2916 == 11 ) {
			var_2355 = 123;
		}
		if ( var_2916 == 12 ) {
			var_2355 = 64;
		}
		if ( var_2916 == 13 ) {
			var_2355 = 124;
		}
		if ( var_2916 == 14 ) {
			var_2355 = 152;
		}
		if ( var_2916 == 15 ) {
			var_2355 = 125;
		}
	}
	if ( var_2352 == 5 ) {
		var_2916 = rnd(15);
		if ( var_2916 == 0 ) {
			var_2355 = 141;
		}
		if ( var_2916 == 1 ) {
			var_2355 = 134;
		}
		if ( var_2916 == 2 ) {
			var_2355 = 99;
		}
		if ( var_2916 == 3 ) {
			var_2355 = 72;
		}
		if ( var_2916 == 4 ) {
			var_2355 = 59;
		}
		if ( var_2916 == 5 ) {
			var_2355 = 80;
		}
		if ( var_2916 == 6 ) {
			var_2355 = 160;
		}
		if ( var_2916 == 7 ) {
			var_2355 = 60;
		}
		if ( var_2916 == 8 ) {
			var_2355 = 98;
		}
		if ( var_2916 == 9 ) {
			var_2355 = 93;
		}
		if ( var_2916 == 10 ) {
			var_2355 = 148;
		}
		if ( var_2916 == 11 ) {
			var_2355 = 153;
		}
		if ( var_2916 == 12 ) {
			var_2355 = 156;
		}
		if ( var_2916 == 13 ) {
			var_2355 = 157;
		}
		if ( var_2916 == 14 ) {
			var_2355 = 154;
		}
	}
	if ( var_2352 == 6 ) {
		var_2355 = 166;
	}
	return;
}
function func626(){
	var_891 = "";
	var_967 = 0;
	var_968 = 0;
	var_954 = 0;
	var_438 = 0;
	var_1637 = 0;
	var_1654 = 100;
	var_972 = 0;
	var_1655 = "";
	var_1656 = "";
	var_1657 = "";
	var_1658 = "";
	var_1619 = 0;
	if ( var_437 == 79 ) {
		var_891 = "ｴｺｰｽﾞの卵";
		var_967 = 0;
		var_968 = 0;
		var_954 = 2;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 414;
		var_1655 = "・動かないぞ。";
		var_1656 = "・攻撃してこないぞ。";
		var_1657 = "・倒すと成長することがあるぞ。";
		var_1658 = "・模様の違う卵には要注意だ。";
	}
	if ( var_437 == 1 ) {
		var_891 = "ﾔｸ中のｺﾞﾛﾂｷ";
		var_967 = 3;
		var_968 = 1;
		var_954 = 3;
		var_438 = 4;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 528;
		var_1655 = "・フラフラと歩くぞ。";
		var_1656 = "・必ず「ｵﾚｯちのｺｰﾄ」を落とすぞ。";
		var_1657 = "・ｺｰﾄを持っていると向かってくるぞ。";
		var_1658 = "・ｺｰﾄが落ちているとそこへ向かうぞ。";
	}
	if ( var_437 == 5 ) {
		var_891 = "小汚い浮浪者";
		var_967 = 2;
		var_968 = 2;
		var_954 = 3;
		var_438 = 5;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 105;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "・衛生観念のない虫けら同然の浮浪者だ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 88 ) {
		var_891 = "ﾄﾞﾉｳﾞｧﾝ";
		var_967 = 3;
		var_968 = 2;
		var_954 = 4;
		var_438 = 6;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 206;
		var_1655 = "・ヒラヒラと舞って攻撃が当たりにくいぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 147 ) {
		var_891 = "ｼﾞｮｾﾌ";
		var_967 = 1;
		var_968 = 2;
		var_954 = 3;
		var_438 = 6;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 438;
		var_1655 = "・フラフラと歩くぞ。";
		var_1656 = "・攻撃してこないぞ。";
		var_1657 = "・多分ボケちゃっているぞ。";
		var_1658 = "";
	}
	if ( var_437 == 2 ) {
		var_891 = "ヌケサク";
		var_967 = 4;
		var_968 = 3;
		var_954 = 5;
		var_438 = 7;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 363;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 93 ) {
		var_891 = "ｴﾝﾎﾟﾘｵ";
		var_967 = 5;
		var_968 = 4;
		var_954 = 7;
		var_438 = 7;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 604;
		var_1655 = "・幽霊の弾丸を撃ってくるぞ。";
		var_1656 = "・特別なスタンドを扱えそうだ…";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 3 ) {
		var_891 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
		var_967 = 6;
		var_968 = 5;
		var_954 = 8;
		var_438 = 9;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 311;
		var_1655 = "・近い場所に瞬間移動することがあるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 94 ) {
		var_891 = "ブルりん";
		var_967 = 8;
		var_968 = 6;
		var_954 = 15;
		var_438 = 13;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 203;
		var_1655 = "・掴まえて動けなくしてくるぞ。";
		var_1656 = "・「たのもしいわ！あたしのブルりん！」";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 77 ) {
		var_891 = "ｴｺｰｽﾞACT1";
		var_967 = 7;
		var_968 = 5;
		var_954 = 13;
		var_438 = 12;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 415;
		var_1655 = "・音を貼り付けて混乱させてくるぞ。";
		var_1656 = "・倒すと成長することがあるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 51 ) {
		var_891 = "ﾜﾝﾁｪﾝ";
		var_967 = 8;
		var_968 = 6;
		var_954 = 20;
		var_438 = 14;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 107;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 7 ) {
		var_891 = "運命の車輪";
		var_967 = 8;
		var_968 = 7;
		var_954 = 36;
		var_438 = 18;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 316;
		var_1655 = "・ガソリンの弾丸を撃ってくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 9 ) {
		var_891 = "ﾗﾊﾞｰｿｳﾙ";
		var_967 = 8;
		var_968 = 8;
		var_954 = 40;
		var_438 = 17;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 314;
		var_1655 = "・殴ると肉片が貼り付いてしまうことがあるぞ。";
		var_1656 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 39 ) {
		var_891 = "ﾊｲｳｪｲｽﾀｰ";
		var_967 = 7;
		var_968 = 5;
		var_954 = 48;
		var_438 = 14;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 8;
		var_1619 = 445;
		var_1655 = "・倍の速さで移動するぞ。";
		var_1656 = "・養分を吸い取って満腹度を下げてくるぞ。";
		var_1657 = "・特別なアイテムを持っていることがあるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 26 ) {
		var_891 = "ﾊｰｳﾞｪｽﾄ";
		var_967 = 12;
		var_968 = 8;
		var_954 = 30;
		var_438 = 12;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 8;
		var_1619 = 441;
		var_1655 = "・アイテムを盗んで逃げるぞ。";
		var_1656 = "・落ちているアイテムも拾って逃げるぞ。";
		var_1657 = "・盗んだ後は倍の速さで移動するぞ。";
		var_1658 = "";
	}
	if ( var_437 == 76 ) {
		var_891 = "ｴｺｰｽﾞACT2";
		var_967 = 9;
		var_968 = 6;
		var_954 = 46;
		var_438 = 19;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 417;
		var_1655 = "・文字を投げつけて攻撃してくるぞ。";
		var_1656 = "・地面に文字の罠を貼り付けるぞ。";
		var_1657 = "・倒すと成長することがあるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 6 ) {
		var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
		var_967 = 9;
		var_968 = 7;
		var_954 = 45;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 0;
		var_1619 = 312;
		var_1655 = "・攻撃を受けると恨みで攻撃力が上がるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 165 ) {
		var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
		var_967 = 9;
		var_968 = 40;
		var_954 = 5;
		var_438 = 5;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 3;
		var_1619 = 313;
		var_1655 = "・他の敵に乗り移ってレベルを上げるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 52 ) {
		var_891 = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
		var_967 = 12;
		var_968 = 5;
		var_954 = 60;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 108;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 73 ) {
		var_891 = "ﾀﾞｲｱｰさん";
		var_967 = 10;
		var_968 = 6;
		var_954 = 52;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 111;
		var_1655 = "・倒すと首だけになって残るぞ。";
		var_1656 = "・首に触れると波紋のバラを飛ばしてくるぞ。";
		var_1657 = "・凍った状態になると弱いぞ。";
		var_1658 = "";
	}
	if ( var_437 == 101 ) {
		var_891 = "ﾍﾟｲｼﾞ";
		var_967 = 10;
		var_968 = 5;
		var_954 = 50;
		var_438 = 16;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 113;
		var_1655 = "・常に４人組で行動するぞ。";
		var_1656 = "・必ず眠っているぞ。";
		var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
		var_1658 = "・倍の速さで移動するぞ。";
	}
	if ( var_437 == 102 ) {
		var_891 = "ｼﾞｮｰﾝｽﾞ";
		var_967 = 10;
		var_968 = 5;
		var_954 = 50;
		var_438 = 16;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 114;
		var_1655 = "・常に４人組で行動するぞ。";
		var_1656 = "・必ず眠っているぞ。";
		var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
		var_1658 = "・倍の速さで移動するぞ。";
	}
	if ( var_437 == 103 ) {
		var_891 = "ﾌﾟﾗﾝﾄ";
		var_967 = 10;
		var_968 = 5;
		var_954 = 50;
		var_438 = 16;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 115;
		var_1655 = "・常に４人組で行動するぞ。";
		var_1656 = "・必ず眠っているぞ。";
		var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
		var_1658 = "・倍の速さで移動するぞ。";
	}
	if ( var_437 == 104 ) {
		var_891 = "ﾎﾞｰﾝﾅﾑ";
		var_967 = 10;
		var_968 = 5;
		var_954 = 50;
		var_438 = 16;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 116;
		var_1655 = "・常に４人組で行動するぞ。";
		var_1656 = "・必ず眠っているぞ。";
		var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
		var_1658 = "・倍の速さで移動するぞ。";
	}
	if ( var_437 == 141 ) {
		var_891 = "F・F";
		var_967 = 11;
		var_968 = 6;
		var_954 = 72;
		var_438 = 18;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 603;
		var_1655 = "・ＦＦの弾丸を撃ってくるぞ。";
		var_1656 = "・弾丸が他の敵に当たると体力が回復するぞ。";
		var_1657 = "・熱湯に弱いぞ。";
		var_1658 = "";
	}
	if ( var_437 == 134 ) {
		var_891 = "ｼﾞｮﾘｰﾝ";
		var_967 = 13;
		var_968 = 7;
		var_954 = 88;
		var_438 = 25;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 601;
		var_1655 = "・近くに怪我をした敵がいると治しに行くぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 4 ) {
		var_891 = "ﾃﾞｽ･13";
		var_967 = 11;
		var_968 = 6;
		var_954 = 95;
		var_438 = 21;
		var_1637 = 0;
		var_1654 = 8;
		var_972 = 3;
		var_1619 = 325;
		var_1655 = "・時々眠らせてくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 13 ) {
		var_891 = "ﾗﾊﾞｰｽﾞ";
		var_967 = 10;
		var_968 = 8;
		var_954 = 75;
		var_438 = 18;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 322;
		var_1655 = "・攻撃すると分裂して増えることがあるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 119 ) {
		var_891 = "ｼﾞｮｾﾌ";
		var_967 = 9;
		var_968 = 3;
		var_954 = 90;
		var_438 = 28;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 302;
		var_1655 = "・スタンドで縛り付けて動けなくさせるぞ。";
		var_1656 = "・攻撃されると波紋で痺れることがあるぞ。";
		var_1657 = "・老化攻撃を受けると弱くなってしまうぞ。";
		var_1658 = "";
	}
	if ( var_437 == 99 ) {
		var_891 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
		var_967 = 12;
		var_968 = 6;
		var_954 = 85;
		var_438 = 18;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 607;
		var_1655 = "・フワフワと動いているぞ。";
		var_1656 = "・気流に舞って攻撃が当たりにくいぞ。";
		var_1657 = "・近くにいると弾丸を撃ってくるぞ。";
		var_1658 = "・この弾丸は防御力の影響を受けないぞ。";
	}
	if ( var_437 == 138 ) {
		var_891 = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
		var_967 = 13;
		var_968 = 8;
		var_954 = 100;
		var_438 = 25;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 102;
		var_1655 = "・殴ると凍ってしまうことがあるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 71 ) {
		var_891 = "ﾄﾞｩｰﾋﾞｰ";
		var_967 = 14;
		var_968 = 9;
		var_954 = 130;
		var_438 = 34;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 112;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 12 ) {
		var_891 = "ｴｺｰｽﾞACT3";
		var_967 = 11;
		var_968 = 7;
		var_954 = 100;
		var_438 = 25;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 419;
		var_1655 = "・体を重くして鈍足にしてくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 20 ) {
		var_891 = "ｴﾝﾔ婆";
		var_967 = 11;
		var_968 = 5;
		var_954 = 200;
		var_438 = 80;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 1;
		var_1619 = 317;
		var_1655 = "・倍の速さで動いているぞ。";
		var_1656 = "・動く死体を呼び出すことがあるぞ。";
		var_1657 = "・ダンジョンの主だぞ。";
		var_1658 = "";
	}
	if ( var_437 == 24 ) {
		var_891 = "穴ﾎﾞｺﾁｰｽﾞの死体";
		var_967 = 8;
		var_968 = 4;
		var_954 = 40;
		var_438 = 13;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 319;
		var_1655 = "・エンヤ婆に操られている死体だ。";
		var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 25 ) {
		var_891 = "子連れﾆｷﾋﾞの死体";
		var_967 = 8;
		var_968 = 4;
		var_954 = 40;
		var_438 = 13;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 320;
		var_1655 = "・エンヤ婆に操られている死体だ。";
		var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 8 ) {
		var_891 = "無愛想親父の死体";
		var_967 = 8;
		var_968 = 4;
		var_954 = 40;
		var_438 = 13;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 318;
		var_1655 = "・エンヤ婆に操られている死体だ。";
		var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 56 ) {
		var_891 = "ｼｭﾄﾛﾊｲﾑ";
		var_967 = 13;
		var_968 = 10;
		var_954 = 110;
		var_438 = 23;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 204;
		var_1655 = "・マシンガンを撃ってくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 28 ) {
		var_891 = "ｼﾞｬｯｼﾞﾒﾝﾄ";
		var_967 = 15;
		var_968 = 12;
		var_954 = 150;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 326;
		var_1655 = "・土人形を作り出すことがあるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 22 ) {
		var_891 = "ｱｳﾞﾄﾞｩﾙ人形";
		var_967 = 11;
		var_968 = 1;
		var_954 = 50;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 0;
		var_1619 = 327;
		var_1655 = "・ジャッジメントに作られた土人形だ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 31 ) {
		var_891 = "吉良の親父";
		var_967 = 13;
		var_968 = 9;
		var_954 = 95;
		var_438 = 22;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 444;
		var_1655 = "・フワフワと動いているぞ。";
		var_1656 = "・親父がいる部屋は写真の中だ。";
		var_1657 = "　倒さないと出られないぞ。";
		var_1658 = "・弓矢を落とすことがあるぞ。";
	}
	if ( var_437 == 140 ) {
		var_891 = "ｼﾞｮﾅｻﾝ";
		var_967 = 15;
		var_968 = 11;
		var_954 = 120;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 101;
		var_1655 = "・攻撃時に波紋で痺れさせることがあるぞ。";
		var_1656 = "・ズームパンチで２マス先まで攻撃するぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 148 ) {
		var_891 = "ｴﾙﾒｪｽ";
		var_967 = 12;
		var_968 = 10;
		var_954 = 110;
		var_438 = 27;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 602;
		var_1655 = "・地面にキッスのシールを貼るぞ。";
		var_1656 = "・他の敵がシールに触れると分裂するぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 131 ) {
		var_891 = "ｼﾞｮﾙﾉ";
		var_967 = 14;
		var_968 = 14;
		var_954 = 135;
		var_438 = 25;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 501;
		var_1655 = "・アイテムをカエルに変化させるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 115 ) {
		var_891 = "ｱｸｱ･ﾈｯｸﾚｽ";
		var_967 = 14;
		var_968 = 13;
		var_954 = 120;
		var_438 = 26;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 404;
		var_1655 = "・霧になって他の場所へ瞬間移動するぞ。";
		var_1656 = "・念写に写りこんでしまう事があるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 11 ) {
		var_891 = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
		var_967 = 16;
		var_968 = 15;
		var_954 = 150;
		var_438 = 38;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 212;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 45 ) {
		var_891 = "由花子";
		var_967 = 12;
		var_968 = 13;
		var_954 = 142;
		var_438 = 32;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 433;
		var_1655 = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 29 ) {
		var_891 = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
		var_967 = 15;
		var_968 = 5;
		var_954 = 165;
		var_438 = 80;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 525;
		var_1655 = "・同じ部屋にいると階段を降りられないぞ";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 47 ) {
		var_891 = "億泰";
		var_967 = 17;
		var_968 = 14;
		var_954 = 170;
		var_438 = 36;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 405;
		var_1655 = "・ガオンと近くに引き寄せてくるぞ。";
		var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 27 ) {
		var_891 = "ｹﾞﾌﾞ神";
		var_967 = 16;
		var_968 = 13;
		var_954 = 195;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 342;
		var_1655 = "・地面に潜って他の場所に移動するぞ。";
		var_1656 = "・足を掴んで移動できなくさせるぞ。";
		var_1657 = "・目を切り裂いて盲目にしてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 136 ) {
		var_891 = "ｼｰｻﾞｰ";
		var_967 = 15;
		var_968 = 12;
		var_954 = 180;
		var_438 = 42;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 207;
		var_1655 = "・波紋を帯びたシャボンを発射してくるぞ。";
		var_1656 = "・あたると痺れることがあるぞ。";
		var_1657 = "・攻撃されても波紋で痺れることがあるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 38 ) {
		var_891 = "ｱﾚｯｼｰ";
		var_967 = 18;
		var_968 = 12;
		var_954 = 220;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 348;
		var_1655 = "・若返り攻撃でレベルを下げてくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 48 ) {
		var_891 = "ｴｱﾛｽﾐｽ";
		var_967 = 15;
		var_968 = 12;
		var_954 = 200;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 10;
		var_1619 = 507;
		var_1655 = "・弾丸を発射してくるぞ。";
		var_1656 = "・どこからでも位置を察して飛んでくるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 78 ) {
		var_891 = "ｱｳﾞﾄﾞｩﾙさん";
		var_967 = 19;
		var_968 = 13;
		var_954 = 230;
		var_438 = 50;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 303;
		var_1655 = "・レッドバインドで縛り付けてくるぞ。";
		var_1656 = "・喰らうとスタンドが弱くなってしまうぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 62 ) {
		var_891 = "ﾍﾞｲﾋﾞｨﾌｪｲｽ";
		var_967 = 18;
		var_968 = 16;
		var_954 = 245;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 3;
		var_1619 = 516;
		var_1655 = "・アイテムに化けているぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 17 ) {
		var_891 = "ｼｱｰﾊｰﾄｱﾀｯｸ";
		var_967 = 14;
		var_968 = 40;
		var_954 = 300;
		var_438 = 5;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 443;
		var_1655 = "・体力が少なくなると爆発するぞ。";
		var_1656 = "・自分が爆発に巻き込まれると誘爆するぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 46 ) {
		var_891 = "ﾎﾙ･ﾎｰｽ";
		var_967 = 15;
		var_968 = 16;
		var_954 = 262;
		var_438 = 42;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 315;
		var_1655 = "・付かず離れず距離をとってくるぞ。";
		var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
		var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
		var_1658 = "・ガラスの破片をバラ撒くこともあるぞ。";
	}
	if ( var_437 == 97 ) {
		var_891 = "ｵｲﾝｺﾞ";
		var_967 = 10;
		var_968 = 1;
		var_954 = 100;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 343;
		var_1655 = "・誰か他の敵に化けていることがあるぞ。";
		var_1656 = "・爆弾仕掛けのオレンジを落とすぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 125 ) {
		var_891 = "ﾌｰｺﾞ";
		var_967 = 19;
		var_968 = 15;
		var_954 = 320;
		var_438 = 42;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 506;
		var_1655 = "・ｳｨﾙｽで部屋の全員にﾀﾞﾒｰｼﾞを与えるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 14 ) {
		var_891 = "床屋のｶｰﾝ";
		var_967 = 18;
		var_968 = 17;
		var_954 = 350;
		var_438 = 48;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 345;
		var_1655 = "・ダメージを受けると攻撃力がアップするぞ。";
		var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 69 ) {
		var_891 = "ﾌﾞﾗﾌｫｰﾄﾞ";
		var_967 = 18;
		var_968 = 16;
		var_954 = 290;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 109;
		var_1655 = "・髪の毛で縛り付けてくるぞ。";
		var_1656 = "・縛られた髪の毛で満腹度を吸い取るぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 59 ) {
		var_891 = "ﾌﾟｯﾁ神父";
		var_967 = 15;
		var_968 = 18;
		var_954 = 360;
		var_438 = 54;
		var_1637 = 1;
		var_1654 = 6;
		var_972 = 1;
		var_1619 = 618;
		var_1655 = "・装備しているDISCを抜き取ってしまうぞ。";
		var_1656 = "・やっつければ取り戻せるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 145 ) {
		var_891 = "康一";
		var_967 = 16;
		var_968 = 16;
		var_954 = 280;
		var_438 = 30;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 412;
		var_1655 = "・付かず離れず距離をとってくるぞ。";
		var_1656 = "・３種類のエコーズを呼び出すぞ。";
		var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 18 ) {
		var_891 = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
		var_967 = 14;
		var_968 = 15;
		var_954 = 300;
		var_438 = 42;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 3;
		var_1619 = 511;
		var_1655 = "・影から影へ、瞬間的に移動するぞ。";
		var_1656 = "・矢を刺して選別してくるぞ。";
		var_1657 = "・選ばれると装備品に新たな能力がつくぞ。";
		var_1658 = "・矢かライターを落とすぞ。";
	}
	if ( var_437 == 35 ) {
		var_891 = "仗助";
		var_967 = 20;
		var_968 = 18;
		var_954 = 380;
		var_438 = 42;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 401;
		var_1655 = "・近くに怪我をした敵がいると治しに行くぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 135 ) {
		var_891 = "若ｼﾞｮｾﾌ";
		var_967 = 19;
		var_968 = 20;
		var_954 = 390;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 201;
		var_1655 = "・付かず離れず距離をとってくるぞ。";
		var_1656 = "・地面に罠を仕掛けるぞ。";
		var_1657 = "・攻撃されると波紋で痺れることがあるぞ。";
		var_1658 = "・老化攻撃を受けると弱くなってしまうぞ。";
	}
	if ( var_437 == 10 ) {
		var_891 = "ﾉﾄｰﾘｱｽBIG";
		var_967 = 19;
		var_968 = 1;
		var_954 = 320;
		var_438 = 140;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 521;
		var_1655 = "・攻撃すると肉片を貼り付けることがあるぞ。";
		var_1656 = "・速く動いても同じ速度で追ってくるぞ。";
		var_1657 = "・ゆっくり動くと追いかけてこないぞ。";
		var_1658 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
	}
	if ( var_437 == 95 ) {
		var_891 = "ｽﾄﾚｲﾂｫ";
		var_967 = 19;
		var_968 = 18;
		var_954 = 445;
		var_438 = 46;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 202;
		var_1655 = "・目から体液を発射してくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 63 ) {
		var_891 = "ﾌﾟﾛｼｭｰﾄ兄貴";
		var_967 = 20;
		var_968 = 17;
		var_954 = 520;
		var_438 = 45;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 513;
		var_1655 = "・接触老化で最大精神力や最大ＨＰが下がるぞ。";
		var_1656 = "・同じ部屋にいると精神力を下げてくるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 84 ) {
		var_891 = "ﾁｮｺﾗｰﾀ";
		var_967 = 10;
		var_968 = 19;
		var_954 = 360;
		var_438 = 62;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 523;
		var_1655 = "・付かず離れず距離をとってくるぞ。";
		var_1656 = "・グリーンディやセッコを呼び出すぞ。";
		var_1657 = "・近くのセッコの攻撃力を上げるぞ。";
		var_1658 = "・分離して逃げることがあるぞ。";
	}
	if ( var_437 == 117 ) {
		var_891 = "ﾁｮｺﾗｰﾀの上半身";
		var_967 = 10;
		var_968 = 10;
		var_954 = 10;
		var_438 = 10;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 524;
		var_1655 = "・すばやい動きで逃げるぞ。";
		var_1656 = "・倒すと「やばいクスリ」を落とす事があるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 43 ) {
		var_891 = "ｾｯｺ";
		var_967 = 21;
		var_968 = 20;
		var_954 = 580;
		var_438 = 40;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 526;
		var_1655 = "・ウロウロしながら近づいてくるぞ。";
		var_1656 = "・壁の中でも自由に移動できるぞ。";
		var_1657 = "・壁の中にいる時は普通の攻撃が効かないぞ。";
		var_1658 = "・タイヤが当たると混乱するぞ。";
	}
	if ( var_437 == 85 ) {
		var_891 = "ﾘｿﾞｯﾄ";
		var_967 = 10;
		var_968 = 18;
		var_954 = 600;
		var_438 = 43;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 522;
		var_1655 = "・磁力によって普段は姿が見えないぞ。";
		var_1656 = "・ランダムに移動しているぞ。";
		var_1657 = "・体内で刃物を作る攻撃をしてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 32 ) {
		var_891 = "吉良吉影";
		var_967 = 22;
		var_968 = 20;
		var_954 = 750;
		var_438 = 65;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 7;
		var_1619 = 442;
		var_1655 = "・アイテムを爆弾に変えてくるぞ。";
		var_1656 = "・床のアイテムも爆弾に変えることがあるぞ。";
		var_1657 = "・ｼｱｰﾊｰﾄｱﾀｯｸを繰り出すことがあるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 44 ) {
		var_891 = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
		var_967 = 20;
		var_968 = 16;
		var_954 = 630;
		var_438 = 52;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 8;
		var_1619 = 437;
		var_1655 = "・地下の電線を使って近くに瞬間移動するぞ。";
		var_1656 = "・２回連続で攻撃してくるぞ。";
		var_1657 = "・水に入るとダメージを受けるぞ。";
		var_1658 = "・タイヤに弱いぞ。";
	}
	if ( var_437 == 72 ) {
		var_891 = "ｹﾝｿﾞｰ";
		var_967 = 18;
		var_968 = 18;
		var_954 = 710;
		var_438 = 42;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 616;
		var_1655 = "・こちらの攻撃をヒラリとかわしやすいぞ。";
		var_1656 = "・風水の力で罠をたくさん呼び寄せるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 66 ) {
		var_891 = "ﾀﾙｶｽ";
		var_967 = 23;
		var_968 = 22;
		var_954 = 800;
		var_438 = 65;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 110;
		var_1655 = "・強烈な一撃を繰り出すことがあるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 113 ) {
		var_891 = "DIO";
		var_967 = 23;
		var_968 = 22;
		var_954 = 1400;
		var_438 = 75;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 364;
		var_1655 = "・時間を止めて自分だけ動くぞ。";
		var_1656 = "・ジョセフを倒すとパワーアップするぞ。";
		var_1657 = "・まれに何か投げるぞ。";
		var_1658 = "・近くにいると階段を降りられないぞ。";
	}
	if ( var_437 == 15 ) {
		var_891 = "ﾍﾟｯﾄｼｮｯﾌﾟ";
		var_967 = 21;
		var_968 = 19;
		var_954 = 850;
		var_438 = 40;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 0;
		var_1619 = 360;
		var_1655 = "・氷のミサイルを発射してくるぞ。";
		var_1656 = "・隣接時に氷漬けにしてくるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 123 ) {
		var_891 = "ﾌﾞﾁｬﾗﾃｨ";
		var_967 = 22;
		var_968 = 21;
		var_954 = 900;
		var_438 = 60;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 503;
		var_1655 = "・２マス先まで攻撃が届くぞ。";
		var_1656 = "・あいだに他の敵がいても攻撃が届くぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 80 ) {
		var_891 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
		var_967 = 18;
		var_968 = 19;
		var_954 = 720;
		var_438 = 55;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 611;
		var_1655 = "・唾を吐いてくるぞ。";
		var_1656 = "・当たると無重力で思うように動けなくなるぞ。";
		var_1657 = "・隣接していても無重力攻撃をしてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 65 ) {
		var_891 = "虹村形兆";
		var_967 = 10;
		var_968 = 18;
		var_954 = 700;
		var_438 = 55;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 407;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・バッドカンパニー部隊を呼び出すぞ。";
		var_1657 = "・グリーンベレーを呼び出すぞ。";
		var_1658 = "・地面に地雷を仕掛けるぞ。";
	}
	if ( var_437 == 40 ) {
		var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
		var_967 = 10;
		var_968 = 5;
		var_954 = 5;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 408;
		var_1655 = "・形兆が呼び出したスタンドだ。";
		var_1656 = "・弾丸を発射してくるぞ。";
		var_1657 = "・仲間の弾丸には当たらないぞ。";
		var_1658 = "";
	}
	if ( var_437 == 41 ) {
		var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
		var_967 = 14;
		var_968 = 13;
		var_954 = 7;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 410;
		var_1655 = "・形兆が呼び出したスタンドだ。";
		var_1656 = "・砲弾を発射してくるぞ。";
		var_1657 = "・仲間の弾丸には当たらないぞ。";
		var_1658 = "";
	}
	if ( var_437 == 42 ) {
		var_891 = "ｱﾊﾟｯﾁ";
		var_967 = 16;
		var_968 = 10;
		var_954 = 8;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 411;
		var_1655 = "・形兆が呼び出したスタンドだ。";
		var_1656 = "・ミサイルを発射してくるぞ。";
		var_1657 = "・仲間の弾丸には当たらないぞ。";
		var_1658 = "";
	}
	if ( var_437 == 54 ) {
		var_891 = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
		var_967 = 20;
		var_968 = 5;
		var_954 = 10;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 409;
		var_1655 = "・形兆が呼び出したスタンドだ。";
		var_1656 = "・仲間の弾丸には当たらないぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 132 ) {
		var_891 = "ﾚｸｲｴﾑｼﾞｮﾙﾉ";
		var_967 = 25;
		var_968 = 23;
		var_954 = 1500;
		var_438 = 300;
		var_1637 = 1;
		var_1654 = 1;
		var_972 = 9;
		var_1619 = 527;
		var_1655 = "・攻撃を受けると状態異常がすべて元に戻るぞ。";
		var_1656 = "・状態異常の他にもいろいろ元に戻すぞ。";
		var_1657 = "・離れているとサソリを飛ばしてくるぞ。";
		var_1658 = "・ダンジョンの主だぞ。";
	}
	if ( var_437 == 30 ) {
		var_891 = "禁煙中ﾎﾙ･ﾎｰｽ";
		var_967 = 15;
		var_968 = 16;
		var_954 = 650;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 349;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
		var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
		var_1658 = "・予知によって弾丸のダメージが変わるぞ。";
	}
	if ( var_437 == 21 ) {
		var_891 = "ｽﾄﾚｲ･ｷｬｯﾄ";
		var_967 = 15;
		var_968 = 15;
		var_954 = 100;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 6;
		var_1619 = 446;
		var_1655 = "・金縛りにする空気弾を撃ってくるぞ。";
		var_1656 = "・撃った後は寝てしまうぞ。";
		var_1657 = "・既に金縛りだとダメージ弾になるぞ。";
		var_1658 = "・吉良が近くにいると爆弾空気弾になるぞ。";
	}
	if ( var_437 == 122 ) {
		var_891 = "ﾎﾟﾙﾅﾚﾌ";
		var_967 = 25;
		var_968 = 22;
		var_954 = 1500;
		var_438 = 50;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 305;
		var_1655 = "・２回連続で攻撃してくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 121 ) {
		var_891 = "花京院";
		var_967 = 26;
		var_968 = 20;
		var_954 = 1400;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 304;
		var_1655 = "・エメラルドスプラッシュを撃ってくるぞ。";
		var_1656 = "・時々ニセモノが化けているぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 152 ) {
		var_891 = "ﾄﾘｯｼｭ";
		var_967 = 24;
		var_968 = 24;
		var_954 = 1000;
		var_438 = 40;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 9;
		var_1619 = 508;
		var_1655 = "・柔らかくなってﾀﾞﾒｰｼﾞを受けない事があるぞ。";
		var_1656 = "・柔らかいと後ろに弾んでしまうぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 160 ) {
		var_891 = "ｳｴｽﾄｳｯﾄﾞ看守";
		var_967 = 27;
		var_968 = 23;
		var_954 = 1000;
		var_438 = 70;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 615;
		var_1655 = "・掴んで動けなくさせるぞ。";
		var_1656 = "・掴んでいると隕石を落とすことがあるぞ。";
		var_1657 = "・この隕石は防御力の影響を受けないぞ。";
		var_1658 = "";
	}
	if ( var_437 == 86 ) {
		var_891 = "ｻﾝﾀﾅ";
		var_967 = 30;
		var_968 = 25;
		var_954 = 1800;
		var_438 = 65;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 205;
		var_1655 = "・空気供給管を通って瞬時に移動するぞ。";
		var_1656 = "・同じ部屋に吸血鬼やゾンビがいると攻撃し、";
		var_1657 = "　やっつけるとレベルが上がるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 155 ) {
		var_891 = "ﾏﾗｲｱ";
		var_967 = 23;
		var_968 = 21;
		var_954 = 1400;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 347;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・バステト女神の罠を設置するぞ。";
		var_1657 = "・ボルトやナットを飛ばしてくるぞ。";
		var_1658 = "・磁力がアップしているとダメージが増えるぞ。";
	}
	if ( var_437 == 156 ) {
		var_891 = "ｳｪｻﾞｰ";
		var_967 = 28;
		var_968 = 25;
		var_954 = 1600;
		var_438 = 60;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 610;
		var_1655 = "・弾丸が燃え尽きて届かないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 157 ) {
		var_891 = "ｱﾅｽｲ";
		var_967 = 29;
		var_968 = 21;
		var_954 = 1500;
		var_438 = 55;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 614;
		var_1655 = "・同じ部屋にいると壁を通して攻撃するぞ。";
		var_1656 = "・収納アイテムやヤバイものを壊してくるぞ";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 144 ) {
		var_891 = "川尻浩作";
		var_967 = 32;
		var_968 = 22;
		var_954 = 1700;
		var_438 = 50;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 444;
		var_1655 = "・他人のお金を盗むぞ。";
		var_1656 = "・なんてロマンチックなの……";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 128 ) {
		var_891 = "承太郎";
		var_967 = 33;
		var_968 = 23;
		var_954 = 1800;
		var_438 = 60;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 403;
		var_1655 = "・ちょっとだけ時間を止めるぞ。";
		var_1656 = "・特定のアイテムを落とすぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 158 ) {
		var_891 = "ﾌﾟｯﾂﾝ由花子";
		var_967 = 26;
		var_968 = 21;
		var_954 = 1700;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 434;
		var_1655 = "・髪の毛を飛ばしてくるぞ。";
		var_1656 = "・刺さると思うように動けなくなるぞ。";
		var_1657 = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 150 ) {
		var_891 = "康一act2!!";
		var_967 = 30;
		var_968 = 22;
		var_954 = 1600;
		var_438 = 40;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 413;
		var_1655 = "・３種類のエコーズを呼び出すぞ。";
		var_1656 = "・杜王町の仲間を呼び出すぞ。";
		var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 68 ) {
		var_891 = "ﾌﾞﾁ切れた仗助";
		var_967 = 32;
		var_968 = 23;
		var_954 = 1900;
		var_438 = 60;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 402;
		var_1655 = "・倍の速さで移動するぞ。";
		var_1656 = "・２回連続で攻撃するぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 67 ) {
		var_891 = "ﾌﾞﾁ切れた億泰";
		var_967 = 38;
		var_968 = 25;
		var_954 = 2000;
		var_438 = 70;
		var_1637 = 1;
		var_1654 = 20;
		var_972 = 7;
		var_1619 = 406;
		var_1655 = "・ガオンと近くに引き寄せてくるぞ。";
		var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 151 ) {
		var_891 = "虫喰い";
		var_967 = 34;
		var_968 = 1;
		var_954 = 1500;
		var_438 = 10;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 6;
		var_1619 = 440;
		var_1655 = "・毒針を発射してくるぞ。";
		var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
		var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
		var_1658 = "・すばやく動いているぞ。";
	}
	if ( var_437 == 172 ) {
		var_891 = "虫食いでない";
		var_967 = 34;
		var_968 = 1;
		var_954 = 1000;
		var_438 = 10;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 6;
		var_1619 = 439;
		var_1655 = "・近づくと毒針を発射してくるぞ。";
		var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
		var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
		var_1658 = "・移動しないぞ。";
	}
	if ( var_437 == 87 ) {
		var_891 = "ｴｼﾃﾞｨｼ";
		var_967 = 38;
		var_968 = 26;
		var_954 = 2200;
		var_438 = 80;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 208;
		var_1655 = "・アイテムを消し炭にしてしまうぞ。";
		var_1656 = "・床のアイテムも消し炭にしてしまうぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 164 ) {
		var_891 = "ｴｼﾃﾞｨｼの脳";
		var_967 = 28;
		var_968 = 80;
		var_954 = 5;
		var_438 = 5;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 2;
		var_1619 = 209;
		var_1655 = "・他の敵に取り付いてレベルを上げるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 109 ) {
		var_891 = "ワムウ";
		var_967 = 42;
		var_968 = 24;
		var_954 = 2500;
		var_438 = 80;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 2;
		var_1619 = 210;
		var_1655 = "・透明で姿が見えないことがあるぞ。";
		var_1656 = "・瀕死になるとパワーアップするぞ。";
		var_1657 = "・透明かそうでないかで動き方が違うぞ。";
		var_1658 = "";
	}
	if ( var_437 == 110 ) {
		var_891 = "カーズ";
		var_967 = 40;
		var_968 = 23;
		var_954 = 3000;
		var_438 = 75;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 214;
		var_1655 = "・２回連続で攻撃してくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 139 ) {
		var_891 = "ﾘｻﾘｻ";
		var_967 = 45;
		var_968 = 24;
		var_954 = 2800;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 211;
		var_1655 = "・ヒラリと攻撃をかわしやすいぞ。";
		var_1656 = "・殴ると波紋で痺れることがあるぞ。";
		var_1657 = "・殴られても痺れることがあるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 124 ) {
		var_891 = "ﾐｽﾀ";
		var_967 = 30;
		var_968 = 28;
		var_954 = 2200;
		var_438 = 55;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 9;
		var_1619 = 505;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・フロア内のどこからでも弾丸を撃ってくるぞ。";
		var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
		var_1658 = "";
	}
	if ( var_437 == 154 ) {
		var_891 = "ｽﾎﾟｰﾂﾏｯｸｽ";
		var_967 = 40;
		var_968 = 25;
		var_954 = 2900;
		var_438 = 60;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 613;
		var_1655 = "・透明で姿が見えないぞ。";
		var_1656 = "・今まで出現した敵を透明にして呼び出すぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 127 ) {
		var_891 = "C-MOON";
		var_967 = 5;
		var_968 = 30;
		var_954 = 3000;
		var_438 = 75;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 623;
		var_1655 = "・隣接時に裏返り攻撃をしてくるぞ。";
		var_1656 = "・ＨＰの減っている数値が残り数値になるぞ。";
		var_1657 = "・ＨＰが満タンだと１になってしまうぞ。";
		var_1658 = "";
	}
	if ( var_437 == 126 ) {
		var_891 = "退院した花京院";
		var_967 = 45;
		var_968 = 32;
		var_954 = 2900;
		var_438 = 60;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 1;
		var_1619 = 350;
		var_1655 = "・エメラルドスプラッシュを撃ってくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 129 ) {
		var_891 = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
		var_967 = 50;
		var_968 = 28;
		var_954 = 3200;
		var_438 = 65;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 346;
		var_1655 = "・２回連続で攻撃してくるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 133 ) {
		var_891 = "ｳﾞｧﾆﾗｱｲｽ";
		var_967 = 40;
		var_968 = 30;
		var_954 = 2000;
		var_438 = 90;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 361;
		var_1655 = "・攻撃を受けるとｸﾘｰﾑの中に入ってしまうぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 159 ) {
		var_891 = "記憶が戻ったｳｪｻﾞｰ";
		var_967 = 65;
		var_968 = 30;
		var_954 = 3400;
		var_438 = 60;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 621;
		var_1655 = "・弾丸が燃え尽きて届かないぞ。";
		var_1656 = "・攻撃を喰らうと周囲に血の槍を作るぞ。";
		var_1657 = "・カタツムリを呼び出すぞ。";
		var_1658 = "";
	}
	if ( var_437 == 170 ) {
		var_891 = "カタツムリ";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 622;
		var_1655 = "・触られると鈍足になってしまうぞ。";
		var_1656 = "・見えなければ大丈夫だぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 64 ) {
		var_891 = "ｷﾞｱｯﾁｮ";
		var_967 = 50;
		var_968 = 40;
		var_954 = 3600;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 9;
		var_1619 = 517;
		var_1655 = "・倍の速さで移動してくるぞ。";
		var_1656 = "・隣接すると凍らせてくるぞ。";
		var_1657 = "・弾丸やアイテムを凍らせて反射してくるぞ。";
		var_1658 = "";
	}
	if ( var_437 == 137 ) {
		var_891 = "成長した吉良";
		var_967 = 58;
		var_968 = 33;
		var_954 = 3300;
		var_438 = 65;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 7;
		var_1619 = 447;
		var_1655 = "・アイテムを爆弾にしてくるぞ。";
		var_1656 = "・落ちているアイテムも爆弾に変えるぞ。";
		var_1657 = "・仲間を呼び出すぞ。";
		var_1658 = "・瀕死になると第3の爆弾を使うぞ。";
	}
	if ( var_437 == 153 ) {
		var_891 = "ﾏｯｸｲｨｰﾝ";
		var_967 = 20;
		var_968 = 15;
		var_954 = 2000;
		var_438 = 80;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 608;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・道連れ攻撃で、離れていても攻撃してくるぞ。";
		var_1657 = "・ダメージを与えると反射するぞ。";
		var_1658 = "";
	}
	if ( var_437 == 118 ) {
		var_891 = "ｸﾘｰﾑ";
		var_967 = 70;
		var_968 = 35;
		var_954 = 3300;
		var_438 = 90;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 3;
		var_1619 = 362;
		var_1655 = "・盲目状態で直線的に進むぞ。";
		var_1656 = "・壁を飲み込みながら進むぞ。";
		var_1657 = "・遠くにいてもガオンと近くに来るぞ。";
		var_1658 = "・時々ｳﾞｧﾆﾗｱｲｽが顔を出して位置を確認するぞ。";
	}
	if ( var_437 == 114 ) {
		var_891 = "最高にﾊｲなDIO";
		var_967 = 60;
		var_968 = 34;
		var_954 = 4000;
		var_438 = 90;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 365;
		var_1655 = "・さらに長く時間を止めるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 111 ) {
		var_891 = "究極カーズ";
		var_967 = 70;
		var_968 = 35;
		var_954 = 4400;
		var_438 = 100;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 2;
		var_1619 = 215;
		var_1655 = "・倍の速さで移動するぞ。";
		var_1656 = "・壁があっても自由に動けるぞ。";
		var_1657 = "・壁の中にいると普通の攻撃は効かないぞ。";
		var_1658 = "・攻撃されると波紋で痺れることがあるぞ。";
	}
	if ( var_437 == 120 ) {
		var_891 = "承太郎";
		var_967 = 80;
		var_968 = 30;
		var_954 = 5000;
		var_438 = 90;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 301;
		var_1655 = "・頻繁に強烈な一撃を繰り出すぞ。";
		var_1656 = "・強烈な一撃を喰らうと吹っ飛ぶぞ。";
		var_1657 = "・ﾀﾞﾒｰｼﾞを受けると攻撃力が上がるぞ。";
		var_1658 = "・特定のアイテムを持っているぞ。";
	}
	if ( var_437 == 60 ) {
		var_891 = "ｻﾞ･ﾆｭｰ神父";
		var_967 = 60;
		var_968 = 32;
		var_954 = 5600;
		var_438 = 85;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 624;
		var_1655 = "・倍の速さで移動するぞ。";
		var_1656 = "・２回連続で攻撃するぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 98 ) {
		var_891 = "ｴﾝﾎﾟﾘｵ";
		var_967 = 70;
		var_968 = 3;
		var_954 = 7;
		var_438 = 7;
		var_1637 = 1;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 625;
		var_1655 = "・純粋酸素で全員にﾀﾞﾒｰｼﾞを与えるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 143 ) {
		var_891 = "ウンガロ";
		var_967 = 5;
		var_968 = 30;
		var_954 = 10;
		var_438 = 500;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 1;
		var_1619 = 619;
		var_1655 = "・付かず離れず距離をとるぞ。";
		var_1656 = "・マンガのキャラクターを呼び出すぞ。";
		var_1657 = "・自分は攻撃しないぞ。";
		var_1658 = "・ダンジョンの主だぞ。";
	}
	if ( var_437 == 166 ) {
		var_891 = "お母さんヤギ";
		var_967 = 90;
		var_968 = 10;
		var_954 = 10;
		var_438 = 45;
		var_1637 = 0;
		var_1654 = 20;
		var_972 = 3;
		var_1619 = 620;
		var_1655 = "・物語の中から現れたヤギだ。";
		var_1656 = "・付かず離れず距離をとるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 91 ) {
		var_891 = "ACT1のさなぎ";
		var_967 = 0;
		var_968 = 0;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 416;
		var_1655 = "・動かないぞ。";
		var_1656 = "・攻撃もしないぞ。";
		var_1657 = "・エコーズACT2に成長するぞ。";
		var_1658 = "";
	}
	if ( var_437 == 92 ) {
		var_891 = "ACT2のさなぎ";
		var_967 = 0;
		var_968 = 0;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 8;
		var_1619 = 418;
		var_1655 = "・動かないぞ。";
		var_1656 = "・攻撃もしないぞ。";
		var_1657 = "・エコーズACT3に成長するぞ。";
		var_1658 = "";
	}
	if ( var_437 == 16 ) {
		var_891 = "ﾊｲﾌﾟﾘｴｽﾃｽ";
		var_967 = 11;
		var_968 = 8;
		var_954 = 30;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 3;
		var_1619 = 328;
		var_1655 = "・アイテムに化けているぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 130 ) {
		var_891 = "ﾏﾘﾘﾝﾏﾝｿﾝ";
		var_967 = 10;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 3;
		var_1619 = 0;
		var_1655 = "";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 146 ) {
		var_891 = "ﾁｬﾘｵｯﾂ";
		var_967 = 30;
		var_968 = 1;
		var_954 = 40;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 3;
		var_1619 = 306;
		var_1655 = "・分身したチャリオッツだ。";
		var_1656 = "・一撃喰らうと消えてしまうぞ。";
		var_1657 = "・５ターンで消えてしまうぞ。";
		var_1658 = "";
	}
	if ( var_437 == 37 ) {
		var_891 = "猫";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 803;
		var_1655 = "・にゃー";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 19 ) {
		var_891 = "ｱﾗﾋﾞｱﾌｧｯﾂ";
		var_967 = 0;
		var_968 = 1;
		var_954 = 110;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 1;
		var_1619 = 323;
		var_1655 = "・岩に化けて動かないぞ。";
		var_1656 = "・太陽のレーザーを発射するぞ。";
		var_1657 = "・気温を上げてレーザーの威力を上げるぞ。";
		var_1658 = "・特定のアイテムを落とすぞ。";
	}
	if ( var_437 == 90 ) {
		var_891 = "岩";
		var_967 = 0;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 324;
		var_1655 = "・岩だ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 96 ) {
		var_891 = "感電ｴﾝﾎﾟﾘｵ";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 1;
		var_1619 = 605;
		var_1655 = "・感電して動けない。";
		var_1656 = "・特定のアイテムを持っているぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 161 ) {
		var_891 = "橋沢育郎";
		var_967 = 1;
		var_968 = 35;
		var_954 = 1000;
		var_438 = 100;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 801;
		var_1655 = "・攻撃を受けるとバオーに変身するぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 162 ) {
		var_891 = "バオー";
		var_967 = 100;
		var_968 = 35;
		var_954 = 6000;
		var_438 = 100;
		var_1637 = 0;
		var_1654 = 10;
		var_972 = 1;
		var_1619 = 802;
		var_1655 = "・２回連続で攻撃するぞ。";
		var_1656 = "";
	}
	if ( var_437 == 168 ) {
		var_891 = "警備員の西戸";
		var_967 = 80;
		var_968 = 40;
		var_954 = 100;
		var_438 = 70;
		var_1637 = 0;
		var_1654 = 3;
		var_972 = 1;
		var_1619 = 804;
		var_1655 = "・オレはこのデパートの影の支配者だ！";
		var_1656 = "　悪さをするヤツはゆるさねえ！";
		var_1657 = "・ウワハハハハハ！";
		var_1658 = "・クチャ　クチャ　　ペッ";
	}
	if ( var_437 == 33 ) {
		var_891 = "トニオさん";
		var_967 = 100;
		var_968 = 40;
		var_954 = 1000;
		var_438 = 950;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 435;
		var_1655 = "・お店を守っているぞ。";
		var_1656 = "・攻撃を受けると怒るぞ。";
		var_1657 = "・泥棒すると仲間を呼ぶぞ。";
		var_1658 = "";
	}
	if ( var_437 == 34 ) {
		var_891 = "トニオさん";
		var_967 = 100;
		var_968 = 40;
		var_954 = 1000;
		var_438 = 950;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 7;
		var_1619 = 436;
		var_1655 = "・「タダじゃあおきマセンッ！」";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 61 ) {
		var_891 = "ﾖｰﾖｰﾏｯ";
		var_967 = 1;
		var_968 = 10;
		var_954 = 100;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 3;
		var_1619 = 617;
		var_1655 = "・部屋に二人だけになると謎の攻撃をするぞ。";
		var_1656 = "・攻撃すると臭いでﾀﾞﾒｰｼﾞを食らうぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 74 ) {
		var_891 = "ｻｳﾞｪｼﾞｶﾞｰﾃﾞﾝ";
		var_967 = 1;
		var_968 = 10;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 612;
		var_1655 = "・アイテムを一つ倉庫に運んでくれるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 75 ) {
		var_891 = "鮮血のｼｬﾎﾞﾝ";
		var_967 = 1;
		var_968 = 10;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 213;
		var_1655 = "・アイテムを一つ入れておけるぞ。";
		var_1656 = "・あとで発見した時に取り出せるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 57 ) {
		var_891 = "SPW財団の男";
		var_967 = 1;
		var_968 = 10;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 340;
		var_1655 = "・次の階に出現する敵を教えてくれるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 58 ) {
		var_891 = "ﾎﾞｲﾝｺﾞ";
		var_967 = 1;
		var_968 = 10;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 4;
		var_1619 = 344;
		var_1655 = "・次の階での死に方を教えてくれるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 55 ) {
		var_891 = "亀";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 512;
		var_1655 = "・中に部屋があるぞ。";
		var_1656 = "・アイテムを保管しておけるぞ。";
		var_1657 = "・ジッパーにアイテムを捨てると成長し、";
		var_1658 = "　部屋がさらに広くなるぞ。";
	}
	if ( var_437 == 53 ) {
		var_891 = "ｴｸｽﾍﾟﾘｴﾝｽの花";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 502;
		var_1655 = "・攻撃を受けるとﾀﾞﾒｰｼﾞを反射するぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 23 ) {
		var_891 = "ただの死体";
		var_967 = 1;
		var_968 = 1;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 0;
		var_1619 = 321;
		var_1655 = "・とくに何もないぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 81 ) {
		var_891 = "ｱﾊﾞｯｷｫ";
		var_967 = 1;
		var_968 = 0;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 504;
		var_1655 = "・ダンジョンから帰還させてくれるぞ。";
		var_1656 = "・お茶を勧めてくれるぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 83 ) {
		var_891 = "間田";
		var_967 = 1;
		var_968 = 0;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 4;
		var_1619 = 431;
		var_1655 = "・必ずマンガを持ち歩いているぞ。";
		var_1656 = "・特に「GP BOY」は学校で読むほど大好きだ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 50 ) {
		var_891 = "元いた場所";
		var_967 = 0;
		var_968 = 0;
		var_954 = 0;
		var_438 = 9999;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 0;
		var_1655 = "";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 116 ) {
		var_891 = "玉美";
		var_967 = 0;
		var_968 = 1;
		var_954 = 1;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 7;
		var_1619 = 430;
		var_1655 = "・攻撃すると罪悪感でお金を奪われるぞ。";
		var_1656 = "・すれ違っただけでもお金を奪われるぞ。";
		var_1657 = "・お金がないと体が重くなってしまうぞ。";
		var_1658 = "";
	}
	if ( var_437 == 142 ) {
		var_891 = "露伴";
		var_967 = 10;
		var_968 = 10;
		var_954 = 1;
		var_438 = 20;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 439;
		var_1655 = "・「ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC」を探しているぞ。";
		var_1656 = "・岸辺露伴は動かないぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 49 ) {
		var_891 = "ｺﾋﾟｰ人形";
		var_967 = var_580 + var_565;
		var_968 = var_581;
		var_954 = 0;
		var_438 = var_352;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 5;
		var_1619 = 432;
		var_1655 = "・ウロウロと歩くぞ。";
		var_1656 = "・敵はコピー人形を優先して攻撃するぞ。";
		var_1657 = "・10ターンで人形に戻るぞ。";
		var_1658 = "";
	}
	if ( var_437 == 163 ) {
		var_891 = "ﾔｸ中の少年";
		var_967 = 1;
		var_968 = 0;
		var_954 = 1;
		var_438 = 1;
		var_1637 = 0;
		var_1654 = 1;
		var_972 = 4;
		var_1619 = 509;
		var_1655 = "・フラフラと歩いているぞ。";
		var_1656 = "・ぶん殴ると「やばいクスリ」を落とすぞ。";
		var_1657 = "・中にブチャラティが入っているぞ。";
		var_1658 = "";
	}
	if ( var_437 == 36 ) {
		var_891 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝ";
		var_967 = 7;
		var_968 = 7;
		var_954 = 0;
		var_438 = 50;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 104;
		var_1655 = "・氷漬けになると助けてくれるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 105 ) {
		var_891 = "ﾂｪﾍﾟﾘさん";
		var_967 = 9;
		var_968 = 6;
		var_954 = 0;
		var_438 = 40;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 106;
		var_1655 = "・波紋が使える状態にしてくれるぞ。";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 106 ) {
		var_891 = "ﾍﾟｯｼ";
		var_967 = 4;
		var_968 = 4;
		var_954 = 0;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 514;
		var_1655 = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
		var_1656 = "・兄貴のDISCでパワーアップするぞ。";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 107 ) {
		var_891 = "成長したﾍﾟｯｼ";
		var_967 = 12;
		var_968 = 12;
		var_954 = 0;
		var_438 = 30;
		var_1637 = 0;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 515;
		var_1655 = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	if ( var_437 == 108 ) {
		var_891 = "イギー";
		var_967 = 5;
		var_968 = 8;
		var_954 = 0;
		var_438 = 40;
		var_1637 = 1;
		var_1654 = 999;
		var_972 = 4;
		var_1619 = 341;
		var_1655 = "・地面に砂DIOを作ってくれるぞ";
		var_1656 = "";
		var_1657 = "";
		var_1658 = "";
	}
	return;
}
function func627(){
	var_977 = dim(20);
	if ( var_62 == 1 ) {
		func628();
	}
	if ( var_62 == 2 ) {
		func629();
	}
	if ( var_62 == 3 ) {
		func630();
	}
	if ( var_62 == 4 ) {
		func634();
	}
	if ( var_62 == 5 ) {
		func631();
	}
	if ( var_94 == 1 ) {
		var_977 = [40, 41, 42, 54, 47, 79];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 2 ) {
		var_977 = [47, 39, 35, 145, 147, 147];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 3 ) {
		var_977 = [17, 17, 31, 17, 31, 31];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 4 ) {
		var_977 = [78, 119, 121, 122];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 5 ) {
		var_977 = [100, 100, 48];
		var_2917 = rnd(3);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 6 ) {
		var_977 = [2, 51, 52, 71, 11];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_94 == 7 ) {
		var_977 = [90, 90, 90, 90, 88, 88, 27];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	return;
}
function func628(){
	if ( var_91 == 1 ) {
		var_977 = [1, 5];
		var_2917 = rnd(2);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 2 ) {
		var_977 = [147, 1, 5];
		var_2917 = rnd(3);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 3 ) {
		var_977 = [93, 2, 147, 5];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 4 ) {
		var_977 = [93, 3, 2, 147];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 5 ) {
		var_977 = [51, 94, 93, 3];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 6 ) {
		var_977 = [51, 94, 93, 3];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 7 ) {
		var_977 = [7, 9, 51, 6, 94];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 8 ) {
		var_977 = [52, 7, 9, 6];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 9 ) {
		var_977 = [134, 52, 7, 9, 6];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 10 ) {
		var_977 = [99, 13, 134, 141, 101, 52];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 11 ) {
		var_977 = [99, 13, 134, 141, 101, 52];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 12 ) {
		var_977 = [8, 24, 25];
		var_2917 = rnd(3);
		var_953 = var_977[var_2917];
	}
	if ( var_91 >= 13 ) {
		var_977 = [90];
		var_2917 = rnd(1);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 99 ) {
		var_977 = [36, 105, 106, 107, 108, 161, 162];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	return;
}
function func629(){
	if ( var_91 == 1 ) {
		var_977 = [79, 1, 5];
		var_2917 = rnd(3);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 2 ) {
		var_977 = [2, 79, 1, 5];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 3 ) {
		var_977 = [93, 3, 2, 5];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 4 ) {
		var_977 = [94, 77, 93, 3, 2];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 5 ) {
		var_977 = [51, 94, 77, 93, 3];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 6 ) {
		var_977 = [7, 9, 39, 51, 94, 77, 3];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 7 ) {
		var_977 = [6, 76, 26, 7, 9, 39, 51, 94];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 8 ) {
		var_977 = [52, 76, 26, 7, 9, 39, 6];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 9 ) {
		var_977 = [4, 134, 141, 52, 76, 26, 6];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 10 ) {
		var_977 = [119, 99, 13, 4, 134, 141, 101, 76, 52];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 11 ) {
		var_977 = [71, 12, 119, 99, 13, 4, 134, 141, 101];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 12 ) {
		var_977 = [28, 56, 71, 12, 119, 13, 4, 134, 101];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 13 ) {
		var_977 = [131, 148, 28, 31, 56, 71, 12, 134];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 14 ) {
		var_977 = [115, 11, 131, 148, 28, 31, 56];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 15 ) {
		var_977 = [45, 29, 115, 11, 131, 148, 28, 31];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 16 ) {
		var_977 = [47, 45, 29, 115, 11, 131, 148];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 17 ) {
		var_977 = [136, 27, 47, 45, 29, 115, 11];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 18 ) {
		var_977 = [48, 38, 78, 136, 27, 47, 45, 29];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 19 ) {
		var_977 = [17, 46, 48, 38, 78, 136, 27];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 20 ) {
		var_977 = [97, 125, 17, 46, 48, 38, 78];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 21 ) {
		var_977 = [14, 69, 97, 125, 17, 46, 12];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 22 ) {
		var_977 = [18, 59, 145, 14, 97, 125, 69, 17, 46];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 23 ) {
		var_977 = [35, 135, 18, 59, 145, 14, 97, 69];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 24 ) {
		var_977 = [10, 35, 135, 18, 59, 145, 14];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 25 ) {
		var_977 = [95, 63, 10, 35, 135, 59, 14];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 26 ) {
		var_977 = [32, 84, 43, 85, 95, 63, 10, 35];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 27 ) {
		var_977 = [44, 72, 66, 32, 84, 43, 85, 95, 63];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 28 ) {
		var_977 = [113, 15, 123, 44, 72, 66, 32, 84, 43];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 29 ) {
		var_977 = [80, 65, 113, 15, 123, 44, 72, 66, 119];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 30 ) {
		var_977 = [80, 65, 113, 15, 123, 44, 72, 119];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 >= 31 ) {
		var_977 = [90];
		var_2917 = rnd(1);
		var_953 = var_977[var_2917];
	}
	return;
}
function func630(){
	if ( var_91 == 1 ) {
		var_977 = [5, 1, 147, 79, 88];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 2 ) {
		var_977 = [5, 1, 147, 79, 88, 2];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 3 ) {
		var_977 = [93, 94, 147, 88, 3, 2];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 4 ) {
		var_977 = [93, 94, 147, 88, 3, 2];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 5 ) {
		var_977 = [93, 94, 51, 3, 2, 77];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 6 ) {
		var_977 = [93, 7, 51, 9, 77];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 7 ) {
		var_977 = [73, 7, 51, 9, 39, 76, 52, 6];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 8 ) {
		var_977 = [73, 7, 9, 39, 76, 52, 26, 6];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 9 ) {
		var_977 = [73, 7, 9, 39, 76, 52, 26, 4, 6];
		var_2917 = rnd(9);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 10 ) {
		var_977 = [13, 9, 26, 4, 138, 6];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 11 ) {
		var_977 = [134, 13, 26, 4, 101, 138];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 12 ) {
		var_977 = [134, 13, 119, 101, 99, 138];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 13 ) {
		var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 14 ) {
		var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 15 ) {
		var_977 = [28, 99, 141, 148, 71, 140, 97];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 16 ) {
		var_977 = [12, 28, 99, 56, 148, 71, 115];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 17 ) {
		var_977 = [12, 28, 99, 56, 131, 71, 115];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 18 ) {
		var_977 = [12, 31, 56, 131, 47, 27, 115];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 19 ) {
		var_977 = [12, 31, 48, 131, 47, 27, 115];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 20 ) {
		var_977 = [12, 31, 46, 48, 11, 47, 27];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 21 ) {
		var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 22 ) {
		var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 23 ) {
		var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 24 ) {
		var_977 = [69, 38, 136, 14, 45, 29, 85];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 25 ) {
		var_977 = [69, 38, 136, 14, 45, 10, 85];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 26 ) {
		var_977 = [69, 38, 136, 14, 45, 10, 85];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 27 ) {
		var_977 = [69, 38, 84, 14, 95, 10, 85];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 28 ) {
		var_977 = [125, 72, 38, 84, 14, 95, 10, 85];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 29 ) {
		var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 30 ) {
		var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 31 ) {
		var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 32 ) {
		var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 33 ) {
		var_977 = [125, 59, 63, 145, 78, 43, 18, 44];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 34 ) {
		var_977 = [123, 59, 63, 145, 78, 43, 135, 44];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 35 ) {
		var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 36 ) {
		var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 37 ) {
		var_977 = [123, 80, 63, 15, 78, 43, 135, 44];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 38 ) {
		var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 39 ) {
		var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 40 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 41 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 42 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 43 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 44 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 45 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 46 ) {
		var_977 = [30, 59, 32, 113, 17, 26, 119];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 47 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 48 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 49 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 50 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 51 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 52 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 53 ) {
		var_977 = [122, 121, 134, 152, 78, 160];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 54 ) {
		var_977 = [155, 156, 157, 86, 51, 71, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 55 ) {
		var_977 = [155, 156, 157, 86, 52, 71, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 56 ) {
		var_977 = [155, 156, 157, 86, 52, 11, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 57 ) {
		var_977 = [155, 156, 157, 86, 51, 71, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 58 ) {
		var_977 = [155, 156, 157, 86, 51, 71, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 59 ) {
		var_977 = [155, 156, 157, 86, 52, 71, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 60 ) {
		var_977 = [128, 158, 150, 68, 67, 172];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 61 ) {
		var_977 = [128, 158, 150, 68, 67, 172];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 62 ) {
		var_977 = [128, 158, 150, 68, 67, 172];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 63 ) {
		var_977 = [128, 158, 150, 68, 67, 172];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 64 ) {
		var_977 = [128, 158, 150, 68, 67, 172];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 65 ) {
		var_977 = [128, 158, 150, 68, 67, 151];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 66 ) {
		var_977 = [128, 158, 150, 68, 67, 151];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 67 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 68 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 69 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 70 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 71 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 72 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 73 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 74 ) {
		var_977 = [110, 109, 87, 139, 135, 56, 136];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 75 ) {
		var_977 = [124, 127, 99, 30, 154, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 76 ) {
		var_977 = [124, 127, 99, 30, 154, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 77 ) {
		var_977 = [124, 127, 99, 30, 154, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 78 ) {
		var_977 = [124, 127, 99, 30, 154, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 79 ) {
		var_977 = [124, 127, 99, 30, 154, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 80 ) {
		var_977 = [124, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 81 ) {
		var_977 = [124, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 82 ) {
		var_977 = [124, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 83 ) {
		var_977 = [124, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 84 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 85 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 86 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 87 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 88 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 89 ) {
		var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 90 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 91 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 92 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 93 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 94 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 95 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 96 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 97 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 98 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 99 ) {
		var_977 = [166, 166, 166, 166, 166, 166, 157];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 >= 100 ) {
		var_977 = [90];
		var_2917 = rnd(1);
		var_953 = var_977[var_2917];
	}
	return;
}
function func631(){
	var_2918 = var_91;
	if ( var_112 > 300 ) {
		var_2919 = rnd(10);
		if ( var_2919 >= 5 ) {
			var_91 = var_91 + 1;
		}
		if ( var_2919 >= 6 && var_112 > 500 ) {
			var_91 = var_91 + 1;
		}
		if ( var_2919 >= 7 && var_112 > 700 ) {
			var_91 = var_91 + 1;
		}
	}
	if ( var_91 == 1 ) {
		var_977 = [5, 1, 147];
		var_2917 = rnd(3);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 2 ) {
		var_977 = [5, 1, 88, 2];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 3 ) {
		var_977 = [93, 88, 3, 2];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 4 ) {
		var_977 = [93, 94, 3, 2, 77, 101];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 5 ) {
		var_977 = [94, 51, 3, 77, 7, 101];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 6 ) {
		var_977 = [7, 51, 9, 77, 39, 119];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 7 ) {
		var_977 = [7, 9, 39, 76, 52, 119];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 8 ) {
		var_977 = [73, 7, 39, 76, 52, 6];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 9 ) {
		var_977 = [73, 52, 4, 6, 141, 31];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 10 ) {
		var_977 = [4, 138, 99, 134, 141, 148, 31];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 11 ) {
		var_977 = [134, 13, 4, 138, 148, 12, 28];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 12 ) {
		var_977 = [13, 138, 71, 12, 56, 140, 131];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 13 ) {
		var_977 = [71, 12, 56, 140, 131, 115];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 14 ) {
		var_977 = [11, 56, 131, 115, 12];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 15 ) {
		var_977 = [11, 56, 115, 45, 29];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 16 ) {
		var_977 = [11, 56, 115, 45, 29, 31];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 17 ) {
		var_977 = [11, 56, 27, 45, 29, 31];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 18 ) {
		var_977 = [12, 31, 48, 47, 27];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 19 ) {
		var_977 = [31, 48, 47, 27, 11];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 20 ) {
		var_977 = [17, 46, 48, 47, 27];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 21 ) {
		var_977 = [17, 46, 47, 27, 35];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 22 ) {
		var_977 = [69, 136, 14, 45, 85];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 23 ) {
		var_977 = [69, 136, 14, 45, 85];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 24 ) {
		var_977 = [125, 38, 14, 95, 10, 85];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 25 ) {
		var_977 = [72, 38, 84, 65, 66, 65];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 26 ) {
		var_977 = [125, 145, 78, 66, 65];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 27 ) {
		var_977 = [59, 63, 43, 135, 44];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 28 ) {
		var_977 = [123, 80, 15, 59];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 29 ) {
		var_977 = [30, 32, 113, 152, 80];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 30 ) {
		var_977 = [30, 32, 113, 152, 121];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 31 ) {
		var_977 = [122, 160, 155, 150];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 32 ) {
		var_977 = [122, 160, 155, 150, 144];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 33 ) {
		var_977 = [156, 157, 86, 144, 150];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 34 ) {
		var_977 = [156, 157, 86, 144, 150, 158];
		var_2917 = rnd(6);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 35 ) {
		var_977 = [128, 68, 67, 172];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 36 ) {
		var_977 = [128, 68, 67, 172];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 37 ) {
		var_977 = [128, 68, 67, 172];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 38 ) {
		var_977 = [110, 109, 87, 139];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 39 ) {
		var_977 = [110, 109, 87, 139];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 40 ) {
		var_977 = [110, 109, 87, 139];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 41 ) {
		var_977 = [124, 129, 126, 154];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 42 ) {
		var_977 = [124, 129, 126, 154];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 43 ) {
		var_977 = [124, 129, 126, 154];
		var_2917 = rnd(4);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 44 ) {
		var_977 = [153, 133, 137, 21, 64];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 45 ) {
		var_977 = [153, 133, 137, 21, 64];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 46 ) {
		var_977 = [153, 133, 137, 21, 64];
		var_2917 = rnd(5);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 47 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 48 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 49 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 >= 50 ) {
		var_977 = [111, 98, 120, 60, 114, 118, 151];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	var_91 = var_2918;
	return;
}
function func632(){
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[1] = 5;
	}
	if ( var_2920 == 1 ) {
		var_992[1] = 1;
	}
	if ( var_2920 == 2 ) {
		var_992[1] = 88;
	}
	if ( var_2920 == 3 ) {
		var_992[1] = 88;
	}
	if ( var_2920 == 4 ) {
		var_992[1] = 2;
	}
	if ( var_2920 == 5 ) {
		var_992[1] = 2;
	}
	if ( var_2920 == 6 ) {
		var_992[1] = 93;
	}
	if ( var_2920 == 7 ) {
		var_992[1] = 93;
	}
	if ( var_2920 == 8 ) {
		var_992[1] = 3;
	}
	if ( var_2920 == 9 ) {
		var_992[1] = 3;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[2] = 94;
	}
	if ( var_2920 == 1 ) {
		var_992[2] = 51;
	}
	if ( var_2920 == 2 ) {
		var_992[2] = 7;
	}
	if ( var_2920 == 3 ) {
		var_992[2] = 7;
	}
	if ( var_2920 == 4 ) {
		var_992[2] = 9;
	}
	if ( var_2920 == 5 ) {
		var_992[2] = 9;
	}
	if ( var_2920 == 6 ) {
		var_992[2] = 39;
	}
	if ( var_2920 == 7 ) {
		var_992[2] = 39;
	}
	if ( var_2920 == 8 ) {
		var_992[2] = 77;
	}
	if ( var_2920 == 9 ) {
		var_992[2] = 77;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[3] = 76;
	}
	if ( var_2920 == 1 ) {
		var_992[3] = 76;
	}
	if ( var_2920 == 2 ) {
		var_992[3] = 52;
	}
	if ( var_2920 == 3 ) {
		var_992[3] = 52;
	}
	if ( var_2920 == 4 ) {
		var_992[3] = 6;
	}
	if ( var_2920 == 5 ) {
		var_992[3] = 6;
	}
	if ( var_2920 == 6 ) {
		var_992[3] = 73;
	}
	if ( var_2920 == 7 ) {
		var_992[3] = 73;
	}
	if ( var_2920 == 8 ) {
		var_992[3] = 4;
	}
	if ( var_2920 == 9 ) {
		var_992[3] = 4;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[4] = 138;
	}
	if ( var_2920 == 1 ) {
		var_992[4] = 138;
	}
	if ( var_2920 == 2 ) {
		var_992[4] = 134;
	}
	if ( var_2920 == 3 ) {
		var_992[4] = 134;
	}
	if ( var_2920 == 4 ) {
		var_992[4] = 99;
	}
	if ( var_2920 == 5 ) {
		var_992[4] = 99;
	}
	if ( var_2920 == 6 ) {
		var_992[4] = 119;
	}
	if ( var_2920 == 7 ) {
		var_992[4] = 119;
	}
	if ( var_2920 == 8 ) {
		var_992[4] = 141;
	}
	if ( var_2920 == 9 ) {
		var_992[4] = 141;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[5] = 148;
	}
	if ( var_2920 == 1 ) {
		var_992[5] = 148;
	}
	if ( var_2920 == 2 ) {
		var_992[5] = 71;
	}
	if ( var_2920 == 3 ) {
		var_992[5] = 71;
	}
	if ( var_2920 == 4 ) {
		var_992[5] = 140;
	}
	if ( var_2920 == 5 ) {
		var_992[5] = 140;
	}
	if ( var_2920 == 6 ) {
		var_992[5] = 28;
	}
	if ( var_2920 == 7 ) {
		var_992[5] = 28;
	}
	if ( var_2920 == 8 ) {
		var_992[5] = 12;
	}
	if ( var_2920 == 9 ) {
		var_992[5] = 12;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[6] = 31;
	}
	if ( var_2920 == 1 ) {
		var_992[6] = 27;
	}
	if ( var_2920 == 2 ) {
		var_992[6] = 56;
	}
	if ( var_2920 == 3 ) {
		var_992[6] = 56;
	}
	if ( var_2920 == 4 ) {
		var_992[6] = 131;
	}
	if ( var_2920 == 5 ) {
		var_992[6] = 131;
	}
	if ( var_2920 == 6 ) {
		var_992[6] = 47;
	}
	if ( var_2920 == 7 ) {
		var_992[6] = 47;
	}
	if ( var_2920 == 8 ) {
		var_992[6] = 115;
	}
	if ( var_2920 == 9 ) {
		var_992[6] = 115;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[7] = 46;
	}
	if ( var_2920 == 1 ) {
		var_992[7] = 46;
	}
	if ( var_2920 == 2 ) {
		var_992[7] = 48;
	}
	if ( var_2920 == 3 ) {
		var_992[7] = 48;
	}
	if ( var_2920 == 4 ) {
		var_992[7] = 11;
	}
	if ( var_2920 == 5 ) {
		var_992[7] = 11;
	}
	if ( var_2920 == 6 ) {
		var_992[7] = 35;
	}
	if ( var_2920 == 7 ) {
		var_992[7] = 35;
	}
	if ( var_2920 == 8 ) {
		var_992[7] = 69;
	}
	if ( var_2920 == 9 ) {
		var_992[7] = 69;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[8] = 125;
	}
	if ( var_2920 == 1 ) {
		var_992[8] = 125;
	}
	if ( var_2920 == 2 ) {
		var_992[8] = 38;
	}
	if ( var_2920 == 3 ) {
		var_992[8] = 38;
	}
	if ( var_2920 == 4 ) {
		var_992[8] = 14;
	}
	if ( var_2920 == 5 ) {
		var_992[8] = 14;
	}
	if ( var_2920 == 6 ) {
		var_992[8] = 29;
	}
	if ( var_2920 == 7 ) {
		var_992[8] = 10;
	}
	if ( var_2920 == 8 ) {
		var_992[8] = 10;
	}
	if ( var_2920 == 9 ) {
		var_992[8] = 136;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[9] = 63;
	}
	if ( var_2920 == 1 ) {
		var_992[9] = 63;
	}
	if ( var_2920 == 2 ) {
		var_992[9] = 145;
	}
	if ( var_2920 == 3 ) {
		var_992[9] = 145;
	}
	if ( var_2920 == 4 ) {
		var_992[9] = 78;
	}
	if ( var_2920 == 5 ) {
		var_992[9] = 78;
	}
	if ( var_2920 == 6 ) {
		var_992[9] = 43;
	}
	if ( var_2920 == 7 ) {
		var_992[9] = 43;
	}
	if ( var_2920 == 8 ) {
		var_992[9] = 45;
	}
	if ( var_2920 == 9 ) {
		var_992[9] = 45;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[10] = 72;
	}
	if ( var_2920 == 1 ) {
		var_992[10] = 72;
	}
	if ( var_2920 == 2 ) {
		var_992[10] = 65;
	}
	if ( var_2920 == 3 ) {
		var_992[10] = 65;
	}
	if ( var_2920 == 4 ) {
		var_992[10] = 66;
	}
	if ( var_2920 == 5 ) {
		var_992[10] = 66;
	}
	if ( var_2920 == 6 ) {
		var_992[10] = 123;
	}
	if ( var_2920 == 7 ) {
		var_992[10] = 123;
	}
	if ( var_2920 == 8 ) {
		var_992[10] = 135;
	}
	if ( var_2920 == 9 ) {
		var_992[10] = 135;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[11] = 15;
	}
	if ( var_2920 == 1 ) {
		var_992[11] = 15;
	}
	if ( var_2920 == 2 ) {
		var_992[11] = 80;
	}
	if ( var_2920 == 3 ) {
		var_992[11] = 80;
	}
	if ( var_2920 == 4 ) {
		var_992[11] = 44;
	}
	if ( var_2920 == 5 ) {
		var_992[11] = 44;
	}
	if ( var_2920 == 6 ) {
		var_992[11] = 32;
	}
	if ( var_2920 == 7 ) {
		var_992[11] = 32;
	}
	if ( var_2920 == 8 ) {
		var_992[11] = 113;
	}
	if ( var_2920 == 9 ) {
		var_992[11] = 113;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[12] = 30;
	}
	if ( var_2920 == 1 ) {
		var_992[12] = 30;
	}
	if ( var_2920 == 2 ) {
		var_992[12] = 122;
	}
	if ( var_2920 == 3 ) {
		var_992[12] = 122;
	}
	if ( var_2920 == 4 ) {
		var_992[12] = 121;
	}
	if ( var_2920 == 5 ) {
		var_992[12] = 121;
	}
	if ( var_2920 == 6 ) {
		var_992[12] = 152;
	}
	if ( var_2920 == 7 ) {
		var_992[12] = 152;
	}
	if ( var_2920 == 8 ) {
		var_992[12] = 160;
	}
	if ( var_2920 == 9 ) {
		var_992[12] = 160;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[13] = 157;
	}
	if ( var_2920 == 1 ) {
		var_992[13] = 157;
	}
	if ( var_2920 == 2 ) {
		var_992[13] = 157;
	}
	if ( var_2920 == 3 ) {
		var_992[13] = 156;
	}
	if ( var_2920 == 4 ) {
		var_992[13] = 156;
	}
	if ( var_2920 == 5 ) {
		var_992[13] = 156;
	}
	if ( var_2920 == 6 ) {
		var_992[13] = 86;
	}
	if ( var_2920 == 7 ) {
		var_992[13] = 86;
	}
	if ( var_2920 == 8 ) {
		var_992[13] = 155;
	}
	if ( var_2920 == 9 ) {
		var_992[13] = 155;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[14] = 158;
	}
	if ( var_2920 == 1 ) {
		var_992[14] = 158;
	}
	if ( var_2920 == 2 ) {
		var_992[14] = 158;
	}
	if ( var_2920 == 3 ) {
		var_992[14] = 68;
	}
	if ( var_2920 == 4 ) {
		var_992[14] = 68;
	}
	if ( var_2920 == 5 ) {
		var_992[14] = 68;
	}
	if ( var_2920 == 6 ) {
		var_992[14] = 128;
	}
	if ( var_2920 == 7 ) {
		var_992[14] = 128;
	}
	if ( var_2920 == 8 ) {
		var_992[14] = 21;
	}
	if ( var_2920 == 9 ) {
		var_992[14] = 21;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[15] = 87;
	}
	if ( var_2920 == 1 ) {
		var_992[15] = 87;
	}
	if ( var_2920 == 2 ) {
		var_992[15] = 87;
	}
	if ( var_2920 == 3 ) {
		var_992[15] = 150;
	}
	if ( var_2920 == 4 ) {
		var_992[15] = 150;
	}
	if ( var_2920 == 5 ) {
		var_992[15] = 150;
	}
	if ( var_2920 == 6 ) {
		var_992[15] = 150;
	}
	if ( var_2920 == 7 ) {
		var_992[15] = 67;
	}
	if ( var_2920 == 8 ) {
		var_992[15] = 67;
	}
	if ( var_2920 == 9 ) {
		var_992[15] = 67;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[16] = 110;
	}
	if ( var_2920 == 1 ) {
		var_992[16] = 110;
	}
	if ( var_2920 == 2 ) {
		var_992[16] = 110;
	}
	if ( var_2920 == 3 ) {
		var_992[16] = 110;
	}
	if ( var_2920 == 4 ) {
		var_992[16] = 139;
	}
	if ( var_2920 == 5 ) {
		var_992[16] = 139;
	}
	if ( var_2920 == 6 ) {
		var_992[16] = 139;
	}
	if ( var_2920 == 7 ) {
		var_992[16] = 172;
	}
	if ( var_2920 == 8 ) {
		var_992[16] = 172;
	}
	if ( var_2920 == 9 ) {
		var_992[16] = 172;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[17] = 129;
	}
	if ( var_2920 == 1 ) {
		var_992[17] = 129;
	}
	if ( var_2920 == 2 ) {
		var_992[17] = 129;
	}
	if ( var_2920 == 3 ) {
		var_992[17] = 124;
	}
	if ( var_2920 == 4 ) {
		var_992[17] = 124;
	}
	if ( var_2920 == 5 ) {
		var_992[17] = 137;
	}
	if ( var_2920 == 6 ) {
		var_992[17] = 137;
	}
	if ( var_2920 == 7 ) {
		var_992[17] = 137;
	}
	if ( var_2920 == 8 ) {
		var_992[17] = 126;
	}
	if ( var_2920 == 9 ) {
		var_992[17] = 126;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[18] = 159;
	}
	if ( var_2920 == 1 ) {
		var_992[18] = 159;
	}
	if ( var_2920 == 2 ) {
		var_992[18] = 159;
	}
	if ( var_2920 == 3 ) {
		var_992[18] = 159;
	}
	if ( var_2920 == 4 ) {
		var_992[18] = 151;
	}
	if ( var_2920 == 5 ) {
		var_992[18] = 151;
	}
	if ( var_2920 == 6 ) {
		var_992[18] = 151;
	}
	if ( var_2920 == 7 ) {
		var_992[18] = 133;
	}
	if ( var_2920 == 8 ) {
		var_992[18] = 133;
	}
	if ( var_2920 == 9 ) {
		var_992[18] = 133;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[19] = 120;
	}
	if ( var_2920 == 1 ) {
		var_992[19] = 120;
	}
	if ( var_2920 == 2 ) {
		var_992[19] = 120;
	}
	if ( var_2920 == 3 ) {
		var_992[19] = 120;
	}
	if ( var_2920 == 4 ) {
		var_992[19] = 114;
	}
	if ( var_2920 == 5 ) {
		var_992[19] = 114;
	}
	if ( var_2920 == 6 ) {
		var_992[19] = 114;
	}
	if ( var_2920 == 7 ) {
		var_992[19] = 98;
	}
	if ( var_2920 == 8 ) {
		var_992[19] = 98;
	}
	if ( var_2920 == 9 ) {
		var_992[19] = 98;
	}
	var_2920 = rnd(10);
	if ( var_2920 == 0 ) {
		var_992[20] = 111;
	}
	if ( var_2920 == 1 ) {
		var_992[20] = 111;
	}
	if ( var_2920 == 2 ) {
		var_992[20] = 111;
	}
	if ( var_2920 == 3 ) {
		var_992[20] = 60;
	}
	if ( var_2920 == 4 ) {
		var_992[20] = 60;
	}
	if ( var_2920 == 5 ) {
		var_992[20] = 60;
	}
	if ( var_2920 == 6 ) {
		var_992[20] = 60;
	}
	if ( var_2920 == 7 ) {
		var_992[20] = 64;
	}
	if ( var_2920 == 8 ) {
		var_992[20] = 64;
	}
	if ( var_2920 == 9 ) {
		var_992[20] = 64;
	}
	return;
}
function func633(){
	var_1720 = 1;
	for(var i=0; i<20; i++){
		if ( var_992[var_1720] == var_2921 ) {
			var_992[var_1720] = 0;
		}
		var_1720++;
	}
	return;
}
function func634(){
	if ( var_91 == 1 ) {
		var_977 = [77, 39, 76, 52, 26, 4, 138, 134, 13, 141, 71, 140];
		var_2917 = rnd(12);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 2 ) {
		var_977 = [28, 12, 56, 115, 131, 31, 46, 47, 27, 148, 48];
		var_2917 = rnd(11);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 3 ) {
		var_977 = [99, 46, 136, 14, 17, 35, 38, 95];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 4 ) {
		var_977 = [45, 85, 43, 59, 145, 84, 125, 72, 65, 123];
		var_2917 = rnd(10);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 5 ) {
		var_977 = [66, 44, 63, 78, 135, 15, 80, 32, 30, 113];
		var_2917 = rnd(10);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 6 ) {
		var_977 = [122, 121, 152, 160, 155, 156, 157, 86];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 7 ) {
		var_977 = [128, 158, 150, 68, 67, 151, 144];
		var_2917 = rnd(7);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 8 ) {
		var_977 = [110, 109, 87, 139, 153, 124, 127, 154];
		var_2917 = rnd(8);
		var_953 = var_977[var_2917];
	}
	if ( var_91 == 9 ) {
		var_977 = [129, 126, 137, 64, 111, 98, 120, 60, 114, 118];
		var_2917 = rnd(10);
		var_953 = var_977[var_2917];
	}
	if ( var_91 >= 10 ) {
		var_2922 = rnd(10);
		if ( var_2922 <= 5 ) {
			var_2917 = rnd(19);
			if ( var_2917 == 0 ) {
				var_953 = 129;
			}
			if ( var_2917 == 1 ) {
				var_953 = 126;
			}
			if ( var_2917 == 2 ) {
				var_953 = 137;
			}
			if ( var_2917 == 3 ) {
				var_953 = 64;
			}
			if ( var_2917 == 4 ) {
				var_953 = 111;
			}
			if ( var_2917 == 5 ) {
				var_953 = 98;
			}
			if ( var_2917 == 6 ) {
				var_953 = 120;
			}
			if ( var_2917 == 7 ) {
				var_953 = 60;
			}
			if ( var_2917 == 8 ) {
				var_953 = 114;
			}
			if ( var_2917 == 9 ) {
				var_953 = 87;
			}
			if ( var_2917 == 10 ) {
				var_953 = 127;
			}
			if ( var_2917 == 11 ) {
				var_953 = 154;
			}
			if ( var_2917 == 12 ) {
				var_953 = 160;
			}
			if ( var_2917 == 13 ) {
				var_953 = 68;
			}
			if ( var_2917 == 14 ) {
				var_953 = 150;
			}
			if ( var_2917 == 15 ) {
				var_953 = 161;
			}
			if ( var_2917 == 16 ) {
				var_953 = 158;
			}
			if ( var_2917 == 17 ) {
				var_953 = 67;
			}
			if ( var_2917 == 18 ) {
				var_953 = 159;
			}
		}
		if ( var_2922 == 6 || var_2922 == 7 || var_2922 == 8 ) {
			var_2917 = rnd(28);
			if ( var_2917 == 0 ) {
				var_953 = 133;
			}
			if ( var_2917 == 1 ) {
				var_953 = 124;
			}
			if ( var_2917 == 2 ) {
				var_953 = 151;
			}
			if ( var_2917 == 3 ) {
				var_953 = 38;
			}
			if ( var_2917 == 4 ) {
				var_953 = 31;
			}
			if ( var_2917 == 5 ) {
				var_953 = 148;
			}
			if ( var_2917 == 6 ) {
				var_953 = 27;
			}
			if ( var_2917 == 7 ) {
				var_953 = 78;
			}
			if ( var_2917 == 8 ) {
				var_953 = 135;
			}
			if ( var_2917 == 9 ) {
				var_953 = 118;
			}
			if ( var_2917 == 10 ) {
				var_953 = 15;
			}
			if ( var_2917 == 11 ) {
				var_953 = 80;
			}
			if ( var_2917 == 12 ) {
				var_953 = 85;
			}
			if ( var_2917 == 13 ) {
				var_953 = 59;
			}
			if ( var_2917 == 14 ) {
				var_953 = 115;
			}
			if ( var_2917 == 15 ) {
				var_953 = 131;
			}
			if ( var_2917 == 16 ) {
				var_953 = 39;
			}
			if ( var_2917 == 17 ) {
				var_953 = 26;
			}
			if ( var_2917 == 18 ) {
				var_953 = 4;
			}
			if ( var_2917 == 19 ) {
				var_953 = 134;
			}
			if ( var_2917 == 20 ) {
				var_953 = 72;
			}
			if ( var_2917 == 21 ) {
				var_953 = 125;
			}
			if ( var_2917 == 22 ) {
				var_953 = 63;
			}
			if ( var_2917 == 23 ) {
				var_953 = 153;
			}
			if ( var_2917 == 24 ) {
				var_953 = 155;
			}
			if ( var_2917 == 25 ) {
				var_953 = 21;
			}
			if ( var_2917 == 26 ) {
				var_953 = 29;
			}
			if ( var_2917 == 27 ) {
				var_953 = 30;
			}
		}
		if ( var_2922 == 9 ) {
			var_2917 = rnd(62);
			if ( var_2917 == 0 ) {
				var_953 = 79;
			}
			if ( var_2917 == 1 ) {
				var_953 = 1;
			}
			if ( var_2917 == 2 ) {
				var_953 = 5;
			}
			if ( var_2917 == 3 ) {
				var_953 = 88;
			}
			if ( var_2917 == 4 ) {
				var_953 = 147;
			}
			if ( var_2917 == 5 ) {
				var_953 = 2;
			}
			if ( var_2917 == 6 ) {
				var_953 = 93;
			}
			if ( var_2917 == 7 ) {
				var_953 = 3;
			}
			if ( var_2917 == 8 ) {
				var_953 = 94;
			}
			if ( var_2917 == 9 ) {
				var_953 = 77;
			}
			if ( var_2917 == 10 ) {
				var_953 = 51;
			}
			if ( var_2917 == 11 ) {
				var_953 = 7;
			}
			if ( var_2917 == 12 ) {
				var_953 = 9;
			}
			if ( var_2917 == 13 ) {
				var_953 = 39;
			}
			if ( var_2917 == 14 ) {
				var_953 = 76;
			}
			if ( var_2917 == 15 ) {
				var_953 = 6;
			}
			if ( var_2917 == 16 ) {
				var_953 = 52;
			}
			if ( var_2917 == 17 ) {
				var_953 = 73;
			}
			if ( var_2917 == 18 ) {
				var_953 = 101;
			}
			if ( var_2917 == 19 ) {
				var_953 = 141;
			}
			if ( var_2917 == 20 ) {
				var_953 = 13;
			}
			if ( var_2917 == 21 ) {
				var_953 = 119;
			}
			if ( var_2917 == 22 ) {
				var_953 = 99;
			}
			if ( var_2917 == 23 ) {
				var_953 = 138;
			}
			if ( var_2917 == 24 ) {
				var_953 = 71;
			}
			if ( var_2917 == 25 ) {
				var_953 = 12;
			}
			if ( var_2917 == 26 ) {
				var_953 = 56;
			}
			if ( var_2917 == 27 ) {
				var_953 = 140;
			}
			if ( var_2917 == 28 ) {
				var_953 = 27;
			}
			if ( var_2917 == 29 ) {
				var_953 = 11;
			}
			if ( var_2917 == 30 ) {
				var_953 = 28;
			}
			if ( var_2917 == 31 ) {
				var_953 = 17;
			}
			if ( var_2917 == 32 ) {
				var_953 = 14;
			}
			if ( var_2917 == 33 ) {
				var_953 = 69;
			}
			if ( var_2917 == 34 ) {
				var_953 = 18;
			}
			if ( var_2917 == 35 ) {
				var_953 = 10;
			}
			if ( var_2917 == 36 ) {
				var_953 = 84;
			}
			if ( var_2917 == 37 ) {
				var_953 = 48;
			}
			if ( var_2917 == 38 ) {
				var_953 = 95;
			}
			if ( var_2917 == 39 ) {
				var_953 = 43;
			}
			if ( var_2917 == 40 ) {
				var_953 = 66;
			}
			if ( var_2917 == 41 ) {
				var_953 = 113;
			}
			if ( var_2917 == 42 ) {
				var_953 = 123;
			}
			if ( var_2917 == 43 ) {
				var_953 = 65;
			}
			if ( var_2917 == 44 ) {
				var_953 = 152;
			}
			if ( var_2917 == 45 ) {
				var_953 = 86;
			}
			if ( var_2917 == 46 ) {
				var_953 = 156;
			}
			if ( var_2917 == 47 ) {
				var_953 = 157;
			}
			if ( var_2917 == 48 ) {
				var_953 = 128;
			}
			if ( var_2917 == 49 ) {
				var_953 = 109;
			}
			if ( var_2917 == 50 ) {
				var_953 = 110;
			}
			if ( var_2917 == 51 ) {
				var_953 = 139;
			}
			if ( var_2917 == 52 ) {
				var_953 = 122;
			}
			if ( var_2917 == 53 ) {
				var_953 = 121;
			}
			if ( var_2917 == 54 ) {
				var_953 = 35;
			}
			if ( var_2917 == 55 ) {
				var_953 = 145;
			}
			if ( var_2917 == 56 ) {
				var_953 = 47;
			}
			if ( var_2917 == 57 ) {
				var_953 = 46;
			}
			if ( var_2917 == 58 ) {
				var_953 = 45;
			}
			if ( var_2917 == 59 ) {
				var_953 = 136;
			}
			if ( var_2917 == 60 ) {
				var_953 = 144;
			}
			if ( var_2917 == 61 ) {
				var_953 = 172;
			}
		}
	}
	return;/*
	return;
	return;*/
}
function func635(){
	if ( var_357 == 110 ) {
		var_357 = 108;
	}
	var_2923 = var_357;
	if ( var_156[101] == 1 && var_2924 == 0 ) {
		var_2925 = rnd(2);
	}
	var_2926 = 1;
	var_2927 = 0;
	if ( var_270 == 135 ) {
		var_341 = 1;
	}
	if ( var_156[105] == 0 ) {
		var_1030 = 0;
	}
	func636();	// 追加
}
function func636(){
	var_1194 = 0;
	var_347 = var_66;
	var_348 = var_67;
	if ( var_126 == 1 ) {
		var_288 = rnd(8);
		if ( var_288 == 0 ) {
			var_199 = 4;
		}
		if ( var_288 == 1 ) {
			var_199 = 6;
		}
		if ( var_288 == 2 ) {
			var_199 = 8;
		}
		if ( var_288 == 3 ) {
			var_199 = 2;
		}
		if ( var_288 == 4 ) {
			var_199 = 1;
		}
		if ( var_288 == 5 ) {
			var_199 = 3;
		}
		if ( var_288 == 6 ) {
			var_199 = 7;
		}
		if ( var_288 == 7 ) {
			var_199 = 9;
		}
	}
	if ( var_156[121] == 1 && var_171 == 0 ) {
		var_2927 = rnd(6);
		if ( var_2927 == 1 ) {
			var_288 = rnd(8);
			if ( var_288 == 0 ) {
				var_199 = 4;
			}
			if ( var_288 == 1 ) {
				var_199 = 6;
			}
			if ( var_288 == 2 ) {
				var_199 = 8;
			}
			if ( var_288 == 3 ) {
				var_199 = 2;
			}
			if ( var_288 == 4 ) {
				var_199 = 1;
			}
			if ( var_288 == 5 ) {
				var_199 = 3;
			}
			if ( var_288 == 6 ) {
				var_199 = 7;
			}
			if ( var_288 == 7 ) {
				var_199 = 9;
			}
		}
	}
	if ( var_357 == 100 || var_357 == 398 ) {
		func643();
		if ( var_1280 == 1 ) {
			var_1280 = 0;
			var_243 = 0;
			var_217 = 1;
			return func637();
		}
		var_1280 = 0;
	}
	func636_1();
}
function func636_1(){
	var_347 = var_66;
	var_348 = var_67;
	if ( var_199 == 4 ) {
		var_347 = var_347 - 1;
	}
	if ( var_199 == 6 ) {
		var_347 = var_347 + 1;
	}
	if ( var_199 == 8 ) {
		var_348 = var_348 - 1;
	}
	if ( var_199 == 2 ) {
		var_348 = var_348 + 1;
	}
	if ( var_199 == 1 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 + 1;
	}
	if ( var_199 == 3 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 + 1;
	}
	if ( var_199 == 7 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 - 1;
	}
	if ( var_199 == 9 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 - 1;
	}
	var_2928 = var_347 - 1;
	var_2929 = var_347 + 1;
	var_2930 = var_348 + 1;
	var_2931 = var_348 - 1;
	if ( var_357 != 108 && var_71[var_66][var_67] != 0 ) {
		var_2932 = 0;
		if ( var_199 == 1 && var_71[var_347][var_67] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 1 && var_71[var_66][var_348] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 3 && var_71[var_347][var_67] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 3 && var_71[var_66][var_348] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 7 && var_71[var_347][var_67] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 7 && var_71[var_66][var_348] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 9 && var_71[var_347][var_67] == 0 ) {
			var_2932 = 1;
			return func651();
		}
		if ( var_199 == 9 && var_71[var_66][var_348] == 0 ) {
			var_2932 = 1;
			return func651();
		}
	}
	var_314 = var_82[var_347][var_348];
	if ( var_62 == 0 ) {
		if ( var_66 == 16 && var_67 == 21 && var_199 == 8 ) {
			return func786();
		}
		if ( var_66 == 17 && var_67 == 7 && var_199 == 8 ) {
			return func818();
		}
		if ( var_66 == 16 && var_67 == 7 && var_199 == 8 ) {
			return func765();
		}
		if ( var_66 == 15 && var_67 == 6 && var_199 == 6 ) {
			return func765();
		}
		if ( var_66 == 15 && var_67 == 7 && var_199 == 4 ) {
			return func766();
		}
		if ( var_66 == 15 && var_67 == 6 && var_199 == 4 ) {
			return func766();
		}
		if ( var_66 == 14 && var_67 == 8 && var_199 == 8 ) {
			return func766();
		}
		if ( var_66 == 15 && var_67 == 6 && var_199 == 8 ) {
			return func767();
		}
		if ( var_404 == 0 && var_66 == 12 && var_67 == 8 && var_199 == 8 ) {
			return func768();
		}
		if ( var_404 == 0 && var_66 == 13 && var_67 == 8 && var_199 == 8 ) {
			return func768();
		}
		if ( var_526 >= 1 && var_66 == 12 && var_67 == 8 && var_199 == 8 && var_759 >= 2 ) {
			return func832();
		}
		if ( var_526 >= 1 && var_66 == 13 && var_67 == 8 && var_199 == 8 && var_759 >= 2 ) {
			return func833();
		}
	}
	if ( var_139 == 0 && var_82[var_347][var_348] != 0 ) {
		if ( var_83[var_314][31] == 4 || var_83[var_314][31] == 5 ) {
			if ( var_83[var_314][12] != 0 || var_83[var_314][13] != 0 || var_83[var_314][17] != 0 ) {
				return func735();
			}
		}
		if ( var_163 != 0 || var_123 != 0 ) {
			if ( var_83[var_314][31] == 4 || var_83[var_314][31] == 5 || var_83[var_314][0] == 61 ) {
				if ( var_83[var_314][0] != 50 ) {
					return func735();
				}
			}
		}
		if ( var_83[var_314][0] == 50 ) {
			return func651();
		}
		if ( var_83[var_314][0] == 173 ) {
			func640();
			return func835();
		}
		if ( var_83[var_314][0] == 169 ) {
			func640();
			return func728();
		}
		if ( var_83[var_314][0] == 149 ) {
			func640();
			return func756();
		}
		if ( var_83[var_314][0] == 108 ) {
			func640();
			return func738();
		}
		if ( var_83[var_314][0] == 130 ) {
			func640();
			return func760();
		}
		if ( var_83[var_314][0] == 142 ) {
			func640();
			return func778();
		}
		if ( var_83[var_314][0] == 33 ) {
			func640();
			return func707();
		}
		if ( var_83[var_314][0] == 36 ) {
			func640();
			return func730();
		}
		if ( var_83[var_314][0] == 105 ) {
			func640();
			return func743();
		}
		if ( var_83[var_314][0] == 106 ) {
			func640();
			return func748();
		}
		if ( var_83[var_314][0] == 107 ) {
			func640();
			return func753();
		}
		if ( var_83[var_314][0] == 57 ) {
			func640();
			return func755();
		}
		if ( var_83[var_314][0] == 58 ) {
			func640();
			return func758();
		}
		if ( var_83[var_314][0] == 61 ) {
			func640();
			return func759();
		}
		if ( var_83[var_314][0] == 163 ) {
			return func794();
		}
		if ( var_83[var_314][0] == 70 ) {
			return func761();
		}
		if ( var_83[var_314][0] == 74 ) {
			func640();
			return func769();
		}
		if ( var_83[var_314][0] == 75 ) {
			return func773();
		}
		if ( var_83[var_314][0] == 55 ) {
			func640();
			return func161();
		}
		if ( var_83[var_314][0] == 81 ) {
			func640();
			return func787();
		}
		if ( var_83[var_314][0] == 82 ) {
			return func757();
		}
		if ( var_83[var_314][0] == 83 ) {
			func640();
			return func793();
		}
		if ( var_83[var_314][0] == 49 ) {
			func640();
			return func725();
		}
		if ( var_83[var_314][31] == 5 && var_83[var_314][0] == 6 ) {
			func640();
			return func726();
		}
		if ( var_83[var_314][31] == 5 && var_83[var_314][0] == 17 ) {
			func640();
			return func727();
		}
		if ( var_83[var_314][31] == 5 ) {
			func640();
			return func734();
		}
	}
	if ( var_71[var_347][var_348] == 0 ) {
		return func651();
	}
	if ( var_82[var_347][var_348] == 0 && var_156[108] == 0 ) {
		return func651();
	}
	if ( var_82[var_347][var_348] == 0 && var_156[108] == 1 ) {
		var_2933 = var_347;
		var_2934 = var_348;
		if ( var_199 == 4 ) {
			var_347 = var_347 - 1;
		}
		if ( var_199 == 6 ) {
			var_347 = var_347 + 1;
		}
		if ( var_199 == 8 ) {
			var_348 = var_348 - 1;
		}
		if ( var_199 == 2 ) {
			var_348 = var_348 + 1;
		}
		if ( var_199 == 1 ) {
			var_347 = var_347 - 1;
			var_348 = var_348 + 1;
		}
		if ( var_199 == 3 ) {
			var_347 = var_347 + 1;
			var_348 = var_348 + 1;
		}
		if ( var_199 == 7 ) {
			var_347 = var_347 - 1;
			var_348 = var_348 - 1;
		}
		if ( var_199 == 9 ) {
			var_347 = var_347 + 1;
			var_348 = var_348 - 1;
		}
		if ( var_347 < 0 ) {
			var_347 = 0;
		}
		if ( var_347 > var_33 ) {
			var_347 = var_33;
		}
		if ( var_348 < 0 ) {
			var_348 = 0;
		}
		if ( var_348 > var_34 ) {
			var_348 = var_34;
		}
		var_314 = var_82[var_347][var_348];
		if ( var_71[var_347][var_348] == 0 || var_82[var_347][var_348] == 0 || var_83[var_314][31] == 4 || var_83[var_314][31] == 5 ) {
			var_347 = var_66;
			var_348 = var_67;
			if ( var_199 == 4 ) {
				var_347 = var_347 - 1;
			}
			if ( var_199 == 6 ) {
				var_347 = var_347 + 1;
			}
			if ( var_199 == 8 ) {
				var_348 = var_348 - 1;
			}
			if ( var_199 == 2 ) {
				var_348 = var_348 + 1;
			}
			if ( var_199 == 1 ) {
				var_347 = var_347 - 1;
				var_348 = var_348 + 1;
			}
			if ( var_199 == 3 ) {
				var_347 = var_347 + 1;
				var_348 = var_348 + 1;
			}
			if ( var_199 == 7 ) {
				var_347 = var_347 - 1;
				var_348 = var_348 - 1;
			}
			if ( var_199 == 9 ) {
				var_347 = var_347 + 1;
				var_348 = var_348 - 1;
			}
			return func651();
		}
		if ( var_80[var_2933][var_2934] > 0 ) {
			var_2935 = var_80[var_2933][var_2934];
			var_81[var_2935][4] = 1;
		}
		var_357 = 110;
		var_750 = 1;
		var_748 = var_347 - var_66 + 4;
		var_749 = var_348 - var_67 + 4;
	}
	if ( var_156[318] == 1 && var_83[var_314][0] > 0 ) {
		var_2936 = rnd(8);
		if ( var_2936 == 0 ) {
			var_747 = 1;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ジャンピン・ジャック・フラッシュ！」";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_83[var_314][17] = 1;
			var_2937 = 1;
			var_455 = var_347;
			var_456 = var_348;
			func660();
			var_2937 = 0;
			var_347 = var_1894;
			var_348 = var_1895;
			var_243 = 0;
			var_217 = 1;
			return func637();
		}
	}
	if ( var_1035 >= 1 ) {
		var_243 = 0;
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "この恨み はらさでおくべきかァ—！";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_243 = 1;
	}
	if ( var_143 >= 1 ) {
		var_314 = var_82[var_347][var_348];
		var_437 = var_83[var_314][0];
		func626();
		var_2267[8] = var_2267[7];
		var_2267[7] = var_2267[6];
		var_2267[6] = var_2267[5];
		var_2267[5] = var_2267[4];
		var_2267[4] = var_2267[3];
		var_2267[3] = var_2267[2];
		var_2267[2] = var_2267[1];
		var_2267[1] = var_2267[0];
		var_2267[0] = var_83[var_314][0];
		if ( var_2267[0] != 0 && var_2267[0] == var_2267[1] ) {
			var_143 = 2;
		}
		if ( var_143 == 2 && var_2267[1] == var_2267[2] ) {
			var_143 = 3;
		}
		if ( var_143 == 3 && var_2267[2] == var_2267[3] ) {
			var_143 = 4;
		}
		if ( var_143 == 4 && var_2267[3] == var_2267[4] ) {
			var_143 = 5;
		}
		if ( var_143 == 5 && var_2267[4] == var_2267[5] ) {
			var_143 = 6;
		}
		if ( var_143 == 6 && var_2267[5] == var_2267[6] ) {
			var_143 = 7;
		}
		if ( var_143 == 7 && var_2267[6] == var_2267[7] ) {
			var_143 = 8;
		}
		if ( var_143 == 8 && var_2267[7] == var_2267[8] ) {
			var_143 = 9;
		}
		if ( var_2267[0] != 0 && var_2267[0] != var_2267[1] ) {
			var_143 = 1;
		}
		if ( var_143 >= 2 ) {
			var_243 = 0;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			func094();
			if ( var_143 == 2 ) {
				var_293 = "きさまの 動きやパワーは";
				var_294 = "さっきしっかり とりこんだ！";
			}
			if ( var_143 == 3 ) {
				var_293 = "ウシャア———————ッ！！";
				var_294 = "";
			}
			if ( var_143 == 4 ) {
				var_293 = "絶っ〜〜〜〜〜〜〜〜〜対に！";
				var_294 = "負けなあああああああいィィィ";
			}
			if ( var_143 == 5 ) {
				var_293 = "さすが" + var_891 + "…";
				var_294 = "しかしその動き… スデに憶えた！";
			}
			if ( var_143 == 6 ) {
				var_293 = "さて〜〜〜　今度の攻撃には";
				var_294 = "\t耐えられるかな？";
			}
			if ( var_143 == 7 ) {
				var_293 = "ウシャアアアアアア———ッ";
				var_294 = "死ねエエエイ——っ！！";
			}
			if ( var_143 == 8 ) {
				var_293 = "とどめの とっておきのダメ押しだッ！";
				var_294 = "";
			}
			if ( var_143 == 9 ) {
				var_293 = "この首 もらったァ———ッ!!";
				var_294 = "";
			}
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_243 = 1;
		}
	}
	func639();
	if ( var_2867 == 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
		if ( var_2938 == 1 ) {
			var_293 = "ヒラリと攻撃をかわされた";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		var_2939 = 1;
		if ( var_156[105] == 1 ) {
			var_1030 = var_1030 + 1;
		}
		return func651();
	}
	if ( var_83[var_314][0] == 152 ) {
		var_2936 = rnd(4);
		if ( var_2936 == 0 ) {
			var_243 = 1;
			func089();
			for(var k=0; k<3; k++){
				func337();
			}
			if ( var_83[var_314][0] != 79 && var_83[var_314][23] == 0 ) {
				if ( var_83[var_314][1] == var_66 && var_83[var_314][2] > var_67 ) {
					var_83[var_314][5] = 8;
				}
				if ( var_83[var_314][1] == var_66 && var_83[var_314][2] < var_67 ) {
					var_83[var_314][5] = 2;
				}
				if ( var_83[var_314][1] < var_66 && var_83[var_314][2] == var_67 ) {
					var_83[var_314][5] = 6;
				}
				if ( var_83[var_314][1] > var_66 && var_83[var_314][2] == var_67 ) {
					var_83[var_314][5] = 4;
				}
				if ( var_83[var_314][1] > var_66 && var_83[var_314][2] > var_67 ) {
					var_83[var_314][5] = 7;
				}
				if ( var_83[var_314][1] < var_66 && var_83[var_314][2] > var_67 ) {
					var_83[var_314][5] = 9;
				}
				if ( var_83[var_314][1] > var_66 && var_83[var_314][2] < var_67 ) {
					var_83[var_314][5] = 1;
				}
				if ( var_83[var_314][1] < var_66 && var_83[var_314][2] < var_67 ) {
					var_83[var_314][5] = 3;
				}
			}
			func091();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "ﾄﾘｯｼｭはｺﾞﾑのように柔らかくなっている！";
			var_294 = "";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_243 = 0;
			func529();
			var_217 = 1;
			return func637();
		}
	}
	var_314 = var_82[var_347][var_348];
	var_437 = var_83[var_314][0];
	func626();
	func638();
	var_2940 = rnd(22);
	if ( var_162 == 1 ) {
		if ( var_2940 == 1 || var_2940 == 2 ) {
			var_2940 = 0;
		}
	}
	if ( var_156[106] == 1 && var_2940 == 1 ) {
		var_2940 = 0;
	}
	if ( var_357 == 104 && var_129 == 0 ) {
		var_2940 = 0;
	}
	if ( var_2927 == 1 ) {
		var_2940 = 0;
	}
	if ( var_357 == 106 && var_139 >= 1 ) {
		var_2940 = 0;
	}
	if ( var_156[105] == 1 && var_1030 >= 2 ) {
		var_2940 = 0;
	}
	if ( var_2940 == 0 ) {
		var_209 = var_209 * 2;
		var_1194 = 1;
	}
	if ( var_357 == 123 && var_2940 == 0 && var_83[var_314][0] != 33 && var_83[var_314][0] != 34 && var_83[var_314][0] != 132 && var_83[var_314][0] != 143 ) {
		var_209 = 999;
	}
	var_2927 = 0;
	if ( var_1194 == 1 && var_162 == 1 ) {
		var_2941 = 0;
		var_243 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_2915 = rnd(5);
		func094();
		if ( var_2915 == 0 ) {
			var_293 = "なにかわからんが喰らえッ！";
			var_294 = "";
		}
		if ( var_2915 == 1 ) {
			var_293 = "帝王はこのディアボロだッ！";
			var_294 = "";
		}
		if ( var_2915 == 2 ) {
			var_293 = "お前はわたしを本気で怒らせたッ！！";
			var_294 = "";
		}
		if ( var_2915 == 3 ) {
			var_293 = "とどめだァ————ッ！";
			var_294 = "";
		}
		if ( var_2915 == 4 ) {
			var_293 = "死んだことを後悔する時間をも";
			var_294 = "与えんッ！！";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_243 = 1;
	}
	var_83[var_314][3] = var_83[var_314][3] - var_209;
	var_243 = 1;
	func089();
	var_func636 = 3;
	func337(func636_10);
}
function func636_10(){
	var_func636--;
	if(var_func636 > 0){
		return func337(func636_10);
	}
	if ( var_83[var_314][0] != 79 && var_83[var_314][23] == 0 ) {
		var_2942 = var_83[var_314][5];
		if ( var_83[var_314][1] == var_66 && var_83[var_314][2] > var_67 ) {
			var_83[var_314][5] = 8;
		}
		if ( var_83[var_314][1] == var_66 && var_83[var_314][2] < var_67 ) {
			var_83[var_314][5] = 2;
		}
		if ( var_83[var_314][1] < var_66 && var_83[var_314][2] == var_67 ) {
			var_83[var_314][5] = 6;
		}
		if ( var_83[var_314][1] > var_66 && var_83[var_314][2] == var_67 ) {
			var_83[var_314][5] = 4;
		}
		if ( var_83[var_314][1] > var_66 && var_83[var_314][2] > var_67 ) {
			var_83[var_314][5] = 7;
		}
		if ( var_83[var_314][1] < var_66 && var_83[var_314][2] > var_67 ) {
			var_83[var_314][5] = 9;
		}
		if ( var_83[var_314][1] > var_66 && var_83[var_314][2] < var_67 ) {
			var_83[var_314][5] = 1;
		}
		if ( var_83[var_314][1] < var_66 && var_83[var_314][2] < var_67 ) {
			var_83[var_314][5] = 3;
		}
	}
	func091();
	var_747 = 1;
	var_83[var_314][8] = 1;
	var_func337 = 2;
	func636_20();
}
function func636_20(){
	var_83[var_314][8] = 0;
	func337(func636_21);
}
function func636_21(){
	var_83[var_314][8] = 1;
	func337(func636_22);
}
function func636_22(){
	func337(func636_23);
}
function func636_23(){
	var_func337--;
	if(var_func337 > 0){
		return func636_20();
	}
	var_314 = var_82[var_347][var_348];
	var_437 = var_83[var_314][0];
	if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
		var_437 = var_83[var_314][31];
	}
	func626();
	var_2943 = var_891;
	var_1030 = 0;
	if ( var_127 != 0 || var_132 != 0 ) {
		var_891 = "何者か";
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾃﾞｨｱﾎﾞﾛは" + var_891 + "に";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	if ( var_1194 == 1 ) {
		var_25_1 = var_25[6];
		var_26_1 = var_26[6];
		var_27_1 = var_27[6];
	}
	var_func337 = 3;
	func337(func636_30);
}
function func636_30(){
	var_func337--;
	if(var_func337 > 0){
		return func337(func636_30);
	}
	var_294 = "" + var_209 + "のダメージ！";
	if ( var_209 == 999 ) {
		var_294 = "致命的なダメージ！";
	}
	var_198 = 1;
	var_300 = 0;
	func047();
	func337(func636_31);
}
function func636_31(){
	if ( var_83[var_314][0] == 159 && var_83[var_314][20] == 0 ) {
		var_1550 = var_83[var_314][1];
		var_230 = var_83[var_314][2];
		var_2413 = 1;
		var_768 = 1;
		var_2434 = 1;
		func536();
		var_768 = 0;
		var_2434 = 0;
		var_2413 = 0;
	}
	if ( var_156[313] == 1 && var_211 != var_352 && var_209 != 0 ) {
		var_2944 = rnd(8);
		if ( var_2944 == 0 || var_1194 == 1 ) {
			DSPLAY(161);
			var_1299 = 0;
			var_271 = 1;
			var_1297 = 1;
			for(var k=0; k<20; k++){
				func337();
				var_1297++;
			}
			var_271 = 0;
			var_1297 = 0;
			var_211 = var_211 + var_209;
			if ( var_211 >= var_352 ) {
				var_211 = var_352;
			}
			var_296 = "" + var_209 + "の養分を吸収した。";
			var_297 = "";
			var_2945 = var_437;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
	}
	if ( var_83[var_314][0] == 61 && var_139 >= 1 ) {
		var_139 = 0;
		func038();
	}
	if ( var_83[var_314][0] == 101 || var_83[var_314][0] == 102 || var_83[var_314][0] == 103 || var_83[var_314][0] == 104 ) {
		var_2946 = var_83[var_314][0];
		var_2947 = var_83[var_314][1];
		var_2948 = var_83[var_314][2];
		var_2949 = var_83[var_314][1] + 1;
		var_2950 = var_83[var_314][2] + 1;
		var_2951 = var_83[var_314][1] - 1;
		var_2952 = var_83[var_314][2] - 1;
	}
	if ( var_83[var_314][0] == 13 && var_83[var_314][13] == 0 && var_83[var_314][12] == 0 && var_83[var_314][20] == 0 && var_410 != 409 ) {
		var_2953 = rnd(4);
		if ( var_2953 == 0 ) {
			var_83[var_314][8] = 1;
			func623();
			var_83[var_314][8] = 0;
		}
	}
	if ( var_156[317] == 1 && var_83[var_314][0] != 13 && var_83[var_314][0] != 143 && var_83[var_314][0] != 132 && var_83[var_314][0] != 20 && var_83[var_314][31] != 4 && var_83[var_314][31] != 5 ) {
		var_2953 = rnd(8);
		if ( var_2953 == 0 ) {
			var_1374 = var_83[var_314][0];
			if ( var_1374 == 19 ) {
				var_1374 = 90;
			}
			if ( var_1374 == 96 ) {
				var_1374 = 93;
			}
			var_2489 = var_83[var_314][5];
			var_83[var_314][8] = 1;
			func624();
			var_83[var_314][8] = 0;
			var_1374 = 0;
		}
	}
	var_314 = var_82[var_347][var_348];
	var_437 = var_83[var_314][0];
	func626();
	if ( var_83[var_314][3] <= 0 ) {
		if ( var_62 == 1 && var_83[var_314][0] == 20 ) {
			func685(func636_35);
		}
		func636_35();
		return;
	}
	func636_50();
}
function func636_35(){
	if ( var_62 == 2 && var_83[var_314][0] == 132 ) {
		return func686(func636_36);
	}
	func636_36();
}
function func636_36(){
	if ( var_62 == 3 && var_83[var_314][0] == 143 ) {
		return func687(func636_37);
	}
	func636_37();
}
function func636_37(){
	if ( var_62 == 5 && var_83[var_314][16] >= 1000 ) {
		var_2921 = var_83[var_314][0];
		return func633(func636_38);
	}
	func636_38();
}
function func636_38(){
	var_func636 = 2;
	func636_39();
}
function func636_39(){
	var_83[var_314][11] = 1;
	func337(func636_40);
}
function func636_40(){
	var_83[var_314][11] = 0;
	var_83[var_314][8] = 1;
	func337(func636_41);
}
function func636_41(){
	var_func636--;
	if(var_func636 > 0){
		return func636_39();
	}
	if ( var_114 >= 1 && var_314 == var_114 ) {
		var_114 = 0;
	}
	var_83[var_314][11] = 1;
	if ( var_83[var_314][27] != 0 ) {
		var_2954 = var_83[var_314][27];
		var_83[var_2954][28] = 0;
	}
	var_442 = var_83[var_314][1];
	var_443 = var_83[var_314][2];
	var_83[var_314][1] = 0;
	var_83[var_314][2] = 0;
	if ( var_83[var_314][0] == 73 && var_83[var_314][20] == 0 ) {
		var_1550 = var_442;
		var_230 = var_443;
		if ( var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 ) {
			var_768 = 1;
			var_2416 = 1;
			func536();
			var_768 = 0;
			var_2416 = 0;
		}
	}
	if ( var_156[307] == 1 ) {
		var_2955 = rnd(2);
		if ( var_2955 == 1 ) {
			var_2263 = var_83[var_314][0];
		}
	}
	func676();
	func340(func636_42);
}
function func636_42(){
	var_314 = var_82[var_347][var_348];
	var_437 = var_83[var_314][0];
	func626();
	var_2956 = var_954;
	if ( var_83[var_314][39] >= 2 ) {
		var_2956 = Math.floor(var_2956 * (var_83[var_314][39] + 10) / 10);
	}
	if ( var_160 == 1 ) {
		var_2956 = Math.floor(var_2956 * 3 / 2);
	}
	if ( var_127 != 0 || var_132 != 0 ) {
		var_891 = "何者か";
	}
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "" + var_891 + "をやっつけた";
	var_297 = "" + var_2956 + "の経験値を手に入れた";
	var_2945 = var_437;
	var_1034 = var_437;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func050(func636_43);
}
function func636_43(){
	var_198 = 1;
	var_300 = 0;
	func047();
	if ( var_62 == 1 && var_83[var_314][0] == 20 ) {
		func689();
	}
	if ( var_62 == 2 && var_83[var_314][0] == 132 ) {
		func689();
	}
	if ( var_62 == 3 && var_83[var_314][0] == 143 ) {
		func689();
	}
	if ( var_94 == 1 && var_83[var_314][0] == 65 ) {
		func688();
	}
	if ( var_175 >= 1 || var_176 >= 1 ) {
		func703();
	}
	if ( var_83[var_314][20] == 0 ) {
		if ( var_83[var_314][0] == 79 ) {
			var_2957 = 1;
			var_2958 = var_83[var_314][5];
		}
		if ( var_83[var_314][0] == 91 ) {
			var_2957 = 2;
		}
		if ( var_83[var_314][0] == 92 ) {
			var_2957 = 3;
		}
		if ( var_83[var_314][0] == 77 ) {
			var_2957 = 4;
		}
		if ( var_83[var_314][0] == 76 ) {
			var_2957 = 5;
		}
		if ( var_83[var_314][0] == 76 || var_83[var_314][0] == 77 ) {
			if ( var_62 == 99 ) {
				var_2959 = 0;
				if ( var_83[var_314][16] == 1 ) {
					var_2959 = 1;
				}
				if ( var_83[var_314][16] == 2 ) {
					var_2959 = 2;
				}
			}
		}
		if ( var_83[var_314][0] == 163 ) {
			var_2538 = var_83[var_314][5];
		}
		if ( var_83[var_314][0] == 6 && var_83[var_314][31] != 5 ) {
			var_186 = 165;
			func692();
		}
		if ( var_83[var_314][0] == 87 ) {
			var_186 = 164;
			func692();
		}
	}
	var_82[var_347][var_348] = 0;
	var_83[var_314][0] = 0;
	func331();
	var_func636 = 2;
	func337(func636_44);
}
function func636_44(){
	var_func636--;
	if(var_func636 > 0){
		return func337(func636_44);
	}
	var_568 = var_568 + var_2956;
	func680(func636_45);
}
function func636_45(){
	if ( var_2957 >= 1 ) {
		func690();
	}
	if ( var_2538 >= 1 ) {
		func691();
	}
	func636_50();
}
function func636_50(){
	var_83[var_314][8] = 0;
	if ( var_83[var_314][13] != 0 ) {
		var_460 = var_314;
		func024();
	}
	if ( var_83[var_314][12] == 99 ) {
		var_83[var_314][12] = 0;
	}
	if ( var_83[var_314][0] != 0 ) {
		var_2960 = 0;
		var_2961 = 0;
		var_2962 = 0;
		if ( var_83[var_314][14] == 0 && var_156[103] == 1 ) {
			var_2963 = rnd(8);
			if ( var_2963 == 0 || var_1194 == 1 ) {
				DSPLAY(162);
				var_2960 = 1;
				if ( var_83[var_314][15] == 0 ) {
					var_83[var_314][14] = 1;
				}
				if ( var_83[var_314][15] != 0 ) {
					var_83[var_314][14] = 0;
					var_83[var_314][15] = 0;
				}
			}
		}
		if ( var_83[var_314][20] != 2 && var_156[319] == 1 ) {
			var_2963 = rnd(8);
			if ( var_2963 == 0 || var_1194 == 1 ) {
				var_2961 = 1;
				DSPLAY(226);
				if ( var_83[var_314][20] == 1 ) {
					var_83[var_314][20] = 2;
				}
				if ( var_83[var_314][20] == 0 ) {
					var_83[var_314][20] = 1;
				}
				if ( var_83[var_314][12] == 99 ) {
					var_83[var_2964][12] = 0;
				}
				var_83[var_314][15] = 0;
				var_83[var_314][30] = 0;
				if ( var_83[var_314][0] == 97 ) {
					var_83[var_314][31] = 0;
				}
				if ( var_114 == var_314 ) {
					var_114 = 0;
				}
			}
		}
		if ( var_83[var_314][13] == 0 && var_156[202] == 1 ) {
			var_2963 = rnd(8);
			if ( var_2963 == 0 || var_1194 == 1 ) {
				var_2962 = 1;
				DSPLAY(126);
				var_83[var_314][13] = 1;
				if ( var_114 == var_314 ) {
					var_114 = 0;
				}
			}
		}
		if ( var_2960 == 1 || var_2961 == 1 || var_2962 == 1 ) {
			for(var k=0; k<8; k++){
				func337();
			}
			var_293 = var_296;
			var_294 = var_297;
			if ( var_2960 == 1 && var_2961 == 0 && var_2962 == 0 ) {
				var_296 = "" + var_2943 + "を重くした！";
				var_297 = "";
			}
			if ( var_2960 == 1 && var_2961 == 1 && var_2962 == 0 ) {
				var_296 = "" + var_2943 + "を";
				var_297 = "重くして能力を封じた！";
				if ( var_83[var_314][20] == 2 ) {
					var_297 = "重くして攻撃を封じた！";
				}
			}
			if ( var_2960 == 1 && var_2961 == 0 && var_2962 == 1 ) {
				var_296 = "" + var_2943 + "を";
				var_297 = "重くして凍らせた！";
			}
			if ( var_2960 == 1 && var_2961 == 1 && var_2962 == 1 ) {
				var_296 = "" + var_2943 + "を";
				var_297 = "重くして能力を封じて凍らせた！";
				if ( var_83[var_314][20] == 2 ) {
					var_297 = "重くして攻撃を封じて凍らせた！";
				}
			}
			if ( var_2960 == 0 && var_2961 == 1 && var_2962 == 0 ) {
				var_296 = "" + var_2943 + "の能力を封じた！";
				var_297 = "";
				if ( var_83[var_314][20] == 2 ) {
					var_296 = "" + var_2943 + "の攻撃を封じた！";
					var_297 = "";
				}
			}
			if ( var_2960 == 0 && var_2961 == 1 && var_2962 == 1 ) {
				var_296 = "" + var_2943 + "の";
				var_297 = "能力を封じて凍らせた！";
				if ( var_83[var_314][20] == 2 ) {
					var_297 = "攻撃を封じて凍らせた！";
				}
			}
			if ( var_2960 == 0 && var_2961 == 0 && var_2962 == 1 ) {
				var_296 = "" + var_2943 + "を凍らせた！";
				var_297 = "";
			}
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
	}
	var_1194 = 0;
	if ( var_83[var_314][20] == 0 && var_83[var_314][12] == 0 && var_83[var_314][13] == 0 && var_83[var_314][17] == 0 && var_163 == 0 && var_123 == 0 && var_151 == 0 ) {
		if ( var_83[var_314][0] == 121 && var_83[var_314][29] == 1 ) {
			func658();
		}
		if ( var_83[var_314][0] == 6 || var_83[var_314][0] == 44 || var_83[var_314][0] == 14 || var_83[var_314][0] == 120 || var_83[var_314][0] == 133 || var_83[var_314][0] == 118 || var_83[var_314][0] == 161 || var_83[var_314][0] == 109 ) {
			func658();
		}
		if ( var_83[var_314][0] == 9 || var_83[var_314][0] == 10 || var_83[var_314][0] == 84 || var_83[var_314][0] == 139 || var_83[var_314][0] == 138 || var_83[var_314][0] == 86 || var_83[var_314][0] == 129 || var_83[var_314][0] == 137 || var_83[var_314][0] == 143 ) {
			func658();
		}
		if ( var_83[var_314][0] == 153 ) {
			func658();
		}
		if ( var_83[var_314][0] == 116 ) {
			func657();
		}
		if ( var_83[var_314][0] == 17 && var_83[var_314][3] < 2 ) {
			var_2890 = var_314;
			func698();
		}
		if ( var_83[var_314][0] == 164 || var_83[var_314][0] == 165 ) {
			var_1073 = rnd(3);
			if ( var_1073 == 0 ) {
				var_2965 = 1;
				func669();
			}
		}
	}
	if ( var_83[var_314][0] == 132 || var_83[var_314][0] == 143 ) {
		func659();
	}
	if ( var_83[var_314][0] == 116 && var_139 >= 1 ) {
		var_139 = 0;
		func039();
	}
	if ( var_83[var_314][0] == 33 ) {
		var_83[var_314][0] = 34;
		var_83[var_314][31] = 1;
	}
	if ( var_2946 == 101 || var_2946 == 102 || var_2946 == 103 || var_2946 == 104 ) {
		if ( var_83[var_314][20] == 0 && var_83[var_314][12] != 1 && var_83[var_314][12] != 2 && var_83[var_314][12] != 3 && var_83[var_314][12] != 4 && var_83[var_314][12] != 5 ) {
			func702();
		}
	}
	var_217 = 1;
	if ( var_357 == 110 ) {
		var_357 = 108;
		var_750 = 0;
	}
	if ( var_156[101] == 1 && var_2925 == 0 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 ) {
			var_2925 = 1;
			var_243 = 1;
			return func636();
		}
	}
	if ( var_270 == 135 && var_341 == 1 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 && var_128 == 0 && var_178 == 0 ) {
			if ( var_357 == 101 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 122;
				return func636();
			}
			if ( var_357 == 122 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 101;
				return func636();
			}
		}
	}
	var_2924 = 0;
	var_2965 = 0;
	if ( var_357 == 122 || var_357 == 101 ) {
		var_357 = var_2923;
	}
	if ( var_83[var_314][0] > 0 && var_83[var_314][4] == 6 ) {
		var_83[var_314][5] = var_2942;
	}
	if ( var_83[var_314][0] == 164 || var_83[var_314][0] == 165 ) {
		var_83[var_314][5] = var_2942;
	}
	if ( var_156[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0 ) {
		if ( var_357 != 100 && var_357 != 398 ) {
			var_2926 = 0;
			func641();
			if ( var_2968 == 1 ) {
				var_2968 = 0;
				var_243 = 1;
				return func636();
			}
		}
		if ( var_357 == 100 || var_357 == 398 ) {
			var_2926 = 0;
			func642();
			if ( var_2968 == 1 ) {
				var_2968 = 0;
				var_243 = 1;
				return func636();
			}
		}
	}
	return func019();
}
function func637(){
	var_217 = 1;
	var_2965 = 0;
	if ( var_156[101] == 1 && var_2925 == 0 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 ) {
			var_2925 = 1;
			var_243 = 1;
			return func636();
		}
	}
	if ( var_270 == 135 && var_341 == 1 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 ) {
			if ( var_357 == 101 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 122;
				return func636();
			}
			if ( var_357 == 122 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 101;
				return func636();
			}
		}
	}
	if ( var_357 == 122 || var_357 == 101 ) {
		var_357 = var_2923;
	}
	if ( var_83[var_314][0] > 0 && var_83[var_314][4] == 6 ) {
		var_83[var_314][5] = var_2942;
	}
	if ( var_83[var_314][0] == 164 || var_83[var_314][0] == 165 ) {
		var_83[var_314][5] = var_2942;
	}
	if ( var_156[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0 ) {
		var_2926 = 0;
		func642();
		if ( var_2968 == 1 ) {
			var_2968 = 0;
			var_243 = 1;
			return func636();
		}
	}
	for(var i=0; i<4; i++){
		func337();
	}
	return func019();
}
function func638(){
	if ( var_83[var_314][39] >= 2 ) {
		if ( var_83[var_314][31] == 4 || var_83[var_314][31] == 5 ) {
			var_968 = Math.floor(var_968 * (var_83[var_314][39] * 2 + 10) / 10);
		}
	}
	if ( var_156[206] == 1 ) {
		var_1073 = rnd(8);
		if ( var_1073 == 0 ) {
			var_968 = Math.floor(var_968 / 2);
			var_1193 = 1;
		}
	}
	func679();
	var_949 = Math.floor(var_950 * (var_580 + var_565 - 8) / 16) + var_950;
	var_951 = var_949;
	for(var i=0; i<var_968; i++){
		var_949 = Math.floor(var_949 * 15 / 16);
	}
	var_2817 = rnd(33);
	var_2817 = var_2817 + 111;
	var_209 = Math.floor(var_949 * var_2817 / 128);
	if ( var_156[117] == 1 ) {
		func645();
	}
	if ( var_143 >= 2 ) {
		var_209 = var_209 + Math.floor(var_143 * var_209 / 5);
	}
	if ( var_156[399] == 1 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_156[111] == 1 ) {
		var_1337 = var_83[var_314][0];
		if ( var_1337 == 147 || var_1337 == 134 || var_1337 == 119 || var_1337 == 35 || var_1337 == 135 || var_1337 == 120 || var_1337 == 128 || var_1337 == 140 || var_1337 == 68 || var_1337 == 131 || var_1337 == 132 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[114] == 1 ) {
		var_1337 = var_83[var_314][0];
		if ( var_1337 == 141 || var_1337 == 134 || var_1337 == 99 || var_1337 == 72 || var_1337 == 80 || var_1337 == 148 || var_1337 == 153 || var_1337 == 154 || var_1337 == 156 || var_1337 == 157 || var_1337 == 159 || var_1337 == 93 || var_1337 == 96 || var_1337 == 98 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[369] == 1 ) {
		var_1337 = var_83[var_314][0];
		if ( var_1337 == 62 || var_1337 == 63 || var_1337 == 85 || var_1337 == 64 || var_1337 == 106 || var_1337 == 107 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[370] == 1 ) {
		var_1337 = var_83[var_314][0];
		if ( var_1337 == 27 || var_1337 == 97 || var_1337 == 58 || var_1337 == 14 || var_1337 == 15 || var_1337 == 38 || var_1337 == 155 || var_1337 == 129 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[112] == 1 ) {
		if ( var_83[var_314][31] == 6 || var_83[var_314][31] == 7 || var_83[var_314][31] == 8 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[102] == 1 ) {
		if ( var_83[var_314][31] == 9 || var_83[var_314][31] == 10 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_156[116] == 1 && var_83[var_314][31] == 2 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_156[124] == 1 && var_83[var_314][0] == 131 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_156[124] == 1 && var_83[var_314][0] == 132 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_125 == 1 && var_83[var_314][31] == 2 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_104 == 1 ) {
		var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
	}
	if ( var_109 == 1 ) {
		var_209 = Math.floor((var_209 + var_209) / 3);
	}
	if ( var_83[var_314][13] >= 1 && var_83[var_314][13] != 99 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_83[var_314][0] == 73 && var_83[var_314][13] >= 1 && var_83[var_314][13] != 99 ) {
		var_209 = 999;
	}
	if ( var_209 < 1 ) {
		var_209 = 1;
	}
	if ( var_143 >= 5 && var_209 == 1 ) {
		var_209 = 2;
	}
	if ( var_182 == 1 ) {
		var_209 = var_209 * 2;
	}
	if ( var_156[308] == 1 && var_83[var_314][0] == var_831 && var_83[var_314][0] != 0 ) {
		var_209 = var_209 * 2;
	}
	if ( var_1035 >= 1 ) {
		var_209 = var_209 * 2;
		var_1035 = 0;
	}
	if ( var_209 >= 65525 ) {
		var_209 = 65525;
	}
	return;
}
function func639(){
	var_2867 = rnd(12);
	var_2938 = 0;
	if ( var_129 == 0 ) {
		if ( var_357 == 104 && var_111 == 0 ) {
			if ( var_2867 == 1 || var_2867 == 2 || var_2867 == 3 || var_2867 == 4 || var_2867 == 5 ) {
				var_2867 = 0;
			}
		}
		if ( var_357 == 104 && var_111 == 1 ) {
			if ( var_2867 == 1 || var_2867 == 2 || var_2867 == 3 ) {
				var_2867 = 0;
			}
		}
	}
	if ( var_83[var_314][0] == 72 || var_83[var_314][0] == 88 || var_83[var_314][0] == 99 ) {
		if ( var_83[var_314][20] == 0 && var_156[366] == 0 ) {
			if ( var_2867 == 1 || var_2867 == 2 || var_2867 == 3 ) {
				var_2867 = 0;
				var_2938 = 1;
			}
		}
	}
	if ( var_357 != 104 ) {
		if ( var_111 == 1 || var_83[var_314][12] != 0 || var_83[var_314][13] != 0 ) {
			var_2867 = 1;
			var_2938 = 0;
		}
	}
	if ( var_156[105] == 1 && var_1030 >= 2 ) {
		var_2867 = 1;
		var_2938 = 0;
	}
	if ( var_2927 == 1 ) {
		var_2867 = 1;
		var_2938 = 0;
	}
	return;
}
function func640(){
	if ( var_199 == 4 ) {
		var_83[var_314][5] = 6;
	}
	if ( var_199 == 6 ) {
		var_83[var_314][5] = 4;
	}
	if ( var_199 == 8 ) {
		var_83[var_314][5] = 2;
	}
	if ( var_199 == 2 ) {
		var_83[var_314][5] = 8;
	}
	if ( var_199 == 1 ) {
		var_83[var_314][5] = 9;
	}
	if ( var_199 == 3 ) {
		var_83[var_314][5] = 7;
	}
	if ( var_199 == 7 ) {
		var_83[var_314][5] = 3;
	}
	if ( var_199 == 9 ) {
		var_83[var_314][5] = 1;
	}
	return;
}
function func641(){
	var_2968 = 0;
	var_347 = var_66;
	var_348 = var_67;
	if ( var_199 == 4 ) {
		var_347 = var_347 + 1;
	}
	if ( var_199 == 6 ) {
		var_347 = var_347 - 1;
	}
	if ( var_199 == 8 ) {
		var_348 = var_348 + 1;
	}
	if ( var_199 == 2 ) {
		var_348 = var_348 - 1;
	}
	if ( var_199 == 1 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 - 1;
	}
	if ( var_199 == 3 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 - 1;
	}
	if ( var_199 == 7 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 + 1;
	}
	if ( var_199 == 9 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 + 1;
	}
	if ( var_82[var_347][var_348] > 0 && var_71[var_347][var_348] != 0 ) {
		var_2969 = var_82[var_347][var_348];
		if ( var_83[var_2969][0] != 53 && var_83[var_2969][0] != 61 && var_83[var_2969][31] != 4 && var_83[var_2969][31] != 5 ) {
			var_2968 = 1;
		}
	}
	if ( var_2968 == 1 ) {
		var_2970 = 0;
		if ( var_2970 == 0 && var_199 == 4 ) {
			var_199 = 6;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 6 ) {
			var_199 = 4;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 8 ) {
			var_199 = 2;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 2 ) {
			var_199 = 8;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 1 ) {
			var_199 = 9;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 3 ) {
			var_199 = 7;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 7 ) {
			var_199 = 3;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 9 ) {
			var_199 = 1;
			var_2970 = 1;
		}
	}
	return;
}
function func642(){
	var_2968 = 0;
	var_347 = var_66;
	var_348 = var_67;
	var_2971 = var_347;
	var_2972 = var_348;
	var_2973 = var_347;
	var_2930 = var_348;
	if ( var_199 == 4 ) {
		var_347 = var_347 + 1;
		var_2971 = var_347;
		var_2972 = var_348 - 1;
		var_2973 = var_347;
		var_2930 = var_348 + 1;
	}
	if ( var_199 == 6 ) {
		var_347 = var_347 - 1;
		var_2971 = var_347;
		var_2972 = var_348 - 1;
		var_2973 = var_347;
		var_2930 = var_348 + 1;
	}
	if ( var_199 == 8 ) {
		var_348 = var_348 + 1;
		var_2971 = var_347 - 1;
		var_2972 = var_348;
		var_2973 = var_347 + 1;
		var_2930 = var_348;
	}
	if ( var_199 == 2 ) {
		var_348 = var_348 - 1;
		var_2971 = var_347 - 1;
		var_2972 = var_348;
		var_2973 = var_347 + 1;
		var_2930 = var_348;
	}
	if ( var_199 == 1 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 - 1;
		var_2971 = var_347 - 1;
		var_2972 = var_348;
		var_2973 = var_347;
		var_2930 = var_348 + 1;
	}
	if ( var_199 == 3 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 - 1;
		var_2971 = var_347;
		var_2972 = var_348 + 1;
		var_2973 = var_347 + 1;
		var_2930 = var_348;
	}
	if ( var_199 == 7 ) {
		var_347 = var_347 + 1;
		var_348 = var_348 + 1;
		var_2971 = var_347;
		var_2972 = var_348 - 1;
		var_2973 = var_347 - 1;
		var_2930 = var_348;
	}
	if ( var_199 == 9 ) {
		var_347 = var_347 - 1;
		var_348 = var_348 + 1;
		var_2971 = var_347 + 1;
		var_2972 = var_348;
		var_2973 = var_347;
		var_2930 = var_348 - 1;
	}
	if ( var_82[var_347][var_348] > 0 && var_71[var_347][var_348] != 0 ) {
		var_2969 = var_82[var_347][var_348];
		if ( var_83[var_2969][0] != 53 && var_83[var_2969][0] != 61 && var_83[var_2969][31] != 4 && var_83[var_2969][31] != 5 ) {
			var_2968 = 1;
		}
	}
	if ( var_82[var_2971][var_2972] > 0 && var_71[var_2971][var_2972] != 0 && var_2968 == 0 ) {
		var_2969 = var_82[var_2971][var_2972];
		if ( var_83[var_2969][0] != 53 && var_83[var_2969][0] != 61 && var_83[var_2969][31] != 4 && var_83[var_2969][31] != 5 ) {
			var_2968 = 1;
		}
	}
	if ( var_82[var_2973][var_2930] > 0 && var_71[var_2973][var_2930] != 0 && var_2968 == 0 ) {
		var_2969 = var_82[var_2973][var_2930];
		if ( var_83[var_2969][0] != 53 && var_83[var_2969][0] != 61 && var_83[var_2969][31] != 4 && var_83[var_2969][31] != 5 ) {
			var_2968 = 1;
		}
	}
	if ( var_2968 == 1 ) {
		var_2970 = 0;
		if ( var_2970 == 0 && var_199 == 4 ) {
			var_199 = 6;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 6 ) {
			var_199 = 4;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 8 ) {
			var_199 = 2;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 2 ) {
			var_199 = 8;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 1 ) {
			var_199 = 9;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 3 ) {
			var_199 = 7;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 7 ) {
			var_199 = 3;
			var_2970 = 1;
		}
		if ( var_2970 == 0 && var_199 == 9 ) {
			var_199 = 1;
			var_2970 = 1;
		}
	}
	return;
}
function func643(){
	if(!func){
		throw "";
	}
	var_2974 = var_347;
	var_2975 = var_348;
	var_2928 = var_347 - 1;
	var_2929 = var_347 + 1;
	var_2931 = var_348 - 1;
	var_2930 = var_348 + 1;
	if ( var_2928 < 0 ) {
		var_2928 = 0;
	}
	if ( var_2929 > var_33 ) {
		var_2929 = var_33;
	}
	if ( var_2931 < 0 ) {
		var_348 = 0;
	}
	if ( var_2930 > var_34 ) {
		var_2930 = var_34;
	}
	var_1280 = 0;
	if ( var_199 == 4 ) {
		if ( var_82[var_2928][var_2931] > 0 ) {
			var_402 = var_82[var_2928][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2928][var_2930] > 0 ) {
			var_402 = var_82[var_2928][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 6 ) {
		if ( var_82[var_2929][var_2931] > 0 ) {
			var_402 = var_82[var_2929][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2929][var_2930] > 0 ) {
			var_402 = var_82[var_2929][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 8 ) {
		if ( var_82[var_2928][var_2931] > 0 ) {
			var_402 = var_82[var_2928][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2929][var_2931] > 0 ) {
			var_402 = var_82[var_2929][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 2 ) {
		if ( var_82[var_2928][var_2930] > 0 ) {
			var_402 = var_82[var_2928][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2929][var_2930] > 0 ) {
			var_402 = var_82[var_2929][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 1 ) {
		if ( var_82[var_2928][var_2975] > 0 ) {
			var_402 = var_82[var_2928][var_2975];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2974][var_2930] > 0 ) {
			var_402 = var_82[var_2974][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 3 ) {
		if ( var_82[var_2929][var_2975] > 0 ) {
			var_402 = var_82[var_2929][var_2975];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2974][var_2930] > 0 ) {
			var_402 = var_82[var_2974][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 7 ) {
		if ( var_82[var_2974][var_2931] > 0 ) {
			var_402 = var_82[var_2974][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2928][var_2975] > 0 ) {
			var_402 = var_82[var_2928][var_2975];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 9 ) {
		if ( var_82[var_2974][var_2931] > 0 ) {
			var_402 = var_82[var_2974][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
		if ( var_82[var_2929][var_2975] > 0 ) {
			var_402 = var_82[var_2929][var_2975];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 1 && var_82[var_2928][var_2930] > 0 ) {
		if ( var_71[var_2928][var_2975] == 0 || var_71[var_2974][var_2930] == 0 ) {
			var_402 = var_82[var_2928][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 3 && var_82[var_2929][var_2930] > 0 ) {
		if ( var_71[var_2929][var_2975] == 0 || var_71[var_2974][var_2930] == 0 ) {
			var_402 = var_82[var_2929][var_2930];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 7 && var_82[var_2928][var_2931] > 0 ) {
		if ( var_71[var_2974][var_2931] == 0 || var_71[var_2928][var_2975] == 0 ) {
			var_402 = var_82[var_2928][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_199 == 9 && var_82[var_2929][var_2931] > 0 ) {
		if ( var_71[var_2974][var_2931] == 0 || var_71[var_2929][var_2975] == 0 ) {
			var_402 = var_82[var_2929][var_2931];
			if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
				var_1280 = 1;
			}
		}
	}
	if ( var_1280 == 0 ) {
		return;
	}
	var_403 = "「オラオラオラオラオラオラオラオラオラ」";
	var_2976 = 0;
	var_2977 = 0;
	var_2978 = 0;
	var_2979 = 0;
	var_2980 = 0;
	var_2981 = 0;
	var_2982 = 0;
	var_2983 = 0;
	var_2984 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	DSPLAY(121);
	func337();
	func337();
	DSPLAY(121);
	func337();
	func337();
	DSPLAY(121);
	func337();
	func337();
	for(var i=0; i<3; i++){
		if ( var_199 == 4 ) {
			if ( var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2981 == 0 ) {
				var_2981 = 1;
				var_402 = var_82[var_2928][var_2931];
				var_314 = var_82[var_2928][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2928][var_2975];
				var_314 = var_82[var_2928][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2976 == 0 ) {
				var_2976 = 1;
				var_402 = var_82[var_2928][var_2930];
				var_314 = var_82[var_2928][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 6 ) {
			if ( var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2983 == 0 ) {
				var_2983 = 1;
				var_402 = var_82[var_2929][var_2931];
				var_314 = var_82[var_2929][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2929][var_2975];
				var_314 = var_82[var_2929][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2978 == 0 ) {
				var_2978 = 1;
				var_402 = var_82[var_2929][var_2930];
				var_314 = var_82[var_2929][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 8 ) {
			if ( var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2981 == 0 ) {
				var_2981 = 1;
				var_402 = var_82[var_2928][var_2931];
				var_314 = var_82[var_2928][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2974][var_2931];
				var_314 = var_82[var_2974][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2983 == 0 ) {
				var_2983 = 1;
				var_402 = var_82[var_2929][var_2931];
				var_314 = var_82[var_2929][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 2 ) {
			if ( var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2976 == 0 ) {
				var_2976 = 1;
				var_402 = var_82[var_2928][var_2930];
				var_314 = var_82[var_2928][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2974][var_2930];
				var_314 = var_82[var_2974][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2978 == 0 ) {
				var_2978 = 1;
				var_402 = var_82[var_2929][var_2930];
				var_314 = var_82[var_2929][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 1 ) {
			if ( var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2979 == 0 ) {
				var_2979 = 1;
				var_402 = var_82[var_2928][var_2975];
				var_314 = var_82[var_2928][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2928][var_2930];
				var_314 = var_82[var_2928][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2977 == 0 ) {
				var_2977 = 1;
				var_402 = var_82[var_2974][var_2930];
				var_314 = var_82[var_2974][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 3 ) {
			if ( var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2980 == 0 ) {
				var_2980 = 1;
				var_402 = var_82[var_2929][var_2975];
				var_314 = var_82[var_2929][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2929][var_2930];
				var_314 = var_82[var_2929][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2977 == 0 ) {
				var_2977 = 1;
				var_402 = var_82[var_2974][var_2930];
				var_314 = var_82[var_2974][var_2930];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 7 ) {
			if ( var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2982 == 0 ) {
				var_2982 = 1;
				var_402 = var_82[var_2974][var_2931];
				var_314 = var_82[var_2974][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2928][var_2931];
				var_314 = var_82[var_2928][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2979 == 0 ) {
				var_2979 = 1;
				var_402 = var_82[var_2928][var_2975];
				var_314 = var_82[var_2928][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
		if ( var_199 == 9 ) {
			if ( var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2982 == 0 ) {
				var_2982 = 1;
				var_402 = var_82[var_2974][var_2931];
				var_314 = var_82[var_2974][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2984 == 0 ) {
				var_2984 = 1;
				var_402 = var_82[var_2929][var_2931];
				var_314 = var_82[var_2929][var_2931];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
						for(var n=0; n<3; n++){
							func337();
						}
					}
				}
			}
			if ( var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2980 == 0 ) {
				var_2980 = 1;
				var_402 = var_82[var_2929][var_2975];
				var_314 = var_82[var_2929][var_2975];
				var_437 = var_83[var_402][0];
				if ( var_83[var_402][31] != 4 && var_83[var_402][31] != 5 ) {
					func644();
					if ( var_2867 != 0 ) {
						func626();
						func638();
						func705();
					}
				}
			}
		}
	}
	return;
}
function func644(){
	var_2867 = 0;
	func639();
	if ( var_143 >= 1 ) {
		var_2267[8] = var_2267[7];
		var_2267[7] = var_2267[6];
		var_2267[6] = var_2267[5];
		var_2267[5] = var_2267[4];
		var_2267[4] = var_2267[3];
		var_2267[3] = var_2267[2];
		var_2267[2] = var_2267[1];
		var_2267[1] = var_2267[0];
		var_2267[0] = var_83[var_314][0];
		if ( var_2267[0] != 0 && var_2267[0] == var_2267[1] ) {
			var_143 = 2;
		}
		if ( var_143 == 2 && var_2267[1] == var_2267[2] ) {
			var_143 = 3;
		}
		if ( var_143 == 3 && var_2267[2] == var_2267[3] ) {
			var_143 = 4;
		}
		if ( var_143 == 4 && var_2267[3] == var_2267[4] ) {
			var_143 = 5;
		}
		if ( var_143 == 5 && var_2267[4] == var_2267[5] ) {
			var_143 = 6;
		}
		if ( var_143 == 6 && var_2267[5] == var_2267[6] ) {
			var_143 = 7;
		}
		if ( var_143 == 7 && var_2267[6] == var_2267[7] ) {
			var_143 = 8;
		}
		if ( var_143 == 8 && var_2267[7] == var_2267[8] ) {
			var_143 = 9;
		}
		if ( var_2267[0] != 0 && var_2267[0] != var_2267[1] ) {
			var_143 = 1;
		}
	}
	if ( var_2867 != 0 ) {
		return;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「オラオララオラオラオラオオラオラ」";
	var_294 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
	if ( var_2938 == 1 ) {
		var_294 = "ヒラリと攻撃をかわされた";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_2939 = 1;
	if ( var_156[105] == 1 ) {
		var_1030 = var_1030 + 1;
	}
	var_2985 = 0;
	if ( var_2939 == 1 ) {
		func090();
	}
	if ( var_2938 == 1 ) {
		var_2657 = var_83[var_314][5];
	}
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 1;
		var_83[var_314][7] = 1;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 2;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 3;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 6;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 9;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 8;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 7;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 4;
	}
	func337();
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = var_2657;
		var_83[var_314][7] = 0;
	}
	func337();
	func337();
	func337();
	var_198 = 0;
	var_300 = 0;
	func337();
	func337();
	func337();
	func337();
	var_2939 = 0;
	var_2932 = 0;
	var_2938 = 0;
	var_217 = 1;
	var_1194 = 0;
	return;
}
function func645(){
	var_1710 = 0;
	var_1711 = var_66;
	var_1712 = var_67;
	var_1713 = var_66 - 1;
	var_1714 = var_66 + 1;
	var_1715 = var_67 + 1;
	var_1716 = var_67 - 1;
	if ( var_1713 < 0 ) {
		var_1713 = 0;
	}
	if ( var_1716 < 0 ) {
		var_1716 = 0;
	}
	if ( var_1714 > var_33 ) {
		var_1714 = var_33;
	}
	if ( var_1715 > var_34 ) {
		var_1715 = var_34;
	}
	if ( var_71[var_1711][var_1712] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1713][var_1712] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1714][var_1712] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1711][var_1715] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1711][var_1716] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1713][var_1715] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1714][var_1715] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1713][var_1716] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	if ( var_71[var_1714][var_1716] == 13 ) {
		var_1710 = var_1710 + 1;
	}
	var_1717 = Math.floor((var_565 + 1) / 2);
	var_209 = var_1717 * var_1710 + var_209;
	return;
}
function func646(){
	func426();
	var_2986 = var_553;
	var_233[var_2986][18] = var_233[var_2986][18] + 1;
	if ( var_233[var_2986][18] <= 10 ) {
		var_2987 = 1;
	}
	if ( var_233[var_2986][18] >= 11 && var_233[var_2986][18] <= 15 ) {
		var_2987 = rnd(12);
	}
	if ( var_233[var_2986][18] >= 16 && var_233[var_2986][18] <= 21 ) {
		var_2987 = rnd(10);
	}
	if ( var_233[var_2986][18] >= 22 && var_233[var_2986][18] <= 24 ) {
		var_2987 = rnd(8);
	}
	if ( var_233[var_2986][18] >= 25 && var_233[var_2986][18] <= 27 ) {
		var_2987 = rnd(6);
	}
	if ( var_233[var_2986][18] >= 28 && var_233[var_2986][18] <= 30 ) {
		var_2987 = rnd(4);
	}
	if ( var_233[var_2986][18] >= 31 ) {
		var_2987 = rnd(2);
	}
	if ( var_2987 == 0 ) {
		var_2985 = 1;
		var_232 = var_357;
		func492();
		for(var j=0; j<10; j++){
			func337();
		}
		DSPLAY(172);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_489 + "は";
		var_294 = "使いすぎて壊れてしまった。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_232 = var_357;
		func106();
		func426();
		var_476 = dim(40);
		var_580 = var_580 - var_894;
		var_894 = 0;
		var_357 = 0;
		func494();
		var_225 = var_553;
		func433();
		func494();
		var_896 = 0;
		var_2926 = 0;
	}
	return;
}
function func647(){
	if ( var_251 == 1 && var_410 == 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "射撃DISCを装備していないぞ";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		var_func647 = 3;
		func337(func647_0);
		return;
	}
	func647_1();
}
function func647_0(){
	var_func647--;
	if(var_func647 > 0){
		return func337(func647_0);
	}
	var_251 = 0;
	return func009();
}
function func647_1(){
	if ( var_171 == 1 ) {
		func424();
		if ( var_1886 >= 1 ) {
			return func425();
		}
	}
	var_251 = 0;
	var_340 = var_233[var_225][0];
	if ( var_220 == 1 ) {
		var_340 = var_486[var_682][var_225][0];
	}
	if ( var_1223 == 1 ) {
		var_340 = 699;
	}
	if ( var_1267 == 1 ) {
		var_340 = 698;
	}
	if ( var_2342 == 1 ) {
		var_340 = 490;
		var_2342 = 0;
	}
	if ( var_2106 == 2 ) {
		var_340 = 487;
		var_2106 = 0;
		if ( var_215 == 112 || var_215 == 394 ) {
			var_340 = 488;
			var_2329 = 1;
		}
	}
	if ( var_2106 == 1 && var_2329 == 0 ) {
		var_340 = 489;
		var_2106 = 0;
		if ( var_215 == 112 || var_215 == 394 ) {
			var_340 = 488;
			var_2329 = 1;
		}
	}
	if ( var_2106 == 1 && var_2329 == 1 ) {
		var_2106 = 0;
		var_340 = 488;
		var_2329 = 1;
	}
	var_2988 = 0;
	var_455 = var_66;
	var_456 = var_67;
	var_1266 = 2;
	func337(func647_2);
}
function func647_2(){
	var_1266 = 4;
	func337(func647_3);
}
function func647_3(){
	var_1266 = 6;
	func337(func647_4);
}
function func647_4(){
	func337(func647_5);
}
function func647_5(){
	func337(func647_6);
}
function func647_6(){
	var_1197 = 1;
	var_1266 = 0;
	if ( var_1267 == 0 && var_340 != 403 ) {
		var_1220 = 1;
	}
	if ( var_340 == 403 ) {
		var_1250 = 1;
	}
	func097();
	if ( var_340 != 403 ) {
		if ( var_199 == 4 ) {
			var_1416 = 40;
		}
		if ( var_199 == 6 ) {
			var_1416 = 120;
		}
		if ( var_199 == 8 ) {
			var_1416 = 80;
		}
		if ( var_199 == 2 ) {
			var_1416 = 0;
		}
		if ( var_199 == 1 ) {
			var_1416 = 160;
		}
		if ( var_199 == 3 ) {
			var_1416 = 240;
		}
		if ( var_199 == 7 ) {
			var_1416 = 200;
		}
		if ( var_199 == 9 ) {
			var_1416 = 280;
		}
		var_1195 = 1;
		var_2989 = var_199;
		var_1189 = 1;
		var_2990 = 20;
		if ( var_340 == 402 ) {
			var_2990 = 20;
		}
		if ( var_340 == 413 ) {
			var_2990 = 10;
		}
		if ( var_1267 == 1 ) {
			var_2990 = 4;
		}
		var_2991 = 0;
		var_2992 = 0;
		var_func647 = 2990;
		func647_7();
		return;
	}
	func647_28();
}
function func647_7(){
	var_1894 = var_455;
	var_1895 = var_456;
	if ( var_2989 == 4 ) {
		var_455 = var_455 - 1;
	}
	if ( var_2989 == 6 ) {
		var_455 = var_455 + 1;
	}
	if ( var_2989 == 8 ) {
		var_456 = var_456 - 1;
	}
	if ( var_2989 == 2 ) {
		var_456 = var_456 + 1;
	}
	if ( var_2989 == 1 ) {
		var_455 = var_455 - 1;
		var_456 = var_456 + 1;
	}
	if ( var_2989 == 3 ) {
		var_455 = var_455 + 1;
		var_456 = var_456 + 1;
	}
	if ( var_2989 == 7 ) {
		var_455 = var_455 - 1;
		var_456 = var_456 - 1;
	}
	if ( var_2989 == 9 ) {
		var_455 = var_455 + 1;
		var_456 = var_456 - 1;
	}
	if ( var_455 < 5 || var_455 > var_33 || var_456 < 5 || var_456 > var_34 ) {
		var_455 = var_1894;
		var_456 = var_1895;
		func647_26();
		return;
	}
	if ( var_71[var_455][var_456] == 0 ) {
		if ( var_340 == 402 ) {
			var_2988 = 0;
			var_2294 = var_455 - 1;
			if ( var_2294 < 0 ) {
				var_2294 = 0;
			}
			var_2295 = var_455 + 1;
			if ( var_2295 > var_33 ) {
				var_2295 = var_33;
			}
			var_2296 = var_456 + 1;
			if ( var_2296 > var_34 ) {
				var_2296 = var_34;
			}
			var_2297 = var_456 - 1;
			if ( var_2297 < 0 ) {
				var_2297 = 0;
			}
			var_455 = var_1894;
			var_456 = var_1895;
			if ( var_2989 == 4 ) {
				if ( var_71[var_2295][var_456] != 0 ) {
					var_2993 = 6;
				}
				if ( var_71[var_455][var_2296] != 0 ) {
					var_2993 = 2;
				}
				if ( var_71[var_455][var_2297] != 0 ) {
					var_2993 = 8;
				}
			}
			if ( var_2989 == 6 ) {
				if ( var_71[var_2294][var_456] != 0 ) {
					var_2993 = 4;
				}
				if ( var_71[var_455][var_2297] != 0 ) {
					var_2993 = 8;
				}
				if ( var_71[var_455][var_2296] != 0 ) {
					var_2993 = 2;
				}
			}
			if ( var_2989 == 8 || var_2989 == 9 || var_2989 == 7 ) {
				if ( var_71[var_455][var_2296] != 0 ) {
					var_2993 = 2;
				}
				if ( var_71[var_2294][var_456] != 0 ) {
					var_2993 = 4;
				}
				if ( var_71[var_2295][var_456] != 0 ) {
					var_2993 = 6;
				}
			}
			if ( var_2989 == 2 || var_2989 == 1 || var_2989 == 3 ) {
				if ( var_71[var_455][var_2297] != 0 ) {
					var_2993 = 8;
				}
				if ( var_71[var_2295][var_456] != 0 ) {
					var_2993 = 6;
				}
				if ( var_71[var_2294][var_456] != 0 ) {
					var_2993 = 4;
				}
			}
			if ( var_2993 == 8 ) {
				var_2989 = 8;
				var_1416 = 80;
			}
			if ( var_2993 == 2 ) {
				var_2989 = 2;
				var_1416 = 0;
			}
			if ( var_2993 == 6 ) {
				var_2989 = 6;
				var_1416 = 120;
			}
			if ( var_2993 == 4 ) {
				var_2989 = 4;
				var_1416 = 40;
			}
		}
		var_2994 = 0;
		if ( var_340 == 413 ) {
			func667(func647_26);
			return;
		}
		if ( var_340 == 488 ) {
			func660(func647_26);
			return;
		}
		if ( var_2994 == 0 && var_340 != 402 ) {
			if ( var_340 == 400 || var_340 == 698 || var_340 == 401 || var_340 == 407 ) {
				var_747 = 1;
				var_750 = 1;
				var_748 = var_455 - var_66 + 4;
				var_749 = var_456 - var_67 + 4;
			}
			var_1195 = 0;
			var_1279 = 1;
			var_func647 = 8;
			func337(func647_8);
			return;
		}
		func647_11();
		return;
	}
	func647_12();
}
function func647_8(){
	if ( var_340 == 698 ) {
		var_func647 = 3;
		func337(func647_9);
		return;
	}
	func647_10();
}
function func647_9(){
	var_func647--;
	if(var_func647 > 0){
		return func337(func647_9);
	}
	func647_10();
}
function func647_10(){
	var_1279 = 0;
	var_750 = 0;
	var_2991 = 1;
	func647_26();
	return;
}
function func647_11(){
	var_2994 = 0;
	func647_12();
}
function func647_12(){
	if ( var_82[var_455][var_456] > 0 ) {
		var_1899 = var_82[var_455][var_456];
		if ( var_83[var_1899][0] != 50 ) {
			if ( var_340 == 413 ) {
				func667(func647_26);
				return;
			}
			if ( var_340 != 411 ) {
				var_1195 = 0;
			}
			func660(func647_13);
			return;
		}
	}
	func647_14();
}
function func647_13(){
	var_2991 = 1;
	if ( var_340 != 411 || var_2995 == 1 ) {
		func647_26();
		return;
	}
	if ( var_340 == 411 ) {
		var_2992++;
	}
	func647_14();
}
function func647_14(){
	if ( var_65[var_455][var_456] == 1 ) {
		if ( var_340 == 402 || var_340 == 490 ) {
			var_1195 = 0;
			func544(func647_26);
			return;
		}
	}
	if ( var_340 == 490 ) {
		func080(func647_15);
		return;
	}
	func647_23();
}
function func647_15(){
	if ( var_254 == 1 ) {
		var_2989 = 4;
		var_1416 = 40;
	}
	if ( var_257 == 1 ) {
		var_2989 = 6;
		var_1416 = 120;
	}
	if ( var_255 == 1 ) {
		var_2989 = 8;
		var_1416 = 80;
	}
	if ( var_259 == 1 ) {
		var_2989 = 2;
		var_1416 = 0;
	}
	if ( var_253 == 1 ) {
		var_2989 = 7;
		var_1416 = 200;
	}
	if ( var_254 == 1 && var_255 == 1 ) {
		var_2989 = 7;
		var_1416 = 200;
	}
	if ( var_256 == 1 ) {
		var_2989 = 9;
		var_1416 = 280;
	}
	if ( var_257 == 1 && var_255 == 1 ) {
		var_2989 = 9;
		var_1416 = 280;
	}
	if ( var_258 == 1 ) {
		var_2989 = 1;
		var_1416 = 160;
	}
	if ( var_254 == 1 && var_259 == 1 ) {
		var_2989 = 1;
		var_1416 = 160;
	}
	if ( var_260 == 1 ) {
		var_2989 = 3;
		var_1416 = 240;
	}
	if ( var_257 == 1 && var_259 == 1 ) {
		var_2989 = 3;
		var_1416 = 240;
	}
	var_2988 = 0;
	func337(func647_16);
}
function func647_16(){
	var_2988 = 1;
	func337(func647_17);
}
function func647_17(){
	var_2988 = 2;
	func337(func647_18);
}
function func647_18(){
	var_2988 = 3;
	func337(func647_19);
}
function func647_19(){
	var_2988 = 4;
	func337(func647_20);
}
function func647_20(){
	var_2988 = 5;
	func337(func647_21);
}
function func647_21(){
	var_2988 = 6;
	func337(func647_22);
}
function func647_22(){
	var_2988 = 7;
	func647_23();
}
function func647_23(){
	if ( var_340 != 490 ) {
		var_1896 = 1;
		func337(func647_24);
		return;
	}
	func337(func647_25);
}
function func647_24(){
	var_1896 = 0;
	func337(func647_25);
}
function func647_25(){
	var_func647--;
	if(var_func647 > 0){
		return func647_7();
	}
	func647_26();
}
function func647_26(){
	if ( var_340 == 413 && var_1195 != 0 ) {
		func667(func647_27);
		return;
	}
	func647_27();
}
function func647_27(){
	var_1195 = 0;
	func647_28();
}
function func647_28(){
	var_2995 = 0;
	if ( var_340 == 698 && var_2991 == 0 ) {
		var_747 = 1;
		var_750 = 1;
		var_748 = var_455 - var_66 + 4;
		var_749 = var_456 - var_67 + 4;
		var_1195 = 0;
		var_1279 = 1;
		var_func647 = 11;
		func337(func647_29);
		return;
	}
	func647_30();
}
function func647_29(){
	var_func647--;
	if(var_func647 > 0){
		return func337(func647_29);
	}
	var_1279 = 0;
	var_750 = 0;
	func647_30();
}
function func647_30(){
	if ( var_340 == 403 ) {
		func650(func647_31);
		return;
	}
	func647_32();
}
function func647_31(){
	if ( var_2994 == 1 ) {
		var_2994 = 0;
		var_1899 = var_82[var_455][var_456];
		if ( var_83[var_1899][0] != 50 && var_83[var_1899][31] != 4 && var_83[var_1899][31] != 5 ) {
			func660(func647_32);
			return;
		}
	}
	func647_32();
}
function func647_32(){
	var_func647 = 2;
	func337(func647_33);
}
function func647_33(){
	var_func647--;
	if(var_func647 > 0){
		return func337(func647_33);
	}
	if ( var_234 == 0 && var_1223 == 0 && var_1267 == 0 && var_340 != 487 && var_340 != 488 && var_340 != 489 && var_340 != 490 ) {
		func421(func647_34);
		return;
	}
	func647_34();
}
function func647_34(){
	if ( var_234 == 1 && var_1223 == 0 && var_1267 == 0 && var_340 != 487 && var_340 != 488 && var_340 != 489 && var_340 != 490 ) {
		var_234 = 0;
		func422(func647_35);
		return;
	}
	func647_35();
}
function func647_35(){
	var_217 = 1;
	var_1953 = 0;
	var_1267 = 0;
	var_1223 = 0;
	var_1250 = 0;
	return func019();
}
function func648(){
	gmode(2);
	if ( var_2996 == 1 ) {
		if ( var_2989 == 4 ) {
			var_2997 = 120;
			var_2998 = 150;
		}
		if ( var_2989 == 6 ) {
			var_2997 = 200;
			var_2998 = 150;
		}
		if ( var_2989 == 2 ) {
			var_2997 = 160;
			var_2998 = 160;
		}
		if ( var_2989 == 8 ) {
			var_2997 = 160;
			var_2998 = 160;
		}
		if ( var_2989 == 1 ) {
			var_2997 = 120;
			var_2998 = 120;
		}
		if ( var_2989 == 3 ) {
			var_2997 = 200;
			var_2998 = 200;
		}
		if ( var_2989 == 7 ) {
			var_2997 = 120;
			var_2998 = 120;
		}
		if ( var_2989 == 9 ) {
			var_2997 = 200;
			var_2998 = 200;
		}
	}
	if ( var_2996 == 0 ) {
		var_2997 = (var_455 - var_66 + 4) * 40;
		var_2998 = (var_456 - var_67 + 4) * 40 - 10;
	}
	if ( var_2999 >= 1 && var_2999 <= 12 ) {
		var_2997 = (var_3000 - var_66 + 4) * 40;
		var_2998 = (var_3001 - var_67 + 4) * 40 - var_2999 * 40;
		var_1416 = 80;
	}
	if ( var_2999 >= 13 && var_2999 <= 24 ) {
		var_2997 = (var_3002 - var_66 + 4) * 40;
		var_2998 = (var_3003 - 12 - var_67 + 4) * 40 + (var_2999 - 12) * 40;
		var_1416 = 0;
	}
	if ( var_2988 >= 1 ) {
		if ( var_2989 == 4 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10;
		}
		if ( var_2989 == 6 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10;
		}
		if ( var_2989 == 2 ) {
			var_2997 = (var_455 - var_66 + 4) * 40;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
		}
		if ( var_2989 == 8 ) {
			var_2997 = (var_455 - var_66 + 4) * 40;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
		}
		if ( var_2989 == 1 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
		}
		if ( var_2989 == 3 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
		}
		if ( var_2989 == 7 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
		}
		if ( var_2989 == 9 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
		}
	}
	if ( var_1896 == 1 ) {
		if ( var_2989 == 4 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10;
		}
		if ( var_2989 == 6 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10;
		}
		if ( var_2989 == 2 ) {
			var_2997 = (var_455 - var_66 + 4) * 40;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
		}
		if ( var_2989 == 8 ) {
			var_2997 = (var_455 - var_66 + 4) * 40;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
		}
		if ( var_2989 == 1 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
		}
		if ( var_2989 == 3 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
		}
		if ( var_2989 == 7 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 + 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
		}
		if ( var_2989 == 9 ) {
			var_2997 = (var_455 - var_66 + 4) * 40 - 20;
			var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
		}
	}
	gmode(2);
	pos(var_2997, var_2998);
	func649();
	return;
}
function func649(){
	if ( var_340 == 400 ) {
		gcopy(34, 320 + var_1416, 400, 40, 40);
	}
	if ( var_340 == 401 ) {
		gcopy(34, 320 + var_1416, 720, 40, 40);
	}
	if ( var_340 == 402 ) {
		gcopy(34, 320 + var_1416, 0, 40, 40);
	}
	if ( var_340 == 403 ) {
		gcopy(34, 320 + var_1416, 560, 40, 40);
	}
	if ( var_340 == 404 ) {
		gcopy(34, 320 + var_1416, 520, 40, 40);
	}
	if ( var_340 == 405 ) {
		gcopy(34, 320 + var_1416, 800, 40, 40);
	}
	if ( var_340 == 406 ) {
		gcopy(34, 320 + var_1416, 640, 40, 40);
	}
	if ( var_340 == 407 ) {
		gcopy(34, 320 + var_1416, 400, 40, 40);
	}
	if ( var_340 == 408 ) {
		gcopy(34, 320 + var_1416, 840, 40, 40);
	}
	if ( var_340 == 409 ) {
		gcopy(3, 680, 280, 40, 40);
	}
	if ( var_340 == 410 ) {
		gcopy(34, 320 + var_1416, 1080, 40, 40);
	}
	if ( var_340 == 411 ) {
		gcopy(34, 320 + var_1416, 1120, 40, 40);
	}
	if ( var_340 == 412 ) {
		gcopy(3, 720, 520, 40, 40);
	}
	if ( var_340 == 413 ) {
		gcopy(15, 960, 1960, 40, 40);
	}
	if ( var_340 == 414 ) {
		gcopy(34, 320 + var_1416, 1240, 40, 40);
	}
	if ( var_340 == 489 ) {
		color(0, 0, 0);
		gmode(4, null, null, 150);
		gcopy(34, 320 + var_1416, 680, 40, 40);
		gmode(2);
	}
	if ( var_340 == 488 ) {
		color(0, 0, 0);
		gmode(4, null, null, 150);
		gcopy(34, 320 + var_1416, 680, 40, 40);
		gmode(2);
	}
	if ( var_340 == 487 ) {
		color(0, 0, 0);
		gmode(4, null, null, 150);
		gcopy(34, 320 + var_1416, 680, 40, 40);
		gmode(2);
	}
	if ( var_340 == 490 ) {
		gcopy(34, 320 + var_1416, 0, 40, 40);
	}
	if ( var_340 == 699 ) {
		gcopy(34, 320 + var_1416, 880, 40, 40);
	}
	if ( var_340 == 698 ) {
		gcopy(34, 320 + var_1416, 440, 40, 40);
	}
	return;/*
	if ( var_149 == 1 ) {
		var_1396 = var_455;
		var_1397 = var_456;
		var_3000 = var_455;
		var_3001 = var_456;
		var_3004 = var_3001 + 8;
		if ( var_3001 > var_3004 ) {
			var_3001 = 8;
		}
		var_1195 = 0;
		var_271 = 1;
		var_1560 = 1;
		for(var j=0; j<32; j++){
			func337();
			var_1560++;
		}
		var_3005 = dim(300);
		var_3006 = 1;
		var_3007 = 0;
		var_3008 = 0;
		for(var j=0; j<var_97; j++){
			if ( var_83[var_3006][0] != 0 && var_83[var_3006][0] != 50 && var_83[var_3006][31] != 4 && var_83[var_3006][31] != 5 ) {
				var_3005[var_3007] = var_3006;
				var_3007++;
				var_3008++;
			}
			var_3006++;
		}
		if ( var_3008 != 0 ) {
			var_2994 = 1;
		}
		var_3002 = 0;
		var_3003 = 0;
		if ( var_2994 == 1 ) {
			var_3009 = rnd(var_3008);
			var_3010 = var_3005[var_3009];
			var_455 = var_83[var_3010][1];
			var_456 = var_83[var_3010][2];
			var_3002 = var_455;
			var_3003 = var_456;
		}
		var_1195 = 1;
		var_2999 = 1;
		for(var j=0; j<24; j++){
			func337();
			var_1560++;
			var_2999++;
		}
		var_2999 = 0;
		var_1195 = 0;
		var_1560 = 0;
		var_271 = 0;
	}
	return;*/
}
function func650(){
	var_1396 = var_455;
	var_1397 = var_456;
	var_3000 = var_455;
	var_3001 = var_456;
	var_3004 = var_3001 + 8;
	if ( var_3001 > var_3004 ) {
		var_3001 = 8;
	}
	var_1195 = 0;
	var_3005 = dim(300);
	var_3006 = 1;
	var_3007 = 0;
	var_3008 = 0;
	for(var i=0; i<var_97; i++){
		var_3011 = 0;
		var_3012 = 0;
		if ( var_201 != 0 && var_201 != 13 && var_201 != 14 ) {
			if ( var_83[var_3006][10] == var_201 && var_83[var_3006][0] != 0 && var_83[var_3006][0] != 50 && var_83[var_3006][31] != 4 && var_83[var_3006][31] != 5 ) {
				var_3005[var_3007] = var_3006;
				var_3007++;
				var_3008++;
			}
			if ( var_83[var_3006][10] == 14 && var_83[var_3006][0] != 0 && var_83[var_3006][0] != 50 && var_83[var_3006][31] != 4 && var_83[var_3006][31] != 5 ) {
				var_2747 = var_83[var_3006][1];
				var_2748 = var_83[var_3006][2];
				var_1993 = var_83[var_3006][1] - 1;
				if ( var_1993 < 0 ) {
					var_1993 = 0;
				}
				var_1994 = var_83[var_3006][1] + 1;
				if ( var_1994 > var_33 ) {
					var_1994 = var_33;
				}
				var_1995 = var_83[var_3006][2] + 1;
				if ( var_1995 > var_34 ) {
					var_1995 = var_34;
				}
				var_1996 = var_83[var_3006][2] - 1;
				if ( var_1996 < 0 ) {
					var_1996 = 0;
				}
				if ( var_71[var_1993][var_2748] == var_201 ) {
					var_3005[var_3007] = var_3006;
					var_3007++;
					var_3008++;
				}
				if ( var_71[var_1994][var_2748] == var_201 ) {
					var_3005[var_3007] = var_3006;
					var_3007++;
					var_3008++;
				}
				if ( var_71[var_2747][var_1995] == var_201 ) {
					var_3005[var_3007] = var_3006;
					var_3007++;
					var_3008++;
				}
				if ( var_71[var_2747][var_1996] == var_201 ) {
					var_3005[var_3007] = var_3006;
					var_3007++;
					var_3008++;
				}
			}
		}
		if ( var_201 == 0 || var_201 == 13 || var_201 == 14 ) {
			var_2332 = var_66;
			var_2333 = var_67;
			var_2334 = var_66 - 1;
			if ( var_2334 <= 0 ) {
				var_2334 = 0;
			}
			var_2335 = var_66 + 1;
			if ( var_2335 >= var_33 ) {
				var_2335 = var_33;
			}
			var_2336 = var_67 - 1;
			if ( var_2336 <= 0 ) {
				var_2336 = 0;
			}
			var_2337 = var_67 + 1;
			if ( var_2337 >= var_34 ) {
				var_2337 = var_34;
			}
			if ( var_71[var_2334][var_2333] >= 1 && var_71[var_2334][var_2333] <= 12 ) {
				var_3011 = 1;
				var_3013 = var_71[var_2334][var_2333];
			}
			if ( var_71[var_2335][var_2333] >= 1 && var_71[var_2335][var_2333] <= 12 ) {
				var_3011 = 1;
				var_3013 = var_71[var_2335][var_2333];
			}
			if ( var_71[var_2332][var_2337] >= 1 && var_71[var_2332][var_2337] <= 12 ) {
				var_3011 = 1;
				var_3013 = var_71[var_2332][var_2337];
			}
			if ( var_71[var_2332][var_2336] >= 1 && var_71[var_2332][var_2336] <= 12 ) {
				var_3011 = 1;
				var_3013 = var_71[var_2332][var_2336];
			}
			if ( var_83[var_3006][1] == var_2334 && var_83[var_3006][2] == var_2333 ) {
				var_3012 = 1;
			}
			if ( var_83[var_3006][1] == var_2335 && var_83[var_3006][2] == var_2333 ) {
				var_3012 = 1;
			}
			if ( var_83[var_3006][1] == var_2332 && var_83[var_3006][2] == var_2337 ) {
				var_3012 = 1;
			}
			if ( var_83[var_3006][1] == var_2332 && var_83[var_3006][2] == var_2336 ) {
				var_3012 = 1;
			}
			if ( var_3011 == 1 && var_83[var_3006][0] != 0 && var_83[var_3006][10] == var_3013 && var_83[var_3006][0] != 50 && var_83[var_3006][31] != 4 && var_83[var_3006][31] != 5 ) {
				var_3005[var_3007] = var_3006;
				var_3007++;
				var_3008++;
			}
			if ( var_3012 == 1 && var_83[var_3006][0] != 0 && var_83[var_3006][0] != 50 && var_83[var_3006][31] != 4 && var_83[var_3006][31] != 5 ) {
				var_3005[var_3007] = var_3006;
				var_3007++;
				var_3008++;
			}
		}
		var_3006++;
	}
	if ( var_3008 != 0 ) {
		var_2994 = 1;
	}
	var_3002 = 0;
	var_3003 = 0;
	if ( var_262 == 1 ) {
		var_2994 = 0;
	}
	if ( var_2994 == 1 ) {
		var_3009 = rnd(var_3008);
		var_3010 = var_3005[var_3009];
		var_455 = var_83[var_3010][1];
		var_456 = var_83[var_3010][2];
		var_3002 = var_455;
		var_3003 = var_456;
	}
	var_1195 = 1;
	var_2999 = 1;
	for(var i=0; i<24; i++){
		func337();
		var_2999++;
	}
	var_2999 = 0;
	var_1195 = 0;
	if ( var_2994 == 0 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ﾋﾟｽﾄﾙｽﾞ「ウェエエエ——ン";
		var_294 = "　　　　当テル相手ガ ミツカラナイヨ—ッ」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
	}
	return;
}
function func651(){
	var_2985 = 0;
	if ( var_156[118] == 1 && var_71[var_347][var_348] == 0 ) {
		func653(func651_0);
		return;
	}
	func651_0();
}
function func651_0(){
	if ( var_156[104] == 1 ) {
		if ( var_71[var_347][var_348] == 0 && var_71[var_66][var_67] != 0 && var_3014 == 0 && var_199 != 1 && var_199 != 3 && var_199 != 7 && var_199 != 9 ) {
			if ( var_92 != 1 && var_92 != 7 && var_92 != 16 && var_262 == 0 ) {
				if ( var_347 >= 5 && var_348 >= 5 && var_347 <= var_33 && var_348 <= var_34 ) {
					var_71[var_347][var_348] = 14;
					var_303 = var_347;
					var_304 = var_348;
					var_305 = var_347 - 1;
					if ( var_305 < 0 ) {
						var_305 = 0;
					}
					var_306 = var_347 + 1;
					if ( var_306 > var_33 ) {
						var_306 = var_33;
					}
					var_307 = var_348 + 1;
					if ( var_307 > var_34 ) {
						var_307 = var_34;
					}
					var_308 = var_348 - 1;
					if ( var_308 < 0 ) {
						var_308 = 0;
					}
					if ( var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12 && var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12 ) {
						var_71[var_347][var_348] = var_71[var_305][var_304];
					}
					if ( var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12 && var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12 ) {
						var_71[var_347][var_348] = var_71[var_303][var_307];
					}
					var_1194 = 1;
					func646(func651_1);
					return;
				}
			}
		}
		func651_1();
		return;
	}
	func651_2();
}
function func651_1(){
	var_3014 = 0;
	if ( var_80[var_347][var_348] != 0 && var_2932 == 0 && var_2939 == 0 ) {
		var_3015 = var_80[var_347][var_348];
		if ( var_81[var_3015][4] == 1 || var_121 == 1 ) {
			if ( var_81[var_3015][0] != 31 ) {
				var_80[var_347][var_348] = 0;
				var_1194 = 1;
				func646(func651_2);
				return;
			}
		}
	}
	return func651_2();
}
function func651_2(){
	if ( var_357 == 108 && var_82[var_347][var_348] == 0 ) {
		var_357 = 110;
	}
	if ( var_80[var_347][var_348] > 0 && var_2932 == 0 && var_2939 == 0 ) {
		var_2935 = var_80[var_347][var_348];
		var_81[var_2935][4] = 1;
	}
	if ( var_357 == 110 ) {
		if ( var_199 == 4 ) {
			var_3016 = var_347 - 1;
			var_3017 = var_348;
		}
		if ( var_199 == 6 ) {
			var_3016 = var_347 + 1;
			var_3017 = var_348;
		}
		if ( var_199 == 8 ) {
			var_3016 = var_347;
			var_3017 = var_348 - 1;
		}
		if ( var_199 == 2 ) {
			var_3016 = var_347;
			var_3017 = var_348 + 1;
		}
		if ( var_199 == 1 ) {
			var_3016 = var_347 - 1;
			var_3017 = var_348 + 1;
		}
		if ( var_199 == 3 ) {
			var_3016 = var_347 + 1;
			var_3017 = var_348 + 1;
		}
		if ( var_199 == 7 ) {
			var_3016 = var_347 - 1;
			var_3017 = var_348 - 1;
		}
		if ( var_199 == 9 ) {
			var_3016 = var_347 + 1;
			var_3017 = var_348 - 1;
		}
		if ( var_80[var_3016][var_3017] > 0 ) {
			var_2935 = var_80[var_3016][var_3017];
			var_81[var_2935][4] = 1;
		}
	}
	if ( var_2927 == 1 ) {
		var_2927 = 0;
		var_1194 = 1;
	}
	if ( var_156[109] == 1 && var_211 == var_352 && var_71[var_347][var_348] != 0 && var_2939 == 0 ) {
		var_3018 = 0;
		var_3019 = var_66;
		var_3020 = var_67;
		for(var j=0; j<4; j++){
			if ( var_199 == 4 ) {
				var_3019 = var_3019 - 1;
				var_3020 = var_3020;
			}
			if ( var_199 == 6 ) {
				var_3019 = var_3019 + 1;
				var_3020 = var_3020;
			}
			if ( var_199 == 8 ) {
				var_3019 = var_3019;
				var_3020 = var_3020 - 1;
			}
			if ( var_199 == 2 ) {
				var_3019 = var_3019;
				var_3020 = var_3020 + 1;
			}
			if ( var_199 == 1 ) {
				var_3019 = var_3019 - 1;
				var_3020 = var_3020 + 1;
			}
			if ( var_199 == 3 ) {
				var_3019 = var_3019 + 1;
				var_3020 = var_3020 + 1;
			}
			if ( var_199 == 7 ) {
				var_3019 = var_3019 - 1;
				var_3020 = var_3020 - 1;
			}
			if ( var_199 == 9 ) {
				var_3019 = var_3019 + 1;
				var_3020 = var_3020 - 1;
			}
			if ( var_3019 <= 5 || var_3019 > var_31 || var_3020 <= 5 || var_3020 > var_32 ) {
				break;
			}
			if ( var_71[var_3019][var_3020] == 0 ) {
				break;
			}
			if ( var_82[var_3019][var_3020] != 0 ) {
				var_3021 = var_82[var_3019][var_3020];
				if ( var_83[var_3021][0] != 50 && var_83[var_3021][31] != 4 && var_83[var_3021][31] != 5 ) {
					var_3018 = 1;
				}
			}
		}
		if ( var_3018 == 1 ) {
			var_1267 = 1;
			return func647();
		}
	}
	if ( var_3022 == 0 ) {
		if ( var_2938 == 1 ) {
			var_2657 = var_83[var_314][5];
		}
		if ( var_2938 == 1 ) {
			var_83[var_314][5] = 1;
			var_83[var_314][7] = 1;
		}
		func337(func651_3);
		return;
	}
	func651_11();
}
function func651_3(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 2;
	}
	func337(func651_4);
}
function func651_4(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 3;
	}
	func337(func651_5);
}
function func651_5(){
	if ( var_2985 == 0 ) {
		func089();
	}
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 6;
	}
	func337(func651_6);
}
function func651_6(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 9;
	}
	func651_7();
}
function func651_7(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 8;
	}
	func337(func651_8);
}
function func651_8(){
	if ( var_2939 == 1 ) {
		func090();
	}
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 7;
	}
	func337(func651_9);
}
function func651_9(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = 4;
	}
	func337(func651_10);
}
function func651_10(){
	if ( var_2938 == 1 ) {
		var_83[var_314][5] = var_2657;
		var_83[var_314][7] = 0;
	}
	func337(func651_11);
}
function func651_11(){
	if ( var_156[105] == 1 && var_1030 >= 2 && var_2939 == 1 ) {
		var_func651 = 8;
		func337(func651_12);
		return;
	}
	func651_16();
}
function func651_12(){
	var_func651--;
	if(var_func651 > 0){
		return func337(func651_12);
	}
	DSPLAY(227);
	var_func651 = 2;
	func337(func651_13);
}
function func651_13(){
	var_func651--;
	if(var_func651 > 0){
		return func337(func651_13);
	}
	var_271 = 1;
	var_1265 = 1;
	var_func651 = 30;
	func337(func651_14);
}
function func651_14(){
	var_1265++
	var_func651--;
	if(var_func651 > 0){
		return func337(func651_14);
	}
	var_271 = 0;
	var_1265 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "おれは・・・";
	var_294 = "反省すると強いぜ・・・";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_func651 = 20;
	func337(func651_15);
}
function func651_15(){
	var_func651--;
	if(var_func651 > 0){
		return func337(func651_15);
	}
	func651_16();
}
function func651_16(){
	var_3022 = 0
	var_2939 = 0
	var_2932 = 0
	var_2938 = 0
	var_217 = 1
	var_1194 = 0
	if ( var_357 == 110 ) {
		var_357 = 108
		var_750 = 0
	}
	if ( var_357 == 113 ) {
		if ( var_71(var_347, var_348) == 13 ) {
			func652(func651_17);
			return;
		}
		func651_17();
		return;
	}
	func651_18();
}
function func651_17(){
	if ( var_77[var_347][var_348] != 0 && var_82[var_347][var_348] == 0 ) {
		var_3023 = var_77[var_347][var_348];
		if ( var_78[var_3023][0] == 632 ) {
			func652(func651_18);
			return;
		}
	}
	func651_18();
}
function func651_18(){
	if ( var_156[101] == 1 && var_2925 == 0 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 ) {
			var_2925 = 1;
			var_243 = 1;
			return func636();
		}
	}
	if ( var_270 == 135 && var_341 == 1 && var_83[var_314][0] > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0 ) {
		var_2966 = var_83[var_314][1];
		var_2967 = var_83[var_314][2];
		if ( var_82[var_2966][var_2967] != 0 ) {
			if ( var_357 == 101 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 122;
				return func636();
			}
			if ( var_357 == 122 ) {
				var_341 = 2;
				var_243 = 1;
				var_357 = 101;
				return func636();
			}
		}
	}
	if ( var_357 == 122 || var_357 == 101 ) {
		var_357 = var_2923;
	}
	if ( var_156[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0 ) {
		if ( var_357 != 100 && var_357 != 398 ) {
			var_2926 = 0;
			func641();
			if ( var_2968 == 1 ) {
				var_2968 = 0;
				var_243 = 1;
				return func636();
			}
		}
		if ( var_357 == 100 || var_357 == 398 ) {
			var_2926 = 0;
			func642();
			if ( var_2968 == 1 ) {
				var_2968 = 0;
				var_243 = 1;
				return func636();
			}
		}
	}
	return func019();
/*	for(var i=0; i<10; i++){
		func337();
	}
	if ( var_357 == 110 ) {
		var_357 = 108;
		var_750 = 0;
	}
	if ( var_357 == 122 || var_357 == 101 ) {
		var_357 = var_2923;
	}
	var_2939 = 0;
	var_2932 = 0;
	var_1194 = 0;
	var_217 = 1;
	return func019();*/
}
function func652(){
	if(!func){
		throw "";
	}
	if ( var_201 == 14 ) {
		return;
	}
	func426();
	var_570 = var_233[var_553][13];
	var_3024 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_3024][10] == var_201 && var_83[var_3024][0] != 0 && var_83[var_3024][31] != 4 && var_83[var_3024][31] != 5 ) {
			var_1711 = var_83[var_3024][1];
			var_1712 = var_83[var_3024][2];
			var_1713 = var_1711 - 1;
			var_1714 = var_1711 + 1;
			var_1715 = var_1712 + 1;
			var_1716 = var_1712 - 1;
			if ( var_1713 < 0 ) {
				var_1713 = 0;
			}
			if ( var_1716 < 0 ) {
				var_1716 = 0;
			}
			if ( var_1714 > var_33 ) {
				var_1714 = var_33;
			}
			if ( var_1715 > var_34 ) {
				var_1715 = var_34;
			}
			var_3025 = 0;
			if ( var_3025 == 0 && var_71[var_1713][var_1712] == 13 ) {
				var_3025 = 1;
				var_1449 = 4;
				var_1450 = var_1713;
				var_1451 = var_1712;
			}
			if ( var_3025 == 0 && var_71[var_1714][var_1712] == 13 ) {
				var_3025 = 1;
				var_1449 = 6;
				var_1450 = var_1714;
				var_1451 = var_1712;
			}
			if ( var_3025 == 0 && var_71[var_1711][var_1716] == 13 ) {
				var_3025 = 1;
				var_1449 = 8;
				var_1450 = var_1711;
				var_1451 = var_1716;
			}
			if ( var_3025 == 0 && var_71[var_1711][var_1715] == 13 ) {
				var_3025 = 1;
				var_1449 = 2;
				var_1450 = var_1711;
				var_1451 = var_1715;
			}
			if ( var_3025 == 0 && var_71[var_1713][var_1716] == 13 ) {
				var_3025 = 1;
				var_1449 = 7;
				var_1450 = var_1713;
				var_1451 = var_1716;
			}
			if ( var_3025 == 0 && var_71[var_1714][var_1716] == 13 ) {
				var_3025 = 1;
				var_1449 = 9;
				var_1450 = var_1714;
				var_1451 = var_1716;
			}
			if ( var_3025 == 0 && var_71[var_1713][var_1715] == 13 ) {
				var_3025 = 1;
				var_1449 = 1;
				var_1450 = var_1713;
				var_1451 = var_1715;
			}
			if ( var_3025 == 0 && var_71[var_1714][var_1715] == 13 ) {
				var_3025 = 1;
				var_1449 = 3;
				var_1450 = var_1714;
				var_1451 = var_1715;
			}
			if ( var_3025 == 0 && var_77[var_1713][var_1712] != 0 ) {
				var_3026 = var_77[var_1713][var_1712];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 4;
					var_1450 = var_1713;
					var_1451 = var_1712;
				}
			}
			if ( var_3025 == 0 && var_77[var_1714][var_1712] != 0 ) {
				var_3026 = var_77[var_1714][var_1712];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 6;
					var_1450 = var_1714;
					var_1451 = var_1712;
				}
			}
			if ( var_3025 == 0 && var_77[var_1711][var_1716] != 0 ) {
				var_3026 = var_77[var_1711][var_1716];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 8;
					var_1450 = var_1711;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_77[var_1711][var_1715] != 0 ) {
				var_3026 = var_77[var_1711][var_1715];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 2;
					var_1450 = var_1711;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 0 && var_77[var_1713][var_1716] != 0 ) {
				var_3026 = var_77[var_1713][var_1716];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 7;
					var_1450 = var_1713;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_77[var_1714][var_1716] != 0 ) {
				var_3026 = var_77[var_1714][var_1716];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 9;
					var_1450 = var_1714;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_77[var_1713][var_1715] != 0 ) {
				var_3026 = var_77[var_1713][var_1715];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 1;
					var_1450 = var_1713;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 0 && var_77[var_1714][var_1715] != 0 ) {
				var_3026 = var_77[var_1714][var_1715];
				if ( var_78[var_3026][0] == 632 ) {
					var_3025 = 1;
					var_1449 = 3;
					var_1450 = var_1714;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 0 && var_82[var_1713][var_1712] != 0 ) {
				var_3026 = var_82[var_1713][var_1712];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 4;
					var_1450 = var_1713;
					var_1451 = var_1712;
				}
			}
			if ( var_3025 == 0 && var_82[var_1714][var_1712] != 0 ) {
				var_3026 = var_82[var_1714][var_1712];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 6;
					var_1450 = var_1714;
					var_1451 = var_1712;
				}
			}
			if ( var_3025 == 0 && var_82[var_1711][var_1716] != 0 ) {
				var_3026 = var_82[var_1711][var_1716];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 8;
					var_1450 = var_1711;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_82[var_1711][var_1715] != 0 ) {
				var_3026 = var_82[var_1711][var_1715];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 2;
					var_1450 = var_1711;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 0 && var_82[var_1713][var_1716] != 0 ) {
				var_3026 = var_82[var_1713][var_1716];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 7;
					var_1450 = var_1713;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_82[var_1714][var_1716] != 0 ) {
				var_3026 = var_82[var_1714][var_1716];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 9;
					var_1450 = var_1714;
					var_1451 = var_1716;
				}
			}
			if ( var_3025 == 0 && var_82[var_1713][var_1715] != 0 ) {
				var_3026 = var_82[var_1713][var_1715];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 1;
					var_1450 = var_1713;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 0 && var_82[var_1714][var_1715] != 0 ) {
				var_3026 = var_82[var_1714][var_1715];
				if ( var_83[var_3026][0] == 27 || var_83[var_3026][0] == 115 ) {
					var_3025 = 1;
					var_1449 = 3;
					var_1450 = var_1714;
					var_1451 = var_1715;
				}
			}
			if ( var_3025 == 1 ) {
				var_1450 = (var_1450 - var_66 + 4) * 40;
				var_1451 = (var_1451 - var_67 + 4) * 40 - 10;
				var_314 = var_3024;
				var_402 = var_3024;
				var_437 = var_83[var_3024][0];
				var_403 = "「クラッシュ！　食い破れ！」";
				if ( var_143 >= 1 ) {
					var_2267[8] = var_2267[7];
					var_2267[7] = var_2267[6];
					var_2267[6] = var_2267[5];
					var_2267[5] = var_2267[4];
					var_2267[4] = var_2267[3];
					var_2267[3] = var_2267[2];
					var_2267[2] = var_2267[1];
					var_2267[1] = var_2267[0];
					var_2267[0] = var_83[var_314][0];
					if ( var_2267[0] != 0 && var_2267[0] == var_2267[1] ) {
						var_143 = 2;
					}
					if ( var_143 == 2 && var_2267[1] == var_2267[2] ) {
						var_143 = 3;
					}
					if ( var_143 == 3 && var_2267[2] == var_2267[3] ) {
						var_143 = 4;
					}
					if ( var_143 == 4 && var_2267[3] == var_2267[4] ) {
						var_143 = 5;
					}
					if ( var_143 == 5 && var_2267[4] == var_2267[5] ) {
						var_143 = 6;
					}
					if ( var_143 == 6 && var_2267[5] == var_2267[6] ) {
						var_143 = 7;
					}
					if ( var_143 == 7 && var_2267[6] == var_2267[7] ) {
						var_143 = 8;
					}
					if ( var_143 == 8 && var_2267[7] == var_2267[8] ) {
						var_143 = 9;
					}
					if ( var_2267[0] != 0 && var_2267[0] != var_2267[1] ) {
						var_143 = 1;
					}
				}
				var_1452 = 1;
				var_271 = 1;
				for(var l=0; l<10; l++){
					func337();
					var_1452++;
					if ( var_1452 == 4 ) {
						var_2867 = rnd(12);
						if ( var_111 == 1 || var_83[var_3024][12] != 0 || var_83[var_3024][13] != 0 ) {
							var_2867 = 1;
						}
						if ( var_2867 != 0 ) {
							var_437 = var_83[var_3024][0];
							func626();
							func638();
							var_25_1 = var_25[1];
							var_26_1 = var_26[1];
							var_27_1 = var_27[1];
							func705();
						}
						if ( var_2867 == 0 ) {
							func090();
							for(var o=0; o<3; o++){
								func337();
							}
						}
					}
				}
				var_1452 = 0;
				var_271 = 0;
				if ( var_211 <= 0 ) {
					break;
				}
			}
		}
		var_3024 = var_3024 + 1;
	}
	return;
}
function func653(){
	if(!func){
		throw "";
	}
	var_3014 = 0;
	var_3022 = 0;
	if ( var_201 == 14 ) {
		return;
	}
	func426();
	var_570 = var_233[var_553][13];
	var_3027 = dim(100);
	var_3025 = 0;
	var_3024 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_3024][10] == var_201 && var_83[var_3024][0] != 0 && var_83[var_3024][31] != 4 && var_83[var_3024][31] != 5 ) {
			var_1711 = var_83[var_3024][1];
			var_1712 = var_83[var_3024][2];
			var_1713 = var_1711 - 1;
			var_1714 = var_1711 + 1;
			var_1715 = var_1712 + 1;
			var_1716 = var_1712 - 1;
			if ( var_1713 < 0 ) {
				var_1713 = 0;
			}
			if ( var_1716 < 0 ) {
				var_1716 = 0;
			}
			if ( var_1714 > var_33 ) {
				var_1714 = var_33;
			}
			if ( var_1715 > var_34 ) {
				var_1715 = var_34;
			}
			if ( var_71[var_1713][var_1712] == 0 || var_71[var_1714][var_1712] == 0 || var_71[var_1711][var_1716] == 0 || var_71[var_1711][var_1715] == 0 || var_71[var_1713][var_1716] == 0 || var_71[var_1714][var_1716] == 0 || var_71[var_1713][var_1715] == 0 || var_71[var_1714][var_1715] == 0 ) {
				var_3025++;
				var_3027(var_3025) = var_3024;
			}
		}
		var_3024 = var_3024 + 1;
	}
	if ( var_3025 >= 1 ) {
		var_3028 = rnd(var_3025);
		var_3028++;
		var_3024 = var_3027(var_3028);
		var_1711 = var_83[var_3024][1];
		var_1712 = var_83[var_3024][2];
		var_1713 = var_1711 - 1;
		var_1714 = var_1711 + 1;
		var_1715 = var_1712 + 1;
		var_1716 = var_1712 - 1;
		if ( var_1713 < 0 ) {
			var_1713 = 0;
		}
		if ( var_1716 < 0 ) {
			var_1716 = 0;
		}
		if ( var_1714 > var_33 ) {
			var_1714 = var_33;
		}
		if ( var_1715 > var_34 ) {
			var_1715 = var_34;
		}
		var_3029 = 0;
		if ( var_3029 == 0 && var_71[var_1713][var_1712] == 0 ) {
			var_3029 = 1;
			var_1449 = 4;
			var_1450 = var_1713;
			var_1451 = var_1712;
		}
		if ( var_3029 == 0 && var_71[var_1714][var_1712] == 0 ) {
			var_3029 = 1;
			var_1449 = 6;
			var_1450 = var_1714;
			var_1451 = var_1712;
		}
		if ( var_3029 == 0 && var_71[var_1711][var_1716] == 0 ) {
			var_3029 = 1;
			var_1449 = 8;
			var_1450 = var_1711;
			var_1451 = var_1716;
		}
		if ( var_3029 == 0 && var_71[var_1711][var_1715] == 0 ) {
			var_3029 = 1;
			var_1449 = 2;
			var_1450 = var_1711;
			var_1451 = var_1715;
		}
		if ( var_3029 == 0 && var_71[var_1713][var_1716] == 0 ) {
			var_3029 = 1;
			var_1449 = 7;
			var_1450 = var_1713;
			var_1451 = var_1716;
		}
		if ( var_3029 == 0 && var_71[var_1714][var_1716] == 0 ) {
			var_3029 = 1;
			var_1449 = 9;
			var_1450 = var_1714;
			var_1451 = var_1716;
		}
		if ( var_3029 == 0 && var_71[var_1713][var_1715] == 0 ) {
			var_3029 = 1;
			var_1449 = 1;
			var_1450 = var_1713;
			var_1451 = var_1715;
		}
		if ( var_3029 == 0 && var_71[var_1714][var_1715] == 0 ) {
			var_3029 = 1;
			var_1449 = 3;
			var_1450 = var_1714;
			var_1451 = var_1715;
		}
		var_2985 = 1;
		for(var j=0; j<3; j++){
			func337();
		}
		func089();
		for(var j=0; j<6; j++){
			func337();
		}
		var_1450 = (var_1450 - var_66 + 4) * 40;
		var_1451 = (var_1451 - var_67 + 4) * 40 - 10;
		var_402 = var_3024;
		var_314 = var_3024;
		var_437 = var_83[var_3024][0];
		var_403 = "ダイバー・ダウン！";
		if ( var_143 >= 1 ) {
			var_2267[8] = var_2267[7];
			var_2267[7] = var_2267[6];
			var_2267[6] = var_2267[5];
			var_2267[5] = var_2267[4];
			var_2267[4] = var_2267[3];
			var_2267[3] = var_2267[2];
			var_2267[2] = var_2267[1];
			var_2267[1] = var_2267[0];
			var_2267[0] = var_83[var_314][0];
			if ( var_2267[0] != 0 && var_2267[0] == var_2267[1] ) {
				var_143 = 2;
			}
			if ( var_143 == 2 && var_2267[1] == var_2267[2] ) {
				var_143 = 3;
			}
			if ( var_143 == 3 && var_2267[2] == var_2267[3] ) {
				var_143 = 4;
			}
			if ( var_143 == 4 && var_2267[3] == var_2267[4] ) {
				var_143 = 5;
			}
			if ( var_143 == 5 && var_2267[4] == var_2267[5] ) {
				var_143 = 6;
			}
			if ( var_143 == 6 && var_2267[5] == var_2267[6] ) {
				var_143 = 7;
			}
			if ( var_143 == 7 && var_2267[6] == var_2267[7] ) {
				var_143 = 8;
			}
			if ( var_143 == 8 && var_2267[7] == var_2267[8] ) {
				var_143 = 9;
			}
			if ( var_2267[0] != 0 && var_2267[0] != var_2267[1] ) {
				var_143 = 1;
			}
		}
		var_1447 = 1;
		var_271 = 1;
		for(var j=0; j<8; j++){
			func337();
			var_1447 = var_1447 + 1;
			if ( var_1447 == 4 ) {
				var_2867 = rnd(12);
				if ( var_111 == 1 || var_83[var_3024][12] != 0 || var_83[var_3024][13] != 0 ) {
					var_2867 = 1;
				}
				if ( var_2867 != 0 ) {
					var_437 = var_83[var_3024][0];
					func626();
					func638();
					var_25_1 = var_25[1];
					var_26_1 = var_26[1];
					var_27_1 = var_27[1];
					func705();
					var_3014 = 1;
				}
				if ( var_2867 == 0 ) {
					func090();
					for(var m=0; m<3; m++){
						func337();
					}
				}
			}
		}
		var_1447 = 0;
		var_271 = 0;
		var_3022 = 1;
	}
	return;
}
function func654(func){
	if(!func){
		throw "";
	}
	funclist.push(func);
	var_214 = 1;
	if ( var_83[var_673][9] == 0 ) {
		var f = funclist.pop();
		f();
		return;
	}
	if ( var_83[var_673][27] != 0 ) {
		var f = funclist.pop();
		func655(f);
		return;
	}
	var_437 = var_83[var_673][0];
	func626();
	var_2197 = 0;
	if ( var_83[var_673][20] == 0 ) {
		func620(func654_0);
		return;
	}
	func654_0();
}
function func654_0(){
	if ( var_2197 == 1 ) {
		var_83[var_673][7] = 0;
		var_389 = 0;
		var_240 = 0;
		var_2197 = 0;
		return;
	}
	if ( var_83[var_673][39] >= 2 ) {
		var_967 = Math.floor(var_967 * (var_83[var_673][39] * 2 + 10) / 10);
	}
	if ( var_83[var_673][25] >= 1 && var_83[var_673][25] <= 50 ) {
		var_967 = var_967 + var_83[var_673][25];
	}
	if ( var_83[var_673][25] >= 51 && var_83[var_673][25] <= 99 ) {
		var_967 = var_967 - (var_83[var_673][25] - 50);
		if ( var_967 <= 1 ) {
			var_967 = 1;
		}
	}
	var_949 = Math.floor(var_967 * (var_967 + var_967 - 8) / 16) + var_967;
	for(var i=0; i<var_581; i++){
		var_949 = Math.floor(var_949 * 15 / 16);
	}
	var_2817 = rnd(33);
	var_2817 = var_2817 + 111;
	var_209 = Math.floor(var_949 * var_2817 / 128);
	if ( var_130 != 0 ) {
		var_1337 = var_83[var_673][0];
		if ( var_1337 == 147 || var_1337 == 73 || var_1337 == 119 || var_1337 == 136 || var_1337 == 135 || var_1337 == 139 || var_1337 == 140 || var_1337 == 105 ) {
			var_209 = Math.floor(var_209 * 3 / 2);
		}
	}
	if ( var_128 >= 1 ) {
		var_209 = Math.floor(var_209 * 3 / 2);
	}
	if ( var_182 == 1 ) {
		var_209 = Math.floor(var_209 / 2);
	}
	if ( var_209 <= 1 ) {
		var_209 = 1;
	}
	var_3030 = 0;
	var_3031 = 1;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_3031][0] == 701 ) {
			if ( var_233[var_3031][13] == var_83[var_673][0] ) {
				var_3032 = rnd(6);
				if ( var_3032 == 0 ) {
					var_3030 = var_233[var_3031][13];
					break;
				}
			}
		}
		var_3031++;
	}
	if ( var_3030 >= 1 ) {			// ソフト・マシーンは実装されてないので無視する
		var_437 = var_83[var_673][0];
		if ( var_83[var_673][0] == 97 && var_83[var_673][31] >= 11 ) {
			var_437 = var_83[var_673][31];
		}
		func626();
		var_3033 = var_891;
		if ( var_127 != 0 || var_132 != 0 ) {
			var_3033 = "何者か";
		}
		if ( var_119 == 0 && var_270 != 166 && var_83[var_673][30] != 0 ) {
			var_3033 = "何者か";
		}
		var_437 = var_3030;
		func626();
		var_3034 = var_891;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_3033 + "は";
		var_294 = "ﾍﾟﾗﾍﾟﾗの人質を見て攻撃を躊躇した！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			var_3035 = 1;
			var_83[var_673][32] = 99;
			func337();
			var_3035 = 0;
			var_83[var_673][32] = 1;
			func337();
		}
		return;
	}
	var_2867 = rnd(8);
	if ( var_110 == 1 ) {
		var_2867 = 1;
	}
	if ( var_105 == 1 ) {
		if ( var_2867 == 2 || var_2867 == 3 ) {
			var_2867 = 0;
			var_2868 = 1;
		}
	}
	if ( var_62 == 99 ) {
		var_2867 = 1;
		var_2868 = 0;
	}
	if ( var_2867 == 0 ) {
		if ( var_127 == 0 && var_132 == 0 && var_83[var_673][30] == 0 ) {
			if ( var_83[var_673][5] == 2 ) {
				var_199 = 8;
			}
			if ( var_83[var_673][5] == 8 ) {
				var_199 = 2;
			}
			if ( var_83[var_673][5] == 4 ) {
				var_199 = 6;
			}
			if ( var_83[var_673][5] == 6 ) {
				var_199 = 4;
			}
			if ( var_83[var_673][5] == 1 ) {
				var_199 = 9;
			}
			if ( var_83[var_673][5] == 3 ) {
				var_199 = 7;
			}
			if ( var_83[var_673][5] == 7 ) {
				var_199 = 3;
			}
			if ( var_83[var_673][5] == 9 ) {
				var_199 = 1;
			}
		}
		func656(func654_8);
		return;
	}
	func654_10();
}
function func654_8(){
	var_437 = var_83[var_673][0];
	if ( var_83[var_673][0] == 97 && var_83[var_673][31] >= 11 ) {
		var_437 = var_83[var_673][31];
	}
	func626();
	if ( var_127 != 0 || var_132 != 0 ) {
		var_891 = "何者か";
	}
	if ( var_119 == 0 && var_270 != 166 && var_83[var_673][30] != 0 ) {
		var_891 = "何者か";
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_2868 == 0 ) {
		var_293 = "" + var_891 + "の攻撃は外れた";
	}
	if ( var_2868 == 1 ) {
		var_293 = "" + var_891 + "の攻撃を";
		var_294 = "ヒラリとかわした";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	var_func654 = 3;
	func654_9();
}
function func654_9(){
	var_func654--;
	if(var_func654 > 0){
		func654_9();
		return;
	}
	var_2868 = 0;
	var f = funclist.pop();
	return f();
}
function func654_10(){
	if ( var_156[203] == 1 && var_163 == 0 ) {
		var_3036 = rnd(8);
		if ( var_3036 == 0 ) {
			if ( var_127 == 0 && var_132 == 0 && var_83[var_673][30] == 0 ) {
				if ( var_83[var_673][5] == 2 ) {
					var_199 = 8;
				}
				if ( var_83[var_673][5] == 8 ) {
					var_199 = 2;
				}
				if ( var_83[var_673][5] == 4 ) {
					var_199 = 6;
				}
				if ( var_83[var_673][5] == 6 ) {
					var_199 = 4;
				}
				if ( var_83[var_673][5] == 1 ) {
					var_199 = 9;
				}
				if ( var_83[var_673][5] == 3 ) {
					var_199 = 7;
				}
				if ( var_83[var_673][5] == 7 ) {
					var_199 = 3;
				}
				if ( var_83[var_673][5] == 9 ) {
					var_199 = 1;
				}
			}
			func656(func654_11);
			return;
		}
	}
	func654_13();
}
function func654_11(){
	var_437 = var_83[var_673][0];
	func626();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ザ・フールが攻撃を防いだ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_271 = 1;
	var_1383 = 1;
	var_func654 = 15
	func337(func654_12);
}
function func654_12(){
	var_1383++;
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_12);
	}
	var_271 = 0;
	var_1383 = 0;
	var f = funclist.pop();
	return f();
}
function func654_13(){
	var_3037 = 0;
	if ( var_437 == 14 || var_437 == 66 || var_437 == 47 || var_437 == 120 || var_437 == 160 || var_437 == 67 || var_156[367] == 1 ) {
		if ( var_83[var_673][20] == 0 ) {
			var_3037 = rnd(4);
			if ( var_83[var_673][0] == 120 ) {
				var_3037 = rnd(3);
			}
			if ( var_3037 == 1 ) {
				var_209 = Math.floor(var_209 * 3 / 2);
			}
			if ( var_3037 == 1 && var_209 <= 1 ) {
				var_209 = 2;
			}
		}
	}
	var_437 = var_83[var_673][0];
	func626();
	var_743 = 0;
	if ( var_1637 == 1 ) {
		var_743 = 1;
	}
	if ( var_83[var_673][0] == 129 && var_2796 == 1 ) {
		var_743 = 1;
	}
	var_742 = 1;
	var_83[var_673][7] = 1;
	var_func654 = 2;
	func337(func654_14);
}
function func654_14(){
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_14);
	}
	var_672 = var_83[var_673][0];
	func093();
	var_func654 = 3;
	func337(func654_15);
}
function func654_15(){
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_15);
	}
	var_747 = 1;
	if ( var_128 >= 1 ) {
		func023();
	}
	var_672 = var_83[var_673][0];
	func092();
	var_func654 = 2;
	func654_16();
}
function func654_16(){
	var_389 = 1;
	func337(func654_17);
}
function func654_17(){
	if ( var_3037 == 1 ) {
		var_585 = 3;
	}
	var_389 = 3;
	func337(func654_18);
}
function func654_18(){
	var_585 = 0;
	var_func654--;
	if(var_func654 > 0){
		return func654_16();
	}
	if ( var_83[var_673][0] == 22 || var_83[var_673][0] == 17 || var_83[var_673][0] == 71 ) {
		func654_19();
		return;
	}
	func654_22();
}
function func654_19(){
	var_func654 = 2;
	var_389 = 1;
	func337(func654_20);
}
function func654_20(){
	if ( var_3037 == 1 ) {
		var_585 = 3;
	}
	var_389 = 3;
	func337(func654_21);
}
function func654_21(){
	var_585 = 0;
	var_func654--
	if(var_func654 > 0){
		return func654_19();
	}
	func654_22();
}
function func654_22(){
	var_389 = 1;
	var_585 = 0;
	func337(func654_23);
}
function func654_23(){
	func337(func654_24);
}
function func654_24(){
	var_83[var_673][7] = 0;
	var_742 = 0;
	var_437 = var_83[var_673][0];
	if ( var_83[var_673][0] == 97 && var_83[var_673][31] >= 11 ) {
		var_437 = var_83[var_673][31];
	}
	func626();
	if ( var_113 == 1 ) {
		var_209 = Math.floor(var_209 * 2 / 3) + 1;
	}
	var_211 = var_211 - var_209;
	var_208 = var_208 + var_209;
	if ( var_211 <= 0 ) {
		var_211 = 0;
	}
	if ( var_3037 == 1 ) {
		var_3038 = 1;
	}
	if ( var_3038 == 1 ) {//痛恨の一撃は後回し
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		if ( var_83[var_673][0] != 120 ) {
			var_293 = "痛恨の一撃！";
		}
		if ( var_83[var_673][0] == 120 ) {
			var_293 = "「オラァッ！！」";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[3];
		var_26_1 = var_26[3];
		var_27_1 = var_27[3];
		func047();
		for(var j=0; j<9; j++){
			func337();
		}
		var_3038 = 0;
		var_437 = var_83[var_673][0];
		if ( var_83[var_673][0] == 97 && var_83[var_673][31] >= 11 ) {
			var_437 = var_83[var_673][31];
		}
		func626();
	}
	if ( var_127 != 0 || var_132 != 0 ) {
		var_891 = "何者か";
	}
	if ( var_119 == 0 && var_270 != 166 && var_83[var_673][30] != 0 ) {
		var_891 = "何者か";
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_891 + "はﾃﾞｨｱﾎﾞﾛに";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_func654 = 3;
	func337(func654_28);
}
function func654_28(){
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_28);
	}
	var_294 = "" + var_209 + "のダメージ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	if ( var_211 <= 0 ) {
		var_356 = var_83[var_673][0];
		var_212 = 1;
	}// 波紋もめんどくさいので後回し
	if ( var_83[var_673][0] == 140 || var_83[var_673][0] == 136 || var_83[var_673][0] == 73 || var_83[var_673][0] == 135 || var_83[var_673][0] == 139 || var_83[var_673][0] == 119 || var_83[var_673][0] == 111 ) {
		var_1073 = rnd(5);
		if ( var_1073 == 0 && var_178 == 0 && var_83[var_673][20] == 0 && var_215 != 116 && var_125 == 0 ) {
			func340();
			DSPLAY(120);
			var_178 = 1;
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "ビリっときたあああああ！！";
			var_297 = "";
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
	}
	var_83[var_673][7] = 0;
	var_389 = 0;
	var_240 = 0;
	var_743 = 0;
	if ( var_3037 == 1 && var_156[200] == 1 ) {
		var f = funclist.pop();
		func694(f);
		return;
	}
	if ( var_156[115] == 1 ) {
		func695(func654_31);
		return;
	}
	func654_32();
}
function func654_31(){
	if ( var_2855 != 0 ) {
		var_2855 = 0;
		var f = funclist.pop();
		f();
		return;
	}
	func654_32();
}
function func654_32(){
	if ( var_83[var_673][0] == 120 && var_3037 == 1 && var_211 >= 1 ) {
		var_func654 = 10;
		func337(func654_33);
		return;
	}
	func654_34();
}
function func654_33(){
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_33);
	}
	func529(funclist.pop());
	return;
}
function func654_34(){
	if ( var_150 == 1 && var_211 >= 1 ) {
		DSPLAY(152);
		func529(funclist.pop());
		return;
	}
	var_func654 = 3;
	func337(func654_35);
}
function func654_35(){
	var_func654--;
	if(var_func654 > 0){
		return func337(func654_35);
	}
	var f = funclist.pop();
	return f();
}
function func655(){
	if(!func){
		throw "";
	}
	var_2819 = var_673;
	var_402 = var_83[var_2819][27];
	if ( var_83[var_402][0] == 50 ) {
		func656();
		return;
	}
	if ( var_83[var_402][0] == 0 ) {
		var_83[var_2819][27] = 0;
		return;
	}
	var_437 = var_83[var_402][0];
	if ( var_83[var_402][0] == 97 && var_83[var_402][31] >= 11 ) {
		var_437 = var_83[var_402][31];
	}
	func626();
	var_971 = var_968;
	var_2861 = var_891;
	var_3039 = var_83[var_402][5];
	if ( var_127 != 0 || var_132 != 0 ) {
		var_2861 = "何者か";
	}
	if ( var_119 == 0 && var_270 != 166 && var_83[var_402][30] != 0 ) {
		var_2861 = "何者か";
	}
	var_1637 = 0;
	var_437 = var_83[var_2819][0];
	if ( var_83[var_2819][0] == 97 && var_83[var_2819][31] >= 11 ) {
		var_437 = var_83[var_2819][31];
	}
	func626();
	var_2820 = var_967;
	var_3040 = var_891;
	if ( var_127 != 0 || var_132 != 0 ) {
		var_3040 = "何者か";
	}
	if ( var_119 == 0 && var_270 != 166 && var_83[var_2819][30] != 0 ) {
		var_3040 = "何者か";
	}
	var_3041 = rnd(8);
	if ( var_62 == 99 ) {
		var_3041 = 1;
	}
	if ( var_3041 == 0 ) {
		func656();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_3040 + "の攻撃は外れた";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<3; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_402][0] == 53 ) {
		var_971 = var_968;
	}
	var_403 = "" + var_3040 + "は";
	if ( var_83[var_2819][39] >= 2 ) {
		var_2820 = Math.floor(var_2820 * (var_83[var_2819][39] * 2 + 10) / 10);
	}
	if ( var_83[var_402][39] >= 2 ) {
		if ( var_83[var_402][31] == 4 || var_83[var_402][31] == 5 ) {
			var_971 = Math.floor(var_971 * (var_83[var_402][39] * 2 + 10) / 10);
		}
	}
	if ( var_83[var_2819][25] >= 1 && var_83[var_2819][25] <= 50 ) {
		var_2820 = var_2820 + var_83[var_2819][25];
	}
	if ( var_83[var_2819][25] >= 51 && var_83[var_2819][25] < 99 ) {
		var_2820 = var_967 - (var_83[var_2819][25] - 50);
		if ( var_2820 <= 1 ) {
			var_2820 = 1;
		}
	}
	var_949 = Math.floor(var_2820 * (var_2820 + var_2820) / 16) + var_2820;
	for(var i=0; i<var_971; i++){
		var_949 = Math.floor(var_949 * 15 / 16);
	}
	var_2817 = rnd(33);
	var_2817 = var_2817 + 111;
	var_209 = Math.floor(var_949 * var_2817 / 128) + 1;
	if ( var_1637 == 1 ) {
		var_743 = 1;
	}
	var_2196 = 1;
	if ( var_83[var_402][0] != 79 ) {
		if ( var_83[var_2819][5] == 4 ) {
			var_83[var_402][5] = 6;
		}
		if ( var_83[var_2819][5] == 6 ) {
			var_83[var_402][5] = 4;
		}
		if ( var_83[var_2819][5] == 2 ) {
			var_83[var_402][5] = 8;
		}
		if ( var_83[var_2819][5] == 8 ) {
			var_83[var_402][5] = 2;
		}
		if ( var_83[var_2819][5] == 1 ) {
			var_83[var_402][5] = 9;
		}
		if ( var_83[var_2819][5] == 3 ) {
			var_83[var_402][5] = 7;
		}
		if ( var_83[var_2819][5] == 7 ) {
			var_83[var_402][5] = 3;
		}
		if ( var_83[var_2819][5] == 9 ) {
			var_83[var_402][5] = 1;
		}
	}
	var_742 = 1;
	var_83[var_2819][7] = 1;
	func337();
	func337();
	var_672 = var_83[var_673][0];
	func093();
	func337();
	func337();
	func337();
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func705();
	var_83[var_2819][7] = 0;
	var_742 = 0;
	var_2196 = 0;
	if ( var_83[var_402][0] != 0 && var_83[var_402][9] == 1 ) {
		var_83[var_402][5] = var_3039;
	}
	if ( var_83[var_402][0] != 0 && var_83[var_2819][10] == 0 ) {
		var_83[var_402][5] = var_3039;
	}
	var_240 = 0;
	var_743 = 0;
	return;
}
function func656(func){
	if(!func){
		throw "";
	}
	funclist.push(func);
	var_437 = var_83[var_673][0];
	func626();
	var_743 = 0;
	if ( var_1637 == 1 ) {
		var_743 = 1;
	}
	var_742 = 1;
	var_83[var_673][7] = 1;
	if ( var_2868 == 1 ) {
		var_2869 = var_199;
	}
	var_func656 = 2;
	func337(func656_0);
}
function func656_0(){
	var_func656--;
	if(var_func656 > 0){
		return func337(func656_0);
	}
	var_672 = var_83[var_673][0];
	func093();
	var_func656 = 7;
	func656_1();
}
function func656_1(){
	if ( var_2868 == 1 ) {
		if ( var_199 == 1 ) {
			var_2870 = 2;
		}
		if ( var_199 == 2 ) {
			var_2870 = 3;
		}
		if ( var_199 == 3 ) {
			var_2870 = 6;
		}
		if ( var_199 == 6 ) {
			var_2870 = 9;
		}
		if ( var_199 == 9 ) {
			var_2870 = 8;
		}
		if ( var_199 == 8 ) {
			var_2870 = 7;
		}
		if ( var_199 == 7 ) {
			var_2870 = 4;
		}
		if ( var_199 == 4 ) {
			var_2870 = 1;
		}
		var_199 = var_2870;
		if ( i >= 6 ) {
			var_199 = var_2869;
		}
	}
	func337(func656_2);
}
function func656_2(){
	var_func656--;
	if(var_func656 > 0){
		return func656_1();
	}
	var_83[var_673][7] = 0;
	var_389 = 0;
	var_743 = 0;
	var_240 = 0;
	funclist.pop()();
	return;
}
function func657(){
	if ( var_83[var_314][12] != 0 || var_83[var_314][13] != 0 || var_83[var_314][17] != 0 ) {
		return;
	}
	var_412 = var_314;
	var_83[var_314][8] = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "玉美「イイイイイデェ〜〜〜〜ッ";
	var_297 = "　　　前歯がハァァ—————ッ」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	if ( var_410 == 406 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_1073 = rnd(4);
		if ( var_1073 == 0 ) {
			var_293 = "ちっとも罪悪感を感じなかった。";
			var_294 = "";
		}
		if ( var_1073 == 1 ) {
			var_293 = "「かあさんとお姉ちゃんに手を出すことは";
			var_294 = "決してさせないぞッ！」";
		}
		if ( var_1073 == 2 ) {
			var_293 = "「閑けさや岩にしみ入る蝉の声」";
			var_294 = "";
		}
		if ( var_1073 == 3 ) {
			var_293 = "「よし！それじゃあ明日までにキッチリ";
			var_294 = "５０万持って来い！」";
		}
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<20; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		return;
	}
	DSPLAY(188);
	var_389 = 2;
	var_413 = var_199;
	var_199 = 2;
	var_414 = 1;
	var_271 = 1;
	for(var i=0; i<25; i++){
		func337();
		var_414++;
	}
	var_389 = 0;
	var_414 = 0;
	var_271 = 0;
	var_83[var_314][8] = 0;
	if ( var_415 < 1 ) {
		if ( var_156[396] == 0 ) {
			if ( var_157 == 0 ) {
				var_133 = 1;
				var_397 = 0;
			}
			if ( var_157 != 0 ) {
				var_157 = 0;
				var_158 = 0;
			}
		}
		DSPLAY(162);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "罪悪感で体が重くなった！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		if ( var_156[396] == 1 ) {
			func340();
			func094();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "しかし装備スタンドの効果で";
			var_297 = "速度は遅くならない！";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
		}
		for(var j=0; j<20; j++){
			func337();
		}
		var_199 = var_413;
	}
	if ( var_415 >= 1 ) {
		DSPLAY(207);
		if ( var_415 <= 500 ) {
			var_416 = var_415;
		}
		if ( var_415 > 500 ) {
			var_416 = Math.floor(var_415 / 2);
		}
		var_415 = var_415 - var_416;
		var_83[var_412][26] = 1;
		var_232 = 1;
		var_417 = var_232;
		var_1249 = var_78[var_419][13];
		var_418 = "" + var_416 + "G";
		var_419 = var_412 + 200;
		var_78[var_419][0] = 1;
		var_78[var_419][1] = 0;
		var_78[var_419][2] = 0;
		var_78[var_419][3] = 0;
		var_78[var_419][4] = 0;
		var_78[var_419][5] = 0;
		var_78[var_419][6] = 0;
		var_78[var_419][7] = 0;
		var_78[var_419][8] = 0;
		var_78[var_419][9] = 0;
		var_78[var_419][10] = 0;
		var_78[var_419][11] = 0;
		var_78[var_419][12] = 0;
		if ( var_78[var_419][13] != 0 ) {
			var_78[var_419][13] = var_78[var_419][13] + var_416;
		}
		if ( var_78[var_419][13] == 0 ) {
			var_78[var_419][13] = var_416;
		}
		var_78[var_419][14] = 0;
		var_78[var_419][15] = 0;
		var_78[var_419][16] = 0;
		var_78[var_419][17] = 0;
		var_78[var_419][18] = 0;
		var_78[var_419][19] = 0;
		var_78[var_419][20] = 0;
		var_78[var_419][21] = 0;
		var_78[var_419][22] = 0;
		var_78[var_419][23] = 0;
		var_78[var_419][24] = 0;
		var_78[var_419][25] = 0;
		var_78[var_419][26] = 0;
		var_78[var_419][27] = 0;
		var_78[var_419][28] = 0;
		var_78[var_419][29] = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "罪悪感で" + var_418 + " 奪われた！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<20; j++){
			func337();
		}
		var_199 = var_413;
	}
	return;
}
function func658(){
	if ( var_83[var_314][12] != 0 || var_83[var_314][13] != 0 || var_83[var_314][17] != 0 ) {
		return;
	}
	if ( var_83[var_314][0] != 133 && var_83[var_314][0] != 118 && var_83[var_314][0] != 9 && var_83[var_314][0] != 10 && var_83[var_314][0] != 139 && var_83[var_314][0] != 153 && var_83[var_314][0] != 61 ) {
		for(var j=0; j<4; j++){
			func337();
		}
	}
	if ( var_83[var_314][0] == 137 ) {
		var_3042 = var_314;
		if ( var_83[var_314][3] > 10 ) {
			return;
		}
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "吉良「限界だッ！　押すねッ！」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "吉良『今だッ』！";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		if ( var_83[var_3042][14] != 0 ) {
			var_83[var_3042][8] = 1;
			for(var k=0; k<5; k++){
				func337();
			}
			DSPLAY(162);
			for(var k=0; k<3; k++){
				var_585 = 3;
				func337();
				var_585 = 0;
				func337();
			}
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「Ｓ・Ｈ・Ｉ・Ｔ！」";
			var_294 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			var_198 = 1;
			var_300 = 0;
			func340();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "吉良のバイツァダストを防いだ！";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			func340();
			func094();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "吉良「…………な………";
			var_294 = "このクソカスどもがァ——ッ！！」";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			var_198 = 1;
			var_300 = 0;
			func340();
			if ( var_215 == 111 || var_215 == 398 ) {
				var_114 = 0;
				var_463 = 0;
				var_464 = 0;
				var_461 = 0;
				var_462 = 0;
				var_151 = 0;
				var_152 = 0;
				var_163 = 1;
				var_164 = 1;
				DSPLAY(185);
				var_271 = 1;
				var_1493 = 1;
				for(var l=0; l<20; l++){
					func337();
					var_1493++;
				}
				var_271 = 0;
				var_1493 = 0;
				var_293 = "";
				var_294 = "";
				var_295 = "";
				var_296 = "";
				var_297 = "";
				var_298 = "";
				var_299 = 0;
				if ( var_215 == 111 ) {
					var_293 = "『ザ・ワールド』！";
					var_294 = "";
				}
				if ( var_215 == 398 ) {
					var_293 = "『ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ』！";
					var_294 = "";
				}
				var_198 = 1;
				var_300 = 0;
				var_25_1 = var_25[6];
				var_26_1 = var_26[6];
				var_27_1 = var_27[6];
				func047();
				for(var l=0; l<2; l++){
					func337();
				}
				func340();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "ﾃﾞｨｱﾎﾞﾛ「そしてやれやれ";
				var_297 = "　　　　　間に合ったぜ……」";
				var_25_1 = var_25[6];
				var_26_1 = var_26[6];
				var_27_1 = var_27[6];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				for(var l=0; l<2; l++){
					func337();
				}
				func340();
				var_153 = 2;
			}
			var_83[var_3042][8] = 0;
			return;
		}
		DSPLAY(165);
		for(var j=0; j<5; j++){
			func337();
		}
		var_3043 = 0;
		if ( var_201 == var_83[var_3042][10] && var_201 != 14 ) {
			var_3043 = 1;
		}
		var_3044 = var_66;
		var_3045 = var_67;
		var_3046 = var_3044 - 1;
		if ( var_3046 < 0 ) {
			var_3046 = 0;
		}
		var_3047 = var_3044 + 1;
		if ( var_3047 > var_31 + 2 ) {
			var_3047 = var_31;
		}
		var_3048 = var_3045 + 1;
		if ( var_3048 > var_34 + 2 ) {
			var_3048 = var_34;
		}
		var_3049 = var_3045 - 1;
		if ( var_3049 < 0 ) {
			var_3049 = 0;
		}
		if ( var_83[var_3042][1] >= var_3046 && var_83[var_3042][1] <= var_3047 && var_83[var_3042][2] >= var_3049 && var_83[var_3042][2] <= var_3048 ) {
			var_3043 = 1;
		}
		DSPLAY(180);
		var_1389 = var_83[var_3042][1];
		var_1390 = var_83[var_3042][2];
		var_271 = 1;
		var_1388 = 1;
		if ( var_3043 == 1 ) {
			var_389 = 2;
		}
		for(var j=0; j<3; j++){
			var_585 = 3;
			func337();
			var_585 = 0;
			func337();
			var_1388++;
		}
		for(var j=0; j<7; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
			var_1388++;
		}
		for(var j=0; j<10; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
			var_1388++;
		}
		var_389 = 0;
		var_271 = 0;
		var_1388 = 0;
		if ( var_3043 == 1 ) {
			var_177 = 8;
		}
		var_3043 = 0;
		gsel(19);
		color(255, 255, 255);
		boxf(0, 0, 340, 340);
		gsel(0);
		var_311 = 255;
		var_312 = 1;
		var_83[var_3042][8] = 0;
		var_2965 = 1;
		func669();
		var_83[var_3042][39] = var_83[var_3042][39] + 1;
		if ( var_83[var_3042][39] == 1 ) {
			var_83[var_3042][39] = 2;
		}
		var_437 = 137;
		func626();
		var_83[var_3042][3] = Math.floor(var_438 * (var_83[var_3042][39] + 10) / 10);
		if ( var_83[var_3042][3] >= 999 ) {
			var_83[var_3042][3] = 999;
		}
		for(var j=0; j<51; j++){
			func337();
			var_311 = var_311 - 5;
		}
		var_312 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「フ…フハ…　フハハハハハハハハハ";
		var_294 = "　　戻ったぞ…」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		var_198 = 1;
		var_300 = 0;
		func340();
	}
	if ( var_83[var_314][0] == 143 ) {
		var_3042 = var_314;
		var_83[var_3042][8] = 0;
		var_1912 = var_673;
		var_673 = var_314;
		func595();
		var_673 = var_1912;
		return;
	}
	if ( var_83[var_314][0] == 153 ) {
		var_3042 = var_314;
		var_83[var_3042][8] = 1;
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「いっしょに行こうよォ〜〜ッ」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_1396 = var_66;
		var_1397 = var_67;
		var_271 = 1;
		var_1551 = 1;
		for(var j=0; j<16; j++){
			func337();
			var_1551++;
		}
		var_1551 = 0;
		var_271 = 0;
		var_389 = 2;
		var_747 = 1;
		DSPLAY(105);
		var_1212 = 1;
		var_2244 = var_209;
		var_211 = var_211 - var_2244;
		var_208 = var_208 + var_2244;
		if ( var_211 <= 0 ) {
			var_211 = 0;
			var_356 = 253;
		}
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<5; j++){
			func337();
		}
		var_389 = 0;
		var_83[var_3042][8] = 0;
		return;
	}
	if ( var_83[var_314][0] == 61 ) {
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "うぉうッ！　臭いがッ！";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
		var_389 = 2;
		DSPLAY(105);
		var_747 = 1;
		var_1212 = 1;
		var_2244 = var_209;
		var_211 = var_211 - var_2244;
		var_208 = var_208 + var_2244;
		if ( var_211 <= 0 ) {
			var_211 = 0;
			var_356 = 252;
		}
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<5; j++){
			func337();
		}
		var_389 = 0;
		var_83[var_314][8] = 0;
		return;
	}
	if ( var_83[var_314][0] == 84 && var_83[var_314][3] <= 20 ) {
		var_83[var_314][8] = 0;
		var_83[var_314][0] = 117;
		var_83[var_314][15] = 1;
		var_1584 = (var_83[var_314][1] - var_66 + 4) * 40;
		var_1585 = (var_83[var_314][2] - var_67 + 4) * 40;
		var_271 = 1;
		var_1583 = 1;
		DSPLAY(168);
		for(var j=0; j<10; j++){
			func337();
			var_1583++;
		}
		var_271 = 0;
		var_1583 = 0;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "キィイイイイイイ";
		var_297 = "　　コエエエエエエ　エエエエエエエエ";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 9 || var_83[var_314][0] == 10 ) {
		var_1073 = rnd(4);
		if ( var_1073 != 0 || var_136 != 0 || var_135 != 0 || var_134 != 0 ) {
			return;
		}
		if ( var_156[201] == 0 && var_83[var_314][0] == 9 ) {
			var_136 = 1;
			DSPLAY(123);
		}
		if ( var_156[201] == 0 && var_83[var_314][0] == 10 ) {
			var_135 = 1;
			DSPLAY(123);
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_293 = var_296;
		var_294 = var_297;
		if ( var_156[201] == 0 ) {
			var_296 = "肉片がくっついた！";
			var_297 = "";
		}
		if ( var_156[201] == 1 ) {
			var_296 = "肉片がくっつきそうになったが";
			var_297 = "装備DISCによって防いだ";
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 86 ) {
		var_1073 = rnd(4);
		if ( var_1073 != 0 || var_137 != 0 ) {
			return;
		}
		if ( var_156[201] == 0 ) {
			var_137 = 1;
			DSPLAY(123);
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_293 = var_296;
		var_294 = var_297;
		if ( var_156[201] == 0 ) {
			var_296 = "「憎き肉片」がくっついた！";
			var_297 = "";
		}
		if ( var_156[201] == 1 ) {
			var_296 = "「憎き肉片」がくっつきそうになったが";
			var_297 = "装備DISCによって防いだ";
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 139 ) {
		var_1073 = rnd(4);
		if ( var_1073 != 0 || var_178 != 0 ) {
			return;
		}
		if ( var_215 != 116 && var_125 == 0 ) {
			var_178 = 1;
			DSPLAY(120);
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_293 = var_296;
		var_294 = var_297;
		if ( var_215 != 116 && var_125 == 0 ) {
			var_296 = "オーノーだズラ！";
			var_297 = "波紋を流されちまったズラ！";
		}
		if ( var_215 == 116 || var_125 >= 1 ) {
			var_296 = "波紋でやられそうになったが、";
			var_297 = "波紋に強くなっていて平気だった。";
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 138 ) {
		var_1073 = rnd(5);
		if ( var_1073 != 0 ) {
			return;
		}
		var_128 = 1;
		DSPLAY(126);
		for(var j=0; j<10; j++){
			func337();
		}
		var_293 = var_296;
		var_294 = var_297;
		if ( var_215 != 109 && var_410 != 404 && var_215 != 202 && var_173 == 0 ) {
			var_1073 = rnd(3);
			if ( var_1073 == 0 ) {
				var_296 = "チェックが甘かったな…！";
				var_297 = "";
			}
			if ( var_1073 == 1 ) {
				var_296 = "お前はこのディオにとっての";
				var_297 = "モンキーなんだよ————ッ！！";
			}
			if ( var_1073 == 2 ) {
				var_296 = "無駄　無駄　無駄———っ！！";
				var_297 = "";
			}
		}
		if ( var_215 == 109 || var_410 == 404 || var_215 == 202 ) {
			var_296 = "凍らされそうになったが、";
			var_297 = "装備ｽﾀﾝﾄﾞのおかげで平気だった";
			var_128 = 0;
		}
		if ( var_173 == 1 ) {
			var_296 = "凍らされそうになったが、";
			var_297 = "冷たいのに強くなってて平気だった";
			var_128 = 0;
		}
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 109 && var_83[var_314][30] != 0 ) {
		var_3050 = rnd(3);
		if ( var_3050 != 0 ) {
			return;
		}
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾜﾑｳの透明化が解除された。";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_83[var_314][30] = 0;
		for(var j=0; j<5; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 109 && var_83[var_314][29] == 0 && var_83[var_314][30] == 0 ) {
		if ( var_83[var_314][3] > 10 ) {
			return;
		}
		if ( var_83[var_314][23] != 0 ) {
			return;
		}
		var_83[var_314][8] = 1;
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾜﾑｳ「ブツ　ブツ　ブツ";
		var_297 = "　　　　ブツ　ブツ　ブツ」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_83[var_314][21] = 1;
		var_83[var_314][8] = 0;
		var_411 = 1;
		func340();
		for(var j=0; j<10; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		DSPLAY(235);
		var_411 = 2;
		for(var j=0; j<5; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		var_411 = 3;
		for(var j=0; j<10; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		var_411 = 0;
		var_83[var_314][21] = 0;
		var_83[var_314][23] = 1;
		var_83[var_314][29] = 1;
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾜﾑｳ「なまじ目が見えたから";
		var_297 = "　　ヤツに虚をつかれた！」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		DSPLAY(142);
		var_83[var_314][39] = var_83[var_314][39] + 2;
		if ( var_83[var_314][39] == 2 ) {
			var_83[var_314][39] = 3;
		}
		var_437 = var_83[var_314][0];
		func626();
		var_83[var_314][3] = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
		if ( var_83[var_314][3] >= 999 ) {
			var_83[var_314][3] = 999;
		}
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾜﾑｳはレベルが上がった！";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 6 ) {
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 1;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 1;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		DSPLAY(182);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "恨みのパワーで";
		var_297 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの攻撃力が上がった！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_83[var_314][21] = 1;
		for(var j=0; j<4; j++){
			var_411 = 1;
			func337();
			var_411 = 2;
			func337();
			var_411 = 3;
			func337();
			var_411 = 4;
			func337();
		}
		var_411 = 0;
		var_83[var_314][21] = 0;
		return;
	}
	if ( var_83[var_314][0] == 44 && var_83[var_314][10] != 13 ) {
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 2;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 2;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰは反省している…";
		var_297 = "電力を集中させ 攻撃力が上がった！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_271 = 1;
		var_1387 = 1;
		DSPLAY(120);
		for(var j=0; j<5; j++){
			func337();
			var_1387 = var_1387 + 1;
		}
		var_271 = 0;
		var_1387 = 0;
		return;
	}
	if ( var_83[var_314][0] == 14 ) {
		var_83[var_314][21] = 1;
		var_411 = 1;
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 2;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 2;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		for(var j=0; j<5; j++){
			func337();
		}
		DSPLAY(112);
		var_411 = 2;
		func337();
		var_411 = 3;
		func337();
		var_411 = 4;
		func337();
		var_411 = 3;
		func337();
		var_411 = 2;
		func337();
		var_411 = 1;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「今ので覚えたぞ・・・！」";
		var_297 = "床屋のｶｰﾝの攻撃力が上がった！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][21] = 0;
	}
	if ( var_83[var_314][0] == 129 ) {
		var_83[var_314][21] = 1;
		var_411 = 1;
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 4;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 4;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		for(var j=0; j<5; j++){
			func337();
		}
		DSPLAY(112);
		var_411 = 2;
		func337();
		var_411 = 3;
		func337();
		var_411 = 4;
		func337();
		var_411 = 3;
		func337();
		var_411 = 2;
		func337();
		var_411 = 1;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「今ので覚えたぞ・・・！」";
		var_297 = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌの攻撃力が上がった！";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][21] = 0;
	}
	if ( var_83[var_314][0] == 120 ) {
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 5;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 5;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		var_293 = var_296;
		var_294 = var_297;
		func094();
		var_296 = "承太郎は何かメモをしている…";
		var_297 = "「忘れっぽいんでな…」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		DSPLAY(182);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "承太郎の攻撃力が上がった！";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 161 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_294 = "　　　バルバルバルバルバルバル";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		for(var j=0; j<10; j++){
			func337();
		}
		func340();
		var_83[var_314][8] = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「これがッ！」";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_83[var_314][21] = 1;
		var_411 = 1;
		for(var j=0; j<1; j++){
			func337();
		}
		var_411 = 2;
		func337();
		for(var j=0; j<7; j++){
			var_411 = 2;
			func337();
			var_411 = 3;
			func337();
		}
		var_293 = "「これがッ！」　　「これがッ！」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		var_411 = 4;
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = 5;
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = 6;
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = 7;
		for(var j=0; j<2; j++){
			func337();
		}
		var_83[var_314][0] = 162;
		var_411 = 1;
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = 2;
		for(var j=0; j<10; j++){
			func337();
		}
		var_411 = 3;
		for(var j=0; j<4; j++){
			func337();
		}
		var_411 = 4;
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = 5;
		for(var j=0; j<2; j++){
			func337();
		}
		var_293 = "「これがッ！」　　「これがッ！」";
		var_294 = "「これが【バオー】だッ！」";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			var_411 = 7;
			for(var k=0; k<2; k++){
				func337();
			}
			var_411 = 6;
			for(var k=0; k<2; k++){
				func337();
			}
		}
		var_411 = 0;
		var_83[var_314][21] = 0;
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ウオオオオオオオオオ————ム！";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		var_198 = 1;
		var_300 = 0;
		func050();
		func047();
		for(var j=0; j<15; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 118 ) {
		var_3051 = rnd(5);
		if ( var_3051 != 0 ) {
			return;
		}
		var_3052 = var_83[var_314][1];
		var_3053 = var_83[var_314][2];
		if ( var_71[var_3052][var_3053] == 13 ) {
			return;
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「このド畜生がッ！！」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_83[var_314][30] = 0;
		var_83[var_314][21] = 1;
		var_411 = 1;
		func337();
		var_411 = 2;
		func337();
		var_83[var_314][0] = 133;
		var_83[var_314][31] = 2;
		var_83[var_314][23] = 0;
		var_411 = 8;
		func337();
		var_411 = 7;
		func337();
		var_411 = 6;
		func337();
		var_411 = 5;
		func337();
		var_411 = 4;
		func337();
		var_411 = 3;
		func337();
		var_411 = 2;
		func337();
		var_411 = 1;
		func337();
		var_411 = 0;
		var_83[var_314][21] = 0;
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 133 ) {
		var_3051 = rnd(3);
		if ( var_3051 == 0 ) {
			return;
		}
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_83[var_314][21] = 1;
		var_411 = 1;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「暗黒空間にバラ撒いてやるッ！」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<5; j++){
			func337();
		}
		var_411 = 2;
		func337();
		var_411 = 3;
		func337();
		var_411 = 4;
		func337();
		var_411 = 5;
		func337();
		var_411 = 6;
		func337();
		var_411 = 7;
		func337();
		var_411 = 8;
		func337();
		var_411 = 0;
		var_83[var_314][21] = 0;
		var_83[var_314][0] = 118;
		var_83[var_314][31] = 3;
		var_83[var_314][23] = 1;
		var_83[var_314][21] = 1;
		var_411 = 2;
		func337();
		var_411 = 1;
		func337();
		var_411 = 0;
		var_83[var_314][21] = 0;
		var_83[var_314][30] = 1;
		return;
	}
	if ( var_83[var_314][0] == 121 ) {
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_3054 = var_83[var_314][5];
		var_83[var_314][5] = 2;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "「これがおれの本体のハンサム顔だ！」";
		var_297 = "";
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_83[var_314][0] = 9;
		var_1378 = (var_83[var_314][1] - var_66 + 4) * 40;
		var_1379 = (var_83[var_314][2] - var_67 + 4) * 40 - 10;
		var_271 = 1;
		var_1377 = 1;
		for(var j=0; j<10; j++){
			func337();
			var_1377++;
		}
		var_271 = 0;
		var_1377 = 0;
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][5] = var_3054;
		return;
	}
	return;
}
function func659(){
	var_2712 = 0;
	var_616 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_616][0] == 49 ) {
			var_2712 = 1;
		}
		var_616++;
	}
	if ( var_83[var_314][0] == 132 && var_83[var_314][20] == 0 && var_83[var_314][12] == 0 && var_83[var_314][13] == 0 && var_83[var_314][14] == 0 && var_83[var_314][17] == 0 && var_83[var_314][23] == 0 && var_83[var_314][19] == 0 && var_83[var_314][25] <= 50 && var_2712 == 0 ) {
		return;
	}
	if ( var_83[var_314][0] == 143 && var_83[var_314][20] == 0 && var_83[var_314][12] == 0 && var_83[var_314][13] == 0 && var_83[var_314][14] == 0 && var_83[var_314][17] == 0 && var_83[var_314][23] == 0 && var_83[var_314][19] == 0 && var_83[var_314][25] <= 50 ) {
		return;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	var_3055 = 0;
	if ( var_83[var_314][20] != 0 || var_83[var_314][12] != 0 || var_83[var_314][13] != 0 || var_83[var_314][14] != 0 || var_83[var_314][17] != 0 || var_83[var_314][23] != 0 || var_83[var_314][19] != 0 || var_83[var_314][25] != 0 ) {
		var_3055 = 1;
	}
	if ( var_83[var_314][0] == 132 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ！！」";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		func340();
		if ( var_2712 == 1 ) {
			var_421 = 1;
			for(var k=0; k<var_97; k++){
				if ( var_83[var_421][0] == 49 ) {
					var_439 = var_83[var_421][0];
					var_83[var_421][5] = 2;
					var_440 = var_83[var_421][1];
					var_441 = var_83[var_421][2];
					var_442 = var_83[var_421][1];
					var_443 = var_83[var_421][2];
					var_83[var_421][11] = 1;
					var_399 = var_83[var_421][1];
					var_400 = var_83[var_421][2];
					var_82[var_399][var_400] = 0;
					var_83[var_421][0] = 0;
					var_83[var_421][1] = 0;
					var_83[var_421][2] = 0;
					var_445 = 1;
					func405();
					var_445 = 0;
					if ( var_446 != 0 ) {
						var_447 = var_448;
						var_449 = var_450;
						var_451 = 1;
						var_452 = 1;
						var_453 = 1;
						var_454 = 1;
						func384();
						var_454 = 0;
						var_451 = 0;
						var_452 = 0;
						var_453 = 0;
					}
				}
				var_421++;
			}
		}
		gsel(19);
		color(255, 255, 0);
		boxf(0, 0, 340, 340);
		gsel(0);
		var_311 = 255;
		var_312 = 1;
		DSPLAY(161);
		for(var j=0; j<10; j++){
			func337();
			var_311 = var_311 - 25;
			if ( var_311 <= 0 ) {
				var_311 = 0;
			}
		}
		var_312 = 0;
		var_83[var_314][20] = 0;
		var_83[var_314][12] = 0;
		var_83[var_314][13] = 0;
		var_83[var_314][14] = 0;
		var_83[var_314][17] = 0;
		var_83[var_314][23] = 0;
		var_83[var_314][19] = 0;
		var_83[var_314][25] = 0;
		var_83[var_314][4] = 3;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		if ( var_3055 == 1 && var_2712 == 0 ) {
			var_293 = "ｼﾞｮﾙﾉの状態異常が治った！";
			var_294 = "";
		}
		if ( var_3055 == 0 && var_2712 == 1 ) {
			var_293 = "サーフィスが人形に戻された！";
			var_294 = "";
		}
		if ( var_3055 == 1 && var_2712 == 1 ) {
			var_293 = "ｼﾞｮﾙﾉの状態異常が治った！";
			var_294 = "サーフィスが人形に戻された！";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	if ( var_83[var_314][0] == 143 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "「ボヘミアン・ラプソディ」！！";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		func340();
		gsel(19);
		color(255, 255, 255);
		boxf(0, 0, 340, 340);
		gsel(0);
		var_311 = 255;
		var_312 = 1;
		DSPLAY(161);
		for(var j=0; j<10; j++){
			func337();
			var_311 = var_311 - 25;
			if ( var_311 <= 0 ) {
				var_311 = 0;
			}
		}
		var_312 = 0;
		var_83[var_314][20] = 0;
		var_83[var_314][12] = 0;
		var_83[var_314][13] = 0;
		var_83[var_314][14] = 0;
		var_83[var_314][17] = 0;
		var_83[var_314][23] = 0;
		var_83[var_314][19] = 0;
		var_83[var_314][25] = 0;
		var_83[var_314][4] = 3;
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "精神と肉体は分離され…";
		var_294 = "スタンド能力は無効となる！";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		return;
	}
	return;
}
function func660(){
	if(!func){
		throw "";
	}
	var_3056 = var_340;
	var_314 = var_82[var_455][var_456];
	var_437 = var_83[var_314][0];
	func626();
	var_748 = var_83[var_314][1] - var_66 + 4;
	var_749 = var_83[var_314][2] - var_67 + 4;
	if ( var_163 == 0 && var_123 == 0 ) {
		if ( var_83[var_314][0] == 64 && var_83[var_314][12] == 0 && var_83[var_314][20] == 0 && var_83[var_314][17] == 0 && var_1218 == 0 && var_156[122] == 0 && var_340 != 412 ) {
			var_1195 = 0;
			var_1421 = var_340;
			var_1249 = var_1887;
			var_1393 = var_314;
			func666();
			var_340 = var_3056;
			var_2995 = 1;
			return;
		}
		if ( var_1270 == 1 && var_156[122] == 0 && var_1218 == 0 && var_83[var_314][12] == 0 && var_83[var_314][20] == 0 && var_83[var_314][17] == 0 ) {
			if ( var_83[var_314][0] == 9 ) {
				func663();
				var_340 = var_3056;
				var_1249 = var_1887;
				return;
			}
			if ( var_83[var_314][0] == 10 ) {
				func663();
				var_340 = var_3056;
				var_1249 = var_1887;
				return;
			}
		}
		if ( var_83[var_314][0] == 118 && var_1218 == 0 ) {
			var_1195 = 0;
			func664();
			var_340 = var_3056;
			var_2995 = 1;
			return;
		}
		if ( var_83[var_314][0] == 156 && var_1218 == 0 && var_156[122] == 0 && var_83[var_314][12] == 0 && var_83[var_314][20] == 0 && var_83[var_314][17] == 0 && var_340 != 412 ) {
			if ( var_340 != 304 && var_340 != 397 ) {
				var_1195 = 0;
				func665();
				var_340 = var_3056;
				var_2995 = 1;
				return;
			}
		}
		if ( var_83[var_314][0] == 159 && var_1218 == 0 && var_156[122] == 0 && var_83[var_314][12] == 0 && var_83[var_314][20] == 0 && var_83[var_314][17] == 0 && var_340 != 412 ) {
			var_1195 = 0;
			func665();
			var_340 = var_3056;
			var_2995 = 1;
			return;
		}
	}
	if ( var_83[var_314][0] == 141 && var_340 == 632 ) {
		var_340 = 562;
	}
	if ( var_83[var_314][0] == 106 && var_83[var_314][31] == 5 && var_340 == 589 ) {
		var_340 = 1100;
	}
	if ( var_83[var_314][0] == 115 && var_340 == 582 ) {
		var_340 = 1101;
	}
	if ( var_83[var_314][0] == 93 ) {
		if ( var_340 == 304 || var_340 == 397 ) {
			var_340 = 1102;
		}
	}
	if ( var_83[var_314][0] == 156 ) {
		if ( var_340 == 304 || var_340 == 397 ) {
			var_340 = 1102;
		}
	}
	if ( var_83[var_314][0] == 144 && var_340 == 718 ) {
		var_340 = 1102;
	}
	if ( var_83[var_314][31] == 5 && var_340 == 401 ) {
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		var_83[var_314][8] = 1;
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_3057 = var_891;
		var_83[var_314][3] = var_83[var_314][3] + 20;
		if ( var_120 == 1 || var_174 == 1 ) {
			var_83[var_314][3] = var_83[var_314][3] + 20;
		}
		var_3058 = 0;
		if ( var_83[var_314][39] >= 2 ) {
			var_3059 = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
			if ( var_3059 >= 999 ) {
				var_3059 = 999;
			}
			if ( var_83[var_314][3] >= var_3059 ) {
				var_83[var_314][3] = var_3059;
				var_3058 = 1;
			}
		}
		if ( var_83[var_314][39] <= 1 ) {
			if ( var_83[var_314][3] >= var_438 ) {
				var_83[var_314][3] = var_438;
				var_3058 = 1;
			}
		}
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_3057 + "に";
		var_294 = "プランクトンを詰めた。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		DSPLAY(143);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_3057 + "の";
		if ( var_3058 == 0 && var_120 == 0 && var_174 == 0 ) {
			var_297 = "傷が少し癒えたようだ。";
		}
		if ( var_3058 == 0 ) {
			if ( var_120 == 1 || var_174 == 1 ) {
				var_297 = "傷がだいぶ癒えたようだ。";
			}
		}
		if ( var_3058 == 1 ) {
			var_297 = "傷は完全に回復した。";
		}
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_340 = var_3056;
		return;
	}
	if ( var_1270 == 1 && var_1852 == 2 ) {
		if ( var_215 == 112 || var_215 == 394 ) {
			var_340 = 488;
		}
	}
	if ( var_340 == 851 ) {
		var_1901 = 0;
		if ( var_83[var_314][0] == 33 || var_83[var_314][0] == 34 || var_83[var_314][0] == 143 || var_83[var_314][0] == 132 || var_83[var_314][31] == 4 || var_83[var_314][31] == 5 ) {
			var_340 = var_3056;
			return;
		}
		var_1916 = var_233[var_225][6];
		var_3060 = 1;
		var_3061 = 0;
		var_2104 = var_1838 + var_1849;
		for(var j=0; j<var_2104; j++){
			if ( var_486[var_1916][var_3060][15] == 0 ) {
				var_3061 = var_3060;
				break;
			}
			var_3060++;
		}
		if ( var_3061 == 0 ) {
			var_340 = var_3056;
			return;
		}
		var_1838 = var_1838 - 1;
		var_1849 = var_1849 + 1;
		var_486[var_1916][var_3060][15] = var_83[var_314][0];
		var_486[var_1916][var_3060][18] = var_83[var_314][39];
		var_437 = var_83[var_314][0];
		DSPLAY(130);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "を";
		if ( var_862[851][0] == 1 ) {
			var_294 = "ビンの中に閉じ込めた！";
		}
		if ( var_862[851][0] == 0 ) {
			var_294 = "ヤバイものに閉じ込めた！";
		}
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		var_82[var_455][var_456] = 0;
		var_83[var_314][0] = 0;
		var_83[var_314][1] = 0;
		var_83[var_314][2] = 0;
		if ( var_156[122] == 1 ) {
			for(var k=0; k<5; k++){
				func337();
				var_198 = 1;
				var_300 = 0;
			}
		}
		if ( var_156[122] == 0 ) {
			var_1340 = (var_455 - var_66 + 4) * 40;
			var_1341 = (var_456 - var_67 + 4) * 40;
			var_271 = 1;
			var_1339 = 1;
			for(var k=0; k<15; k++){
				func337();
				var_198 = 1;
				var_300 = 0;
				var_1339++;
			}
			var_271 = 0;
			var_1339 = 0;
		}
		var_1901 = 1;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 727 ) {
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		var_83[var_314][8] = 1;
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_3057 = var_891;
		var_83[var_314][3] = var_438;
		if ( var_83[var_314][39] >= 2 ) {
			var_3059 = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
			if ( var_3059 >= 999 ) {
				var_3059 = 999;
			}
			var_83[var_314][3] = var_3059;
		}
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_3057 + "を";
		var_294 = "ｿﾞﾝﾋﾞ馬で縫った。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_3057 + "の";
		var_297 = "傷は完全に回復した。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 712 ) {
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_83[var_314][8] = 1;
		DSPLAY(143);
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_3057 = var_891;
		var_83[var_314][3] = var_438;
		if ( var_83[var_314][39] >= 2 ) {
			var_3059 = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
			if ( var_3059 >= 999 ) {
				var_3059 = 999;
			}
			var_83[var_314][3] = var_3059;
		}
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_3057 + "は";
		var_294 = "体力が回復した。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_83[var_314][17] = 1;
		DSPLAY(134);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_3057 + "は";
		var_297 = "混乱してしまった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 405 || var_2937 == 1 || var_340 == 318 ) {
		var_1894 = 0;
		var_1895 = 0;
		var_1385 = var_82[var_455][var_456];
		var_82[var_455][var_456] = 0;
		if ( var_83[var_1385][13] != 0 ) {
			var_460 = var_1385;
			func024();
		}
		if ( var_83[var_1385][12] == 99 ) {
			var_83[var_1385][12] = 0;
		}
		if ( var_83[var_1385][0] == 33 ) {
			var_83[var_1385][0] = 34;
			var_83[var_1385][31] = 1;
		}
		var_83[var_1385][8] = 1;
		var_3062 = 0;
		var_3063 = 0;
		for(var j=0; j<10; j++){
			var_82[var_1894][var_1895] = 0;
			var_82[var_455][var_456] = var_1385;
			var_83[var_1385][1] = var_455;
			var_83[var_1385][2] = var_456;
			func337();
			var_1894 = var_455;
			var_1895 = var_456;
			if ( var_199 == 4 ) {
				var_455 = var_455 - 1;
			}
			if ( var_199 == 6 ) {
				var_455 = var_455 + 1;
			}
			if ( var_199 == 8 ) {
				var_456 = var_456 - 1;
			}
			if ( var_199 == 2 ) {
				var_456 = var_456 + 1;
			}
			if ( var_199 == 1 ) {
				var_455 = var_455 - 1;
				var_456 = var_456 + 1;
			}
			if ( var_199 == 3 ) {
				var_455 = var_455 + 1;
				var_456 = var_456 + 1;
			}
			if ( var_199 == 7 ) {
				var_455 = var_455 - 1;
				var_456 = var_456 - 1;
			}
			if ( var_199 == 9 ) {
				var_455 = var_455 + 1;
				var_456 = var_456 - 1;
			}
			if ( var_71[var_455][var_456] == 0 ) {
				var_3063 = 1;
				break;
			}
			if ( var_82[var_455][var_456] > 0 ) {
				var_3062 = 1;
				break;
			}
		}
		var_3064 = var_1894;
		var_3065 = var_1895;
		var_3066 = var_455;
		var_3067 = var_456;
		var_271 = 1;
		var_1384 = 1;
		var_1386 = var_83[var_1385][0];
		var_83[var_1385][11] = 1;
		if ( var_3062 == 1 ) {
			var_3068 = var_82[var_455][var_456];
			var_83[var_3068][8] = 1;
			if ( var_83[var_3068][13] != 0 ) {
				var_460 = var_3068;
				func024();
			}
			if ( var_83[var_3068][12] == 99 ) {
				var_83[var_3068][12] = 0;
			}
			if ( var_83[var_3068][0] == 33 ) {
				var_83[var_3068][0] = 34;
				var_83[var_3068][31] = 1;
			}
		}
		for(var j=0; j<3; j++){
			func337();
		}
		var_1894 = var_3064;
		var_1895 = var_3065;
		var_455 = var_3066;
		var_456 = var_3067;
		var_271 = 0;
		var_1384 = 0;
		var_83[var_1385][11] = 0;
		if ( var_3062 == 1 ) {
			var_82[var_1894][var_1895] = 0;
			var_2294 = var_455 - 1;
			if ( var_2294 < 0 ) {
				var_2294 = 0;
			}
			var_2295 = var_455 + 1;
			if ( var_2295 > var_33 ) {
				var_2295 = var_33;
			}
			var_2296 = var_456 + 1;
			if ( var_2296 > var_34 ) {
				var_2296 = var_34;
			}
			var_2297 = var_456 - 1;
			if ( var_2297 < 0 ) {
				var_2297 = 0;
			}
			var_2298 = 0;
			if ( var_2298 == 0 && var_71[var_2294][var_2296] != 0 && var_71[var_2294][var_2296] != 13 && var_82[var_2294][var_2296] == 0 && var_65[var_2294][var_2296] == 0 ) {
				var_1894 = var_2294;
				var_1895 = var_2296;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_2295][var_2296] != 0 && var_71[var_2295][var_2296] != 13 && var_82[var_2295][var_2296] == 0 && var_65[var_2295][var_2296] == 0 ) {
				var_1894 = var_2295;
				var_1895 = var_2296;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_2294][var_2297] != 0 && var_71[var_2294][var_2297] != 13 && var_82[var_2294][var_2297] == 0 && var_65[var_2294][var_2297] == 0 ) {
				var_1894 = var_2294;
				var_1895 = var_2297;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_2295][var_2297] != 0 && var_71[var_2295][var_2297] != 13 && var_82[var_2295][var_2297] == 0 && var_65[var_2295][var_2297] == 0 ) {
				var_1894 = var_2295;
				var_1895 = var_2297;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_2294][var_1895] != 0 && var_71[var_2294][var_1895] != 13 && var_82[var_2294][var_1895] == 0 && var_65[var_2294][var_1895] == 0 ) {
				var_1894 = var_2294;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_2295][var_1895] != 0 && var_71[var_2295][var_1895] != 13 && var_82[var_2295][var_1895] == 0 && var_65[var_2295][var_1895] == 0 ) {
				var_1894 = var_2295;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_1894][var_2296] != 0 && var_71[var_1894][var_2296] != 13 && var_82[var_1894][var_2296] == 0 && var_65[var_1894][var_2296] == 0 ) {
				var_1895 = var_2296;
				var_2298 = 1;
			}
			if ( var_2298 == 0 && var_71[var_1894][var_2297] != 0 && var_71[var_1894][var_2297] != 13 && var_82[var_1894][var_2297] == 0 && var_65[var_1894][var_2297] == 0 ) {
				var_1895 = var_2297;
				var_2298 = 1;
			}
		}
		var_82[var_1894][var_1895] = var_1385;
		var_83[var_1385][1] = var_1894;
		var_83[var_1385][2] = var_1895;
		var_83[var_1385][10] = var_71[var_1894][var_1895];
		if ( var_1385 == var_114 ) {
			if ( var_83[var_1385][1] != var_463 || var_83[var_1385][2] != var_464 ) {
				var_114 = 0;
				var_463 = 0;
				var_464 = 0;
				var_461 = 0;
				var_462 = 0;
			}
		}
		if ( var_3062 == 1 || var_3063 == 1 || var_83[var_1385][0] == 61 || var_83[var_1385][0] == 163 ) {
			var_403 = "";
			var_209 = 5;
			var_402 = var_1385;
			func705();
		}
		if ( var_3062 == 1 ) {
			var_403 = "";
			var_209 = 5;
			var_402 = var_3068;
			func705();
		}
		var_3069 = var_83[var_1385][1];
		var_3070 = var_83[var_1385][2];
		if ( var_71[var_3069][var_3070] == 0 ) {
			var_314 = var_1385;
			func669();
		}
		if ( var_71[var_3069][var_3070] == 13 ) {
			var_314 = var_1385;
			if ( var_83[var_314][0] == 44 ) {
				func670();
				if ( var_3071 == 1 ) {
					var_3071 = 0;
					var_340 = var_3056;
					return;
				}
			}
			func669();
		}
		var_83[var_1385][8] = 0;
		var_83[var_3068][8] = 0;
		func331();
		for(var j=0; j<2; j++){
			func337();
		}
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 123 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][0] == 33 || var_83[var_314][0] == 34 || var_83[var_314][0] == 143 || var_83[var_314][0] == 132 || var_83[var_314][0] == 20 ) {
			if ( var_83[var_314][12] == 99 ) {
				var_83[var_314][12] = 0;
			}
			var_83[var_314][13] = 0;
			var_402 = var_314;
			var_209 = 10;
			var_403 = "とっさにかわされて";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func705();
			var_340 = var_3056;
			return;
		}
		var_82[var_455][var_456] = 0;
		var_83[var_314][0] = 0;
		var_83[var_314][1] = 0;
		var_83[var_314][2] = 0;
		var_1196 = 1;
		DSPLAY(122);
		for(var j=0; j<9; j++){
			func337();
		}
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 408 ) {
		func662();
		var_369 = 1;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 584 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][13] != 0 ) {
			var_460 = var_314;
			func024();
		}
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		if ( var_83[var_314][25] <= 50 ) {
			var_83[var_314][25] = 50;
		}
		var_83[var_314][25] = var_83[var_314][25] + 5;
		if ( var_83[var_314][25] >= 99 ) {
			var_83[var_314][25] = 99;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(164);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "攻撃力が下がった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 588 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][13] != 0 ) {
			var_460 = var_314;
			func024();
		}
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		if ( var_83[var_314][25] >= 50 ) {
			var_83[var_314][25] -= 2;
			if ( var_83[var_314][25] < 50 ) {
				var_83[var_314][25] = 0;
			}
		}
		if ( var_83[var_314][25] < 50 ) {
			var_83[var_314][25] += 2;
			if ( var_83[var_314][25] >= 50 ) {
				var_83[var_314][25] = 49;
			}
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(182);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "攻撃力が上がった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 103 || var_340 == 115 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][13] != 0 ) {
			var_460 = var_314;
			func024();
		}
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		if ( var_83[var_314][15] == 0 ) {
			var_83[var_314][14] = 1;
		}
		if ( var_83[var_314][15] != 0 ) {
			var_83[var_314][14] = 0;
			var_83[var_314][15] = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(162);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "動きが鈍くなった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 503 || var_340 == 575 || var_340 == 107 ) {
		var_1196 = 1;
		var_83[var_314][8] = 1;
		for(var j=0; j<9; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_314 = var_82[var_455][var_456];
		var_83[var_314][13] = 0;
		var_83[var_314][12] = 6;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		DSPLAY(132);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "眠ってしまった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 412 ) {
		var_314 = var_82[var_455][var_456];
		var_2964 = var_314;
		if ( var_83[var_314][0] == 53 || var_83[var_314][0] == 23 || var_83[var_314][0] == 50 || var_83[var_314][0] == 90 || var_83[var_314][0] == 74 || var_83[var_314][0] == 75 ) {
			var_340 = var_3056;
			return;
		}
		if ( var_83[var_314][23] == 0 ) {
			var_1195 = 1;
			DSPLAY(118);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ヘブンズドアー！」";
			var_294 = "「特殊な行動ができなくなる！」";
			if ( var_83[var_2964][20] >= 1 ) {
				var_294 = "「攻撃することはできない！」";
			}
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<20; k++){
				func337();
			}
			var_1195 = 0;
			if ( var_83[var_2964][20] == 1 ) {
				var_83[var_2964][20] = 2;
			}
			if ( var_83[var_2964][20] == 0 ) {
				var_83[var_2964][20] = 1;
			}
			if ( var_83[var_314][12] == 99 ) {
				var_83[var_2964][12] = 0;
			}
			var_83[var_2964][15] = 0;
			var_83[var_2964][30] = 0;
			if ( var_83[var_2964][0] == 97 ) {
				var_83[var_2964][31] = 0;
			}
			if ( var_114 == var_2964 ) {
				var_114 = 0;
			}
			var_340 = var_3056;
			return;
		}
		if ( var_83[var_314][23] != 0 ) {
			var_1195 = 1;
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "「ヘブンズドアー！」";
			var_294 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<15; k++){
				func337();
			}
			var_1195 = 0;
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "見えてなくて効かなかった…";
			var_297 = "";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			var_340 = var_3056;
			return;
		}
		return;
	}
	if ( var_340 == 205 || var_340 == 489 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 99;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(126);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "を";
		var_294 = "その場に固定した！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 404 || var_340 == 202 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 1;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		DSPLAY(126);
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "氷漬けになった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 409 ) {
		var_314 = var_82[var_455][var_456];
		if ( var_83[var_314][0] == 90 || var_83[var_314][0] == 53 || var_83[var_314][0] == 23 ) {
			var_340 = var_3056;
			return;
		}
		if ( var_83[var_314][13] != 0 ) {
			var_460 = var_314;
			func024();
		}
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][19] = 1;
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "に";
		var_294 = "ラバーズが取り付いた！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 316 || var_340 == 574 || var_340 == 560 || var_340 == 406 ) {
		var_83[var_314][17] = 1;
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(134);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "混乱してしまった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_83[var_314][0] == 43 && var_340 == 802 ) {
		var_83[var_314][17] = 1;
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(134);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "鼓膜が破れてしまった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 563 || var_340 == 495 ) {
		var_83[var_314][23] = 1;
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		if ( var_114 == var_314 ) {
			var_114 = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(153);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "の";
		var_294 = "目は見えなくなった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 322 || var_340 == 578 ) {
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		if ( var_83[var_314][14] == 0 ) {
			var_83[var_314][15] = 1;
		}
		if ( var_83[var_314][14] != 0 ) {
			var_83[var_314][14] = 0;
			var_83[var_314][15] = 0;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		DSPLAY(154);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "の";
		var_294 = "動きが速くなった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 320 || var_340 == 817 ) {
		var_83[var_314][30] = 1;
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		var_83[var_314][8] = 1;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "透明状態になった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 1101 ) {
		var_83[var_314][8] = 1;
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][30] = 1;
		var_1584 = (var_83[var_314][1] - var_66 + 4) * 40;
		var_1585 = (var_83[var_314][2] - var_67 + 4) * 40 - 10;
		var_271 = 1;
		var_1583 = 1;
		DSPLAY(175);
		for(var j=0; j<20; j++){
			if ( j == 4 ) {
				var_83[var_314][8] = 0;
			}
			func337();
			var_1583++;
		}
		var_271 = 0;
		var_1583 = 0;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ｱｸｱ･ﾈｯｸﾚｽは";
		var_294 = "蒸発して透明になった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 562 || var_340 == 991 || var_340 == 992 || var_340 == 993 || var_340 == 995 || var_340 == 996 ) {
		if ( var_83[var_314][31] != 5 && var_83[var_314][31] != 4 ) {
			if ( var_83[var_314][12] == 99 ) {
				var_83[var_314][12] = 0;
			}
			var_83[var_314][13] = 0;
			var_83[var_314][39] = var_83[var_314][39] + 1;
			if ( var_83[var_314][39] == 1 ) {
				var_83[var_314][39] = 2;
			}
			var_437 = var_83[var_314][0];
			if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
				var_437 = var_83[var_314][31];
			}
			func626();
			var_83[var_314][3] = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
			if ( var_83[var_314][3] >= 999 ) {
				var_83[var_314][3] = 999;
			}
			var_83[var_314][8] = 1;
			DSPLAY(142);
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "" + var_891 + "は";
			var_294 = "レベルが上がった！";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<10; k++){
				func337();
			}
			var_83[var_314][8] = 0;
			var_340 = var_3056;
			return;
		}
		if ( var_83[var_314][31] == 5 && var_83[var_314][39] < 10 ) {
			if ( var_83[var_314][12] == 99 ) {
				var_83[var_314][12] = 0;
			}
			var_83[var_314][13] = 0;
			var_83[var_314][8] = 1;
			var_232 = var_340;
			var_487 = var_1833;
			func492();
			var_293 = "";
			var_294 = "";
			var_295 = "";
			var_296 = "";
			var_297 = "";
			var_298 = "";
			var_299 = 0;
			var_293 = "" + var_489 + "が命中した！";
			var_198 = 1;
			var_300 = 0;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func047();
			var_3072 = var_314;
			func682();
			var_83[var_314][16] = var_83[var_314][16] + var_3073;
			var_1912 = var_673;
			var_673 = var_314;
			func683();
			var_673 = var_1912;
			var_83[var_314][8] = 0;
			var_340 = var_3056;
			return;
		}
	}
	if ( var_340 == 586 && var_83[var_314][39] >= 2 ) {
		if ( var_83[var_314][12] == 99 ) {
			var_83[var_314][12] = 0;
		}
		var_83[var_314][13] = 0;
		var_83[var_314][39] = var_83[var_314][39] - 1;
		if ( var_83[var_314][39] <= 1 ) {
			var_83[var_314][39] = 0;
		}
		if ( var_83[var_314][31] == 5 ) {
			var_3072 = var_314;
			func682();
			var_83[var_314][16] = var_83[var_314][16] + var_3073;
			var_83[var_314][16] = var_83[var_314][16] - 1;
		}
		var_437 = var_83[var_314][0];
		if ( var_83[var_314][0] == 97 && var_83[var_314][31] >= 11 ) {
			var_437 = var_83[var_314][31];
		}
		func626();
		if ( var_83[var_314][3] >= var_438 ) {
			var_83[var_314][3] = var_438;
		}
		var_83[var_314][8] = 1;
		DSPLAY(151);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "" + var_891 + "は";
		var_294 = "レベルが下がった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 1100 ) {
		var_83[var_314][12] = 0;
		var_83[var_314][13] = 0;
		func127();
		var_83[var_314][8] = 1;
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "ﾍﾟｯｼ「プロシュート兄貴ィ！」";
		var_294 = "";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾍﾟｯｼ「兄貴の覚悟が！";
		var_297 = "　【言葉】ではなく【心】で理解できた！」";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<20; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_83[var_314][0] = 107;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 576 ) {
		var_83[var_314][12] = 0;
		var_83[var_314][13] = 0;
		var_83[var_314][24] = 10;
		var_83[var_314][8] = 1;
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "【10ターン後に破裂する！】";
		var_294 = "";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 488 ) {
		func668();
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 579 ) {
		DSPLAY(117);
		for(var j=0; j<10; j++){
			func337();
		}
		func669();
		var_340 = var_3056;
		return;
	}
	if ( var_340 == 1102 ) {
		var_83[var_314][8] = 1;
		DSPLAY(117);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		if ( var_83[var_314][0] == 93 ) {
			var_293 = "ｴﾝﾎﾟﾘｵにDISCが差し込まれた！";
		}
		if ( var_83[var_314][0] == 156 ) {
			var_293 = "ｳｪｻﾞｰにDISCが差し込まれた！";
		}
		if ( var_83[var_314][0] == 144 ) {
			var_293 = "川尻浩作に矢が刺さった！";
		}
		var_294 = "";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		for(var j=0; j<10; j++){
			func337();
		}
		var_83[var_314][8] = 0;
		if ( var_83[var_314][0] == 93 ) {
			var_83[var_314][0] = 98;
		}
		if ( var_83[var_314][0] == 156 ) {
			var_83[var_314][0] = 159;
		}
		if ( var_83[var_314][0] == 144 ) {
			var_83[var_314][0] = 137;
		}
		return;
	}
	func661();
	var_673 = var_314;
	var_403 = "";
	var_402 = var_314;
	if ( var_340 == 401 ) {
		if ( var_120 == 1 || var_174 == 1 ) {
			var_403 = "F・Fのパワーは全開だ！";
		}
	}
	if ( var_340 == 414 && var_168 == 1 ) {
		var_403 = "爪の回転がアップしている！";
	}
	if ( var_340 == 411 ) {
		if ( var_2992 == 0 ) {
			var_403 = "";
		}
		if ( var_2992 == 1 ) {
			var_403 = "";
		}
		if ( var_2992 == 2 ) {
			var_403 = "「ビンゴォ！」";
		}
		if ( var_2992 == 3 ) {
			var_403 = "";
		}
		if ( var_2992 == 4 ) {
			var_403 = "「舌を引きちぎった！」";
		}
		if ( var_2992 == 5 ) {
			var_403 = "";
		}
		if ( var_2992 == 6 ) {
			var_403 = "「マサクゥル！（みな殺し！）」";
		}
		if ( var_2992 == 7 ) {
			var_403 = "";
		}
		if ( var_2992 == 8 ) {
			var_403 = "「ビンゴにゃあ のろすぎるゥゥゥゥゥ」";
		}
		if ( var_2992 >= 9 ) {
			var_403 = "";
		}
	}
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func705();
	var_83[var_314][8] = 0;
	if ( var_83[var_314][0] == 33 ) {
		var_83[var_314][0] = 34;
		var_83[var_314][31] = 1;
	}
	var_340 = var_3056;
	return;
}
function func661(){
	var_3074 = rnd(3);
	var_209 = var_3074 + 1;
	var_3075 = 0;
	if ( var_340 >= 400 && var_340 < 420 ) {
		var_3075 = 1;
	}
	if ( var_340 == 490 ) {
		var_3075 = 1;
	}
	if ( var_340 == 698 ) {
		var_3075 = 1;
	}
	if ( var_3075 == 1 ) {
		var_3076 = 0;
		if ( var_340 == 400 ) {
			var_3076 = 10;
		}
		if ( var_340 == 401 ) {
			var_3076 = 2;
		}
		if ( var_340 == 402 ) {
			var_3076 = 8;
		}
		if ( var_340 == 403 ) {
			var_3076 = 6;
		}
		if ( var_340 == 407 ) {
			var_3076 = 15;
		}
		if ( var_340 == 411 ) {
			var_3076 = 5;
		}
		if ( var_340 == 414 ) {
			var_3076 = 12;
		}
		if ( var_340 == 490 ) {
			var_3076 = 8;
		}
		if ( var_340 == 698 ) {
			var_3076 = 2;
		}
		if ( var_156[306] == 1 ) {
			func428();
			var_3076 = var_3076 + var_233[var_555][4];
		}
		if ( var_83[var_314][39] >= 2 ) {
			if ( var_83[var_314][31] == 4 || var_83[var_314][31] == 5 ) {
				var_968 = Math.floor(var_968 * (var_83[var_314][39] * 2 + 10) / 10);
			}
		}
		func679();
		var_949 = Math.floor(var_950 * (var_3076 + var_565 - 8) / 16) + var_950;
		var_951 = var_949;
		for(var j=0; j<var_968; j++){
			var_949 = Math.floor(var_949 * 15 / 16);
		}
		if ( var_949 == 0 ) {
			var_949 = 1;
		}
		var_2817 = rnd(33);
		var_2817 = var_2817 + 111;
		var_209 = Math.floor(var_949 * var_2817 / 128);
	}
	if ( var_340 == 1 ) {
		var_209 = var_1888;
	}
	if ( var_340 == 699 ) {
		var_209 = 40;
	}
	if ( var_340 == 654 ) {
		var_209 = 80;
	}
	if ( var_340 == 726 ) {
		var_209 = 80;
	}
	if ( var_340 == 487 ) {
		var_209 = 40;
	}
	if ( var_340 == 401 ) {
		if ( var_120 == 1 || var_174 == 1 ) {
			var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
		}
	}
	if ( var_340 == 414 && var_168 == 1 ) {
		var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
	}
	if ( var_138 == 1 ) {
		var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
	}
	if ( var_270 == 101 || var_270 == 109 ) {
		var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
	}
	if ( var_83[var_314][13] >= 1 && var_83[var_314][13] != 99 ) {
		var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
	}
	if ( var_83[var_314][0] == 73 && var_83[var_314][13] >= 1 && var_83[var_314][13] != 99 ) {
		var_209 = 999;
	}
	if ( var_83[var_314][0] == 141 && var_340 == 582 ) {
		var_209 = 999;
	}
	if ( var_83[var_314][0] == 44 && var_340 == 802 ) {
		var_209 = 999;
	}
	if ( var_340 == 994 ) {
		var_209 = 999;
	}
	if ( var_209 < 1 ) {
		var_209 = 1;
	}
	if ( var_209 >= 65525 ) {
		var_209 = 65525;
	}
	return;
}
function func662(){
	if(!func){
		throw "";
	}
	var_1162 = 1;
	var_271 = 1;
	var_1238 = 1;
	var_1971 = var_199;
	for(var i=0; i<5; i++){
		func337();
	}
	for(var i=0; i<60; i++){
		func337();
		var_1238 = var_1238 + 1;
		if ( var_1238 == 10 ) {
			DSPLAY(218);
		}
		if ( var_1238 == 23 ) {
			DSPLAY(103);
		}
		if ( var_1238 == 34 ) {
			DSPLAY(218);
		}
		if ( var_1238 == 22 ) {
			var_83[var_314][8] = 1;
			var_199 = 8;
		}
		if ( var_1238 == 35 ) {
			var_83[var_314][11] = 1;
		}
	}
	var_65[var_66][var_67] = 0;
	var_65[var_455][var_456] = 1;
	var_314 = var_82[var_455][var_456];
	var_83[var_314][1] = var_66;
	var_83[var_314][2] = var_67;
	var_83[var_314][10] = var_71[var_66][var_67];
	var_82[var_455][var_456] = 0;
	var_82[var_66][var_67] = var_314;
	var_66 = var_455;
	var_67 = var_456;
	var_279 = var_201;
	var_201 = var_71[var_66][var_67];
	var_74[var_66][var_67] = 1;
	var_74[var_289][var_67] = 1;
	var_74[var_290][var_67] = 1;
	var_74[var_66][var_291] = 1;
	var_74[var_66][var_292] = 1;
	var_74[var_289][var_291] = 1;
	var_74[var_289][var_292] = 1;
	var_74[var_290][var_291] = 1;
	var_74[var_290][var_292] = 1;
	var_75[var_201] = 1;
	if ( var_314 == var_114 ) {
		var_114 = 0;
	}
	for(var i=0; i<5; i++){
		func337();
	}
	var_83[var_314][11] = 0;
	for(var i=0; i<20; i++){
		func337();
		var_1238 = var_1238 + 1;
		if ( var_1238 == 65 ) {
			DSPLAY(107);
		}
		if ( var_1238 == 76 ) {
			DSPLAY(218);
		}
		if ( var_1238 == 75 ) {
			var_83[var_314][8] = 0;
			var_199 = 2;
		}
	}
	var_271 = 0;
	var_1238 = 0;
	var_1162 = 0;
	var_199 = var_1971;
	var_3069 = var_83[var_314][1];
	var_3070 = var_83[var_314][2];
	if ( var_71[var_3069][var_3070] == 0 || var_71[var_3069][var_3070] == 13 ) {
		if ( var_71[var_3069][var_3070] == 13 && var_83[var_314][0] == 44 ) {
			func670();
			if ( var_3071 == 1 ) {
				var_3071 = 0;
				return;
			}
		}
		func669();
	}
	return;
}
function func663(){
	if ( var_83[var_314][12] == 99 ) {
		var_83[var_314][12] = 0;
	}
	var_83[var_314][13] = 0;
	var_232 = var_340;
	var_487 = var_1833;
	func492();
	var_83[var_314][21] = 1;
	var_772 = 1;
	var_1288 = 1;
	var_1289 = var_340;
	if ( var_1270 == 0 ) {
		var_489 = "弾丸";
	}
	DSPLAY(123);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_83[var_314][0] == 9 ) {
		var_293 = "「" + var_489 + "喰って";
		var_294 = "　パワーアップッ！」";
	}
	if ( var_83[var_314][0] == 10 ) {
		var_293 = "" + var_489 + "を";
		var_294 = "吸収している！！";
	}
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_411 = 1;
	for(var i=0; i<16; i++){
		for(var j=0; j<2; j++){
			func337();
		}
		var_411 = var_411 + 1;
		if ( var_411 == 4 ) {
			var_411 = 1;
		}
		var_300 = 0;
	}
	var_772 = 0;
	var_1288 = 0;
	var_411 = 0;
	var_83[var_314][21] = 0;
	DSPLAY(142);
	var_293 = var_296;
	var_294 = var_297;
	if ( var_83[var_314][0] == 9 ) {
		var_296 = "ﾗﾊﾞｰｿｳﾙはレベルが上がった！";
		var_297 = "";
	}
	if ( var_83[var_314][0] == 10 ) {
		var_296 = "ﾉﾄｰﾘｱｽBIGはレベルが上がった！";
		var_297 = "";
	}
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	var_83[var_314][39] = var_83[var_314][39] + 1;
	if ( var_83[var_314][39] == 1 ) {
		var_83[var_314][39] = 2;
	}
	var_437 = var_83[var_314][0];
	func626();
	var_83[var_314][3] = Math.floor(var_438 * (var_83[var_314][39] + 10) / 10);
	if ( var_83[var_314][3] >= 999 ) {
		var_83[var_314][3] = 999;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func664(){
	if ( var_83[var_314][12] == 99 ) {
		var_83[var_314][12] = 0;
	}
	var_83[var_314][13] = 0;
	DSPLAY(122);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "暗黒空間に消えた";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_748 = var_83[var_314][1] - var_66 + 4;
	var_749 = var_83[var_314][2] - var_67 + 4;
	var_271 = 1;
	var_1356 = 1;
	for(var i=0; i<10; i++){
		func337();
		var_1356++;
	}
	var_271 = 0;
	var_1356 = 0;
	return;
}
function func665(){
	if ( var_83[var_314][12] == 99 ) {
		var_83[var_314][12] = 0;
	}
	var_83[var_314][13] = 0;
	DSPLAY(175);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ウェザーに届く寸前で燃え尽きた。";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_1584 = (var_83[var_314][1] - var_66 + 4) * 40;
	var_1585 = (var_83[var_314][2] - var_67 + 4) * 40 - 10;
	var_1583 = 1;
	var_271 = 1;
	for(var i=0; i<16; i++){
		func337();
		var_1583++;
	}
	var_1583 = 0;
	var_271 = 0;
	return;
}
function func666(){
	DSPLAY(126);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ジェントリー・ウィープス！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_311 = 255;
	var_312 = 1;
	func337();
	var_312 = 0;
	var_1415 = 1;
	var_271 = 1;
	for(var i=0; i<30; i++){
		func337();
		var_1415 = var_1415 + 1;
	}
	var_1415 = 0;
	var_1423 = 1;
	DSPLAY(215);
	for(var i=0; i<20; i++){
		func337();
		var_1423 = var_1423 + 1;
	}
	var_1423 = 0;
	var_1270 = 0;
	var_340 = 0;
	var_1424 = 0;
	for(var i=0; i<8; i++){
		func337();
		var_1424 = var_1424 + 20;
	}
	var_1424 = 0;
	var_271 = 0;
	var_437 = var_83[var_314][0];
	func626();
	if ( var_83[var_314][39] >= 2 ) {
		var_967 = Math.floor(var_967 * (var_83[var_314][39] * 2 + 10) / 10);
	}
	if ( var_83[var_314][25] >= 1 && var_83[var_314][25] <= 50 ) {
		var_967 = var_967 + var_83[var_314][25];
	}
	if ( var_83[var_314][25] >= 51 && var_83[var_314][25] < 99 ) {
		var_967 = var_967 - (var_83[var_314][25] - 50);
		if ( var_967 <= 1 ) {
			var_967 = 1;
		}
	}
	var_949 = Math.floor(var_967 * (var_967 + var_967 - 8) / 16) + var_967;
	for(var i=0; i<var_581; i++){
		var_949 = Math.floor(var_949 * 15 / 16);
	}
	var_2817 = rnd(33);
	var_2817 = var_2817 + 111;
	var_209 = Math.floor(var_949 * var_2817 / 128);
	if ( var_209 <= 1 ) {
		var_209 = 1;
	}
	var_209 = Math.floor(var_209 / 2);
	if ( var_209 <= 1 ) {
		var_209 = 1;
	}
	DSPLAY(105);
	var_747 = 1;
	var_389 = 2;
	var_211 = var_211 - var_209;
	var_208 = var_208 + var_2455;
	if ( var_211 <= 0 ) {
		var_211 = 0;
		var_356 = 223;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "氷の塊を喰らった！";
	var_294 = "" + var_209 + "のダメージ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	var_389 = 0;
	var_747 = 0;
	return;
}
function func667(){
	if(!func){
		throw "";
	}
	for(var i=0; i<2; i++){
		func337();
	}
	var_1195 = 0;
	var_1914 = var_1894;
	var_1915 = var_1895;
	var_1845 = 3;
	var_2109 = 1;
	func556();
	var_1845 = 0;
	var_2109 = 0;
	var_748 = var_1914 - var_66 + 4;
	var_749 = var_1915 - var_67 + 4;
	if ( var_2110 == 1 ) {
		var_439 = var_673;
		var_83[var_439][11] = 1;
		var_83[var_439][5] = 2;
		var_271 = 1;
		var_444 = 1;
		for(var j=0; j<25; j++){
			func337();
			var_444 = var_444 + 1;
		}
		var_271 = 0;
		var_444 = 0;
		var_83[var_439][11] = 0;
	}
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func668(){
	var_1389 = var_455;
	var_1390 = var_456;
	var_1993 = var_1389 - 1;
	if ( var_1993 < 0 ) {
		var_1993 = 0;
	}
	var_1994 = var_1389 + 1;
	var_1995 = var_1390 + 1;
	var_1996 = var_1390 - 1;
	if ( var_1996 < 0 ) {
		var_1996 = 0;
	}
	if ( var_71[var_1389][var_1390] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1993][var_1390] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1994][var_1390] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1389][var_1995] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1389][var_1996] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1993][var_1995] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1994][var_1995] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1993][var_1996] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1994][var_1996] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1996;
		func622();
	}
	if ( var_77[var_1389][var_1390] > 0 ) {
		var_77[var_1389][var_1390] = 0;
		var_2189 = var_77[var_1389][var_1390];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1993][var_1390] > 0 ) {
		var_77[var_1993][var_1390] = 0;
		var_2189 = var_77[var_2190][var_1390];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1994][var_1390] > 0 ) {
		var_77[var_1994][var_1390] = 0;
		var_2189 = var_77[var_2191][var_1390];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1389][var_1995] > 0 ) {
		var_77[var_1389][var_1995] = 0;
		var_2189 = var_77[var_1389][var_2192];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1389][var_1996] > 0 ) {
		var_77[var_1389][var_1996] = 0;
		var_2189 = var_77[var_1389][var_2193];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1993][var_1995] > 0 ) {
		var_77[var_1993][var_1995] = 0;
		var_2189 = var_77[var_2190][var_2192];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1994][var_1995] > 0 ) {
		var_77[var_1994][var_1995] = 0;
		var_2189 = var_77[var_2191][var_2192];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1993][var_1996] > 0 ) {
		var_77[var_1993][var_1996] = 0;
		var_2189 = var_77[var_2190][var_2193];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	if ( var_77[var_1994][var_1996] > 0 ) {
		var_77[var_1994][var_1996] = 0;
		var_2189 = var_77[var_2191][var_2193];
		var_78[var_2189][0] = 0;
		var_78[var_2189][1] = 0;
		var_78[var_2189][2] = 0;
	}
	DSPLAY(180);
	var_271 = 1;
	var_1388 = 1;
	for(var i=0; i<3; i++){
		var_585 = 3;
		func337();
		var_585 = 0;
		func337();
		var_1388++;
	}
	for(var i=0; i<14; i++){
		func337();
		var_1388++;
	}
	var_271 = 0;
	var_1388 = 0;
	var_403 = "";
	var_2194 = 1;
	var_2195 = 1;
	var_2196 = 2;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		var_209 = 0;
		var_2194 = var_2194 + 1;
	}
	var_2196 = 0;
	var_2195 = 0;
	if ( var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1 ) {
		var_389 = 2;
		if ( var_211 == 1 ) {
			var_211 = 0;
			var_356 = 248;
			for(var k=0; k<9; k++){
				func337();
			}
			var_389 = 0;
			return;
		}
		if ( var_211 > 1 ) {
			var_2198 = Math.floor(var_211 / 2);
			if ( var_156[314] == 1 ) {
				var_2198 = Math.floor(var_2198 / 2);
			}
			var_211 = var_211 - var_2198;
			if ( var_211 <= 0 ) {
				var_211 = 1;
			}
			var_208 = var_2198 + var_208;
		}
		for(var j=0; j<9; j++){
			func337();
		}
		var_389 = 0;
	}
	var_2199 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2199][0] == 17 && var_83[var_2199][29] == 1 ) {
			func699();
			var_2199 = 1;
			i = 0;		// continue
			continue;
		}
		var_2199++;
	}
	return;
}
function func669(){
	if ( var_83[var_314][0] == 0 || var_83[var_314][3] == 0 ) {
		return;
	}
	if ( var_83[var_314][12] == 99 ) {
		var_83[var_314][12] = 0;
	}
	var_83[var_314][13] = 0;
	var_2672 = var_83[var_314][1];
	var_2673 = var_83[var_314][2];
	if ( var_314 == var_114 ) {
		var_114 = 0;
	}
	var_83[var_314][11] = 1;
	var_1351 = var_314;
	var_1352 = var_83[var_314][0];
	var_271 = 1;
	var_1350 = 1;
	for(var i=0; i<10; i++){
		func337();
		if ( var_1350 == 2 ) {
			DSPLAY(216);
		}
		var_1350 = var_1350 + 1;
	}
	var_271 = 0;
	var_1350 = 0;
	var_1349 = 0;
	for(var i=0; i<500; i++){
		var_2350 = rnd(var_33);
		var_2351 = rnd(var_34);
		if ( var_71[var_2350][var_2351] != 0 && var_65[var_2350][var_2351] == 0 && var_82[var_2350][var_2351] == 0 && var_71[var_2350][var_2351] != 13 ) {
			var_1349 = 1;
			break;
		}
	}
	if ( var_1349 == 0 ) {
		var_2350 = var_2672;
		var_2351 = var_2673;
	}
	if ( var_1349 == 1 ) {
		var_83[var_314][1] = var_2350;
		var_83[var_314][2] = var_2351;
		var_83[var_314][10] = var_71[var_2350][var_2351];
		var_82[var_2350][var_2351] = var_82[var_2672][var_2673];
		var_82[var_2672][var_2673] = 0;
		var_83[var_314][9] = 0;
		var_83[var_314][18] = 0;
	}
	var_83[var_314][11] = 0;
	for(var i=0; i<5; i++){
		func337();
	}
	return;
}
function func670(){
	var_3071 = 0;
	var_83[var_314][8] = 1;
	DSPLAY(120);
	var_271 = 1;
	var_1387 = 1;
	for(var i=0; i<10; i++){
		func337();
		var_1387 = var_1387 + 1;
	}
	var_271 = 0;
	var_1387 = 0;
	var_83[var_314][8] = 0;
	var_3077 = var_83[var_314][1];
	var_3078 = var_83[var_314][2];
	var_82[var_3077][var_3078] = 0;
	var_83[var_314][0] = 0;
	var_83[var_314][1] = 0;
	var_83[var_314][2] = 0;
	func331();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾁﾘﾍﾟｯﾊﾟｰは海水に散って消えた…";
	var_294 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_3071 = 1;
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func671(){
	if ( var_340 == 123 ) {
		if ( var_1217 == 0 || var_1217 == 2 || var_1217 == 4 || var_1217 == 6 || var_1217 == 8 ) {
			pos(var_748 * var_35 + 5, var_749 * var_36 - 10);
		}
		if ( var_1217 == 1 || var_1217 == 3 || var_1217 == 5 || var_1217 == 7 || var_1217 == 9 ) {
			pos(var_748 * var_35, var_749 * var_36 - 10);
		}
		if ( var_1217 >= 0 && var_1217 < 7 ) {
			gmode(2);
		}
		if ( var_1217 == 7 ) {
			color(0, 0, 0);
			gmode(4, null, null, 180);
		}
		if ( var_1217 == 8 ) {
			color(0, 0, 0);
			gmode(4, null, null, 100);
		}
		if ( var_1217 == 9 ) {
			color(0, 0, 0);
			gmode(4, null, null, 50);
		}
		gcopy(11, 960, 240, 40, 40);
	}
	return;
}
function func672(){
	if ( var_156[395] == 1 && var_1061 == 0 ) {
		return func675();
	}
	func110();
	if ( var_375 == 0 ) {
		var_998 = var_998 + 1;
	}
	if ( var_407 == 2 ) {
		var_3079++;
		func929();
	}
	for(var i=0; i<10; i++){
		func337();
	}
	if ( var_1061 == 0 ) {
		var_374 = 1;
		func337();
		var_374 = 0;
		var_389 = 1;
		func337();
		var_374 = 1;
		func337();
		var_374 = 0;
		var_389 = 1;
		func337();
		var_374 = 1;
		func337();
		var_374 = 0;
		var_389 = 1;
		func337();
		var_374 = 1;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_1061 == 0 ) {
		var_293 = "ﾃﾞｨｱﾎﾞﾛ　再起不能";
		var_25_1 = var_25[3];
		var_26_1 = var_26[3];
		var_27_1 = var_27[3];
	}
	if ( var_1061 == 3 ) {
		if ( var_144 == 0 ) {
			var_293 = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
		}
		if ( var_144 != 0 ) {
			var_293 = "さびしいよォォォォ……ボス";
			var_294 = "電話ください………";
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
		}
	}
	var_198 = 1;
	var_300 = 0;
	func047();
	for(var i=0; i<40; i++){
		func337();
	}
	var_1200 = 1;
	var_2400 = 345;
	if ( var_62 == 1 && var_91 == 12 && var_386 == 1 ) {
		if ( var_201 == 4 || var_201 == 5 || var_201 == 6 ) {
			var_356 = 200;
		}
	}
	if ( var_151 >= 1 ) {
		if ( var_356 == 113 ) {
			var_356 = 259;
		}
		if ( var_356 == 114 ) {
			var_356 = 284;
		}
	}
	if ( var_1061 == 3 && var_144 != 0 ) {
		var_356 = 279;
	}
	func673()	// 追加;
}
function func673(){
	func337();
	func080();
	if ( var_242 == 1 || var_244 == 1 ) {
		var_1200 = 0;
		func051();
		var_1061 = 0;
		var_1601 = 0;
		var_271 = 0;
		var_3080 = 1;
		if ( var_375 == 0 ) {
			func227();
		}
		var_3080 = 0;
		if ( var_404 == 0 && var_1041 == 0 ) {
			var_1041 = 1;
			var_207 = 5;
		}
		if ( var_62 == 0 ) {
			func182();
			func233();
			var_755 = 0;
			var_205 = 1;
			var_1049 = 1;
			func231();
			var_1049 = 0;
			return func159();
		}
		if ( var_375 == 0 ) {
			var_755 = 0;
			return func173();
		}
		if ( var_375 == 1 ) {
			func233();
			var_539 = 0;
			return func880();
		}
	}
	if ( var_2400 > 40 ) {
		var_2400 = var_2400 - 40;
	}
	return func673();
}
function func674(){
	gmode(2);
	pos(var_2400, 290);
	gcopy(8, 40, 0, 230, 40);
	return;
}
function func675(){
	var_232 = var_215;
	var_3081 = var_215;
	func428();
	var_487 = var_233[var_555][13];
	func492();
	var_3082 = var_489;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "アナザーワン・バイツァ・ダスト！！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	DSPLAY(180);
	var_1389 = var_66;
	var_1390 = var_67;
	var_271 = 1;
	var_1388 = 1;
	for(var i=0; i<3; i++){
		var_585 = 3;
		func337();
		var_585 = 0;
		func337();
		var_1388++;
	}
	for(var i=0; i<24; i++){
		func337();
		var_198 = 1;
		var_300 = 0;
		var_1388++;
	}
	var_271 = 0;
	var_1388 = 0;
	var_3083 = 1;
	var_403 = "アナザーワン・バイツァ・ダスト！！";
	var_2217 = 1;
	var_2194 = 1;
	var_2196 = 2;
	var_2195 = 1;
	for(var i=0; i<var_97; i++){
		var_2218 = 999;
		var_2219 = 0;
		if ( var_2194 != var_124 && var_83[var_2194][0] != 132 && var_83[var_2194][0] != 143 && var_83[var_2194][0] != 34 && var_83[var_2194][31] != 4 && var_83[var_2194][31] != 5 ) {
			if ( var_83[var_2194][0] != 0 && var_83[var_2194][10] == var_201 && var_201 > 0 && var_201 <= 12 ) {
				func700();
			}
			if ( var_2220 == 0 ) {
				var_1993 = var_66 - 1;
				if ( var_1993 < 0 ) {
					var_1993 = 0;
				}
				var_1994 = var_66 + 1;
				if ( var_1994 > var_33 ) {
					var_1994 = var_33;
				}
				var_1995 = var_67 + 1;
				if ( var_1995 > var_34 ) {
					var_1995 = var_34;
				}
				var_1996 = var_67 - 1;
				if ( var_1996 < 0 ) {
					var_1996 = 0;
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1995 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1996 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_67 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_67 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
					func700();
				}
			}
			if ( var_2220 == 0 && var_201 <= 12 && var_201 != 0 ) {
				var_2221 = var_83[var_2194][1];
				var_2222 = var_83[var_2194][2];
				var_2223 = var_83[var_2194][1] - 1;
				if ( var_2223 < 0 ) {
					var_2223 = 0;
				}
				var_2224 = var_83[var_2194][1] + 1;
				if ( var_2224 > var_33 ) {
					var_2224 = var_33;
				}
				var_2225 = var_83[var_2194][2] + 1;
				if ( var_2225 > var_34 ) {
					var_2225 = var_34;
				}
				var_2226 = var_83[var_2194][2] - 1;
				if ( var_2226 < 0 ) {
					var_2226 = 0;
				}
				if ( var_83[var_2194][0] != 0 && var_71[var_2223][var_2222] == var_201 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_71[var_2224][var_2222] == var_201 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_71[var_2221][var_2225] == var_201 ) {
					func700();
				}
				if ( var_83[var_2194][0] != 0 && var_71[var_2221][var_2226] == var_201 ) {
					func700();
				}
			}
		}
		var_2194 = var_2194 + 1;
	}
	var_2196 = 0;
	var_2195 = 0;
	var_2217 = 0;
	var_3083 = 0;
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_211 = var_352;
	var_565 = var_566;
	var_133 = 0;
	var_140 = 0;
	var_110 = 0;
	var_109 = 0;
	var_134 = 0;
	var_126 = 0;
	var_132 = 0;
	var_127 = 0;
	var_133 = 0;
	var_135 = 0;
	var_136 = 0;
	var_114 = 0;
	var_463 = 0;
	var_464 = 0;
	var_461 = 0;
	var_462 = 0;
	var_151 = 0;
	var_152 = 0;
	var_389 = 0;
	var_586 = 0;
	var_271 = 0;
	var_585 = 0;
	var_112 = var_112 - 151;
	var_311 = 255;
	DSPLAY(161);
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
	}
	var_312 = 0;
	var_212 = 0;
	func428();
	var_225 = var_555;
	var_898 = 0;
	var_232 = var_3081;
	func430();
	func433();
	var_2392 = 1;
	for(var i=0; i<var_97; i++){
		var_83[var_2392][6] = 0;
		var_83[var_2392][9] = 0;
		var_83[var_2392][18] = 0;
		var_2392 = var_2392 + 1;
	}
	func112();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "死の直前まで時間が戻った！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_198 = 1;
	var_300 = 0;
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "" + var_3082 + "は";
	var_297 = "ｴﾈﾙｷﾞｰを使い果たして消滅した。";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	for(var i=0; i<30; i++){
		func337();
	}
	var_217 = 0;
	return func009();
}
function func676(){
	var_445 = 1;
	func405();
	var_445 = 0;
	if ( var_446 == 0 ) {
		return;
	}
	var_447 = var_448;
	var_449 = var_450;
	var_314 = var_82[var_347][var_348];
	var_437 = var_83[var_314][0];
	func626();
	if ( var_83[var_314][26] >= 1 ) {
		if ( var_83[var_314][0] == 144 ) {
			func678();
			return;
		}
		if ( var_83[var_314][0] == 116 ) {
			func678();
			return;
		}
		func677();
		return;
	}
	if ( var_156[305] == 1 ) {
		var_1654 = Math.floor(var_1654 / 2);
		if ( var_1654 <= 1 ) {
			var_1654 = 1;
		}
	}
	if ( var_62 == 99 ) {
		var_1654 = 99999;
	}
	var_3084 = rnd(var_1654);
	if ( var_83[var_314][0] == 120 && var_94 == 99 ) {
		var_3084 = 0;
	}
	if ( var_83[var_314][0] == 32 && var_94 == 3 ) {
		var_3084 = 0;
	}
	if ( var_83[var_314][0] == 44 && var_94 == 2 ) {
		var_3084 = 0;
	}
	if ( var_83[var_314][0] == 65 && var_94 == 1 ) {
		var_3084 = 0;
	}
	if ( var_83[var_673][0] == 113 || var_83[var_673][0] == 114 ) {
		if ( var_83[var_402][0] == 37 ) {
			var_3084 = 0;
		}
	}
	if ( var_62 == 5 && var_83[var_314][16] >= 1000 ) {
		var_1765 = 1;
	}
	if ( var_3084 == 0 || var_2262 == 1 || var_2263 >= 1 || var_1761 >= 1 || var_3085 >= 1 || var_1765 == 1 ) {
		var_451 = 1;
		var_452 = 1;
		var_453 = 1;
		if ( var_2262 == 1 ) {
			var_1763 = 1;
		}
		if ( var_2263 >= 1 ) {
			var_1762 = var_2263;
		}
		if ( var_83[var_314][0] == 1 ) {
			var_1752 = 1;
		}
		if ( var_83[var_314][0] == 163 ) {
			var_1754 = 1;
		}
		if ( var_83[var_314][0] == 31 || var_83[var_314][0] == 44 ) {
			var_1737 = 1;
		}
		if ( var_83[var_314][0] == 18 ) {
			var_1073 = rnd(2);
			if ( var_1073 == 0 ) {
				var_1753 = 1;
			}
			if ( var_1073 == 1 ) {
				var_1737 = 1;
			}
		}
		if ( var_83[var_314][0] == 83 ) {
			var_1073 = rnd(2);
			if ( var_1073 == 0 ) {
				var_1743 = 1;
			}
			if ( var_1073 == 1 ) {
				var_1740 = 1;
				var_1778 = 1;
			}
		}
		if ( var_83[var_314][0] == 49 ) {
			var_454 = 1;
		}
		if ( var_83[var_314][0] == 20 ) {
			var_1737 = 1;
		}
		if ( var_83[var_314][0] == 143 ) {
			var_1750 = 1;
		}
		if ( var_83[var_314][0] == 132 ) {
			var_1746 = 1;
		}
		if ( var_83[var_314][0] == 120 || var_83[var_314][0] == 128 ) {
			var_1742 = 1;
		}
		if ( var_83[var_314][0] == 144 ) {
			var_1745 = 1;
		}
		if ( var_83[var_314][0] == 19 ) {
			var_1739 = 1;
		}
		if ( var_83[var_314][0] == 96 ) {
			var_1744 = 1;
		}
		if ( var_83[var_673][0] == 113 || var_83[var_673][0] == 114 ) {
			if ( var_83[var_402][0] == 37 ) {
				var_1073 = rnd(3);
				if ( var_1073 == 0 ) {
					var_1760 = 1;
				}
				if ( var_1073 == 1 ) {
					var_1760 = 2;
				}
				if ( var_1073 == 2 ) {
					var_1760 = 3;
				}
			}
		}
		if ( var_83[var_314][0] == 97 ) {
			var_1747 = 1;
		}
		if ( var_83[var_314][0] == 58 ) {
			var_1749 = 1;
		}
		if ( var_83[var_314][0] == 117 ) {
			var_1754 = 1;
		}
		if ( var_83[var_314][0] == 39 ) {
			var_1755 = 1;
		}
		if ( var_83[var_314][0] == 168 ) {
			var_1757 = 1;
		}
		if ( var_83[var_314][0] == 32 && var_94 == 3 ) {
			var_1737 = 1;
		}
		if ( var_83[var_314][0] == 44 && var_94 == 2 ) {
			var_1737 = 1;
		}
		if ( var_83[var_314][0] == 65 && var_94 == 1 ) {
			var_1737 = 1;
		}
		if ( var_83[var_314][0] == 32 && var_94 == 0 ) {
			var_1073 = rnd(2);
			if ( var_1073 == 0 ) {
				var_1758 = 1;
			}
		}
		func384();
		var_1765 = 0;
		var_1763 = 0;
		var_1752 = 0;
		var_1737 = 0;
		var_1753 = 0;
		var_1743 = 0;
		var_454 = 0;
		var_1739 = 0;
		var_1738 = 0;
		var_1741 = 0;
		var_1746 = 0;
		var_1742 = 0;
		var_1745 = 0;
		var_1744 = 0;
		var_1760 = 0;
		var_1747 = 0;
		var_1749 = 0;
		var_1750 = 0;
		var_1754 = 0;
		var_1778 = 0;
		var_1740 = 0;
		var_1755 = 0;
		var_1757 = 0;
		var_1762 = 0;
		var_2263 = 0;
		var_1761 = 0;
		var_3085 = 0;
		var_1758 = 0;
		var_451 = 0;
		var_452 = 0;
		var_453 = 0;
	}
	return;
}
function func677(){
	if ( var_336 >= 200 ) {
		return;
	}
	func724();
	var_866 = var_854;
	var_1550 = var_447;
	var_230 = var_449;
	var_77[var_1550][var_230] = var_866;
	var_3086 = var_314 + 200;
	var_78[var_866][0] = var_78[var_3086][0];
	var_78[var_866][1] = var_1550;
	var_78[var_866][2] = var_230;
	var_78[var_866][3] = var_78[var_3086][3];
	var_78[var_866][4] = var_78[var_3086][4];
	var_78[var_866][5] = var_78[var_3086][5];
	var_78[var_866][6] = var_78[var_3086][6];
	var_78[var_866][7] = var_78[var_3086][7];
	var_78[var_866][8] = var_78[var_3086][8];
	var_78[var_866][9] = var_71[var_1550][var_230];
	var_78[var_866][10] = 1;
	var_78[var_866][11] = var_78[var_3086][11];
	var_78[var_866][12] = var_78[var_3086][12];
	var_78[var_866][13] = var_78[var_3086][13];
	var_78[var_866][14] = var_78[var_3086][14];
	var_78[var_866][15] = var_78[var_3086][15];
	var_78[var_866][16] = var_78[var_3086][16];
	var_78[var_866][17] = var_78[var_3086][17];
	var_78[var_866][18] = var_78[var_3086][18];
	var_78[var_866][19] = var_78[var_3086][19];
	var_78[var_866][20] = var_78[var_3086][20];
	var_78[var_866][21] = var_78[var_3086][21];
	var_78[var_866][22] = var_78[var_3086][22];
	var_78[var_866][23] = var_78[var_3086][23];
	var_78[var_866][24] = var_78[var_3086][24];
	var_78[var_866][25] = var_78[var_3086][25];
	var_78[var_866][26] = var_78[var_3086][26];
	var_78[var_866][27] = var_78[var_3086][27];
	var_78[var_866][28] = var_78[var_3086][28];
	var_78[var_866][29] = var_78[var_3086][29];
	return;
}
function func678(){
	if ( var_336 >= 200 ) {
		return;
	}
	func724();
	var_866 = var_854;
	var_1550 = var_447;
	var_230 = var_449;
	var_77[var_1550][var_230] = var_866;
	var_3086 = var_314 + 200;
	if ( var_83[var_314][0] == 144 ) {
		var_78[var_866][0] = 730;
	}
	if ( var_83[var_314][0] == 116 ) {
		var_78[var_866][0] = 731;
	}
	var_78[var_866][1] = var_1550;
	var_78[var_866][2] = var_230;
	var_78[var_866][3] = 0;
	var_78[var_866][4] = 0;
	var_78[var_866][5] = 0;
	var_78[var_866][6] = 0;
	var_78[var_866][7] = 0;
	var_78[var_866][8] = 0;
	var_78[var_866][9] = var_71[var_1550][var_230];
	var_78[var_866][10] = 1;
	var_78[var_866][11] = 0;
	var_78[var_866][12] = 0;
	var_78[var_866][13] = var_78[var_3086][13];
	if ( var_78[var_866][13] < 0 ) {
		var_78[var_866][13] = 1;
	}
	var_78[var_866][14] = 0;
	var_78[var_866][15] = 0;
	var_78[var_866][16] = 0;
	var_78[var_866][17] = 0;
	var_78[var_866][18] = 0;
	var_78[var_866][19] = 0;
	var_78[var_866][20] = 0;
	var_78[var_866][21] = 0;
	var_78[var_866][22] = 0;
	var_78[var_866][23] = 0;
	var_78[var_866][24] = 0;
	var_78[var_866][25] = 0;
	var_78[var_866][26] = 0;
	var_78[var_866][27] = 0;
	var_78[var_866][28] = 0;
	var_78[var_866][29] = 0;
	return;
	for(var i=0; i<10; i++){
		var_445 = 1;
		func405();
		var_445 = 0;
		if ( var_446 == 0 ) {
			break;
		}
		if ( var_336 >= 200 ) {
			break;
		}
		var_447 = var_448;
		var_449 = var_450;
		func724();
		var_866 = var_854;
		var_1550 = var_447;
		var_230 = var_449;
		var_77[var_1550][var_230] = var_866;
		var_3086 = var_314 + 200;
		var_78[var_866][0] = 1;
		var_78[var_866][1] = var_1550;
		var_78[var_866][2] = var_230;
		var_78[var_866][3] = 0;
		var_78[var_866][4] = 0;
		var_78[var_866][5] = 0;
		var_78[var_866][6] = 0;
		var_78[var_866][7] = 0;
		var_78[var_866][8] = 0;
		var_78[var_866][9] = var_71[var_1550][var_230];
		var_78[var_866][10] = 1;
		var_78[var_866][11] = 0;
		var_78[var_866][12] = 0;
		var_78[var_866][13] = var_78[var_3086][13] / 10;
		if ( var_78[var_866][13] < 0 ) {
			var_78[var_866][13] = 1;
		}
		var_78[var_866][14] = 0;
		var_78[var_866][15] = 0;
		var_78[var_866][16] = 0;
		var_78[var_866][17] = 0;
		var_78[var_866][18] = 0;
		var_78[var_866][19] = 0;
		var_78[var_866][20] = 0;
		var_78[var_866][21] = 0;
		var_78[var_866][22] = 0;
		var_78[var_866][23] = 0;
		var_78[var_866][24] = 0;
		var_78[var_866][25] = 0;
		var_78[var_866][26] = 0;
		var_78[var_866][27] = 0;
		var_78[var_866][28] = 0;
		var_78[var_866][29] = 0;
	}
	return;
}
function func679(){
	var_950 = var_840 * 2 + 3;
	return;
	if ( var_840 == 1 ) {
		var_950 = 5;
	}
	if ( var_840 == 2 ) {
		var_950 = 7;
	}
	if ( var_840 == 3 ) {
		var_950 = 9;
	}
	if ( var_840 == 4 ) {
		var_950 = 11;
	}
	if ( var_840 == 5 ) {
		var_950 = 13;
	}
	if ( var_840 == 6 ) {
		var_950 = 15;
	}
	if ( var_840 == 7 ) {
		var_950 = 17;
	}
	if ( var_840 == 8 ) {
		var_950 = 19;
	}
	if ( var_840 == 9 ) {
		var_950 = 21;
	}
	if ( var_840 == 10 ) {
		var_950 = 23;
	}
	if ( var_840 == 11 ) {
		var_950 = 25;
	}
	if ( var_840 == 12 ) {
		var_950 = 37;
	}
	if ( var_840 == 13 ) {
		var_950 = 41;
	}
	if ( var_840 == 14 ) {
		var_950 = 46;
	}
	if ( var_840 == 15 ) {
		var_950 = 51;
	}
	if ( var_840 == 16 ) {
		var_950 = 56;
	}
	if ( var_840 == 17 ) {
		var_950 = 61;
	}
	if ( var_840 == 18 ) {
		var_950 = 65;
	}
	if ( var_840 == 19 ) {
		var_950 = 71;
	}
	if ( var_840 == 20 ) {
		var_950 = 74;
	}
	if ( var_840 == 21 ) {
		var_950 = 77;
	}
	if ( var_840 == 22 ) {
		var_950 = 80;
	}
	if ( var_840 == 23 ) {
		var_950 = 83;
	}
	if ( var_840 == 24 ) {
		var_950 = 86;
	}
	if ( var_840 == 25 ) {
		var_950 = 89;
	}
	if ( var_840 == 26 ) {
		var_950 = 90;
	}
	if ( var_840 == 27 ) {
		var_950 = 91;
	}
	if ( var_840 == 28 ) {
		var_950 = 92;
	}
	if ( var_840 == 29 ) {
		var_950 = 93;
	}
	if ( var_840 == 30 ) {
		var_950 = 94;
	}
	if ( var_840 == 31 ) {
		var_950 = 95;
	}
	if ( var_840 == 32 ) {
		var_950 = 96;
	}
	if ( var_840 == 33 ) {
		var_950 = 97;
	}
	if ( var_840 == 34 ) {
		var_950 = 98;
	}
	if ( var_840 == 35 ) {
		var_950 = 99;
	}
	if ( var_840 == 36 ) {
		var_950 = 100;
	}
	if ( var_840 == 37 ) {
		var_950 = 101;
	}
	if ( var_840 == 38 ) {
		var_950 = 102;
	}
	if ( var_840 == 39 ) {
		var_950 = 103;
	}
	if ( var_840 == 40 ) {
		var_950 = 104;
	}
	if ( var_840 == 41 ) {
		var_950 = 105;
	}
	if ( var_840 == 42 ) {
		var_950 = 106;
	}
	if ( var_840 == 43 ) {
		var_950 = 107;
	}
	if ( var_840 == 44 ) {
		var_950 = 108;
	}
	if ( var_840 == 45 ) {
		var_950 = 109;
	}
	if ( var_840 == 46 ) {
		var_950 = 110;
	}
	if ( var_840 == 47 ) {
		var_950 = 111;
	}
	if ( var_840 == 48 ) {
		var_950 = 112;
	}
	if ( var_840 == 49 ) {
		var_950 = 113;
	}
	if ( var_840 == 50 ) {
		var_950 = 114;
	}
	if ( var_840 == 51 ) {
		var_950 = 115;
	}
	if ( var_840 == 52 ) {
		var_950 = 116;
	}
	if ( var_840 == 53 ) {
		var_950 = 117;
	}
	if ( var_840 == 54 ) {
		var_950 = 118;
	}
	if ( var_840 == 55 ) {
		var_950 = 119;
	}
	if ( var_840 == 56 ) {
		var_950 = 120;
	}
	if ( var_840 == 57 ) {
		var_950 = 121;
	}
	if ( var_840 == 58 ) {
		var_950 = 122;
	}
	if ( var_840 == 59 ) {
		var_950 = 123;
	}
	if ( var_840 == 60 ) {
		var_950 = 124;
	}
	if ( var_840 == 71 ) {
		var_950 = 125;
	}
	if ( var_840 == 72 ) {
		var_950 = 126;
	}
	if ( var_840 == 73 ) {
		var_950 = 127;
	}
	if ( var_840 == 74 ) {
		var_950 = 128;
	}
	if ( var_840 == 75 ) {
		var_950 = 129;
	}
	if ( var_840 == 76 ) {
		var_950 = 130;
	}
	if ( var_840 == 77 ) {
		var_950 = 131;
	}
	if ( var_840 == 78 ) {
		var_950 = 132;
	}
	if ( var_840 == 79 ) {
		var_950 = 133;
	}
	if ( var_840 == 80 ) {
		var_950 = 134;
	}
	if ( var_840 == 81 ) {
		var_950 = 135;
	}
	if ( var_840 == 82 ) {
		var_950 = 136;
	}
	if ( var_840 == 83 ) {
		var_950 = 137;
	}
	if ( var_840 == 84 ) {
		var_950 = 138;
	}
	if ( var_840 == 85 ) {
		var_950 = 139;
	}
	if ( var_840 == 86 ) {
		var_950 = 140;
	}
	if ( var_840 == 87 ) {
		var_950 = 141;
	}
	if ( var_840 == 88 ) {
		var_950 = 142;
	}
	if ( var_840 == 89 ) {
		var_950 = 143;
	}
	if ( var_840 == 90 ) {
		var_950 = 144;
	}
	if ( var_840 == 91 ) {
		var_950 = 145;
	}
	if ( var_840 == 92 ) {
		var_950 = 146;
	}
	if ( var_840 == 93 ) {
		var_950 = 147;
	}
	if ( var_840 == 94 ) {
		var_950 = 148;
	}
	if ( var_840 == 95 ) {
		var_950 = 149;
	}
	if ( var_840 == 96 ) {
		var_950 = 150;
	}
	if ( var_840 == 97 ) {
		var_950 = 151;
	}
	if ( var_840 == 98 ) {
		var_950 = 152;
	}
	if ( var_840 == 99 ) {
		var_950 = 153;
	}
	return;
}
function func680(func){
	if(!func){
		throw "";
	}
	funclist.push(func);
	var_839 = var_839 + 1;
	var_1015 = var_1015 + 1;
	var_29[var_2945][1] = var_29[var_2945][1] + 1;
	if ( var_29[var_2945][1] == 40 ) {
		var_29[var_2945][2] = 5;
	}
	if ( var_29[var_2945][1] == 30 ) {
		var_29[var_2945][2] = 4;
	}
	if ( var_29[var_2945][1] == 20 ) {
		var_29[var_2945][2] = 3;
	}
	if ( var_29[var_2945][1] == 10 ) {
		var_29[var_2945][2] = 2;
	}
	if ( var_29[var_2945][1] == 1 ) {
		var_29[var_2945][2] = 1;
	}
	if ( var_568 >= 9999999 ) {
		var_568 = 9999999;
	}
	if ( var_840 == 99 ) {
		funclist.pop()();
		return;
	}
	for(var i=0; i<99; i++){
		if ( var_840 == 99 ) {
			break;
		}
		if ( var_568 >= var_948[var_840] ) {
			func681();
		}
	}
	if ( var_2201 == 1 ) {
		func099();
		func340(func680_0);
		return;
	}
	func680_3();
}
function func680_0(){
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ" + var_840 + "に上がった！";
	var_297 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func050(func680_1);
}
function func680_1(){
	var_198 = 1;
	var_300 = 0;
	func047();
	var_func680 = 5;
	func337(func680_2);
}
function func680_2(){
	var_func680--;
	if(var_func680 > 0){
		return func337(func680_2);
	}
	func680_3();
}
function func680_3(){
	var_2201 = 0;
	funclist.pop()();
	return;
}
function func681(){
	var_840 = var_840 + 1;
	var_3087 = rnd(15);
	if ( var_62 == 99 ) {
		var_3087 = 0;
	}
	if ( var_3087 == 0 ) {
		var_352 = var_352 + 3;
		var_211 = var_211 + 3;
	}
	if ( var_3087 == 1 ) {
		var_352 = var_352 + 3;
		var_211 = var_211 + 3;
	}
	if ( var_3087 == 2 ) {
		var_352 = var_352 + 4;
		var_211 = var_211 + 4;
	}
	if ( var_3087 == 3 ) {
		var_352 = var_352 + 4;
		var_211 = var_211 + 4;
	}
	if ( var_3087 == 4 ) {
		var_352 = var_352 + 4;
		var_211 = var_211 + 4;
	}
	if ( var_3087 == 5 ) {
		var_352 = var_352 + 4;
		var_211 = var_211 + 4;
	}
	if ( var_3087 == 6 ) {
		var_352 = var_352 + 4;
		var_211 = var_211 + 4;
	}
	if ( var_3087 == 7 ) {
		var_352 = var_352 + 5;
		var_211 = var_211 + 5;
	}
	if ( var_3087 == 8 ) {
		var_352 = var_352 + 5;
		var_211 = var_211 + 5;
	}
	if ( var_3087 == 9 ) {
		var_352 = var_352 + 5;
		var_211 = var_211 + 5;
	}
	if ( var_3087 == 10 ) {
		var_352 = var_352 + 5;
		var_211 = var_211 + 5;
	}
	if ( var_3087 == 11 ) {
		var_352 = var_352 + 5;
		var_211 = var_211 + 5;
	}
	if ( var_3087 == 12 ) {
		var_352 = var_352 + 6;
		var_211 = var_211 + 6;
	}
	if ( var_3087 == 13 ) {
		var_352 = var_352 + 6;
		var_211 = var_211 + 6;
	}
	if ( var_3087 == 14 ) {
		var_352 = var_352 + 6;
		var_211 = var_211 + 6;
	}
	if ( var_352 >= 999 ) {
		var_352 = 999;
	}
	if ( var_211 >= var_352 ) {
		var_211 = var_352;
	}
	var_2201 = 1;
	return;
}
function func682(){
	var_3088 = var_83[var_3072][16];
	var_3089 = var_83[var_3072][39];
	var_3073 = 0;
	if ( var_3089 <= 1 ) {
		var_3073 = 50 - var_3088;
	}
	if ( var_3089 == 2 ) {
		var_3073 = 200 - var_3088;
	}
	if ( var_3089 == 3 ) {
		var_3073 = 500 - var_3088;
	}
	if ( var_3089 == 4 ) {
		var_3073 = 1000 - var_3088;
	}
	if ( var_3089 == 5 ) {
		var_3073 = 2000 - var_3088;
	}
	if ( var_3089 == 6 ) {
		var_3073 = 4000 - var_3088;
	}
	if ( var_3089 == 7 ) {
		var_3073 = 10000 - var_3088;
	}
	if ( var_3089 == 8 ) {
		var_3073 = 20000 - var_3088;
	}
	if ( var_3089 == 9 ) {
		var_3073 = 40000 - var_3088;
	}
	if ( var_3089 == 10 ) {
		var_3073 = 999999;
	}
	return;
}
function func683(){
	var_2201 = 0;
	if ( var_83[var_673][16] >= 999999 ) {
		var_83[var_673][16] = 999999;
	}
	if ( var_83[var_673][0] == 36 ) {
		var_1025 = var_83[var_673][16];
	}
	if ( var_83[var_673][0] == 105 ) {
		var_1026 = var_83[var_673][16];
	}
	if ( var_83[var_673][0] == 106 ) {
		var_1027 = var_83[var_673][16];
	}
	if ( var_83[var_673][0] == 107 ) {
		var_1027 = var_83[var_673][16];
	}
	if ( var_83[var_673][0] == 108 ) {
		var_1029 = var_83[var_673][16];
	}
	if ( var_83[var_673][39] >= 10 ) {
		return;
	}
	var_3090 = 0;
	if ( var_83[var_673][39] <= 1 && var_83[var_673][16] >= 50 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 2 && var_83[var_673][16] >= 200 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 3 && var_83[var_673][16] >= 500 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 4 && var_83[var_673][16] >= 1000 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 5 && var_83[var_673][16] >= 2000 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 6 && var_83[var_673][16] >= 4000 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 7 && var_83[var_673][16] >= 10000 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 8 && var_83[var_673][16] >= 20000 ) {
		var_3090 = 1;
	}
	if ( var_83[var_673][39] == 9 && var_83[var_673][16] >= 40000 ) {
		var_3090 = 1;
	}
	if ( var_3090 == 1 ) {
		var_83[var_673][39] = var_83[var_673][39] + 1;
		if ( var_83[var_673][39] == 1 ) {
			var_83[var_673][39] = 2;
		}
		var_437 = var_83[var_673][0];
		func626();
		var_3091 = var_891;
		var_83[var_673][3] = Math.floor(var_438 * (var_83[var_673][39] + 10) / 10);
		if ( var_83[var_673][3] >= 999 ) {
			var_83[var_673][3] = 999;
		}
		var_2201 = 1;
	}
	if ( var_2201 == 1 ) {
		func340();
		DSPLAY(142);
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_3091 + "は";
		var_297 = "レベルが上がった！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
	}
	var_2201 = 0;
	return;
}
function func684(){
	if ( var_83[var_673][0] == 36 ) {
		var_83[var_673][16] = var_1025;
	}
	if ( var_83[var_673][0] == 105 ) {
		var_83[var_673][16] = var_1026;
	}
	if ( var_83[var_673][0] == 106 ) {
		var_83[var_673][16] = var_1027;
	}
	if ( var_83[var_673][0] == 108 ) {
		var_83[var_673][16] = var_1029;
	}
	if ( var_83[var_673][39] <= 1 && var_83[var_673][16] >= 50 ) {
		var_83[var_673][39] = 2;
	}
	if ( var_83[var_673][39] == 2 && var_83[var_673][16] >= 200 ) {
		var_83[var_673][39] = 3;
	}
	if ( var_83[var_673][39] == 3 && var_83[var_673][16] >= 500 ) {
		var_83[var_673][39] = 4;
	}
	if ( var_83[var_673][39] == 4 && var_83[var_673][16] >= 1000 ) {
		var_83[var_673][39] = 5;
	}
	if ( var_83[var_673][39] == 5 && var_83[var_673][16] >= 2000 ) {
		var_83[var_673][39] = 6;
	}
	if ( var_83[var_673][39] == 6 && var_83[var_673][16] >= 4000 ) {
		var_83[var_673][39] = 7;
	}
	if ( var_83[var_673][39] == 7 && var_83[var_673][16] >= 10000 ) {
		var_83[var_673][39] = 8;
	}
	if ( var_83[var_673][39] == 8 && var_83[var_673][16] >= 20000 ) {
		var_83[var_673][39] = 9;
	}
	if ( var_83[var_673][39] == 9 && var_83[var_673][16] >= 40000 ) {
		var_83[var_673][39] = 10;
	}
	if ( var_83[var_673][39] >= 2 ) {
		var_437 = var_83[var_673][0];
		func626();
		var_83[var_673][3] = Math.floor(var_438 * (var_83[var_673][39] * 2 + 10) / 10);
	}
	return;
}
function func685(){
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｴﾝﾔ婆「うぽわあ———ッ！！」";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	if ( var_123 == 0 ) {
		var_92 = 10;
	}
	if ( var_123 != 0 ) {
		var_396 = 10;
	}
	var_103 = 1;
	var_386 = 0;
	var_3092 = 1;
	for(var i=0; i<var_97; i++){
		var_83[var_3092][6] = 0;
		var_83[var_3092][9] = 0;
		var_83[var_3092][11] = 0;
		var_83[var_3092][12] = 0;
		var_83[var_3092][13] = 0;
		var_83[var_3092][14] = 0;
		var_83[var_3092][15] = 0;
		var_83[var_3092][16] = 0;
		var_83[var_3092][17] = 0;
		var_83[var_3092][18] = 0;
		var_83[var_3092][19] = 0;
		if ( var_83[var_3092][0] == 8 || var_83[var_3092][0] == 24 || var_83[var_3092][0] == 25 ) {
			var_83[var_3092][0] = 23;
		}
		var_3092 = var_3092 + 1;
	}
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_311 = 255;
	DSPLAY(192);
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
		var_198 = 1;
		var_300 = 0;
	}
	var_312 = 0;
	if ( var_404 >= 1 ) {
		return;
	}
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｴﾝﾔ婆「う…　うそじゃ";
	var_297 = "このわしが　こんなこと……」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｴﾝﾔ婆「しかし…おまえが求める物など";
	var_297 = "こんなところにはないッ！」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｴﾝﾔ婆「せいぜい他の場所を";
	var_297 = "探すんじゃなああああああ！」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	return;
}
function func686(){
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「うぐッ！！」";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「ば…ばかな…";
	var_297 = "こんなことが…」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「G･E･ﾚｸｲｴﾑの能力を使えば、";
	var_297 = "その終わりのない状態を」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「解除する事はできるだろう…。";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「…しかしボス」";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｼﾞｮﾙﾉ「はたしてそれで、";
	var_297 = "勝利したと言えるかな…？」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	var_190 = 1;
	return;
}
function func687(){
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳﾝｶﾞﾛ「ウッガァ———ッ！！」";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	var_3092 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_3092][0] != 143 && var_83[var_3092][31] != 5 ) {
			var_83[var_3092][0] = 0;
			var_3093 = var_83[var_3092][1];
			var_3094 = var_83[var_3092][2];
			var_82[var_3093][var_3094] = 0;
			for(var k=0; k<30; k++){
				var_83[var_3092][k] = 0;
			}
		}
		var_3092 = var_3092 + 1;
	}
	var_114 = 0;
	var_463 = 0;
	var_464 = 0;
	var_461 = 0;
	var_462 = 0;
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	DSPLAY(192);
	var_311 = 255;
	func331();
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
		var_198 = 1;
		var_300 = 0;
	}
	var_312 = 0;
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳﾝｶﾞﾛ「オ…オレのスタンド";
	var_297 = "【ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰ】…」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳﾝｶﾞﾛ「この能力で、ダンジョン内を";
	var_297 = "ジョジョのキャラクターで」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳﾝｶﾞﾛ「埋め尽くしてやろうと";
	var_297 = "思っていたのによォ〜〜」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳﾝｶﾞﾛ「もうこの世界には…";
	var_297 = "希望も何もねえッ…」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	return;
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "「うぐッ！！」";
	var_297 = "";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "「ば…ばかな…";
	var_297 = "こんなことが…」";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	return;
}
function func688(){
	var_387 = 0;
	var_3092 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_3092][0] == 40 || var_83[var_3092][0] == 41 || var_83[var_3092][0] == 42 || var_83[var_3092][0] == 54 ) {
			var_2883 = var_83[var_3092][1];
			var_2884 = var_83[var_3092][2];
			var_82[var_2883][var_2884] = 0;
			for(var k=0; k<30; k++){
				var_83[var_3092][k] = 0;
			}
		}
		var_3092 = var_3092 + 1;
	}
	var_3092 = 1;
	for(var i=0; i<var_337; i++){
		if ( var_81[var_3092][0] == 17 ) {
			var_2883 = var_81[var_3092][1];
			var_2884 = var_81[var_3092][2];
			var_80[var_2883][var_2884] = 0;
			var_81[var_3092][0] = 0;
			var_81[var_3092][1] = 0;
			var_81[var_3092][2] = 0;
		}
		var_3092 = var_3092 + 1;
	}
	var_103 = 1;
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	DSPLAY(192);
	var_311 = 255;
	func331();
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
		var_198 = 1;
		var_300 = 0;
	}
	var_312 = 0;
	return;
}
function func689(){
	func340();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "このダンジョンを制覇した！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[6];
	var_26_1 = var_26[6];
	var_27_1 = var_27[6];
	func047();
	while(true){
		var_491 = rnd(var_33);
		var_492 = rnd(var_34);
		if ( var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30 ) {
			continue;
		}
		if ( var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_71[var_491][var_492] != var_201 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 ) {
			break;
		}
		if ( var_62 == 3 && var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 ) {
			break;
		}
	}
	var_73[var_491][var_492] = 1;
	var_200 = var_71[var_491][var_492];
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "どこかに階段が現れたようだ…";
	var_297 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func050();
	var_198 = 1;
	var_300 = 0;
	func047();
	return;
}
function func690(){
	if ( var_2957 != 1 ) {
		var_3095 = rnd(8);
	}
	if ( var_2957 == 1 ) {
		var_3095 = 1;
		if ( var_2958 == 2 ) {
			var_3095 = 0;
		}
	}
	if ( var_2957 == 2 ) {
		var_3095 = 0;
	}
	if ( var_2957 == 3 ) {
		var_3095 = 0;
	}
	if ( var_2959 == 1 ) {
		var_3095 = 0;
	}
	if ( var_2959 == 2 ) {
		var_3095 = 1;
	}
	var_2959 = 0;
	if ( var_62 == 99 ) {
		if ( var_2957 == 4 || var_2957 == 5 ) {
			var_3095 = 1;
		}
	}
	if ( var_3095 == 0 ) {
		if ( var_2957 == 1 ) {
			var_2531 = 1;
		}
		if ( var_2957 == 2 ) {
			var_2531 = 4;
		}
		if ( var_2957 == 3 ) {
			var_2531 = 5;
		}
		if ( var_2957 == 4 ) {
			var_2531 = 2;
		}
		if ( var_2957 == 5 ) {
			var_2531 = 3;
		}
		func340();
		var_3096 = var_673;
		var_1845 = 4;
		var_2102 = var_347;
		var_2103 = var_348;
		func556();
		var_2531 = 0;
		var_1845 = 0;
		var_673 = var_3096;
		var_293 = var_296;
		var_294 = var_297;
		if ( var_2957 == 1 ) {
			var_296 = "";
			var_297 = "ｴｺｰｽﾞの卵はｴｺｰｽﾞACT1に成長した！";
		}
		if ( var_2957 == 2 ) {
			var_296 = "";
			var_297 = "ｴｺｰｽﾞはACT2に成長した！";
		}
		if ( var_2957 == 3 ) {
			var_296 = "";
			var_297 = "ｴｺｰｽﾞはACT3に成長した！";
		}
		if ( var_2957 == 4 ) {
			var_296 = "";
			var_297 = "ｴｺｰｽﾞACT1はさなぎになった！";
		}
		if ( var_2957 == 5 ) {
			var_296 = "";
			var_297 = "ｴｺｰｽﾞACT2はさなぎになった！";
		}
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[2];
		var_26_1 = var_26[2];
		var_27_1 = var_27[2];
		func047();
		func050();
		for(var j=0; j<10; j++){
			func337();
		}
	}
	var_2957 = 0;
	return;
}
function func691(){
	func340();
	var_3096 = var_673;
	var_1845 = 4;
	var_2102 = var_347;
	var_2103 = var_348;
	func556();
	var_2531 = 0;
	var_1845 = 0;
	var_673 = var_3096;
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "中からﾌﾞﾁｬﾗﾃｨが現れた！";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	func050();
	var_2538 = 0;
	for(var i=0; i<10; i++){
		func337();
	}
	return;
}
function func692(){
	if ( var_183 != 0 ) {
		return;
	}
	var_184 = var_347;
	var_185 = var_348;
	var_183 = 1;
	return;
}
function func693(){
	var_3096 = var_673;
	var_2539 = 1;
	var_1845 = 3;
	var_1914 = var_184;
	var_1915 = var_185;
	func556();
	var_1845 = 0;
	var_2539 = 0;
	var_673 = var_3096;
	var_183 = 0;
	var_184 = 0;
	var_185 = 0;
	var_186 = 0;
	return;
}
function func694(func){
	if(!func){
		throw "";
	}
	if ( var_211 == 0 ) {
		return;
	}
	func340();
	var_403 = "ｽｰﾊﾟｰﾌﾗｲが攻撃を跳ね返した！";
	var_402 = var_673;
	var_3097 = 1;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func705();
	var_3097 = 0;
	func340();
	func051();
	return;
	if ( var_211 == 0 ) {
		return;
	}
	var_2855 = rnd(8);
	if ( var_2855 == 1 ) {
		var_1396 = var_83[var_673][1];
		var_1397 = var_83[var_673][2];
		var_271 = 1;
		var_1551 = 1;
		for(var j=0; j<17; j++){
			func337();
			var_1551++;
		}
		var_271 = 0;
		var_1551 = 0;
		var_403 = "道連れ能力が発動した！";
		var_3098 = 1;
		var_402 = var_673;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_209 = Math.floor(var_209 / 3);
		if ( var_209 <= 0 ) {
			var_209 = 1;
		}
		func705();
		var_3098 = 0;
		for(var j=0; j<5; j++){
			func337();
		}
	}
	return;
}
function func695(func){
	if(!func){
		throw "";
	}
	if ( var_211 == 0 ) {
		return;
	}
	var_2855 = 0;
	var_3099 = 1;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_3099][0] == 650 || var_233[var_3099][0] == 651 || var_233[var_3099][0] == 653 || var_233[var_3099][0] == 654 || var_233[var_3099][0] == 655 ) {
			var_2855 = var_233[var_3099][0];
			break;
		}
		var_3099++;
	}
	if ( var_2855 != 0 ) {
		var_232 = var_2855;
		func492();
		var_3100 = var_489;
		var_1396 = var_83[var_673][1];
		var_1397 = var_83[var_673][2];
		var_83[var_673][8] = 1;
		var_271 = 1;
		var_1552 = 1;
		for(var j=0; j<10; j++){
			func337();
			var_1552++;
		}
		var_271 = 0;
		var_1552 = 0;
		var_403 = "" + var_3100 + "がダメージを反射した！";
		var_3098 = 1;
		var_402 = var_673;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_209 = Math.floor(var_209 / 3);
		if ( var_209 <= 0 ) {
			var_209 = 1;
		}
		func705();
		var_3098 = 0;
		for(var j=0; j<5; j++){
			func337();
		}
	}
	return;
}
function func696(){
	if ( var_211 == 0 ) {
		return;
	}
	var_3098 = 1;
	var_402 = var_673;
	if ( var_83[var_402][0] <= 0 ) {
		return;
	}
	var_403 = "ダメージを反射した！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func705();
	func340();
	func051();
	return;
	if ( var_211 == 0 ) {
		return;
	}
	if ( var_83[var_3101][0] == 153 ) {
		var_403 = "「一緒に行こうよォ〜〜ッ」";
		var_1396 = var_83[var_673][1];
		var_1397 = var_83[var_673][2];
		var_271 = 1;
		var_1551 = 1;
		for(var j=0; j<17; j++){
			func337();
			var_1551++;
		}
		var_1551 = 0;
		var_271 = 0;
	}
	if ( var_83[var_3101][0] == 61 ) {
		var_403 = "すごく臭い！";
		for(var j=0; j<10; j++){
			func337();
		}
	}
	var_3098 = 1;
	var_402 = var_673;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func705();
	func340();
	func051();
	return;
	var_403 = "隕石が落ちてきた！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_1441 = 0;
	var_2194 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_2194 != var_124 ) {
			if ( var_83[var_2194][0] != 0 && var_83[var_2194][10] == var_201 && var_201 > 0 && var_201 <= 12 ) {
				var_402 = var_2194;
				func661();
				var_1441 = 1;
				func697();
				func705();
				func340();
				break;
			}
			if ( var_201 == 14 || var_201 == 13 ) {
				var_1993 = var_66 - 1;
				if ( var_1993 < 0 ) {
					var_1993 = 0;
				}
				var_1994 = var_66 + 1;
				if ( var_1994 > var_33 ) {
					var_1994 = var_33;
				}
				var_1995 = var_67 + 1;
				if ( var_1995 > var_34 ) {
					var_1995 = var_34;
				}
				var_1996 = var_67 - 1;
				if ( var_1996 < 0 ) {
					var_1996 = 0;
				}
				if ( var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_66 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_67 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
				if ( var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
					var_402 = var_2194;
					func661();
					var_1441 = 1;
					func697();
					func705();
					func340();
					break;
				}
			}
		}
		var_2194 = var_2194 + 1;
	}
	if ( var_1441 == 0 ) {
		func697();
	}
	func421();
	var_217 = 1;
	return func019();
}
function func697(){
	var_271 = 1;
	var_1440 = 1;
	if ( var_1441 == 1 ) {
		if ( var_83[var_2194][1] > var_66 ) {
			var_1442 = 0;
		}
		if ( var_83[var_2194][1] <= var_66 ) {
			var_1442 = 1;
		}
		if ( var_1442 == 0 ) {
			var_1427 = (var_83[var_2194][1] - var_66 + 4) * 40 - 160;
			var_1428 = (var_83[var_2194][2] - var_67 + 4) * 40 - 160 - 20;
		}
		if ( var_1442 == 1 ) {
			var_1427 = (var_83[var_2194][1] - var_66 + 4) * 40 + 160 - 40;
			var_1428 = (var_83[var_2194][2] - var_67 + 4) * 40 - 160 - 20;
		}
	}
	if ( var_1441 == 0 ) {
		var_1442 = rnd(2);
		if ( var_1442 == 0 ) {
			var_1427 = 0;
			var_1428 = 0;
		}
		if ( var_1442 == 1 ) {
			var_1427 = 320 - 40;
			var_1428 = 0;
		}
	}
	for(var i=0; i<7; i++){
		func337();
		if ( var_1442 == 0 ) {
			var_1427 = var_1427 + 20;
			var_1428 = var_1428 + 20;
		}
		if ( var_1442 == 1 ) {
			var_1427 = var_1427 - 20;
			var_1428 = var_1428 + 20;
		}
		var_1440 = var_1440 + 1;
	}
	var_271 = 0;
	var_1440 = 0;
	return;
}
function func698(){
	DSPLAY(165);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "カチリ";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	var_1343 = var_83[var_2890][1];
	var_1344 = var_83[var_2890][2];
	var_1342 = 1;
	var_271 = 1;
	for(var i=0; i<15; i++){
		func337();
	}
	var_1342 = 0;
	var_271 = 0;
	var_1389 = var_83[var_2890][1];
	var_1390 = var_83[var_2890][2];
	var_82[var_1389][var_1390] = 0;
	var_83[var_2890][0] = 0;
	var_83[var_2890][1] = 0;
	var_83[var_2890][2] = 0;
	var_83[var_2890][6] = 0;
	var_83[var_2890][7] = 0;
	var_83[var_2890][8] = 0;
	var_83[var_2890][9] = 0;
	var_83[var_2890][18] = 0;
	var_83[var_2890][19] = 0;
	var_83[var_2890][27] = 0;
	var_83[var_2890][28] = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_1993 = var_1389 - 1;
	if ( var_1993 < 0 ) {
		var_1993 = 0;
	}
	var_1994 = var_1389 + 1;
	var_1995 = var_1390 + 1;
	var_1996 = var_1390 - 1;
	if ( var_1996 < 0 ) {
		var_1996 = 0;
	}
	if ( var_71[var_1993][var_1390] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1994][var_1390] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1389][var_1995] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1389][var_1996] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1993][var_1995] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1994][var_1995] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1993][var_1996] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1994][var_1996] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1996;
		func622();
	}
	if ( var_77[var_1389][var_1390] > 0 ) {
		var_77[var_1389][var_1390] = 0;
	}
	if ( var_77[var_1993][var_1390] > 0 ) {
		var_77[var_1993][var_1390] = 0;
	}
	if ( var_77[var_1994][var_1390] > 0 ) {
		var_77[var_1994][var_1390] = 0;
	}
	if ( var_77[var_1389][var_1995] > 0 ) {
		var_77[var_1389][var_1995] = 0;
	}
	if ( var_77[var_1389][var_1996] > 0 ) {
		var_77[var_1389][var_1996] = 0;
	}
	if ( var_77[var_1993][var_1995] > 0 ) {
		var_77[var_1993][var_1995] = 0;
	}
	if ( var_77[var_1994][var_1995] > 0 ) {
		var_77[var_1994][var_1995] = 0;
	}
	if ( var_77[var_1993][var_1996] > 0 ) {
		var_77[var_1993][var_1996] = 0;
	}
	if ( var_77[var_1994][var_1996] > 0 ) {
		var_77[var_1994][var_1996] = 0;
	}
	DSPLAY(180);
	var_271 = 1;
	var_1388 = 1;
	for(var i=0; i<3; i++){
		var_585 = 3;
		func337();
		var_585 = 0;
		func337();
		var_1388++;
	}
	for(var i=0; i<14; i++){
		func337();
		var_1388++;
	}
	var_271 = 0;
	var_1388 = 0;
	if ( var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1 ) {
		var_389 = 2;
		DSPLAY(105);
		if ( var_211 == 1 ) {
			var_211 = 0;
			var_356 = 209;
			for(var k=0; k<9; k++){
				func337();
			}
			var_389 = 0;
			var_2197 = 1;
			return;
		}
		if ( var_211 > 1 ) {
			var_2198 = Math.floor(var_211 / 2);
			if ( var_156[314] == 1 ) {
				var_2198 = Math.floor(var_2198 / 2);
			}
			var_211 = var_211 - var_2198;
			if ( var_211 <= 0 ) {
				var_211 = 1;
			}
			var_208 = var_2198 + var_208;
		}
		for(var j=0; j<9; j++){
			func337();
		}
		var_389 = 0;
	}
	var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
	var_2194 = 1;
	var_2195 = 1;
	var_2196 = 2;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		var_209 = 0;
		var_2194 = var_2194 + 1;
	}
	var_2196 = 0;
	var_2195 = 0;
	func331();
	var_2199 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2199][0] == 17 && var_83[var_2199][29] == 1 ) {
			func699();
			var_2199 = 1;
			i = 0;		// continue
			continue;
		}
		var_2199++;
	}
	return;
}
function func699(){
	if(!func){
		throw "";
	}
	var_2890 = var_2199;
	DSPLAY(165);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "カチリ";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	func047();
	var_1343 = var_83[var_2890][1];
	var_1344 = var_83[var_2890][2];
	var_1342 = 1;
	var_271 = 1;
	for(var i=0; i<15; i++){
		func337();
	}
	var_1342 = 0;
	var_271 = 0;
	var_1389 = var_83[var_2890][1];
	var_1390 = var_83[var_2890][2];
	var_82[var_1389][var_1390] = 0;
	var_83[var_2890][0] = 0;
	var_83[var_2890][1] = 0;
	var_83[var_2890][2] = 0;
	var_83[var_2890][6] = 0;
	var_83[var_2890][7] = 0;
	var_83[var_2890][8] = 0;
	var_83[var_2890][9] = 0;
	var_83[var_2890][18] = 0;
	var_83[var_2890][19] = 0;
	var_83[var_2890][27] = 0;
	var_83[var_2890][28] = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
	var_25_1 = var_25[2];
	var_26_1 = var_26[2];
	var_27_1 = var_27[2];
	var_198 = 1;
	var_300 = 0;
	func047();
	var_1993 = var_1389 - 1;
	if ( var_1993 < 0 ) {
		var_1993 = 0;
	}
	var_1994 = var_1389 + 1;
	var_1995 = var_1390 + 1;
	var_1996 = var_1390 - 1;
	if ( var_1996 < 0 ) {
		var_1996 = 0;
	}
	if ( var_71[var_1993][var_1390] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1994][var_1390] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1390;
		func622();
	}
	if ( var_71[var_1389][var_1995] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1389][var_1996] == 0 ) {
		var_347 = var_1389;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1993][var_1995] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1994][var_1995] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1995;
		func622();
	}
	if ( var_71[var_1993][var_1996] == 0 ) {
		var_347 = var_1993;
		var_348 = var_1996;
		func622();
	}
	if ( var_71[var_1994][var_1996] == 0 ) {
		var_347 = var_1994;
		var_348 = var_1996;
		func622();
	}
	if ( var_77[var_1389][var_1390] > 0 ) {
		var_77[var_1389][var_1390] = 0;
	}
	if ( var_77[var_1993][var_1390] > 0 ) {
		var_77[var_1993][var_1390] = 0;
	}
	if ( var_77[var_1994][var_1390] > 0 ) {
		var_77[var_1994][var_1390] = 0;
	}
	if ( var_77[var_1389][var_1995] > 0 ) {
		var_77[var_1389][var_1995] = 0;
	}
	if ( var_77[var_1389][var_1996] > 0 ) {
		var_77[var_1389][var_1996] = 0;
	}
	if ( var_77[var_1993][var_1995] > 0 ) {
		var_77[var_1993][var_1995] = 0;
	}
	if ( var_77[var_1994][var_1995] > 0 ) {
		var_77[var_1994][var_1995] = 0;
	}
	if ( var_77[var_1993][var_1996] > 0 ) {
		var_77[var_1993][var_1996] = 0;
	}
	if ( var_77[var_1994][var_1996] > 0 ) {
		var_77[var_1994][var_1996] = 0;
	}
	DSPLAY(180);
	var_271 = 1;
	var_1388 = 1;
	for(var i=0; i<3; i++){
		var_585 = 3;
		func337();
		var_585 = 0;
		func337();
		var_1388++;
	}
	for(var i=0; i<14; i++){
		func337();
		var_1388++;
	}
	var_271 = 0;
	var_1388 = 0;
	if ( var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1 ) {
		var_389 = 2;
		DSPLAY(105);
		if ( var_211 == 1 ) {
			var_211 = 0;
			var_356 = 209;
			for(var k=0; k<9; k++){
				func337();
			}
			var_389 = 0;
			var_2197 = 1;
			return;
		}
		if ( var_211 > 1 ) {
			var_2198 = Math.floor(var_211 / 2);
			if ( var_156[314] == 1 ) {
				var_2198 = Math.floor(var_2198 / 2);
			}
			var_211 = var_211 - var_2198;
			if ( var_211 <= 0 ) {
				var_211 = 1;
			}
			var_208 = var_2198 + var_208;
		}
		for(var j=0; j<9; j++){
			func337();
		}
		var_389 = 0;
	}
	var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
	var_2194 = 1;
	var_2195 = 1;
	var_2196 = 2;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1389 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1390 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1995 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1993 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		if ( var_83[var_2194][0] != 0 && var_83[var_2194][1] == var_1994 && var_83[var_2194][2] == var_1996 ) {
			func700();
		}
		var_209 = 0;
		var_2194 = var_2194 + 1;
	}
	var_2196 = 0;
	var_2195 = 0;
	func331();
	return;
}
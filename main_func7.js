function func700(){
	if(!func){
		throw "";
	}
	var_402 = var_2194;
	if ( var_83[var_2194][0] == 132 || var_83[var_2194][0] == 143 ) {
		var_209 = 10;
		var_2195 = 0;
		var_2196 = 0;
		func705();
		var_2196 = 2;
		var_2195 = 1;
		return;
	}
	if ( var_3083 == 0 ) {
		if ( var_83[var_2194][0] == 33 || var_83[var_2194][0] == 34 || var_83[var_2194][0] == 32 || var_83[var_2194][0] == 21 || var_83[var_2194][0] == 137 ) {
			var_209 = 10;
			var_2195 = 0;
			var_2196 = 0;
			func705();
			var_2196 = 2;
			var_2195 = 1;
			return;
		}
		if ( var_83[var_2194][0] == 17 ) {
			var_83[var_2194][3] = 5;
			var_83[var_2194][8] = 1;
			for(var k=0; k<5; k++){
				func337();
			}
			var_83[var_2194][8] = 0;
			var_83[var_2194][29] = 1;
			return;
		}
	}
	var_209 = 999;
	var_2217 = 1;
	func705();
	var_2217 = 0;
	func331();
	return;
}
function func701(){
	if(!func){
		throw "";
	}
	var_1389 = var_66;
	var_1390 = var_67;
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
	var_389 = 2;
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
	if ( var_211 == 1 ) {
		var_211 = 0;
		var_356 = 248;
		if ( var_177 == 12 ) {
			var_356 = 266;
		}
		for(var j=0; j<9; j++){
			func337();
		}
		var_389 = 0;
		var_2197 = 1;
		return;
	}
	if ( var_211 > 1 ) {
		var_2198 = var_211 / 2;
		if ( var_156[314] == 1 ) {
			var_2198 = var_2198 / 2;
		}
		var_211 = var_211 - var_2198;
		if ( var_211 <= 0 ) {
			var_211 = 1;
		}
		var_208 = var_2198 + var_208;
	}
	var_389 = 0;
	var_2199 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_2199][0] == 17 && var_83[var_2199][29] == 1 ) {
			func699();
			var_2199 = 1;
			i = 0;		// continue 0
			continue;
		}
		var_2199++;
	}
	return;
}
function func702(){
	var_3102 = dim(10);
	var_3103 = 0;
	if ( var_2946 == 101 ) {
		if ( var_82[var_2947][var_2948] != 0 ) {
			var_433 = var_82[var_2947][var_2948];
			if ( var_83[var_433][0] == 101 ) {
				var_83[var_433][12] = 0;
				var_3102(1) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
			}
		}
		if ( var_82[var_2949][var_2948] != 0 ) {
			var_433 = var_82[var_2949][var_2948];
			if ( var_83[var_433][0] == 102 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(2) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2947][var_2950] != 0 ) {
			var_433 = var_82[var_2947][var_2950];
			if ( var_83[var_433][0] == 103 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(3) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2949][var_2950] != 0 ) {
			var_433 = var_82[var_2949][var_2950];
			if ( var_83[var_433][0] == 104 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(4) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
	}
	if ( var_2946 == 102 ) {
		if ( var_82[var_2947][var_2948] != 0 ) {
			var_433 = var_82[var_2947][var_2948];
			if ( var_83[var_433][0] == 102 ) {
				var_83[var_433][12] = 0;
				var_3102(2) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
			}
		}
		if ( var_82[var_2951][var_2948] != 0 ) {
			var_433 = var_82[var_2951][var_2948];
			if ( var_83[var_433][0] == 101 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(1) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2951][var_2950] != 0 ) {
			var_433 = var_82[var_2951][var_2950];
			if ( var_83[var_433][0] == 103 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(3) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2947][var_2950] != 0 ) {
			var_433 = var_82[var_2947][var_2950];
			if ( var_83[var_433][0] == 104 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(4) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
	}
	if ( var_2946 == 103 ) {
		if ( var_82[var_2947][var_2948] != 0 ) {
			var_433 = var_82[var_2947][var_2948];
			if ( var_83[var_433][0] == 103 ) {
				var_83[var_433][12] = 0;
				var_3102(3) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
			}
		}
		if ( var_82[var_2947][var_2952] != 0 ) {
			var_433 = var_82[var_2947][var_2952];
			if ( var_83[var_433][0] == 101 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(1) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2949][var_2952] != 0 ) {
			var_433 = var_82[var_2949][var_2952];
			if ( var_83[var_433][0] == 102 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(2) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2949][var_2948] != 0 ) {
			var_433 = var_82[var_2949][var_2948];
			if ( var_83[var_433][0] == 104 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(4) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
	}
	if ( var_2946 == 104 ) {
		if ( var_82[var_2947][var_2948] != 0 ) {
			var_433 = var_82[var_2947][var_2948];
			if ( var_83[var_433][0] == 104 ) {
				var_83[var_433][12] = 0;
				var_3102(4) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
			}
		}
		if ( var_82[var_2951][var_2952] != 0 ) {
			var_433 = var_82[var_2951][var_2952];
			if ( var_83[var_433][0] == 101 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(1) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2947][var_2952] != 0 ) {
			var_433 = var_82[var_2947][var_2952];
			if ( var_83[var_433][0] == 102 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(2) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
		if ( var_82[var_2951][var_2948] != 0 ) {
			var_433 = var_82[var_2951][var_2948];
			if ( var_83[var_433][0] == 103 && var_83[var_433][12] == 99 ) {
				var_83[var_433][12] = 0;
				var_3102(3) = 1;
				var_434 = var_83[var_433][1];
				var_435 = var_83[var_433][2];
				func704();
				var_3103 = 1;
			}
		}
	}
	var_2946 = 0;
	if ( var_1280 == 0 && var_2217 == 0 && var_3103 == 1 ) {
		if ( var_3102(1) == 1 || var_3102(2) == 1 || var_3102(3) == 1 || var_3102(4) == 1 ) {
			var_198 = 1;
			var_300 = 0;
			var_3104 = "";
			for(var k=0; k<10; k++){
				func337();
			}
			if ( var_3102(1) == 1 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_3104 = "おれの名は";
				var_296 = "「" + var_3104 + "ペイジ」";
				var_297 = "";
				func047();
				func050();
				var_198 = 1;
				var_300 = 0;
			}
			if ( var_3102(2) == 1 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "「ジョーンズ」";
				if ( var_3104 == "" ) {
					var_3104 = "おれの名は";
					var_296 = "「" + var_3104 + "ジョーンズ」";
				}
				var_297 = "";
				func047();
				func050();
				var_198 = 1;
				var_300 = 0;
			}
			if ( var_3102(3) == 1 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "「プラント」";
				if ( var_3104 == "" ) {
					var_3104 = "おれの名は";
					var_296 = "「" + var_3104 + "プラント」";
				}
				var_297 = "";
				func047();
				func050();
				var_198 = 1;
				var_300 = 0;
			}
			if ( var_3102(4) == 1 ) {
				func094();
				var_293 = var_296;
				var_294 = var_297;
				var_296 = "「ボーンナム」";
				if ( var_3104 == "" ) {
					var_3104 = "おれの名は";
					var_296 = "「" + var_3104 + "ボーンナム」";
				}
				var_297 = "";
				func047();
				func050();
				var_198 = 1;
				var_300 = 0;
			}
			for(var k=0; k<10; k++){
				func337();
			}
			var_198 = 1;
			var_300 = 0;
			func094();
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "「血管針攻撃！！！」";
			var_297 = "";
			func047();
			func050();
			for(var k=0; k<10; k++){
				func337();
			}
		}
	}
	return;
}
function func703(){
	if ( var_175 >= 1 && var_314 == var_175 ) {
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "やっつけたｱｸｱ･ﾈｯｸﾚｽは";
		var_297 = "念写したヤツだったようだ。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_175 = 0;
		func331();
	}
	if ( var_176 >= 1 && var_314 == var_176 ) {
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "やっつけたDIOは";
		var_297 = "念写したヤツだったようだ。";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func050();
		var_198 = 1;
		var_300 = 0;
		func047();
		var_176 = 0;
		func331();
	}
	return;
}
function func704(){
	if ( var_434 == var_66 && var_435 > var_67 ) {
		var_83[var_433][5] = 8;
	}
	if ( var_434 == var_66 && var_435 < var_67 ) {
		var_83[var_433][5] = 2;
	}
	if ( var_434 < var_66 && var_435 == var_67 ) {
		var_83[var_433][5] = 6;
	}
	if ( var_434 > var_66 && var_435 == var_67 ) {
		var_83[var_433][5] = 4;
	}
	if ( var_434 > var_66 && var_435 > var_67 ) {
		var_83[var_433][5] = 7;
	}
	if ( var_434 < var_66 && var_435 > var_67 ) {
		var_83[var_433][5] = 9;
	}
	if ( var_434 > var_66 && var_435 < var_67 ) {
		var_83[var_433][5] = 1;
	}
	if ( var_434 < var_66 && var_435 < var_67 ) {
		var_83[var_433][5] = 3;
	}
	return;
}
function func705(){
	if(!func){
		throw "";
	}
	var_2942 = var_83[var_402][5];
	var_214 = 1;
	var_437 = var_83[var_402][0];
	func626();
	if ( var_83[var_402][0] == 33 && var_2196 != 0 ) {
		var_209 = 0;
		if ( var_2307 >= 10 ) {
			var_2307 = var_2307 - 10;
		}
	}
	if ( var_83[var_402][0] == 73 && var_83[var_402][13] >= 1 && var_83[var_402][13] != 99 ) {
		var_209 = 999;
	}
	if ( var_83[var_402][31] == 5 && var_83[var_402][0] == 17 ) {
		var_209 = 1;
	}
	if ( var_2821 == 1 ) {
		if ( var_83[var_402][31] == 4 || var_83[var_402][31] == 5 ) {
			var_2821 = 0;
		}
	}
	if ( var_2821 == 0 ) {
		var_83[var_402][3] = var_83[var_402][3] - var_209;
	}
	if ( var_2821 == 1 ) {
		var_83[var_402][3] = var_83[var_402][3] + 20;
		var_2792 = var_438;
		if ( var_83[var_402][39] >= 2 ) {
			var_2792 = var_438 * (var_83[var_402][39] + 10) / 10;
			if ( var_83[var_402][3] >= 999 ) {
				var_83[var_402][3] = 999;
			}
		}
		if ( var_2792 < var_83[var_402][3] ) {
			var_83[var_402][3] = var_2792;
		}
	}
	var_748 = var_83[var_402][1] - var_66 + 4;
	var_749 = var_83[var_402][2] - var_67 + 4;
	if ( var_2196 == 0 && var_83[var_402][0] != 79 && var_83[var_402][23] == 0 ) {
		if ( var_83[var_402][1] == var_66 && var_83[var_402][2] > var_67 ) {
			var_83[var_402][5] = 8;
		}
		if ( var_83[var_402][1] == var_66 && var_83[var_402][2] < var_67 ) {
			var_83[var_402][5] = 2;
		}
		if ( var_83[var_402][1] < var_66 && var_83[var_402][2] == var_67 ) {
			var_83[var_402][5] = 6;
		}
		if ( var_83[var_402][1] > var_66 && var_83[var_402][2] == var_67 ) {
			var_83[var_402][5] = 4;
		}
		if ( var_83[var_402][1] > var_66 && var_83[var_402][2] > var_67 ) {
			var_83[var_402][5] = 7;
		}
		if ( var_83[var_402][1] < var_66 && var_83[var_402][2] > var_67 ) {
			var_83[var_402][5] = 9;
		}
		if ( var_83[var_402][1] > var_66 && var_83[var_402][2] < var_67 ) {
			var_83[var_402][5] = 1;
		}
		if ( var_83[var_402][1] < var_66 && var_83[var_402][2] < var_67 ) {
			var_83[var_402][5] = 3;
		}
		if ( var_83[var_402][5] == 2 ) {
			var_83[var_402][33] = 4;
		}
		if ( var_83[var_402][5] == 8 ) {
			var_83[var_402][33] = 6;
		}
		if ( var_83[var_402][5] == 4 ) {
			var_83[var_402][33] = 8;
		}
		if ( var_83[var_402][5] == 6 ) {
			var_83[var_402][33] = 2;
		}
	}
	if ( var_2196 == 0 ) {
		var_83[var_402][8] = 1;
	}
	if ( var_2196 == 1 ) {
		var_83[var_402][8] = 2;
	}
	if ( var_2196 == 2 ) {
		var_83[var_402][8] = 2;
	}
	if ( var_2196 == 3 ) {
		var_83[var_402][8] = 2;
	}
	if ( var_2195 == 0 ) {
		var_747 = 1;
		var_750 = 1;
		if ( var_2196 == 0 ) {
			func098();
		}
		if ( var_2196 == 1 ) {
			var_672 = var_83[var_673][0];
			func092();
		}
		for(var j=0; j<3; j++){
			func337();
		}
		var_437 = var_83[var_402][0];
		func626();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = var_403;
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		if ( var_2196 == 1 && var_83[var_2819][31] != 5 ) {
			var_25_1 = var_25[2];
			var_26_1 = var_26[2];
			var_27_1 = var_27[2];
		}
		for(var j=0; j<3; j++){
			func337();
		}
		var_437 = var_83[var_402][0];
		if ( var_83[var_402][0] == 97 && var_83[var_402][31] >= 11 ) {
			var_437 = var_83[var_402][31];
		}
		func626();
		if ( var_127 != 0 || var_132 != 0 ) {
			var_891 = "何者か";
		}
		if ( var_119 == 0 && var_270 != 166 && var_83[var_402][30] != 0 ) {
			var_891 = "何者か";
		}
		if ( var_2821 == 0 ) {
			var_294 = "" + var_891 + "に" + var_209 + "のダメージ！";
		}
		if ( var_209 == 999 ) {
			var_294 = "" + var_891 + "に致命的なダメージ！";
		}
		if ( var_2821 == 1 ) {
			var_294 = "" + var_891 + "の傷が埋められた";
		}
		var_198 = 1;
		var_300 = 0;
		func047();
	}
	if ( var_83[var_402][0] == 159 && var_83[var_402][20] == 0 && var_2821 == 0 ) {
		var_1550 = var_83[var_402][1];
		var_230 = var_83[var_402][2];
		var_768 = 1;
		var_2434 = 1;
		var_2413 = 1;
		func536();
		var_2413 = 0;
		var_768 = 0;
		var_2434 = 0;
	}
	if ( var_340 == 698 ) {
		for(var j=0; j<5; j++){
			func337();
		}
	}
	if ( var_83[var_402][28] >= 1 ) {
		var_83[var_402][28] = var_83[var_402][28] - 1;
	}
	if ( var_83[var_402][0] == 101 || var_83[var_402][0] == 102 || var_83[var_402][0] == 103 || var_83[var_402][0] == 104 ) {
		var_2946 = var_83[var_402][0];
		var_2947 = var_83[var_402][1];
		var_2948 = var_83[var_402][2];
		var_2949 = var_83[var_402][1] + 1;
		var_2950 = var_83[var_402][2] + 1;
		var_2951 = var_83[var_402][1] - 1;
		var_2952 = var_83[var_402][2] - 1;
	}
	for(var i=0; i<2; i++){
		func337();
	}
	if ( var_83[var_402][3] <= 0 ) {
		if ( var_62 == 1 && var_83[var_402][0] == 20 ) {
			func685();
		}
		if ( var_62 == 2 && var_83[var_402][0] == 132 ) {
			func686();
		}
		if ( var_62 == 3 && var_83[var_402][0] == 143 ) {
			func687();
		}
		if ( var_62 == 5 && var_83[var_402][16] >= 1000 ) {
			var_2921 = var_83[var_402][0];
			func633();
		}
		for(var j=0; j<2; j++){
			var_83[var_402][11] = 1;
			func337();
			var_83[var_402][11] = 0;
			if ( var_2196 == 0 ) {
				var_83[var_402][8] = 1;
			}
			if ( var_2196 == 1 ) {
				var_83[var_402][8] = 2;
			}
			func337();
		}
		if ( var_83[var_402][31] == 5 ) {
			if ( var_83[var_402][0] == 105 || var_83[var_402][0] == 106 || var_83[var_402][0] == 108 || var_83[var_402][0] == 36 || var_83[var_402][0] == 107 ) {
				if ( var_681 == 0 ) {
					func111();
				}
				if ( var_681 != 0 ) {
					var_684 = 0;
				}
			}
		}
		var_83[var_402][11] = 1;
		if ( var_83[var_402][27] != 0 ) {
			var_2954 = var_83[var_402][27];
			var_83[var_2954][28] = 0;
		}
		var_442 = var_83[var_402][1];
		var_443 = var_83[var_402][2];
		var_347 = var_83[var_402][1];
		var_348 = var_83[var_402][2];
		var_83[var_402][1] = 0;
		var_83[var_402][2] = 0;
		var_83[var_402][6] = 0;
		var_83[var_402][7] = 0;
		var_83[var_402][8] = 0;
		var_83[var_402][9] = 0;
		var_83[var_402][18] = 0;
		var_83[var_402][19] = 0;
		var_83[var_402][27] = 0;
		var_83[var_402][28] = 0;
		if ( var_83[var_402][0] == 73 && var_83[var_402][20] == 0 ) {
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
		if ( var_114 >= 1 && var_402 == var_114 ) {
			var_114 = 0;
		}
		if ( var_62 == 1 && var_83[var_402][0] == 20 ) {
			func689();
		}
		if ( var_94 == 1 && var_83[var_402][0] == 65 ) {
			func688();
		}
		if ( var_62 == 3 && var_83[var_402][0] == 143 ) {
			func689();
		}
		if ( var_62 == 2 && var_83[var_402][0] == 132 ) {
			func689();
		}
		if ( var_83[var_402][0] == 53 && var_2196 != 0 ) {
			var_3105 = 1;
		}
		if ( var_83[var_402][20] == 0 ) {
			if ( var_83[var_402][0] == 79 ) {
				var_2957 = 1;
				var_2958 = var_83[var_402][5];
			}
			if ( var_83[var_402][0] == 91 ) {
				var_2957 = 2;
			}
			if ( var_83[var_402][0] == 92 ) {
				var_2957 = 3;
			}
			if ( var_83[var_402][0] == 77 ) {
				var_2957 = 4;
			}
			if ( var_83[var_402][0] == 76 ) {
				var_2957 = 5;
			}
			if ( var_83[var_402][0] == 76 || var_83[var_402][0] == 77 ) {
				if ( var_62 == 99 ) {
					var_2959 = 0;
					if ( var_83[var_402][16] == 1 ) {
						var_2959 = 1;
					}
					if ( var_83[var_402][16] == 2 ) {
						var_2959 = 2;
					}
				}
			}
			if ( var_83[var_402][0] == 163 ) {
				var_2538 = var_83[var_402][5];
			}
			if ( var_83[var_402][0] == 6 && var_83[var_402][31] != 5 ) {
				var_186 = 165;
				func692();
			}
			if ( var_83[var_402][0] == 87 ) {
				var_186 = 164;
				func692();
			}
		}
		func676();
		if ( var_2196 == 0 ) {
			func340();
			var_437 = var_83[var_402][0];
			func626();
			var_2956 = var_954;
			if ( var_83[var_402][39] >= 2 ) {
				var_2956 = var_2956 * (var_83[var_402][39] + 10) / 10;
			}
			if ( var_160 == 1 ) {
				var_2956 = var_2956 * 3 / 2;
			}
			var_293 = var_296;
			var_294 = var_297;
			if ( var_127 != 0 || var_132 != 0 ) {
				var_891 = "何者か";
			}
			if ( var_119 == 0 && var_270 != 166 && var_83[var_402][30] != 0 ) {
				var_891 = "何者か";
			}
			var_296 = "" + var_891 + "をやっつけた";
			var_297 = "" + var_2956 + "の経験値を手に入れた";
			var_2945 = var_437;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<2; k++){
				func337();
			}
			var_568 = var_568 + var_2956;
			func680();
			if ( var_175 >= 1 || var_176 >= 1 ) {
				var_314 = var_402;
				func703();
			}
		}
		if ( var_2196 == 1 && var_83[var_673][31] == 5 && var_3106 == 0 && var_3107 == 0 ) {
			var_83[var_673][7] = 0;
			func340();
			var_2571 = var_83[var_402][0];
			var_437 = var_83[var_673][0];
			func626();
			var_3108 = var_891;
			var_437 = var_83[var_402][0];
			func626();
			var_2956 = var_954;
			if ( var_83[var_402][39] >= 2 ) {
				var_2956 = var_2956 * (var_83[var_402][39] + 10) / 10;
			}
			if ( var_160 == 1 ) {
				var_2956 = var_2956 * 3 / 2;
			}
			var_3109 = var_2956 / 2;
			if ( var_3109 == 0 ) {
				var_3109 = 1;
			}
			var_293 = var_296;
			var_294 = var_297;
			if ( var_127 != 0 || var_132 != 0 ) {
				var_891 = "何者か";
			}
			if ( var_119 == 0 && var_270 != 166 && var_83[var_402][30] != 0 ) {
				var_891 = "何者か";
			}
			var_296 = "" + var_3108 + "は";
			var_297 = "" + var_891 + "をやっつけた";
			var_2945 = var_437;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<6; k++){
				func337();
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "ディアボロは";
			if ( var_83[var_673][0] == 36 || var_83[var_673][0] == 105 || var_83[var_673][0] == 106 || var_83[var_673][0] == 107 || var_83[var_673][0] == 108 ) {
				var_296 = "ディアボロ達は";
			}
			var_297 = "" + var_3109 + "の経験値を手に入れた";
			var_2945 = var_437;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<2; k++){
				func337();
			}
			var_568 = var_568 + var_3109;
			func680();
			var_83[var_673][16] = var_83[var_673][16] + var_3109;
			if ( var_83[var_673][0] == 36 || var_83[var_673][0] == 105 || var_83[var_673][0] == 106 || var_83[var_673][0] == 107 || var_83[var_673][0] == 108 ) {
				func683();
			}
			if ( var_175 >= 1 || var_176 >= 1 ) {
				var_314 = var_402;
				func703();
			}
		}
		if ( var_3110 != 0 ) {
			var_83[var_402][7] = 0;
			func340();
			var_437 = var_83[var_402][0];
			func626();
			var_2956 = var_954;
			if ( var_83[var_402][39] >= 2 ) {
				var_2956 = var_2956 * (var_83[var_402][39] + 10) / 10;
			}
			if ( var_160 == 1 ) {
				var_2956 = var_2956 * 3 / 2;
			}
			var_3109 = var_2956 / 2;
			if ( var_3109 == 0 ) {
				var_3109 = 1;
			}
			var_293 = var_296;
			var_294 = var_297;
			var_296 = "ディアボロは";
			var_297 = "" + var_3109 + "の経験値を手に入れた";
			var_2945 = var_437;
			var_25_1 = var_25[1];
			var_26_1 = var_26[1];
			var_27_1 = var_27[1];
			func050();
			var_198 = 1;
			var_300 = 0;
			func047();
			for(var k=0; k<2; k++){
				func337();
			}
			var_568 = var_568 + var_3109;
			func680();
			if ( var_175 >= 1 || var_176 >= 1 ) {
				var_314 = var_402;
				func703();
			}
		}
		if ( var_2196 == 1 && var_83[var_673][0] != 0 && var_83[var_673][31] != 5 && var_83[var_673][31] != 4 && var_3105 == 0 && var_3110 == 0 && var_3106 == 0 && var_3107 == 0 ) {
			var_83[var_673][7] = 0;
			var_3111 = 0;
			if ( var_83[var_673][0] == 113 ) {
				if ( var_83[var_402][0] != 119 ) {
					var_3111 = 0;
				}
				if ( var_83[var_402][0] == 119 ) {
					var_3111 = 1;
					func340();
					var_83[var_673][0] = 114;
					var_437 = var_83[var_673][0];
					func626();
					var_83[var_673][3] = var_438;
					func094();
					var_293 = var_296;
					var_294 = var_297;
					var_296 = "DIO「なじむ　　実に！　　なじむぞ";
					var_297 = "　　フハフハフハ フハフハ フハフハハ」";
					var_25_1 = var_25[2];
					var_26_1 = var_26[2];
					var_27_1 = var_27[2];
					func050();
					var_198 = 1;
					var_300 = 0;
					func047();
					var_83[var_673][21] = 1;
					for(var m=0; m<10; m++){
						var_411 = 1;
						func337();
						var_411 = 2;
						func337();
						var_411 = 3;
						func337();
						var_411 = 2;
						func337();
						var_198 = 1;
						var_300 = 0;
					}
					var_411 = 0;
					var_83[var_673][21] = 0;
					func094();
					var_293 = var_296;
					var_294 = var_297;
					var_296 = "DIO「最高に『ハイ！』ってやつだアアアア";
					var_297 = "　　　アハハハハハハハハハハハーッ」";
					var_25_1 = var_25[2];
					var_26_1 = var_26[2];
					var_27_1 = var_27[2];
					func050();
					var_198 = 1;
					var_300 = 0;
					func047();
					for(var m=0; m<3; m++){
						func337();
					}
				}
			}
			if ( var_3111 == 0 ) {
				func340();
				var_83[var_673][39] = var_83[var_673][39] + 1;
				if ( var_83[var_673][39] == 1 ) {
					var_83[var_673][39] = 2;
				}
				var_437 = var_83[var_673][0];
				if ( var_83[var_673][0] == 97 && var_83[var_673][31] >= 11 ) {
					var_437 = var_83[var_673][31];
				}
				func626();
				var_83[var_673][3] = var_438 * (var_83[var_673][39] + 10) / 10;
				if ( var_83[var_673][3] >= 999 ) {
					var_83[var_673][3] = 999;
				}
				var_293 = var_296;
				var_294 = var_297;
				DSPLAY(142);
				if ( var_127 != 0 || var_132 != 0 ) {
					var_891 = "何者か";
				}
				var_296 = "" + var_891 + "は";
				var_297 = "レベルが上がった！";
				var_25_1 = var_25[2];
				var_26_1 = var_26[2];
				var_27_1 = var_27[2];
				func050();
				var_198 = 1;
				var_300 = 0;
				func047();
				for(var l=0; l<3; l++){
					func337();
				}
				if ( var_175 >= 1 || var_176 >= 1 ) {
					var_314 = var_402;
					func703();
				}
			}
		}
		if ( var_2196 == 1 ) {
			var_83[var_673][28] = 0;
		}
		var_82[var_347][var_348] = 0;
		var_83[var_402][0] = 0;
		var_83[var_402][9] = 0;
		var_83[var_402][18] = 0;
		if ( var_2957 >= 1 ) {
			func690();
		}
		if ( var_2538 >= 1 ) {
			func691();
		}
		func331();
	}
	if ( var_83[var_402][0] == 33 && var_2196 == 0 ) {
		var_83[var_402][0] = 34;
		var_83[var_402][31] = 1;
	}
	if ( var_83[var_402][20] == 0 && var_83[var_402][12] == 0 && var_83[var_402][13] == 0 && var_83[var_402][17] == 0 && var_163 == 0 && var_123 == 0 && var_151 == 0 ) {
		if ( var_83[var_402][0] == 121 && var_83[var_402][29] == 1 ) {
			var_314 = var_402;
			func658();
		}
		if ( var_83[var_402][0] == 6 || var_83[var_402][0] == 44 || var_83[var_402][0] == 14 || var_83[var_402][0] == 120 || var_83[var_402][0] == 133 || var_83[var_402][0] == 118 || var_83[var_402][0] == 84 ) {
			var_314 = var_402;
			func658();
		}
		if ( var_83[var_402][0] == 129 || var_83[var_402][0] == 161 || var_83[var_402][0] == 137 || var_83[var_402][0] == 143 || var_83[var_402][0] == 109 ) {
			var_314 = var_402;
			func658();
		}
		if ( var_83[var_402][0] == 153 ) {
			if ( var_2196 == 0 ) {
				var_314 = var_402;
				func658();
			}
		}
		if ( var_2937 == 1 && var_83[var_402][0] == 61 ) {
			if ( var_2196 == 0 ) {
				var_314 = var_402;
				func658();
			}
		}
		if ( var_83[var_402][0] == 116 && var_2196 == 0 ) {
			var_314 = var_402;
			func657();
		}
		if ( var_83[var_402][0] == 17 && var_83[var_402][3] < 2 ) {
			var_2890 = var_402;
			func698();
		}
		if ( var_83[var_402][0] == 164 || var_83[var_402][0] == 165 ) {
			var_1073 = rnd(3);
			if ( var_1073 == 0 ) {
				var_2965 = 1;
				var_314 = var_402;
				func669();
			}
		}
	}
	if ( var_83[var_402][0] == 132 || var_83[var_402][0] == 143 ) {
		var_314 = var_402;
		func659();
	}
	var_83[var_402][8] = 0;
	if ( var_83[var_402][13] != 0 ) {
		var_460 = var_402;
		func024();
	}
	if ( var_83[var_402][12] == 99 ) {
		var_83[var_402][12] = 0;
	}
	if ( var_2946 == 101 || var_2946 == 102 || var_2946 == 103 || var_2946 == 104 ) {
		if ( var_83[var_402][20] == 0 && var_2217 == 0 && var_2196 == 0 ) {
			if ( var_83[var_402][12] != 1 && var_83[var_402][12] != 2 && var_83[var_402][12] != 3 && var_83[var_402][12] != 4 && var_83[var_402][12] != 5 ) {
				func702();
			}
		}
	}
	var_750 = 0;
	if ( var_3105 == 1 && var_2196 == 1 ) {
		var_3101 = var_402;
		var_402 = var_673;
		var_3110 = var_402;
		var_3105 = 0;
		func696();
		var_3110 = 0;
		var_402 = var_3101;
	}
	if ( var_83[var_402][0] > 0 && var_83[var_402][4] == 6 ) {
		var_83[var_402][5] = var_2942;
	}
	if ( var_83[var_402][0] == 164 || var_83[var_402][0] == 165 ) {
		var_83[var_402][5] = var_2942;
	}
	var_2965 = 0;
	return;
}
function func706(func){
	if(!func){
		throw "";
	}
	funclist.push(func);
	var_281 = var_66 - 1;
	if ( var_281 < 0 ) {
		var_281 = 0;
	}
	var_282 = var_66 + 1;
	if ( var_282 > var_33 ) {
		var_282 = var_33;
	}
	var_283 = var_67 - 1;
	if ( var_283 < 0 ) {
		var_283 = 0;
	}
	var_284 = var_67 + 1;
	if ( var_284 > var_34 ) {
		var_284 = var_34;
	}
	var_3112 = 0;
	var_286 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_286][0] == 33 ) {
			var_3113 = var_83[var_286][1];
			var_3114 = var_83[var_286][2];
			if ( var_71[var_3113][var_3114] >= 1 && var_71[var_3113][var_3114] == var_201 ) {
				var_3112 = 1;
				break;
			}
		}
		var_286 = var_286 + 1;
	}
	if ( var_3112 == 1 && var_83[var_286][12] == 0 && var_83[var_286][13] == 0 ) {
		var_83[var_286][5] = 2;
		if ( var_83[var_286][1] < var_66 ) {
			var_83[var_286][5] = 6;
		}
		if ( var_83[var_286][1] > var_66 ) {
			var_83[var_286][5] = 4;
		}
		if ( var_83[var_286][2] < var_67 ) {
			var_83[var_286][5] = 2;
		}
		if ( var_83[var_286][2] > var_67 ) {
			var_83[var_286][5] = 8;
		}
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "レストラン・トラサルディーへようこそ！";
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		var_198 = 1;
		var_300 = 0;
		func047();
		func136();
		var_func706 = 10
		func337(func706_0);
		return;
	}
	funclist.pop()();
	return;
}
function func706_0(){
	var_func706--;
	if(var_func706 > 0){
		return func337(func706_0);
	}
	var_210 = 1;
	funclist.pop()();
}
function func707(){
	var_243 = 0;
	var_1009 = 0;
	var_449 = 0;
	for(var i=0; i<var_32; i++){
		var_447 = 0;
		for(var j=0; j<var_31; j++){
			if ( var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0 ) {
				var_3115 = var_77[var_447][var_449];
				if ( var_78[var_3115][11] == 0 ) {
					var_232 = var_78[var_3115][0];
					func492();
					var_2476 = var_483 / 2;
					var_482 = 0;
					var_482 = (var_78[var_3115][3] + var_78[var_3115][4]) * 50;
					if ( var_78[var_3115][0] != 800 ) {
						var_482 = var_78[var_3115][7] * 100 + var_482;
					}
					if ( var_78[var_3115][19] > 1 ) {
						var_482 = var_78[var_3115][19] * 500 + var_482;
					}
					var_1009 = var_1009 + var_2476 + var_482;
				}
				if ( var_78[var_3115][0] >= 800 && var_78[var_3115][0] < 900 ) {
					var_484 = 1;
					var_485 = var_78[var_3115][6];
					for(var m=0; m<10; m++){
						if ( var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 0 ) {
							var_232 = var_486[var_485][var_484][0];
							func492();
							var_2476 = var_483 / 2;
							var_482 = 0;
							var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
							if ( var_486[var_485][var_484][19] > 1 ) {
								var_482 = var_486[var_485][var_484][19] * 500 + var_482;
							}
							var_1009 = var_1009 + var_2476 + var_482;
						}
						var_484 = var_484 + 1;
					}
				}
			}
			var_447 = var_447 + 1;
		}
		var_449 = var_449 + 1;
	}
	var_480 = 1;
	var_481 = 0;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_480][11] == 1 ) {
			var_232 = var_233[var_480][0];
			func492();
			var_482 = 0;
			var_482 = (var_233[var_480][3] + var_233[var_480][4]) * 50;
			if ( var_233[var_480][0] != 800 ) {
				var_482 = var_233[var_480][7] * 100 + var_482;
			}
			if ( var_233[var_480][19] > 1 ) {
				var_482 = var_233[var_480][19] * 500 + var_482;
			}
			var_481 = var_481 + var_483 + var_482;
		}
		if ( var_233[var_480][0] >= 800 && var_233[var_480][0] < 900 ) {
			var_484 = 1;
			var_485 = var_233[var_480][6];
			for(var k=0; k<10; k++){
				if ( var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1 ) {
					var_232 = var_486[var_485][var_484][0];
					func492();
					var_482 = 0;
					var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
					if ( var_486[var_485][var_484][19] > 1 ) {
						var_482 = var_486[var_485][var_484][19] * 500 + var_482;
					}
					var_481 = var_481 + var_483 + var_482;
				}
				var_484 = var_484 + 1;
			}
		}
		var_480 = var_480 + 1;
	}
	var_449 = 0;
	for(var i=0; i<var_32; i++){
		var_447 = 0;
		for(var j=0; j<var_31; j++){
			if ( var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0 ) {
				var_3115 = var_77[var_447][var_449];
				if ( var_78[var_3115][11] == 1 ) {
					var_232 = var_78[var_3115][0];
					func492();
					var_482 = 0;
					var_482 = (var_78[var_3115][3] + var_78[var_3115][4]) * 50;
					if ( var_78[var_3115][0] != 800 ) {
						var_482 = var_78[var_3115][7] * 100 + var_482;
					}
					if ( var_78[var_3115][19] > 1 ) {
						var_482 = var_78[var_3115][19] * 500 + var_482;
					}
					var_481 = var_481 + var_483 + var_482;
				}
				if ( var_78[var_3115][0] >= 800 && var_78[var_3115][0] < 900 ) {
					var_484 = 1;
					var_485 = var_78[var_3115][6];
					for(var m=0; m<10; m++){
						if ( var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1 ) {
							var_232 = var_486[var_485][var_484][0];
							func492();
							var_482 = 0;
							var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
							if ( var_486[var_485][var_484][19] > 1 ) {
								var_482 = var_486[var_485][var_484][19] * 500 + var_482;
							}
							var_481 = var_481 + var_483 + var_482;
						}
						var_484 = var_484 + 1;
					}
				}
			}
			var_447 = var_447 + 1;
		}
		var_449 = var_449 + 1;
	}
	var_481 = var_481 + var_107;
	var_3116 = var_82[var_1000][var_1001];
	if ( var_83[var_3116][12] == 1 || var_83[var_3116][13] == 1 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "・・・・・・・・";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		for(var j=0; j<6; j++){
			func337();
		}
		var_217 = 1;
		return func019();
	}
	if ( var_1009 > 0 ) {
		return func708();
	}
	if ( var_481 > 0 ) {
		return func709();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "レストラン・トラサルディーへようこそ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<6; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func708(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "店内に置いたアイテムを";
	var_294 = "" + var_1009 + "G で引き取りマス";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<6; i++){
		func337();
	}
	var_1202 = 1;
	var_3117 = 1;
	return func712();
}
function func709(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "お買い物金額の合計は";
	var_294 = "" + var_481 + "G になりマス";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<6; i++){
		func337();
	}
	var_1202 = 1;
	var_3117 = 2;
	return func710();
}
function func710(){
	var_3118 = 1;
	var_515 = 19;
	var_516 = 45;
	func711()	// 追加;
}
function func711(){
	func337();
	func080();
	if ( var_259 == 1 && var_3118 == 1 ) {
		var_516 = var_516 + 19;
		var_3118 = 0;
		func337();
	}
	if ( var_255 == 1 && var_3118 == 0 ) {
		var_516 = var_516 - 19;
		var_3118 = 1;
		func337();
	}
	if ( var_242 == 1 || var_244 == 1 ) {
		if ( var_3118 == 1 ) {
			func051();
			return func716();
		}
		if ( var_3118 == 0 ) {
			func051();
			return func717();
		}
	}
	if ( var_239 == 1 ) {
		func051();
		return func717();
	}
	var_198 = 1;
	var_300 = 0;
	return func711();
}
function func712(){
	var_3118 = 1;
	var_515 = 19;
	var_516 = 45;
	func713()	// 追加;
}
function func713(){
	func337();
	func080();
	if ( var_259 == 1 && var_3118 == 1 ) {
		var_516 = var_516 + 19;
		var_3118 = 0;
		func337();
	}
	if ( var_255 == 1 && var_3118 == 0 ) {
		var_516 = var_516 - 19;
		var_3118 = 1;
		func337();
	}
	if ( var_242 == 1 || var_244 == 1 ) {
		if ( var_3118 == 1 ) {
			func051();
			return func715();
		}
		if ( var_3118 == 0 && var_481 > 0 ) {
			func051();
			var_198 = 0;
			var_1202 = 0;
			for(var k=0; k<6; k++){
				func337();
			}
			return func709();
		}
		if ( var_3118 == 0 ) {
			func051();
			return func717();
		}
	}
	if ( var_239 == 1 && var_481 > 0 ) {
		func051();
		var_198 = 0;
		var_1202 = 0;
		for(var j=0; j<6; j++){
			func337();
		}
		return func709();
	}
	if ( var_239 == 1 ) {
		func051();
		return func717();
	}
	var_198 = 1;
	var_300 = 0;
	return func713();
}
function func714(){
	color(0, 0, 0);
	gmode(4, null, null, 100);
	pos(12, 37);
	gcopy(12, 0, 0, 113, 53);
	color(255, 255, 255);
	line(15, 39, 120, 39);
	line(15, 86, 120, 86);
	line(14, 40, 14, 84);
	line(122, 40, 122, 84);
	pset(15, 40);
	pset(121, 40);
	pset(15, 85);
	pset(121, 85);
	font("ＭＳ Ｐゴシック", 16, 1);
	color(255, 255, 255);
	pos(33, 47);
	if ( var_3117 == 1 ) {
		mes("売る");
	}
	if ( var_3117 == 2 ) {
		mes("買う");
	}
	mes("やめる");
	color(255, 255, 255);
	font("MS ゴシック", 16, 1);
	pos(var_515, var_516);
	mes(">");
	pos(var_515 + 1, var_516);
	mes(">");
	pos(var_515 + 2, var_516);
	mes(">");
	gmode(2);
	return;
}
function func715(){
	var_415 = var_415 + var_1009;
	if ( var_415 > 999999 ) {
		var_415 = 999999;
	}
	var_1009 = 0;
	var_449 = 0;
	for(var i=0; i<var_32; i++){
		var_447 = 0;
		for(var j=0; j<var_31; j++){
			if ( var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0 ) {
				var_3115 = var_77[var_447][var_449];
				if ( var_78[var_3115][0] > 1 ) {
					var_78[var_3115][11] = 1;
				}
				if ( var_78[var_3115][0] >= 800 && var_78[var_3115][0] < 900 ) {
					var_484 = 1;
					var_485 = var_78[var_3115][6];
					for(var m=0; m<10; m++){
						if ( var_486[var_485][var_484][0] > 1 ) {
							var_486[var_485][var_484][11] = 1;
						}
						var_484 = var_484 + 1;
					}
				}
			}
			var_447 = var_447 + 1;
		}
		var_449 = var_449 + 1;
	}
	DSPLAY(139);
	return func718();
}
function func716(){
	var_3119 = var_415;
	var_415 = var_415 - var_481;
	if ( var_415 < 0 ) {
		var_415 = var_3119;
		return func719();
	}
	var_481 = 0;
	func720();
	var_106 = 0;
	var_107 = 0;
	DSPLAY(139);
	return func718();
}
function func717(){
	var_198 = 0;
	var_300 = 0;
	var_1202 = 0;
	var_217 = 1;
	return func019();
}
function func718(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ありがとうございました";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_1202 = 0;
	for(var i=0; i<6; i++){
		func337();
	}
	if ( var_481 > 0 ) {
		return func709();
	}
	var_217 = 1;
	return func019();
}
function func719(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "お金が足りませんヨ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_1202 = 0;
	for(var i=0; i<6; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func720(){
	var_480 = 1;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_480][11] == 1 ) {
			var_233[var_480][11] = 0;
		}
		if ( var_233[var_480][0] >= 800 && var_233[var_480][0] < 900 ) {
			var_484 = 1;
			var_485 = var_233[var_480][6];
			for(var k=0; k<10; k++){
				if ( var_486[var_485][var_484][11] == 1 ) {
					var_486[var_485][var_484][11] = 0;
				}
				var_484 = var_484 + 1;
			}
		}
		var_480 = var_480 + 1;
	}
	var_449 = 0;
	for(var i=0; i<var_32; i++){
		var_447 = 0;
		for(var j=0; j<var_31; j++){
			if ( var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0 ) {
				var_3115 = var_77[var_447][var_449];
				if ( var_78[var_3115][11] == 1 ) {
					var_78[var_3115][11] = 0;
				}
				if ( var_78[var_3115][0] >= 800 && var_78[var_3115][0] < 900 ) {
					var_484 = 1;
					var_485 = var_78[var_3115][6];
					for(var m=0; m<10; m++){
						if ( var_486[var_485][var_484][11] == 1 ) {
							var_486[var_485][var_484][11] = 0;
						}
						var_484 = var_484 + 1;
					}
				}
			}
			var_447 = var_447 + 1;
		}
		var_449 = var_449 + 1;
	}
	return;
}
function func721(){
	var_480 = 1;
	var_1008 = 0;
	if ( var_107 >= 1 ) {
		var_1008 = 1;
	}
	for(var i=0; i<var_224; i++){
		if ( var_233[var_480][11] == 1 ) {
			var_1008 = var_1008 + 1;
		}
		if ( var_233[var_480][0] >= 800 && var_233[var_480][0] < 900 ) {
			var_484 = 1;
			var_485 = var_233[var_480][6];
			for(var k=0; k<10; k++){
				if ( var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1 ) {
					var_1008 = var_1008 + 1;
				}
				var_484 = var_484 + 1;
			}
		}
		var_480 = var_480 + 1;
	}
	var_449 = 0;
	for(var i=0; i<var_32; i++){
		var_447 = 0;
		for(var j=0; j<var_31; j++){
			if ( var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0 ) {
				var_3115 = var_77[var_447][var_449];
				if ( var_78[var_3115][11] == 1 ) {
					var_1008 = var_1008 + 1;
				}
				if ( var_78[var_3115][0] >= 800 && var_78[var_3115][0] < 900 ) {
					var_484 = 1;
					var_485 = var_78[var_3115][6];
					for(var m=0; m<10; m++){
						if ( var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1 ) {
							var_1008 = var_1008 + 1;
						}
						var_484 = var_484 + 1;
					}
				}
			}
			var_447 = var_447 + 1;
		}
		var_449 = var_449 + 1;
	}
	return;
}
function func722(){
	if(!func){
		throw "";
	}
	func137();
	if ( var_72[var_66][var_67] >= 1 ) {
		return;
	}
	if ( var_85 == 1 ) {
		return;
	}
	func721();
	if ( var_1008 == 0 ) {
		return;
	}
	var_1010 = 0;
	var_3120 = 1;
	for(var i=0; i<var_97; i++){
		if ( var_83[var_3120][0] == 33 ) {
			var_83[var_3120][0] = 34;
			var_83[var_3120][12] = 0;
			var_83[var_3120][13] = 0;
			var_83[var_3120][31] = 1;
			var_1010 = 1;
		}
		if ( var_83[var_3120][0] == 34 ) {
			var_83[var_3120][12] = 0;
			var_83[var_3120][13] = 0;
			var_1010 = 1;
		}
		var_3120 = var_3120 + 1;
	}
	if ( var_1010 == 0 ) {
		return;
	}
	var_85 = 1;
	DSPLAY(150);
	func132();
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ドロボーーー！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[3];
	var_26_1 = var_26[3];
	var_27_1 = var_27[3];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ただじゃあおきませンッ！";
	var_297 = "";
	var_25_1 = var_25[3];
	var_26_1 = var_26[3];
	var_27_1 = var_27[3];
	func047();
	func050();
	var_198 = 1;
	var_300 = 0;
	for(var i=0; i<12; i++){
		func556();
	}
	for(var i=0; i<5; i++){
		func337();
	}
	return;
}
function func723(){
	var_862 = dim(1000, 4);
	var_480 = 1;
	var_3121 = 0;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_480][0] != 0 ) {
			var_3121++;
			var_3122 = var_233[var_480][0];
			var_862[var_3122][0] = 1;
			var_233[var_480][14] = 1;
		}
		if ( var_233[var_480][0] >= 800 && var_233[var_480][0] < 900 ) {
			var_484 = 1;
			var_485 = var_233[var_480][6];
			for(var k=0; k<10; k++){
				if ( var_486[var_485][var_484][0] != 0 ) {
					var_3121++;
					var_3122 = var_486[var_485][var_484][0];
					var_862[var_3122][0] = 1;
					var_486[var_485][var_484][14] = 1;
				}
				var_484 = var_484 + 1;
			}
		}
		var_480 = var_480 + 1;
	}
	return;
}
function func724(){
	var_3123 = 0;
	var_3124 = 1;
	for(var i=0; i<299; i++){
		if ( var_78[var_3124][0] == 0 ) {
			var_854 = var_3124;
			var_3123 = 1;
			break;
		}
		var_3124++;
	}
	if ( var_3123 == 1 ) {
		for(var j=0; j<30; j++){
			var_78[var_854][j] = 0;
		}
		if ( var_336 < var_854 ) {
			var_336 = var_854;
		}
		var_194 = var_854;
	}
	return;
}
function func725(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3125 = rnd(5);
	if ( var_3125 == 0 ) {
		var_293 = "…おまえ｢パーマン｣知らねーのか？";
		var_294 = "";
	}
	if ( var_3125 == 1 ) {
		var_293 = "この人形の｢スタンド｣の名は";
		var_294 = "『ＳＵＲＦＡＣＥ（うわっ面）』…";
	}
	if ( var_3125 == 2 ) {
		var_293 = "おれの体力はオマエの";
		var_294 = "最大体力と同じだぜ。";
	}
	if ( var_3125 == 3 ) {
		var_293 = "同じ価値観を持った者同士…";
		var_294 = "それが『仲間』っつーもんだ";
	}
	if ( var_3125 == 4 ) {
		var_293 = "おれの防御力はオマエの";
		var_294 = "防御力と同じだぜ。";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func726(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3125 = rnd(7);
	if ( var_3125 == 0 ) {
		var_293 = "ぶばはははははあ";
		var_294 = "";
	}
	if ( var_3125 == 1 ) {
		var_293 = "バギィイ——ッ";
		var_294 = "";
	}
	if ( var_3125 == 2 ) {
		var_293 = "ぶきィィィーッ";
		var_294 = "";
	}
	if ( var_3125 == 3 ) {
		var_293 = "ノシェーーーッ";
		var_294 = "";
	}
	if ( var_3125 == 4 ) {
		var_293 = "アギ　　アギ";
		var_294 = "　　アギッ　アギッ　アギィィ———ッ";
	}
	if ( var_3125 == 5 ) {
		var_293 = "ウケッウケッウケッ";
		var_294 = "ケケケケケケ——————ッ";
	}
	if ( var_3125 == 6 ) {
		var_293 = "ガルルルルーッ";
		var_294 = "";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func727(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3125 = rnd(2);
	if ( var_3125 == 0 ) {
		var_293 = "キュルキュルキュルキュル";
		var_294 = "";
	}
	if ( var_3125 == 1 ) {
		var_293 = "ギャルギャルギャルギャル";
		var_294 = "";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func728(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3125 = rnd(5);
	if ( var_3125 == 0 ) {
		var_293 = "こんなところ　はやく出よう･･･";
		var_294 = "";
	}
	if ( var_3125 == 1 ) {
		var_293 = "こんなところ　はやく出よう･･･";
		var_294 = "";
	}
	if ( var_3125 == 2 ) {
		var_293 = "こんなところ　はやく出よう･･･";
		var_294 = "";
	}
	if ( var_3125 == 3 ) {
		var_293 = "こんなところ　はやく出よう･･･";
		var_294 = "";
	}
	if ( var_3125 == 4 ) {
		var_293 = "こんなところ　はやく出よう･･･";
		var_294 = "";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func729(){
	var_437 = var_83[var_3072][0];
	func626();
	var_1331 = var_438;
	if ( var_83[var_3072][39] >= 2 ) {
		var_1331 = var_438 * (var_83[var_3072][39] + 10) / 10;
		if ( var_1331 >= 999 ) {
			var_1331 = 999;
		}
	}
	var_1332 = var_83[var_3072][3] * 100 / var_1331;
	return;
}
function func730(){
	var_243 = 0;
	var_3072 = var_314;
	if ( var_83[var_3072][31] == 5 ) {
		return func733();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "おれぁ おせっかい焼きのｽﾋﾟｰﾄﾞﾜｺﾞﾝ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "あまちゃんのあんたが好きだから";
	var_297 = "くっついて行ってもいいぜ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3126 = 1;
	var_548 = 1;
	return func839();
}
function func731(){
	var_83[var_3072][31] = 5;
	var_83[var_3072][14] = 0;
	var_1033 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝが仲間になった！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func125();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "よろしくなッ！";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func732(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝはｸｰﾙに去るぜ";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func733(){
	func729();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3125 = rnd(3);
	if ( var_2571 == 0 ) {
		var_3125 = rnd(2);
	}
	if ( var_3125 == 0 ) {
		if ( var_1332 < 10 ) {
			var_293 = "うう…このキズは…急所だ…！";
			var_294 = "";
		}
		if ( var_1332 >= 10 && var_1332 < 30 ) {
			var_293 = "やめりゃあよかった!こんなﾀﾌｶﾞｲに";
			var_294 = "ケンカふっかけるのはよォ！";
		}
		if ( var_1332 >= 30 && var_1332 < 60 ) {
			var_293 = "こんなもんカスリ傷だぜッ！";
			var_294 = "…イ、イデーイデー！つ…杖！";
		}
		if ( var_1332 >= 60 && var_1332 < 80 ) {
			var_293 = "ここまで首をつっこんだんだ！";
			var_294 = "黙っているのは性分じゃねえからな";
		}
		if ( var_1332 >= 80 && var_1332 < 100 ) {
			var_293 = "俺は物を盗むが";
			var_294 = "こいつらは命を盗む！許せねえ！";
		}
		if ( var_1332 >= 100 ) {
			var_293 = "この紳士に手を出すことは…";
			var_294 = "このスピードワゴンが許さねえ！";
		}
	}
	if ( var_3125 == 1 ) {
		var_3088 = var_83[var_3072][16];
		var_3089 = var_83[var_3072][39];
		func682();
		if ( var_3073 < 99999 ) {
			var_293 = "あと" + var_3073 + "くらいで";
			var_294 = "もっと強くなれる気がするぜ！";
		}
		if ( var_3073 >= 99999 ) {
			var_293 = "おれの強さはこれが限界だ！";
			var_294 = "";
		}
		func125();
	}
	if ( var_3125 == 2 ) {
		var_437 = var_2571;
		func626();
		var_3125 = rnd(3);
		if ( var_3125 == 0 ) {
			var_293 = "" + var_891 + "は死んだッ！";
			var_294 = "大げさかもしれんが世界は救われたッ！";
		}
		if ( var_3125 == 1 ) {
			var_293 = "" + var_891 + "は臭えーッ！";
			var_294 = "ゲロ以下のニオイがﾌﾟﾝﾌﾟﾝするぜーッ！";
		}
		if ( var_3125 == 2 ) {
			var_293 = "気をつけな！";
			var_294 = "" + var_891 + "はこすずるいぜ！";
		}
	}
	if ( var_83[var_3072][3] == 1 ) {
		var_293 = "礼は　戦いが終わって";
		var_294 = "生きのびてから言えってんだ…";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func734(){
	var_243 = 0;
	var_3072 = var_314;
	var_437 = var_83[var_3072][0];
	func626();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_891 + "「・・・・」";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func735(){
	var_243 = 0;
	var_3072 = var_314;
	var_437 = var_83[var_3072][0];
	func626();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_891 + "は";
	var_294 = "話せる状態ではないようだ…";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func736(){
	var_374 = 1;
	var_772 = 1;
	var_777 = 1;
	for(var i=0; i<6; i++){
		func337();
		var_777++;
	}
	var_777 = 0;
	var_772 = 0;
	var_1201 = 1;
	func737()	// 追加;
}
function func737(){
	func337();
	func080();
	if ( var_259 == 1 || var_242 == 1 || var_239 == 1 || var_244 == 1 || var_252 == 1 ) {
		var_1201 = 0;
		var_374 = 1;
		var_772 = 1;
		var_773 = 7;
		for(var j=0; j<9; j++){
			func337();
			var_773++;
		}
		var_773 = 0;
		var_772 = 0;
		var_374 = 0;
		var_199 = 2;
		return func009();
	}
	return func737();
}
function func738(){
	var_243 = 0;
	var_3072 = var_314;
	if ( var_83[var_3072][31] == 5 ) {
		return func741();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「イギー」";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "（しょうがないからついて行ってやるか）";
	var_297 = "と考えているようだ。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3127 = 1;
	var_548 = 1;
	return func839();
}
function func739(){
	var_83[var_3072][31] = 5;
	var_83[var_3072][14] = 0;
	var_1033 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "イギーが仲間になった！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func128();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "（もたもたするなッ！マヌケ！！）";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func740(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「フン！」";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func741(){
	func729();
	var_3128 = var_83[var_3072][1];
	var_3129 = var_83[var_3072][2];
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3130 = 0;
	var_3125 = rnd(4);
	if ( var_2571 == 0 ) {
		var_3125 = rnd(3);
	}
	if ( var_3125 == 0 ) {
		if ( var_180 == 0 && var_73[var_3128][var_3129] == 0 && var_80[var_3128][var_3129] == 0 && var_77[var_3128][var_3129] == 0 ) {
			var_293 = "ここに砂のDIOを潜ませてやろうか？";
			var_294 = "";
			var_3130 = 1;
		}
		if ( var_3130 == 0 ) {
			var_3125 = rnd(3);
			if ( var_2571 == 0 ) {
				var_3125 = rnd(2);
			}
			var_3125 = var_3125 + 1;
		}
	}
	if ( var_3125 == 1 ) {
		if ( var_1332 < 10 ) {
			var_293 = "(ガフッ…ググ…ニヤリ)";
			var_294 = "";
		}
		if ( var_1332 >= 10 && var_1332 < 30 ) {
			var_293 = "(な…なんのトラブルもない人生を送る";
			var_294 = "ハズだったのに…ミスったぜ…)";
		}
		if ( var_1332 >= 30 && var_1332 < 60 ) {
			var_293 = "(クソー、手加減なしの凶暴なヤツだ…)";
			var_294 = "";
		}
		if ( var_1332 >= 60 && var_1332 < 80 ) {
			var_293 = "(やれやれ…犬好きは見殺しには";
			var_294 = "できねーぜッ！)";
		}
		if ( var_1332 >= 80 && var_1332 < 100 ) {
			var_293 = "(うるせーな、犬の俺に聞くな！)";
			var_294 = "";
		}
		if ( var_1332 >= 100 ) {
			var_293 = "(くるなら来いッ！ブッ殺してやる！)";
			var_294 = "";
		}
	}
	if ( var_3125 == 2 ) {
		var_3088 = var_83[var_3072][16];
		var_3089 = var_83[var_3072][39];
		func682();
		if ( var_3073 < 99999 ) {
			var_293 = "(あと" + var_3073 + "くらいで";
			var_294 = "もっと強くなれる気がするぜ！)";
		}
		if ( var_3073 >= 99999 ) {
			var_293 = "(おれの強さはこれが限界だ！)";
			var_294 = "";
		}
		func128();
	}
	if ( var_3125 == 3 ) {
		var_437 = var_2571;
		func626();
		var_3125 = rnd(3);
		if ( var_3125 == 0 ) {
			var_293 = "や…やった、やっつけたぞ";
			var_294 = "" + var_891 + "め…";
		}
		if ( var_3125 == 1 ) {
			var_293 = "かかってきやがれ";
			var_294 = "" + var_891 + "め！";
		}
		if ( var_3125 == 2 ) {
			var_293 = "やり〜！" + var_891 + "め";
			var_294 = "頭悪いぜッ！";
		}
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	func340();
	func051();
	if ( var_3130 == 0 ) {
		var_198 = 0;
		return func009();
	}
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3131 = 1;
	var_548 = 1;
	return func839();
}
function func742(){
	var_180 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｲｷﾞｰは足元に砂のDIOを潜ませた。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_768 = 1;
	var_1550 = var_3128;
	var_230 = var_3129;
	var_2419 = 1;
	func536();
	var_2419 = 0;
	var_768 = 0;
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func743(){
	var_243 = 0;
	var_3072 = var_314;
	if ( var_83[var_3072][31] == 5 ) {
		return func746();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "わたしはツェペリ男爵だ。";
	var_294 = "勇気だけでは勝てんよォ——";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "そして私は味方だ。";
	var_297 = "ディアボロ君。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3132 = 1;
	var_548 = 1;
	return func839();
}
function func744(){
	var_83[var_3072][31] = 5;
	var_83[var_3072][14] = 0;
	var_1033 = 1;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾂｪﾍﾟﾘさんが仲間になった！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func124();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "君は｢仙道｣を学ばなければならんッ！";
	var_297 = "さもないと死ぬッ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func745(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ハブショッ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func746(){
	func729();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3133 = 0;
	var_3125 = rnd(4);
	if ( var_2571 == 0 ) {
		var_3125 = rnd(3);
	}
	if ( var_3125 == 0 ) {
		if ( var_130 == 0 ) {
			var_293 = "軽い波紋を作れるようにしてやろうか？";
			var_294 = "";
			var_3133 = 1;
		}
		if ( var_130 != 0 ) {
			var_3125 = rnd(3);
			if ( var_2571 == 0 ) {
				var_3125 = rnd(2);
			}
			var_3125 = var_3125 + 1;
		}
	}
	if ( var_3125 == 1 ) {
		if ( var_1332 < 10 ) {
			var_293 = "ま…まるで親友と息子を同時に";
			var_294 = "持ったような気持ちだぞ…";
		}
		if ( var_1332 >= 10 && var_1332 < 30 ) {
			var_293 = "ついに　ついにきたか";
			var_294 = "あの予言の時が…";
		}
		if ( var_1332 >= 30 && var_1332 < 60 ) {
			var_293 = "やれやれ…こいつらの魂を";
			var_294 = "解き放つのは骨が折れそうじゃわい";
		}
		if ( var_1332 >= 60 && var_1332 < 80 ) {
			var_293 = "戦いの思考２！勇気とは怖さを知る事！";
			var_294 = "恐怖を我が物とすることじゃあッ！";
		}
		if ( var_1332 >= 80 && var_1332 < 100 ) {
			var_293 = "戦いの思考１！相手の立場になって";
			var_294 = "考える…これは大事じゃぞ！";
		}
		if ( var_1332 >= 100 ) {
			var_293 = "ゆくぞディアボロ君！";
			var_294 = "ところでコルク抜きもってなぁい？";
		}
	}
	if ( var_3125 == 2 ) {
		var_3088 = var_83[var_3072][16];
		var_3089 = var_83[var_3072][39];
		func682();
		if ( var_3073 < 99999 ) {
			var_293 = "あと" + var_3073 + "くらいで";
			var_294 = "もっと強くなれるだろう";
		}
		if ( var_3073 >= 99999 ) {
			var_293 = "私の強さはこれが限界のようだ。";
			var_294 = "";
		}
		func124();
	}
	if ( var_3125 == 3 ) {
		var_437 = var_2571;
		func626();
		var_3125 = rnd(3);
		if ( var_3125 == 0 ) {
			var_293 = "" + var_891 + "なんぞ";
			var_294 = "ノミと同類よォー！";
		}
		if ( var_3125 == 1 ) {
			var_293 = "波紋エネルギーをぶつければ";
			var_294 = "吸血鬼どもは砕け散るッ！！";
		}
		if ( var_3125 == 2 ) {
			var_293 = "どうだディアボロ君";
			var_294 = "これが「仙道」だ！";
		}
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	func340();
	func051();
	if ( var_3133 == 0 ) {
		var_198 = 0;
		return func009();
	}
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3134 = 1;
	var_548 = 1;
	return func839();
}
function func747(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "パウッ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_742 = 1;
	var_83[var_3072][7] = 1;
	var_271 = 1;
	for(var i=0; i<12; i++){
		func337();
		if ( i == 3 ) {
			var_1514 = 1;
			var_747 = 1;
			var_389 = 2;
		}
		if ( i >= 3 ) {
			var_1514++;
		}
	}
	var_1514 = 0;
	var_271 = 0;
	var_83[var_3072][7] = 0;
	var_389 = 0;
	for(var i=0; i<10; i++){
		func337();
	}
	var_3135 = rnd(2);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_3135 == 0 ) {
		var_293 = "ちょいとミスった";
		var_294 = "指がスベっちゃった　いやごめん！";
		var_211 = var_211 / 2 + 1;
	}
	if ( var_3135 == 1 ) {
		var_293 = "しばらく呼吸はできん……";
		var_294 = "が……心配はいらん";
		var_125 = 1;
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func748(){
	var_243 = 0;
	var_3072 = var_314;
	if ( var_181 == 1 ) {
		return func750();
	}
	if ( var_83[var_3072][31] == 5 ) {
		return func752();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "あっ！兄貴ィ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "おれも連れてってくれよ！";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3136 = 1;
	var_548 = 1;
	return func839();
}
function func749(){
	var_181 = 1;
	var_243 = 1;
	for(var i=0; i<3; i++){
		func337();
	}
	var_747 = 1;
	func091();
	var_2937 = 1;
	var_455 = var_347;
	var_456 = var_348;
	func660();
	var_2937 = 0;
	var_347 = var_1894;
	var_348 = var_1895;
	var_243 = 0;
	var_217 = 1;
	return func019();
}
function func750(){
	var_181 = 0;
	var_83[var_3072][31] = 5;
	var_83[var_3072][14] = 0;
	var_1033 = 1;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "な！？";
	var_294 = "なんでイキナリ殴るんだよォ——";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "はッ！";
	var_297 = "・・・そ、そうか！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "兄貴はオレの事を思って殴ったんだね？";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "さすが兄貴だあッ！";
	var_297 = "どこまでも ついてきますぜッ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func126();
	for(var i=0; i<5; i++){
		func337();
	}
	return func009();
}
function func751(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "そッ！　そんなッ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<5; i++){
		func337();
	}
	var_217 = 1;
	return func019();
}
function func752(){
	func729();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3130 = 0;
	var_3125 = rnd(4);
	if ( var_2571 == 0 ) {
		var_3125 = rnd(3);
	}
	if ( var_3125 == 0 ) {
		if ( var_191 == 0 ) {
			var_293 = "兄貴ィ！";
			var_294 = "釣りでもしてみますかい？";
			var_3130 = 1;
		}
		if ( var_191 != 0 ) {
			var_293 = "また釣りかい？";
			var_294 = "少し休ませてくれよ…";
		}
	}
	if ( var_3125 == 1 ) {
		if ( var_1332 < 10 ) {
			var_293 = "ゴメンよ兄貴…";
			var_294 = "俺、やっぱ足手まといだったなぁ…";
		}
		if ( var_1332 >= 10 && var_1332 < 30 ) {
			var_293 = "うわぁぁん！";
			var_294 = "い、痛ぇーーー！";
		}
		if ( var_1332 >= 30 && var_1332 < 60 ) {
			var_293 = "兄貴ィ〜、痛ェよ〜";
			var_294 = "回復してくれよォ〜";
		}
		if ( var_1332 >= 60 && var_1332 < 80 ) {
			var_293 = "兄貴ィ〜…あ、あてにしねーでくれよ";
			var_294 = "俺なんかの勘をよォー";
		}
		if ( var_1332 >= 80 && var_1332 < 100 ) {
			var_293 = "あ、兄貴ィ〜";
			var_294 = "本当に行くのかい？";
		}
		if ( var_1332 >= 100 ) {
			var_293 = "ブッ殺してやるッ！！";
			var_294 = "";
		}
	}
	if ( var_3125 == 2 ) {
		var_3088 = var_83[var_3072][16];
		var_3089 = var_83[var_3072][39];
		func682();
		if ( var_3073 < 99999 ) {
			var_293 = "あと" + var_3073 + "くらいで";
			var_294 = "もっと強くなれるよ兄貴ィッ！";
		}
		if ( var_3073 >= 99999 ) {
			var_293 = "俺の強さはこれが限界だァ〜";
			var_294 = "";
		}
		func126();
	}
	if ( var_3125 == 3 ) {
		var_437 = var_2571;
		func626();
		var_3125 = rnd(2);
		if ( var_3125 == 0 ) {
			var_293 = "" + var_891 + "を";
			var_294 = "｢ブッ殺した｣！";
		}
		if ( var_3125 == 1 ) {
			var_293 = "俺でも何とか";
			var_294 = "" + var_891 + "を倒せたぜ！";
		}
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	func340();
	func051();
	if ( var_3130 == 0 ) {
		var_198 = 0;
		return func009();
	}
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3137 = 1;
	var_548 = 1;
	return func839();
}
function func753(){
	var_243 = 0;
	var_3072 = var_314;
	func729();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_3130 = 0;
	var_3125 = rnd(4);
	if ( var_2571 == 0 ) {
		var_3125 = rnd(3);
	}
	if ( var_3125 == 0 ) {
		if ( var_191 == 0 ) {
			var_293 = "兄貴ィ！";
			var_294 = "釣りでもしてみますかい？";
			var_3130 = 1;
		}
		if ( var_191 != 0 ) {
			var_293 = "また釣りかい？";
			var_294 = "少し休ませてくれよ…";
		}
	}
	if ( var_3125 == 1 ) {
		if ( var_1332 < 10 ) {
			var_293 = "落ちてくだけるのはウヒャハハハ";
			var_294 = "俺だぁぁーーーッ！！！";
		}
		if ( var_1332 >= 10 && var_1332 < 30 ) {
			var_293 = "ガブッ…負けた…のか…";
			var_294 = "俺は死ぬ…死ぬのか…";
		}
		if ( var_1332 >= 30 && var_1332 < 60 ) {
			var_293 = "栄光は…俺にある…！";
			var_294 = "兄貴…見守っていてくれ…！";
		}
		if ( var_1332 >= 60 && var_1332 < 80 ) {
			var_293 = "グッ…落ち着くんだ！";
			var_294 = "疑心暗鬼は心の弱さだ…！";
		}
		if ( var_1332 >= 80 && var_1332 < 100 ) {
			var_293 = "兄貴と同じ苦しみを味わうんだなァーッ！";
			var_294 = "";
		}
		if ( var_1332 >= 100 ) {
			var_293 = "償わせてやるぜッ！";
			var_294 = "兄貴の意志はオイラがとげるッ！";
		}
	}
	if ( var_3125 == 2 ) {
		var_3088 = var_83[var_3072][16];
		var_3089 = var_83[var_3072][39];
		func682();
		if ( var_3073 < 99999 ) {
			var_293 = "あと" + var_3073 + "くらいで";
			var_294 = "もっと強くなれるぜ！";
		}
		if ( var_3073 >= 99999 ) {
			var_293 = "俺の強さはこれが限界だぜ！";
			var_294 = "";
		}
		func127();
	}
	if ( var_3125 == 3 ) {
		var_437 = var_2571;
		func626();
		var_3125 = rnd(3);
		if ( var_3125 == 0 ) {
			var_293 = "" + var_891 + "をやっちまった〜♪";
			var_294 = "でも思ったよりたいしたことないな";
		}
		if ( var_3125 == 1 ) {
			var_293 = "これで俺に向かってマンモーニだなんて";
			var_294 = "言えるヤツは　誰一人いねー…";
		}
		if ( var_3125 == 2 ) {
			var_293 = "" + var_891 + "の";
			var_294 = "心臓えぐりとってやったぜ…";
		}
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func094();
	func047();
	func340();
	func051();
	if ( var_3130 == 0 ) {
		var_198 = 0;
		return func009();
	}
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3137 = 1;
	var_548 = 1;
	return func839();
}
function func754(){
	var_191 = 1;
	var_1437 = var_83[var_3072][1];
	var_1438 = var_83[var_3072][2];
	var_1505 = 0;
	var_3138 = rnd(8);
	if ( var_3138 == 0 || var_3138 == 1 || var_3138 == 2 || var_3138 == 3 || var_3138 == 4 ) {
		var_1505 = 1;
	}
	if ( var_3138 == 5 ) {
		var_1505 = 2;
	}
	if ( var_3138 == 6 || var_3138 == 7 ) {
		var_1505 = 3;
	}
	if ( var_1505 == 1 ) {
		var_2171 = 0;
		var_3139 = var_97 + 1;
		for(var j=0; j<1000; j++){
			var_3140 = rnd(var_3139);
			if ( var_3140 != 0 && var_83[var_3140][0] != 0 && var_83[var_3140][10] != var_83[var_3072][10] && var_83[var_3140][31] != 4 && var_83[var_3140][31] != 5 ) {
				var_1508 = var_83[var_3140][1];
				var_1509 = var_83[var_3140][2];
				var_2171 = var_3140;
				break;
			}
		}
	}
	if ( var_1505 == 2 ) {
		var_97 = var_97 + 1;
		var_2171 = var_97;
		var_83[var_2171][0] = 123;
		var_83[var_2171][31] = 9;
		var_83[var_2171][5] = 2;
		var_83[var_2171][3] = 60;
	}
	if ( var_1505 <= 2 && var_2171 != 0 ) {
		var_1385 = var_2171;
		var_1386 = var_83[var_1385][0];
		var_2164 = var_1437;
		var_2165 = var_1438;
		var_2166 = var_2164 - 1;
		if ( var_2166 < 0 ) {
			var_2166 = 0;
		}
		var_2167 = var_2164 + 1;
		if ( var_2167 > var_33 ) {
			var_2167 = var_33;
		}
		var_2168 = var_2165 + 1;
		if ( var_2168 > var_34 ) {
			var_2168 = var_34;
		}
		var_2169 = var_2165 - 1;
		if ( var_2169 < 0 ) {
			var_2169 = 0;
		}
		var_2170 = 0;
		if ( var_2170 == 0 && var_65[var_2164][var_2168] == 0 && var_82[var_2164][var_2168] == 0 && var_71[var_2164][var_2168] != 0 && var_71[var_2164][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2164;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_65[var_2166][var_2165] == 0 && var_82[var_2166][var_2165] == 0 && var_71[var_2166][var_2165] != 0 && var_71[var_2166][var_2165] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2165;
		}
		if ( var_2170 == 0 && var_65[var_2167][var_2165] == 0 && var_82[var_2167][var_2165] == 0 && var_71[var_2167][var_2165] != 0 && var_71[var_2167][var_2165] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2165;
		}
		if ( var_2170 == 0 && var_65[var_2164][var_2169] == 0 && var_82[var_2164][var_2169] == 0 && var_71[var_2164][var_2169] != 0 && var_71[var_2164][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2164;
			var_1513 = var_2169;
		}
		if ( var_2170 == 0 && var_65[var_2166][var_2168] == 0 && var_82[var_2166][var_2168] == 0 && var_71[var_2166][var_2168] != 0 && var_71[var_2166][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_65[var_2167][var_2168] == 0 && var_82[var_2167][var_2168] == 0 && var_71[var_2167][var_2168] != 0 && var_71[var_2167][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_65[var_2166][var_2169] == 0 && var_82[var_2166][var_2169] == 0 && var_71[var_2166][var_2169] != 0 && var_71[var_2166][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2169;
		}
		if ( var_2170 == 0 && var_65[var_2167][var_2169] == 0 && var_82[var_2167][var_2169] == 0 && var_71[var_2167][var_2169] != 0 && var_71[var_2167][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2169;
		}
		if ( var_1505 == 2 && var_2170 == 0 ) {
			var_83[var_2171][0] = 0;
			var_83[var_2171][31] = 0;
			var_83[var_2171][3] = 0;
			var_97 = var_97 - 1;
		}
	}
	if ( var_1505 == 3 ) {
		var_2171 = 0;
		var_3141 = var_336 + 1;
		for(var j=0; j<1000; j++){
			var_3140 = rnd(var_3141);
			if ( var_3140 != 0 && var_78[var_3140][0] != 0 && var_78[var_3140][9] != var_83[var_3072][10] ) {
				var_1508 = var_78[var_3140][1];
				var_1509 = var_78[var_3140][2];
				var_2171 = var_3140;
				break;
			}
		}
	}
	if ( var_1505 == 3 && var_2171 != 0 ) {
		var_1385 = var_2171;
		var_1386 = var_78[var_1385][0];
		var_1249 = var_78[var_1385][13];
		var_2164 = var_1437;
		var_2165 = var_1438;
		var_2166 = var_2164 - 1;
		if ( var_2166 < 0 ) {
			var_2166 = 0;
		}
		var_2167 = var_2164 + 1;
		if ( var_2167 > var_33 ) {
			var_2167 = var_33;
		}
		var_2168 = var_2165 + 1;
		if ( var_2168 > var_34 ) {
			var_2168 = var_34;
		}
		var_2169 = var_2165 - 1;
		if ( var_2169 < 0 ) {
			var_2169 = 0;
		}
		var_2170 = 0;
		if ( var_2170 == 0 && var_77[var_2164][var_2168] == 0 && var_80[var_2164][var_2168] == 0 && var_73[var_2164][var_2168] == 0 && var_71[var_2164][var_2168] != 0 && var_71[var_2164][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2164;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_77[var_2166][var_2165] == 0 && var_80[var_2166][var_2165] == 0 && var_73[var_2166][var_2165] == 0 && var_71[var_2166][var_2165] != 0 && var_71[var_2166][var_2165] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2165;
		}
		if ( var_2170 == 0 && var_77[var_2167][var_2165] == 0 && var_80[var_2167][var_2165] == 0 && var_73[var_2167][var_2165] == 0 && var_71[var_2167][var_2165] != 0 && var_71[var_2167][var_2165] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2165;
		}
		if ( var_2170 == 0 && var_77[var_2164][var_2169] == 0 && var_80[var_2164][var_2169] == 0 && var_73[var_2164][var_2169] == 0 && var_71[var_2164][var_2169] != 0 && var_71[var_2164][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2164;
			var_1513 = var_2169;
		}
		if ( var_2170 == 0 && var_77[var_2166][var_2168] == 0 && var_80[var_2166][var_2168] == 0 && var_73[var_2166][var_2168] == 0 && var_71[var_2166][var_2168] != 0 && var_71[var_2166][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_77[var_2167][var_2168] == 0 && var_80[var_2167][var_2168] == 0 && var_73[var_2167][var_2168] == 0 && var_71[var_2167][var_2168] != 0 && var_71[var_2167][var_2168] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2168;
		}
		if ( var_2170 == 0 && var_77[var_2166][var_2169] == 0 && var_80[var_2166][var_2169] == 0 && var_73[var_2166][var_2169] == 0 && var_71[var_2166][var_2169] != 0 && var_71[var_2166][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2166;
			var_1513 = var_2169;
		}
		if ( var_2170 == 0 && var_77[var_2167][var_2169] == 0 && var_80[var_2167][var_2169] == 0 && var_73[var_2167][var_2169] == 0 && var_71[var_2167][var_2169] != 0 && var_71[var_2167][var_2169] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2167;
			var_1513 = var_2169;
		}
		if ( var_2170 == 0 && var_77[var_2164][var_2165] == 0 && var_80[var_2164][var_2165] == 0 && var_73[var_2164][var_2165] == 0 && var_71[var_2164][var_2165] != 0 && var_71[var_2164][var_2165] != 13 ) {
			var_2170 = 1;
			var_1512 = var_2164;
			var_1513 = var_2165;
		}
	}
	for(var i=0; i<5; i++){
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
	var_293 = "ﾍﾟｯｼ「ビーチ・ボーイッ」！！";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[4];
	var_26_1 = var_26[4];
	var_27_1 = var_27[4];
	func047();
	var_83[var_3072][21] = 1;
	var_411 = 1;
	for(var i=0; i<5; i++){
		func337();
	}
	var_271 = 1;
	var_1500 = 1;
	for(var i=0; i<3; i++){
		for(var j=0; j<4; j++){
			func337();
		}
		var_198 = 1;
		var_300 = 0;
		var_1500++;
	}
	for(var i=0; i<6; i++){
		func337();
		var_198 = 1;
		var_300 = 0;
	}
	var_1500 = 5;
	var_411 = 2;
	for(var i=0; i<10; i++){
		func337();
		var_198 = 1;
		var_300 = 0;
	}
	var_1500 = 6;
	var_1501 = 102;
	for(var i=0; i<3; i++){
		func337();
		var_198 = 1;
		var_300 = 0;
		var_1501 = var_1501 - 1;
	}
	var_1501 = 5;
	for(var i=0; i<30; i++){
		func337();
		var_198 = 1;
		var_300 = 0;
	}
	if ( var_1505 <= 2 && var_2170 != 0 ) {
		var_83[var_2171][8] = 1;
		var_83[var_2171][12] = 0;
		var_83[var_2171][13] = 0;
	}
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾍﾟｯｼ「きたッ！」";
	var_297 = "";
	func047();
	func050();
	var_83[var_3072][21] = 1;
	for(var i=0; i<28; i++){
		var_411 = 2;
		var_1501++;
		func337();
		var_411 = 3;
		var_1501++;
		func337();
		var_198 = 1;
		var_300 = 0;
	}
	if ( var_2170 == 0 || var_2171 == 0 ) {
		var_1501 = 100;
		for(var j=0; j<5; j++){
			var_411 = 2;
			var_1501++;
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		var_271 = 0;
		var_1501 = 0;
		var_1500 = 0;
		var_411 = 0;
		var_83[var_3072][21] = 0;
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "ﾍﾟｯｼ「ちっ！　おしい…」";
		var_297 = "";
		func047();
		func050();
		var_198 = 1;
		var_300 = 0;
		for(var j=0; j<5; j++){
			func337();
		}
		var_217 = 1;
		return func019();
	}
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾍﾟｯｼ「かかったァ——ッ！」";
	if ( var_1505 == 2 ) {
		var_296 = "ﾍﾟｯｼ「大物釣り上げたァ————ッ！！」";
	}
	var_297 = "";
	func047();
	func050();
	for(var i=0; i<22; i++){
		func337();
		var_1501++;
		var_198 = 1;
		var_300 = 0;
	}
	var_411 = 0;
	var_83[var_3072][21] = 0;
	var_271 = 0;
	var_1501 = 0;
	var_1500 = 0;
	if ( var_1505 <= 2 ) {
		var_82[var_1508][var_1509] = 0;
		var_82[var_1512][var_1513] = var_2171;
		var_83[var_2171][1] = var_1512;
		var_83[var_2171][2] = var_1513;
		var_83[var_2171][10] = var_71[var_1512][var_1513];
		func331();
	}
	if ( var_1505 == 3 ) {
		var_77[var_1508][var_1509] = 0;
		var_77[var_1512][var_1513] = var_2171;
		var_78[var_2171][1] = var_1512;
		var_78[var_2171][2] = var_1513;
		var_78[var_2171][9] = var_71[var_1512][var_1513];
		func331();
	}
	for(var i=0; i<10; i++){
		func337();
	}
	if ( var_1505 <= 2 ) {
		var_83[var_2171][8] = 0;
	}
	var_217 = 1;
	return func019();
}
function func755(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "SPW財団の男「ひとつ情報があります」";
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
	var_296 = "「SPW財団の調査によると、次の階では";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_3142 = sdim(50, 20);
	var_3143 = var_91;
	var_91 = var_91 + 1;
	func627();
	var_3144 = 0;
	for(var i=0; i<10; i++){
		if ( var_977[var_3144] == 0 ) {
			break;
		}
		var_437 = var_977[var_3144];
		func626();
		var_3142(var_3144) = var_891;
		var_3144 = var_3144 + 1;
	}
	var_91 = var_3143;
	var_3145 = 0;
	for(var i=0; i<var_3144; i++){
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_3142(var_3145);
		var_297 = "";
		var_198 = 1;
		var_300 = 0;
		func094();
		func047();
		func050();
		func340();
		var_3145 = var_3145 + 1;
	}
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "が出現するようです。";
	var_297 = "お気をつけて」";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<5; i++){
		func337();
	}
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func756(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾎﾟﾙﾅﾚﾌ「亀の中はなかなか快適だな」";
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
	var_296 = "ﾎﾟﾙﾅﾚﾌ「ところでそこのジッパー…」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾎﾟﾙﾅﾚﾌ「自分が入ったら";
	var_297 = "　　　　　　どこに行くんだろうな？」";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func757(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「……」";
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
	var_296 = "「……」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func758(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ボインゴ「新しいページが現れたぞ…」";
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
	var_296 = "「ディアボロは次の階で…";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_3143 = var_91;
	var_91 = var_91 + 1;
	func627();
	var_356 = var_977[var_2569];
	func177();
	var_91 = var_3143;
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "" + var_849;
	var_297 = "リタイアだァ—ッ！」";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｳｸｹｺ ｳﾋｺ ｳｹｹｹ ｳｹｺｹｺｹﾛｵ ";
	var_297 = "ｳｹﾛｵｵｵﾌﾊﾎｯ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<5; i++){
		func337();
	}
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func759(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_2877 = rnd(8);
	if ( var_2877 == 0 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「もっとおお わたしを叱ってええ」";
	}
	if ( var_2877 == 1 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「わたしが おくつを磨きましょう」";
	}
	if ( var_2877 == 2 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「マンガお読みになられますか」";
	}
	if ( var_2877 == 3 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「マッチ棒パズルやります？」";
	}
	if ( var_2877 == 4 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「黄色い花はヘビイチゴ」";
	}
	if ( var_2877 == 5 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「だんな様あああ〜」";
	}
	if ( var_2877 == 6 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「お逃げになりますか？」";
	}
	if ( var_2877 == 7 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「おっしゃるとおりに いたします」";
	}
	var_3146 = var_77[var_347][var_348];
	if ( var_78[var_3146][0] == 650 || var_78[var_3146][0] == 651 || var_78[var_3146][0] == 652 || var_78[var_3146][0] == 653 ) {
		var_293 = "ﾖｰﾖｰﾏｯ「のっかりてぇ—のっかりてェ—」";
	}
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3147 = 1;
	var_548 = 1;
	return func839();
}
function func760(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「タリナイゾ…";
	var_294 = "　残り" + var_169 + " G！」";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<10; i++){
		func337();
	}
	return func009();
}
function func761(){
	func772()	// 追加;
}
function func762(){
	func773()	// 追加;
}
function func763(){
	func774()	// 追加;
}
function func764(){
	return func009();
}
function func765(){
	var_243 = 0;
	DSPLAY(212);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "地球儀が置いてある。";
	if ( var_523 >= 1 ) {
		var_293 = "地球儀がすごい速度で回転している。";
	}
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340(func765_1);
}
function func765_1(){
	func051(func765_2);
}
function func765_2(){
	var_198 = 0;
	return func009();
}
function func766(){
	var_243 = 0;
	DSPLAY(212);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ベッドの上に本が置いてある。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340(func766_1);
}
function func766_1(){
	func051(func766_2);
}
function func766_2(){
	var_198 = 0;
	return func009();
}
function func767(){
	var_243 = 0;
	if ( var_526 >= 1 && var_993 >= 1 ) {
		func051();
		return func828();
	}
	DSPLAY(212);
	if ( var_526 >= 1 && var_993 == 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "壁に穴が開いている。";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func051();
		var_198 = 0;
		return func009();
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "壁に写真や資料が貼り付いている。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340(func767_1);
}
function func767_1(){
	func051(func767_2);
}
function func767_2(){
	var_198 = 0;
	return func009();
}
function func768(){
	var_243 = 0;
	DSPLAY(212);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ベッドの下で何か動いている気配がする。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340(func768_1);
}
function func768_1(){
	func051(func768_2);
}
function func768_2(){
	var_198 = 0;
	return func009();
}
function func769(){
	var_243 = 0;
	var_3148 = var_314;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "サヴェジガーデン作戦だ！";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	var_198 = 1;
	var_300 = 0;
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "アイテムを倉庫に送りますか？";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_3149 = 0;
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3150 = 1;
	var_548 = 1;
	return func839();
}
function func770(){
	var_2000 = 1;
	var_227 = 1;
	var_228 = 45;
	var_225 = 1;
	var_223 = var_224 + 10;
	var_220 = 0;
	func051();
	var_197 = 1;
	return func461();
}
function func771(){
	var_197 = 0;
	if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 && var_233[var_225][8] != 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "中に何か入っているアイテムは";
		var_294 = "送ることはできない。";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		for(var j=0; j<4; j++){
			func337();
		}
		func340();
		func051();
		var_197 = 1;
		return func461();
	}
	func426();
	func427();
	func428();
	func429();
	var_2116 = 0;
	if ( var_553 == var_225 && var_896 != 0 ) {
		var_2116 = 1;
	}
	if ( var_554 == var_225 && var_897 != 0 ) {
		var_2116 = 1;
	}
	if ( var_555 == var_225 && var_898 != 0 ) {
		var_2116 = 1;
	}
	if ( var_2116 == 1 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "呪われていて外せない！";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		for(var j=0; j<4; j++){
			func337();
		}
		func340();
		func051();
		var_197 = 1;
		return func461();
	}
	func772()	// 追加;
}
function func772(){
	var_2000 = 0;
	var_2401 = 0;
	var_2402 = 0;
	if ( var_559 == 0 && var_864 >= 19 ) {
		var_2402 = 1;
	}
	if ( var_559 == 1 && var_864 >= 26 ) {
		var_2402 = 1;
	}
	if ( var_559 == 2 && var_864 >= 33 ) {
		var_2402 = 1;
	}
	if ( var_559 == 3 && var_864 >= 39 ) {
		var_2402 = 1;
	}
	if ( var_559 == 4 && var_864 >= 45 ) {
		var_2402 = 1;
	}
	if ( var_2402 == 1 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "倉庫にはもう置ける場所がないようだ";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		var_198 = 0;
		var_300 = 0;
		return func009();
	}
	var_449 = 21;
	for(var i=0; i<6; i++){
		var_447 = 10;
		for(var j=0; j<9; j++){
			if ( var_863[var_447][var_449] == 0 ) {
				var_2403 = 0;
				if ( var_559 <= 3 ) {
					if ( var_447 == 10 && var_449 == 21 ) {
						var_2403 = 1;
					}
					if ( var_447 == 10 && var_449 == 22 ) {
						var_2403 = 1;
					}
					if ( var_447 == 10 && var_449 == 23 ) {
						var_2403 = 1;
					}
					if ( var_447 == 10 && var_449 == 24 ) {
						var_2403 = 1;
					}
					if ( var_447 == 10 && var_449 == 25 ) {
						var_2403 = 1;
					}
					if ( var_447 == 10 && var_449 == 26 ) {
						var_2403 = 1;
					}
				}
				if ( var_559 <= 2 ) {
					if ( var_447 == 11 && var_449 == 21 ) {
						var_2403 = 1;
					}
					if ( var_447 == 11 && var_449 == 22 ) {
						var_2403 = 1;
					}
					if ( var_447 == 11 && var_449 == 23 ) {
						var_2403 = 1;
					}
					if ( var_447 == 11 && var_449 == 24 ) {
						var_2403 = 1;
					}
					if ( var_447 == 11 && var_449 == 25 ) {
						var_2403 = 1;
					}
					if ( var_447 == 11 && var_449 == 26 ) {
						var_2403 = 1;
					}
				}
				if ( var_447 == 12 && var_449 == 21 ) {
					var_2403 = 1;
				}
				if ( var_447 == 13 && var_449 == 21 ) {
					var_2403 = 1;
				}
				if ( var_447 == 14 && var_449 == 21 ) {
					var_2403 = 1;
				}
				if ( var_447 == 15 && var_449 == 21 ) {
					var_2403 = 1;
				}
				if ( var_447 == 12 && var_449 == 22 ) {
					var_2403 = 1;
				}
				if ( var_447 == 13 && var_449 == 22 ) {
					var_2403 = 1;
				}
				if ( var_447 == 14 && var_449 == 22 ) {
					var_2403 = 1;
				}
				if ( var_447 == 15 && var_449 == 22 ) {
					var_2403 = 1;
				}
				if ( var_447 == 13 && var_449 == 23 ) {
					var_2403 = 1;
				}
				if ( var_2403 == 0 ) {
					var_1459 = var_233[var_225][0];
					var_1249 = var_233[var_225][13];
					var_864 = var_864 + 1;
					var_863[var_447][var_449] = var_864;
					var_866 = var_864;
					var_853[var_866][0] = var_233[var_225][0];
					var_853[var_866][1] = var_447;
					var_853[var_866][2] = var_449;
					var_853[var_866][3] = var_233[var_225][3];
					var_853[var_866][4] = var_233[var_225][4];
					var_853[var_866][5] = var_233[var_225][5];
					var_853[var_866][6] = var_233[var_225][6];
					var_853[var_866][7] = var_233[var_225][7];
					var_853[var_866][8] = var_233[var_225][8];
					var_853[var_866][9] = var_233[var_225][9];
					var_853[var_866][10] = var_233[var_225][10];
					var_853[var_866][11] = 0;
					var_853[var_866][12] = var_233[var_225][12];
					var_853[var_866][13] = var_233[var_225][13];
					var_853[var_866][14] = var_233[var_225][14];
					var_853[var_866][15] = var_233[var_225][15];
					var_853[var_866][16] = var_233[var_225][16];
					var_853[var_866][17] = var_233[var_225][17];
					var_853[var_866][18] = var_233[var_225][18];
					var_853[var_866][19] = var_233[var_225][19];
					var_853[var_866][20] = var_233[var_225][20];
					var_853[var_866][21] = var_233[var_225][21];
					var_853[var_866][22] = var_233[var_225][22];
					var_853[var_866][23] = var_233[var_225][23];
					var_853[var_866][24] = var_233[var_225][24];
					var_853[var_866][25] = var_233[var_225][25];
					var_853[var_866][26] = var_233[var_225][26];
					var_853[var_866][27] = var_233[var_225][27];
					var_853[var_866][28] = var_233[var_225][28];
					var_853[var_866][29] = var_233[var_225][29];
					if ( var_233[var_225][11] == 1 ) {
						var_106 = 1;
						var_232 = var_233[var_225][0];
						func492();
						var_482 = 0;
						var_482 = (var_233[var_225][3] + var_233[var_225][4]) * 50;
						if ( var_233[var_225][0] != 800 ) {
							var_482 = var_233[var_225][7] * 100 + var_482;
						}
						if ( var_233[var_225][19] > 1 ) {
							var_482 = var_233[var_225][19] * 500 + var_482;
						}
						var_483 = var_483 + var_482;
						var_107 = var_107 + var_483;
					}
					var_1977 = 0;
					if ( var_553 == var_225 ) {
						var_476 = dim(40);
						var_580 = var_580 - var_894;
						var_894 = 0;
						var_357 = 0;
						func494();
						var_1977 = 1;
					}
					if ( var_554 == var_225 ) {
						var_477 = dim(40);
						var_581 = var_581 - var_895;
						var_895 = 0;
						var_358 = 0;
						func494();
						var_1977 = 1;
					}
					if ( var_555 == var_225 ) {
						var_478 = dim(40);
						var_215 = 0;
						func494();
						var_1977 = 1;
					}
					if ( var_556 == var_225 ) {
						var_479 = dim(40);
						var_410 = 0;
						var_250 = 0;
						var_1977 = 1;
					}
					if ( var_1977 == 1 ) {
						var_232 = var_233[var_225][0];
						func106();
					}
					var_2401 = 1;
					func430();
					func433();
					break;
				}
			}
			var_447 = var_447 + 1;
		}
		if ( var_2401 == 1 ) {
			break;
		}
		var_449 = var_449 + 1;
	}
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	if ( var_2401 == 1 ) {
		var_293 = "サヴェジガーデンはアイテムを持って";
		var_294 = "飛び去っていった。";
	}
	if ( var_2401 == 0 ) {
		var_293 = "倉庫にはもう置ける場所がないようだ";
		var_294 = "";
	}
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	var_198 = 0;
	var_300 = 0;
	if ( var_2401 == 1 ) {
		var_1457 = var_83[var_3148][1];
		var_1458 = var_83[var_3148][2];
		var_83[var_3148][11] = 1;
		var_271 = 1;
		var_1456 = 1;
		for(var j=0; j<12; j++){
			func337();
			var_1456++;
		}
		var_271 = 0;
		var_1456 = 0;
		var_82[var_1457][var_1458] = 0;
		var_83[var_3148][0] = 0;
		var_83[var_3148][1] = 0;
		var_83[var_3148][2] = 0;
		func331();
	}
	var_217 = 1;
	return func019();
}
function func773(){
	var_243 = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "鮮血のｼｬﾎﾞﾝが浮かんでいる…";
	var_294 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	if ( var_987(0) == 0 ) {
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "中には何も入っていないようだ。";
		var_297 = "";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "何か入れますか？";
		var_297 = "";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
		func051();
		var_245 = 19;
		var_246 = 45;
		var_546 = 1;
		var_3151 = 1;
		var_548 = 1;
		return func839();
	}
	if ( var_987(0) != 0 ) {
		var_232 = var_987(0);
		var_487 = var_987(13);
		func492();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "" + var_489 + "が";
		var_297 = "入っているようだ。";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "取り出しますか？";
		var_297 = "";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
		func051();
		var_245 = 19;
		var_246 = 45;
		var_546 = 1;
		var_3152 = 1;
		var_548 = 1;
		return func839();
	}
}
function func774(){
	var_2001 = 1;
	var_227 = 1;
	var_228 = 45;
	var_225 = 1;
	var_223 = var_224 + 10;
	var_220 = 0;
	func051();
	var_197 = 1;
	return func461();
}
function func775(){
	var_2001 = 0;
	var_197 = 0;
	if ( var_233[var_225][0] >= 800 && var_233[var_225][0] < 900 && var_233[var_225][8] != 0 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "中に何か入っているアイテムは";
		var_294 = "送ることはできない。";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func051();
		var_2001 = 1;
		var_227 = 1;
		var_228 = 45;
		var_225 = 1;
		var_223 = var_224 + 10;
		var_220 = 0;
		var_197 = 1;
		return func461();
	}
	func426();
	func427();
	func428();
	func429();
	var_2116 = 0;
	if ( var_553 == var_225 && var_896 != 0 ) {
		var_2116 = 1;
	}
	if ( var_554 == var_225 && var_897 != 0 ) {
		var_2116 = 1;
	}
	if ( var_555 == var_225 && var_898 != 0 ) {
		var_2116 = 1;
	}
	if ( var_2116 == 1 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "呪われていて外せない！";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func051();
		var_2001 = 1;
		var_227 = 1;
		var_228 = 45;
		var_225 = 1;
		var_223 = var_224 + 10;
		var_220 = 0;
		var_197 = 1;
		return func461();
	}
	func776()	// 追加;
}
function func776(){
	var_232 = var_233[var_225][0];
	var_487 = var_233[var_225][13];
	func492();
	var_3153 = var_489;
	var_866 = var_864;
	var_987(0) = var_233[var_225][0];
	var_987(1) = 0;
	var_987(2) = 0;
	var_987(3) = var_233[var_225][3];
	var_987(4) = var_233[var_225][4];
	var_987(5) = var_233[var_225][5];
	var_987(6) = var_233[var_225][6];
	var_987(7) = var_233[var_225][7] + var_233[var_225][8];
	var_987(8) = 0;
	var_987(9) = var_233[var_225][9];
	var_987(10) = var_233[var_225][10];
	var_987(11) = var_233[var_225][11];
	var_987(12) = var_233[var_225][12];
	var_987(13) = var_233[var_225][13];
	var_987(14) = var_233[var_225][14];
	var_987(15) = var_233[var_225][15];
	var_987(16) = var_233[var_225][16];
	var_987(17) = var_233[var_225][17];
	var_987(18) = var_233[var_225][18];
	var_987(19) = var_233[var_225][19];
	var_987(20) = var_233[var_225][20];
	var_987(21) = var_233[var_225][21];
	var_987(22) = var_233[var_225][22];
	var_987(23) = var_233[var_225][23];
	var_987(24) = var_233[var_225][24];
	var_987(25) = var_233[var_225][25];
	var_987(26) = var_233[var_225][26];
	var_987(27) = var_233[var_225][27];
	var_987(28) = var_233[var_225][28];
	var_987(29) = var_233[var_225][29];
	var_1977 = 0;
	if ( var_553 == var_225 ) {
		var_476 = dim(40);
		var_580 = var_580 - var_894;
		var_894 = 0;
		var_357 = 0;
		func494();
		var_1977 = 1;
	}
	if ( var_554 == var_225 ) {
		var_477 = dim(40);
		var_581 = var_581 - var_895;
		var_895 = 0;
		var_358 = 0;
		func494();
		var_1977 = 1;
	}
	if ( var_555 == var_225 ) {
		var_478 = dim(40);
		var_215 = 0;
		func494();
		var_1977 = 1;
	}
	if ( var_556 == var_225 ) {
		var_479 = dim(40);
		var_410 = 0;
		var_250 = 0;
		var_1977 = 1;
	}
	if ( var_1977 == 1 ) {
		var_232 = var_233[var_225][0];
		func106();
	}
	func430();
	func433();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_3153 + "を入れた。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	var_198 = 0;
	return func009();
}
function func777(){
	if ( var_224 >= 20 ) {
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "持ち物がいっぱいで出せない。";
		var_294 = "";
		var_198 = 1;
		var_300 = 0;
		func047();
		func340();
		func051();
		var_198 = 0;
		return func009();
	}
	var_232 = var_987(0);
	var_487 = var_987(13);
	func492();
	var_3153 = var_489;
	if ( var_232 >= 800 && var_232 < 900 ) {
		var_1806 = 1;
		for(var j=0; j<var_224; j++){
			if ( var_233[var_1806][0] >= 800 && var_233[var_1806][0] < 900 ) {
				var_1807 = var_233[var_1806][6];
				var_986(var_1807) = 1;
			}
			var_1806 = var_1806 + 1;
		}
		var_1806 = 1;
		for(var j=0; j<var_336; j++){
			if ( var_78[var_1806][0] >= 800 && var_78[var_1806][0] < 900 ) {
				var_1807 = var_78[var_1806][6];
				var_986(var_1807) = 1;
			}
			var_1806 = var_1806 + 1;
		}
		var_858 = 1;
		for(var j=0; j<80; j++){
			if ( var_986(var_858) == 0 ) {
				var_1811 = 0;
				for(var l=0; l<11; l++){
					var_1812 = 0;
					for(var m=0; m<30; m++){
						var_486[var_858][var_1811][var_1812] = 0;
						var_1812++;
					}
					var_1811++;
				}
				var_986(var_858) = 1;
				break;
			}
			var_858 = var_858 + 1;
		}
	}
	var_224 = var_224 + 1;
	var_233[var_224][0] = var_987(0);
	var_233[var_224][3] = var_987(3);
	var_233[var_224][4] = var_987(4);
	var_233[var_224][5] = var_987(5);
	var_233[var_224][6] = 0;
	if ( var_232 >= 800 && var_232 < 900 ) {
		var_233[var_224][6] = var_858;
	}
	var_233[var_224][7] = var_987(7);
	var_233[var_224][8] = var_987(8);
	var_233[var_224][11] = var_987(11);
	var_233[var_224][12] = var_987(12);
	var_233[var_224][13] = var_987(13);
	var_233[var_224][14] = var_987(14);
	var_233[var_224][15] = var_987(15);
	var_233[var_224][16] = var_987(16);
	var_233[var_224][17] = var_987(17);
	var_233[var_224][18] = var_987(18);
	var_233[var_224][19] = var_987(19);
	var_233[var_224][20] = var_987(20);
	var_233[var_224][21] = var_987(21);
	var_233[var_224][22] = var_987(22);
	var_233[var_224][23] = var_987(23);
	var_233[var_224][24] = var_987(24);
	var_233[var_224][25] = var_987(25);
	var_233[var_224][26] = var_987(26);
	var_233[var_224][27] = var_987(27);
	var_233[var_224][28] = var_987(28);
	var_233[var_224][29] = var_987(29);
	var_987(0) = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_3153 + "を出した。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func778(){
	var_243 = 0;
	var_3154 = 0;
	var_3155 = 0;
	var_480 = 1;
	for(var i=0; i<var_224; i++){
		if ( var_233[var_480][0] == 393 ) {
			var_3154 = 1;
		}
		if ( var_233[var_480][0] == 995 ) {
			var_3155 = 1;
		}
		if ( var_233[var_480][0] >= 800 && var_233[var_480][0] < 900 ) {
			var_484 = 1;
			var_485 = var_233[var_480][6];
			for(var k=0; k<10; k++){
				if ( var_486[var_485][var_484][0] == 393 ) {
					var_3154 = 1;
				}
				if ( var_486[var_485][var_484][0] == 995 ) {
					var_3155 = 1;
				}
				var_484 = var_484 + 1;
			}
		}
		var_480 = var_480 + 1;
	}
	if ( var_3154 == 1 ) {
		return func781();
	}
	if ( var_3155 == 1 ) {
		return func784();
	}
	if ( var_993 == 1 ) {
		return func783();
	}
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "さて、どうしたものかな…";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ん？何か用かい？";
	var_297 = "用も無いのに話しかけないで欲しいな…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "いやまてよ、ひょっとして君も";
	var_297 = "奇妙なﾀﾞﾝｼﾞｮﾝを探索してるのかい？";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "それはちょうど良かった！";
	var_297 = "ひとつ頼まれてくれないかな。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "このﾀﾞﾝｼﾞｮﾝのどこかに、";
	var_297 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰっていう";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "マンガを現実にするスタンドが";
	var_297 = "あるそうなんだ。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "僕はそのスタンドをずっと";
	var_297 = "探していてね。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "さっきのヤギが怪しいんだが、";
	var_297 = "いつも良いところで逃げられてしまう。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "どうやらそこの壁の穴が、";
	var_297 = "やつらの住処のようだが…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "どうだろう、代わりに取ってきて";
	var_297 = "もらえないかな？";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3156 = 1;
	var_548 = 1;
	return func839();
}
function func779(){
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "グッド！";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "よろしく頼むよ。";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_993 = 1;
	func051();
	var_198 = 0;
	return func009();
}
function func780(){
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "この岸部露伴が頭下げて";
	var_297 = "頼んでるのに…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ふぅ〜〜ん";
	var_297 = "そうかい！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "君は、ちょいと深い所まで行って";
	var_297 = "帰ってくるだけのことを断るのか…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "念のためもう一度聞くが、";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "どうだろう、代わりに取ってきて";
	var_297 = "もらえないかな？";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3156 = 1;
	var_548 = 1;
	return func839();
}
function func781(){
	DSPLAY(212);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "露伴に「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」を";
	var_294 = "見せてあげますか？";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3157 = 1;
	var_548 = 1;
	return func839();
}
function func782(){
	var_97 = var_97 + 1;
	var_762 = var_97;
	var_82[0][0] = var_97;
	var_83[var_97][0] = 56;
	var_83[var_97][1] = 0;
	var_83[var_97][2] = 0;
	var_83[var_97][3] = 999;
	var_83[var_97][4] = 0;
	var_83[var_97][5] = 2;
	var_83[var_97][10] = 1;
	var_83[var_97][31] = 4;
	var_83[var_97][32] = rnd(6);
	for(var i=0; i<20; i++){
		func337();
	}
	func335();
	for(var i=0; i<20; i++){
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
	var_293 = "おおっ！君が持っているのは";
	var_294 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」！！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "よし、お礼に…";
	var_297 = "君が主役のマンガを描いてやろう";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "なになに、組織のボスだった頃の";
	var_297 = "絶頂だった自分を描いて欲しい？";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ちょっと待っててくれよ。";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_83[var_761][21] = 1;
	var_411 = 1;
	func337();
	func337();
	var_411 = 2;
	func337();
	func337();
	func337();
	func337();
	func337();
	func337();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ズババッ！";
	var_297 = "ジャキィン！　シュバッ！";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	for(var i=0; i<4; i++){
		DSPLAY(127);
		var_411 = 3;
		func337();
		var_411 = 4;
		func337();
		var_411 = 5;
		func337();
		DSPLAY;
		var_411 = 3;
		func337();
		var_411 = 4;
		func337();
		var_411 = 5;
		func337();
	}
	var_411 = 2;
	func337();
	func337();
	var_411 = 1;
	func337();
	func337();
	func337();
	func337();
	var_83[var_761][21] = 0;
	var_411 = 0;
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "できたぜ。";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "タイトル？タイトルは";
	var_297 = "別に決めてないな…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_198 = 0;
	var_217 = 1;
	DSPLAY(228);
	for(var i=0; i<5; i++){
		func337();
	}
	var_3158 = 10;
	for(var i=0; i<6; i++){
		if ( var_82[var_3158][8] != 0 ) {
			var_3159 = var_82[var_3158][8];
			var_83[var_3159][6] = 1;
			var_83[var_3159][1] = var_3158;
			var_83[var_3159][2] = 9;
			var_82[var_3158][8] = 0;
			var_82[var_3158][9] = var_3159;
			var_83[var_3159][5] = 2;
			var_409 = 3;
			func337();
			var_409 = 2;
			func337();
			var_409 = 1;
			func337();
			var_409 = 0;
			func337();
			var_83[var_3159][6] = 0;
		}
		var_3158++;
	}
	var_83[var_771][6] = 0;
	var_83[var_762][6] = 1;
	var_83[var_762][1] = 10;
	var_83[var_762][2] = 8;
	var_82[0][0] = 0;
	var_82[10][8] = var_762;
	var_83[var_762][5] = 6;
	var_409 = 3;
	func337();
	var_409 = 2;
	func337();
	var_409 = 1;
	func337();
	var_409 = 0;
	func337();
	var_199 = 4;
	var_83[var_762][1] = 11;
	var_83[var_762][2] = 8;
	var_82[10][8] = 0;
	var_82[11][8] = var_762;
	var_83[var_762][5] = 6;
	var_409 = 3;
	func337();
	var_409 = 2;
	func337();
	var_409 = 1;
	func337();
	var_409 = 0;
	func337();
	var_199 = 4;
	var_83[var_762][1] = 12;
	var_83[var_762][2] = 8;
	var_82[11][8] = 0;
	var_82[12][8] = var_762;
	var_83[var_762][5] = 6;
	var_409 = 3;
	func337();
	var_409 = 2;
	func337();
	var_409 = 1;
	func337();
	var_409 = 0;
	func337();
	var_199 = 4;
	var_83[var_762][1] = 13;
	var_83[var_762][2] = 8;
	var_82[12][8] = 0;
	var_82[13][8] = var_762;
	var_83[var_762][5] = 6;
	var_409 = 3;
	func337();
	var_409 = 2;
	func337();
	var_409 = 1;
	func337();
	var_409 = 0;
	func337();
	var_199 = 4;
	var_83[var_762][1] = 14;
	var_83[var_762][2] = 8;
	var_82[13][8] = 0;
	var_82[14][8] = var_762;
	var_83[var_762][5] = 6;
	var_409 = 3;
	func337();
	var_409 = 2;
	func337();
	var_409 = 1;
	func337();
	var_409 = 0;
	func337();
	var_199 = 4;
	if ( var_65[15][8] == 0 ) {
		var_83[var_762][1] = 15;
		var_83[var_762][2] = 8;
		var_82[14][8] = 0;
		var_82[15][8] = var_762;
		var_83[var_762][5] = 6;
		var_409 = 3;
		func337();
		var_409 = 2;
		func337();
		var_409 = 1;
		func337();
		var_409 = 0;
		func337();
		var_199 = 4;
	}
	var_83[var_762][6] = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "このシュトロハイムが";
	var_294 = "名づけ親(ｺﾞｯﾄﾞﾌｧｰｻﾞｰ)になってやるッ！";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "そうだな…不思議のダンジョンに";
	var_297 = "挑戦するディアボロ！という意味の";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ディアボロの大冒険！というのは";
	var_297 = "どうかな！？";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_198 = 0;
	return func785();
}
function func783(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」だ。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ぼくが行けりゃあ";
	var_297 = "すぐに手に入るんだがな…";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "あいにく、";
	var_297 = "まだ死にたくないんだ。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func784(){
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "おやっ？君が持っているのは";
	var_294 = "僕のマンガじゃあないか。";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "僕のマンガが好きなのかい？";
	var_297 = "【波調が合う】…ってことかな。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_198 = 0;
	var_1261 = 1;
	DSPLAY(103);
	var_271 = 1;
	var_1542 = 21;
	for(var i=0; i<5; i++){
		func337();
		var_1542++;
	}
	DSPLAY(118);
	for(var i=0; i<20; i++){
		func337();
	}
	var_1261 = 0;
	var_271 = 0;
	var_1542 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "冗談！冗談だよ";
	var_294 = "嫌だなあ〜";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func785(){
	var_199 = 2;
	for(var i=0; i<5; i++){
		func337();
	}
	DSPLAY(117);
	var_1264 = 1;
	for(var i=0; i<12; i++){
		func337();
	}
	var_1264 = 0;
	var_1233 = 1;
	func123();
	DSPLAY(192);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "「ボヘミアン・ラプソディ！」";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	gsel(19);
	color(255, 255, 255);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_311 = 255;
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
	}
	gsel(19);
	color(1, 1, 1);
	boxf(0, 0, 340, 340);
	gsel(0);
	var_311 = 0;
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 + 5;
	}
	for(var i=0; i<50; i++){
		func337();
	}
	func336();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "こうしてﾃﾞｨｱﾎﾞﾛは、露伴の描いた漫画を";
	var_294 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨの能力で現実化させ";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "かつての絶頂の日々に";
	var_297 = "戻ることができたのです…";
	var_198 = 1;
	var_300 = 0;
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "　　　　　【ディアボロの大冒険】";
	var_297 = "　　　　　　　　　　　完";
	var_198 = 1;
	var_300 = 0;
	func050();
	while(true){
		func337();
		var_198 = 1;
		var_300 = 0;
		func080();
	}
	stop();
	func335();
	var_312 = 1;
	for(var i=0; i<51; i++){
		func337();
		var_311 = var_311 - 5;
	}
	var_311 = 0;
	var_312 = 0;
	var_3160 = 1;
	for(var i=0; i<50; i++){
		var_437 = var_3161;
		func626();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "【" + var_891 + "】";
		var_297 = "　…" + var_3162;
		var_198 = 1;
		var_300 = 0;
		func050();
		for(var j=0; j<50; j++){
			func337();
			var_198 = 1;
			var_300 = 0;
		}
		var_3160++;
	}
	stop();
}
function func786(){
	var_243 = 0;
	DSPLAY(212);
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "【亀の倉庫　使い方】";
	var_294 = "";
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	var_198 = 1;
	var_300 = 0;
	func047();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "この部屋にはアイテムを保管することが";
	var_297 = "できます。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "部屋から出たい時は、テーブルの上に";
	var_297 = "乗ると出ることができます。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "いらないアイテムは、左にあるジッパー";
	var_297 = "から捨てることができます。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ジッパーの上で「足元」コマンドを選ぶと";
	var_297 = "持ち物全てを捨てられます。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "たぶん亀は平気でしょう。";
	var_297 = "けっこう栄養にするかも。";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func787(){
	var_243 = 0;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｱﾊﾞｯｷｫ「おれのｽﾀﾝﾄﾞ【ﾑｰﾃﾞｨｰﾌﾞﾙｰｽ】";
	var_294 = "　　　　　のﾘﾌﾟﾚｲ能力を使えば、」";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｱﾊﾞｯｷｫ「このﾀﾞﾝｼﾞｮﾝから脱出も可能だ」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｱﾊﾞｯｷｫ「地上まで帰還するか？」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3163 = 1;
	var_548 = 1;
	return func839();
}
function func788(){
	var_532 = 1;
	var_1454 = 1;
	var_271 = 1;
	var_1455 = var_91;
	func094();
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ｱﾊﾞｯｷｫ「ムーディー・ブルース！」";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	var_3164 = 1;
	for(var i=0; i<var_91 + 60; i++){
		func337();
		var_3165 = rnd(2);
		if ( var_3165 == 0 ) {
			var_3166 = rnd(100);
			var_3166 = var_3166 + 150;
			for(var k=0; k<var_3166; k++){
				var_3167 = rnd(680);
				var_3167 = var_3167 - 10;
				var_3168 = rnd(680);
				var_3169 = rnd(30);
				var_3169 = var_3169 + 5;
				color(150, 150, 150);
				line(var_3167, var_3168, var_3167 + var_3169, var_3168);
				line(var_3167, var_3168 + 1, var_3167 + var_3169, var_3168 + 1);
				line(var_3167, var_3168 + 30, var_3167 + var_3169, var_3168 + 30);
				color(0, 0, 0);
				line(var_3167, var_3168 + 2, var_3167 + var_3169, var_3168 + 2);
			}
		}
		if ( i > 10 ) {
			var_1455 = var_1455 - 1;
			if ( var_1455 < 0 ) {
				var_1455 = 0;
			}
		}
		var_1454 = var_1454 + 1;
		var_3164 = var_3164 + 1;
		var_198 = 1;
		var_300 = 0;
	}
	var_1454 = 0;
	var_271 = 0;
	var_356 = 311;
	var_217 = 0;
	return func173();
}
function func789(){
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｱﾊﾞｯｷｫ「ところで…茶でも飲むか？」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3163 = 2;
	var_548 = 1;
	return func839();
}
function func790(){
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ｱﾊﾞｯｷｫ「ヌルイから飲むのは いやか？」";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3163 = 3;
	var_548 = 1;
	return func839();
}
function func791(){
	if ( var_215 == 115 ) {
		return func792();
	}
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾃﾞｨｱﾎﾞﾛ「★※○■¶◆ЖΘ！！！」";
	var_297 = "";
	var_25_1 = var_25[5];
	var_26_1 = var_26[5];
	var_27_1 = var_27[5];
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	if ( var_211 <= 1 ) {
		var_211 = 0;
		var_356 = 280;
		var_212 = 1;
	}
	if ( var_211 >= 2 ) {
		var_211 = 1;
	}
	var_389 = 2;
	DSPLAY(103);
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾃﾞｨｱﾎﾞﾛは酷いダメージを受けた！";
	var_297 = "";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_389 = 0;
	var_198 = 0;
	return func009();
}
function func792(){
	func094();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "ﾃﾞｨｱﾎﾞﾛ「うっ！」";
	var_297 = "";
	var_25_1 = var_25[5];
	var_26_1 = var_26[5];
	var_27_1 = var_27[5];
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	var_293 = var_296;
	var_294 = var_297;
	var_296 = "しかし G･ｴｸｽﾍﾟﾘｴﾝｽの能力で";
	var_297 = "歯を一本 クラゲに変えて吸い取らせた";
	var_198 = 1;
	var_300 = 0;
	func047();
	func050();
	func340();
	func051();
	var_198 = 0;
	return func009();
}
function func793(){
	var_243 = 0;
	if ( var_1042 == 0 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「ジョジョも面白いけどさ、";
		var_294 = "なんと言っても一番なのは」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「岸辺露伴先生の";
		var_297 = "【ピンクダークの少年】だね」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 1 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「遠距離ｽﾀﾝﾄﾞも、ｺﾐｯｸｽで";
		var_294 = "強化できるって知ってたかい？」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「残り回数が増えるから、";
		var_297 = "無くなる前に増やした方がいいよ」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 2 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「ｺﾐｯｸｽを読んで";
		var_294 = "装備DISCを強化した時に、";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「まれに、いつもの３倍";
		var_297 = "強化されることがあるぞ」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 3 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「【ヤバイもの】も、";
		var_294 = "ｺﾐｯｸｽで回数を増やせるぜ」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「当然、関連のある部の";
		var_297 = "ｺﾐｯｸｽが必要だけどな」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 4 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙは3部でも4部でも";
		var_294 = "登場するｽﾀﾝﾄﾞだ」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「ｺﾐｯｸｽで強化するときも、";
		var_297 = "両方の部が使えるぞ。」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 5 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「忘れがちなことだが、";
		var_294 = "ｺﾐｯｸｽで呪いを解くことができる」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「もったいぶらずに";
		var_297 = "さっさと使っておいた方が良いぜ」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	if ( var_1042 == 6 ) {
		func094();
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		var_293 = "間田「露伴先生のカバンの中には、";
		var_294 = "漫画の資料が入っているらしい」";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
		func340();
		func094();
		var_293 = var_296;
		var_294 = var_297;
		var_296 = "間田「自分の漫画の原稿も入ってたり";
		var_297 = "するのかなぁ〜」";
		var_198 = 1;
		var_300 = 0;
		func047();
		func050();
		func340();
	}
	func051();
	var_198 = 0;
	return func009();
}
function func794(){
	var_243 = 0;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "ﾔｸ中の少年がフラフラと歩いている。";
	var_294 = "";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	func340();
	func051();
	var_245 = 19;
	var_246 = 45;
	var_546 = 1;
	var_3147 = 1;
	var_548 = 1;
	return func839();
}
function func795(){
	var_198 = 0;
	var_243 = 1;
	for(var i=0; i<3; i++){
		func337();
	}
	var_747 = 1;
	func091();
	var_2937 = 1;
	var_455 = var_347;
	var_456 = var_348;
	func660();
	var_2937 = 0;
	var_347 = var_1894;
	var_348 = var_1895;
	var_243 = 0;
	var_217 = 1;
	return func019();
}
function func796(){
	var_1205 = 1;
	var_3170 = 0;
	var_3171 = 0;
	var_3172 = 0;
	var_3173 = 0;
	var_3174 = 0;
	var_3175 = 0;
	var_3176 = 0;
	var_3177 = 0;
	var_3178 = 0;
	var_3179 = 1;
	var_3180 = 95;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_1032 + "G 入っています。";
	var_294 = "何G 口座に入れますか？";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<2; i++){
		func337();
	}
	return func798();
}
function func797(){
	var_1205 = 2;
	var_3170 = 0;
	var_3171 = 0;
	var_3172 = 0;
	var_3173 = 0;
	var_3174 = 0;
	var_3175 = 0;
	var_3176 = 0;
	var_3177 = 0;
	var_3178 = 0;
	var_3179 = 1;
	var_3180 = 95;
	var_293 = "";
	var_294 = "";
	var_295 = "";
	var_296 = "";
	var_297 = "";
	var_298 = "";
	var_299 = 0;
	var_293 = "" + var_1032 + "G 入っています。";
	var_294 = "何G 口座から出しますか？";
	var_198 = 1;
	var_300 = 0;
	var_25_1 = var_25[1];
	var_26_1 = var_26[1];
	var_27_1 = var_27[1];
	func047();
	for(var i=0; i<2; i++){
		func337();
	}
	return func798();
}
function func798(){
	func337();
	func080();
	if ( var_239 == 1 ) {
		var_1205 = 0;
		func799();
	}
	if ( var_254 == 1 && var_3179 != 6 ) {
		DSPLAY(100);
		var_3179 = var_3179 + 1;
		var_3180 = var_3180 - 15;
		func337();
		func337();
	}
	if ( var_257 == 1 && var_3179 != 1 ) {
		DSPLAY(100);
		var_3179 = var_3179 - 1;
		var_3180 = var_3180 + 15;
		func337();
		func337();
	}
	if ( var_255 == 1 ) {
		DSPLAY(100);
		if ( var_3179 == 1 ) {
			var_3170 = var_3170 + 1;
			if ( var_3170 == 10 ) {
				var_3170 = 0;
			}
		}
		if ( var_3179 == 2 ) {
			var_3171 = var_3171 + 1;
			if ( var_3171 == 10 ) {
				var_3171 = 0;
			}
		}
		if ( var_3179 == 3 ) {
			var_3172 = var_3172 + 1;
			if ( var_3172 == 10 ) {
				var_3172 = 0;
			}
		}
		if ( var_3179 == 4 ) {
			var_3173 = var_3173 + 1;
			if ( var_3173 == 10 ) {
				var_3173 = 0;
			}
		}
		if ( var_3179 == 5 ) {
			var_3174 = var_3174 + 1;
			if ( var_3174 == 10 ) {
				var_3174 = 0;
			}
		}
		if ( var_3179 == 6 ) {
			var_3175 = var_3175 + 1;
			if ( var_3175 == 10 ) {
				var_3175 = 0;
			}
		}
		var_3176 = var_3175 * 100000 + var_3174 * 10000 + var_3173 * 1000 + var_3172 * 100 + var_3171 * 10 + var_3170;
		if ( var_1205 == 1 && var_3176 > var_415 ) {
			var_3181 = var_415 / 100000;
			var_3182 = (var_415 - var_3181 * 100000) / 10000;
			var_3183 = (var_415 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_415;
		}
		var_3177 = var_1032 + var_3176;
		if ( var_1205 == 1 && var_3177 >= 999999 ) {
			var_3178 = 999999 - var_1032;
			var_3181 = var_3178 / 100000;
			var_3182 = (var_3178 - var_3181 * 100000) / 10000;
			var_3183 = (var_3178 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_3178;
		}
		if ( var_1205 == 2 && var_3176 > var_1032 ) {
			var_3181 = var_1032 / 100000;
			var_3182 = (var_1032 - var_3181 * 100000) / 10000;
			var_3183 = (var_1032 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_1032;
		}
		func337();
		func337();
	}
	if ( var_259 == 1 ) {
		DSPLAY(100);
		if ( var_3179 == 1 ) {
			var_3170 = var_3170 - 1;
			if ( var_3170 < 0 ) {
				var_3170 = 9;
			}
		}
		if ( var_3179 == 2 ) {
			var_3171 = var_3171 - 1;
			if ( var_3171 < 0 ) {
				var_3171 = 9;
			}
		}
		if ( var_3179 == 3 ) {
			var_3172 = var_3172 - 1;
			if ( var_3172 < 0 ) {
				var_3172 = 9;
			}
		}
		if ( var_3179 == 4 ) {
			var_3173 = var_3173 - 1;
			if ( var_3173 < 0 ) {
				var_3173 = 9;
			}
		}
		if ( var_3179 == 5 ) {
			var_3174 = var_3174 - 1;
			if ( var_3174 < 0 ) {
				var_3174 = 9;
			}
		}
		if ( var_3179 == 6 ) {
			var_3175 = var_3175 - 1;
			if ( var_3175 < 0 ) {
				var_3175 = 9;
			}
		}
		var_3176 = var_3175 * 100000 + var_3174 * 10000 + var_3173 * 1000 + var_3172 * 100 + var_3171 * 10 + var_3170;
		if ( var_1205 == 1 && var_3176 > var_415 ) {
			var_3181 = var_415 / 100000;
			var_3182 = (var_415 - var_3181 * 100000) / 10000;
			var_3183 = (var_415 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_415 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_415;
		}
		var_3177 = var_1032 + var_3176;
		if ( var_1205 == 1 && var_3177 >= 999999 ) {
			var_3178 = 999999 - var_1032;
			var_3181 = var_3178 / 100000;
			var_3182 = (var_3178 - var_3181 * 100000) / 10000;
			var_3183 = (var_3178 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_3178;
		}
		if ( var_1205 == 2 && var_3176 > var_1032 ) {
			var_3181 = var_1032 / 100000;
			var_3182 = (var_1032 - var_3181 * 100000) / 10000;
			var_3183 = (var_1032 - var_3181 * 100000 - var_3182 * 10000) / 1000;
			var_3184 = (var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100;
			var_3185 = (var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10;
			var_598 = var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
			var_3170 = var_598;
			var_3171 = var_3185;
			var_3172 = var_3184;
			var_3173 = var_3183;
			var_3174 = var_3182;
			var_3175 = var_3181;
			var_3176 = var_1032;
		}
		func337();
		func337();
	}
	if ( var_242 == 1 || var_244 == 1 ) {
		if ( var_1205 == 1 ) {
			var_1032 = var_1032 + var_3176;
			var_415 = var_415 - var_3176;
			return func799();
		}
		if ( var_1205 == 2 ) {
			var_1032 = var_1032 - var_3176;
			var_415 = var_415 + var_3176;
			if ( var_415 > 999999 ) {
				var_415 = 999999;
			}
			return func799();
		}
	}
	return func798();
}
function func799(){
	if ( var_1205 != 0 ) {
		DSPLAY(207);
		var_293 = "";
		var_294 = "";
		var_295 = "";
		var_296 = "";
		var_297 = "";
		var_298 = "";
		var_299 = 0;
		if ( var_1205 == 1 ) {
			var_293 = "" + var_3176 + "G 口座に入れた。";
			var_1205 = 0;
		}
		if ( var_1205 == 2 ) {
			var_293 = "" + var_3176 + "G 口座から出した。";
			var_1205 = 0;
		}
		var_294 = "　　　　";
		var_198 = 1;
		var_300 = 0;
		var_25_1 = var_25[1];
		var_26_1 = var_26[1];
		var_27_1 = var_27[1];
		func047();
	}
	for(var i=0; i<10; i++){
		func337();
	}
	return func009();
}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dbgprt(num) {
    //	console.log(num);
}
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							特殊グローバル変数									//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
var stat = 0;
var strsize;
var wparam;
var hwnd;
var mousex;
var mousey;
var refstr;
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							API用グローバル変数									//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
var position = [0, 0];
var canvases = [];
var canvases_position = [];
var contexts = [];
var context;
var target_window_id = 0;
var line_size;
var pre_render_canvas = document.createElement('canvas');
var pushing_key_list = [];
var alpha_mode = 0;
var alpha_color = "#ffffff";
var files = [];
var se = [];
var isClick = false;
var canvasSize = 0;
var pre_pos = [0, 0];
function is_changed(x, y) {
    if (pre_pos[0] == 0 && pre_pos[1] == 0) {
        return true;
    }
    var b1 = canvasSize / 3;
    var b2 = canvasSize / 3 * 2;
    if (((pre_pos[0] - b1) * (x - b1) < 0) ||
        ((pre_pos[0] - b2) * (x - b2) < 0) ||
        ((pre_pos[1] - b2) * (y - b2) < 0) ||
        ((pre_pos[1] - b2) * (y - b2) < 0)) {
        return true;
    }
    return false;
}
function reset_input(x, y) {
    pushing_key_list[37] = pushing_key_list[38] = pushing_key_list[39] = pushing_key_list[40] = 0;
    pushing_key_list[88] = pushing_key_list[90] = 0;
    if ((x <= 5) || (y <= 5) || (x >= canvasSize - 5) || (y >= canvasSize - 5)) {
        pre_pos = [0, 0];
        return;
    }
    var b1 = canvasSize / 3;
    var b2 = canvasSize / 3 * 2;
    if (x < b1) {
        pushing_key_list[37] = 1;
    }
    if (x > b2) {
        pushing_key_list[39] = 1;
    }
    if (y < b1) {
        pushing_key_list[38] = 1;
    }
    if (y > b2) {
        pushing_key_list[40] = 1;
    }
    if (b1 < x && x < b2 && b1 < y && y < b2) {
        pushing_key_list[88] = pushing_key_list[90] = 1;
    }
    pre_pos = [x, y];
}
function InitInput() {
    var canv = document.getElementById("c0");
    document.onkeydown = function (e) {
        pushing_key_list[e.keyCode] = 1;
    };
    document.onkeyup = function (e) {
        pushing_key_list[e.keyCode] = 0;
    };
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; ++i) {
        if (buttons[i].id == "XH") {
            buttons[i].onmousedown = function (e) {
                if (pushing_key_list[88] > 0) {
                    pushing_key_list[88] = 0;
                    this.style.border = 'inset 2px';
                }
                else {
                    pushing_key_list[88] = 1;
                    this.style.border = '';
                }
            };
            continue;
        }
        buttons[i].onmousedown = function (e) {
            pushing_key_list[this.id] = 1;
        };
        buttons[i].onmouseup = function (e) {
            pushing_key_list[this.id] = 0;
        };
    }
    ;
    canv.onmousedown = function (e) {
        reset_input(e.x, e.y);
        isClick = true;
    };
    canv.onmousemove = function (e) {
        if (isClick && is_changed(e.x, e.y)) {
            reset_input(e.x, e.y);
        }
    };
    canv.onmouseup = function (e) {
        reset_input(0, 0);
        isClick = false;
    };
    canv.ontouchstart = function (e) {
        reset_input(e.touches[0].clientX, e.touches[0].clientY);
        isClick = true;
    };
    canv.ontouchmove = function (e) {
        if (isClick && is_changed(e.touches[0].clientX, e.touches[0].clientY)) {
            reset_input(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
    canv.ontouchend = function (e) {
        reset_input(0, 0);
        isClick = false;
    };
}
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							デフォルトAPI									//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
var last_wait_time = new Date();
function await_(time) {
    var wait_time = Math.max(time - Math.max(0, new Date().getMilliseconds() - last_wait_time.getMilliseconds()), 0);
    last_wait_time = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), wait_time);
    });
}
function bgscr(data0, data1, data2, data3, data4, data5, data6 = null, data7 = null) { }
function bload(file_name, data_size = null, offset = null) {
    if (offset) {
        return files[file_name][offset];
    }
    if (file_name.split(".")[1] == "wav") {
        var audio = new Audio("se/" + file_name);
        audio.autoplay = false;
        audio.loop = false;
        return audio;
    }
    else if (file_name.split(".")[1] == "dat") {
        return files[file_name];
    }
}
function boxf(left = null, top = null, right = null, bottom = null) {
    left = left || 0;
    top = top || 0;
    right = right || 680;
    bottom = bottom || 680;
    if ((target_window_id == 4 || target_window_id == 7 || target_window_id == 10) && left == 0 && top == 0) {
        return context.clearRect(left, top, right - left, bottom - top);
    }
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillRect(left, top, right - left, bottom - top);
    context.globalAlpha = ga;
}
function bsave(file_name, data, data_size = null, offset = null) {
    offset = offset || -1;
    if (!files[file_name]) {
        files[file_name] = [];
    }
    files[file_name][offset] = data;
}
function buffer(id, disp_width = null, disp_height = null, mode = null) {
    target_window_id = id;
    var render_canvas;
    if (id != 0) {
        render_canvas = document.createElement('canvas');
        render_canvas.id = "c" + id;
    }
    else {
        render_canvas = document.getElementById("c0");
    }
    if (disp_width && disp_height) {
        render_canvas.width = disp_width;
        render_canvas.height = disp_height;
    }
    canvases[id] = render_canvas;
    contexts[id] = render_canvas.getContext('2d');
    gsel(id, target_window_id);
}
function button(data0, data1) { }
function cls(id) {
    contexts[id].fillStyle = ["#fff", "#ccc", "888", "444", "#000"][id];
    contexts[id].fillRect(0, 0, 680, 680);
}
function chdir(data0) { }
function chgdisp(data0 = null, data1 = null, data2 = null) { }
function chkbox(data0, data1) { }
function clrobj(data0 = null, data1 = null) { }
function color(red, green, blue) {
    context.strokeStyle = context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
}
function combox(data0, data1, data2) { }
function delete_(data0) { }
function dim(length1, length2 = null, length3 = null, length4 = null) {
    if (length4) {
        throw "4重配列なんてありませんよ";
    }
    var return_list = [];
    for (var i = 0; i < length1; i++) {
        if (length2) {
            return_list[i] = [];
            for (var j = 0; j < length2; j++) {
                if (length3) {
                    return_list[i][j] = [];
                    for (var k = 0; k < length3; k++) {
                        return_list[i][j][k] = 0;
                    }
                }
                else {
                    return_list[i][j] = 0;
                }
            }
        }
        else {
            return_list[i] = 0;
        }
    }
    return return_list;
}
function dirinfo(info_id) { }
function dirlist(data0, data1, data2 = null) { }
function end() {
    window.close();
}
function exist(file_name) {
    if (files[file_name]) {
        strsize = files[file_name].length;
    }
    else {
        strsize = -1;
    }
}
function font(font_type, font_size, font_style = null) {
    font_style = font_style || 0;
    var font_style_list = ["", "bold", "italic"];
    context.font = font_style_list[font_style] + " " + font_size + "px '" + font_type + "'";
    line_size = font_size;
}
function dialog(data0, data1, data2 = null) { }
function gcopy(org_buffer_id, x, y, img_width, img_height) {
    if (org_buffer_id == 25) {
        var ctx = canvases[org_buffer_id].getContext('2d');
        var imgd = ctx.getImageData(position[0], position[1], img_width, img_height);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i] * 0.3 + pix[i + 1] * 0.59 + pix[i + 2] * 0.11;
            pix[i] = grayscale;
            pix[i + 1] = grayscale;
            pix[i + 2] = grayscale;
        }
        context.putImageData(imgd, 0, 0);
        return;
    }
    context.drawImage(canvases[org_buffer_id], x, y, img_width, img_height, position[0], position[1], img_width, img_height);
}
function getkey(key_id) {
    return pushing_key_list[key_id] || 0;
}
function getstr(data0, data1, data2, data3) { }
function gettime(data0) { }
function ginfo(data_id) {
    switch (data_id) {
        case 2:
            return target_window_id;
        case 4:
            return 0;
        case 5:
            return 0;
        case 20:
            return 340;
        case 21:
            return 340;
        default:
            throw "未実装だ!";
    }
}
function gmode(mode, data2 = null, data3 = null, alpha = null) {
    alpha_mode = mode;
    switch (mode) {
        case 2:
            alpha_color = "#000000";
        default:
            context.globalAlpha = 1;
            break;
        case 4:
            alpha_color = context.fillStyle;
        case 3:
            context.globalAlpha = alpha / 255;
    }
}
function grotate(data0, data1, data2, data3, data4, data5) { }
function gsel(window_id, window_mode = null) {
    if (window_mode == 1) {
        canvases[window_id].style.display = "block";
    }
    if (window_mode == -1) {
        canvases[window_id].style.display = "none";
    }
    context = contexts[window_id];
    target_window_id = window_id;
}
function gzoom(data0, data1, data2, data3, data4, data5, data6, data7) { }
function input(data0, data1, data2, data3) { }
function instr(data0, data1, data2) { return 0; }
function limit(val, min_val, max_val) {
    return Math.max(min_val, Math.min(val, max_val));
}
function line(start_x, start_y, end_x, end_y) {
    context.beginPath();
    context.moveTo(start_x, start_y);
    context.lineTo(end_x, end_y);
    context.stroke();
}
function listbox(data0, data1, data2) { }
function mes(text) {
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillText(text, position[0], position[1] + line_size * 0.9);
    context.globalAlpha = ga;
    position[1] += line_size;
}
function mesbox(data0, data1, data2, data3) { }
function mkdir(data0) { }
function noteadd(data0, data1, data2) { }
function notedel(data0) { }
function noteget(data0, data1) { }
function noteinfo(data0) { return 0; }
function noteload(data0) { }
function notesave(data0) { }
function notesel(data0) { }
function objinfo(data0, data1, data2 = null) { }
function objmode(data0, data1) { }
function objprm(data0, data1) { }
function objsel(data0) { }
function objsize(data0, data1 = null) { }
function oncmd_gosub(func, event_id) { }
function onexit_goto(func) {
    window.onbeforeunload = func;
}
function onexit(data0) { }
function onkey(data0) { }
function palette(data1, data2, data3, data4 = null, data5 = null) { }
function peek(string_data, index) {
    switch (string_data.split("")[index]) {
        case "1":
            return 49;
        case "2":
            return 50;
        case "3":
            return 51;
        case "4":
            return 52;
        case "5":
            return 53;
        case "6":
            return 54;
        case "7":
            return 55;
        case "8":
            return 56;
        case "9":
            return 57;
        case "x":
            return 120;
        case "y":
            return 121;
        case "z":
            return 122;
        case "#":
            return 35;
        case ".":
            return 46;
        case "^":
            return 94;
        case "I":
            return 73;
        case "a":
            return 97;
        case "b":
            return 98;
        case "c":
            return 99;
        case "d":
            return 100;
        case "e":
            return 101;
        case "f":
            return 102;
        case "g":
            return 103;
        case "h":
            return 104;
        case "i":
            return 105;
        case "j":
            return 106;
        case "k":
            return 107;
        case "l":
            return 108;
        default:
            var data = string_data.split("")[index];
            //			throw "マッピングされてない値だッ"
            return index;
    }
}
function picload(img_name) {
    return __awaiter(this, void 0, void 0, function* () {
        let img = new Image();
        return new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = reject;
            img.src = "img/" + img_name + ".png";
        }).then(() => {
            canvases[target_window_id].width = img.width;
            canvases[target_window_id].height = img.height;
            contexts[target_window_id] = canvases[target_window_id].getContext('2d');
            contexts[target_window_id].drawImage(img, 0, 0);
        }).catch(() => {
            alert("データの読み込みに失敗しました。");
        });
    });
}
function poke(data0, data1, data2) { }
function pos(x, y) {
    position = [x, y];
}
function pset(pos_x, pos_y) {
    context.beginPath();
    context.arc(pos_x, pos_y, 1, 0, 6.28, false);
    context.fill();
}
function randomize() { }
function redraw(mode) {
    mode = 1;
    if (mode == 1 && pre_render_canvas) {
        context = contexts[target_window_id];
        context.drawImage(pre_render_canvas, 0, 0);
    }
    else {
        pre_render_canvas = document.createElement('canvas');
        pre_render_canvas.id = "pre";
        pre_render_canvas.width = 340;
        pre_render_canvas.height = 340;
        context = pre_render_canvas.getContext('2d');
    }
}
function rnd(num) {
    return Math.floor(Math.random() * num);
}
function screen_(id, display_width, display_height, init_mode, pos_x = null, pos_y = null) {
    if (id == 0) {
        display_width = 340;
        display_height = 340;
        canvasSize = display_width;
        document.getElementById("pad").style.top = "360px";
    }
    buffer(id, display_width, display_height, init_mode);
    canvases[id].style.top = pos_x;
    canvases[id].style.left = pos_y;
    document.body.appendChild(canvases[id]);
    canvases[id].style.display = "none";
}
function sendmsg(data0, data1, data2, data3) { }
function sdim(length1, length2 = null, length3 = null, length4 = null) {
    return dim(length1, length2, length3, length4);
}
function stick(data0, data1) {
    return 0;
}
function strmid(data0, data1, data2) { }
function title(window_name) {
    if (target_window_id == 0) {
        document.title = window_name;
    }
}
function wait(time) {
    //	last_wait_time = new Date();
    return new Promise((resolve, reject) => { setTimeout(() => resolve(), 10 * time); });
}
function width(width, height) { }
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							hmm.dll											//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
// #func HMMINIT "_HMMINIT@16" bmscr, int, int, int
function HMMINIT(data0) { }
/*
// #func HMMEND onexit "_HMMEND@16" int, int, int, int
#func DSINIT "_DSINIT@16" bmscr, int, int, int
#func DSEND "_DSEND@16" int, int, int, int
#func DSRELEASE "_DSRELEASE@16" int, int, int, int
#func DSLOADFNAME "_DSLOADFNAME@16" bmscr, str, int, int
#func DSLOADFNAME2 "_DSLOADFNAME2@16" bmscr, str, int, int
*/
// #func DSLOADMEMORY "_DSLOADMEMORY@16" var, int, int, int
function DSLOADMEMORY(audio_data, audio_id) {
    se[audio_id] = audio_data;
}
// #func DSPLAY "_DSPLAY@16" int, int, int, int
function DSPLAY(audio_id = null) {
    se[audio_id].currentTime = 0;
    se[audio_id].play();
}
/*
#func DSSTOP "_DSSTOP@16" int, int, int, int
#func DSGETVOLUME "_DSGETVOLUME@16" int, int, int, int
*/
// #func DSSETVOLUME "_DSSETVOLUME@16" int, int, int, int
function DSSETVOLUME(se_id, volume) {
    volume = 0; // デバッグ用に音量ゼロに
    se[se_id].volume = volume / 100;
}
// #func DSGETMASTERVOLUME "_DSGETMASTERVOLUME@16" int, int, int, int
function DSGETMASTERVOLUME() { }
// #func DSSETMASTERVOLUME "_DSSETMASTERVOLUME@16" int, int, int, int
function DSSETMASTERVOLUME(data0) { }
/*
#func DSSETMASTERFORMAT "_DSSETMASTERFORMAT@16" int, int, int, int
#func CHECKPLAY "_CHECKPLAY@16" int, int, int, int
#func DSDUPLICATE "_DSDUPLICATE@16" int, int, int, int
*/
// #func DMINIT "_DMINIT@16" bmscr, int, int, int
function DMINIT() { }
/*
#func DMEND "_DMEND@16" int, int, int, int
#func DMLOADFNAME "_DMLOADFNAME@16" bmscr, str, int, int
*/
// #func DMLOADMEMORY "_DMLOADMEMORY@16" var, int, int, int
function DMLOADMEMORY(data0, data1, data2) { }
// #func DMPLAY "_DMPLAY@16" int, int, int, int
function DMPLAY(data0, data1) { }
// #func DMSTOP "_DMSTOP@16" bmscr, int, int, int
function DMSTOP() { }
/*
#func DIINIT "_DIINIT@16" bmscr, int, int, int
#func DIEND "_DIEND@16" int, int, int, int
#func DIGETJOYNUM "_DIGETJOYNUM@16" int, int, int, int
#func DIGETJOYSTATE "_DIGETJOYSTATE@16" var, int, int, int
#func DIGETPASTJOYSTATE "_DIGETPASTJOYSTATE@16" var, int, int, int
#func DIGETKEEPJOYSTATE "_DIGETKEEPJOYSTATE@16" var, int, int, int
#func DIGETMOMENTJOYSTATE "_DIGETMOMENTJOYSTATE@16" var, int, int, int
#func DIGETKEYSTATE "_DIGETKEYSTATE@16" var, int, int, int
#func DIGETPASTKEYSTATE "_DIGETPASTKEYSTATE@16" var, int, int, int
#func DIGETKEEPKEYSTATE "_DIGETKEEPKEYSTATE@16" var, int, int, int
#func DIGETMOMENTKEYSTATE "_DIGETMOMENTKEYSTATE@16" var, int, int, int
#func DISTICK "_DISTICK@16" var, int, int, int
#func DIPLAYEFFECT "_DIPLAYEFFECT@16" int, int, int, int
#func DISTOPEFFECT "_DISTOPEFFECT@16" int, int, int, int
#func HMMBITON "_HMMBITON@16" var, int, int, int
#func HMMBITOFF "_HMMBITOFF@16" var, int, int, int
#func HMMBITCHECK "_HMMBITCHECK@16" int, int, int, int
#func HMMGETFPS "_HMMGETFPS@16" var, int, int, int
#func HMMGETSIN "_HMMGETSIN@16" var, int, int, int
#func HMMHITCHECK "_HMMHITCHECK@16" pexinfo, nullptr, nullptr, nullptr
#func HMMHITCHECKSETINDEX "_HMMHITCHECKSETINDEX@16" pexinfo, nullptr, nullptr, nullptr
#func DDINIT "_DDINIT@16" bmscr, int, int, int
#func DDSCREEN "_DDSCREEN@16" int, int, int, int
#func DDGSEL "_DDGSEL@16" int, int, int, int
#func DDLOADFNAME "_DDLOADFNAME@16" bmscr, str, int, int
#func DDBUFFER "_DDBUFFER@16" int, int, int, int
#func DDSETRECT "_DDSETRECT@16" int, int, int, int
#func DDGCOPY "_DDGCOPY@16" int, int, int, int
#func DDBOXF "_DDBOXF@16" int, int, int, int
#func DDCOLOR "_DDCOLOR@16" int, int, int, int
#func DDPRINT "_DDPRINT@16" bmscr, str, int, int
#func DDDRAWTEXT "_DDDRAWTEXT@16" bmscr, str, int, int
#func DDREDRAW "_DDREDRAW@16" int, int, int, int
#func DDSETRENEWALTIMING "_DDSETRENEWALTIMING@16" int, int, int, int
#func DDEND "_DDEND@16" int, int, int, int
#func DDBLENDGCOPY "_DDBLENDGCOPY@16" int, int, int, int
#func DDREVERSE "_DDREVERSE@16" int, int, int, int
#func DDADDGCOPY "_DDADDGCOPY@16" int, int, int, int
#func DDSUBGCOPY "_DDSUBGCOPY@16" int, int, int, int
#func DDLOADMEMORY "_DDLOADMEMORY@16" var, int, int, int
#func DDGZOOM "_DDGZOOM@16" int, int, int, int
#func DDPOS "_DDPOS@16" int, int, int, int
#func DDROTATEGCOPY "_DDROTATEGCOPY@16" int, int, int, int
#func DDGCOPY2 "_DDGCOPY2@16" int, int, int, int
#func DDADDGCOPYALL "_DDADDGCOPYALL@16" var, int, int, int
#func DDBGCOPY "_DDBGCOPY@16" int, int, int, int
#func DDPAINTGCOPY "_DDPAINTGCOPY@16" int, int, int, int
#func DGINIT "_DGINIT@16" bmscr, int, int, int
#func DGEND "_DGEND@16" int, int, int, int
#func DGSCREEN "_DGSCREEN@16" pexinfo, nullptr, nullptr, nullptr
#func DGCOLOR "_DGCOLOR@16" int, int, int, int
#func DGCLEAR "_DGCLEAR@16" int, int, int, int
#func DGRENEWALTIMING "_DGRENEWALTIMING@16" int, int, int, int
#func DGREDRAW "_DGREDRAW@16" int, int, int, int
#func DGGSEL "_DGGSEL@16" int, int, int, int
#func DGBUFFER "_DGBUFFER@16" int, int, int, int
#func DGLOADFNAME "_DGLOADFNAME@16" bmscr, str, int, int
#func DGLOADMEMORY "_DGLOADMEMORY@16" var, int, int, int
#func DGPOS "_DGPOS@16" int, int, int, int
#func DGRECT "_DGRECT@16" int, int, int, int
#func DGSCALEANDANGLE "_DGSCALEANDANGLE@16" int, int, int, int
#func DGBLENDMODE "_DGBLENDMODE@16" int, int, int, int
#func DGGCOPY "_DGGCOPY@16" int, int, int, int
#func DGFONT "_DGFONT@16" bmscr, str, int, int
#func DGDRAWTEXT "_DGDRAWTEXT@16" bmscr, str, int, int
#func DGBMPSAVE "_DGBMPSAVE@16" bmscr, str, int, int
#func DGTEXTURE "_DGTEXTURE@16" int, int, int, int
#func DGADDPRIMITIVE "_DGADDPRIMITIVE@16" int, int, int, int
#func DGDRAWPRIMITIVE "_DGDRAWPRIMITIVE@16" int, int, int, int
#func DGCREATEPRIMITIVE "_DGCREATEPRIMITIVE@16" int, int, int, int
#func DGLINE "_DGLINE@16" int, int, int, int
#func DSHINIT "_DSHINIT@16" bmscr, int, int, int
#func DSHEND "_DSHEND@16" int, int, int, int
#func DSHLOADFNAME "_DSHLOADFNAME@16" bmscr, str, int, int
#func DSHPLAY "_DSHPLAY@16" pexinfo, nullptr, nullptr, nullptr
#func DSHSTOP "_DSHSTOP@16" int, int, int, int
#func DSHPAUSE "_DSHPAUSE@16" int, int, int, int
#func DSHSETFULLSCREEN "_DSHSETFULLSCREEN@16" int, int, int, int
#func DSHSETSEEK "_DSHSETSEEK@16" int, int, int, int
#func DSHSETRATE "_DSHSETRATE@16" int, int, int, int
#func DSHSETVIDEOPARAM "_DSHSETVIDEOPARAM@16" pexinfo, nullptr, nullptr, nullptr
#func DSHGETORIGINALVIDEOSIZE "_DSHGETORIGINALVIDEOSIZE@16" pexinfo, nullptr, nullptr, nullptr
#func DSHCHECKPLAY "_DSHCHECKPLAY@16" int, int, int, int
#func DSHSETVOLUME "_DSHSETVOLUME@16" int, int, int, int
#func DSHGETPLAYPOSITION "_DSHGETPLAYPOSITION@16" pexinfo, nullptr, nullptr, nullptr
#func DSHSETVIDEOVISIBLE "_DSHSETVIDEOVISIBLE@16" int, int, int, int
#func DSHSETMOVIETODGBUFFER "_DSHSETMOVIETODGBUFFER@16" int, int, int, int
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							ck_joyforce.dll						//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
// #func ck_joystick "_ck_joystick@16" var, int, int, int
function ck_joystick(data0, data1 = null) {
    return 0;
}
/*
#func ck_joystickex "_ck_joystickex@16" var, int, int, int
#func ck_joyconfig "_ck_joyconfig@16" int, int, int, int
#func ck_joycaps "_ck_joycaps@16" var, int, int, int
#func ck_setforce "_ck_setforce@16" bmscr, int, int, int
#func ck_force "_ck_force@16" int, int, int, int
#func ck_sync "_ck_sync@16" int, int, int, int
#func ck_joybye onexit "_ck_joybye@16" int, int, int, int
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							pcbnet.hpi							//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
/*
#func netclose "_netclose@16" int, int, int, int
*/
function netclose(data0, data1 = null, data2 = null, data3 = null) { }
/*
#func neterror "_neterror@16" var, int, int, int
*/
// #func netfail "_netfail@16" int, int, int, int
function netfail(data0, data1 = null, data2 = null, data3 = null) { }
// #func netinit "_netinit@16" int, int, int, int
function netinit(data0, data1, data2, data3) { }
/*
#func netclear onexit "_netclear@16" int, int, int, int
*/
// #func tcpopen "_tcpopen@16" var, str, int, int
function tcpopen(data0, data1, data2) { }
/*
#func tcpmake "_tcpmake@16" var, int, int, int
*/
// #func tcpiscon "_tcpiscon@16" int, int, int, int
function tcpiscon(data0) { }
/*
#func tcpinfo "_tcpinfo@16" var, int, int, int
#func tcpport "_tcpport@16" var, int, int, int
*/
// #func tcpcount "_tcpcount@16" var, int, int, int
function tcpcount(data0, data1) { }
/*
#func tcpqueue "_tcpqueue@16" var, int, int, int
#func tcpwait "_tcpwait@16" int, int, int, int
#func tcpaccept "_tcpaccept@16" var, int, int, prefstr
#func tcpshut "_tcpshut@16" int, int, int, int
#func tcprecv "_tcprecv@16" var, int, int, int
#func tcpget "_tcpget@16" var, int, int, int
#func tcpgetc "_tcpgetc@16" var, int, int, int
#func tcpgetw "_tcpgetw@16" var, int, int, int
#func tcpgetd "_tcpgetd@16" var, int, int, int
*/
// #func tcpgetl "_tcpgetl@16" var, int, int, int
function tcpgetl(data0, data1, data2) { }
/*
#func tcpdisc "_tcpdisc@16" int, int, int, int
#func tcpsend "_tcpsend@16" var, int, int, int
*/
// #func tcpput "_tcpput@16" bmscr, str, int, int
function tcpput(data0, data1) { }
/*
#func tcpputc "_tcpputc@16" int, int, int, int
#func tcpputw "_tcpputw@16" int, int, int, int
#func tcpputd "_tcpputd@16" int, int, int, int
#func tcppeek "_tcppeek@16" var, int, int, int
#func tcppeekc "_tcppeekc@16" var, int, int, int
#func tcppeekw "_tcppeekw@16" var, int, int, int
#func tcppeekd "_tcppeekd@16" var, int, int, int
#func udpsock "_udpsock@16" var, int, int, int
#func udpsendto "_udpsendto@16" int, str, int, int
#func udpiscon "_udpiscon@16" int, int, int, int
#func udpinfo "_udpinfo@16" var, int, int, int
#func udpport "_udpport@16" var, int, int, int
#func udpcount "_udpcount@16" var, int, int, int
#func udpcheck "_udpcheck@16" var, int, int, int
#func udpmax "_udpmax@16" var, int, int, int
#func udpsent "_udpsent@16" int, int, int, int
#func udpttl "_udpttl@16" int, int, int, int
#func udpmjoin "_udpmjoin@16" int, str, int, int
#func udpmdrop "_udpmdrop@16" int, str, int, int
#func udpmttl "_udpmttl@16" int, int, int, int
#func udpbcast "_udpbcast@16" int, int, int, int
#func udpsend "_udpsend@16" var, int, int, int
#func udprecv "_udprecv@16" var, int, int, int
#func udppeek "_udppeek@16" var, int, int, int
#func udpput "_udpput@16" bmscr, str, int, int
#func udpget "_udpget@16" var, int, int, int
#func dnsrequest "_dnsrequest@16" var, str, int, int
#func hostbyname "_hostbyname@16" var, str, int, int
#func hostbyaddr "_hostbyaddr@16" var, str, int, int
#func dnscheck "_dnscheck@16" int, int, int, int
#func dnsreply "_dnsreply@16" var, int, int, int
#func pingsend "_pingsend@16" var, str, int, int
#func pingcheck "_pingcheck@16" int, int, int, int
#func pingresult "_pingresult@16" var, int, int, prefstr
#func rasdial "_rasdial@16" bmscr, str, int, int
#func rasentry "_rasentry@16" var, int, int, int
#func rasenum "_rasenum@16" var, int, int, int
#func rashang "_rashang@16" int, int, int, int
#func xtoyl "_xtoyl@16" var, int, int, int
#func xtoys "_xtoys@16" var, int, int, int
#func calccs "_calccs@16" var, int, int, int
#func calcmd5 "_calcmd5@16" var, int, int, prefstr
#func getuid "_getuid@16" var, int, int, int
#func setuid "_setuid@16" int, int, int, int
#func ownip "_ownip@16" var, int, int, int
#func isip "_isip@16" bmscr, str, int, int
#func issocket "_issocket@16" int, int, int, int
#func tcpconf "_tcpconf@16" int, int, int, int
#func netstrict "_netstrict@16" int, int, int, int
#func netsilent "_netsilent@16" int, int, int, int
#func netbuffer "_netbuffer@16" int, int, int, int
#func netextra "_netextra@16" var, int, int, int
#func netdebug "_netdebug@16" var, int, int, int
#func pack "_pack@16" pexinfo, nullptr, nullptr, nullptr
#func unpack "_unpack@16" pexinfo, nullptr, nullptr, nullptr
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							USER32.DLL								//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
/*
#func ActivateKeyboardLayout "ActivateKeyboardLayout" sptr, sptr
#func AdjustWindowRect "AdjustWindowRect" sptr, sptr, sptr
#func AdjustWindowRectEx "AdjustWindowRectEx" sptr, sptr, sptr, sptr
#func AllowSetForegroundWindow "AllowSetForegroundWindow" sptr
#func AnimateWindow "AnimateWindow" sptr, sptr, sptr
#func AnyPopup "AnyPopup"
#func AppendMenuA "AppendMenuA" sptr, sptr, sptr, sptr
#func AppendMenuW "AppendMenuW" wptr, wptr, wptr, wptr
#func ArrangeIconicWindows "ArrangeIconicWindows" sptr
#func AttachThreadInput "AttachThreadInput" sptr, sptr, sptr
#func BeginDeferWindowPos "BeginDeferWindowPos" sptr
#func BeginPasptr "BeginPasptr" sptr, sptr
#func BlockInput "BlockInput" sptr
#func BringWindowToTop "BringWindowToTop" sptr
#func BroadcastSystemMessage "BroadcastSystemMessage" sptr, sptr, sptr, sptr, sptr
#func BroadcastSystemMessageA "BroadcastSystemMessageA" sptr, sptr, sptr, sptr, sptr
#func BroadcastSystemMessageW "BroadcastSystemMessageW" wptr, wptr, wptr, wptr, wptr
#func CallMsgFilter "CallMsgFilter" sptr, sptr
#func CallMsgFilterA "CallMsgFilterA" sptr, sptr
#func CallMsgFilterW "CallMsgFilterW" wptr, wptr
#func CallNextHookEx "CallNextHookEx" sptr, sptr, sptr, sptr
#func CallWindowProcA "CallWindowProcA" sptr, sptr, sptr, sptr, sptr
#func CallWindowProcW "CallWindowProcW" wptr, wptr, wptr, wptr, wptr
#func CascadeChildWindows "CascadeChildWindows" sptr, sptr
#func CascadeWindows "CascadeWindows" sptr, sptr, sptr, sptr, sptr
#func ChangeClipboardChain "ChangeClipboardChain" sptr, sptr
#func ChangeDisplaySettingsA "ChangeDisplaySettingsA" sptr, sptr
#func ChangeDisplaySettingsExA "ChangeDisplaySettingsExA" sptr, sptr, sptr, sptr, sptr
#func ChangeDisplaySettingsExW "ChangeDisplaySettingsExW" wptr, wptr, wptr, wptr, wptr
#func ChangeDisplaySettingsW "ChangeDisplaySettingsW" wptr, wptr
#func ChangeMenuA "ChangeMenuA" sptr, sptr, sptr, sptr, sptr
#func ChangeMenuW "ChangeMenuW" wptr, wptr, wptr, wptr, wptr
#func CharLowerA "CharLowerA" sptr
#func CharLowerBuffA "CharLowerBuffA" sptr, sptr
#func CharLowerBuffW "CharLowerBuffW" wptr, wptr
#func CharLowerW "CharLowerW" wptr
#func CharNextA "CharNextA" sptr
#func CharNextExA "CharNextExA" sptr, sptr, sptr
#func CharNextW "CharNextW" wptr
#func CharPrevA "CharPrevA" sptr, sptr
#func CharPrevExA "CharPrevExA" sptr, sptr, sptr, sptr
#func CharPrevW "CharPrevW" wptr, wptr
#func CharToOemA "CharToOemA" sptr, sptr
#func CharToOemBuffA "CharToOemBuffA" sptr, sptr, sptr
#func CharToOemBuffW "CharToOemBuffW" wptr, wptr, wptr
#func CharToOemW "CharToOemW" wptr, wptr
#func CharUpperA "CharUpperA" sptr
#func CharUpperBuffA "CharUpperBuffA" sptr, sptr
#func CharUpperBuffW "CharUpperBuffW" wptr, wptr
#func CharUpperW "CharUpperW" wptr
#func CheckDlgButton "CheckDlgButton" sptr, sptr, sptr
#func CheckMenuItem "CheckMenuItem" sptr, sptr, sptr
#func CheckMenuRadioItem "CheckMenuRadioItem" sptr, sptr, sptr, sptr, sptr
#func CheckRadioButton "CheckRadioButton" sptr, sptr, sptr, sptr
#func ChildWindowFromPosptr "ChildWindowFromPosptr" sptr, sptr, sptr
#func ChildWindowFromPosptrEx "ChildWindowFromPosptrEx" sptr, sptr, sptr, sptr
#func ClientToScreen "ClientToScreen" sptr, sptr
#func ClipCursor "ClipCursor" sptr
#func CloseClipboard "CloseClipboard"
#func CloseDesktop "CloseDesktop" sptr
#func CloseWindow "CloseWindow" sptr
#func CloseWindowStation "CloseWindowStation" sptr
#func CopyAcceleratorTableA "CopyAcceleratorTableA" sptr, sptr, sptr
#func CopyAcceleratorTableW "CopyAcceleratorTableW" wptr, wptr, wptr
#func CopyIcon "CopyIcon" sptr
#func CopyImage "CopyImage" sptr, sptr, sptr, sptr, sptr
#func CopyRect "CopyRect" sptr, sptr
#func CountClipboardFormats "CountClipboardFormats"
#func CreateAcceleratorTableA "CreateAcceleratorTableA" sptr, sptr
#func CreateAcceleratorTableW "CreateAcceleratorTableW" wptr, wptr
#func CreateCaret "CreateCaret" sptr, sptr, sptr, sptr
#func CreateCursor "CreateCursor" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func CreateDesktopA "CreateDesktopA" sptr, sptr, sptr, sptr, sptr, sptr
#func CreateDesktopW "CreateDesktopW" wptr, wptr, wptr, wptr, wptr, wptr
#func CreateDialogIndirectParamA "CreateDialogIndirectParamA" sptr, sptr, sptr, sptr, sptr
#func CreateDialogIndirectParamW "CreateDialogIndirectParamW" wptr, wptr, wptr, wptr, wptr
#func CreateDialogParamA "CreateDialogParamA" sptr, sptr, sptr, sptr, sptr
#func CreateDialogParamW "CreateDialogParamW" wptr, wptr, wptr, wptr, wptr
#func CreateIcon "CreateIcon" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func CreateIconFromResource "CreateIconFromResource" sptr, sptr, sptr, sptr
#func CreateIconFromResourceEx "CreateIconFromResourceEx" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func CreateIconIndirect "CreateIconIndirect" sptr
#func CreateMDIWindowA "CreateMDIWindowA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func CreateMDIWindowW "CreateMDIWindowW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func CreateMenu "CreateMenu"
#func CreatePopupMenu "CreatePopupMenu"
#func CreateWindowExA "CreateWindowExA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func CreateWindowExW "CreateWindowExW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func CreateWindowStationA "CreateWindowStationA" sptr, sptr, sptr, sptr
#func CreateWindowStationW "CreateWindowStationW" wptr, wptr, wptr, wptr
#func DdeAbandonTransaction "DdeAbandonTransaction" sptr, sptr, sptr
#func DdeAccessData "DdeAccessData" sptr, sptr
#func DdeAddData "DdeAddData" sptr, sptr, sptr, sptr
#func DdeClientTransaction "DdeClientTransaction" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func DdeCmpStringHandles "DdeCmpStringHandles" sptr, sptr
#func DdeConnect "DdeConnect" sptr, sptr, sptr, sptr
#func DdeConnectList "DdeConnectList" sptr, sptr, sptr, sptr, sptr
#func DdeCreateDataHandle "DdeCreateDataHandle" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func DdeCreateStringHandleA "DdeCreateStringHandleA" sptr, sptr, sptr
#func DdeCreateStringHandleW "DdeCreateStringHandleW" wptr, wptr, wptr
#func DdeDisconnect "DdeDisconnect" sptr
#func DdeDisconnectList "DdeDisconnectList" sptr
#func DdeEnableCallback "DdeEnableCallback" sptr, sptr, sptr
#func DdeFreeDataHandle "DdeFreeDataHandle" sptr
#func DdeFreeStringHandle "DdeFreeStringHandle" sptr, sptr
#func DdeGetData "DdeGetData" sptr, sptr, sptr, sptr
#func DdeGetLastError "DdeGetLastError" sptr
#func DdeImpersonateClient "DdeImpersonateClient" sptr
#func DdeInitializeA "DdeInitializeA" sptr, sptr, sptr, sptr
#func DdeInitializeW "DdeInitializeW" wptr, wptr, wptr, wptr
#func DdeKeepStringHandle "DdeKeepStringHandle" sptr, sptr
#func DdeNameService "DdeNameService" sptr, sptr, sptr, sptr
#func DdePostAdvise "DdePostAdvise" sptr, sptr, sptr
#func DdeQueryConvInfo "DdeQueryConvInfo" sptr, sptr, sptr
#func DdeQueryNextServer "DdeQueryNextServer" sptr, sptr
#func DdeQueryStringA "DdeQueryStringA" sptr, sptr, sptr, sptr, sptr
#func DdeQueryStringW "DdeQueryStringW" wptr, wptr, wptr, wptr, wptr
#func DdeReconnect "DdeReconnect" sptr
#func DdeSetQualityOfService "DdeSetQualityOfService" sptr, sptr, sptr
#func DdeSetUserHandle "DdeSetUserHandle" sptr, sptr, sptr
#func DdeUnaccessData "DdeUnaccessData" sptr
#func DdeUninitialize "DdeUninitialize" sptr
#func DefDlgProcA "DefDlgProcA" sptr, sptr, sptr, sptr
#func DefDlgProcW "DefDlgProcW" wptr, wptr, wptr, wptr
#func DefFrameProcA "DefFrameProcA" sptr, sptr, sptr, sptr, sptr
#func DefFrameProcW "DefFrameProcW" wptr, wptr, wptr, wptr, wptr
#func DefMDIChildProcA "DefMDIChildProcA" sptr, sptr, sptr, sptr
#func DefMDIChildProcW "DefMDIChildProcW" wptr, wptr, wptr, wptr
#func DefWindowProcA "DefWindowProcA" sptr, sptr, sptr, sptr
#func DefWindowProcW "DefWindowProcW" wptr, wptr, wptr, wptr
#func DeferWindowPos "DeferWindowPos" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func DeleteMenu "DeleteMenu" sptr, sptr, sptr
#func DestroyAcceleratorTable "DestroyAcceleratorTable" sptr
#func DestroyCaret "DestroyCaret"
#func DestroyCursor "DestroyCursor" sptr
#func DestroyIcon "DestroyIcon" sptr
#func DestroyMenu "DestroyMenu" sptr
#func DestroyWindow "DestroyWindow" sptr
#func DialogBoxIndirectParamA "DialogBoxIndirectParamA" sptr, sptr, sptr, sptr, sptr
#func DialogBoxIndirectParamW "DialogBoxIndirectParamW" wptr, wptr, wptr, wptr, wptr
#func DialogBoxParamA "DialogBoxParamA" sptr, sptr, sptr, sptr, sptr
#func DialogBoxParamW "DialogBoxParamW" wptr, wptr, wptr, wptr, wptr
#func DispatchMessageA "DispatchMessageA" sptr
#func DispatchMessageW "DispatchMessageW" wptr
#func DlgDirListA "DlgDirListA" sptr, sptr, sptr, sptr, sptr
#func DlgDirListComboBoxA "DlgDirListComboBoxA" sptr, sptr, sptr, sptr, sptr
#func DlgDirListComboBoxW "DlgDirListComboBoxW" wptr, wptr, wptr, wptr, wptr
#func DlgDirListW "DlgDirListW" sptr, sptr, sptr, sptr, sptr
#func DlgDirSelectComboBoxExA "DlgDirSelectComboBoxExA" sptr, sptr, sptr, sptr
#func DlgDirSelectComboBoxExW "DlgDirSelectComboBoxExW" wptr, wptr, wptr, wptr
#func DlgDirSelectExA "DlgDirSelectExA" sptr, sptr, sptr, sptr
#func DlgDirSelectExW "DlgDirSelectExW" wptr, wptr, wptr, wptr
#func DragDetect "DragDetect" sptr, sptr, sptr
#func DragObject "DragObject" sptr, sptr, sptr, sptr, sptr
#func DrawAnimatedRects "DrawAnimatedRects" sptr, sptr, sptr, sptr
#func DrawCaption "DrawCaption" sptr, sptr, sptr, sptr
#func DrawEdge "DrawEdge" sptr, sptr, sptr, sptr
#func DrawFocusRect "DrawFocusRect" sptr, sptr
#func DrawFrame "DrawFrame" sptr, sptr, sptr, sptr
#func DrawFrameControl "DrawFrameControl" sptr, sptr, sptr, sptr
#func DrawIcon "DrawIcon" sptr, sptr, sptr, sptr
#func DrawIconEx "DrawIconEx" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func DrawMenuBar "DrawMenuBar" sptr
#func DrawStateA "DrawStateA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func DrawStateW "DrawStateW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func DrawTextA "DrawTextA" sptr, sptr, sptr, sptr, sptr
#func DrawTextExA "DrawTextExA" sptr, sptr, sptr, sptr, sptr, sptr
#func DrawTextExW "DrawTextExW" wptr, wptr, wptr, wptr, wptr, wptr
#func DrawTextW "DrawTextW" sptr, sptr, sptr, sptr, sptr
#func EditWndProc "EditWndProc" sptr, sptr, sptr, sptr
#func EmptyClipboard "EmptyClipboard"
#func EnableMenuItem "EnableMenuItem" sptr, sptr, sptr
#func EnableScrollBar "EnableScrollBar" sptr, sptr, sptr
#func EnableWindow "EnableWindow" sptr, sptr
#func EndDeferWindowPos "EndDeferWindowPos" sptr
#func EndDialog "EndDialog" sptr, sptr
#func EndMenu "EndMenu"
#func EndPasptr "EndPasptr" sptr, sptr
#func EnumChildWindows "EnumChildWindows" sptr, sptr, sptr
#func EnumClipboardFormats "EnumClipboardFormats" sptr
#func EnumDesktopWindows "EnumDesktopWindows" sptr, sptr, sptr
#func EnumDesktopsA "EnumDesktopsA" sptr, sptr, sptr
#func EnumDesktopsW "EnumDesktopsW" wptr, wptr, wptr
#func EnumDisplayDevicesA "EnumDisplayDevicesA" sptr, sptr, sptr, sptr
#func EnumDisplayDevicesW "EnumDisplayDevicesW" wptr, wptr, wptr, wptr
#func EnumDisplayMonitors "EnumDisplayMonitors" sptr, sptr, sptr, sptr
#func EnumDisplaySettingsA "EnumDisplaySettingsA" sptr, sptr, sptr
#func EnumDisplaySettingsExA "EnumDisplaySettingsExA" sptr, sptr, sptr, sptr
#func EnumDisplaySettingsExW "EnumDisplaySettingsExW" wptr, wptr, wptr, wptr
#func EnumDisplaySettingsW "EnumDisplaySettingsW" wptr, wptr, wptr
#func EnumPropsA "EnumPropsA" sptr, sptr
#func EnumPropsExA "EnumPropsExA" sptr, sptr, sptr
#func EnumPropsExW "EnumPropsExW" wptr, wptr, wptr
#func EnumPropsW "EnumPropsW" wptr, wptr
#func EnumThreadWindows "EnumThreadWindows" sptr, sptr, sptr
#func EnumWindowStationsA "EnumWindowStationsA" sptr, sptr
#func EnumWindowStationsW "EnumWindowStationsW" wptr, wptr
#func EnumWindows "EnumWindows" sptr, sptr
#func EqualRect "EqualRect" sptr, sptr
#func ExcludeUpdateRgn "ExcludeUpdateRgn" sptr, sptr
#func ExitWindowsEx "ExitWindowsEx" sptr, sptr
#func FillRect "FillRect" sptr, sptr, sptr
#func FindWindowA "FindWindowA" sptr, sptr
#func FindWindowExA "FindWindowExA" sptr, sptr, sptr, sptr
#func FindWindowExW "FindWindowExW" wptr, wptr, wptr, wptr
#func FindWindowW "FindWindowW" wptr, wptr
#func FlashWindow "FlashWindow" sptr, sptr
#func FlashWindowEx "FlashWindowEx" sptr
#func FrameRect "FrameRect" sptr, sptr, sptr
#func FreeDDElParam "FreeDDElParam" sptr, sptr
#func GetActiveWindow "GetActiveWindow"
#func GetAltTabInfo "GetAltTabInfo" sptr, sptr, sptr, sptr, sptr
#func GetAltTabInfoA "GetAltTabInfoA" sptr, sptr, sptr, sptr, sptr
#func GetAltTabInfoW "GetAltTabInfoW" wptr, wptr, wptr, wptr, wptr
#func GetAncestor "GetAncestor" sptr, sptr
#func GetAsyncKeyState "GetAsyncKeyState" sptr
#func GetCapture "GetCapture"
#func GetCaretBlinkTime "GetCaretBlinkTime"
#func GetCaretPos "GetCaretPos" sptr
#func GetClassInfoA "GetClassInfoA" sptr, sptr, sptr
#func GetClassInfoExA "GetClassInfoExA" sptr, sptr, sptr
#func GetClassInfoExW "GetClassInfoExW" wptr, wptr, wptr
#func GetClassInfoW "GetClassInfoW" wptr, wptr, wptr
#func GetClassLongA "GetClassLongA" sptr, sptr
#func GetClassLongW "GetClassLongW" wptr, wptr
#func GetClassNameA "GetClassNameA" sptr, sptr, sptr
#func GetClassNameW "GetClassNameW" wptr, wptr, wptr
#func GetClassWord "GetClassWord" sptr, sptr
#func GetClientRect "GetClientRect" sptr, sptr
#func GetClipCursor "GetClipCursor" sptr
#func GetClipboardData "GetClipboardData" sptr
#func GetClipboardFormatNameA "GetClipboardFormatNameA" sptr, sptr, sptr
#func GetClipboardFormatNameW "GetClipboardFormatNameW" wptr, wptr, wptr
#func GetClipboardOwner "GetClipboardOwner"
#func GetClipboardSequenceNumber "GetClipboardSequenceNumber"
#func GetClipboardViewer "GetClipboardViewer"
#func GetComboBoxInfo "GetComboBoxInfo" sptr, sptr
#func GetCursor "GetCursor"
#func GetCursorInfo "GetCursorInfo" sptr
#func GetCursorPos "GetCursorPos" sptr
#func GetDC "GetDC" sptr
#func GetDCEx "GetDCEx" sptr, sptr, sptr
#func GetDesktopWindow "GetDesktopWindow"
#func GetDialogBaseUnits "GetDialogBaseUnits"
#func GetDlgCtrlID "GetDlgCtrlID" sptr
#func GetDlgItem "GetDlgItem" sptr, sptr
#func GetDlgItemsptr "GetDlgItemsptr" sptr, sptr, sptr, sptr
#func GetDlgItemTextA "GetDlgItemTextA" sptr, sptr, sptr, sptr
#func GetDlgItemTextW "GetDlgItemTextW" wptr, wptr, wptr, wptr
#func GetDoubleClickTime "GetDoubleClickTime"
#func GetFocus "GetFocus"
#func GetForegroundWindow "GetForegroundWindow"
#func GetGUIThreadInfo "GetGUIThreadInfo" sptr, sptr
#func GetGuiResources "GetGuiResources" sptr, sptr
#func GetIconInfo "GetIconInfo" sptr, sptr
#func GetInputDesktop "GetInputDesktop"
#func GetInputState "GetInputState"
#func GetKBCodePage "GetKBCodePage"
#func GetKeyNameTextA "GetKeyNameTextA" sptr, sptr, sptr
#func GetKeyNameTextW "GetKeyNameTextW" wptr, wptr, wptr
#func GetKeyState "GetKeyState" sptr
#func GetKeyboardLayout "GetKeyboardLayout" sptr
#func GetKeyboardLayoutList "GetKeyboardLayoutList" sptr, sptr
#func GetKeyboardLayoutNameA "GetKeyboardLayoutNameA" sptr
#func GetKeyboardLayoutNameW "GetKeyboardLayoutNameW" wptr
#func GetKeyboardState "GetKeyboardState" sptr
#func GetKeyboardType "GetKeyboardType" sptr
#func GetLastActivePopup "GetLastActivePopup" sptr
#func GetLastInputInfo "GetLastInputInfo" sptr
#func GetListBoxInfo "GetListBoxInfo" sptr
#func GetMenu "GetMenu" sptr
#func GetMenuBarInfo "GetMenuBarInfo" sptr, sptr, sptr, sptr
#func GetMenuCheckMarkDimensions "GetMenuCheckMarkDimensions"
#func GetMenuContextHelpId "GetMenuContextHelpId" sptr
#func GetMenuDefaultItem "GetMenuDefaultItem" sptr, sptr, sptr
#func GetMenuInfo "GetMenuInfo" sptr, sptr
#func GetMenuItemCount "GetMenuItemCount" sptr
#func GetMenuItemID "GetMenuItemID" sptr, sptr
#func GetMenuItemInfoA "GetMenuItemInfoA" sptr, sptr, sptr, sptr
#func GetMenuItemInfoW "GetMenuItemInfoW" wptr, wptr, wptr, wptr
#func GetMenuItemRect "GetMenuItemRect" sptr, sptr, sptr, sptr
#func GetMenuState "GetMenuState" sptr, sptr, sptr
#func GetMenuStringA "GetMenuStringA" sptr, sptr, sptr, sptr, sptr
#func GetMenuStringW "GetMenuStringW" wptr, wptr, wptr, wptr, wptr
#func GetMessageA "GetMessageA" sptr, sptr, sptr, sptr
#func GetMessageExtraInfo "GetMessageExtraInfo"
#func GetMessagePos "GetMessagePos"
#func GetMessageTime "GetMessageTime"
#func GetMessageW "GetMessageW" wptr, wptr, wptr, wptr
#func GetMonitorInfoA "GetMonitorInfoA" sptr, sptr
#func GetMonitorInfoW "GetMonitorInfoW" wptr, wptr
#func GetMouseMovePosptrsEx "GetMouseMovePosptrsEx" sptr, sptr, sptr, sptr, sptr
#func GetNextDlgGroupItem "GetNextDlgGroupItem" sptr, sptr, sptr
#func GetNextDlgTabItem "GetNextDlgTabItem" sptr, sptr, sptr
#func GetOpenClipboardWindow "GetOpenClipboardWindow"
#func GetParent "GetParent" sptr
#func GetPriorityClipboardFormat "GetPriorityClipboardFormat" sptr, sptr
#func GetProcessDefaultLayout "GetProcessDefaultLayout" sptr
#func GetProcessWindowStation "GetProcessWindowStation"
#func GetPropA "GetPropA" sptr, sptr
#func GetPropW "GetPropW" sptr, sptr
#func GetQueueStatus "GetQueueStatus" sptr
#func GetScrollBarInfo "GetScrollBarInfo" sptr, sptr, sptr
#func GetScrollInfo "GetScrollInfo" sptr, sptr, sptr
#func GetScrollPos "GetScrollPos" sptr, sptr
#func GetScrollRange "GetScrollRange" sptr, sptr, sptr, sptr
#func GetShellWindow "GetShellWindow"
#func GetSubMenu "GetSubMenu" sptr, sptr
#func GetSysColor "GetSysColor" sptr
#func GetSysColorBrush "GetSysColorBrush" sptr
#func GetSystemMenu "GetSystemMenu" sptr, sptr
#func GetSystemMetrics "GetSystemMetrics" sptr
#func GetTabbedTextExtentA "GetTabbedTextExtentA" sptr, sptr, sptr, sptr, sptr
#func GetTabbedTextExtentW "GetTabbedTextExtentW" wptr, wptr, wptr, wptr, wptr
#func GetThreadDesktop "GetThreadDesktop" sptr
#func GetTitleBarInfo "GetTitleBarInfo" sptr, sptr
#func GetTopWindow "GetTopWindow" sptr
#func GetUpdateRect "GetUpdateRect" sptr, sptr, sptr
#func GetUpdateRgn "GetUpdateRgn" sptr, sptr, sptr
#func GetUserObjectInformationA "GetUserObjectInformationA" sptr, sptr, sptr, sptr, sptr
#func GetUserObjectInformationW "GetUserObjectInformationW" wptr, wptr, wptr, wptr, wptr
#func GetUserObjectSecurity "GetUserObjectSecurity" sptr, sptr, sptr, sptr, sptr
#func GetWindow "GetWindow" sptr, sptr
#func GetWindowContextHelpId "GetWindowContextHelpId" sptr
#func GetWindowDC "GetWindowDC" sptr
#func GetWindowInfo "GetWindowInfo" sptr, sptr
*/
// #func GetWindowLongA "GetWindowLongA" sptr, sptr
function GetWindowLongA(data1, data2) { }
/*
#func GetWindowLongW "GetWindowLongW" wptr, wptr
#func GetWindowModuleFileName "GetWindowModuleFileName" sptr, sptr, sptr
#func GetWindowModuleFileNameA "GetWindowModuleFileNameA" sptr, sptr, sptr
#func GetWindowModuleFileNameW "GetWindowModuleFileNameW" wptr, wptr, wptr
#func GetWindowPlacement "GetWindowPlacement" sptr, sptr
#func GetWindowRect "GetWindowRect" sptr, sptr
#func GetWindowRgn "GetWindowRgn" sptr, sptr
#func GetWindowTextA "GetWindowTextA" sptr, sptr, sptr
#func GetWindowTextLengthA "GetWindowTextLengthA" sptr
#func GetWindowTextLengthW "GetWindowTextLengthW" wptr
#func GetWindowTextW "GetWindowTextW" wptr, wptr, wptr
#func GetWindowThreadProcessId "GetWindowThreadProcessId" sptr, sptr
#func GetWindowWord "GetWindowWord" sptr, sptr
#func GrayStringA "GrayStringA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func GrayStringW "GrayStringW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func HideCaret "HideCaret" sptr
#func HiliteMenuItem "HiliteMenuItem" sptr, sptr, sptr, sptr
#func IMPGetIMEA "IMPGetIMEA" sptr, sptr
#func IMPGetIMEW "IMPGetIMEW" wptr, wptr
#func IMPQueryIMEA "IMPQueryIMEA" sptr
#func IMPQueryIMEW "IMPQueryIMEW" wptr
#func IMPSetIMEA "IMPSetIMEA" sptr, sptr
#func IMPSetIMEW "IMPSetIMEW" wptr, wptr
#func ImpersonateDdeClientWindow "ImpersonateDdeClientWindow" sptr, sptr
#func InSendMessage "InSendMessage"
#func InSendMessageEx "InSendMessageEx" sptr
#func InflateRect "InflateRect" sptr, sptr, sptr
#func InsertMenuA "InsertMenuA" sptr, sptr, sptr, sptr, sptr
#func InsertMenuItemA "InsertMenuItemA" sptr, sptr, sptr, sptr
#func InsertMenuItemW "InsertMenuItemW" wptr, wptr, wptr, wptr
#func InsertMenuW "InsertMenuW" sptr, sptr, sptr, sptr, sptr
#func sptrersectRect "sptrersectRect" sptr, sptr, sptr
#func InvalidateRect "InvalidateRect" sptr, sptr, sptr
#func InvalidateRgn "InvalidateRgn" sptr, sptr, sptr
#func InvertRect "InvertRect" sptr, sptr
#func IsCharAlphaA "IsCharAlphaA" sptr
#func IsCharAlphaNumericA "IsCharAlphaNumericA" sptr
#func IsCharAlphaNumericW "IsCharAlphaNumericW" wptr
#func IsCharAlphaW "IsCharAlphaW" wptr
#func IsCharLowerA "IsCharLowerA" sptr
#func IsCharLowerW "IsCharLowerW" wptr
#func IsCharUpperA "IsCharUpperA" sptr
#func IsCharUpperW "IsCharUpperW" wptr
#func IsChild "IsChild" sptr, sptr
#func IsClipboardFormatAvailable "IsClipboardFormatAvailable" sptr
#func IsDialogMessage "IsDialogMessage" sptr, sptr
#func IsDialogMessageA "IsDialogMessageA" sptr, sptr
#func IsDialogMessageW "IsDialogMessageW" wptr, wptr
#func IsDlgButtonChecked "IsDlgButtonChecked" sptr, sptr
#func IsIconic "IsIconic" sptr
#func IsMenu "IsMenu" sptr
#func IsRectEmpty "IsRectEmpty" sptr
#func IsWindow "IsWindow" sptr
#func IsWindowEnabled "IsWindowEnabled" sptr
#func IsWindowUnicode "IsWindowUnicode" sptr
#func IsWindowVisible "IsWindowVisible" sptr
#func IsZoomed "IsZoomed" sptr
#func KillTimer "KillTimer" sptr, sptr
#func LoadAcceleratorsA "LoadAcceleratorsA" sptr, sptr
#func LoadAcceleratorsW "LoadAcceleratorsW" wptr, wptr
#func LoadBitmapA "LoadBitmapA" sptr, sptr
#func LoadBitmapW "LoadBitmapW" wptr, wptr
#func LoadCursorA "LoadCursorA" sptr, sptr
#func LoadCursorFromFileA "LoadCursorFromFileA" sptr
#func LoadCursorFromFileW "LoadCursorFromFileW" wptr
#func LoadCursorW "LoadCursorW" wptr, wptr
#func LoadIconA "LoadIconA" sptr, sptr
#func LoadIconW "LoadIconW" wptr, wptr
#func LoadImageA "LoadImageA" sptr, sptr, sptr, sptr, sptr, sptr
#func LoadImageW "LoadImageW" wptr, wptr, wptr, wptr, wptr, wptr
#func LoadKeyboardLayoutA "LoadKeyboardLayoutA" sptr, sptr
#func LoadKeyboardLayoutW "LoadKeyboardLayoutW" wptr, wptr
#func LoadMenuA "LoadMenuA" sptr, sptr
#func LoadMenuIndirectA "LoadMenuIndirectA" sptr
#func LoadMenuIndirectW "LoadMenuIndirectW" wptr
#func LoadMenuW "LoadMenuW" wptr, wptr
#func LoadStringA "LoadStringA" sptr, sptr, sptr, sptr
#func LoadStringW "LoadStringW" wptr, wptr, wptr, wptr
#func LockSetForegroundWindow "LockSetForegroundWindow" sptr
#func LockWindowUpdate "LockWindowUpdate" sptr
#func LockWorkStation "LockWorkStation"
#func LookupIconIdFromDirectory "LookupIconIdFromDirectory" sptr, sptr
#func LookupIconIdFromDirectoryEx "LookupIconIdFromDirectoryEx" sptr, sptr, sptr, sptr, sptr
#func MapDialogRect "MapDialogRect" sptr, sptr
#func MapVirtualKeyA "MapVirtualKeyA" sptr, sptr
#func MapVirtualKeyExA "MapVirtualKeyExA" sptr, sptr, sptr
#func MapVirtualKeyExW "MapVirtualKeyExW" wptr, wptr, wptr
#func MapVirtualKeyW "MapVirtualKeyW" sptr, sptr
#func MapWindowPosptrs "MapWindowPosptrs" sptr, sptr, sptr, sptr
#func MenuItemFromPosptr "MenuItemFromPosptr" sptr, sptr, sptr, sptr
#func MessageBeep "MessageBeep" sptr
#func MessageBoxA "MessageBoxA" sptr, sptr, sptr, sptr
#func MessageBoxExA "MessageBoxExA" sptr, sptr, sptr, sptr, sptr
#func MessageBoxExW "MessageBoxExW" wptr, wptr, wptr, wptr, wptr
#func MessageBoxIndirectA "MessageBoxIndirectA" sptr
#func MessageBoxIndirectW "MessageBoxIndirectW" wptr
#func MessageBoxW "MessageBoxW" wptr, wptr, wptr, wptr
#func ModifyMenuA "ModifyMenuA" sptr, sptr, sptr, sptr, sptr
#func ModifyMenuW "ModifyMenuW" wptr, wptr, wptr, wptr, wptr
#func MonitorFromPosptr "MonitorFromPosptr" sptr, sptr, sptr
#func MonitorFromRect "MonitorFromRect" sptr, sptr
#func MonitorFromWindow "MonitorFromWindow" sptr, sptr
#func MoveWindow "MoveWindow" sptr, sptr, sptr, sptr, sptr, sptr
#func MsgWaitForMultipleObjects "MsgWaitForMultipleObjects" sptr, sptr, sptr, sptr, sptr
#func MsgWaitForMultipleObjectsEx "MsgWaitForMultipleObjectsEx" sptr, sptr, sptr, sptr, sptr
#func NotifyWinEvent "NotifyWinEvent" sptr, sptr, sptr, sptr
#func OemKeyScan "OemKeyScan" sptr
#func OemToCharA "OemToCharA" sptr, sptr
#func OemToCharBuffA "OemToCharBuffA" sptr, sptr, sptr
#func OemToCharBuffW "OemToCharBuffW" wptr, wptr, wptr
#func OemToCharW "OemToCharW" wptr, wptr
#func OffsetRect "OffsetRect" sptr, sptr, sptr
#func OpenClipboard "OpenClipboard" sptr
#func OpenDesktopA "OpenDesktopA" sptr, sptr, sptr, sptr
#func OpenDesktopW "OpenDesktopW" wptr, wptr, wptr, wptr
#func OpenIcon "OpenIcon" sptr
#func OpenInputDesktop "OpenInputDesktop" sptr, sptr, sptr
#func OpenWindowStationA "OpenWindowStationA" sptr, sptr, sptr
#func OpenWindowStationW "OpenWindowStationW" wptr, wptr, wptr
#func PackDDElParam "PackDDElParam" sptr, sptr, sptr
#func PasptrDesktop "PasptrDesktop" sptr
#func PeekMessageA "PeekMessageA" sptr, sptr, sptr, sptr, sptr
#func PeekMessageW "PeekMessageW" wptr, wptr, wptr, wptr, wptr
#func PostMessageA "PostMessageA" sptr, sptr, sptr, sptr
#func PostMessageW "PostMessageW" wptr, wptr, wptr, wptr
#func PostQuitMessage "PostQuitMessage" sptr
#func PostThreadMessageA "PostThreadMessageA" sptr, sptr, sptr, sptr
#func PostThreadMessageW "PostThreadMessageW" wptr, wptr, wptr, wptr
#func PtInRect "PtInRect" sptr, sptr, sptr
#func RealChildWindowFromPosptr "RealChildWindowFromPosptr" sptr, sptr, sptr
#func RealGetWindowClass "RealGetWindowClass" sptr, sptr, sptr
#func RealGetWindowClassA "RealGetWindowClassA" sptr, sptr, sptr
#func RealGetWindowClassW "RealGetWindowClassW" wptr, wptr, wptr
#func RedrawWindow "RedrawWindow" sptr, sptr, sptr, sptr
#func RegisterClassA "RegisterClassA" sptr
#func RegisterClassExA "RegisterClassExA" sptr
#func RegisterClassExW "RegisterClassExW" wptr
#func RegisterClassW "RegisterClassW" wptr
#func RegisterClipboardFormatA "RegisterClipboardFormatA" sptr
#func RegisterClipboardFormatW "RegisterClipboardFormatW" wptr
#func RegisterDeviceNotificationA "RegisterDeviceNotificationA" sptr, sptr, sptr
#func RegisterDeviceNotificationW "RegisterDeviceNotificationW" wptr, wptr, wptr
#func RegisterHotKey "RegisterHotKey" sptr, sptr, sptr, sptr
#func RegisterWindowMessageA "RegisterWindowMessageA" sptr
#func RegisterWindowMessageW "RegisterWindowMessageW" wptr
#func ReleaseCapture "ReleaseCapture"
#func ReleaseDC "ReleaseDC" sptr, sptr
#func RemoveMenu "RemoveMenu" sptr, sptr, sptr
#func RemovePropA "RemovePropA" sptr, sptr
#func RemovePropW "RemovePropW" wptr, wptr
#func ReplyMessage "ReplyMessage" sptr
#func ReuseDDElParam "ReuseDDElParam" sptr, sptr, sptr, sptr, sptr
#func ScreenToClient "ScreenToClient" sptr, sptr
#func ScrollDC "ScrollDC" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func ScrollWindow "ScrollWindow" sptr, sptr, sptr, sptr, sptr
#func ScrollWindowEx "ScrollWindowEx" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func SendDlgItemMessageA "SendDlgItemMessageA" sptr, sptr, sptr, sptr, sptr
#func SendDlgItemMessageW "SendDlgItemMessageW" wptr, wptr, wptr, wptr, wptr
#func SendIMEMessageExA "SendIMEMessageExA" sptr, sptr
#func SendIMEMessageExW "SendIMEMessageExW" wptr, wptr
#func SendInput "SendInput" sptr, sptr, sptr
#func SendMessageA "SendMessageA" sptr, sptr, sptr, sptr
#func SendMessageCallbackA "SendMessageCallbackA" sptr, sptr, sptr, sptr, sptr, sptr
#func SendMessageCallbackW "SendMessageCallbackW" wptr, wptr, wptr, wptr, wptr, wptr
#func SendMessageTimeoutA "SendMessageTimeoutA" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func SendMessageTimeoutW "SendMessageTimeoutW" wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func SendMessageW "SendMessageW" wptr, wptr, wptr, wptr
#func SendNotifyMessageA "SendNotifyMessageA" sptr, sptr, sptr, sptr
#func SendNotifyMessageW "SendNotifyMessageW" wptr, wptr, wptr, wptr
#func SetActiveWindow "SetActiveWindow" sptr
#func SetCapture "SetCapture" sptr
#func SetCaretBlinkTime "SetCaretBlinkTime" sptr
#func SetCaretPos "SetCaretPos" sptr, sptr
#func SetClassLongA "SetClassLongA" sptr, sptr, sptr
#func SetClassLongW "SetClassLongW" wptr, wptr, wptr
#func SetClassWord "SetClassWord" sptr, sptr, sptr
#func SetClipboardData "SetClipboardData" sptr, sptr
#func SetClipboardViewer "SetClipboardViewer" sptr
#func SetCursor "SetCursor" sptr
#func SetCursorPos "SetCursorPos" sptr, sptr
#func SetDebugErrorLevel "SetDebugErrorLevel" sptr
#func SetDeskWallpaper "SetDeskWallpaper" sptr
#func SetDlgItemsptr "SetDlgItemsptr" sptr, sptr, sptr, sptr
#func SetDlgItemTextA "SetDlgItemTextA" sptr, sptr, sptr
#func SetDlgItemTextW "SetDlgItemTextW" wptr, wptr, wptr
#func SetDoubleClickTime "SetDoubleClickTime" sptr
#func SetFocus "SetFocus" sptr
#func SetForegroundWindow "SetForegroundWindow" sptr
#func SetKeyboardState "SetKeyboardState" sptr
#func SetLastErrorEx "SetLastErrorEx" sptr, sptr
#func SetLayeredWindowAttributes "SetLayeredWindowAttributes" sptr, sptr, sptr, sptr
#func SetMenu "SetMenu" sptr, sptr
#func SetMenuContextHelpId "SetMenuContextHelpId" sptr, sptr
#func SetMenuDefaultItem "SetMenuDefaultItem" sptr, sptr, sptr
#func SetMenuInfo "SetMenuInfo" sptr, sptr
#func SetMenuItemBitmaps "SetMenuItemBitmaps" sptr, sptr, sptr, sptr, sptr
#func SetMenuItemInfoA "SetMenuItemInfoA" sptr, sptr, sptr, sptr
#func SetMenuItemInfoW "SetMenuItemInfoW" wptr, wptr, wptr, wptr
#func SetMessageExtraInfo "SetMessageExtraInfo" sptr
#func SetMessageQueue "SetMessageQueue" sptr
#func SetParent "SetParent" sptr, sptr
#func SetProcessDefaultLayout "SetProcessDefaultLayout" sptr
#func SetProcessWindowStation "SetProcessWindowStation" sptr
#func SetPropA "SetPropA" sptr, sptr, sptr
#func SetPropW "SetPropW" wptr, wptr, wptr
#func SetRect "SetRect" sptr, sptr, sptr, sptr, sptr
#func SetRectEmpty "SetRectEmpty" sptr
#func SetScrollInfo "SetScrollInfo" sptr, sptr, sptr, sptr
#func SetScrollPos "SetScrollPos" sptr, sptr, sptr, sptr
#func SetScrollRange "SetScrollRange" sptr, sptr, sptr, sptr, sptr
#func SetShellWindow "SetShellWindow" sptr
#func SetSysColors "SetSysColors" sptr, sptr, sptr
#func SetSystemCursor "SetSystemCursor" sptr, sptr
#func SetThreadDesktop "SetThreadDesktop" sptr
#func SetTimer "SetTimer" sptr, sptr, sptr, sptr
#func SetUserObjectInformationA "SetUserObjectInformationA" sptr, sptr, sptr, sptr
#func SetUserObjectInformationW "SetUserObjectInformationW" wptr, wptr, wptr, wptr
#func SetUserObjectSecurity "SetUserObjectSecurity" sptr, sptr, sptr
#func SetWinEventHook "SetWinEventHook" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func SetWindowContextHelpId "SetWindowContextHelpId" sptr, sptr
*/
// #func SetWindowLongA "SetWindowLongA" sptr, sptr, sptr
function SetWindowLongA(data1, data2, data3) { }
/*
#func SetWindowLongW "SetWindowLongW" wptr, wptr, wptr
#func SetWindowPlacement "SetWindowPlacement" sptr, sptr
*/
// #func SetWindowPos "SetWindowPos" sptr, sptr, sptr, sptr, sptr, sptr, sptr
function SetWindowPos(hwnd, data1, data2, data3, data4, data5, data6) { }
/*
#func SetWindowRgn "SetWindowRgn" sptr, sptr, sptr
#func SetWindowTextA "SetWindowTextA" sptr, sptr
#func SetWindowTextW "SetWindowTextW" wptr, wptr
#func SetWindowWord "SetWindowWord" sptr, sptr, sptr
#func SetWindowsHookA "SetWindowsHookA" sptr, sptr
#func SetWindowsHookExA "SetWindowsHookExA" sptr, sptr, sptr, sptr
#func SetWindowsHookExW "SetWindowsHookExW" wptr, wptr, wptr, wptr
#func SetWindowsHookW "SetWindowsHookW" wptr, wptr
#func ShowCaret "ShowCaret" sptr
#func ShowCursor "ShowCursor" sptr
#func ShowOwnedPopups "ShowOwnedPopups" sptr, sptr
#func ShowScrollBar "ShowScrollBar" sptr, sptr, sptr
*/
// #func ShowWindow "ShowWindow" sptr, sptr
function ShowWindow(id, state) { }
/*
#func ShowWindowAsync "ShowWindowAsync" sptr, sptr
#func SubtractRect "SubtractRect" sptr, sptr, sptr
#func SwapMouseButton "SwapMouseButton" sptr
#func SwitchDesktop "SwitchDesktop" sptr
#func SystemParametersInfoA "SystemParametersInfoA" sptr, sptr, sptr, sptr
#func SystemParametersInfoW "SystemParametersInfoW" wptr, wptr, wptr, wptr
#func TabbedTextOutA "TabbedTextOutA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func TabbedTextOutW "TabbedTextOutW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func TileChildWindows "TileChildWindows" sptr, sptr
#func TileWindows "TileWindows" sptr, sptr, sptr, sptr, sptr
#func ToAscii "ToAscii" sptr, sptr, sptr, sptr, sptr
#func ToAsciiEx "ToAsciiEx" sptr, sptr, sptr, sptr, sptr, sptr
#func ToUnicode "ToUnicode" sptr, sptr, sptr, sptr, sptr, sptr
#func ToUnicodeEx "ToUnicodeEx" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func TrackMouseEvent "TrackMouseEvent" sptr
#func TrackPopupMenu "TrackPopupMenu" sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func TrackPopupMenuEx "TrackPopupMenuEx" sptr, sptr, sptr, sptr, sptr, sptr
#func TranslateAccelerator "TranslateAccelerator" sptr, sptr, sptr
#func TranslateAcceleratorA "TranslateAcceleratorA" sptr, sptr, sptr
#func TranslateAcceleratorW "TranslateAcceleratorW" wptr, wptr, wptr
#func TranslateMDISysAccel "TranslateMDISysAccel" sptr, sptr
#func TranslateMessage "TranslateMessage" sptr
#func UnhookWinEvent "UnhookWinEvent" sptr
#func UnhookWindowsHook "UnhookWindowsHook" sptr, sptr
#func UnhookWindowsHookEx "UnhookWindowsHookEx" sptr
#func UnionRect "UnionRect" sptr, sptr, sptr
#func UnloadKeyboardLayout "UnloadKeyboardLayout" sptr
#func UnpackDDElParam "UnpackDDElParam" sptr, sptr, sptr, sptr
#func UnregisterClassA "UnregisterClassA" sptr, sptr
#func UnregisterClassW "UnregisterClassW" wptr, wptr
#func UnregisterDeviceNotification "UnregisterDeviceNotification" sptr
#func UnregisterHotKey "UnregisterHotKey" sptr, sptr
#func UpdateLayeredWindow "UpdateLayeredWindow" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func UpdateWindow "UpdateWindow" sptr
#func UserHandleGrantAccess "UserHandleGrantAccess" sptr, sptr, sptr
#func ValidateRect "ValidateRect" sptr, sptr
#func ValidateRgn "ValidateRgn" sptr, sptr
#func VkKeyScanA "VkKeyScanA" sptr
#func VkKeyScanExA "VkKeyScanExA" sptr, sptr
#func VkKeyScanExW "VkKeyScanExW" wptr, wptr
#func VkKeyScanW "VkKeyScanW" sptr
#func WINNLSEnableIME "WINNLSEnableIME" sptr, sptr
#func WINNLSGetEnableStatus "WINNLSGetEnableStatus" sptr
#func WINNLSGetIMEHotkey "WINNLSGetIMEHotkey" sptr
#func WaitForInputIdle "WaitForInputIdle" sptr, sptr
#func WaitMessage "WaitMessage"
#func Win32PoolAllocationStats "Win32PoolAllocationStats" sptr, sptr, sptr, sptr, sptr, sptr
#func WinHelpA "WinHelpA" sptr, sptr, sptr, sptr
#func WinHelpW "WinHelpW" wptr, wptr, wptr, wptr
#func WindowFromDC "WindowFromDC" sptr
#func WindowFromPosptr "WindowFromPosptr" sptr, sptr
#func keybd_event "keybd_event" sptr, sptr, sptr, sptr
#func mouse_event "mouse_event" sptr, sptr, sptr, sptr, sptr
#func wsprsptrfA "wsprsptrfA" sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr, sptr
#func wsprsptrfW "wsprsptrfW" wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr, wptr
#func wvsprsptrfA "wvsprsptrfA" sptr, sptr, sptr
#func wvsprsptrfW "wvsprsptrfW" wptr, wptr, wptr
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//								kernel32							//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
/*
#func CreateMutexA "CreateMutexA" int, int, sptr
#cfunc GetLastError "GetLastError"
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							imm32									//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
function ImmGetContext(arg1) { }
function ImmSetOpenStatus(arg1, arg2) { }
function ImmReleaseContext(arg1, arg2) { }
function ImmGetOpenStatus(arg1) { }
/*
#cfunc ImmGetContext "ImmGetContext" sptr
#func ImmReleaseContext "ImmReleaseContext" sptr, sptr
#func ImmSetOpenStatus "ImmSetOpenStatus" sptr, sptr
#cfunc ImmGetOpenStatus "ImmGetOpenStatus" sptr
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							user32.dll								//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
/*
#func func_1 "SetWindowLongA" int, int, int
#cfunc func_2 "GetWindowLongA" int, int
*/
//////////////////////////////////////////////////////////////////////////////
//==========================================================================//
//							作成した関数								//
//==========================================================================//
//////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=adapter.js.map
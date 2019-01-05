var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dbgprt(num) {
}
function undef_func(str, arg = null) {
}
function data_update_for_debug(e) {
    var_404 = 1;
    var_704[88] = 1;
    var_704[34] = 1;
    var_704[93] = 2;
    var_526 = 2;
    var_993 = 1;
    var_704[218] = 1;
    var_704[235] = 1;
    var_704[221] = 2;
    var_523 = 1;
    var_524 = 1;
    var_759 = 2;
}
var stat = 0;
var strsize;
var wparam;
var hwnd;
var mousex;
var mousey;
var refstr;
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
var files = {};
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
    if (pushing_key_list[88] == 1 && pushing_key_list[90] == 1) {
        pushing_key_list[88] = pushing_key_list[90] = 0;
        document.getElementById("XH").style.border = '';
    }
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
function ResetDataAndReload(e) {
    localStorage.clear();
    location.reload();
}
function InitInput() {
    var canv = document.getElementById("c0");
    document.onkeydown = function (e) {
        pushing_key_list[e.keyCode] = 1;
        e.preventDefault();
    };
    document.onkeyup = function (e) {
        pushing_key_list[e.keyCode] = 0;
        e.preventDefault();
    };
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; ++i) {
        if (buttons[i].id == "reset_data") {
            buttons[i].onmouseup = ResetDataAndReload;
            buttons[i].ontouchend = ResetDataAndReload;
            continue;
        }
        if (buttons[i].id == "debug_data") {
            buttons[i].onmouseup = data_update_for_debug;
            buttons[i].ontouchend = data_update_for_debug;
            continue;
        }
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
            buttons[i].ontouchstart = function (e) {
                if (pushing_key_list[88] > 0) {
                    console.log(e);
                    pushing_key_list[88] = 0;
                    this["style"].border = 'inset 2px';
                }
                else {
                    pushing_key_list[88] = 1;
                    this["style"].border = '';
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
        buttons[i].ontouchstart = function (e) {
            pushing_key_list[this.id] = 1;
        };
        buttons[i].ontouchend = function (e) {
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
var last_wait_time = new Date();
function await_(time) {
    var wait_time = Math.max(time - Math.max(0, new Date().getMilliseconds() - last_wait_time.getMilliseconds()), 0);
    last_wait_time = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), wait_time);
    });
}
function bgscr(data0, data1, data2, data3, data4, data5, data6 = null, data7 = null) { undef_func("bgscr", [data0, data1, data2, data3, data4, data5, data6, data7]); }
function bload(file_name, data_size = null, offset = null) {
    if (file_name.split(".")[1] == "wav") {
        var audio = new Audio("se/" + file_name);
        audio.autoplay = false;
        audio.loop = false;
        return audio;
    }
    if (file_name.split(".")[1] == "mid") {
        return file_name;
    }
    if (file_name.split(".")[1] != "dat") {
        return [];
    }
    if (files[file_name] == undefined) {
        var load_data = window.localStorage.getItem(file_name);
        if (load_data != null) {
            files[file_name] = JSON.parse(load_data);
        }
        else {
            return;
        }
    }
    if (offset != null) {
        return files[file_name][offset];
    }
    else {
        return files[file_name][0];
    }
}
function boxf(left = null, top = null, right = null, bottom = null) {
    left = left || 0;
    top = top || 0;
    right = right || 680;
    bottom = bottom || 680;
    if ((target_window_id == 4 || target_window_id == 7 || target_window_id == 10 || target_window_id == 32) && left == 0 && top == 0) {
        return context.clearRect(left, top, right - left, bottom - top);
    }
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillRect(left, top, right - left, bottom - top);
    context.globalAlpha = ga;
}
function bsave(file_name, data, data_size = null, offset = null) {
    offset = offset == null ? 0 : offset;
    data_size = data_size == null ? 0 : data_size;
    if (!files[file_name]) {
        files[file_name] = {};
    }
    files[file_name][offset] = data;
    localStorage.setItem(file_name, JSON.stringify(files[file_name]));
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
function button(data0, data1) { undef_func("button", [data0, data1]); }
function cls(id) {
    contexts[id].fillStyle = ["#fff", "#ccc", "888", "444", "#000"][id];
    contexts[id].fillRect(0, 0, 680, 680);
}
function chdir(data0) { undef_func("chdir", [data0]); }
function chgdisp(data0 = null, data1 = null, data2 = null) { undef_func("chgdisp", [data0, data1, data2]); }
function chkbox(data0, data1) { undef_func("chkbox", [data0, data1]); }
function clrobj(data0 = null, data1 = null) { undef_func("clrobj", [data0, data1]); }
function color(red, green, blue) {
    context.strokeStyle = context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
}
function combox(data0, data1, data2) { undef_func("combox", [data0, data1, data2]); }
function delete_(data0) { undef_func("delete_", [data0]); }
function dim(length1, length2 = null, length3 = null, length4 = null) {
    if (length4 != null) {
        throw "4重配列なんてありませんよ";
    }
    var return_list = [];
    for (var i = 0; i < length1; i++) {
        if (length2 != null) {
            return_list[i] = [];
            for (var j = 0; j < length2; j++) {
                if (length3 != null) {
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
function dirinfo(data0) { undef_func("dirinfo", [data0]); }
function dirlist(data0, data1, data2 = null) { undef_func("dirlist", [data0, data1, data2]); }
function end() {
    window.close();
}
function exist(file_name) {
    bload(file_name);
    if (files[file_name]) {
        strsize = Object.keys(files[file_name]).length;
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
function dialog(data0, data1, data2 = null) { undef_func("dialog", [data0, data1]); }
function gcopy(org_buffer_id, x, y, img_width, img_height) {
    gzoom(img_width, img_height, org_buffer_id, x, y, img_width, img_height, null);
}
function getkey(key_id) {
    return pushing_key_list[key_id] || 0;
}
function ResetKey(key_id) {
    pushing_key_list[key_id] = 0;
}
function getstr(data0, data1, data2, data3) { undef_func("getstr", [data0, data1, data2, data3]); }
function gettime(data0) { undef_func("gettime", [data0]); }
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
        case 22:
            return position[0];
        case 23:
            return position[1];
        default:
            throw "未実装だ! - " + data_id;
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
function grotate(org_buffer_id, x, y, radian, img_width, img_height) {
    context.save();
    context.translate(x, y);
    context.rotate(radian);
    context.translate(-x, -y);
    gcopy(org_buffer_id, x, y, img_width, img_height);
    context.restore();
}
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
function gzoom(dst_size_x, dst_size_y, org_buffer_id, x, y, img_width, img_height, mode) {
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
    else if (org_buffer_id == 8 && (x == 760 && y == 920 || x > 400 && y < 350)) {
        context.globalCompositeOperation = "destination-out";
        context.drawImage(canvases[org_buffer_id], x, y, img_width, img_height, position[0], position[1], dst_size_x, dst_size_y);
        context.globalCompositeOperation = "source-over";
    }
    else {
        context.drawImage(canvases[org_buffer_id], x, y, img_width, img_height, position[0], position[1], dst_size_x, dst_size_y);
    }
}
function input(data0, data1, data2, data3) { undef_func("input", [data0, data1, data2, data3]); }
function instr(data0, data1, data2) { undef_func("instr", [data0, data1, data2]); return 0; }
function int(data0) {
    return parseInt(data0);
}
function limit(val, min_val, max_val) {
    return Math.max(min_val, Math.min(val, max_val));
}
function line(start_x, start_y, end_x, end_y) {
    context.beginPath();
    context.moveTo(start_x, start_y);
    context.lineTo(end_x, end_y);
    context.stroke();
}
function listbox(data0, data1, data2) { undef_func("listbox", [data0, data1, data2]); }
function mes(text) {
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillText(text, position[0], position[1] + line_size * 0.9);
    context.globalAlpha = ga;
    position[1] += line_size;
}
function mesbox(data0, data1, data2, data3) { undef_func("mesbox", [data0, data1, data2, data3]); }
function mkdir(data0) { undef_func("mkdir", [data0]); }
var selected_note = 0;
var note_data = [];
function noteadd(data, line_num, add_type) {
    if (add_type != 1) {
        throw "ERROR @ noteadd";
    }
    note_data[selected_note][line_num] = data;
}
function notedel(line_num) {
    note_data[selected_note].splice(line_num, 1);
}
function noteget(line_num) {
    return note_data[selected_note][line_num];
}
function noteinfo(info_type) {
    if (info_type == 0) {
        return note_data[selected_note].length;
    }
    else if (info_type == 1) {
        var sum = 0;
        for (var i in note_data[selected_note]) {
            sum += note_data[selected_note][i].length + 1;
        }
        return sum;
    }
}
function noteload(file_name) {
    note_data[selected_note] = bload(file_name);
}
function notesave(data0) {
    bsave(data0, note_data[selected_note]);
}
function notesel(note_id) {
    if (note_id == 0) {
        throw "ERROR @ notesel";
    }
    selected_note = note_id;
}
function objinfo(data0, data1, data2 = null) { undef_func("objinfo", [data0, data1, data2]); }
function objmode(data0, data1) { undef_func("objmode", [data0, data1]); }
function objprm(data0, data1) { undef_func("objprm", [data0, data1]); }
function objsel(data0) { undef_func("objsel", [data0]); }
function objsize(data0, data1 = null) { undef_func("objsize", [data0, data1]); }
function oncmd_gosub(func, event_id) { undef_func("oncmd_gosub", [func, event_id]); }
function onexit_goto(func) {
    window.onbeforeunload = func;
}
function onexit(data0) { undef_func("onexit", [data0]); }
function onkey(data0) { undef_func("onkey", [data0]); }
function palette(data0, data1, data2, data3 = null, data4 = null) { undef_func("palette", [data0, data1, data2, data3, data4]); }
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
            undef_func("peek", [string_data, index]);
            undef_func("peek", [string_data.split("")[index]]);
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
function poke(data0, data1, data2) { undef_func("poke", [data0, data1, data2]); }
function pos(x, y) {
    position = [x, y];
}
function pset(pos_x, pos_y) {
    context.beginPath();
    context.arc(pos_x, pos_y, 1, 0, 6.28, false);
    context.fill();
}
function randomize() { undef_func("randomize"); }
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
function sendmsg(data0, data1, data2, data3) { undef_func("sendmsg", [data0, data1, data2, data3]); }
function sdim(length1, length2 = null, length3 = null) {
    if (length2 == null) {
        return "";
    }
    var return_list = [];
    for (var i = 0; i < length2; i++) {
        if (length3 != null) {
            return_list[i] = [];
            for (var j = 0; j < length3; j++) {
                return_list[i][j] = "";
            }
        }
        else {
            return_list[i] = "";
        }
    }
    return return_list;
}
function stick(data0, data1) { undef_func("stick", [data0, data1]); return 0; }
function strmid(data0, data1, data2) { undef_func("strmid", [data0, data1, data2]); }
function title(window_name) {
    if (target_window_id == 0) {
        document.title = window_name;
    }
}
function wait(time) {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(), 10 * time); });
}
function width(data0, data1) { undef_func("width", [data0, data1]); }
function HMMINIT(data0) {
    stat = 1;
}
function DSLOADMEMORY(audio_data, audio_id) {
    se[audio_id] = audio_data;
}
function DSPLAY(audio_id = null) {
    se[audio_id].currentTime = 0;
    se[audio_id].play();
}
function DSSETVOLUME(se_id, volume) {
    se[se_id].volume = volume / 1000;
}
function DSGETMASTERVOLUME() { }
function DSSETMASTERVOLUME(data0) { }
function DMINIT() { }
function DMLOADMEMORY(music_id, data0, data1) {
    var music_list = {
        "0": "YLCIfDqgDIk",
        "102": "gvCmtHDDuu0",
        "315": "AuA0HQ4Zobc",
        "099": "X_pDwv3tpug",
        "302": "l482T0yNkeo",
        "312": "pL4uESRCnv8",
        "998": "JtmpcQ-hbxI",
        "987": "fCULDFsbA9Y",
        "104": "v3JaosE-gZE",
        "992": "mdt0SOqPJcg",
        "991": "2s4slliAtQU",
        "116": "p6gKe9Fr2ok",
        "201": "vOJRILBRS5o",
        "107": "bSfqNEvykv0",
        "202": "D-dONCnY_Yg",
        "997": "pHa4pvspCqc",
        "412": "rnKbImRPhTE",
        "319": "zDKO6XYXioc",
        "117": "0aU57V6VBW0",
        "122": "-Ro8-ngA8gs",
        "311": "MjMCaw4qzjg",
        "414": "I8JULmUlGDA",
        "305": "6j7E7pvLxmI",
        "113": "bJ9r8LMU9bQ",
        "123": "PE9HvSdcaL4",
        "200": "-cmo6MRYf5g",
        "313": "UAKCR7kQMTQ",
        "985": "9sGy_-p_sVE",
        "308": "56u6g0POvo0",
        "111": "OXqnHLXZugA",
        "120": "Ixrje2rXLMA",
        "411": "iDNtqy0zjJA",
        "988": "EqPtz5qN7HM",
        "986": "kZ8KK8u9dN8",
        "401": "eBG7P-K-r1Y",
        "207": "QV-2EJnfzjY",
        "402": "AYUdldNzLNA",
        "995": "usfiAsWR4qU",
        "203": "hLhN__oEHaw",
        "121": "fjwWjx7Cw8I",
        "317": "iZq3i94mSsQ",
        "205": "KFq2pU21cNU",
        "303": "ZunGXrbS0hQ",
        "994": "ZDwotNLyz10",
        "396": "D9ioyEvdggk",
        "999": "CWzrABouyeE",
        "981": "s__rX_WL100",
        "306": "5ZF6m659-z0",
        "320": "Mrhg66cVPGw",
        "408": "PivWY9wn5ps",
        "101": "1dmt5o0DjaU",
        "124": "cjImFYf2Vzc",
        "301": "pO8kTRv4l3o",
        "310": "La4Dcd1aUcE",
        "206": "bx1Bh8ZvH84",
        "109": "0pyxKqdtrH8",
        "300": "qM0zINtulhM",
        "404": "p3j2NYZ8FKs",
        "978": "UnVBS0ZkARw",
        "103": "HuBqE9xGtiQ",
        "106": "cWGE9Gi0bB0",
        "980": "N3oCS85HvpY",
        "405": "3T1c7GkzRQQ",
        "996": "rblt2EtFfC4",
        "115": "7IQE62Vn4_U",
        "395": "rY0WxgSXdEE",
        "990": "fJ9rUzIMcZQ",
        "112": "2ZBtPf7FOoM",
        "204": "rkHF_JMnB8o",
        "993": "wJzNZ1c5C9c",
        "105": "Mr_uHJPUlO8",
        "108": "Fmfi3UbDPnQ",
        "318": "XCMrXC8D05Q",
        "403": "cBojbjoMttI",
        "309": "WSv2gLT0jkU",
        "119": "gJLIiF15wjQ",
        "409": "pAuPMJlK92s",
        "400": "d27gTrPPAyk",
        "407": "ZuI61cTNbAk",
        "314": "mbAyj1h9vI0",
        "316": "btPJPFnesV4",
        "989": "JB6WZu8IAZg",
        "118": "uZ4PZOfVnP8",
        "304": "Ae0nwSv6cTU",
        "114": "unHzLEA6gvI",
    };
    var link_id = music_list[music_id.split(".")[0]];
    if (link_id) {
        var a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "https://www.youtube.com/watch?v=" + link_id;
        var iframe = document.getElementById("bgm");
        iframe.src = "https://www.youtube.com/embed/" + link_id;
    } else {
        var a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "";
        var iframe = document.getElementById("bgm");
        iframe.src = "";
    }
}
function DMPLAY(data0, data1) { }
function DMSTOP() { }
function ck_joystick(data0, data1 = null) {
    return 0;
}
function netclose(data0, data1 = null, data2 = null, data3 = null) { }
function netfail(data0, data1 = null, data2 = null, data3 = null) { }
function netinit(data0, data1, data2, data3) { }
function tcpopen(data0, data1, data2) { }
function tcpiscon(data0) { }
function tcpcount(data0, data1) { }
function tcpgetl(data0, data1, data2) { }
function tcpput(data0, data1) { }
function GetWindowLongA(data1, data2) { }
function SetWindowLongA(data1, data2, data3) { }
function SetWindowPos(hwnd, data1, data2, data3, data4, data5, data6) { }
function ShowWindow(id, state) { }
function ImmGetContext(arg1) { }
function ImmSetOpenStatus(arg1, arg2) { }
function ImmReleaseContext(arg1, arg2) { }
function ImmGetOpenStatus(arg1) { }

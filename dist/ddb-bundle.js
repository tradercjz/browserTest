var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/xshell/platform.common.js
function set_platform(_platform) {
  platform = _platform;
}
var platform;
var init_platform_common = __esm({
  "node_modules/xshell/platform.common.js"() {
  }
});

// node_modules/emoji-regex/index.mjs
var emoji_regex_default;
var init_emoji_regex = __esm({
  "node_modules/emoji-regex/index.mjs"() {
    emoji_regex_default = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
  }
});

// node_modules/xshell/node_modules/i18next/dist/esm/i18next.js
function createProxy() {
  const state = [];
  const handler = /* @__PURE__ */ Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY) return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
  const {
    [PATH_KEY]: path
  } = selector(createProxy());
  return path.join(opts?.keySeparator ?? ".");
}
var isString, defer, makeString, copy, lastOfPathSeparatorRegExp, cleanKey, canNotTraverseDeeper, getLastOfPath, setPath, pushPath, getPath, getPathWithDefaults, deepExtend, regexEscape, _entityMap, escape, RegExpCache, chars, looksLikeObjectPathRegExpCache, looksLikeObjectPath, deepFind, getCleanedCode, consoleLogger, Logger, baseLogger, EventEmitter, ResourceStore, postProcessor, PATH_KEY, checkedLoadedFor, shouldHandleAsObject, Translator, LanguageUtil, suffixesOrder, dummyRule, PluralResolver, deepFindWithDefaults, regexSafe, Interpolator, parseFormatStr, createCachedFormatter, createNonCachedFormatter, Formatter, removePending, Connector, get, transformOptions, noop, bindMemberFunctions, I18n, instance, createInstance, dir, init, loadResources, reloadResources, use, changeLanguage, getFixedT, t, exists, setDefaultNamespace, hasLoadedNamespace, loadNamespaces, loadLanguages;
var init_i18next = __esm({
  "node_modules/xshell/node_modules/i18next/dist/esm/i18next.js"() {
    isString = (obj) => typeof obj === "string";
    defer = () => {
      let res;
      let rej;
      const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
      promise.resolve = res;
      promise.reject = rej;
      return promise;
    };
    makeString = (object) => {
      if (object == null) return "";
      return "" + object;
    };
    copy = (a2, s2, t6) => {
      a2.forEach((m) => {
        if (s2[m]) t6[m] = s2[m];
      });
    };
    lastOfPathSeparatorRegExp = /###/g;
    cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
    canNotTraverseDeeper = (object) => !object || isString(object);
    getLastOfPath = (object, path, Empty) => {
      const stack = !isString(path) ? path : path.split(".");
      let stackIndex = 0;
      while (stackIndex < stack.length - 1) {
        if (canNotTraverseDeeper(object)) return {};
        const key = cleanKey(stack[stackIndex]);
        if (!object[key] && Empty) object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          object = object[key];
        } else {
          object = {};
        }
        ++stackIndex;
      }
      if (canNotTraverseDeeper(object)) return {};
      return {
        obj: object,
        k: cleanKey(stack[stackIndex])
      };
    };
    setPath = (object, path, newValue) => {
      const {
        obj,
        k
      } = getLastOfPath(object, path, Object);
      if (obj !== void 0 || path.length === 1) {
        obj[k] = newValue;
        return;
      }
      let e2 = path[path.length - 1];
      let p = path.slice(0, path.length - 1);
      let last = getLastOfPath(object, p, Object);
      while (last.obj === void 0 && p.length) {
        e2 = `${p[p.length - 1]}.${e2}`;
        p = p.slice(0, p.length - 1);
        last = getLastOfPath(object, p, Object);
        if (last?.obj && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
          last.obj = void 0;
        }
      }
      last.obj[`${last.k}.${e2}`] = newValue;
    };
    pushPath = (object, path, newValue, concat2) => {
      const {
        obj,
        k
      } = getLastOfPath(object, path, Object);
      obj[k] = obj[k] || [];
      obj[k].push(newValue);
    };
    getPath = (object, path) => {
      const {
        obj,
        k
      } = getLastOfPath(object, path);
      if (!obj) return void 0;
      if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
      return obj[k];
    };
    getPathWithDefaults = (data, defaultData, key) => {
      const value = getPath(data, key);
      if (value !== void 0) {
        return value;
      }
      return getPath(defaultData, key);
    };
    deepExtend = (target, source, overwrite) => {
      for (const prop in source) {
        if (prop !== "__proto__" && prop !== "constructor") {
          if (prop in target) {
            if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
              if (overwrite) target[prop] = source[prop];
            } else {
              deepExtend(target[prop], source[prop], overwrite);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
      return target;
    };
    regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    _entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    escape = (data) => {
      if (isString(data)) {
        return data.replace(/[&<>"'\/]/g, (s2) => _entityMap[s2]);
      }
      return data;
    };
    RegExpCache = class {
      constructor(capacity) {
        this.capacity = capacity;
        this.regExpMap = /* @__PURE__ */ new Map();
        this.regExpQueue = [];
      }
      getRegExp(pattern) {
        const regExpFromCache = this.regExpMap.get(pattern);
        if (regExpFromCache !== void 0) {
          return regExpFromCache;
        }
        const regExpNew = new RegExp(pattern);
        if (this.regExpQueue.length === this.capacity) {
          this.regExpMap.delete(this.regExpQueue.shift());
        }
        this.regExpMap.set(pattern, regExpNew);
        this.regExpQueue.push(pattern);
        return regExpNew;
      }
    };
    chars = [" ", ",", "?", "!", ";"];
    looksLikeObjectPathRegExpCache = new RegExpCache(20);
    looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
      nsSeparator = nsSeparator || "";
      keySeparator = keySeparator || "";
      const possibleChars = chars.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
      if (possibleChars.length === 0) return true;
      const r2 = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
      let matched = !r2.test(key);
      if (!matched) {
        const ki = key.indexOf(keySeparator);
        if (ki > 0 && !r2.test(key.substring(0, ki))) {
          matched = true;
        }
      }
      return matched;
    };
    deepFind = (obj, path, keySeparator = ".") => {
      if (!obj) return void 0;
      if (obj[path]) {
        if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
        return obj[path];
      }
      const tokens = path.split(keySeparator);
      let current = obj;
      for (let i2 = 0; i2 < tokens.length; ) {
        if (!current || typeof current !== "object") {
          return void 0;
        }
        let next;
        let nextPath = "";
        for (let j = i2; j < tokens.length; ++j) {
          if (j !== i2) {
            nextPath += keySeparator;
          }
          nextPath += tokens[j];
          next = current[nextPath];
          if (next !== void 0) {
            if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
              continue;
            }
            i2 += j - i2 + 1;
            break;
          }
        }
        current = next;
      }
      return current;
    };
    getCleanedCode = (code) => code?.replace("_", "-");
    consoleLogger = {
      type: "logger",
      log(args) {
        this.output("log", args);
      },
      warn(args) {
        this.output("warn", args);
      },
      error(args) {
        this.output("error", args);
      },
      output(type, args) {
        console?.[type]?.apply?.(console, args);
      }
    };
    Logger = class _Logger {
      constructor(concreteLogger, options = {}) {
        this.init(concreteLogger, options);
      }
      init(concreteLogger, options = {}) {
        this.prefix = options.prefix || "i18next:";
        this.logger = concreteLogger || consoleLogger;
        this.options = options;
        this.debug = options.debug;
      }
      log(...args) {
        return this.forward(args, "log", "", true);
      }
      warn(...args) {
        return this.forward(args, "warn", "", true);
      }
      error(...args) {
        return this.forward(args, "error", "");
      }
      deprecate(...args) {
        return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
      }
      forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
        return this.logger[lvl](args);
      }
      create(moduleName) {
        return new _Logger(this.logger, {
          ...{
            prefix: `${this.prefix}:${moduleName}:`
          },
          ...this.options
        });
      }
      clone(options) {
        options = options || this.options;
        options.prefix = options.prefix || this.prefix;
        return new _Logger(this.logger, options);
      }
    };
    baseLogger = new Logger();
    EventEmitter = class {
      constructor() {
        this.observers = {};
      }
      on(events, listener) {
        events.split(" ").forEach((event) => {
          if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
          const numListeners = this.observers[event].get(listener) || 0;
          this.observers[event].set(listener, numListeners + 1);
        });
        return this;
      }
      off(event, listener) {
        if (!this.observers[event]) return;
        if (!listener) {
          delete this.observers[event];
          return;
        }
        this.observers[event].delete(listener);
      }
      emit(event, ...args) {
        if (this.observers[event]) {
          const cloned = Array.from(this.observers[event].entries());
          cloned.forEach(([observer, numTimesAdded]) => {
            for (let i2 = 0; i2 < numTimesAdded; i2++) {
              observer(...args);
            }
          });
        }
        if (this.observers["*"]) {
          const cloned = Array.from(this.observers["*"].entries());
          cloned.forEach(([observer, numTimesAdded]) => {
            for (let i2 = 0; i2 < numTimesAdded; i2++) {
              observer.apply(observer, [event, ...args]);
            }
          });
        }
      }
    };
    ResourceStore = class extends EventEmitter {
      constructor(data, options = {
        ns: ["translation"],
        defaultNS: "translation"
      }) {
        super();
        this.data = data || {};
        this.options = options;
        if (this.options.keySeparator === void 0) {
          this.options.keySeparator = ".";
        }
        if (this.options.ignoreJSONStructure === void 0) {
          this.options.ignoreJSONStructure = true;
        }
      }
      addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
          this.options.ns.push(ns);
        }
      }
      removeNamespaces(ns) {
        const index = this.options.ns.indexOf(ns);
        if (index > -1) {
          this.options.ns.splice(index, 1);
        }
      }
      getResource(lng, ns, key, options = {}) {
        const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
        const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let path;
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
        } else {
          path = [lng, ns];
          if (key) {
            if (Array.isArray(key)) {
              path.push(...key);
            } else if (isString(key) && keySeparator) {
              path.push(...key.split(keySeparator));
            } else {
              path.push(key);
            }
          }
        }
        const result = getPath(this.data, path);
        if (!result && !ns && !key && lng.indexOf(".") > -1) {
          lng = path[0];
          ns = path[1];
          key = path.slice(2).join(".");
        }
        if (result || !ignoreJSONStructure || !isString(key)) return result;
        return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
      }
      addResource(lng, ns, key, value, options = {
        silent: false
      }) {
        const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
        let path = [lng, ns];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          value = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options.silent) this.emit("added", lng, ns, key, value);
      }
      addResources(lng, ns, resources, options = {
        silent: false
      }) {
        for (const m in resources) {
          if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
        }
        if (!options.silent) this.emit("added", lng, ns, resources);
      }
      addResourceBundle(lng, ns, resources, deep, overwrite, options = {
        silent: false,
        skipCopy: false
      }) {
        let path = [lng, ns];
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          deep = resources;
          resources = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        let pack2 = getPath(this.data, path) || {};
        if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
        if (deep) {
          deepExtend(pack2, resources, overwrite);
        } else {
          pack2 = {
            ...pack2,
            ...resources
          };
        }
        setPath(this.data, path, pack2);
        if (!options.silent) this.emit("added", lng, ns, resources);
      }
      removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
          delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit("removed", lng, ns);
      }
      hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== void 0;
      }
      getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        return this.getResource(lng, ns);
      }
      getDataByLanguage(lng) {
        return this.data[lng];
      }
      hasLanguageSomeTranslations(lng) {
        const data = this.getDataByLanguage(lng);
        const n2 = data && Object.keys(data) || [];
        return !!n2.find((v) => data[v] && Object.keys(data[v]).length > 0);
      }
      toJSON() {
        return this.data;
      }
    };
    postProcessor = {
      processors: {},
      addPostProcessor(module) {
        this.processors[module.name] = module;
      },
      handle(processors, value, key, options, translator) {
        processors.forEach((processor) => {
          value = this.processors[processor]?.process(value, key, options, translator) ?? value;
        });
        return value;
      }
    };
    PATH_KEY = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
    checkedLoadedFor = {};
    shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
    Translator = class _Translator extends EventEmitter {
      constructor(services, options = {}) {
        super();
        copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
        this.options = options;
        if (this.options.keySeparator === void 0) {
          this.options.keySeparator = ".";
        }
        this.logger = baseLogger.create("translator");
      }
      changeLanguage(lng) {
        if (lng) this.language = lng;
      }
      exists(key, o = {
        interpolation: {}
      }) {
        const opt = {
          ...o
        };
        if (key == null) return false;
        const resolved = this.resolve(key, opt);
        if (resolved?.res === void 0) return false;
        const isObject2 = shouldHandleAsObject(resolved.res);
        if (opt.returnObjects === false && isObject2) {
          return false;
        }
        return true;
      }
      extractFromKey(key, opt) {
        let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === void 0) nsSeparator = ":";
        const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
        let namespaces = opt.ns || this.options.defaultNS || [];
        const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
          const m = key.match(this.interpolator.nestingRegexp);
          if (m && m.length > 0) {
            return {
              key,
              namespaces: isString(namespaces) ? [namespaces] : namespaces
            };
          }
          const parts = key.split(nsSeparator);
          if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
          key = parts.join(keySeparator);
        }
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      translate(keys, o, lastKey) {
        let opt = typeof o === "object" ? {
          ...o
        } : o;
        if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
          opt = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (typeof opt === "object") opt = {
          ...opt
        };
        if (!opt) opt = {};
        if (keys == null) return "";
        if (typeof keys === "function") keys = keysFromSelector(keys, {
          ...this.options,
          ...opt
        });
        if (!Array.isArray(keys)) keys = [String(keys)];
        const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
        const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
        const {
          key,
          namespaces
        } = this.extractFromKey(keys[keys.length - 1], opt);
        const namespace = namespaces[namespaces.length - 1];
        let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === void 0) nsSeparator = ":";
        const lng = opt.lng || this.language;
        const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng?.toLowerCase() === "cimode") {
          if (appendNamespaceToCIMode) {
            if (returnDetails) {
              return {
                res: `${namespace}${nsSeparator}${key}`,
                usedKey: key,
                exactUsedKey: key,
                usedLng: lng,
                usedNS: namespace,
                usedParams: this.getUsedParamsDetails(opt)
              };
            }
            return `${namespace}${nsSeparator}${key}`;
          }
          if (returnDetails) {
            return {
              res: key,
              usedKey: key,
              exactUsedKey: key,
              usedLng: lng,
              usedNS: namespace,
              usedParams: this.getUsedParamsDetails(opt)
            };
          }
          return key;
        }
        const resolved = this.resolve(keys, opt);
        let res = resolved?.res;
        const resUsedKey = resolved?.usedKey || key;
        const resExactUsedKey = resolved?.exactUsedKey || key;
        const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
        const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
        const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
        const hasDefaultValue = _Translator.hasDefaultValue(opt);
        const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
        const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
          ordinal: false
        }) : "";
        const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
        const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
        let resForObjHndl = res;
        if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
          resForObjHndl = defaultValue;
        }
        const handleAsObject = shouldHandleAsObject(resForObjHndl);
        const resType = Object.prototype.toString.apply(resForObjHndl);
        if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
          if (!opt.returnObjects && !this.options.returnObjects) {
            if (!this.options.returnedObjectHandler) {
              this.logger.warn("accessing an object - but returnObjects options is not enabled!");
            }
            const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
              ...opt,
              ns: namespaces
            }) : `key '${key} (${this.language})' returned an object instead of string.`;
            if (returnDetails) {
              resolved.res = r2;
              resolved.usedParams = this.getUsedParamsDetails(opt);
              return resolved;
            }
            return r2;
          }
          if (keySeparator) {
            const resTypeIsArray = Array.isArray(resForObjHndl);
            const copy3 = resTypeIsArray ? [] : {};
            const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
            for (const m in resForObjHndl) {
              if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
                const deepKey = `${newKeyToUse}${keySeparator}${m}`;
                if (hasDefaultValue && !res) {
                  copy3[m] = this.translate(deepKey, {
                    ...opt,
                    defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
                    ...{
                      joinArrays: false,
                      ns: namespaces
                    }
                  });
                } else {
                  copy3[m] = this.translate(deepKey, {
                    ...opt,
                    ...{
                      joinArrays: false,
                      ns: namespaces
                    }
                  });
                }
                if (copy3[m] === deepKey) copy3[m] = resForObjHndl[m];
              }
            }
            res = copy3;
          }
        } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
          res = res.join(joinArrays);
          if (res) res = this.extendTranslation(res, keys, opt, lastKey);
        } else {
          let usedDefault = false;
          let usedKey = false;
          if (!this.isValidLookup(res) && hasDefaultValue) {
            usedDefault = true;
            res = defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }
          const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
          const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
          const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
          if (usedKey || usedDefault || updateMissing) {
            this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
            if (keySeparator) {
              const fk = this.resolve(key, {
                ...opt,
                keySeparator: false
              });
              if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
            }
            let lngs = [];
            const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
            if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
              for (let i2 = 0; i2 < fallbackLngs.length; i2++) {
                lngs.push(fallbackLngs[i2]);
              }
            } else if (this.options.saveMissingTo === "all") {
              lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
            } else {
              lngs.push(opt.lng || this.language);
            }
            const send = (l, k, specificDefaultValue) => {
              const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
              if (this.options.missingKeyHandler) {
                this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
              } else if (this.backendConnector?.saveMissing) {
                this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
              }
              this.emit("missingKey", l, namespace, k, res);
            };
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && needsPluralHandling) {
                lngs.forEach((language3) => {
                  const suffixes = this.pluralResolver.getSuffixes(language3, opt);
                  if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                    suffixes.push(`${this.options.pluralSeparator}zero`);
                  }
                  suffixes.forEach((suffix) => {
                    send([language3], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
                  });
                });
              } else {
                send(lngs, key, defaultValue);
              }
            }
          }
          res = this.extendTranslation(res, keys, opt, resolved, lastKey);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
            res = `${namespace}${nsSeparator}${key}`;
          }
          if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
          }
        }
        if (returnDetails) {
          resolved.res = res;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return res;
      }
      extendTranslation(res, key, opt, resolved, lastKey) {
        if (this.i18nFormat?.parse) {
          res = this.i18nFormat.parse(res, {
            ...this.options.interpolation.defaultVariables,
            ...opt
          }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
            resolved
          });
        } else if (!opt.skipInterpolation) {
          if (opt.interpolation) this.interpolator.init({
            ...opt,
            ...{
              interpolation: {
                ...this.options.interpolation,
                ...opt.interpolation
              }
            }
          });
          const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
          let nestBef;
          if (skipOnVariables) {
            const nb = res.match(this.interpolator.nestingRegexp);
            nestBef = nb && nb.length;
          }
          let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
          if (this.options.interpolation.defaultVariables) data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
          res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
          if (skipOnVariables) {
            const na = res.match(this.interpolator.nestingRegexp);
            const nestAft = na && na.length;
            if (nestBef < nestAft) opt.nest = false;
          }
          if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
          if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
            if (lastKey?.[0] === args[0] && !opt.context) {
              this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
              return null;
            }
            return this.translate(...args, key);
          }, opt);
          if (opt.interpolation) this.interpolator.reset();
        }
        const postProcess = opt.postProcess || this.options.postProcess;
        const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
        if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
          res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
              ...resolved,
              usedParams: this.getUsedParamsDetails(opt)
            },
            ...opt
          } : opt, this);
        }
        return res;
      }
      resolve(keys, opt = {}) {
        let found;
        let usedKey;
        let exactUsedKey;
        let usedLng;
        let usedNS;
        if (isString(keys)) keys = [keys];
        keys.forEach((k) => {
          if (this.isValidLookup(found)) return;
          const extracted = this.extractFromKey(k, opt);
          const key = extracted.key;
          usedKey = key;
          let namespaces = extracted.namespaces;
          if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
          const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
          const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
          const needsContextHandling = opt.context !== void 0 && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
          const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
          namespaces.forEach((ns) => {
            if (this.isValidLookup(found)) return;
            usedNS = ns;
            if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
              checkedLoadedFor[`${codes[0]}-${ns}`] = true;
              this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            }
            codes.forEach((code) => {
              if (this.isValidLookup(found)) return;
              usedLng = code;
              const finalKeys = [key];
              if (this.i18nFormat?.addLookupKeys) {
                this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
              } else {
                let pluralSuffix;
                if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
                const zeroSuffix = `${this.options.pluralSeparator}zero`;
                const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (needsPluralHandling) {
                  if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                    finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                  }
                  finalKeys.push(key + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(key + zeroSuffix);
                  }
                }
                if (needsContextHandling) {
                  const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
                  finalKeys.push(contextKey);
                  if (needsPluralHandling) {
                    if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                      finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                    }
                    finalKeys.push(contextKey + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(contextKey + zeroSuffix);
                    }
                  }
                }
              }
              let possibleKey;
              while (possibleKey = finalKeys.pop()) {
                if (!this.isValidLookup(found)) {
                  exactUsedKey = possibleKey;
                  found = this.getResource(code, ns, possibleKey, opt);
                }
              }
            });
          });
        });
        return {
          res: found,
          usedKey,
          exactUsedKey,
          usedLng,
          usedNS
        };
      }
      isValidLookup(res) {
        return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
      }
      getResource(code, ns, key, options = {}) {
        if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
      }
      getUsedParamsDetails(options = {}) {
        const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
        const useOptionsReplaceForData = options.replace && !isString(options.replace);
        let data = useOptionsReplaceForData ? options.replace : options;
        if (useOptionsReplaceForData && typeof options.count !== "undefined") {
          data.count = options.count;
        }
        if (this.options.interpolation.defaultVariables) {
          data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
        }
        if (!useOptionsReplaceForData) {
          data = {
            ...data
          };
          for (const key of optionsKeys) {
            delete data[key];
          }
        }
        return data;
      }
      static hasDefaultValue(options) {
        const prefix = "defaultValue";
        for (const option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
            return true;
          }
        }
        return false;
      }
    };
    LanguageUtil = class {
      constructor(options) {
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create("languageUtils");
      }
      getScriptPartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf("-") < 0) return null;
        const p = code.split("-");
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === "x") return null;
        return this.formatLanguageCode(p.join("-"));
      }
      getLanguagePartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf("-") < 0) return code;
        const p = code.split("-");
        return this.formatLanguageCode(p[0]);
      }
      formatLanguageCode(code) {
        if (isString(code) && code.indexOf("-") > -1) {
          let formattedCode;
          try {
            formattedCode = Intl.getCanonicalLocales(code)[0];
          } catch (e2) {
          }
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
          if (this.options.lowerCaseLng) {
            return code.toLowerCase();
          }
          return code;
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
      }
      isSupportedCode(code) {
        if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
          code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
      }
      getBestMatchFromCodes(codes) {
        if (!codes) return null;
        let found;
        codes.forEach((code) => {
          if (found) return;
          const cleanedLng = this.formatLanguageCode(code);
          if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
          codes.forEach((code) => {
            if (found) return;
            const lngScOnly = this.getScriptPartFromCode(code);
            if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
            const lngOnly = this.getLanguagePartFromCode(code);
            if (this.isSupportedCode(lngOnly)) return found = lngOnly;
            found = this.options.supportedLngs.find((supportedLng) => {
              if (supportedLng === lngOnly) return supportedLng;
              if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
              if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
              if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
            });
          });
        }
        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
      }
      getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === "function") fallbacks = fallbacks(code);
        if (isString(fallbacks)) fallbacks = [fallbacks];
        if (Array.isArray(fallbacks)) return fallbacks;
        if (!code) return fallbacks.default || [];
        let found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks.default;
        return found || [];
      }
      toResolveHierarchy(code, fallbackCode) {
        const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
        const codes = [];
        const addCode = (c2) => {
          if (!c2) return;
          if (this.isSupportedCode(c2)) {
            codes.push(c2);
          } else {
            this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
          }
        };
        if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
          if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
          if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
          if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
        } else if (isString(code)) {
          addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach((fc) => {
          if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
        });
        return codes;
      }
    };
    suffixesOrder = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
    dummyRule = {
      select: (count) => count === 1 ? "one" : "other",
      resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
      })
    };
    PluralResolver = class {
      constructor(languageUtils, options = {}) {
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create("pluralResolver");
        this.pluralRulesCache = {};
      }
      clearCache() {
        this.pluralRulesCache = {};
      }
      getRule(code, options = {}) {
        const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
        const type = options.ordinal ? "ordinal" : "cardinal";
        const cacheKey = JSON.stringify({
          cleanedCode,
          type
        });
        if (cacheKey in this.pluralRulesCache) {
          return this.pluralRulesCache[cacheKey];
        }
        let rule;
        try {
          rule = new Intl.PluralRules(cleanedCode, {
            type
          });
        } catch (err) {
          if (!Intl) {
            this.logger.error("No Intl support, please use an Intl polyfill!");
            return dummyRule;
          }
          if (!code.match(/-|_/)) return dummyRule;
          const lngPart = this.languageUtils.getLanguagePartFromCode(code);
          rule = this.getRule(lngPart, options);
        }
        this.pluralRulesCache[cacheKey] = rule;
        return rule;
      }
      needsPlural(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule("dev", options);
        return rule?.resolvedOptions().pluralCategories.length > 1;
      }
      getPluralFormsOfKey(code, key, options = {}) {
        return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
      }
      getSuffixes(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule("dev", options);
        if (!rule) return [];
        return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
      }
      getSuffix(code, count, options = {}) {
        const rule = this.getRule(code, options);
        if (rule) {
          return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
        }
        this.logger.warn(`no plural rule found for: ${code}`);
        return this.getSuffix("dev", count, options);
      }
    };
    deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
      let path = getPathWithDefaults(data, defaultData, key);
      if (!path && ignoreJSONStructure && isString(key)) {
        path = deepFind(data, key, keySeparator);
        if (path === void 0) path = deepFind(defaultData, key, keySeparator);
      }
      return path;
    };
    regexSafe = (val) => val.replace(/\$/g, "$$$$");
    Interpolator = class {
      constructor(options = {}) {
        this.logger = baseLogger.create("interpolator");
        this.options = options;
        this.format = options?.interpolation?.format || ((value) => value);
        this.init(options);
      }
      init(options = {}) {
        if (!options.interpolation) options.interpolation = {
          escapeValue: true
        };
        const {
          escape: escape$1,
          escapeValue,
          useRawValueToEscape,
          prefix,
          prefixEscaped,
          suffix,
          suffixEscaped,
          formatSeparator,
          unescapeSuffix,
          unescapePrefix,
          nestingPrefix,
          nestingPrefixEscaped,
          nestingSuffix,
          nestingSuffixEscaped,
          nestingOptionsSeparator,
          maxReplaces,
          alwaysFormat
        } = options.interpolation;
        this.escape = escape$1 !== void 0 ? escape$1 : escape;
        this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
        this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
        this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
        this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
        this.formatSeparator = formatSeparator || ",";
        this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
        this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
        this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
        this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
        this.maxReplaces = maxReplaces || 1e3;
        this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
        this.resetRegExp();
      }
      reset() {
        if (this.options) this.init(this.options);
      }
      resetRegExp() {
        const getOrResetRegExp = (existingRegExp, pattern) => {
          if (existingRegExp?.source === pattern) {
            existingRegExp.lastIndex = 0;
            return existingRegExp;
          }
          return new RegExp(pattern, "g");
        };
        this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
        this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
        this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
      }
      interpolate(str, data, lng, options) {
        let match;
        let value;
        let replaces;
        const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        const handleFormat = (key) => {
          if (key.indexOf(this.formatSeparator) < 0) {
            const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
            return this.alwaysFormat ? this.format(path, void 0, lng, {
              ...options,
              ...data,
              interpolationkey: key
            }) : path;
          }
          const p = key.split(this.formatSeparator);
          const k = p.shift().trim();
          const f = p.join(this.formatSeparator).trim();
          return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
            ...options,
            ...data,
            interpolationkey: k
          });
        };
        this.resetRegExp();
        const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
        const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        const todos = [{
          regex: this.regexpUnescape,
          safeValue: (val) => regexSafe(val)
        }, {
          regex: this.regexp,
          safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
        }];
        todos.forEach((todo) => {
          replaces = 0;
          while (match = todo.regex.exec(str)) {
            const matchedVar = match[1].trim();
            value = handleFormat(matchedVar);
            if (value === void 0) {
              if (typeof missingInterpolationHandler === "function") {
                const temp = missingInterpolationHandler(str, match, options);
                value = isString(temp) ? temp : "";
              } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
                value = "";
              } else if (skipOnVariables) {
                value = match[0];
                continue;
              } else {
                this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
                value = "";
              }
            } else if (!isString(value) && !this.useRawValueToEscape) {
              value = makeString(value);
            }
            const safeValue = todo.safeValue(value);
            str = str.replace(match[0], safeValue);
            if (skipOnVariables) {
              todo.regex.lastIndex += value.length;
              todo.regex.lastIndex -= match[0].length;
            } else {
              todo.regex.lastIndex = 0;
            }
            replaces++;
            if (replaces >= this.maxReplaces) {
              break;
            }
          }
        });
        return str;
      }
      nest(str, fc, options = {}) {
        let match;
        let value;
        let clonedOptions;
        const handleHasOptions = (key, inheritedOptions) => {
          const sep = this.nestingOptionsSeparator;
          if (key.indexOf(sep) < 0) return key;
          const c2 = key.split(new RegExp(`${sep}[ ]*{`));
          let optionsString = `{${c2[1]}`;
          key = c2[0];
          optionsString = this.interpolate(optionsString, clonedOptions);
          const matchedSingleQuotes = optionsString.match(/'/g);
          const matchedDoubleQuotes = optionsString.match(/"/g);
          if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
            optionsString = optionsString.replace(/'/g, '"');
          }
          try {
            clonedOptions = JSON.parse(optionsString);
            if (inheritedOptions) clonedOptions = {
              ...inheritedOptions,
              ...clonedOptions
            };
          } catch (e2) {
            this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
            return `${key}${sep}${optionsString}`;
          }
          if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
          return key;
        };
        while (match = this.nestingRegexp.exec(str)) {
          let formatters = [];
          clonedOptions = {
            ...options
          };
          clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
          clonedOptions.applyPostProcessor = false;
          delete clonedOptions.defaultValue;
          const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
          if (keyEndIndex !== -1) {
            formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
            match[1] = match[1].slice(0, keyEndIndex);
          }
          value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
          if (value && match[0] === str && !isString(value)) return value;
          if (!isString(value)) value = makeString(value);
          if (!value) {
            this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
            value = "";
          }
          if (formatters.length) {
            value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
              ...options,
              interpolationkey: match[1].trim()
            }), value.trim());
          }
          str = str.replace(match[0], value);
          this.regexp.lastIndex = 0;
        }
        return str;
      }
    };
    parseFormatStr = (formatStr) => {
      let formatName = formatStr.toLowerCase().trim();
      const formatOptions = {};
      if (formatStr.indexOf("(") > -1) {
        const p = formatStr.split("(");
        formatName = p[0].toLowerCase().trim();
        const optStr = p[1].substring(0, p[1].length - 1);
        if (formatName === "currency" && optStr.indexOf(":") < 0) {
          if (!formatOptions.currency) formatOptions.currency = optStr.trim();
        } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
          if (!formatOptions.range) formatOptions.range = optStr.trim();
        } else {
          const opts = optStr.split(";");
          opts.forEach((opt) => {
            if (opt) {
              const [key, ...rest] = opt.split(":");
              const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
              const trimmedKey = key.trim();
              if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
              if (val === "false") formatOptions[trimmedKey] = false;
              if (val === "true") formatOptions[trimmedKey] = true;
              if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
            }
          });
        }
      }
      return {
        formatName,
        formatOptions
      };
    };
    createCachedFormatter = (fn) => {
      const cache = {};
      return (v, l, o) => {
        let optForCache = o;
        if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
          optForCache = {
            ...optForCache,
            [o.interpolationkey]: void 0
          };
        }
        const key = l + JSON.stringify(optForCache);
        let frm = cache[key];
        if (!frm) {
          frm = fn(getCleanedCode(l), o);
          cache[key] = frm;
        }
        return frm(v);
      };
    };
    createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
    Formatter = class {
      constructor(options = {}) {
        this.logger = baseLogger.create("formatter");
        this.options = options;
        this.init(options);
      }
      init(services, options = {
        interpolation: {}
      }) {
        this.formatSeparator = options.interpolation.formatSeparator || ",";
        const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
        this.formats = {
          number: cf((lng, opt) => {
            const formatter = new Intl.NumberFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          }),
          currency: cf((lng, opt) => {
            const formatter = new Intl.NumberFormat(lng, {
              ...opt,
              style: "currency"
            });
            return (val) => formatter.format(val);
          }),
          datetime: cf((lng, opt) => {
            const formatter = new Intl.DateTimeFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          }),
          relativetime: cf((lng, opt) => {
            const formatter = new Intl.RelativeTimeFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val, opt.range || "day");
          }),
          list: cf((lng, opt) => {
            const formatter = new Intl.ListFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          })
        };
      }
      add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
      }
      addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
      }
      format(value, format2, lng, options = {}) {
        const formats = format2.split(this.formatSeparator);
        if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
          const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
          formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
        }
        const result = formats.reduce((mem, f) => {
          const {
            formatName,
            formatOptions
          } = parseFormatStr(f);
          if (this.formats[formatName]) {
            let formatted = mem;
            try {
              const valOptions = options?.formatParams?.[options.interpolationkey] || {};
              const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
              formatted = this.formats[formatName](mem, l, {
                ...formatOptions,
                ...options,
                ...valOptions
              });
            } catch (error) {
              this.logger.warn(error);
            }
            return formatted;
          } else {
            this.logger.warn(`there was no format function for ${formatName}`);
          }
          return mem;
        }, value);
        return result;
      }
    };
    removePending = (q, name) => {
      if (q.pending[name] !== void 0) {
        delete q.pending[name];
        q.pendingCount--;
      }
    };
    Connector = class extends EventEmitter {
      constructor(backend, store, services, options = {}) {
        super();
        this.backend = backend;
        this.store = store;
        this.services = services;
        this.languageUtils = services.languageUtils;
        this.options = options;
        this.logger = baseLogger.create("backendConnector");
        this.waitingReads = [];
        this.maxParallelReads = options.maxParallelReads || 10;
        this.readingCalls = 0;
        this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        this.state = {};
        this.queue = [];
        this.backend?.init?.(services, options.backend, options);
      }
      queueLoad(languages, namespaces, options, callback) {
        const toLoad = {};
        const pending = {};
        const toLoadLanguages = {};
        const toLoadNamespaces = {};
        languages.forEach((lng) => {
          let hasAllNamespaces = true;
          namespaces.forEach((ns) => {
            const name = `${lng}|${ns}`;
            if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
              this.state[name] = 2;
            } else if (this.state[name] < 0) ;
            else if (this.state[name] === 1) {
              if (pending[name] === void 0) pending[name] = true;
            } else {
              this.state[name] = 1;
              hasAllNamespaces = false;
              if (pending[name] === void 0) pending[name] = true;
              if (toLoad[name] === void 0) toLoad[name] = true;
              if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
            }
          });
          if (!hasAllNamespaces) toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
          this.queue.push({
            pending,
            pendingCount: Object.keys(pending).length,
            loaded: {},
            errors: [],
            callback
          });
        }
        return {
          toLoad: Object.keys(toLoad),
          pending: Object.keys(pending),
          toLoadLanguages: Object.keys(toLoadLanguages),
          toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
      }
      loaded(name, err, data) {
        const s2 = name.split("|");
        const lng = s2[0];
        const ns = s2[1];
        if (err) this.emit("failedLoading", lng, ns, err);
        if (!err && data) {
          this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
            skipCopy: true
          });
        }
        this.state[name] = err ? -1 : 2;
        if (err && data) this.state[name] = 0;
        const loaded = {};
        this.queue.forEach((q) => {
          pushPath(q.loaded, [lng], ns);
          removePending(q, name);
          if (err) q.errors.push(err);
          if (q.pendingCount === 0 && !q.done) {
            Object.keys(q.loaded).forEach((l) => {
              if (!loaded[l]) loaded[l] = {};
              const loadedKeys = q.loaded[l];
              if (loadedKeys.length) {
                loadedKeys.forEach((n2) => {
                  if (loaded[l][n2] === void 0) loaded[l][n2] = true;
                });
              }
            });
            q.done = true;
            if (q.errors.length) {
              q.callback(q.errors);
            } else {
              q.callback();
            }
          }
        });
        this.emit("loaded", loaded);
        this.queue = this.queue.filter((q) => !q.done);
      }
      read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
        if (!lng.length) return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
          this.waitingReads.push({
            lng,
            ns,
            fcName,
            tried,
            wait,
            callback
          });
          return;
        }
        this.readingCalls++;
        const resolver = (err, data) => {
          this.readingCalls--;
          if (this.waitingReads.length > 0) {
            const next = this.waitingReads.shift();
            this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
          }
          if (err && data && tried < this.maxRetries) {
            setTimeout(() => {
              this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
            }, wait);
            return;
          }
          callback(err, data);
        };
        const fc = this.backend[fcName].bind(this.backend);
        if (fc.length === 2) {
          try {
            const r2 = fc(lng, ns);
            if (r2 && typeof r2.then === "function") {
              r2.then((data) => resolver(null, data)).catch(resolver);
            } else {
              resolver(null, r2);
            }
          } catch (err) {
            resolver(err);
          }
          return;
        }
        return fc(lng, ns, resolver);
      }
      prepareLoading(languages, namespaces, options = {}, callback) {
        if (!this.backend) {
          this.logger.warn("No backend was added via i18next.use. Will not load resources.");
          return callback && callback();
        }
        if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
        if (isString(namespaces)) namespaces = [namespaces];
        const toLoad = this.queueLoad(languages, namespaces, options, callback);
        if (!toLoad.toLoad.length) {
          if (!toLoad.pending.length) callback();
          return null;
        }
        toLoad.toLoad.forEach((name) => {
          this.loadOne(name);
        });
      }
      load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
      }
      reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
          reload: true
        }, callback);
      }
      loadOne(name, prefix = "") {
        const s2 = name.split("|");
        const lng = s2[0];
        const ns = s2[1];
        this.read(lng, ns, "read", void 0, void 0, (err, data) => {
          if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
          if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
          this.loaded(name, err, data);
        });
      }
      saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {
      }) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
          this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          return;
        }
        if (key === void 0 || key === null || key === "") return;
        if (this.backend?.create) {
          const opts = {
            ...options,
            isUpdate
          };
          const fc = this.backend.create.bind(this.backend);
          if (fc.length < 6) {
            try {
              let r2;
              if (fc.length === 5) {
                r2 = fc(languages, namespace, key, fallbackValue, opts);
              } else {
                r2 = fc(languages, namespace, key, fallbackValue);
              }
              if (r2 && typeof r2.then === "function") {
                r2.then((data) => clb(null, data)).catch(clb);
              } else {
                clb(null, r2);
              }
            } catch (err) {
              clb(err);
            }
          } else {
            fc(languages, namespace, key, fallbackValue, clb, opts);
          }
        }
        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
      }
    };
    get = () => ({
      debug: false,
      initAsync: true,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: "all",
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: "fallback",
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: false,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: (args) => {
        let ret = {};
        if (typeof args[1] === "object") ret = args[1];
        if (isString(args[1])) ret.defaultValue = args[1];
        if (isString(args[2])) ret.tDescription = args[2];
        if (typeof args[2] === "object" || typeof args[3] === "object") {
          const options = args[3] || args[2];
          Object.keys(options).forEach((key) => {
            ret[key] = options[key];
          });
        }
        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: (value) => value,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: true
      },
      cacheInBuiltFormats: true
    });
    transformOptions = (options) => {
      if (isString(options.ns)) options.ns = [options.ns];
      if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
      if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
      if (options.supportedLngs?.indexOf?.("cimode") < 0) {
        options.supportedLngs = options.supportedLngs.concat(["cimode"]);
      }
      if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
      return options;
    };
    noop = () => {
    };
    bindMemberFunctions = (inst) => {
      const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
      mems.forEach((mem) => {
        if (typeof inst[mem] === "function") {
          inst[mem] = inst[mem].bind(inst);
        }
      });
    };
    I18n = class _I18n extends EventEmitter {
      constructor(options = {}, callback) {
        super();
        this.options = transformOptions(options);
        this.services = {};
        this.logger = baseLogger;
        this.modules = {
          external: []
        };
        bindMemberFunctions(this);
        if (callback && !this.isInitialized && !options.isClone) {
          if (!this.options.initAsync) {
            this.init(options, callback);
            return this;
          }
          setTimeout(() => {
            this.init(options, callback);
          }, 0);
        }
      }
      init(options = {}, callback) {
        this.isInitializing = true;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (options.defaultNS == null && options.ns) {
          if (isString(options.ns)) {
            options.defaultNS = options.ns;
          } else if (options.ns.indexOf("translation") < 0) {
            options.defaultNS = options.ns[0];
          }
        }
        const defOpts = get();
        this.options = {
          ...defOpts,
          ...this.options,
          ...transformOptions(options)
        };
        this.options.interpolation = {
          ...defOpts.interpolation,
          ...this.options.interpolation
        };
        if (options.keySeparator !== void 0) {
          this.options.userDefinedKeySeparator = options.keySeparator;
        }
        if (options.nsSeparator !== void 0) {
          this.options.userDefinedNsSeparator = options.nsSeparator;
        }
        if (typeof this.options.overloadTranslationOptionHandler !== "function") {
          this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
        }
        if (this.options.debug === true) {
          if (typeof console !== "undefined") console.warn("i18next is maintained with support from locize.com \u2014 consider powering your project with managed localization (AI, CDN, integrations): https://locize.com");
        }
        const createClassOnDemand = (ClassOrObject) => {
          if (!ClassOrObject) return null;
          if (typeof ClassOrObject === "function") return new ClassOrObject();
          return ClassOrObject;
        };
        if (!this.options.isClone) {
          if (this.modules.logger) {
            baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
          } else {
            baseLogger.init(null, this.options);
          }
          let formatter;
          if (this.modules.formatter) {
            formatter = this.modules.formatter;
          } else {
            formatter = Formatter;
          }
          const lu = new LanguageUtil(this.options);
          this.store = new ResourceStore(this.options.resources, this.options);
          const s2 = this.services;
          s2.logger = baseLogger;
          s2.resourceStore = this.store;
          s2.languageUtils = lu;
          s2.pluralResolver = new PluralResolver(lu, {
            prepend: this.options.pluralSeparator,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });
          const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
          if (usingLegacyFormatFunction) {
            this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
          }
          if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
            s2.formatter = createClassOnDemand(formatter);
            if (s2.formatter.init) s2.formatter.init(s2, this.options);
            this.options.interpolation.format = s2.formatter.format.bind(s2.formatter);
          }
          s2.interpolator = new Interpolator(this.options);
          s2.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s2.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s2.resourceStore, s2, this.options);
          s2.backendConnector.on("*", (event, ...args) => {
            this.emit(event, ...args);
          });
          if (this.modules.languageDetector) {
            s2.languageDetector = createClassOnDemand(this.modules.languageDetector);
            if (s2.languageDetector.init) s2.languageDetector.init(s2, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            s2.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
            if (s2.i18nFormat.init) s2.i18nFormat.init(this);
          }
          this.translator = new Translator(this.services, this.options);
          this.translator.on("*", (event, ...args) => {
            this.emit(event, ...args);
          });
          this.modules.external.forEach((m) => {
            if (m.init) m.init(this);
          });
        }
        this.format = this.options.interpolation.format;
        if (!callback) callback = noop;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn("init: no languageDetector is used and no lng is defined");
        }
        const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        storeApi.forEach((fcName) => {
          this[fcName] = (...args) => this.store[fcName](...args);
        });
        const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
        storeApiChained.forEach((fcName) => {
          this[fcName] = (...args) => {
            this.store[fcName](...args);
            return this;
          };
        });
        const deferred = defer();
        const load = () => {
          const finish = (err, t6) => {
            this.isInitializing = false;
            if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
            this.isInitialized = true;
            if (!this.options.isClone) this.logger.log("initialized", this.options);
            this.emit("initialized", this.options);
            deferred.resolve(t6);
            callback(err, t6);
          };
          if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, finish);
        };
        if (this.options.resources || !this.options.initAsync) {
          load();
        } else {
          setTimeout(load, 0);
        }
        return deferred;
      }
      loadResources(language3, callback = noop) {
        let usedCallback = callback;
        const usedLng = isString(language3) ? language3 : this.language;
        if (typeof language3 === "function") usedCallback = language3;
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
          const toLoad = [];
          const append = (lng) => {
            if (!lng) return;
            if (lng === "cimode") return;
            const lngs = this.services.languageUtils.toResolveHierarchy(lng);
            lngs.forEach((l) => {
              if (l === "cimode") return;
              if (toLoad.indexOf(l) < 0) toLoad.push(l);
            });
          };
          if (!usedLng) {
            const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            fallbacks.forEach((l) => append(l));
          } else {
            append(usedLng);
          }
          this.options.preload?.forEach?.((l) => append(l));
          this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
            if (!e2 && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
            usedCallback(e2);
          });
        } else {
          usedCallback(null);
        }
      }
      reloadResources(lngs, ns, callback) {
        const deferred = defer();
        if (typeof lngs === "function") {
          callback = lngs;
          lngs = void 0;
        }
        if (typeof ns === "function") {
          callback = ns;
          ns = void 0;
        }
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop;
        this.services.backendConnector.reload(lngs, ns, (err) => {
          deferred.resolve();
          callback(err);
        });
        return deferred;
      }
      use(module) {
        if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        if (module.type === "backend") {
          this.modules.backend = module;
        }
        if (module.type === "logger" || module.log && module.warn && module.error) {
          this.modules.logger = module;
        }
        if (module.type === "languageDetector") {
          this.modules.languageDetector = module;
        }
        if (module.type === "i18nFormat") {
          this.modules.i18nFormat = module;
        }
        if (module.type === "postProcessor") {
          postProcessor.addPostProcessor(module);
        }
        if (module.type === "formatter") {
          this.modules.formatter = module;
        }
        if (module.type === "3rdParty") {
          this.modules.external.push(module);
        }
        return this;
      }
      setResolvedLanguage(l) {
        if (!l || !this.languages) return;
        if (["cimode", "dev"].indexOf(l) > -1) return;
        for (let li = 0; li < this.languages.length; li++) {
          const lngInLngs = this.languages[li];
          if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
          if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
            this.resolvedLanguage = lngInLngs;
            break;
          }
        }
        if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          this.languages.unshift(l);
        }
      }
      changeLanguage(lng, callback) {
        this.isLanguageChangingTo = lng;
        const deferred = defer();
        this.emit("languageChanging", lng);
        const setLngProps = (l) => {
          this.language = l;
          this.languages = this.services.languageUtils.toResolveHierarchy(l);
          this.resolvedLanguage = void 0;
          this.setResolvedLanguage(l);
        };
        const done = (err, l) => {
          if (l) {
            if (this.isLanguageChangingTo === lng) {
              setLngProps(l);
              this.translator.changeLanguage(l);
              this.isLanguageChangingTo = void 0;
              this.emit("languageChanged", l);
              this.logger.log("languageChanged", l);
            }
          } else {
            this.isLanguageChangingTo = void 0;
          }
          deferred.resolve((...args) => this.t(...args));
          if (callback) callback(err, (...args) => this.t(...args));
        };
        const setLng = (lngs) => {
          if (!lng && !lngs && this.services.languageDetector) lngs = [];
          const fl = isString(lngs) ? lngs : lngs && lngs[0];
          const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
          if (l) {
            if (!this.language) {
              setLngProps(l);
            }
            if (!this.translator.language) this.translator.changeLanguage(l);
            this.services.languageDetector?.cacheUserLanguage?.(l);
          }
          this.loadResources(l, (err) => {
            done(err, l);
          });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
          setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          if (this.services.languageDetector.detect.length === 0) {
            this.services.languageDetector.detect().then(setLng);
          } else {
            this.services.languageDetector.detect(setLng);
          }
        } else {
          setLng(lng);
        }
        return deferred;
      }
      getFixedT(lng, ns, keyPrefix) {
        const fixedT = (key, opts, ...rest) => {
          let o;
          if (typeof opts !== "object") {
            o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
          } else {
            o = {
              ...opts
            };
          }
          o.lng = o.lng || fixedT.lng;
          o.lngs = o.lngs || fixedT.lngs;
          o.ns = o.ns || fixedT.ns;
          if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
          const keySeparator = this.options.keySeparator || ".";
          let resultKey;
          if (o.keyPrefix && Array.isArray(key)) {
            resultKey = key.map((k) => {
              if (typeof k === "function") k = keysFromSelector(k, {
                ...this.options,
                ...opts
              });
              return `${o.keyPrefix}${keySeparator}${k}`;
            });
          } else {
            if (typeof key === "function") key = keysFromSelector(key, {
              ...this.options,
              ...opts
            });
            resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
          }
          return this.t(resultKey, o);
        };
        if (isString(lng)) {
          fixedT.lng = lng;
        } else {
          fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
      }
      t(...args) {
        return this.translator?.translate(...args);
      }
      exists(...args) {
        return this.translator?.exists(...args);
      }
      setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
      }
      hasLoadedNamespace(ns, options = {}) {
        if (!this.isInitialized) {
          this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
          return false;
        }
        const lng = options.lng || this.resolvedLanguage || this.languages[0];
        const fallbackLng = this.options ? this.options.fallbackLng : false;
        const lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === "cimode") return true;
        const loadNotPending = (l, n2) => {
          const loadState = this.services.backendConnector.state[`${l}|${n2}`];
          return loadState === -1 || loadState === 0 || loadState === 2;
        };
        if (options.precheck) {
          const preResult = options.precheck(this, loadNotPending);
          if (preResult !== void 0) return preResult;
        }
        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
      }
      loadNamespaces(ns, callback) {
        const deferred = defer();
        if (!this.options.ns) {
          if (callback) callback();
          return Promise.resolve();
        }
        if (isString(ns)) ns = [ns];
        ns.forEach((n2) => {
          if (this.options.ns.indexOf(n2) < 0) this.options.ns.push(n2);
        });
        this.loadResources((err) => {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
      loadLanguages(lngs, callback) {
        const deferred = defer();
        if (isString(lngs)) lngs = [lngs];
        const preloaded = this.options.preload || [];
        const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
        if (!newLngs.length) {
          if (callback) callback();
          return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources((err) => {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
      dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
        if (!lng) return "rtl";
        try {
          const l = new Intl.Locale(lng);
          if (l && l.getTextInfo) {
            const ti = l.getTextInfo();
            if (ti && ti.direction) return ti.direction;
          }
        } catch (e2) {
        }
        const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
        const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
        if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
        return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
      }
      static createInstance(options = {}, callback) {
        const instance3 = new _I18n(options, callback);
        instance3.createInstance = _I18n.createInstance;
        return instance3;
      }
      cloneInstance(options = {}, callback = noop) {
        const forkResourceStore = options.forkResourceStore;
        if (forkResourceStore) delete options.forkResourceStore;
        const mergedOptions = {
          ...this.options,
          ...options,
          ...{
            isClone: true
          }
        };
        const clone = new _I18n(mergedOptions);
        if (options.debug !== void 0 || options.prefix !== void 0) {
          clone.logger = clone.logger.clone(options);
        }
        const membersToCopy = ["store", "services", "language"];
        membersToCopy.forEach((m) => {
          clone[m] = this[m];
        });
        clone.services = {
          ...this.services
        };
        clone.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        if (forkResourceStore) {
          const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
            prev[l] = {
              ...this.store.data[l]
            };
            prev[l] = Object.keys(prev[l]).reduce((acc, n2) => {
              acc[n2] = {
                ...prev[l][n2]
              };
              return acc;
            }, prev[l]);
            return prev;
          }, {});
          clone.store = new ResourceStore(clonedData, mergedOptions);
          clone.services.resourceStore = clone.store;
        }
        if (options.interpolation) {
          const defOpts = get();
          const mergedInterpolation = {
            ...defOpts.interpolation,
            ...this.options.interpolation,
            ...options.interpolation
          };
          const mergedForInterpolator = {
            ...mergedOptions,
            interpolation: mergedInterpolation
          };
          clone.services.interpolator = new Interpolator(mergedForInterpolator);
        }
        clone.translator = new Translator(clone.services, mergedOptions);
        clone.translator.on("*", (event, ...args) => {
          clone.emit(event, ...args);
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = mergedOptions;
        clone.translator.backendConnector.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
      }
      toJSON() {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    };
    instance = I18n.createInstance();
    createInstance = instance.createInstance;
    dir = instance.dir;
    init = instance.init;
    loadResources = instance.loadResources;
    reloadResources = instance.reloadResources;
    use = instance.use;
    changeLanguage = instance.changeLanguage;
    getFixedT = instance.getFixedT;
    t = instance.t;
    exists = instance.exists;
    setDefaultNamespace = instance.setDefaultNamespace;
    hasLoadedNamespace = instance.hasLoadedNamespace;
    loadNamespaces = instance.loadNamespaces;
    loadLanguages = instance.loadLanguages;
  }
});

// node_modules/xshell/i18n/dict.js
var Dict;
var init_dict = __esm({
  "node_modules/xshell/i18n/dict.js"() {
    Dict = class {
      _dict;
      constructor(_dict = {}) {
        this._dict = _dict;
      }
      get(key, language3) {
        if (!key)
          return "";
        const item = this._dict[key];
        if (language3)
          return item ? item[language3] || "" : "";
        return item;
      }
      to_resources() {
        return Object.entries(this._dict).reduce((acc, [key, item]) => {
          Object.entries(item).forEach(([language3, translation]) => {
            if (!translation || !acc[language3])
              return;
            acc[language3].translation[key] = translation;
          });
          return acc;
        }, {
          zh: { translation: {} },
          en: { translation: {} },
          ja: { translation: {} },
          ko: { translation: {} }
        });
      }
    };
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info[0],
              info[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop4() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement2(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement2(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement2(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape3(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape3("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop4, noop4) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
            return c2;
          })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i2 = 0; i2 < children.length; i2++)
            nameSoFar = children[i2], type = childKey + getElementKey(nameSoFar, i2), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i2 = getIteratorFn(children), "function" === typeof i2)
          for (i2 === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i2.call(children), i2 = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i2++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                null != _ioInfo && (_ioInfo.end = performance.now());
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now());
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            ioInfo.value = thenable;
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error) {
              ReactSharedInternals.thrownErrors.push(error);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i2 = 0;
          try {
            for (; i2 < queue.length; i2++) {
              var callback = queue[i2];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i2] = callback;
                    queue.splice(0, i2);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error) {
            queue.splice(0, i2 + 1), ReactSharedInternals.thrownErrors.push(error);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
            error
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n2 = 0;
          mapChildren(children, function() {
            n2++;
          });
          return n2;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement2(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error) {
          ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i2 = 0; i2 < propName; i2++)
            JSCompiler_inline_result[i2] = arguments[i2 + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i2 = 2; i2 < arguments.length; i2++)
          validateChildKeys(arguments[i2]);
        i2 = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i2[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i2.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i2.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i2[propName] && (i2[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i2,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(
          type,
          key,
          i2,
          getOwner(),
          propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement2;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop4, reportGlobalError));
        } catch (error) {
          reportGlobalError(error);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      };
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
      };
      exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create, deps);
      };
      exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create, deps);
      };
      exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init3) {
        return resolveDispatcher().useReducer(reducer, initialArg, init3);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/i18next/dist/esm/i18next.js
function createProxy2() {
  const state = [];
  const handler = /* @__PURE__ */ Object.create(null);
  let proxy;
  handler.get = (target, key) => {
    proxy?.revoke?.();
    if (key === PATH_KEY2) return state;
    state.push(key);
    proxy = Proxy.revocable(target, handler);
    return proxy.proxy;
  };
  return Proxy.revocable(/* @__PURE__ */ Object.create(null), handler).proxy;
}
function keysFromSelector2(selector, opts) {
  const {
    [PATH_KEY2]: path
  } = selector(createProxy2());
  const keySeparator = opts?.keySeparator ?? ".";
  const nsSeparator = opts?.nsSeparator ?? ":";
  if (path.length > 1 && nsSeparator) {
    const ns = opts?.ns;
    const nsArray = Array.isArray(ns) ? ns : null;
    if (nsArray && nsArray.length > 1 && nsArray.slice(1).includes(path[0])) {
      return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
    }
  }
  return path.join(keySeparator);
}
var isString2, defer2, makeString2, copy2, lastOfPathSeparatorRegExp2, cleanKey2, canNotTraverseDeeper2, getLastOfPath2, setPath2, pushPath2, getPath2, getPathWithDefaults2, deepExtend2, regexEscape2, _entityMap2, escape2, RegExpCache2, chars2, looksLikeObjectPathRegExpCache2, looksLikeObjectPath2, deepFind2, getCleanedCode2, consoleLogger2, Logger2, baseLogger2, EventEmitter2, ResourceStore2, postProcessor2, PATH_KEY2, checkedLoadedFor2, shouldHandleAsObject2, Translator2, LanguageUtil2, suffixesOrder2, dummyRule2, PluralResolver2, deepFindWithDefaults2, regexSafe2, Interpolator2, parseFormatStr2, createCachedFormatter2, createNonCachedFormatter2, Formatter2, removePending2, Connector2, get2, transformOptions2, noop2, bindMemberFunctions2, SUPPORT_NOTICE_KEY, getSupportNoticeShown, setSupportNoticeShown, usesLocize, I18n2, instance2, createInstance2, dir2, init2, loadResources2, reloadResources2, use2, changeLanguage2, getFixedT2, t2, exists2, setDefaultNamespace2, hasLoadedNamespace2, loadNamespaces2, loadLanguages2;
var init_i18next2 = __esm({
  "node_modules/i18next/dist/esm/i18next.js"() {
    isString2 = (obj) => typeof obj === "string";
    defer2 = () => {
      let res;
      let rej;
      const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
      promise.resolve = res;
      promise.reject = rej;
      return promise;
    };
    makeString2 = (object) => {
      if (object == null) return "";
      return "" + object;
    };
    copy2 = (a2, s2, t6) => {
      a2.forEach((m) => {
        if (s2[m]) t6[m] = s2[m];
      });
    };
    lastOfPathSeparatorRegExp2 = /###/g;
    cleanKey2 = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp2, ".") : key;
    canNotTraverseDeeper2 = (object) => !object || isString2(object);
    getLastOfPath2 = (object, path, Empty) => {
      const stack = !isString2(path) ? path : path.split(".");
      let stackIndex = 0;
      while (stackIndex < stack.length - 1) {
        if (canNotTraverseDeeper2(object)) return {};
        const key = cleanKey2(stack[stackIndex]);
        if (!object[key] && Empty) object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          object = object[key];
        } else {
          object = {};
        }
        ++stackIndex;
      }
      if (canNotTraverseDeeper2(object)) return {};
      return {
        obj: object,
        k: cleanKey2(stack[stackIndex])
      };
    };
    setPath2 = (object, path, newValue) => {
      const {
        obj,
        k
      } = getLastOfPath2(object, path, Object);
      if (obj !== void 0 || path.length === 1) {
        obj[k] = newValue;
        return;
      }
      let e2 = path[path.length - 1];
      let p = path.slice(0, path.length - 1);
      let last = getLastOfPath2(object, p, Object);
      while (last.obj === void 0 && p.length) {
        e2 = `${p[p.length - 1]}.${e2}`;
        p = p.slice(0, p.length - 1);
        last = getLastOfPath2(object, p, Object);
        if (last?.obj && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
          last.obj = void 0;
        }
      }
      last.obj[`${last.k}.${e2}`] = newValue;
    };
    pushPath2 = (object, path, newValue, concat2) => {
      const {
        obj,
        k
      } = getLastOfPath2(object, path, Object);
      obj[k] = obj[k] || [];
      obj[k].push(newValue);
    };
    getPath2 = (object, path) => {
      const {
        obj,
        k
      } = getLastOfPath2(object, path);
      if (!obj) return void 0;
      if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
      return obj[k];
    };
    getPathWithDefaults2 = (data, defaultData, key) => {
      const value = getPath2(data, key);
      if (value !== void 0) {
        return value;
      }
      return getPath2(defaultData, key);
    };
    deepExtend2 = (target, source, overwrite) => {
      for (const prop in source) {
        if (prop !== "__proto__" && prop !== "constructor") {
          if (prop in target) {
            if (isString2(target[prop]) || target[prop] instanceof String || isString2(source[prop]) || source[prop] instanceof String) {
              if (overwrite) target[prop] = source[prop];
            } else {
              deepExtend2(target[prop], source[prop], overwrite);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
      return target;
    };
    regexEscape2 = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    _entityMap2 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    escape2 = (data) => {
      if (isString2(data)) {
        return data.replace(/[&<>"'\/]/g, (s2) => _entityMap2[s2]);
      }
      return data;
    };
    RegExpCache2 = class {
      constructor(capacity) {
        this.capacity = capacity;
        this.regExpMap = /* @__PURE__ */ new Map();
        this.regExpQueue = [];
      }
      getRegExp(pattern) {
        const regExpFromCache = this.regExpMap.get(pattern);
        if (regExpFromCache !== void 0) {
          return regExpFromCache;
        }
        const regExpNew = new RegExp(pattern);
        if (this.regExpQueue.length === this.capacity) {
          this.regExpMap.delete(this.regExpQueue.shift());
        }
        this.regExpMap.set(pattern, regExpNew);
        this.regExpQueue.push(pattern);
        return regExpNew;
      }
    };
    chars2 = [" ", ",", "?", "!", ";"];
    looksLikeObjectPathRegExpCache2 = new RegExpCache2(20);
    looksLikeObjectPath2 = (key, nsSeparator, keySeparator) => {
      nsSeparator = nsSeparator || "";
      keySeparator = keySeparator || "";
      const possibleChars = chars2.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
      if (possibleChars.length === 0) return true;
      const r2 = looksLikeObjectPathRegExpCache2.getRegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
      let matched = !r2.test(key);
      if (!matched) {
        const ki = key.indexOf(keySeparator);
        if (ki > 0 && !r2.test(key.substring(0, ki))) {
          matched = true;
        }
      }
      return matched;
    };
    deepFind2 = (obj, path, keySeparator = ".") => {
      if (!obj) return void 0;
      if (obj[path]) {
        if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
        return obj[path];
      }
      const tokens = path.split(keySeparator);
      let current = obj;
      for (let i2 = 0; i2 < tokens.length; ) {
        if (!current || typeof current !== "object") {
          return void 0;
        }
        let next;
        let nextPath = "";
        for (let j = i2; j < tokens.length; ++j) {
          if (j !== i2) {
            nextPath += keySeparator;
          }
          nextPath += tokens[j];
          next = current[nextPath];
          if (next !== void 0) {
            if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
              continue;
            }
            i2 += j - i2 + 1;
            break;
          }
        }
        current = next;
      }
      return current;
    };
    getCleanedCode2 = (code) => code?.replace(/_/g, "-");
    consoleLogger2 = {
      type: "logger",
      log(args) {
        this.output("log", args);
      },
      warn(args) {
        this.output("warn", args);
      },
      error(args) {
        this.output("error", args);
      },
      output(type, args) {
        console?.[type]?.apply?.(console, args);
      }
    };
    Logger2 = class _Logger {
      constructor(concreteLogger, options = {}) {
        this.init(concreteLogger, options);
      }
      init(concreteLogger, options = {}) {
        this.prefix = options.prefix || "i18next:";
        this.logger = concreteLogger || consoleLogger2;
        this.options = options;
        this.debug = options.debug;
      }
      log(...args) {
        return this.forward(args, "log", "", true);
      }
      warn(...args) {
        return this.forward(args, "warn", "", true);
      }
      error(...args) {
        return this.forward(args, "error", "");
      }
      deprecate(...args) {
        return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
      }
      forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (isString2(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
        return this.logger[lvl](args);
      }
      create(moduleName) {
        return new _Logger(this.logger, {
          ...{
            prefix: `${this.prefix}:${moduleName}:`
          },
          ...this.options
        });
      }
      clone(options) {
        options = options || this.options;
        options.prefix = options.prefix || this.prefix;
        return new _Logger(this.logger, options);
      }
    };
    baseLogger2 = new Logger2();
    EventEmitter2 = class {
      constructor() {
        this.observers = {};
      }
      on(events, listener) {
        events.split(" ").forEach((event) => {
          if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
          const numListeners = this.observers[event].get(listener) || 0;
          this.observers[event].set(listener, numListeners + 1);
        });
        return this;
      }
      off(event, listener) {
        if (!this.observers[event]) return;
        if (!listener) {
          delete this.observers[event];
          return;
        }
        this.observers[event].delete(listener);
      }
      emit(event, ...args) {
        if (this.observers[event]) {
          const cloned = Array.from(this.observers[event].entries());
          cloned.forEach(([observer, numTimesAdded]) => {
            for (let i2 = 0; i2 < numTimesAdded; i2++) {
              observer(...args);
            }
          });
        }
        if (this.observers["*"]) {
          const cloned = Array.from(this.observers["*"].entries());
          cloned.forEach(([observer, numTimesAdded]) => {
            for (let i2 = 0; i2 < numTimesAdded; i2++) {
              observer.apply(observer, [event, ...args]);
            }
          });
        }
      }
    };
    ResourceStore2 = class extends EventEmitter2 {
      constructor(data, options = {
        ns: ["translation"],
        defaultNS: "translation"
      }) {
        super();
        this.data = data || {};
        this.options = options;
        if (this.options.keySeparator === void 0) {
          this.options.keySeparator = ".";
        }
        if (this.options.ignoreJSONStructure === void 0) {
          this.options.ignoreJSONStructure = true;
        }
      }
      addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
          this.options.ns.push(ns);
        }
      }
      removeNamespaces(ns) {
        const index = this.options.ns.indexOf(ns);
        if (index > -1) {
          this.options.ns.splice(index, 1);
        }
      }
      getResource(lng, ns, key, options = {}) {
        const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
        const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let path;
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
        } else {
          path = [lng, ns];
          if (key) {
            if (Array.isArray(key)) {
              path.push(...key);
            } else if (isString2(key) && keySeparator) {
              path.push(...key.split(keySeparator));
            } else {
              path.push(key);
            }
          }
        }
        const result = getPath2(this.data, path);
        if (!result && !ns && !key && lng.indexOf(".") > -1) {
          lng = path[0];
          ns = path[1];
          key = path.slice(2).join(".");
        }
        if (result || !ignoreJSONStructure || !isString2(key)) return result;
        return deepFind2(this.data?.[lng]?.[ns], key, keySeparator);
      }
      addResource(lng, ns, key, value, options = {
        silent: false
      }) {
        const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
        let path = [lng, ns];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          value = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        setPath2(this.data, path, value);
        if (!options.silent) this.emit("added", lng, ns, key, value);
      }
      addResources(lng, ns, resources, options = {
        silent: false
      }) {
        for (const m in resources) {
          if (isString2(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
            silent: true
          });
        }
        if (!options.silent) this.emit("added", lng, ns, resources);
      }
      addResourceBundle(lng, ns, resources, deep, overwrite, options = {
        silent: false,
        skipCopy: false
      }) {
        let path = [lng, ns];
        if (lng.indexOf(".") > -1) {
          path = lng.split(".");
          deep = resources;
          resources = ns;
          ns = path[1];
        }
        this.addNamespaces(ns);
        let pack2 = getPath2(this.data, path) || {};
        if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
        if (deep) {
          deepExtend2(pack2, resources, overwrite);
        } else {
          pack2 = {
            ...pack2,
            ...resources
          };
        }
        setPath2(this.data, path, pack2);
        if (!options.silent) this.emit("added", lng, ns, resources);
      }
      removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
          delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit("removed", lng, ns);
      }
      hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== void 0;
      }
      getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        return this.getResource(lng, ns);
      }
      getDataByLanguage(lng) {
        return this.data[lng];
      }
      hasLanguageSomeTranslations(lng) {
        const data = this.getDataByLanguage(lng);
        const n2 = data && Object.keys(data) || [];
        return !!n2.find((v) => data[v] && Object.keys(data[v]).length > 0);
      }
      toJSON() {
        return this.data;
      }
    };
    postProcessor2 = {
      processors: {},
      addPostProcessor(module) {
        this.processors[module.name] = module;
      },
      handle(processors, value, key, options, translator) {
        processors.forEach((processor) => {
          value = this.processors[processor]?.process(value, key, options, translator) ?? value;
        });
        return value;
      }
    };
    PATH_KEY2 = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
    checkedLoadedFor2 = {};
    shouldHandleAsObject2 = (res) => !isString2(res) && typeof res !== "boolean" && typeof res !== "number";
    Translator2 = class _Translator extends EventEmitter2 {
      constructor(services, options = {}) {
        super();
        copy2(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
        this.options = options;
        if (this.options.keySeparator === void 0) {
          this.options.keySeparator = ".";
        }
        this.logger = baseLogger2.create("translator");
      }
      changeLanguage(lng) {
        if (lng) this.language = lng;
      }
      exists(key, o = {
        interpolation: {}
      }) {
        const opt = {
          ...o
        };
        if (key == null) return false;
        const resolved = this.resolve(key, opt);
        if (resolved?.res === void 0) return false;
        const isObject2 = shouldHandleAsObject2(resolved.res);
        if (opt.returnObjects === false && isObject2) {
          return false;
        }
        return true;
      }
      extractFromKey(key, opt) {
        let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === void 0) nsSeparator = ":";
        const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
        let namespaces = opt.ns || this.options.defaultNS || [];
        const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath2(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
          const m = key.match(this.interpolator.nestingRegexp);
          if (m && m.length > 0) {
            return {
              key,
              namespaces: isString2(namespaces) ? [namespaces] : namespaces
            };
          }
          const parts = key.split(nsSeparator);
          if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
          key = parts.join(keySeparator);
        }
        return {
          key,
          namespaces: isString2(namespaces) ? [namespaces] : namespaces
        };
      }
      translate(keys, o, lastKey) {
        let opt = typeof o === "object" ? {
          ...o
        } : o;
        if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) {
          opt = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (typeof opt === "object") opt = {
          ...opt
        };
        if (!opt) opt = {};
        if (keys == null) return "";
        if (typeof keys === "function") keys = keysFromSelector2(keys, {
          ...this.options,
          ...opt
        });
        if (!Array.isArray(keys)) keys = [String(keys)];
        keys = keys.map((k) => typeof k === "function" ? keysFromSelector2(k, {
          ...this.options,
          ...opt
        }) : String(k));
        const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
        const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
        const {
          key,
          namespaces
        } = this.extractFromKey(keys[keys.length - 1], opt);
        const namespace = namespaces[namespaces.length - 1];
        let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === void 0) nsSeparator = ":";
        const lng = opt.lng || this.language;
        const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng?.toLowerCase() === "cimode") {
          if (appendNamespaceToCIMode) {
            if (returnDetails) {
              return {
                res: `${namespace}${nsSeparator}${key}`,
                usedKey: key,
                exactUsedKey: key,
                usedLng: lng,
                usedNS: namespace,
                usedParams: this.getUsedParamsDetails(opt)
              };
            }
            return `${namespace}${nsSeparator}${key}`;
          }
          if (returnDetails) {
            return {
              res: key,
              usedKey: key,
              exactUsedKey: key,
              usedLng: lng,
              usedNS: namespace,
              usedParams: this.getUsedParamsDetails(opt)
            };
          }
          return key;
        }
        const resolved = this.resolve(keys, opt);
        let res = resolved?.res;
        const resUsedKey = resolved?.usedKey || key;
        const resExactUsedKey = resolved?.exactUsedKey || key;
        const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
        const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
        const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        const needsPluralHandling = opt.count !== void 0 && !isString2(opt.count);
        const hasDefaultValue = _Translator.hasDefaultValue(opt);
        const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
        const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
          ordinal: false
        }) : "";
        const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
        const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
        let resForObjHndl = res;
        if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
          resForObjHndl = defaultValue;
        }
        const handleAsObject = shouldHandleAsObject2(resForObjHndl);
        const resType = Object.prototype.toString.apply(resForObjHndl);
        if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString2(joinArrays) && Array.isArray(resForObjHndl))) {
          if (!opt.returnObjects && !this.options.returnObjects) {
            if (!this.options.returnedObjectHandler) {
              this.logger.warn("accessing an object - but returnObjects options is not enabled!");
            }
            const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
              ...opt,
              ns: namespaces
            }) : `key '${key} (${this.language})' returned an object instead of string.`;
            if (returnDetails) {
              resolved.res = r2;
              resolved.usedParams = this.getUsedParamsDetails(opt);
              return resolved;
            }
            return r2;
          }
          if (keySeparator) {
            const resTypeIsArray = Array.isArray(resForObjHndl);
            const copy3 = resTypeIsArray ? [] : {};
            const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
            for (const m in resForObjHndl) {
              if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
                const deepKey = `${newKeyToUse}${keySeparator}${m}`;
                if (hasDefaultValue && !res) {
                  copy3[m] = this.translate(deepKey, {
                    ...opt,
                    defaultValue: shouldHandleAsObject2(defaultValue) ? defaultValue[m] : void 0,
                    ...{
                      joinArrays: false,
                      ns: namespaces
                    }
                  });
                } else {
                  copy3[m] = this.translate(deepKey, {
                    ...opt,
                    ...{
                      joinArrays: false,
                      ns: namespaces
                    }
                  });
                }
                if (copy3[m] === deepKey) copy3[m] = resForObjHndl[m];
              }
            }
            res = copy3;
          }
        } else if (handleAsObjectInI18nFormat && isString2(joinArrays) && Array.isArray(res)) {
          res = res.join(joinArrays);
          if (res) res = this.extendTranslation(res, keys, opt, lastKey);
        } else {
          let usedDefault = false;
          let usedKey = false;
          if (!this.isValidLookup(res) && hasDefaultValue) {
            usedDefault = true;
            res = defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }
          const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
          const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
          const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
          if (usedKey || usedDefault || updateMissing) {
            this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
            if (keySeparator) {
              const fk = this.resolve(key, {
                ...opt,
                keySeparator: false
              });
              if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
            }
            let lngs = [];
            const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
            if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
              for (let i2 = 0; i2 < fallbackLngs.length; i2++) {
                lngs.push(fallbackLngs[i2]);
              }
            } else if (this.options.saveMissingTo === "all") {
              lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
            } else {
              lngs.push(opt.lng || this.language);
            }
            const send = (l, k, specificDefaultValue) => {
              const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
              if (this.options.missingKeyHandler) {
                this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
              } else if (this.backendConnector?.saveMissing) {
                this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
              }
              this.emit("missingKey", l, namespace, k, res);
            };
            if (this.options.saveMissing) {
              if (this.options.saveMissingPlurals && needsPluralHandling) {
                lngs.forEach((language3) => {
                  const suffixes = this.pluralResolver.getSuffixes(language3, opt);
                  if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                    suffixes.push(`${this.options.pluralSeparator}zero`);
                  }
                  suffixes.forEach((suffix) => {
                    send([language3], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
                  });
                });
              } else {
                send(lngs, key, defaultValue);
              }
            }
          }
          res = this.extendTranslation(res, keys, opt, resolved, lastKey);
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
            res = `${namespace}${nsSeparator}${key}`;
          }
          if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
          }
        }
        if (returnDetails) {
          resolved.res = res;
          resolved.usedParams = this.getUsedParamsDetails(opt);
          return resolved;
        }
        return res;
      }
      extendTranslation(res, key, opt, resolved, lastKey) {
        if (this.i18nFormat?.parse) {
          res = this.i18nFormat.parse(res, {
            ...this.options.interpolation.defaultVariables,
            ...opt
          }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
            resolved
          });
        } else if (!opt.skipInterpolation) {
          if (opt.interpolation) this.interpolator.init({
            ...opt,
            ...{
              interpolation: {
                ...this.options.interpolation,
                ...opt.interpolation
              }
            }
          });
          const skipOnVariables = isString2(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
          let nestBef;
          if (skipOnVariables) {
            const nb = res.match(this.interpolator.nestingRegexp);
            nestBef = nb && nb.length;
          }
          let data = opt.replace && !isString2(opt.replace) ? opt.replace : opt;
          if (this.options.interpolation.defaultVariables) data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
          res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
          if (skipOnVariables) {
            const na = res.match(this.interpolator.nestingRegexp);
            const nestAft = na && na.length;
            if (nestBef < nestAft) opt.nest = false;
          }
          if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
          if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
            if (lastKey?.[0] === args[0] && !opt.context) {
              this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
              return null;
            }
            return this.translate(...args, key);
          }, opt);
          if (opt.interpolation) this.interpolator.reset();
        }
        const postProcess = opt.postProcess || this.options.postProcess;
        const postProcessorNames = isString2(postProcess) ? [postProcess] : postProcess;
        if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
          res = postProcessor2.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
              ...resolved,
              usedParams: this.getUsedParamsDetails(opt)
            },
            ...opt
          } : opt, this);
        }
        return res;
      }
      resolve(keys, opt = {}) {
        let found;
        let usedKey;
        let exactUsedKey;
        let usedLng;
        let usedNS;
        if (isString2(keys)) keys = [keys];
        if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector2(k, {
          ...this.options,
          ...opt
        }) : k);
        keys.forEach((k) => {
          if (this.isValidLookup(found)) return;
          const extracted = this.extractFromKey(k, opt);
          const key = extracted.key;
          usedKey = key;
          let namespaces = extracted.namespaces;
          if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
          const needsPluralHandling = opt.count !== void 0 && !isString2(opt.count);
          const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
          const needsContextHandling = opt.context !== void 0 && (isString2(opt.context) || typeof opt.context === "number") && opt.context !== "";
          const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
          namespaces.forEach((ns) => {
            if (this.isValidLookup(found)) return;
            usedNS = ns;
            if (!checkedLoadedFor2[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
              checkedLoadedFor2[`${codes[0]}-${ns}`] = true;
              this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            }
            codes.forEach((code) => {
              if (this.isValidLookup(found)) return;
              usedLng = code;
              const finalKeys = [key];
              if (this.i18nFormat?.addLookupKeys) {
                this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
              } else {
                let pluralSuffix;
                if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
                const zeroSuffix = `${this.options.pluralSeparator}zero`;
                const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (needsPluralHandling) {
                  if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                    finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                  }
                  finalKeys.push(key + pluralSuffix);
                  if (needsZeroSuffixLookup) {
                    finalKeys.push(key + zeroSuffix);
                  }
                }
                if (needsContextHandling) {
                  const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
                  finalKeys.push(contextKey);
                  if (needsPluralHandling) {
                    if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                      finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                    }
                    finalKeys.push(contextKey + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(contextKey + zeroSuffix);
                    }
                  }
                }
              }
              let possibleKey;
              while (possibleKey = finalKeys.pop()) {
                if (!this.isValidLookup(found)) {
                  exactUsedKey = possibleKey;
                  found = this.getResource(code, ns, possibleKey, opt);
                }
              }
            });
          });
        });
        return {
          res: found,
          usedKey,
          exactUsedKey,
          usedLng,
          usedNS
        };
      }
      isValidLookup(res) {
        return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
      }
      getResource(code, ns, key, options = {}) {
        if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
        return this.resourceStore.getResource(code, ns, key, options);
      }
      getUsedParamsDetails(options = {}) {
        const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
        const useOptionsReplaceForData = options.replace && !isString2(options.replace);
        let data = useOptionsReplaceForData ? options.replace : options;
        if (useOptionsReplaceForData && typeof options.count !== "undefined") {
          data.count = options.count;
        }
        if (this.options.interpolation.defaultVariables) {
          data = {
            ...this.options.interpolation.defaultVariables,
            ...data
          };
        }
        if (!useOptionsReplaceForData) {
          data = {
            ...data
          };
          for (const key of optionsKeys) {
            delete data[key];
          }
        }
        return data;
      }
      static hasDefaultValue(options) {
        const prefix = "defaultValue";
        for (const option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
            return true;
          }
        }
        return false;
      }
    };
    LanguageUtil2 = class {
      constructor(options) {
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger2.create("languageUtils");
      }
      getScriptPartFromCode(code) {
        code = getCleanedCode2(code);
        if (!code || code.indexOf("-") < 0) return null;
        const p = code.split("-");
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === "x") return null;
        return this.formatLanguageCode(p.join("-"));
      }
      getLanguagePartFromCode(code) {
        code = getCleanedCode2(code);
        if (!code || code.indexOf("-") < 0) return code;
        const p = code.split("-");
        return this.formatLanguageCode(p[0]);
      }
      formatLanguageCode(code) {
        if (isString2(code) && code.indexOf("-") > -1) {
          let formattedCode;
          try {
            formattedCode = Intl.getCanonicalLocales(code)[0];
          } catch (e2) {
          }
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
          if (this.options.lowerCaseLng) {
            return code.toLowerCase();
          }
          return code;
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
      }
      isSupportedCode(code) {
        if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
          code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
      }
      getBestMatchFromCodes(codes) {
        if (!codes) return null;
        let found;
        codes.forEach((code) => {
          if (found) return;
          const cleanedLng = this.formatLanguageCode(code);
          if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
          codes.forEach((code) => {
            if (found) return;
            const lngScOnly = this.getScriptPartFromCode(code);
            if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
            const lngOnly = this.getLanguagePartFromCode(code);
            if (this.isSupportedCode(lngOnly)) return found = lngOnly;
            found = this.options.supportedLngs.find((supportedLng) => {
              if (supportedLng === lngOnly) return supportedLng;
              if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
              if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
              if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
            });
          });
        }
        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
      }
      getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === "function") fallbacks = fallbacks(code);
        if (isString2(fallbacks)) fallbacks = [fallbacks];
        if (Array.isArray(fallbacks)) return fallbacks;
        if (!code) return fallbacks.default || [];
        let found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks.default;
        return found || [];
      }
      toResolveHierarchy(code, fallbackCode) {
        const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
        const codes = [];
        const addCode = (c2) => {
          if (!c2) return;
          if (this.isSupportedCode(c2)) {
            codes.push(c2);
          } else {
            this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
          }
        };
        if (isString2(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
          if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
          if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
          if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
        } else if (isString2(code)) {
          addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach((fc) => {
          if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
        });
        return codes;
      }
    };
    suffixesOrder2 = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
    dummyRule2 = {
      select: (count) => count === 1 ? "one" : "other",
      resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
      })
    };
    PluralResolver2 = class {
      constructor(languageUtils, options = {}) {
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger2.create("pluralResolver");
        this.pluralRulesCache = {};
      }
      clearCache() {
        this.pluralRulesCache = {};
      }
      getRule(code, options = {}) {
        const cleanedCode = getCleanedCode2(code === "dev" ? "en" : code);
        const type = options.ordinal ? "ordinal" : "cardinal";
        const cacheKey = JSON.stringify({
          cleanedCode,
          type
        });
        if (cacheKey in this.pluralRulesCache) {
          return this.pluralRulesCache[cacheKey];
        }
        let rule;
        try {
          rule = new Intl.PluralRules(cleanedCode, {
            type
          });
        } catch (err) {
          if (typeof Intl === "undefined") {
            this.logger.error("No Intl support, please use an Intl polyfill!");
            return dummyRule2;
          }
          if (!code.match(/-|_/)) return dummyRule2;
          const lngPart = this.languageUtils.getLanguagePartFromCode(code);
          rule = this.getRule(lngPart, options);
        }
        this.pluralRulesCache[cacheKey] = rule;
        return rule;
      }
      needsPlural(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule("dev", options);
        return rule?.resolvedOptions().pluralCategories.length > 1;
      }
      getPluralFormsOfKey(code, key, options = {}) {
        return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
      }
      getSuffixes(code, options = {}) {
        let rule = this.getRule(code, options);
        if (!rule) rule = this.getRule("dev", options);
        if (!rule) return [];
        return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder2[pluralCategory1] - suffixesOrder2[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
      }
      getSuffix(code, count, options = {}) {
        const rule = this.getRule(code, options);
        if (rule) {
          return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
        }
        this.logger.warn(`no plural rule found for: ${code}`);
        return this.getSuffix("dev", count, options);
      }
    };
    deepFindWithDefaults2 = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
      let path = getPathWithDefaults2(data, defaultData, key);
      if (!path && ignoreJSONStructure && isString2(key)) {
        path = deepFind2(data, key, keySeparator);
        if (path === void 0) path = deepFind2(defaultData, key, keySeparator);
      }
      return path;
    };
    regexSafe2 = (val) => val.replace(/\$/g, "$$$$");
    Interpolator2 = class {
      constructor(options = {}) {
        this.logger = baseLogger2.create("interpolator");
        this.options = options;
        this.format = options?.interpolation?.format || ((value) => value);
        this.init(options);
      }
      init(options = {}) {
        if (!options.interpolation) options.interpolation = {
          escapeValue: true
        };
        const {
          escape: escape$1,
          escapeValue,
          useRawValueToEscape,
          prefix,
          prefixEscaped,
          suffix,
          suffixEscaped,
          formatSeparator,
          unescapeSuffix,
          unescapePrefix,
          nestingPrefix,
          nestingPrefixEscaped,
          nestingSuffix,
          nestingSuffixEscaped,
          nestingOptionsSeparator,
          maxReplaces,
          alwaysFormat
        } = options.interpolation;
        this.escape = escape$1 !== void 0 ? escape$1 : escape2;
        this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
        this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
        this.prefix = prefix ? regexEscape2(prefix) : prefixEscaped || "{{";
        this.suffix = suffix ? regexEscape2(suffix) : suffixEscaped || "}}";
        this.formatSeparator = formatSeparator || ",";
        this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
        this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
        this.nestingPrefix = nestingPrefix ? regexEscape2(nestingPrefix) : nestingPrefixEscaped || regexEscape2("$t(");
        this.nestingSuffix = nestingSuffix ? regexEscape2(nestingSuffix) : nestingSuffixEscaped || regexEscape2(")");
        this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
        this.maxReplaces = maxReplaces || 1e3;
        this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
        this.resetRegExp();
      }
      reset() {
        if (this.options) this.init(this.options);
      }
      resetRegExp() {
        const getOrResetRegExp = (existingRegExp, pattern) => {
          if (existingRegExp?.source === pattern) {
            existingRegExp.lastIndex = 0;
            return existingRegExp;
          }
          return new RegExp(pattern, "g");
        };
        this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
        this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
        this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
      }
      interpolate(str, data, lng, options) {
        let match;
        let value;
        let replaces;
        const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        const handleFormat = (key) => {
          if (key.indexOf(this.formatSeparator) < 0) {
            const path = deepFindWithDefaults2(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
            return this.alwaysFormat ? this.format(path, void 0, lng, {
              ...options,
              ...data,
              interpolationkey: key
            }) : path;
          }
          const p = key.split(this.formatSeparator);
          const k = p.shift().trim();
          const f = p.join(this.formatSeparator).trim();
          return this.format(deepFindWithDefaults2(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
            ...options,
            ...data,
            interpolationkey: k
          });
        };
        this.resetRegExp();
        const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
        const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        const todos = [{
          regex: this.regexpUnescape,
          safeValue: (val) => regexSafe2(val)
        }, {
          regex: this.regexp,
          safeValue: (val) => this.escapeValue ? regexSafe2(this.escape(val)) : regexSafe2(val)
        }];
        todos.forEach((todo) => {
          replaces = 0;
          while (match = todo.regex.exec(str)) {
            const matchedVar = match[1].trim();
            value = handleFormat(matchedVar);
            if (value === void 0) {
              if (typeof missingInterpolationHandler === "function") {
                const temp = missingInterpolationHandler(str, match, options);
                value = isString2(temp) ? temp : "";
              } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
                value = "";
              } else if (skipOnVariables) {
                value = match[0];
                continue;
              } else {
                this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
                value = "";
              }
            } else if (!isString2(value) && !this.useRawValueToEscape) {
              value = makeString2(value);
            }
            const safeValue = todo.safeValue(value);
            str = str.replace(match[0], safeValue);
            if (skipOnVariables) {
              todo.regex.lastIndex += value.length;
              todo.regex.lastIndex -= match[0].length;
            } else {
              todo.regex.lastIndex = 0;
            }
            replaces++;
            if (replaces >= this.maxReplaces) {
              break;
            }
          }
        });
        return str;
      }
      nest(str, fc, options = {}) {
        let match;
        let value;
        let clonedOptions;
        const handleHasOptions = (key, inheritedOptions) => {
          const sep = this.nestingOptionsSeparator;
          if (key.indexOf(sep) < 0) return key;
          const c2 = key.split(new RegExp(`${regexEscape2(sep)}[ ]*{`));
          let optionsString = `{${c2[1]}`;
          key = c2[0];
          optionsString = this.interpolate(optionsString, clonedOptions);
          const matchedSingleQuotes = optionsString.match(/'/g);
          const matchedDoubleQuotes = optionsString.match(/"/g);
          if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) {
            optionsString = optionsString.replace(/'/g, '"');
          }
          try {
            clonedOptions = JSON.parse(optionsString);
            if (inheritedOptions) clonedOptions = {
              ...inheritedOptions,
              ...clonedOptions
            };
          } catch (e2) {
            this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
            return `${key}${sep}${optionsString}`;
          }
          if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
          return key;
        };
        while (match = this.nestingRegexp.exec(str)) {
          let formatters = [];
          clonedOptions = {
            ...options
          };
          clonedOptions = clonedOptions.replace && !isString2(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
          clonedOptions.applyPostProcessor = false;
          delete clonedOptions.defaultValue;
          const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
          if (keyEndIndex !== -1) {
            formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
            match[1] = match[1].slice(0, keyEndIndex);
          }
          value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
          if (value && match[0] === str && !isString2(value)) return value;
          if (!isString2(value)) value = makeString2(value);
          if (!value) {
            this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
            value = "";
          }
          if (formatters.length) {
            value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
              ...options,
              interpolationkey: match[1].trim()
            }), value.trim());
          }
          str = str.replace(match[0], value);
          this.regexp.lastIndex = 0;
        }
        return str;
      }
    };
    parseFormatStr2 = (formatStr) => {
      let formatName = formatStr.toLowerCase().trim();
      const formatOptions = {};
      if (formatStr.indexOf("(") > -1) {
        const p = formatStr.split("(");
        formatName = p[0].toLowerCase().trim();
        const optStr = p[1].substring(0, p[1].length - 1);
        if (formatName === "currency" && optStr.indexOf(":") < 0) {
          if (!formatOptions.currency) formatOptions.currency = optStr.trim();
        } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
          if (!formatOptions.range) formatOptions.range = optStr.trim();
        } else {
          const opts = optStr.split(";");
          opts.forEach((opt) => {
            if (opt) {
              const [key, ...rest] = opt.split(":");
              const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
              const trimmedKey = key.trim();
              if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
              if (val === "false") formatOptions[trimmedKey] = false;
              if (val === "true") formatOptions[trimmedKey] = true;
              if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
            }
          });
        }
      }
      return {
        formatName,
        formatOptions
      };
    };
    createCachedFormatter2 = (fn) => {
      const cache = {};
      return (v, l, o) => {
        let optForCache = o;
        if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
          optForCache = {
            ...optForCache,
            [o.interpolationkey]: void 0
          };
        }
        const key = l + JSON.stringify(optForCache);
        let frm = cache[key];
        if (!frm) {
          frm = fn(getCleanedCode2(l), o);
          cache[key] = frm;
        }
        return frm(v);
      };
    };
    createNonCachedFormatter2 = (fn) => (v, l, o) => fn(getCleanedCode2(l), o)(v);
    Formatter2 = class {
      constructor(options = {}) {
        this.logger = baseLogger2.create("formatter");
        this.options = options;
        this.init(options);
      }
      init(services, options = {
        interpolation: {}
      }) {
        this.formatSeparator = options.interpolation.formatSeparator || ",";
        const cf = options.cacheInBuiltFormats ? createCachedFormatter2 : createNonCachedFormatter2;
        this.formats = {
          number: cf((lng, opt) => {
            const formatter = new Intl.NumberFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          }),
          currency: cf((lng, opt) => {
            const formatter = new Intl.NumberFormat(lng, {
              ...opt,
              style: "currency"
            });
            return (val) => formatter.format(val);
          }),
          datetime: cf((lng, opt) => {
            const formatter = new Intl.DateTimeFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          }),
          relativetime: cf((lng, opt) => {
            const formatter = new Intl.RelativeTimeFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val, opt.range || "day");
          }),
          list: cf((lng, opt) => {
            const formatter = new Intl.ListFormat(lng, {
              ...opt
            });
            return (val) => formatter.format(val);
          })
        };
      }
      add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
      }
      addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter2(fc);
      }
      format(value, format2, lng, options = {}) {
        const formats = format2.split(this.formatSeparator);
        if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
          const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
          formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
        }
        const result = formats.reduce((mem, f) => {
          const {
            formatName,
            formatOptions
          } = parseFormatStr2(f);
          if (this.formats[formatName]) {
            let formatted = mem;
            try {
              const valOptions = options?.formatParams?.[options.interpolationkey] || {};
              const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
              formatted = this.formats[formatName](mem, l, {
                ...formatOptions,
                ...options,
                ...valOptions
              });
            } catch (error) {
              this.logger.warn(error);
            }
            return formatted;
          } else {
            this.logger.warn(`there was no format function for ${formatName}`);
          }
          return mem;
        }, value);
        return result;
      }
    };
    removePending2 = (q, name) => {
      if (q.pending[name] !== void 0) {
        delete q.pending[name];
        q.pendingCount--;
      }
    };
    Connector2 = class extends EventEmitter2 {
      constructor(backend, store, services, options = {}) {
        super();
        this.backend = backend;
        this.store = store;
        this.services = services;
        this.languageUtils = services.languageUtils;
        this.options = options;
        this.logger = baseLogger2.create("backendConnector");
        this.waitingReads = [];
        this.maxParallelReads = options.maxParallelReads || 10;
        this.readingCalls = 0;
        this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        this.state = {};
        this.queue = [];
        this.backend?.init?.(services, options.backend, options);
      }
      queueLoad(languages, namespaces, options, callback) {
        const toLoad = {};
        const pending = {};
        const toLoadLanguages = {};
        const toLoadNamespaces = {};
        languages.forEach((lng) => {
          let hasAllNamespaces = true;
          namespaces.forEach((ns) => {
            const name = `${lng}|${ns}`;
            if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
              this.state[name] = 2;
            } else if (this.state[name] < 0) ;
            else if (this.state[name] === 1) {
              if (pending[name] === void 0) pending[name] = true;
            } else {
              this.state[name] = 1;
              hasAllNamespaces = false;
              if (pending[name] === void 0) pending[name] = true;
              if (toLoad[name] === void 0) toLoad[name] = true;
              if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
            }
          });
          if (!hasAllNamespaces) toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
          this.queue.push({
            pending,
            pendingCount: Object.keys(pending).length,
            loaded: {},
            errors: [],
            callback
          });
        }
        return {
          toLoad: Object.keys(toLoad),
          pending: Object.keys(pending),
          toLoadLanguages: Object.keys(toLoadLanguages),
          toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
      }
      loaded(name, err, data) {
        const s2 = name.split("|");
        const lng = s2[0];
        const ns = s2[1];
        if (err) this.emit("failedLoading", lng, ns, err);
        if (!err && data) {
          this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
            skipCopy: true
          });
        }
        this.state[name] = err ? -1 : 2;
        if (err && data) this.state[name] = 0;
        const loaded = {};
        this.queue.forEach((q) => {
          pushPath2(q.loaded, [lng], ns);
          removePending2(q, name);
          if (err) q.errors.push(err);
          if (q.pendingCount === 0 && !q.done) {
            Object.keys(q.loaded).forEach((l) => {
              if (!loaded[l]) loaded[l] = {};
              const loadedKeys = q.loaded[l];
              if (loadedKeys.length) {
                loadedKeys.forEach((n2) => {
                  if (loaded[l][n2] === void 0) loaded[l][n2] = true;
                });
              }
            });
            q.done = true;
            if (q.errors.length) {
              q.callback(q.errors);
            } else {
              q.callback();
            }
          }
        });
        this.emit("loaded", loaded);
        this.queue = this.queue.filter((q) => !q.done);
      }
      read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
        if (!lng.length) return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
          this.waitingReads.push({
            lng,
            ns,
            fcName,
            tried,
            wait,
            callback
          });
          return;
        }
        this.readingCalls++;
        const resolver = (err, data) => {
          this.readingCalls--;
          if (this.waitingReads.length > 0) {
            const next = this.waitingReads.shift();
            this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
          }
          if (err && data && tried < this.maxRetries) {
            setTimeout(() => {
              this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
            }, wait);
            return;
          }
          callback(err, data);
        };
        const fc = this.backend[fcName].bind(this.backend);
        if (fc.length === 2) {
          try {
            const r2 = fc(lng, ns);
            if (r2 && typeof r2.then === "function") {
              r2.then((data) => resolver(null, data)).catch(resolver);
            } else {
              resolver(null, r2);
            }
          } catch (err) {
            resolver(err);
          }
          return;
        }
        return fc(lng, ns, resolver);
      }
      prepareLoading(languages, namespaces, options = {}, callback) {
        if (!this.backend) {
          this.logger.warn("No backend was added via i18next.use. Will not load resources.");
          return callback && callback();
        }
        if (isString2(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
        if (isString2(namespaces)) namespaces = [namespaces];
        const toLoad = this.queueLoad(languages, namespaces, options, callback);
        if (!toLoad.toLoad.length) {
          if (!toLoad.pending.length) callback();
          return null;
        }
        toLoad.toLoad.forEach((name) => {
          this.loadOne(name);
        });
      }
      load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
      }
      reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
          reload: true
        }, callback);
      }
      loadOne(name, prefix = "") {
        const s2 = name.split("|");
        const lng = s2[0];
        const ns = s2[1];
        this.read(lng, ns, "read", void 0, void 0, (err, data) => {
          if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
          if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
          this.loaded(name, err, data);
        });
      }
      saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {
      }) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
          this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
          return;
        }
        if (key === void 0 || key === null || key === "") return;
        if (this.backend?.create) {
          const opts = {
            ...options,
            isUpdate
          };
          const fc = this.backend.create.bind(this.backend);
          if (fc.length < 6) {
            try {
              let r2;
              if (fc.length === 5) {
                r2 = fc(languages, namespace, key, fallbackValue, opts);
              } else {
                r2 = fc(languages, namespace, key, fallbackValue);
              }
              if (r2 && typeof r2.then === "function") {
                r2.then((data) => clb(null, data)).catch(clb);
              } else {
                clb(null, r2);
              }
            } catch (err) {
              clb(err);
            }
          } else {
            fc(languages, namespace, key, fallbackValue, clb, opts);
          }
        }
        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
      }
    };
    get2 = () => ({
      debug: false,
      initAsync: true,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: false,
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      load: "all",
      preload: false,
      simplifyPluralSuffix: true,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: false,
      saveMissing: false,
      updateMissing: false,
      saveMissingTo: "fallback",
      saveMissingPlurals: true,
      missingKeyHandler: false,
      missingInterpolationHandler: false,
      postProcess: false,
      postProcessPassResolved: false,
      returnNull: false,
      returnEmptyString: true,
      returnObjects: false,
      joinArrays: false,
      returnedObjectHandler: false,
      parseMissingKeyHandler: false,
      appendNamespaceToMissingKey: false,
      appendNamespaceToCIMode: false,
      overloadTranslationOptionHandler: (args) => {
        let ret = {};
        if (typeof args[1] === "object") ret = args[1];
        if (isString2(args[1])) ret.defaultValue = args[1];
        if (isString2(args[2])) ret.tDescription = args[2];
        if (typeof args[2] === "object" || typeof args[3] === "object") {
          const options = args[3] || args[2];
          Object.keys(options).forEach((key) => {
            ret[key] = options[key];
          });
        }
        return ret;
      },
      interpolation: {
        escapeValue: true,
        format: (value) => value,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: true
      },
      cacheInBuiltFormats: true
    });
    transformOptions2 = (options) => {
      if (isString2(options.ns)) options.ns = [options.ns];
      if (isString2(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
      if (isString2(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
      if (options.supportedLngs?.indexOf?.("cimode") < 0) {
        options.supportedLngs = options.supportedLngs.concat(["cimode"]);
      }
      if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
      return options;
    };
    noop2 = () => {
    };
    bindMemberFunctions2 = (inst) => {
      const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
      mems.forEach((mem) => {
        if (typeof inst[mem] === "function") {
          inst[mem] = inst[mem].bind(inst);
        }
      });
    };
    SUPPORT_NOTICE_KEY = "__i18next_supportNoticeShown";
    getSupportNoticeShown = () => {
      if (typeof globalThis !== "undefined" && !!globalThis[SUPPORT_NOTICE_KEY]) return true;
      if (typeof process !== "undefined" && process.env && process.env.I18NEXT_NO_SUPPORT_NOTICE) return true;
      return false;
    };
    setSupportNoticeShown = () => {
      if (typeof globalThis !== "undefined") globalThis[SUPPORT_NOTICE_KEY] = true;
    };
    usesLocize = (inst) => {
      if (inst?.modules?.backend?.name?.indexOf("Locize") > 0) return true;
      if (inst?.modules?.backend?.constructor?.name?.indexOf("Locize") > 0) return true;
      if (inst?.options?.backend?.backends) {
        if (inst.options.backend.backends.some((b) => b?.name?.indexOf("Locize") > 0 || b?.constructor?.name?.indexOf("Locize") > 0)) return true;
      }
      if (inst?.options?.backend?.projectId) return true;
      if (inst?.options?.backend?.backendOptions) {
        if (inst.options.backend.backendOptions.some((b) => b?.projectId)) return true;
      }
      return false;
    };
    I18n2 = class _I18n extends EventEmitter2 {
      constructor(options = {}, callback) {
        super();
        this.options = transformOptions2(options);
        this.services = {};
        this.logger = baseLogger2;
        this.modules = {
          external: []
        };
        bindMemberFunctions2(this);
        if (callback && !this.isInitialized && !options.isClone) {
          if (!this.options.initAsync) {
            this.init(options, callback);
            return this;
          }
          setTimeout(() => {
            this.init(options, callback);
          }, 0);
        }
      }
      init(options = {}, callback) {
        this.isInitializing = true;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (options.defaultNS == null && options.ns) {
          if (isString2(options.ns)) {
            options.defaultNS = options.ns;
          } else if (options.ns.indexOf("translation") < 0) {
            options.defaultNS = options.ns[0];
          }
        }
        const defOpts = get2();
        this.options = {
          ...defOpts,
          ...this.options,
          ...transformOptions2(options)
        };
        this.options.interpolation = {
          ...defOpts.interpolation,
          ...this.options.interpolation
        };
        if (options.keySeparator !== void 0) {
          this.options.userDefinedKeySeparator = options.keySeparator;
        }
        if (options.nsSeparator !== void 0) {
          this.options.userDefinedNsSeparator = options.nsSeparator;
        }
        if (typeof this.options.overloadTranslationOptionHandler !== "function") {
          this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
        }
        if (this.options.showSupportNotice !== false && !usesLocize(this) && !getSupportNoticeShown()) {
          if (typeof console !== "undefined" && typeof console.info !== "undefined") console.info("\u{1F310} i18next is made possible by our own product, Locize \u2014 consider powering your project with managed localization (AI, CDN, integrations): https://locize.com \u{1F499}");
          setSupportNoticeShown();
        }
        const createClassOnDemand = (ClassOrObject) => {
          if (!ClassOrObject) return null;
          if (typeof ClassOrObject === "function") return new ClassOrObject();
          return ClassOrObject;
        };
        if (!this.options.isClone) {
          if (this.modules.logger) {
            baseLogger2.init(createClassOnDemand(this.modules.logger), this.options);
          } else {
            baseLogger2.init(null, this.options);
          }
          let formatter;
          if (this.modules.formatter) {
            formatter = this.modules.formatter;
          } else {
            formatter = Formatter2;
          }
          const lu = new LanguageUtil2(this.options);
          this.store = new ResourceStore2(this.options.resources, this.options);
          const s2 = this.services;
          s2.logger = baseLogger2;
          s2.resourceStore = this.store;
          s2.languageUtils = lu;
          s2.pluralResolver = new PluralResolver2(lu, {
            prepend: this.options.pluralSeparator,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix
          });
          const usingLegacyFormatFunction = this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format;
          if (usingLegacyFormatFunction) {
            this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
          }
          if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
            s2.formatter = createClassOnDemand(formatter);
            if (s2.formatter.init) s2.formatter.init(s2, this.options);
            this.options.interpolation.format = s2.formatter.format.bind(s2.formatter);
          }
          s2.interpolator = new Interpolator2(this.options);
          s2.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
          };
          s2.backendConnector = new Connector2(createClassOnDemand(this.modules.backend), s2.resourceStore, s2, this.options);
          s2.backendConnector.on("*", (event, ...args) => {
            this.emit(event, ...args);
          });
          if (this.modules.languageDetector) {
            s2.languageDetector = createClassOnDemand(this.modules.languageDetector);
            if (s2.languageDetector.init) s2.languageDetector.init(s2, this.options.detection, this.options);
          }
          if (this.modules.i18nFormat) {
            s2.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
            if (s2.i18nFormat.init) s2.i18nFormat.init(this);
          }
          this.translator = new Translator2(this.services, this.options);
          this.translator.on("*", (event, ...args) => {
            this.emit(event, ...args);
          });
          this.modules.external.forEach((m) => {
            if (m.init) m.init(this);
          });
        }
        this.format = this.options.interpolation.format;
        if (!callback) callback = noop2;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
          const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
          this.logger.warn("init: no languageDetector is used and no lng is defined");
        }
        const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
        storeApi.forEach((fcName) => {
          this[fcName] = (...args) => this.store[fcName](...args);
        });
        const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
        storeApiChained.forEach((fcName) => {
          this[fcName] = (...args) => {
            this.store[fcName](...args);
            return this;
          };
        });
        const deferred = defer2();
        const load = () => {
          const finish = (err, t6) => {
            this.isInitializing = false;
            if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
            this.isInitialized = true;
            if (!this.options.isClone) this.logger.log("initialized", this.options);
            this.emit("initialized", this.options);
            deferred.resolve(t6);
            callback(err, t6);
          };
          if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, finish);
        };
        if (this.options.resources || !this.options.initAsync) {
          load();
        } else {
          setTimeout(load, 0);
        }
        return deferred;
      }
      loadResources(language3, callback = noop2) {
        let usedCallback = callback;
        const usedLng = isString2(language3) ? language3 : this.language;
        if (typeof language3 === "function") usedCallback = language3;
        if (!this.options.resources || this.options.partialBundledLanguages) {
          if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
          const toLoad = [];
          const append = (lng) => {
            if (!lng) return;
            if (lng === "cimode") return;
            const lngs = this.services.languageUtils.toResolveHierarchy(lng);
            lngs.forEach((l) => {
              if (l === "cimode") return;
              if (toLoad.indexOf(l) < 0) toLoad.push(l);
            });
          };
          if (!usedLng) {
            const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            fallbacks.forEach((l) => append(l));
          } else {
            append(usedLng);
          }
          this.options.preload?.forEach?.((l) => append(l));
          this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
            if (!e2 && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
            usedCallback(e2);
          });
        } else {
          usedCallback(null);
        }
      }
      reloadResources(lngs, ns, callback) {
        const deferred = defer2();
        if (typeof lngs === "function") {
          callback = lngs;
          lngs = void 0;
        }
        if (typeof ns === "function") {
          callback = ns;
          ns = void 0;
        }
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop2;
        this.services.backendConnector.reload(lngs, ns, (err) => {
          deferred.resolve();
          callback(err);
        });
        return deferred;
      }
      use(module) {
        if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        if (module.type === "backend") {
          this.modules.backend = module;
        }
        if (module.type === "logger" || module.log && module.warn && module.error) {
          this.modules.logger = module;
        }
        if (module.type === "languageDetector") {
          this.modules.languageDetector = module;
        }
        if (module.type === "i18nFormat") {
          this.modules.i18nFormat = module;
        }
        if (module.type === "postProcessor") {
          postProcessor2.addPostProcessor(module);
        }
        if (module.type === "formatter") {
          this.modules.formatter = module;
        }
        if (module.type === "3rdParty") {
          this.modules.external.push(module);
        }
        return this;
      }
      setResolvedLanguage(l) {
        if (!l || !this.languages) return;
        if (["cimode", "dev"].indexOf(l) > -1) return;
        for (let li = 0; li < this.languages.length; li++) {
          const lngInLngs = this.languages[li];
          if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
          if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
            this.resolvedLanguage = lngInLngs;
            break;
          }
        }
        if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
          this.resolvedLanguage = l;
          this.languages.unshift(l);
        }
      }
      changeLanguage(lng, callback) {
        this.isLanguageChangingTo = lng;
        const deferred = defer2();
        this.emit("languageChanging", lng);
        const setLngProps = (l) => {
          this.language = l;
          this.languages = this.services.languageUtils.toResolveHierarchy(l);
          this.resolvedLanguage = void 0;
          this.setResolvedLanguage(l);
        };
        const done = (err, l) => {
          if (l) {
            if (this.isLanguageChangingTo === lng) {
              setLngProps(l);
              this.translator.changeLanguage(l);
              this.isLanguageChangingTo = void 0;
              this.emit("languageChanged", l);
              this.logger.log("languageChanged", l);
            }
          } else {
            this.isLanguageChangingTo = void 0;
          }
          deferred.resolve((...args) => this.t(...args));
          if (callback) callback(err, (...args) => this.t(...args));
        };
        const setLng = (lngs) => {
          if (!lng && !lngs && this.services.languageDetector) lngs = [];
          const fl = isString2(lngs) ? lngs : lngs && lngs[0];
          const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString2(lngs) ? [lngs] : lngs);
          if (l) {
            if (!this.language) {
              setLngProps(l);
            }
            if (!this.translator.language) this.translator.changeLanguage(l);
            this.services.languageDetector?.cacheUserLanguage?.(l);
          }
          this.loadResources(l, (err) => {
            done(err, l);
          });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
          setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
          if (this.services.languageDetector.detect.length === 0) {
            this.services.languageDetector.detect().then(setLng);
          } else {
            this.services.languageDetector.detect(setLng);
          }
        } else {
          setLng(lng);
        }
        return deferred;
      }
      getFixedT(lng, ns, keyPrefix) {
        const fixedT = (key, opts, ...rest) => {
          let o;
          if (typeof opts !== "object") {
            o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
          } else {
            o = {
              ...opts
            };
          }
          o.lng = o.lng || fixedT.lng;
          o.lngs = o.lngs || fixedT.lngs;
          o.ns = o.ns || fixedT.ns;
          if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
          const selectorOpts = {
            ...this.options,
            ...o
          };
          if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector2(o.keyPrefix, selectorOpts);
          const keySeparator = this.options.keySeparator || ".";
          let resultKey;
          if (o.keyPrefix && Array.isArray(key)) {
            resultKey = key.map((k) => {
              if (typeof k === "function") k = keysFromSelector2(k, selectorOpts);
              return `${o.keyPrefix}${keySeparator}${k}`;
            });
          } else {
            if (typeof key === "function") key = keysFromSelector2(key, selectorOpts);
            resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
          }
          return this.t(resultKey, o);
        };
        if (isString2(lng)) {
          fixedT.lng = lng;
        } else {
          fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
      }
      t(...args) {
        return this.translator?.translate(...args);
      }
      exists(...args) {
        return this.translator?.exists(...args);
      }
      setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
      }
      hasLoadedNamespace(ns, options = {}) {
        if (!this.isInitialized) {
          this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
          return false;
        }
        if (!this.languages || !this.languages.length) {
          this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
          return false;
        }
        const lng = options.lng || this.resolvedLanguage || this.languages[0];
        const fallbackLng = this.options ? this.options.fallbackLng : false;
        const lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === "cimode") return true;
        const loadNotPending = (l, n2) => {
          const loadState = this.services.backendConnector.state[`${l}|${n2}`];
          return loadState === -1 || loadState === 0 || loadState === 2;
        };
        if (options.precheck) {
          const preResult = options.precheck(this, loadNotPending);
          if (preResult !== void 0) return preResult;
        }
        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
      }
      loadNamespaces(ns, callback) {
        const deferred = defer2();
        if (!this.options.ns) {
          if (callback) callback();
          return Promise.resolve();
        }
        if (isString2(ns)) ns = [ns];
        ns.forEach((n2) => {
          if (this.options.ns.indexOf(n2) < 0) this.options.ns.push(n2);
        });
        this.loadResources((err) => {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
      loadLanguages(lngs, callback) {
        const deferred = defer2();
        if (isString2(lngs)) lngs = [lngs];
        const preloaded = this.options.preload || [];
        const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
        if (!newLngs.length) {
          if (callback) callback();
          return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources((err) => {
          deferred.resolve();
          if (callback) callback(err);
        });
        return deferred;
      }
      dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
        if (!lng) return "rtl";
        try {
          const l = new Intl.Locale(lng);
          if (l && l.getTextInfo) {
            const ti = l.getTextInfo();
            if (ti && ti.direction) return ti.direction;
          }
        } catch (e2) {
        }
        const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
        const languageUtils = this.services?.languageUtils || new LanguageUtil2(get2());
        if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
        return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
      }
      static createInstance(options = {}, callback) {
        const instance3 = new _I18n(options, callback);
        instance3.createInstance = _I18n.createInstance;
        return instance3;
      }
      cloneInstance(options = {}, callback = noop2) {
        const forkResourceStore = options.forkResourceStore;
        if (forkResourceStore) delete options.forkResourceStore;
        const mergedOptions = {
          ...this.options,
          ...options,
          ...{
            isClone: true
          }
        };
        const clone = new _I18n(mergedOptions);
        if (options.debug !== void 0 || options.prefix !== void 0) {
          clone.logger = clone.logger.clone(options);
        }
        const membersToCopy = ["store", "services", "language"];
        membersToCopy.forEach((m) => {
          clone[m] = this[m];
        });
        clone.services = {
          ...this.services
        };
        clone.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        if (forkResourceStore) {
          const clonedData = Object.keys(this.store.data).reduce((prev, l) => {
            prev[l] = {
              ...this.store.data[l]
            };
            prev[l] = Object.keys(prev[l]).reduce((acc, n2) => {
              acc[n2] = {
                ...prev[l][n2]
              };
              return acc;
            }, prev[l]);
            return prev;
          }, {});
          clone.store = new ResourceStore2(clonedData, mergedOptions);
          clone.services.resourceStore = clone.store;
        }
        if (options.interpolation) {
          const defOpts = get2();
          const mergedInterpolation = {
            ...defOpts.interpolation,
            ...this.options.interpolation,
            ...options.interpolation
          };
          const mergedForInterpolator = {
            ...mergedOptions,
            interpolation: mergedInterpolation
          };
          clone.services.interpolator = new Interpolator2(mergedForInterpolator);
        }
        clone.translator = new Translator2(clone.services, mergedOptions);
        clone.translator.on("*", (event, ...args) => {
          clone.emit(event, ...args);
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = mergedOptions;
        clone.translator.backendConnector.services.utils = {
          hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
      }
      toJSON() {
        return {
          options: this.options,
          store: this.store,
          language: this.language,
          languages: this.languages,
          resolvedLanguage: this.resolvedLanguage
        };
      }
    };
    instance2 = I18n2.createInstance();
    createInstance2 = instance2.createInstance;
    dir2 = instance2.dir;
    init2 = instance2.init;
    loadResources2 = instance2.loadResources;
    reloadResources2 = instance2.reloadResources;
    use2 = instance2.use;
    changeLanguage2 = instance2.changeLanguage;
    getFixedT2 = instance2.getFixedT;
    t2 = instance2.t;
    exists2 = instance2.exists;
    setDefaultNamespace2 = instance2.setDefaultNamespace;
    hasLoadedNamespace2 = instance2.hasLoadedNamespace;
    loadNamespaces2 = instance2.loadNamespaces;
    loadLanguages2 = instance2.loadLanguages;
  }
});

// node_modules/void-elements/index.js
var require_void_elements = __commonJS({
  "node_modules/void-elements/index.js"(exports, module) {
    module.exports = {
      "area": true,
      "base": true,
      "br": true,
      "col": true,
      "embed": true,
      "hr": true,
      "img": true,
      "input": true,
      "link": true,
      "meta": true,
      "param": true,
      "source": true,
      "track": true,
      "wbr": true
    };
  }
});

// node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
function n(n2) {
  var r2 = { type: "tag", name: "", voidElement: false, attrs: {}, children: [] }, i2 = n2.match(/<\/?([^\s]+?)[/\s>]/);
  if (i2 && (r2.name = i2[1], (import_void_elements.default[i2[1]] || "/" === n2.charAt(n2.length - 2)) && (r2.voidElement = true), r2.name.startsWith("!--"))) {
    var s2 = n2.indexOf("-->");
    return { type: "comment", comment: -1 !== s2 ? n2.slice(4, s2) : "" };
  }
  for (var a2 = new RegExp(t3), c2 = null; null !== (c2 = a2.exec(n2)); ) if (c2[0].trim()) if (c2[1]) {
    var o = c2[1].trim(), l = [o, ""];
    o.indexOf("=") > -1 && (l = o.split("=")), r2.attrs[l[0]] = l[1], a2.lastIndex--;
  } else c2[2] && (r2.attrs[c2[2]] = c2[3].trim().substring(1, c2[3].length - 1));
  return r2;
}
function a(e2, t6) {
  switch (t6.type) {
    case "text":
      return e2 + t6.content;
    case "tag":
      return e2 += "<" + t6.name + (t6.attrs ? (function(e3) {
        var t7 = [];
        for (var n2 in e3) t7.push(n2 + '="' + e3[n2] + '"');
        return t7.length ? " " + t7.join(" ") : "";
      })(t6.attrs) : "") + (t6.voidElement ? "/>" : ">"), t6.voidElement ? e2 : e2 + t6.children.reduce(a, "") + "</" + t6.name + ">";
    case "comment":
      return e2 + "<!--" + t6.comment + "-->";
  }
}
var import_void_elements, t3, r, i, s, c, html_parse_stringify_module_default;
var init_html_parse_stringify_module = __esm({
  "node_modules/html-parse-stringify/dist/html-parse-stringify.module.js"() {
    import_void_elements = __toESM(require_void_elements());
    t3 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
    r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g;
    i = /^\s*$/;
    s = /* @__PURE__ */ Object.create(null);
    c = { parse: function(e2, t6) {
      t6 || (t6 = {}), t6.components || (t6.components = s);
      var a2, c2 = [], o = [], l = -1, m = false;
      if (0 !== e2.indexOf("<")) {
        var u = e2.indexOf("<");
        c2.push({ type: "text", content: -1 === u ? e2 : e2.substring(0, u) });
      }
      return e2.replace(r, function(r2, s2) {
        if (m) {
          if (r2 !== "</" + a2.name + ">") return;
          m = false;
        }
        var u2, f = "/" !== r2.charAt(1), h = r2.startsWith("<!--"), p = s2 + r2.length, d = e2.charAt(p);
        if (h) {
          var v = n(r2);
          return l < 0 ? (c2.push(v), c2) : ((u2 = o[l]).children.push(v), c2);
        }
        if (f && (l++, "tag" === (a2 = n(r2)).type && t6.components[a2.name] && (a2.type = "component", m = true), a2.voidElement || m || !d || "<" === d || a2.children.push({ type: "text", content: e2.slice(p, e2.indexOf("<", p)) }), 0 === l && c2.push(a2), (u2 = o[l - 1]) && u2.children.push(a2), o[l] = a2), (!f || a2.voidElement) && (l > -1 && (a2.voidElement || a2.name === r2.slice(2, -1)) && (l--, a2 = -1 === l ? c2 : o[l]), !m && "<" !== d && d)) {
          u2 = -1 === l ? c2 : o[l].children;
          var x = e2.indexOf("<", p), g = e2.slice(p, -1 === x ? void 0 : x);
          i.test(g) && (g = " "), (x > -1 && l + u2.length >= 0 || " " !== g) && u2.push({ type: "text", content: g });
        }
      }), c2;
    }, stringify: function(e2) {
      return e2.reduce(function(e3, t6) {
        return e3 + a("", t6);
      }, "");
    } };
    html_parse_stringify_module_default = c;
  }
});

// node_modules/react-i18next/dist/es/utils.js
var warn, alreadyWarned, warnOnce, loadedClb, loadNamespaces3, loadLanguages3, hasLoadedNamespace3, getDisplayName, isString3, isObject;
var init_utils = __esm({
  "node_modules/react-i18next/dist/es/utils.js"() {
    warn = (i18n3, code, msg, rest) => {
      const args = [msg, {
        code,
        ...rest || {}
      }];
      if (i18n3?.services?.logger?.forward) {
        return i18n3.services.logger.forward(args, "warn", "react-i18next::", true);
      }
      if (isString3(args[0])) args[0] = `react-i18next:: ${args[0]}`;
      if (i18n3?.services?.logger?.warn) {
        i18n3.services.logger.warn(...args);
      } else if (console?.warn) {
        console.warn(...args);
      }
    };
    alreadyWarned = {};
    warnOnce = (i18n3, code, msg, rest) => {
      if (isString3(msg) && alreadyWarned[msg]) return;
      if (isString3(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
      warn(i18n3, code, msg, rest);
    };
    loadedClb = (i18n3, cb) => () => {
      if (i18n3.isInitialized) {
        cb();
      } else {
        const initialized = () => {
          setTimeout(() => {
            i18n3.off("initialized", initialized);
          }, 0);
          cb();
        };
        i18n3.on("initialized", initialized);
      }
    };
    loadNamespaces3 = (i18n3, ns, cb) => {
      i18n3.loadNamespaces(ns, loadedClb(i18n3, cb));
    };
    loadLanguages3 = (i18n3, lng, ns, cb) => {
      if (isString3(ns)) ns = [ns];
      if (i18n3.options.preload && i18n3.options.preload.indexOf(lng) > -1) return loadNamespaces3(i18n3, ns, cb);
      ns.forEach((n2) => {
        if (i18n3.options.ns.indexOf(n2) < 0) i18n3.options.ns.push(n2);
      });
      i18n3.loadLanguages(lng, loadedClb(i18n3, cb));
    };
    hasLoadedNamespace3 = (ns, i18n3, options = {}) => {
      if (!i18n3.languages || !i18n3.languages.length) {
        warnOnce(i18n3, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: i18n3.languages
        });
        return true;
      }
      return i18n3.hasLoadedNamespace(ns, {
        lng: options.lng,
        precheck: (i18nInstance2, loadNotPending) => {
          if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
        }
      });
    };
    getDisplayName = (Component) => Component.displayName || Component.name || (isString3(Component) && Component.length > 0 ? Component : "Unknown");
    isString3 = (obj) => typeof obj === "string";
    isObject = (obj) => typeof obj === "object" && obj !== null;
  }
});

// node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity, htmlEntities, unescapeHtmlEntity, unescape;
var init_unescape = __esm({
  "node_modules/react-i18next/dist/es/unescape.js"() {
    matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
    htmlEntities = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "\xA9",
      "&#169;": "\xA9",
      "&reg;": "\xAE",
      "&#174;": "\xAE",
      "&hellip;": "\u2026",
      "&#8230;": "\u2026",
      "&#x2F;": "/",
      "&#47;": "/"
    };
    unescapeHtmlEntity = (m) => htmlEntities[m];
    unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
  }
});

// node_modules/react-i18next/dist/es/defaults.js
var defaultOptions, setDefaults, getDefaults;
var init_defaults = __esm({
  "node_modules/react-i18next/dist/es/defaults.js"() {
    init_unescape();
    defaultOptions = {
      bindI18n: "languageChanged",
      bindI18nStore: "",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transWrapTextNodes: "",
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
      useSuspense: true,
      unescape,
      transDefaultProps: void 0
    };
    setDefaults = (options = {}) => {
      defaultOptions = {
        ...defaultOptions,
        ...options
      };
    };
    getDefaults = () => defaultOptions;
  }
});

// node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance, setI18n, getI18n;
var init_i18nInstance = __esm({
  "node_modules/react-i18next/dist/es/i18nInstance.js"() {
    setI18n = (instance3) => {
      i18nInstance = instance3;
    };
    getI18n = () => i18nInstance;
  }
});

// node_modules/react-i18next/dist/es/TransWithoutContext.js
function Trans({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const i18n3 = i18nFromProps || getI18n();
  if (!i18n3) {
    warnOnce(i18n3, "NO_I18NEXT_INSTANCE", `Trans: You need to pass in an i18next instance using i18nextReactModule`, {
      i18nKey
    });
    return children;
  }
  const t6 = tFromProps || i18n3.t.bind(i18n3) || ((k) => k);
  const reactI18nextOptions = {
    ...getDefaults(),
    ...i18n3.options?.react
  };
  let namespaces = ns || t6.ns || i18n3.options?.defaultNS;
  namespaces = isString3(namespaces) ? [namespaces] : namespaces || ["translation"];
  const {
    transDefaultProps
  } = reactI18nextOptions;
  const mergedTOptions = transDefaultProps?.tOptions ? {
    ...transDefaultProps.tOptions,
    ...tOptions
  } : tOptions;
  const mergedShouldUnescape = shouldUnescape ?? transDefaultProps?.shouldUnescape;
  const mergedValues = transDefaultProps?.values ? {
    ...transDefaultProps.values,
    ...values
  } : values;
  const mergedComponents = transDefaultProps?.components ? {
    ...transDefaultProps.components,
    ...components
  } : components;
  const nodeAsString = nodesToString(children, reactI18nextOptions, i18n3, i18nKey);
  const defaultValue = defaults || mergedTOptions?.defaultValue || nodeAsString || reactI18nextOptions.transEmptyNodeValue || (typeof i18nKey === "function" ? keysFromSelector2(i18nKey) : i18nKey);
  const {
    hashTransKey
  } = reactI18nextOptions;
  const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
  if (i18n3.options?.interpolation?.defaultVariables) {
    values = mergedValues && Object.keys(mergedValues).length > 0 ? {
      ...mergedValues,
      ...i18n3.options.interpolation.defaultVariables
    } : {
      ...i18n3.options.interpolation.defaultVariables
    };
  } else {
    values = mergedValues;
  }
  const valuesFromChildren = getValuesFromChildren(children);
  if (valuesFromChildren && typeof valuesFromChildren.count === "number" && count === void 0) {
    count = valuesFromChildren.count;
  }
  const interpolationOverride = values || count !== void 0 && !i18n3.options?.interpolation?.alwaysFormat || !children ? mergedTOptions.interpolation : {
    interpolation: {
      ...mergedTOptions.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  };
  const combinedTOpts = {
    ...mergedTOptions,
    context: context || mergedTOptions.context,
    count,
    ...values,
    ...interpolationOverride,
    defaultValue,
    ns: namespaces
  };
  let translation = key ? t6(key, combinedTOpts) : defaultValue;
  if (translation === key && defaultValue) translation = defaultValue;
  const generatedComponents = generateComponents(mergedComponents, translation, i18n3, i18nKey);
  let indexedChildren = generatedComponents || children;
  let componentsMap = null;
  if (isComponentsMap(generatedComponents)) {
    componentsMap = generatedComponents;
    indexedChildren = children;
  }
  const content = renderNodes(indexedChildren, componentsMap, translation, i18n3, reactI18nextOptions, combinedTOpts, mergedShouldUnescape);
  const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
  return useAsParent ? (0, import_react.createElement)(useAsParent, additionalProps, content) : content;
}
var import_react, hasChildren, getChildren, hasValidReactChildren, getAsArray, mergeProps, getValuesFromChildren, nodesToString, escapeLiteralLessThan, renderNodes, fixComponentProps, generateArrayComponents, generateObjectComponents, generateComponents, isComponentsMap;
var init_TransWithoutContext = __esm({
  "node_modules/react-i18next/dist/es/TransWithoutContext.js"() {
    import_react = __toESM(require_react(), 1);
    init_i18next2();
    init_html_parse_stringify_module();
    init_utils();
    init_defaults();
    init_i18nInstance();
    init_unescape();
    hasChildren = (node, checkLength) => {
      if (!node) return false;
      const base = node.props?.children ?? node.children;
      if (checkLength) return base.length > 0;
      return !!base;
    };
    getChildren = (node) => {
      if (!node) return [];
      const children = node.props?.children ?? node.children;
      return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
    };
    hasValidReactChildren = (children) => Array.isArray(children) && children.every(import_react.isValidElement);
    getAsArray = (data) => Array.isArray(data) ? data : [data];
    mergeProps = (source, target) => {
      const newTarget = {
        ...target
      };
      newTarget.props = {
        ...target.props,
        ...source.props
      };
      return newTarget;
    };
    getValuesFromChildren = (children) => {
      const values = {};
      if (!children) return values;
      const getData = (childs) => {
        const childrenArray = getAsArray(childs);
        childrenArray.forEach((child) => {
          if (isString3(child)) return;
          if (hasChildren(child)) getData(getChildren(child));
          else if (isObject(child) && !(0, import_react.isValidElement)(child)) Object.assign(values, child);
        });
      };
      getData(children);
      return values;
    };
    nodesToString = (children, i18nOptions, i18n3, i18nKey) => {
      if (!children) return "";
      let stringNode = "";
      const childrenArray = getAsArray(children);
      const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
      childrenArray.forEach((child, childIndex) => {
        if (isString3(child)) {
          stringNode += `${child}`;
          return;
        }
        if ((0, import_react.isValidElement)(child)) {
          const {
            props,
            type
          } = child;
          const childPropsCount = Object.keys(props).length;
          const shouldKeepChild = keepArray.indexOf(type) > -1;
          const childChildren = props.children;
          if (!childChildren && shouldKeepChild && !childPropsCount) {
            stringNode += `<${type}/>`;
            return;
          }
          if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
            stringNode += `<${childIndex}></${childIndex}>`;
            return;
          }
          if (shouldKeepChild && childPropsCount === 1 && isString3(childChildren)) {
            stringNode += `<${type}>${childChildren}</${type}>`;
            return;
          }
          const content = nodesToString(childChildren, i18nOptions, i18n3, i18nKey);
          stringNode += `<${childIndex}>${content}</${childIndex}>`;
          return;
        }
        if (child === null) {
          warn(i18n3, "TRANS_NULL_VALUE", `Passed in a null value as child`, {
            i18nKey
          });
          return;
        }
        if (isObject(child)) {
          const {
            format: format2,
            ...clone
          } = child;
          const keys = Object.keys(clone);
          if (keys.length === 1) {
            const value = format2 ? `${keys[0]}, ${format2}` : keys[0];
            stringNode += `{{${value}}}`;
            return;
          }
          warn(i18n3, "TRANS_INVALID_OBJ", `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
            i18nKey,
            child
          });
          return;
        }
        warn(i18n3, "TRANS_INVALID_VAR", `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
          i18nKey,
          child
        });
      });
      return stringNode;
    };
    escapeLiteralLessThan = (str, keepArray = [], knownComponentsMap = {}) => {
      if (!str) return str;
      const knownNames = Object.keys(knownComponentsMap);
      const allValidNames = [...keepArray, ...knownNames];
      let result = "";
      let i2 = 0;
      while (i2 < str.length) {
        if (str[i2] === "<") {
          let isValidTag = false;
          const closingMatch = str.slice(i2).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
          if (closingMatch) {
            const tagName = closingMatch[1];
            if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
              isValidTag = true;
              result += closingMatch[0];
              i2 += closingMatch[0].length;
            }
          }
          if (!isValidTag) {
            const openingMatch = str.slice(i2).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
            if (openingMatch) {
              const tagName = openingMatch[1];
              if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
                isValidTag = true;
                result += openingMatch[0];
                i2 += openingMatch[0].length;
              }
            }
          }
          if (!isValidTag) {
            result += "&lt;";
            i2 += 1;
          }
        } else {
          result += str[i2];
          i2 += 1;
        }
      }
      return result;
    };
    renderNodes = (children, knownComponentsMap, targetString, i18n3, i18nOptions, combinedTOpts, shouldUnescape) => {
      if (targetString === "") return [];
      const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
      const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep) => `<${keep}`).join("|")).test(targetString);
      if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
      const data = knownComponentsMap ?? {};
      const getData = (childs) => {
        const childrenArray = getAsArray(childs);
        childrenArray.forEach((child) => {
          if (isString3(child)) return;
          if (hasChildren(child)) getData(getChildren(child));
          else if (isObject(child) && !(0, import_react.isValidElement)(child)) Object.assign(data, child);
        });
      };
      getData(children);
      const escapedString = escapeLiteralLessThan(targetString, keepArray, data);
      const ast = html_parse_stringify_module_default.parse(`<0>${escapedString}</0>`);
      const opts = {
        ...data,
        ...combinedTOpts
      };
      const renderInner = (child, node, rootReactNode) => {
        const childs = getChildren(child);
        const mappedChildren = mapAST(childs, node.children, rootReactNode);
        return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
      };
      const pushTranslatedJSX = (child, inner, mem, i2, isVoid) => {
        if (child.dummy) {
          child.children = inner;
          mem.push((0, import_react.cloneElement)(child, {
            key: i2
          }, isVoid ? void 0 : inner));
        } else {
          mem.push(...import_react.Children.map([child], (c2) => {
            const INTERNAL_DYNAMIC_MARKER = "data-i18n-is-dynamic-list";
            const override = {
              key: i2,
              [INTERNAL_DYNAMIC_MARKER]: void 0
            };
            if (c2 && c2.props) {
              Object.keys(c2.props).forEach((k) => {
                if (k === "ref" || k === "children" || k === "i18nIsDynamicList" || k === INTERNAL_DYNAMIC_MARKER) return;
                override[k] = c2.props[k];
              });
            }
            return (0, import_react.cloneElement)(c2, override, isVoid ? null : inner);
          }));
        }
      };
      const mapAST = (reactNode, astNode, rootReactNode) => {
        const reactNodes = getAsArray(reactNode);
        const astNodes = getAsArray(astNode);
        return astNodes.reduce((mem, node, i2) => {
          const translationContent = node.children?.[0]?.content && i18n3.services.interpolator.interpolate(node.children[0].content, opts, i18n3.language);
          if (node.type === "tag") {
            let tmp = reactNodes[parseInt(node.name, 10)];
            if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
            if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
            if (!tmp) tmp = {};
            const props = {
              ...node.attrs
            };
            if (shouldUnescape) {
              Object.keys(props).forEach((p) => {
                const val = props[p];
                if (isString3(val)) {
                  props[p] = unescape(val);
                }
              });
            }
            const child = Object.keys(props).length !== 0 ? mergeProps({
              props
            }, tmp) : tmp;
            const isElement = (0, import_react.isValidElement)(child);
            const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
            const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && isObject(child) && child.dummy && !isElement;
            const isKnownComponent = isObject(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
            if (isString3(child)) {
              const value = i18n3.services.interpolator.interpolate(child, opts, i18n3.language);
              mem.push(value);
            } else if (hasChildren(child) || isValidTranslationWithChildren) {
              const inner = renderInner(child, node, rootReactNode);
              pushTranslatedJSX(child, inner, mem, i2);
            } else if (isEmptyTransWithHTML) {
              const inner = mapAST(reactNodes, node.children, rootReactNode);
              pushTranslatedJSX(child, inner, mem, i2);
            } else if (Number.isNaN(parseFloat(node.name))) {
              if (isKnownComponent) {
                const inner = renderInner(child, node, rootReactNode);
                pushTranslatedJSX(child, inner, mem, i2, node.voidElement);
              } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
                if (node.voidElement) {
                  mem.push((0, import_react.createElement)(node.name, {
                    key: `${node.name}-${i2}`
                  }));
                } else {
                  const inner = mapAST(reactNodes, node.children, rootReactNode);
                  mem.push((0, import_react.createElement)(node.name, {
                    key: `${node.name}-${i2}`
                  }, inner));
                }
              } else if (node.voidElement) {
                mem.push(`<${node.name} />`);
              } else {
                const inner = mapAST(reactNodes, node.children, rootReactNode);
                mem.push(`<${node.name}>${inner}</${node.name}>`);
              }
            } else if (isObject(child) && !isElement) {
              const content = node.children[0] ? translationContent : null;
              if (content) mem.push(content);
            } else {
              pushTranslatedJSX(child, translationContent, mem, i2, node.children.length !== 1 || !translationContent);
            }
          } else if (node.type === "text") {
            const wrapTextNodes = i18nOptions.transWrapTextNodes;
            const unescapeFn = typeof i18nOptions.unescape === "function" ? i18nOptions.unescape : getDefaults().unescape;
            const content = shouldUnescape ? unescapeFn(i18n3.services.interpolator.interpolate(node.content, opts, i18n3.language)) : i18n3.services.interpolator.interpolate(node.content, opts, i18n3.language);
            if (wrapTextNodes) {
              mem.push((0, import_react.createElement)(wrapTextNodes, {
                key: `${node.name}-${i2}`
              }, content));
            } else {
              mem.push(content);
            }
          }
          return mem;
        }, []);
      };
      const result = mapAST([{
        dummy: true,
        children: children || []
      }], ast, getAsArray(children || []));
      return getChildren(result[0]);
    };
    fixComponentProps = (component, index, translation) => {
      const componentKey = component.key || index;
      const comp = (0, import_react.cloneElement)(component, {
        key: componentKey
      });
      if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) {
        return comp;
      }
      function Componentized() {
        return (0, import_react.createElement)(import_react.Fragment, null, comp);
      }
      return (0, import_react.createElement)(Componentized, {
        key: componentKey
      });
    };
    generateArrayComponents = (components, translation) => components.map((c2, index) => fixComponentProps(c2, index, translation));
    generateObjectComponents = (components, translation) => {
      const componentMap = {};
      Object.keys(components).forEach((c2) => {
        Object.assign(componentMap, {
          [c2]: fixComponentProps(components[c2], c2, translation)
        });
      });
      return componentMap;
    };
    generateComponents = (components, translation, i18n3, i18nKey) => {
      if (!components) return null;
      if (Array.isArray(components)) {
        return generateArrayComponents(components, translation);
      }
      if (isObject(components)) {
        return generateObjectComponents(components, translation);
      }
      warnOnce(i18n3, "TRANS_INVALID_COMPONENTS", `<Trans /> "components" prop expects an object or array`, {
        i18nKey
      });
      return null;
    };
    isComponentsMap = (object) => {
      if (!isObject(object)) return false;
      if (Array.isArray(object)) return false;
      return Object.keys(object).reduce((acc, key) => acc && Number.isNaN(Number.parseFloat(key)), true);
    };
  }
});

// node_modules/react-i18next/dist/es/initReactI18next.js
var initReactI18next;
var init_initReactI18next = __esm({
  "node_modules/react-i18next/dist/es/initReactI18next.js"() {
    init_defaults();
    init_i18nInstance();
    initReactI18next = {
      type: "3rdParty",
      init(instance3) {
        setDefaults(instance3.options.react);
        setI18n(instance3);
      }
    };
  }
});

// node_modules/react-i18next/dist/es/context.js
var import_react2, I18nContext, ReportNamespaces, composeInitialProps, getInitialProps;
var init_context = __esm({
  "node_modules/react-i18next/dist/es/context.js"() {
    import_react2 = __toESM(require_react(), 1);
    init_defaults();
    init_i18nInstance();
    init_initReactI18next();
    I18nContext = (0, import_react2.createContext)();
    ReportNamespaces = class {
      constructor() {
        this.usedNamespaces = {};
      }
      addUsedNamespaces(namespaces) {
        namespaces.forEach((ns) => {
          if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
        });
      }
      getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
      }
    };
    composeInitialProps = (ForComponent) => async (ctx) => {
      const componentsInitialProps = await ForComponent.getInitialProps?.(ctx) ?? {};
      const i18nInitialProps = getInitialProps();
      return {
        ...componentsInitialProps,
        ...i18nInitialProps
      };
    };
    getInitialProps = () => {
      const i18n3 = getI18n();
      if (!i18n3) {
        console.warn("react-i18next:: getInitialProps: You will need to pass in an i18next instance by using initReactI18next");
        return {};
      }
      const namespaces = i18n3.reportNamespaces?.getUsedNamespaces() ?? [];
      const ret = {};
      const initialI18nStore = {};
      i18n3.languages.forEach((l) => {
        initialI18nStore[l] = {};
        namespaces.forEach((ns) => {
          initialI18nStore[l][ns] = i18n3.getResourceBundle(l, ns) || {};
        });
      });
      ret.initialI18nStore = initialI18nStore;
      ret.initialLanguage = i18n3.language;
      return ret;
    };
  }
});

// node_modules/react-i18next/dist/es/Trans.js
function Trans2({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0, import_react3.useContext)(I18nContext) || {};
  const i18n3 = i18nFromProps || i18nFromContext || getI18n();
  const t6 = tFromProps || i18n3?.t.bind(i18n3);
  return Trans({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    ns: ns || t6?.ns || defaultNSFromContext || i18n3?.options?.defaultNS,
    i18n: i18n3,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}
var import_react3;
var init_Trans = __esm({
  "node_modules/react-i18next/dist/es/Trans.js"() {
    import_react3 = __toESM(require_react(), 1);
    init_TransWithoutContext();
    init_context();
  }
});

// node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js
var TranslationParserError;
var init_TranslationParserError = __esm({
  "node_modules/react-i18next/dist/es/IcuTransUtils/TranslationParserError.js"() {
    TranslationParserError = class _TranslationParserError extends Error {
      constructor(message, position, translationString) {
        super(message);
        this.name = "TranslationParserError";
        this.position = position;
        this.translationString = translationString;
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, _TranslationParserError);
        }
      }
    };
  }
});

// node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js
var commonEntities, entityPattern, decodeHtmlEntities;
var init_htmlEntityDecoder = __esm({
  "node_modules/react-i18next/dist/es/IcuTransUtils/htmlEntityDecoder.js"() {
    commonEntities = {
      "&nbsp;": "\xA0",
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
      "&copy;": "\xA9",
      "&reg;": "\xAE",
      "&trade;": "\u2122",
      "&hellip;": "\u2026",
      "&ndash;": "\u2013",
      "&mdash;": "\u2014",
      "&lsquo;": "\u2018",
      "&rsquo;": "\u2019",
      "&sbquo;": "\u201A",
      "&ldquo;": "\u201C",
      "&rdquo;": "\u201D",
      "&bdquo;": "\u201E",
      "&dagger;": "\u2020",
      "&Dagger;": "\u2021",
      "&bull;": "\u2022",
      "&prime;": "\u2032",
      "&Prime;": "\u2033",
      "&lsaquo;": "\u2039",
      "&rsaquo;": "\u203A",
      "&sect;": "\xA7",
      "&para;": "\xB6",
      "&middot;": "\xB7",
      "&ensp;": "\u2002",
      "&emsp;": "\u2003",
      "&thinsp;": "\u2009",
      "&euro;": "\u20AC",
      "&pound;": "\xA3",
      "&yen;": "\xA5",
      "&cent;": "\xA2",
      "&curren;": "\xA4",
      "&times;": "\xD7",
      "&divide;": "\xF7",
      "&minus;": "\u2212",
      "&plusmn;": "\xB1",
      "&ne;": "\u2260",
      "&le;": "\u2264",
      "&ge;": "\u2265",
      "&asymp;": "\u2248",
      "&equiv;": "\u2261",
      "&infin;": "\u221E",
      "&int;": "\u222B",
      "&sum;": "\u2211",
      "&prod;": "\u220F",
      "&radic;": "\u221A",
      "&part;": "\u2202",
      "&permil;": "\u2030",
      "&deg;": "\xB0",
      "&micro;": "\xB5",
      "&larr;": "\u2190",
      "&uarr;": "\u2191",
      "&rarr;": "\u2192",
      "&darr;": "\u2193",
      "&harr;": "\u2194",
      "&crarr;": "\u21B5",
      "&lArr;": "\u21D0",
      "&uArr;": "\u21D1",
      "&rArr;": "\u21D2",
      "&dArr;": "\u21D3",
      "&hArr;": "\u21D4",
      "&alpha;": "\u03B1",
      "&beta;": "\u03B2",
      "&gamma;": "\u03B3",
      "&delta;": "\u03B4",
      "&epsilon;": "\u03B5",
      "&zeta;": "\u03B6",
      "&eta;": "\u03B7",
      "&theta;": "\u03B8",
      "&iota;": "\u03B9",
      "&kappa;": "\u03BA",
      "&lambda;": "\u03BB",
      "&mu;": "\u03BC",
      "&nu;": "\u03BD",
      "&xi;": "\u03BE",
      "&omicron;": "\u03BF",
      "&pi;": "\u03C0",
      "&rho;": "\u03C1",
      "&sigma;": "\u03C3",
      "&tau;": "\u03C4",
      "&upsilon;": "\u03C5",
      "&phi;": "\u03C6",
      "&chi;": "\u03C7",
      "&psi;": "\u03C8",
      "&omega;": "\u03C9",
      "&Alpha;": "\u0391",
      "&Beta;": "\u0392",
      "&Gamma;": "\u0393",
      "&Delta;": "\u0394",
      "&Epsilon;": "\u0395",
      "&Zeta;": "\u0396",
      "&Eta;": "\u0397",
      "&Theta;": "\u0398",
      "&Iota;": "\u0399",
      "&Kappa;": "\u039A",
      "&Lambda;": "\u039B",
      "&Mu;": "\u039C",
      "&Nu;": "\u039D",
      "&Xi;": "\u039E",
      "&Omicron;": "\u039F",
      "&Pi;": "\u03A0",
      "&Rho;": "\u03A1",
      "&Sigma;": "\u03A3",
      "&Tau;": "\u03A4",
      "&Upsilon;": "\u03A5",
      "&Phi;": "\u03A6",
      "&Chi;": "\u03A7",
      "&Psi;": "\u03A8",
      "&Omega;": "\u03A9",
      "&Agrave;": "\xC0",
      "&Aacute;": "\xC1",
      "&Acirc;": "\xC2",
      "&Atilde;": "\xC3",
      "&Auml;": "\xC4",
      "&Aring;": "\xC5",
      "&AElig;": "\xC6",
      "&Ccedil;": "\xC7",
      "&Egrave;": "\xC8",
      "&Eacute;": "\xC9",
      "&Ecirc;": "\xCA",
      "&Euml;": "\xCB",
      "&Igrave;": "\xCC",
      "&Iacute;": "\xCD",
      "&Icirc;": "\xCE",
      "&Iuml;": "\xCF",
      "&ETH;": "\xD0",
      "&Ntilde;": "\xD1",
      "&Ograve;": "\xD2",
      "&Oacute;": "\xD3",
      "&Ocirc;": "\xD4",
      "&Otilde;": "\xD5",
      "&Ouml;": "\xD6",
      "&Oslash;": "\xD8",
      "&Ugrave;": "\xD9",
      "&Uacute;": "\xDA",
      "&Ucirc;": "\xDB",
      "&Uuml;": "\xDC",
      "&Yacute;": "\xDD",
      "&THORN;": "\xDE",
      "&szlig;": "\xDF",
      "&agrave;": "\xE0",
      "&aacute;": "\xE1",
      "&acirc;": "\xE2",
      "&atilde;": "\xE3",
      "&auml;": "\xE4",
      "&aring;": "\xE5",
      "&aelig;": "\xE6",
      "&ccedil;": "\xE7",
      "&egrave;": "\xE8",
      "&eacute;": "\xE9",
      "&ecirc;": "\xEA",
      "&euml;": "\xEB",
      "&igrave;": "\xEC",
      "&iacute;": "\xED",
      "&icirc;": "\xEE",
      "&iuml;": "\xEF",
      "&eth;": "\xF0",
      "&ntilde;": "\xF1",
      "&ograve;": "\xF2",
      "&oacute;": "\xF3",
      "&ocirc;": "\xF4",
      "&otilde;": "\xF5",
      "&ouml;": "\xF6",
      "&oslash;": "\xF8",
      "&ugrave;": "\xF9",
      "&uacute;": "\xFA",
      "&ucirc;": "\xFB",
      "&uuml;": "\xFC",
      "&yacute;": "\xFD",
      "&thorn;": "\xFE",
      "&yuml;": "\xFF",
      "&iexcl;": "\xA1",
      "&iquest;": "\xBF",
      "&fnof;": "\u0192",
      "&circ;": "\u02C6",
      "&tilde;": "\u02DC",
      "&OElig;": "\u0152",
      "&oelig;": "\u0153",
      "&Scaron;": "\u0160",
      "&scaron;": "\u0161",
      "&Yuml;": "\u0178",
      "&ordf;": "\xAA",
      "&ordm;": "\xBA",
      "&macr;": "\xAF",
      "&acute;": "\xB4",
      "&cedil;": "\xB8",
      "&sup1;": "\xB9",
      "&sup2;": "\xB2",
      "&sup3;": "\xB3",
      "&frac14;": "\xBC",
      "&frac12;": "\xBD",
      "&frac34;": "\xBE",
      "&spades;": "\u2660",
      "&clubs;": "\u2663",
      "&hearts;": "\u2665",
      "&diams;": "\u2666",
      "&loz;": "\u25CA",
      "&oline;": "\u203E",
      "&frasl;": "\u2044",
      "&weierp;": "\u2118",
      "&image;": "\u2111",
      "&real;": "\u211C",
      "&alefsym;": "\u2135"
    };
    entityPattern = new RegExp(Object.keys(commonEntities).map((entity) => entity.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");
    decodeHtmlEntities = (text) => text.replace(entityPattern, (match) => commonEntities[match]).replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10))).replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  }
});

// node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js
var tokenize;
var init_tokenizer = __esm({
  "node_modules/react-i18next/dist/es/IcuTransUtils/tokenizer.js"() {
    tokenize = (translation) => {
      const tokens = [];
      let position = 0;
      let currentText = "";
      const flushText = () => {
        if (currentText) {
          tokens.push({
            type: "Text",
            value: currentText,
            position: position - currentText.length
          });
          currentText = "";
        }
      };
      while (position < translation.length) {
        const char = translation[position];
        if (char === "<") {
          const tagMatch = translation.slice(position).match(/^<(\d+)>/);
          if (tagMatch) {
            flushText();
            tokens.push({
              type: "TagOpen",
              value: tagMatch[0],
              position,
              tagNumber: parseInt(tagMatch[1], 10)
            });
            position += tagMatch[0].length;
          } else {
            const closeTagMatch = translation.slice(position).match(/^<\/(\d+)>/);
            if (closeTagMatch) {
              flushText();
              tokens.push({
                type: "TagClose",
                value: closeTagMatch[0],
                position,
                tagNumber: parseInt(closeTagMatch[1], 10)
              });
              position += closeTagMatch[0].length;
            } else {
              currentText += char;
              position += 1;
            }
          }
        } else {
          currentText += char;
          position += 1;
        }
      }
      flushText();
      return tokens;
    };
  }
});

// node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js
var import_react4, renderDeclarationNode, renderTranslation;
var init_renderTranslation = __esm({
  "node_modules/react-i18next/dist/es/IcuTransUtils/renderTranslation.js"() {
    import_react4 = __toESM(require_react(), 1);
    init_TranslationParserError();
    init_tokenizer();
    init_htmlEntityDecoder();
    renderDeclarationNode = (declaration, children, childDeclarations) => {
      const {
        type,
        props = {}
      } = declaration;
      if (props.children && Array.isArray(props.children) && childDeclarations) {
        const {
          children: _childrenToRemove,
          ...propsWithoutChildren
        } = props;
        return import_react4.default.createElement(type, propsWithoutChildren, ...children);
      }
      if (children.length === 0) {
        return import_react4.default.createElement(type, props);
      }
      if (children.length === 1) {
        return import_react4.default.createElement(type, props, children[0]);
      }
      return import_react4.default.createElement(type, props, ...children);
    };
    renderTranslation = (translation, declarations = []) => {
      if (!translation) {
        return [];
      }
      const tokens = tokenize(translation);
      const result = [];
      const stack = [];
      const literalTagNumbers = /* @__PURE__ */ new Set();
      const getCurrentDeclarations = () => {
        if (stack.length === 0) {
          return declarations;
        }
        const parentFrame = stack[stack.length - 1];
        if (parentFrame.declaration.props?.children && Array.isArray(parentFrame.declaration.props.children)) {
          return parentFrame.declaration.props.children;
        }
        return parentFrame.declarations;
      };
      tokens.forEach((token) => {
        switch (token.type) {
          case "Text":
            {
              const decoded = decodeHtmlEntities(token.value);
              const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
              targetArray.push(decoded);
            }
            break;
          case "TagOpen":
            {
              const {
                tagNumber
              } = token;
              const currentDeclarations = getCurrentDeclarations();
              const declaration = currentDeclarations[tagNumber];
              if (!declaration) {
                literalTagNumbers.add(tagNumber);
                const literalText = `<${tagNumber}>`;
                const targetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                targetArray.push(literalText);
                break;
              }
              stack.push({
                tagNumber,
                children: [],
                position: token.position,
                declaration,
                declarations: currentDeclarations
              });
            }
            break;
          case "TagClose":
            {
              const {
                tagNumber
              } = token;
              if (literalTagNumbers.has(tagNumber)) {
                const literalText = `</${tagNumber}>`;
                const literalTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
                literalTargetArray.push(literalText);
                literalTagNumbers.delete(tagNumber);
                break;
              }
              if (stack.length === 0) {
                throw new TranslationParserError(`Unexpected closing tag </${tagNumber}> at position ${token.position}`, token.position, translation);
              }
              const frame = stack.pop();
              if (frame.tagNumber !== tagNumber) {
                throw new TranslationParserError(`Mismatched tags: expected </${frame.tagNumber}> but got </${tagNumber}> at position ${token.position}`, token.position, translation);
              }
              const element = renderDeclarationNode(frame.declaration, frame.children, frame.declarations);
              const elementTargetArray = stack.length > 0 ? stack[stack.length - 1].children : result;
              elementTargetArray.push(element);
            }
            break;
        }
      });
      if (stack.length > 0) {
        const unclosed = stack[stack.length - 1];
        throw new TranslationParserError(`Unclosed tag <${unclosed.tagNumber}> at position ${unclosed.position}`, unclosed.position, translation);
      }
      return result;
    };
  }
});

// node_modules/react-i18next/dist/es/IcuTransUtils/index.js
var init_IcuTransUtils = __esm({
  "node_modules/react-i18next/dist/es/IcuTransUtils/index.js"() {
    init_TranslationParserError();
    init_htmlEntityDecoder();
    init_tokenizer();
    init_renderTranslation();
  }
});

// node_modules/react-i18next/dist/es/IcuTransWithoutContext.js
function IcuTransWithoutContext({
  i18nKey,
  defaultTranslation,
  content,
  ns,
  values = {},
  i18n: i18nFromProps,
  t: tFromProps
}) {
  const i18n3 = i18nFromProps || getI18n();
  if (!i18n3) {
    warnOnce(i18n3, "NO_I18NEXT_INSTANCE", `IcuTrans: You need to pass in an i18next instance using i18nextReactModule`, {
      i18nKey
    });
    return import_react5.default.createElement(import_react5.default.Fragment, {}, defaultTranslation);
  }
  const t6 = tFromProps || i18n3.t?.bind(i18n3) || ((k) => k);
  let namespaces = ns || t6.ns || i18n3.options?.defaultNS;
  namespaces = isString3(namespaces) ? [namespaces] : namespaces || ["translation"];
  let mergedValues = values;
  if (i18n3.options?.interpolation?.defaultVariables) {
    mergedValues = values && Object.keys(values).length > 0 ? {
      ...values,
      ...i18n3.options.interpolation.defaultVariables
    } : {
      ...i18n3.options.interpolation.defaultVariables
    };
  }
  const translation = t6(i18nKey, {
    defaultValue: defaultTranslation,
    ...mergedValues,
    ns: namespaces
  });
  try {
    const rendered = renderTranslation(translation, content);
    return import_react5.default.createElement(import_react5.default.Fragment, {}, ...rendered);
  } catch (error) {
    warn(i18n3, "ICU_TRANS_RENDER_ERROR", `IcuTrans component error for key "${i18nKey}": ${error.message}`, {
      i18nKey,
      error
    });
    return import_react5.default.createElement(import_react5.default.Fragment, {}, translation);
  }
}
var import_react5;
var init_IcuTransWithoutContext = __esm({
  "node_modules/react-i18next/dist/es/IcuTransWithoutContext.js"() {
    import_react5 = __toESM(require_react(), 1);
    init_utils();
    init_i18nInstance();
    init_IcuTransUtils();
    IcuTransWithoutContext.displayName = "IcuTransWithoutContext";
  }
});

// node_modules/react-i18next/dist/es/IcuTrans.js
function IcuTrans({
  i18nKey,
  defaultTranslation,
  content,
  ns,
  values = {},
  i18n: i18nFromProps,
  t: tFromProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0, import_react6.useContext)(I18nContext) || {};
  const i18n3 = i18nFromProps || i18nFromContext || getI18n();
  const t6 = tFromProps || i18n3?.t.bind(i18n3);
  return IcuTransWithoutContext({
    i18nKey,
    defaultTranslation,
    content,
    ns: ns || t6?.ns || defaultNSFromContext || i18n3?.options?.defaultNS,
    values,
    i18n: i18n3,
    t: tFromProps
  });
}
var import_react6;
var init_IcuTrans = __esm({
  "node_modules/react-i18next/dist/es/IcuTrans.js"() {
    import_react6 = __toESM(require_react(), 1);
    init_IcuTransWithoutContext();
    init_context();
    IcuTrans.displayName = "IcuTrans";
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React3.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState2({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect2(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React3 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState2 = React3.useState, useEffect2 = React3.useEffect, useLayoutEffect = React3.useLayoutEffect, useDebugValue = React3.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React3.useSyncExternalStore ? React3.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/react-i18next/dist/es/useTranslation.js
var import_react7, import_shim, notReadyT, notReadySnapshot, dummySubscribe, useTranslation;
var init_useTranslation = __esm({
  "node_modules/react-i18next/dist/es/useTranslation.js"() {
    import_react7 = __toESM(require_react(), 1);
    import_shim = __toESM(require_shim(), 1);
    init_context();
    init_utils();
    notReadyT = (k, optsOrDefaultValue) => {
      if (isString3(optsOrDefaultValue)) return optsOrDefaultValue;
      if (isObject(optsOrDefaultValue) && isString3(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      if (typeof k === "function") return "";
      if (Array.isArray(k)) {
        const last = k[k.length - 1];
        return typeof last === "function" ? "" : last;
      }
      return k;
    };
    notReadySnapshot = {
      t: notReadyT,
      ready: false
    };
    dummySubscribe = () => () => {
    };
    useTranslation = (ns, props = {}) => {
      const {
        i18n: i18nFromProps
      } = props;
      const {
        i18n: i18nFromContext,
        defaultNS: defaultNSFromContext
      } = (0, import_react7.useContext)(I18nContext) || {};
      const i18n3 = i18nFromProps || i18nFromContext || getI18n();
      if (i18n3 && !i18n3.reportNamespaces) i18n3.reportNamespaces = new ReportNamespaces();
      if (!i18n3) {
        warnOnce(i18n3, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
      }
      const i18nOptions = (0, import_react7.useMemo)(() => ({
        ...getDefaults(),
        ...i18n3?.options?.react,
        ...props
      }), [i18n3, props]);
      const {
        useSuspense,
        keyPrefix
      } = i18nOptions;
      const nsOrContext = ns || defaultNSFromContext || i18n3?.options?.defaultNS;
      const unstableNamespaces = isString3(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
      const namespaces = (0, import_react7.useMemo)(() => unstableNamespaces, unstableNamespaces);
      i18n3?.reportNamespaces?.addUsedNamespaces?.(namespaces);
      const revisionRef = (0, import_react7.useRef)(0);
      const subscribe = (0, import_react7.useCallback)((callback) => {
        if (!i18n3) return dummySubscribe;
        const {
          bindI18n,
          bindI18nStore
        } = i18nOptions;
        const wrappedCallback = () => {
          revisionRef.current += 1;
          callback();
        };
        if (bindI18n) i18n3.on(bindI18n, wrappedCallback);
        if (bindI18nStore) i18n3.store.on(bindI18nStore, wrappedCallback);
        return () => {
          if (bindI18n) bindI18n.split(" ").forEach((e2) => i18n3.off(e2, wrappedCallback));
          if (bindI18nStore) bindI18nStore.split(" ").forEach((e2) => i18n3.store.off(e2, wrappedCallback));
        };
      }, [i18n3, i18nOptions]);
      const snapshotRef = (0, import_react7.useRef)();
      const getSnapshot = (0, import_react7.useCallback)(() => {
        if (!i18n3) {
          return notReadySnapshot;
        }
        const calculatedReady = !!(i18n3.isInitialized || i18n3.initializedStoreOnce) && namespaces.every((n2) => hasLoadedNamespace3(n2, i18n3, i18nOptions));
        const currentLng = props.lng || i18n3.language;
        const currentRevision = revisionRef.current;
        const lastSnapshot = snapshotRef.current;
        if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
          return lastSnapshot;
        }
        const calculatedT = i18n3.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
        const newSnapshot = {
          t: calculatedT,
          ready: calculatedReady,
          lng: currentLng,
          keyPrefix,
          revision: currentRevision
        };
        snapshotRef.current = newSnapshot;
        return newSnapshot;
      }, [i18n3, namespaces, keyPrefix, i18nOptions, props.lng]);
      const [loadCount, setLoadCount] = (0, import_react7.useState)(0);
      const {
        t: t6,
        ready
      } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
      (0, import_react7.useEffect)(() => {
        if (i18n3 && !ready && !useSuspense) {
          const onLoaded = () => setLoadCount((c2) => c2 + 1);
          if (props.lng) {
            loadLanguages3(i18n3, props.lng, namespaces, onLoaded);
          } else {
            loadNamespaces3(i18n3, namespaces, onLoaded);
          }
        }
      }, [i18n3, props.lng, namespaces, ready, useSuspense, loadCount]);
      const finalI18n = i18n3 || {};
      const wrapperRef = (0, import_react7.useRef)(null);
      const wrapperLangRef = (0, import_react7.useRef)();
      const createI18nWrapper = (original) => {
        const descriptors = Object.getOwnPropertyDescriptors(original);
        if (descriptors.__original) delete descriptors.__original;
        const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
        if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
          try {
            Object.defineProperty(wrapper, "__original", {
              value: original,
              writable: false,
              enumerable: false,
              configurable: false
            });
          } catch (_) {
          }
        }
        return wrapper;
      };
      const ret = (0, import_react7.useMemo)(() => {
        const original = finalI18n;
        const lang = original?.language;
        let i18nWrapper = original;
        if (original) {
          if (wrapperRef.current && wrapperRef.current.__original === original) {
            if (wrapperLangRef.current !== lang) {
              i18nWrapper = createI18nWrapper(original);
              wrapperRef.current = i18nWrapper;
              wrapperLangRef.current = lang;
            } else {
              i18nWrapper = wrapperRef.current;
            }
          } else {
            i18nWrapper = createI18nWrapper(original);
            wrapperRef.current = i18nWrapper;
            wrapperLangRef.current = lang;
          }
        }
        const effectiveT = !ready && !useSuspense ? (...args) => {
          warnOnce(i18n3, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
          return t6(...args);
        } : t6;
        const arr = [effectiveT, i18nWrapper, ready];
        arr.t = effectiveT;
        arr.i18n = i18nWrapper;
        arr.ready = ready;
        return arr;
      }, [t6, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
      if (i18n3 && useSuspense && !ready) {
        throw new Promise((resolve) => {
          const onLoaded = () => resolve();
          if (props.lng) {
            loadLanguages3(i18n3, props.lng, namespaces, onLoaded);
          } else {
            loadNamespaces3(i18n3, namespaces, onLoaded);
          }
        });
      }
      return ret;
    };
  }
});

// node_modules/react-i18next/dist/es/withTranslation.js
var import_react8, withTranslation;
var init_withTranslation = __esm({
  "node_modules/react-i18next/dist/es/withTranslation.js"() {
    import_react8 = __toESM(require_react(), 1);
    init_useTranslation();
    init_utils();
    withTranslation = (ns, options = {}) => function Extend(WrappedComponent) {
      function I18nextWithTranslation({
        forwardedRef,
        ...rest
      }) {
        const [t6, i18n3, ready] = useTranslation(ns, {
          ...rest,
          keyPrefix: options.keyPrefix
        });
        const passDownProps = {
          ...rest,
          t: t6,
          i18n: i18n3,
          tReady: ready
        };
        if (options.withRef && forwardedRef) {
          passDownProps.ref = forwardedRef;
        } else if (!options.withRef && forwardedRef) {
          passDownProps.forwardedRef = forwardedRef;
        }
        return (0, import_react8.createElement)(WrappedComponent, passDownProps);
      }
      I18nextWithTranslation.displayName = `withI18nextTranslation(${getDisplayName(WrappedComponent)})`;
      I18nextWithTranslation.WrappedComponent = WrappedComponent;
      const forwardRef = (props, ref) => (0, import_react8.createElement)(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
      return options.withRef ? (0, import_react8.forwardRef)(forwardRef) : I18nextWithTranslation;
    };
  }
});

// node_modules/react-i18next/dist/es/Translation.js
var Translation;
var init_Translation = __esm({
  "node_modules/react-i18next/dist/es/Translation.js"() {
    init_useTranslation();
    Translation = ({
      ns,
      children,
      ...options
    }) => {
      const [t6, i18n3, ready] = useTranslation(ns, options);
      return children(t6, {
        i18n: i18n3,
        lng: i18n3?.language
      }, ready);
    };
  }
});

// node_modules/react-i18next/dist/es/I18nextProvider.js
function I18nextProvider({
  i18n: i18n3,
  defaultNS,
  children
}) {
  const value = (0, import_react9.useMemo)(() => ({
    i18n: i18n3,
    defaultNS
  }), [i18n3, defaultNS]);
  return (0, import_react9.createElement)(I18nContext.Provider, {
    value
  }, children);
}
var import_react9;
var init_I18nextProvider = __esm({
  "node_modules/react-i18next/dist/es/I18nextProvider.js"() {
    import_react9 = __toESM(require_react(), 1);
    init_context();
  }
});

// node_modules/react-i18next/dist/es/useSSR.js
var import_react10, useSSR;
var init_useSSR = __esm({
  "node_modules/react-i18next/dist/es/useSSR.js"() {
    import_react10 = __toESM(require_react(), 1);
    init_context();
    init_utils();
    useSSR = (initialI18nStore, initialLanguage, props = {}) => {
      const {
        i18n: i18nFromProps
      } = props;
      const {
        i18n: i18nFromContext
      } = (0, import_react10.useContext)(I18nContext) || {};
      const i18n3 = i18nFromProps || i18nFromContext || getI18n();
      if (!i18n3) {
        warnOnce(i18n3, "NO_I18NEXT_INSTANCE", "useSSR: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
        return;
      }
      if (i18n3.options?.isClone) return;
      if (initialI18nStore && !i18n3.initializedStoreOnce) {
        if (!i18n3.services?.resourceStore) {
          warnOnce(i18n3, "I18N_NOT_INITIALIZED", "useSSR: i18n instance was found but not initialized (services.resourceStore is missing). Make sure you call i18next.init() before using useSSR \u2014 e.g. at module level, not only in getStaticProps/getServerSideProps.");
          return;
        }
        i18n3.services.resourceStore.data = initialI18nStore;
        i18n3.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources) => {
          Object.keys(lngResources).forEach((ns) => {
            if (mem.indexOf(ns) < 0) mem.push(ns);
          });
          return mem;
        }, i18n3.options.ns);
        i18n3.initializedStoreOnce = true;
        i18n3.isInitialized = true;
      }
      if (initialLanguage && !i18n3.initializedLanguageOnce) {
        i18n3.changeLanguage(initialLanguage);
        i18n3.initializedLanguageOnce = true;
      }
    };
  }
});

// node_modules/react-i18next/dist/es/withSSR.js
var import_react11, withSSR;
var init_withSSR = __esm({
  "node_modules/react-i18next/dist/es/withSSR.js"() {
    import_react11 = __toESM(require_react(), 1);
    init_useSSR();
    init_context();
    init_utils();
    withSSR = () => function Extend(WrappedComponent) {
      function I18nextWithSSR({
        initialI18nStore,
        initialLanguage,
        ...rest
      }) {
        useSSR(initialI18nStore, initialLanguage);
        return (0, import_react11.createElement)(WrappedComponent, {
          ...rest
        });
      }
      I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
      I18nextWithSSR.displayName = `withI18nextSSR(${getDisplayName(WrappedComponent)})`;
      I18nextWithSSR.WrappedComponent = WrappedComponent;
      return I18nextWithSSR;
    };
  }
});

// node_modules/react-i18next/dist/es/index.js
var es_exports = {};
__export(es_exports, {
  I18nContext: () => I18nContext,
  I18nextProvider: () => I18nextProvider,
  IcuTrans: () => IcuTrans,
  IcuTransWithoutContext: () => IcuTransWithoutContext,
  Trans: () => Trans2,
  TransWithoutContext: () => Trans,
  Translation: () => Translation,
  composeInitialProps: () => composeInitialProps,
  date: () => date,
  getDefaults: () => getDefaults,
  getI18n: () => getI18n,
  getInitialProps: () => getInitialProps,
  initReactI18next: () => initReactI18next,
  nodesToString: () => nodesToString,
  number: () => number,
  plural: () => plural,
  select: () => select,
  selectOrdinal: () => selectOrdinal,
  setDefaults: () => setDefaults,
  setI18n: () => setI18n,
  time: () => time,
  useSSR: () => useSSR,
  useTranslation: () => useTranslation,
  withSSR: () => withSSR,
  withTranslation: () => withTranslation
});
var date, time, number, select, plural, selectOrdinal;
var init_es = __esm({
  "node_modules/react-i18next/dist/es/index.js"() {
    init_Trans();
    init_TransWithoutContext();
    init_IcuTrans();
    init_IcuTransWithoutContext();
    init_useTranslation();
    init_withTranslation();
    init_Translation();
    init_I18nextProvider();
    init_withSSR();
    init_useSSR();
    init_initReactI18next();
    init_defaults();
    init_i18nInstance();
    init_Trans();
    init_context();
    date = () => "";
    time = () => "";
    number = () => "";
    select = () => "";
    plural = () => "";
    selectOrdinal = () => "";
  }
});

// node_modules/xshell/i18n/index.js
var I18N;
var init_i18n = __esm({
  "node_modules/xshell/i18n/index.js"() {
    init_i18next();
    init_dict();
    I18N = class _I18N {
      static LANGUAGE_REGEXP = /^(zh|en|ja|ko)$/;
      /** (ISO 639-1 标准语言代码) 可能取 zh, en, ja, ko */
      language;
      /** hostname shortcuts */
      hosts;
      /** url prefix shortcuts */
      roots;
      /** 标记静态文本，以便扫描词条，并在运行时根据当前语言获取翻译 */
      t;
      /** render: 翻译配置字段 */
      r;
      i18next;
      /** react-i18next <Trans/> 组件 */
      Trans = ({ children }) => children;
      /** ```ts
          import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
          
          const i18n = new I18N(dict, 'zh')  // 创建实例，传入词典 dict 并指定语言（NodeJS 环境），
          const i18n = new I18N(dict)        // 创建实例，传入词典 dict 并自动判断当前语言（浏览器环境），
          const i18n = new I18N({ })         // 创建实例，传入空词典
          ```
          @see https://github.com/ShenHongFei/xshell/tree/master/i18n
      */
      constructor(_dict, language3) {
        const is_browser = typeof window !== "undefined" && typeof location !== "undefined";
        const dict = new Dict(_dict);
        if (!language3 && is_browser)
          language3 = new URLSearchParams(location.search).get("language") || window.language;
        if (!language3)
          language3 = Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2);
        if (!_I18N.LANGUAGE_REGEXP.test(language3)) {
          if (language3)
            console.error("invalid language:", language3);
          language3 = "zh";
        }
        this.language = language3;
        this.t = (text, options) => {
          options = options || {};
          const language4 = options.language || this.language;
          return this.i18next.t(text, { ...options, lng: language4, defaultValue: text });
        };
        this.r = (field, language4 = this.language) => field ? field[language4] || field.zh || field.en || field || "" : field || "";
        this.i18next = instance.createInstance();
        if (is_browser)
          try {
            const { initReactI18next: initReactI18next2, Trans: I18NextTrans } = (init_es(), __toCommonJS(es_exports));
            this.i18next.use(initReactI18next2);
            const _i18next = this.i18next;
            this.Trans = function Trans3({ i18n: i18n3 = _i18next, ...others }) {
              return I18NextTrans({ i18n: i18n3, ...others });
            };
          } catch {
          }
        this.i18next.init({
          lng: this.language,
          // LOCAL
          // debug: true,
          debug: false,
          fallbackLng: {
            en: ["zh"],
            ja: ["en", "zh"],
            ko: ["en", "zh"]
          },
          // 禁用 : 和 . 作为 seperator
          keySeparator: false,
          nsSeparator: false,
          resources: dict.to_resources(),
          interpolation: {
            escapeValue: false
          },
          react: {
            transKeepBasicHtmlNodesFor: []
          }
        });
        if (typeof window !== "undefined" && window && !("i18n" in window))
          window.i18n = this;
      }
      /** 加载词典文件 (需要将这两行单独放一个文件里，以保证在 import 其他文件之前执行)
          
          @example
          import dict from './dict.json'  // { "添加": { "en": "Add", "ja": "追加", "ko": "추가" } }
          i18n.init(dict)
      */
      init(dict) {
        const resources = new Dict(dict).to_resources();
        for (const language3 in resources)
          this.i18next.addResources(language3, "translation", resources[language3].translation);
      }
      toJSON() {
        return {
          language: this.language
        };
      }
    };
  }
});

// node_modules/xshell/i18n/dict.json
var dict_default;
var init_dict2 = __esm({
  "node_modules/xshell/i18n/dict.json"() {
    dict_default = {
      \u5B58\u5728: {
        en: "exists"
      },
      \u4E0D\u5B58\u5728: {
        en: "not exists"
      },
      \u6253\u5F00\u6587\u4EF6: {
        en: "open file"
      },
      "fp \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u6216\u4F20\u5165 dir \u53C2\u6570: ": {
        en: "fp must be absolute path, or pass in 'dir' parameters:"
      },
      \u8BFB\u53D6: {
        en: "read"
      },
      " \u7684\u7F16\u7801\u53EF\u80FD\u662F ": {
        en: "'s encoding might be "
      },
      \u5199\u5165: {
        en: "write"
      },
      \u8FFD\u52A0: {
        en: "append"
      },
      "data \u4E0D\u662F Buffer \u6216 string": {
        en: "data is not a buffer or string"
      },
      " \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: " must be absolute path"
      },
      "\u53C2\u6570 fpd: ": {
        en: "argument fpd: "
      },
      " \u5FC5\u987B\u4EE5 / \u7ED3\u5C3E": {
        en: "must ends with /"
      },
      "fp \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: "fp must be absolute path"
      },
      "\u5220\u9664\u4E86\u6587\u4EF6\u5939: ": {
        en: "deleted folder: "
      },
      "\u5220\u9664\u4E86\u6587\u4EF6: ": {
        en: "deleted file: "
      },
      "\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728: ": {
        en: "folder no longer exists: "
      },
      "\u6587\u4EF6\u5DF2\u4E0D\u5B58\u5728: ": {
        en: "file no longer exists: "
      },
      "fp_src \u548C fp_dst \u5FC5\u987B\u540C\u4E3A\u6587\u4EF6\u8DEF\u5F84\u6216\u6587\u4EF6\u5939\u8DEF\u5F84": {
        en: "fp_src and fp_dst must be the same as file paths or folder paths"
      },
      "fp_src \u548C fp_dst \u5FC5\u987B\u4E3A\u5B8C\u6574\u8DEF\u5F84": {
        en: "fp_src and fp_dst must be complete paths"
      },
      \u590D\u5236: {
        en: "copy"
      },
      "src \u548C dst \u5FC5\u987B\u540C\u4E3A\u6587\u4EF6\u8DEF\u5F84\u6216\u6587\u4EF6\u5939\u8DEF\u5F84": {
        en: "src and dst must be the same as file paths or folder paths"
      },
      "src \u548C dst \u5FC5\u987B\u4E3A\u5B8C\u6574\u8DEF\u5F84": {
        en: "src and dst must be complete paths"
      },
      \u79FB\u52A8: {
        en: "move"
      },
      "fp \u548C fp_ \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: "fp and fp_ must be absolute paths"
      },
      \u91CD\u547D\u540D: {
        en: "rename"
      },
      "\u6587\u4EF6\u5DF2\u5B58\u5728\uFF1A": {
        en: "file already exists: "
      },
      "fpd \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84: ": {
        en: "fpd must be absolute path"
      },
      "fpd \u5FC5\u987B\u4EE5 / \u7ED3\u5C3E: ": {
        en: "fpd must end with /"
      },
      "fp_real \u548C fp_link \u5FC5\u987B\u540C\u4E3A\u6587\u4EF6\u8DEF\u5F84\u6216\u6587\u4EF6\u5939\u8DEF\u5F84": {
        en: "fp_real and fp_link must be the same as file paths or folder paths"
      },
      \u5B58\u5728\u540C\u540D: {
        en: "exists the same name "
      },
      \u6587\u4EF6\u5939: {
        en: "folder"
      },
      \u6587\u4EF6: {
        en: "file"
      },
      "\uFF0C\u65E0\u6CD5\u521B\u5EFA\u94FE\u63A5": {
        en: ", unable to create link"
      },
      "\u5DF2\u5C06\u6E90\u6587\u4EF6 ": {
        en: "linked src file"
      },
      " \u94FE\u63A5\u5230 ": {
        en: " to "
      },
      "fp \u5FC5\u987B\u662F\u5B8C\u6574\u8DEF\u5F84": {
        en: "fp must be complete path"
      },
      "\u6587\u4EF6\u4FEE\u6539 (": {
        en: "file changed ("
      },
      "remote.send(): websocket client \u5DF2\u65AD\u5F00": {
        en: "remote.send(): websocket client disconnected"
      },
      "\u627E\u4E0D\u5230 rpc handler": {
        en: "cannot find rpc handler"
      },
      \u51CC\u6668: {
        en: "early morning"
      },
      \u6E05\u6668: {
        en: "early morning"
      },
      \u65E9\u4E0A: {
        en: "morning"
      },
      \u4E0A\u5348: {
        en: "morning"
      },
      \u4E2D\u5348: {
        en: "noon"
      },
      \u4E0B\u5348: {
        en: "afternoon"
      },
      \u665A\u4E0A: {
        en: "night"
      },
      \u6DF1\u591C: {
        en: "late at night"
      },
      \u65AD\u8A00\u5931\u8D25: {
        en: "assertion failed"
      },
      \u68C0\u67E5\u5931\u8D25: {
        en: "check failed"
      },
      " \u592A\u77ED": {
        en: " is too short"
      },
      "xshell \u6B63\u5728\u542F\u52A8": {
        en: "xshell is booting"
      },
      "repl \u5DF2\u542F\u52A8": {
        en: "repl has started"
      },
      "server \u6B63\u5728\u542F\u52A8": {
        en: "server is starting"
      },
      "server \u5DF2\u542F\u52A8": {
        en: "server has started"
      },
      "xshell \u542F\u52A8\u5B8C\u6210": {
        en: "xshell booted"
      },
      "xshell \u6B63\u5728\u76D1\u542C: ": {
        en: "xshell is listening at: "
      },
      \u5DF2\u52A0\u8F7D: {
        en: "loaded"
      },
      \u6240\u6709\u6A21\u5757\u5168\u90E8\u52A0\u8F7D: {
        en: "all modules were loaded"
      },
      "\u72B6\u6001\u7801 {{status}}, \u975E 2xx: {{url}}": {
        en: "status code {{code}} is not 2xx: {{url}}"
      },
      "\u8BF7\u6C42\u53C2\u6570:": {
        en: "request.params:"
      },
      "\u8BF7\u6C42\u4F53:": {
        en: "request.body:"
      },
      "\u54CD\u5E94\u72B6\u6001\u7801:": {
        en: "response.code:"
      },
      "\u54CD\u5E94\u9519\u8BEF:": {
        en: "response.error:"
      },
      "\u54CD\u5E94\u5934:": {
        en: "response.headers:"
      },
      "\u54CD\u5E94\u4F53:": {
        en: "response.body:"
      },
      "\u8C03\u7528\u6808:": {
        en: "call stack:"
      },
      \u5DF2\u5B58\u5728: {
        en: "exists"
      },
      \u8FDB\u7A0B: {
        en: "process"
      },
      "\u5F02\u5E38\u7ED3\u675F, \u9519\u8BEF\u7801:": {
        en: "exited abnormally with error code:"
      },
      "\u4FE1\u53F7:": {
        en: "signal"
      },
      \u6B63\u5E38\u7ED3\u675F: {
        en: "exited normally"
      },
      "xshell \u5F00\u59CB\u542F\u52A8": {
        en: "xshell is booting"
      },
      "nodejs.repl \u542F\u52A8\u6210\u529F": {
        en: "nodejs.repl started successfully"
      },
      "server \u542F\u52A8\u6210\u529F": {
        en: "server started successfully"
      },
      "xshell \u542F\u52A8\u6210\u529F": {
        en: "xshell started successfully"
      },
      "xshell \u6B63\u5728\u9000\u51FA": {
        en: "xshell is exiting"
      },
      \u6240\u6709\u6A21\u5757\u52A0\u8F7D\u6210\u529F: {
        en: "all modules were loaded successfully"
      },
      " \u5DF2\u8FDE\u63A5": {
        en: " connected"
      },
      " \u5DF2\u6B63\u5E38\u5173\u95ED": {
        en: " closed normally"
      },
      \u88AB\u5173\u95ED: {
        en: "was closed"
      },
      \u539F\u56E0: {
        en: "reason"
      },
      \u5DF2\u521B\u5EFA\u6587\u4EF6\u5939: {
        en: "created folder"
      },
      \u5DF2\u5B58\u5728\u6587\u4EF6\u5939: {
        en: "folder already exists:"
      },
      " \u592A\u77ED\uFF0C\u9632\u6B62\u8BEF\u5220\u6587\u4EF6": {
        en: " is too short (prevent accidental deletion of files)"
      },
      \u5F02\u5E38\u7ED3\u675F: {
        en: "exited abnormally"
      },
      \u7ED3\u675F: {
        en: "exited"
      },
      "\u4E0D\u80FD\u592A\u77ED\uFF0C\u9632\u6B62\u8BEF\u5220\u6587\u4EF6": {
        en: "can not be too short to prevent accidental deletion of files"
      },
      \u8FDE\u63A5\u51FA\u9519\u4E86: {
        en: "connection errored"
      },
      "\u8D85\u8FC7\u7B49\u5F85\u65F6\u95F4:": {
        en: "response.timeout exceeded:"
      },
      "\u7B49\u5F85 {{duration}} \u79D2\u540E\u91CD\u8BD5 fetch ({{_count}}) \u2026": {
        en: "Wait {{duration}} seconds to retry fetching ({{_count}}) \u2026"
      },
      "\u72B6\u6001\u7801 {{status}} \u975E 2xx": {
        en: "Status code {{status}} is not 2xx"
      },
      "\u4F20\u5165 request \u7684 headers \u53C2\u6570\u4E2D key \u5E94\u8BE5\u90FD\u662F\u5C0F\u5199\u7684\uFF0C\u5B9E\u9645\u4E3A {{key}}": {
        en: "The key in the headers parameter of the incoming request should be all lowercase, and it is actually {{key}}"
      },
      "dir \u5FC5\u987B\u4EE5 / \u7ED3\u5C3E": {
        en: "dir must end with /"
      },
      "fp \u5FC5\u987B\u662F\u6587\u4EF6\uFF0C\u4E0D\u80FD\u4EE5 / \u7ED3\u5C3E": {
        en: "fp must be a file and cannot end with /"
      },
      "fp \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84:": {
        en: "fp must be an absolute path:"
      },
      "fp \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5F53\u524D\u4E3A:": {
        en: "fp must be an absolute path, currently:"
      },
      \u5DF2\u6B63\u5E38\u5173\u95ED: {
        en: "closed normally"
      },
      "websocket close \u4E8B\u4EF6\u65F6\u5E94\u8BE5\u5DF2\u7ECF settled": {
        en: "Promise should have been settled in websocket close event"
      },
      \u8FDE\u63A5\u88AB\u5173\u95ED: {
        en: "connection closed"
      },
      "\u72B6\u6001\u7801 {{status}}, \u975E 2xx": {
        en: "Status code {{status}}, not 2xx"
      },
      "\u6784\u5EFA Remote \u65F6 url \u548C websocket \u6700\u591A\u53EA\u80FD\u4F20\u4E00\u4E2A": {
        en: "When building Remote, only one url and websocket can be passed at most"
      },
      "\u521B\u5EFA Remote \u65F6\u4F20\u5165\u7684 websocket \u8FDE\u63A5\u5DF2\u65AD\u5F00": {
        en: "The incoming websocket connection was broken while creating the Remote"
      },
      "\u4F20\u5165\u7684 websocket \u8FDE\u63A5\u5DF2\u65AD\u5F00": {
        en: "The incoming websocket connection was disconnected"
      },
      "\u5C1D\u8BD5\u91CA\u653E\u672A\u9501\u5B9A\u7684\u9501\uFF0C\u8FD9\u4E0D\u5E94\u8BE5\u53D1\u751F": {
        en: "Attempt to release an unlocked lock, this should not happen"
      },
      \u8D85\u65F6\u9519\u8BEF: {
        en: "timeout error"
      },
      "xshell \u542F\u52A8\u6210\u529F\uFF0C\u7528\u65F6 {{duration}}\uFF0C\u6B63\u5728\u76D1\u542C: http://localhost:8421\n": {
        en: "xshell started successfully, took {{duration}}, is listening: http://localhost:8421\n"
      },
      "xshell \u542F\u52A8\u6210\u529F\uFF0C\u7528\u65F6 ": {
        en: "xshell started successfully, it took "
      },
      "\u6B63\u5728\u76D1\u542C: http://localhost:8421\n": {
        en: "listening: http://localhost:8421\n"
      },
      "flist: \u53C2\u6570 fpd: '{{fpd}}' \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: "flist: parameter fpd: '{{fpd}}' must be an absolute path"
      },
      "flist: \u53C2\u6570 fpd: '{{fpd}}' \u5FC5\u987B\u4EE5 / \u7ED3\u5C3E": {
        en: "flist: argument fpd: '{{fpd}}' must end with /"
      },
      "fstat: \u53C2\u6570 fp: '{{fp}}' \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: "fstat: parameter fp: '{{fp}}' must be an absolute path"
      },
      "\u4E0D\u5B58\u5728\u4E14\u65E0\u6CD5\u521B\u5EFA\u6587\u4EF6\u5939 {{fpd}}": {
        en: "Folder {{fpd}} does not exist and cannot be created"
      },
      "message.data \u5FC5\u987B\u662F\u6570\u7EC4": {
        en: "message.data must be an array"
      },
      "fsend \u5FC5\u987B\u4F20 absolute \u9009\u9879\u6216 root \u6587\u4EF6\u5939": {
        en: "fsend must pass absolute option or root folder"
      },
      "message.data \u6570\u7EC4\u4E2D\u4E0D\u80FD\u6709 undefined \u7684\u9879, \u56E0\u4E3A json \u5E8F\u5217\u5316\u540E\u4F1A\u53D8\u4E3A null": {
        en: "There cannot be undefined items in the message.data array, because json will become null after serialization"
      },
      "xshell \u542F\u52A8\u6210\u529F\uFF0C\u6B63\u5728\u76D1\u542C: http://localhost:8421": {
        en: "xshell started successfully and is listening: http://localhost:8421"
      },
      "flstat: \u53C2\u6570 fp: '{{fp}}' \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84": {
        en: "flstat: parameter fp: '{{fp}}' must be an absolute path"
      },
      "filter \u9009\u9879\u53EA\u9002\u7528\u4E8E fp_src \u4E3A\u6587\u4EF6\u5939": {
        en: "filter option only applies to fp_src for folders"
      },
      "\u5DF2\u8BA2\u9605 stdio": {
        en: "subscribed to stdio"
      },
      "\u7531\u4E8E websocket \u8FDE\u63A5\u5173\u95ED\uFF0Cstdio \u8BA2\u9605\u88AB\u5173\u95ED": {
        en: "stdio subscription was closed due to websocket connection closed"
      },
      "\u5DF2\u53D6\u6D88\u8BA2\u9605 stdio": {
        en: "stdio unsubscribed"
      },
      "{{name}} \u542F\u52A8\u6210\u529F\uFF0C\u6B63\u5728\u76D1\u542C {{ports}} \u7AEF\u53E3": {
        en: "{{name}} started successfully and is listening on {{ports}} port"
      },
      \u5220\u9664\u4E86\u6587\u4EF6\u5939: {
        en: "deleted folder"
      },
      \u5220\u9664\u4E86\u6587\u4EF6: {
        en: "deleted file"
      },
      \u5DF2\u4E0D\u5B58\u5728\u6587\u4EF6: {
        en: "file no longer exists:"
      },
      \u5DF2\u4E0D\u5B58\u5728\u6587\u4EF6\u5939: {
        en: "folder no longer exists:"
      },
      "\u4E0D\u652F\u6301 content-encoding: {{encoding}} \u7684 http \u8BF7\u6C42": {
        en: "http requests with content-encoding: {{encoding}} are not supported"
      },
      "\u7B49\u5F85 {{duration}} \u79D2\u540E\u91CD\u8BD5 request (\u5DF2\u5C1D\u8BD5 {{_count}} \u6B21) \u2026": {
        en: "Wait {{duration}} seconds before retrying request (tried {{_count}} times) \u2026"
      },
      "fsend \u5FC5\u987B\u4F20 absolute \u9009\u9879, sea \u9009\u9879, \u6216 fpd_root \u6587\u4EF6\u5939": {
        en: "fsend must be passed the absolute option, the sea option, or the fpd_root folder"
      },
      \u5BF9\u7AEF\u5173\u95ED: {
        en: "endpoint is going away"
      },
      \u7F51\u7EDC\u4E2D\u65AD: {
        en: "network interruption"
      },
      chtext: {
        en: "chtext"
      },
      key: {
        en: "key"
      }
    };
  }
});

// node_modules/xshell/i18n/instance.js
var i18n, t4, language;
var init_instance = __esm({
  "node_modules/xshell/i18n/instance.js"() {
    init_i18n();
    init_dict2();
    i18n = new I18N(dict_default);
    ({ t: t4, language } = i18n);
  }
});

// node_modules/xshell/prototype.common.js
function to_snake_case(str) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase().replace("-", "_").strip_if_start("_");
}
function to_space_case(str) {
  return str.replace(/([A-Z])/g, " $1").toLowerCase().replaceAll("_", " ").strip_if_start(" ");
}
function set_reverse(obj) {
  for (const key in obj)
    obj[obj[key]] = key;
  return obj;
}
function to_method_property_descriptors(methods) {
  return Object.fromEntries(Object.entries(methods).map(([name, value]) => [name, {
    configurable: true,
    writable: true,
    enumerable: false,
    value
  }]));
}
function to_getter_property_descriptors(getters) {
  return Object.fromEntries(Object.entries(getters).map(([name, get3]) => [name, {
    configurable: true,
    enumerable: false,
    get: get3
  }]));
}
function byte_size(bytes) {
  bytes = Number(bytes);
  if (Number.isNaN(bytes)) {
    console.error(new Error("Number.byte_size() \u4E0D\u80FD\u4F20\u5165 NaN"));
    return "";
  }
  const sign = bytes < 0 ? "-" : "";
  bytes = Math.abs(bytes);
  const { unit, start } = bytes_table.find((range) => range.start <= bytes && bytes < range.end);
  return `${sign}${(start === 0 ? bytes : bytes / start).toFixed()} ${unit}`;
}
function is_codepoint_fullwidth(codepoint) {
  return !Number.isNaN(codepoint) && codepoint >= 4352 && (codepoint <= 4447 || // hangul jamo
  codepoint === 8220 || codepoint === 8221 || // 
  codepoint === 8230 || // …
  codepoint === 8251 || // ※
  // arrows
  8592 <= codepoint && codepoint <= 8703 || codepoint === 9001 || // left-pointing angle bracket
  codepoint === 9002 || // right-pointing angle bracket
  // ①
  9312 <= codepoint && codepoint <= 9471 || // box drawing
  9472 <= codepoint && codepoint <= 9599 || // shapes, symbols, …
  9600 <= codepoint && codepoint <= 11247 || // cjk radicals supplement .. enclosed cjk letters and months
  11904 <= codepoint && codepoint <= 12871 && codepoint !== 12351 || // enclosed cjk letters and months .. cjk unified ideographs extension a
  12880 <= codepoint && codepoint <= 19903 || // cjk unified ideographs .. yi radicals
  19968 <= codepoint && codepoint <= 42182 || // hangul jamo extended-a
  43360 <= codepoint && codepoint <= 43388 || // hangul syllables
  44032 <= codepoint && codepoint <= 55203 || // cjk compatibility ideographs
  63744 <= codepoint && codepoint <= 64255 || // vertical forms
  65040 <= codepoint && codepoint <= 65049 || // cjk compatibility forms .. small form variants
  65072 <= codepoint && codepoint <= 65131 || // halfwidth and fullwidth forms
  65281 <= codepoint && codepoint <= 65376 || 65504 <= codepoint && codepoint <= 65510 || // kana supplement
  110592 <= codepoint && codepoint <= 110593 || // enclosed ideographic supplement
  127488 <= codepoint && codepoint <= 127569 || // cjk unified ideographs extension b .. tertiary ideographic plane
  131072 <= codepoint && codepoint <= 262141);
}
var emoji_regex, noop3, ident, select2, key_types, is_key_type, greater, less, cjk, quotes, brackets, units, bytes_table;
var init_prototype_common = __esm({
  "node_modules/xshell/prototype.common.js"() {
    init_emoji_regex();
    init_instance();
    init_platform_common();
    emoji_regex = emoji_regex_default();
    noop3 = () => {
    };
    ident = (x) => x;
    select2 = (key) => (obj) => obj[key];
    key_types = ["string", "number", "symbol"];
    is_key_type = ((key) => key_types.includes(typeof key));
    greater = (a2, b) => a2 > b;
    less = (a2, b) => a2 < b;
    cjk = "([\u2E80-\u9FFF\uF900-\uFAFF])";
    quotes = {
      single: "'",
      double: '"',
      backtick: "`"
    };
    brackets = {
      round: ["(", ")"],
      square: ["[", "]"],
      curly: ["{", "}"],
      pointy: ["<", ">"],
      corner: ["\u300C", "\u300D"],
      fat: ["\u3010", "\u3011"],
      tortoise_shell: ["\u3014", "\u3015"]
    };
    if (!globalThis.my_prototype_defined) {
      let get_twelve_hour_clock = function(date2) {
        let hour = date2.getHours();
        if (hour <= 6)
          return [t4("\u51CC\u6668"), hour];
        if (hour <= 8)
          return [t4("\u6E05\u6668"), hour];
        if (hour <= 9)
          return [t4("\u65E9\u4E0A"), hour];
        if (hour <= 10)
          return [t4("\u4E0A\u5348"), hour];
        if (hour <= 12)
          return [t4("\u4E2D\u5348"), hour];
        hour -= 12;
        if (hour <= 5)
          return [t4("\u4E0B\u5348"), hour];
        if (hour <= 10)
          return [t4("\u665A\u4E0A"), hour];
        return [t4("\u6DF1\u591C"), hour];
      }, get_time_str = function(date2, hour, ms, splitter) {
        return String(hour).padStart(2, "0") + splitter + String(date2.getMinutes()).padStart(2, "0") + splitter + String(date2.getSeconds()).padStart(2, "0") + (ms ? "." + String(date2.getMilliseconds()).padStart(3, "0") : "");
      };
      Object.defineProperties(String.prototype, {
        ...to_getter_property_descriptors({
          width() {
            const s2 = platform.strip_ansi(this.replace(emoji_regex, "  "));
            let width = 0;
            for (let i2 = 0; i2 < s2.length; ++i2) {
              const code = s2.codePointAt(i2);
              if (code <= 31 || code >= 127 && code <= 159 || // ignore control characters
              code >= 768 && code <= 879)
                continue;
              if (code > 65535)
                ++i2;
              width += is_codepoint_fullwidth(code) ? 2 : 1;
            }
            return width;
          },
          // ------------ 文件路径操作
          isdir() {
            return this.endsWith("/");
          },
          fp() {
            if (!this)
              return this;
            const fp = this.replaceAll("\\", "/");
            return fp[1] === ":" && "a" <= fp[0] && fp[0] <= "z" ? fp[0].toUpperCase() + fp.slice(1) : fp;
          },
          fpd() {
            const { fp } = this;
            return fp.endsWith("/") ? fp : `${fp}/`;
          },
          fdir() {
            return this.fp.strip_end(this.fname);
          },
          fname() {
            const { fp } = this;
            const ilast = fp.lastIndexOf("/");
            if (ilast === -1)
              return fp;
            if (ilast === fp.length - 1) {
              const iprev = fp.lastIndexOf("/", ilast - 1);
              return iprev === -1 ? fp : fp.slice(iprev + 1);
            }
            return fp.slice(ilast + 1);
          },
          fext() {
            if (this.endsWith("/"))
              return "";
            const { fname } = this;
            const index = fname.lastIndexOf(".");
            return index <= 0 ? "" : fname.slice(index + 1);
          }
        }),
        // ------------ 文本处理工具方法
        ...to_method_property_descriptors({
          truncate(width, storage = false) {
            if (storage)
              return this.length <= width ? this : this.slice(0, width - 2) + "\xB7\xB7";
            const color_bak = this.startsWith("\x1B") ? this.slice(0, 5) : "";
            const s2 = platform.strip_ansi(this);
            if (width <= 2)
              return this.slice(0, width);
            let i_fitted = 0;
            let fitted_width = 0;
            let cur_width = 0;
            for (let i2 = 0; i2 < s2.length; i2++) {
              const code = s2.codePointAt(i2);
              if (code <= 31 || code >= 127 && code <= 159 || // Ignore control characters
              code >= 768 && code <= 879)
                continue;
              if (code > 65535)
                i2++;
              const w = is_codepoint_fullwidth(code) ? 2 : 1;
              if (cur_width + w + 2 <= width) {
                i_fitted = i2;
                fitted_width += w;
              }
              cur_width += w;
              if (cur_width > width) {
                const i_fitted_next = i_fitted + 1;
                const t6 = s2.slice(0, i_fitted_next) + " ".repeat(width - 2 - fitted_width) + "\xB7\xB7";
                return color_bak ? color_bak + t6 + "\x1B[39m" : t6;
              }
            }
            return this;
          },
          pad(width, { character = " ", position = "right" } = {}) {
            const _width = this.width;
            if (_width >= width)
              return this;
            if (position === "right")
              return this + character.repeat((width - _width) / character.width);
            return character.repeat(width - _width) + this;
          },
          limit(width, { character = " ", position = "right" } = {}) {
            return this.pad(width, { character, position }).truncate(width);
          },
          to_regexp(preservations, flags = "") {
            const preserved_chars = new Set(preservations);
            const replace_chars = Array.prototype.filter.call("|\\{}()[]^$+*?.-", (c2) => !preserved_chars.has(c2)).map((c2) => c2 === "]" ? "\\]" : c2).join("");
            return new RegExp(this.replace(new RegExp(`[${replace_chars}]`, "g"), "\\$&"), flags);
          },
          to_snake_case() {
            return to_snake_case(this);
          },
          to_space_case() {
            return to_space_case(this);
          },
          refmt(pattern, pattern_, preservations = "", flags = "", transformer = (name, value) => value || "", pattern_placeholder = /\{.*?\}/g) {
            let last_end = 0;
            let $placeholders = {};
            let regx_parts = [];
            function add_part(left, right) {
              const part = pattern.slice(left, right);
              if (part)
                regx_parts.push(part.to_regexp(preservations).source.bracket());
            }
            pattern.replace(pattern_placeholder, ($0, offset) => {
              add_part(last_end, offset);
              last_end = offset + $0.length;
              const placeholder = $0.slice(1, -1);
              let [placeholder_name, placeholder_pattern] = placeholder.split(":").map((s2) => s2.trim());
              let optional = false;
              if (placeholder_name.endsWith("?")) {
                placeholder_name = placeholder_name.slice(0, -1);
                optional = true;
              }
              $placeholders[placeholder_name] = regx_parts.push(placeholder_pattern ? `${placeholder_pattern.bracket()}${optional ? "?" : ""}` : "(.*?)");
              return "";
            });
            add_part(last_end);
            regx_parts = regx_parts.filter((part) => part);
            if (regx_parts[regx_parts.length - 1] === "(.*?)")
              regx_parts[regx_parts.length - 1] = "(.*)";
            const pattern_regx = new RegExp(regx_parts.join(""), flags);
            const matches = pattern_regx.exec(this);
            if (!matches)
              return this;
            const placeholders = Object.fromEntries(Object.entries($placeholders).map(([name, $i]) => [
              [name, matches[$i]],
              [`${name}.before`, matches[$i - 1] || ""],
              [`${name}.after`, matches[$i + 1] || ""]
            ]).flat());
            last_end = 0;
            let replacement_parts = [];
            pattern_.replace(pattern_placeholder, ($0, offset) => {
              replacement_parts.push(pattern_.slice(last_end, offset));
              last_end = offset + $0.length;
              const placeholder_name = $0.slice(1, -1);
              replacement_parts.push(transformer(placeholder_name, placeholders[placeholder_name], placeholders));
              return "";
            });
            replacement_parts.push(pattern_.slice(last_end));
            return this.replace(pattern_regx, replacement_parts.join(""));
          },
          find(pattern, preservations = "", flags = "", pattern_placeholder = /\{.*?\}/g) {
            let last_end = 0;
            let $placeholders = {};
            let regx_parts = [];
            function add_part(left, right) {
              const part = pattern.slice(left, right);
              if (part)
                regx_parts.push(part.to_regexp(preservations).source.bracket());
            }
            pattern.replace(pattern_placeholder, ($0, offset) => {
              add_part(last_end, offset);
              last_end = offset + $0.length;
              const placeholder = $0.slice(1, -1);
              let [placeholder_name, placeholder_pattern] = placeholder.split(":").map((s2) => s2.trim());
              let optional = false;
              if (placeholder_name.endsWith("?")) {
                placeholder_name = placeholder_name.slice(0, -1);
                optional = true;
              }
              $placeholders[placeholder_name] = regx_parts.push(placeholder_pattern ? `${placeholder_pattern.bracket()}${optional ? "?" : ""}` : "(.*?)");
              return "";
            });
            add_part(last_end);
            regx_parts = regx_parts.filter((part) => part);
            if (regx_parts[regx_parts.length - 1] === "(.*?)")
              regx_parts[regx_parts.length - 1] = "(.*)";
            const pattern_regx = new RegExp(regx_parts.join(""), flags);
            const matches = pattern_regx.exec(this);
            if (!matches)
              return {};
            return Object.fromEntries(Object.entries($placeholders).map(([name, $i]) => [name, matches[$i] || ""]));
          },
          /** 查找子串或字符出现的次数 */
          count(search) {
            if (!search)
              throw new Error("count \u7684 search \u4E0D\u80FD\u4E3A\u7A7A");
            let count = 0;
            for (let i2 = 0; (i2 = this.indexOf(search, i2)) !== -1; i2 += search.length)
              count++;
            return count;
          },
          quote(type = "single") {
            if (type === "psh")
              return `& ${this.quote()}`;
            return this.surround(quotes[type]);
          },
          bracket(shape = "round") {
            return this.surround(...brackets[shape]);
          },
          surround(left, right) {
            return left + this + (right || left);
          },
          surround_tag(tag_name) {
            return "<" + tag_name + ">" + this + "</" + tag_name + ">";
          },
          to_lf() {
            return this.replace(/\r\n/g, "\n");
          },
          rm(pattern, flags = "g") {
            if (typeof pattern === "string")
              pattern = new RegExp(pattern, flags);
            return this.replace(pattern, "");
          },
          split_lines(delimiter = /\r?\n/) {
            let lines = this.split(delimiter);
            if (lines[lines.length - 1] === "")
              lines.pop();
            return lines;
          },
          split_indent() {
            let i2 = 0;
            let indent = 0;
            for (; i2 < this.length; i2++)
              if (this[i2] === " ")
                indent++;
              else if (this[i2] === "	")
                indent += 4;
              else
                break;
            return {
              indent,
              text: this.slice(i2)
            };
          },
          split2(splitter, { last = false, optional = false } = {}) {
            const isplitter = last ? this.lastIndexOf(splitter) : this.indexOf(splitter);
            if (isplitter === -1)
              if (optional)
                return [this];
              else
                throw new Error(`\u5B57\u7B26\u4E32: ${this} \u5FC5\u987B\u5305\u542B splitter: ${splitter}`);
            return [this.slice(0, isplitter), this.slice(isplitter + splitter.length)];
          },
          strip_start(prefix, validate) {
            if (validate && !this.startsWith(prefix))
              throw new Error(`\u5B57\u7B26\u4E32\u6CA1\u6709\u4EE5\u524D\u7F00 ${prefix} \u5F00\u5934: ${this}`);
            return this.slice(prefix.length);
          },
          strip_if_start(prefix) {
            return this.startsWith(prefix) ? this.slice(prefix.length) : this;
          },
          strip_end(suffix, validate) {
            if (validate && !this.endsWith(suffix))
              throw new Error(`\u5B57\u7B26\u4E32\u6CA1\u6709\u4EE5\u540E\u7F00 ${suffix} \u7ED3\u5C3E: ${this}`);
            return this.slice(0, -suffix.length);
          },
          strip_if_end(suffix) {
            return this.endsWith(suffix) ? this.slice(0, -suffix.length) : this;
          },
          ensure_start(prefix) {
            return this.startsWith(prefix) ? this : prefix + this;
          },
          ensure_end(suffix = "\n") {
            return this.endsWith(suffix) ? this : this + suffix;
          },
          slice_from(search, { include = false, last = false, optional = false } = {}) {
            const i2 = last ? this.lastIndexOf(search) : this.indexOf(search);
            if (i2 === -1)
              if (optional)
                return this;
              else
                throw new Error(`slice_from \u5728\u5B57\u7B26\u4E32 ${this} \u4E2D\u627E\u4E0D\u5230 search: ${search}`);
            else
              return this.slice(include ? i2 : i2 + search.length);
          },
          slice_to(search, { include = false, last = false, optional = false } = {}) {
            const i2 = last ? this.lastIndexOf(search) : this.indexOf(search);
            if (i2 === -1)
              if (optional)
                return this;
              else
                throw new Error(`slice_to \u5728\u5B57\u7B26\u4E32 ${this} \u4E2D\u627E\u4E0D\u5230 search: ${search}`);
            else
              return this.slice(0, include ? i2 + search.length : i2);
          },
          space() {
            if (!this)
              return this;
            let text_;
            text_ = this.replace(space_patterns[0], "$1\u2005$2").replace(space_patterns[1], "$1\u2005$2").replace(space_patterns[2], "$1$2$3").replace(space_patterns[3], "$1\u2005$2\u2005$3").replace(space_patterns[4], "$1\u2005$2\u2005$3");
            const text_bak = text_;
            text_ = text_.replace(space_patterns[5], "$1\u2005$2\u2005$4");
            if (text_ === text_bak)
              text_ = text_.replace(space_patterns[6], "$1\u2005$2").replace(space_patterns[7], "$1\u2005$2");
            return text_.replace(space_patterns[8], "$1$3$5").replace(space_patterns[9], "$1$2\u2005$3").replace(space_patterns[10], "$1\u2005$2").replace(space_patterns[11], "$1\u2005$2");
          }
        })
      });
      const space_patterns = [
        new RegExp(cjk + `(['"])`, "g"),
        new RegExp(`(['"])` + cjk, "g"),
        /(["']+)\s*(.+?)\s*(["']+)/g,
        new RegExp(cjk + "([\\+\\-\\*\\/=&\\\\\\|<>])([A-Za-z0-9])", "g"),
        new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\\\\\|<>])" + cjk, "g"),
        new RegExp(cjk + "([\\(\\[\\{<\u201C]+(.*?)[\\)\\]\\}>\u201D]+)" + cjk, "g"),
        new RegExp(cjk + "([\\(\\[\\{<\u201C>])", "g"),
        new RegExp("([\\)\\]\\}>\u201D<])" + cjk, "g"),
        /([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/g,
        new RegExp(cjk + "([~!;:,\\.\\?\u2026])([A-Za-z0-9])", "g"),
        new RegExp(cjk + "([A-Za-z0-9`\\$%\\^&\\*\\-=\\+\\\\\\|\\/@\xA1-\xFF\u2022\u2027\u2150-\u218F])", "g"),
        new RegExp("([A-Za-z0-9`\\$%\\^&\\*\\-=\\+\\\\\\|\\/@\xA1-\xFF\u2022\u2027\u2150-\u218F])" + cjk, "g")
      ];
      Object.defineProperties(Date.prototype, to_method_property_descriptors({
        to_str(ms) {
          return `${this.to_date_str()} ${this.to_time_str(ms)}`;
        },
        to_date_str() {
          return this.getFullYear() + "." + String(this.getMonth() + 1).padStart(2, "0") + "." + String(this.getDate()).padStart(2, "0");
        },
        to_time_str(ms) {
          const [ampm, hour] = get_twelve_hour_clock(this);
          return `${ampm} ${get_time_str(this, hour, ms, ":")}`;
        },
        to_dot_time_str(ms) {
          return get_time_str(this, this.getHours(), ms, ".");
        },
        to_dot_str(ms) {
          return `${this.to_date_str()} ${this.to_dot_time_str(ms)}`;
        },
        to_formal_time_str(ms) {
          return get_time_str(this, this.getHours(), ms, ":");
        },
        to_formal_str(ms) {
          return `${this.to_date_str()} ${this.to_formal_time_str(ms)}`;
        }
      }));
      Object.defineProperties(Number.prototype, to_method_property_descriptors({
        to_fsize_str() {
          return byte_size(this);
        },
        to_bin_str() {
          return `0b${this.toString(2)}`;
        },
        to_hex_str(length) {
          const s2 = Math.abs(this).toString(16);
          if (length === void 0)
            length = Math.ceil(s2.length / 4) * 4;
          return `${this < 0 ? "-" : ""}0x${"0".repeat(length - s2.length)}${s2}`;
        },
        to_oct_str() {
          return `0o${this.toString(8)}`;
        }
      }));
      Object.defineProperties(Array.prototype, {
        ...to_getter_property_descriptors({
          last() {
            return this.at(-1);
          }
        }),
        ...to_method_property_descriptors({
          trim_lines({ trim_line = true, rm_empty_lines = true, rm_last_empty_lines = false } = {}) {
            if (!this.length)
              return this;
            let lines = this;
            if (trim_line)
              lines = lines.map((line) => line.trim());
            if (rm_empty_lines)
              return lines.filter(Boolean);
            if (rm_last_empty_lines) {
              const index = lines.findLastIndex(Boolean);
              return index === -1 ? [] : lines.slice(0, index + 1);
            }
            return lines;
          },
          indent(width = 4, character = " ") {
            const indent = character.repeat(width);
            return this.map((line) => indent + line);
          },
          sum(zero, mapper) {
            if (!this.length)
              return zero;
            const first = this[0];
            if ((typeof first === "number" || typeof first === "bigint") && !mapper)
              return this.reduce((acc, x) => acc + x, zero);
            if (is_key_type(mapper))
              mapper = select2(mapper);
            mapper ??= ident;
            return this.reduce((acc, x) => acc + mapper(x), zero);
          },
          max(mapper = ident, _greater = greater) {
            if (!this.length)
              return void 0;
            if (is_key_type(mapper))
              mapper = select2(mapper);
            let max = mapper(this[0]);
            let imax = 0;
            for (let i2 = 1; i2 < this.length; i2++) {
              const value = mapper(this[i2]);
              if (_greater(value, max)) {
                max = value;
                imax = i2;
              }
            }
            return this[imax];
          },
          min(mapper = ident, _less = less) {
            if (!this.length)
              return void 0;
            if (is_key_type(mapper))
              mapper = select2(mapper);
            let min = mapper(this[0]);
            let imin = 0;
            for (let i2 = 1; i2 < this.length; i2++) {
              const value = mapper(this[i2]);
              if (_less(value, min)) {
                min = value;
                imin = i2;
              }
            }
            return this[imin];
          },
          unique(mapper) {
            if (!mapper)
              return [...new Set(this)];
            if (is_key_type(mapper))
              mapper = select2(mapper);
            let map = /* @__PURE__ */ new Map();
            for (const x of this)
              map.set(mapper(x), x);
            return [...map.values()];
          },
          join_lines(append = Boolean(this.length)) {
            return `${this.join("\n")}${append ? "\n" : ""}`;
          },
          select(key) {
            return this.map(select2(key));
          }
        })
      });
      Object.defineProperties(BigInt.prototype, to_method_property_descriptors({
        to_fsize_str() {
          return byte_size(this);
        },
        toJSON() {
          return this.toString();
        }
      }));
      Object.defineProperties(Error.prototype, to_method_property_descriptors({
        toJSON() {
          return Object.fromEntries(Object.getOwnPropertyNames(this).map((name) => [name, this[name]]));
        }
      }));
      Object.defineProperties(Set.prototype, to_method_property_descriptors({
        map(mapfn) {
          return Array.from(this, mapfn);
        }
      }));
      Object.defineProperties(Uint8Array.prototype, to_getter_property_descriptors({
        dataview() {
          return new DataView(this.buffer, this.byteOffset, this.byteLength);
        }
      }));
    }
    units = ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];
    bytes_table = units.map((unit, i2) => ({
      start: i2 === 0 ? 0 : 2 ** (i2 * 10),
      end: 2 ** ((i2 + 1) * 10),
      unit
    }));
  }
});

// node_modules/xshell/utils.common.js
async function delay(milliseconds, options) {
  return platform.delay(milliseconds, options);
}
function assert(assertion, message) {
  if (!assertion) {
    debugger;
    throw new Error(`${t4("\u65AD\u8A00\u5931\u8D25")}: ${message ? `${message}: ` : ""}`);
  }
  return assertion;
}
function check(condition, message) {
  if (!condition) {
    debugger;
    throw new Error(message || t4("\u68C0\u67E5\u5931\u8D25"));
  }
  return condition;
}
function genid() {
  return Math.random() * 2 ** 53;
}
function seq(n2, generator) {
  let a2 = new Array(n2);
  for (let i2 = 0; i2 < n2; i2++)
    a2[i2] = generator ? generator(i2) : i2;
  return a2;
}
function zip_object(keys, values) {
  return keys.reduce((obj, key, i2) => {
    obj[key] = values[i2];
    return obj;
  }, {});
}
function concat(arrays) {
  let length = 0;
  for (const a2 of arrays)
    length += a2.byteLength;
  let buf2 = platform.get_buffer(length);
  let offset = 0;
  for (const a2 of arrays) {
    const uint8view = new Uint8Array(a2.buffer, a2.byteOffset, a2.byteLength);
    buf2.set(uint8view, offset);
    offset += uint8view.byteLength;
  }
  return buf2;
}
function decode(buffer2) {
  return decoder.decode(buffer2);
}
function defer3(initial) {
  if (initial === void 0) {
    let { promise, resolve, reject } = Promise.withResolvers();
    let p = promise;
    p.resolve = resolve;
    p.reject = reject;
    return p;
  } else {
    let p = Promise.resolve(initial);
    p.resolve = noop3;
    p.reject = noop3;
    return p;
  }
}
function defer22(initial) {
  if (initial === void 0) {
    let settled = false;
    let { promise, resolve, reject } = Promise.withResolvers();
    let p = promise;
    p.resolve = (value) => {
      settled = true;
      resolve(value);
    };
    p.reject = (error) => {
      settled = true;
      reject(error);
    };
    Object.defineProperty(p, "settled", {
      get() {
        return settled;
      },
      enumerable: true,
      configurable: true
    });
    return p;
  } else {
    let p = Promise.resolve(initial);
    p.resolve = noop3;
    p.reject = noop3;
    p.settled = true;
    return p;
  }
}
function nowstr(with_date = false) {
  const date2 = /* @__PURE__ */ new Date();
  return with_date ? date2.to_str() : date2.to_time_str();
}
var encoder, decoder, Lock;
var init_utils_common = __esm({
  "node_modules/xshell/utils.common.js"() {
    init_instance();
    init_prototype_common();
    init_platform_common();
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    Lock = class {
      /** 如果操作不需要独占资源，可以直接通过 lock.resource 访问，否则需要通过 await lock.request() 独占资源后再访问 */
      resource;
      /** 等待链，新的 await lock.request() 调用会等待当前等待链尾部的 promise 完成，并作为新的尾部 */
      ptail = defer3(null);
      /** 查询当前资源是否属于被锁定的状态，方便在资源闲置时做一些可选操作（操作前仍需锁定），或者做一些状态展示 */
      locked = false;
      /** 可以不传 resource，表示管理某个抽象或虚拟的资源 */
      constructor(resource) {
        this.resource = resource;
      }
      /** 通过 await lock.request() 锁定资源以便独占访问，锁定资源后在 action 回调中操作资源，回调 promise 完成 (fullfilled 或 rejected) 后自动释放资源 */
      async request(action, signal) {
        signal?.throwIfAborted();
        const ptail = this.ptail;
        let pcurrent = this.ptail = defer3();
        this.locked = true;
        return new Promise((resolve, reject) => {
          let executing = false;
          signal?.addEventListener("abort", () => {
            if (!executing)
              reject(signal.reason);
          }, { once: true });
          ptail.then(async () => {
            if (signal?.aborted)
              reject(signal.reason);
            else
              try {
                executing = true;
                resolve(await action(this.resource));
              } catch (error) {
                reject(error);
              }
            this.locked = false;
            pcurrent.resolve();
          });
        });
      }
    };
  }
});

// node_modules/xshell/platform.browser.js
function get_buffer(length) {
  return new Uint8Array(length);
}
function encode(str) {
  return encoder.encode(str);
}
async function delay2(milliseconds, { signal } = {}) {
  signal?.throwIfAborted();
  return new Promise((resolve, reject) => {
    function on_signal_abort() {
      clearTimeout(timeout2);
      reject(signal.reason);
    }
    signal?.addEventListener("abort", on_signal_abort);
    let timeout2 = setTimeout(() => {
      signal?.removeEventListener("abort", on_signal_abort);
      resolve();
    }, milliseconds);
  });
}
var init_platform_browser = __esm({
  "node_modules/xshell/platform.browser.js"() {
    init_platform_common();
    init_prototype_common();
    init_utils_common();
    init_platform_common();
    set_platform({
      nodejs: false,
      browser: true,
      get_buffer,
      encode,
      delay: delay2,
      strip_ansi: ident,
      get_websocket() {
        return globalThis.WebSocket;
      },
      get_https_proxy_agent() {
        return null;
      }
    });
  }
});

// node_modules/xshell/prototype.browser.js
var init_prototype_browser = __esm({
  "node_modules/xshell/prototype.browser.js"() {
    init_platform_browser();
    init_prototype_common();
  }
});

// node_modules/chalk/source/vendor/ansi-styles/index.js
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red2, green2, blue2) {
        if (red2 === green2 && green2 === blue2) {
          if (red2 < 8) {
            return 16;
          }
          if (red2 > 248) {
            return 231;
          }
          return Math.round((red2 - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red2 / 255 * 5) + 6 * Math.round(green2 / 255 * 5) + Math.round(blue2 / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red2;
        let green2;
        let blue2;
        if (code >= 232) {
          red2 = ((code - 232) * 10 + 8) / 255;
          green2 = red2;
          blue2 = red2;
        } else {
          code -= 16;
          const remainder = code % 36;
          red2 = Math.floor(code / 36) / 5;
          green2 = Math.floor(remainder / 6) / 5;
          blue2 = remainder % 6 / 5;
        }
        const value = Math.max(red2, green2, blue2) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue2) << 2 | Math.round(green2) << 1 | Math.round(red2));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red2, green2, blue2) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red2, green2, blue2)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ANSI_BACKGROUND_OFFSET, wrapAnsi16, wrapAnsi256, wrapAnsi16m, styles, modifierNames, foregroundColorNames, backgroundColorNames, colorNames, ansiStyles, ansi_styles_default;
var init_ansi_styles = __esm({
  "node_modules/chalk/source/vendor/ansi-styles/index.js"() {
    ANSI_BACKGROUND_OFFSET = 10;
    wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
    wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    wrapAnsi16m = (offset = 0) => (red2, green2, blue2) => `\x1B[${38 + offset};2;${red2};${green2};${blue2}m`;
    styles = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        gray: [90, 39],
        // Alias of `blackBright`
        grey: [90, 39],
        // Alias of `blackBright`
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgGray: [100, 49],
        // Alias of `bgBlackBright`
        bgGrey: [100, 49],
        // Alias of `bgBlackBright`
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    modifierNames = Object.keys(styles.modifier);
    foregroundColorNames = Object.keys(styles.color);
    backgroundColorNames = Object.keys(styles.bgColor);
    colorNames = [...foregroundColorNames, ...backgroundColorNames];
    ansiStyles = assembleStyles();
    ansi_styles_default = ansiStyles;
  }
});

// node_modules/chalk/source/vendor/supports-color/browser.js
var level, colorSupport, supportsColor, browser_default;
var init_browser = __esm({
  "node_modules/chalk/source/vendor/supports-color/browser.js"() {
    level = (() => {
      if (!("navigator" in globalThis)) {
        return 0;
      }
      if (globalThis.navigator.userAgentData) {
        const brand = navigator.userAgentData.brands.find(({ brand: brand2 }) => brand2 === "Chromium");
        if (brand && brand.version > 93) {
          return 3;
        }
      }
      if (/\b(Chrome|Chromium)\//.test(globalThis.navigator.userAgent)) {
        return 1;
      }
      return 0;
    })();
    colorSupport = level !== 0 && {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
    supportsColor = {
      stdout: colorSupport,
      stderr: colorSupport
    };
    browser_default = supportsColor;
  }
});

// node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
var init_utilities = __esm({
  "node_modules/chalk/source/utilities.js"() {
  }
});

// node_modules/chalk/source/index.js
function createChalk(options) {
  return chalkFactory(options);
}
var stdoutColor, stderrColor, GENERATOR, STYLER, IS_EMPTY, levelMapping, styles2, applyOptions, Chalk, chalkFactory, getModelAnsi, usedModels, proto, createStyler, createBuilder, applyStyle, chalk, chalkStderr;
var init_source = __esm({
  "node_modules/chalk/source/index.js"() {
    init_ansi_styles();
    init_browser();
    init_utilities();
    ({ stdout: stdoutColor, stderr: stderrColor } = browser_default);
    GENERATOR = /* @__PURE__ */ Symbol("GENERATOR");
    STYLER = /* @__PURE__ */ Symbol("STYLER");
    IS_EMPTY = /* @__PURE__ */ Symbol("IS_EMPTY");
    levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    styles2 = /* @__PURE__ */ Object.create(null);
    applyOptions = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    Chalk = class {
      constructor(options) {
        return chalkFactory(options);
      }
    };
    chalkFactory = (options) => {
      const chalk3 = (...strings) => strings.join(" ");
      applyOptions(chalk3, options);
      Object.setPrototypeOf(chalk3, createChalk.prototype);
      return chalk3;
    };
    Object.setPrototypeOf(createChalk.prototype, Function.prototype);
    for (const [styleName, style] of Object.entries(ansi_styles_default)) {
      styles2[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles2.visible = {
      get() {
        const builder = createBuilder(this, this[STYLER], true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    getModelAnsi = (model, level2, type, ...arguments_) => {
      if (model === "rgb") {
        if (level2 === "ansi16m") {
          return ansi_styles_default[type].ansi16m(...arguments_);
        }
        if (level2 === "ansi256") {
          return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
        }
        return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
      }
      if (model === "hex") {
        return getModelAnsi("rgb", level2, type, ...ansi_styles_default.hexToRgb(...arguments_));
      }
      return ansi_styles_default[type][model](...arguments_);
    };
    usedModels = ["rgb", "hex", "ansi256"];
    for (const model of usedModels) {
      styles2[model] = {
        get() {
          const { level: level2 } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level2], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles2[bgModel] = {
        get() {
          const { level: level2 } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level2], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
    }
    proto = Object.defineProperties(() => {
    }, {
      ...styles2,
      level: {
        enumerable: true,
        get() {
          return this[GENERATOR].level;
        },
        set(level2) {
          this[GENERATOR].level = level2;
        }
      }
    });
    createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    createBuilder = (self2, _styler, _isEmpty) => {
      const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      Object.setPrototypeOf(builder, proto);
      builder[GENERATOR] = self2;
      builder[STYLER] = _styler;
      builder[IS_EMPTY] = _isEmpty;
      return builder;
    };
    applyStyle = (self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2[IS_EMPTY] ? "" : string;
      }
      let styler = self2[STYLER];
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.includes("\x1B")) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    Object.defineProperties(createChalk.prototype, styles2);
    chalk = createChalk();
    chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  }
});

// node_modules/xshell/chalk.browser.js
var chalk2, red, green, yellow, blue, magenta, cyan, gray, red_, green_, yellow_, blue_, magenta_, cyan_, underline;
var init_chalk_browser = __esm({
  "node_modules/xshell/chalk.browser.js"() {
    init_source();
    chalk2 = new Chalk({ level: 2 });
    ({ red, green, yellow, blue, magenta, cyan, gray, redBright: red_, greenBright: green_, yellowBright: yellow_, blueBright: blue_, magentaBright: magenta_, cyanBright: cyan_, underline } = chalk2);
  }
});

// node_modules/xshell/utils.browser.js
async function pause(milliseconds = 3e3) {
  await delay(milliseconds);
  debugger;
}
var init_utils_browser = __esm({
  "node_modules/xshell/utils.browser.js"() {
    init_prototype_browser();
    init_platform_browser();
    init_utils_common();
    init_utils_common();
    globalThis.pause = pause;
  }
});

// node_modules/xshell/io.common.js
var buf, dv, buffer, dataview, int64max;
var init_io_common = __esm({
  "node_modules/xshell/io.common.js"() {
    init_prototype_common();
    init_utils_common();
    buf = new Uint8Array(0);
    dv = buf.dataview;
    buffer = new Uint8Array(
      8 * 2 ** 20
      /* Buffer.poolSize */
    );
    dataview = buffer.dataview;
    int64max = 1n << 63n;
  }
});

// node_modules/xshell/net.common.js
async function connect_websocket(url, {
  print = {
    connect: true,
    error: true,
    close: true
  },
  protocols,
  max_payload = 2 ** 33,
  // 8 GB
  proxy,
  keep_alive_duration,
  on_message,
  on_error,
  on_close,
  connect
}) {
  const { nodejs } = platform;
  if (typeof print === "boolean")
    print = {
      connect: print,
      error: print,
      close: print
    };
  if (keep_alive_duration)
    check(nodejs, "keep_alive_duration \u4EC5 nodejs \u73AF\u5883\u6709\u6548");
  let websocket = new (await platform.get_websocket())(
    url,
    protocols,
    // @ts-ignore
    nodejs ? {
      maxPayload: max_payload,
      skipUTF8Validation: true,
      allowSynchronousEvents: true,
      ...proxy ? {
        agent: websocket_proxy_agents[proxy] ??= new (await platform.get_https_proxy_agent())(proxy)
      } : {},
      ...connect ? { createConnection: connect } : {}
    } : void 0
  );
  websocket.binaryType = "arraybuffer";
  let pwebsocket = defer22();
  websocket.addEventListener("open", (event) => {
    if (print.connect)
      console.log(websocket.url + (websocket.protocol ? " " + websocket.protocol.bracket() : "") + t4(" \u5DF2\u8FDE\u63A5"));
    if (keep_alive_duration)
      websocket._socket.setKeepAlive(true, keep_alive_duration);
    pwebsocket.resolve(websocket);
  }, { once: true });
  let errored;
  function on_close_or_error(event) {
    const { type } = event;
    if (type === "close" && event.code === 1e3) {
      if (on_close)
        on_close(event, websocket);
      else if (print.close)
        console.log(`${websocket.url} ${t4("\u5DF2\u6B63\u5E38\u5173\u95ED")}`);
      return;
    }
    if (errored)
      return;
    errored = type;
    const error = new WebSocketConnectionError(websocket.url, protocols, event);
    if (!pwebsocket.settled)
      pwebsocket.reject(error);
    else if (on_error)
      on_error(error, websocket);
    else if (print.error)
      console.error(error.message);
  }
  websocket.addEventListener("error", (event) => {
    if (nodejs)
      on_close_or_error(event);
    else
      setTimeout(() => {
        on_close_or_error(event);
      });
  }, { once: true });
  websocket.addEventListener("close", on_close_or_error, { once: true });
  websocket.addEventListener("message", (event) => {
    on_message(event.data, websocket);
  });
  return pwebsocket;
}
var WebSocketConnectionError, websocket_proxy_agents;
var init_net_common = __esm({
  "node_modules/xshell/net.common.js"() {
    init_platform_common();
    init_prototype_common();
    init_io_common();
    init_utils_common();
    init_instance();
    WebSocketConnectionError = class _WebSocketConnectionError extends Error {
      name = "WebSocketConnectionError";
      // 这里不保留 websocket 引用，防止循环引用导致 JSON 序列化失败
      url;
      protocols;
      type;
      /** close 事件时为 close code (非 1000 的 number), error 事件为 error code (可能是 string) */
      code;
      reason;
      event;
      // --- node.js error event 独有
      address;
      errno;
      port;
      syscall;
      static get_reason_string(code, reason) {
        if (!reason) {
          if (code === 1001)
            reason = t4("\u5BF9\u7AEF\u5173\u95ED");
          else if (code === 1006)
            reason = t4("\u7F51\u7EDC\u4E2D\u65AD");
        }
        return reason ? `${reason} (${code})` : code;
      }
      constructor(url, protocols, event, message) {
        let type, reason, code, error;
        if (!message)
          if (event)
            if ((type = event.type) === "error") {
              ({ error } = event);
              message = error ? `${t4("\u8FDE\u63A5\u88AB\u5173\u95ED")}: ${error.message}` : t4("\u8FDE\u63A5\u88AB\u5173\u95ED");
            } else {
              ({ code, reason } = event);
              message = `${t4("\u8FDE\u63A5\u88AB\u5173\u95ED")}: ${_WebSocketConnectionError.get_reason_string(code, reason)}`;
            }
          else
            message = t4("\u8FDE\u63A5\u88AB\u5173\u95ED");
        super(nowstr() + "  " + (url || "\u4F20\u5165") + (protocols ? " " + protocols.join(", ").bracket() : "") + " " + message);
        this.url = url;
        this.protocols = protocols;
        if (!event)
          return;
        this.type = type;
        this.code = code;
        this.reason = reason;
        if (type === "error" && platform.nodejs) {
          this.cause = error;
          this.address = error.address;
          this.errno = error.errno;
          this.port = error.port;
          this.syscall = error.syscall;
        }
        this.event = event;
      }
    };
    websocket_proxy_agents = {};
  }
});

// node_modules/xshell/net.browser.js
var init_net_browser = __esm({
  "node_modules/xshell/net.browser.js"() {
    init_instance();
    init_utils_browser();
    init_net_common();
    init_net_common();
  }
});

// node_modules/dolphindb/i18n/dict.json
var dict_default2;
var init_dict3 = __esm({
  "node_modules/dolphindb/i18n/dict.json"() {
    dict_default2 = {
      \u6682\u65F6\u4E0D\u652F\u6301\u5E8F\u5217\u5316: {
        en: "serialization is not currently supported"
      },
      "\u4E0D\u80FD\u81EA\u52A8\u8F6C\u6362 {{type}} \u81F3 DdbObj": {
        en: "cannot automatically convert {{type}} to DdbObj"
      },
      "form \u5FC5\u987B\u662F DdbForm.table, \u5426\u5219\u4E0D\u80FD to_rows": {
        en: "form must be DdbForm.table, otherwise it cannot to_rows"
      },
      "this.form \u5FC5\u987B\u662F DdbForm.dict, \u5426\u5219\u4E0D\u80FD\u8C03\u7528 to_dict \u8F6C\u6362\u4E3A js object": {
        en: "this.form must be DdbForm.dict, otherwise to_dict cannot be called to convert to js object"
      },
      "\u5F53\u524D\u53EA\u652F\u6301\u81EA\u52A8\u8F6C\u6362 dict<string, any | ...dictables> \u4E3A js object": {
        en: "currently api only supports automatic conversion of dict<string, any | ...dictables> to js object"
      },
      "deep = true \u65F6\u5FC5\u987B\u8BBE\u7F6E strip = true": {
        en: "strip = true must be set when deep = true"
      },
      "timestamp \u5B57\u7B26\u4E32\u957F\u5EA6\u5FC5\u987B\u7B49\u4E8E\u683C\u5F0F\u4E32\u957F\u5EA6": {
        en: "the length of the timestamp string must be equal to the length of the format string"
      },
      "\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u79D2\u7684\u683C\u5F0F (ss)": {
        en: "the format string must contain the format for seconds (ss)"
      },
      "\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u7EB3\u79D2\u7684\u683C\u5F0F (SSSSSSSSS)": {
        en: "format string must contain nanosecond format (SSSSSSSSS)"
      },
      "nanotimestamp \u5B57\u7B26\u4E32\u957F\u5EA6\u5FC5\u987B\u7B49\u4E8E\u683C\u5F0F\u4E32\u957F\u5EA6": {
        en: "nanotimestamp string length must be equal to format string length"
      },
      "\u6307\u5B9A node \u65F6\u5FC5\u987B\u8BBE\u7F6E func_type": {
        en: "func_type must be set when specifying node"
      },
      "variable \u6307\u4EE4\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u4E14\u53C2\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u6570\u91CF\u5E94\u8BE5\u5339\u914D": {
        en: "variable command parameter cannot be empty and parameter name cannot be empty, and the number should match"
      },
      "session id \u4ECE {{sid}} \u53D8\u4E3A {{sid_}}": {
        en: "session id changed from {{sid}} to {{sid_}}"
      },
      "\u8BA2\u9605\u6D41\u8868\u6210\u529F:": {
        en: "subscribed to streaming table:"
      },
      "vector {{type}} \u6682\u4E0D\u652F\u6301\u5E8F\u5217\u5316": {
        en: "vector {{type}} serialization is not currently supported"
      },
      "form \u5FC5\u987B\u662F DdbForm.table, \u5426\u5219\u4E0D\u80FD to_cols": {
        en: "form must be DdbForm.table, otherwise it cannot to_cols"
      },
      "\u8FD9\u662F\u5728\u8C03\u7528 this.rpc \u4E4B\u524D\u9ED8\u8BA4\u7684 on_message, \u4E0D\u5E94\u8BE5\u88AB\u8C03\u7528\u5230\uFF0C\u9664\u975E\u5EFA\u7ACB\u8FDE\u63A5\u540E server \u5148\u63A8\u9001\u4E86 message": {
        en: "This is the default on_message before calling this.rpc, it should not be called unless the server pushes the message first after the connection is established"
      },
      " \u6682\u65F6\u4E0D\u652F\u6301\u89E3\u6790": {
        en: " parsing is currently not supported"
      },
      "array vector \u5B58\u5728\u975E\u6CD5 unit: {{unit}}": {
        en: "array vector has invalid unit: {{unit}}"
      },
      " \u6682\u65F6\u4E0D\u652F\u6301\u5E8F\u5217\u5316": {
        en: " serialization is currently not supported"
      },
      "print \u6D88\u606F\u7684 buffer \u5E94\u8BE5\u4EE5 \\0 \u7ED3\u675F": {
        en: "The buffer of the print message should end with \\0"
      },
      "print \u6D88\u606F\u7684 buffer \u4E2D\u95F4\u4E0D\u5E94\u8BE5\u6709 \\0": {
        en: "There should not be \\0 in the buffer of the print message"
      },
      \u5DF2\u65AD\u5F00: {
        en: "is already disconnected"
      },
      "\u8FDE\u63A5\u51FA\u9519\u4E86\uFF0C\u53EF\u80FD\u7531\u4E8E\u7F51\u7EDC\u539F\u56E0\u8FDE\u63A5\u5DF2\u88AB\u5173\u95ED\uFF0C\u6216\u670D\u52A1\u5668\u65AD\u5F00\u8FDE\u63A5": {
        en: "connection errored. The connection may have been closed due to network reasons, or the server disconnected"
      },
      "new DdbBlob \u4E0D\u80FD\u4F20\u7A7A\u7684 value": {
        en: "new DdbBlob cannot pass an empty value"
      },
      "{{form}}<{{type}}> \u6682\u65F6\u4E0D\u652F\u6301\u89E3\u6790": {
        en: "cannot parse {{form}}<{{type}}>"
      },
      "\u6D41\u6570\u636E\u8BA2\u9605\u540E\u4E00\u5B9A\u5148\u8FD4\u56DE schema": {
        en: "After subscribing to streaming data, the schema must be returned first."
      },
      "{{form}} {{type}} \u6682\u4E0D\u652F\u6301 data()": {
        en: "{{form}} {{type}} does not support data() yet"
      },
      " \u6682\u65F6\u4E0D\u652F\u6301\u8F6C\u6362\u4E3A js \u5BF9\u8C61": {
        en: " conversion to js object is not supported at the moment"
      },
      "{{time}} \u5FC3\u8DF3\u68C0\u6D4B\u5931\u8D25\uFF0C\u8FDE\u63A5\u5DF2\u65AD\u5F00": {
        en: "{{time}} heartbeat detection failed, the connection has been disconnected"
      },
      "pack \u65F6\u5B57\u7B26\u4E32\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0, \u5426\u5219\u4E0A\u4F20\u7ED9 DolphinDB \u4F1A\u5BFC\u81F4\u8FDE\u63A5\u65AD\u5F00": {
        en: "The string cannot contain \\0 in the middle when packing, otherwise uploading to DolphinDB will cause the connection to be disconnected"
      },
      "\u53D1\u9001\u81F3 DolphinDB \u6267\u884C\u7684\u811A\u672C\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0": {
        en: "The script sent to DolphinDB for execution cannot contain \\0 in the middle"
      },
      "\u8C03\u7528 ddb.invoke \u7684\u53C2\u6570\u4E2D\u4E0D\u80FD\u540C\u65F6\u6709 DdbObj \u4E0E\u590D\u6742 js \u539F\u751F\u5BF9\u8C61": {
        en: "The parameters of calling ddb.invoke cannot contain both DdbObj and complex js native objects"
      },
      "iife \u6267\u884C\u7684\u811A\u672C\u884C\u6570\u5E94\u8BE5\u81F3\u5C11\u4E3A 2 \u884C": {
        en: "The number of script lines executed by iife should be at least 2"
      },
      "iotany sub vector \u4E0D\u652F\u6301\u975E vector \u7C7B\u578B": {
        en: "iotany sub vector does not support non-vector types"
      },
      "iotany \u7684 meta vector \u957F\u5EA6\u81F3\u5C11\u4E3A 2": {
        en: "The length of the iotany meta vector is at least 2"
      },
      "value \u4E0D\u80FD\u8F6C\u6362\u4E3A {{classname}}": {
        en: "value cannot be converted to {{classname}}"
      },
      "DDB.define \u65B9\u6CD5\u4F20\u5165\u7684 definition \u4E0D\u7B26\u5408\u51FD\u6570\u5B9A\u4E49\u683C\u5F0F": {
        en: "The definition passed in by the DDB.define method does not conform to the function definition format"
      },
      "DDB.define \u65B9\u6CD5\u4F20\u5165\u7684 definition \u4E0D\u7B26\u5408\u51FD\u6570\u5B9A\u4E49\u683C\u5F0F def xxx ()": {
        en: "The definition passed in by the DDB.define method does not conform to the function definition format def xxx ()"
      },
      "{{form}} \u6682\u4E0D\u652F\u6301\u5E8F\u5217\u5316": {
        en: "{{form}} does not support serialization yet"
      },
      "value \u4E0D\u80FD\u8F6C\u6362\u4E3A {{typename}}": {
        en: "value cannot be converted to {{typename}}"
      },
      "ddb.cancel \u65E0 ticket\uFF0C\u5C1D\u8BD5\u901A\u8FC7\u5BC6\u7801 login \u5931\u8D25": {
        en: "ddb.cancel has no ticket, attempt to login using password failed"
      }
    };
  }
});

// node_modules/dolphindb/i18n/index.js
var i18n2, t5, language2;
var init_i18n2 = __esm({
  "node_modules/dolphindb/i18n/index.js"() {
    init_i18n();
    init_dict3();
    i18n2 = new I18N(dict_default2);
    ({ t: t5, language: language2 } = i18n2);
  }
});

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !(function(t6, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t6 = "undefined" != typeof globalThis ? globalThis : t6 || self).dayjs = e2();
    })(exports, (function() {
      "use strict";
      var t6 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u = "hour", a2 = "day", o = "week", c2 = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t7) {
        var e3 = ["th", "st", "nd", "rd"], n3 = t7 % 100;
        return "[" + t7 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
      } }, m = function(t7, e3, n3) {
        var r3 = String(t7);
        return !r3 || r3.length >= e3 ? t7 : "" + Array(e3 + 1 - r3.length).join(n3) + t7;
      }, v = { s: m, z: function(t7) {
        var e3 = -t7.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
        return (e3 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i3, 2, "0");
      }, m: function t7(e3, n3) {
        if (e3.date() < n3.date()) return -t7(n3, e3);
        var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, u2 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
        return +(-(r3 + (n3 - i3) / (s3 ? i3 - u2 : u2 - i3)) || 0);
      }, a: function(t7) {
        return t7 < 0 ? Math.ceil(t7) || 0 : Math.floor(t7);
      }, p: function(t7) {
        return { M: c2, y: h, w: o, d: a2, D: d, h: u, m: s2, s: i2, ms: r2, Q: f }[t7] || String(t7 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t7) {
        return void 0 === t7;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t7) {
        return t7 instanceof _ || !(!t7 || !t7[p]);
      }, w = function t7(e3, n3, r3) {
        var i3;
        if (!e3) return g;
        if ("string" == typeof e3) {
          var s3 = e3.toLowerCase();
          D[s3] && (i3 = s3), n3 && (D[s3] = n3, i3 = s3);
          var u2 = e3.split("-");
          if (!i3 && u2.length > 1) return t7(u2[0]);
        } else {
          var a3 = e3.name;
          D[a3] = e3, i3 = a3;
        }
        return !r3 && i3 && (g = i3), i3 || !r3 && g;
      }, O = function(t7, e3) {
        if (S(t7)) return t7.clone();
        var n3 = "object" == typeof e3 ? e3 : {};
        return n3.date = t7, n3.args = arguments, new _(n3);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t7, e3) {
        return O(t7, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
      };
      var _ = (function() {
        function M2(t7) {
          this.$L = w(t7.locale, null, true), this.parse(t7), this.$x = this.$x || t7.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t7) {
          this.$d = (function(t8) {
            var e3 = t8.date, n3 = t8.utc;
            if (null === e3) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e3)) return /* @__PURE__ */ new Date();
            if (e3 instanceof Date) return new Date(e3);
            if ("string" == typeof e3 && !/Z$/i.test(e3)) {
              var r3 = e3.match($);
              if (r3) {
                var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
              }
            }
            return new Date(e3);
          })(t7), this.init();
        }, m2.init = function() {
          var t7 = this.$d;
          this.$y = t7.getFullYear(), this.$M = t7.getMonth(), this.$D = t7.getDate(), this.$W = t7.getDay(), this.$H = t7.getHours(), this.$m = t7.getMinutes(), this.$s = t7.getSeconds(), this.$ms = t7.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t7, e3) {
          var n3 = O(t7);
          return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
        }, m2.isAfter = function(t7, e3) {
          return O(t7) < this.startOf(e3);
        }, m2.isBefore = function(t7, e3) {
          return this.endOf(e3) < O(t7);
        }, m2.$g = function(t7, e3, n3) {
          return b.u(t7) ? this[e3] : this.set(n3, t7);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t7, e3) {
          var n3 = this, r3 = !!b.u(e3) || e3, f2 = b.p(t7), l2 = function(t8, e4) {
            var i3 = b.w(n3.$u ? Date.UTC(n3.$y, e4, t8) : new Date(n3.$y, e4, t8), n3);
            return r3 ? i3 : i3.endOf(a2);
          }, $2 = function(t8, e4) {
            return b.w(n3.toDate()[t8].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r3 ? l2(1, 0) : l2(31, 11);
            case c2:
              return r3 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
            case a2:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s2:
              return $2(v2 + "Seconds", 2);
            case i2:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t7) {
          return this.startOf(t7, false);
        }, m2.$set = function(t7, e3) {
          var n3, o2 = b.p(t7), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n3 = {}, n3[a2] = f2 + "Date", n3[d] = f2 + "Date", n3[c2] = f2 + "Month", n3[h] = f2 + "FullYear", n3[u] = f2 + "Hours", n3[s2] = f2 + "Minutes", n3[i2] = f2 + "Seconds", n3[r2] = f2 + "Milliseconds", n3)[o2], $2 = o2 === a2 ? this.$D + (e3 - this.$W) : e3;
          if (o2 === c2 || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t7, e3) {
          return this.clone().$set(t7, e3);
        }, m2.get = function(t7) {
          return this[b.p(t7)]();
        }, m2.add = function(r3, f2) {
          var d2, l2 = this;
          r3 = Number(r3);
          var $2 = b.p(f2), y2 = function(t7) {
            var e3 = O(l2);
            return b.w(e3.date(e3.date() + Math.round(t7 * r3)), l2);
          };
          if ($2 === c2) return this.set(c2, this.$M + r3);
          if ($2 === h) return this.set(h, this.$y + r3);
          if ($2 === a2) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s2] = e2, d2[u] = n2, d2[i2] = t6, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t7, e3) {
          return this.add(-1 * t7, e3);
        }, m2.format = function(t7) {
          var e3 = this, n3 = this.$locale();
          if (!this.isValid()) return n3.invalidDate || l;
          var r3 = t7 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b.z(this), s3 = this.$H, u2 = this.$m, a3 = this.$M, o2 = n3.weekdays, c3 = n3.months, f2 = n3.meridiem, h2 = function(t8, n4, i4, s4) {
            return t8 && (t8[n4] || t8(e3, r3)) || i4[n4].slice(0, s4);
          }, d2 = function(t8) {
            return b.s(s3 % 12 || 12, t8, "0");
          }, $2 = f2 || function(t8, e4, n4) {
            var r4 = t8 < 12 ? "AM" : "PM";
            return n4 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y, (function(t8, r4) {
            return r4 || (function(t9) {
              switch (t9) {
                case "YY":
                  return String(e3.$y).slice(-2);
                case "YYYY":
                  return b.s(e3.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b.s(a3 + 1, 2, "0");
                case "MMM":
                  return h2(n3.monthsShort, a3, c3, 3);
                case "MMMM":
                  return h2(c3, a3);
                case "D":
                  return e3.$D;
                case "DD":
                  return b.s(e3.$D, 2, "0");
                case "d":
                  return String(e3.$W);
                case "dd":
                  return h2(n3.weekdaysMin, e3.$W, o2, 2);
                case "ddd":
                  return h2(n3.weekdaysShort, e3.$W, o2, 3);
                case "dddd":
                  return o2[e3.$W];
                case "H":
                  return String(s3);
                case "HH":
                  return b.s(s3, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s3, u2, true);
                case "A":
                  return $2(s3, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e3.$s);
                case "ss":
                  return b.s(e3.$s, 2, "0");
                case "SSS":
                  return b.s(e3.$ms, 3, "0");
                case "Z":
                  return i3;
              }
              return null;
            })(t8) || i3.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r3, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e2, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c2:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a2:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n2;
              break;
            case s2:
              $2 = g2 / e2;
              break;
            case i2:
              $2 = g2 / t6;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t7, e3) {
          if (!t7) return this.$L;
          var n3 = this.clone(), r3 = w(t7, e3, true);
          return r3 && (n3.$L = r3), n3;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u], ["$W", a2], ["$M", c2], ["$y", h], ["$D", d]].forEach((function(t7) {
        k[t7[1]] = function(e3) {
          return this.$g(e3, t7[0], t7[1]);
        };
      })), O.extend = function(t7, e3) {
        return t7.$i || (t7(e3, _, O), t7.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t7) {
        return O(1e3 * t7);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    !(function(e2, t6) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t6() : "function" == typeof define && define.amd ? define(t6) : (e2 = "undefined" != typeof globalThis ? globalThis : e2 || self).dayjs_plugin_customParseFormat = t6();
    })(exports, (function() {
      "use strict";
      var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t6 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d/, r2 = /\d\d/, i2 = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s2 = {}, a2 = function(e3) {
        return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
      };
      var f = function(e3) {
        return function(t7) {
          this[e3] = +t7;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
        (this.zone || (this.zone = {})).offset = (function(e4) {
          if (!e4) return 0;
          if ("Z" === e4) return 0;
          var t7 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t7[1] + (+t7[2] || 0);
          return 0 === n3 ? 0 : "+" === t7[0] ? -n3 : n3;
        })(e3);
      }], u = function(e3) {
        var t7 = s2[e3];
        return t7 && (t7.indexOf ? t7 : t7.s.concat(t7.f));
      }, d = function(e3, t7) {
        var n3, r3 = s2.meridiem;
        if (r3) {
          for (var i3 = 1; i3 <= 24; i3 += 1) if (e3.indexOf(r3(i3, 0, t7)) > -1) {
            n3 = i3 > 12;
            break;
          }
        } else n3 = e3 === (t7 ? "pm" : "PM");
        return n3;
      }, c2 = { A: [o, function(e3) {
        this.afternoon = d(e3, false);
      }], a: [o, function(e3) {
        this.afternoon = d(e3, true);
      }], Q: [n2, function(e3) {
        this.month = 3 * (e3 - 1) + 1;
      }], S: [n2, function(e3) {
        this.milliseconds = 100 * +e3;
      }], SS: [r2, function(e3) {
        this.milliseconds = 10 * +e3;
      }], SSS: [/\d{3}/, function(e3) {
        this.milliseconds = +e3;
      }], s: [i2, f("seconds")], ss: [i2, f("seconds")], m: [i2, f("minutes")], mm: [i2, f("minutes")], H: [i2, f("hours")], h: [i2, f("hours")], HH: [i2, f("hours")], hh: [i2, f("hours")], D: [i2, f("day")], DD: [r2, f("day")], Do: [o, function(e3) {
        var t7 = s2.ordinal, n3 = e3.match(/\d+/);
        if (this.day = n3[0], t7) for (var r3 = 1; r3 <= 31; r3 += 1) t7(r3).replace(/\[|\]/g, "") === e3 && (this.day = r3);
      }], w: [i2, f("week")], ww: [r2, f("week")], M: [i2, f("month")], MM: [r2, f("month")], MMM: [o, function(e3) {
        var t7 = u("months"), n3 = (u("monthsShort") || t7.map((function(e4) {
          return e4.slice(0, 3);
        }))).indexOf(e3) + 1;
        if (n3 < 1) throw new Error();
        this.month = n3 % 12 || n3;
      }], MMMM: [o, function(e3) {
        var t7 = u("months").indexOf(e3) + 1;
        if (t7 < 1) throw new Error();
        this.month = t7 % 12 || t7;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r2, function(e3) {
        this.year = a2(e3);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n3) {
        var r3, i3;
        r3 = n3, i3 = s2 && s2.formats;
        for (var o2 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t7, n4, r4) {
          var o3 = r4 && r4.toUpperCase();
          return n4 || i3[r4] || e2[r4] || i3[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e3, t8, n5) {
            return t8 || n5.slice(1);
          }));
        }))).match(t6), a3 = o2.length, f2 = 0; f2 < a3; f2 += 1) {
          var h2 = o2[f2], u2 = c2[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e3) {
          for (var t7 = {}, n4 = 0, r4 = 0; n4 < a3; n4 += 1) {
            var i4 = o2[n4];
            if ("string" == typeof i4) r4 += i4.length;
            else {
              var s3 = i4.regex, f3 = i4.parser, h3 = e3.slice(r4), u3 = s3.exec(h3)[0];
              f3.call(t7, u3), e3 = e3.replace(u3, "");
            }
          }
          return (function(e4) {
            var t8 = e4.afternoon;
            if (void 0 !== t8) {
              var n5 = e4.hours;
              t8 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
            }
          })(t7), t7;
        };
      }
      return function(e3, t7, n3) {
        n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (a2 = e3.parseTwoDigitYear);
        var r3 = t7.prototype, i3 = r3.parse;
        r3.parse = function(e4) {
          var t8 = e4.date, r4 = e4.utc, o2 = e4.args;
          this.$u = r4;
          var a3 = o2[1];
          if ("string" == typeof a3) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s2 = this.$locale(), !f2 && d2 && (s2 = n3.Ls[d2]), this.$d = (function(e5, t9, n4, r5) {
              try {
                if (["x", "X"].indexOf(t9) > -1) return new Date(("X" === t9 ? 1e3 : 1) * e5);
                var i4 = l(t9)(e5), o3 = i4.year, s3 = i4.month, a4 = i4.day, f3 = i4.hours, h3 = i4.minutes, u3 = i4.seconds, d3 = i4.milliseconds, c4 = i4.zone, m2 = i4.week, M2 = /* @__PURE__ */ new Date(), Y = a4 || (o3 || s3 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s3 || (v = s3 > 0 ? s3 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c4 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c4.offset * 1e3)) : n4 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r5(D).week(m2).toDate()), D);
              } catch (e6) {
                return /* @__PURE__ */ new Date("");
              }
            })(t8, a3, r4, n3), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t8 != this.format(a3) && (this.$d = /* @__PURE__ */ new Date("")), s2 = {};
          } else if (a3 instanceof Array) for (var c3 = a3.length, m = 1; m <= c3; m += 1) {
            o2[1] = a3[m - 1];
            var M = n3.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c3 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i3.call(this, e4);
        };
      };
    }));
  }
});

// node_modules/ipaddr.js/lib/ipaddr.js
var require_ipaddr = __commonJS({
  "node_modules/ipaddr.js/lib/ipaddr.js"(exports, module) {
    (function(root) {
      "use strict";
      const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
      const ipv4Regexes = {
        fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
        threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
        twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
        longValue: new RegExp(`^${ipv4Part}$`, "i")
      };
      const octalRegex = new RegExp(`^0[0-7]+$`, "i");
      const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
      const zoneIndex = "%[0-9a-z]{1,}";
      const ipv6Part = "(?:[0-9a-f]+::?)+";
      const ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, "i"),
        "native": new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
        deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
        transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
      };
      function expandIPv6(string, parts) {
        if (string.indexOf("::") !== string.lastIndexOf("::")) {
          return null;
        }
        let colonCount = 0;
        let lastColon = -1;
        let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
        let replacement, replacementCount;
        if (zoneId) {
          zoneId = zoneId.substring(1);
          string = string.replace(/%.+$/, "");
        }
        while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) {
          colonCount++;
        }
        if (string.substr(0, 2) === "::") {
          colonCount--;
        }
        if (string.substr(-2, 2) === "::") {
          colonCount--;
        }
        if (colonCount > parts) {
          return null;
        }
        replacementCount = parts - colonCount;
        replacement = ":";
        while (replacementCount--) {
          replacement += "0:";
        }
        string = string.replace("::", replacement);
        if (string[0] === ":") {
          string = string.slice(1);
        }
        if (string[string.length - 1] === ":") {
          string = string.slice(0, -1);
        }
        parts = (function() {
          const ref = string.split(":");
          const results = [];
          for (let i2 = 0; i2 < ref.length; i2++) {
            results.push(parseInt(ref[i2], 16));
          }
          return results;
        })();
        return {
          parts,
          zoneId
        };
      }
      function matchCIDR(first, second, partSize, cidrBits) {
        if (first.length !== second.length) {
          throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
        }
        let part = 0;
        let shift;
        while (cidrBits > 0) {
          shift = partSize - cidrBits;
          if (shift < 0) {
            shift = 0;
          }
          if (first[part] >> shift !== second[part] >> shift) {
            return false;
          }
          cidrBits -= partSize;
          part += 1;
        }
        return true;
      }
      function parseIntAuto(string) {
        if (hexRegex.test(string)) {
          return parseInt(string, 16);
        }
        if (string[0] === "0" && !isNaN(parseInt(string[1], 10))) {
          if (octalRegex.test(string)) {
            return parseInt(string, 8);
          }
          throw new Error(`ipaddr: cannot parse ${string} as octal`);
        }
        return parseInt(string, 10);
      }
      function padPart(part, length) {
        while (part.length < length) {
          part = `0${part}`;
        }
        return part;
      }
      const ipaddr = {};
      ipaddr.IPv4 = (function() {
        function IPv4(octets) {
          if (octets.length !== 4) {
            throw new Error("ipaddr: ipv4 octet count should be 4");
          }
          let i2, octet;
          for (i2 = 0; i2 < octets.length; i2++) {
            octet = octets[i2];
            if (!(0 <= octet && octet <= 255)) {
              throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
            }
          }
          this.octets = octets;
        }
        IPv4.prototype.SpecialRanges = {
          unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
          broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
          // RFC3171
          multicast: [[new IPv4([224, 0, 0, 0]), 4]],
          // RFC3927
          linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
          // RFC5735
          loopback: [[new IPv4([127, 0, 0, 0]), 8]],
          // RFC6598
          carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
          // RFC1918
          "private": [
            [new IPv4([10, 0, 0, 0]), 8],
            [new IPv4([172, 16, 0, 0]), 12],
            [new IPv4([192, 168, 0, 0]), 16]
          ],
          // Reserved and testing-only ranges; RFCs 5735, 5737, 2544, 1700
          reserved: [
            [new IPv4([192, 0, 0, 0]), 24],
            [new IPv4([192, 0, 2, 0]), 24],
            [new IPv4([192, 88, 99, 0]), 24],
            [new IPv4([198, 18, 0, 0]), 15],
            [new IPv4([198, 51, 100, 0]), 24],
            [new IPv4([203, 0, 113, 0]), 24],
            [new IPv4([240, 0, 0, 0]), 4]
          ],
          // RFC7534, RFC7535
          as112: [
            [new IPv4([192, 175, 48, 0]), 24],
            [new IPv4([192, 31, 196, 0]), 24]
          ],
          // RFC7450
          amt: [
            [new IPv4([192, 52, 193, 0]), 24]
          ]
        };
        IPv4.prototype.kind = function() {
          return "ipv4";
        };
        IPv4.prototype.match = function(other, cidrRange) {
          let ref;
          if (cidrRange === void 0) {
            ref = other;
            other = ref[0];
            cidrRange = ref[1];
          }
          if (other.kind() !== "ipv4") {
            throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
          }
          return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
          let cidr = 0;
          let stop = false;
          const zerotable = {
            0: 8,
            128: 7,
            192: 6,
            224: 5,
            240: 4,
            248: 3,
            252: 2,
            254: 1,
            255: 0
          };
          let i2, octet, zeros;
          for (i2 = 3; i2 >= 0; i2 -= 1) {
            octet = this.octets[i2];
            if (octet in zerotable) {
              zeros = zerotable[octet];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 8) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 32 - cidr;
        };
        IPv4.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv4.prototype.toByteArray = function() {
          return this.octets.slice(0);
        };
        IPv4.prototype.toIPv4MappedAddress = function() {
          return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
        };
        IPv4.prototype.toNormalizedString = function() {
          return this.toString();
        };
        IPv4.prototype.toString = function() {
          return this.octets.join(".");
        };
        return IPv4;
      })();
      ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        try {
          const cidr = this.parseCIDR(string);
          const ipInterfaceOctets = cidr[0].toByteArray();
          const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          const octets = [];
          let i2 = 0;
          while (i2 < 4) {
            octets.push(parseInt(ipInterfaceOctets[i2], 10) | parseInt(subnetMaskOctets[i2], 10) ^ 255);
            i2++;
          }
          return new this(octets);
        } catch (e2) {
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv4.isIPv4 = function(string) {
        return this.parser(string) !== null;
      };
      ipaddr.IPv4.isValid = function(string) {
        try {
          new this(this.parser(string));
          return true;
        } catch (e2) {
          return false;
        }
      };
      ipaddr.IPv4.isValidCIDR = function(string) {
        try {
          this.parseCIDR(string);
          return true;
        } catch (e2) {
          return false;
        }
      };
      ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
          return true;
        } else {
          return false;
        }
      };
      ipaddr.IPv4.isValidCIDRFourPartDecimal = function(string) {
        const match = string.match(/^(.+)\/(\d+)$/);
        if (!ipaddr.IPv4.isValidCIDR(string) || !match) {
          return false;
        }
        return ipaddr.IPv4.isValidFourPartDecimal(match[1]);
      };
      ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        let cidr, i2, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i2 = 0;
          while (i2 < 4) {
            octets.push(parseInt(ipInterfaceOctets[i2], 10) & parseInt(subnetMaskOctets[i2], 10));
            i2++;
          }
          return new this(octets);
        } catch (e2) {
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv4.parse = function(string) {
        const parts = this.parser(string);
        if (parts === null) {
          throw new Error("ipaddr: string is not formatted like an IPv4 Address");
        }
        return new this(parts);
      };
      ipaddr.IPv4.parseCIDR = function(string) {
        let match;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          const maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 32) {
            const parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
      };
      ipaddr.IPv4.parser = function(string) {
        let match, part, value;
        if (match = string.match(ipv4Regexes.fourOctet)) {
          return (function() {
            const ref = match.slice(1, 6);
            const results = [];
            for (let i2 = 0; i2 < ref.length; i2++) {
              part = ref[i2];
              results.push(parseIntAuto(part));
            }
            return results;
          })();
        } else if (match = string.match(ipv4Regexes.longValue)) {
          value = parseIntAuto(match[1]);
          if (value > 4294967295 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          return (function() {
            const results = [];
            let shift;
            for (shift = 0; shift <= 24; shift += 8) {
              results.push(value >> shift & 255);
            }
            return results;
          })().reverse();
        } else if (match = string.match(ipv4Regexes.twoOctet)) {
          return (function() {
            const ref = match.slice(1, 4);
            const results = [];
            value = parseIntAuto(ref[1]);
            if (value > 16777215 || value < 0) {
              throw new Error("ipaddr: address outside defined range");
            }
            results.push(parseIntAuto(ref[0]));
            results.push(value >> 16 & 255);
            results.push(value >> 8 & 255);
            results.push(value & 255);
            return results;
          })();
        } else if (match = string.match(ipv4Regexes.threeOctet)) {
          return (function() {
            const ref = match.slice(1, 5);
            const results = [];
            value = parseIntAuto(ref[2]);
            if (value > 65535 || value < 0) {
              throw new Error("ipaddr: address outside defined range");
            }
            results.push(parseIntAuto(ref[0]));
            results.push(parseIntAuto(ref[1]));
            results.push(value >> 8 & 255);
            results.push(value & 255);
            return results;
          })();
        } else {
          return null;
        }
      };
      ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
          throw new Error("ipaddr: invalid IPv4 prefix length");
        }
        const octets = [0, 0, 0, 0];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while (j < filledOctetCount) {
          octets[j] = 255;
          j++;
        }
        if (filledOctetCount < 4) {
          octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
      };
      ipaddr.IPv6 = (function() {
        function IPv6(parts, zoneId) {
          let i2, part;
          if (parts.length === 16) {
            this.parts = [];
            for (i2 = 0; i2 <= 14; i2 += 2) {
              this.parts.push(parts[i2] << 8 | parts[i2 + 1]);
            }
          } else if (parts.length === 8) {
            this.parts = parts;
          } else {
            throw new Error("ipaddr: ipv6 part count should be 8 or 16");
          }
          for (i2 = 0; i2 < this.parts.length; i2++) {
            part = this.parts[i2];
            if (!(0 <= part && part <= 65535)) {
              throw new Error("ipaddr: ipv6 part should fit in 16 bits");
            }
          }
          if (zoneId) {
            this.zoneId = zoneId;
          }
        }
        IPv6.prototype.SpecialRanges = {
          // RFC4291, here and after
          unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
          linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
          multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
          loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
          uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
          ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
          // RFC6666
          discard: [new IPv6([256, 0, 0, 0, 0, 0, 0, 0]), 64],
          // RFC6145
          rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
          // RFC6052
          rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
          // RFC3056
          "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
          // RFC6052, RFC6146
          teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
          // RFC5180
          benchmarking: [new IPv6([8193, 2, 0, 0, 0, 0, 0, 0]), 48],
          // RFC7450
          amt: [new IPv6([8193, 3, 0, 0, 0, 0, 0, 0]), 32],
          as112v6: [
            [new IPv6([8193, 4, 274, 0, 0, 0, 0, 0]), 48],
            [new IPv6([9760, 79, 32768, 0, 0, 0, 0, 0]), 48]
          ],
          deprecated: [new IPv6([8193, 16, 0, 0, 0, 0, 0, 0]), 28],
          orchid2: [new IPv6([8193, 32, 0, 0, 0, 0, 0, 0]), 28],
          droneRemoteIdProtocolEntityTags: [new IPv6([8193, 48, 0, 0, 0, 0, 0, 0]), 28],
          reserved: [
            // RFC3849
            [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 23],
            // RFC2928
            [new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]
          ]
        };
        IPv6.prototype.isIPv4MappedAddress = function() {
          return this.range() === "ipv4Mapped";
        };
        IPv6.prototype.kind = function() {
          return "ipv6";
        };
        IPv6.prototype.match = function(other, cidrRange) {
          let ref;
          if (cidrRange === void 0) {
            ref = other;
            other = ref[0];
            cidrRange = ref[1];
          }
          if (other.kind() !== "ipv6") {
            throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
          }
          return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
          let cidr = 0;
          let stop = false;
          const zerotable = {
            0: 16,
            32768: 15,
            49152: 14,
            57344: 13,
            61440: 12,
            63488: 11,
            64512: 10,
            65024: 9,
            65280: 8,
            65408: 7,
            65472: 6,
            65504: 5,
            65520: 4,
            65528: 3,
            65532: 2,
            65534: 1,
            65535: 0
          };
          let part, zeros;
          for (let i2 = 7; i2 >= 0; i2 -= 1) {
            part = this.parts[i2];
            if (part in zerotable) {
              zeros = zerotable[part];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 16) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 128 - cidr;
        };
        IPv6.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv6.prototype.toByteArray = function() {
          let part;
          const bytes = [];
          const ref = this.parts;
          for (let i2 = 0; i2 < ref.length; i2++) {
            part = ref[i2];
            bytes.push(part >> 8);
            bytes.push(part & 255);
          }
          return bytes;
        };
        IPv6.prototype.toFixedLengthString = function() {
          const addr = (function() {
            const results = [];
            for (let i2 = 0; i2 < this.parts.length; i2++) {
              results.push(padPart(this.parts[i2].toString(16), 4));
            }
            return results;
          }).call(this).join(":");
          let suffix = "";
          if (this.zoneId) {
            suffix = `%${this.zoneId}`;
          }
          return addr + suffix;
        };
        IPv6.prototype.toIPv4Address = function() {
          if (!this.isIPv4MappedAddress()) {
            throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
          }
          const ref = this.parts.slice(-2);
          const high = ref[0];
          const low = ref[1];
          return new ipaddr.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
        };
        IPv6.prototype.toNormalizedString = function() {
          const addr = (function() {
            const results = [];
            for (let i2 = 0; i2 < this.parts.length; i2++) {
              results.push(this.parts[i2].toString(16));
            }
            return results;
          }).call(this).join(":");
          let suffix = "";
          if (this.zoneId) {
            suffix = `%${this.zoneId}`;
          }
          return addr + suffix;
        };
        IPv6.prototype.toRFC5952String = function() {
          const regex = /((^|:)(0(:|$)){2,})/g;
          const string = this.toNormalizedString();
          let bestMatchIndex = 0;
          let bestMatchLength = -1;
          let match;
          while (match = regex.exec(string)) {
            if (match[0].length > bestMatchLength) {
              bestMatchIndex = match.index;
              bestMatchLength = match[0].length;
            }
          }
          if (bestMatchLength < 0) {
            return string;
          }
          return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
        };
        IPv6.prototype.toString = function() {
          return this.toRFC5952String();
        };
        return IPv6;
      })();
      ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
        try {
          const cidr = this.parseCIDR(string);
          const ipInterfaceOctets = cidr[0].toByteArray();
          const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          const octets = [];
          let i2 = 0;
          while (i2 < 16) {
            octets.push(parseInt(ipInterfaceOctets[i2], 10) | parseInt(subnetMaskOctets[i2], 10) ^ 255);
            i2++;
          }
          return new this(octets);
        } catch (e2) {
          throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e2})`);
        }
      };
      ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
      };
      ipaddr.IPv6.isValid = function(string) {
        if (typeof string === "string" && string.indexOf(":") === -1) {
          return false;
        }
        try {
          const addr = this.parser(string);
          new this(addr.parts, addr.zoneId);
          return true;
        } catch (e2) {
          return false;
        }
      };
      ipaddr.IPv6.isValidCIDR = function(string) {
        if (typeof string === "string" && string.indexOf(":") === -1) {
          return false;
        }
        try {
          this.parseCIDR(string);
          return true;
        } catch (e2) {
          return false;
        }
      };
      ipaddr.IPv6.networkAddressFromCIDR = function(string) {
        let cidr, i2, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i2 = 0;
          while (i2 < 16) {
            octets.push(parseInt(ipInterfaceOctets[i2], 10) & parseInt(subnetMaskOctets[i2], 10));
            i2++;
          }
          return new this(octets);
        } catch (e2) {
          throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e2})`);
        }
      };
      ipaddr.IPv6.parse = function(string) {
        const addr = this.parser(string);
        if (addr.parts === null) {
          throw new Error("ipaddr: string is not formatted like an IPv6 Address");
        }
        return new this(addr.parts, addr.zoneId);
      };
      ipaddr.IPv6.parseCIDR = function(string) {
        let maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 128) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
      };
      ipaddr.IPv6.parser = function(string) {
        let addr, i2, match, octet, octets, zoneId;
        if (match = string.match(ipv6Regexes.deprecatedTransitional)) {
          return this.parser(`::ffff:${match[1]}`);
        }
        if (ipv6Regexes.native.test(string)) {
          return expandIPv6(string, 8);
        }
        if (match = string.match(ipv6Regexes.transitional)) {
          zoneId = match[6] || "";
          addr = match[1];
          if (!match[1].endsWith("::")) {
            addr = addr.slice(0, -1);
          }
          addr = expandIPv6(addr + zoneId, 6);
          if (addr.parts) {
            octets = [
              parseInt(match[2]),
              parseInt(match[3]),
              parseInt(match[4]),
              parseInt(match[5])
            ];
            for (i2 = 0; i2 < octets.length; i2++) {
              octet = octets[i2];
              if (!(0 <= octet && octet <= 255)) {
                return null;
              }
            }
            addr.parts.push(octets[0] << 8 | octets[1]);
            addr.parts.push(octets[2] << 8 | octets[3]);
            return {
              parts: addr.parts,
              zoneId: addr.zoneId
            };
          }
        }
        return null;
      };
      ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 128) {
          throw new Error("ipaddr: invalid IPv6 prefix length");
        }
        const octets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let j = 0;
        const filledOctetCount = Math.floor(prefix / 8);
        while (j < filledOctetCount) {
          octets[j] = 255;
          j++;
        }
        if (filledOctetCount < 16) {
          octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
      };
      ipaddr.fromByteArray = function(bytes) {
        const length = bytes.length;
        if (length === 4) {
          return new ipaddr.IPv4(bytes);
        } else if (length === 16) {
          return new ipaddr.IPv6(bytes);
        } else {
          throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
        }
      };
      ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
      };
      ipaddr.isValidCIDR = function(string) {
        return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
      };
      ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
          return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
          return ipaddr.IPv4.parse(string);
        } else {
          throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
        }
      };
      ipaddr.parseCIDR = function(string) {
        try {
          return ipaddr.IPv6.parseCIDR(string);
        } catch (e2) {
          try {
            return ipaddr.IPv4.parseCIDR(string);
          } catch (e22) {
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
          }
        }
      };
      ipaddr.process = function(string) {
        const addr = this.parse(string);
        if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) {
          return addr.toIPv4Address();
        } else {
          return addr;
        }
      };
      ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        let i2, rangeName, rangeSubnets, subnet;
        if (defaultName === void 0 || defaultName === null) {
          defaultName = "unicast";
        }
        for (rangeName in rangeList) {
          if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
            rangeSubnets = rangeList[rangeName];
            if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
              rangeSubnets = [rangeSubnets];
            }
            for (i2 = 0; i2 < rangeSubnets.length; i2++) {
              subnet = rangeSubnets[i2];
              if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) {
                return rangeName;
              }
            }
          }
        }
        return defaultName;
      };
      if (typeof module !== "undefined" && module.exports) {
        module.exports = ipaddr;
      } else {
        root.ipaddr = ipaddr;
      }
    })(exports);
  }
});

// node_modules/dolphindb/common.js
function get_type_name(type) {
  return `${DdbType[type] || type}${64 <= type && type < 128 ? "[]" : ""}`;
}
function is_decimal_type(type) {
  return type === DdbType.decimal32 || type === DdbType.decimal64 || type === DdbType.decimal128;
}
function is_decimal_null_value(type, value) {
  return value === nulls.int128 && type === DdbType.decimal128 || value === nulls.int64 && type === DdbType.decimal64 || value === nulls.int32 && type === DdbType.decimal32;
}
function get_duration_unit(code) {
  let str = String.fromCharCode(code >> 24 & 255);
  str += String.fromCharCode(code >> 16 & 255);
  str += String.fromCharCode(code >> 8 & 255);
  str += String.fromCharCode(code & 255);
  return str;
}
function get_big_uint_128(dataview2, byte_offset, le = true) {
  let cursor = byte_offset + (le ? 15 : 0);
  const end = byte_offset + (le ? -1 : 16);
  const step = le ? -1 : 1;
  let value = 0n;
  while (cursor !== end) {
    value = value << 8n | BigInt(dataview2.getUint8(cursor));
    cursor += step;
  }
  return value;
}
function get_big_int_128(dataview2, byte_offset, le = true) {
  return BigInt.asIntN(128, get_big_uint_128(dataview2, byte_offset, le));
}
function set_big_uint_128(dataView, byte_offset, value, le = true) {
  let cursor = byte_offset + (le ? 0 : 15);
  const end = byte_offset + (le ? 16 : -1);
  const step = le ? 1 : -1;
  while (cursor !== end) {
    dataView.setUint8(cursor, Number(value & 0xffn));
    value = value >> 8n;
    cursor += step;
  }
}
function set_big_int_128(dataview2, byte_offset, value, le = true) {
  set_big_uint_128(dataview2, byte_offset, value, le);
}
function generate_array_type(baseType, dimensions) {
  let result = baseType;
  dimensions.forEach((dimension) => {
    result += `[${dimension}]`;
  });
  return result;
}
function date2ms(date2) {
  if (date2 === null || date2 === nulls.int32)
    return null;
  const ms = 1e3 * 3600 * 24 * date2;
  return timestamp2ms(ms);
}
function date2str(date2, format2 = "YYYY.MM.DD") {
  return date2 === null || date2 === nulls.int32 ? "null" : (0, import_dayjs.default)(date2ms(date2)).format(format2);
}
function month2str(month) {
  if (month === null || month === nulls.int32)
    return "null";
  if (month < 0)
    return String(month);
  const _month = month % 12;
  const year = Math.trunc(month / 12);
  return `${String(year).padStart(4, "0")}.${String(_month + 1).padStart(2, "0")}M`;
}
function time2ms(time2) {
  return time2 === null || time2 === nulls.int32 ? null : timestamp2ms(time2);
}
function time2str(time2, format2 = "HH:mm:ss.SSS") {
  return time2 === null || time2 === nulls.int32 ? "null" : (0, import_dayjs.default)(time2ms(time2)).format(format2);
}
function minute2ms(minute) {
  if (minute === null || minute === nulls.int32)
    return null;
  const ms = 60 * 1e3 * minute;
  return timestamp2ms(ms);
}
function minute2str(minute, format2 = "HH:mm[m]") {
  return minute === null || minute === nulls.int32 ? "null" : (0, import_dayjs.default)(minute2ms(minute)).format(format2);
}
function second2ms(second) {
  if (second === null || second === nulls.int32)
    return null;
  const ms = 1e3 * second;
  return timestamp2ms(ms);
}
function second2str(second, format2 = "HH:mm:ss") {
  return second === null || second === nulls.int32 ? "null" : (0, import_dayjs.default)(second2ms(second)).format(format2);
}
function datetime2ms(datetime) {
  if (datetime === null || datetime === nulls.int32)
    return null;
  const date2 = new Date(1e3 * datetime);
  return (/* @__PURE__ */ new Date(`${_datetime_formatter.format(date2)}.${String(date2.getUTCMilliseconds()).padStart(3, "0")}`)).valueOf();
}
function datetime2str(datetime, format2 = "YYYY.MM.DD HH:mm:ss") {
  return datetime === null || datetime === nulls.int32 ? "null" : (0, import_dayjs.default)(datetime2ms(datetime)).format(format2);
}
function timestamp2ms(timestamp) {
  if (timestamp === null || timestamp === nulls.int64)
    return null;
  const date2 = new Date(Number(timestamp));
  return (/* @__PURE__ */ new Date(`${_datetime_formatter.format(date2)}.${String(date2.getUTCMilliseconds()).padStart(3, "0")}`)).valueOf();
}
function timestamp2str(timestamp, format2 = "YYYY.MM.DD HH:mm:ss.SSS") {
  return timestamp === null || timestamp === nulls.int64 ? "null" : (0, import_dayjs.default)(timestamp2ms(timestamp)).format(format2);
}
function datehour2str(datehour, format2 = "YYYY.MM.DDTHH") {
  if (datehour === null || datehour === nulls.int32)
    return "null";
  const ms = 1e3 * 3600 * datehour;
  return (0, import_dayjs.default)(timestamp2ms(ms)).format(format2);
}
function nanotime2str(nanotime, format2 = "HH:mm:ss.SSSSSSSSS") {
  if (nanotime === null || nanotime === nulls.int64)
    return "null";
  if (nanotime < 0n)
    return String(nanotime);
  const i_second_start = format2.indexOf("ss");
  check(i_second_start !== -1, t5("\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u79D2\u7684\u683C\u5F0F (ss)"));
  const i_second_end = i_second_start + 2;
  const i_nanosecond_start = format2.indexOf("SSSSSSSSS", i_second_end);
  check(i_nanosecond_start !== -1, t5("\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u7EB3\u79D2\u7684\u683C\u5F0F (SSSSSSSSS)"));
  const ms = Number(nanotime) / 1e6;
  return (0, import_dayjs.default)(timestamp2ms(ms)).format(format2.slice(0, i_second_end)) + format2.slice(i_second_end, i_nanosecond_start) + String(nanotime % 1000000000n).padStart(9, "0");
}
function nanotimestamp2str(nanotimestamp, format2 = "YYYY.MM.DD HH:mm:ss.SSSSSSSSS") {
  if (nanotimestamp === null || nanotimestamp === nulls.int64)
    return "null";
  const i_second_start = format2.indexOf("ss");
  check(i_second_start !== -1, t5("\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u79D2\u7684\u683C\u5F0F (ss)"));
  const i_second_end = i_second_start + 2;
  const i_nanosecond_start = format2.indexOf("SSSSSSSSS", i_second_end);
  check(i_nanosecond_start !== -1, t5("\u683C\u5F0F\u4E32\u5FC5\u987B\u5305\u542B\u7EB3\u79D2\u7684\u683C\u5F0F (SSSSSSSSS)"));
  const remainder = nanotimestamp % 1000000000n;
  const borrow = remainder < 0n;
  const ms = Number((nanotimestamp - remainder + (borrow ? -1000000000n : 0n)) / 1000000n);
  return (0, import_dayjs.default)(_datetime_formatter.format(new Date(ms))).format(format2.slice(0, i_second_end)) + format2.slice(i_second_end, i_nanosecond_start) + String(borrow ? (remainder + 1000000000n) % 1000000000n : remainder).padStart(9, "0");
}
function ipaddr2str(buffer2, le = true, ipv6) {
  let buf2 = buffer2;
  if (le)
    buf2 = buffer2.slice().reverse();
  const i_non_zero = buf2.findIndex((x) => x !== 0);
  if (ipv6 || i_non_zero !== -1 && i_non_zero < 12)
    return buf2ipaddr([...buf2]).toString();
  else
    return buf2.subarray(12).join(".");
}
function uuid2str(buffer2, le = true) {
  const str = int1282str(buffer2, le);
  return `${str.slice(0, 8)}-${str.slice(8, 12)}-${str.slice(12, 16)}-${str.slice(16, 20)}-${str.slice(20)}`;
}
function int1282str(buffer2, le = true) {
  let buf2 = buffer2;
  if (le)
    buf2 = buffer2.slice().reverse();
  return [...buf2].map((x) => x.toString(16).padStart(2, "0")).join("");
}
function get_number_formatter(integer, decimals = null, grouping = true) {
  if (integer)
    decimals = null;
  if (decimals === _decimals && grouping === _grouping)
    return number_formatter;
  _decimals = decimals;
  _grouping = grouping;
  return number_formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals !== null ? decimals : 20,
    minimumFractionDigits: decimals !== null ? decimals : 0,
    useGrouping: grouping
  });
}
var import_dayjs, import_customParseFormat, import_ipaddr, buf2ipaddr, nulls, DdbForm, DdbType, number_nulls, DdbFunctionType, DdbDurationUnit, DdbChartType, DdbVoidType, dictables, ddb_tensor_bytes, ddb_time_converters, _datetime_formatter, time_formatters, dolphindb_function_definition_pattern, function_definition_patterns, funcdefs, _decimals, _grouping, number_formatter, urgent, SqlStandard;
var init_common = __esm({
  "node_modules/dolphindb/common.js"() {
    import_dayjs = __toESM(require_dayjs_min(), 1);
    import_customParseFormat = __toESM(require_customParseFormat(), 1);
    init_prototype_common();
    init_utils_common();
    import_ipaddr = __toESM(require_ipaddr(), 1);
    init_i18n2();
    import_dayjs.default.extend(import_customParseFormat.default);
    ({ fromByteArray: buf2ipaddr } = import_ipaddr.default);
    nulls = {
      int8: -128,
      // -128
      int16: -32768,
      // -32768
      int32: -2147483648,
      // -21_4748_3648
      int64: -0x8000000000000000n,
      // -922_3372_0368_5477_5808
      // -170_1411_8346_0469_2317_3168_7303_7158_8410_5728
      int128: -0x80000000000000000000000000000000n,
      float32: -34028234663852886e22,
      /** -Number.MAX_VALUE */
      double: -Number.MAX_VALUE,
      bytes16: new Uint8Array(16)
    };
    DdbForm = set_reverse({
      scalar: 0,
      vector: 1,
      pair: 2,
      matrix: 3,
      set: 4,
      dict: 5,
      table: 6,
      chart: 7,
      /** 节点内部通信可能会使用，调用函数执行脚本一般不会返回这种类型 */
      chunk: 8,
      /** sysobj */
      object: 9,
      tensor: 10,
      extobj: 11
    });
    DdbType = set_reverse({
      void: 0,
      bool: 1,
      char: 2,
      short: 3,
      int: 4,
      long: 5,
      date: 6,
      month: 7,
      time: 8,
      minute: 9,
      second: 10,
      datetime: 11,
      timestamp: 12,
      nanotime: 13,
      nanotimestamp: 14,
      float: 15,
      double: 16,
      symbol: 17,
      string: 18,
      uuid: 19,
      functiondef: 20,
      handle: 21,
      code: 22,
      datasource: 23,
      resource: 24,
      any: 25,
      compressed: 26,
      dict: 27,
      datehour: 28,
      ipaddr: 30,
      int128: 31,
      blob: 32,
      complex: 34,
      point: 35,
      duration: 36,
      decimal32: 37,
      decimal64: 38,
      decimal128: 39,
      object: 40,
      iotany: 41,
      instrument: 42,
      market_data: 43,
      symbol_extended: 145
      // 128 + DdbType.symbol
    });
    number_nulls = /* @__PURE__ */ new Map([
      [DdbType.short, nulls.int16],
      [DdbType.int, nulls.int32],
      [DdbType.long, nulls.int64],
      [DdbType.float, nulls.float32],
      [DdbType.double, nulls.double]
    ]);
    DdbFunctionType = set_reverse({
      SystemFunc: 0,
      SystemProc: 1,
      OperatorFunc: 2,
      UserDefinedFunc: 3,
      PartialFunc: 4,
      DynamicFunc: 5,
      PiecewiseFunc: 6,
      JitFunc: 7,
      JitPartialFunc: 8
    });
    DdbDurationUnit = set_reverse({
      ns: 0,
      us: 1,
      ms: 2,
      s: 3,
      m: 4,
      H: 5,
      d: 6,
      w: 7,
      M: 8,
      y: 9,
      B: 10
    });
    DdbChartType = set_reverse({
      area: 0,
      bar: 1,
      column: 2,
      histogram: 3,
      line: 4,
      pie: 5,
      scatter: 6,
      trend: 7,
      kline: 8,
      surface: 9
    });
    DdbVoidType = set_reverse({
      undefined: 0,
      null: 1,
      default: 2
    });
    dictables = /* @__PURE__ */ new Set([DdbType.any, DdbType.string, DdbType.double, DdbType.float, DdbType.int, DdbType.long]);
    ddb_tensor_bytes = {
      [DdbType.bool]: 1,
      [DdbType.char]: 1,
      [DdbType.short]: 2,
      [DdbType.int]: 4,
      [DdbType.long]: 8,
      [DdbType.float]: 4,
      [DdbType.double]: 8
    };
    ddb_time_converters = {
      [DdbType.date]: (date2) => Math.floor((date2.getTime() - 1e3 * 60 * date2.getTimezoneOffset()) / (1e3 * 3600 * 24)),
      [DdbType.datetime]: (date2) => (date2.getTime() - 1e3 * 60 * date2.getTimezoneOffset()) / 1e3,
      [DdbType.timestamp]: (date2) => BigInt(date2.getTime() - 1e3 * 60 * date2.getTimezoneOffset()),
      [DdbType.nanotimestamp]: (date2) => BigInt(date2.getTime() - 1e3 * 60 * date2.getTimezoneOffset()) * 1000000n
    };
    _datetime_formatter = new Intl.DateTimeFormat("zh-CN", { dateStyle: "short", timeStyle: "medium", timeZone: "UTC", hour12: false });
    time_formatters = /* @__PURE__ */ new Map([
      [DdbType.date, date2str],
      [DdbType.month, month2str],
      [DdbType.time, time2str],
      [DdbType.minute, minute2str],
      [DdbType.second, second2str],
      [DdbType.datetime, datetime2str],
      [DdbType.timestamp, timestamp2str],
      [DdbType.nanotime, nanotime2str],
      [DdbType.nanotimestamp, nanotimestamp2str],
      [DdbType.datehour, datehour2str]
    ]);
    dolphindb_function_definition_pattern = /\bdef (\w+) \(/;
    function_definition_patterns = {
      dolphindb: dolphindb_function_definition_pattern,
      python: dolphindb_function_definition_pattern,
      q: /(\w+): \{\[/
    };
    funcdefs = {
      invoke: {
        dolphindb: "def invoke (func, args_json) {\n    args = fromStdJson(args_json)\n    func_ = func\n    if (type(func) == STRING)\n        func_ = funcByName(func)\n    if (type(args) != ANY)\n        args = cast(args, ANY)\n    return unifiedCall(func_, args)\n}\n",
        python: "def invoke (func, args_json):\n    args = fromStdJson(args_json)\n    func_ = func\n    if type(func) == STRING:\n        func_ = funcByName(func)\n    if type(args) != ANY:\n        args = cast(args, ANY)\n    return unifiedCall(func_, args)\n",
        q: "invoke: {[fn; args_json]\n    args_: fromStdJson[args_json];\n    func_: fn;\n    if[typestr[fn] = `STRING;\n        func_: get toCharArray fn;\n        if[type[args_] <> 0] args_: cast[args_; 25]\n    ];\n    func_ . args_\n    }\n"
      },
      jsrpc: {
        dolphindb: 'def jsrpc (node, func_name, args) {\n    args_ = args\n    if (func_name == "invoke")\n        args_[0] = funcByName(args[0])\n    return rpc(node, unifiedCall, funcByName(func_name), args_)\n}\n',
        python: 'def jsrpc (node, func_name, args):\n    args_ = args\n    if func_name == "invoke":\n        args_[0] = funcByName(args[0])\n    return rpc(node, unifiedCall, funcByName(func_name), args_)\n',
        q: "jsrpc: {[node; func_name; args]\n    args_: args;\n    if[(`$func_name)=`invoke; args_[0]:funcByName[args[0]]];\n    rpc[node; unifiedCall; funcByName[func_name]; args_]\n    }\n"
      },
      pnode_run: {
        dolphindb: "def pnode_run (nodes, func_name, args, add_node_alias = true) {\n    nargs = size(args)\n    func = funcByName(func_name)\n    \n    if (!nargs)\n        return pnodeRun(func, nodes, add_node_alias)\n    \n    args_partial = array(any, 1 + nargs, 1 + nargs)\n    args_partial[0] = func\n    args_partial[1:] = args\n    return pnodeRun(\n        unifiedCall(partial, args_partial),\n        nodes,\n        add_node_alias\n    )\n}\n",
        python: "def pnode_run (nodes, func_name, args, add_node_alias):\n    nargs = size(args)\n    func = funcByName(func_name)\n    \n    if not nargs:\n        return pnodeRun(func, nodes, add_node_alias)\n    \n    args_partial = [ ]\n    args_partial.append(func)\n    for a in args:\n        args_partial.append(a)\n    \n    return pnodeRun(\n        unifiedCall(partial, args_partial),\n        nodes,\n        add_node_alias\n    )\n",
        q: "pnode_run: {[nodes; func_name; args]\n    nargs_: count args;\n    func_: get toCharArray func_name;\n    if [nargs_=0; : pnodeRun[func_; nodes; 1b]];\n    args_partial_: func,args;\n    pnodeRun[unifiedCall[partial; args_partial_]; nodes; 1b]\n    }\n"
      }
    };
    _decimals = null;
    _grouping = true;
    number_formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 20,
      minimumFractionDigits: 0,
      useGrouping: true
    });
    urgent = { urgent: true };
    SqlStandard = set_reverse({
      DolphinDB: 0,
      Oracle: 1,
      MySQL: 2
    });
  }
});

// node_modules/dolphindb/browser.js
function get_nullstr(options) {
  return options.nullstr ? options.colors ? gray_nullstr : "null" : "";
}
function format_time(type, value, options) {
  if (value === null || value === (type === DdbType.timestamp || type === DdbType.nanotime || type === DdbType.nanotimestamp ? nulls.int64 : nulls.int32))
    return get_nullstr(options);
  let str;
  try {
    str = time_formatters.get(type)(value, type === DdbType.timestamp && options.timestamp === "s" ? "YYYY.MM.DD HH:mm:ss" : void 0);
  } catch (error) {
    if (error instanceof RangeError)
      str = "Invalid Date";
    else
      throw error;
  }
  return options.colors ? magenta(str) : str;
}
function format_number(type, value, options) {
  if (value === null || value === number_nulls.get(type))
    return options.nullstr ? options.colors ? gray_nullstr : "null" : "";
  const str = get_number_formatter(type === DdbType.int || type === DdbType.long || type === DdbType.short, options.decimals, options.grouping).format(value);
  return options.colors ? green(str) : str;
}
function format(type, value, le, options = {}) {
  switch (type) {
    case DdbType.void: {
      return options.nullstr ? value === DdbVoidType.default ? options.colors ? gray("default") : "default" : options.colors ? gray_nullstr : "null" : "";
    }
    case DdbType.bool:
      if (value === null || value === nulls.int8)
        return get_nullstr(options);
      else {
        const str = String(Boolean(value));
        return options.colors ? blue(str) : str;
      }
    case DdbType.char:
      if (value === null || value === nulls.int8)
        return get_nullstr(options);
      else {
        let str = (
          // ascii printable
          // http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm
          32 <= value && value <= 126 ? String.fromCharCode(value) : "\\" + String(value)
        );
        if (options.quote)
          str = str.quote();
        return options.colors ? green(str) : str;
      }
    case DdbType.short:
    case DdbType.int:
    case DdbType.long:
    case DdbType.float:
    case DdbType.double:
      return format_number(type, value, options);
    case DdbType.date:
    case DdbType.month:
    case DdbType.time:
    case DdbType.minute:
    case DdbType.second:
    case DdbType.datetime:
    case DdbType.timestamp:
    case DdbType.nanotime:
    case DdbType.nanotimestamp:
    case DdbType.datehour:
      return format_time(type, value, options);
    case DdbType.symbol:
    case DdbType.string: {
      let str = value;
      if (options.quote)
        str = str.quote("single");
      return options.colors ? cyan(str) : str;
    }
    case DdbType.uuid: {
      const str = uuid2str(value, le);
      return options.colors ? cyan(str) : str;
    }
    case DdbType.functiondef: {
      const str = value.name.quote("single");
      return options.colors ? cyan(str) : str;
    }
    case DdbType.handle:
    case DdbType.code:
    case DdbType.datasource:
    case DdbType.resource: {
      const str = value.quote("single");
      return options.colors ? cyan(str) : str;
    }
    case DdbType.ipaddr: {
      const str = ipaddr2str(value, le);
      return options.colors ? cyan(str) : str;
    }
    case DdbType.int128: {
      const str = int1282str(value, le);
      return options.colors ? cyan(str) : str;
    }
    case DdbType.blob: {
      const str = value.length > 100 ? DdbObj.dec.decode(value.subarray(0, 98)) + "\u2026" : DdbObj.dec.decode(value);
      return options.colors ? cyan(str) : str;
    }
    case DdbType.point: {
      const [x, y] = value;
      return `(${format(DdbType.double, x, le, options)}, ${format(DdbType.double, y, le, options)})`;
    }
    case DdbType.complex: {
      const [x, y] = value;
      return `${format(DdbType.double, x, le, options)}${y >= 0 ? "+" : ""}${format(DdbType.double, y, le, options)}i`;
    }
    case DdbType.duration: {
      const { data, unit } = value;
      const str = `${data}${DdbDurationUnit[unit] ?? get_duration_unit(unit)}`;
      return options.colors ? magenta(str) : str;
    }
    case DdbType.decimal32:
    case DdbType.decimal64:
    case DdbType.decimal128: {
      const { scale, data } = value;
      if (data === null || is_decimal_null_value(type, data))
        return get_nullstr(options);
      const s2 = String(data < 0 ? -data : data).padStart(scale, "0");
      const str = (data < 0 ? "-" : "") + (scale ? `${s2.slice(0, -scale) || "0"}.${s2.slice(-scale)}` : s2);
      return options.colors ? green(str) : str;
    }
    default:
      return value === null ? get_nullstr(options) : String(value);
  }
}
function formati(obj, index, options = {}) {
  check(index < obj.rows, "index \u5E94\u8BE5 < obj.rows");
  if (obj.type < 64 || obj.type >= 128)
    switch (obj.type) {
      case DdbType.symbol_extended: {
        const { base, data } = obj.value;
        return format(DdbType.string, base[data[index]], obj.le, options);
      }
      case DdbType.void:
        return format(obj.type, obj.value, obj.le, options);
      case DdbType.uuid:
      case DdbType.int128:
      case DdbType.ipaddr:
        return format(obj.type, obj.value.subarray(16 * index, 16 * (index + 1)), obj.le, options);
      case DdbType.blob: {
        const value = obj.value[index];
        return value.length > 100 ? DdbObj.dec.decode(value.subarray(0, 98)) + "\u2026" : DdbObj.dec.decode(value);
      }
      case DdbType.complex:
      case DdbType.point:
        return format(obj.type, obj.value.subarray(2 * index, 2 * (index + 1)), obj.le, options);
      case DdbType.decimal32:
      case DdbType.decimal64:
      case DdbType.decimal128: {
        const { scale, data } = obj.value;
        const x = data[index];
        if (is_decimal_null_value(obj.type, x))
          return "";
        const s2 = String(x < 0 ? -x : x).padStart(scale, "0");
        const str = (x < 0 ? "-" : "") + (scale ? `${s2.slice(0, -scale) || "0"}.${s2.slice(-scale)}` : s2);
        return options.colors ? green(str) : str;
      }
      case DdbType.any:
        return obj.value[index].toString(options);
      default:
        return format(obj.type, obj.value[index], obj.le, options);
    }
  else {
    const type_ = obj.type - 64;
    let offset = 0;
    options = { ...options, nullstr: true, grouping: false };
    for (const { lengths, data, rows } of obj.value) {
      let acc_len = 0;
      if (offset + rows <= index) {
        offset += rows;
        continue;
      }
      for (const length of lengths) {
        if (offset < index) {
          offset++;
          acc_len += length;
          continue;
        }
        const limit = 10;
        let items = new Array(Math.min(limit, length));
        for (let i2 = 0; i2 < items.length; i2++)
          switch (type_) {
            case DdbType.decimal32:
            case DdbType.decimal64:
            case DdbType.decimal128:
              const x = data[acc_len + i2];
              if (is_decimal_null_value(type_, x))
                items[i2] = options.colors ? gray("null") : "null";
              else {
                const { scale } = obj.value;
                const s2 = String(x < 0 ? -x : x).padStart(scale, "0");
                const str = (x < 0 ? "-" : "") + (scale ? `${s2.slice(0, -scale) || "0"}.${s2.slice(-scale)}` : s2);
                items[i2] = options.colors ? green(str) : str;
              }
              break;
            case DdbType.complex:
            case DdbType.point: {
              const index2 = acc_len + i2;
              items[i2] = format(type_, data.subarray(2 * index2, 2 * (index2 + 1)), obj.le, options);
              break;
            }
            case DdbType.uuid:
            case DdbType.int128:
            case DdbType.ipaddr: {
              const index2 = acc_len + i2;
              items[i2] = format(type_, data.subarray(16 * index2, 16 * (index2 + 1)), obj.le, options);
              break;
            }
            default:
              items[i2] = format(type_, data[acc_len + i2], obj.le, options);
              break;
          }
        return (items.join(", ") + (length > limit ? ", ..." : "")).bracket("square");
      }
    }
  }
}
function convert(type, value, le, { blob = "string", char = "string", timestamp = "ms" } = {}) {
  switch (type) {
    case DdbType.void:
      return value === DdbVoidType.null ? null : void 0;
    case DdbType.char:
      return char === "string" ? value === null || value === nulls.int8 ? "" : (
        // ascii printable
        // http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm
        32 <= value && value <= 126 ? String.fromCharCode(value) : `\\${value}`
      ) : value;
    case DdbType.bool:
      return value === null || value === nulls.int8 ? null : Boolean(value);
    case DdbType.short:
      return value === null || value === nulls.int16 ? null : value;
    case DdbType.int:
      return value === null || value === nulls.int32 ? null : value;
    case DdbType.float:
      return value === null || value === nulls.float32 ? null : value;
    case DdbType.double:
      return value === null || value === nulls.double ? null : value;
    case DdbType.long:
      return value === null || value === nulls.int64 ? null : value;
    case DdbType.functiondef:
      return value.name;
    case DdbType.string:
    case DdbType.symbol:
    case DdbType.code:
    case DdbType.handle:
    case DdbType.datasource:
    case DdbType.resource:
    case DdbType.compressed:
      return value;
    case DdbType.blob:
      return blob === "string" ? decode(value) : value;
    case DdbType.complex:
    case DdbType.point: {
      const [x, y] = value;
      return [
        x === null || x === nulls.double ? null : x,
        y === null || y === nulls.double ? null : y
      ];
    }
    case DdbType.date:
    case DdbType.month:
    case DdbType.time:
    case DdbType.minute:
    case DdbType.second:
    case DdbType.datetime:
    case DdbType.datehour:
    case DdbType.timestamp:
    case DdbType.nanotime:
    case DdbType.nanotimestamp:
    case DdbType.duration:
    case DdbType.uuid:
    case DdbType.ipaddr:
    case DdbType.int128:
    // decimal 类型转换为固定位数小数的 string 不丢失精度，一般也是展示用
    case DdbType.decimal32:
    case DdbType.decimal64:
    case DdbType.decimal128:
      return format(type, value, le, { colors: false, timestamp });
    default:
      throw new Error(String(DdbType[type] || type) + t5(" \u6682\u65F6\u4E0D\u652F\u6301\u8F6C\u6362\u4E3A js \u5BF9\u8C61"));
  }
}
function converts(type, value, rows, le, options) {
  if (type < 64 || type >= 128)
    switch (type) {
      // 可以直接用下标取值再转换的类型
      case DdbType.bool:
      case DdbType.short:
      case DdbType.int:
      case DdbType.float:
      case DdbType.double:
      case DdbType.long:
      case DdbType.date:
      case DdbType.month:
      case DdbType.time:
      case DdbType.minute:
      case DdbType.second:
      case DdbType.datetime:
      case DdbType.datehour:
      case DdbType.timestamp:
      case DdbType.nanotime:
      case DdbType.nanotimestamp:
      case DdbType.duration:
      case DdbType.string:
      case DdbType.symbol:
      case DdbType.code:
      case DdbType.handle:
      case DdbType.datasource:
      case DdbType.resource:
      case DdbType.functiondef:
      case DdbType.blob:
      case DdbType.compressed:
        return Array.prototype.map.call(value, (x) => convert(type, x, le, options));
      case DdbType.char:
        if (options?.chars === "binary")
          return value;
        else
          return Array.prototype.map.call(value, (x) => convert(type, x, le, options));
      case DdbType.void:
        return [];
      case DdbType.symbol_extended: {
        const { base, data } = value;
        return Array.prototype.map.call(data, (x) => base[x]);
      }
      case DdbType.complex:
      case DdbType.point:
        return seq(rows, (i2) => {
          const x = value[2 * i2];
          const y = value[2 * i2 + 1];
          return [x === nulls.double ? null : x, y === nulls.double ? null : y];
        });
      case DdbType.uuid:
      case DdbType.ipaddr:
      case DdbType.int128:
        return seq(rows, (i2) => convert(type, value.subarray(16 * i2, 16 * (i2 + 1)), le, options));
      case DdbType.decimal32:
      case DdbType.decimal64:
      case DdbType.decimal128: {
        const { scale, data } = value;
        return Array.prototype.map.call(data, (x) => {
          if (is_decimal_null_value(type, x))
            return "";
          const s2 = String(x < 0 ? -x : x).padStart(scale, "0");
          return (x < 0 ? "-" : "") + (scale ? `${s2.slice(0, -scale) || "0"}.${s2.slice(-scale)}` : s2);
        });
      }
      case DdbType.any:
        return value.map((x) => x.data(options));
      case DdbType.iotany:
        return value;
      default:
        throw new Error(String(DdbType[type] || type) + "[]" + t5(" \u6682\u65F6\u4E0D\u652F\u6301\u8F6C\u6362\u4E3A js \u5BF9\u8C61"));
    }
  else {
    const type_ = type - 64;
    return value.map(({ lengths, data, rows: rows2 }) => {
      let acc_len = 0;
      return Array.prototype.map.call(lengths, (length) => {
        switch (type_) {
          case DdbType.decimal32:
          case DdbType.decimal64:
          case DdbType.decimal128:
            return converts(type_, { scale: value.scale, data: data.subarray(acc_len, acc_len += length) }, length, le, options);
          case DdbType.complex:
          case DdbType.point:
            return converts(type_, data.subarray(acc_len, acc_len += 2 * length), length, le, options);
          case DdbType.uuid:
          case DdbType.int128:
          case DdbType.ipaddr:
            return converts(type_, data.subarray(acc_len, acc_len += 16 * length), length, le, options);
          default:
            return converts(type_, data.subarray(acc_len, acc_len += length), length, le, options);
        }
      });
    }).flat();
  }
}
var DdbObj, gray_nullstr, DdbVoid, DdbBool, DdbInt, DdbString, DdbVectorString, DdbVectorAny, DdbDict, winsize, DdbConnectionError, DdbDatabaseError, DDB, has_shared_array_buffer, BigInt128Array;
var init_browser2 = __esm({
  "node_modules/dolphindb/browser.js"() {
    init_prototype_browser();
    init_chalk_browser();
    init_utils_browser();
    init_net_browser();
    init_i18n2();
    init_common();
    init_common();
    DdbObj = class _DdbObj {
      static dec = new TextDecoder("utf-8");
      static enc = new TextEncoder();
      /** 维护已解析的 symbol base，比如流数据中后续的 symbol 向量可能只发送一个 base.id, base.size == 0, 依赖之前发送的 symbol base ？
          只是暂存，如果一张表有多个 symbol 列，可能这个 symbol base 会被复用，不同的对象之间 symbol base 一般不复用
      */
      static symbol_bases = {};
      /** little endian (client) */
      static le_client = Boolean(new Uint8Array(Uint32Array.of(1).buffer)[0]);
      /** 是否为小端 (little endian) */
      le = _DdbObj.le_client;
      /** 数据形式 https://www.dolphindb.cn/cn/help/DataTypesandStructures/DataForms/index.html */
      form;
      /** 数据类型 https://www.dolphindb.cn/cn/help/DataTypesandStructures/DataTypes/index.html */
      type;
      /** 占用 parse 时传入的 buf 的长度 */
      length;
      /** table name / column name */
      name;
      /** 最低维、第 1 维
          - vector: rows = n, cols = 1
          - pair:   rows = 2, cols = 1
          - matrix: rows = n, cols = m
          - set:    同 vector
          - dict:   包含 keys, values 向量
          - table:  同 matrix */
      rows;
      /** 第 2 维 */
      cols;
      /** 实际数据。不同的 DdbForm, DdbType 使用 DdbValue 中不同的类型来表示实际数据
          The actual data. Different DdbForm, DdbType use different types in DdbValue to represent actual data */
      value;
      /** 原始二进制数据，仅在 parse_object 为 false 时通过 parse_message 生成的顶层对象有这个属性 */
      buffer;
      constructor(data) {
        Object.assign(this, data);
      }
      static parse(buf2, le) {
        if (!buf2.length)
          return new this({
            le,
            form: DdbForm.scalar,
            type: DdbType.void,
            length: 0,
            value: null
          });
        const type = buf2[0];
        const form = buf2[1];
        if (buf2.length <= 2)
          return new this({
            le,
            form,
            type,
            length: 2,
            value: null
          });
        const i_data = form === DdbForm.set ? 4 : 2;
        const buf_data = buf2.subarray(i_data);
        switch (form) {
          case DdbForm.scalar: {
            const [length, value] = this.parse_scalar(buf_data, le, type);
            return new this({
              le,
              form,
              type,
              length: i_data + length,
              value
            });
          }
          case DdbForm.vector:
          case DdbForm.pair:
          case DdbForm.set: {
            let vector = this.parse_vector(buf_data, le, type);
            vector.length += i_data;
            vector.form = form;
            return vector;
          }
          case DdbForm.table: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset + i_data);
            const rows = dv2.getUint32(0, le);
            const cols = dv2.getUint32(4, le);
            const i_name_tail = buf_data.indexOf(0, 8);
            const name = this.dec.decode(buf_data.subarray(8, i_name_tail));
            const i_items_start = i_name_tail + 1;
            const [len_items, colnames] = this.parse_vector_items(buf_data.subarray(i_items_start), le, DdbType.string, cols);
            let value = new Array(cols);
            let i_start = i_items_start + len_items;
            for (let i2 = 0; i2 < cols; i2++) {
              const type2 = buf_data[i_start];
              if (type2 === DdbType.compressed)
                throw new Error(t5("{{form}}<{{type}}> \u6682\u65F6\u4E0D\u652F\u6301\u89E3\u6790", { form: "table", type: "compress" }));
              let col = this.parse_vector(buf_data.subarray(i_start + 2), le, type2);
              col.length += 2;
              col.name = colnames[i2];
              value[i2] = col;
              i_start += col.length;
            }
            return new this({
              le,
              form,
              type,
              length: i_data + i_start,
              name,
              rows,
              cols,
              value
            });
          }
          case DdbForm.dict:
          case DdbForm.chart: {
            let keys = this.parse_vector(buf_data.subarray(2), le, buf_data[0]);
            keys.length += 2;
            let values = this.parse_vector(buf_data.subarray(keys.length + 2), le, buf_data[keys.length]);
            values.length += 2;
            let dict = new this({
              le,
              form: DdbForm.dict,
              type,
              length: i_data + keys.length + values.length,
              rows: keys.rows,
              cols: 2,
              value: [
                keys,
                values
              ]
            });
            if (form === DdbForm.dict)
              return dict;
            else {
              const { chartType: type2, stacking, binStart: bin_start, binEnd: bin_end, binCount: bin_count, title: titles, extras, data, ...others } = dict.to_dict();
              const [chart, x_axis, y_axis, z_axis] = titles.value;
              dict.form = DdbForm.chart;
              dict.value = {
                type: type2.value,
                stacking: stacking.value,
                titles: {
                  chart,
                  x_axis,
                  y_axis,
                  z_axis
                },
                ...bin_start ? { bin_start, bin_end } : {},
                ...bin_count ? { bin_count } : {},
                ...extras ? (() => {
                  const { multiYAxes: multi_y_axes = false, ...extras_others } = extras.to_dict({ strip: true });
                  return {
                    extras: {
                      multi_y_axes,
                      ...extras_others
                    }
                  };
                })() : {},
                data,
                ...others
              };
              return dict;
            }
          }
          case DdbForm.matrix: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset + i_data);
            const label_flags = buf_data[0];
            const has_row_labels = Boolean(label_flags & 1);
            const has_col_labels = Boolean(label_flags & 2);
            let row_labels = null;
            let col_labels = null;
            let offset = 1;
            if (has_row_labels) {
              row_labels = this.parse_vector(buf_data.subarray(offset + 2), le, buf_data[offset]);
              row_labels.length += 2;
              offset += row_labels.length;
            }
            if (has_col_labels) {
              col_labels = this.parse_vector(buf_data.subarray(offset + 2), le, buf_data[offset]);
              col_labels.length += 2;
              offset += col_labels.length;
            }
            assert(buf_data[offset] === type, "matrix.datatype === matrix.type");
            const rows = dv2.getUint32(offset + 2, le);
            const cols = dv2.getUint32(offset + 6, le);
            const [len_items, data] = this.parse_vector_items(
              buf_data.subarray(offset + 10),
              le,
              type,
              rows * cols
              // 假设小于 2**32
            );
            offset += 10 + len_items;
            return new this({
              le,
              form,
              type,
              length: i_data + offset,
              rows,
              cols,
              value: {
                rows: row_labels,
                cols: col_labels,
                data
              }
            });
          }
          case DdbForm.tensor: {
            const tensorType = buf2[2];
            const deviceType = buf2[3];
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const tensorFlags = dv2.getUint32(4, le);
            const dimensions = dv2.getInt32(8, le);
            const shapes = [];
            const strides = [];
            const shapeStart = 12;
            const stridesStart = shapeStart + dimensions * 8;
            const preserveValueStart = stridesStart + dimensions * 8;
            const preserveValue = dv2.getBigInt64(preserveValueStart, le);
            const storageStart = preserveValueStart + 8;
            const elemCount = dv2.getBigInt64(storageStart, le);
            const dataStart = storageStart + 8;
            for (let d = 0; d < dimensions; d++) {
              const getNumOffset = d * 8;
              shapes.push(Number(dv2.getBigInt64(shapeStart + getNumOffset, le)));
              strides.push(Number(dv2.getBigInt64(stridesStart + getNumOffset, le)));
            }
            const dataBuffer = buf2.subarray(dataStart);
            return new this({
              le,
              form,
              type,
              length: i_data + buf_data.length,
              value: {
                data_type: type,
                tensor_type: tensorType,
                device_type: deviceType,
                tensor_flags: tensorFlags,
                dimensions,
                shape: shapes,
                strides,
                preserve_value: preserveValue,
                elem_count: Number(elemCount),
                data: dataBuffer
              }
            });
          }
          case DdbForm.extobj: {
            const dv2 = new DataView(buf_data.buffer, buf_data.byteOffset, buf_data.byteLength);
            const version_and_size = dv2.getUint32(4, le);
            const length = version_and_size & 16777215;
            return new this({
              le,
              form,
              type,
              // 低 24 位为 size
              length: i_data + 8 + length,
              value: {
                type: buf_data.subarray(0, 4),
                version: version_and_size >>> 24 & 255,
                data: buf_data.subarray(8, 8 + length)
              }
            });
          }
          default:
            return new this({
              le,
              form,
              type,
              length: i_data + buf_data.length,
              value: buf_data
            });
        }
      }
      static parse_scalar(buf2, le, type) {
        switch (type) {
          case DdbType.bool: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getInt8(0);
            return [1, value === nulls.int8 ? null : Boolean(value)];
          }
          case DdbType.void:
          case DdbType.char: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getInt8(0);
            return [1, value === nulls.int8 ? null : value];
          }
          case DdbType.short: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getInt16(0, le);
            return [2, value === nulls.int16 ? null : value];
          }
          case DdbType.int:
          // datetime
          case DdbType.date:
          case DdbType.month:
          case DdbType.time:
          case DdbType.minute:
          case DdbType.second:
          case DdbType.datetime:
          case DdbType.datehour: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getInt32(0, le);
            return [4, value === nulls.int32 ? null : value];
          }
          case DdbType.float: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getFloat32(0, le);
            return [4, value === nulls.float32 ? null : value];
          }
          case DdbType.double: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getFloat64(0, le);
            return [8, value === nulls.double ? null : value];
          }
          case DdbType.long:
          // timestamp
          case DdbType.timestamp:
          case DdbType.nanotime:
          case DdbType.nanotimestamp: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const value = dv2.getBigInt64(0, le);
            return [8, value === nulls.int64 ? null : value];
          }
          case DdbType.string:
          case DdbType.symbol:
          case DdbType.code:
          case DdbType.handle:
          // sqlDS 函数会返回包含 datasource 的 any vector
          case DdbType.datasource:
          case DdbType.functiondef:
          // mysql 插件 connect 方法会返回 resource 类型的对象
          case DdbType.resource: {
            const i_head = type === DdbType.functiondef ? 1 : 0;
            let i_zero = buf2.indexOf(0, i_head);
            let i_end;
            if (i_zero === -1)
              i_end = i_zero = buf2.length;
            else
              i_end = i_zero + 1;
            const str = this.dec.decode(buf2.subarray(i_head, i_zero));
            return [
              i_end,
              type === DdbType.functiondef ? {
                type: buf2[0],
                name: str
              } : str
            ];
          }
          case DdbType.uuid:
          case DdbType.ipaddr:
          case DdbType.int128:
            return [16, buf2.slice(0, 16)];
          case DdbType.blob: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const length = dv2.getUint32(0, le);
            return [4 + length, buf2.slice(4, 4 + length)];
          }
          case DdbType.complex:
          case DdbType.point: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            return [16, [dv2.getFloat64(0, le), dv2.getFloat64(8, le)]];
          }
          case DdbType.duration: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            return [8, { unit: dv2.getUint32(4, le), data: dv2.getInt32(0, le) }];
          }
          case DdbType.decimal32: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const data = dv2.getInt32(4, le);
            return [8, { scale: dv2.getInt32(0, le), data: data === nulls.int32 ? null : data }];
          }
          case DdbType.decimal64: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const data = dv2.getBigInt64(4, le);
            return [12, { scale: dv2.getInt32(0, le), data: data === nulls.int64 ? null : data }];
          }
          case DdbType.decimal128: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const data = get_big_int_128(dv2, 4, le);
            return [20, { scale: dv2.getInt32(0, le), data: data === nulls.int128 ? null : data }];
          }
          default:
            throw new Error(String(DdbType[type] || type) + t5(" \u6682\u65F6\u4E0D\u652F\u6301\u89E3\u6790"));
        }
      }
      /** parse: rows, cols, items
          返回的 ddbobj.length 不包括 vector 的 type 和 form */
      static parse_vector(buf2, le, type) {
        const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
        const rows = dv2.getUint32(0, le);
        let i_items_start = 8;
        if (type < 64 || type >= 128) {
          const [len_items, value] = this.parse_vector_items(buf2.subarray(i_items_start), le, type, rows);
          return new this({
            le,
            form: DdbForm.vector,
            type,
            length: i_items_start + len_items,
            cols: 1,
            rows: type === DdbType.iotany ? value.length : rows,
            value,
            ...type === DdbType.iotany ? { buffer: buf2 } : {}
          });
        } else {
          const type_ = type - 64;
          const cols = dv2.getUint32(4, le);
          let blocks = [];
          if (is_decimal_type(type_)) {
            blocks.scale = dv2.getInt32(i_items_start, le);
            i_items_start += 4;
          }
          let i_block_start = i_items_start;
          for (let i_row = 0; i_row < rows; ) {
            const rows2 = dv2.getUint16(i_block_start, le);
            const unit = dv2.getUint8(i_block_start + 2);
            let lengths;
            const i_lengths_start = i_block_start + 4;
            const i_data_start = i_lengths_start + rows2 * unit;
            const lengths_buf = buf2.slice(i_lengths_start, i_data_start);
            switch (unit) {
              case 1:
                lengths = lengths_buf;
                break;
              case 2:
                lengths = new Uint16Array(lengths_buf.buffer);
                break;
              case 4:
                lengths = new Uint32Array(lengths_buf.buffer);
                break;
              default:
                throw new Error(t5("array vector \u5B58\u5728\u975E\u6CD5 unit: {{unit}}", { unit }));
            }
            let total_length = 0;
            for (const x of lengths)
              total_length += x;
            let len_items;
            let data;
            switch (type_) {
              case DdbType.decimal32:
                len_items = total_length * 4;
                data = new Int32Array(buf2.buffer.slice(buf2.byteOffset + i_data_start, buf2.byteOffset + i_data_start + len_items));
                break;
              case DdbType.decimal64:
                len_items = total_length * 8;
                data = new BigInt64Array(buf2.buffer.slice(buf2.byteOffset + i_data_start, buf2.byteOffset + i_data_start + len_items));
                break;
              case DdbType.decimal128:
                len_items = total_length * 16;
                data = new BigInt128Array(buf2.buffer.slice(buf2.byteOffset + i_data_start, buf2.byteOffset + i_data_start + len_items));
                break;
              default:
                [len_items, data] = this.parse_vector_items(buf2.subarray(i_data_start), le, type - 64, total_length);
            }
            blocks.push({
              unit,
              rows: rows2,
              lengths,
              data
            });
            i_block_start = i_data_start + len_items;
            i_row += rows2;
          }
          return new this({
            le,
            form: DdbForm.vector,
            type,
            length: i_block_start,
            cols,
            rows,
            value: blocks
          });
        }
      }
      /** 有可能没有字节对齐，不能直接使用原有 message 的 arraybuffer, 统一复制出来，让原有 arraybuffer 被回收掉比较好 */
      static parse_vector_items(buf2, le, type, length) {
        switch (type) {
          case DdbType.void:
            return [0, null];
          case DdbType.bool:
          case DdbType.char:
            return [
              length,
              new Int8Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + length))
            ];
          case DdbType.short:
            return [
              2 * length,
              new Int16Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 2 * length))
            ];
          case DdbType.int:
          // datetime
          case DdbType.date:
          case DdbType.month:
          case DdbType.time:
          case DdbType.minute:
          case DdbType.second:
          case DdbType.datetime:
          case DdbType.datehour:
            return [
              4 * length,
              new Int32Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 4 * length))
            ];
          case DdbType.float:
            return [
              4 * length,
              new Float32Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 4 * length))
            ];
          case DdbType.double:
            return [
              8 * length,
              new Float64Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 8 * length))
            ];
          case DdbType.long:
          // timestamp
          case DdbType.timestamp:
          case DdbType.nanotime:
          case DdbType.nanotimestamp:
            return [
              8 * length,
              new BigInt64Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 8 * length))
            ];
          case DdbType.string:
          case DdbType.symbol:
          case DdbType.handle:
          case DdbType.datasource:
          case DdbType.code: {
            let value = new Array(length);
            let i_head = 0, i_tail = i_head;
            for (let i2 = 0; i2 < length; i2++) {
              i_tail = buf2.indexOf(0, i_head);
              value[i2] = this.dec.decode(buf2.subarray(i_head, i_tail));
              i_head = i_tail + 1;
            }
            return [i_head, value];
          }
          case DdbType.symbol_extended: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            const base_id = dv2.getUint32(0, le);
            const base_size = dv2.getUint32(4, le);
            let base_length = 0;
            let base = this.symbol_bases[base_id];
            if (base_size) {
              [base_length, base] = this.parse_vector_items(buf2.subarray(8), le, DdbType.string, base_size);
              this.symbol_bases[base_id] = base;
            }
            const value_start = 8 + base_length;
            const value_end = value_start + length * 4;
            const data = new Uint32Array(buf2.buffer.slice(buf2.byteOffset + value_start, buf2.byteOffset + value_end));
            return [
              value_end,
              {
                base_id,
                base,
                data
              }
            ];
          }
          case DdbType.uuid:
          case DdbType.ipaddr:
          case DdbType.int128:
            return [
              16 * length,
              new Uint8Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 16 * length))
            ];
          case DdbType.blob: {
            let value = new Array(length);
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            let i_head = 0;
            for (let i2 = 0; i2 < length; i2++) {
              const sublen = dv2.getUint32(i_head, le);
              const i_blob_head = i_head + 4;
              const i_blob_tail = i_blob_head + sublen;
              value[i2] = buf2.slice(i_blob_head, i_blob_tail);
              i_head = i_blob_tail;
            }
            return [i_head, value];
          }
          case DdbType.complex:
          case DdbType.point:
            return [
              16 * length,
              new Float64Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + 16 * length))
            ];
          case DdbType.any: {
            let values = new Array(length);
            let i_head = 0;
            for (let i2 = 0; i2 < length; i2++) {
              const obj = this.parse(buf2.subarray(i_head), le);
              values[i2] = obj;
              i_head += obj.length;
            }
            return [
              i_head,
              values
            ];
          }
          case DdbType.iotany: {
            const [len, anys] = this.parse_vector_items(buf2, le, DdbType.any, length);
            const metas = anys[0].data();
            assert(metas.length >= 2, t5("iotany \u7684 meta vector \u957F\u5EA6\u81F3\u5C11\u4E3A 2"));
            const size = metas[0];
            let sub_vecs = /* @__PURE__ */ new Map();
            for (let i2 = 1; i2 < length; i2++) {
              const sub_vector = anys[i2];
              const sub_type = sub_vector.type;
              sub_vecs.set(sub_type, sub_vector.data());
            }
            return [
              len,
              seq(size, (i2) => {
                const type2 = metas[i2 + size + 2];
                return type2 === DdbType.void ? null : sub_vecs.get(type2)[metas[i2 + 2]];
              })
            ];
          }
          // 25 01 type = decimal32, form = vector
          // 02 00 00 00 01 00 00 00
          // 00 00 00 00 scale = 0
          // 01 00 00 00 data[0] = 1
          // 3a 01 00 00 data[1] = 0x013a = 314
          case DdbType.decimal32: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            return [
              4 + 4 * length,
              {
                scale: dv2.getInt32(0, le),
                data: new Int32Array(buf2.buffer.slice(buf2.byteOffset + 4, buf2.byteOffset + 4 + 4 * length))
              }
            ];
          }
          case DdbType.decimal64: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            return [
              4 + 8 * length,
              {
                scale: dv2.getInt32(0, le),
                data: new BigInt64Array(buf2.buffer.slice(buf2.byteOffset + 4, buf2.byteOffset + 4 + 8 * length))
              }
            ];
          }
          case DdbType.decimal128: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            return [
              4 + 16 * length,
              {
                scale: dv2.getInt32(0, le),
                data: new BigInt128Array(buf2.buffer.slice(buf2.byteOffset + 4, buf2.byteOffset + 4 + 16 * length))
              }
            ];
          }
          // 以下情况时, DdbType.duration 实际会返回一个 any vector
          // [2y, 1M, 3d, 7H, 11m, 12s, 15ms, 16us, 17ns]
          // <Buffer 19 01 type = any, form = vector
          // 09 00 00 00 01 00 00 00 rows = 9, cols = 1
          // 24 00 type = DdbType.duration, form = scalar
          // 02 00 00 00 09 00 00 00 
          // 24 00 01 00 00 00 08 00 00 00 24 00 03 00 00 00 06 00 00 00 24 00 07 00 00 00 05 00 00 00 ... 50 more bytes>
          // 其余情况 (目前仅 pair) 下, 会返回特殊的 duration 序列化
          // 4 bytes data 4 bytes unit
          // 01 00 00 00 data: 1 
          // 01 00 00 00 unit: 1
          // 02 00 00 00 data: 2
          // 02 00 00 00 unit: 2
          case DdbType.duration: {
            const dv2 = new DataView(buf2.buffer, buf2.byteOffset);
            let durations = [];
            for (let i2 = 0; i2 < length; i2++)
              durations.push({
                data: dv2.getInt32(0 + 8 * i2, le),
                unit: dv2.getInt32(4 + 8 * i2, le)
              });
            return [8 * length, durations];
          }
          case DdbType.compressed:
            return [
              length,
              new Uint8Array(buf2.buffer.slice(buf2.byteOffset, buf2.byteOffset + length))
            ];
          default:
            throw new Error(t5("{{form}}<{{type}}> \u6682\u65F6\u4E0D\u652F\u6301\u89E3\u6790", { form: "vector", type: get_type_name(type) }));
        }
      }
      pack() {
        const { form, type, value } = this;
        let header = new Uint8Array(2);
        header[0] = type;
        header[1] = form;
        const body = (() => {
          switch (form) {
            case DdbForm.scalar:
              switch (type) {
                case DdbType.void:
                  return [Uint8Array.of(Number(value))];
                case DdbType.bool:
                  return [
                    Int8Array.of(value === null ? nulls.int8 : Number(value))
                  ];
                case DdbType.char:
                  return [
                    Int8Array.of(value === null ? nulls.int8 : value)
                  ];
                case DdbType.short:
                  return [
                    Int16Array.of(value === null ? nulls.int16 : value)
                  ];
                case DdbType.int:
                // datetime
                case DdbType.date:
                case DdbType.month:
                case DdbType.time:
                case DdbType.minute:
                case DdbType.second:
                case DdbType.datetime:
                case DdbType.datehour:
                  return [
                    Int32Array.of(value === null ? nulls.int32 : value)
                  ];
                case DdbType.float:
                  return [
                    Float32Array.of(value === null ? nulls.float32 : value)
                  ];
                case DdbType.double:
                  return [
                    Float64Array.of(value === null ? nulls.double : value)
                  ];
                case DdbType.long:
                // timestamp
                case DdbType.timestamp:
                case DdbType.nanotime:
                case DdbType.nanotimestamp:
                  return [
                    BigInt64Array.of(value === null ? nulls.int64 : value)
                  ];
                case DdbType.string:
                case DdbType.symbol:
                case DdbType.code:
                case DdbType.handle:
                case DdbType.datasource:
                case DdbType.resource:
                  check(!value.includes("\0"), t5("pack \u65F6\u5B57\u7B26\u4E32\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0, \u5426\u5219\u4E0A\u4F20\u7ED9 DolphinDB \u4F1A\u5BFC\u81F4\u8FDE\u63A5\u65AD\u5F00"));
                  return [
                    _DdbObj.enc.encode(value),
                    Uint8Array.of(0)
                  ];
                case DdbType.functiondef:
                  return [
                    Uint8Array.of(value.type),
                    _DdbObj.enc.encode(value.name),
                    Uint8Array.of(0)
                  ];
                case DdbType.uuid:
                case DdbType.ipaddr:
                case DdbType.int128:
                  return [this.value];
                case DdbType.blob:
                  return [Uint32Array.of(this.value.byteLength), this.value];
                case DdbType.complex:
                case DdbType.point:
                  return [Float64Array.from(this.value)];
                case DdbType.duration: {
                  const { unit, data } = this.value;
                  return [Int32Array.of(data, unit)];
                }
                case DdbType.decimal32: {
                  const { scale, data } = this.value;
                  return [Int32Array.of(scale, data === null ? nulls.int32 : data)];
                }
                case DdbType.decimal64: {
                  const { scale, data } = this.value;
                  return [Int32Array.of(scale), BigInt64Array.of(data === null ? nulls.int64 : data)];
                }
                case DdbType.decimal128: {
                  const { scale, data } = value;
                  return [Int32Array.of(scale), BigInt128Array.of(data === null ? nulls.int128 : data)];
                }
                default:
                  throw new Error(String(DdbType[type] || type) + t5(" \u6682\u65F6\u4E0D\u652F\u6301\u5E8F\u5217\u5316"));
              }
            case DdbForm.vector:
            case DdbForm.pair:
              if (form === DdbForm.vector && 64 <= type && type < 128)
                return [
                  Uint32Array.of(this.rows, this.cols),
                  ...is_decimal_type(type - 64) ? [Int32Array.of(this.value.scale)] : [],
                  ...this.value.map((block) => [
                    Uint16Array.of(block.rows),
                    Uint8Array.of(block.unit, 0),
                    block.lengths,
                    block.data
                  ]).flat()
                ];
              if (form === DdbForm.vector && type === DdbType.iotany)
                return [this.buffer];
              return [
                Uint32Array.of(this.rows, 1),
                ..._DdbObj.pack_vector_body(value, type, this.rows)
              ];
            case DdbForm.set:
              return [new _DdbObj({ ...this, form: DdbForm.vector }).pack()];
            case DdbForm.table:
              return [
                Uint32Array.of(this.rows, this.cols),
                _DdbObj.enc.encode(this.name || ""),
                // column names
                Uint8Array.of(0),
                ..._DdbObj.pack_vector_body(this.value.map((col, i2) => col.name || `col${i2}`), DdbType.string, this.cols),
                // column vectors
                ...this.value.map((col) => col.pack())
              ];
            case DdbForm.dict:
              return [value[0].pack(), value[1].pack()];
            case DdbForm.chart: {
              const { type: type2, stacking, bin_start, bin_end, bin_count, titles: { chart, x_axis, y_axis, z_axis }, extras, data } = this.value;
              const { value: [keys, values] } = new DdbDict({
                chartType: new DdbInt(type2),
                stacking,
                ...bin_start ? { binStart: bin_start, binEnd: bin_end } : {},
                ...bin_count ? { binCount: bin_count } : {},
                title: new DdbVectorString([chart, x_axis, y_axis, z_axis]),
                ...extras ? (() => {
                  const { multi_y_axes, ...extras_other } = extras;
                  return { extras: new DdbDict({ multiYAxes: multi_y_axes, ...extras_other }) };
                })() : {},
                data
              });
              return [keys.pack(), values.pack()];
            }
            case DdbForm.matrix: {
              const { rows, cols, data } = value;
              return [
                Uint8Array.of((rows ? 1 : 0) | (cols ? 2 : 0)),
                ...rows ? [rows.pack()] : [],
                ...cols ? [cols.pack()] : [],
                Uint8Array.of(this.type, this.form),
                Uint32Array.of(this.rows, this.cols),
                ..._DdbObj.pack_vector_body(data, this.type, this.rows * this.cols)
              ];
            }
            case DdbForm.tensor: {
              const { le, value: value2 } = this;
              const { tensor_type, device_type, tensor_flags, dimensions, shape, strides, preserve_value, elem_count, data } = value2;
              const totalLength = 10 + dimensions * 8 * 2 + 8 + 8 + data.length;
              const buffer2 = new ArrayBuffer(totalLength);
              const dv2 = new DataView(buffer2);
              const uint8Array = new Uint8Array(buffer2);
              uint8Array[0] = tensor_type;
              uint8Array[1] = device_type;
              dv2.setUint32(2, tensor_flags, le);
              dv2.setInt32(6, dimensions, le);
              const shapeStart = 10;
              const stridesStart = shapeStart + dimensions * 8;
              for (let d = 0; d < dimensions; d++) {
                dv2.setBigInt64(shapeStart + d * 8, BigInt(shape[d]), le);
                dv2.setBigInt64(stridesStart + d * 8, BigInt(strides[d]), le);
              }
              const preserveValueStart = stridesStart + dimensions * 8;
              dv2.setBigInt64(preserveValueStart, preserve_value, le);
              const storageStart = preserveValueStart + 8;
              dv2.setBigInt64(storageStart, BigInt(elem_count), le);
              const dataStart = storageStart + 8;
              uint8Array.set(data, dataStart);
              return [uint8Array];
            }
            case DdbForm.extobj: {
              const { data, type: exttype, version } = value;
              let version_and_size = new Uint8Array(4);
              version_and_size.dataview.setUint32(0, version << 24 | data.length, this.le);
              return [exttype, version_and_size, data];
            }
            default:
              throw new Error(t5("{{form}} \u6682\u4E0D\u652F\u6301\u5E8F\u5217\u5316", { form: DdbForm[form] || `form ${form}` }));
          }
        })();
        if (!body)
          return new Uint8Array(0);
        return concat([header, ...body]);
      }
      static pack_vector_body(value, type, length) {
        switch (type) {
          case DdbType.void:
            return [];
          case DdbType.bool:
          case DdbType.char:
            return [value];
          case DdbType.short:
            return [value];
          case DdbType.int:
          // datetime
          case DdbType.date:
          case DdbType.month:
          case DdbType.time:
          case DdbType.minute:
          case DdbType.second:
          case DdbType.datetime:
          case DdbType.datehour:
            return [value];
          case DdbType.float:
            return [value];
          case DdbType.double:
            return [value];
          case DdbType.long:
          // timestamp
          case DdbType.timestamp:
          case DdbType.nanotime:
          case DdbType.nanotimestamp:
            return [value];
          case DdbType.string:
          case DdbType.symbol:
          case DdbType.handle:
          case DdbType.datasource:
          case DdbType.code: {
            let bufs = new Array(length * 2);
            for (let i2 = 0; i2 < length; i2++) {
              const s2 = value[i2];
              check(!s2.includes("\0"), t5("pack \u65F6\u5B57\u7B26\u4E32\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0, \u5426\u5219\u4E0A\u4F20\u7ED9 DolphinDB \u4F1A\u5BFC\u81F4\u8FDE\u63A5\u65AD\u5F00"));
              bufs[2 * i2] = this.enc.encode(s2);
              bufs[2 * i2 + 1] = Uint8Array.of(0);
            }
            return bufs;
          }
          case DdbType.uuid:
          case DdbType.ipaddr:
          case DdbType.int128:
          case DdbType.compressed:
            return [value];
          case DdbType.blob: {
            let bufs = new Array(length * 2);
            for (let i2 = 0; i2 < length; i2++) {
              const blob_value = value[i2];
              bufs[2 * i2] = Uint32Array.of(blob_value.length);
              bufs[2 * i2 + 1] = blob_value;
            }
            return bufs;
          }
          case DdbType.complex:
          case DdbType.point:
            return [value];
          case DdbType.duration: {
            let bufs = new Int32Array(length * 2);
            for (let i2 = 0; i2 < length; i2++) {
              const { data, unit } = value[i2];
              bufs[2 * i2] = data;
              bufs[2 * i2 + 1] = unit;
            }
            return [bufs];
          }
          case DdbType.any: {
            let bufs = new Array(length);
            for (let i2 = 0; i2 < length; i2++)
              bufs[i2] = value[i2].pack();
            return bufs;
          }
          case DdbType.symbol_extended: {
            const { base_id, base, data } = value;
            return [
              Uint32Array.of(base_id || 0, base.length),
              ...this.pack_vector_body(base, DdbType.string, base.length),
              data
            ];
          }
          case DdbType.decimal32:
          case DdbType.decimal64:
          case DdbType.decimal128: {
            const { scale, data } = value;
            return [Int32Array.of(scale), data];
          }
          default:
            throw new Error(t5("vector {{type}} \u6682\u4E0D\u652F\u6301\u5E8F\u5217\u5316", { type: get_type_name(type) }));
        }
      }
      data(options) {
        const { form, type, value, le, rows, name } = this;
        switch (form) {
          case DdbForm.scalar:
            return convert(type, value, le, options);
          case DdbForm.vector:
          case DdbForm.pair:
          case DdbForm.set: {
            const data = converts(type, value, rows, le, options);
            return form === DdbForm.set ? new Set(data) : data;
          }
          case DdbForm.table: {
            const cols = value;
            const jscols = cols.map((col) => col.data(options));
            const columns = cols.select("name");
            const data = seq(rows, (i2) => zip_object(columns, seq(cols.length, (j) => jscols[j][i2])));
            return options?.table === "full" ? {
              name: name || "",
              columns,
              types: cols.select("type"),
              data
            } : data;
          }
          case DdbForm.dict: {
            const [keys, values] = value;
            return zip_object(keys.data(options), values.data(options));
          }
          case DdbForm.chart:
            return value;
          case DdbForm.matrix: {
            const ncolumns = this.cols;
            const { rows: _rows, cols: _cols, data } = value;
            const jsdata = converts(type, data, rows * ncolumns, le, options);
            return {
              type,
              nrows: rows,
              ncolumns,
              rows: _rows?.data(options),
              columns: _cols?.data(options),
              data: seq(rows, (i2) => seq(ncolumns, (j) => jsdata[j * rows + i2]))
            };
          }
          case DdbForm.tensor: {
            const { data_type, tensor_type, device_type, tensor_flags, dimensions, shape, strides, preserve_value, elem_count, data } = this.value;
            const dataByte = ddb_tensor_bytes[data_type];
            return {
              data_type,
              tensor_type,
              device_type,
              tensor_flags,
              dimensions,
              shape,
              strides,
              preserve_value,
              elem_count,
              data: _DdbObj.parse_tensor({ currentDim: 0, dimensions, rawData: data, le: this.le, dataByte, dataType: data_type, shape, strides })
            };
          }
          case DdbForm.extobj:
            return `ExtObj<${get_type_name(type)}>`;
          default:
            throw new Error(t5("{{form}} {{type}} \u6682\u4E0D\u652F\u6301 data()", { form: DdbForm[form] || form, type: get_type_name(type) }));
        }
      }
      /** 构建 Tensor
          @param buildParams 构建参数
          @param limit 限制每个维度最大元素个数（仅用于 log，不作他用）
          @returns  */
      static parse_tensor(buildParams, limit = -1) {
        const { currentDim, dimensions, rawData, le, dataByte, dataType, shape, strides } = buildParams;
        const tensor = [];
        const dv2 = new DataView(rawData.buffer, rawData.byteOffset);
        for (let i2 = 0; i2 < shape[currentDim]; i2++)
          if (currentDim >= dimensions - 1) {
            if (limit > 0 && i2 >= limit) {
              tensor.push("...");
              break;
            }
            const offset = i2 * dataByte * Number(strides[currentDim]);
            switch (dataType) {
              case DdbType.bool: {
                const value = dv2.getInt8(offset);
                tensor.push(value === nulls.int8 ? null : Boolean(value));
                break;
              }
              case DdbType.char: {
                const value = dv2.getInt8(offset);
                tensor.push(convert(dataType, value, le));
                break;
              }
              case DdbType.short: {
                const value = dv2.getInt16(offset, le);
                tensor.push(value === nulls.int16 ? null : value);
                break;
              }
              case DdbType.int: {
                const value = dv2.getInt32(offset, le);
                tensor.push(value === nulls.int32 ? null : value);
                break;
              }
              case DdbType.long: {
                const value = dv2.getBigInt64(offset, le);
                tensor.push(value === nulls.int64 ? null : value);
                break;
              }
              case DdbType.float: {
                const value = dv2.getFloat32(offset, le);
                tensor.push(value === nulls.float32 ? null : value);
                break;
              }
              case DdbType.double: {
                const value = dv2.getFloat64(offset, le);
                tensor.push(value === nulls.double ? null : value);
                break;
              }
            }
          } else {
            const start = strides[currentDim] * i2 * dataByte;
            const end = start + strides[currentDim] * 1 * dataByte;
            tensor.push(_DdbObj.parse_tensor({
              currentDim: currentDim + 1,
              dimensions,
              rawData: rawData.subarray(Number(start), Number(end)),
              le,
              dataByte,
              shape,
              strides,
              dataType
            }, limit));
          }
        return tensor;
      }
      toString(options = { nullstr: true, quote: true }) {
        const type = this.inspect_type();
        const data = (() => {
          switch (this.form) {
            case DdbForm.scalar:
              return format(this.type, this.value, this.le, options);
            case DdbForm.vector:
            case DdbForm.pair:
            case DdbForm.set: {
              let format_array = function(items, ellipsis) {
                const str_items = items.join(", ") + (ellipsis ? ", ..." : "");
                return form === DdbForm.pair ? str_items : str_items.bracket("square");
              };
              const form = this.form;
              if (64 <= this.type && this.type < 128) {
                const type_ = this.type - 64;
                options = { ...options, grouping: false };
                const limit = 10;
                let array_items = new Array(Math.min(limit, this.rows));
                let i_items = 0;
                for (const { lengths, data: data2 } of this.value) {
                  let acc_len = 0;
                  for (const length of lengths) {
                    let items = new Array(Math.min(limit, length));
                    for (let i2 = 0; i2 < items.length; i2++)
                      switch (type_) {
                        case DdbType.decimal32:
                        case DdbType.decimal64:
                        case DdbType.decimal128:
                          const x = data2[acc_len + i2];
                          if (is_decimal_null_value(type_, x))
                            items[i2] = "";
                          else {
                            const { scale } = this.value;
                            const s2 = String(x < 0 ? -x : x).padStart(scale, "0");
                            const str = (x < 0 ? "-" : "") + (scale ? `${s2.slice(0, -scale) || "0"}.${s2.slice(-scale)}` : s2);
                            items[i2] = options.colors ? green(str) : str;
                          }
                          break;
                        case DdbType.complex:
                        case DdbType.point: {
                          const index = acc_len + i2;
                          items[i2] = format(type_, data2.subarray(2 * index, 2 * (index + 1)), this.le, options);
                          break;
                        }
                        case DdbType.uuid:
                        case DdbType.int128:
                        case DdbType.ipaddr: {
                          const index = acc_len + i2;
                          items[i2] = format(type_, data2.subarray(16 * index, 16 * (index + 1)), this.le, options);
                          break;
                        }
                        default:
                          items[i2] = format(type_, data2[acc_len + i2], this.le, options);
                          break;
                      }
                    array_items[i_items++] = format_array(items, length > limit);
                    acc_len += length;
                  }
                  if (i_items >= limit)
                    break;
                }
                return format_array(array_items, this.rows > limit);
              }
              switch (this.type) {
                case DdbType.symbol_extended: {
                  const limit = 50;
                  const { base, data: data2 } = this.value;
                  let items = new Array(Math.min(limit, data2.length));
                  for (let i2 = 0; i2 < items.length; i2++)
                    items[i2] = base[data2[i2]].quote("single");
                  return format_array(items, data2.length > limit);
                }
                case DdbType.void:
                  return format(this.type, this.value, this.le, options);
                case DdbType.uuid:
                case DdbType.int128:
                case DdbType.ipaddr: {
                  const limit = 10;
                  const value = this.value;
                  const len_data = value.length / 16;
                  let items = new Array(Math.min(limit, len_data));
                  for (let i2 = 0; i2 < items.length; i2++)
                    items[i2] = format(this.type, value.subarray(16 * i2, 16 * (i2 + 1)), this.le, options);
                  return format_array(items, len_data > limit);
                }
                case DdbType.complex:
                case DdbType.point: {
                  const limit = 20;
                  const value = this.value;
                  const len_data = value.length / 2;
                  let items = new Array(Math.min(limit, len_data));
                  for (let i2 = 0; i2 < items.length; i2++)
                    items[i2] = format(this.type, value.subarray(2 * i2, 2 * (i2 + 1)), this.le, options);
                  return format_array(items, len_data > limit);
                }
                case DdbType.decimal32:
                case DdbType.decimal64:
                case DdbType.decimal128: {
                  const limit = 50;
                  const { data: data2 } = this.value;
                  let items = new Array(Math.min(limit, data2.length));
                  for (let i2 = 0; i2 < items.length; i2++)
                    items[i2] = formati(this, i2, options);
                  return format_array(items, data2.length > limit);
                }
                default: {
                  const limit = this.type === DdbType.compressed ? 5 : 50;
                  let items = new Array(Math.min(limit, this.value.length));
                  for (let i2 = 0; i2 < items.length; i2++)
                    items[i2] = format(this.type, this.value[i2], this.le, options);
                  return format_array(items, this.value.length > limit);
                }
              }
            }
            case DdbForm.chart:
              return JSON.stringify(this.value, (key, value) => key === "data" ? value.toString(options) : value, 4);
            case DdbForm.tensor: {
              const tensorVal = this.value;
              const retd = _DdbObj.parse_tensor({
                currentDim: 0,
                dimensions: tensorVal.dimensions,
                rawData: tensorVal.data,
                le: this.le,
                dataByte: ddb_tensor_bytes[tensorVal.data_type],
                dataType: tensorVal.data_type,
                shape: tensorVal.shape,
                strides: tensorVal.strides
              }, 5);
              return JSON.stringify(retd).replaceAll('"..."', "...");
            }
          }
          return String(this.value);
        })();
        if (this.form === DdbForm.scalar && this.type === DdbType.string)
          return data;
        else
          return `${options?.colors ? blue(type) : type}(${this.name ? `'${this.name}', ` : ""}${data})`;
      }
      inspect_type() {
        const tname = DdbType[this.type];
        switch (this.form) {
          case DdbForm.scalar:
            if (this.type === DdbType.functiondef)
              return `functiondef<${DdbFunctionType[this.value.type]}>`;
            return tname;
          case DdbForm.vector:
            if (64 <= this.type && this.type < 128)
              return `${DdbType[this.type - 64]}[][${this.rows}]`;
            return `${tname}[${this.rows}]`;
          case DdbForm.pair:
            return `pair<${tname}>`;
          case DdbForm.set:
            return `set<${tname}>[${this.rows}]`;
          case DdbForm.table:
            return `table[${this.rows}r][${this.cols}c]`;
          case DdbForm.dict:
            return `dict<${DdbType[this.value[0].type]}, ${DdbType[this.value[1].type]}>[${this.rows}]`;
          case DdbForm.chart:
            return `chart<${DdbChartType[this.value.type]}>`;
          case DdbForm.matrix:
            return `matrix<${tname}>[${this.rows}r][${this.cols}c]`;
          case DdbForm.tensor:
            return `tensor<${generate_array_type(DdbType[this.value.data_type], this.value.shape)}>`;
          default:
            return `${DdbForm[this.form]} ${tname}`;
        }
      }
      /** 自动转换 Convertable 为 DdbObj */
      static to_ddbobj(value) {
        if (value && value instanceof _DdbObj)
          return value;
        if (value === void 0)
          return new DdbVoid();
        if (value === null)
          return new DdbVoid(DdbVoidType.null);
        const type = typeof value;
        switch (type) {
          case "string":
            return new DdbString(value);
          case "boolean":
            return new DdbBool(value);
          default:
            throw new Error(t5("\u4E0D\u80FD\u81EA\u52A8\u8F6C\u6362 {{type}} \u81F3 DdbObj", { type }));
        }
      }
      /** 转换 js 数组为 DdbObj[] */
      static to_ddbobjs(values) {
        return values.map((value) => this.to_ddbobj(value));
      }
      /** @deprecated 用 data() */
      to_cols() {
        assert(this.form === DdbForm.table, t5("form \u5FC5\u987B\u662F DdbForm.table, \u5426\u5219\u4E0D\u80FD to_cols"));
        return this.value.map((col) => ({
          title: col.name,
          dataIndex: col.name,
          render: (value) => format(col.type, value, col.le, { nullstr: false, quote: false })
        }));
      }
      /** 将 table 转换为 rows，空值转换为 null
          @deprecated 用 data() */
      to_rows() {
        assert(this.form === DdbForm.table, t5("form \u5FC5\u987B\u662F DdbForm.table, \u5426\u5219\u4E0D\u80FD to_rows"));
        let rows = new Array(this.rows);
        for (let i2 = 0; i2 < this.rows; i2++) {
          let row = {};
          for (let j = 0; j < this.cols; j++) {
            const { type, name, value: values } = this.value[j];
            switch (type) {
              case DdbType.bool: {
                const value = values[i2];
                row[name] = value === nulls.int8 ? null : Boolean(value);
                break;
              }
              case DdbType.char:
                row[name] = values[i2] === nulls.int8 ? null : values[i2];
                break;
              case DdbType.short:
                row[name] = values[i2] === nulls.int16 ? null : values[i2];
                break;
              case DdbType.int:
              case DdbType.date:
              case DdbType.month:
              case DdbType.time:
              case DdbType.minute:
              case DdbType.second:
              case DdbType.datetime:
              case DdbType.datehour:
                row[name] = values[i2] === nulls.int32 ? null : values[i2];
                break;
              case DdbType.long:
              case DdbType.timestamp:
              case DdbType.nanotime:
              case DdbType.nanotimestamp:
                row[name] = values[i2] === nulls.int64 ? null : values[i2];
                break;
              case DdbType.int128:
                row[name] = values[i2] === nulls.int128 ? null : values[i2];
                break;
              case DdbType.float:
                row[name] = values[i2] === nulls.float32 ? null : values[i2];
                break;
              case DdbType.double:
                row[name] = values[i2] === nulls.double ? null : values[i2];
                break;
              case DdbType.decimal32:
              case DdbType.decimal64:
              case DdbType.decimal128:
                row[name] = is_decimal_null_value(type, values[i2]) ? null : values[i2];
                break;
              case DdbType.ipaddr:
                row[name] = values.subarray(16 * i2, 16 * (i2 + 1));
                break;
              case DdbType.symbol_extended: {
                const { base, data } = values;
                row[name] = base[data[i2]];
                break;
              }
              default:
                row[name] = values[i2];
            }
          }
          rows[i2] = row;
        }
        return rows;
      }
      to_dict({ strip, deep } = {}) {
        assert(this.form === DdbForm.dict, t5("this.form \u5FC5\u987B\u662F DdbForm.dict, \u5426\u5219\u4E0D\u80FD\u8C03\u7528 to_dict \u8F6C\u6362\u4E3A js object"));
        const [{ value: keys, type: key_type }, { value: values, type: value_type }] = this.value;
        assert(key_type === DdbType.string && dictables.has(value_type), t5("\u5F53\u524D\u53EA\u652F\u6301\u81EA\u52A8\u8F6C\u6362 dict<string, any | ...dictables> \u4E3A js object"));
        assert(!(deep && !strip), t5("deep = true \u65F6\u5FC5\u987B\u8BBE\u7F6E strip = true"));
        let obj = {};
        for (let i2 = 0; i2 < this.rows; i2++) {
          const key = keys[i2];
          if (value_type === DdbType.any) {
            let value = values[i2];
            if (deep && value.form === DdbForm.dict)
              obj[key] = value.to_dict({ strip, deep });
            else
              obj[key] = strip ? value.value : value;
          } else
            obj[key] = values[i2];
        }
        return obj;
      }
    };
    gray_nullstr = gray("null");
    DdbVoid = class extends DdbObj {
      constructor(value = DdbVoidType.undefined) {
        super({
          form: DdbForm.scalar,
          type: DdbType.void,
          value
        });
      }
    };
    DdbBool = class extends DdbObj {
      constructor(value) {
        super({
          form: DdbForm.scalar,
          type: DdbType.bool,
          value
        });
      }
    };
    DdbInt = class extends DdbObj {
      constructor(value) {
        super({
          form: DdbForm.scalar,
          type: DdbType.int,
          value
        });
      }
    };
    DdbString = class extends DdbObj {
      constructor(value) {
        super({
          form: DdbForm.scalar,
          type: DdbType.string,
          value
        });
      }
    };
    DdbVectorString = class extends DdbObj {
      constructor(strings, name) {
        super({
          form: DdbForm.vector,
          type: DdbType.string,
          rows: strings.length,
          cols: 1,
          value: strings,
          name
        });
      }
    };
    DdbVectorAny = class extends DdbObj {
      constructor(objs, name) {
        super({
          form: DdbForm.vector,
          type: DdbType.any,
          rows: objs.length,
          cols: 1,
          value: DdbObj.to_ddbobjs(objs),
          name
        });
      }
    };
    DdbDict = class extends DdbObj {
      constructor(arg0, arg1) {
        if (arg1)
          super({
            form: DdbForm.dict,
            type: arg1.type,
            rows: arg0.rows,
            cols: 2,
            value: [arg0, arg1]
          });
        else {
          const keys = Object.keys(arg0);
          super({
            form: DdbForm.dict,
            type: DdbType.any,
            rows: keys.length,
            cols: 2,
            value: [
              new DdbVectorString(keys),
              new DdbVectorAny(Object.values(arg0))
            ]
          });
        }
      }
    };
    winsize = 1e4;
    DdbConnectionError = class extends Error {
      name = "DdbConnectionError";
      cause;
      url;
      // 这里不保留 ddb 的引用，会导致无法序列化
      constructor(url, error) {
        super(error?.message || `${url} ${t5("\u8FDE\u63A5\u51FA\u9519\u4E86\uFF0C\u53EF\u80FD\u7531\u4E8E\u7F51\u7EDC\u539F\u56E0\u8FDE\u63A5\u5DF2\u88AB\u5173\u95ED\uFF0C\u6216\u670D\u52A1\u5668\u65AD\u5F00\u8FDE\u63A5")}`, { cause: error });
        this.url = url;
        if (error)
          this.cause = error;
      }
    };
    DdbDatabaseError = class extends Error {
      name = "DdbDatabaseError";
      url;
      // 这里不保留 ddb 的引用，会导致无法序列化
      id;
      type;
      options;
      constructor(message, url, type, options, id) {
        super(message);
        this.url = url;
        this.type = type;
        this.options = options;
        this.id = id;
      }
    };
    DDB = class _DDB {
      /** 当前的 session id (http 或 tcp) */
      sid = "0";
      /** utf-8 text decoder */
      dec = new TextDecoder("utf-8");
      enc = new TextEncoder();
      /** DolphinDB WebSocket URL
          e.g. `ws://127.0.0.1:8848/`, `wss://dolphindb.com` */
      url;
      /** 为所有 websocket 操作加锁，包括设置 this.on_message, this.on_error, websocket.send */
      lwebsocket = new Lock();
      /** little endian (server) */
      le = true;
      /** little endian (client) */
      static le_client = Boolean(new Uint8Array(Uint32Array.of(1).buffer)[0]);
      /** 是否在建立连接后自动登录，默认 true  Whether to automatically log in after the connection is established, the default is true */
      autologin = true;
      /** DolphinDB 登录 ticket，优先级比用户名密码更高，设置后不使用密码登录 */
      ticket;
      /** DolphinDB 登录用户名  DolphinDB username */
      username = "admin";
      /** DolphinDB 登录密码  DolphinDB password */
      password = "123456";
      /** python session flag (2048) */
      python = false;
      /** q session flag (4096) */
      q = false;
      /** 是否为 dolphindb 语言 */
      dolphindb = true;
      language = "dolphindb";
      /** 表示本次会话执行的 SQL 标准 */
      sql = SqlStandard.DolphinDB;
      /** 是否为流数据连接，非流数据这个字段恒为 null  Whether it is a streaming data connection, this field is always null for non-streaming data */
      streaming = null;
      /** 是否打印每个 rpc 的信息用于调试 */
      verbose = false;
      // --- 内部选项, 状态
      print_message_buffer = false;
      print_object_buffer = false;
      print_message = true;
      parse_object = true;
      /** 在 websocket 收到的第一个 error 时，
          在 connect_websocket 的 on_error 回调中构造 DdbConnectionError 并保存到 DDB 对象上，
          这个 error 的错误信息最准确 */
      error;
      /** DdbMessage listeners */
      listeners = [];
      /** 首次 connect 连接的 promise, 后面的 connect 调用都返回这个 */
      pconnect;
      /** 首次定义 pnode_run 的 promise，保证并发调用 rpc 时只定义一次 pnode_run */
      ppnode_run;
      /** 首次定义 invoke 的 promise，保证并发调用 rpc 时只定义一次 invoke */
      pinvoke;
      /** 首次定义 jsrpc 的 promise，保证并发调用 rpc 时只定义一次 jsrpc */
      pjsrpc;
      /** 函数定义缓存 */
      definitions = /* @__PURE__ */ new Map();
      /** 函数定义锁，保证并发调用时不重复定义，直接返回第一次定义的结果 */
      pdefinitions = /* @__PURE__ */ new Map();
      get connected() {
        return !this.error && this.lwebsocket.resource?.readyState === WebSocket.OPEN;
      }
      /**
          使用 WebSocket URL 初始化连接到 DolphinDB 的实例（不建立实际的网络连接）
          Initialize an instance of DolphinDB Client using the WebSocket URL (without establishing an actual network connection)
          - url?: DolphinDB WebSocket URL，如：`ws://127.0.0.1:8848`, 默认为当前页面 URL
              DolphinDB WebSocket URL. e.g.：`ws://127.0.0.1:8848`, Defaults to the current page URL
          - options?: DdbOptions
              - autologin?: 是否在建立连接后自动登录，默认 `true`  Whether to log in automatically after establishing a connection, default `true`
              - username?: DolphinDB 登录用户名，默认 `'admin'`  DolphinDB username, default `'admin'`
              - password?: DolphinDB 登录密码，默认 `'123456'`  DolphinDB password, default `'123456'`
              - python?: 设置 python session flag，默认 `false`  set python session flag, default `false`
              - q?: 设置 q session flag，默认 `false`  set q session flag, default `false`
              - streaming?: 设置该选项后，该 WebSocket 连接只用于流数据  When this option is set, the WebSocket connection is only used for streaming data
              - verbose?: 是否打印每个 rpc 的信息用于调试
              - sql?: 设置当前会话执行的 sql 标准, 请使用 SqlStandard 枚举进行传参，默认 `DolphinDB`
          
          @example
          let ddb = new DDB('ws://127.0.0.1:8848')
          
          // 使用 HTTPS 加密  Encrypt with HTTPS
          let ddbsecure = new DDB('wss://dolphindb.com', {
              autologin: true,
              username: 'admin',
              password: '123456',
              python: false
          }) */
      constructor(url, options = {}) {
        this.url = url;
        if (options.verbose !== void 0)
          this.verbose = options.verbose;
        if (options.autologin !== void 0)
          this.autologin = options.autologin;
        if (options.ticket)
          this.ticket = options.ticket;
        if (options.username !== void 0)
          this.username = options.username;
        if (options.password !== void 0)
          this.password = options.password;
        if (options.python !== void 0 && (this.python = Boolean(options.python))) {
          this.dolphindb = false;
          this.language = "python";
        }
        if (options.q !== void 0 && (this.q = Boolean(options.q))) {
          this.dolphindb = false;
          this.language = "q";
        }
        if (options.sql !== void 0)
          this.sql = options.sql;
        if (options.streaming !== void 0)
          this.streaming = options.streaming;
      }
      on_message(buffer2, websocket) {
        throw new Error(t5("\u8FD9\u662F\u5728\u8C03\u7528 this.rpc \u4E4B\u524D\u9ED8\u8BA4\u7684 on_message, \u4E0D\u5E94\u8BE5\u88AB\u8C03\u7528\u5230\uFF0C\u9664\u975E\u5EFA\u7ACB\u8FDE\u63A5\u540E server \u5148\u63A8\u9001\u4E86 message"));
      }
      on_error() {
      }
      /** 调用后会确保和数据库的连接是正常的 (this.connected === true)，否则抛出错误
          这个方法是幂等的，首次调用建立实际的 WebSocket 连接到 URL 对应的 DolphinDB，然后执行自动登录，
          如果是流数据连接，还会调用 publishTable 订阅流表
          后续调用检查上面的条件
          连接断开后禁止再次调用 connect 重连原有 ddb 对象，应该通过 new DDB() 的方式新建连接对象，原因是：
          1. on_error 回调和某个 websocket 绑定了，不方便解绑后重新绑定
          2. session 是有状态的，重连也无法恢复之前的状态
          3. 断线后所有之前的 ddb.call, ddb.eval 都应该抛出连接错误
          
          After calling, it will ensure that the connection with the database is normal (this.connected === true), otherwise an error will be thrown
          This method is idempotent, the first call establishes an actual WebSocket connection to the DolphinDB corresponding to the URL, and subsequent calls check the above conditions
          After the connection is disconnected, it is forbidden to call connect again to reconnect the original ddb object. You should use new DDB() to create a new connection object because:
          1. The on_error callback is bound to a certain websocket, and it is inconvenient to unbind and rebind
          2. The session is stateful, and the previous state cannot be restored even after reconnection
          3. After disconnection, all previous ddb.call, ddb.eval should throw a connection error */
      async connect() {
        if (this.connected)
          return;
        if (this.error)
          throw this.error;
        const { resource: websocket } = this.lwebsocket;
        if (websocket && (websocket.readyState === WebSocket.CLOSING || websocket.readyState === WebSocket.CLOSED))
          throw this.error = new DdbConnectionError(this.url);
        return this.pconnect ??= new Promise(async (resolve, reject) => {
          this.on_error = () => {
            reject(
              this.error
              /* 一定有，不需要再 || new DdbConnectionError(this)  */
            );
          };
          try {
            let url = new URL(this.url);
            if (this.streaming?.filters?.expression)
              url.searchParams.set("filter", this.streaming.filters.expression.trim());
            this.lwebsocket.resource = await connect_websocket(url, {
              protocols: this.streaming ? ["streaming"] : this.dolphindb ? void 0 : [this.language],
              on_message: (buffer2, websocket2) => {
                this.on_message(new Uint8Array(buffer2), websocket2);
              },
              on_error: (error) => {
                this.error ??= new DdbConnectionError(this.url, error);
                this.on_error();
              }
            });
          } catch (error) {
            this.error ??= new DdbConnectionError(this.url, error);
            reject(this.error);
            return;
          }
          try {
            assert(this.connected);
            await this.rpc("connect", { skip_connection_check: true });
            if (this.autologin && this.ticket)
              await this.login_by_ticket(void 0, true);
            if (this.streaming)
              await this.subscribe();
            resolve();
          } catch (error) {
            this.error ??= error;
            reject(error);
          }
        });
      }
      /** 使用 ticket 登录
          - ticket?: `this.ticket` 手动传入时会更新 this.ticket
          - skip_connection_check? */
      async login_by_ticket(ticket, skip_connection_check = false) {
        if (ticket)
          this.ticket = ticket;
        await this.invoke("authenticateByTicket", [this.ticket], { urgent: true, skip_connection_check });
      }
      get_rpc_options({ urgent: urgent2 = false, secondary = false, async: _async = false, pickle = false, clear = false, api = false, compress = false, cancellable = true, priority = urgent2 ? 8 : 4, parallelism = 64, root_id = "", limit } = {}) {
        let flag = 0;
        if (urgent2)
          flag += 1;
        if (secondary)
          flag += 2;
        if (_async)
          flag += 4;
        if (pickle)
          flag += 8;
        if (clear)
          flag += 16;
        if (api)
          flag += 32;
        if (compress)
          flag += 64;
        if (this.python)
          flag += 2048;
        if (this.q)
          flag += 4096;
        flag += 2 ** 19 * this.sql;
        const options = [
          flag,
          cancellable ? 1 : 0,
          priority,
          parallelism,
          ...limit ? [
            root_id,
            limit
          ] : []
        ];
        return options.join("_");
      }
      disconnect() {
        const { resource } = this.lwebsocket;
        if (resource) {
          const { readyState } = resource;
          if (readyState !== WebSocket.CLOSED && readyState !== WebSocket.CLOSING)
            resource.close(1e3);
        }
      }
      /** (内部使用的方法) rpc through websocket (function/script/variable command)
          未连接到 DDB 时调用会自动连接，连接断开时调用会抛出 DdbConnectionError
          When the DDB is not connected, the call will be automatically connected. When the connection is disconnected, the call will throw the DdbConnectionError
          - type: API 类型: 'script' | 'function' | 'variable' | 'connect'
          - options:
              - urgent?: 决定 `行为标识` 那一行字符串的取值（只适用于 script 和 function）
              - vars?: type === 'variable' 时必传，variable 指令中待上传的变量名
              - listener?: 处理本次 rpc 期间的消息 (DdbMessage)
              - parse_object?: 在本次 rpc 期间设置 parse_object, 结束后恢复原有
                  为 false 时返回的 DdbObj 仅含有 buffer 和 le，不做解析，以便后续转发、序列化
              - skip_connection_check?: 在首次 await ddb.connect() 建立连接时不能再次调用 await this.connect() 确保连接状态，会导致循环依赖，
                  将这个 flag 设为 true 跳过连接状态检查 */
      async rpc(type, options) {
        const id = genid() % 1e3;
        let error = new DdbDatabaseError("", this.url, type, options, id);
        if (!options.skip_connection_check)
          await this.connect();
        const { script, func, args: _args = [], vars = [], urgent: u, listener, on_more_messages } = options;
        if (func === "pnode_run")
          try {
            await (this.ppnode_run ??= this.eval(funcdefs.pnode_run[this.language], urgent));
          } catch (error2) {
            this.ppnode_run = void 0;
            throw error2;
          }
        const _listeners = [...this.listeners];
        return this.lwebsocket.request(async (websocket) => {
          if (this.error)
            throw this.error;
          const args = DdbObj.to_ddbobjs(_args);
          const rpc_id = `(id = ${id})`;
          const command = this.enc.encode((() => {
            switch (type) {
              case "function":
                if (this.verbose)
                  if (args.length)
                    console.log(func, args.map((arg) => arg.data()), rpc_id);
                  else
                    console.log(`${func}()`, rpc_id);
                assert(!func.includes("\0"), t5("\u53D1\u9001\u81F3 DolphinDB \u6267\u884C\u7684\u811A\u672C\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0"));
                return `function
${func}
${args.length}
${Number(_DDB.le_client)}
`;
              case "script":
                if (this.verbose)
                  console.log(script, rpc_id);
                assert(!script.includes("\0"), t5("\u53D1\u9001\u81F3 DolphinDB \u6267\u884C\u7684\u811A\u672C\u4E2D\u95F4\u4E0D\u80FD\u542B\u6709 \\0"));
                return "script\n" + script;
              case "variable":
                if (this.verbose)
                  vars.forEach((v, i2) => {
                    console.log(v, "=", args[i2].data());
                  });
                return `variable
${vars.join(",")}
${vars.length}
${Number(_DDB.le_client)}
`;
              case "connect":
                if (this.verbose)
                  console.log("connect()" + (this.autologin && !this.ticket ? `
login(${this.username.quote()}, ${this.password.quote()})` : "") + ` ${rpc_id}`);
                return "connect\n" + // 详见 InterProcessIO.cpp#APISocketConsole::parseScript 中的
                // Util::startWith "connect"
                (this.autologin && !this.ticket ? "login\n" + this.username + "\n" + this.password : "");
            }
          })());
          const result = await new Promise((resolve, reject) => {
            let first_message = true;
            this.on_error = () => {
              reject(this.error);
            };
            this.on_message = (buffer2) => {
              if (!on_more_messages || first_message)
                try {
                  if (this.print_message_buffer)
                    console.log(buffer2);
                  const message = this.parse_message(buffer2, error);
                  listener?.(message, this);
                  for (let i2 = _listeners.length - 1; i2 >= 0; --i2)
                    _listeners[i2](message, this);
                  const { type: type2, data } = message;
                  switch (type2) {
                    case "print":
                      if (this.print_message)
                        console.log(data);
                      break;
                    case "object":
                      first_message = false;
                      resolve(data);
                      break;
                    case "error":
                      first_message = false;
                      reject(data);
                      break;
                  }
                } catch (error2) {
                  reject(error2);
                }
              else
                on_more_messages(buffer2);
            };
            websocket.send(concat([
              this.enc.encode(`API2 ${this.sid} ${command.length} / ${this.get_rpc_options({ urgent: u })}
`),
              command,
              ...args.map((arg) => arg.pack())
            ]));
          });
          if (this.verbose)
            console.log(result.data(), rpc_id);
          return result;
        });
      }
      /** eval script through websocket (script command)
          - script?: 执行的脚本  Script to execute
          - options?: 执行选项  execution options
              - urgent?: 紧急 flag，确保提交的脚本使用 urgent worker 处理，防止被其它作业阻塞
                  Urgent flag to ensure that submitted scripts are processed by urgent workers to prevent being blocked by other jobs
              - listener?: 处理本次 rpc 期间的消息 (DdbMessage)  Process messages during this rpc (DdbMessage)
              - parse_object?: 在该次 rpc 期间设置 parse_object, 结束后恢复原有，为 false 时返回的 DdbObj 仅含有 buffer 和 le，
                  不做解析，以便后续转发、序列化
                  Set parse_object during this rpc, and restore the original after the end.
                  When it is false, the returned DdbObj only contains buffer and le without parsing,
                  so as to facilitate subsequent forwarding and serialization
              - iife?: 使用 `def () { ... } ()` 包裹脚本，return 最后一行，避免变量泄漏 */
      async eval(script, { urgent: urgent2, listener, parse_object, iife } = {}) {
        if (iife) {
          const lines = script.split_lines();
          if (lines.length < 2)
            throw new Error(t5("iife \u6267\u884C\u7684\u811A\u672C\u884C\u6570\u5E94\u8BE5\u81F3\u5C11\u4E3A 2 \u884C"));
          script = "def () {\n" + lines.slice(0, -1).indent().join_lines() + `    return ${lines.last}
} ()
`;
        }
        return this.rpc("script", { script, urgent: urgent2, listener, parse_object });
      }
      /** call function through websocket (function command)
          - func: 函数名  function name
          - args?: `[ ]` 调用参数 (传入的原生 string 和 boolean 会被自动转换为 DdbObj<string> 和 DdbObj<boolean>)
              Call parameters (the incoming native string and boolean will be automatically converted to DdbObj<string> and DdbObj<boolean>)
          - options?: 调用选项  call options
              - urgent?: 紧急 flag。使用 urgent worker 执行，防止被其它作业阻塞
                  Emergency flag. Use urgent worker execution to prevent being blocked by other jobs
              - node?: 设置结点 alias 时发送到集群中对应的结点执行 (使用 DolphinDB 中的 rpc 方法)
                  When the node alias is set, it is sent to the corresponding node in the cluster for execution (using the rpc method in DolphinDB)
              - nodes?: 设置多个结点 alias 时发送到集群中对应的多个结点执行 (使用 DolphinDB 中的 pnodeRun 方法)
                  When setting multiple node aliases, send them to the corresponding multiple nodes in the cluster for execution (using the pnodeRun method in DolphinDB)
              - add_node_alias?: 设置 nodes 参数时选传，其它情况不传
                  Select to pass when setting the nodes parameter, otherwise not pass
              - listener?: 处理本次 rpc 期间的消息 (DdbMessage)
                  Process messages during this rpc (DdbMessage)
              - parse_object?: 在该次 rpc 期间设置 parse_object, 结束后恢复原有，为 false 时返回的 DdbObj 仅含有 buffer 和 le，
                  不做解析，以便后续转发、序列化
                  Set parse_object during this rpc, and restore the original after the end.
                  When it is false, the returned DdbObj only contains buffer and le without parsing,
                  so as to facilitate subsequent forwarding and serialization
              - skip_connection_check?: (内部使用) 在首次 await ddb.connect() 建立连接时不能再次调用 await this.connect() 确保连接状态，会导致循环依赖，
                  将这个 flag 设为 true 跳过连接状态检查
                  (internal use) When await ddb.connect() establishes a connection for the first time, you cannot call await this.connect() again to ensure the connection status, which will lead to circular dependencies.
                   Set this flag to true to skip connection status checks */
      async call(func, args = [], { urgent: u, node, nodes, add_node_alias, listener, parse_object, skip_connection_check, on_more_messages } = {}) {
        let func_ = func;
        let args_ = args;
        if (node) {
          try {
            await (this.pjsrpc ??= this.eval(funcdefs.jsrpc[this.language], urgent));
          } catch (error) {
            this.pjsrpc = void 0;
            throw error;
          }
          func_ = "jsrpc";
          args_ = [
            node,
            func,
            new DdbVectorAny(args)
          ];
        }
        if (nodes) {
          func_ = "pnode_run";
          args_ = [
            new DdbVectorString(nodes),
            func,
            new DdbVectorAny(args),
            ...(() => {
              if (typeof add_node_alias !== "undefined")
                return [add_node_alias];
              if (this.python)
                return [true];
              return [];
            })()
          ];
        }
        return this.rpc("function", {
          func: func_,
          args: args_,
          urgent: u,
          listener,
          parse_object,
          skip_connection_check,
          on_more_messages
        });
      }
      /** 调用 dolphindb 函数，传入 js 原生数组作为参数，返回 js 原生对象或值（调用 DdbObj.data() 后的结果）
          - func: 函数名，或者函数完整实现，会间接调用 define 进行预定义
          - args?: `[ ]` 调用参数，可以是 js 原生数组，参数在中间且想用 server 函数的默认参数值时可以传 null 占位
          - options?: 调用选项
              - urgent?: 紧急 flag。使用 urgent worker 执行，防止被其它作业阻塞
              - node?: 设置结点 alias 时发送到集群中对应的结点执行 (使用 DolphinDB 中的 rpc 方法)
              - nodes?: 设置多个结点 alias 时发送到集群中对应的多个结点执行 (使用 DolphinDB 中的 pnodeRun 方法)
              - add_node_alias?: 设置 nodes 参数时选传，其它情况不传
              - listener?: 处理本次 rpc 期间的消息 (DdbMessage) */
      async invoke(func, args, options) {
        let convertable = true;
        let has_ddbobj = false;
        if (args)
          for (const arg of args)
            if (arg && arg instanceof DdbObj)
              has_ddbobj = true;
            else if (arg === void 0 || arg === null) {
            } else {
              const type = typeof arg;
              if (type === "string" || type === "boolean") {
              } else
                convertable = false;
            }
        let result;
        if (function_definition_patterns[this.language].test(func))
          func = await this.define(func, { urgent: options?.urgent });
        if (convertable)
          result = await this.call(func, args, options);
        else {
          if (has_ddbobj)
            throw new Error(t5("\u8C03\u7528 ddb.invoke \u7684\u53C2\u6570\u4E2D\u4E0D\u80FD\u540C\u65F6\u6709 DdbObj \u4E0E\u590D\u6742 js \u539F\u751F\u5BF9\u8C61"));
          try {
            await (this.pinvoke ??= this.eval(funcdefs.invoke[this.language], urgent));
          } catch (error) {
            this.pinvoke = void 0;
            throw error;
          }
          result = await this.call("invoke", [func, JSON.stringify(args)], options);
        }
        return result.data(options);
      }
      /** 执行 dolphindb 脚本，返回 js 原生对象或值（调用 DdbObj.data() 后的结果）
          - script?: 执行的脚本
          - options?: 执行选项
              - urgent?: 紧急 flag，确保提交的脚本使用 urgent worker 处理，防止被其它作业阻塞
              - listener?: 处理本次 rpc 期间的消息 (DdbMessage) */
      async execute(script, options) {
        return (await this.eval(script, options)).data(options);
      }
      /** upload variable through websocket (variable command) */
      async upload(vars, args, { listener, parse_object } = {}) {
        assert(args.length && args.length === vars.length, t5("variable \u6307\u4EE4\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A\u4E14\u53C2\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E14\u6570\u91CF\u5E94\u8BE5\u5339\u914D"));
        return this.rpc("variable", { vars, args, listener, parse_object });
      }
      /** 取消当前 session id 对应的所有 console jobs  Cancel all console jobs corresponding to the current session id */
      async cancel() {
        let ddb2 = new _DDB(this.url, {
          // 如果有 ticket，则认为能够自动登录，并启用，否则禁用，尝试一下用户名密码登录
          autologin: Boolean(this.ticket),
          ticket: this.ticket,
          username: this.username,
          password: this.password,
          verbose: this.verbose
        });
        if (!this.ticket)
          try {
            await ddb2.invoke("login", [this.username, this.password]);
          } catch (error) {
            console.log(t5("ddb.cancel \u65E0 ticket\uFF0C\u5C1D\u8BD5\u901A\u8FC7\u5BC6\u7801 login \u5931\u8D25"));
          }
        try {
          await ddb2.eval(`jobs = exec rootJobId from getConsoleJobs() where sessionId = ${this.sid}
if (size(jobs))
    cancelConsoleJob(jobs)
`, urgent);
        } finally {
          ddb2.disconnect();
        }
      }
      /** 解析服务端响应报文，返回去掉 header 的 data buf */
      parse_message(buf2, error) {
        if (buf2[0] === 77 && buf2[1] === 83 && buf2[2] === 71 && buf2[3] === 10) {
          assert(buf2.at(-1) === 0, t5("print \u6D88\u606F\u7684 buffer \u5E94\u8BE5\u4EE5 \\0 \u7ED3\u675F"));
          if (buf2.indexOf(0) !== buf2.length - 1)
            console.warn(t5("print \u6D88\u606F\u7684 buffer \u4E2D\u95F4\u4E0D\u5E94\u8BE5\u6709 \\0"));
          return {
            type: "print",
            data: this.dec.decode(buf2.subarray(4, -1))
          };
        }
        const ilf0 = buf2.indexOf(10);
        const parts = this.dec.decode(buf2.subarray(0, ilf0)).split(" ");
        this.sid = parts[0];
        this.le = Number(parts[2]) !== 0;
        const ils1 = ilf0 + 1;
        const ilf1 = buf2.indexOf(10, ils1);
        const message = this.dec.decode(buf2.subarray(ils1, ilf1));
        if (message !== "OK") {
          error.message = message;
          let lines = error.stack.split_lines();
          lines[0] += `: ${message}`;
          error.stack = lines.join_lines(false);
          return { type: "error", data: error };
        }
        const bufobj = buf2.subarray(ilf1 + 1);
        if (this.print_object_buffer)
          console.log(bufobj);
        return {
          type: "object",
          data: error.options.parse_object ?? this.parse_object ? DdbObj.parse(bufobj, this.le) : new DdbObj({
            form: DdbForm.scalar,
            type: DdbType.void,
            length: 0,
            le: this.le,
            buffer: bufobj
          })
        };
      }
      /** 内部的流订阅方法  Internal stream subscription method */
      async subscribe() {
        let first = true;
        let win = {
          offset: 0,
          data: [],
          objs: []
        };
        let schema;
        console.log(
          t5("\u8BA2\u9605\u6D41\u8868\u6210\u529F:"),
          // 普通流表结果为 columns (string[])
          // 高可用流表为 [columns (string[]), node sites (string[])]
          (await this.call("publishTable", [
            "localhost",
            new DdbInt(0),
            this.streaming.table,
            this.streaming.action ||= `api_js_${(/* @__PURE__ */ new Date()).getTime()}`,
            this.streaming.offset === void 0 || this.streaming.offset === null ? new DdbVoid() : new DdbInt(this.streaming.offset),
            // offset
            this.streaming.filters?.column || new DdbVoid()
            // filter
          ], {
            skip_connection_check: true,
            // 先准备好收到 websocket message 的 callback
            on_more_messages: (buffer2) => {
              try {
                let data;
                const dv2 = new DataView(buffer2.buffer, buffer2.byteOffset, buffer2.byteLength);
                const i_topic_end = buffer2.indexOf(0, 17);
                const obj = DdbObj.parse(buffer2.subarray(i_topic_end + 1), this.le);
                if (obj.form === DdbForm.scalar && obj.type === DdbType.string) {
                  this.disconnect();
                  const value = obj.value;
                  throw new Error(value.slice(value.indexOf(":") + 1).trim());
                }
                if (first) {
                  schema = data = obj.data({ table: "full" });
                  data.name ||= this.streaming.table;
                  first = false;
                } else {
                  let rows;
                  if (obj.form === DdbForm.table) {
                    data = obj.data({ table: "full" });
                    data.name ||= schema.name;
                    rows = data.data.length;
                  } else {
                    const _data = obj.data();
                    const { columns } = schema;
                    rows = _data[0]?.length || 0;
                    data = {
                      ...schema,
                      data: seq(rows, (i2) => zip_object(columns, seq(columns.length, (j) => _data[j][i2])))
                    };
                  }
                  win.data.push(...data.data);
                  win.objs.push(obj);
                  if (win.data.length >= winsize * 2 && win.objs.length >= 2) {
                    let winsize_ = 0;
                    let i2 = win.objs.length - 1;
                    for (; winsize_ < winsize; i2--)
                      winsize_ += win.objs[i2].value[0].rows;
                    win.offset += win.data.length - winsize_;
                    win.data = win.data.slice(-winsize_);
                    win.objs = win.objs.slice(i2);
                  }
                }
                this.streaming.handler({
                  ...this.streaming,
                  id: dv2.getBigInt64(9, this.le),
                  time: dv2.getBigInt64(1, this.le),
                  topic: this.dec.decode(buffer2.subarray(17, i_topic_end)),
                  obj,
                  data,
                  window: win
                });
              } catch (error) {
                this.streaming.handler({ ...this.streaming, error });
              }
            }
          })).data()
        );
      }
      /** 定义函数并保存，避免下次重复执行定义，会自动提取脚本中的函数名，作为缓存 key，
          也同时作为返回值
          - definition: 函数完整定义
          - options?:
              - urgent?: 紧急 flag，确保提交的脚本使用 urgent worker 处理，防止被其它作业阻塞
          @example
          await ddb.invoke(
              await ddb.define(
                  'def foo (bar) {\n' +
                  '    print(bar)\n' +
                  '}\n'),
              ['hello']) */
      async define(definition, { urgent: urgent2 } = {}) {
        const matches = function_definition_patterns[this.language].exec(definition);
        if (!matches)
          throw new Error(t5("DDB.define \u65B9\u6CD5\u4F20\u5165\u7684 definition \u4E0D\u7B26\u5408\u51FD\u6570\u5B9A\u4E49\u683C\u5F0F def xxx ()"));
        const func_name = matches[1];
        if (this.definitions.has(func_name))
          return func_name;
        let promise = this.pdefinitions.get(func_name);
        if (!promise)
          this.pdefinitions.set(func_name, promise = this.execute(definition, { urgent: urgent2 }));
        await promise;
        this.definitions.set(func_name, definition);
        this.pdefinitions.delete(func_name);
        return func_name;
      }
      /** 在 undef all, 或运行 test 函数之后，由于函数定义在 server 侧被清空，需要同步清空 api 侧缓存，
          使得下次调用 invoke, define 能够重新定义函数 */
      reset_definitions() {
        this.definitions.clear();
        this.pdefinitions.clear();
      }
    };
    has_shared_array_buffer = typeof SharedArrayBuffer !== "undefined";
    BigInt128Array = class _BigInt128Array {
      static of(...items) {
        return new _BigInt128Array(items);
      }
      static from(arrayLike, mapfn, thisArg) {
        if (mapfn) {
          const array = [];
          for (let i2 = 0; i2 < arrayLike.length; i2++)
            array.push(mapfn.call(thisArg, arrayLike[i2], i2));
          return new _BigInt128Array(array);
        } else {
          const v = new _BigInt128Array(arrayLike.length);
          v.set(arrayLike);
        }
      }
      BYTES_PER_ELEMENT = 16;
      buffer;
      byteLength;
      byteOffset;
      constructor(fisrtArg, byteOffset, length) {
        if (typeof fisrtArg === "number") {
          const length2 = fisrtArg;
          this.buffer = new ArrayBuffer(length2 * this.BYTES_PER_ELEMENT);
          this.byteOffset = 0;
          this.byteLength = length2 * this.BYTES_PER_ELEMENT;
        } else if (fisrtArg instanceof ArrayBuffer || has_shared_array_buffer && fisrtArg instanceof SharedArrayBuffer) {
          this.buffer = fisrtArg;
          this.byteOffset = byteOffset ?? 0;
          let byteLength = 0;
          if (length !== void 0) {
            byteLength = length * this.BYTES_PER_ELEMENT;
            if (byteLength + this.byteOffset > fisrtArg.byteLength)
              throw new RangeError(`valid typed array length: ${length}`);
          } else {
            byteLength = fisrtArg.byteLength - this.byteOffset;
            if (byteLength % this.BYTES_PER_ELEMENT !== 0)
              throw new RangeError("byte length of BigInt128Array should be a multiple of 16");
          }
          this.byteLength = byteLength;
        } else {
          const array = [];
          for (const value of fisrtArg)
            array.push(value);
          this.buffer = new ArrayBuffer(array.length * this.BYTES_PER_ELEMENT);
          this.byteOffset = 0;
          this.byteLength = array.length * this.BYTES_PER_ELEMENT;
          this.set(array);
        }
        return new Proxy(this, {
          get(target, key) {
            if (typeof key === "string") {
              const index = Number(key);
              if (Number.isInteger(index) && index >= 0 && index < target.length)
                return target.at(index);
            }
            return Reflect.get(target, key);
          },
          set(target, key, value) {
            if (typeof key === "string") {
              const index = Number(key);
              if (Number.isInteger(index) && index >= 0 && index < target.length)
                target.set([value], index);
              return true;
            }
            return Reflect.set(target, key, value);
          },
          has(target, key) {
            if (typeof key === "string") {
              const index = Number(key);
              if (Number.isInteger(index) && index >= 0 && index < target.length)
                return true;
            }
            return Reflect.has(target, key);
          }
        });
      }
      get length() {
        return this.byteLength / this.BYTES_PER_ELEMENT;
      }
      set(array, offset = 0) {
        if (offset + array.length > this.length)
          throw new RangeError("offset is out of bounds");
        const dv2 = new DataView(this.buffer);
        for (let i2 = 0; i2 < array.length; i2++) {
          const byteOffset = this.byteOffset + (offset + i2) * this.BYTES_PER_ELEMENT;
          set_big_int_128(dv2, byteOffset, array[i2]);
        }
      }
      at(index) {
        const length = this.length;
        if (index < 0)
          index += length;
        if (index >= length || index < 0)
          return void 0;
        const dv2 = new DataView(this.buffer);
        return get_big_int_128(dv2, this.byteOffset + index * this.BYTES_PER_ELEMENT);
      }
      subarray(begin = 0, end = this.length) {
        const length = this.length;
        if (begin < 0)
          begin += length;
        if (end < 0)
          end += length;
        if (begin < 0)
          begin = 0;
        else if (begin > length)
          begin = length;
        if (end < 0)
          end = 0;
        else if (end > length)
          end = length;
        const newLength = Math.max(end - begin, 0);
        return new _BigInt128Array(this.buffer, this.byteOffset + begin * this.BYTES_PER_ELEMENT, newLength);
      }
      [Symbol.iterator]() {
        let index = 0;
        const array = this;
        return {
          next() {
            if (index < array.length)
              return { value: array.at(index++), done: false };
            else
              return { done: true };
          }
        };
      }
      toString() {
        const values = [];
        for (const value of this)
          values.push(value);
        return values.join(",");
      }
    };
    Object.defineProperty(BigInt128Array.prototype, Symbol.toStringTag, {
      configurable: false,
      writable: false,
      enumerable: false,
      value: "BigInt128Array"
    });
  }
});

// src/ddb.js
async function ddbConnect(host, port, user, pass) {
  if (ddb) {
    try {
      ddb.disconnect();
    } catch {
    }
    ddb = null;
    ddbConnected = false;
  }
  const url = `ws://${host}:${port}`;
  ddb = new DDB(url, {
    autologin: !!user,
    username: user || "",
    password: pass || ""
  });
  await ddb.connect();
  ddbConfig = { host, port, user, pass };
  ddbConnected = true;
  if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.local.set({ ddbConfig });
  }
  return { connected: true, url };
}
async function ddbExecute(script) {
  if (!ddb || !ddbConnected) {
    throw new Error("DolphinDB \u672A\u8FDE\u63A5");
  }
  const result = await ddb.eval(script);
  return formatResult(result);
}
function ddbDisconnect() {
  if (ddb) {
    try {
      ddb.disconnect();
    } catch {
    }
    ddb = null;
  }
  ddbConnected = false;
  ddbConfig = null;
  if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.local.remove("ddbConfig");
  }
  return { connected: false };
}
function ddbStatus() {
  return {
    connected: ddbConnected,
    config: ddbConfig ? { host: ddbConfig.host, port: ddbConfig.port, user: ddbConfig.user } : null
  };
}
async function ddbAutoRestore() {
  if (typeof chrome === "undefined" || !chrome.storage) return;
  return new Promise((resolve) => {
    chrome.storage.local.get(["ddbConfig"], async (result) => {
      if (result.ddbConfig) {
        const { host, port, user, pass } = result.ddbConfig;
        try {
          await ddbConnect(host, port, user, pass);
          console.log("\u2705 DolphinDB auto-restored connection to", `${host}:${port}`);
        } catch (e2) {
          console.log("\u26A0\uFE0F DolphinDB auto-restore failed:", e2.message);
        }
      }
      resolve();
    });
  });
}
function formatResult(result) {
  if (result === null || result === void 0) return "void";
  if (typeof result === "string" || typeof result === "number" || typeof result === "boolean") {
    return String(result);
  }
  if (result.value !== void 0) {
    return formatDDBValue(result);
  }
  try {
    return JSON.stringify(result, null, 2);
  } catch {
    return String(result);
  }
}
function formatDDBValue(obj) {
  const val = obj.value;
  if (val === null || val === void 0) return "NULL";
  if (Array.isArray(obj.columns) && Array.isArray(val)) {
    return formatTable(obj.columns, val, obj.rows);
  }
  if (Array.isArray(val)) {
    if (val.length > 100) {
      return `[${val.slice(0, 50).join(", ")}, ... (${val.length} items)]`;
    }
    return `[${val.join(", ")}]`;
  }
  return String(val);
}
function formatTable(columns, colData, rowCount) {
  if (!columns.length || !rowCount) return "(empty table)";
  const maxRows = Math.min(rowCount, 20);
  const lines = [];
  lines.push(columns.join("	"));
  lines.push(columns.map(() => "---").join("	"));
  for (let r2 = 0; r2 < maxRows; r2++) {
    const row = columns.map((_, ci) => {
      const v = colData[ci]?.[r2];
      return v === null || v === void 0 ? "" : String(v);
    });
    lines.push(row.join("	"));
  }
  if (rowCount > maxRows) {
    lines.push(`... (${rowCount} rows total)`);
  }
  return lines.join("\n");
}
var ddb, ddbConfig, ddbConnected;
var init_ddb = __esm({
  "src/ddb.js"() {
    init_browser2();
    ddb = null;
    ddbConfig = null;
    ddbConnected = false;
  }
});

// src/ddb-bridge.js
var require_ddb_bridge = __commonJS({
  "src/ddb-bridge.js"() {
    init_ddb();
    globalThis.__ddb = {
      connect: ddbConnect,
      execute: ddbExecute,
      disconnect: ddbDisconnect,
      status: ddbStatus,
      autoRestore: ddbAutoRestore
    };
  }
});
export default require_ddb_bridge();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

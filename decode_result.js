window = {};

window.atob = function (_0x169527) {
  var _0x18945f = "0|1|3|2|4"["split"]("|"),
      _0xfa9e53 = 0;

  while (!![]) {
    switch (_0x18945f[_0xfa9e53++]) {
      case "0":
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        continue;

      case "1":
        var _0x8d6497 = String(_0x169527).replace(/=+$/, "");

        continue;

      case "2":
        for (var _0xbaf286, _0x1e966e, _0xad607d = 0, _0x4f18ea = 0, _0xb65486 = ""; _0x1e966e = _0x8d6497.charAt(_0x4f18ea++); ~_0x1e966e && (_0xbaf286 = _0xad607d % 4 ? 64 * _0xbaf286 + _0x1e966e : _0x1e966e, _0xad607d++ % 4) ? _0xb65486 += String.fromCharCode(255 & _0xbaf286 >> (-2 * _0xad607d & 6)) : 0) _0x1e966e = e.indexOf(_0x1e966e);

        continue;

      case "3":
        if (_0x8d6497.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
        continue;

      case "4":
        return _0xb65486;
        continue;
    }

    break;
  }
};

window.btoa = function (_0x6b7e33) {
  var _0x0a9481 = "2|1|0"["split"]("|"),
      _0xf0de88 = 0;

  while (!![]) {
    switch (_0x0a9481[_0xf0de88++]) {
      case "0":
        return _0x882cb7;
        continue;

      case "1":
        for (var _0xf3ac24, _0x748eeb, _0x056d6f = String(_0x6b7e33), _0x720c4d = 0, _0xe5ee56 = e, _0x882cb7 = ""; _0x056d6f.charAt(0 | _0x720c4d) || (_0xe5ee56 = "=", _0x720c4d % 1); _0x882cb7 += _0xe5ee56.charAt(63 & _0xf3ac24 >> 8 - _0x720c4d % 1 * 8)) {
          var _0x94a932 = "0|1"["split"]("|"),
              _0xb8c2c6 = 0;

          while (!![]) {
            switch (_0x94a932[_0xb8c2c6++]) {
              case "0":
                if (_0x748eeb = _0x056d6f.charCodeAt(_0x720c4d += .75), _0x748eeb > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                continue;

              case "1":
                _0xf3ac24 = _0xf3ac24 << 8 | _0x748eeb;
                continue;
            }

            break;
          }
        }

        continue;

      case "2":
        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        continue;
    }

    break;
  }
};

var _0xgd8c3e = window.atob("abcde6789+/=");

var _0xa696f7 = window.btoa("abcde6789+/=");

console.log("testa---" + _0xgd8c3e);
console.log("test---" + window.btoa("abcde") + _0xgd8c3e);
console.log("test---" + window.atob("456789+/="));
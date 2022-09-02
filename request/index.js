"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  removeAllPendingRequestsRecord: () => removeAllPendingRequestsRecord,
  useRequest: () => useRequest
});
module.exports = __toCommonJS(src_exports);

// src/interceptors.ts
var import_axios = __toESM(require("axios"));
var import_qs = __toESM(require("qs"));

// src/util/localStr.ts
var import_lockr = require("lockr");

// src/util/secret.ts
var import_crypto_js = __toESM(require("crypto-js"));
var AES_KEY = "MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKe9As2DcXIEal+qLTq4o9/KqDaznL06zDgYUP2R3r8wAUDH+CvGk33FaLmKCt8hlf4inN7/yPhNn/9RWALSyXpFR1dk7p06uQoBL3PPerlemHL01HP8oQNwh5TZ/2khL+yyU5xTIPwMi51rKyTyBEmvqiGbBNbW9437c2kxW2tfAgMBAAECgYAaCtdnjvPLDvJw/dvd1RLkSPOK4qIAIyPXxba1V7NsnYhkRWe7bC40BbU3sT303KML/NW8LZxHKM4hdsCiV5WeHKMk9fmZKKmFqPtUacOEUhUuLR2Gjl6MuW6Oj8JEVzxfpa4cjPpbx9wg/kSfjpYWntj9B5O+jmJ3WIkwcYmVsQJBAN9BJIOfGMKrew18zN9PLGQNttFO9GzG4EE9MnnkipYM2kiaprJ7sIWjJ9RQaF8cJD055QfaDilpW/lXaaj57JcCQQDAV1LhWMxLGcC0hagX2Ua+K9N0URlQxiiE4HZLQHsGM0cYlqk3Gl6EXoMqYBzUYZy0pLkNBXGL8QeJ4gFtNSh5AkEAhEhlClhKo45X6zX3bpnLA73chUjzK0Drv7wzHGZ+d0pGTJ7WBwujHIwAHZ1HOpPCJUUYn/5kRcVX6fYRdT4hIQJBAI8Koj2qz0vu3Ayk9cy+rsjRSRHRGlWi +RFQ6UivrI6A5hfYPAIZ3z7sFvoVvnsIGQWTF3gimz4qw6N8a/kutmkCQQC5oGHYH3fJ3ImEX3ZIy6xeYPLPxxI1tC6N13qzVo3t8tVI3nSgTWVGmu11cEwJZ4MPaqy45+a4FSkugf9Toxqi";
function encryptByAES(text) {
  return import_crypto_js.default.AES.encrypt(text, AES_KEY).toString();
}
function decryptByAES(cipherText) {
  return import_crypto_js.default.AES.decrypt(cipherText, AES_KEY).toString(import_crypto_js.default.enc.Utf8);
}

// src/util/localStr.ts
(0, import_lockr.setPrefix)("tuo");
function setLockr(tokenName, token) {
  const data = encryptByAES(token);
  (0, import_lockr.set)(tokenName, data);
}
function getLockr(tokenName) {
  if ((0, import_lockr.getAll)().length < 1)
    return "";
  return decryptByAES((0, import_lockr.get)(tokenName));
}
function removeLockr(tokenName) {
  (0, import_lockr.rm)(tokenName);
}

// src/interceptors.ts
var allPendingRequestsRecord = [];
var pending = {};
var removeAllPendingRequestsRecord = () => {
  allPendingRequestsRecord.length > 0 && allPendingRequestsRecord.forEach((func) => {
    func("\u8DEF\u7531\u8DF3\u8F6C\u4E86\u53D6\u6D88\u6240\u6709\u8BF7\u6C42");
  });
  allPendingRequestsRecord.splice(0);
};
var removePending = (key, isRequest = false) => {
  if (pending[key] && isRequest) {
    pending[key](key + ":\u53D6\u6D88\u91CD\u590D\u8BF7\u6C42");
  }
  delete pending[key];
};
function getContentType(headers) {
  const keys = Object.keys(headers);
  for (const k of keys) {
    if (k.toLocaleLowerCase() === "content-type") {
      return headers[k];
    }
  }
  return "";
}
function transformInterceptor(ax) {
  ax.interceptors.request.use(
    async (config) => {
      let reqData = "";
      if (config.method === "get") {
        reqData = config.url + config.method + JSON.stringify(config.params);
      } else if (config.method) {
        reqData = config.url + config.method + JSON.stringify(config.data);
      }
      removePending(reqData, true);
      let token = await getLockr("jwt");
      const { headers = {}, data = {} } = config;
      const contType = getContentType(headers);
      if (contType.toLocaleLowerCase() === "multipart/form-data") {
        const fData = new FormData();
        Object.keys(config.data).forEach((k) => {
          if (Array.isArray(config.data[k])) {
            data[k].forEach((value, index) => {
              fData.append(`${k}[${index}]`, value);
            });
          } else {
            fData.append(k, config.data[k]);
          }
        });
        config.data = fData;
      }
      config.headers.Authorization = `Bearer ${token}`;
      if (config.method === "post") {
        config.data = {
          ...config.data
        };
      } else {
        config.params = {
          ...config.params
        };
      }
      config.cancelToken = new import_axios.default.CancelToken((c) => {
        pending[reqData] = c;
        allPendingRequestsRecord.push(c);
      });
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  ax.interceptors.response.use(
    async (res) => {
      if (res.config.url === "") {
        await setLockr("jwt", res.data.jwt);
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
}
function stringify(ax) {
  ax.interceptors.request.use((options) => {
    if (options.method === "get" && options.data) {
      options.data = import_qs.default.stringify(options.data);
    }
    return options;
  });
}

// src/hooks/useRequest.ts
var import_axios2 = __toESM(require("axios"));
var import_jwt_decode = __toESM(require("jwt-decode"));
var import_react = require("react");
var import_react_router_dom = require("react-router-dom");
var import_qs2 = __toESM(require("qs"));
var import_antd = require("antd");
var baseURL = process.env.REACT_APP_BASE_URL;
var instance = import_axios2.default.create({
  baseURL,
  timeout: 2e4,
  responseType: "json",
  paramsSerializer: function(params) {
    return import_qs2.default.stringify(params, { arrayFormat: "comma" });
  }
});
console.log("baseURL:", baseURL);
stringify(instance);
transformInterceptor(instance);
function useRequest() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const userToken = getLockr("jwt");
  const [token, setToken] = (0, import_react.useState)(userToken);
  const [tokenValidity, setTokenValidity] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    let decoded;
    if (token !== "") {
      decoded = (0, import_jwt_decode.default)(token);
      let exp = decoded.exp;
      let cur = Math.floor(Date.now() / 1e3);
      let d = exp - cur;
      if (d > 0) {
        setTokenValidity(true);
      } else
        setTokenValidity(false);
      if (d < 60 * 60 * 5 && d > 0) {
      }
    }
  }, [token]);
  const handleApiError = async (error) => {
    let code = 500;
    let data;
    if (import_axios2.default.isCancel(error)) {
      return new Promise(() => {
      });
    }
    if (error.response) {
      data = error.response.data;
      code = error.response.status;
    }
    if ([401].includes(code)) {
      import_antd.message.error("\u767B\u5F55\u5931\u6548\u8BF7\u91CD\u65B0\u767B\u5F55");
      setTokenValidity(false);
      navigate("/login");
      removeLockr("jwt");
      return Promise.reject(error);
    } else {
      let msg = "\u672A\u77E5\u9519\u8BEF";
      const errorMsg = error.message || "";
      if (errorMsg.includes("Network Error")) {
        msg = "\u8BF7\u68C0\u67E5\u7F51\u7EDC" + (error.config && error.config.url ? error.config.url : JSON.stringify(error.request));
      } else if (errorMsg.includes("timeout") && errorMsg.includes("exceeded")) {
        msg = "\u8BF7\u6C42\u8D85\u65F6";
      }
      if (data) {
        msg = data.msg;
      }
      if (!error.config || !error.config.hideToast) {
        console.log(msg || "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      }
      import_antd.message.error(msg || "\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      return Promise.reject(error);
    }
  };
  const request = (url, options, _ns) => {
    return instance.request({
      url,
      ...options,
      responseType: options.responseType || "json"
    }).then((res) => {
      if (url.indexOf("/api/auth/local") > -1) {
        setToken(res.data.jwt);
        setLockr("jwt", res.data.jwt);
      }
      return res.data;
    }).catch((err) => {
      handleApiError(err);
      throw err;
    });
  };
  return [request, token, tokenValidity];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  removeAllPendingRequestsRecord,
  useRequest
});

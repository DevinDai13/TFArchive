var protocol = window.location.protocol;
var slashes = protocol.concat("//");
var host = slashes.concat(window.location.host);
if (window.location.port) {
    host = host.replace("3000", "8000")
}
export const HOST = host.concat("/");
export const HOME_URL = "/";
export const THIRD_PARTY_URL = "/thirdparty/";
export const OFFICIAL_URL = "/official/";
export const GOKIN_URL = "/gokin/";

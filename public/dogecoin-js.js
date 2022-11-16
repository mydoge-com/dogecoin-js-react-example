var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import loadWASM from "./libdogecoin";
export function generatePrivPubKeypair() {
    return __awaiter(this, void 0, void 0, function* () {
        const libdogecoin = yield loadWASM();
        const { ALLOC_NORMAL, UTF8ToString, _dogecoin_ecc_start, _dogecoin_ecc_stop, _free, _generatePrivPubKeypair, allocate, intArrayFromString, } = libdogecoin;
        _dogecoin_ecc_start();
        const privatePtr = allocate(intArrayFromString(""), ALLOC_NORMAL);
        const publicPtr = allocate(intArrayFromString(""), ALLOC_NORMAL);
        _generatePrivPubKeypair(privatePtr, publicPtr, false);
        const privKey = `${UTF8ToString(privatePtr)}`;
        const pubKey = `${UTF8ToString(publicPtr)}`;
        _dogecoin_ecc_stop();
        return [pubKey, privKey];
    });
}

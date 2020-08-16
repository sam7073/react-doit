import createProvider from "./create";
import { TRADE_COIN_MODAL } from "./modal";
import TradeCoinPage from "../../components/main/TradeCoinPage";

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});

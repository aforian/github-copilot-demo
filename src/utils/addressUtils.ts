import { Address } from "../types/address";
// Import the 'Address' type from the appropriate module
// 建立一個名為 fullAddress 的函式，它接收 address 與 locale 的參數， locale 預設為 ‘en’
// 如果 locale 為 ‘en’ ，使讓 address 的內容根據美國地址格式印出字串，
// 如果 locale 為 ‘zh’，使讓 address 的內容根據華語地址格式印出字串，
// 如果 locale 不為上述內容，則報錯 locale not allowed
export const fullAddress = (address: Address, locale = "en") => {
  const { country, city, state, zip_code, address_1, address_2 } = address;
  if (locale === "en") {
    return `${country} ${state} ${city} ${zip_code} ${address_1} ${address_2}`;
  } else if (locale === "zh") {
    return `${country} ${state} ${city} ${zip_code} ${address_1} ${address_2}`;
  } else {
    throw new Error("locale not allowed");
  }
};

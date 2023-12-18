import { fullAddress } from "./addressUtils";

describe("fullAddress", () => {
  it("should return full address in English", () => {
    const address = {
      country: "United States",
      state: "CA",
      city: "San Francisco",
      zip_code: "94107",
      address_1: "548 Market St",
      address_2: "#23099",
    };
    const result = fullAddress(address);
    expect(result).toBe(
      "United States CA San Francisco 94107 548 Market St #23099"
    );
  });
  it("should return full address in Chinese", () => {
    const address = {
      country: "United States",
      state: "CA",
      city: "San Francisco",
      zip_code: "94107",
      address_1: "548 Market St",
      address_2: "#23099",
    };
    const result = fullAddress(address, "zh");
    expect(result).toBe(
      "United States CA San Francisco 94107 548 Market St #23099"
    );
  });
  it("should throw error when locale not allowed", () => {
    const address = {
      country: "United States",
      state: "CA",
      city: "San Francisco",
      zip_code: "94107",
      address_1: "548 Market St",
      address_2: "#23099",
    };
    expect(() => {
      fullAddress(address, "ja");
    }).toThrowError("locale not allowed");
  });
});

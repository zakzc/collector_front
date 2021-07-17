import adjustFormValues from "../../utils/adjustFormValues";

const testData = {
  author: "    Rage Against the machine    ",
  dayOfPurchase: "12",
  details: " ",
  mediaID: "rage934h",
  monthOfPurchase: "1",
  notes: " ",
  price: "-34.5698",
  quantity: "-2.5",
  sellable: "true",
  subType: "   CD",
  title: "    Rage Against the Machine     ",
  typeOfMedia: "Digital Audio",
  yearOfPurchase: "1992",
};

const returnTestData = {
  author: "Rage Against the machine",
  dateOfPurchase: "1992-1-12",
  details: " ",
  mediaID: "rage934h",
  notes: " ",
  price: 34.57,
  quantity: 2,
  sellable: "true",
  subType: "CD",
  title: "Rage Against the Machine",
  typeOfMedia: "Digital Audio",
};

// Supposes data was previously validated before processing
describe("Tests adjust of form values before sending them to the back end", () => {
  it("Should process raw data into adjusted data as expected", () => {
    expect(adjustFormValues(testData)).toStrictEqual(returnTestData);
  });
});

import { trimText } from "./trimText";

// console.log(
//   trimText(
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
//     10
//   )
// );

describe("Trim text function testing", () => {
  test("Throw error if trim length less than 4", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum";
    const trimLength = 3;

    expect(() => {
      trimText(str, trimLength);
    }).toThrow(new Error("Trim length must not be less than 4"));
  });

  test("Return trimmed text with total 10 symbols", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum";
    const trimLength = 10;

    expect(trimText(str, trimLength)).toEqual("Lorem I...");
  });

  test("Return full string", () => {
    const str = "Lorem I";
    const trimLength = 10;

    expect(trimText(str, trimLength)).toEqual(str);
  });

  test("Return untrimmed string", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum";
    // const trimLength = 10;

    expect(trimText(str, undefined)).toEqual(str);
  });
});

import { trimText } from "./trimText";

describe("Trim text function testing", () => {
  test("Valid trim result", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum";
    const trimLength = 10;

    expect(trimText(str, trimLength)).toEqual("Lorem I...");
  });

  test("Return full string on str.length less than trimLength", () => {
    const str = "Lorem I";
    const trimLength = 10;

    expect(trimText(str, trimLength)).toEqual(str);
  });

  test("Return undefined on str=null || undefined", () => {
    const str = null;
    const trimLength = 10;

    expect(trimText(str, trimLength)).toEqual(undefined);
  });

  test("Return full string on trimLength = null||undefined", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
    const trimLength = null;

    expect(trimText(str, trimLength)).toEqual(str);
  });

  test("Return full string on trimLength <= 3", () => {
    const str =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
    const trimLength = 3;

    expect(trimText(str, trimLength)).toEqual(str);
  });
});

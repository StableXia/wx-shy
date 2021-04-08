import jest from "../../../../configs/jest";
import Event from "../../src/core/event";

const event = new Event();
const mockFn = jest.fn();

describe("Event", () => {
  it("可触发事件", () => {
    event.on("test", mockFn);
    event.emit("test");
    expect(mockFn.mock.calls.length).toBe(1);
  });
});

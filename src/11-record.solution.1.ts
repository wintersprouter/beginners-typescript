import { expect, it } from "vitest";
/***
 * Construct a type with a set of properties K of type T
 * 開發者方便定義物件型別中屬性 key 和 value 的型別
 * type Record<K extends keyof any, T> = {
    [P in K]: T;
 * };
 */
const createCache = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});

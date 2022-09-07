import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
/**
 *Omit 的意思是忽略:從物件型別中剔除不想要的屬性
 *Omit <T, K>
 */
type MyType = Omit<User, "id">;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];

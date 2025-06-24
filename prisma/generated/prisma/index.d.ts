/**
 * Client
 **/

import * as runtime from "./runtime/library";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

export type UserPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: "User";
  objects: {
    accounts: AccountPayload<ExtArgs>[];
    sessions: SessionPayload<ExtArgs>[];
    Authenticator: AuthenticatorPayload<ExtArgs>[];
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      email: string;
      name: string;
      emailVerified: Date | null;
      image: string | null;
      roles: string[];
      isActive: boolean;
      password: string | null;
      createdAt: Date;
      updatedAt: Date;
    },
    ExtArgs["result"]["user"]
  >;
  composites: {};
};

/**
 * Model User
 *
 */
export type User = runtime.Types.DefaultSelection<UserPayload>;
export type AuthenticatorPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: "Authenticator";
  objects: {
    user: UserPayload<ExtArgs>;
  };
  scalars: $Extensions.GetResult<
    {
      credentialID: string;
      userId: string;
      providerAccountId: string;
      credentialPublicKey: string;
      counter: number;
      credentialDeviceType: string;
      credentialBackedUp: boolean;
      transports: string | null;
    },
    ExtArgs["result"]["authenticator"]
  >;
  composites: {};
};

/**
 * Model Authenticator
 *
 */
export type Authenticator =
  runtime.Types.DefaultSelection<AuthenticatorPayload>;
export type AccountPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: "Account";
  objects: {
    user: UserPayload<ExtArgs>;
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      userId: string;
      type: string;
      provider: string;
      providerAccountId: string;
      refresh_token: string | null;
      access_token: string | null;
      expires_at: number | null;
      token_type: string | null;
      scope: string | null;
      id_token: string | null;
      session_state: string | null;
      createdAt: Date;
      updatedAt: Date;
    },
    ExtArgs["result"]["account"]
  >;
  composites: {};
};

/**
 * Model Account
 *
 */
export type Account = runtime.Types.DefaultSelection<AccountPayload>;
export type SessionPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: "Session";
  objects: {
    user: UserPayload<ExtArgs>;
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      sessionToken: string;
      userId: string;
      expires: Date;
      createdAt: Date;
      updatedAt: Date;
    },
    ExtArgs["result"]["session"]
  >;
  composites: {};
};

/**
 * Model Session
 *
 */
export type Session = runtime.Types.DefaultSelection<SessionPayload>;
export type blogPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: "blog";
  objects: {};
  scalars: $Extensions.GetResult<
    {
      id: string;
      title: string;
      content: string;
      createAt: Date;
      image: string;
    },
    ExtArgs["result"]["blog"]
  >;
  composites: {};
};

/**
 * Model blog
 *
 */
export type blog = runtime.Types.DefaultSelection<blogPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = "rejectOnNotFound" extends keyof T
    ? T["rejectOnNotFound"]
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U | "beforeExit">(
    eventType: V,
    callback: (
      event: V extends "query"
        ? Prisma.QueryEvent
        : V extends "beforeExit"
          ? () => Promise<void>
          : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
  ): Promise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject,
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.authenticator`: Exposes CRUD operations for the **Authenticator** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Authenticators
   * const authenticators = await prisma.authenticator.findMany()
   * ```
   */
  get authenticator(): Prisma.AuthenticatorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **blog** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Blogs
   * const blogs = await prisma.blog.findMany()
   * ```
   */
  get blog(): Prisma.blogDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export type Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>;
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>;
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<
    T,
    A,
    F
  >;
  export type Exact<T, W> = $Public.Exact<T, W>;

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect
      ? U
      : T extends HasInclude
        ? U
        : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<
    T,
    TupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Authenticator: "Authenticator";
    Account: "Account";
    Session: "Session";
    blog: "blog";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.Args },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps: "user" | "authenticator" | "account" | "session" | "blog";
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: UserPayload<ExtArgs>;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Authenticator: {
        payload: AuthenticatorPayload<ExtArgs>;
        operations: {
          findUnique: {
            args: Prisma.AuthenticatorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AuthenticatorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          findFirst: {
            args: Prisma.AuthenticatorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AuthenticatorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          findMany: {
            args: Prisma.AuthenticatorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>[];
          };
          create: {
            args: Prisma.AuthenticatorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          createMany: {
            args: Prisma.AuthenticatorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AuthenticatorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          update: {
            args: Prisma.AuthenticatorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          deleteMany: {
            args: Prisma.AuthenticatorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AuthenticatorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AuthenticatorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AuthenticatorPayload>;
          };
          aggregate: {
            args: Prisma.AuthenticatorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAuthenticator>;
          };
          groupBy: {
            args: Prisma.AuthenticatorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AuthenticatorGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AuthenticatorFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AuthenticatorAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.AuthenticatorCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<AuthenticatorCountAggregateOutputType>
              | number;
          };
        };
      };
      Account: {
        payload: AccountPayload<ExtArgs>;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.AccountFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.AccountAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Session: {
        payload: SessionPayload<ExtArgs>;
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>[];
          };
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<SessionPayload>;
          };
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSession>;
          };
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SessionGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.SessionFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.SessionAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>;
            result: $Utils.Optional<SessionCountAggregateOutputType> | number;
          };
        };
      };
      blog: {
        payload: blogPayload<ExtArgs>;
        operations: {
          findUnique: {
            args: Prisma.blogFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.blogFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          findFirst: {
            args: Prisma.blogFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.blogFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          findMany: {
            args: Prisma.blogFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>[];
          };
          create: {
            args: Prisma.blogCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          createMany: {
            args: Prisma.blogCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.blogDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          update: {
            args: Prisma.blogUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          deleteMany: {
            args: Prisma.blogDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.blogUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.blogUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<blogPayload>;
          };
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBlog>;
          };
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BlogGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.blogFindRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          aggregateRaw: {
            args: Prisma.blogAggregateRawArgs<ExtArgs>;
            result: Prisma.JsonObject;
          };
          count: {
            args: Prisma.blogCountArgs<ExtArgs>;
            result: $Utils.Optional<BlogCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound;
  };
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
      ? True
      : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName,
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
      ? Action extends keyof GlobalRejectSettings
        ? GlobalRejectSettings[Action] extends RejectOnNotFound
          ? IsReject<GlobalRejectSettings[Action]>
          : GlobalRejectSettings[Action] extends RejectPerModel
            ? Model extends keyof GlobalRejectSettings[Action]
              ? IsReject<GlobalRejectSettings[Action][Model]>
              : False
            : False
        : False
      : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number;
    sessions: number;
    Authenticator: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    Authenticator?: boolean | UserCountOutputTypeCountAuthenticatorArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthenticatorArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: AuthenticatorWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    emailVerified: Date | null;
    image: string | null;
    isActive: boolean | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    emailVerified: Date | null;
    image: string | null;
    isActive: boolean | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    emailVerified: number;
    image: number;
    roles: number;
    isActive: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    emailVerified?: true;
    image?: true;
    isActive?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    emailVerified?: true;
    image?: true;
    isActive?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    emailVerified?: true;
    image?: true;
    roles?: true;
    isActive?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?: Enumerable<UserOrderByWithAggregationInput>;
    by: UserScalarFieldEnum[];
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    emailVerified: Date | null;
    image: string | null;
    roles: string[];
    isActive: boolean;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      roles?: boolean;
      isActive?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      accounts?: boolean | User$accountsArgs<ExtArgs>;
      sessions?: boolean | User$sessionsArgs<ExtArgs>;
      Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    roles?: boolean;
    isActive?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    accounts?: boolean | User$accountsArgs<ExtArgs>;
    sessions?: boolean | User$sessionsArgs<ExtArgs>;
    Authenticator?: boolean | User$AuthenticatorArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>;
  };

  type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    $Types.GetResult<UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends UserFindUniqueArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "User"
    > extends True
      ? Prisma__UserClient<
          $Types.GetResult<UserPayload<ExtArgs>, T, "findUnique", never>,
          never,
          ExtArgs
        >
      : Prisma__UserClient<
          $Types.GetResult<UserPayload<ExtArgs>, T, "findUnique", never> | null,
          null,
          ExtArgs
        >;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findUniqueOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends UserFindFirstArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "User"
    > extends True
      ? Prisma__UserClient<
          $Types.GetResult<UserPayload<ExtArgs>, T, "findFirst", never>,
          never,
          ExtArgs
        >
      : Prisma__UserClient<
          $Types.GetResult<UserPayload<ExtArgs>, T, "findFirst", never> | null,
          null,
          ExtArgs
        >;

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findFirstOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findMany", never>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "create", never>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "delete", never>,
      never,
      ExtArgs
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "update", never>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "upsert", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "findMany", never> | Null
    >;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "findMany", never> | Null
    >;

    Authenticator<T extends User$AuthenticatorArgs<ExtArgs> = {}>(
      args?: Subset<T, User$AuthenticatorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "findMany", never>
      | Null
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends UserFindUniqueArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends UserFindFirstArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?: Enumerable<AccountOrderByWithRelationInput>;
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<AccountScalarFieldEnum>;
  };

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    where?: SessionWhereInput;
    orderBy?: Enumerable<SessionOrderByWithRelationInput>;
    cursor?: SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<SessionScalarFieldEnum>;
  };

  /**
   * User.Authenticator
   */
  export type User$AuthenticatorArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    where?: AuthenticatorWhereInput;
    orderBy?: Enumerable<AuthenticatorOrderByWithRelationInput>;
    cursor?: AuthenticatorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<AuthenticatorScalarFieldEnum>;
  };

  /**
   * User without action
   */
  export type UserArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Authenticator
   */

  export type AggregateAuthenticator = {
    _count: AuthenticatorCountAggregateOutputType | null;
    _avg: AuthenticatorAvgAggregateOutputType | null;
    _sum: AuthenticatorSumAggregateOutputType | null;
    _min: AuthenticatorMinAggregateOutputType | null;
    _max: AuthenticatorMaxAggregateOutputType | null;
  };

  export type AuthenticatorAvgAggregateOutputType = {
    counter: number | null;
  };

  export type AuthenticatorSumAggregateOutputType = {
    counter: number | null;
  };

  export type AuthenticatorMinAggregateOutputType = {
    credentialID: string | null;
    userId: string | null;
    providerAccountId: string | null;
    credentialPublicKey: string | null;
    counter: number | null;
    credentialDeviceType: string | null;
    credentialBackedUp: boolean | null;
    transports: string | null;
  };

  export type AuthenticatorMaxAggregateOutputType = {
    credentialID: string | null;
    userId: string | null;
    providerAccountId: string | null;
    credentialPublicKey: string | null;
    counter: number | null;
    credentialDeviceType: string | null;
    credentialBackedUp: boolean | null;
    transports: string | null;
  };

  export type AuthenticatorCountAggregateOutputType = {
    credentialID: number;
    userId: number;
    providerAccountId: number;
    credentialPublicKey: number;
    counter: number;
    credentialDeviceType: number;
    credentialBackedUp: number;
    transports: number;
    _all: number;
  };

  export type AuthenticatorAvgAggregateInputType = {
    counter?: true;
  };

  export type AuthenticatorSumAggregateInputType = {
    counter?: true;
  };

  export type AuthenticatorMinAggregateInputType = {
    credentialID?: true;
    userId?: true;
    providerAccountId?: true;
    credentialPublicKey?: true;
    counter?: true;
    credentialDeviceType?: true;
    credentialBackedUp?: true;
    transports?: true;
  };

  export type AuthenticatorMaxAggregateInputType = {
    credentialID?: true;
    userId?: true;
    providerAccountId?: true;
    credentialPublicKey?: true;
    counter?: true;
    credentialDeviceType?: true;
    credentialBackedUp?: true;
    transports?: true;
  };

  export type AuthenticatorCountAggregateInputType = {
    credentialID?: true;
    userId?: true;
    providerAccountId?: true;
    credentialPublicKey?: true;
    counter?: true;
    credentialDeviceType?: true;
    credentialBackedUp?: true;
    transports?: true;
    _all?: true;
  };

  export type AuthenticatorAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authenticator to aggregate.
     */
    where?: AuthenticatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: Enumerable<AuthenticatorOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AuthenticatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Authenticators
     **/
    _count?: true | AuthenticatorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AuthenticatorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AuthenticatorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AuthenticatorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AuthenticatorMaxAggregateInputType;
  };

  export type GetAuthenticatorAggregateType<
    T extends AuthenticatorAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAuthenticator]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticator[P]>
      : GetScalarType<T[P], AggregateAuthenticator[P]>;
  };

  export type AuthenticatorGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: AuthenticatorWhereInput;
    orderBy?: Enumerable<AuthenticatorOrderByWithAggregationInput>;
    by: AuthenticatorScalarFieldEnum[];
    having?: AuthenticatorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthenticatorCountAggregateInputType | true;
    _avg?: AuthenticatorAvgAggregateInputType;
    _sum?: AuthenticatorSumAggregateInputType;
    _min?: AuthenticatorMinAggregateInputType;
    _max?: AuthenticatorMaxAggregateInputType;
  };

  export type AuthenticatorGroupByOutputType = {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports: string | null;
    _count: AuthenticatorCountAggregateOutputType | null;
    _avg: AuthenticatorAvgAggregateOutputType | null;
    _sum: AuthenticatorSumAggregateOutputType | null;
    _min: AuthenticatorMinAggregateOutputType | null;
    _max: AuthenticatorMaxAggregateOutputType | null;
  };

  type GetAuthenticatorGroupByPayload<T extends AuthenticatorGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<AuthenticatorGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof AuthenticatorGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatorGroupByOutputType[P]>;
        }
      >
    >;

  export type AuthenticatorSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      credentialID?: boolean;
      userId?: boolean;
      providerAccountId?: boolean;
      credentialPublicKey?: boolean;
      counter?: boolean;
      credentialDeviceType?: boolean;
      credentialBackedUp?: boolean;
      transports?: boolean;
      user?: boolean | UserArgs<ExtArgs>;
    },
    ExtArgs["result"]["authenticator"]
  >;

  export type AuthenticatorSelectScalar = {
    credentialID?: boolean;
    userId?: boolean;
    providerAccountId?: boolean;
    credentialPublicKey?: boolean;
    counter?: boolean;
    credentialDeviceType?: boolean;
    credentialBackedUp?: boolean;
    transports?: boolean;
  };

  export type AuthenticatorInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserArgs<ExtArgs>;
  };

  type AuthenticatorGetPayload<
    S extends boolean | null | undefined | AuthenticatorArgs,
  > = $Types.GetResult<AuthenticatorPayload, S>;

  type AuthenticatorCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<AuthenticatorFindManyArgs, "select" | "include"> & {
    select?: AuthenticatorCountAggregateInputType | true;
  };

  export interface AuthenticatorDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Authenticator"];
      meta: { name: "Authenticator" };
    };
    /**
     * Find zero or one Authenticator that matches the filter.
     * @param {AuthenticatorFindUniqueArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends AuthenticatorFindUniqueArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, AuthenticatorFindUniqueArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Authenticator"
    > extends True
      ? Prisma__AuthenticatorClient<
          $Types.GetResult<
            AuthenticatorPayload<ExtArgs>,
            T,
            "findUnique",
            never
          >,
          never,
          ExtArgs
        >
      : Prisma__AuthenticatorClient<
          $Types.GetResult<
            AuthenticatorPayload<ExtArgs>,
            T,
            "findUnique",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find one Authenticator that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AuthenticatorFindUniqueOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticatorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<
        AuthenticatorPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        never
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Authenticator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends AuthenticatorFindFirstArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, AuthenticatorFindFirstArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Authenticator"
    > extends True
      ? Prisma__AuthenticatorClient<
          $Types.GetResult<
            AuthenticatorPayload<ExtArgs>,
            T,
            "findFirst",
            never
          >,
          never,
          ExtArgs
        >
      : Prisma__AuthenticatorClient<
          $Types.GetResult<
            AuthenticatorPayload<ExtArgs>,
            T,
            "findFirst",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find the first Authenticator that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindFirstOrThrowArgs} args - Arguments to find a Authenticator
     * @example
     * // Get one Authenticator
     * const authenticator = await prisma.authenticator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AuthenticatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticatorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<
        AuthenticatorPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        never
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Authenticators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authenticators
     * const authenticators = await prisma.authenticator.findMany()
     *
     * // Get first 10 Authenticators
     * const authenticators = await prisma.authenticator.findMany({ take: 10 })
     *
     * // Only select the `credentialID`
     * const authenticatorWithCredentialIDOnly = await prisma.authenticator.findMany({ select: { credentialID: true } })
     *
     **/
    findMany<T extends AuthenticatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticatorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "findMany", never>
    >;

    /**
     * Create a Authenticator.
     * @param {AuthenticatorCreateArgs} args - Arguments to create a Authenticator.
     * @example
     * // Create one Authenticator
     * const Authenticator = await prisma.authenticator.create({
     *   data: {
     *     // ... data to create a Authenticator
     *   }
     * })
     *
     **/
    create<T extends AuthenticatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticatorCreateArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "create", never>,
      never,
      ExtArgs
    >;

    /**
     * Create many Authenticators.
     *     @param {AuthenticatorCreateManyArgs} args - Arguments to create many Authenticators.
     *     @example
     *     // Create many Authenticators
     *     const authenticator = await prisma.authenticator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AuthenticatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticatorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Authenticator.
     * @param {AuthenticatorDeleteArgs} args - Arguments to delete one Authenticator.
     * @example
     * // Delete one Authenticator
     * const Authenticator = await prisma.authenticator.delete({
     *   where: {
     *     // ... filter to delete one Authenticator
     *   }
     * })
     *
     **/
    delete<T extends AuthenticatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticatorDeleteArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "delete", never>,
      never,
      ExtArgs
    >;

    /**
     * Update one Authenticator.
     * @param {AuthenticatorUpdateArgs} args - Arguments to update one Authenticator.
     * @example
     * // Update one Authenticator
     * const authenticator = await prisma.authenticator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AuthenticatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticatorUpdateArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "update", never>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Authenticators.
     * @param {AuthenticatorDeleteManyArgs} args - Arguments to filter Authenticators to delete.
     * @example
     * // Delete a few Authenticators
     * const { count } = await prisma.authenticator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AuthenticatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AuthenticatorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authenticators
     * const authenticator = await prisma.authenticator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AuthenticatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticatorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Authenticator.
     * @param {AuthenticatorUpsertArgs} args - Arguments to update or create a Authenticator.
     * @example
     * // Update or create a Authenticator
     * const authenticator = await prisma.authenticator.upsert({
     *   create: {
     *     // ... data to create a Authenticator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authenticator we want to update
     *   }
     * })
     **/
    upsert<T extends AuthenticatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AuthenticatorUpsertArgs<ExtArgs>>,
    ): Prisma__AuthenticatorClient<
      $Types.GetResult<AuthenticatorPayload<ExtArgs>, T, "upsert", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Authenticators that matches the filter.
     * @param {AuthenticatorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const authenticator = await prisma.authenticator.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: AuthenticatorFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Authenticator.
     * @param {AuthenticatorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const authenticator = await prisma.authenticator.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: AuthenticatorAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Authenticators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorCountArgs} args - Arguments to filter Authenticators to count.
     * @example
     * // Count the number of Authenticators
     * const count = await prisma.authenticator.count({
     *   where: {
     *     // ... the filter for the Authenticators we want to count
     *   }
     * })
     **/
    count<T extends AuthenticatorCountArgs>(
      args?: Subset<T, AuthenticatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AuthenticatorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AuthenticatorAggregateArgs>(
      args: Subset<T, AuthenticatorAggregateArgs>,
    ): Prisma.PrismaPromise<GetAuthenticatorAggregateType<T>>;

    /**
     * Group by Authenticator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AuthenticatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatorGroupByArgs["orderBy"] }
        : { orderBy?: AuthenticatorGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AuthenticatorGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetAuthenticatorGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authenticator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AuthenticatorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    user<T extends UserArgs<ExtArgs> = {}>(
      args?: Subset<T, UserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findUnique", never> | Null,
      never,
      ExtArgs
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Authenticator base type for findUnique actions
   */
  export type AuthenticatorFindUniqueArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput;
  };

  /**
   * Authenticator findUnique
   */
  export interface AuthenticatorFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends AuthenticatorFindUniqueArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Authenticator findUniqueOrThrow
   */
  export type AuthenticatorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter, which Authenticator to fetch.
     */
    where: AuthenticatorWhereUniqueInput;
  };

  /**
   * Authenticator base type for findFirst actions
   */
  export type AuthenticatorFindFirstArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: Enumerable<AuthenticatorOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authenticators.
     */
    distinct?: Enumerable<AuthenticatorScalarFieldEnum>;
  };

  /**
   * Authenticator findFirst
   */
  export interface AuthenticatorFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends AuthenticatorFindFirstArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Authenticator findFirstOrThrow
   */
  export type AuthenticatorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter, which Authenticator to fetch.
     */
    where?: AuthenticatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: Enumerable<AuthenticatorOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Authenticators.
     */
    distinct?: Enumerable<AuthenticatorScalarFieldEnum>;
  };

  /**
   * Authenticator findMany
   */
  export type AuthenticatorFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter, which Authenticators to fetch.
     */
    where?: AuthenticatorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Authenticators to fetch.
     */
    orderBy?: Enumerable<AuthenticatorOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Authenticators.
     */
    cursor?: AuthenticatorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Authenticators from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Authenticators.
     */
    skip?: number;
    distinct?: Enumerable<AuthenticatorScalarFieldEnum>;
  };

  /**
   * Authenticator create
   */
  export type AuthenticatorCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Authenticator.
     */
    data: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>;
  };

  /**
   * Authenticator createMany
   */
  export type AuthenticatorCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Authenticators.
     */
    data: Enumerable<AuthenticatorCreateManyInput>;
  };

  /**
   * Authenticator update
   */
  export type AuthenticatorUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Authenticator.
     */
    data: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>;
    /**
     * Choose, which Authenticator to update.
     */
    where: AuthenticatorWhereUniqueInput;
  };

  /**
   * Authenticator updateMany
   */
  export type AuthenticatorUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Authenticators.
     */
    data: XOR<
      AuthenticatorUpdateManyMutationInput,
      AuthenticatorUncheckedUpdateManyInput
    >;
    /**
     * Filter which Authenticators to update
     */
    where?: AuthenticatorWhereInput;
  };

  /**
   * Authenticator upsert
   */
  export type AuthenticatorUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Authenticator to update in case it exists.
     */
    where: AuthenticatorWhereUniqueInput;
    /**
     * In case the Authenticator found by the `where` argument doesn't exist, create a new Authenticator with this data.
     */
    create: XOR<AuthenticatorCreateInput, AuthenticatorUncheckedCreateInput>;
    /**
     * In case the Authenticator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatorUpdateInput, AuthenticatorUncheckedUpdateInput>;
  };

  /**
   * Authenticator delete
   */
  export type AuthenticatorDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
    /**
     * Filter which Authenticator to delete.
     */
    where: AuthenticatorWhereUniqueInput;
  };

  /**
   * Authenticator deleteMany
   */
  export type AuthenticatorDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Authenticators to delete
     */
    where?: AuthenticatorWhereInput;
  };

  /**
   * Authenticator findRaw
   */
  export type AuthenticatorFindRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Authenticator aggregateRaw
   */
  export type AuthenticatorAggregateRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Authenticator without action
   */
  export type AuthenticatorArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Authenticator
     */
    select?: AuthenticatorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AuthenticatorInclude<ExtArgs> | null;
  };

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null;
  };

  export type AccountSumAggregateOutputType = {
    expires_at: number | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    provider: string | null;
    providerAccountId: string | null;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    provider: number;
    providerAccountId: number;
    refresh_token: number;
    access_token: number;
    expires_at: number;
    token_type: number;
    scope: number;
    id_token: number;
    session_state: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AccountAvgAggregateInputType = {
    expires_at?: true;
  };

  export type AccountSumAggregateInputType = {
    expires_at?: true;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    provider?: true;
    providerAccountId?: true;
    refresh_token?: true;
    access_token?: true;
    expires_at?: true;
    token_type?: true;
    scope?: true;
    id_token?: true;
    session_state?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>;
    by: AccountScalarFieldEnum[];
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _avg?: AccountAvgAggregateInputType;
    _sum?: AccountSumAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<AccountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      type?: boolean;
      provider?: boolean;
      providerAccountId?: boolean;
      refresh_token?: boolean;
      access_token?: boolean;
      expires_at?: boolean;
      token_type?: boolean;
      scope?: boolean;
      id_token?: boolean;
      session_state?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    refresh_token?: boolean;
    access_token?: boolean;
    expires_at?: boolean;
    token_type?: boolean;
    scope?: boolean;
    id_token?: boolean;
    session_state?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AccountInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserArgs<ExtArgs>;
  };

  type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    $Types.GetResult<AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, "select" | "include"> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Account"];
      meta: { name: "Account" };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends AccountFindUniqueArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Account"
    > extends True
      ? Prisma__AccountClient<
          $Types.GetResult<AccountPayload<ExtArgs>, T, "findUnique", never>,
          never,
          ExtArgs
        >
      : Prisma__AccountClient<
          $Types.GetResult<
            AccountPayload<ExtArgs>,
            T,
            "findUnique",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "findUniqueOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends AccountFindFirstArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Account"
    > extends True
      ? Prisma__AccountClient<
          $Types.GetResult<AccountPayload<ExtArgs>, T, "findFirst", never>,
          never,
          ExtArgs
        >
      : Prisma__AccountClient<
          $Types.GetResult<
            AccountPayload<ExtArgs>,
            T,
            "findFirst",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "findFirstOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "findMany", never>
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "create", never>,
      never,
      ExtArgs
    >;

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "delete", never>,
      never,
      ExtArgs
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "update", never>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Types.GetResult<AccountPayload<ExtArgs>, T, "upsert", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * @param {AccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const account = await prisma.account.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: AccountFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Account.
     * @param {AccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const account = await prisma.account.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: AccountAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    user<T extends UserArgs<ExtArgs> = {}>(
      args?: Subset<T, UserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findUnique", never> | Null,
      never,
      ExtArgs
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends AccountFindUniqueArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>;
  };

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends AccountFindFirstArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>;
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: Enumerable<AccountScalarFieldEnum>;
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
  };

  /**
   * Account findRaw
   */
  export type AccountFindRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Account aggregateRaw
   */
  export type AccountAggregateRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Account without action
   */
  export type AccountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  export type SessionMinAggregateOutputType = {
    id: string | null;
    sessionToken: string | null;
    userId: string | null;
    expires: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SessionMaxAggregateOutputType = {
    id: string | null;
    sessionToken: string | null;
    userId: string | null;
    expires: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type SessionCountAggregateOutputType = {
    id: number;
    sessionToken: number;
    userId: number;
    expires: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type SessionMinAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SessionMaxAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type SessionCountAggregateInputType = {
    id?: true;
    sessionToken?: true;
    userId?: true;
    expires?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType;
  };

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>;
  };

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>;
    by: SessionScalarFieldEnum[];
    having?: SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
  };

  export type SessionGroupByOutputType = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickArray<SessionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SessionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>;
        }
      >
    >;

  export type SessionSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      sessionToken?: boolean;
      userId?: boolean;
      expires?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectScalar = {
    id?: boolean;
    sessionToken?: boolean;
    userId?: boolean;
    expires?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type SessionInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserArgs<ExtArgs>;
  };

  type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    $Types.GetResult<SessionPayload, S>;

  type SessionCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<SessionFindManyArgs, "select" | "include"> & {
    select?: SessionCountAggregateInputType | true;
  };

  export interface SessionDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Session"];
      meta: { name: "Session" };
    };
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends SessionFindUniqueArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Session"
    > extends True
      ? Prisma__SessionClient<
          $Types.GetResult<SessionPayload<ExtArgs>, T, "findUnique", never>,
          never,
          ExtArgs
        >
      : Prisma__SessionClient<
          $Types.GetResult<
            SessionPayload<ExtArgs>,
            T,
            "findUnique",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "findUniqueOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends SessionFindFirstArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Session"
    > extends True
      ? Prisma__SessionClient<
          $Types.GetResult<SessionPayload<ExtArgs>, T, "findFirst", never>,
          never,
          ExtArgs
        >
      : Prisma__SessionClient<
          $Types.GetResult<
            SessionPayload<ExtArgs>,
            T,
            "findFirst",
            never
          > | null,
          null,
          ExtArgs
        >;

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "findFirstOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "findMany", never>
    >;

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "create", never>,
      never,
      ExtArgs
    >;

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "delete", never>,
      never,
      ExtArgs
    >;

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "update", never>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Types.GetResult<SessionPayload<ExtArgs>, T, "upsert", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * @param {SessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const session = await prisma.session.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: SessionFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Session.
     * @param {SessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const session = await prisma.session.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(
      args?: SessionAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>;

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs["orderBy"] }
        : { orderBy?: SessionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    user<T extends UserArgs<ExtArgs> = {}>(
      args?: Subset<T, UserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, "findUnique", never> | Null,
      never,
      ExtArgs
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends SessionFindUniqueArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>;
  };

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends SessionFindFirstArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>;
  };

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    distinct?: Enumerable<SessionScalarFieldEnum>;
  };

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
  };

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>;
  };

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
  };

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput;
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
  };

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput;
  };

  /**
   * Session findRaw
   */
  export type SessionFindRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Session aggregateRaw
   */
  export type SessionAggregateRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Session without action
   */
  export type SessionArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null;
  };

  /**
   * Model blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null;
    _min: BlogMinAggregateOutputType | null;
    _max: BlogMaxAggregateOutputType | null;
  };

  export type BlogMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    createAt: Date | null;
    image: string | null;
  };

  export type BlogMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    content: string | null;
    createAt: Date | null;
    image: string | null;
  };

  export type BlogCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    createAt: number;
    image: number;
    _all: number;
  };

  export type BlogMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createAt?: true;
    image?: true;
  };

  export type BlogMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createAt?: true;
    image?: true;
  };

  export type BlogCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createAt?: true;
    image?: true;
    _all?: true;
  };

  export type BlogAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which blog to aggregate.
     */
    where?: blogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: Enumerable<blogOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: blogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned blogs
     **/
    _count?: true | BlogCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BlogMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BlogMaxAggregateInputType;
  };

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
    [P in keyof T & keyof AggregateBlog]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>;
  };

  export type BlogGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: blogWhereInput;
    orderBy?: Enumerable<blogOrderByWithAggregationInput>;
    by: BlogScalarFieldEnum[];
    having?: blogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BlogCountAggregateInputType | true;
    _min?: BlogMinAggregateInputType;
    _max?: BlogMaxAggregateInputType;
  };

  export type BlogGroupByOutputType = {
    id: string;
    title: string;
    content: string;
    createAt: Date;
    image: string;
    _count: BlogCountAggregateOutputType | null;
    _min: BlogMinAggregateOutputType | null;
    _max: BlogMaxAggregateOutputType | null;
  };

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BlogGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof BlogGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
          : GetScalarType<T[P], BlogGroupByOutputType[P]>;
      }
    >
  >;

  export type blogSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      createAt?: boolean;
      image?: boolean;
    },
    ExtArgs["result"]["blog"]
  >;

  export type blogSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    createAt?: boolean;
    image?: boolean;
  };

  type blogGetPayload<S extends boolean | null | undefined | blogArgs> =
    $Types.GetResult<blogPayload, S>;

  type blogCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<blogFindManyArgs, "select" | "include"> & {
    select?: BlogCountAggregateInputType | true;
  };

  export interface blogDelegate<
    GlobalRejectSettings extends
      | Prisma.RejectOnNotFound
      | Prisma.RejectPerOperation
      | false
      | undefined,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["blog"];
      meta: { name: "blog" };
    };
    /**
     * Find zero or one Blog that matches the filter.
     * @param {blogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends blogFindUniqueArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args: SelectSubset<T, blogFindUniqueArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "blog"
    > extends True
      ? Prisma__blogClient<
          $Types.GetResult<blogPayload<ExtArgs>, T, "findUnique", never>,
          never,
          ExtArgs
        >
      : Prisma__blogClient<
          $Types.GetResult<blogPayload<ExtArgs>, T, "findUnique", never> | null,
          null,
          ExtArgs
        >;

    /**
     * Find one Blog that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {blogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends blogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "findUniqueOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends blogFindFirstArgs<ExtArgs>,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined,
    >(
      args?: SelectSubset<T, blogFindFirstArgs<ExtArgs>>,
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "blog"
    > extends True
      ? Prisma__blogClient<
          $Types.GetResult<blogPayload<ExtArgs>, T, "findFirst", never>,
          never,
          ExtArgs
        >
      : Prisma__blogClient<
          $Types.GetResult<blogPayload<ExtArgs>, T, "findFirst", never> | null,
          null,
          ExtArgs
        >;

    /**
     * Find the first Blog that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends blogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "findFirstOrThrow", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     *
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends blogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<blogPayload<ExtArgs>, T, "findMany", never>
    >;

    /**
     * Create a Blog.
     * @param {blogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     *
     **/
    create<T extends blogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, blogCreateArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "create", never>,
      never,
      ExtArgs
    >;

    /**
     * Create many Blogs.
     *     @param {blogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends blogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Blog.
     * @param {blogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     *
     **/
    delete<T extends blogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, blogDeleteArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "delete", never>,
      never,
      ExtArgs
    >;

    /**
     * Update one Blog.
     * @param {blogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends blogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpdateArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "update", never>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Blogs.
     * @param {blogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends blogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, blogDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends blogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Blog.
     * @param {blogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     **/
    upsert<T extends blogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, blogUpsertArgs<ExtArgs>>,
    ): Prisma__blogClient<
      $Types.GetResult<blogPayload<ExtArgs>, T, "upsert", never>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Blogs that matches the filter.
     * @param {blogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blog = await prisma.blog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     **/
    findRaw(args?: blogFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Blog.
     * @param {blogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blog = await prisma.blog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     **/
    aggregateRaw(args?: blogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {blogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
     **/
    count<T extends blogCountArgs>(
      args?: Subset<T, blogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], BlogCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BlogAggregateArgs>(
      args: Subset<T, BlogAggregateArgs>,
    ): Prisma.PrismaPromise<GetBlogAggregateType<T>>;

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs["orderBy"] }
        : { orderBy?: BlogGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBlogGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__blogClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * blog base type for findUnique actions
   */
  export type blogFindUniqueArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter, which blog to fetch.
     */
    where: blogWhereUniqueInput;
  };

  /**
   * blog findUnique
   */
  export interface blogFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends blogFindUniqueArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * blog findUniqueOrThrow
   */
  export type blogFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter, which blog to fetch.
     */
    where: blogWhereUniqueInput;
  };

  /**
   * blog base type for findFirst actions
   */
  export type blogFindFirstArgsBase<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter, which blog to fetch.
     */
    where?: blogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: Enumerable<blogOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blogs.
     */
    cursor?: blogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blogs.
     */
    distinct?: Enumerable<BlogScalarFieldEnum>;
  };

  /**
   * blog findFirst
   */
  export interface blogFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > extends blogFindFirstArgsBase<ExtArgs> {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * blog findFirstOrThrow
   */
  export type blogFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter, which blog to fetch.
     */
    where?: blogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: Enumerable<blogOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for blogs.
     */
    cursor?: blogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of blogs.
     */
    distinct?: Enumerable<BlogScalarFieldEnum>;
  };

  /**
   * blog findMany
   */
  export type blogFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter, which blogs to fetch.
     */
    where?: blogWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of blogs to fetch.
     */
    orderBy?: Enumerable<blogOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing blogs.
     */
    cursor?: blogWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` blogs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` blogs.
     */
    skip?: number;
    distinct?: Enumerable<BlogScalarFieldEnum>;
  };

  /**
   * blog create
   */
  export type blogCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * The data needed to create a blog.
     */
    data: XOR<blogCreateInput, blogUncheckedCreateInput>;
  };

  /**
   * blog createMany
   */
  export type blogCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many blogs.
     */
    data: Enumerable<blogCreateManyInput>;
  };

  /**
   * blog update
   */
  export type blogUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * The data needed to update a blog.
     */
    data: XOR<blogUpdateInput, blogUncheckedUpdateInput>;
    /**
     * Choose, which blog to update.
     */
    where: blogWhereUniqueInput;
  };

  /**
   * blog updateMany
   */
  export type blogUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update blogs.
     */
    data: XOR<blogUpdateManyMutationInput, blogUncheckedUpdateManyInput>;
    /**
     * Filter which blogs to update
     */
    where?: blogWhereInput;
  };

  /**
   * blog upsert
   */
  export type blogUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * The filter to search for the blog to update in case it exists.
     */
    where: blogWhereUniqueInput;
    /**
     * In case the blog found by the `where` argument doesn't exist, create a new blog with this data.
     */
    create: XOR<blogCreateInput, blogUncheckedCreateInput>;
    /**
     * In case the blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<blogUpdateInput, blogUncheckedUpdateInput>;
  };

  /**
   * blog delete
   */
  export type blogDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
    /**
     * Filter which blog to delete.
     */
    where: blogWhereUniqueInput;
  };

  /**
   * blog deleteMany
   */
  export type blogDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which blogs to delete
     */
    where?: blogWhereInput;
  };

  /**
   * blog findRaw
   */
  export type blogFindRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * blog aggregateRaw
   */
  export type blogAggregateRawArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * blog without action
   */
  export type blogArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the blog
     */
    select?: blogSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    emailVerified: "emailVerified";
    image: "image";
    roles: "roles";
    isActive: "isActive";
    password: "password";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const AuthenticatorScalarFieldEnum: {
    credentialID: "credentialID";
    userId: "userId";
    providerAccountId: "providerAccountId";
    credentialPublicKey: "credentialPublicKey";
    counter: "counter";
    credentialDeviceType: "credentialDeviceType";
    credentialBackedUp: "credentialBackedUp";
    transports: "transports";
  };

  export type AuthenticatorScalarFieldEnum =
    (typeof AuthenticatorScalarFieldEnum)[keyof typeof AuthenticatorScalarFieldEnum];

  export const AccountScalarFieldEnum: {
    id: "id";
    userId: "userId";
    type: "type";
    provider: "provider";
    providerAccountId: "providerAccountId";
    refresh_token: "refresh_token";
    access_token: "access_token";
    expires_at: "expires_at";
    token_type: "token_type";
    scope: "scope";
    id_token: "id_token";
    session_state: "session_state";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const SessionScalarFieldEnum: {
    id: "id";
    sessionToken: "sessionToken";
    userId: "userId";
    expires: "expires";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];

  export const BlogScalarFieldEnum: {
    id: "id";
    title: "title";
    content: "content";
    createAt: "createAt";
    image: "image";
  };

  export type BlogScalarFieldEnum =
    (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>;
    OR?: Enumerable<UserWhereInput>;
    NOT?: Enumerable<UserWhereInput>;
    id?: StringFilter | string;
    email?: StringFilter | string;
    name?: StringFilter | string;
    emailVerified?: DateTimeNullableFilter | Date | string | null;
    image?: StringNullableFilter | string | null;
    roles?: StringNullableListFilter;
    isActive?: BoolFilter | boolean;
    password?: StringNullableFilter | string | null;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    accounts?: AccountListRelationFilter;
    sessions?: SessionListRelationFilter;
    Authenticator?: AuthenticatorListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    roles?: SortOrder;
    isActive?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    accounts?: AccountOrderByRelationAggregateInput;
    sessions?: SessionOrderByRelationAggregateInput;
    Authenticator?: AuthenticatorOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = {
    id?: string;
    email?: string;
  };

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    roles?: SortOrder;
    isActive?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>;
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    email?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null;
    image?: StringNullableWithAggregatesFilter | string | null;
    roles?: StringNullableListFilter;
    isActive?: BoolWithAggregatesFilter | boolean;
    password?: StringNullableWithAggregatesFilter | string | null;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type AuthenticatorWhereInput = {
    AND?: Enumerable<AuthenticatorWhereInput>;
    OR?: Enumerable<AuthenticatorWhereInput>;
    NOT?: Enumerable<AuthenticatorWhereInput>;
    credentialID?: StringFilter | string;
    userId?: StringFilter | string;
    providerAccountId?: StringFilter | string;
    credentialPublicKey?: StringFilter | string;
    counter?: IntFilter | number;
    credentialDeviceType?: StringFilter | string;
    credentialBackedUp?: BoolFilter | boolean;
    transports?: StringNullableFilter | string | null;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type AuthenticatorOrderByWithRelationInput = {
    credentialID?: SortOrder;
    userId?: SortOrder;
    providerAccountId?: SortOrder;
    credentialPublicKey?: SortOrder;
    counter?: SortOrder;
    credentialDeviceType?: SortOrder;
    credentialBackedUp?: SortOrder;
    transports?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AuthenticatorWhereUniqueInput = {
    credentialID?: string;
    userId_credentialID?: AuthenticatorUserIdCredentialIDCompoundUniqueInput;
  };

  export type AuthenticatorOrderByWithAggregationInput = {
    credentialID?: SortOrder;
    userId?: SortOrder;
    providerAccountId?: SortOrder;
    credentialPublicKey?: SortOrder;
    counter?: SortOrder;
    credentialDeviceType?: SortOrder;
    credentialBackedUp?: SortOrder;
    transports?: SortOrder;
    _count?: AuthenticatorCountOrderByAggregateInput;
    _avg?: AuthenticatorAvgOrderByAggregateInput;
    _max?: AuthenticatorMaxOrderByAggregateInput;
    _min?: AuthenticatorMinOrderByAggregateInput;
    _sum?: AuthenticatorSumOrderByAggregateInput;
  };

  export type AuthenticatorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AuthenticatorScalarWhereWithAggregatesInput>;
    OR?: Enumerable<AuthenticatorScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<AuthenticatorScalarWhereWithAggregatesInput>;
    credentialID?: StringWithAggregatesFilter | string;
    userId?: StringWithAggregatesFilter | string;
    providerAccountId?: StringWithAggregatesFilter | string;
    credentialPublicKey?: StringWithAggregatesFilter | string;
    counter?: IntWithAggregatesFilter | number;
    credentialDeviceType?: StringWithAggregatesFilter | string;
    credentialBackedUp?: BoolWithAggregatesFilter | boolean;
    transports?: StringNullableWithAggregatesFilter | string | null;
  };

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>;
    OR?: Enumerable<AccountWhereInput>;
    NOT?: Enumerable<AccountWhereInput>;
    id?: StringFilter | string;
    userId?: StringFilter | string;
    type?: StringFilter | string;
    provider?: StringFilter | string;
    providerAccountId?: StringFilter | string;
    refresh_token?: StringNullableFilter | string | null;
    access_token?: StringNullableFilter | string | null;
    expires_at?: IntNullableFilter | number | null;
    token_type?: StringNullableFilter | string | null;
    scope?: StringNullableFilter | string | null;
    id_token?: StringNullableFilter | string | null;
    session_state?: StringNullableFilter | string | null;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = {
    id?: string;
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput;
  };

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _avg?: AccountAvgOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
    _sum?: AccountSumOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>;
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    userId?: StringWithAggregatesFilter | string;
    type?: StringWithAggregatesFilter | string;
    provider?: StringWithAggregatesFilter | string;
    providerAccountId?: StringWithAggregatesFilter | string;
    refresh_token?: StringNullableWithAggregatesFilter | string | null;
    access_token?: StringNullableWithAggregatesFilter | string | null;
    expires_at?: IntNullableWithAggregatesFilter | number | null;
    token_type?: StringNullableWithAggregatesFilter | string | null;
    scope?: StringNullableWithAggregatesFilter | string | null;
    id_token?: StringNullableWithAggregatesFilter | string | null;
    session_state?: StringNullableWithAggregatesFilter | string | null;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>;
    OR?: Enumerable<SessionWhereInput>;
    NOT?: Enumerable<SessionWhereInput>;
    id?: StringFilter | string;
    sessionToken?: StringFilter | string;
    userId?: StringFilter | string;
    expires?: DateTimeFilter | Date | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    user?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SessionWhereUniqueInput = {
    id?: string;
    sessionToken?: string;
  };

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: SessionCountOrderByAggregateInput;
    _max?: SessionMaxOrderByAggregateInput;
    _min?: SessionMinOrderByAggregateInput;
  };

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>;
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    sessionToken?: StringWithAggregatesFilter | string;
    userId?: StringWithAggregatesFilter | string;
    expires?: DateTimeWithAggregatesFilter | Date | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type blogWhereInput = {
    AND?: Enumerable<blogWhereInput>;
    OR?: Enumerable<blogWhereInput>;
    NOT?: Enumerable<blogWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    content?: StringFilter | string;
    createAt?: DateTimeFilter | Date | string;
    image?: StringFilter | string;
  };

  export type blogOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createAt?: SortOrder;
    image?: SortOrder;
  };

  export type blogWhereUniqueInput = {
    id?: string;
  };

  export type blogOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createAt?: SortOrder;
    image?: SortOrder;
    _count?: blogCountOrderByAggregateInput;
    _max?: blogMaxOrderByAggregateInput;
    _min?: blogMinOrderByAggregateInput;
  };

  export type blogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<blogScalarWhereWithAggregatesInput>;
    OR?: Enumerable<blogScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<blogScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringWithAggregatesFilter | string;
    content?: StringWithAggregatesFilter | string;
    createAt?: DateTimeWithAggregatesFilter | Date | string;
    image?: StringWithAggregatesFilter | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuthenticatorCreateInput = {
    credentialID: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
    user: UserCreateNestedOneWithoutAuthenticatorInput;
  };

  export type AuthenticatorUncheckedCreateInput = {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  };

  export type AuthenticatorUpdateInput = {
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutAuthenticatorNestedInput;
  };

  export type AuthenticatorUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthenticatorCreateManyInput = {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  };

  export type AuthenticatorUpdateManyMutationInput = {
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthenticatorUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountCreateInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutAccountsInput;
  };

  export type AccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateManyInput = {
    id?: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutSessionsInput;
  };

  export type SessionUncheckedCreateInput = {
    id?: string;
    sessionToken: string;
    userId: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput;
  };

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionCreateManyInput = {
    id?: string;
    sessionToken: string;
    userId: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type blogCreateInput = {
    id?: string;
    title: string;
    content: string;
    createAt?: Date | string;
    image: string;
  };

  export type blogUncheckedCreateInput = {
    id?: string;
    title: string;
    content: string;
    createAt?: Date | string;
    image: string;
  };

  export type blogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type blogUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type blogCreateManyInput = {
    id?: string;
    title: string;
    content: string;
    createAt?: Date | string;
    image: string;
  };

  export type blogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type blogUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    image?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringFilter | string;
  };

  export type DateTimeNullableFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableFilter | Date | string | null;
    isSet?: boolean;
  };

  export type StringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableFilter | string | null;
    isSet?: boolean;
  };

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null;
    has?: string | null;
    hasEvery?: Enumerable<string>;
    hasSome?: Enumerable<string>;
    isEmpty?: boolean;
  };

  export type BoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type DateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type SessionListRelationFilter = {
    every?: SessionWhereInput;
    some?: SessionWhereInput;
    none?: SessionWhereInput;
  };

  export type AuthenticatorListRelationFilter = {
    every?: AuthenticatorWhereInput;
    some?: AuthenticatorWhereInput;
    none?: AuthenticatorWhereInput;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AuthenticatorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    roles?: SortOrder;
    isActive?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    isActive?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    isActive?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedDateTimeNullableFilter;
    _max?: NestedDateTimeNullableFilter;
    isSet?: boolean;
  };

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
    isSet?: boolean;
  };

  export type BoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type IntFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type AuthenticatorUserIdCredentialIDCompoundUniqueInput = {
    userId: string;
    credentialID: string;
  };

  export type AuthenticatorCountOrderByAggregateInput = {
    credentialID?: SortOrder;
    userId?: SortOrder;
    providerAccountId?: SortOrder;
    credentialPublicKey?: SortOrder;
    counter?: SortOrder;
    credentialDeviceType?: SortOrder;
    credentialBackedUp?: SortOrder;
    transports?: SortOrder;
  };

  export type AuthenticatorAvgOrderByAggregateInput = {
    counter?: SortOrder;
  };

  export type AuthenticatorMaxOrderByAggregateInput = {
    credentialID?: SortOrder;
    userId?: SortOrder;
    providerAccountId?: SortOrder;
    credentialPublicKey?: SortOrder;
    counter?: SortOrder;
    credentialDeviceType?: SortOrder;
    credentialBackedUp?: SortOrder;
    transports?: SortOrder;
  };

  export type AuthenticatorMinOrderByAggregateInput = {
    credentialID?: SortOrder;
    userId?: SortOrder;
    providerAccountId?: SortOrder;
    credentialPublicKey?: SortOrder;
    counter?: SortOrder;
    credentialDeviceType?: SortOrder;
    credentialBackedUp?: SortOrder;
    transports?: SortOrder;
  };

  export type AuthenticatorSumOrderByAggregateInput = {
    counter?: SortOrder;
  };

  export type IntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type IntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
    isSet?: boolean;
  };

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string;
    providerAccountId: string;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    type?: SortOrder;
    provider?: SortOrder;
    providerAccountId?: SortOrder;
    refresh_token?: SortOrder;
    access_token?: SortOrder;
    expires_at?: SortOrder;
    token_type?: SortOrder;
    scope?: SortOrder;
    id_token?: SortOrder;
    session_state?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableWithAggregatesFilter | number | null;
    _count?: NestedIntNullableFilter;
    _avg?: NestedFloatNullableFilter;
    _sum?: NestedIntNullableFilter;
    _min?: NestedIntNullableFilter;
    _max?: NestedIntNullableFilter;
    isSet?: boolean;
  };

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder;
    sessionToken?: SortOrder;
    userId?: SortOrder;
    expires?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type blogCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createAt?: SortOrder;
    image?: SortOrder;
  };

  export type blogMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createAt?: SortOrder;
    image?: SortOrder;
  };

  export type blogMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createAt?: SortOrder;
    image?: SortOrder;
  };

  export type UserCreaterolesInput = {
    set: Enumerable<string>;
  };

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>;
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: Enumerable<AccountWhereUniqueInput>;
  };

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>;
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: Enumerable<SessionWhereUniqueInput>;
  };

  export type AuthenticatorCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AuthenticatorCreateWithoutUserInput>,
      Enumerable<AuthenticatorUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AuthenticatorCreateOrConnectWithoutUserInput>;
    createMany?: AuthenticatorCreateManyUserInputEnvelope;
    connect?: Enumerable<AuthenticatorWhereUniqueInput>;
  };

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>;
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: Enumerable<AccountWhereUniqueInput>;
  };

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>;
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: Enumerable<SessionWhereUniqueInput>;
  };

  export type AuthenticatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<
      Enumerable<AuthenticatorCreateWithoutUserInput>,
      Enumerable<AuthenticatorUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AuthenticatorCreateOrConnectWithoutUserInput>;
    createMany?: AuthenticatorCreateManyUserInputEnvelope;
    connect?: Enumerable<AuthenticatorWhereUniqueInput>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
    unset?: boolean;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type UserUpdaterolesInput = {
    set?: Enumerable<string>;
    push?: string | Enumerable<string>;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: Enumerable<AccountWhereUniqueInput>;
    disconnect?: Enumerable<AccountWhereUniqueInput>;
    delete?: Enumerable<AccountWhereUniqueInput>;
    connect?: Enumerable<AccountWhereUniqueInput>;
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<AccountScalarWhereInput>;
  };

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: Enumerable<SessionWhereUniqueInput>;
    disconnect?: Enumerable<SessionWhereUniqueInput>;
    delete?: Enumerable<SessionWhereUniqueInput>;
    connect?: Enumerable<SessionWhereUniqueInput>;
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<SessionScalarWhereInput>;
  };

  export type AuthenticatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<AuthenticatorCreateWithoutUserInput>,
      Enumerable<AuthenticatorUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AuthenticatorCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<AuthenticatorUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: AuthenticatorCreateManyUserInputEnvelope;
    set?: Enumerable<AuthenticatorWhereUniqueInput>;
    disconnect?: Enumerable<AuthenticatorWhereUniqueInput>;
    delete?: Enumerable<AuthenticatorWhereUniqueInput>;
    connect?: Enumerable<AuthenticatorWhereUniqueInput>;
    update?: Enumerable<AuthenticatorUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<AuthenticatorUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<AuthenticatorScalarWhereInput>;
  };

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<AccountCreateWithoutUserInput>,
      Enumerable<AccountUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: Enumerable<AccountWhereUniqueInput>;
    disconnect?: Enumerable<AccountWhereUniqueInput>;
    delete?: Enumerable<AccountWhereUniqueInput>;
    connect?: Enumerable<AccountWhereUniqueInput>;
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<AccountScalarWhereInput>;
  };

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<SessionCreateWithoutUserInput>,
      Enumerable<SessionUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: Enumerable<SessionWhereUniqueInput>;
    disconnect?: Enumerable<SessionWhereUniqueInput>;
    delete?: Enumerable<SessionWhereUniqueInput>;
    connect?: Enumerable<SessionWhereUniqueInput>;
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<SessionScalarWhereInput>;
  };

  export type AuthenticatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<
      Enumerable<AuthenticatorCreateWithoutUserInput>,
      Enumerable<AuthenticatorUncheckedCreateWithoutUserInput>
    >;
    connectOrCreate?: Enumerable<AuthenticatorCreateOrConnectWithoutUserInput>;
    upsert?: Enumerable<AuthenticatorUpsertWithWhereUniqueWithoutUserInput>;
    createMany?: AuthenticatorCreateManyUserInputEnvelope;
    set?: Enumerable<AuthenticatorWhereUniqueInput>;
    disconnect?: Enumerable<AuthenticatorWhereUniqueInput>;
    delete?: Enumerable<AuthenticatorWhereUniqueInput>;
    connect?: Enumerable<AuthenticatorWhereUniqueInput>;
    update?: Enumerable<AuthenticatorUpdateWithWhereUniqueWithoutUserInput>;
    updateMany?: Enumerable<AuthenticatorUpdateManyWithWhereWithoutUserInput>;
    deleteMany?: Enumerable<AuthenticatorScalarWhereInput>;
  };

  export type UserCreateNestedOneWithoutAuthenticatorInput = {
    create?: XOR<
      UserCreateWithoutAuthenticatorInput,
      UserUncheckedCreateWithoutAuthenticatorInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutAuthenticatorNestedInput = {
    create?: XOR<
      UserCreateWithoutAuthenticatorInput,
      UserUncheckedCreateWithoutAuthenticatorInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticatorInput;
    upsert?: UserUpsertWithoutAuthenticatorInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      UserUpdateWithoutAuthenticatorInput,
      UserUncheckedUpdateWithoutAuthenticatorInput
    >;
  };

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
  };

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    upsert?: UserUpsertWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    upsert?: UserUpsertWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableFilter | Date | string | null;
    isSet?: boolean;
  };

  export type NestedStringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableFilter | string | null;
    isSet?: boolean;
  };

  export type NestedBoolFilter = {
    equals?: boolean;
    not?: NestedBoolFilter | boolean;
  };

  export type NestedDateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null;
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedDateTimeNullableFilter;
    _max?: NestedDateTimeNullableFilter;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
    isSet?: boolean;
  };

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
    isSet?: boolean;
  };

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean;
    not?: NestedBoolWithAggregatesFilter | boolean;
    _count?: NestedIntFilter;
    _min?: NestedBoolFilter;
    _max?: NestedBoolFilter;
  };

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type NestedIntWithAggregatesFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntWithAggregatesFilter | number;
    _count?: NestedIntFilter;
    _avg?: NestedFloatFilter;
    _sum?: NestedIntFilter;
    _min?: NestedIntFilter;
    _max?: NestedIntFilter;
  };

  export type NestedFloatFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatFilter | number;
  };

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableWithAggregatesFilter | number | null;
    _count?: NestedIntNullableFilter;
    _avg?: NestedFloatNullableFilter;
    _sum?: NestedIntNullableFilter;
    _min?: NestedIntNullableFilter;
    _max?: NestedIntNullableFilter;
    isSet?: boolean;
  };

  export type NestedFloatNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatNullableFilter | number | null;
    isSet?: boolean;
  };

  export type AccountCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>;
  };

  export type SessionCreateWithoutUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>;
  };

  export type AuthenticatorCreateWithoutUserInput = {
    credentialID: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  };

  export type AuthenticatorUncheckedCreateWithoutUserInput = {
    credentialID: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  };

  export type AuthenticatorCreateOrConnectWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput;
    create: XOR<
      AuthenticatorCreateWithoutUserInput,
      AuthenticatorUncheckedCreateWithoutUserInput
    >;
  };

  export type AuthenticatorCreateManyUserInputEnvelope = {
    data: Enumerable<AuthenticatorCreateManyUserInput>;
  };

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutAccountsInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>;
    OR?: Enumerable<AccountScalarWhereInput>;
    NOT?: Enumerable<AccountScalarWhereInput>;
    id?: StringFilter | string;
    userId?: StringFilter | string;
    type?: StringFilter | string;
    provider?: StringFilter | string;
    providerAccountId?: StringFilter | string;
    refresh_token?: StringNullableFilter | string | null;
    access_token?: StringNullableFilter | string | null;
    expires_at?: IntNullableFilter | number | null;
    token_type?: StringNullableFilter | string | null;
    scope?: StringNullableFilter | string | null;
    id_token?: StringNullableFilter | string | null;
    session_state?: StringNullableFilter | string | null;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    update: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    data: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput;
    data: XOR<
      SessionUpdateManyMutationInput,
      SessionUncheckedUpdateManyWithoutSessionsInput
    >;
  };

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>;
    OR?: Enumerable<SessionScalarWhereInput>;
    NOT?: Enumerable<SessionScalarWhereInput>;
    id?: StringFilter | string;
    sessionToken?: StringFilter | string;
    userId?: StringFilter | string;
    expires?: DateTimeFilter | Date | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type AuthenticatorUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput;
    update: XOR<
      AuthenticatorUpdateWithoutUserInput,
      AuthenticatorUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AuthenticatorCreateWithoutUserInput,
      AuthenticatorUncheckedCreateWithoutUserInput
    >;
  };

  export type AuthenticatorUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthenticatorWhereUniqueInput;
    data: XOR<
      AuthenticatorUpdateWithoutUserInput,
      AuthenticatorUncheckedUpdateWithoutUserInput
    >;
  };

  export type AuthenticatorUpdateManyWithWhereWithoutUserInput = {
    where: AuthenticatorScalarWhereInput;
    data: XOR<
      AuthenticatorUpdateManyMutationInput,
      AuthenticatorUncheckedUpdateManyWithoutAuthenticatorInput
    >;
  };

  export type AuthenticatorScalarWhereInput = {
    AND?: Enumerable<AuthenticatorScalarWhereInput>;
    OR?: Enumerable<AuthenticatorScalarWhereInput>;
    NOT?: Enumerable<AuthenticatorScalarWhereInput>;
    credentialID?: StringFilter | string;
    userId?: StringFilter | string;
    providerAccountId?: StringFilter | string;
    credentialPublicKey?: StringFilter | string;
    counter?: IntFilter | number;
    credentialDeviceType?: StringFilter | string;
    credentialBackedUp?: BoolFilter | boolean;
    transports?: StringNullableFilter | string | null;
  };

  export type UserCreateWithoutAuthenticatorInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    sessions?: SessionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAuthenticatorInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAuthenticatorInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAuthenticatorInput,
      UserUncheckedCreateWithoutAuthenticatorInput
    >;
  };

  export type UserUpsertWithoutAuthenticatorInput = {
    update: XOR<
      UserUpdateWithoutAuthenticatorInput,
      UserUncheckedUpdateWithoutAuthenticatorInput
    >;
    create: XOR<
      UserCreateWithoutAuthenticatorInput,
      UserUncheckedCreateWithoutAuthenticatorInput
    >;
  };

  export type UserUpdateWithoutAuthenticatorInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAuthenticatorInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string;
    email: string;
    name: string;
    emailVerified?: Date | string | null;
    image?: string | null;
    roles?: UserCreaterolesInput | Enumerable<string>;
    isActive?: boolean;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    Authenticator?: AuthenticatorUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
  };

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
  };

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    emailVerified?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | Enumerable<string>;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    Authenticator?: AuthenticatorUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type AccountCreateManyUserInput = {
    id?: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionCreateManyUserInput = {
    id?: string;
    sessionToken: string;
    expires: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AuthenticatorCreateManyUserInput = {
    credentialID: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  };

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    type?: StringFieldUpdateOperationsInput | string;
    provider?: StringFieldUpdateOperationsInput | string;
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null;
    access_token?: NullableStringFieldUpdateOperationsInput | string | null;
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null;
    token_type?: NullableStringFieldUpdateOperationsInput | string | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    id_token?: NullableStringFieldUpdateOperationsInput | string | null;
    session_state?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string;
    expires?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AuthenticatorUpdateWithoutUserInput = {
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthenticatorUncheckedUpdateWithoutUserInput = {
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AuthenticatorUncheckedUpdateManyWithoutAuthenticatorInput = {
    providerAccountId?: StringFieldUpdateOperationsInput | string;
    credentialPublicKey?: StringFieldUpdateOperationsInput | string;
    counter?: IntFieldUpdateOperationsInput | number;
    credentialDeviceType?: StringFieldUpdateOperationsInput | string;
    credentialBackedUp?: BoolFieldUpdateOperationsInput | boolean;
    transports?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}

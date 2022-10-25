// src/server/trpc/router/_app.ts
import {router} from "../trpc";
import {exampleRouter} from "./example";
import {authRouter} from "./auth";
import {nftRouter} from "./nft";

export const appRouter = router({
    example: exampleRouter,
    auth: authRouter,
    nft: nftRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

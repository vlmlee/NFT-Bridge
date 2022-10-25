import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const nftRouter = router({
  nft: publicProcedure
    .input(z.object({ id: z.any().nullish() }).nullish())
    .query(({ ctx, input }) => {
      const nft = ctx.prisma.nft.findUnique({
        where: {
          id: input?.id,
        },
      });

      return {
        nft: nft,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.nft.findMany();
  }),
});

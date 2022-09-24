import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftBridge } from "../target/types/nft_bridge";

describe("nft-bridge", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NftBridge as Program<NftBridge>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});

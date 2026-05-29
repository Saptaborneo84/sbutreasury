export async function GET() {
  return Response.json({
    status: "ok",
    platform: "SBUTreasury",
    service: "sbutreasury-web3",
    time: new Date().toISOString()
  });
}

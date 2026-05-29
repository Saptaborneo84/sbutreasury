import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const pinataForm = new FormData();
    pinataForm.append("file", file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
      },
      body: pinataForm,
    });

    const data = await res.json();

    return NextResponse.json({
      success: res.ok,
      ipfs_hash: data.IpfsHash,
      ipfs_url: `https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/ipfs/${data.IpfsHash}`,
      raw: data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Pinata upload failed", message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "Pinata upload API online",
    method: "POST required",
  });
}

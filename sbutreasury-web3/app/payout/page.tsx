"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import ProtectedRoute from "../components/ProtectedRoute";

export default function PayoutPage() {
  const { address } = useAccount();

  const [file, setFile] = useState<File | null>(null);
  const [txHash, setTxHash] = useState("");
  const [trn, setTrn] = useState("");
  const [uetr, setUetr] = useState("");
  const [status, setStatus] = useState("");
  const [ipfsUrl, setIpfsUrl] = useState("");
  const [proofSubmitted, setProofSubmitted] = useState(false);

  useEffect(() => {
    if (!address) return;

    const submitted = localStorage.getItem(
      `sbu-proof-${address.toLowerCase()}`
    );

    if (submitted) {
      setProofSubmitted(true);
    }
  }, [address]);

  async function submitVerification() {
    if (proofSubmitted) {
      setStatus("Proof already submitted.");
      return;
    }

    if (!txHash && !trn && !uetr && !file) {
      setStatus(
        "Please input transaction hash, TRN, UETR or upload proof."
      );
      return;
    }

    setStatus("Submitting verification...");

    if (!file) {
      localStorage.setItem(
        `sbu-proof-${address?.toLowerCase()}`,
        "submitted"
      );

      setProofSubmitted(true);

      setStatus(
        "Transaction reference submitted. Treasury review pending."
      );

      return;
    }

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("wallet", address || "");
      formData.append("txHash", txHash);
      formData.append("trn", trn);
      formData.append("uetr", uetr);

      const res = await fetch("/api/pinata-upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus(data.error || "Upload failed.");
        return;
      }

      setIpfsUrl(data.ipfs_url);

      const saveRes = await fetch("/api/investor-proof", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          wallet_address: address,
          tx_hash: txHash,
          trn,
          uetr,
          ipfs_url: data.ipfs_url
        })
      });

      const saveData = await saveRes.json();

      if (!saveData.success) {
        setStatus(saveData.message || saveData.error || "Proof already submitted.");
        setProofSubmitted(true);
        return;
      }

      localStorage.setItem(
        `sbu-proof-${address?.toLowerCase()}`,
        "submitted"
      );

      setProofSubmitted(true);

      setStatus(
        "Proof uploaded and saved successfully. Treasury review pending."
      );
    } catch {
      setStatus("Verification submission failed.");
    }
  }

  return (
    <ProtectedRoute>
      <section className="min-h-screen px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-emerald-400/30 bg-[#07142b] p-8 shadow-[0_0_45px_rgba(16,185,129,0.18)]">

          <h1 className="text-4xl font-black text-emerald-400 sm:text-6xl">
            Investor Payout Center
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            One proof of transaction is accepted per wallet.
          </p>

          <div className="mt-8 rounded-3xl border border-emerald-400/20 bg-black/40 p-6">
            <p className="text-slate-400">
              Connected Wallet
            </p>

            <p className="mt-3 break-all text-emerald-300">
              {address}
            </p>
          </div>

          <div className="mt-8 grid gap-6">

            <input
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              placeholder="Blockchain Transaction Hash"
              disabled={proofSubmitted}
              className="w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-white"
            />

            <input
              value={trn}
              onChange={(e) => setTrn(e.target.value)}
              placeholder="TRN / Transaction Reference Number"
              disabled={proofSubmitted}
              className="w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-white"
            />

            <input
              value={uetr}
              onChange={(e) => setUetr(e.target.value)}
              placeholder="UETR"
              disabled={proofSubmitted}
              className="w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-white"
            />

            <input
              type="file"
              disabled={proofSubmitted}
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
              className="w-full rounded-2xl border border-emerald-400/20 bg-black p-5 text-white"
            />

            <button
              onClick={submitVerification}
              disabled={proofSubmitted}
              className={
                proofSubmitted
                  ? "rounded-2xl bg-slate-700 px-8 py-5 text-xl font-black text-slate-400"
                  : "rounded-2xl bg-emerald-400 px-8 py-5 text-xl font-black text-black shadow-[0_0_35px_rgba(16,185,129,0.65)]"
              }
            >
              {proofSubmitted
                ? "✓ Proof Already Submitted"
                : "Submit Payout Verification"}
            </button>

            {status && (
              <div className="rounded-2xl bg-black/60 p-4 text-emerald-300">
                {status}
              </div>
            )}

            {ipfsUrl && (
              <a
                href={ipfsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline"
              >
                View Uploaded Proof
              </a>
            )}
          </div>

        </div>
      </section>
    </ProtectedRoute>
  );
}

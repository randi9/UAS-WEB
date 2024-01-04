"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pinggang, setPinggang] = useState(0);
  const [bahu, setBahu] = useState(0);
  const [tinggibadan, setTinggiBadan] = useState(0);
  const [jumlah, setJumlah] = useState(0);
  const [kain, setKain] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !kain ||
      !pinggang ||
      !bahu ||
      !tinggibadan ||
      !jumlah
    ) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          kain,
          pinggang,
          bahu,
          tinggibadan,
          jumlah,
        }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Judul pesanan"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="tuliskan detailnya"
      />
      <input
        onChange={(e) => setKain(e.target.value)}
        value={kain}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Mau kain apa"
      />
      <input
        onChange={(e) => setPinggang(e.target.value)}
        value={pinggang}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ukuran pinggang dalam cm"
      />
      <input
        onChange={(e) => setBahu(e.target.value)}
        value={bahu}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ukuran bahu dalam cm"
      />
      <input
        onChange={(e) => setTinggiBadan(e.target.value)}
        value={tinggibadan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ukuran Tinggi Badan dalam cm"
      />
      <input
        onChange={(e) => setJumlah(e.target.value)}
        value={jumlah}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Mau berapa baju"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Tambahkan pesanan
      </button>
    </form>
  );
}

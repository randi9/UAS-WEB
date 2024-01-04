"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({
  id,
  title,
  description,
  kain,
  pinggang,
  bahu,
  tinggibadan,
  jumlah,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newKain, setNewKain] = useState(kain);
  const [newPinggang, setNewPinggang] = useState(pinggang);
  const [newBahu, setNewBahu] = useState(bahu);
  const [newTinggiBadan, setNewTinggiBadan] = useState(tinggibadan);
  const [newJumlah, setNewJumlah] = useState(jumlah);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
          newKain,
          newPinggang,
          newBahu,
          newTinggiBadan,
          newJumlah,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah judul"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah detail"
      />
      <input
        onChange={(e) => setNewKain(e.target.value)}
        value={newKain}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah kain"
      />
      <input
        onChange={(e) => setNewPinggang(e.target.value)}
        value={newPinggang}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah ukuran pinggang"
      />
      <input
        onChange={(e) => setNewBahu(e.target.value)}
        value={newBahu}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah ukuran bahu"
      />
      <input
        onChange={(e) => setNewTinggiBadan(e.target.value)}
        value={newTinggiBadan}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah ukuran tinggi badan"
      />
      <input
        onChange={(e) => setNewJumlah(e.target.value)}
        value={newJumlah}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Ubah jumlah"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}

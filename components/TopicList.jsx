import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border borde r-slate-300 my-3 flex justify-between gap-5 items-start"
          style={{ background: "#9ecfff" }}
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
            <div>
              <strong>Kain:</strong> {t.kain}
            </div>
            <div>
              <strong>Ukuran Pinggang:</strong> {t.pinggang} cm
            </div>
            <div>
              <strong>Ukuran Bahu:</strong> {t.bahu} cm
            </div>
            <div>
              <strong>Tinggi Badan:</strong> {t.tinggibadan} cm
            </div>
            <div>
              <strong>Jumlah:</strong> {t.jumlah}
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-neutral-700 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Pesan Baju Custom
      </Link>
      <Link className="bg-white p-2" href={"/addTopic"}>
        Tambah Pesanan
      </Link>
    </nav>
  );
}

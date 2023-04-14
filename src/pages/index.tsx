import { Karla } from "next/font/google";
import Link from "next/link";

const karla = Karla({
  weight: "700",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex flex-col h-screen bg-[#04041A] items-center">
      <ul className="flex min-w-screen justify-center gap-[59px] mt-[56px]">
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Download</Link>
        </li>
        <li>
          <Link href="">Pricing</Link>
        </li>
        <li>
          <Link href="">Location</Link>
        </li>
        <li>
          <Link href="">FAQ</Link>
        </li>
        <li>
          <Link href="">Company</Link>
        </li>
      </ul>
      <div className={`text-5xl ${karla.className} mt-[136px]`}>Anonim IT</div>
      <div className="max-w-[424px] text-center text-base leading-[19px] mt-[70px]">Данный сайт сделан специально для онлайн вебинаров и онлайн школы так же мы тут публикуем все материалы для наших учеников.</div>
      <button><Link href="">Наш Discord</Link></button>
      </section>
    </main>
  )
}

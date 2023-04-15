import { Karla } from "next/font/google";
import Link from "next/link";
import Layout from "@/components/layout";

const karla = Karla({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <Layout>
          <div className={`text-5xl ${karla.className} mt-[136px]`}>
            Anonim IT
          </div>
          <div className="max-w-[424px] text-center text-base leading-[19px] mt-[70px]">
            Данный сайт сделан специально для онлайн вебинаров и онлайн школы
            так же мы тут публикуем все материалы для наших учеников.
          </div>
          <button className="bg-[#0A92DD] py-[10px] px-[14px] rounded-[40px] mt-[15px]">
            <Link href="">Наш Discord</Link>
          </button>
      </Layout>
  );
}

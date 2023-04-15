import { Karla } from "next/font/google";
import Link from "next/link";

const karla = Karla({
  weight: "700",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen min-w-screen">
      <section className="bg-[#04041A] relative min-h-screen min-w-screen-sm">
        <section className="flex min-h-screen min-w-screen max-h-screen max-w-screen relative">
          <div className="circle absolute top-0 left-0"></div>
          <div className="circle absolute bottom-16 right-16"></div>
        </section>
        <section className="flex flex-col min-h-screen min-w-full items-center absolute top-0">
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
          <header className="">
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
          </header>
          <section className="">
            {children}
          </section>
          <footer className=""></footer>
          </section>
      </section>
    </main>
  );
}

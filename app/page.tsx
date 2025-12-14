import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row rounded-3xl border-2 border-solid border-green-400 pr-4 pl-4 pt-2 pb-2">
          <div className="rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <h2 className="mb-3 text-2xl font-semibold">Teste1</h2>
            <p>Nome do Canal - YT</p>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Acessar
            </a>
          </div>


        </div>
      </main>
    </div>
  );
}

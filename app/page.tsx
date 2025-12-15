import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="text-4xl font-bold">XTREME GO HORSE DIÁRIO (DESIGN AND PROGRAMMING)</div>
        <div className="text-3xl">UMA AULA DE CADA CONSECUTIVAMENTE</div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row rounded-3xl border-2 border-solid border-green-400 pr-4 pl-4 pt-2 pb-2">
          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">DOCKER</h2>
              <p className="font-normal">UDEMY - ANDRE IACONO</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=4821926"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-400 hover:border-orange-400 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">MATEMÁTICA</h2>
              <p className="font-normal">Udemy - Matemática para ENEM e concursos</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=4698298"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">Nome curso</h2>
              <p className="font-normal">Local - Professor</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="####"
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

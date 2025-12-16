import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full  flex-col items-center justify-around py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="text-4xl font-bold">XTREME GO HORSE DIÁRIO (DESIGN AND PROGRAMMING)</div>
        <div className="text-3xl mt-3">UMA AULA DE CADA CONSECUTIVAMENTE</div>
        <div className="text-2xl">MANHÃ</div>
        <div className="flex flex-row justify-between gap-4 flex-wrap md:flex-row text-base font-medium rounded-3xl border-2 border-solid border-green-400 pr-4 pl-4 pt-2 pb-2 mt-1">
          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">DOCKER</h2>
              <p className="font-normal text-gray-400">UDEMY - ANDRE IACONO</p>
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-400 hover:border-orange-700 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">MATEMÁTICA</h2>
              <p className="font-normal text-gray-400">Udemy - Matemática para ENEM e concursos</p>
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

          <div className="m-3 rounded-3xl border-2 border-solid border-blue-500 hover:border-green-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">INFORMÁTICA</h2>
              <p className="font-normal text-gray-400">Udemy - Noções de Informática 2023</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=5560950"
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

        <div className="text-2xl mt-5 mb-1">INTEGRAL</div>
        <div className="flex flex-row justify-around flex-wrap gap-4 text-base font-medium md:flex-row rounded-3xl border-2 border-solid border-cyan-500 pr-4 pl-4 pt-2 pb-2 mt-1">
          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">DOCKER</h2>
              <p className="font-normal text-gray-400">UDEMY - ANDRE IACONO</p>
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

          <div className="m-3 rounded-3xl border-2 border-solid border-orange-400 hover:border-yellow-300 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">REACT NATIVE</h2>
              <p className="font-normal text-gray-400">UDEMY - Mobile do zero com React Native e Redux</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=1566920"
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
              <h2 className="mb-3 text-2xl font-semibold">REACT NATIVE</h2>
              <p className="font-normal text-gray-400">B7WEB - REACT NATIVE</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-react-native"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-blue-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">MATEMÁTICA</h2>
              <p className="font-normal text-gray-400">Udemy - Matemática</p>
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
              <h2 className="mb-3 text-2xl font-semibold">UDEMY - JAVA</h2>
              <p className="font-normal text-gray-400">Backend COMPLETO com Java</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=4312408"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-300 hover:border-green-400 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">JAVASCRIPT</h2>
              <p className="font-normal text-gray-400">B7WEB - JAVASCRIPT</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-javascript"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">REACT</h2>
              <p className="font-normal text-gray-400">B7WEB - REACT</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-reactjs"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-200 hover:border-green-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">NEXT.JS</h2>
              <p className="font-normal text-gray-400">B7WEB - NEXT.JS</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-nextjs"
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
              <h2 className="mb-3 text-2xl font-semibold">PHP</h2>
              <p className="font-normal text-gray-400">B7WEB - PHP</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/introducao-ao-php"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">LARAVEL</h2>
              <p className="font-normal text-gray-400">B7WEB - LARAVEL</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/introducao-ao-laravel"
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
              <h2 className="mb-3 text-2xl font-semibold">C++ INICIANTE</h2>
              <p className="font-normal text-gray-400">UDEMY - MARCOS OLIVEIRA</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=3803130"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-300 hover:border-green-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">C++ AVANÇADO</h2>
              <p className="font-normal text-gray-400">UDEMY - MARCOS OLIVEIRA</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=3803828"
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
              <h2 className="mb-3 text-2xl font-semibold">JAVA 8</h2>
              <p className="font-normal text-gray-400">Java - DevDojo BR YT</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PL62G310vn6nHrMr1tFLNOYP_c73m6nAzL"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">JAVA 15 ATT</h2>
              <p className="font-normal text-gray-400">Maratona Java Virado no Jiraya</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-500 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">Java Web 1</h2>
              <p className="font-normal text-gray-400">Programação Web com Java</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PL_GwGUsBlNyfI0W3ggfffhBdJUqB4981Z"
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
              <h2 className="mb-3 text-2xl font-semibold">Java Web 2</h2>
              <p className="font-normal text-gray-400">Curso Java WEB Level 1 (Servlet - jsp, JDBC)</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PLbEOwbQR9lqz9AnwhrrOLz9cz1-TxoiUg"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">UDEMY - JAVA</h2>
              <p className="font-normal text-gray-400">Backend COMPLETO com Java - APIRestFull</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=4312408"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-500 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">JAVASCRIPT</h2>
              <p className="font-normal text-gray-400">B7WEB - JAVASCRIPT</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-javascript"
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
              <h2 className="mb-3 text-2xl font-semibold">PHP</h2>
              <p className="font-normal text-gray-400">B7WEB - PHP</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/introducao-ao-php"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">DOCKER</h2>
              <p className="font-normal text-gray-400">UDEMY - ANDRE IACONO</p>
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

          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">NODE.JS</h2>
              <p className="font-normal text-gray-400">B7WEB - NODE.JS</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/fundamentos-de-nodejs"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-500 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">UDEMY - NODE.JS</h2>
              <p className="font-normal text-gray-400">Criando APIs RESTful utilizando TypeScript, Node.js, MongoDB</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=2060799"
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
              <h2 className="mb-3 text-2xl font-semibold">REST NODE</h2>
              <p className="font-normal text-gray-400">UDEMY - THIAGO ADRIANO</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=2060799"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">LARAVEL</h2>
              <p className="font-normal text-gray-400">B7WEB - LARAVEL</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://app.b7web.com.br/course/introducao-ao-laravel"
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
              <h2 className="mb-3 text-2xl font-semibold">C++ INICIANTE</h2>
              <p className="font-normal text-gray-400">UDEMY - MARCOS OLIVEIRA</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=3803130"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-600 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">C++ AVANÇADO</h2>
              <p className="font-normal text-gray-400">UDEMY - MARCOS OLIVEIRA</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=3803828"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">.NET P/ WINDOWS</h2>
              <p className="font-normal text-gray-400">UDEMY - DIOGO COSTA</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=5047460"
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
              <h2 className="mb-3 text-2xl font-semibold">PYTHON</h2>
              <p className="font-normal text-gray-400">UDEMY - LUIZ OTÁVIO</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.udemy.com/course-dashboard-redirect/?course_id=2411816"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-600 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">RUBY</h2>
              <p className="font-normal text-gray-400">RUBY COMPLETO - OneBitCode YT</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PLdDT8if5attEOcQGPHLNIfnSFiJHhGDOZ"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-pink-500 hover:border-indigo-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">GO #1</h2>
              <p className="font-normal text-gray-400">Local - Professor</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PL370TvW48yBtHWGy0y9GpC3k_zrJzeEWz"
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
              <h2 className="mb-3 text-2xl font-semibold">GO #2</h2>
              <p className="font-normal text-gray-400">Golang do zero - Stephanie Cardoso</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PLIIX-IKjIiwOpAr_kyvpxTVyvUoxXqGEQ"
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

          <div className="m-3 rounded-3xl border-2 border-solid border-yellow-500 hover:border-green-600 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">RUST</h2>
              <p className="font-normal text-gray-400">Aprenda Rust</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PLjSf4DcGBdiGCNOrCoFgtj0KrUq1MRUME"
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
              <h2 className="mb-3 text-2xl font-semibold">RUBY ON RAILS</h2>
              <p className="font-normal text-gray-400">RAILS P/ INICIANTES</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PLe3LRfCs4go-mkvHRMSXEOG-HDbzesyaP"
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

        <div className="text-2xl mt-5">DESIGN GRÁFICO (SÁBADO)</div>
        <div className="flex flex-row justify-around flex-wrap gap-4 text-base font-medium md:flex-row rounded-3xl border-2 border-solid border-orange-300 pr-4 pl-4 pt-2 pb-2 mt-1">
          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">INKSCAPE ATUAL</h2>
              <p className="font-normal text-gray-400">Basicão de Inkscape</p>
            </div>
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://www.youtube.com/playlist?list=PL90gDMfBdI0FoyYlRBTiV62OL6UWolFDD"
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
              <p className="font-normal text-gray-400">Local - Professor</p>
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

          <div className="m-3 rounded-3xl border-2 border-solid border-indigo-600 hover:border-pink-500 pr-4 pl-4 pt-2 pb-2 ">
            <div className="m-3 mr-5 ml-0">
              <h2 className="mb-3 text-2xl font-semibold">Nome curso</h2>
              <p className="font-normal text-gray-400">Local - Professor</p>
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

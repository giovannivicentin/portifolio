import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 opacity-0 transform translate-y-10 animate-fadeInSlideUp">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col">
          <h1 className="text-3xl">Welcome to my portfolio website!</h1>
          <h2 className="text-2xl mt-2 max-w-full">
            I'm happy you've visited. I'm{' '}
            <span className="dark:text-violet-400 text-violet-700 animate-fadeIn">
              Giovanni Vicentin
            </span>
            .
          </h2>
          <p className="text-lg text-muted-foreground mt-3 leading-relaxed max-w-full">
            Outside of coding, I'm a dedicated karate enthusiast. Music fuels my{' '}
            <br /> soul, especially Brazilian rap. I frequently immerse myself
            in books, <br />
            finding wisdom and inspiration in their pages.
          </p>
          <div className="mt-5 flex flex-col md:flex-row">
            <Link href="/journey" prefetch>
              <Button className="text-sm md:text-md w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Learn more about me
              </Button>
            </Link>
            <a href="/Giovanni_s_Resume.pdf" download="Giovanni_Resume.pdf">
              <Button className="text-sm md:text-md mt-4 md:mt-0 md:ml-4 w-full md:w-auto transition-transform transform hover:scale-105 hover:dark:bg-violet-400 hover:bg-violet-700">
                Download CV
              </Button>
            </a>
          </div>

          <p className="mt-5 text-muted-foreground text-lg">Find me on:</p>
          <div className="flex mt-5">
            <Link href="https://www.linkedin.com/in/giovannivicentin/">
              <LinkedInLogoIcon className="w-7 h-7 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
            <Link href="https://github.com/giovannivicentin">
              <GitHubLogoIcon className="w-7 h-7 ml-4 transition-transform transform hover:scale-110 hover:dark:text-violet-400 hover:text-violet-700" />
            </Link>
          </div>
          <TechStack />
        </div>
        <Image
          src="/profile.png"
          width={150}
          height={150}
          alt="Profile Image"
          className="rounded-full mx-auto mb-10 sm:mx-0 sm:mb-0"
          priority
        ></Image>
      </div>
    </div>
  );
}

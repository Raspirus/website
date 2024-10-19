import {
  IconGavel,
  IconMessageQuestion,
  IconShieldLock
} from "npm:@tabler/icons-preact";
import AboutCard from "../components/AboutCard.tsx";

const About = () => {
  return (
    <div>
      <h1 class="text-center text-4xl font-bold p-4">About</h1>
      <div class="flex justify-center items-center">
        <a
          href="https://raspirus.github.io/docs/Various/legal"
          target="_blank"
          class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center"
        >
          <IconGavel class="w-16 h-16 m-4 text-mainred-500" />
          <div class="p-2 text-center text-xl font-bold">Legal Info</div>
        </a>
        <a
          href="https://forms.gle/hjUSaVUkxjyimDsM9"
          target="_blank"
          class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center"
        >
          <IconMessageQuestion class="w-16 h-16 m-4 text-maingreen-500" />
          <div class="p-2 text-center text-xl font-bold">Feedback</div>
        </a>
        <a
          href="https://raspirus.github.io/docs/Various/privacy"
          target="_blank"
          class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center"
        >
          <IconShieldLock class="w-16 h-16 m-4 text-mainred-500" />
          <div class="p-2 text-center text-xl font-bold">Privacy</div>
        </a>
      </div>
      <hr class="m-4" />
      <div>
        <h2 class="text-center text-2xl font-bold p-4">About the Project</h2>
        <div class="p-4 mx-40">
        Welcome to Raspirus, your lightweight signature-based malware scanner. 
        Originally designed to scan attached USB drives using a Raspberry Pi, 
        Raspirus has evolved into a versatile tool capable of scanning local files and folders as well.
        It started out as a Matura project by Benji377 in 2022 Italy and has since been developed further.
        </div>
      </div>
      <hr class="m-4" />
      <div class="flex flex-wrap justify-center gap-4">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconLockOpen"
            title="Free & Open Source"
            description="Raspirus is free and open source software. You can use it for free and you can also contribute to the project.
        This ensures safety and transparency. The project runs solely on donations."
          />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconShieldCheck"
            title="Runs everywhere"
            description="Raspirus runs on Windows, macOS and Linux. It is also available as a Docker container. 
        It is designed to run on low-end devices.
        This ensures that Raspirus can be used on almost any device, especially on Raspberry Pi's."
          />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconBolt"
            title="Easy & Intuitive"
            description="Raspirus is designed to be easy to use and intuitive. It is designed to be used by everyone, 
        even by people who are not very familiar with computers. The user interface is designed to be as simple as possible."
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconPackage"
            title="Development"
            description="Raspirus has been in development since 21.09.2022 and is constantly being improved.
            It went through many iterations, improving with each one. The project is maintained by a small team of developers."
          />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconUserCode"
            title="Maintainers"
            description="Benjamin Demetz is the main maintainer of Raspirus. He is responsible for the design and maintenance of the project.
            He is assisted by Felix Hell Björn, who is responsible for the development of the backend.
            Furthermore there are many other contributors who help with the development of Raspirus."
          />
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex">
          <AboutCard
            icon="IconSeeding"
            title="Resources"
            description="The app is designed to be as lightweight as possible. It uses minimal resources and is designed to run on low-end devices.
            It merely requires an internet connection and keyboard at setup, after which it can be used offline and through a touch screen.
            The bigger the touchscreen and faster the CPU, the better the experience."
          />
        </div>
      </div>
    </div>
  );
};

export default About;

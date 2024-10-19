import {
  IconGavel,
  IconMessageQuestion,
  IconShieldLock,
} from "npm:@tabler/icons-preact";

const About = () => {
  return (
    <div>
      <h1 class="text-center text-4xl font-bold p-4">About</h1>
      <div class="flex justify-center items-center">
        <a href="" class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center">
          <IconGavel class="w-16 h-16 m-4" />
          <div class="p-2 text-center">Legal Info</div>
        </a>
        <a href="" class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center">
          <IconMessageQuestion class="w-16 h-16 m-4" />
          <div class="p-2 text-center">Feedback</div>
        </a>
        <a href="" class="m-4 w-1/3 border-solid border-2 rounded border-gray-600 flex flex-col justify-center items-center">
          <IconShieldLock class="w-16 h-16 m-4" />
          <div class="p-2 text-center">Privacy</div>
        </a>
      </div>
      <hr class="m-4" />
    </div>
  );
};

export default About;

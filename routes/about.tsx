import Header from "../components/Header.tsx";
import Navbar from "../components/Navbar.tsx";
// Add better design
export default function About() {
  return (
    <>
      <Header title="About | Raspirus" />
      <div class="min-h-screen bg-cover bg-center bg-no-repeat bg-default">
        <Navbar active="/about" />
        <div className="flex h-full">
          <div className="p-8 w-8/12">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="font-bold pr-4 align-top">Name</td>
                  <td>Raspirus</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 align-top">Description</td>
                  <td>A lightweight and easy-to-use virus scanner</td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 align-top">Maintainer</td>
                  <td>
                    <a
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      href="https://github.com/Benji377"
                      target="_blank"
                    >
                      Benji377
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 align-top">Source</td>
                  <td>
                    <a
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      href="https://github.com/Raspirus"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 align-top">Also on</td>
                  <td>
                    <ul className="list-disc pl-8">
                      <li>
                        <a
                          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                          href="https://alternativeto.net/software/raspirus/"
                          target="_blank"
                        >
                          AlternativeTo
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                          href="https://www.slant.co/topics/12099/viewpoints/4/~antivirus-for-linux~raspirus"
                          target="_blank"
                        >
                          Slant.co
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold pr-4 align-top">Credits</td>
                  <td>
                    <a
                      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                      href="https://www.flaticon.com/free-icons"
                      title="freepik icons"
                      target="_blank"
                    >
                      Icons created by Freepik - Flaticon
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

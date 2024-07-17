import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white font-sans rounded-lg border-9 bg-slate-950">
      <div className="border-2  bg-slate-900 rounded-lg border-spacing-20 p-8">
        <h1 className="text-xl text-left font-bold">
          CREATE AN ACCOUNT
        </h1>
        <div>
        <label htmlFor="Your Email" className="text-left block py-2">
          YOUR EMAIL
        </label>
        <input type="text" name="" id="" required placeholder="name@company.com" className="border-2  block rounded-lg w-full p-2 text-black" />
        </div>
        <div>
        <label htmlFor="Password" className="text-left block py-2">
          PASSWORD
        </label>
        <input type="password" name="" id="" required placeholder="••••••••" className="border-2 block rounded-lg w-full p-2 text-black" />
        </div>
        <div>
        <label htmlFor="Confirm Password" className="text-left block py-2">
          CONFIRM PASSWORD
        </label>
        <input type="password" name="" id="" required placeholder="••••••••" className="border-2 block rounded-lg w-full p-2 text-black" />
        </div>
        <div className="flex item-start">
          <div className="flex items-center h-5">
            <input type="checkbox" required className="h-4 w-4 mt-6 mr-2 border border-gray-300 bg-gray-50" />
          </div>
          <label htmlFor="Permission" className="py-2">
            I accept the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
          </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-9 w-full rounded-lg">
          Create an account
        </button>
        <label htmlFor="Asking">
          Already have an account?  <a href="#" className="text-blue-500 hover:underline">Sign in</a>
        </label>
      </div>
    </div >
  );
}

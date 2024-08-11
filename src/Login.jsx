import Navigation from "./Navigation";

function Login() {
  return (
    <>
      <div className=" max-w-md w-md mx-auto p-6 bg-gray-600 rounded-lg shadow-md flex items-center">
        <h2 className="text-3xl text center text-pink-600 font-bold mb-6">
          {" "}
          Login Required
        </h2>
        <form action="">
          {/* <div>
            <label htmlFor=""></label>
            <input type="text" />
          </div> */}

          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor=""
            ></label>
            <input
              className="rounded w-full p-5 mb-1"
              type="text"
              placeholder="username"
            />

            <button
              type="submit"
              className=" bg-violet-900 text-pink-100 py-1 px-1 rounded mb-5 shadow-lg"
            >
              Submit
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor=""></label>
            <input
              className="rounded w-full p-5 mb-1"
              type="password"
              placeholder="password"
            />
            <button
              type="submit"
              className=" bg-violet-900 text-pink-100 py-1 px-1 rounded mb-5 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <Navigation />
    </>
  );
}

export default Login;

const Login = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-96 p-10 bg-black/70 rounded-lg shadow-lg text-white backdrop-blur-md">
        <h1 className="text-4xl font-semibold text-center mb-6">Sign In</h1>

        <fieldset className="mb-4">
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Email or Mobile number"
          />
        </fieldset>

        <fieldset className="mb-4">
          <input
            type="password"
            className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Password"
          />
        </fieldset>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded mt-4">
          Sign In
        </button>

        <p className="text-center text-sm mt-4">
          New to Netflix?{" "}
          <a href="#" className="text-red-500 hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

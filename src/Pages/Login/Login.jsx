import { AiFillLock } from 'react-icons/ai';

const Login = () => {
  return (
    <div className="">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-xl rounded-none bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl text-center mt-5 mb-10">
              Sign In to
              <span className="text-[#5fbeaa] font-semibold">HABHIT</span>{" "}
              <span className="font-semibold">Admin</span>
            </h1>
            {/* user name---------- */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Username"
                className="rounded-sm input input-bordered"
              />
            </div>
            {/* Password --------- */}
            <div className="form-control my-3">
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered rounded-sm"
              />
            </div>
            {/* ------ remember me */}
            <div className="">
  <label className="flex gap-2 cursor-pointer">
    <input type="checkbox" className="" />
    <span className="">Remember me</span> 
  </label>
</div>
            <div className="form-control mt-6">
              <button className="btn bg-[#fb6d9d] rounded-md text-white">
                Log in
              </button>
            </div>
            <label className="label">
              <a href="#" className="text-gray-500 link link-hover flex items-center gap-2">
              <AiFillLock />
                Forgot password?
              </a>
            </label>
          </div>
        </div>
      <div className='my-7 text-gray-400 font-semibold'>
        <p>Need an account? <a href="#" className='text-[#5d9cec] font-bold'>Contact Administrator</a></p>
      </div>
      </div>
    </div>
  );
};

export default Login;

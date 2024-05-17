import React from "react";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Change Password</h1>
      </section>

      <section className="w-full h-auto md:h-[350px] bg-white p-5 flex justify-center items-center gap-5 rounded-md drop-shadow-md">
        <form className="w-full h-auto py-5 md:h-full flex flex-col gap-5">
          <div className="w-full flex justify-start items-center divide-x-2 divide-copy">
            <label
              htmlFor=""
              className="text-nowrap p-3 rounded-l-md bg-border text-copy"
            >
              Old Password:
            </label>
            <input
              type="password"
              name="password"
              id=""
              className="w-9/12 h-full p-3 outline-none bg-foreground rounded-r-md"
            />
          </div>
          <div className="w-full flex justify-start items-center divide-x-2 divide-copy">
            <label
              htmlFor=""
              className="text-nowrap p-3 rounded-l-md bg-border text-copy"
            >
              Old Password:
            </label>
            <input
              type="password"
              name="newPassword"
              id=""
              className="w-9/12 h-full p-3 outline-none bg-foreground rounded-r-md"
            />
          </div>
          <div className="w-full flex justify-start items-center divide-x-2 divide-copy">
            <label
              htmlFor=""
              className="text-nowrap p-3 rounded-l-md bg-border text-copy"
            >
              Old Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id=""
              className="w-9/12 h-full p-3 outline-none bg-foreground rounded-r-md"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-secondary rounded-md text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default page;

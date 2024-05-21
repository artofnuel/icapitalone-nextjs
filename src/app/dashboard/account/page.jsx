import React from "react";
import ImageUpload from "@/components/imageUpload/imageUpload"

const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-3 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Update Account</h1>
      </section>

      <section className="w-full h-auto md:h-[350px] bg-white p-5 rounded-md drop-shadow-md">
        {/* <ImageUpload /> */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">First Name</label>
            <input className="form-control" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Last Name</label>
            <input className="form-control" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Email</label>
            <input className="form-control" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Password</label>
            <input className="form-control" />
          </div>
        </div>
        <div className="d-flex gap-2 my-3">
          <button className="btn btn-primary">Submit</button>
          <btn className="btn btn-outline-primary">Cancel</btn>
          </div>
      </section>
    </main>
  );
};

export default page;

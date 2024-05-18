import React from "react";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Make payment</h1>
      </section>

      <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        <div className="w-full h-auto p-5">
          <p className="text-lg font-bold text-copy">BTC - Bitcoin</p>
          <div className="py-3">
            <p className="font-light">
              You can deposit by sending BTC to this Address:
            </p>
            <p className="text-lg font-semibold pu-2">
              3MAhdmmGm9eFz3mK1CM7VbsKtepYGf9yNH
            </p>
            <p className="font-light">
              After sending it, upload proof of payment below.
            </p>
            <button className="p-3 border-border bg-background rounded-md mt-5">
              Click to copy BTC Address
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        <div>
          <a href="#" className="text-lg font-bold text-copy">
            Pay with Changelly
          </a>
          <div className="py-3">
            <p className="font-light">
              Click the button above to visit Changelly with the BTC address
              below.
            </p>
            <p className="text-lg font-semibold pu-2">
              3MAhdmmGm9eFz3mK1CM7VbsKtepYGf9yNH
            </p>
            <p className="font-light">
              Click on "I Understand" on the notification from changelly and
              proceed to make the deposit using the BTC address above.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-secondary-light text-white p-5 flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        <div>
          <p>
            Contact management at support@icapitalplus.com for other payment
            methods.
          </p>
        </div>
      </section>
      <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        <div className="py-3">
          <p className="font-light">{`Upload Payment proof after payment. (Ignore if paid with card).`}</p>
          <form
            action=""
            className="w-full h-auto flex flex-col gap-5 justify-center items-start"
          >
            <input
              type="file"
              name=""
              id=""
              placeholder="Choose a File"
              className="py-3"
            />
            <div className="w-full h-auto flex gap-3 justify-start items-center">
              <label htmlFor="">Payment Mode:</label>
              <select
                name=""
                id=""
                className="p-3 border-border bg-background rounded-md"
              >
                <option value="">Bank Transfer</option>
                <option value="">Ethereum</option>
                <option value="">Bitcoin</option>
                <option value="">Credit Card</option>
              </select>
            </div>
            <button className="p-3 border-border bg-background rounded-md mt-5">
              Submit Payment
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;

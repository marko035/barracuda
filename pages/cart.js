import Footer from "../components/Footer";
import Header from "../components/Header";

function cart() {
  const items = [
    {
      type: "glove",
      price: 25,
      quantity: 1,
      color: "red",
      hand: "left",
      size: "M",
    },
  ];
  return (
    <>
      <Header />

      <section className="bg-[#1F1F1F] flex h-[400px] p-64 text-white">
        <div className="flex-1 flex flex-col font-thin text-2xl">
          {items.map((item, index) => (
            <div key={index} className="bg-[#232323] py-4 px-6">
              <div className="mb-4">
                Barracuda Billiard
                <span className="text-green-600"> {item.type}</span>
              </div>
              <div className="flex">
                <div className="w-32 bg-red-600 flex items-center justify-center text-5xl mr-4">
                  <span>{item.size}</span>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>{item.hand}</div>
                  <div className="flex justify-between">
                    <span className="text-green-600">free shipping</span>
                    <span>${item.price * item.quantity}.00</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 ml-8">
                  <span className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center">
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span className="cursor-pointer w-6 h-6 rounded-full border flex items-center justify-center">
                    +
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1"></div>
      </section>

      <Footer darkBackground={true} goldFooter={false} />
    </>
  );
}

export default cart;

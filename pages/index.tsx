import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2025"
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="grow flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </main>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <BookingForm />
        <div className="space-y-6">
          <OrderSummary bookingDetails={bookingDetails} />
          <CancellationPolicy />
        </div>
      </div>
    </div>
  )
}

export default Home;

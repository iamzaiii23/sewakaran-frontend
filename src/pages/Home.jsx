import api from "../services/api";
import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  console.log(api);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-blue-600 mb-10 text-center">
        Sewakaran
      </h1>

      <div className="flex justify-center mb-10">
        <Button text="Sewa Sekarang" />
      </div>

      <div className="flex justify-center">
        <Card
          title="Kamera Canon"
          price="150.000 / hari"
          image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        />
      </div>
    </div>
  );
}

export default Home;
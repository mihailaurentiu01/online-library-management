import { Card } from "flowbite-react";

function HomePage() {
  return (
    <>
      <div className="flex justify-center align-center">
        <Card
          className="sm:w-10/12 md:w-4/12 mt-10"
          imgSrc="https://www.parliament.uk/contentassets/aa8b9933d3cb4364b827e7a60ea898e0/hl_library_roger-harris2022.jpg"
        >
          <p>Online library management</p>
        </Card>
      </div>
    </>
  );
}

export default HomePage;

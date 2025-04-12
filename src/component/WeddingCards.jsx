export default function WeddingCards() {
    const cards = [
      {
        title: "Wedding Moments",
        description: "Capturing the timeless moments of your big day with elegance.",
        image: "https://cdn.pixabay.com/photo/2020/12/10/19/03/wedding-5821098_1280.jpg",
      },
      {
        title: "Pre-Wedding Love",
        description: "Telling your story before the vows with romantic frames.",
        image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        title: "Candid Shots",
        description: "Spontaneous emotions, unfiltered joy, and real memories.",
        image: "https://cdn.pixabay.com/photo/2020/12/10/19/03/wedding-5821098_1280.jpg",
      },
    ];
  
    return (
      <section className="w-[90%] mx-auto py-4">
        {/* Top Center Heading */}
        <div className="text-center mb-4">
          <h1 className="font-bold text-[#222222] tracking-wide">
            REAL LOVE STORIES
          </h1>
          <p className="mt-4 mb-4 text-[#222222]">
            LIKE A RIVER FLOWS SURELY TO THE SEA, 
            SO IT GOES SOME THINGS ARE MEANT TO BE.
          </p>
        </div>
  
        {/* Cards */}
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="overflow-hidden shadow-lg text-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 object-cover"
              />
              <p className="text-[#575757] mt-2 ">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
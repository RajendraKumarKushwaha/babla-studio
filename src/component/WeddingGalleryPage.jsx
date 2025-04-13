// app/wedding-gallery/page.js (or wherever you want to use it)

import WeddingStory from "./WeddingStory";


const stories = [
    {
        title: "JEHANA & KANISHK",
        date: "October 17, 2024",
        description: `Jehana and Kanishk, planned a beautiful New Delhi wedding that honored their roots across Mumbai, Singapore, and Dubai.
      The celebrations kicked off with a sundowner at the bride’s uncle's home, followed by a bohemian garden-themed sangeet,
      and culminated in a Mughal-inspired wedding at Amaara Farms, complete with a mandap under a majestic tree.
      They focused on sustainability, turning their wedding flowers into incense sticks and reworking traditional customs.
      Every detail, from music to décor, reflected timeless elegance and thoughtful planning.`,
        images: [
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/29470584/pexels-photo-29470584/free-photo-of-elegant-indian-wedding-couple-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/24334948/pexels-photo-24334948/free-photo-of-newlyweds-standing-together-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/17000467/pexels-photo-17000467/free-photo-of-newlyweds-in-traditional-dress-and-turban.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },
    {
        title: "PRIYA & ARYAN",
        date: "January 8, 2024",
        description: `Priya and Aryan tied the knot at a royal palace in Rajasthan. The ceremonies were a blend of Marwari tradition and modern flair,
      highlighted by a night of musical performances and heritage-themed décor.`,
        images: [
            { image: "https://images.pexels.com/photos/23710315/pexels-photo-23710315/free-photo-of-two-people-dancing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/16840836/pexels-photo-16840836/free-photo-of-woman-embracing-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12669019/pexels-photo-12669019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },
    {
        title: "ANAYA & DEV",
        date: "March 2, 2024",
        description: `Anaya and Dev’s wedding was a beachside affair in Goa, full of colors, laughter, and love. The haldi and mehendi were full of tropical
      elements while the wedding was an elegant pastel-themed ceremony at sunset.`,
        images: [
            { image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },

    {
        title: "PRIYA & ARYAN",
        date: "January 8, 2024",
        description: `Priya and Aryan tied the knot at a royal palace in Rajasthan. The ceremonies were a blend of Marwari tradition and modern flair,
      highlighted by a night of musical performances and heritage-themed décor. The bride wore a handwoven lehenga passed down from her grandmother,
      while the groom arrived in a vintage car baraat. Every moment was captured against the backdrop of sandstone forts and twilight skies.`,
        images: [
            { image: "https://images.pexels.com/photos/30497747/pexels-photo-30497747/free-photo-of-elegant-traditional-south-asian-bride-in-red-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },
    {
        title: "ANAYA & DEV",
        date: "March 2, 2024",
        description: `Anaya and Dev’s wedding was a beachside affair in Goa, full of colors, laughter, and love. The haldi and mehendi were filled with tropical
      elements while the wedding was an elegant pastel-themed ceremony at sunset. Guests enjoyed beachfront cocktails, fire dancers,
      and live acoustic music by the waves. The couple made a barefoot vow exchange as the sky turned golden.`,
        images: [
            { image: "https://images.pexels.com/photos/30497747/pexels-photo-30497747/free-photo-of-elegant-traditional-south-asian-bride-in-red-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },
    {
        title: "MEHAK & RISHABH",
        date: "December 15, 2023",
        description: `Mehak and Rishabh’s wedding was an intimate yet grand event held in Udaipur. Inspired by royal Rajputana aesthetics,
      the decor featured deep maroons, gold accents, and antique chandeliers. The pheras were held on a floating mandap surrounded by candles.
      They also hosted a quirky Bollywood-themed cocktail night where guests came dressed as movie characters!`,
        images: [
            { image: "https://images.pexels.com/photos/30497747/pexels-photo-30497747/free-photo-of-elegant-traditional-south-asian-bride-in-red-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/19442466/pexels-photo-19442466/free-photo-of-beautiful-woman-in-a-traditional-indian-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { image: "https://images.pexels.com/photos/12730016/pexels-photo-12730016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        ],
    },
];

export default function WeddingGalleryPage() {
    return (
        <div>
            {stories.map((story, idx) => (
                <WeddingStory
                    key={idx}
                    title={story.title}
                    date={story.date}
                    description={story.description}
                    images={story.images}
                />
            ))}
        </div>
    );
}

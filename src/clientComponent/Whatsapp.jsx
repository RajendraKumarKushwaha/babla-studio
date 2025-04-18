// app/components/WhatsAppButton.jsx

export default function WhatsAppButton() {
    const phoneNumber = "919179644717"; // Apna number yahaan daal lena
  
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-2">
        {/* Text Above */}
        <span className="bg-white px-4 py-1 rounded-full text-blue-600 font-bold text-xs md:text-sm shadow-md">
          WE ARE HERE 👋
        </span>
  
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Proper WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-6 h-6 "
          >
            <path d="M16.003 3C9.37 3 4 8.372 4 15.006c0 2.646.777 5.103 2.105 7.169L4 29l6.994-2.078A11.946 11.946 0 0016.003 27c6.632 0 12-5.37 12-11.994C28.003 8.372 22.635 3 16.003 3zm-.01 21.812a9.804 9.804 0 01-4.97-1.373l-.356-.21-4.147 1.233 1.24-4.043-.23-.37a9.795 9.795 0 01-1.462-5.068c0-5.438 4.423-9.861 9.871-9.861 5.446 0 9.872 4.423 9.872 9.861 0 5.447-4.426 9.831-9.872 9.831zm5.473-7.379c-.3-.15-1.773-.875-2.048-.975-.275-.1-.475-.15-.675.15s-.774.975-.948 1.175c-.174.2-.35.225-.65.075-.3-.15-1.275-.468-2.43-1.492-.9-.8-1.506-1.788-1.682-2.087-.175-.3-.018-.462.132-.612.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.237-.25-.6-.5-.525-.675-.525-.175 0-.375-.025-.575-.025-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.113 3.225 5.125 4.523.717.308 1.275.492 1.712.63.72.23 1.38.197 1.9.12.58-.086 1.773-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
          </svg>
        </a>
      </div>
    );
  }
  
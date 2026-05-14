export default function NetflixMemoryGift() { const movie = { title: "Bharathi Priya", subtitle: "A beautiful collection of unforgettable memories.", thumbnail: "/thumbnails/main.jpg", banner: "/banners/mainbanner.jpg", memories: [ { type: "image", url: "/memories/photo1.jpg", }, { type: "image", url: "/memories/photo2.jpg", }, { type: "image", url: "/memories/photo3.jpg", }, { type: "image", url: "/memories/photo4.jpg", }, { type: "image", url: "/memories/photo5.jpg", }, { type: "image", url: "/memories/photo6.jpg", }, { type: "image", url: "/memories/photo7.jpg", }, { type: "image", url: "/memories/photo8.jpg", }, { type: "image", url: "/memories/photo9.jpg", }, { type: "image", url: "/memories/photo10.jpg", }, { type: "video", url: "/memories/video1.mp4", }, { type: "video", url: "/memories/video2.mp4", }, ], };

const [openMovie, setOpenMovie] = React.useState(false);

return ( <div className="bg-black min-h-screen text-white overflow-hidden font-sans"> {/* NAVBAR */} <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-black via-black/80 to-transparent backdrop-blur-sm"> <h1 className="text-red-600 text-3xl md:text-5xl font-black tracking-wider cursor-pointer hover:scale-105 transition duration-300"> NETFLIX </h1>

<div className="flex items-center gap-4">
      <div className="bg-red-600 w-10 h-10 rounded flex items-center justify-center font-bold shadow-lg shadow-red-700/40">
        ❤
      </div>
    </div>
  </nav>

  {/* HERO SECTION */}
  <section
    className="relative h-screen flex items-end"
    style={{
      backgroundImage: `url(${movie.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

    <div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl animate-fadeIn">
      <p className="uppercase tracking-[6px] text-red-500 mb-4 text-sm md:text-base">
        Special Memory Collection
      </p>

      <h2 className="text-5xl md:text-8xl font-black leading-none mb-6 drop-shadow-2xl">
        Our
        <br />
        Story
      </h2>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
        A collection of moments, laughter, emotions, and memories captured like a cinematic journey.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setOpenMovie(true)}
          className="bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-300 transition duration-300 shadow-lg"
        >
          ▶ Play
        </button>

        <button className="bg-gray-700/70 backdrop-blur-md px-8 py-3 rounded font-semibold hover:bg-gray-600 transition duration-300">
          + My List
        </button>
      </div>
    </div>
  </section>

  {/* CHAPTERS SECTION */}
  <div className="px-6 md:px-12 py-12">
    <h3 className="text-3xl md:text-4xl font-bold mb-8">
      Featured
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        onClick={() => setOpenMovie(true)}
        className="group relative overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer transition duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl"
      >
        <div className="overflow-hidden">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-6 z-10">
          <p className="text-red-500 text-sm tracking-widest mb-3 uppercase font-semibold">
            Netflix Original
          </p>

          <h4 className="text-4xl font-black mb-3 leading-tight">
            {movie.title}
          </h4>

          <p className="text-gray-300 text-base leading-relaxed">
            {movie.subtitle}
          </p>
        </div>
      </div>
    </div>
  </div>
        </div>
      ))}
    </div>
  </div>

  {/* MODAL PLAYER */}
  {openMovie && (
    <div className="fixed inset-0 z-50 bg-black overflow-y-auto animate-fadeIn">
      <div
        className="relative h-[70vh] flex items-end"
        style={{
          backgroundImage: `url(${movie.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <button
          onClick={() => setOpenMovie(false)}
          className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-5 py-2 rounded-xl border border-white/10 hover:bg-red-600 transition duration-300"
        >
          ✕ Close
        </button>

        <div className="relative z-10 p-8 md:p-16 max-w-4xl">
          <p className="uppercase text-red-500 tracking-[5px] text-sm mb-4">
            Netflix Original
          </p>

          <h2 className="text-5xl md:text-8xl font-black mb-6 leading-tight drop-shadow-2xl">
            {movie.title}
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            {movie.subtitle}
          </p>

          <button className="bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-300 transition duration-300 shadow-lg">
            ▶ Watch Memories
          </button>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-black">
        {movie.memories.map((memory, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl hover:scale-[1.02] transition duration-500 border border-zinc-800"
          >
            {memory.type === "image" ? (
              <img
                src={memory.url}
                alt="memory"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                controls
                className="w-full h-full"
              >
                <source src={memory.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  )}
          className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-5 py-2 rounded-xl border border-white/10 hover:bg-red-600 transition duration-300"
        >
          ✕ Close
        </button>

        <div className="relative z-10 p-8 md:p-16 max-w-3xl">
          <p className="uppercase text-red-500 tracking-[5px] text-sm mb-4">
            Episode {selectedChapter.id}
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
            {selectedChapter.title}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {selectedChapter.description}
          </p>
        </div>
      </div>

      {/* MEMORIES */}
      <div className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-black">
        {selectedChapter.memories.map((memory, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl hover:scale-[1.02] transition duration-500 border border-zinc-800"
          >
            {memory.type === "image" ? (
              <img
                src={memory.url}
                alt="memory"
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                controls
                autoPlay={false}
                className="w-full h-full"
              >
                <source src={memory.url} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  )}

  {/* FOOTER */}
  <footer className="border-t border-zinc-900 py-10 text-center text-gray-500 text-sm">
    Built with memories ❤
  </footer>

  {/* CUSTOM ANIMATION */}
  <style>{`
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</div>

); }

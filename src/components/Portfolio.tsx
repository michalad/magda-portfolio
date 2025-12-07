"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  platform: "youtube" | "vimeo";
  videoId: string;
  thumbnail?: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "FUERTEVENTURA || STYCZEŃ 2025",
    description: "Piękne wspomnienia z wyspy FUERTEVENTURA",
    platform: "youtube",
    videoId: "a-FpsAPsvMI", 
  },
  {
    id: "2",
    title: "Podróż po Włoszech",
    description: "Od Rzymu po Wenecję",
    platform: "vimeo",
    videoId: "123456789", // Przykładowe ID - należy zastąpić prawdziwymi
  },
  {
    id: "3",
    title: "Hiszpańska przygoda",
    description: "Barcelona i Costa Brava",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ", // Przykładowe ID - należy zastąpić prawdziwymi
  },
  {
    id: "4",
    title: "Wakacje w Chorwacji",
    description: "Adriatyk i jego cuda",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ", // Przykładowe ID - należy zastąpić prawdziwymi
  },
  {
    id: "5",
    title: "Egzotyczna Tajlandia",
    description: "Plaże i kultura",
    platform: "vimeo",
    videoId: "987654321", // Przykładowe ID - należy zastąpić prawdziwymi
  },
  {
    id: "6",
    title: "Górskie szlaki Tatry",
    description: "Polskie góry z lotu ptaka",
    platform: "youtube",
    videoId: "dQw4w9WgXcQ", // Przykładowe ID - należy zastąpić prawdziwymi
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const getVideoUrl = (video: Video) => {
    if (video.platform === "youtube") {
      return `https://www.youtube.com/watch?v=${video.videoId}`;
    } else {
      return `https://vimeo.com/${video.videoId}`;
    }
  };

  const getThumbnail = (video: Video) => {
    if (video.platform === "youtube") {
      return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    }
    return null;
  };

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Zobacz moje najnowsze realizacje. Każdy film to unikalna historia
          opowiedziana przez obrazy i dźwięk.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative h-56 bg-gradient-to-br from-amber-600 to-orange-500 overflow-hidden">
                {video.platform === "youtube" && (
                  <img
                    src={getThumbnail(video) || ""}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                {video.platform === "vimeo" && (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-700 to-orange-600">
                    <svg
                      className="w-20 h-20 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <svg
                      className="w-8 h-8 text-amber-800 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                  {video.platform === "youtube" ? "YouTube" : "Vimeo"}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal z wideo */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-white rounded-lg max-w-4xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedVideo(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedVideo.title}</h3>
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                {selectedVideo.platform === "youtube" && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                {selectedVideo.platform === "vimeo" && (
                  <iframe
                    src={`https://player.vimeo.com/video/${selectedVideo.videoId}`}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="mt-4 text-center">
                <a
                  href={getVideoUrl(selectedVideo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-amber-800 hover:text-amber-900 font-medium"
                >
                  Otwórz na {selectedVideo.platform === "youtube" ? "YouTube" : "Vimeo"} →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

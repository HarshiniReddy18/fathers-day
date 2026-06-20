"use client";

import { motion } from "framer-motion";

const photos = [
  "/DAD/dad1.jpeg",
  "/DAD/dad2.jpeg",
  "/DAD/dad3.jpeg",
  "/DAD/dad4.jpeg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white overflow-hidden">
      
      <section className="relative min-h-screen flex items-center justify-center px-6">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-6xl">🌸</div>
          <div className="absolute top-40 right-20 text-5xl">🌷</div>
          <div className="absolute bottom-40 left-20 text-6xl">🌺</div>
          <div className="absolute bottom-20 right-10 text-5xl">💮</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <img
            src="/DAD/dad4.jpeg"
            alt="Dad"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-white shadow-2xl mx-auto"
          />

          <h1 className="text-5xl md:text-8xl font-bold text-rose-700 mt-10">
            Happy Father's Day ❤️
          </h1>

          <p className="mt-6 text-xl text-rose-600 max-w-2xl mx-auto">
            To the man who gave me strength, dreams and unconditional love.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-center text-5xl font-bold text-rose-700 mb-16">
          Our Beautiful Memories 🌸
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ rotate: 2, scale: 1.03 }}
              className="bg-white p-4 rounded-3xl shadow-xl"
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-[450px] object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white/70 backdrop-blur-lg rounded-[40px] p-12 shadow-xl">
          
          <h2 className="text-5xl font-bold text-rose-700 mb-8">
            Dear Dad 💕
          </h2>

          <p className="text-xl leading-loose text-gray-700">
            Thank you for every sacrifice you made silently.
            <br />
            <br />
            Thank you for always putting our happiness before your own.
            <br />
            <br />
            Every achievement in my life has your support behind it.
            Every dream I chase carries the confidence you gave me.
            <br />
            <br />
            You are my first hero, my biggest supporter and one of the
            greatest blessings in my life.
            <br />
            <br />
            I love you more than words can express.
            <br />
            <br />
            Happy Father's Day ❤️
          </p>

          <p className="mt-10 text-3xl font-bold text-rose-700">
            — Harshini
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="grid grid-cols-3 text-center max-w-5xl mx-auto">
          
          <div>
            <h3 className="text-5xl font-bold text-rose-700">18+</h3>
            <p className="mt-2">Years of Love</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-rose-700">∞</h3>
            <p className="mt-2">Support</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-rose-700">∞</h3>
            <p className="mt-2">Memories</p>
          </div>

        </div>
      </section>

      <footer className="text-center py-16 text-rose-700">
        <h2 className="text-4xl font-bold">
          Forever My Hero ❤️
        </h2>
      </footer>

    </main>
  );
}
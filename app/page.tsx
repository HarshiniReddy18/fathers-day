```jsx
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
            హ్యాపీ ఫాదర్స్ డే నాన్న ❤️
          </h1>

          <p className="mt-6 text-xl text-rose-600 max-w-2xl mx-auto">
            నాకు బలం, ధైర్యం, ప్రేమ, జీవితానికి దారి చూపిన నా ప్రియమైన నాన్నకి.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-center text-5xl font-bold text-rose-700 mb-16">
          మన అందమైన జ్ఞాపకాలు 🌸
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
                alt={"Memory " + (index + 1)}
                className="w-full h-[450px] object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white/70 backdrop-blur-lg rounded-[40px] p-12 shadow-xl">

          <h2 className="text-5xl font-bold text-rose-700 mb-8">
            ప్రియమైన నాన్న ❤️
          </h2>

          <p className="text-xl leading-loose text-gray-700">
            నాన్న,
            <br />
            <br />
            నా కోసం మీరు నిశ్శబ్దంగా చేసిన ప్రతి త్యాగానికి హృదయపూర్వక ధన్యవాదాలు.
            <br />
            <br />
            మీ ఆనందం కంటే మా ఆనందానికే ఎప్పుడూ ఎక్కువ ప్రాధాన్యం ఇచ్చారు.
            <br />
            <br />
            నా జీవితంలో నేను సాధించిన ప్రతి విజయానికి మీ ప్రోత్సాహమే కారణం.
            నేను కనుగొనే ప్రతి కల వెనుక మీ నమ్మకం, మీ ఆశీర్వాదం ఉన్నాయి.
            <br />
            <br />
            మీరు నా నాన్న మాత్రమే కాదు,
            <br />
            నా మొదటి హీరో,
            <br />
            నా పెద్ద బలం,
            <br />
            నా జీవితంలో దేవుడు ఇచ్చిన అద్భుతమైన వరం.
            <br />
            <br />
            మాటల్లో చెప్పలేనంతగా నేను మిమ్మల్ని ప్రేమిస్తున్నాను.
            <br />
            <br />
            హ్యాపీ ఫాదర్స్ డే నాన్న ❤️
          </p>

          <p className="mt-10 text-3xl font-bold text-rose-700">
            — మీ హర్షిణి ❤️
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="grid grid-cols-3 text-center max-w-5xl mx-auto">

          <div>
            <h3 className="text-5xl font-bold text-rose-700">18+</h3>
            <p className="mt-2">ప్రేమతో నిండిన సంవత్సరాలు</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-rose-700">∞</h3>
            <p className="mt-2">ఆధారం</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-rose-700">∞</h3>
            <p className="mt-2">జ్ఞాపకాలు</p>
          </div>

        </div>
      </section>

      <footer className="text-center py-16 text-rose-700">
        <h2 className="text-4xl font-bold">
          ఎప్పటికీ నా హీరో ❤️
        </h2>
      </footer>

    </main>
  );
}
```

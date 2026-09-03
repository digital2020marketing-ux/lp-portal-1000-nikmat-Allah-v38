import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper for Gemini AI
  const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY variable is missing.");
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Endpoint: AI Teman Muhasabah
  app.post("/api/ai-teman-muhasabah", async (req, res) => {
    try {
      const { mood, contextNote } = req.body;
      if (!mood) {
        return res.status(400).json({ error: "Kondisi hati (mood) wajib diisi." });
      }

      const ai = getGenAI();
      if (!ai) {
        // Fallback response if GEMINI_API_KEY is not set
        return res.json({
          mood: mood,
          ayat: {
            surah: "QS. Ibrahim",
            ayatNumber: "Ayat 7",
            arabicText: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
            indonesianTranslation: "Dan (ingatlah) ketika Tuhanmu memaklumkan: \"Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), maka sungguh azab-Ku sangat berat.\"",
            tafsirBrief: "Setiap helai napas dan detik kehidupan adalah kesempatan untuk mengikat nikmat dengan rasa syukur."
          },
          renungan: `Saat merasakan "${mood}", ingatlah bahwa Allah senantiasa dekat. Hati yang gelisah dan lelah tidak sedang ditinggalkan, melainkan sedang disapa agar kembali bersimpuh di hadapan-Nya. Nikmat terbesar bukan hanya saat senang, tapi saat hati kita dibimbing untuk mengingat-Nya di setiap keadaan.`,
          doa: {
            arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            latin: "Allahumma a'inni 'ala dzikrika wa syukrika wa husni 'ibadatik",
            artinya: "Ya Allah, tolonglah aku untuk selalu mengingat-Mu, bersyukur kepada-Mu, dan beribadah dengan baik kepada-Mu."
          },
          tindakanMuhasabah: [
            "Tarik napas dalam-dalam, ucapkan 'Alhamdulillah' atas napas yang masih mengalir gratis detik ini.",
            "Catat 3 nikmat sederhana yang hari ini kamu terima tetapi sering dianggap biasa.",
            "Wudhu dengan tenang dan luapkan keluh kesah hanya di atas sajadah."
          ]
        });
      }

      const prompt = `Anda adalah "AI Teman Muhasabah" dari Portal 1000 Nikmat Allah. Tugas Anda adalah memberikan respon muhasabah Islam yang sangat teduh, mendalam, penuh kasih sayang, dan menenangkan jiwa.

Pengguna sedang mengalami kondisi hati: "${mood}" ${contextNote ? `(Catatan tambahan: ${contextNote})` : ''}.

Berikan tanggapan dalam format JSON persis sesuai struktur berikut:
{
  "mood": "${mood}",
  "ayat": {
    "surah": "Nama Surah",
    "ayatNumber": "Ayat X",
    "arabicText": "Teks Arab ayat",
    "indonesianTranslation": "Terjemahan Bahasa Indonesia yang indah",
    "tafsirBrief": "Pesan singkat dari ayat ini yang relevan dengan kondisi hati pengguna"
  },
  "renungan": "Renungan 3-4 paragraf pendek yang hangat, penuh empati, mengingatkan nikmat Allah yang tak terhitung, serta memandu muhasabah diri secara santun.",
  "doa": {
    "arabic": "Teks Arab Doa",
    "latin": "Transliterasi Latin",
    "artinya": "Arti Doa"
  },
  "tindakanMuhasabah": [
    "Langkah praktis sederhana 1",
    "Langkah praktis sederhana 2",
    "Langkah praktis sederhana 3"
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              mood: { type: Type.STRING },
              ayat: {
                type: Type.OBJECT,
                properties: {
                  surah: { type: Type.STRING },
                  ayatNumber: { type: Type.STRING },
                  arabicText: { type: Type.STRING },
                  indonesianTranslation: { type: Type.STRING },
                  tafsirBrief: { type: Type.STRING },
                },
                required: ["surah", "ayatNumber", "arabicText", "indonesianTranslation"],
              },
              renungan: { type: Type.STRING },
              doa: {
                type: Type.OBJECT,
                properties: {
                  arabic: { type: Type.STRING },
                  latin: { type: Type.STRING },
                  artinya: { type: Type.STRING },
                },
                required: ["arabic", "latin", "artinya"],
              },
              tindakanMuhasabah: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ["mood", "ayat", "renungan", "doa", "tindakanMuhasabah"],
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("Respon kosong dari AI.");
      }

      const parsedData = JSON.parse(text);
      return res.json(parsedData);
    } catch (err: any) {
      console.error("Error AI Teman Muhasabah:", err);
      return res.status(500).json({
        error: "Gagal mengambil renungan muhasabah.",
        details: err?.message || String(err),
      });
    }
  });

  // Meta Conversions API (CAPI) Endpoint
  const META_PIXEL_ID = process.env.META_PIXEL_ID || "2084546082456758";
  const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || "EAFzGloW5T2cBSdybuz5ifS8o939yiPtzAdIDN5w1uthNRNMi7QrZB4YipfNhBL0uCoqB3rGp0zqMzAC1zeIGa5WM1zyRKZB8bSMtJ3B46GZAjZAfEjYwhRURqN8nk0nxlnZAZAZAlZAaFI0KagoKPyqgwXs0zR0rjzITaJEkjclZBtjwZA8pHW1wWfZAQ9WH7rrugZDZD";

  app.post("/api/meta-capi", async (req, res) => {
    try {
      const { eventName, eventId, eventSourceUrl, customData } = req.body;
      if (!eventName) {
        return res.status(400).json({ error: "eventName is required" });
      }

      const clientIp = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "";
      const userAgent = req.headers["user-agent"] || "";

      const eventPayload = {
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: eventSourceUrl || req.headers.referer || "",
            action_source: "website",
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
            },
            custom_data: customData || {},
          },
        ],
      };

      const metaUrl = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;

      const response = await fetch(metaUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });

      const result = await response.json();
      return res.json({ success: true, metaResponse: result });
    } catch (err: any) {
      console.warn("Meta CAPI server forwarding error:", err?.message || err);
      return res.status(200).json({ success: false, error: err?.message || "CAPI error" });
    }
  });

  // Healthcheck endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Portal 1000 Nikmat Allah API" });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(
      express.static(distPath, {
        maxAge: "1d",
        setHeaders: (res, filePath) => {
          // Long-term immutable caching for hashed assets (/assets/*) and optimized webp images (/images/*)
          if (filePath.includes("/assets/") || filePath.includes("/images/")) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Portal 1000 Nikmat Allah berjalan di http://localhost:${PORT}`);
  });
}

startServer();

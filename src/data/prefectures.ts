export interface Prefecture {
  id: string;
  name: string;
  nameJa: string;
  region: string;
  rating: number;
  cities: string[];
  review: string;
  localTip: string;
  image: string;
}

export interface Region {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  image: string;
}

export const regions: Region[] = [
  { id: 'hokkaido', name: 'Hokkaido', nameJa: '北海道', description: "Japan's northern frontier — endless snow, fresh seafood, and wide-open landscapes.", image: 'https://images.unsplash.com/photo-1610375228550-d5cabc1e3548?w=1200' },
  { id: 'tohoku', name: 'Tohoku', nameJa: '東北', description: 'Hot springs, festivals, and untouched nature. The deep, traditional heart of Japan.', image: 'https://images.unsplash.com/photo-1576675466969-6db3eafd8b29?w=1200' },
  { id: 'kanto', name: 'Kanto', nameJa: '関東', description: 'Home to Tokyo and everything around it — history, theme parks, and endless variety.', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200' },
  { id: 'chubu', name: 'Chubu', nameJa: '中部', description: 'Mount Fuji, the Japanese Alps, and some of the best onsen in the country.', image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=1200' },
  { id: 'kansai', name: 'Kansai', nameJa: '関西', description: 'Kyoto, Osaka, and beyond — temples, street food, and centuries of culture.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200' },
  { id: 'chugoku', name: 'Chugoku', nameJa: '中国', description: 'Hiroshima, island shrines, and quiet rural beauty on the western coast.', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200' },
  { id: 'shikoku', name: 'Shikoku', nameJa: '四国', description: "Japan's hidden island — udon, citrus, pilgrimage trails, and genuine rural charm.", image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=1200' },
  { id: 'kyushu-okinawa', name: 'Kyushu & Okinawa', nameJa: '九州・沖縄', description: 'Volcanic landscapes, tropical beaches, ramen, and the warmest hospitality in Japan.', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200' },
];

export const prefectures: Prefecture[] = [
  // Hokkaido
  {
    id: 'hokkaido', name: 'Hokkaido', nameJa: '北海道', region: 'hokkaido', rating: 4,
    cities: ['Sapporo', 'Hakodate', 'Asahikawa'],
    review: "Hokkaido is Japan's coldest region, with snow covering the ground for almost half the year. Though it's far from Tokyo, it's surprisingly easy to reach with just a 1.5-hour flight. This prefecture is a paradise for winter activities like skiing and snowboarding. It's also famous for fresh seafood, unique souvenirs, and breathtaking landscapes. The downside? Hokkaido lacks mountains with hot springs, so onsen options are limited. Still, it's one of Japan's top destinations for tourists.",
    localTip: "Fly from Tokyo — it's only 1.5 hours and often cheaper than you'd expect.",
    image: 'https://images.unsplash.com/photo-1610375228550-d5cabc1e3548?w=800',
  },
  // Tohoku
  {
    id: 'aomori', name: 'Aomori', nameJa: '青森', region: 'tohoku', rating: 4,
    cities: ['Aomori City', 'Hirosaki', 'Towada'],
    review: 'Known as the "Apple Prefecture," Aomori offers a blend of history, nature, and culture. Its famous Nebuta Festival attracts visitors from all over Japan. You can also enjoy hot springs and traditional villages. The stunning Lake Towada and Oirase Gorge are must-see spots.',
    localTip: "Don't miss the Nebuta Festival in August — it's one of Japan's most spectacular events.",
    image: 'https://images.unsplash.com/photo-1576675466969-6db3eafd8b29?w=800',
  },
  {
    id: 'iwate', name: 'Iwate', nameJa: '岩手', region: 'tohoku', rating: 1,
    cities: ['Morioka', 'Hiraizumi', 'Kamaishi'],
    review: "Iwate is a deep and culturally rich region, but it's not ideal for first-time visitors to Japan. Access can be challenging, making it better suited for experienced travelers. Hiraizumi, a UNESCO World Heritage site, and the rugged Sanriku Coast are highlights.",
    localTip: 'Travel pros love Iwate. If this is your second or third trip to Japan, consider it.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'miyagi', name: 'Miyagi', nameJa: '宮城', region: 'tohoku', rating: 1,
    cities: ['Sendai', 'Matsushima', 'Ishinomaki'],
    review: "Miyagi has some beautiful spots, like the scenic Matsushima Bay and the city of Sendai, known for its delicious gyutan (grilled beef tongue). However, it's not an essential destination for first-time visitors.",
    localTip: 'Try gyutan (beef tongue) in Sendai — it\'s a local specialty you won\'t find this good anywhere else.',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=800',
  },
  {
    id: 'akita', name: 'Akita', nameJa: '秋田', region: 'tohoku', rating: 2,
    cities: ['Akita City', 'Yokote', 'Oga'],
    review: 'Akita offers a mix of hot springs, beautiful lakes, and local food culture. The Akita Kanto Festival is a unique experience. Despite these attractions, access to Akita is limited.',
    localTip: 'If you love off-the-beaten-path adventures, the Kanto Festival in August is worth the trip.',
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800',
  },
  {
    id: 'yamagata', name: 'Yamagata', nameJa: '山形', region: 'tohoku', rating: 3,
    cities: ['Yamagata City', 'Ginzan Onsen', 'Tsuruoka'],
    review: "Yamagata is home to Ginzan Onsen, one of Japan's most picturesque hot spring towns. The quality of the hot springs is excellent, and the area feels like a step back in time. However, poor access makes it better for longer stays.",
    localTip: 'Ginzan Onsen is the most photogenic onsen town in all of Japan — worth the effort to get there.',
    image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=800',
  },
  {
    id: 'fukushima', name: 'Fukushima', nameJa: '福島', region: 'tohoku', rating: 3,
    cities: ['Fukushima City', 'Aizu-Wakamatsu', 'Iwaki'],
    review: "Fukushima offers a perfect blend of nature and urban experiences. Explore traditional streets in Aizu-Wakamatsu, enjoy delicious fruits, and relax in excellent hot springs. Despite its reputation, Fukushima has plenty to offer.",
    localTip: 'My friends say Fukushima has the best fruit in Japan. Try the peaches in summer.',
    image: 'https://images.unsplash.com/photo-1606918801925-e2c914c4b503?w=800',
  },
  // Kanto
  {
    id: 'ibaraki', name: 'Ibaraki', nameJa: '茨城', region: 'kanto', rating: 1,
    cities: ['Mito', 'Tsukuba', 'Hitachi'],
    review: "Ibaraki is often considered Japan's least attractive prefecture, but it has hidden gems. If you love shrines and temples, there are several worth visiting, like Kashima Jingu.",
    localTip: 'Voted "least attractive" by Japanese people — but the shrines here are actually incredible.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800',
  },
  {
    id: 'tochigi', name: 'Tochigi', nameJa: '栃木', region: 'kanto', rating: 5,
    cities: ['Nikko', 'Utsunomiya', 'Ashikaga'],
    review: "Tochigi is a must-visit for nature lovers and history enthusiasts. Nikko, with its famous Toshogu Shrine, waterfalls, and forests, is a highlight. The prefecture also offers high-quality hot springs close to Tokyo.",
    localTip: "Nikko is where Japanese students go for school trips — it's that iconic.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'gunma', name: 'Gunma', nameJa: '群馬', region: 'kanto', rating: 4,
    cities: ['Kusatsu', 'Minakami', 'Takasaki'],
    review: "Gunma is known for its onsen, including Kusatsu, one of Japan's most famous hot spring towns. It's easily accessible from Tokyo. In summer, Minakami offers outdoor activities like rafting with outstanding water quality.",
    localTip: "Kusatsu is Japan's most famous onsen — and it's just 2.5 hours from Tokyo by bus.",
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
  },
  {
    id: 'saitama', name: 'Saitama', nameJa: '埼玉', region: 'kanto', rating: 3,
    cities: ['Kawagoe', 'Saitama City', 'Chichibu'],
    review: 'Saitama is known for its bonsai culture, with the Omiya Bonsai Village and Museum being standout attractions. Kawagoe, often called "Little Edo," is a historic town perfect for a day trip. Packs a lot of variety in a small area.',
    localTip: 'Short on time? Saitama has everything condensed — Kawagoe, bonsai, and temples all within easy reach.',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800',
  },
  {
    id: 'chiba', name: 'Chiba', nameJa: '千葉', region: 'kanto', rating: 3,
    cities: ['Chiba City', 'Narita', 'Kisarazu'],
    review: "Chiba is best known for housing Tokyo Disneyland and Narita International Airport. While it lacks iconic tourist spots, places like Nokogiri Mountain and the historic town of Sakura make it worth a visit.",
    localTip: "Disneyland is technically in Chiba, not Tokyo — don't tell the locals I said that.",
    image: 'https://images.unsplash.com/photo-1624601573012-efb68f3f150b?w=800',
  },
  {
    id: 'tokyo', name: 'Tokyo', nameJa: '東京', region: 'kanto', rating: 5,
    cities: ['Shinjuku', 'Shibuya', 'Ginza'],
    review: "Tokyo is Japan's capital and a city like no other. It's massive — 6 times bigger than Paris — with each district having its unique character: fashion, food, anime, coffee, history. If you have many interests, you'll want to stay for weeks.",
    localTip: "Each neighborhood specializes in something. Don't try to see all of Tokyo — pick districts that match your interests.",
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
  },
  {
    id: 'kanagawa', name: 'Kanagawa', nameJa: '神奈川', region: 'kanto', rating: 3,
    cities: ['Yokohama', 'Kamakura', 'Hakone'],
    review: "Kanagawa is home to Yokohama (romantic port city, best at night), Kamakura (historic capital from 1200s with famous temples), and Hakone (hot springs with Mt. Fuji views). Outside these three, there's not much else.",
    localTip: "Yokohama is best from late afternoon into evening. During the day, go to Kamakura instead.",
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800',
  },
  // Chubu
  {
    id: 'niigata', name: 'Niigata', nameJa: '新潟', region: 'chubu', rating: 3,
    cities: ['Niigata City', 'Sado', 'Yuzawa'],
    review: "Niigata is famous for producing Japan's best rice and sake. It's also a top destination for winter sports. While great for food and snow lovers, many travelers choose nearby Nagano for similar experiences.",
    localTip: "Japan's best rice comes from here. The sake made from this rice is unbeatable.",
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800',
  },
  {
    id: 'toyama', name: 'Toyama', nameJa: '富山', region: 'chubu', rating: 3,
    cities: ['Toyama City', 'Tateyama', 'Takaoka'],
    review: 'Toyama is a hidden gem with breathtaking nature, including the Tateyama Kurobe Alpine Route and traditional Gokayama villages. However, limited transportation makes it challenging without a car.',
    localTip: 'Very charming with traditional houses, but plan transportation carefully.',
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=800',
  },
  {
    id: 'ishikawa', name: 'Ishikawa', nameJa: '石川', region: 'chubu', rating: 5,
    cities: ['Kanazawa', 'Nanao', 'Kaga'],
    review: "Kanazawa is a treasure trove of history and culture — Kenrokuen Garden, 21st Century Museum, and Omicho Market all packed into a compact, walkable city. Don't miss the local specialty, nodoguro fish.",
    localTip: "Order nodoguro (rosy seabass) when you're in Kanazawa — and book Myouryuji temple in advance. You won't regret it.",
    image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=800',
  },
  {
    id: 'fukui', name: 'Fukui', nameJa: '福井', region: 'chubu', rating: 1,
    cities: ['Fukui City', 'Tsuruga', 'Echizen'],
    review: "Fukui is known for its crab and scenic coastline. While it has interesting attractions like Eiheiji Temple and Tojinbo Cliffs, it's not a top priority for most tourists.",
    localTip: "If you love crab, come in winter — Echizen crab is legendary.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'yamanashi', name: 'Yamanashi', nameJa: '山梨', region: 'chubu', rating: 4,
    cities: ['Kofu', 'Fujiyoshida', 'Otsuki'],
    review: "Yamanashi is home to Mount Fuji and stunning natural scenery. Visitors can enjoy hiking, hot springs, and local specialties. The area is also famous for wineries and grape production.",
    localTip: "Don't miss hoto noodles — it's the one food you absolutely must try here.",
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800',
  },
  {
    id: 'nagano', name: 'Nagano', nameJa: '長野', region: 'chubu', rating: 5,
    cities: ['Nagano City', 'Matsumoto', 'Karuizawa'],
    review: "Nagano is one of Japan's top destinations for both summer and winter. Karuizawa and Kamikochi offer cool mountain retreats in summer, while winter brings world-class skiing. Snow monkeys are a must-see.",
    localTip: "Summer: Karuizawa and Kamikochi. Winter: skiing and snow monkeys. Nagano does it all.",
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800',
  },
  {
    id: 'gifu', name: 'Gifu', nameJa: '岐阜', region: 'chubu', rating: 5,
    cities: ['Takayama', 'Shirakawa-go', 'Gero'],
    review: "Access isn't great, but many of my foreign friends say Gifu was their favorite place in Japan. Takayama and Shirakawa-go are once-in-a-lifetime experiences. In summer, try cormorant fishing (ukai).",
    localTip: "My foreign friends consistently rate Gifu as #1. Takayama and Shirakawa-go are bucket list destinations.",
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=800',
  },
  {
    id: 'shizuoka', name: 'Shizuoka', nameJa: '静岡', region: 'chubu', rating: 4,
    cities: ['Shizuoka City', 'Atami', 'Izu'],
    review: "Shizuoka has Mt. Fuji views plus beautiful beaches — unlike Yamanashi. Atami, Izu, and Shimoda are popular hot spring destinations loved by Japanese tourists. Also famous for green tea.",
    localTip: "Atami and Izu are where Japanese people go for weekend getaways — the beaches + onsen combo is unbeatable.",
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800',
  },
  {
    id: 'aichi', name: 'Aichi', nameJa: '愛知', region: 'chubu', rating: 2,
    cities: ['Nagoya', 'Toyota', 'Inuyama'],
    review: "Aichi is centered around Nagoya, a bustling city but with limited tourist hotspots. Most travelers pass through rather than stay. Inuyama Castle and Atsuta Shrine are highlights.",
    localTip: "Nagoya is a great transit hub but not a destination. Spend your time in surrounding prefectures instead.",
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800',
  },
  // Kansai
  {
    id: 'mie', name: 'Mie', nameJa: '三重', region: 'kansai', rating: 1,
    cities: ['Ise', 'Matsusaka', 'Toba'],
    review: "Mie is famous for Matsusaka beef and the Ise Grand Shrine. However, unless you have specific plans, this prefecture is often skipped.",
    localTip: 'Famous for Matsusaka beef, but skip it unless you\'re visiting Ise Grand Shrine specifically.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'shiga', name: 'Shiga', nameJa: '滋賀', region: 'kansai', rating: 2,
    cities: ['Otsu', 'Hikone', 'Omihachiman'],
    review: "Shiga is right next to Kyoto, home to Lake Biwa — Japan's largest lake. Omihachiman is one of my personal favorite towns in all of Japan.",
    localTip: 'Omihachiman is one of my favorite towns in Japan. If you\'re in Kyoto, it\'s worth a side trip.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
  },
  {
    id: 'kyoto', name: 'Kyoto', nameJa: '京都', region: 'kansai', rating: 5,
    cities: ['Kyoto City', 'Uji', 'Nagaokakyo'],
    review: "Kyoto is a must-see for almost all visitors. Stunning temples, gardens, and traditional streets. However, it gets extremely crowded during cherry blossom and autumn foliage seasons — like a theme park.",
    localTip: "Skip the bus — it's cheap but always packed. Take a taxi or rent a bicycle instead. Seriously.",
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
  },
  {
    id: 'osaka', name: 'Osaka', nameJa: '大阪', region: 'kansai', rating: 1,
    cities: ['Osaka City', 'Sakai', 'Minoh'],
    review: "Osaka has USJ and great street food, but the city is similar to Tokyo. If you're already visiting Tokyo, you could skip Osaka and spend time in the more unique surrounding areas like Kyoto or Nara.",
    localTip: "Honestly, if you're going to Tokyo already, Osaka feels very similar. Spend your time in Kyoto, Nara, or Kobe instead.",
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
  },
  {
    id: 'hyogo', name: 'Hyogo', nameJa: '兵庫', region: 'kansai', rating: 5,
    cities: ['Kobe', 'Himeji', 'Awaji Island'],
    review: "Hyogo has Kansai's most famous onsen (Arima Onsen) with beautiful atmosphere, the stunning Himeji Castle, and Kobe's vibrant harbor. If you rent a car, Awaji Island is one of the best spots in Japan.",
    localTip: "Arima Onsen is the most atmospheric onsen in Kansai. If you have a car, Awaji Island is a hidden paradise.",
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
  },
  {
    id: 'nara', name: 'Nara', nameJa: '奈良', region: 'kansai', rating: 2,
    cities: ['Nara City', 'Asuka', 'Yoshino'],
    review: "Nara is famous for its deer park and the great Buddha at Todai-ji. It's an easy day trip from Kyoto, but beyond the main attractions, there's less to see. If time is short, prioritize Kyoto.",
    localTip: "Easy day trip from Kyoto. See the deer, see the Buddha, and head back — that's all you need.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'wakayama', name: 'Wakayama', nameJa: '和歌山', region: 'kansai', rating: 1,
    cities: ['Wakayama City', 'Shirahama', 'Koyasan'],
    review: "Wakayama offers scenic coastal towns and spiritual Mount Koya. While beautiful, the region is harder to access and less visited by first-time tourists.",
    localTip: "Beautiful coastal towns, but geographically inconvenient. Only go if you have extra time.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  // Chugoku
  {
    id: 'tottori', name: 'Tottori', nameJa: '鳥取', region: 'chugoku', rating: 1,
    cities: ['Tottori City', 'Kurayoshi', 'Yonago'],
    review: "Tottori is famous for its sand dunes and Mount Daisen — things you can't see anywhere else in Japan. But access is poor, so most travelers skip it.",
    localTip: "The sand dunes are unique but the trip there is long. Only worth it for nature enthusiasts.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'shimane', name: 'Shimane', nameJa: '島根', region: 'chugoku', rating: 1,
    cities: ['Matsue', 'Izumo', 'Iwami Ginzan'],
    review: "Shimane is one of Japan's most rural places — barely any convenience stores or traffic lights. It feels like a hidden world. Iwami Ginzan is fascinating but this is not a first-trip destination.",
    localTip: "The most rural place I've been in Japan. Almost no convenience stores. Feels like a hidden world.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'okayama', name: 'Okayama', nameJa: '岡山', region: 'chugoku', rating: 1,
    cities: ['Okayama City', 'Kurashiki', 'Tsuyama'],
    review: "Okayama has deep history and culture. Kurashiki's preserved district is charming. But access issues make it easy to skip for first-timers.",
    localTip: "Skip it for your first trip. Kurashiki is lovely though — save it for next time.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'hiroshima', name: 'Hiroshima', nameJa: '広島', region: 'chugoku', rating: 4,
    cities: ['Hiroshima City', 'Miyajima', 'Onomichi'],
    review: "Hiroshima is a common stop for first-time visitors. The famous sites like Miyajima and the Atomic Bomb Dome attract many, though I personally find them less interesting. Baseball fans should visit the stadium — it's Japan's most exciting. Onomichi is a cycling paradise.",
    localTip: "Onomichi is a cycling paradise — if you love biking, look into the Shimanami Kaido route.",
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800',
  },
  {
    id: 'yamaguchi', name: 'Yamaguchi', nameJa: '山口', region: 'chugoku', rating: 2,
    cities: ['Shimonoseki', 'Hagi', 'Iwakuni'],
    review: "Yamaguchi is worth visiting if you have time, but access isn't great. Mojiko Port had a wonderful nostalgic atmosphere when I visited.",
    localTip: "Mojiko Port felt incredibly nostalgic. Worth a visit if you're already in the area.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  // Shikoku
  {
    id: 'tokushima', name: 'Tokushima', nameJa: '徳島', region: 'shikoku', rating: 1,
    cities: ['Tokushima City', 'Naruto', 'Awa'],
    review: "Located in Shikoku, an island with limited access. Known for the Awa Odori dance festival. Unless you have specific plans, it's often skipped.",
    localTip: "Shikoku is an island and access is poor. Skip unless you specifically want the Awa Odori experience.",
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800',
  },
  {
    id: 'kagawa', name: 'Kagawa', nameJa: '香川', region: 'shikoku', rating: 1,
    cities: ['Takamatsu', 'Marugame', 'Naoshima'],
    review: 'Known as the "Udon Prefecture," Kagawa serves Japan\'s best udon noodles. While the food is incredible, Shikoku island\'s remote location makes access difficult.',
    localTip: "Japan's absolute best udon is here. If you love noodles, it might be worth the trip.",
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800',
  },
  {
    id: 'ehime', name: 'Ehime', nameJa: '愛媛', region: 'shikoku', rating: 1,
    cities: ['Matsuyama', 'Uwajima', 'Imabari'],
    review: 'The "Mikan Prefecture" — Ehime grows Japan\'s tastiest mandarin oranges. Himemadonna variety is genuinely amazing. But the remote Shikoku location makes it hard to justify for most visitors.',
    localTip: "Himemadonna mikan is the most delicious citrus fruit I've ever had. If you're here, try it.",
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800',
  },
  {
    id: 'kochi', name: 'Kochi', nameJa: '高知', region: 'shikoku', rating: 1,
    cities: ['Kochi City', 'Shimanto', 'Muroto'],
    review: "Kochi is scenic but remote, even by Shikoku standards. The Shimanto River is beautiful, but access challenges lead most tourists to skip it.",
    localTip: "Beautiful nature but very remote. Save it for a dedicated Shikoku trip.",
    image: 'https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=800',
  },
  // Kyushu & Okinawa
  {
    id: 'fukuoka', name: 'Fukuoka', nameJa: '福岡', region: 'kyushu-okinawa', rating: 4,
    cities: ['Fukuoka City', 'Dazaifu', 'Kitakyushu'],
    review: "Well-connected by flights and shinkansen. The further you go from the city, the more beautiful it gets — mountains, rivers, coastlines everywhere. The food is excellent. If you're exploring Kyushu, make Fukuoka your base.",
    localTip: "Use Fukuoka as your base for Kyushu. Great access, amazing food, and the surrounding nature is stunning.",
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
  },
  {
    id: 'saga', name: 'Saga', nameJa: '佐賀', region: 'kyushu-okinawa', rating: 1,
    cities: ['Saga City', 'Karatsu', 'Takeo'],
    review: "Saga doesn't have many standout attractions. Unless you have specific plans, focusing on other Kyushu prefectures is more rewarding.",
    localTip: "I'd recommend skipping Saga and spending more time in Nagasaki or Fukuoka instead.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'nagasaki', name: 'Nagasaki', nameJa: '長崎', region: 'kyushu-okinawa', rating: 4,
    cities: ['Nagasaki City', 'Sasebo', 'Shimabara'],
    review: "Nagasaki is Japan's most Christian-influenced city. Japanese and Western cultures blend uniquely here — churches, Western-style cemeteries, unique architecture. Many experiences you won't find anywhere else.",
    localTip: "If you're interested in Christianity or cultural history, Nagasaki is the most unique city in Japan.",
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
  },
  {
    id: 'kumamoto', name: 'Kumamoto', nameJa: '熊本', region: 'kyushu-okinawa', rating: 3,
    cities: ['Kumamoto City', 'Aso', 'Yamaga'],
    review: "Kumamoto is all about nature. Mount Aso's volcanic landscape is ideal for camping and outdoor adventures. One of the best camping areas in Japan.",
    localTip: "Mount Aso is one of the best camping spots in all of Japan. Nature here is just unreal.",
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
  },
  {
    id: 'oita', name: 'Oita', nameJa: '大分', region: 'kyushu-okinawa', rating: 3,
    cities: ['Beppu', 'Yufuin', 'Kunisaki'],
    review: "Oita is Kyushu's top onsen destination. Beppu and Yufuin are famous hot spring towns that draw visitors from across Japan. If you love onsen, Oita should be on your list.",
    localTip: "Kyushu's best onsen town. If you love hot springs, this is a must.",
    image: 'https://images.unsplash.com/photo-1553653924-39b70295f8da?w=800',
  },
  {
    id: 'miyazaki', name: 'Miyazaki', nameJa: '宮崎', region: 'kyushu-okinawa', rating: 1,
    cities: ['Miyazaki City', 'Takachiho', 'Nichinan'],
    review: "Miyazaki has beautiful coastal scenery but its remote location makes it less attractive to most tourists.",
    localTip: "Beautiful coast but too remote for most trips. Skip unless you have lots of time.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'kagoshima', name: 'Kagoshima', nameJa: '鹿児島', region: 'kyushu-okinawa', rating: 1,
    cities: ['Kagoshima City', 'Ibusuki', 'Kirishima'],
    review: "Kagoshima has beautiful volcanic landscapes but access is very difficult. For most travelers, the journey isn't worth it.",
    localTip: "Access is really bad. Unless you're specifically interested in volcanoes, skip it.",
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
  },
  {
    id: 'okinawa', name: 'Okinawa', nameJa: '沖縄', region: 'kyushu-okinawa', rating: 5,
    cities: ['Naha', 'Nago', 'Ishigaki'],
    review: "If you love tropical islands, Okinawa is a must-visit. Affordable, high-quality hotels, crystal-clear waters, and each island has its own unique character. People are friendly and fun. Beyond Naha, every island offers something different.",
    localTip: "Don't just stay in Naha — every island is different. Ishigaki and Miyako are paradise.",
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800',
  },
];

export function getPrefecturesByRegion(regionId: string): Prefecture[] {
  return prefectures.filter(p => p.region === regionId);
}

export function getRegionById(regionId: string): Region | undefined {
  return regions.find(r => r.id === regionId);
}

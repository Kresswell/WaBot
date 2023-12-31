let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, watermark, '𝐁𝐮𝐜𝐢𝐧', `${usedPrefix + command}`)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(bucin|quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
  "I choose to be alone, not because I'm waiting for the perfect one, but need someone who never gives up.",
  "A single person is created with a partner he has not yet found.",
  "Singles. Maybe it's God's way of saying 'Rest from the wrong love'.",
  "Singles are young people who prioritize their personal development for a classier love later.",
  "I'm not looking for someone who is perfect, but I'm looking for someone who becomes perfect thanks to my strengths.",
  "People's boyfriends are our pending soul mates.",
  "Singles must pass. Everything has a time, when all loneliness becomes a togetherness with a halal lover. Be patient.",
  "Romeo was willing to die for juliet, Jack died because he saved Rose. The point is, if you want to live, be single.",
  "I look for people not from their strengths but I look for people from their sincerity.",
  "Madmates are not flip-flops, which are often confused. So continue to be in the proper struggle.",
  "If you become the guitar strings, I don't want to be the guitarist. Because I don't want to dump you.",
  "If loving you is an illusion, then let me imagine forever.",
  "Honey... My job is only to love you, not to fight fate.",
  "When I'm with you it feels like 1 hour is only 1 second, but when I'm away from you it feels like 1 day becomes 1 year.",
  "Kolak bananas know sumedang, even though the distance stretches my love will never disappear.",
  "I want to be the only one, not the one.",
  "I can't promise to be good. But I promise to always be by your side.",
  "If I become a representative of the people I will definitely fail, how can I think about the people if the only thing on my mind is you.",
  "Look at my garden, full of flowers. Look at your eyes, my heart is blooming.",
  "Promise to be with me now, tomorrow, and forever.",
  "Missing doesnt only arise because of the distance apart But also because of wishes that dont come true",
  "You will never be far from me, wherever I go you are always there, because you are always in my heart, what is far is only our bodies, not our hearts.",
  "I know in every glance, we are hindered by distance and time. But I believe that later we will definitely be united.",
  "Missing you without ever meeting is the same as creating a song that's never been sung.",
  "There are times when distance is always a barrier between me and you, but still in my heart we are always close.",
  "If this heart is not able to stem all the longing, what can I do but pray for you.",
  "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you.",
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs.",
  "In the cold night, I don't remember anymore; How often I think of you miss you too.",
  "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you.",
  "Since getting to know you, I want to continue to learn, learn to be the best for you.",
  "Do you know the difference between a pencil and your face? If you can erase the writing pencil, but if your face nothing will be able to erase it from my mind.",
  "It's not the National Examination tomorrow that I have to worry about, but the life test I went through after you left me.",
  "One thing about happiness at school that keeps me motivated is being able to see your smile every day.",
  "Do you know the difference between going to school and going to your house? If you go to school, you must bring books and pens, but if you go to your house, I just bring my heart and love.",
  "I'm not sad if tomorrow is Monday, I'm sad if I don't meet you.",
  "My love moment is perpendicular to your love moment. Make our love a perfect equilibrium point.",
  "I'm willing to take part in a running race around the world, as long as you are the finish line.",
  "My homework is to miss you. Stronger than Math, broader than Physics, stronger than Biology.",
  "My love for you is like a metabolism, which will not stop until death.",
  "If the jelangkung is like you, come and pick me up, I'll take you home.",
  "Eat whatever I like as long as it's with you, including eating liver.",
  "Love is like a death sentence. If you don't get shot, you hang it.",
  "Loving you is like a drug: once you try to be addicted, you don't try to make yourself curious, leave it to make you addicted.",
  "I like snacking the most because snacking is delicious. Moreover, having you completely ...",
  "This world belongs only to the two of us. Everything else is just a contract.",
  "For me, all those days are Tuesdays. Tuesdays in Heaven when close to you...",
  "What if we both become a gang of criminals? I stole your heart and you stole mine.",
  "You are like the coffee I drank this morning. Bitter, but addictive.","I'm often jealous of your lipstick. He can kiss you every day, from morning to night.",
  "Just hearing your name can make me smile like a fool.",
  "I know your girlfriend is not the only one, and like you not only me.",
  "Ever since I stopped wishing on you, I've become unmotivated in everything..",
  "With you, falling in love is the most intentional heartbreak.",
  "It's very difficult to feel the happiness of life without you by my side.",
  "Through the turbulent longing in my heart, there sometimes I really need your loving hugs.",
  "If you know, until now I still love you.",
  "Sometimes I'm jealous of kites...the strings just break, they're still being chased and don't want to be taken over by other people...",
  "I didn't know what love was, until I finally met you. But, at that moment I knew how it felt to be heartbroken.",
  "Chasing is tiring, but even more tired waiting\nWaiting for you to notice my existence...",
  "Don't stop loving just because you've been hurt. Because there's no rainbow without rain, there's no true love without tears.",
  "I have a million reasons to forget you, but nothing can force me to stop loving you.",
  "Sometimes one feels so stupid just to love someone.",
  "You are the best heartbreak I've never regretted.",
  "It's not that it's not worth the wait, it's just that it often gives false hope.",
  "Part of me hurts, Remembering her so close, yet untouchable.",
  "The best thing about loving someone is secretly praying for them.",
  "I wish I could get rid of this feeling as soon as I lost you.",
  "For the sake of love we deceive ourselves. Trying to be strong turns out to be dishonorable.",
  "Think of me as your home, if you go you know where to go home. Stay if you want and leave if you are bored...",
  "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, but I'm waiting for his words.",
  "My longing is like a branch that remains standing. Even though there are no more leaves to accompany it, until it finally dries up, breaks, and dies.",
  "I guess we're just two strangers now having the same memories.",
  "Make me hate you even if it's only for a few minutes, so it's not too hard to forget you.",
  "I love you with all my heart, but you share your feelings with other people.",
  "Loving you might break me, but somehow leaving you doesn't fix me.",
  "You are first and foremost in my life. But, I am second to you.",
  "If we can only meet in a dream, I want to sleep forever.",
  "Seeing you happy is my happiness, even though your happy without me.",
  "I sometimes envy an object. It has no taste but is always needed. Unlike me, who has taste, but is abandoned and ignored...",
  "How can I move if only you my heart stops?",
  "Memories of you are like home to me. So every time my mind wanders, it will always come back to you.",
  "Why is tissue useful? Because love never runs dry. - Sujiwo Tejo",
  "If loving you is a mistake, fine, let me just keep being wrong.",
  "Ever since I met you, I want to keep learning. Learn to be the best for you.",
  "Some people act stupid just to see you smile. And he's happy about that.",
  "I'm not a good person, but will learn to be the best for you.",
  "We don't die, but it's the wounds that make us unable to walk like we used to.",
  "Your presence is like a cup of coffee that I need every morning, which can encourage me to stay excited about the day.",
  "I really want to give the world to you. But since that's not possible, then I will give you the most important thing in my life, which is my world.",
  "It's better to sing humorously but sweetly, rather than pretending to be romantic but having a tragic ending.",
  "Ben doesn't end up being disappointed, you have to know when to hope and when to stop.",
  "I, Ki wong Jowo, don't understand the meaning of I Love U.",
  "You don't need ayu and sugih, I'm pretty sure wes are happy and crazy.",
  "My love for your crew is shattered by the camera, focus on your crew is still blurry.",
  "Saben dino kegowo dreams but can't be stupid.",
  "Don't meet 30 dinos, I feel like a month.",
  "I am without you like a cat who lost his rubber. Ambyar.",
  "I want it, I'm playing games every time. Supoyo I'm iso nemokne kowe lewih hot. Ben Lewih dowo when I'm kanggo urip with your slira.",
  "I never knew what opo kui tresno was, I just met thanks to your slira.",
  "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui.",
  "Your patience is limited, but your love is ka anjeun henteu","Kanyaah, I'm sick of fading eating Bayclean.",
  "The memories of the endah keur babarengan jeung anjeun ek tuluy are remembered, nepi ka poho.",
  "You will always breathe alone, you will need a sejen jalmi relief.",
  "Nyaahna aa, you need tea if the bank clerk is still collecting debts (hayoh mumuntil).",
  "Urang's patience is the limit, but your love for urang is good for you.",
  "Hayang I think I'm cursing up the words of love like this in this world, then I'm bade curing kumpulkeun, so that Anjeun nyaho is very big, the love for you is low, Ka Anjeun.",
  "Calm down wae neng, ari love brother mah sapertos krispatih song; timeless.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu is the best kanggo anjeun.",
  "It's enough just to lose the network, you don't.",
  "I'm often made to eat liver. But realizing you're still here makes me happy again.",
  "My enemies are those who want to have you too.",
  "Many are always there, but if you're the only one I want, then what?",
  "My sleeping hours are ruined by longing.",
  "It's enough that China is far away, don't love us.",
  "What's important is your happiness, I'm not important ..",
  "My only wish is to be loved by you...",
  "Me without you is like an ambulance without wiuw wiuw wiuw.",
  "It's enough that Antarctica is far away. Not Antarctica.",
  "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
  "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
  "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
  "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
  "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
  "Pacar orang adalah jodoh kita yang tertunda.",
  "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
  "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
  "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
  "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
  "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
  "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
  "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
  "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
  "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
  "Aku ingin menjadi satu-satunya, bukan salah satunya.",
  "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
  "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
  "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
  "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
  "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
  "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
  "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
  "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
  "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
  "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
  "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
  "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
  "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
  "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
  "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
  "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
  "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
  "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
  "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
  "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
  "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
  "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
  "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
  "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
  "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
  "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
  "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
  "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
  "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
  "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
  "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
  "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
  "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
  "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
  "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
  "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
  "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
  "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
  "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
  "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
  "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
  "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
  "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
  "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
  "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
  "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
  "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
  "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
  "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
  "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
  "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
  "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
  "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
  "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
  "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
  "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
  "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
  "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
  "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
  "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
  "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
  "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
  "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
  "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
  "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
  "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
  "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
  "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
  "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
  "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
  "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
  "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
  "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
  "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
  "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
  "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
  "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
  "Saben dino kegowo ngimpi tapi ora biso nduweni.",
  "Ora ketemu koe 30 dino rasane koyo sewulan.",
  "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
  "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
  "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
  "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
  "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
  "Kanyaah akang moal luntur najan make Bayclean.",
  "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
  "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
  "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
  "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
  "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
  "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
  "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
  "Cukup jaringan aja yang hilang, kamu jangan.",
  "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
  "Musuhku adalah mereka yang ingin memilikimu juga.",
  "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
  "Jam tidurku hancur dirusak rindu.",
  "Cukup China aja yang jauh, cinta kita jangan.",
  "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
  "Cuma satu keinginanku, dicintai olehmu..",
  "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
  "Cukup antartika aja yang jauh. Antarkita jangan.",
  "Aku rela menunggu, meski kamu tak memberiku kabar, bahkan aku sadar jika ingin kamu tinggalkan.",
  "Jika aku bisa menjadi segalanya, aku ingin menjadi air mata kamu. Lalu aku bisa lahir di matamu, hidup di pipimu, dan mati di bibirmu.",
  "Entah mengapa tiap melihat kamu, aku keingat akan ujian. Susah sih, tetapi tetap saja harus diperjuangkan demi masa depan.",
  "Cinta aku tuh kaya kamera, kalau udah fokus ke satu orang yang lain pasti ngeblur.",
  "Aku lebih suka apel daripada anggur, soalnya aku lebih suka ngapelin kamu daripada nganggurin kamu."
]

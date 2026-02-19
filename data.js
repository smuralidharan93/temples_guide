const templesData = [
    {
        "District": "District Name",
        "Details": "Temples",
        "ID": "Temple Index",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "சென்னை மாவட்டம்",
        "Details": "01. திருவலிதாயம் திருவல்லீஸ்வரர் - பாடி - 044 - 2654 0706.",
        "ID": "TN021",
        "God": "Valithayanathar / Tiruvalleeswarar",
        "Goddess": "Jagadambikai / Thaiyal Nayagi",
        "Sthala_Varalaru": "Worshipped by Sage Bharadwaja in the form of a black sparrow (Valiyan). Significant 'Guru Parihara Sthalam'. Features Gajaprushta Vimanam. Legend says Vinayaka married Kamali and Valli (daughters of Brahma) here after defeating Gajamukasuran.",
        "Travel_Details": "Located in Padi, Chennai. 1 km from Padi TVS Lucas bus stop on Avadi Road. Near Ambattur.",
        "Name_EN": "Tiruvalidhaayam Padi Tiruvalleeswarar"
    },
    {
        "District": "",
        "Details": "02. மாசிலாமணீஸ்வரர் - வடதிருமுல்லைவாயில். சென்னையிலிருந்து 26 கி.மீ., - 044 - 2637 6151.",
        "ID": "TN022",
        "God": "Masilamani Eeshwarar",
        "Goddess": "Kodi Idai Nayagi / Kriya Shakthi",
        "Sthala_Varalaru": "King Thondaiman's elephant got stuck in jasmine (mullai) creepers. When he cut them, the Lingam bled. Nandi assisted the king in war; Nandi is uniquely facing away from the deity here. Goddess is worshipped as Kriya Shakthi. Lingam is 'Swayambhu' with a sword cut mark, continuously applied with sandalwood paste.",
        "Travel_Details": "Located in Vada Thirumullaivayil, near Ambattur/Avadi. Local trains stop at Thirumullaivayil station. On the Chennai-Avadi road.",
        "Name_EN": "Vada Tirumullaivayil Masilamaniswarar"
    },
    {
        "District": "",
        "Details": "03. கபாலீஸ்வரர் - மயிலாப்பூர் - 044 - 2464 1670.",
        "ID": "TN024",
        "God": "Kapaleeshwarar",
        "Goddess": "Karpagambal",
        "Sthala_Varalaru": "Known as 'Mayilai' (Divine Peacock). Goddess Parvati worshipped Shiva here as a peacock to attain liberation. Named after Shiva plucking Brahma's 5th head (Kabalam). Site of many legends including Sambanthar raising Poompavai from ashes. Original temple was near Santhome beach; current structure is ~300 years old.",
        "Travel_Details": "Located in Mylapore, Chennai city center. 120 ft tall Rajagopuram. 5 mins from Thirumayilai MRTS station.",
        "Name_EN": "Mylapore Kapaleeshwarar"
    },
    {
        "District": "",
        "Details": "04. மருந்தீஸ்வரர் - திருவான்மியூர் கிழக்கு கடற்கரை சாலை - 044 - 2441 0477.",
        "ID": "TN025",
        "God": "Marundeeswarar / Aushadhanathar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "Lord of Medicines. Shiva taught Sage Agastya about medicinal herbs here. Kamadhenu (celestial cow) regained her form after pouring milk over this Swayambhu Lingam, which turned the Lingam white (Paal-vanna-nathar). Sage Valmiki worshipped here, giving the name Thiruvanmiyur. There is no Navagraha shrine as Surya and Chandra worshipped here.",
        "Travel_Details": "Located in Tiruvanmiyur, Chennai. 5 mins walk from Tiruvanmiyur RTO/Bus Terminus and MRTS station.",
        "Name_EN": "Thiruvanmiyur Marundeeswarar"
    },
    {
        "District": "காஞ்சிபுரம் மாவட்டம்",
        "Details": "05. ஏகாம்பரநாதர் - காஞ்சிபுரம் பஸ் ஸ்டாண்டில் இருந்து 1 கி.மீ., - 044 - 2722 2084.",
        "ID": "TN001",
        "God": "Ekambareswarar",
        "Goddess": "Elavar Kuzhali / Kamakshi",
        "Sthala_Varalaru": "Prithvi (Earth) Sthalam of the Pancha Bhoota Sthalams. Goddess Parvati worshipped a sand Lingam under a Mango tree (over 3500 years old). Shiva tested her with floods (Vegavati river) and fire; she protected the Lingam by embracing it. The name 'Ekambam' means 'Single Mango Tree'.",
        "Travel_Details": "1 km from Kancheepuram Bus Stand. Well connected by road and rail from Chennai (75km).",
        "Name_EN": "Kancheepuram Ekambareswarar"
    },
    {
        "District": "",
        "Details": "06. திருமேற்றளீஸ்வரர் - காஞ்சிபுரம் பஸ் ஸ்டாண்டில் இருந்து 1 கி.மீ., - 98653 55572, 99945 85006.",
        "ID": "TN002",
        "God": "Mettralinathar / Othavurugeesar",
        "Goddess": "Kamakshi",
        "Sthala_Varalaru": "Lord Vishnu worshipped Shiva here to transform into a Lingam form. The Lingam here is unique as it features 'feet' (Odha-Urugeeswarar). Legend says the recitation of Sundarar's hymns moved Vishnu (in Lingam form) so much that he dissolved into it.",
        "Travel_Details": "Located on Tirumetrali Street, Pillaiyarpalayam, 1 km from Kancheepuram Bus Stand.",
        "Name_EN": "Tirukkachchi Mettrali Mettralinathar"
    },
    {
        "District": "",
        "Details": "07. ஓணகாந்தேஸ்வரர் - ஓணகாந்தன்தளி. காஞ்சிபுரம் பஸ் ஸ்டாண்டில் இருந்து 2 கி.மீ., தூரத்திலுள்ள பஞ்சுப்பேட்டை - 98944 43108.",
        "ID": "TN003",
        "God": "Onakaantheswarar / Chalandhareshwarar",
        "Goddess": "Kamakshi",
        "Sthala_Varalaru": "Named after demons Onan and Kaanthan who worshipped Shiva here. Features three separate sanctums with three Lingams. Unique 'Omkara Vigneshwara' idol sounds like 'Om' when heard closely. Shiva gave gold to Sundarar here by hiding in a tamarind tree.",
        "Travel_Details": "Panjupettai locality, 2 km from Kancheepuram Bus Stand on the Arakkonam road.",
        "Name_EN": "Onakaanthanthali Onakaantheswarar"
    },
    {
        "District": "",
        "Details": "08. கச்சி அனேகதங்காவதேஸ்வரர் - காஞ்சிபுரம் பஸ் ஸ்டாண்டில் இருந்து 2கி.மீ., - 044-2722 2084.",
        "ID": "TN004",
        "God": "Anekathangaa Patheeswarar",
        "Goddess": "Kamakshi",
        "Sthala_Varalaru": "Lord Vinayaka (the elephant-headed god) consecrated the Lingam here, giving it the name 'Anekatham' (elephant). Legend says Vinayaka received blessings to marry Vallabhai here after worshipping Shiva. Prayers here are believed to remove marriage obstacles.",
        "Travel_Details": "Pillaiyarpalayam, 3 km NW of Kancheepuram. Near Kailasanathar temple (via Putheri street).",
        "Name_EN": "Kachchi Anekathangaapatham Patheeswarar"
    },
    {
        "District": "",
        "Details": "09. சத்யநாதர் - காஞ்சிபுரம் பஸ் ஸ்டாண்டில் இருந்து 2 கி.மீ., - 044 - 2723 2327, 2722 1664.",
        "ID": "TN005",
        "God": "Kaarai Tiru-Natheswarar / Sathyanathaswamy",
        "Goddess": "Kamakshi",
        "Sthala_Varalaru": "Formerly a forest of thorny 'Kaarai' plants. Worshipped by Lord Indra; includes a sacred tank called Veppankulam created by him. Also called 'Indra Puri'. Lord Budhan (Mercury) worshipped here, making it significant for astrological remedies related to Budhan.",
        "Travel_Details": "Tirukaalimedu, NE Kancheepuram. Road opposite Kancheepuram Head Post Office leads directly to it.",
        "Name_EN": "Kachchineri Kaaraikkadu Sathyanathaswamy"
    },
    {
        "District": "",
        "Details": "10. திருமாகறலீஸ்வரர் - திருமாகறல், காஞ்சிபுரத்திலிருந்து கீழ்ரோடு வழியாக 16 கி.மீ. - 94435 96619.",
        "ID": "TN007",
        "God": "Tiru-Maakaraleeswarar / Adaikalam-Kaaththa Nathar",
        "Goddess": "Tribhuvaneswari",
        "Sthala_Varalaru": "The Lingam has a unique form resembling the tail of a monitor lizard (Udumbeesan). Shiva appeared in this form to King Rajendra Chola. Brahma performed penance here to get relief from a curse and planted a miraculous jackfruit tree that bore one fruit daily.",
        "Travel_Details": "16 km from Kancheepuram on the Uthiramerur route via Orikkai. Located on the northern banks of Seyyaru river.",
        "Name_EN": "Tirumaagaral Maakaraleeswarar"
    },
    {
        "District": "",
        "Details": "11. தெய்வநாயகேஸ்வரர் - எலுமியன்கோட்டூர். காஞ்சிபுரத்திலிருந்து 25 கி.மீ., - 044 - 2769 2412, 94448 65714.",
        "ID": "TN013",
        "God": "Deivanaatheswarar / Chandrasekar / Rambeswarar",
        "Goddess": "Kanaka Kuchambikai",
        "Sthala_Varalaru": "Associated with the Tripura Samhara. Shiva's necklace fell here when the chariot axle broke, manifesting as a Lingam. Worshipped by the Apsara Ramba. Known as Devanatheswarar as he led the army of Devas against the demons of Tripura.",
        "Travel_Details": "24 km from Thiruvallur, 7 km from Perambakkam. Auto-rickshaws available from Perambakkam bus stop.",
        "Name_EN": "Elambayankottur Deivanaatheswarar"
    },
    {
        "District": "",
        "Details": "12. வேதபுரீஸ்வரர் - திருவேற்காடு. சென்னை கோயம்பேட்டிலிருந்து பூந்தமல்லி வழியில் 10 கி.மீ - 044-2627 2430, 2627 2487.",
        "ID": "TN023",
        "God": "Vedhapureeswarar",
        "Goddess": "Balambikai",
        "Sthala_Varalaru": "Named Thiruverkaadu as the four Vedas became trees to worship Shiva. Behind the Lingam, Shiva and Parvati are seen in 'Tirumana Kolam' as they appeared to Sage Agasthya. Birthplace of Moorkha Nayanar. Lord Muruga created the Velayuda Theertham here to worship his father.",
        "Travel_Details": "1 km from Devi Karumari Amman Temple, Thiruverkadu. Easily reached via Sivan Kovil Road from the bus terminus.",
        "Name_EN": "Thiruverkadu Vedhapureeswarar"
    },
    {
        "District": "",
        "Details": "13. கச்சபேஸ்வரர் - திருக்கச்சூர். செங்கல்பட்டில் இருந்து சிங்கப்பெருமாள் கோயில் வழியாக 12 கி.மீ., - 044 - 2746 4325, 93811 86389.",
        "ID": "TN026",
        "God": "Kachchabeshwarar / Virundhitta Eeshwar",
        "Goddess": "Anjanakshi",
        "Sthala_Varalaru": "Named after Mahavishnu worshipping Shiva in his turtle (Kurma/Kachchapa) form during the churning of the ocean. Known as 'Virundu Itta Eeshwar' because Shiva once begged for alms to feed the hungry saint Sundarar here. Features the Nakshathra Mandap with 27 pillars representing constellations.",
        "Travel_Details": "Tirukachchur Alakoil, 12 km from Chengalpattu via Singaperumal Koil. Near the large Kurma Theertham pond.",
        "Name_EN": "Tirukachchur Alakoil Kachchabeshwarar"
    },
    {
        "District": "",
        "Details": "14. ஞானபுரீஸ்வரர் - திருவடிசூலம். செங்கல்பட்டில் இருந்து 9 கி.மீ., - 044 - 2742 0485, 94445 23890.",
        "ID": "TN027",
        "God": "Gyanapureeshwarar / Idaichura Nathar",
        "Goddess": "Govarthanambikai",
        "Sthala_Varalaru": "Located in the Nanmangalam forest. Shiva appeared as a cow-herd to guide a tired Saint Sundarar to the temple, hence 'Idaichura Nathar'. The Lingam is an emerald 'Swayambu' that glows when light falls on it. The Goddess manifested as a cow and offered milk to the Lingam. Features intertwined Neem, Peepal, and Vilva trees.",
        "Travel_Details": "9 km from Chengalpattu. Located in Thiruvadisoolam village. Serene forest environment.",
        "Name_EN": "Tiruvidaichuram Thiruvadisoolam Gyanapureeshwarar"
    },
    {
        "District": "",
        "Details": "15. வேதகிரீஸ்வரர் - திருக்கழுக்குன்றம். செங்கல்பட்டிலிருந்து 17 கி.மீ., - 044 - 2744 7139, 94428 11149.",
        "ID": "TN028",
        "God": "Vedhapureeswarar / Bhakthavathsaleswarar",
        "Goddess": "Chokka Nayaki / Thripurasundari",
        "Sthala_Varalaru": "Named Vedhagiri as the four Vedas became mountains here. Famous for the hilltop temple where two sacred eagles worship Shiva daily at noon. Features two temples: Tirumalai (hilltop) and Thazhakoil (town level). The hilltop Lingam is Swayambhu, resembling a banana flower. Site of a Mahendravarman Pallava cave temple.",
        "Travel_Details": "17 km from Chengalpattu. 500 steps lead to the hill temple. Well connected by bus from Chennai and Mahabalipuram.",
        "Name_EN": "Tirukkazhukkundram Vedhagireeswarar"
    },
    {
        "District": "",
        "Details": "16. ஆட்சிபுரீஸ்வரர் - அச்சிறுபாக்கம். செங்கல்பட்டில் இருந்து 48 கி.மீ. (மேல்மருவத்தூர் அருகில்) - 044 - 2752 3019, 98423 09534.",
        "ID": "TN029",
        "God": "Atcheeswarar",
        "Goddess": "Elumulai Nayagi / Umayambikai",
        "Sthala_Varalaru": "Named 'Achirupakkam' (axle broke) because the axle of Shiva's chariot broke here during the Tripura Samhara as the Devas forgot to worship Ganesha. Ganesha then fixed it. Features two separate sanctums for Umayatcheeswarar and Atcheeswarar. Two demons from Tripura stand as Dwarapalakas. Site of Agastya's wedding vision.",
        "Travel_Details": "48 km from Chengalpattu on the GST Road, near Melmaruvathur. Easily accessible by bus and train.",
        "Name_EN": "Achirupakkam Atcheeswarar"
    },
    {
        "District": "திருவள்ளூர் மாவட்டம்",
        "Details": "17. திரிபுராந்தகர் - கூவம், திருவள்ளூரில் இருந்து 17 கி.மீ., - 94432 53325.",
        "ID": "TN014",
        "God": "Thripuranthakar",
        "Goddess": "Thripuranthaki / Tripurasundari",
        "Sthala_Varalaru": "Source of the Cooum (Koovam) river. The Lingam is 'Theenda Tirumeni' (never touched by hand). It changes color based on the weather and world events (white during rain, red during distress). Features Gajaprushta Vimanam. Known for resolving marital discord.",
        "Travel_Details": "19 km from Thiruvallur. Located in Koovam, adjacent to Perambakkam on the Tiruvallur-Kancheepuram route.",
        "Name_EN": "Tiruvirkolam Koovam Thripuranthakar"
    },
    {
        "District": "",
        "Details": "18. வடாரண்யேஸ்வரர் - திருவாலங்காடு. திருவள்ளூரிலிருந்து அரக்கோணம் வழியில் 16 கி.மீ.,.",
        "ID": "TN015",
        "God": "Vada-Aranyeswarar / Aalankatteesar / Oorthuvathandava Murthy",
        "Goddess": "Vandarkuzhalammai",
        "Sthala_Varalaru": "One of the Five Sabhas (Rathna Sabha). Famous for Shiva's 'Urdhva Thandavam' (cosmic dance with leg raised to ear) which defeated Kali. Site where Karaikkal Ammayar reached liberation, walking on her head to avoid stepping on the sacred ground. Features a 5-tiered Rajagopuram.",
        "Travel_Details": "18 km from Tiruvallur on the Arakkonam route. 4 km from Tiruvalangadu Railway Station (Chennai-Arakonam line).",
        "Name_EN": "Tiruvalangadu VadaAranyeswarar"
    },
    {
        "District": "",
        "Details": "19. வாசீஸ்வரர் - திருப்பாசூர். திருவள்ளூரில் இருந்து 5 கி.மீ., - 98944 86890.",
        "ID": "TN016",
        "God": "Vaacheeswarar / Pachur Nathar",
        "Goddess": "Thangathambikai / Pasupathi Nayagi",
        "Sthala_Varalaru": "Located in a former bamboo forest (Pachur). A cow discovered the Lingam by milking over a snake pit. Karikala Chola built the temple. Features the 'Ekadasa' Ganesha Sabha with 11 Ganesha idols. Deity is 'Theenda Tirumeni' (never touched). Gajaprushta Vimanam.",
        "Travel_Details": "5 km from Thiruvallur on the Arakkonam road. Accessible by bus and train (Thiruvallur station).",
        "Name_EN": "Tirupaasur Vaacheeswarar"
    },
    {
        "District": "",
        "Details": "20. ஊன்றீஸ்வரர் - திருவெண்பாக்கம் (பூண்டி). திருவள்ளூரில் இருந்து 12 கி.மீ., - 044 - 2763 9725.",
        "ID": "TN017",
        "God": "Oondreeswarar",
        "Goddess": "Minnoli Ammai",
        "Sthala_Varalaru": "Original temple was submerged during the construction of Poondi reservoir; reconstructed in 1968 using original materials. Site where Saint Sundarar received a walking stick (Oonru-kol) from Shiva to help with his blindness. Nandi has a broken horn from Sundarar's frustrated throw of the stick.",
        "Travel_Details": "12 km from Thiruvallur. Located near the Poondi Reservoir. Managed by Thiruvearkadu temple.",
        "Name_EN": "Tiruvenpakkam Poondi Oondreeswarar"
    },
    {
        "District": "",
        "Details": "21. சிவாநந்தீஸ்வரர் - திருக்கண்டலம். சென்னை - பெரியபாளையம் சாலையில் 40 கி.மீ., - 044 - 2762 9144, 99412 22814.",
        "ID": "TN018",
        "God": "Shivanandeswarar",
        "Goddess": "AnandaValli",
        "Sthala_Varalaru": "Site where Sage Agasthya witnessed the celestial marriage of Shiva and Parvathy. Features a unique 'Shakthi Dakshinamurthy' with Shakthi on his lap, manifested after Sage Bruhu's prayer using cactus flowers. Arrangement of shrines symbolizes the Somaskanda family.",
        "Travel_Details": "40 km from Chennai on the Periyapalayam road. Located in Tirukallil (Kandalam).",
        "Name_EN": "Tirukkallil Shivanandeswarar"
    },
    {
        "District": "",
        "Details": "22. ஆதிபுரீஸ்வரர் - திருவொற்றியூர். - 044 - 2573 3703.",
        "ID": "TN020",
        "God": "Adhipureeswarar / Otreesar",
        "Goddess": "Vadivudai Amman / Vadivambikai",
        "Sthala_Varalaru": "Ancient temple where the Lingam is a transformed snake pit (absorbed Vasuki), covered with earth. It is opened only 3 days a year. Site of Sundarar's marriage to Sangili Nachiyar under a Magizha tree. Kambar wrote the Ramayana here. Pattinathar attained salvation here.",
        "Travel_Details": "Located in Tiruvotriyur, North Chennai. Well connected by bus and suburban trains.",
        "Name_EN": "Tiruvotriyur Adhipureeswarar"
    },
    {
        "District": "வேலூர் மாவட்டம்",
        "Details": "23. வில்வநாதேஸ்வரர் - திருவல்லம். வேலூர்- ராணிப்பேட்டை வழியில் 16 கி.மீ., - 0416-223 6088.",
        "ID": "TN010",
        "God": "Vilva Naatheswarar / Vallanathar",
        "Goddess": "Dhanu Madyaambal / Vallaambikai",
        "Sthala_Varalaru": "Located on the banks of Niva river. Unique presence of four Nandhis, with the Adhikara Nandi facing the deity and the other three facing away. The river Niva changed its course for Shiva. Features a sacred jackfruit tree and a moat-like structure around the east-facing sanctum.",
        "Travel_Details": "120 km from Chennai. 2 km from Tiruvalam Railway Station (Chennai-Katpadi line). 10 km from Ranipettai.",
        "Name_EN": "Tiruvallam Vilvanatheswarar"
    },
    {
        "District": "",
        "Details": "24. மணிகண்டீஸ்வரர் - திருமால்பூர். காஞ்சிபுரத்திலிருந்து 22 கி.மீ., - 04177 - 248 220, 93454 49339.",
        "ID": "TN011",
        "God": "Manikandeswarar / Maalvanangeeswarar",
        "Goddess": "Anjanakshi / Karunai Nayaki",
        "Sthala_Varalaru": "Mahavishnu worshipped Shiva here with 1000 lotuses to regain his Sudarshan Chakra. When one lotus was missing, he offered his own eye. Shiva, moved by his devotion, granted the Chakra. The Utsava idol shows Vishnu holding his eye. Also the site where Parvati worshipped a sand Lingam.",
        "Travel_Details": "21 km from Kancheepuram on the Arakkonam route. Also accessible from Tirumalpur railway station.",
        "Name_EN": "Tirumarperu Manikandeswarar"
    },
    {
        "District": "",
        "Details": "25. ஜலநாதீஸ்வரர் - தக்கோலம். வேலூரில் இருந்து 80 கி.மீ., - 04177 - 246 427.",
        "ID": "TN012",
        "God": "Jalanatheswarar / Umapatheeswarar",
        "Goddess": "Giriraja Kannikambal",
        "Sthala_Varalaru": "Presiding deity is a sand-formed Lingam; Abhishekam is done only to the base. Associated with the death of Daksha at his yagna; his cry 'Oh' gave the name Takkolam. Sacred water once flowed from Nandi's mouth here. Features a unique Dakshinamurthy in a seated posture.",
        "Travel_Details": "7 km from Arakkonam Railway Station. 29 km from Thiruvallur. Regular bus services from Kancheepuram.",
        "Name_EN": "Tiruvooral Takkolam Jalanatheswarar"
    },
    {
        "District": "திருவண்ணாமலை மாவட்டம்",
        "Details": "26. அண்ணாமலையார் - திருவண்ணாமலை. - 04175 - 252 438.",
        "ID": "NN022",
        "God": "Arunachaleswarar / Annamalayar",
        "Goddess": "Unnamalai / Apeethakuchambal",
        "Sthala_Varalaru": "Fire (Agni) Sthalam of the Pancha Bhoota Sthalams. Site where Shiva appeared as an infinite column of light (Lingothbhava) to Brahma and Vishnu. Merely thinking of Arunachala grants liberation (Smaranath Mukthi). Famous for the clouds and fire (Karthigai Deepam festival). Home to the legendary Ramana Maharishi and Saint Arunagirinathar.",
        "Travel_Details": "Located in the major pilgrimage town of Tiruvannamalai. Well connected by road and rail from Chennai, Vellore, and Villupuram.",
        "Name_EN": "Tiruvannamalai Annamalayar Arunachaleswarar"
    },
    {
        "District": "",
        "Details": "27. வாலீஸ்வரர் - குரங்கணில்முட்டம். காஞ்சிபுரம்- வந்தவாசி ரோட்டில் உள்ள தூசி வழியாக 10 கி.மீ., - 99432 95467.",
        "ID": "TN006",
        "God": "Valeeswarar",
        "Goddess": "Valayeswari / Irayaar Valayammai",
        "Sthala_Varalaru": "Named after Kurangu (monkey-Vali), Anil (squirrel-Indra), and Muttam (crow-Yama) who worshipped here to get relief from curses. Relief sculpture at the entrance shows all three. Yama created the 'Kaakkai Madu' tank with his beak. Sun rays fall on the Lingam in the month of Chitrai.",
        "Travel_Details": "10 km South of Kancheepuram on the Vandavasi route, via Thoosi village bridge. Banks of Paalaru river.",
        "Name_EN": "Kuranganil Muttam Valeeswarar"
    },
    {
        "District": "",
        "Details": "28. வேதபுரீஸ்வரர் - செய்யாறு. திருவண்ணாமலையிலிருந்து 105 கி.மீ., காஞ்சிபுரத்திலிருந்து 15 கி.மீ., - 04182 - 224 387.",
        "ID": "TN008",
        "God": "Vedhanathar / Vedhapureeswarar",
        "Goddess": "Bala Kusambikai / Elamulai Nayagi",
        "Sthala_Varalaru": "Sacred site where Shiva taught the Vedas to Devas and Sages (Oththur means place of teaching). Uniquely, Nandi faces the entrance instead of the deity, acting as a guardian. Features a sacred palm tree (one of the five Panai Sthalams). Known for Sambandar's palm tree miracle.",
        "Travel_Details": "Located in Tiruvaththipuram (Cheyyaaru), 1 km from Cheyyaaru Bus Stand. 15 km from Kancheepuram.",
        "Name_EN": "Tiruvothur Vedhapureeswarar"
    },
    {
        "District": "",
        "Details": "29. - தாளபுரீஸ்வரர் - திருப்பனங்காடு.காஞ்சிபுரத்தில் இருந்து 16 கி.மீ., - 044 - 2431 2807, 98435 68742.",
        "ID": "TN009",
        "God": "Krupapureeswarar / Thaalapureeswarar",
        "Goddess": "Krupanayaki / Amirthavalli",
        "Sthala_Varalaru": "Rare dual-deity temple with two main Lingams (Thaalapureeswarar and Krupapureeswarar) and two female deities. Features Gajaprushta Vimanam (elephant-back shape). Established by Sage Agastya on his journey south to restore the Earth's balance.",
        "Travel_Details": "16 km from Kancheepuram. Bus facilities available from Kancheepuram town.",
        "Name_EN": "Tiruppanankattur Thaalapureeswarar"
    },
    {
        "District": "கடலூர் மாவட்டம்",
        "Details": "30. திருமூலநாதர் - சிதம்பரம். (நடராஜர் கோயில்) - 94439 86996.",
        "ID": "NCN001",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "31. பாசுபதேஸ்வரர் - திருவேட்களம். சிதம்பரம் அண்ணாமலை பல்கலைக்கழக வளாகம். - 98420 08291, 98433 88552.",
        "ID": "NCN002",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "32. உச்சிநாதர் - சிவபுரி.சிதம்பரம்- கவரப்பட்டு வழியில் 3 கி.மீ., - 98426 24580.",
        "ID": "NCN003",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "33. பால்வண்ணநாதர் - திருக்கழிப்பாலை, சிதம்பரம்- கவரப்பட்டு (பைரவர் கோயில்)வழியில் 3 கி.மீ., - 98426 24580.",
        "ID": "NCN004",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "34. பிரணவ வியாக்ரபுரீஸ்வரர் - ஓமாம்புலியூர். சிதம்பரத்தில் இருந்து 3 கி.மீ. - 04144 - 264 845.",
        "ID": "NCN031",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "35. பதஞ்சலீஸ்வரர் - கானாட்டம்புலியூர், சிதம்பரத்தில் இருந்து காட்டுமன்னார்கோயில் வழியே 28 கி.மீ., - 04144 - 208 508, 93457 78863.",
        "ID": "NCN032",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "36. சவுந்தர்யேஸ்வரர் - திருநாரையூர்.சிதம்பரம்- காட்டுமன்னார் கோயில் வழியில் 18 கி.மீ., - 94425 71039, 94439 06219.",
        "ID": "NCN033",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "37. அமிர்தகடேஸ்வரர் - மேலக்கடம்பூர். சிதம்பரத்தில் இருந்து காட்டுமன்னார்கோயில் வழியே 28 கி.மீ., - 93456 56982.",
        "ID": "NCN034",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "38. தீர்த்தபுரீஸ்வரர் - திருவட்டத்துறை.விருத்தாசலத்தில் இருந்து 22கி.மீ., - 04143 - 246 467.",
        "ID": "NN001",
        "God": "Arathurai Nathar / Anandheeswarar",
        "Goddess": "Aananda Nayaki",
        "Sthala_Varalaru": "Lord Shiva bestowed a pearl palanquin and a pearl umbrella to the child saint Sambandhar here to ease his travel fatigue. The deity is a Swayambhu Lingam. Located on the banks of the Vellaru river. Worshipped by Sage Vaanmeeki.",
        "Travel_Details": "Located in Tiruvarathurai (Tiruvattathurai). 22 km from Virudhachalam. 6 km SW of Pennadam on the Virudhachalam-Thittakudi route.",
        "Name_EN": "Tirunelvayil Arathurai Arathurai Nathar"
    },
    {
        "District": "",
        "Details": "39. பிரளயகாலேஸ்வரர் - பெண்ணாடம். விருத்தாசலத்திலிருந்து 18 கி.மீ., திட்டக்குடியிலிருந்து 12 கி.மீ., - 04143 - 222 788, 98425 64768.",
        "ID": "NN002",
        "God": "Sudarkozhundeesar / Pralaya Kaleshwarar",
        "Goddess": "Aamodhanaambikai / Kadanthai Nayagi",
        "Sthala_Varalaru": "During the Pralaya (great flood), Nandi turned away from the deity toward the entrance to swallow the floodwaters and protect the town. Birthplace of Kalikamba Nayanar. Features the 'Kattu Malai Koil', an elevated temple shrine that rose up so a Chola king could worship from across the flooded Vellaru river.",
        "Travel_Details": "Located in Pennadam, 18 km SW of Virudhachalam on the Thittakudi road. Has a railway station on the Vridhachalam-Trichy section.",
        "Name_EN": "Pennagadam Pralaya Kaleshwarar"
    },
    {
        "District": "",
        "Details": "40. நர்த்தன வல்லபேஸ்வரர் - திருக்கூடலையாற்றூர்.சிதம்பரத்திலிருந்து சேத்தியாதோப்பு வழியாக 20 கி.மீ., - 04144 - 208 704.",
        "ID": "NN003",
        "God": "Narthana Vallabeswarar",
        "Goddess": "Parasakthi / Gyanashakthi",
        "Sthala_Varalaru": "Located at the confluence of Vellaru and Manimutharu rivers, known as Dakshina Prayagai. Unique for having no Dwajasthambam or Balipeedam. Worshipped by Sage Agasthya for wisdom. Features a rare shrine for Chittiraguptha. Students pray here for success in education.",
        "Travel_Details": "31 km SE of Virudhachalam via Rajendrapattinam. 20 km from Chidambaram via Kavalakudi. Confluence of two rivers.",
        "Name_EN": "Tirukkoodalaiyatrur Narthana Vallabeswarar"
    },
    {
        "District": "",
        "Details": "41. திருக்குமாரசாமி - ராஜேந்திர பட்டினம். விருத்தாசலம் (சுவேதாரண்யேஸ்வரர்) - ஜெயங்கொண்டம் ரோட்டில் 12 கி.மீ., - 04143 - 243 533, 93606 37784.",
        "ID": "NN004",
        "God": "Neelakandeswarar / Swetharanyeswarar",
        "Goddess": "Neelamalarkanni Ammai",
        "Sthala_Varalaru": "One of the 'Pancha Puliyur Sthalangal' worshipped by Sage Vyaghrapada. Raja Raja Chola was blessed with a son (Rajendra Chola) after praying here. Birthplace of Tiruneelakanta Yazhpaanar. Sun rays fall directly on the deity from March 16th to 20th.",
        "Travel_Details": "Located in Rajendrapattinam, 12 km from Virudhachalam on the Jayamkondam road (SH 140/141).",
        "Name_EN": "Erukkattampuliyur Rajendrapattinam Neelakandeswarar"
    },
    {
        "District": "",
        "Details": "42. சிவக்கொழுந்தீஸ்வரர் - தீர்த்தனகிரி. கடலூரில் இருந்து 18 கி.மீ. - 94434 34024.",
        "ID": "NN005",
        "God": "Shivakozhundeesar",
        "Goddess": "Oppilaa Nayaki",
        "Sthala_Varalaru": "Named after a miraculous harvest of millet (Thinai) that grew in a single day for a devotee couple whom Shiva tested by appearing as a laborer. In the Nataraja Sabha, Shiva dances to the music of Vishnu (conch) and Brahma (instrument). Sun rays fall on the deity on Panguni 20, 21, and 22.",
        "Travel_Details": "Located in Theerthanagiri, 26 km from Cuddalore bus stand via Mettupalayam. Also accessible from Chidambaram.",
        "Name_EN": "TiruthinaiNagar Theerthanagiri Sivakozhundeesar"
    },
    {
        "District": "",
        "Details": "43. மங்களபுரீஸ்வரர் - திருச்சோபுரம். கடலூர்- சிதம்பரம் ரோட்டி\u003cல் 13 கி.மீ., ஆலப்பாக்கம், இங்கு பிரியும் ரோட்டில் 2கி.மீ., - 94425 85845.",
        "ID": "NN006",
        "God": "Chopuranathar / Mangalapureesurar",
        "Goddess": "Chopura Nayaki / Thyagavalli",
        "Sthala_Varalaru": "Lingam was installed and worshipped by Sage Agasthya; his palm impressions are still visible on it. Named after Queen Thyagavalli (wife of Kulothunga Chola I) who renovated the temple. Legend says the temple was once completely buried under sand dunes and rediscovered by a devotee.",
        "Travel_Details": "Located in Thyagavalli, 19 km from Cuddalore. Near Alapakkam railway station.",
        "Name_EN": "Tiruchopuram Thyagavalli Chopuranathar"
    },
    {
        "District": "",
        "Details": "44. வீரட்டானேஸ்வரர் - திருவதிகை. கடலூரில் இருந்து 24 கி.மீ., தூரத்திலுள்ள பண்ருட்டி நகர எல்லை - 98419 62089.",
        "ID": "NN007",
        "God": "Athigai Veeratteswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "One of the eight 'Ashta Veerattana' temples where Shiva displayed his valor by destroying the Tripura (three moving cities) with a mere smile. Site of Saint Tirunavukkarasar's reconversion to Shaivism after being cured of a stomach ailment. His sister Tilakavathiyar lived and served here.",
        "Travel_Details": "Located in Tiruvathigai, 2 km SW of Panruti. Northern bank of the Kedilam River.",
        "Name_EN": "Tiruvathigai Veerattaneswarar"
    },
    {
        "District": "",
        "Details": "45. விருத்தகிரீஸ்வரர் - விருத்தாச்சலம். சென்னை - மதுரை ரோட்டில் உளுந்தூர் பேட்டையிலிருந்து தெற்கே 23 கி.மீ., - 04143 - 230 203.",
        "ID": "NN009",
        "God": "Pazhamalainathar / Vriddhachalehswarar",
        "Goddess": "Periya Nayaki / Vriddhaambikai",
        "Sthala_Varalaru": "Ancient temple representing the hill (Pazhamalai) that existed before creation. Features Pathaala Vinayakar located 18 feet below ground, considered the 2nd Padai Veedu of Ganesha. Houses 28 Shiva Lingams representing the 28 ShivAgamas, installed by Lord Muruga.",
        "Travel_Details": "Located in Vridhachalam town, 23 km south of Ulundurpettai. Well connected by bus and rail (main line between Chennai and Trichy).",
        "Name_EN": "Virudhachalam Tirumudukundram Vriddhagireeswarar"
    },
    {
        "District": "",
        "Details": "46. சிஷ்டகுருநாதேஸ்வரர் - திருத்தளூர். கடலூரில் இருந்து பண்ருட்டி வழியாக 32 கி.மீ., - 04142 - 248 498, 94448 07393.",
        "ID": "NN015",
        "God": "Sishta Guru Natheswarar / Pasupatheeswarar",
        "Goddess": "Poongothai Nayaki / Shivaloka Nayaki",
        "Sthala_Varalaru": "Deity known for imparting penance knowledge to Saint Sundarar. Shiva and Parvati as an old couple ferried Sundarar across a flooded river to reach the temple. Features a rare 8-handed Ashtabhuja Padhrakaali. Home to the samadhi of Sri Arunanthi Sivachariar.",
        "Travel_Details": "Located in Tiruthuraiyur, 9 km North of Panruti via Pudupettai. Regular bus services available from Panruti.",
        "Name_EN": "Tiruthuraiyur Sishta Guru Natheswarar"
    },
    {
        "District": "",
        "Details": "47. வாமனபுரீஸ்வரர் - திருமாணிக்குழி. கடலூரிலிருந்து பாலூர் வழியாக 15 கி.மீ., - 04142 - 224 328.",
        "ID": "NN017",
        "God": "Vaamanapureeswarar / Udavi Nayagar",
        "Goddess": "Ambujakshi / Udhavi Nayaki",
        "Sthala_Varalaru": "Unique for a curtain that conceals the deity, drawn aside only during Deeparadhana. No separate Palli-arai as the sanctum itself is the resting chamber. Mahavishnu worshipped here as a celibate 'Maani' during his Vamana avatar to obtain strength for three steps of land from Mahabali.",
        "Travel_Details": "Located in Tirumaanikuzhi, 10 km from Cuddalore Town on the route to Panruti. Stop is right in front of the temple.",
        "Name_EN": "Tirumaanikuzhi Vaamanapureeswarar"
    },
    {
        "District": "",
        "Details": "48. பாடலீஸ்வரர் - திருப்பாதிரிபுலியூர். கடலூர் நகருக்குள், - 04142 - 236 728.",
        "ID": "NN018",
        "God": "Paataleeswarar / Thondraathunai Nathar",
        "Goddess": "Periya Nayaki / Thogai Nayaki",
        "Sthala_Varalaru": "One of the 'Pancha Puliyur' temples. Site where Goddess Parvati performed penance in an invisible form. Renowned as the place where Saint Tirunavukkarasar floated to shore safely after being tied to a stone and thrown into the sea. Pathiri (yellow snake tree) is the sacred sthala vruksham.",
        "Travel_Details": "Located in the heart of Cuddalore town. 1 km from the Cuddalore bus stand and Tiruppadiripuliyur railway station.",
        "Name_EN": "Tiruppadiripuliyur Cuddalore Paataleeswarar"
    },
    {
        "District": "விழுப்புரம் மாவட்டம்",
        "Details": "49. பக்தஜனேஸ்வரர் - திருநாவலூர். பண்ருட்டி-உளுந்தூர் பேட்டை வழியில் 12 கி.மீ., - 94861 50804, 04149 - 224 391.",
        "ID": "NN008",
        "God": "Bhaktha Janeswarar / Tirunaavaleswarar",
        "Goddess": "Sundaranayaki / Manonmani Ammai",
        "Sthala_Varalaru": "Birthplace of Saint Sundaramurthy Nayanar. Worshipped by Shukra (Venus) and Sage Agastya. Features a Sukra Lingam with special Friday pujas. Sun God (Surya) is unique here as he faces West towards the main deity. The Naaval (Jamun) tree is the sthala vruksham. Sun rays fall on deity Panguni 23-27.",
        "Travel_Details": "Located in Thirunavalur, 25 km from Villupuram on the Ulundurpet road. 2 km from the Panchayat Union Office toward Panruti.",
        "Name_EN": "Tirunaavalur Bhakthajaneswarar"
    },
    {
        "District": "",
        "Details": "50. சொர்ணகடேஸ்வரர் - நெய்வணை. உளுந்தூர்பேட்டையில் இருந்து 15 கி.மீ., - 04149 - 291 786, 94862 82952.",
        "ID": "NN010",
        "God": "Swarnakateswarar / Vennaiyappar",
        "Goddess": "Neelamalarkanni",
        "Sthala_Varalaru": "Named 'Swarnakateshwarar' (bestower of the golden pot). The presiding deity is a Swayambhu Lingam enshrined under a Rudraksha canopy. Sun rays fall on the deity during Mahashivratri. Features a rare combination of Vishnu holding conch and Sudarshana Chakra with Lakshmi outside the sanctum.",
        "Travel_Details": "Located in Tirunelvennai (Neyvanai), 15 km from Ulundurpet. Accessible via the Tirukkovilur-Ulundurpet route (near Eraiyur).",
        "Name_EN": "Tirunelvennai Swarnakateswarar"
    },
	{
        "District": "",
        "Details": "51. கடைமுடிநாதர் - கீழையூர். வைத்தீஸ்வரன்கோயிலில் இருந்து 3 கி.மீ., - 04364 - 200 440.",
        "ID": "NCN018",
        "God": "Kadaimudinathar",
        "Goddess": "Abirami Amman",
        "Sthala_Varalaru": "Legend says Shiva appeared here to Sage Kanva. It is believed that worshipping here at the 'end of time' (Kadaimudi) grants liberation from the cycle of birth.",
        "Travel_Details": "Located in Keezhaiyur, near Vaitheeswaran Koil in Mayiladuthurai district.",
        "Name_EN": "Keezhaiyur Kadaimudinathar"
    },
    {
        "District": "",
        "Details": "52. மகாலட்சுமீஸ்வரர் - திருநின்றியூர். வைத்தீஸ்வரன்கோயிலில் இருந்து 7 கி.மீ., - 04364 - 236 431.",
        "ID": "NCN019",
        "God": "Mahalatchumeeswarar",
        "Goddess": "Loganayagi",
        "Sthala_Varalaru": "Goddess Lakshmi worshipped Shiva here to attain his blessings. It is considered a highly auspicious site for wealth and prosperity.",
        "Travel_Details": "7 km from Vaitheeswaran Koil on the Mayiladuthurai route.",
        "Name_EN": "Thirunindriyur Mahalatchumeeswarar"
    },
    {
        "District": "",
        "Details": "53. சிவலோகநாதர் - திருப்புன்கூர். வைத்தீஸ்வரன்கோயிலில் இருந்து 3 கி.மீ., - 04364 - 210 255.",
        "ID": "NCN020",
        "God": "Shivalokanathar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "Famous for the legend of Nandanar. Shiva ordered the Nandi idol to move aside so that Nandanar, a Dalit saint, could see the deity from outside the temple.",
        "Travel_Details": "3 km west of Vaitheeswaran Koil, accessible via local buses.",
        "Name_EN": "Thirupunkoor Shivalokanathar"
    },
    {
        "District": "",
        "Details": "54. சோமநாதர் - நீடூர். மயிலாடுதுறையில் இருந்து 5 கி.மீ., - 04364 - 250 424.",
        "ID": "NCN021",
        "God": "Somanathar",
        "Goddess": "Veyuru-Tholi-Ammai",
        "Sthala_Varalaru": "Worshipped by the moon god Soma (Chandra) to get relief from a curse. The temple name 'Needur' implies a place that grants long life.",
        "Travel_Details": "5 km north of Mayiladuthurai on the bank of the Kaveri.",
        "Name_EN": "Needur Somanathar"
    },
    {
        "District": "",
        "Details": "55. ஆபத்சகாயேஸ்வரர் - பொன்னூர். மயிலாடுதுறையில் இருந்து 7 கி.மீ., - 94435 64142.",
        "ID": "NCN022",
        "God": "Apatsakayeswarar",
        "Goddess": "Periyanayaki",
        "Sthala_Varalaru": "Also known as Thiru Anniyur. Worshipped by Agni (the Fire God) and the King of serpents. Shiva is worshipped here as the 'Rescuer from Danger'.",
        "Travel_Details": "7 km from Mayiladuthurai; also known as Ponnoor locally.",
        "Name_EN": "Ponnoor Apatsakayeswarar"
    },
    {
        "District": "",
        "Details": "56. கல்யாண சுந்தரேஸ்வரர் - திருவேள்விக்குடி. மயிலாடுதுறை- குத்தாலம் வழியில் 10 கி.மீ., - 94861 41430.",
        "ID": "NCN023",
        "God": "Kalyana Sundareswarar",
        "Goddess": "Parimala-Sugandha-Nayagi",
        "Sthala_Varalaru": "Site where the 'Velvi' (Vedic ritual/marriage ceremony) for Shiva and Parvati was initiated. It is a highly sought-after temple for those seeking marriage.",
        "Travel_Details": "Located near Kuthalam, about 10 km from Mayiladuthurai.",
        "Name_EN": "Thiruvelvikudi Kalyana Sundareswarar"
    },
    {
        "District": "",
        "Details": "57. ஐராவதேஸ்வரர் - மேலத்திருமணஞ்சேரி. மயிலாடுதுறை- குத்தாலம் வழியில் 10 கி.மீ., - 90474 62450.",
        "ID": "NCN024",
        "God": "Airavatheswarar",
        "Goddess": "Abirami Amman",
        "Sthala_Varalaru": "Known as 'Edirkolpaadi'. Where Lord Shiva was welcomed (Edirkol) by the father of Parvati before the divine wedding. Worshipped by Airavata, Indra's white elephant.",
        "Travel_Details": "Very close to the main Thirumananjeri temple, near Kuthalam.",
        "Name_EN": "Melathirumananjeri Airavatheswarar"
    },
    {
        "District": "",
        "Details": "58. உத்வாகநாதர் சுவாமி - திருமணஞ்சேரி. மயிலாடுதுறை- குத்தாலம் வழியில் 10 கி.மீ., - 04364 - 235 062, 230 132.",
        "ID": "NCN025",
        "God": "Uthvaganathar Swami",
        "Goddess": "Kokilambal Amman",
        "Sthala_Varalaru": "The most famous 'Prarthana Sthalam' for marriage. Shiva married Parvati here. Devotees perform a special ritual to overcome delays in marriage.",
        "Travel_Details": "6 km from Kuthalam and 12 km from Mayiladuthurai.",
        "Name_EN": "Thirumananjeri Uthvaganathar Swami"
    },
    {
        "District": "",
        "Details": "59. வீரட்டேஸ்வரர் - கொருக்கை. மயிலாடுதுறையில் இருந்து 15 கி.மீ., - 94420 86129.",
        "ID": "NCN026",
        "God": "Veerateswarar",
        "Goddess": "Gnanambigai",
        "Sthala_Varalaru": "One of the 'Ashta Veerattanam' (Eight sites of Shiva's valor). Here Shiva burnt Manmatha (Kamadeva) with his third eye.",
        "Travel_Details": "15 km from Mayiladuthurai on the road to Manalmedu.",
        "Name_EN": "Korukkai Veerateswarar"
    },
    {
        "District": "",
        "Details": "60. குற்றம் பொறுத்தநாதர் - தலைஞாயிறு. மயிலாடுதுறையில் இருந்து 15 கி.மீ., - 04364 - 257 555, 94422 13741.",
        "ID": "NCN027",
        "God": "Kutram Poruthanathar",
        "Goddess": "Kolavalai-Nayagi",
        "Sthala_Varalaru": "Also known as Karuppariyalur. Worshipped by Indra. The name means 'The Lord who forgives sins/mistakes'. It is a site for seeking forgiveness.",
        "Travel_Details": "15 km from Mayiladuthurai, located in the village of Thalainayiru.",
        "Name_EN": "Thalainayiru Kutram Poruthanathar"
    },
    {
        "District": "",
        "Details": "61. குந்தலீஸ்வரர் - திருக்குரக்கா. மயிலாடுதுறையில் இருந்து 15 கி.மீ., - 04364 - 257 555, 94422 13741.",
        "ID": "NCN028",
        "God": "Kunthaleeswarar",
        "Goddess": "Kunthala Nayagi",
        "Sthala_Varalaru": "Worshipped by Hanuman (Kurakku means monkey) to get rid of the sin of having killed demons in Lanka. A rare shrine for Lord Ganesha with a trunk turned to the right.",
        "Travel_Details": "Located in Thirukkurakka, about 15 km from Mayiladuthurai.",
        "Name_EN": "Thirukkurakka Kunthaleeswarar"
    },
    {
        "District": "",
        "Details": "62. மாணிக்கவண்ணர் - திருவாலப்புத்தூர். மயிலாடுதுறையில் இருந்து 18 கி.மீ., - 94439 21146.",
        "ID": "NCN029",
        "God": "Manikkavannar",
        "Goddess": "Azhagammai / Soundaryanayaki",
        "Sthala_Varalaru": "Also known as Tiruvaalkoliputrur. Legend says the Shiva Lingam here changes color. Worshipped by the serpent king Vasuki.",
        "Travel_Details": "18 km from Mayiladuthurai on the road to Sirkazhi.",
        "Name_EN": "Thiruvalapputhur Manikkavannar"
    },
	{
        "District": "",
        "Details": "63. நீலகண்டேஸ்வரர் - இலுப்பைப்பட்டு. வைத்தீஸ்வரன்கோயிலில் இருந்து 10 கி.மீ., - 04364 - 204 494.",
        "ID": "NCN030",
        "God": "Neelakandeswarar / Neelayathatchi Udanaya Neelakandar",
        "Goddess": "Amirthavalli Amman",
        "Sthala_Varalaru": "Known as 'Thirumannippadikkarai'. Lord Shiva consumed the Halahala poison here to save the world, which turned his throat blue (Neelakanda). Worshipped by the five Pandavas.",
        "Travel_Details": "10 km from Vaitheeswaran Koil near the village of Manalmedu.",
        "Name_EN": "Iluppaipattu Neelakandeswarar"
    },
    {
        "District": "சோழ நாடு - காவிரிக்கு தென்கரைத் தலங்கள்",
        "Details": "64. மகாலிங்கேஸ்வரர் - திருவிடைமருதூர். கும்பகோணம்- மயிலாடுதுறை வழியில் 9 கி.மீ., - 0435 - 246 0660.",
        "ID": "SCN030",
        "God": "Mahalingeswarar / Jyothirmayalingam",
        "Goddess": "Bruhatsundarakuchaambigai / Mookambikai",
        "Sthala_Varalaru": "One of the largest temple complexes in Tamil Nadu. Famous for relieving 'Bramhahathi Dosham'. Legend says a Chola prince escaped a ghost by entering one gate and exiting another.",
        "Travel_Details": "9 km east of Kumbakonam on the road to Mayiladuthurai. Has its own railway station.",
        "Name_EN": "Thiruvidaimarudur Mahalingeswarar"
    },
    {
        "District": "",
        "Details": "65. மாயூரநாதர் - மயிலாடுதுறை. - 04364 - 222 345, 223 779.",
        "ID": "SCN039",
        "God": "Mayuranathar",
        "Goddess": "Abayambigai",
        "Sthala_Varalaru": "Goddess Parvati worshipped Shiva here in the form of a peacock (Mayura) to be relieved of a curse. Famous for the 'Tula Snanam' festival in the Kaveri river.",
        "Travel_Details": "Located in the heart of Mayiladuthurai town. 2 km from the railway station.",
        "Name_EN": "Mayiladuthurai Mayuranathar"
    },
    {
        "District": "",
        "Details": "66. ஐயாரப்பர் - திருவையாறு. தஞ்சாவூரில் இருந்து 13 கி.மீ., - 04362 - 260 332.",
        "ID": "SCN051",
        "God": "Aiyarappar / Panchanadeeswarar",
        "Goddess": "Dharmasamvardhini / Aram Valartha Nayagi",
        "Sthala_Varalaru": "Known as 'Dakshina Kailasam'. Shiva is the Lord of five rivers (Ai-Aaru). Saint Appar had a vision of Mount Kailash here. Home to the famous Tyagaraja Aradhana music festival.",
        "Travel_Details": "13 km north of Thanjavur. Well connected by frequent buses from Thanjavur bus stand.",
        "Name_EN": "Thiruvaiyaru Aiyarappar"
    },
    {
        "District": "",
        "Details": "67. மங்களநாதர் - திருவாப்பாடி. திருப்பனந்தாள்- கும்பகோணம் வழியில் 2 கி.மீ., - 94435 24458.",
        "ID": "NCN042",
        "God": "Mangalanathar / Paalaivananathar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Famous for the legend of Chandesa Nayanar. A young shepherd boy offered milk to a sand Lingam; when his father intervened, the boy struck him, and Shiva appeared to grant him divine status.",
        "Travel_Details": "2 km from Tiruppanandal on the road to Kumbakonam.",
        "Name_EN": "Thiruvaappadi Mangalanathar"
    },
    {
        "District": "",
        "Details": "68. சத்யகிரீஸ்வரர் - திருச்சேய்ஞலூர். திருப்பனந்தாள்- கும்பகோணம் வழியில் 3 கி.மீ., - 0435 - 245 4421.",
        "ID": "NCN043",
        "God": "Sathyagireeswarar",
        "Goddess": "Vimalambigai",
        "Sthala_Varalaru": "The birthplace of Chandesa Nayanar. It is the first 'Chandesa Sthalam'. The temple features a unique multi-tiered architecture.",
        "Travel_Details": "3 km from Tiruppanandal, near the Thiruvaappadi temple.",
        "Name_EN": "Thirucheignalur Sathyagireeswarar"
    },
    {
        "District": "",
        "Details": "69. வில்வாரண்யேஸ்வரர் - திருந்துதேவன்குடி. கும்பகோணத்தில் இருந்து 10 கி.மீ., - 99427 75868.",
        "ID": "NCN044",
        "God": "Vilvanyeswarar / Karkadeswarar",
        "Goddess": "Apoorva Nayagi",
        "Sthala_Varalaru": "Known as the 'Crab Temple'. A golden crab worshipped Shiva here to be cured of a curse. Also unique for having two Goddess shrines.",
        "Travel_Details": "Located in Thiruvisanallur village, 10 km from Kumbakonam.",
        "Name_EN": "Thirundudevankudi Vilvanyeswarar"
    },
    {
        "District": "",
        "Details": "70. வைகல்நாதர் - திருவைக்கல். மயிலாடுதுறை- கும்பகோணம் வழியில் 18 கி.மீ., - 94420 68335.",
        "ID": "SCN033",
        "God": "Vaikalnathar",
        "Goddess": "Vaikalambigai",
        "Sthala_Varalaru": "Considered a 'Maadakkoyil' (temple built on an elevated platform) built by Kochengat Chola to prevent elephants from entering the sanctum.",
        "Travel_Details": "18 km from Mayiladuthurai, located in Thiruvaikal village.",
        "Name_EN": "Thiruvaikal Vaikalnathar"
    },
    {
        "District": "",
        "Details": "71. கோடீஸ்வரர் - திருக்கோட்டையூர். கும்பகோணத்தில் இருந்து 5 கி.மீ., - 0435 - 245 0595.",
        "ID": "NCN046",
        "God": "Koteeswarar",
        "Goddess": "Pandhu-Aadu-Nayagi",
        "Sthala_Varalaru": "Legend says that during the 'Pralaya' (great flood), the drops of nectar from the divine pot fell here, manifesting as one crore (Koti) Lingams.",
        "Travel_Details": "5 km northwest of Kumbakonam on the road to Thiruvaiyaru.",
        "Name_EN": "Thirukkottayur Koteeswarar"
    },
    {
        "District": "",
        "Details": "72. ஐராவதேஸ்வரர் - இன்னம்பர். கும்பகோணத்தில் இருந்து 6 கி.மீ., - 0435 - 245 9414.",
        "ID": "NCN047",
        "God": "Ezhuthari Natheswarar / Akshara Pureeswarar",
        "Goddess": "Sugandhavana Nayagi",
        "Sthala_Varalaru": "Known as the 'God who writes'. Shiva is said to have accounted for the temple's wealth when a local official was falsely accused. Students worship here for good education.",
        "Travel_Details": "6 km from Kumbakonam on the Swamimalai route.",
        "Name_EN": "Innambur Ezhuthari Natheswarar"
    },
    {
        "District": "",
        "Details": "73. விசுவநாதர் - திருப்புறம்பியம். கும்பகோணத்தில் இருந்து 9 கி.மீ., - 0435 - 245 9519.",
        "ID": "NCN048",
        "God": "Pralayakaaleswarar / Satchinathar",
        "Goddess": "Karumbannasol-Ammai",
        "Sthala_Varalaru": "Famous for the 'Pralaya Kaala Vinayakar' to whom honey abishekam is performed once a year (on Ganesh Chaturthi), where all the honey is absorbed by the idol.",
        "Travel_Details": "9 km from Kumbakonam; can be reached via Swamimalai.",
        "Name_EN": "Thirupirambiyam Pralayakaaleswarar"
    },
    {
        "District": "",
        "Details": "74. விஜயநாதேஸ்வரர் - திருவிஜயமங்கை. கும்பகோணத்தில் இருந்து 12 கி.மீ., - 0435 - 245 9115.",
        "ID": "NCN049",
        "God": "Vijayanatheswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Legend says Arjuna (Vijaya) performed penance and worshipped Shiva here to obtain the Pasupatha Astra. It is considered a powerful site for victory.",
        "Travel_Details": "12 km from Kumbakonam, near the Thirupirambiyam temple.",
        "Name_EN": "Thiruvijayamangai Vijayanatheswarar"
    },
    {
        "District": "",
        "Details": "75. ஆபத்சகாயேஸ்வரர் - திருவைக்காவூர். கும்பகோணத்தில் இருந்து 12 கி.மீ., - 0435 - 245 9115.",
        "ID": "NCN050",
        "God": "Vaikavur Vilvanyeswarar",
        "Goddess": "Valaikaiaambigai",
        "Sthala_Varalaru": "Shiva protected a devotee (a hunter named Thinnan) from a tiger on a Shivaratri night. Yama, the god of death, is believed to have been chased away by Shiva here.",
        "Travel_Details": "12 km from Kumbakonam, near Kapisthalam.",
        "Name_EN": "Thiruvaikavur Vilvanyeswarar"
    },
    {
        "District": "",
        "Details": "76. பிராணநாதேஸ்வரர் - திருவிசநல்லூர். கும்பகோணத்தில் இருந்து 8 கி.மீ., - 94865 30623.",
        "ID": "NCN044",
        "God": "Prananatheswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Unique for its 12-month Zodiac Sun Dial. Worshipped by King Vishnuvardhan of the Hoysala dynasty who was cured of a terminal illness here.",
        "Travel_Details": "8 km from Kumbakonam on the road to Oppiliappan Koil.",
        "Name_EN": "Thiruvisanallur Prananatheswarar"
    },
    {
        "District": "",
        "Details": "77. அபிராமேஸ்வரர் - திருவாலம்பொழில். திருவையாற்றில் இருந்து 5 கி.மீ., - 94420 57235.",
        "ID": "SCN002",
        "God": "Atmanathar / Abirameswarar",
        "Goddess": "Gnanambigai",
        "Sthala_Varalaru": "One of the temples on the banks of the Kaveri where Shiva is said to have appeared to saint Appar. It is known for its serene garden-like setting (Pozhil).",
        "Travel_Details": "5 km from Thiruvaiyaru on the Kumbakonam route.",
        "Name_EN": "Thiruvalambozhil Abirameswarar"
    },
    {
        "District": "",
        "Details": "78. புஷ்பவனநாதர் - திருப்பூந்துருத்தி. திருவையாற்றில் இருந்து 3 கி.மீ., - 04362 - 260 553.",
        "ID": "SCN003",
        "God": "Pushpavana Nathar",
        "Goddess": "Azhagammai",
        "Sthala_Varalaru": "Where saint Appar lived and cleaned the temple premises. Legend says Shiva moved the Nandi idol so that the aged saint Appar could see him clearly.",
        "Travel_Details": "3 km from Thiruvaiyaru on the Thanjavur-Kumbakonam road.",
        "Name_EN": "Thiruppoonturutti Pushpavana Nathar"
    },
    {
        "District": "",
        "Details": "79. வீரட்டேஸ்வரர் - திருக்கண்டியூர். திருவையாற்றில் இருந்து 2 கி.மீ., - 04362 - 261 100, 262 222.",
        "ID": "SCN004",
        "God": "Brahmasira-Kandeeswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "One of the 'Ashta Veerattanam' sites. Here Shiva plucked off one of Brahma's five heads to curb his ego. Both Brahma and Vishnu have shrines here.",
        "Travel_Details": "2 km south of Thiruvaiyaru on the Thanjavur road.",
        "Name_EN": "Thirukkandiyur Veerateswarar"
    },
    {
        "District": "",
        "Details": "80. சொற்றுத்துறைநாதர் - திருச்சோற்றுத்துறை. திருவையாற்றில் இருந்து 5 கி.மீ., - 04362 - 262 444.",
        "ID": "SCN005",
        "God": "Odhanavaneswarar / Tholayachilvan",
        "Goddess": "Annapoorani / Oppilla-Ammai",
        "Sthala_Varalaru": "Shiva provided food (Chotru) to his devotees during a great famine. It is a site where one never goes hungry. Part of the 'Saptha Sthanam' circuit.",
        "Travel_Details": "5 km east of Thiruvaiyaru on the bank of the Kudamurutti river.",
        "Name_EN": "Thiruchotrutturai Odhanavaneswarar"
    },
    {
        "District": "",
        "Details": "81. வேதபுரீஸ்வரர் - திருவேதிக்குடி. திருவையாற்றில் இருந்து 7 கி.மீ., - 04362 - 262 334, 98425 08431.",
        "ID": "SCN006",
        "God": "Vedapureeswarar / Vazhaimadunathar",
        "Goddess": "Mangayarkarasi Amman",
        "Sthala_Varalaru": "The Vedas themselves are believed to have worshipped Shiva here in the form of a banana forest (Vazhai). Famous for curing speech impediments.",
        "Travel_Details": "7 km from Thiruvaiyaru via Kandiyur.",
        "Name_EN": "Thiruvedikkudi Vedapureeswarar"
    },
    {
        "District": "",
        "Details": "82. வசிஷ்டேஸ்வரர் - தென்குடித்தீட்டை. தஞ்சாவூரில் இருந்து 10 கி.மீ., - 04362 - 252 858.",
        "ID": "SCN007",
        "God": "Vasishteswarar / Pasupatheeswarar",
        "Goddess": "Loganayagi",
        "Sthala_Varalaru": "Known as 'Thittai'. Famous for a unique stone (Chandrakantha stone) in the ceiling that drops a drop of water on the Lingam every 24 minutes.",
        "Travel_Details": "10 km from Thanjavur on the Thiruvaiyaru road.",
        "Name_EN": "Thenkudittittai Vasishteswarar"
    },
    {
        "District": "",
        "Details": "83. ஆலந்துறைநாதர் - புள்ளமங்கை. தஞ்சாவூரில் இருந்து 15 கி.மீ., - 0435 - 241 1205.",
        "ID": "SCN008",
        "God": "Alandhurainathar",
        "Goddess": "Alliyankothai",
        "Sthala_Varalaru": "Renowned for its exquisite Early Chola sculptures. Legend says the Sun god Surya worshipped here. It is one of the most artistically significant small temples.",
        "Travel_Details": "15 km from Thanjavur, near Pasupathikoil.",
        "Name_EN": "Thiruppullamangai Alandhurainathar"
    },
    {
        "District": "",
        "Details": "84. சக்கரவாகேஸ்வரர் - திருச்சக்கரப்பள்ளி. தஞ்சாவூரில் இருந்து 15 கி.மீ., - 0435 - 241 1205.",
        "ID": "SCN009",
        "God": "Chakravakeswarar",
        "Goddess": "Devanayagi",
        "Sthala_Varalaru": "Worshipped by Lord Vishnu to obtain the 'Sudarshana Chakra'. The site is also linked to the legendary bird Chakravaka.",
        "Travel_Details": "Located in Ayyampettai, 15 km from Thanjavur.",
        "Name_EN": "Thiruchakrapalli Chakravakeswarar"
    },
    {
        "District": "",
        "Details": "85. கர்ப்பபுரீஸ்வரர் - திருக்கருகாவூர். தஞ்சாவூர்- கும்பகோணம் வழியில் 20 கி.மீ., - 04374 - 273 423.",
        "ID": "SCN010",
        "God": "Mullaivananathar",
        "Goddess": "Garbharakshambigai",
        "Sthala_Varalaru": "Very famous for the Goddess who protects the 'Garbha' (womb). Pregnant women worship here for safe delivery and couples for progeny.",
        "Travel_Details": "20 km from Thanjavur and 20 km from Kumbakonam near Papanasam.",
        "Name_EN": "Thirukkarukaavoor Garbharakshambigai"
    },
    {
        "District": "",
        "Details": "86. பாலைவனநாதர் - திருப்பாலைத்துறை. தஞ்சாவூர்- கும்பகோணம் வழியில் 15 கி.மீ., - 0435 - 245 2272.",
        "ID": "SCN011",
        "God": "Paalaivananathar",
        "Goddess": "Thavalai-ven-nagai-Ammai",
        "Sthala_Varalaru": "Shiva appeared here as a tiger to test the sages of Darukavana. The temple features a unique granary (Nellu Kalanjiyam) built by the Nayak kings.",
        "Travel_Details": "Located in Papanasam, 15 km from Kumbakonam.",
        "Name_EN": "Thiruppaalaitturai Paalaivananathar"
    },
    {
        "District": "",
        "Details": "87. பஞ்சவர்ணேஸ்வரர் - திருநல்லூர். கும்பகோணம்- தஞ்சாவூர் வழியில் 15 கி.மீ., - 0435 - 245 9334.",
        "ID": "SCN012",
        "God": "Palyavarnatheswarar",
        "Goddess": "Kalyana Sundari",
        "Sthala_Varalaru": "The Lingam here changes color five times a day (Pancha Varna). It is the site where Agastya had the vision of Shiva's wedding.",
        "Travel_Details": "15 km from Kumbakonam near Valangaiman.",
        "Name_EN": "Thirunallur Panchavarneswarar"
    },
	{
        "District": "",
        "Details": "88. கர்க்கடேஸ்வரர் - திருந்துதேவன்குடி. கும்பகோணத்தில் இருந்து 10 கி.மீ., - 99427 75868.",
        "ID": "SCN013",
        "God": "Karkadeswarar",
        "Goddess": "Apoorva Nayagi / Arumarunthu Nayagi",
        "Sthala_Varalaru": "Known as the 'Crab Temple'. A golden crab worshipped Shiva here. The deity is also known as 'Arumarunthu' (Rare Medicine) as it is believed to cure incurable diseases.",
        "Travel_Details": "Located near Thiruvisanallur, 10 km from Kumbakonam.",
        "Name_EN": "Thirundudevankudi Karkadeswarar"
    },
    {
        "District": "",
        "Details": "89. சிவபுரநாதர் - திருசிவபுரம். கும்பகோணத்தில் இருந்து 5 கி.மீ., - 94423 47343.",
        "ID": "SCN014",
        "God": "Shivapuranathar",
        "Goddess": "Singaaravalli",
        "Sthala_Varalaru": "Lord Vishnu is said to have worshipped Shiva here in the form of a white boar (Varaha). Saint Sambandar sang hymns here to freeze the flow of the river to reach the temple.",
        "Travel_Details": "5 km southeast of Kumbakonam, near Sakkottai.",
        "Name_EN": "Thirusivapuram Shivapuranathar"
    },
    {
        "District": "",
        "Details": "90. கலையார்ந்த நாதர் - திருக்கலயநல்லூர் (சக்கோட்டை). கும்பகோணத்தில் இருந்து 5 கி.மீ., - 0435 - 241 4452.",
        "ID": "SCN015",
        "God": "Amirthakalasanathar",
        "Goddess": "Amirthavalli",
        "Sthala_Varalaru": "One of the sites where the 'Amrutha Kalasa' (Pot of Nectar) rested during the Pralaya. The temple is famous for its intricate carvings and artistic beauty.",
        "Travel_Details": "Located in Sakkottai, 5 km from Kumbakonam on the Mannargudi road.",
        "Name_EN": "Sakkottai Amirthakalasanathar"
    },
    {
        "District": "",
        "Details": "91. மங்களநாதர் - தாராசுரம். கும்பகோணத்தில் இருந்து 4 கி.மீ., - 0435 - 241 7157.",
        "ID": "SCN016",
        "God": "Airavatheswarar",
        "Goddess": "Deivanayagi",
        "Sthala_Varalaru": "A UNESCO World Heritage site built by Rajaraja Chola II. The temple is shaped like a chariot. Legend says Airavata (Indra's white elephant) regained its white color after bathing here.",
        "Travel_Details": "4 km from Kumbakonam. Well-connected by town buses and mini-buses.",
        "Name_EN": "Dharasuram Airavatheswarar"
    },
    {
        "District": "",
        "Details": "92. மார்க்கசகாயேஸ்வரர் - திருவலஞ்சுழி. கும்பகோணத்தில் இருந்து 7 கி.மீ., - 0435 - 245 4026, 245 4461.",
        "ID": "SCN017",
        "God": "Kabardeeswarar",
        "Goddess": "Brihannayagi",
        "Sthala_Varalaru": "Famous for the 'Vellai Vinayakar' (White Ganesha) made of sea foam. Legend says the river Kaveri took a right turn (Valanchuzhi) here to enter the underworld to assist a king.",
        "Travel_Details": "7 km from Kumbakonam on the road to Tanjore, near Swamimalai.",
        "Name_EN": "Tiruvalanchuzhi Kabardeeswarar"
    },
    {
        "District": "",
        "Details": "93. கும்பேஸ்வரர் - கும்பகோணம். - 0435 - 242 0276.",
        "ID": "SCN018",
        "God": "Adi Kumbeswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "The center of the Mahamaham festival. Shiva manifested from the broken nectar pot (Kumbha) after the Pralaya. The Lingam is made of sand mixed with nectar.",
        "Travel_Details": "Located in the heart of Kumbakonam town.",
        "Name_EN": "Kumbakonam Adi Kumbeswarar"
    },
    {
        "District": "",
        "Details": "94. சோமேஸ்வரர் - கும்பகோணம். - 0435 - 243 0349.",
        "ID": "SCN019",
        "God": "Someswarar",
        "Goddess": "Somasundari",
        "Sthala_Varalaru": "Worshipped by Soma (the Moon god). Legend says the threads (Soma-Suthra) of the divine nectar pot fell here during the Pralaya.",
        "Travel_Details": "Located near the southern entrance of the Sarangapani temple in Kumbakonam.",
        "Name_EN": "Kumbakonam Someswarar"
    },
    {
        "District": "",
        "Details": "95. காசி விசுவநாதர் - கும்பகோணம். - 0435 - 243 0649.",
        "ID": "SCN020",
        "God": "Kasi Viswanathar",
        "Goddess": "Visalakshi",
        "Sthala_Varalaru": "Located on the banks of the Mahamaham tank. The nine sacred rivers of India are believed to meet here during the Mahamaham festival to cleanse themselves of sins.",
        "Travel_Details": "On the northern bank of the Mahamaham Tank, Kumbakonam.",
        "Name_EN": "Kumbakonam Kasi Viswanathar"
    },
    {
        "District": "",
        "Details": "96. நாகேஸ்வரர் - கும்பகோணம். - 0435 - 243 0349.",
        "ID": "SCN021",
        "God": "Nageswarar / Vilvanyeswarar",
        "Goddess": "Brihannayagi",
        "Sthala_Varalaru": "Worshipped by the serpent king Adisesha. An architectural marvel where sun rays fall on the deity only during three days in the month of Chithirai.",
        "Travel_Details": "Located in the center of Kumbakonam, near the railway station.",
        "Name_EN": "Kumbakonam Nageswarar"
    },
    {
        "District": "",
        "Details": "97. கௌதமேஸ்வரர் - கும்பகோணம். - 0435 - 243 0649.",
        "ID": "SCN022",
        "God": "Yagnobaveetheswarar / Gautameswarar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "Worshipped by Sage Gautama. Legend says he was relieved of the sin of 'Go-hathi' (killing a cow) after bathing in the Mahamaham tank and worshipping here.",
        "Travel_Details": "Located on the western bank of the Mahamaham Tank, Kumbakonam.",
        "Name_EN": "Kumbakonam Gautameswarar"
    },
    {
        "District": "",
        "Details": "98. மல்லிகார்ஜுனேஸ்வரர் - திருமெய்ப்பேடு. கும்பகோணத்தில் இருந்து 5 கி.மீ., - 0435 - 241 6356.",
        "ID": "SCN023",
        "God": "Mallikarjuneswarar",
        "Goddess": "Gnanambigai",
        "Sthala_Varalaru": "Originally known as 'Thirukarukkudi'. Legend says a Chola king who was blind regained his sight (Mei-paaru) after worshipping Shiva here.",
        "Travel_Details": "5 km from Kumbakonam on the road to Manpadaiyur.",
        "Name_EN": "Thirukarukkudi Mallikarjuneswarar"
    },
    {
        "District": "",
        "Details": "99. கார்வண்ணேஸ்வரர் - மருதாநல்லூர். கும்பகோணத்தில் இருந்து 6 கி.மீ., - 0435 - 241 6356.",
        "ID": "SCN024",
        "God": "Karvannantheeswarar",
        "Goddess": "Azhagammai",
        "Sthala_Varalaru": "Worshipped by the Sun god Surya. The name 'Karvannan' refers to the dark-complexioned Vishnu, who also worshipped here to obtain divine grace.",
        "Travel_Details": "6 km south of Kumbakonam on the Valangaiman road.",
        "Name_EN": "Maruthanallur Karvannantheeswarar"
    },
    {
        "District": "",
        "Details": "100. நாகநாதர் - திருநாகேஸ்வரம். கும்பகோணத்தில் இருந்து 6 கி.மீ., - 0435 - 246 3354.",
        "ID": "SCN025",
        "God": "Naganathar",
        "Goddess": "Girigujambigai",
        "Sthala_Varalaru": "The 'Rahu Sthalam' of the Navagraha temples. Milk abishekam for Rahu turns blue here. Legend says the serpents Adisesha, Karkotaka, and Takshaka worshipped Shiva here.",
        "Travel_Details": "6 km east of Kumbakonam. Well-served by buses and has a railway station.",
        "Name_EN": "Thirunageswaram Naganathar"
    },
    {
        "District": "",
        "Details": "101. சிவக்கொழுந்தீஸ்வரர் - திருநீலக்குடி. கும்பகோணத்தில் இருந்து 10 கி.மீ., - 0435 - 246 0660.",
        "ID": "SCN026",
        "God": "Neelakandeswarar / Shivalokanathar",
        "Goddess": "Anupamasthini / Bakthabeeshta Pradhayini",
        "Sthala_Varalaru": "Famous for the 'Oil Abishekam' where the oil is completely absorbed by the Lingam. Legend says Sage Markandeya was blessed with longevity here.",
        "Travel_Details": "10 km east of Kumbakonam on the Karaikal road.",
        "Name_EN": "Thiruneelakkudi Neelakandeswarar"
    },
    {
        "District": "",
        "Details": "102. வைகல்நாதர் - திருவைக்கல். கும்பகோணம்- மயிலாடுதுறை வழியில் 15 கி.மீ., - 94420 68335.",
        "ID": "SCN033",
        "God": "Vaikal Nathar",
        "Goddess": "Vaikalambigai",
        "Sthala_Varalaru": "Built by Kochengat Chola, this is a 'Maadakkoyil' (elevated temple). Legend says that the 270 temples built by the king were inspired by his previous life as a spider.",
        "Travel_Details": "15 km from Kumbakonam near Konerirajapuram.",
        "Name_EN": "Thiruvaikal Vaikal Nathar"
    },
    {
        "District": "",
        "Details": "103. உமாமகேஸ்வரர் - கோனேரிராஜபுரம். கும்பகோணம்- மயிலாடுதுறை வழியில் 20 கி.மீ., - 94420 68335.",
        "ID": "SCN034",
        "God": "Umamaheswarar",
        "Goddess": "Dehavardhini / Angavardhini",
        "Sthala_Varalaru": "Contains the largest and most exquisite bronze Nataraja in the world. Legend says the sculptor was aided by Shiva himself to create the perfect idol.",
        "Travel_Details": "20 km from Kumbakonam. Accessible via the S. Pudur bus stop.",
        "Name_EN": "Konerirajapuram Umamaheswarar"
    },
    {
        "District": "",
        "Details": "104. குற்றம்பொறுத்தநாதர் - ஓமாம்புலியூர். சிதம்பரத்தில் இருந்து 30 கி.மீ., - 04144 - 264 845.",
        "ID": "NCN031",
        "God": "Pranava Vyaghrapureeswarar",
        "Goddess": "Pushpalathambigai",
        "Sthala_Varalaru": "One of the five 'Puliyur' temples. Shiva is the Guru here. Dakshinamurthy sits in the main sanctum. The temple is famous for solving family disputes.",
        "Travel_Details": "Located near Kattumannarkoil, 30 km from Chidambaram.",
        "Name_EN": "Oamaampuliyur Pranava Vyaghrapureeswarar"
    },
    {
        "District": "",
        "Details": "105. சற்குணநாதர் - கருவிலி. கும்பகோணத்தில் இருந்து 20 கி.மீ., - 94424 47123.",
        "ID": "SCN035",
        "God": "Sargunanathar",
        "Goddess": "Sarvalokanayagi",
        "Sthala_Varalaru": "Worshipped by Lord Indra and the celestial architect Mayan. The temple name 'Karuvili' means those who worship here will not enter another womb (no rebirth).",
        "Travel_Details": "20 km from Kumbakonam near Nachiyarkoil.",
        "Name_EN": "Karuvili Sargunanathar"
    },
    {
        "District": "",
        "Details": "106. வீழிமிழலைநாதர் - திருவீழிமிழலை. கும்பகோணத்தில் இருந்து 25 கி.மீ., - 04366 - 273 050.",
        "ID": "SCN061",
        "God": "Nethrarpaneswarar / Veezhiazhagar",
        "Goddess": "Sundarakuchaambal",
        "Sthala_Varalaru": "Where Vishnu offered one of his eyes as a flower when he fell short during a 1000-flower worship. Shiva gave him the Sudarshana Chakra here.",
        "Travel_Details": "25 km south of Kumbakonam via Poonthottam.",
        "Name_EN": "Thiruveezhimizhalai Veezhiazhagar"
    },
    {
        "District": "",
        "Details": "107. அமிர்தகடேஸ்வரர் - சாக்கோட்டை. கும்பகோணத்தில் இருந்து 5 கி.மீ., - 0435 - 241 4452.",
        "ID": "SCN015",
        "God": "Amirthakalasanathar",
        "Goddess": "Amirthavalli",
        "Sthala_Varalaru": "As mentioned in entry 90, this is the site of the nectar pot. It is considered highly sacred for 'Ayushya Homam' and longevity rituals.",
        "Travel_Details": "Located in Sakkottai, Kumbakonam.",
        "Name_EN": "Sakkottai Amirthakalasanathar"
    },
    {
        "District": "",
        "Details": "108. பிராணநாதேஸ்வரர் - திருவிசநல்லூர். கும்பகோணத்தில் இருந்து 8 கி.மீ., - 94865 30623.",
        "ID": "NCN044",
        "God": "Prananatheswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Home to the 700-year-old Sun Dial. Legend says Shiva gave back 'Prana' (life) to a devotee here, hence the name.",
        "Travel_Details": "8 km from Kumbakonam on the Karaikal road.",
        "Name_EN": "Thiruvisanallur Prananatheswarar"
    },
    {
        "District": "",
        "Details": "109. ஆதிநாதேஸ்வரர் - சூரியனார்கோயில். கும்பகோணத்தில் இருந்து 15 கி.மீ., - 0435 - 247 2349.",
        "ID": "NCN045",
        "God": "Prananatheswarar / Suryanarayanan",
        "Goddess": "Mangalambigai / Usha-Pratyusha",
        "Sthala_Varalaru": "The 'Surya Sthalam' (Sun God) of the Navagraha temples. Surya worshipped Shiva here to be cured of a curse. All nine planets have separate shrines facing Surya.",
        "Travel_Details": "15 km from Kumbakonam near Thirumangalakudi.",
        "Name_EN": "Suryanarkoil Suryanar Temple"
    },
    {
        "District": "",
        "Details": "110. மங்களநாதர் - திருமங்கலக்குடி. கும்பகோணத்தில் இருந்து 15 கி.மீ., - 0435 - 247 0480.",
        "ID": "SCN029",
        "God": "Prananatheswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Known as the 'Mangala Sthalam'. Legend says the Goddess saved a minister from execution. It is a tradition to worship here before visiting Suryanarkoil.",
        "Travel_Details": "Located 1 km away from Suryanarkoil.",
        "Name_EN": "Thirumangalakudi Prananatheswarar"
    },
    {
        "District": "",
        "Details": "111. ஆபத்சகாயேஸ்வரர் - ஆலங்குடி. கும்பகோணத்தில் இருந்து 17 கி.மீ., - 04374 - 269 407.",
        "ID": "SCN098",
        "God": "Apatsakayeswarar / Kasi Aranyeswarar",
        "Goddess": "Elavarkuzhali / Umayammai",
        "Sthala_Varalaru": "The 'Guru Sthalam' (Jupiter) of the Navagraha temples. Shiva consumed poison here to save the Devas. Worshipped for education and wisdom.",
        "Travel_Details": "17 km from Kumbakonam on the Mannargudi road.",
        "Name_EN": "Alangudi Apatsakayeswarar"
    },
    {
        "District": "",
        "Details": "112. திருவாலந்துறைநாதர் - புள்ளமங்கை. தஞ்சாவூரில் இருந்து 15 கி.மீ., - 0435 - 241 1205.",
        "ID": "SCN008",
        "God": "Alandhurainathar",
        "Goddess": "Alliyankothai",
        "Sthala_Varalaru": "Famous for its micro-sculptures from the Parantaka Chola period. The Goddess is said to have manifested as a girl (Mangai) to worship Shiva under a Banyan tree (Aalam).",
        "Travel_Details": "Located in Pasupathikoil village near Tanjore.",
        "Name_EN": "Thiruppullamangai Alandhurainathar"
    },
	{
        "District": "",
        "Details": "113. தான்தோன்றீஸ்வரர் - ஆக்கூர். மயிலாடுதுறை- தரங்கம்பாடி வழியில் 15 கி.மீ., - 04364 - 280 812.",
        "ID": "SCN043",
        "God": "Thanthontreeswarar",
        "Goddess": "Valayankanni / Kumudha-Gujambigai",
        "Sthala_Varalaru": "A 'Maadakkoyil' built by Kochengat Chola. The Lord is self-manifested (Thanthontri). Famous for the legend of Sirappuli Nayanar who hosted a feast for a thousand devotees.",
        "Travel_Details": "15 km from Mayiladuthurai on the road to Tharangambadi (Tranquebar).",
        "Name_EN": "Akkur Thanthontreeswarar"
    },
    {
        "District": "",
        "Details": "114. அமிர்தகடேஸ்வரர் - திருக்கடையூர். மயிலாடுதுறை- காரைக்கால் வழியில் 22 கி.மீ., - 04364 - 287 429.",
        "ID": "SCN047",
        "God": "Amirthakadeswarar",
        "Goddess": "Abirami Amman",
        "Sthala_Varalaru": "Site where Shiva kicked Yama to save Markandeya. Famous for 60th (Shashtiabthapoorthi) and 80th (Sathabhishekam) birthday celebrations. Birthplace of Abirami Pattar.",
        "Travel_Details": "22 km from Mayiladuthurai and 25 km from Karaikal.",
        "Name_EN": "Thirukkadaiyur Amirthakadeswarar"
    },
    {
        "District": "",
        "Details": "115. பிரம்மபுரீஸ்வரர் - திருமீயச்சூர். பேரளம்- மயிலாடுதுறை வழியில் 2 கி.மீ., - 04366 - 239 170.",
        "ID": "SCN056",
        "God": "Meghannatha Swamy",
        "Goddess": "Lalithambigai",
        "Sthala_Varalaru": "Birthplace of the Garuda bird and the planet Shani. Goddess Lalithambigai is highly powerful here; the Lalitha Sahasranamam is believed to have been composed here.",
        "Travel_Details": "2 km from Peralam Railway Station on the Mayiladuthurai route.",
        "Name_EN": "Thirumeeyachur Lalithambigai Temple"
    },
    {
        "District": "",
        "Details": "116. சற்குணேஸ்வரர் - கருவிலி. கும்பகோணத்தில் இருந்து 20 கி.மீ., - 94424 47123.",
        "ID": "SCN035",
        "God": "Sargunanathar",
        "Goddess": "Sarvalokanayagi",
        "Sthala_Varalaru": "Legend says those who worship here will have no further 'Karuvili' (rebirth). Worshipped by the celestial architect Mayan.",
        "Travel_Details": "20 km from Kumbakonam near Nachiyarkoil.",
        "Name_EN": "Karuvili Sargunanathar"
    },
    {
        "District": "",
        "Details": "117. வீழிமிழலைநாதர் - திருவீழிமிழலை. கும்பகோணத்தில் இருந்து 25 கி.மீ., - 04366 - 273 050.",
        "ID": "SCN061",
        "God": "Nethrarpaneswarar / Veezhiazhagar",
        "Goddess": "Sundarakuchaambal",
        "Sthala_Varalaru": "As mentioned in entry 106. Features a unique 'Vavval Nethi' (Bat's forehead) Mandapam without any supporting pillars in the center.",
        "Travel_Details": "25 km south of Kumbakonam.",
        "Name_EN": "Thiruveezhimizhalai Veezhiazhagar"
    },
    {
        "District": "",
        "Details": "118. வைகல்நாதர் - திருவைக்கல். கும்பகோணம்- மயிலாடுதுறை வழியில் 15 கி.மீ., - 94420 68335.",
        "ID": "SCN033",
        "God": "Vaikalnathar",
        "Goddess": "Vaikalambigai",
        "Sthala_Varalaru": "One of the 70 temples built by Kochengat Cholan. The elevated structure protects the deity from floodwaters of the Kaveri.",
        "Travel_Details": "15 km from Kumbakonam near Konerirajapuram.",
        "Name_EN": "Thiruvaikal Vaikalnathar"
    },
    {
        "District": "",
        "Details": "119. தர்மபுரீஸ்வரர் - தர்மபுரம். காரைக்காலில் இருந்து 2 கி.மீ., - 04368 - 222 457.",
        "ID": "SCN052",
        "God": "Dharmapureeswarar",
        "Goddess": "Abirami Amman",
        "Sthala_Varalaru": "Headquarters of the Dharmapuram Adheenam. Legend says Lord Yama (Dharma) worshipped Shiva here to regain his powers after being kicked at Thirukkadaiyur.",
        "Travel_Details": "2 km from Karaikal town center.",
        "Name_EN": "Dharmapuram Dharmapureeswarar"
    },
    {
        "District": "",
        "Details": "120. தர்பாரண்யேஸ்வரர் - திருநள்ளாறு. காரைக்காலில் இருந்து 5 கி.மீ., - 04368 - 236 530.",
        "ID": "SCN052",
        "God": "Dharbaranyeswarar",
        "Goddess": "Praneswari / Bogamartha Poonmulaiyal",
        "Sthala_Varalaru": "The 'Shani Sthalam' (Saturn) of the Navagraha temples. King Nala was relieved of his Shani Dosha after bathing in the Nala Theertham here.",
        "Travel_Details": "5 km west of Karaikal. Very popular pilgrimage destination.",
        "Name_EN": "Thirunallar Dharbaranyeswarar"
    },
    {
        "District": "",
        "Details": "121. பசுபதீஸ்வரர் - திருக்கொண்டீஸ்வரம். நன்னிலத்தில் இருந்து 2 கி.மீ., - 04366 - 228 033.",
        "ID": "SCN058",
        "God": "Pasupatheeswarar",
        "Goddess": "Santhnayagi",
        "Sthala_Varalaru": "Worshipped by Kamadhenu (the divine cow). The Lord is believed to have appeared from under a jasmine bush.",
        "Travel_Details": "2 km east of Nannilam near Tiruvarur.",
        "Name_EN": "Thirukkondiswaram Pasupatheeswarar"
    },
    {
        "District": "",
        "Details": "122. மதுவனேஸ்வரர் - நன்னிலம். - 04366 - 233 463.",
        "ID": "SCN059",
        "God": "Madhuvaneswarar",
        "Goddess": "Madhuvaneswari",
        "Sthala_Varalaru": "The temple was once a forest of honey (Madhu-vanam). Worshipped by the Devas who took the form of bees to escape demons.",
        "Travel_Details": "Located in Nannilam town, 15 km north of Tiruvarur.",
        "Name_EN": "Nannilam Madhuvaneswarar"
    },
    {
        "District": "",
        "Details": "123. வர்த்தமானேஸ்வரர் - திருப்புகலூர். நன்னிலத்தில் இருந்து 8 கி.மீ., - 04366 - 292 300, 273 176.",
        "ID": "SCN075",
        "God": "Agneeswarar",
        "Goddess": "Karundhar-kuzhali",
        "Sthala_Varalaru": "Place where Saint Appar attained Mukti. The Lingam here is slightly tilted to one side. Famous for the 'Sathaya Nakshatra' festival.",
        "Travel_Details": "8 km from Nannilam on the road to Nagapattinam.",
        "Name_EN": "Thiruppugalur Agneeswarar"
    },
    {
        "District": "",
        "Details": "124. அபிராமேஸ்வரர் - திருப்புகலூர் வர்த்தமானீச்சரம். திருப்புகலூருக்குள்ளேயே - 04366 - 292 300, 273 176.",
        "ID": "SCN076",
        "God": "Vardhamaneeswarar",
        "Goddess": "Karundhar-kuzhali",
        "Sthala_Varalaru": "A separate shrine within the Thiruppugalur temple complex. Legend says the merchant-saint Muruga Nayanar worshipped here.",
        "Travel_Details": "Located inside the main Thiruppugalur Agneeswarar temple.",
        "Name_EN": "Thiruppugalur Vardhamaneeswarar"
    },
    {
        "District": "",
        "Details": "125. வில்வவனநாதர் - திருக்கண்ணபுரம். திருப்புகலூரில் இருந்து 2 கி.மீ., - 04366 - 292 300.",
        "ID": "SCN077",
        "God": "Ramanatheswarar",
        "Goddess": "Sarivarkuzhali",
        "Sthala_Varalaru": "Worshipped by Lord Rama to atone for the sin of killing Ravana. It is one of the important temples in the Tiruvarur-Nagapattinam circuit.",
        "Travel_Details": "2 km from Thiruppugalur and near the famous Sowriraja Perumal temple.",
        "Name_EN": "Thirukkannapuram Ramanatheswarar"
    },
    {
        "District": "",
        "Details": "126. ஸ்ரீவாஞ்சியநாதர் - ஸ்ரீவாஞ்சியம். நன்னிலத்தில் இருந்து 8 கி.மீ., - 04366 - 228 305.",
        "ID": "SCN070",
        "God": "Vanchinathar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "A site where Lord Yama is worshipped as the 'Vahana'. Bathing in the Gupta Ganga here is said to be more sacred than the Ganges in Kashi.",
        "Travel_Details": "8 km south of Nannilam on the Tiruvarur road.",
        "Name_EN": "Srivanchiyam Vanchinathar"
    },
    {
        "District": "",
        "Details": "127. கருநீலநாதசுவாமி - திருக்கருவிலி (திருக்கொட்டாரம்). காரைக்காலில் இருந்து 15 கி.மீ., - 04368 - 252 645.",
        "ID": "SCN054",
        "God": "Iravatheswarar",
        "Goddess": "Vandarkuzhali",
        "Sthala_Varalaru": "Where Indra's white elephant Airavata worshipped Shiva to be cured of a curse. The temple is surrounded by the river Vettar on three sides.",
        "Travel_Details": "15 km from Karaikal near Peralam.",
        "Name_EN": "Thirukkottaram Iravatheswarar"
    },
    {
        "District": "",
        "Details": "128. தியாகராஜர் - திருவாரூர். - 04366 - 242 231.",
        "ID": "SCN087",
        "God": "Vanmiganathar / Thyagarajar",
        "Goddess": "Kamalambigai / Neelotpalambigai",
        "Sthala_Varalaru": "The largest temple chariot (Azhi Ther) in Asia is here. Known for the 'Ajapa Natanam' of Thyagaraja. Features the massive Kamalalayam tank.",
        "Travel_Details": "Located in Tiruvarur town, a major railway and bus junction.",
        "Name_EN": "Tiruvarur Thyagaraja Swamy Temple"
    },
    {
        "District": "",
        "Details": "129. அரநெறிநாதர் - திருவாரூர் அரநெறி. திருவாரூர் கோயிலுக்குள்ளேயே - 04366 - 242 231.",
        "ID": "SCN088",
        "God": "Aranerinathar",
        "Goddess": "Kamalambigai",
        "Sthala_Varalaru": "A temple within the Tiruvarur temple complex. This site predates the current Thyagaraja structure and was built of stone by the Chola queen Sembiyan Mahadevi.",
        "Travel_Details": "Located in the southern prakaram of the Tiruvarur Thyagaraja temple.",
        "Name_EN": "Tiruvarur Aranerinathar"
    },
    {
        "District": "",
        "Details": "130. பராவையூர் ஈஸ்வரன் - திருவாரூர் பரவையுள்மண்டளி. திருவாரூர் கோயிலுக்குள்ளேயே - 04366 - 242 231.",
        "ID": "SCN089",
        "God": "Paravayul-Mandali-Nathar",
        "Goddess": "Kamalambigai",
        "Sthala_Varalaru": "Associated with the life of Saint Sundarar and his wife Paravai Nachiyar. Another important shrine within the vast Tiruvarur complex.",
        "Travel_Details": "Located inside the Tiruvarur temple premises.",
        "Name_EN": "Tiruvarur Paravayul-Mandali-Nathar"
    },
    {
        "District": "",
        "Details": "131. அக்னீஸ்வரர் - திருப்புகலூர். நன்னிலத்தில் இருந்து 8 கி.மீ., - 04366 - 292 300.",
        "ID": "SCN075",
        "God": "Agneeswarar",
        "Goddess": "Karundhar-kuzhali",
        "Sthala_Varalaru": "Where Agni (the God of fire) worshipped Shiva. Famous for Vastu-related worship and for those building new homes.",
        "Travel_Details": "Located in Thiruppugalur, near Nannilam.",
        "Name_EN": "Thiruppugalur Agneeswarar"
    },
    {
        "District": "",
        "Details": "132. வீழிமிழலைநாதர் - திருவீழிமிழலை. கும்பகோணத்தில் இருந்து 25 கி.மீ., - 04366 - 273 050.",
        "ID": "SCN061",
        "God": "Nethrarpaneswarar",
        "Goddess": "Sundarakuchaambal",
        "Sthala_Varalaru": "Worshipped by Lord Vishnu with his eyes. The temple is famous for the 'Padikkaasu' (coins) given by Shiva to Saints Appar and Sambandar during a famine.",
        "Travel_Details": "25 km south of Kumbakonam.",
        "Name_EN": "Thiruveezhimizhalai Veezhiazhagar"
    },
    {
        "District": "",
        "Details": "133. சட்டைநாதர் - சீர்காழி. - 04364 - 270 235.",
        "ID": "NCN014",
        "God": "Brahmapureeswarar",
        "Goddess": "Thirunilai-Nayagi",
        "Sthala_Varalaru": "Where child saint Sambandar was fed divine milk by Parvati. The deity Sattainathar is worshipped in the third level of the temple.",
        "Travel_Details": "Located in Sirkazhi town center.",
        "Name_EN": "Sirkazhi Sattainathar"
    },
    {
        "District": "",
        "Details": "134. முல்லைவனநாதர் - திருமுல்லைவாசல். சீர்காழியில் இருந்து 12 கி.மீ., - 94437 66255.",
        "ID": "NCN007",
        "God": "Mullai Vananathar",
        "Goddess": "Kothaiyammai",
        "Sthala_Varalaru": "One of the 'Puliyur' temples. Worshipped by Vyaghrapada and Patanjali. The jasmine scent is said to linger around the deity.",
        "Travel_Details": "12 km east of Sirkazhi.",
        "Name_EN": "Tirumullaivayil Mullai Vananathar"
    },
    {
        "District": "",
        "Details": "135. சாயாவனேஸ்வரர் - சாயாவனம். சீர்காழியில் இருந்து 18 கி.மீ., - 04364 - 260 157.",
        "ID": "NCN009",
        "God": "Saiyaveswarar",
        "Goddess": "Kuyilinam-Nanmozhi Ammai",
        "Sthala_Varalaru": "Site where Shiva revealed Kashi (Varanasi) to a devotee. The temple is located near the mouth of the Kaveri river.",
        "Travel_Details": "Located in Poompuhar, 18 km from Sirkazhi.",
        "Name_EN": "Saiyavanam Saiyaveswarar"
    },
    {
        "District": "",
        "Details": "136. பல்லவனேஸ்வரர் - பூம்புகார். சீர்காழியில் இருந்து 18 கி.மீ., - 04364 - 260 816.",
        "ID": "NCN010",
        "God": "Pallavaneswarar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "Associated with the Chola King and the saint Pattinathar. It represents the ancient glory of the Poompuhar port.",
        "Travel_Details": "4 km from Thiruvenkadu in Poompuhar.",
        "Name_EN": "Poompuhar Pallavaneswarar"
    },
    {
        "District": "",
        "Details": "137. சுவேதாரண்யேஸ்வரர் - திருவெண்காடு. சீர்காழியில் இருந்து 15 கி.மீ., - 04364 - 256 424.",
        "ID": "NCN011",
        "God": "Swetharanyeswarar",
        "Goddess": "Brahmavidhyambigai",
        "Sthala_Varalaru": "The 'Budha Sthalam' (Mercury). Includes the rare Agora Murthy shrine. It is the site of three sacred tanks and three sacred trees.",
        "Travel_Details": "10 km southeast of Sirkazhi.",
        "Name_EN": "Thiruvenkadu Swetharanyeswarar"
    },
	{
        "District": "",
        "Details": "138. ஆரண்யேஸ்வரர் - திருக்காட்டுப்பள்ளி. திருவெண்காட்டில் இருந்து 0.5 கி.மீ., - 04364 - 256 313.",
        "ID": "NCN012",
        "God": "Aranyeswarar",
        "Goddess": "Akhilandeswari",
        "Sthala_Varalaru": "Known as 'Melaittirukkattuppalli'. Legend says the celestial cow Kamadhenu worshipped here. Shiva manifested as a forest (Aranya) to bless the sages.",
        "Travel_Details": "Very close to the Thiruvenkadu temple, just 0.5 km away near Sirkazhi.",
        "Name_EN": "Thirukkattupalli Aranyeswarar"
    },
    {
        "District": "",
        "Details": "139. வெள்ளடைநாதர் - திருக்குருவாக்காவூர். சீர்காழியில் இருந்து 10 கி.மீ., - 04364 - 245 444.",
        "ID": "NCN013",
        "God": "Velladainathar",
        "Goddess": "Kaaviyaankanni",
        "Sthala_Varalaru": "Where Lord Shiva appeared as a brahmin to provide water and curd rice to the hungry saint Sundarar during his travels.",
        "Travel_Details": "6 km east of Sirkazhi, located on the route to Poompuhar.",
        "Name_EN": "Thirukkurukaavur Velladainathar"
    },
    {
        "District": "",
        "Details": "140. விசுவநாதர் - திருப்புகலூர். நன்னிலத்தில் இருந்து 8 கி.மீ., - 04366 - 292 300.",
        "ID": "SCN075",
        "God": "Agneeswarar",
        "Goddess": "Karundhar-kuzhali",
        "Sthala_Varalaru": "As mentioned in 131, this temple is famous for Vastu-related prayers. Legend says King Mandhata was blessed with wealth here after offering bricks made of gold.",
        "Travel_Details": "Located in Thiruppugalur, near Nannilam.",
        "Name_EN": "Thiruppugalur Agneeswarar"
    },
    {
        "District": "",
        "Details": "141. ரத்தினபுரீஸ்வரர் - திருநாட்டியத்தான்குடி. திருவாரூர்- மன்னார்குடி வழியில் 15 கி.மீ., - 94865 19746.",
        "ID": "SCN083",
        "God": "Manikkavannar / Rathnapureeswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Birthplace of saint Kotpuli Nayanar. Shiva is said to have appeared as a diamond merchant (Rathna) to test the devotion of the saint.",
        "Travel_Details": "15 km from Tiruvarur on the Mannargudi road.",
        "Name_EN": "Thirunattiyathankudi Rathnapureeswarar"
    },
    {
        "District": "",
        "Details": "142. வெண்ணெய்நாதர் - திருநெய்த்தானம். திருவையாற்றில் இருந்து 1 கி.மீ., - 04362 - 260 553.",
        "ID": "SCN001",
        "God": "Neyyadiappar / Gruthapureeswarar",
        "Goddess": "Balambigai",
        "Sthala_Varalaru": "Part of the 'Saptha Sthanam' around Thiruvaiyaru. Legend says the Shiva Lingam was showered with Ghee (Ney) by divine cows.",
        "Travel_Details": "Just 1 km west of Thiruvaiyaru.",
        "Name_EN": "Thiruneythanam Neyyadiappar"
    },
    {
        "District": "",
        "Details": "143. பசுபதீஸ்வரர் - திருப்பெருவேளூர். நன்னிலத்தில் இருந்து 10 கி.மீ., - 04366 - 228 033.",
        "ID": "SCN057",
        "God": "Abiramiswarar / Pasupatheeswarar",
        "Goddess": "Santhnayagi",
        "Sthala_Varalaru": "Worshipped by the Sun and Moon. It is a dual temple where both Shiva and Vishnu are worshipped in proximity. Also known as 'Manakkal' locally.",
        "Travel_Details": "10 km from Nannilam, near the Mudikondan river.",
        "Name_EN": "Thirupperuvelur Pasupatheeswarar"
    },
    {
        "District": "",
        "Details": "144. கயிலாயநாதர் - நன்னிலம். - 04366 - 233 463.",
        "ID": "SCN059",
        "God": "Madhuvaneswarar",
        "Goddess": "Madhuvaneswari",
        "Sthala_Varalaru": "As mentioned in 122. This 'Honey Forest' temple is a 'Maadakkoyil' built by Kochengat Chola with 70 steps representing the 70 previous births of the spider.",
        "Travel_Details": "In the center of Nannilam town.",
        "Name_EN": "Nannilam Madhuvaneswarar"
    },
    {
        "District": "",
        "Details": "145. சற்குணேஸ்வரர் - இராமநாதபுரம். நன்னிலத்தில் இருந்து 10 கி.மீ., - 94424 47123.",
        "ID": "SCN035",
        "God": "Sargunanathar",
        "Goddess": "Sarvalokanayagi",
        "Sthala_Varalaru": "Located in Karuvili. Legend says Lord Rama worshipped here to atone for the sin of killing Ravana. It is distinct from the main Rameswaram.",
        "Travel_Details": "10 km from Nannilam on the road to Nachiyarkoil.",
        "Name_EN": "Karuvili Sargunanathar"
    },
    {
        "District": "",
        "Details": "146. கோணேஸ்வரர் - திருக்குடவாசல். கும்பகோணம்- திருவாரூர் வழியில் 15 கி.மீ., - 04366 - 273 050.",
        "ID": "SCN094",
        "God": "Koneswarar",
        "Goddess": "Santhana-Nayagi / Abirami",
        "Sthala_Varalaru": "Shiva manifested as a 'Kona' (angle/corner) from the broken nectar pot. Worshipped by Garuda to save his mother Vinata. Known for progeny-related prayers.",
        "Travel_Details": "15 km from Kumbakonam on the road to Tiruvarur.",
        "Name_EN": "Kudavasal Koneswarar"
    },
    {
        "District": "",
        "Details": "147. சாரபரமேஸ்வரர் - திருச்சேறை. கும்பகோணம்- திருவாரூர் வழியில் 15 கி.மீ., - 0435 - 246 8001.",
        "ID": "SCN095",
        "God": "Senneriappar / Saraparameswarar",
        "Goddess": "Gnanambigai",
        "Sthala_Varalaru": "The only temple where the 'Rina Vimochana Lingam' (Lord who removes debts) is present. People worship here specifically to get relief from financial debts.",
        "Travel_Details": "15 km from Kumbakonam, near Nachiyarkoil.",
        "Name_EN": "Thirucherai Saraparameswarar"
    },
    {
        "District": "",
        "Details": "148. கைலாசநாதர் - திருநாலூர். கும்பகோணம்- திருவாரூர் வழியில் 15 கி.மீ., - 0435 - 246 7144.",
        "ID": "SCN096",
        "God": "Palyavarnatheswarar / Atmanathar",
        "Goddess": "Kalyana Sundari / Ambigai",
        "Sthala_Varalaru": "Worshipped by the celestial sage Narada. Legend says that the four Vedas took the form of dogs to worship Shiva here.",
        "Travel_Details": "15 km from Kumbakonam, near the town of Valangaiman.",
        "Name_EN": "Thirunallur Panchavarneswarar"
    },
    {
        "District": "",
        "Details": "149. அமிர்தகடேஸ்வரர் - திருக்கடையூர் மயானம். திருக்கடையூர் கோயிலுக்குள்ளேயே - 04364 - 287 429.",
        "ID": "SCN048",
        "God": "Brahmapureeswarar",
        "Goddess": "Nimalambigai / Malarkuzhali",
        "Sthala_Varalaru": "Located within the Thirukkadaiyur complex. Legend says Shiva created a cemetery (Mayanam) for the Gods after the Pralaya. Worshipped by Brahma.",
        "Travel_Details": "Situated behind the main Amirthakadeswarar temple in Thirukkadaiyur.",
        "Name_EN": "Thirukkadaiyur Mayanam Brahmapureeswarar"
    },
    {
        "District": "",
        "Details": "150. மகாலட்சுமீஸ்வரர் - திருநின்றியூர். வைத்தீஸ்வரன்கோயிலில் இருந்து 7 கி.மீ., - 04364 - 236 431.",
        "ID": "NCN019",
        "God": "Mahalatchumeeswarar",
        "Goddess": "Loganayagi",
        "Sthala_Varalaru": "Where Goddess Lakshmi worshipped Shiva to stay 'Nindriya' (fixed) in her devotion. Known as a site that grants permanent wealth and stability.",
        "Travel_Details": "7 km from Vaitheeswaran Koil on the Mayiladuthurai route.",
        "Name_EN": "Thirunindriyur Mahalatchumeeswarar"
    },
    {
        "District": "",
        "Details": "151. சிவலோகநாதர் - திருப்புன்கூர். வைத்தீஸ்வரன்கோயிலில் இருந்து 3 கி.மீ., - 04364 - 210 255.",
        "ID": "NCN020",
        "God": "Shivalokanathar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "As mentioned in 53. Famous for the Nandi that moved for Nandanar. Also features a sacred tank dug by the Ganas on Shiva's order in a single night.",
        "Travel_Details": "3 km west of Vaitheeswaran Koil.",
        "Name_EN": "Thirupunkoor Shivalokanathar"
    },
    {
        "District": "",
        "Details": "152. சோமநாதர் - நீடூர். மயிலாடுதுறையில் இருந்து 5 கி.மீ., - 04364 - 250 424.",
        "ID": "NCN021",
        "God": "Somanathar",
        "Goddess": "Veyuru-Tholi-Ammai",
        "Sthala_Varalaru": "Worshipped by the Moon (Soma) to cure his skin ailment. The name 'Needur' implies 'Place that stays forever'.",
        "Travel_Details": "5 km north of Mayiladuthurai.",
        "Name_EN": "Needur Somanathar"
    },
    {
        "District": "",
        "Details": "153. ஆபத்சகாயேஸ்வரர் - பொன்னூர். மயிலாடுதுறையில் இருந்து 7 கி.மீ., - 94435 64142.",
        "ID": "NCN022",
        "God": "Apatsakayeswarar",
        "Goddess": "Periyanayaki",
        "Sthala_Varalaru": "Where Lord Shiva protected Agni from the curse of the sages. It is a 'Parihara Sthalam' for those seeking protection from accidents.",
        "Travel_Details": "7 km from Mayiladuthurai near Ponnoor village.",
        "Name_EN": "Ponnoor Apatsakayeswarar"
    },
    {
        "District": "",
        "Details": "154. வேதாரண்யேஸ்வரர் - வேதாரண்யம். - 04369 - 250 238.",
        "ID": "SCN110",
        "God": "Vedaranyeswarar",
        "Goddess": "Vethanayagi",
        "Sthala_Varalaru": "The four Vedas worshipped Shiva here. The temple doors were magically closed by Saint Appar and opened by Saint Sambandar with their hymns. Famous for the sight of Shiva's marriage.",
        "Travel_Details": "Located in Vedaranyam, 45 km from Nagapattinam. Well-connected by bus.",
        "Name_EN": "Vedaranyam Vedaranyeswarar"
    },
    {
        "District": "",
        "Details": "155. அகஸ்தீஸ்வரர் - அகஸ்தியன்பள்ளி. வேதாரண்யத்தில் இருந்து 2 கி.மீ., - 04369 - 250 238.",
        "ID": "SCN111",
        "God": "Agastheeswarar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Where Sage Agastya witnessed the wedding of Shiva and Parvati. The Shiva Lingam here is said to have been installed by the sage himself to balance the earth.",
        "Travel_Details": "2 km south of Vedaranyam near the salt pans.",
        "Name_EN": "Agasthiyanpalli Agastheeswarar"
    },
    {
        "District": "",
        "Details": "156. கோடிக்குழகர் - கோடிக்கரை. வேதாரண்யத்தில் இருந்து 9 கி.மீ., - 04369 - 250 238.",
        "ID": "SCN112",
        "God": "Amirthakadeswarar / Kuzhagar",
        "Goddess": "Anjanatchi / Maiyaarkanni",
        "Sthala_Varalaru": "Located at the tip of the coastline (Point Calimere). Legend says the nectar pot was placed here temporarily. Worshipped by Lord Muruga (Kuzhagar) before the war in Lanka.",
        "Travel_Details": "9 km south of Vedaranyam at the end of the road in the wildlife sanctuary.",
        "Name_EN": "Kodikkarai Kuzhagar Temple"
    },
    {
        "District": "",
        "Details": "157. சௌந்தர்யேஸ்வரர் - திருநாகைக்காரோணம் (நாகப்பட்டினம்). - 04365 - 221 374, 241 331.",
        "ID": "SCN082",
        "God": "Kayarohanaswamy",
        "Goddess": "Neelotpalambigai",
        "Sthala_Varalaru": "One of the 'Saptha Vitanka' sthalams. Shiva is said to have absorbed the physical body (Kaya) of Sage Pundarika into his own here (Kayarohana).",
        "Travel_Details": "Located in Nagapattinam town center.",
        "Name_EN": "Nagapattinam Kayarohanaswamy"
    },
    {
        "District": "",
        "Details": "158. சிக்கல் சிங்காரவேலர் - சிக்கல். நாகப்பட்டினத்தில் இருந்து 5 கி.மீ., - 04365 - 245 452.",
        "ID": "SCN083",
        "God": "Navaneetheswarar",
        "Goddess": "Velnedunganni",
        "Sthala_Varalaru": "Famous for Lord Muruga receiving his 'Vel' (spear) from his mother here. The Lingam is made of butter (Navaneetham) and does not melt during abishekam.",
        "Travel_Details": "5 km west of Nagapattinam on the Tiruvarur road.",
        "Name_EN": "Sikkal Navaneetheswarar"
    },
    {
        "District": "",
        "Details": "159. மந்தபுரீஸ்வரர் - திருக்கொளிலி (திருக்குவளை). திருவாரூர்- திருத்துறைப்பூண்டி வழியில் 20 கி.மீ., - 04366 - 245 412.",
        "ID": "SCN081",
        "God": "Brahmapureeswarar",
        "Goddess": "Vandarkuzhali",
        "Sthala_Varalaru": "One of the 'Saptha Vitanka' sthalams. Worshipped by the planet Saturn (Shani) to be relieved of a curse. Legend says the sun's rays fall on the deity in the month of Panguni.",
        "Travel_Details": "20 km from Tiruvarur near Ettukudi.",
        "Name_EN": "Thirukkuvalai Brahmapureeswarar"
    },
    {
        "District": "",
        "Details": "160. வாய்மூர்நாதர் - திருவாய்மூர். திருவாரூர்- திருத்துறைப்பூண்டி வழியில் 25 கி.மீ., - 94435 64755.",
        "ID": "SCN080",
        "God": "Vaymoor Nathar",
        "Goddess": "Paalvayal-Nayagi",
        "Sthala_Varalaru": "One of the 'Saptha Vitanka' sthalams. Legend says Saint Appar followed Shiva here from Vedaranyam to see his cosmic dance.",
        "Travel_Details": "25 km from Tiruvarur on the road to Vedaranyam.",
        "Name_EN": "Thiruvaymoor Vaymoor Nathar"
    },
    {
        "District": "",
        "Details": "161. கயிலாயநாதர் - திருமுறைக்காடு. - 04369 - 250 238.",
        "ID": "SCN110",
        "God": "Vedaranyeswarar",
        "Goddess": "Vethanayagi",
        "Sthala_Varalaru": "This is another name for the Vedaranyam temple. It is considered as sacred as Kashi. The deity is worshipped as the King of the Vedas.",
        "Travel_Details": "Located in Vedaranyam town.",
        "Name_EN": "Vedaranyam Vedaranyeswarar"
    },
    {
        "District": "",
        "Details": "162. காசி விசுவநாதர் - மயிலாடுதுறை. - 04364 - 222 345.",
        "ID": "SCN039",
        "God": "Kasi Viswanathar",
        "Goddess": "Visalakshi",
        "Sthala_Varalaru": "Located on the northern bank of the Kaveri in Mayiladuthurai. Worshipping here during the Tula Snanam festival is considered equivalent to a dip in the Ganges.",
        "Travel_Details": "On the banks of the Kaveri River, Mayiladuthurai town.",
        "Name_EN": "Mayiladuthurai Kasi Viswanathar"
    },
	{
        "District": "பாண்டிய நாடு",
        "Details": "163. சொக்கநாதர் (மீனாட்சி அம்மன்) - மதுரை. - 0452 - 234 4360.",
        "ID": "PN001",
        "God": "Sokkanathar / Sundareswarar",
        "Goddess": "Meenakshi Amman",
        "Sthala_Varalaru": "One of the most famous temples in India. Shiva performed 64 divine plays (Thiruvilaiyadal) here. The Goddess Meenakshi was born as the daughter of a Pandya king and married Shiva here. Features the Hall of Thousand Pillars.",
        "Travel_Details": "Located in the heart of Madurai city. 2 km from Madurai Junction Railway Station.",
        "Name_EN": "Madurai Meenakshi Amman Temple"
    },
    {
        "District": "",
        "Details": "164. சுவேதாரண்யேஸ்வரர் - திருவாப்பனூர். மதுரையில் இருந்து 2 கி.மீ., - 0452 - 234 4360.",
        "ID": "PN002",
        "God": "Aappudayar",
        "Goddess": "Kuruvayurammai / Sugandhakunthalambikai",
        "Sthala_Varalaru": "Where Lord Shiva manifested to save a devotee's honor by appearing as a priest. The Lingam is said to have been made from sand (Aappu) by a Pandya king.",
        "Travel_Details": "Located in Sellur, Madurai, on the northern bank of the Vaigai river.",
        "Name_EN": "Madurai Thiruvaappanoor Aappudayar"
    },
    {
        "District": "",
        "Details": "165. ஏடகநாதர் - திருவேடகம். மதுரையில் இருந்து 18 கி.மீ., - 04543 - 259 231, 94435 01673.",
        "ID": "PN003",
        "God": "Edaganathar",
        "Goddess": "Elavarkuzhali",
        "Sthala_Varalaru": "Site of the 'Punal Vaadham' (water contest) between Saivites and Jains. Saint Sambandar's palm leaf manuscript floated upstream against the current of the Vaigai river and reached this spot.",
        "Travel_Details": "18 km from Madurai on the road to Cholavandan.",
        "Name_EN": "Thiruviedagam Edaganathar"
    },
    {
        "District": "",
        "Details": "166. கொடுங்குன்றீஸ்வரர் - பிரான்மலை. மதுரையில் இருந்து 65 கி.மீ., - 04577 - 245 233, 94420 47683.",
        "ID": "PN004",
        "God": "Kodungundreeswarar / Mangaiyanathar",
        "Goddess": "Amirthambigai / Kuyilamrithavalli",
        "Sthala_Varalaru": "A unique three-tiered hill temple representing Bhuloka, Antariksha, and Swarga. Worshipped by the king Pari, one of the seven great patrons. Agastya witnessed Shiva's wedding here.",
        "Travel_Details": "65 km from Madurai and 25 km from Melur. Accessible by bus via Singampunari.",
        "Name_EN": "Piranmalai Kodungundreeswarar"
    },
    {
        "District": "",
        "Details": "167. சத்தியகிரீஸ்வரர் - திருப்புத்தூர். மதுரையில் இருந்து 65 கி.மீ., - 04577 - 266 176, 94423 37048.",
        "ID": "PN005",
        "God": "Thiruthalinathar",
        "Goddess": "Sivagami Amman",
        "Sthala_Varalaru": "Worshipped by the Goddess Lakshmi (Thiru). The site is famous for the shrine of Yoga Bhairavar. Legend says that the five Pandavas stayed here during their exile.",
        "Travel_Details": "65 km from Madurai on the road to Karaikudi.",
        "Name_EN": "Thiruppathur Thiruthalinathar"
    },
    {
        "District": "",
        "Details": "168. திருவாடானைநாதர் - திருவாடானை. மதுரையில் இருந்து 100 கி.மீ., - 04561 - 254 533, 99428 20235.",
        "ID": "PN006",
        "God": "Aadhirathineswarar",
        "Goddess": "Snegavalli Amman",
        "Sthala_Varalaru": "The name comes from 'Aadu' (goat) and 'Aanai' (elephant). A devotee who had the body of an elephant and the head of a goat was cured of a curse here. Sun rays fall on the deity in the month of Maargazhi.",
        "Travel_Details": "100 km from Madurai on the road to Tondi.",
        "Name_EN": "Thiruvadanai Aadhirathineswarar"
    },
    {
        "District": "",
        "Details": "169. ஆதி ஜெகன்னாதர் - திருப்புல்லாணி. இராமநாதபுரத்தில் இருந்து 10 கி.மீ., - 04567 - 254 242.",
        "ID": "PN007",
        "God": "Dharba-sayana Ramaswamy",
        "Goddess": "Padmasini",
        "Sthala_Varalaru": "Though primarily a Vishnu temple, it is included in Shiva circuits due to its proximity to Rameswaram. Where Lord Rama rested on a bed of Dharba grass before crossing the ocean.",
        "Travel_Details": "10 km south of Ramanathapuram. Well connected by bus.",
        "Name_EN": "Thiruppullani Aadi Jagannatha"
    },
    {
        "District": "",
        "Details": "170. இராமநாதர் - இராமேஸ்வரம். - 04573 - 221 223.",
        "ID": "PN008",
        "God": "Ramanathaswamy",
        "Goddess": "Parvathavarthini",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Worshipped by Lord Rama to atone for the sin of killing Ravana. Features the longest corridor (Prakaram) in the world and 22 sacred theerthams.",
        "Travel_Details": "Located in Rameswaram island. Connected by the Pamban Bridge to the mainland.",
        "Name_EN": "Rameswaram Ramanathaswamy Temple"
    },
    {
        "District": "",
        "Details": "171. காளையார் கோயில் - காளையார் கோயில். சிவகங்கையில் இருந்து 18 கி.மீ., - 04575 - 232 516.",
        "ID": "PN009",
        "God": "Kaleeswarar / Someswarar",
        "Goddess": "Swarnambigai",
        "Sthala_Varalaru": "Named after the 'Kaalai' (Bull/Nandi) that worshipped Shiva here. A massive temple with three main shrines and three gopurams. Historically significant to the Marudhu Pandiyar brothers.",
        "Travel_Details": "18 km east of Sivaganga. 30 km from Madurai.",
        "Name_EN": "Kalayar Kovil Kaleeswarar"
    },
    {
        "District": "",
        "Details": "172. திருப்பூவணநாதர் - திருப்பூவணம். மதுரையில் இருந்து 18 கி.மீ., - 04575 - 241 233, 94862 38041.",
        "ID": "PN010",
        "God": "Pushpavana Nathar",
        "Goddess": "Sowndaryanayagi",
        "Sthala_Varalaru": "Where the river Vaigai flows north (Uttara-vahini). Legend says a drop of divine nectar fell here and became a flower (Poo). Shiva is said to have tilted the Nandi for a devotee.",
        "Travel_Details": "18 km from Madurai on the road to Rameshwaram.",
        "Name_EN": "Thiruppuvanam Pushpavana Nathar"
    },
    {
        "District": "",
        "Details": "173. திருச்சுழிநாதர் - திருச்சுழி. மதுரையில் இருந்து 45 கி.மீ., - 04566 - 282 644, 94866 21101.",
        "ID": "PN011",
        "God": "Thrumeninaathar",
        "Goddess": "Thunaimalai Amman",
        "Sthala_Varalaru": "Birthplace of Ramana Maharishi. Legend says Shiva prevented the village from being washed away during a flood by 'swirling' (Chuzhi) the water back into the earth with his finger.",
        "Travel_Details": "45 km south of Madurai. 15 km from Aruppukottai.",
        "Name_EN": "Thiruchuli Thrumeninaathar"
    },
    {
        "District": "",
        "Details": "174. திருக்குற்றாலநாதர் - குற்றாலம். தென்காசியில் இருந்து 5 கி.மீ., - 04633 - 283 138.",
        "ID": "PN012",
        "God": "Kuttralanathar",
        "Goddess": "Kuzhalvaaimozhi Amman",
        "Sthala_Varalaru": "The temple is shaped like a conch. Legend says Sage Agastya converted a Vishnu temple into a Shiva temple by pressing the head of the idol, which became the Lingam.",
        "Travel_Details": "Located in Courtallam (Kuttralam), famous for its waterfalls. 5 km from Tenkasi.",
        "Name_EN": "Courtallam Kuttralanathar"
    },
    {
        "District": "",
        "Details": "175. நெல்லையப்பர் - திருநெல்வேலி. - 0462 - 233 9910.",
        "ID": "PN013",
        "God": "Nellaiappar",
        "Goddess": "Kanthimathi Amman",
        "Sthala_Varalaru": "Where Shiva appeared as a fence (Veli) of paddy (Nel) to protect a devotee's harvest from rain. One of the 'Pancha Sabhais' (Thamira Sabhai - Copper Hall of Dance).",
        "Travel_Details": "Located in the heart of Tirunelveli town. 2 km from the railway station.",
        "Name_EN": "Tirunelveli Nellaiappar Temple"
    },
    {
        "District": "கொங்கு நாடு",
        "Details": "176. சங்கமேஸ்வரர் - பவானி. ஈரோட்டில் இருந்து 12 கி.மீ., - 04256 - 230 192.",
        "ID": "KN001",
        "God": "Sangameswarar",
        "Goddess": "Vedhanayagi",
        "Sthala_Varalaru": "Known as the 'Dakshina Triveni Sangam' where the rivers Bhavani, Kaveri, and the invisible Amutha meet. Famous for 'Parihara' rituals for ancestors.",
        "Travel_Details": "12 km from Erode. Well-connected by buses from Coimbatore and Erode.",
        "Name_EN": "Bhavani Sangameswarar Temple"
    },
    {
        "District": "",
        "Details": "177. கொடுமுடிநாதர் - கொடுமுடி. ஈரோட்டில் இருந்து 40 கி.மீ., - 04204 - 222 249.",
        "ID": "KN002",
        "God": "Magudeswarar",
        "Goddess": "Panchanayagi / Vadivudaiyamman",
        "Sthala_Varalaru": "A unique 'Trimurthi' temple where Shiva, Vishnu, and Brahma have separate shrines. The Vanni tree here is said to be thousands of years old.",
        "Travel_Details": "40 km from Erode. Located right on the bank of the Kaveri River.",
        "Name_EN": "Kodumudi Magudeswarar Temple"
    },
    {
        "District": "",
        "Details": "178. செங்கோட்டுவேலர் - திருச்செங்கோடு. ஈரோட்டில் இருந்து 20 கி.மீ., - 04288 - 255 030, 252 282.",
        "ID": "KN003",
        "God": "Ardhanareeswarar",
        "Goddess": "Baagampiriyaal",
        "Sthala_Varalaru": "A hill temple where the main deity is a 6-foot tall idol of Ardhanareeswarar (Half-Shiva, Half-Parvati). It is the only major temple dedicated to this form.",
        "Travel_Details": "20 km from Erode. Accessible by road to the top of the hill.",
        "Name_EN": "Tiruchengode Ardhanareeswarar"
    },
    {
        "District": "",
        "Details": "179. மல்லிகார்ஜுனேஸ்வரர் - ஈரோடு. - 0424 - 221 2110.",
        "ID": "KN004",
        "God": "Thirunandeeswarar / Arudra Kabaleeswarar",
        "Goddess": "Varunambigai",
        "Sthala_Varalaru": "Worshipped by Sage Durvasa. The temple is known for its beautiful architecture and its link to the ancient Kongu Chola kings.",
        "Travel_Details": "Located in the heart of Erode town.",
        "Name_EN": "Erode Arudra Kabaleeswarar"
    },
    {
        "District": "",
        "Details": "180. கல்யாண விகிர்தீஸ்வரர் - கரூர். - 04324 - 262 010.",
        "ID": "KN005",
        "God": "Pasupatheeswarar",
        "Goddess": "Soundarya-Nayagi",
        "Sthala_Varalaru": "Where the divine cow Kamadhenu worshipped Shiva. The Lingam is tilted to one side. Birthplace of the saint Eripatha Nayanar.",
        "Travel_Details": "Located in Karur town center, a major textile hub.",
        "Name_EN": "Karur Pasupatheeswarar Temple"
    },
    {
        "District": "",
        "Details": "181. ஆதிரத்தினேஸ்வரர் - திருவாடானை. - 04561 - 254 533.",
        "ID": "PN006",
        "God": "Aadhirathineswarar",
        "Goddess": "Snegavalli",
        "Sthala_Varalaru": "As mentioned in 168. Worshipped by the Sun God (Aadhi-Rathna). It is considered as sacred as Kashi in the South.",
        "Travel_Details": "Located in Tiruvadanai, Ramanathapuram district.",
        "Name_EN": "Thiruvadanai Aadhirathineswarar"
    },
    {
        "District": "",
        "Details": "182. அவினாசியப்பர் - அவினாசி. கோயம்புத்தூரில் இருந்து 40 கி.மீ., - 04296 - 273 113.",
        "ID": "KN006",
        "God": "Avinasiappar",
        "Goddess": "Karunambigai",
        "Sthala_Varalaru": "Famous for the miracle of Saint Sundarar, who sang a pathigam to make a crocodile bring back a child it had swallowed three years earlier. Known as 'Dakshina Varanasi'.",
        "Travel_Details": "40 km from Coimbatore on the road to Erode/Salem.",
        "Name_EN": "Avinashi Avinasiappar Temple"
    },
    {
        "District": "",
        "Details": "183. பட்டீஸ்வரர் - பேரூர். கோயம்புத்தூரில் இருந்து 6 கி.மீ., - 0422 - 266 2450.",
        "ID": "KN007",
        "God": "Patteeswarar",
        "Goddess": "Pachainayagi / Maragathambigai",
        "Sthala_Varalaru": "Worshipped by Kamadhenu. The deity is believed to have been manifested from the footprint of the cow. Famous for its exquisite stone carvings in the Kanaka Sabhai.",
        "Travel_Details": "6 km from Coimbatore city center. Easily accessible by local bus.",
        "Name_EN": "Perur Patteeswarar Temple"
    },
    {
        "District": "",
        "Details": "184. சுப்பிரமணியர் - மருதமலை. கோயம்புத்தூரில் இருந்து 12 கி.மீ., - 0422 - 242 2490.",
        "ID": "KN008",
        "God": "Marudhamalai Murugan",
        "Goddess": "Valli / Deivanai",
        "Sthala_Varalaru": "One of the most popular hill temples for Lord Muruga. Though a Murugan temple, it is included in Kongu Shiva circuits due to its proximity to Perur.",
        "Travel_Details": "12 km from Coimbatore. Special buses available to the hilltop.",
        "Name_EN": "Marudhamalai Murugan Temple"
    },
    {
        "District": "",
        "Details": "185. வஞ்சி நிதுலேஸ்வரர் - கரூர். - 04324 - 262 010.",
        "ID": "KN005",
        "God": "Pasupatheeswarar",
        "Goddess": "Kalyana-Nayagi",
        "Sthala_Varalaru": "This is the same as the Karur Pasupatheeswarar temple, often referred to by its ancient name 'Vanji'.",
        "Travel_Details": "Located in Karur town.",
        "Name_EN": "Karur Pasupatheeswarar"
    },
    {
        "District": "",
        "Details": "186. கயிலாயநாதர் - தாராமங்கலம். சேலத்தில் இருந்து 25 கி.மீ., - 98421 16161.",
        "ID": "KN009",
        "God": "Kailasanathar",
        "Goddess": "Sivagami Amman",
        "Sthala_Varalaru": "Renowned for its incredible stone architecture. Features a unique 'musical pillar' and a stone chain with no joints. Sun rays fall on the deity once a year.",
        "Travel_Details": "25 km from Salem. Well connected by bus via Omalur.",
        "Name_EN": "Taramangalam Kailasanathar"
    },
    {
        "District": "",
        "Details": "187. கரியமாணிக்கம் - வெங்கம்பூர். ஈரோட்டில் இருந்து 45 கி.மீ., - 98653 36340.",
        "ID": "KN010",
        "God": "Sathyagireeswarar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "An ancient temple on the banks of the Kaveri. Legend says the Sun god Surya worshipped here to gain his brilliance back.",
        "Travel_Details": "45 km from Erode near Kodumudi.",
        "Name_EN": "Vengambur Sathyagireeswarar"
    },
	{
        "District": "நடு நாடு",
        "Details": "188. அருணாசலேஸ்வரர் - திருவண்ணாமலை. - 04175 - 252 438.",
        "ID": "NN022",
        "God": "Annamalaiyar / Arunachaleswarar",
        "Goddess": "Unnamalai Amman / Apithakujambal",
        "Sthala_Varalaru": "One of the 'Pancha Bhoota Sthalams' representing Fire (Agni). Shiva appeared as a massive column of fire. Famous for 'Girivalam' (circumambulating the hill) and the Karthigai Deepam festival.",
        "Travel_Details": "Located in Tiruvannamalai town. Well-connected by rail and bus from Chennai, Madurai, and Bangalore.",
        "Name_EN": "Tiruvannamalai Annamalaiyar Temple"
    },
    {
        "District": "",
        "Details": "189. பாடலீஸ்வரர் - திருப்பாதிரிப்புலியூர். கடலூர். - 04142 - 236 728.",
        "ID": "NN001",
        "God": "Padaleeswarar / Thontria-Appar",
        "Goddess": "Periyanayagi Amman",
        "Sthala_Varalaru": "Associated with the life of Saint Appar. When he was tied to a stone and thrown into the sea by Pallava kings, the stone floated and brought him safely to this shore by the grace of Shiva.",
        "Travel_Details": "Located in Cuddalore town. Accessible from the Cuddalore Port railway station.",
        "Name_EN": "Tirupathiripuliyur Padaleeswarar"
    },
    {
        "District": "",
        "Details": "190. விருத்தகிரீஸ்வரர் - விருத்தாசலம். - 04143 - 230 203.",
        "ID": "NN002",
        "God": "Vriddhagiriswarar / Pazhamalai Nathar",
        "Goddess": "Vriddhambigai / Balambigai",
        "Sthala_Varalaru": "Older than the Himalayas. Shiva is worshipped here as the 'Lord of the Ancient Hill'. It is believed that dying here is equivalent to dying in Kashi.",
        "Travel_Details": "Located in Virudhachalam town. A major railway junction on the Chennai-Trichy line.",
        "Name_EN": "Virudhachalam Vriddhagiriswarar"
    },
    {
        "District": "",
        "Details": "191. சொக்கநாதர் - நெல்லிக்குப்பம். கடலூரில் இருந்து 15 கி.மீ., - 04142 - 272 575.",
        "ID": "NN003",
        "God": "Sivapuranathar",
        "Goddess": "Parvathi Amman",
        "Sthala_Varalaru": "Known as 'Thirunelvayil Arathurai'. Shiva provided a pearl palanquin and a pearl umbrella to the child saint Sambandar here to protect him from the heat.",
        "Travel_Details": "15 km from Cuddalore and 5 km from Panruti.",
        "Name_EN": "Nellikuppam Sivapuranathar"
    },
    {
        "District": "",
        "Details": "192. வீரட்டேஸ்வரர் - திருவதிகை. பண்ருட்டியில் இருந்து 2 கி.மீ., - 04142 - 242 642.",
        "ID": "NN004",
        "God": "Veerateswarar",
        "Goddess": "Thiruvadhigai Amman / Tripurasundari",
        "Sthala_Varalaru": "One of the 'Ashta Veerattanam' sites. Shiva destroyed the 'Tripuram' (three flying cities) here. This is the site where Saint Appar was converted back to Saivism by his sister Thilagavathiyar.",
        "Travel_Details": "2 km from Panruti town near Cuddalore.",
        "Name_EN": "Thiruvadhigai Veerateswarar"
    },
    {
        "District": "",
        "Details": "193. வாமனபுரீஸ்வரர் - திருமாணிகுழி. கடலூரில் இருந்து 10 கி.மீ., - 94420 56214.",
        "ID": "NN005",
        "God": "Vamanapureeswarar / Udhaviswarar",
        "Goddess": "Ambujatchi Amman",
        "Sthala_Varalaru": "Lord Vishnu in his Vamana avatar worshipped Shiva here to regain his powers. The temple is known for its beautiful architecture and tranquil pond.",
        "Travel_Details": "10 km west of Cuddalore via Thiruvahindrapuram.",
        "Name_EN": "Thirumanikuzhi Vamanapureeswarar"
    },
    {
        "District": "",
        "Details": "194. மருந்தீஸ்வரர் - திருஇடையாறு. விழுப்புரம்- உளுந்தூர்ப்பேட்டை வழியில் 15 கி.மீ., - 94436 40049.",
        "ID": "NN006",
        "God": "Marundheeswarar",
        "Goddess": "Gnanambigai",
        "Sthala_Varalaru": "Worshipped by Sage Agastya. Shiva appeared as a doctor and provided medicinal herbs to cure the sage. Known for healing various ailments.",
        "Travel_Details": "15 km from Villupuram on the Trichy Highway.",
        "Name_EN": "Thiruvidaiyaru Marundheeswarar"
    },
    {
        "District": "",
        "Details": "195. அபிராமேஸ்வரர் - திருவாமூர். பண்ருட்டியில் இருந்து 5 கி.மீ., - 94424 07739.",
        "ID": "NN007",
        "God": "Pasupatheeswarar / Abirameswarar",
        "Goddess": "Azhagammai",
        "Sthala_Varalaru": "Birthplace of Saint Appar. It is a highly significant site for the Tamil Saivite community. The temple maintains a perpetual lamp in honor of the saint.",
        "Travel_Details": "5 km from Panruti on the road to Cuddalore.",
        "Name_EN": "Thiruvamur Abirameswarar"
    },
    {
        "District": "",
        "Details": "196. கைலாசநாதர் - பெண்ணாகடம். விருத்தாசலத்தில் இருந்து 15 கி.மீ., - 04143 - 222 788.",
        "ID": "NN008",
        "God": "Pralayakaaleswarar",
        "Goddess": "Amirthambigai",
        "Sthala_Varalaru": "Legend says that during the Pralaya (Great Flood), Shiva saved this place by turning it into a forest of 'Pen' (Palm) trees. Worshipped by Kalikamba Nayanar.",
        "Travel_Details": "15 km from Virudhachalam near Tittagudi.",
        "Name_EN": "Pennagadam Pralayakaaleswarar"
    },
    {
        "District": "",
        "Details": "197. தூவாய்நாதர் - திருநெல்வாயில் (சிவபுரி). சிதம்பரத்தில் இருந்து 5 கி.மீ., - 04144 - 238 244.",
        "ID": "NCN003",
        "God": "Ucchinathar / Sivapuranathar",
        "Goddess": "Kanakambigai",
        "Sthala_Varalaru": "Where Saint Sambandar stayed while visiting Chidambaram. Shiva appeared here to provide food to the saint and his followers.",
        "Travel_Details": "5 km south of Chidambaram near the Annamalai University campus.",
        "Name_EN": "Sivapuri Ucchinathar"
    },
    {
        "District": "",
        "Details": "198. உச்சிநாதர் - திருக்கழிப்பாலை. சிதம்பரத்தில் இருந்து 5 கி.மீ., - 04144 - 238 244.",
        "ID": "NCN004",
        "God": "Paalvannanathar",
        "Goddess": "Vedhanayagi",
        "Sthala_Varalaru": "The original temple was washed away by the sea and relocated here. Legend says Sage Valmiki worshipped here. The name refers to the milky white color of the Lingam.",
        "Travel_Details": "Located in Sivapuri, near Chidambaram.",
        "Name_EN": "Thirukkazhippalai Paalvannanathar"
    },
    {
        "District": "",
        "Details": "199. ஆத்மநாதர் - திருநெல்வேணி. கடலூரில் இருந்து 25 கி.மீ., - 94862 38480.",
        "ID": "NN009",
        "God": "Swarnapureeswarar",
        "Goddess": "Meenakshi Amman",
        "Sthala_Varalaru": "Worshipped by Lord Indra. Legend says the Sun god Surya's rays touch the deity in the month of Panguni. The temple is known for its beautiful bronze idols.",
        "Travel_Details": "25 km from Cuddalore near the Vellar river.",
        "Name_EN": "Thirunelveni Swarnapureeswarar"
    },
    {
        "District": "",
        "Details": "200. திருமுண்டீஸ்வரர் - கிராமம். விழுப்புரம்- உளுந்தூர்ப்பேட்டை வழியில் 20 கி.மீ., - 04146 - 204 430.",
        "ID": "NN010",
        "God": "Sivalokanathar / Mundeeswarar",
        "Goddess": "Soundaryanayagi",
        "Sthala_Varalaru": "Where the demon Mundasura worshipped Shiva and attained salvation. One of the few temples where the deity is worshipped with 'Thumbai' flowers.",
        "Travel_Details": "20 km south of Villupuram in the village named 'Gramam'.",
        "Name_EN": "Gramam Mundeeswarar Temple"
    },
    {
        "District": "",
        "Details": "201. மங்களபுரீஸ்வரர் - திருநாவலூர். பண்ருட்டி- உளுந்தூர்ப்பேட்டை வழியில் 15 கி.மீ., - 04149 - 224 404.",
        "ID": "NN011",
        "God": "Bakthajaneswarar",
        "Goddess": "Manonmani Amman",
        "Sthala_Varalaru": "Birthplace of Saint Sundarar. Legend says Shiva appeared as an old man to claim Sundarar as his servant on his wedding day here.",
        "Travel_Details": "15 km from Ulundurpet on the Cuddalore road.",
        "Name_EN": "Thirunavalur Bakthajaneswarar"
    },
    {
        "District": "",
        "Details": "202. கிருபாபுரீஸ்வரர் - திருவெண்ணெய்நல்லூர். விழுப்புரம்- உளுந்தூர்ப்பேட்டை வழியில் 20 கி.மீ., - 04146 - 206 703.",
        "ID": "NN012",
        "God": "Krupapureeswarar / Thaduthattkonda-Nathar",
        "Goddess": "Mangalambigai",
        "Sthala_Varalaru": "Site of the famous legal dispute between Shiva (as an old man) and Saint Sundarar. Shiva proved that Sundarar was his bond-slave here.",
        "Travel_Details": "20 km from Villupuram. Accessible via local buses from Ulundurpet.",
        "Name_EN": "Thiruvennainallur Krupapureeswarar"
    },
    {
        "District": "",
        "Details": "203. பனங்காட்டீஸ்வரர் - பனையபுரம். விழுப்புரம்- விக்கிரவாண்டி வழியில் 10 கி.மீ., - 04146 - 201 024, 94436 10024.",
        "ID": "NN013",
        "God": "Panangatteeswarar / Netrodharaka Swamy",
        "Goddess": "Sathyambigai",
        "Sthala_Varalaru": "Worshipped by the Sun. Legend says a devotee who lost his eyesight regained it after worshipping here. The temple features ancient palm leaf inscriptions.",
        "Travel_Details": "10 km north of Villupuram on the highway to Chennai.",
        "Name_EN": "Panayapuram Panangatteeswarar"
    },
    {
        "District": "",
        "Details": "204. தர்மபுரீஸ்வரர் - திருப்பாதிரிப்புலியூர். கடலூர். - 04142 - 236 728.",
        "ID": "NN001",
        "God": "Padaleeswarar",
        "Goddess": "Periyanayagi",
        "Sthala_Varalaru": "As mentioned in 189, this is the 'Stone-Float' temple. It is also considered a powerful site for those with respiratory issues.",
        "Travel_Details": "In Cuddalore town.",
        "Name_EN": "Tirupathiripuliyur Padaleeswarar"
    },
    {
        "District": "",
        "Details": "205. சந்திரசேகர் - திருவக்கரை. திண்டிவனம் வழியில் 25 கி.மீ., - 0413 - 268 8955.",
        "ID": "NN014",
        "God": "Chandramouliswarar",
        "Goddess": "Vadivambigai",
        "Sthala_Varalaru": "Famous for the 'Vakra Kali' shrine. Legend says the demon Vakrasura was killed here by Vishnu. It is a rare temple where the main Lingam has three faces.",
        "Travel_Details": "25 km from Tindivanam. Famous for its geological fossil park nearby.",
        "Name_EN": "Thiruvakkarai Chandramouliswarar"
    },
    {
        "District": "",
        "Details": "206. அக்னீஸ்வரர் - திருக்கோயிலூர். - 04153 - 224 572.",
        "ID": "NN015",
        "God": "Veerateswarar",
        "Goddess": "Brihannayagi / Periyanayagi",
        "Sthala_Varalaru": "One of the 'Ashta Veerattanam' sites. Shiva killed the demon Andhakasura here. Birthplace of the great king Rajaraja Chola's mother.",
        "Travel_Details": "Located in Tirukkoyilur town, on the bank of the Pennar river.",
        "Name_EN": "Tirukkoyilur Veerateswarar"
    },
    {
        "District": "",
        "Details": "207. அரகண்டநல்லூர் ஈஸ்வரன் - அரகண்டநல்லூர். திருக்கோயிலூர்- விழுப்புரம் வழியில் 2 கி.மீ., - 04153 - 224 572.",
        "ID": "NN016",
        "God": "Oppila-amaniyar",
        "Goddess": "Azhagammai",
        "Sthala_Varalaru": "A hill temple where Ramana Maharishi stayed before proceeding to Tiruvannamalai. Saint Sambandar sang hymns here facing the Tiruvannamalai hill.",
        "Travel_Details": "2 km from Tirukkoyilur railway station.",
        "Name_EN": "Arakandanallur Oppila-amaniyar"
    },
    {
        "District": "",
        "Details": "208. ஞானபுரீஸ்வரர் - திருவண்ணாமலை. - 04175 - 252 438.",
        "ID": "NN022",
        "God": "Arunachaleswarar",
        "Goddess": "Unnamalai Amman",
        "Sthala_Varalaru": "As mentioned in 188, this is the Fire (Agni) Sthalam. The hill itself is considered a Lingam. Worshipped by Brahma and Vishnu.",
        "Travel_Details": "In Tiruvannamalai town.",
        "Name_EN": "Tiruvannamalai Annamalaiyar"
    },
    {
        "District": "",
        "Details": "209. சிபிசக்கரவர்த்தி கோயில் - சேயூர். வந்தவாசி- மேல்மருவத்தூர் வழியில் 20 கி.மீ., - 04183 - 209 174.",
        "ID": "TN030",
        "God": "Meenakshi Sundareswarar",
        "Goddess": "Meenakshi Amman",
        "Sthala_Varalaru": "Built by King Sibi Chakravarthy. Legend says the king offered his own flesh to save a dove here. The temple architecture belongs to the later Chola period.",
        "Travel_Details": "20 km from Vandavasi and 25 km from Melmaruvathur.",
        "Name_EN": "Cheyyur Meenakshi Sundareswarar"
    },
    {
        "District": "",
        "Details": "210. கோரக்கநாதர் - கூவம். சென்னையிலிருந்து 50 கி.மீ., - 044 - 2760 0341, 94448 83033.",
        "ID": "TN014",
        "God": "Thripuranthakar",
        "Goddess": "Thripurasundari",
        "Sthala_Varalaru": "Located at the source of the Cooum river. Shiva is said to have rested his bow here during the Tripuram war. The Lingam changes color based on the weather.",
        "Travel_Details": "50 km west of Chennai near Mappedu.",
        "Name_EN": "Cooum Thripuranthakar Temple"
    },
    {
        "District": "",
        "Details": "211. மருந்தீஸ்வரர் - திருக்கச்சூர். செங்கல்பட்டு- தாம்பரம் வழியில் 5 கி.மீ., - 044 - 2746 3514, 93821 21453.",
        "ID": "TN026",
        "God": "Kachabeswarar / Marundheeswarar",
        "Goddess": "Anjanatchi / Irulneeki Amman",
        "Sthala_Varalaru": "Where Lord Vishnu in the form of a turtle (Kachaba) worshipped Shiva. Shiva appeared as a beggar to provide food to Saint Sundarar here.",
        "Travel_Details": "5 km from Singaperumal Koil, near Chennai.",
        "Name_EN": "Thirukkachur Kachabeswarar"
    },
    {
        "District": "",
        "Details": "212. ஆலாலசுந்தரர் - திருக்கழுக்குன்றம். செங்கல்பட்டில் இருந்து 15 கி.மீ., - 044 - 2744 6226.",
        "ID": "TN027",
        "God": "Vedagiriswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "Known as 'Eagle Temple'. Two eagles are said to visit the hilltop temple every day to take food. Representing the four Vedas that took the form of hills.",
        "Travel_Details": "15 km from Chengalpattu and 12 km from Mahabalipuram.",
        "Name_EN": "Thirukazhukundram Vedagiriswarar"
    },
	    {
        "District": "தொண்டை நாடு",
        "Details": "213. ஏகாம்பரநாதர் - காஞ்சிபுரம். - 044 - 2722 2084.",
        "ID": "TN001",
        "God": "Ekambaranathar",
        "Goddess": "Elavar Kuzhali / Kamakshi",
        "Sthala_Varalaru": "One of the 'Pancha Bhoota Sthalams' representing Earth (Prithvi). Goddess Parvati worshipped a sand Lingam under a mango tree. The 3,500-year-old mango tree produces four types of mangoes representing the four Vedas.",
        "Travel_Details": "Located in the heart of Kanchipuram town. Easily accessible from the railway station and bus stand.",
        "Name_EN": "Kanchipuram Ekambaranathar Temple"
    },
    {
        "District": "",
        "Details": "214. திருமேற்றளீஸ்வரர் - காஞ்சிபுரம். - 044 - 2722 2084.",
        "ID": "TN002",
        "God": "Thirumettralinathar / Othivurtheeswarar",
        "Goddess": "Thirumettrali Amman",
        "Sthala_Varalaru": "Worshipped by Lord Vishnu to attain his form. The temple is known as 'Mettrali' because it is situated in the western part of Kanchi. Saint Appar sang hymns here to be relieved of a curse.",
        "Travel_Details": "Located in Pillaiyarpalayam, Kanchipuram.",
        "Name_EN": "Kanchipuram Thirumettralinathar"
    },
    {
        "District": "",
        "Details": "215. ஓணகாந்தன்தளி - காஞ்சிபுரம். - 044 - 2722 2084.",
        "ID": "TN003",
        "God": "Onakantheeswarar",
        "Goddess": "Kamakshi (Common shrine in Kanchi)",
        "Sthala_Varalaru": "Built by two Asuras, Onan and Kanthan. Legend says Lord Shiva granted them wealth. Saint Sundarar sang here to receive gold from the Lord to celebrate a festival.",
        "Travel_Details": "Located near the Ekambaranathar temple in Kanchipuram.",
        "Name_EN": "Kanchipuram Onakantheeswarar"
    },
    {
        "District": "",
        "Details": "216. அனேகதங்காபதம் - காஞ்சிபுரம். - 044 - 2722 2084.",
        "ID": "TN004",
        "God": "Anekathangapadheeswarar",
        "Goddess": "Kamakshi Amman",
        "Sthala_Varalaru": "Worshipped by Lord Ganesha (Vinayaka). The name implies a site worshipped by 'many' (Aneka) groups of celestial beings. It is one of the oldest shrines in Kanchi.",
        "Travel_Details": "Located within the premises of the Kailasanathar temple area in Kanchipuram.",
        "Name_EN": "Kanchipuram Anekathangapadheeswarar"
    },
    {
        "District": "",
        "Details": "217. சத்யநாதர் - திருக்காலிமேடு. காஞ்சிபுரத்தில் இருந்து 2 கி.மீ., - 044 - 2722 2084.",
        "ID": "TN005",
        "God": "Sathyanathesar / Budheswarar",
        "Goddess": "Pramambigai",
        "Sthala_Varalaru": "Worshipped by the planet Mercury (Budha). Indra worshipped here to be relieved of a curse. Known for its 'Chandra Pushkarani' (sacred tank).",
        "Travel_Details": "2 km from the Kanchipuram bus stand at Thirukalismedu.",
        "Name_EN": "Kanchipuram Sathyanathesar"
    },
    {
        "District": "",
        "Details": "218. மல்லிகார்ஜுனர் - திருக்குரங்கணில்முட்டம். காஞ்சிபுரத்தில் இருந்து 10 கி.மீ., - 94448 30373.",
        "ID": "TN006",
        "God": "Valiswarar",
        "Goddess": "Iraiyarkon-Valaiyammai",
        "Sthala_Varalaru": "Named after the 'Monkey' (Vali), 'Squirrel', and 'Chameleon' that worshipped Shiva here. It is an ancient cave-temple built by the Pallavas.",
        "Travel_Details": "10 km from Kanchipuram, near Cheyyar.",
        "Name_EN": "Thirukkuranganilmuttam Valiswarar"
    },
    {
        "District": "",
        "Details": "219. வேதபுரீஸ்வரர் - செய்யார் (திருவோத்தூர்). காஞ்சிபுரத்தில் இருந்து 30 கி.மீ., - 04182 - 224 387.",
        "ID": "TN007",
        "God": "Vedapureeswarar",
        "Goddess": "Ilamulai Amman",
        "Sthala_Varalaru": "Site where Shiva taught the Vedas to the Rishis. Famous for Saint Sambandar's miracle of turning male palm trees into female fruit-bearing ones with his hymns.",
        "Travel_Details": "30 km south of Kanchipuram in the town of Cheyyar.",
        "Name_EN": "Cheyyar Vedapureeswarar"
    },
    {
        "District": "",
        "Details": "220. திருமாகறலீஸ்வரர் - திருமாகறல். காஞ்சிபுரத்தில் இருந்து 15 கி.மீ., - 044 - 3720 9535.",
        "ID": "TN008",
        "God": "Thirumakaraleeswarar",
        "Goddess": "Thirubuvana Nayagi",
        "Sthala_Varalaru": "Shiva appeared here to a king who found a golden 'Makara' (monitor lizard) in the forest. The Lingam has the texture of a monitor lizard's skin.",
        "Travel_Details": "15 km from Kanchipuram on the road to Uthiramerur.",
        "Name_EN": "Thirumakaral Thirumakaraleeswarar"
    },
    {
        "District": "",
        "Details": "221. வில்வநாதேஸ்வரர் - திருவல்லம். வேலூரில் இருந்து 12 கி.மீ., - 04172 - 266 388.",
        "ID": "TN009",
        "God": "Vilvanathesar",
        "Goddess": "Vallambigai",
        "Sthala_Varalaru": "Shiva protected a priest from an Asura here. The Nandi idol is unique as it faces away from the deity (towards the Asura to protect the temple).",
        "Travel_Details": "12 km from Vellore near Ranipet.",
        "Name_EN": "Thiruvallam Vilvanathesar"
    },
    {
        "District": "",
        "Details": "222. சிவலோகநாதர் - திருமாற்பேறு. காஞ்சிபுரத்தில் இருந்து 15 கி.மீ., - 044 - 2729 0011.",
        "ID": "TN010",
        "God": "Manikandeeswarar",
        "Goddess": "Anjanatchi Amman",
        "Sthala_Varalaru": "Where Lord Vishnu worshipped Shiva to obtain the Sudarshana Chakra. Vishnu offered his own eye as a flower, and Shiva gave him the disc (Maal-peru).",
        "Travel_Details": "15 km from Kanchipuram at Tirumalpur railway station area.",
        "Name_EN": "Tirumalpur Manikandeeswarar"
    },
    {
        "District": "",
        "Details": "223. ஜலநாதேஸ்வரர் - தக்கோலம். அரக்கோணத்தில் இருந்து 12 கி.மீ., - 04177 - 246 427, 94445 61691.",
        "ID": "TN011",
        "God": "Jalanatheswarar",
        "Goddess": "Giriraja Kannigambal",
        "Sthala_Varalaru": "Associated with the legend of Shiva consuming the Halahala poison. The Lingam here is always moist or surrounded by water, even in summer.",
        "Travel_Details": "12 km from Arakkonam and 30 km from Kanchipuram.",
        "Name_EN": "Thakkolam Jalanatheswarar"
    },
    {
        "District": "",
        "Details": "224. இளவேந்தீஸ்வரர் - இலம்பையன்கோட்டூர். அரக்கோணத்தில் இருந்து 20 கி.மீ., - 044 - 2760 0341.",
        "ID": "TN012",
        "God": "Chandrasekharar / Arambeswarar",
        "Goddess": "Kanakagujambigai",
        "Sthala_Varalaru": "Worshipped by the celestial nymph Rambha to regain her beauty. Saint Sambandar's palanquin was lifted here by Shiva's Ganas when he was tired.",
        "Travel_Details": "20 km from Arakkonam near Kadambathur.",
        "Name_EN": "Ilambayankottur Arambeswarar"
    },
    {
        "District": "",
        "Details": "225. வல்லீஸ்வரர் - திருவஊறல் (தக்கப்பாளையம்). அரக்கோணத்தில் இருந்து 12 கி.மீ., - 94445 61691.",
        "ID": "TN013",
        "God": "Tripuranthakar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "Shiva destroyed the Tripurams here. A sacred spring 'Thiruvural' flows perpetually from under the Nandi. Known for its rock-cut inscriptions.",
        "Travel_Details": "12 km from Arakkonam near Thakkolam.",
        "Name_EN": "Thiruoorhal Tripuranthakar"
    },
    {
        "District": "",
        "Details": "226. திரிபுராந்தகர் - கூவம். சென்னையில் இருந்து 50 கி.மீ., - 044 - 2760 0341.",
        "ID": "TN014",
        "God": "Thripuranthakar",
        "Goddess": "Thripurasundari",
        "Sthala_Varalaru": "As mentioned in 210. Shiva stayed here before destroying the Tripurams. The Lingam is white and changes to red when rain is expected.",
        "Travel_Details": "50 km from Chennai via Mappedu.",
        "Name_EN": "Cooum Thripuranthakar"
    },
    {
        "District": "",
        "Details": "227. மருந்தீஸ்வரர் - திருவிற்கோலம் (மப்பேடு). சென்னையில் இருந்து 45 கி.மீ., - 044 - 2760 0341.",
        "ID": "TN015",
        "God": "Theerthapaleeswarar",
        "Goddess": "Thripurasundari",
        "Sthala_Varalaru": "Where the wheel of Shiva's chariot broke (Mappedu) during the Tripuram war. It is a powerful 'Parihara Sthalam' for those seeking professional growth.",
        "Travel_Details": "45 km from Chennai near Kadambathur.",
        "Name_EN": "Mappedu Theerthapaleeswarar"
    },
    {
        "District": "",
        "Details": "228. மாசிலாமணீஸ்வரர் - திருவாலங்காடு. திருவள்ளூர்- அரக்கோணம் வழியில் 15 கி.மீ., - 044 - 2760 0341.",
        "ID": "TN016",
        "God": "Vadaranyeswarar",
        "Goddess": "Vandarkuzhali",
        "Sthala_Varalaru": "One of the 'Pancha Sabhais' (Rathna Sabhai - Gem Hall). Site of the cosmic dance contest between Shiva and Kali. Associated with Karaikkal Ammaiyar, who walked on her head here.",
        "Travel_Details": "15 km from Tiruvallur. Has a railway station on the Chennai-Arakkonam line.",
        "Name_EN": "Thiruvalangadu Vadaranyeswarar"
    },
    {
        "District": "",
        "Details": "229. உச்சிநாதர் - திருப்பாசூர். திருவள்ளூரில் இருந்து 5 கி.மீ., - 044 - 2766 0144.",
        "ID": "TN017",
        "God": "Vaseeswarar / Pasoor Nathar",
        "Goddess": "Pasupuranayagi / Thangathal Amman",
        "Sthala_Varalaru": "Located in a bamboo forest. Shiva was struck by an axe here when the locals were clearing the woods, and the scar is still visible on the Lingam.",
        "Travel_Details": "5 km west of Tiruvallur.",
        "Name_EN": "Thiruppasoor Vaseeswarar"
    },
    {
        "District": "",
        "Details": "230. கல்யாண பசுபதீஸ்வரர் - வெண்பாக்கம். திருவள்ளூரில் இருந்து 10 கி.மீ., - 044 - 2760 0341.",
        "ID": "TN018",
        "God": "Vaseeswarar",
        "Goddess": "Kalyanakumari",
        "Sthala_Varalaru": "Worshipped by Lord Brahma. The temple is famous for the 'Ven-Pa' (Tamil poems) composed by ancient poets in praise of the Lord here.",
        "Travel_Details": "10 km from Tiruvallur near Poondi.",
        "Name_EN": "Venpakkam Vaseeswarar"
    },
    {
        "District": "",
        "Details": "231. வீரட்டேஸ்வரர் - திருக்கள்ளில் (திருப்பாலைவனம்). பொன்னேரியில் இருந்து 20 கி.மீ., - 044 - 2797 2290.",
        "ID": "TN019",
        "God": "Sivalokanathar",
        "Goddess": "Kheeradhunnapana Nayagi",
        "Sthala_Varalaru": "Shiva gave 'Amrutham' (Nectar) to the Rishis here. Worshipped by Sage Agastya. The Goddess shrine is very popular for those seeking marital bliss.",
        "Travel_Details": "20 km from Ponneri near Minjur.",
        "Name_EN": "Thirukkallil Sivalokanathar"
    },
    {
        "District": "",
        "Details": "232. ஓத்தீஸ்வரர் - திருக்காளத்தி (காளஹஸ்தி). - 08578 - 222 235.",
        "ID": "TN020",
        "God": "Kalahasteeswarar",
        "Goddess": "Gnanaprasunambigai",
        "Sthala_Varalaru": "One of the 'Pancha Bhoota Sthalams' representing Air (Vayu). Legend of Kannappa Nayanar who offered his eyes to Shiva. Famous for Rahu-Ketu Sarpa Dosha Pariharam.",
        "Travel_Details": "Located in Srikalahasti, Andhra Pradesh. 38 km from Tirupati.",
        "Name_EN": "Srikalahasti Kalahasteeswarar"
    },
    {
        "District": "சென்னை மாவட்டம்",
        "Details": "233. கபாலீஸ்வரர் - மயிலாப்பூர். - 044 - 2464 1670.",
        "ID": "TN024",
        "God": "Kapaleeswarar",
        "Goddess": "Karpagambal",
        "Sthala_Varalaru": "Goddess Parvati worshipped Shiva as a peacock (Mayura) here. Famous for the miracle of Saint Sambandar bringing back a girl (Poompavai) from her ashes.",
        "Travel_Details": "Located in Mylapore, Chennai. Well connected by all modes of transport.",
        "Name_EN": "Mylapore Kapaleeswarar Temple"
    },
    {
        "District": "",
        "Details": "234. மருந்தீஸ்வரர் - திருவான்மியூர். - 044 - 2441 0477.",
        "ID": "TN025",
        "God": "Marundheeswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "Where Sage Valmiki worshipped Shiva and was taught the Ramayana. Known as a medicinal site (Marunthu) where Sage Agastya learned about herbs from Shiva.",
        "Travel_Details": "Located in Thiruvanmiyur, Chennai.",
        "Name_EN": "Thiruvanmiyur Marundheeswarar"
    },
    {
        "District": "",
        "Details": "235. அருணாச்சலேஸ்வரர் - திருவண்ணாமலை. - 04175 - 252 438.",
        "ID": "NN022",
        "God": "Arunachaleswarar",
        "Goddess": "Unnamalai Amman",
        "Sthala_Varalaru": "As mentioned in 188 and 208. The ultimate site for liberation. It is said that thinking of Annamalai grants salvation.",
        "Travel_Details": "In Tiruvannamalai town.",
        "Name_EN": "Tiruvannamalai Annamalaiyar"
    },
    {
        "District": "",
        "Details": "236. கச்சபேஸ்வரர் - திருக்கச்சூர். செங்கல்பட்டு- தாம்பரம் வழியில் 5 கி.மீ., - 044 - 2746 3514.",
        "ID": "TN026",
        "God": "Kachabeswarar",
        "Goddess": "Anjanatchi",
        "Sthala_Varalaru": "As mentioned in 211. Lord Vishnu (Turtle) sought Shiva's help to churn the ocean. There is a separate shrine for Shiva as 'Irulneeki' (Dispeller of darkness).",
        "Travel_Details": "5 km from Singaperumal Koil.",
        "Name_EN": "Thirukkachur Kachabeswarar"
    },
    {
        "District": "",
        "Details": "237. வேதகிரீஸ்வரர் - திருக்கழுக்குன்றம். செங்கல்பட்டில் இருந்து 15 கி.மீ., - 044 - 2744 6226.",
        "ID": "TN027",
        "God": "Vedagiriswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "As mentioned in 212. The eagles represent the eight Ashta-Vasus who were cursed. The tank 'Sangutheertham' is famous because a conch manifests in it once every 12 years.",
        "Travel_Details": "15 km from Chengalpattu.",
        "Name_EN": "Thirukazhukundram Vedagiriswarar"
    },
    {
        "District": "",
        "Details": "238. திருவாலீஸ்வரர் - திருவல்லம். வேலூரில் இருந்து 12 கி.மீ., - 04172 - 266 388.",
        "ID": "TN009",
        "God": "Vilvanathesar",
        "Goddess": "Vallambigai",
        "Sthala_Varalaru": "As mentioned in 221. Legend says a giant named Kanjan worshipped Shiva here. The temple is unique because the Nandi faces away from the main deity to guard the temple against the giant's arrival.",
        "Travel_Details": "12 km from Vellore, near the banks of the Ponnai river.",
        "Name_EN": "Thiruvallam Vilvanathesar"
    },
    {
        "District": "",
        "Details": "239. திருவுறல்நாதர் - தக்கப்பாளையம். அரக்கோணத்தில் இருந்து 12 கி.மீ., - 94445 61691.",
        "ID": "TN013",
        "God": "Tripuranthakar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "As mentioned in 225. Known for the 'perpetual spring' that flows from the mouth of Nandi. It is said that Shiva created this spring to quench the thirst of his Ganas.",
        "Travel_Details": "12 km from Arakkonam near Thakkolam.",
        "Name_EN": "Thiruvural Tripuranthakar"
    },
    {
        "District": "",
        "Details": "240. ஞானபுரீஸ்வரர் - திருவண்ணாமலை. - 04175 - 252 438.",
        "ID": "NN022",
        "God": "Arunachaleswarar",
        "Goddess": "Unnamalai Amman",
        "Sthala_Varalaru": "Representing the Fire element. The mountain 'Arunachala' is considered a manifestation of Shiva. It is the site where the ego of Brahma and Vishnu was subdued.",
        "Travel_Details": "Tiruvannamalai Town.",
        "Name_EN": "Tiruvannamalai Annamalaiyar"
    },
    {
        "District": "",
        "Details": "241. ஆதிபுரீஸ்வரர் - திருவொற்றியூர். - 044 - 2573 3710.",
        "ID": "TN022",
        "God": "Adhipureeswarar / Padampakkanathar",
        "Goddess": "Vadivudai Amman",
        "Sthala_Varalaru": "One of the most powerful 'Shakti' shrines (Vadivudai Amman). Shiva is said to have appeared here under an Athi (Fig) tree. Site where Saint Sundarar married Sangili Nachiyar.",
        "Travel_Details": "Located in North Chennai (Thiruvottiyur). Well connected by bus and suburban train.",
        "Name_EN": "Thiruvottiyur Adhipureeswarar"
    },
    {
        "District": "",
        "Details": "242. சிவகாமி உடனுறை முண்டீஸ்வரர் - திருமுல்லைவாயில். - 044 - 2637 6151.",
        "ID": "TN023",
        "God": "Masillamaniswarar",
        "Goddess": "Kodiyidai Amman",
        "Sthala_Varalaru": "Shiva protected King Thondaiman here. The Lingam is made of sand and is covered with a brass kavacham because it was once accidentally struck by the king's elephant chain.",
        "Travel_Details": "2 km from Thirumullaivoyal railway station, near Chennai.",
        "Name_EN": "Thirumullaivoyal Masillamaniswarar"
    },
    {
        "District": "",
        "Details": "243. மருந்தீஸ்வரர் - திருவான்மியூர். - 044 - 2441 0477.",
        "ID": "TN025",
        "God": "Marundheeswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "A center for healing. Legend says the Sun and Moon worshipped Shiva here to be cured of curses. The name 'Vaanmiyur' is derived from Sage Valmiki who attained enlightenment here.",
        "Travel_Details": "Thiruvanmiyur, South Chennai.",
        "Name_EN": "Thiruvanmiyur Marundheeswarar"
    },
    {
        "District": "",
        "Details": "244. ஆலாலசுந்தரர் - திருக்கழுக்குன்றம். - 044 - 2744 6226.",
        "ID": "TN027",
        "God": "Vedagiriswarar",
        "Goddess": "Tripurasundari",
        "Sthala_Varalaru": "Famous for the two kites (eagles) that have been visiting for centuries. They are believed to be sages performing penance. The temple spans both the hilltop and the town below.",
        "Travel_Details": "15 km from Chengalpattu.",
        "Name_EN": "Thirukazhukundram Vedagiriswarar"
    },
    {
        "District": "",
        "Details": "245. திரிபுராந்தகர் - கூவம். - 044 - 2760 0341.",
        "ID": "TN014",
        "God": "Thripuranthakar",
        "Goddess": "Thripurasundari",
        "Sthala_Varalaru": "The source of the Cooum river. It is believed that the tip of Shiva's arrow touched the ground here, creating a spring that became the river.",
        "Travel_Details": "50 km west of Chennai.",
        "Name_EN": "Cooum Thripuranthakar"
    },
    {
        "District": "",
        "Details": "246. கைலாசநாதர் - பெண்ணாகடம். - 04143 - 222 788.",
        "ID": "NN008",
        "God": "Pralayakaaleswarar",
        "Goddess": "Amirthambigai",
        "Sthala_Varalaru": "The Nandi here faces away from the sanctum. Legend says it turned to push back the waters of the Pralaya (Great Flood) to save the temple.",
        "Travel_Details": "15 km from Virudhachalam.",
        "Name_EN": "Pennagadam Pralayakaaleswarar"
    },
    {
        "District": "",
        "Details": "247. வேதபுரீஸ்வரர் - திருவோத்தூர் (செய்யார்). - 04182 - 224 387.",
        "ID": "TN007",
        "God": "Vedapureeswarar",
        "Goddess": "Ilamulai Amman",
        "Sthala_Varalaru": "Famous for the miracle where Saint Sambandar made 'barren' palm trees yield fruit. The palm tree is the Sthala Vriksham and is revered here.",
        "Travel_Details": "30 km from Kanchipuram.",
        "Name_EN": "Cheyyar Vedapureeswarar"
    },
    {
        "District": "மலை நாடு (கேரளம்)",
        "Details": "248. மகாதேவர் - திருவஞ்சைக்களம். திருச்சூரில் இருந்து 30 கி.மீ., - 0480 - 281 2061.",
        "ID": "ML001",
        "God": "Mahadevar",
        "Goddess": "Umammai",
        "Sthala_Varalaru": "The only Paadal Petra Sthalam in Kerala. Site where Saint Sundarar and Cheraman Perumal Nayanar ascended to Mount Kailash on a white elephant and a horse respectively.",
        "Travel_Details": "Located in Kodungallur near Thrissur. Well connected by Kerala State buses.",
        "Name_EN": "Thiruvanchikulam Mahadeva Temple"
    },
    {
        "District": "துளுவ நாடு (கர்நாடகா)",
        "Details": "249. மகாபலேஸ்வரர் - திருகோகர்ணம். மங்களூரில் இருந்து 230 கி.மீ., - 08386 - 257 141.",
        "ID": "TU001",
        "God": "Mahabaleswarar",
        "Goddess": "Thamira Gauri",
        "Sthala_Varalaru": "Contains the 'Atmalinga' that Ravana tried to pull from the ground. The Lingam is shaped like a cow's ear (Gokarna). Worshipping here is said to be as meritorious as Kashi.",
        "Travel_Details": "Located in Gokarna, North Karnataka. Accessible via rail (Konkan Railway) or bus from Mangalore/Goa.",
        "Name_EN": "Gokarna Mahabaleswarar Temple"
    },
    {
        "District": "வட நாடு",
        "Details": "250. விசுவநாதர் - காசி (வாரணாசி). - 0542 - 239 2685.",
        "ID": "VN001",
        "God": "Viswanathar",
        "Goddess": "Visalakshi",
        "Sthala_Varalaru": "The holiest of all Shiva temples. One of the 12 Jyotirlingas. It is believed that those who die here attain Moksha (liberation) directly from Shiva.",
        "Travel_Details": "Located on the banks of the Ganges in Varanasi, Uttar Pradesh. Major railway and air hub.",
        "Name_EN": "Kashi Vishwanath Temple"
    },
    {
        "District": "",
        "Details": "251. மல்லிகார்ஜுனர் - ஸ்ரீசைலம். ஐதராபாத்தில் இருந்து 230 கி.மீ., - 08524 - 287 006.",
        "ID": "VN002",
        "God": "Mallikarjunaswamy",
        "Goddess": "Bhramaramba",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas and one of the 18 Shakti Peethas. Worshipped by Adi Shankara. Shiva and Parvati appeared here to stay near their son Muruga.",
        "Travel_Details": "Located in Andhra Pradesh. Best reached via bus from Hyderabad or Kurnool.",
        "Name_EN": "Srisailam Mallikarjuna Swamy"
    },
    {
        "District": "",
        "Details": "252. கேதார்நாதர் - கேதார்நாத் (இமயமலை). - 01372 - 267 228.",
        "ID": "VN003",
        "God": "Kedarnath",
        "Goddess": "Parvati",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas and part of the Chardham circuit. The temple was built by the Pandavas. Shiva took the form of a bull (Nandi) and hid in the ground here.",
        "Travel_Details": "Located in Uttarakhand. Reached by a 16 km trek from Gaurikund. Open only from May to October.",
        "Name_EN": "Kedarnath Temple"
    },
    {
        "District": "",
        "Details": "253. பசுபதிநாதர் - நேபாளம் (காத்மாண்டு). - 00977 - 1 - 447 0167.",
        "ID": "VN004",
        "God": "Pasupathinath",
        "Goddess": "Vatsala Devi",
        "Sthala_Varalaru": "A UNESCO World Heritage site. Shiva is worshipped as the 'Lord of all Living Beings' (Pasu-pathi). The main Lingam has four faces facing the cardinal directions.",
        "Travel_Details": "Located in Kathmandu, Nepal. Near the international airport.",
        "Name_EN": "Kathmandu Pashupatinath Temple"
    },
    {
        "District": "",
        "Details": "254. கைலாசநாதர் - மௌனமலை (எல்லோரா). - 02437 - 244 114.",
        "ID": "VN005",
        "God": "Grishneshwar",
        "Goddess": "Grishneshwari",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Associated with the Ellora caves. The temple is an architectural wonder, carved out of a single massive rock from the top down.",
        "Travel_Details": "Located in Aurangabad (Sambhaji Nagar), Maharashtra.",
        "Name_EN": "Grishneshwar Jyotirlinga"
    },
    {
        "District": "",
        "Details": "255. உஜ்ஜயினி மகாகாளேஸ்வரர் - உஜ்ஜயினி. - 0734 - 255 0563.",
        "ID": "VN006",
        "God": "Mahakaleshwar",
        "Goddess": "Mahakali",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. The only Jyotirlinga that faces south (Dakshinamurti). Famous for its 'Bhasma Aarti' (offering of sacred ash).",
        "Travel_Details": "Located in Ujjain, Madhya Pradesh.",
        "Name_EN": "Ujjain Mahakaleshwar Temple"
    },
    {
        "District": "",
        "Details": "256. கோகர்ணேஸ்வரர் - கோகர்ணம். - 08386 - 257 141.",
        "ID": "TU001",
        "God": "Mahabaleswarar",
        "Goddess": "Thamira Gauri",
        "Sthala_Varalaru": "As mentioned in 249. This coastal temple is significant for 'Pithru Tharpanam' (ancestral rites). The deity is believed to bestow great strength (Mahabala).",
        "Travel_Details": "In Gokarna town.",
        "Name_EN": "Gokarna Mahabaleswarar"
    },
    {
        "District": "",
        "Details": "257. காளத்தீஸ்வரர் - காளஹஸ்தி. - 08578 - 222 235.",
        "ID": "TN020",
        "God": "Kalahasteeswarar",
        "Goddess": "Gnanaprasunambigai",
        "Sthala_Varalaru": "The lamp in the sanctum flickers even when there is no wind, symbolizing the presence of the Air element. Famous for the story of Kannappa who gave his eyes to the Lord.",
        "Travel_Details": "38 km from Tirupati, Andhra Pradesh.",
        "Name_EN": "Srikalahasti Temple"
    },
    {
        "District": "",
        "Details": "258. சோமநாதர் - சோமநாத் (குஜராத்). - 02876 - 231 200.",
        "ID": "VN007",
        "God": "Somanath",
        "Goddess": "Parvati",
        "Sthala_Varalaru": "The first of the 12 Jyotirlingas. Worshipped by the Moon (Soma) to regain his luster. The temple has been destroyed and rebuilt seven times throughout history.",
        "Travel_Details": "Located in Prabhas Patan, Gujarat. Nearest airport is Diu or Rajkot.",
        "Name_EN": "Somnath Jyotirlinga"
    },
    {
        "District": "",
        "Details": "259. ஓங்காரேஸ்வரர் - ஓங்காரேஸ்வரம். - 07289 - 273 343.",
        "ID": "VN008",
        "God": "Omkareshwar",
        "Goddess": "Amrithambigai",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. The island in the Narmada river where the temple is located is shaped like the sacred symbol 'OM'.",
        "Travel_Details": "Located in Madhya Pradesh. 80 km from Indore.",
        "Name_EN": "Omkareshwar Jyotirlinga"
    },
    {
        "District": "",
        "Details": "260. வைத்யநாதர் - தேவ்கர் (பீகார்). - 06432 - 232 245.",
        "ID": "VN009",
        "God": "Baidyanath",
        "Goddess": "Parvati",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Ravana offered his ten heads to Shiva here. Shiva acted as a 'Vaidya' (Doctor) to heal Ravana.",
        "Travel_Details": "Located in Deoghar, Jharkhand. Accessible via Jasidih railway station.",
        "Name_EN": "Baidyanath Jyotirlinga"
    },
    {
        "District": "",
        "Details": "261. பீமாசங்கர் - புனே. - 02133 - 230 001.",
        "ID": "VN010",
        "God": "Bhimashankar",
        "Goddess": "Kamalaja",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Source of the Bhima river. Shiva destroyed the demon Tripurasura here. Surrounded by a wildlife sanctuary.",
        "Travel_Details": "Located 110 km from Pune, Maharashtra.",
        "Name_EN": "Bhimashankar Jyotirlinga"
    },
    {
        "District": "",
        "Details": "262. திரியம்பகேஸ்வரர் - நாசிக். - 02594 - 233 215.",
        "ID": "VN011",
        "God": "Trimbakeshwar",
        "Goddess": "Ambal",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Source of the Godavari river. The Lingam is unique with three faces representing Brahma, Vishnu, and Shiva.",
        "Travel_Details": "Located 30 km from Nashik, Maharashtra.",
        "Name_EN": "Trimbakeshwar Jyotirlinga"
    },
    {
        "District": "",
        "Details": "263. இராமேஸ்வரம் - இராமேஸ்வரம். - 04573 - 221 223.",
        "ID": "PN008",
        "God": "Ramanathaswamy",
        "Goddess": "Parvathavarthini",
        "Sthala_Varalaru": "As mentioned in 170. This entry reinforces its status as one of the most sacred sites connecting South India with the Northern Jyotirlingas. It is the site where the bridge to Lanka was built.",
        "Travel_Details": "Rameswaram Island, Tamil Nadu.",
        "Name_EN": "Rameswaram Ramanathaswamy"
    },
    {
        "District": "ஈழ நாடு (இலங்கை)",
        "Details": "264. திருக்கேதீஸ்வரர் - திருக்கேதீஸ்வரம். - 0094 - 23 222 2345.",
        "ID": "EZ001",
        "God": "Ketheeswarar",
        "Goddess": "Gowri Amman",
        "Sthala_Varalaru": "One of the five ancient Shiva temples in Sri Lanka. Worshipped by the planet Ketu and the celestial architect Mayan (father-in-law of Ravana). Located near the historic port of Mantai.",
        "Travel_Details": "Located in Mannar, Northern Province, Sri Lanka.",
        "Name_EN": "Thirukketheeswaram Temple"
    },
    {
        "District": "",
        "Details": "265. கோணேஸ்வரர் - திரிகோணமலை. - 0094 - 26 222 2234.",
        "ID": "EZ002",
        "God": "Koneswarar / Thatchana-Kailasam",
        "Goddess": "Maadhumai Amman",
        "Sthala_Varalaru": "Known as the 'Kailash of the South'. Legend says Ravana attempted to lift the mountain, causing Shiva to press his toe, creating the 'Ravana Vettu' (Ravana's cut) in the rock. The temple sits on a cliff overlooking the Indian Ocean.",
        "Travel_Details": "Located inside Fort Frederick in Trincomalee, Sri Lanka.",
        "Name_EN": "Trincomalee Koneswarar Temple"
    },
    {
        "District": "",
        "Details": "266. மல்லிகார்ஜுனர் - ஸ்ரீசைலம். - 08524 - 287 006.",
        "ID": "VN002",
        "God": "Mallikarjunaswamy",
        "Goddess": "Bhramaramba",
        "Sthala_Varalaru": "A repeat entry emphasizing its role as a bridge between the South and North. It is the only place where a Jyotirlinga and a Shakti Peetha (Goddess Bhramaramba) are found in the same complex.",
        "Travel_Details": "Kurnool District, Andhra Pradesh.",
        "Name_EN": "Srisailam Mallikarjuna Swamy"
    },
    {
        "District": "",
        "Details": "267. மகாபலேஸ்வரர் - திருகோகர்ணம். - 08386 - 257 141.",
        "ID": "TU001",
        "God": "Mahabaleswarar",
        "Goddess": "Thamira Gauri",
        "Sthala_Varalaru": "As mentioned in 249. The 'Atmalinga' here is considered the most powerful soul-lingam of Shiva. Ganesha appeared as a small boy to prevent Ravana from taking it to Lanka.",
        "Travel_Details": "Gokarna, Karnataka.",
        "Name_EN": "Gokarna Mahabaleswarar"
    },
    {
        "District": "",
        "Details": "268. காளத்தீஸ்வரர் - காளஹஸ்தி. - 08578 - 222 235.",
        "ID": "TN020",
        "God": "Kalahasteeswarar",
        "Goddess": "Gnanaprasunambigai",
        "Sthala_Varalaru": "The site of the 'Vayu' (Air) element. The deity is worshipped as having been guarded by a Spider (Sri), a Snake (Kala), and an Elephant (Hasti), giving the town its name.",
        "Travel_Details": "Srikalahasti, Andhra Pradesh.",
        "Name_EN": "Srikalahasti Temple"
    },
    {
        "District": "",
        "Details": "269. விசுவநாதர் - காசி. - 0542 - 239 2685.",
        "ID": "VN001",
        "God": "Viswanathar",
        "Goddess": "Visalakshi",
        "Sthala_Varalaru": "The eternal city. It is said that Lord Shiva recites the Taraka Mantra in the ears of those who die here to grant them liberation.",
        "Travel_Details": "Varanasi, Uttar Pradesh.",
        "Name_EN": "Kashi Vishwanath"
    },
    {
        "District": "",
        "Details": "270. கேதார்நாதர் - கேதார்நாத். - 01372 - 267 228.",
        "ID": "VN003",
        "God": "Kedarnath",
        "Goddess": "Parvati",
        "Sthala_Varalaru": "Located at 11,755 ft altitude. The Lingam is a natural rock formation shaped like a hump. The Pandavas are said to have built the original temple to seek forgiveness.",
        "Travel_Details": "Garhwal Himalayas, Uttarakhand.",
        "Name_EN": "Kedarnath Jyotirlinga"
    },
    {
        "District": "",
        "Details": "271. பசுபதிநாதர் - நேபாளம். - 00977 - 1 - 447 0167.",
        "ID": "VN004",
        "God": "Pasupathinath",
        "Goddess": "Vatsala Devi",
        "Sthala_Varalaru": "Located on the banks of the Bagmati river. The gold-roofed temple is a masterpiece of Pagoda architecture. Worshipped by millions of Hindus globally.",
        "Travel_Details": "Kathmandu, Nepal.",
        "Name_EN": "Pashupatinath Temple"
    },
    {
        "District": "",
        "Details": "272. பருப்பதம் - ஸ்ரீசைலம். - 08524 - 287 006.",
        "ID": "VN002",
        "God": "Mallikarjunaswamy",
        "Goddess": "Bhramaramba",
        "Sthala_Varalaru": "Referred to in Tamil literature as 'Paruppatham' or 'Srigiri'. It is one of the most prominent mountains mentioned by the Saivite saints in their hymns.",
        "Travel_Details": "Srisailam, Andhra Pradesh.",
        "Name_EN": "Paruppatham Mallikarjuna Swamy"
    },
    {
        "District": "",
        "Details": "273. இந்திரநீல பருப்பதம் - நேபாளம். - 00977 - 1 - 447 0167.",
        "ID": "VN004",
        "God": "Pasupathinath",
        "Goddess": "Vatsala Devi",
        "Sthala_Varalaru": "In Tamil hymns, Pashupatinath is often identified as Indraneela Paruppatham. It represents the sapphire-colored Lord who resides in the snowy mountains.",
        "Travel_Details": "Kathmandu, Nepal.",
        "Name_EN": "Indraneela Paruppatham"
    },
    {
        "District": "",
        "Details": "274. கோணேஸ்வரர் - திரிகோணமலை. - 0094 - 26 222 2234.",
        "ID": "EZ002",
        "God": "Koneswarar",
        "Goddess": "Maadhumai Amman",
        "Sthala_Varalaru": "The 'Temple of a Thousand Pillars' was once one of the grandest in the world before its partial destruction in the 17th century. It remains a pinnacle of Tamil Hindu heritage in Sri Lanka.",
        "Travel_Details": "Trincomalee, Sri Lanka.",
        "Name_EN": "Trincomalee Koneswarar"
    },
    {
        "District": "பிறசேர்க்கை",
        "Details": "275. அகஸ்தீஸ்வரர் - கிளியனூர். திண்டிவனம்- புதுச்சேரி வழியில் 18 கி.மீ., - 94427 86709.",
        "ID": "NN023",
        "God": "Agastheeswarar",
        "Goddess": "Akilandeswari",
        "Sthala_Varalaru": "Nearly 1500 years old, built by Chola kings. Named 'Kiliyanur' after the Chola lineage (Killi). Worshipped by Sage Agasthya and Sage Sukhabrahma, who sought relief from stomach pain. Features unique adjacent shrines for Krodhana Bhairavar and Kaala Bhairavar. Adisesha is also believed to have worshipped here.",
        "Travel_Details": "Located in Kiliyanur, 18 km from Tindivanam on the Pondicherry route (NH66).",
        "Name_EN": "Kiliyanur Agastheeswarar Temple"
    },
	{
        "District": "",
        "Details": "276. புண்ணியகோடியப்பர் - திருவிடைவாசல். தஞ்சாவூர்-திருவாரூர் ரோட்டில் (கொரடாச்சேரி வழி) 45 கி.மீ., - 94433 32853, 04366-232 853.",
        "ID": "SCN128",
        "God": "புண்ணியகோடியப்பர் (Punniyakodiyappar)",
        "Goddess": "அபயகராம்பிகை (Abhayakarambikai)",
        "Sthala_Varalaru": "திருஞானசம்பந்தரால் பாடப்பெற்ற தலம். ஒருமுறை இப்பகுதியில் கடும் பஞ்சம் ஏற்பட்டபோது, இறைவன் அடியவர்களுக்குப் பசி தீர்க்கப் பொற்காசுகள் வழங்கியதாக வரலாறு கூறுகிறது. மேலும், எமன் இத்தல இறைவனை வழிபட்டு தனது பாவங்களை நீக்கிக்கொண்டதால் இது ஒரு சிறந்த பாவ விமோசனத் தலமாகக் கருதப்படுகிறது.",
        "Travel_Details": "திருவாரூர் மாவட்டம், கொரடாச்சேரிக்கு அருகிலுள்ள திருவிடைவாசல் கிராமத்தில் அமைந்துள்ளது. தஞ்சாவூர் - திருவாரூர் சாலையில் கொரடாச்சேரியிலிருந்து சுமார் 6 கி.மீ. தொலைவில் இக்கோயில் உள்ளது.",
        "Name_EN": "Thiruvidaivasal Punniyakodiyappar Temple"
    }
];
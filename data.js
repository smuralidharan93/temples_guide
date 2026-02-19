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
        "Sthala_Varalaru": "Fire (Agni) Sthalam of the Pancha Bhoota Sthalams. Site where Shiva appeared as an infinite column of light (Lingothbhava) to Brahma and Vishnu. Merely thinking of Arunachala grants liberation (Smaranath Mukthi). Famous for the Karthigai Deepam festival. Home to the legendary Ramana Maharishi and Saint Arunagirinathar.",
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
        "Name_EN": "Tirunelvennai Neyvanai Swarnakateswarar"
    },
    {
        "District": "",
        "Details": "51. வீரட்டேஸ்வரர் - கீழையூர். (திருக்கோவிலூர் அருகில்) விழுப்புரத்திலிருந்து 36 கி.மீ., - 93456 60711.",
        "ID": "NN011",
        "God": "Veeratteswarar",
        "Goddess": "Shivanandavalli",
        "Sthala_Varalaru": "One of the 'Ashta Veeratta' temples where Shiva destroyed the demon Andhakasura. Birthplace of King Raja Raja Chola. It is where the first three Alwars (Poigai, Bhoothath, and Pey Alwar) had their divine encounter. Features a Vinayaka worshipped by the poetess Avvaiyar.",
        "Travel_Details": "Located in Keezhayur region of Tirukkovilur town. Southern bank of River Pennaru. Railway station nearby on Tiruvannamalai-Villupuram line.",
        "Name_EN": "Tirukkovilur Keezhayur Veeratteswarar"
    },
    {
        "District": "",
        "Details": "52. அதுல்யநாதேஸ்வரர் - அறகண்டநல்லூர். விழுப்புரத்திலிருந்து 35 கி.மீ., - 99651 44849.",
        "ID": "NN012",
        "God": "Athulyanathar / Oppillaadha Eswarar",
        "Goddess": "Azhagiya Ponnammai / Soundarya Kanakaambikai",
        "Sthala_Varalaru": "Located on a massive rock. Legend says the Pandavas stayed here during their exile in cave-like structures. Bheema created the 'Bheema Theertham' for Draupadi. Devotees worship here to regain lost possessions and kingdom, just as the Pandavas were blessed with the restoration of their kingdom.",
        "Travel_Details": "Located in Arakandanallur, on the north bank of River Pennai. 35 km from Villupuram toward Tirukkovilur.",
        "Name_EN": "TiruAraiyaninallur Arakandanallur Athulyanathar"
    },
    {
        "District": "",
        "Details": "53. மருந்தீசர் - டி. இடையாறு. விழுப்புரத்திலிருந்து 36 கி.மீ., - 04146 - 216 045, 94424 23919.",
        "ID": "NN013",
        "God": "Idaiyattrunathar / Marundeeesar",
        "Goddess": "Sittridai Nayaki",
        "Sthala_Varalaru": "The God and Goddess face each other here, which is believed to remove marriage obstacles. Sage Sukhabrahma (parrot-faced) was liberated from a curse after penance under the sacred Marutha tree. Sun rays fall directly on the deity on Masi 15-16. Muruga is called 'Kaliyuga Rama Pillaiyar'.",
        "Travel_Details": "Located in T. Edayar. 36 km from Villupuram on the Tirukkovilur-Arasur road (SH 68). Near the junction of two rivers.",
        "Name_EN": "Tiruvidaiyaru T. Edayar Idaiyattrunathar"
    },
    {
        "District": "",
        "Details": "54. கிருபாபுரீஸ்வரர் - திருவெண்ணெய்நல்லூர். விழுப்புரத்திலிருந்து 22 கி.மீ., - 93456 60711.",
        "ID": "NN014",
        "God": "Krupapureeswarar / Thaduthu Aatkondanathar",
        "Goddess": "Verkkanni Ammai / Mangalaambikai",
        "Sthala_Varalaru": "Site where Shiva appeared as an old man to halt Saint Sundarar's marriage, claiming him as a slave based on an ancestral document. 'Vennai' (butter) refers to Parvati's penance in a fort of butter to cool Shiva down after he swallowed poison during Samudra Manthan.",
        "Travel_Details": "Located in Tiruvennainallur, 22 km from Villupuram on the southern bank of River Pennai. Accessible via Panruti-Arasur route.",
        "Name_EN": "Tiruvennainallur Krupapureeswarar"
    },
    {
        "District": "",
        "Details": "55. சிவலோகநாதர் - கிராமம். விழுப்புரத்திலிருந்து அரசூர் வழி 14 கி.மீ. - 04146 - 206 700.",
        "ID": "NN019",
        "God": "Shivaloka Nathar / Mundeeswarar",
        "Goddess": "Soundara Nayaki / Kaanarkuzhali Ammai",
        "Sthala_Varalaru": "Site where King Chokkalingam discovered a divine lotus in a pond. Features a unique depiction of Dakshinamurthy seated on Nandi. One of the sacred places where Saint Tirunavukkarasar performed 'Uzhavarapani' service. Home to the Brahma Theertham.",
        "Travel_Details": "Located in Gramam village, 16 km from Villupuram on the Arasur-Ulundurpet route. Easily accessible by bus from Villupuram.",
        "Name_EN": "Tirumundeeswaram Gramam Shivaloka Nathar"
    },
    {
        "District": "",
        "Details": "56. பனங்காட்டீஸ்வரர் - பனையபுரம். விழுப்புரத்திலிருந்து 12 கி.மீ., - 99420 56781.",
        "ID": "NN020",
        "God": "Panankatteesar",
        "Goddess": "Sathyambikai / Puravammai",
        "Sthala_Varalaru": "Surya (Sun God) performed penance here to regain his radiance after the Daksha Yajna. Sun rays fall directly on the deity and goddess during the first seven days of Chithirai. One of the few temples with the palm tree (Panai) as sthala vruksham. Features a rare sculpture of Saint Thiruneelakandar.",
        "Travel_Details": "Located in Panayapuram, 13 km from Villupuram on the Tirukkanur-Pondicherry road. Close to Panayapuram Kootu Road.",
        "Name_EN": "Puravar Panankattur Panayapuram Panankatteesar"
    },
    {
        "District": "",
        "Details": "57. அபிராமேஸ்வரர் - திருவாமத்தூர். விழுப்புரம் -செஞ்சி ரோட்டில் 6 கி.மீ., - 04146 - 223 379, 98430 66252.",
        "ID": "NN021",
        "God": "Aamatheeswarar / Abhirameswarar",
        "Goddess": "Muthaambikai",
        "Sthala_Varalaru": "Named 'Aamathur' because Kamadhenu and other cows (Aa) worshipped Shiva here to obtain protective horns. Sage Bhringi was cursed by Parvati to become the Vanni tree here. Features two separate temples: one for the God (East-facing) and one for the Goddess (West-facing). A unique sculpture shows Vinayaka performing Shiva Puja.",
        "Travel_Details": "Located in Thiruvamaathur, 7 km NW of Villupuram along the Tiruvannamalai Road. Easily accessible by town bus.",
        "Name_EN": "Tiru Aamaathur Abhirameswarar"
    },
    {
        "District": "",
        "Details": "58. சந்திரமவுலீஸ்வரர் - திருவக்கரை. திண்டிவனத்திலிருந்து 22 கி.மீ., - 0413 - 268 8949.",
        "ID": "TN030",
        "God": "Chandrasekarar",
        "Goddess": "Vadivambikai / Vakkara Kali",
        "Sthala_Varalaru": "Famous for the Vakkara Kali shrine who vanquished the demon Vakkrasura. The presiding deity has a triple-faced Lingam (Trimurthy Lingam). Various elements are 'Vakra' (twisted/misaligned), including the Nataraja and the Nandi. Vishnu is worshipped here as Varadharaja Perumal with his Prayoga Chakra.",
        "Travel_Details": "22 km from Tindivanam. Located on the banks of Varaha river. Popularly known as Vakkarakali temple.",
        "Name_EN": "Tiruvakkarai Chandrasekarar Vakkara Kali"
    },
    {
        "District": "",
        "Details": "59. அரசலீஸ்வரர் - ஒழிந்தியாம்பட்டு. புதுச்சேரி- திண்டிவனம்- வழியில் 13 கி.மீ., 04147 - 235 472.",
        "ID": "TN031",
        "God": "Arisilinathar",
        "Goddess": "Periya Nayaki",
        "Sthala_Varalaru": "Named 'Arasili' (under Peepal tree). Shiva appeared as a Swayambhu Lingam under a Peepal tree for Sage Vamadeva. The Lingam has a wound mark from an arrow shot by a King who thought Shiva was a deer. Parikara Sthalam for those born under Poosam (Pushya) star. Features a unique Dakshinamurthy with Muyalakan looking left.",
        "Travel_Details": "13 km on the Puducherry-Tindivanam route. Located in Ozhinthiampattu village.",
        "Name_EN": "Tiruarisili Ozhinthiampattu Arisilinathar"
    },
    {
        "District": "",
        "Details": "60. மகாகாளேஸ்வரர் - இரும்பை. புதுச்சேரி - திண்டிவனம் வழியில் 12 கி.மீ., - 0413 - 268 8943, 98435 26601.",
        "ID": "TN032",
        "God": "Makaleshwarar / Maha-Kaaleshwar",
        "Goddess": "Kuyil-Mozhi Nayaki",
        "Sthala_Varalaru": "One of the three 'Maakaalam' temples in India. Named after Sage Maha Kaalar who worshipped here. Famous for the legend of Kaduveli Siddhar whose internal distress caused the Lingam to explode and reunite; the Lingam is split into three and held together by a copper plate. Goddess Parvati performed penance here to lift Brahmahatti Dosha.",
        "Travel_Details": "12 km on the Puducherry-Tindivanam route. Located in Irumbai village. 10 km from Auroville.",
        "Name_EN": "Irumbai Maakaalam Makaleshwarar"
    },
    {
        "District": "நாமக்கல் மாவட்டம்",
        "Details": "61. அர்த்தநாரீஸ்வரர் - திருச்செங்கோடு. நாமக்கல்லில் இருந்து 30 கி.மீ., - 04288 - 255 925, 93642 29181.",
        "ID": "KNT002",
        "God": "Ardhanareeswarar / Mathoru Baagar",
        "Goddess": "Bhagampiriyal",
        "Sthala_Varalaru": "A unique Swayambhu form where Lord Shiva and Goddess Shakti are seen as one (half-man, half-woman). The temple is atop a hill (1900ft) with 1250 steps. Features the 'Deva Theertham' spring which never dries. Goddess Shakti meditated here to become part of Shiva.",
        "Travel_Details": "18 km from Erode, 32 km from Namakkal. Accessible by road to the hill top or via 1250 steps.",
        "Name_EN": "Tiruchengodu Ardhanareeswarar"
    },
    {
        "District": "ஈரோடு மாவட்டம்",
        "Details": "62. சங்கமேஸ்வரர் - பவானி. ஈரோட்டில் இருந்து 15 கி.மீ., - 04256 - 230 192, 98432 48588.",
        "ID": "KNT001",
        "God": "Sangameshwarar",
        "Goddess": "Vedanayaki / Vedambikai",
        "Sthala_Varalaru": "Situated at Kooduthurai, the confluence of three rivers: Bhavani, Cauvery, and the invisible Amrutha. Famous for the ivory swing donated by British Collector William Garo, who worshipped the goddess through three holes in the wall. Sage Vishwamithra installed a Lingam here.",
        "Travel_Details": "15 km from Erode. Located at the holy confluence (Sangamam).",
        "Name_EN": "Bhavani Sangameshwarar"
    },
    {
        "District": "",
        "Details": "63. மகுடேஸ்வரர், - கொடுமுடி,ஈரோடு - கரூர் ரோட்டில் 47 கி.மீ., - 04204 - 222 375.",
        "ID": "KNT005",
        "God": "Kodumudinathar / Magudeshwarar",
        "Goddess": "Soudambikai / Vadivudainayagi",
        "Sthala_Varalaru": "A 'Trinity Sthalam' with separate shrines for Brahma, Vishnu, and Shiva. Features a 2000-year-old Vanni tree considered as Brahma's 4th face (it has thorns on only one side). Sage Agastya's fingerprints are seen on the Lingam. It is a famous 'Kalyana Sthalam' on the banks of Cauvery.",
        "Travel_Details": "40 km from Erode. Very close to Kodumudi Railway Station.",
        "Name_EN": "Kodumudi Kodumudinathar"
    },
    {
        "District": "திருப்பூர் மாவட்டம்",
        "Details": "64. அவிநாசி ஈஸ்வரர் - அவிநாசி. திருப்பூர்-கோவை ரோட்டில் 13 கி.மீ., - 04296 - 273 113, 94431 39503.",
        "ID": "KNT006",
        "God": "Avinasiappar / Avinasi Lingeswarar",
        "Goddess": "Karunambikai",
        "Sthala_Varalaru": "One of the major Kongu Shivasthalams. Sundarar miraculously brought back a child swallowed by a crocodile here. Features a unique seven-tiered Rajagopuram and one of the largest temple cars in Tamil Nadu. Lord Brahma and Indra's elephant Airavata are said to have worshipped here.",
        "Travel_Details": "40 km from Coimbatore, 14 km from Tirupur. Located on the main highway.",
        "Name_EN": "Avinasi Avinasiappar"
    },
    {
        "District": "",
        "Details": "65. திருமுருகநாதர் - திருமுருகன்பூண்டி. திருப்பூர்- கோவை ரோட்டில் 8 கி.மீ., கோவையில் இருந்து 43 கி.மீ., - 04296 - 273 507.",
        "ID": "KNT004",
        "God": "Muruganathar / Thirumuruga Nathar",
        "Goddess": "Aavudainayaki / Muyangu Poonmulai Valliammai",
        "Sthala_Varalaru": "Lord Muruga installed this Lingam to overcome the sin (Brahmahatthi dosham) after slaying Soorapadman. Sundarar was tested and robbed here by Shiva's Ganas as a test of devotion. The three theerthams here are believed to cure mental illnesses. Unique temple without a traditional Gopuram entrance.",
        "Travel_Details": "5 km from Avinasi on the Tiruppur-Avinasi road.",
        "Name_EN": "Tirumurugapoondi Muruganathar"
    },
    {
        "District": "திருச்சி மாவட்டம்",
        "Details": "66. சத்தியவாகீஸ்வரர் - அன்பில். திருச்சியிலிருந்து 30 கி.மீ., - 0431 - 254 4927.",
        "ID": "NCN57",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "67. ஆம்ரவனேஸ்வரர் - மாந்துறை. திருச்சியிலிருந்து லால்குடி வழி 15 கி.மீ., - 99427 40062, 94866 40260.",
        "ID": "NCN58",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "68. ஆதிமூலேஸ்வரர் - திருப்பாற்றுறை.திருச்சியில் இருந்து திருவானைக்காவல் வழி கல்லணைரோட்டில் 13 கி.மீ. - 0431 - 246 0455.",
        "ID": "NCN59",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "69. ஜம்புகேஸ்வரர் - திருவானைக்காவல். திருச்சியில் இருந்து 8 கி.மீ., - 0431 - 223 0257.",
        "ID": "NCN60",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "70. ஞீலிவனேஸ்வரர் - திருப்பைஞ்ஞீலி. திருச்சியில் இருந்து 23 கி.மீ., - 0431 - 256 0813.",
        "ID": "NCN61",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "71. மாற்றுரைவரதர் - திருவாசி. திருச்சி- சேலம் ரோட்டில் 13 கி.மீ., - 94436 - 92138.",
        "ID": "NCN62",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "72. மரகதாசலேஸ்வரர் - ஈங்கோய்மலை.திருச்சியில் இருந்து முசிறி வழியாக 50 கி.மீ., - 04326 - 262 744, 94439 50031.",
        "ID": "NCN63",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "73. பராய்த்துறைநாதர் - திருப்பராய்த்துறை. திருச்சி- கரூர் ரோட்டில்15 கி.மீ. - 99408 43571.",
        "ID": "SCN003",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "74. உஜ்ஜீவநாதர் - உய்யக்கொண்டான் திருமலை. திருச்சி - வயலூர் வழியில் 7 கி.மீ., - 94431 50332, 94436 50493.",
        "ID": "SCN004",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "75. பஞ்சவர்ணேஸ்வரர் - உறையூர்.திருச்சி கடைவீதி பஸ் ஸ்டாப் அருகில் - 0431 - 276 8546, 94439 19091.",
        "ID": "SCN005",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "76. தாயுமானவர் - திருச்சி. மலைக்கோட்டை - 0431 - 270 4621, 271 0484.",
        "ID": "SCN006",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "77. எறும்பீஸ்வரர் - திருவெறும்பூர்.திருச்சி- தஞ்சாவூர் ரோட்டில் 10 கி.மீ. - 98429 57568.",
        "ID": "SCN007",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "78. திருநெடுங்களநாதர் - திருநெடுங்குளம். திருச்சி-துவாக்குடியிலிருந்து 3 கி.மீ. - 0431 - 252 0126.",
        "ID": "SCN008",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "அரியலூர் மாவட்டம்",
        "Details": "79. வைத்தியநாதசுவாமி - திருமழபாடி. அரியலூரிலிருந்து 28 கி.மீ., - 04329 -292 890, 97862 05278.",
        "ID": "NCN54",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "80. ஆலந்துறையார் - கீழப்பழுவூர். அரியலூர்- தஞ்சாவூர் வழியில் 12 கி.மீ. - 99438 82368.",
        "ID": "NCN55",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "கரூர் மாவட்டம்",
        "Details": "81. ரத்தினகிரீஸ்வரர் - அய்யர் மலை. கரூரில் இருந்து குளித்தலை வழியாக 40 கி.மீ., - 04323 - 245 522.",
        "ID": "SCN001",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "82. கடம்பவனேஸ்வரர் - குளித்தலை. கரூரில் இருந்து 35 கி.மீ., - 04323 - 225 228",
        "ID": "SCN002",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "83. கல்யாண விகிர்தீஸ்வரர் - வெஞ்சமாங்கூடலூர்.கரூரிலிருந்து ஆறுரோடு பிரிவு வழியாக 21 கி.மீ., - 04324 - 262 010, 99435 27792.",
        "ID": "KNT007",
        "God": "Vigirthanatheswarar",
        "Goddess": "Vigirtheswari",
        "Sthala_Varalaru": "Named after hunter King Venjan. Shiva gave gold to Sundarar by pledging his 'sons' to Parvathi in disguise. The temple was once completely destroyed by floods and later reconstructed using salvaged stones. Features a traditional Kongu deepasthambham (lamp-post).",
        "Travel_Details": "16 km South-West from Karur on the way to Aravankurichi, on the bank of Kudaganaaru.",
        "Name_EN": "Venjamaakudal Vigirthanatheswarar"
    },
    {
        "District": "",
        "Details": "84. பசுபதீஸ்வரர் - கரூர் - 04324 - 262 010.",
        "ID": "KNT003",
        "God": "Pasupathinathar / Aanilaiappar",
        "Goddess": "Sundaravalli / Alankaravalli",
        "Sthala_Varalaru": "Ancient temple where Kamadhenu (divine cow) worshipped the Lingam; a hoof dent is still visible. Birthplace of Eripatha Nayanar. The Swayambhu Lingam appears slightly tilted. Sun's rays fall on the Lingam in the month of Panguni. Features a magnificent 100-pillared hall.",
        "Travel_Details": "Located in Karur town, 70 km from Erode and 75 km from Trichy.",
        "Name_EN": "Karur Pasupathinathar"
    },
    {
        "District": "புதுக்கோட்டை மாவட்டம்",
        "Details": "85. விருத்தபுரீஸ்வரர் - அறந்தாங்கியிலிருந்து 42 கி.மீ., - 04371 - 239 212",
        "ID": "PNT007",
        "God": "Pazhampathinathar / Viruthapureeswarar",
        "Goddess": "Karunai Nayaki",
        "Sthala_Varalaru": "Known for the largest Aavudayar and Lingam in Tamil Nadu, believed to have inspired the Brihadeeswara Temple by Raja Raja Chola. Brahma worshipped here to regain his creative powers (Chatur-Mukha Lingam). Means 'Ancient Place' (Pazhampathi).",
        "Travel_Details": "Located in Tiruppunavasal (Tiru-Punavayil), 25 km South of Avudaiyarkoil. Coastal location.",
        "Name_EN": "Tiru-Punavayil Tiruppunavasal Pazhampathinathar"
    },
    {
        "District": "தஞ்சாவூர் மாவட்டம்",
        "Details": "86. பசுபதீஸ்வரர் - பந்தநல்லூர்.கும்பகோணம்- சென்னை ரோட்டில் 30 கி.மீ., - 98657 78045. 0435 - 2450 595.",
        "ID": "NCN35",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "87. அக்னீஸ்வரர் - கஞ்சனூர். கும்பகோணம்- மயிலாடுதுறை - 0435 - 247 3737.",
        "ID": "NCN36",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "88. கோடீஸ்வரர் - திருக்கோடிக்காவல்.கும்பகோணத்திலிருந்து 18 கி.மீ., - 94866 70043.",
        "ID": "NCN37",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "89. பிராணநாதேஸ்வரர் - திருமங்கலக்குடி. கும்பகோணத்தில் இருந்து 17 கி.மீ., (சூரியனார்கோவில் அருகில்) - 0435 - 247 0480.",
        "ID": "NCN38",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "90. அருணஜடேஸ்வரர் - திருப்பனந்தாள். கும்பகோணம்- சென்னை ரோட்டில் 15 கி.மீ., - 94431 16322, 0435 - 245 6047.",
        "ID": "NCN39",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "91. பாலுகந்தநாதர் - திருவாய்பாடி. கும்பகோணம்-சென்னை வழியில் 18 கி.மீ., - 94421 67104.",
        "ID": "NCN40",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "92. சத்தியகிரீஸ்வரர் - சேங்கனூர். கும்பகோணம்-சென்னை ரோட்டில் 16 கி.மீ., (திருப்பனந்தாள் அருகில்) - 93459 82373, 0435 - 2457 459.",
        "ID": "NCN41",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "93. யோகநந்தீஸ்வரர் - திருவிசநல்லூர். கும்பகோணம்- சூரியனார்கோவில் ரோடு (வேப்பத்தூர் வழி)8 கி.மீ.,. - 0435 - 200 0679, 94447 47142.",
        "ID": "NCN43",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "94. கற்கடேஸ்வரர் - திருந்துதேவன்குடி. கும்பகோணம் - சூரியனார்கோவில் வழியில் 11 கி.மீ., - 99940 15871, 0435 - 200 0240.",
        "ID": "NCN42",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "95. கோடீஸ்வரர் - கொட்டையூர். கும்பகோணம்- திருவையாறு ரோட்டில் 5 கி.மீ., - 0435 - 245 4421.",
        "ID": "NCN44",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "96. எழுத்தறிநாதர் - இன்னம்பூர்.கும்பகோணம்- சுவாமிமலை ரோட்டில் புளியஞ்சேரியிலிருந்து 2 கி.மீ., - 96558 64958, 0435 - 200 0157.",
        "ID": "NCN45",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "97. சாட்சி நாதேஸ்வரர் - திருப்புறம்பியம்.கும்பகோணத்திலிருந்து 8 கி.மீ. (இன்னம்பூர் அருகில்) - 94446 26632, 0435 - 245 9519.",
        "ID": "NCN46",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "98. விஜயநாதேஸ்வரர் - திருவிஜயமங்கை. கும்பகோணத்தில் இருந்து 21 கி.மீ., (திருவைகாவூர் அருகில்) - 0435 - 294 1912, 94435 86453.",
        "ID": "NCN47",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "99. வில்வ வனேஸ்வரர் - திருவைகாவூர். கும்பகோணம்- திருவையாறு ரோட்டில் 17 கி.மீ., - 94435 86453, 96552 61510.",
        "ID": "NCN48",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "100. தயாநிதீஸ்வரர் - வடகுரங்காடுதுறை. கும்பகோணம் - திருவையாறு ரோட்டில் 20 கி.மீ. - 04374 - 240 491, 244 191.",
        "ID": "NCN49",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "101. ஆபத்சகாயர் - திருப்பழனம். தஞ்சாவூரில் இருந்து 16 கி.மீ., தூரத்திலுள்ள திருவையாறு அருகில் - 04362 - 326 668.",
        "ID": "NCN50",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "102. ஐயாறப்பர் - திருவையாறு. தஞ்சாவூரில் இருந்து 16 கி.மீ., - 0436 - 2260 332.",
        "ID": "NCN51",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "103. நெய்யாடியப்பர் - தில்லைஸ்தானம். திருவையாறிலிருந்து 2 கி.மீ., - 04362 - 260 553.",
        "ID": "NCN52",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "104. வியாக்ரபுரீஸ்வரர் - திருப்பெரும்புலியூர். திருவையாறிலிருந்து தில்லைஸ்தானம் வழியே 5 கி.மீ. - 94434 47826, 94427 29856.",
        "ID": "NCN53",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "105. செம்மேனிநாதர் - திருக்கானூர்(விஷ்ணம்பேட்டை). திருவையாறில் இருந்து திருக்காட்டுப்பள்ளி வழியே 30 கி.மீ., - 04362 - 320 067, 93450 09344.",
        "ID": "NCN56",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "106. அக்னீஸ்வரர் - திருக்காட்டுப்பள்ளி.திருவையாறிலிருந்து 25 கி.மீ., - 94423 47433.",
        "ID": "SCN009",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "107. ஆத்மநாதேஸ்வரர் - திருவாலம் பொழில். தஞ்சாவூரிலிருந்து கண்டியூர் வழியாக 17 கி.மீ., - 04365 - 284 573.",
        "ID": "SCN010",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "108. புஷ்பவனேஸ்வரர் - தஞ்சாவூரிலிருந்து கண்டியூர் வழியாக 20 கி.மீ., - 94865 76529.",
        "ID": "SCN011",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "109. பிரம்மசிரகண்டீசுவரர் - கண்டியூர். தஞ்சாவூரிலிருந்து திருவையாறு வழியாக 20 கி.மீ., - 04362 - 261 100, 262 222.",
        "ID": "SCN012",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "110. சோற்றுத்துறை நாதர் - தஞ்சாவூரிலிருந்து கண்டியூர் வழியாக 19 கி.மீ., - 99438 84377.",
        "ID": "SCN013",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "111. வேதபுரீஸ்வரர் - திருவேதிக்குடி. தஞ்சாவூரில் இருந்து கண்டியூர் வழியாக 14 கி.மீ., - 93451 04187, 04362 - 262 334.",
        "ID": "SCN014",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "112. பசுபதீஸ்வரர் - பசுபதிகோயில். தஞ்சாவூர்- கும்பகோணம் ரோட்டில் 15 கி.மீ., - 97914 82102.",
        "ID": "SCN016",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "113. வசிஷ்டேஸ்வரர் - தென்குடித்திட்டை. தஞ்சாவூரிலிருந்து 10 கி.மீ., - 04362 - 252 858.",
        "ID": "SCN015",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "114. கரவாகேஸ்வரர் - கரப்பள்ளி (அய்யம்பேட்டை). தஞ்சாவூர் - கும்பகோணம் ரோட்டில் 15 கி.மீ.,",
        "ID": "SCN017",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "115. முல்லைவனநாதர் - திருக்கருகாவூர். தஞ்சாவூரில் இருந்து 22 கி.மீ., - 04374 - 273 502, 273 423.",
        "ID": "SCN018",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "116. பாலைவனேஸ்வரர் - பாபநாசம். தஞ்சாவூர்- கும்பகோணம் ரோட்டில் 12 கி.மீ., - 94435 24410.",
        "ID": "SCN019",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "117. கல்யாண சுந்தரேஸ்வரர் - நல்லூர் (வாழைப்பழக்கடை) தஞ்சாவூரில் (பஞ்சவர்ணேஸ்வரர்) இருந்து பாபநாசம் வழியாக 15 கி.மீ., - 93631 41676.",
        "ID": "SCN020",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "118. பசுபதீஸ்வரர் - ஆவூர் (கோவந்தகுடி).கும்பகோணத்திலிருந்து பட்டீஸ்வரம் வழியாக 15 கி.மீ., - 94863 03484.",
        "ID": "SCN021",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "119. சிவக்கொழுந்தீசர் - திருச்சத்திமுற்றம். பட்டீஸ்வரத்திலிருந்து 6 கி.மீ., - 94436 78575, 04374 - 267 237.",
        "ID": "SCN022",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "120. பட்டீஸ்வரர் - பட்டீஸ்வரம், கும்பகோணத்தில் இருந்து 2 கி.மீ., - 0435 - 241 6976.",
        "ID": "SCN023",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "121. சோமநாதர் - கீழபழையாறை வடதளி.கும்பகோணம் - ஆவூர் ரோட்டிலுள்ள முழையூர் அருகில் - 98945 69543.",
        "ID": "SCN024",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "122. திருவலஞ்சுழிநாதர் - திருவலஞ்சுழி.சுவாமிமலையில் இருந்து 1கி.மீ., - 0435 - 245 4421, 245 4026.",
        "ID": "SCN025",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "123. கும்பேஸ்வரர் - கும்பகோணம். - 0435 - 242 0276.",
        "ID": "SCN026",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "124. நாகேஸ்வரர் - கும்பகோணம். கும்பேஸ்வரர் கோயிலுக்கு கிழக்கே - 0435 - 243 0386.",
        "ID": "SCN027",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "125. சோமேஸ்வரர் - கும்பகோணம். கும்பேஸ்வரர் கோயிலை அடுத்துள்ள பொற்றாமரைக்குளக் கரை - 0435 - 243 0349.",
        "ID": "SCN028",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "126. நாகநாதர் - திருநாகேஸ்வரம். கும்பகோணத்தில் இருந்து 6 கி.மீ., - 94434 89839, 0435 - 246 3354,",
        "ID": "SCN029",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "127. மகாலிங்க சுவாமி - திருவிடைமருதூர். கும்பகோணம்-மயிலாடுதுறை ரோட்டில் 9 கி.மீ., 0435 - 246 0660.",
        "ID": "SCN030",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "128. ஆபத்சகாயேஸ்வரர் - ஆடுதுறை. கும்பகோணம்-மயிலாடுதுறை ரோட்டில் 14 கி.மீ., - 94434 63119, 94424 25809.",
        "ID": "SCN031",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "129. நீலகண்டேஸ்வரர் - திருநீலக்குடி. கும்பகோணம் - காரைக்கால் ரோட்டில் 15 கி.மீ., - 94428 61634. 0435 - 246 0660.",
        "ID": "SCN032",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "130. கோழம்பநாதர் - திருக்குளம்பியம். கும்பகோணம்-மயிலாடுதுறை ரோட்டில் திருவாவடுதுறையிலிருந்து 5 கி.மீ., - 04364 - 232 055, 232 005.",
        "ID": "SCN035",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "131. சிவானந்தேஸ்வரர் - திருப்பந்துறை. கும்பகோணம்-மயிலாடுதுறை ரோட்டில் (எரவாஞ்சேரி வழி) 12 கி.மீ., - 94436 50826, 0435 - 244 8138.",
        "ID": "SCN064",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "132. சித்தநாதேஸ்வரர் - திருநறையூர் (நாச்சியார்கோவில்).கும்பகோணம்- திருவாரூர் ரோட்டில் 10 கி.மீ., - 0435 - 246 7343, 246 7219.",
        "ID": "SCN065",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "133. படிக்காசுநாதர் - அழகாபுத்தூர். கும்பகோணம்- திருவாரூர் செல்லும் வழியில் 6 கி.மீ., - 99431 78294, 0435 - 246 6939.",
        "ID": "SCN066",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "134. அமிர்தகடேஸ்வரர் - சாக்கோட்டை. கும்பகோணம்-மன்னார்குடி ரோட்டில் 5 கி.மீ., - 98653 06840, 0435 - 241 4453.",
        "ID": "SCN068",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "135. சிவகுருநாதசுவாமி - சிவபுரம். கும்பகோணத்தில் இருந்து 7 கி.மீ. சாக்கோட்டையில் இருந்து 2 கி.மீ., - 98653 06840.",
        "ID": "SCN067",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "136. சற்குணலிங்கேஸ்வரர் - கருக்குடி (மருதாநல்லூர்).கும்பகோணம் - மன்னார்குடி ரோட்டில் 5 கி.மீ., - 99435 23852",
        "ID": "SCN069",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "137. சாரபரமேஸ்வரர் - திருச்சேறை. கும்பகோணத்தில் இருந்து 15 கி.மீ.,",
        "ID": "SCN095",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "138. ஞானபரமேஸ்வரர் - திருமெய்ஞானம் (நாலூர் திருமயானம்). கும்பகோணத்தில் இருந்து திருச்சேறை வழியாக 17 கி.மீ., - 94439 59839.",
        "ID": "SCN096",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "139. ஆபத்சகாயேஸ்வரர் - ஆலங்குடி. திருவாரூர்-(குரு ஸ்தலம்) மன்னார்குடி ரோட்டில் 30 கி.மீ., - 04374 - 269 407.",
        "ID": "SCN098",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "140. பாஸ்கரேஸ்வரர் - பரிதியப்பர்கோவில். தஞ்சாவூர் -பட்டுக்கோட்டை ரோட்டில் 17 கி.மீ. (உளூர் அருகில்) - 0437 - 256 910.",
        "ID": "SCN101",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "திருவாரூர் மாவட்டம்",
        "Details": "141. தியாகராஜர் - திருவாரூர். - 04366 - 242 343.",
        "ID": "SCN087",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "142. அசலேஸ்வரர் - திருவாரூர். தியாகராஜர் கோயில் இரண்டாம் பிரகாரத்தில் - 04366 - 242 343.",
        "ID": "SCN088",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "143. தூவாய் நாதர் - திருவாரூர். தியாகராஜர் கோயில் கீழரத வீதி - 99425 40479, 04366 - 240 646.",
        "ID": "SCN089",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "144. பதஞ்சலி மனோகரர் - விளமல். திருவாரூர் பஸ் ஸ்டாண்டிலிருந்து 2 கி.மீ., - 98947 81778, 94894 79896.",
        "ID": "SCN090",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "145. கரவீரநாதர் - கரைவீரம். திருவாரூர்-கும்பகோணம் ரோட்டில் 8 கி.மீ. தூரத்திலுள்ள வடகண்டம் பஸ் ஸ்டாப் - 04366 - 241 978.",
        "ID": "SCN091",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "146. வீரட்டானேஸ்வரர் - திருவிற்குடி. திருவாரூர்- மயிலாடுதுறை ரோட்டில் தங்கலாஞ்சேரி அருகில். - 94439 21146.",
        "ID": "SCN074",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "147. வர்த்தமானீஸ்வரர் - திருப்புகலூர். திருவாரூரில் இருந்து சன்னாநல்லூர் வழியாக 24 கி.மீ., - 94431 13025, 04366 - 292 300.",
        "ID": "SCN076",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "148. ராமநாதசுவாமி - திருக்கண்ணபுரம். திருவாரூரில் இருந்து 26 கி.மீ., (திருப்புகலூர் அருகில்) - 94431 13025, 04366 - 292 300.",
        "ID": "SCN077",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "149. கணபதீஸ்வரர் - திருச்செங்காட்டங்குடி. திருவாரூரில் இருந்து 29 கி.மீ., (திருப்புகலூர் அருகில்) - 94431 13025, 04366 - 270 278.",
        "ID": "SCN079",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "150. கேடிலியப்பர் - கீழ்வேளூர். திருவாரூர்- நாகப்பட்டினம் ரோட்டில் 35 கி.மீ. - 04366 - 276 733.",
        "ID": "SCN084",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "151. தேவபுரீஸ்வரர் - தேவூர். நாகப்பட்டினம்-திருத்துறைப்பூண்டி வழியில் 18 கி.மீ., - 94862 78810, 04366 - 276 113.",
        "ID": "SCN085",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "152. திருநேத்திரநாதர் - திருப்பள்ளி முக்கூடல். திருவாரூரிலிருந்து பள்ளிவாரமங்கலம் வழியாக 6 கி.மீ., - 98658 44677, 04366 - 244 714.",
        "ID": "SCN086",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "153. பசுபதீஸ்வரர் - திருக்கொண்டீஸ்வரம். திருவாரூரில் இருந்து நன்னிலம் வழியாக 18 கி.மீ., - 04366 - 228 033.",
        "ID": "SCN072",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "154. சவுந்தரேஸ்வரர் - திருப்பனையூர். திருவாரூரில் இருந்து ஆண்டிப்பந்தல் வழியாக 12 கி.மீ., - 04366 - 237 007.",
        "ID": "SCN073",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "155. ஐராவதீஸ்வரர் - திருக்கொட்டாரம். கும்பகோணம் (நெடுங்காடு வழி) - காரைக்கால் ரோட்டிலுள்ள வேளங்குடி. - 04368 - 261 447.",
        "ID": "SCN053",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "156. பிரம்மபுரீஸ்வரர் - அம்பர் (அம்பல்). மயிலாடுதுறை அருகிலுள்ள பேரளத்திலிருந்து 6 கி.மீ., - 04366 - 238 973.",
        "ID": "SCN054",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "157. மகாகாளநாதர் - திருமாகாளம். கும்பகோணம்-காரைக்கால் ரோடு. - 94427 66818, 04366 - 291 457.",
        "ID": "SCN055",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "158. மேகநாதசுவாமி - திருமீயச்சூர். மயிலாடுதுறை அருகிலுள்ள பேரளத்திலிருந்து 1 கி.மீ., - 94448 36526, 04366 - 239 170.",
        "ID": "SCN056",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "159. சகல புவனேஸ்வரர் - திருமீயச்சூர் இளங்கோயில், மயிலாடுதுறை அருகிலுள்ள பேரளத்திலிருந்து 1 கி.மீ., - 94448 36526, 04366 - 239 170.",
        "ID": "SCN057",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "160. முக்தீஸ்வரர் - செதலபதி. திருவாரூர்- மயிலாடுதுறை ரோட்டில் 22 கி.மீ. தூரத்திலுள்ள பூந்தோட்டத்தில் பிரியும் சாலையில் 5 கி.மீ., - 04366 - 238 818, 239 700, 94427 14055.",
        "ID": "SCN058",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "161. வெண்ணிகரும்பேஸ்வரர் - கோயில்வெண்ணி.திருவாரூரிலிருந்து 26 கி.மீ., - 98422 94416.",
        "ID": "SCN102",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "162. சேஷபுரீஸ்வரர் - திருப்பாம்புரம்.கும்பகோணம்-காரைக்கால் வழியில் 20 கி.மீ. தூரத்திலுள்ள கற்கத்தியில் இருந்து 3 கி.மீ. - 94439 43665, 0435 - 246 9555.",
        "ID": "SCN059",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "163. சூஷ்மபுரீஸ்வரர் - செருகுடி.கும்பகோணம்-காரைக்கால் இருந்து 3 கி.மீ. (பூந்தோட்டம் வழி) கடகம்பாடியில் இருந்து 3 கி. மீ. - 04366 - 291 646.",
        "ID": "SCN060",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "164. அபிமுக்தீஸ்வரர் - மணக்கால் அய்யம்பேட்டை,திருவாரூர்- கும்பகோணம் ரோட்டில் 10 கி.மீ.,",
        "ID": "SCN092",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "165. நர்த்தனபுரீஸ்வரர் - திருத்தலையாலங்காடு. திருவாரூர்-கும்பகோணம் ரோட்டில் 15 கி.மீ., - 94435 00235, 04366 - 269 235.",
        "ID": "SCN093",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "166. கோணேஸ்வரர் - குடவாசல்.திருவாரூரில் இருந்து 23 கி.மீ., கும்பகோணத்தில் இருந்து 20 கி.மீ., - 94439 59839.",
        "ID": "SCN094",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "167. சொர்ணபுரீஸ்வரர் - ஆண்டான்கோவில்.கும்பகோணத்தில் இருந்து வலங்கைமான் வழி 13 கி.மீ., - 04374 - 265 130.",
        "ID": "SCN097",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "168. பாதாளேஸ்வரர் - அரித்துவாரமங்கலம், கும்பகோணம் - அம்மாபேட்டை வழியில் 20 கி.மீ., - 94421 75441, 04374 - 264 586",
        "ID": "SCN099",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "169. சாட்சிநாதர் - அவளிவணல்லூர்.கும்பகோணத்தில் இருந்து அம்மாப்பேட்டை வழியாக 26 கி.மீ., - 04374 - 275 441.",
        "ID": "SCN100",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "170. வீழிநாதேஸ்வரர் - திருவீழிமிழலை. திருவாரூர்- மயிலாடுதுறை ரோட்டில் 22 கி.மீ. தூரத்திலுள்ள பூந்தோட்டத்தில் பிரியும் சாலையில் 7 கி.மீ., - 04366 - 273 050, 94439 24825148.",
        "ID": "SCN061",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "171. சதுரங்க வல்லபநாதர் - பூவனூர்.திருவாரூரிலிருந்து நீடாமங்கலம் வழியாக மன்னார்குடி ரோட்டில். - 94423 99273.",
        "ID": "SCN103",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "172. நாகநாதர் - பாமணி.மன்னார்குடியிலிருந்து 2 கி.மீ., - 93606 85073.",
        "ID": "SCN104",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "173. பாரிஜாதவனேஸ்வரர் - திருக்களர்.மன்னார்குடி-திருத்துறைப்பூண்டி ரோட்டில் 21 கி.மீ., - 04367 - 279 374.",
        "ID": "SCN105",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "174. பொன்வைத்த நாதர் - சித்தாய்மூர். திருவாரூர்-திருத்துறைப்பூண்டி ரோட்டில் 20 கி.மீ. (ஆலத்தம்பாடி அருகில்) - 94427 67565.",
        "ID": "SCN106",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "175. மந்திரபுரீஸ்வரர் - கோவிலூர். மன்னார்குடி-முத்துப்பேட்டை ரோட்டில் 32 கி.மீ., - 99420 39494, 04369 - 262 014.",
        "ID": "SCN107",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "176. சற்குணநாதர் - இடும்பாவனம். திருத்துறைப்பூண்டி-புதுச்சேரி ரோட்டில் 10கி.மீ. (தொண்டியக்காடு வழி) - 04369 - 240 349.",
        "ID": "SCN108",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "177. கற்பக நாதர் - கற்பகநாதர்குளம். திருத்துறைப்பூண்டி -புதுச்சேரி ரோட்டில் 12 கி.மீ., (தொண்டியக்காடு வழி) - 04369 - 240 632.",
        "ID": "SCN109",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "178. நீள்நெறிநாதர் (ஸ்திரபுத்தீஸ்வரர்) - தண்டலச்சேரி. திருவாரூரிலிருந்து திருத்துறைப்பூண்டி வழியில் 23 கி.மீ., - 98658 44677.",
        "ID": "SCN110",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "179. கொழுந்தீஸ்வரர் - கோட்டூர்.மன்னார்குடி- திருத்துறைப்பூண்டி ரோட்டில் 15 கி.மீ., - 97861 51763, 04367 - 279 781.",
        "ID": "SCN111",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "180. வண்டுறைநாதர் - திருவண்டுதுறை.மன்னார்குடி- திருத்துறைப்பூண்டி ரோட்டில் 11 கி.மீ., சேரிவடிவாய்க்கால் அருகில் - 04367 - 294 640.",
        "ID": "SCN112",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "181. வில்வாரண்யேஸ்வரர் - திருக்கொள்ளம்புதூர் கும்பகோணம் -கொரடாச்சேரி வழியில் 25 கி.மீ., செல்லூர் அருகில் - 04366 - 262 239.",
        "ID": "SCN113",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "182. ஜகதீஸ்வரர் - ஓகைப்பேரையூர்.திருவாரூரிலிருந்து 20 கி.மீ., (லட்சுமாங்குடி வழி) - 04367 - 237 692.",
        "ID": "SCN114",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "183. அக்னீஸ்வரர் - திருக்கொள்ளிக்காடு. திருவாரூரிலிருந்து 28 கி.மீ. கச்சனத்திலிருந்து 8 கி.மீ., - 04369 - 237 454.",
        "ID": "SCN115",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "184. நெல்லிவனநாதர் - திருநெல்லிக்காவல்.திருவாரூர் - திருத்துறைப்பூண்டி ரோட்டில் 18 கி.மீ., - 04369 - 237 507, 237 438.",
        "ID": "SCN117",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "185. வெள்ளிமலைநாதர் - திருத்தங்கூர்.திருவாரூர்- திருத்துறைப்பூண்டி ரோட்டில் 12 கி.மீ., - 94443 54461, 04369 - 237 454.",
        "ID": "SCN116",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "186. கண்ணாயிரநாதர் - திருக்காரவாசல்.திருவாரூர் - திருத்துறைப்பூண்டி ரோட்டில் 14 கி.மீ., - 94424 03391, 04366 - 247 824.",
        "ID": "SCN119",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "187. நடுதறியப்பர் - கண்ணாப்பூர், திருவாரூர் - திருத்துறைப்பூண்டி ரோட்டில் மாவூரிலிருந்து 7 கி.மீ., - 94424 59978, 04365 - 204 144.",
        "ID": "SCN120",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "188. கைச்சினநாதர் - கச்சனம்.திருவாரூர்-திருத்துறைப்பூண்டி ரோட்டில் 15 கி.மீ., - 94865 33293",
        "ID": "SCN122",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "189. ரத்தினபுரீஸ்வரர் - திருநாட்டியத்தான்குடி.திருவாரூர்- வடபாதிமங்கலம் ரோட்டில் 15 கி.மீ., (மாவூர் வழி) - 94438 06496, 04367 - 237 707.",
        "ID": "SCN118",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "190. அக்னிபுரீஸ்வரர் - வன்னியூர்(அன்னூர்). கும்பகோணம்-காரைக்கால் ரோட்டில் 24 கி.மீ., - 0435 - 244 9578",
        "ID": "SCN062",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "191. சற்குணேஸ்வரர் - கருவேலி. கும்பகோணம்-மயிலாடுதுறை ரோட்டில் 22 கி.மீ., தூரத்திலுள்ள கூந்தலூர் - 94429 32942, 04366 - 273 900",
        "ID": "SCN063",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "192. மதுவனேஸ்வரர் - நன்னிலம்.திருவாரூர்-மயிலாடுதுறை ரோட்டில் 16 கி.மீ., - 94426 82346, 99432 09771",
        "ID": "SCN071",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "193. வாஞ்சிநாதேஸ்வரர் - ஸ்ரீவாஞ்சியம். கும்பகோணம்- நாகபட்டினம் வழியில் 27 கி.மீ. அச்சுதமங்கலம் ஸ்டாப் - 94424 03926, 04366 - 228 305",
        "ID": "SCN070",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "194. மனத்துணைநாதர் - திருவலிவலம். திருவாரூரிலிருந்து 20 கி.மீ., (வழி கச்சனம்) - 04366 - 205 636",
        "ID": "SCN121",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "195. கோளிலிநாதர் - திருக்குவளை. திருத்துறைபூண்டி - எட்டுக்குடி ரோட்டில் 13 கி.மீ.(வழி கச்சனம்) - 04366 - 245 412",
        "ID": "SCN123",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "196. வாய்மூர்நாதர் - திருவாய்மூர்.திருவாரூர்- வேதாரண்யம் ரோட்டில் 25 கி.மீ., - 97862 44876",
        "ID": "SCN124",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "நாகப்பட்டினம் மாவட்டம்",
        "Details": "197. சிவலோகத்தியாகர் - ஆச்சாள்புரம். சிதம்பரத்தில் இருந்து 12 கி.மீ., - 04364 - 278 272.",
        "ID": "NCN05",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "198. திருமேனியழகர் - மகேந்திரப்பள்ளி. சீர்காழியில் இருந்து கொள்ளிடம் வழி 22 கி.மீ., - 04364 - 292 309.",
        "ID": "NCN06",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "199. முல்லைவனநாதர் - திருமுல்லைவாசல். சீர்காழியிலிருந்து 12 கி.மீ., - 94865 24626.",
        "ID": "NCN07",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "200. சுந்தரேஸ்வரர் - அன்னப்பன்பேட்டை. சீர்காழியில் இருந்து கீழமூவர்கரை ரோட்டில் 16 கி.மீ., - 93605 77673, 97879 29799.",
        "ID": "NCN08",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "201. சாயாவனேஸ்வரர் - சாயாவனம். சீர்காழி- பூம்புகார் வழியில் 20 கி.மீ., - 04364 - 260 151",
        "ID": "NCN09",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "202. பல்லவனேஸ்வரர் - பூம்புகார். சீர்காழியில் இருந்து 19 கி.மீ., - 94437 19193.",
        "ID": "NCN10",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "203. சுவேதாரண்யேஸ்வரர் - திருவெண்காடு.சீர்காழி-பூம்புகார் வழியில் (புதன் ஸ்தலம்) 15 கி.மீ., - 04364 - 256 424",
        "ID": "NCN11",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "204. ஆரண்யேஸ்வரர் - திருக்காட்டுப்பள்ளி. சீர்காழியில் இருந்து 15 கி.மீ., திருவெண்காட்டிலிருந்து 1 கி.மீ., - 94439 85770, 04364 - 256 273.",
        "ID": "NCN12",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "205. வெள்ளடைநாதர் - திருக்குருகாவூர். சீர்காழியில் இருந்து 5 கி.மீ., - 92456 12705.",
        "ID": "NCN13",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "206. சட்டைநாதர் - சீர்காழி.சிதம்பரத்தில் இருந்து 19 கி.மீ., - 04364 - 270 235.",
        "ID": "NCN14",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "207. சப்தபுரீஸ்வரர் - திருக்கோலக்கா. சீர்காழியிலிருந்து 2 கி.மீ., - 04364 - 274 175.",
        "ID": "NCN15",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "208. வைத்தியநாதர் - வைத்தீஸ்வரன்கோவில்.மயிலாடுதுறை -சீர்காழி வழியில் 18கி.மீ., - 04364 - 279 423.",
        "ID": "NCN16",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "209. கண்ணாயிரமுடையார் - குறுமாணக்குடி. மயிலாடுதுறை- வைத்தீஸ்வரன் கோவில் வழியில் கதிராமங்கலத்தில் இருந்து 3 கி.மீ. - 94422 58085",
        "ID": "NCN17",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "210. கடைமுடிநாதர் - கீழையூர். மயிலாடுதுறையில் இருந்து 12 கி.மீ., - 94427 79580, 04364 - 283 261,",
        "ID": "NCN18",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "211. மகாலட்சுமிபுரீஸ்வரர் - திருநின்றியூர். மயிலாடுதுறை- சீர்காழி வழியில் 7 கி.மீ., - 94861 41430.",
        "ID": "NCN19",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "212. சிவலோகநாதர் - திருப்புன்கூர்.மயிலாடுதுறையிலிருந்து 15 கி.மீ., - 94867 17634.",
        "ID": "NCN20",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "213. சோமநாதர் - நீடூர். மயிலாடுதுறையில் இருந்து 5 கி.மீ., - 99436 68084, 04364 - 250 424,",
        "ID": "NCN21",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "214. ஆபத்சகாயேஸ்வரர் - பொன்னூர். மயிலாடுதுறையில் இருந்து 6 கி.மீ., - 04364 250 758.",
        "ID": "NCN22",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "215. கல்யாண சுந்தரேஸ்வரர் - திருவேள்விக்குடி. மயிலாடுதுறை அருகிலுள்ள குத்தாலத்திலிருந்து 2 கி.மீ., - 04364 - 235 462.",
        "ID": "NCN23",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "216. ஐராவதேஸ்வரர் - மேலத்திருமணஞ்சேரி.குத்தாலத்தில் இருந்து 6 கி.மீ., - 04364 - 235 487.",
        "ID": "NCN24",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "217. உத்வாகநாதர் - திருமணஞ்சேரி.கும்பகோணத்தில் இருந்து 27 கி.மீ., - 04364 - 235 002.",
        "ID": "NCN25",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "218. வீரட்டேஸ்வரர் - கொருக்கை.மயிலாடுதுறை- கொண்டல் ரோட்டில் 3 கி.மீ.",
        "ID": "NCN26",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "219. குற்றம் பொறுத்தநாதர் - தலைஞாயிறு.வைத்தீஸ்வரன் கோவிலிலிருந்து மணல் மேடு வழியில் 8 கி.மீ. - 04364 - 258 833.",
        "ID": "NCN27",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "220. குந்தளேஸ்வரர் - திருக்குரக்கா.மயிலாடுதுறையில்இருந்து 13 கி.மீ., - 04364 - 258 785.",
        "ID": "NCN28",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "221. மாணிக்கவண்ணர் - திருவாளப்புத்தூர்.மயிலாடுதுறையில் இருந்து 18 கி.மீ.- 98425 38954, 04364 - 254 879.",
        "ID": "NCN29",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "222. திருநீலகண்டேஸ்வரர் - இலுப்பைபட்டு.மயிலாடுதுறையில் இருந்து 10 கி.மீ., (மணல்மேடு அருகில்) - 92456 19738.",
        "ID": "NCN30",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "223. வைகல்நாதர் - திருவைகல்.கும்பகோணம்-காரைக்கால்ரோட்டில் 18 கி.மீ. தூரத்திலுள்ள பழிஞ்சநல்லூர் அருகில் - 0435 - 246 5616.",
        "ID": "SCN033",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "224. உமாமகேஸ்வரர் - கோனேரிராஜபுரம்.கும்பகோணம்-காரைக்கால் ரோட்டில் 22 கி.மீ. தூரத்திலுள்ள எஸ். புதூர் அருகில் - 0435 - 244 9830, 244 9800.",
        "ID": "SCN034",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "225. கோமுக்தீஸ்வரர் - திருவாவடுதுறை.மயிலாடுதுறை - கும்பகோணம் வழியில் 16 கி.மீ., - 04364 - 232 055.",
        "ID": "SCN036",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "226. உத்தவேதீஸ்வரர் - குத்தாலம். மயிலாடுதுறையிலிருந்து 10 கி.மீ., - 04364 - 235 225",
        "ID": "SCN037",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "227. வேதபுரீஸ்வரர் - தேரழுந்தூர். மயிலாடுதுறை- கும்பகோணம் வழியில் 10 கி.மீ., - 04364 - 237 650.",
        "ID": "SCN038",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "228. மாயூரநாதர் - மயிலாடுதுறை பஸ் ஸ்டாண்டில் இருந்து 2 கி.மீ., - 04364 - 222 345",
        "ID": "SCN039",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "229. உச்சிரவனேஸ்வரர் - திருவிளநகர்.மயிலாடுதுறை-செம்பொனார்கோவில் வழியில் 7 கி.மீ., - 04364 - 282 129.",
        "ID": "SCN040",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "230. வீரட்டேஸ்வரர் - கீழப்பரசலூர்(திருப்பறியலூர்). மயிலாடுதுறையிலிருந்து 7 கி.மீ., - 04364- 205 555.",
        "ID": "SCN041",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "231. சுவர்ணபுரீஸ்வரர்- செம்பொனார்கோவில்.மயிலாடுதுறை - தரங்கம்பாடி ரோட்டில் 8 கி.மீ., - 99437 97974.",
        "ID": "SCN042",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "232. நற்றுணையப்பர் - புஞ்சை.மயிலாடுதுறை-பூம்புகார் வழியில் 10 கி.மீ. - 04364 - 283 188",
        "ID": "SCN043",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "233. வலம்புர நாதர் - மேலப்பெரும்பள்ளம்.பூம்புகாரிலிருந்து 7 கி.மீ., - 04364 - 200 890, 200 685.",
        "ID": "SCN044",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "234. சங்காரண்யேஸ்வரர் - தலைச்சங்காடு. மயிலாடுதுறையிலிருந்து 22 கி.மீ. - 04364 - 280 757.",
        "ID": "SCN045",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "235. தான்தோன்றியப்பர் - ஆக்கூர்.மயிலாடுதுறை- நாகப்பட்டினம் வழியில் 16 கி.மீ., - 98658 09768, 97877 09742.",
        "ID": "SCN046",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "236. அமிர்தகடேஸ்வரர் - (அபிராமியம்மன் கோயில்).திருக்கடையூர் மயிலாடுதுறை-நாகப்பட்டினம் ரோட்டில், 26 கி.மீ., - 04364 - 287 429.",
        "ID": "SCN047",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "237. பிரம்மபுரீஸ்வரர் - திருமயானம். திருக்கடையூர் அபிராமி கோயிலில் இருந்து 1 கி.மீ., - 94420 12133, 04364 - 287 429.",
        "ID": "SCN048",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "238. சரண்யபுரீஸ்வரர் - திருப்புகலூர். நாகப்பட்டினம் - திருவாரூர் ரோட்டில் 22 கி.மீ., - 94431 13025, 04366-237 198.",
        "ID": "SCN075",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "239. திருப்பயற்றுநாதர் - திருப்பயத்தங்குடி. திருவாரூர்- திருமருகல் வழியில் 10 கி.மீ., - 98658 44677, 04366- 272 423.",
        "ID": "SCN078",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "240. ரத்தினகிரீசுவரர் - திருமருகல். நாகப்பட்டினத்தில் இருந்து 20 கி.மீ., - 04366- 270 823.",
        "ID": "SCN080",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "241. அயவந்தீஸ்வரர் - சீயாத்தமங்கை. நாகப்பட்டினம்- திருமருகல் ரோடு(நாகூர் வழி) - 04366-270 073.",
        "ID": "SCN081",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "242. காயாரோகணேஸ்வரர் - நாகப்பட்டினம். பஸ் ஸ்டாண்டிலிருந்து 2 கி.மீ., - 98945 01319, 04365- 242 844.",
        "ID": "SCN082",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "243. நவநீதேஸ்வரர் - சிக்கல். நாகப்பட்டினத்திலிருந்து 4 கி.மீ., - 04365- 245 452, 245 350.",
        "ID": "SCN083",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "244. திருமறைக்காடர் - வேதாரண்யம். நாகபட்டினத்திலிருந்து 63 கி.மீ., - 04369- 250 238",
        "ID": "SCN125",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "245. அகஸ்தீஸ்வரர் - அகஸ்தியன்பள்ளி.வேதாரண்யம்- கோடியக்கரை வழியில் 2 கி.மீ., - 04369- 250 012",
        "ID": "SCN126",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "246. கோடிக்குழகர் - கோடியக்கரை.வேதாரண்யத்திலிருந்து 9 கி.மீ., - 04369- 272 470",
        "ID": "SCN127",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "மதுரை மாவட்டம்",
        "Details": "247. மீனாட்சி சுந்தரேஸ்வரர் - மதுரை - 0452-234 9868.",
        "ID": "PNT001",
        "God": "Sundareswarar / Chockanathar / Somasundarar",
        "Goddess": "Meenakshi",
        "Sthala_Varalaru": "One of the 64 Shakti Peetams and five dance halls (Velli Sabhai - Silver Hall). The city was named 'Madurai' because sweet nectar (Madhu) dripped from Shiva's crescent moon. Features 12 magnificent gopurams. Goddess Meenakshi is worshipped first here. Site of 64 sacred sports (Thiruvilayadal) of Shiva.",
        "Travel_Details": "Located at the heart of Madurai City. Well connected by air, rail, and road. 1.5 km from Madurai Junction railway station.",
        "Name_EN": "Madurai Meenakshi Sundareswarar"
    },
    {
        "District": "",
        "Details": "248. திருவாப்புடையார் - செல்லூர். மதுரை கோரிப்பாளையம் அருகில் - 0452- 234 9868.",
        "ID": "PNT002",
        "God": "Aappudaiyaar / Annavinodhar",
        "Goddess": "Sugandha Kundhalambikai",
        "Sthala_Varalaru": "Shiva manifested in a wooden wedge (Aappu) driven into the ground for King Cholanthakan who had collapsed after hunting. Known as Annavinodhar because he miraculously transformed river sand into rice to feed hungry people during a famine. Features a Somaskanda layout with Muruga between Shiva and the Goddess.",
        "Travel_Details": "Located in Sellur, Madurai. Accessible via Route 17/17A from Periyar bus stand. Near the northern bank of Vaigai river.",
        "Name_EN": "TiruAappanur Sellur Aappudaiyaar"
    },
    {
        "District": "",
        "Details": "249. சத்தியகிரீஸ்வரர் - திருப்பரங்குன்றம்(முருகன் கோயில்)மதுரையில் இருந்து 7 கி.மீ., - 0452- 248 2248.",
        "ID": "PNT003",
        "God": "Parangirinathar / Sathyagireeswarar",
        "Goddess": "Aavudai Nayaki",
        "Sthala_Varalaru": "An ancient cave temple and one of the six sacred abodes (Arupadai Veedu) of Muruga. Site where Muruga married Deivayanai, the daughter of Indra, after defeating the demon Soorapadman. The hill itself is revered as a manifestation of Lord Shiva.",
        "Travel_Details": "Located 8 km West of Madurai at Tirupparankundram. Frequent bus service from Madurai central bus stand.",
        "Name_EN": "Tirupparankundram Sathyagireeswarar"
    },
    {
        "District": "",
        "Details": "250. ஏடகநாதேஸ்வரர் - திருவேடகம். மதுரை- சோழவந்தான் ரோட்டில் 17 கி.மீ. - 04543-259 311.",
        "ID": "PNT004",
        "God": "Edaganatheswarar",
        "Goddess": "Elavaarkuzhali / Maadeviyambikai",
        "Sthala_Varalaru": "Named after the palm-leaf scroll (Edu) of Saint Sambandhar which moved against the river current and rested here during a debate with Jains. The River Vaigai flows from south to north here, making the site as sacred as Kasi. Features a bell brought from Malaysia.",
        "Travel_Details": "Located 17 km from Madurai on the road to Sholavandan. Nearest railway station is Sholavandan.",
        "Name_EN": "Tiruvedagam Sholavandan Edaganatheswarar"
    },
    {
        "District": "ராமநாதபுரம் மாவட்டம்",
        "Details": "251. ராமநாதசுவாமி - ராமேஸ்வரம். மதுரையில் இருந்து 200 கி.மீ., - 04573 - 221 223.",
        "ID": "PNT008",
        "God": "Ramanathaswamy",
        "Goddess": "Parvatha Varthini",
        "Sthala_Varalaru": "One of the 12 Jyotirlingas. Rama worshipped Shiva here to absolve the sin of killing Ravana. Hanuman brought a Lingam from Kasi, while Sita made a Sand Lingam. Features 22 sacred Theerthams and the famous long corridors.",
        "Travel_Details": "Located on Rameswaram Island, connected by Pamban Bridge. Well connected by rail and road from Chennai, Madurai, Trichy.",
        "Name_EN": "Rameswaram Ramanathaswamy"
    },
    {
        "District": "",
        "Details": "252. ஆதிரத்தினேஸ்வரர் - திருவாடானை. மதுரை- தொண்டி வழியில் 100 கி.மீ., - 04561 - 254 533.",
        "ID": "PNT009",
        "God": "Adhirathneswarar / Aadaanai Nathar",
        "Goddess": "Snehavalli",
        "Sthala_Varalaru": "Varuni, daughter of Varuna, was cursed to have a goat head and elephant body, but was relieved here by worshipping Shiva (Aadu = goat, Aanai = elephant). Sun God worshipped the blue-hued Lingam here. Milk offered at noon turns blue.",
        "Travel_Details": "Located in Tiruvadanai, 45 km from Karaikudi via Devakottai, and 50 km from Sivagangai.",
        "Name_EN": "Tiruvadanai Adhirathineswarar"
    },
    {
        "District": "சிவகங்கை மாவட்டம்",
        "Details": "253. கொடுங்குன்றநாதர் - பிரான்மலை.மதுரை- பொன்னமராவதி வழியில் 65 கி.மீ., - 94431 91300, 04577- 246 170.",
        "ID": "PNT005",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "254. திருத்தளி நாதர் - திருப்புத்தூர். மதுரை-தஞ்சாவூர் வழியில் 70 கி.மீ. - 94420 47593.",
        "ID": "PNT006",
        "God": "Tiru-Thalinathar / Tiru-Thaleeswarar",
        "Goddess": "Shivakami / Soundarya Nayaki",
        "Sthala_Varalaru": "Mahalakshmi worshipped Shiva here to witness the 'Gauri Thandavam' dance. Sage Valmiki performed penance here as a snake hill (Putru). Prominent for Yoga Bhairavar (Adhi Bhairava), who is seated in yoga nidra.",
        "Travel_Details": "Located in Tirupputtur, between Madurai (65 km) and Karaikudi (20 km). 35 km from Sivagangai.",
        "Name_EN": "Tirupputtur Tiruthalinathar"
    },
    {
        "District": "",
        "Details": "255. சொர்ணகாளீஸ்வரர் - காளையார் கோவில்.மதுரை- தொண்டி வழியில் 70 கி.மீ., - 94862 12371, 04575- 232 516.",
        "ID": "PNT010",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "256. புஷ்பவனேஸ்வரர் - திருப்புவனம். மதுரை-ராமேஸ்வரம் ரோட்டில் 18 கி.மீ., - 04575- 265 082, 265 084.",
        "ID": "PNT011",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "விருதுநகர் மாவட்டம்",
        "Details": "257. திருமேனிநாதர் - திருச்சுழி. மதுரையில் இருந்து அருப்புக்கோட்டை வழி 35 கி.மீ., - 04566 - 282 644.",
        "ID": "PNT012",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "திருநெல்வேலி மாவட்டம்",
        "Details": "258. நெல்லையப்பர் - திருநெல்வேலி. மதுரையிலிருந்து 152 கி.மீ., - 0462 - 233 9910.",
        "ID": "PNT014",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "259. குற்றாலநாதர் - குற்றாலம். மதுரையிலிருந்து 155 கி.மீ., 04633 - 283 138, 210 138.",
        "ID": "PNT013",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "புதுச்சேரி",
        "Details": "260. தர்ப்பாரண்யேஸ்வரர் - திருநள்ளாறு. மயிலாடுதுறையிலிருந்து 33 கி.மீ., - 04368 - 236 530, 236 504.",
        "ID": "SCN052",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "261. சுந்தரேஸ்வரர் - திருவேட்டக்குடி.காரைக்கால் - பொறையார் வழியில் 6 கி.மீ. - 98940 51753, 04368 - 265 693.",
        "ID": "SCN049",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "262. பார்வதீஸ்வரர் - திருத்தெளிச்சேரி. காரைக்கால் பஸ்ஸ்டாண்ட் பின்புறம் - 04368 - 221 009.",
        "ID": "SCN050",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "263. யாழ்மூரிநாதர் - தருமபுரம்.காரைக்காலில் இருந்து 4 கி.மீ. - 04368 - 226 616.",
        "ID": "SCN051",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "264. வடுகீஸ்வரர் - திருவண்டார்கோயில். புதுச்சேரியிலிருந்து 20 கி.மீ., - 99941 90417.",
        "ID": "NN016",
        "God": "Vadukeeswarar / Panchanatheeswarar",
        "Goddess": "Vaduvagirkkanniammai / Tripurasundari",
        "Sthala_Varalaru": "Named after Vaduka Bhairavar who worshipped Shiva here for absolution from the sin of killing demon Mundasuran. Maintained by ASI. The vimanam reflects the architectural style of Tanjore Big Temple. Inscriptions date back to the 10th-century Chola period (Paranthaka I).",
        "Travel_Details": "Located in Tiruvandarkoil, 21 km East of Villupuram on the Puducherry National Highway (NH45A). Near Villianur.",
        "Name_EN": "Tiruvadugur Tiruvandarkoil Vadukeeswarar"
    },
    {
        "District": "கேரளா",
        "Details": "265. மகாதேவர் - திருவஞ்சிக்குளம்.திருச்சூரிலிருந்து 38 கி.மீ., - 0480 - 281 2061",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "கர்நாடகா",
        "Details": "266. மல்லிகார்ஜுனர் - ஸ்ரீசைலம்.சென்னையில் இருந்து ஓங்கோல், ஓங்கோலில் இருந்து 80 கி.மீ., - 08524 - 288 881.",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "ஆந்திரா",
        "Details": "267. மகாபலேஸ்வரர் - திருக்கோகர்ணம்.மங்களூருவிலிருந்து உடுப்பி வழி 230 கி.மீ., - 08386 - 256 167, 257 167",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "268. காளத்தியப்பர் - காளஹஸ்தி, திருப்பதியில் இருந்து 30 கி.மீ., - 08578 - 222 240.",
        "ID": "TN019",
        "God": "Srikalahasteeswarar / Kalahathiswarar",
        "Goddess": "Gnana Prasunambika",
        "Sthala_Varalaru": "Vayu (Air) Sthalam of the Pancha Bhoota Sthalams. The Lingam is a white stone Swayambhu. Named after 'Sri' (spider), 'Kala' (serpent), and 'Hasti' (elephant) who attained salvation here. Site of Kannappa Nayanar's sacrifice where he offered his eyes to Shiva. Known as 'Dakshina Kailasam'. The lamps in the sanctum flicker despite no air flow.",
        "Travel_Details": "36 km from Tirupati, Andhra Pradesh. Well connected by bus and rail. One of the few temples that remains open during eclipses.",
        "Name_EN": "Srikalahasti Kalahasteeswarar"
    },
    {
        "District": "உத்தரகண்ட்",
        "Details": "269. அருள்மன்ன நாயகர் - கவுரிகுண்ட் (அநேகதங்காவதம்) ரிஷிகேஷிலிருந்து 84 கி.மீ.,",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "270. கேதாரநாதர் - கேதர்நாத். ஹரித்துவாரிலிருந்து 253 கி.மீ.,",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "நேபாளம்",
        "Details": "271. நீலாச்சல நாதர் - இந்திரநீல பருப்பதம். காட்மாண்டு",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "திபெத்",
        "Details": "272. கைலாயநாதர் - கைலாஷ்(இமயமலை)",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "இலங்கை",
        "Details": "273. திருக்கேதீச்வரர் - மாதோட்ட நகரம், தலைமன்னார்.",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "",
        "Details": "274. கோணேஸ்வரர் - திரிகோணமலை.",
        "ID": "",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    },
    {
        "District": "பிறசேர்க்கை மேலும் இரண்டு கோயில்கள் பாடல் பெற்ற தலங்களாக சேர்க்கப்பட்டுள்ளன.",
        "Details": "275. அகஸ்தீஸ்வரர் - கிளியனூர். திண்டிவனம்- புதுச்சேரி வழியில் 18 கி.மீ., - 94427 86709.",
        "ID": "NN023",
        "God": "Agastheeswarar",
        "Goddess": "Akilandeswari",
        "Sthala_Varalaru": "Nearly 1500 years old, built by Chola kings. Named 'Kiliyanur' after the Chola lineage (Killi). Worshipped by Sage Agasthya and Sage Sukhabrahma, who sought relief from stomach pain. Features unique adjacent shrines for Krodhana Bhairavar and Kaala Bhairavar. Adisesha is also believed to have worshipped here.",
        "Travel_Details": "Located in Kiliyanur, 18 km from Tindivanam on the Pondicherry route (NH66).",
        "Name_EN": "Kiliyanur Agastheeswarar"
    },
    {
        "District": "",
        "Details": "276. புண்ணியகோடியப்பர் - திருவிடைவாசல். தஞ்சாவூர்-திருவாரூர் ரோட்டில் (கொரடாச்சேரி வழி) 45 கி.மீ., - 94433 32853, 04366-232 853.",
        "ID": "SCN128",
        "God": "",
        "Goddess": "",
        "Sthala_Varalaru": "",
        "Travel_Details": "",
        "Name_EN": ""
    }
];

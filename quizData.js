// Quiz Data
const quizData = {
  // --- STANDARD 1 ---
  "1": {
    "Mathematics": [
     {
        question: "What is 2 + 3?",
        options: ["4", "5", "6", "7"],
        answer: "5",
      },
      {
        question: "Count the apples: 🍎🍎🍎",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question: "What is 5 - 2?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
      {
        question: "Which number comes after 9?",
        options: ["8", "10", "11", "12"],
        answer: "10",
      },
      {
        question: "Which is a circle?",
        options: ["Square", "Ball", "Box", "Star"],
        answer: "Ball",
      },
    ],
    "English": [
      {
        question: 'First letter of "Apple"?',
        options: ["A", "B", "C", "D"],
        answer: "A",
      },
      {
        question: "Which is a naming word (Noun)?",
        options: ["Run", "Cat", "Big", "Fast"],
        answer: "Cat",
      },
      {
        question: "Opposite of 'Hot'?",
        options: ["Warm", "Cold", "Sun", "Fire"],
        answer: "Cold",
      },
      {
        question: "Which one is a vowel?",
        options: ["B", "M", "E", "T"],
        answer: "E",
      },
      {
        question: "A ____ flies in the sky.",
        options: ["Fish", "Bird", "Dog", "Car"],
        answer: "Bird",
      },
    ],
    "Science": [
      {
        question: "Which part of the body helps us see?",
        options: ["Ears", "Nose", "Eyes", "Hands"],
        answer: "Eyes",
      },
      {
        question: "Plants need ____ to grow.",
        options: ["Milk", "Water", "Toys", "Chocolate"],
        answer: "Water",
      },
      {
        question: "Which animal gives us milk?",
        options: ["Lion", "Cow", "Tiger", "Bird"],
        answer: "Cow",
      },
      {
        question: "The color of leaves is usually...",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Green",
      },
      {
        question: "Which is a living thing?",
        options: ["Stone", "Chair", "Tree", "Pen"],
        answer: "Tree",
      },
    ],
    "Social Science": [
      {
        question: "Who is the father of our nation?",
        options: ["Nehru", "Gandhiji", "Patel", "Modi"],
        answer: "Gandhiji",
      },
      {
        question: "In which country do we live?",
        options: ["USA", "India", "Japan", "China"],
        answer: "India",
      },
      {
        question: "Red light in traffic means...",
        options: ["Go", "Wait", "Stop", "Run"],
        answer: "Stop",
      },
      {
        question: "We celebrate Republic Day in...",
        options: ["August", "January", "October", "March"],
        answer: "January",
      },
      {
        question: "A person who teaches is a...",
        options: ["Doctor", "Teacher", "Pilot", "Farmer"],
        answer: "Teacher",
      },
    ],
    "Marathi": [
      {
        question: "मुलगा (Boy) चा विरुद्धार्थी शब्द कोणता?",
        options: ["मुलगी", "आई", "बाबा", "मित्र"],
        answer: "मुलगी",
      },
      {
        question: "खालीलपैकी कोणता रंग 'लाल' आहे?",
        options: ["गवत", "आकाश", "टोमॅटो", "कावळा"],
        answer: "टोमॅटो",
      },
      {
        question: "आपला राष्ट्रीय प्राणी कोणता?",
        options: ["सिंह", "वाघ", "हत्ती", "घोडा"],
        answer: "वाघ",
      },
      {
        question: "सफरचंद कोणत्या रंगाचे असते?",
        options: ["निळा", "पिवळा", "लाल", "काळा"],
        answer: "लाल",
      },
      {
        question: "एक, दोन, ____, चार. गाळलेली जागा भरा.",
        options: ["पाच", "तीन", "सहा", "सात"],
        answer: "तीन",
      },
    ],
  },
  "2": {
    "Mathematics": [
      {
        question: "What is 10 + 20?",
        options: ["20", "30", "40", "50"],
        answer: "30",
      },
      {
        question: "Which is the smallest 2-digit number?",
        options: ["1", "10", "11", "99"],
        answer: "10",
      },
      {
        question: "5 groups of 2 makes?",
        options: ["7", "8", "10", "12"],
        answer: "10",
      },
      {
        question: "What comes before 50?",
        options: ["48", "49", "51", "52"],
        answer: "49",
      },
      {
        question: "A triangle has how many sides?",
        options: ["2", "3", "4", "5"],
        answer: "3",
      },
    ],
    "Science": [
      {
        question: "Which animal is the 'Ship of the Desert'?",
        options: ["Horse", "Camel", "Elephant", "Cow"],
        answer: "Camel",
      },
      {
        question: "We get wool from...",
        options: ["Dog", "Sheep", "Cat", "Lion"],
        answer: "Sheep",
      },
      {
        question: "Which part of the plant is underground?",
        options: ["Leaf", "Flower", "Root", "Stem"],
        answer: "Root",
      },
      {
        question: "Which is a wild animal?",
        options: ["Goat", "Tiger", "Hen", "Pig"],
        answer: "Tiger",
      },
      {
        question: "Sun rises in the...",
        options: ["West", "North", "East", "South"],
        answer: "East",
      },
    ],
    "English": [
      {
        question: "Which is a rhyming word for 'Cat'?",
        options: ["Dog", "Bat", "Cot", "Bun"],
        answer: "Bat",
      },
      {
        question: "The ____ is barking.",
        options: ["Cat", "Dog", "Bird", "Fish"],
        answer: "Dog",
      },
      {
        question: "Opposite of 'Big'?",
        options: ["Tall", "Small", "Fat", "Long"],
        answer: "Small",
      },
      {
        question: "Which is a fruit?",
        options: ["Potato", "Mango", "Onion", "Rose"],
        answer: "Mango",
      },
      {
        question: "Identify the vowel in 'PIG'.",
        options: ["P", "G", "I", "S"],
        answer: "I",
      },
    ],
    "Social Science": [
      {
        question: "Who treats us when we are sick?",
        options: ["Teacher", "Doctor", "Pilot", "Farmer"],
        answer: "Doctor",
      },
      {
        question: "Which festival is the 'Festival of Lights'?",
        options: ["Holi", "Eid", "Diwali", "Christmas"],
        answer: "Diwali",
      },
      {
        question: "We should cross the road at the ____ crossing.",
        options: ["Lion", "Zebra", "Tiger", "Horse"],
        answer: "Zebra",
      },
      {
        question: "Where do we go to study?",
        options: ["Market", "Park", "School", "Bank"],
        answer: "School",
      },
      {
        question: "Which is our National Bird?",
        options: ["Sparrow", "Peacock", "Parrot", "Crow"],
        answer: "Peacock",
      },
    ],
    "Marathi": [
      {
        question: "पावसाळ्यात आपण काय वापरतो?",
        options: ["छत्री", "स्वेटर", "टोपी", "शाल"],
        answer: "छत्री",
      },
      {
        question: "'फुले' या शब्दाचे एकवचन काय?",
        options: ["फूल", "फळ", "फांदी", "काटा"],
        answer: "फूल",
      },
      {
        question: "आपला राष्ट्रीय खेळ कोणता?",
        options: ["क्रिकेट", "हॉकी", "कबड्डी", "खो-खो"],
        answer: "हॉकी",
      },
      {
        question: "पोपट कोणत्या रंगाचा असतो?",
        options: ["लाल", "निळा", "हिरवा", "पांढरा"],
        answer: "हिरवा",
      },
      {
        question: "आईच्या भावाला काय म्हणतात?",
        options: ["काका", "मामा", "आत्या", "मावशी"],
        answer: "मामा",
      },
    ],
  },

  // --- STANDARD 3 ---
  "3": {
    "Mathematics": [
      {
        question: "What is 400 + 50 + 6?",
        options: ["456", "465", "546", "654"],
        answer: "456",
      },
      {
        question: "How many minutes in an hour?",
        options: ["30", "60", "90", "100"],
        answer: "60",
      },
      {
        question: "What is 8 x 4?",
        options: ["24", "30", "32", "36"],
        answer: "32",
      },
      {
        question: "Which is an even number?",
        options: ["7", "13", "18", "21"],
        answer: "18",
      },
      {
        question: "A square has ____ equal sides.",
        options: ["2", "3", "4", "0"],
        answer: "4",
      },
    ],
    "Science": [
      {
        question: "Which organ helps us breathe?",
        options: ["Stomach", "Lungs", "Heart", "Liver"],
        answer: "Lungs",
      },
      {
        question: "Water changes to steam on...",
        options: ["Cooling", "Freezing", "Heating", "Shaking"],
        answer: "Heating",
      },
      {
        question: "Which animal lives both on land and water?",
        options: ["Fish", "Frog", "Cow", "Monkey"],
        answer: "Frog",
      },
      {
        question: "Which planet do we live on?",
        options: ["Mars", "Jupiter", "Earth", "Saturn"],
        answer: "Earth",
      },
      {
        question: "Force that pulls things to Earth?",
        options: ["Magnetic", "Friction", "Gravity", "Muscular"],
        answer: "Gravity",
      },
    ],
    "English": [
      {
        question: "Identify the Verb: 'He is running'.",
        options: ["He", "Is", "Running", "Fast"],
        answer: "Running",
      },
      {
        question: "Plural of 'Box'?",
        options: ["Boxs", "Boxies", "Boxes", "Boxen"],
        answer: "Boxes",
      },
      {
        question: "A ____ of bees.",
        options: ["Flock", "Swarm", "Herd", "Pack"],
        answer: "Swarm",
      },
      {
        question: "Past tense of 'Eat'?",
        options: ["Eaten", "Eating", "Ate", "Eats"],
        answer: "Ate",
      },
      {
        question: "Young one of a Cow is called?",
        options: ["Cub", "Puppy", "Calf", "Kitten"],
        answer: "Calf",
      },
    ],
    "Social Science": [
      {
        question: "The capital of India is...",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi",
      },
      {
        question: "Who was Shivaji Maharaj's mother?",
        options: ["Putlabai", "Saibai", "Jijabai", "Soyarabai"],
        answer: "Jijabai",
      },
      {
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Ganga", "Godavari", "Krishna"],
        answer: "Ganga",
      },
      {
        question: "How many states are there in India?",
        options: ["25", "28", "29", "30"],
        answer: "28",
      },
      {
        question: "Which is the smallest state in India?",
        options: ["Goa", "Sikkim", "Kerala", "Assam"],
        answer: "Goa",
      },
    ],
    "Marathi": [
      {
        question: "'हाक मारणे' म्हणजे काय?",
        options: ["पळणे", "ओरडणे", "बोलावणे", "मारणे"],
        answer: "बोलावणे",
      },
      {
        question: "कमळ कुठे फुलते?",
        options: ["जमिनीत", "पाण्यात", "झाडावर", "आकाशात"],
        answer: "पाण्यात",
      },
      {
        question: "गुढीपाडवा कोणत्या ऋतूत येतो?",
        options: ["हिवाळा", "उन्हाळा", "वसंत", "पावसाळा"],
        answer: "वसंत",
      },
      {
        question: "वाघाची राहण्याची जागा कोणती?",
        options: ["घर", "गुहा", "तळे", "पोळे"],
        answer: "गुहा",
      },
      {
        question: "मराठी वर्षाचा पहिला महिना कोणता?",
        options: ["वैशाख", "चैत्र", "फाल्गुन", "आषाढ"],
        answer: "चैत्र",
      },
    ],
  },

  // --- STANDARD 4 ---
  "4": {
    "Mathematics": [
      {
        question: "What is the place value of 5 in 543?",
        options: ["5", "50", "500", "5000"],
        answer: "500",
      },
      {
        question: "How many grams in 1 Kilogram?",
        options: ["10", "100", "500", "1000"],
        answer: "1000",
      },
      {
        question: "What is 15 x 6?",
        options: ["80", "90", "100", "75"],
        answer: "90",
      },
      {
        question: "A leap year has ____ days.",
        options: ["364", "365", "366", "360"],
        answer: "366",
      },
      {
        question: "Radius is ____ of Diameter.",
        options: ["Double", "Half", "Equal", "Triple"],
        answer: "Half",
      },
    ],
    "Science": [
      {
        question: "Main source of energy on Earth?",
        options: ["Moon", "Electricity", "Sun", "Fire"],
        answer: "Sun",
      },
      {
        question: "Plants make food using...",
        options: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"],
        answer: "Photosynthesis",
      },
      {
        question: "Which gas is needed for burning?",
        options: ["Nitrogen", "Oxygen", "CO2", "Hydrogen"],
        answer: "Oxygen",
      },
      {
        question: "Hardest substance in the body?",
        options: ["Bone", "Enamel", "Muscle", "Skin"],
        answer: "Enamel",
      },
      {
        question: "An instrument to measure temperature?",
        options: ["Barometer", "Compass", "Thermometer", "Scale"],
        answer: "Thermometer",
      },
    ],
    "English": [
      {
        question: "Synonym of 'Large'?",
        options: ["Tiny", "Huge", "Thin", "Slow"],
        answer: "Huge",
      },
      {
        question: "The feminine of 'Tiger' is...",
        options: ["Tigeress", "Tigress", "Lioness", "She-Tiger"],
        answer: "Tigress",
      },
      {
        question: "A person who flies a plane?",
        options: ["Driver", "Captain", "Pilot", "Astronaut"],
        answer: "Pilot",
      },
      {
        question: "Identify the Pronoun: 'She is my friend'.",
        options: ["She", "Is", "My", "Friend"],
        answer: "She",
      },
      {
        question: "Which is the silent letter in 'Knee'?",
        options: ["N", "E", "K", "None"],
        answer: "K",
      },
    ],
    "Social Science": [
      {
        question: "Who was the 'Lion of Maharashtra'?",
        options: ["Tilak", "Shivaji Maharaj", "Sambhaji Maharaj", "Bajirao"],
        answer: "Shivaji Maharaj",
      },
      {
        question: "Raigad was the capital of which Empire?",
        options: ["Mughal", "Maratha", "British", "Chola"],
        answer: "Maratha",
      },
      {
        question: "Which ocean is to the West of Maharashtra?",
        options: ["Indian", "Arabian Sea", "Pacific", "Bay of Bengal"],
        answer: "Arabian Sea",
      },
      {
        question: "The 'Gateway of India' is in...",
        options: ["Delhi", "Mumbai", "Pune", "Kolkata"],
        answer: "Mumbai",
      },
      {
        question: "Our National Anthem was written by...",
        options: ["Tagore", "Nehru", "Patel", "Savarkar"],
        answer: "Tagore",
      },
    ],
    "Marathi": [
      {
        question: "'राजा' या शब्दाचा समानार्थी शब्द सांगा.",
        options: ["प्रजा", "भूपती", "सेवक", "प्रधान"],
        answer: "भूपती",
      },
      {
        question: "पुढील म्हण पूर्ण करा: 'अति तिथे ____'.",
        options: ["माती", "पाणी", "खरे", "भले"],
        answer: "माती",
      },
      {
        question: "खालीलपैकी शुद्ध शब्द कोणता?",
        options: ["आशिर्वाद", "आशीर्वाद", "अशिर्वाद", "अशीर्वाध"],
        answer: "आशीर्वाद",
      },
      {
        question: "मुलगा या शब्दाचे अनेकवचन काय?",
        options: ["मुले", "मुलगे", "मुली", "मुलगाच"],
        answer: "मुले",
      },
      {
        question: "ज्याला मरण नाही असा...",
        options: ["अमर", "अजर", "अतुल", "अविनाशी"],
        answer: "अमर",
      },
    ],
  },
  "5": {
    "Mathematics": [
      {
        question: "What is 12 × 3?",
        options: ["24", "36", "48", "60"],
        answer: "36",
      },
      {
        question: "Which is a prime number?",
        options: ["4", "9", "7", "15"],
        answer: "7",
      },
      {
        question: "100 cm = ____ meter.",
        options: ["1", "10", "100", "0.1"],
        answer: "1",
      },
      {
        question: "Angle of 90 degrees is called?",
        options: ["Acute", "Obtuse", "Right", "Straight"],
        answer: "Right",
      },
      {
        question: "What is 500 + 250?",
        options: ["650", "750", "850", "700"],
        answer: "750",
      },
    ],
    "Science": [
      {
        question: "Which gas do humans breathe in?",
        options: ["CO2", "Oxygen", "Nitrogen", "Helium"],
        answer: "Oxygen",
      },
      {
        question: "Boiling point of water is...",
        options: ["50°C", "100°C", "0°C", "200°C"],
        answer: "100°C",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars",
      },
      {
        question: "Lack of Vitamin C causes...",
        options: ["Scurvy", "Rickets", "Anemia", "Beriberi"],
        answer: "Scurvy",
      },
      {
        question: "The brain is part of the ____ system.",
        options: ["Digestive", "Nervous", "Skeletal", "Respiratory"],
        answer: "Nervous",
      },
    ],
    "English": [
      {
        question: "Identify the Adjective: 'The blue sky'.",
        options: ["The", "Blue", "Sky", "Is"],
        answer: "Blue",
      },
      {
        question: "Past tense of 'Go'?",
        options: ["Gone", "Going", "Went", "Goes"],
        answer: "Went",
      },
      {
        question: "Plural of 'Mouse'?",
        options: ["Mouses", "Mice", "Micey", "Rat"],
        answer: "Mice",
      },
      {
        question: "Which is a conjunction?",
        options: ["And", "Quickly", "He", "Under"],
        answer: "And",
      },
      {
        question: "Synonym of 'Happy'?",
        options: ["Sad", "Angry", "Joyful", "Small"],
        answer: "Joyful",
      },
    ],
    "Social Science": [
      {
        question: "The capital of Maharashtra is...",
        options: ["Pune", "Nagpur", "Mumbai", "Nashik"],
        answer: "Mumbai",
      },
      {
        question: "Who wrote the Indian Constitution?",
        options: ["Nehru", "Dr. Ambedkar", "Gandhiji", "Tilak"],
        answer: "Dr. Ambedkar",
      },
      {
        question: "The highest mountain peak in India is...",
        options: ["Everest", "Kanchenjunga", "K2", "Anamudi"],
        answer: "Kanchenjunga",
      },
      {
        question: "Gram Panchayat is headed by...",
        options: ["Mayor", "Sarpanch", "Tehsildar", "Collector"],
        answer: "Sarpanch",
      },
      {
        question: "Which fort was Shivaji Maharaj's birthplace?",
        options: ["Raigad", "Shivneri", "Pratapgad", "Sinhagad"],
        answer: "Shivneri",
      },
    ],
    "Marathi": [
      {
        question: "सूर्य कोणत्या दिशेला उगवतो?",
        options: ["पश्चिम", "उत्तर", "पूर्व", "दक्षिण"],
        answer: "पूर्व",
      },
      {
        question: "विश्रांती या शब्दाचा अर्थ काय?",
        options: ["काम", "आराम", "पळणे", "झोप"],
        answer: "आराम",
      },
      {
        question: "मराठी भाषेत एकूण किती स्वर आहेत?",
        options: ["१०", "१४", "१२", "३४"],
        answer: "१४",
      },
      {
        question: "घोडा या शब्दाचे स्त्रीलिंगी रूप काय?",
        options: ["घोडी", "घोड्या", "वारु", "तट्टू"],
        answer: "घोडी",
      },
      {
        question: "ज्ञानेश्वरांनी कोणती ग्रंथाची रचना केली?",
        options: ["दासबोध", "ज्ञानेश्वरी", "गाथा", "अभंग"],
        answer: "ज्ञानेश्वरी",
      },
    ],
  },
  "6": {
    "Mathematics": [
      {
        question: "Sum of angles in a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: "180°",
      },
      {
        question: "Smallest natural number?",
        options: ["0", "1", "-1", "10"],
        answer: "1",
      },
      {
        question: "What is 10% of 500?",
        options: ["5", "50", "100", "55"],
        answer: "50",
      },
      {
        question: "Area of rectangle = Length x ____.",
        options: ["Width", "Height", "Diagonal", "Side"],
        answer: "Width",
      },
      {
        question: "Which is an integer?",
        options: ["0.5", "-3", "1/2", "√2"],
        answer: "-3",
      },
    ],
    "Science": [
      {
        question: "Component of air used in fire extinguishers?",
        options: ["Oxygen", "Nitrogen", "CO2", "Argon"],
        answer: "CO2",
      },
      {
        question: "What is the percentage of Oxygen in air?",
        options: ["78%", "21%", "1%", "0.03%"],
        answer: "21%",
      },
      {
        question: "Process by which plants lose water?",
        options: [
          "Photosynthesis",
          "Transpiration",
          "Digestion",
          "Respiration",
        ],
        answer: "Transpiration",
      },
      {
        question: "Magnet always points in which direction?",
        options: ["East-West", "North-South", "Up-Down", "Diagonal"],
        answer: "North-South",
      },
      {
        question: "Scurvy is caused by deficiency of Vitamin...",
        options: ["A", "B", "C", "D"],
        answer: "C",
      },
    ],
    "English": [
      {
        question:
          "Choose the correct Preposition: 'The book is ____ the table'.",
        options: ["In", "On", "Between", "Through"],
        answer: "On",
      },
      {
        question: "Which is a Proper Noun?",
        options: ["City", "Boy", "Pune", "School"],
        answer: "Pune",
      },
      {
        question: "Degree of 'Good' - Good, ____, Best.",
        options: ["Gooder", "Better", "Well", "Nice"],
        answer: "Better",
      },
      {
        question: "One who cannot hear is...",
        options: ["Blind", "Dumb", "Deaf", "Lame"],
        answer: "Deaf",
      },
      {
        question: "Identify the Adverb: 'She sings sweetly'.",
        options: ["She", "Sings", "Sweetly", "Song"],
        answer: "Sweetly",
      },
    ],
    "Social Science": [
      {
        question: "Who was the first Tirthankara of Jains?",
        options: ["Mahavira", "Rishabhdev", "Parshvanath", "Neminath"],
        answer: "Rishabhdev",
      },
      {
        question: "Megasthenes visited the court of...",
        options: ["Ashoka", "Chandragupta Maurya", "Harsha", "Akbar"],
        answer: "Chandragupta Maurya",
      },
      {
        question: "Which is the largest continent?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: "Asia",
      },
      {
        question: "The imaginary line dividing Earth into North/South?",
        options: [
          "Equator",
          "Tropic of Cancer",
          "Prime Meridian",
          "Arctic Circle",
        ],
        answer: "Equator",
      },
      {
        question: "Zilla Parishad is at which level?",
        options: ["Village", "Block", "District", "State"],
        answer: "District",
      },
    ],
    "Marathi": [
      {
        question: "पुढीलपैकी कोणते नाम भाववाचक आहे?",
        options: ["माणूस", "नदी", "शौर्य", "पर्वत"],
        answer: "शौर्य",
      },
      {
        question: "'सन्मती' या शब्दाचा विग्रह करा.",
        options: ["स + मती", "सत + मती", "सन + मती", "सम + मती"],
        answer: "सत + मती",
      },
      {
        question: "'हात टेकणे' या वाक्प्रचाराचा अर्थ सांगा.",
        options: ["शरण येणे", "मदत करणे", "मारणे", "आशीर्वाद देणे"],
        answer: "शरण येणे",
      },
      {
        question: "मराठीतील आद्य कवी कोणाला मानतात?",
        options: ["मुकुंदराज", "ज्ञानेश्वर", "नामदेव", "तुकाराम"],
        answer: "मुकुंदराज",
      },
      {
        question: "आकाशाचे नाव सांगा (समानार्थी).",
        options: ["नभ", "कमल", "वारा", "धरा"],
        answer: "नभ",
      },
    ],
  },

  // --- STANDARD 7 ---
  "7": {
    "Mathematics": [
      {
        question: "What is (-5) x (-4)?",
        options: ["-20", "20", "9", "-9"],
        answer: "20",
      },
      {
        question: "Formula for area of a circle?",
        options: ["2πr", "πr²", "πd", "2πr²"],
        answer: "πr²",
      },
      {
        question: "Pythagoras theorem applies to which triangle?",
        options: ["Acute", "Obtuse", "Right-angled", "Equilateral"],
        answer: "Right-angled",
      },
      {
        question: "What is 2 raised to power 3 (2³)?",
        options: ["6", "8", "16", "5"],
        answer: "8",
      },
      {
        question: "Ratio of 1 km to 500 m is...",
        options: ["1:500", "2:1", "1:2", "5:1"],
        answer: "2:1",
      },
    ],
    "Science": [
      {
        question: "Unit of frequency?",
        options: ["Hertz", "Decibel", "Joule", "Watt"],
        answer: "Hertz",
      },
      {
        question: "Acid found in Lemon?",
        options: ["Acetic", "Citric", "Lactic", "Tartaric"],
        answer: "Citric",
      },
      {
        question: "Speed of light is maximum in...",
        options: ["Water", "Glass", "Air", "Vacuum"],
        answer: "Vacuum",
      },
      {
        question: "Which organ produces Bile?",
        options: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
        answer: "Liver",
      },
      {
        question: "Chemical formula of common salt?",
        options: ["NaCl", "KCl", "NaOH", "HCl"],
        answer: "NaCl",
      },
    ],
    "English": [
      {
        question: "Identify the Tense: 'I had finished my work'.",
        options: [
          "Past Continuous",
          "Past Perfect",
          "Present Perfect",
          "Simple Past",
        ],
        answer: "Past Perfect",
      },
      {
        question: "Synonym of 'Fragile'?",
        options: ["Strong", "Delicate", "Fast", "Old"],
        answer: "Delicate",
      },
      {
        question: "Suffix in 'Happiness'?",
        options: ["Happi", "Ness", "Hap", "Ess"],
        answer: "Ness",
      },
      {
        question: "Antonym of 'Brave'?",
        options: ["Coward", "Fearless", "Strong", "Bold"],
        answer: "Coward",
      },
      {
        question: "Direct speech uses ____ marks.",
        options: ["Question", "Exclamation", "Quotation", "Dash"],
        answer: "Quotation",
      },
    ],
    "Social Science": [
      {
        question: "Who founded the Mughal Empire?",
        options: ["Akbar", "Humayun", "Babar", "Aurangzeb"],
        answer: "Babar",
      },
      {
        question: "The Battle of Haldighati was fought in...",
        options: ["1526", "1556", "1576", "1761"],
        answer: "1576",
      },
      {
        question: "Highest layer of Atmosphere?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
        answer: "Exosphere",
      },
      {
        question: "Which is the 'Coldest Place' in India?",
        options: ["Shimla", "Drass", "Leh", "Manali"],
        answer: "Drass",
      },
      {
        question: "Who appoints the Governor of a State?",
        options: ["PM", "President", "Chief Justice", "People"],
        answer: "President",
      },
    ],
    "Marathi": [
      {
        question: "कर्तरी प्रयोगात कर्ता नेहमी कोणत्या विभक्तीत असतो?",
        options: ["द्वितीया", "तृतीया", "प्रथमा", "चतुर्थी"],
        answer: "प्रथमा",
      },
      {
        question: "'आशीर्वाद' या शब्दाचा विरुद्धार्थी शब्द सांगा.",
        options: ["वरदान", "शाप", "दुवा", "कृपा"],
        answer: "शाप",
      },
      {
        question: "मराठीतील 'स्वर' किती आहेत?",
        options: ["१०", "१२", "१४", "३४"],
        answer: "१४",
      },
      {
        question: "'उंटावरचा शहाणा' म्हणजे काय?",
        options: [
          "हुशार माणूस",
          "मूर्खपणाचा सल्ला देणारा",
          "उंट पाळणारा",
          "श्रीमंत",
        ],
        answer: "मूर्खपणाचा सल्ला देणारा",
      },
      {
        question: "विठ्ठलाचे प्रसिद्ध मंदिर कोठे आहे?",
        options: ["पुणे", "नाशिक", "पंढरपूर", "कोल्हापूर"],
        answer: "पंढरपूर",
      },
    ],
  },

  // --- STANDARD 8 ---
  "8": {
    "Mathematics": [
      {
        question: "Square root of 625?",
        options: ["15", "25", "35", "45"],
        answer: "25",
      },
      {
        question: "Compound Interest Formula: A = P(1 + r/100)^____.",
        options: ["2", "3", "n", "r"],
        answer: "n",
      },
      {
        question: "Value of π (Pi) is approx...",
        options: ["3.14", "22/7", "Both", "None"],
        answer: "Both",
      },
      {
        question: "Parallel lines ____ intersect.",
        options: ["Always", "Never", "Sometimes", "At 90°"],
        answer: "Never",
      },
      {
        question: "Expansion of (a-b)²?",
        options: ["a²+b²", "a²-2ab+b²", "a²-b²", "a²+2ab+b²"],
        answer: "a²-2ab+b²",
      },
    ],
    "Science": [
      {
        question: "Unit of Pressure?",
        options: ["Newton", "Pascal", "Watt", "Joule"],
        answer: "Pascal",
      },
      {
        question: "Sound cannot travel through...",
        options: ["Air", "Water", "Steel", "Vacuum"],
        answer: "Vacuum",
      },
      {
        question: "Which metal is liquid at room temp?",
        options: ["Gold", "Silver", "Mercury", "Copper"],
        answer: "Mercury",
      },
      {
        question: "Process of coating Iron with Zinc?",
        options: ["Rusting", "Galvanization", "Oxidation", "Reduction"],
        answer: "Galvanization",
      },
      {
        question: "Powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
        answer: "Mitochondria",
      },
    ],
    "English": [
      {
        question: "Choose the correct Article: 'He is ____ honest man'.",
        options: ["A", "An", "The", "No article"],
        answer: "An",
      },
      {
        question:
          "Identify the Conjunction: 'Run fast or you will miss the bus'.",
        options: ["Fast", "Or", "Miss", "Will"],
        answer: "Or",
      },
      {
        question: "Meaning of 'Obstacle'?",
        options: ["Path", "Hurdle", "Clear", "Way"],
        answer: "Hurdle",
      },
      {
        question: "Who is the poet of 'Daffodils'?",
        options: ["Keats", "Wordsworth", "Shelley", "Frost"],
        answer: "Wordsworth",
      },
      {
        question: "Tag question for 'He can play':",
        options: ["Can he?", "Can't he?", "Is he?", "Does he?"],
        answer: "Can't he?",
      },
    ],
    "Social Science": [
      {
        question: "Who was the 'Grand Old Man of India'?",
        options: ["Naoroji", "Tilak", "Gokhale", "Bose"],
        answer: "Naoroji",
      },
      {
        question: "Battle of Plassey was fought in...",
        options: ["1757", "1764", "1857", "1942"],
        answer: "1757",
      },
      {
        question: "Which layer of Earth is made of molten magma?",
        options: ["Crust", "Mantle", "Inner Core", "Outer Core"],
        answer: "Mantle",
      },
      {
        question: "Right to Vote in India starts at age...",
        options: ["15", "18", "21", "25"],
        answer: "18",
      },
      {
        question: "The Rajya Sabha is presided over by...",
        options: ["PM", "President", "VP", "Speaker"],
        answer: "VP",
      },
    ],
    "Marathi": [
      {
        question: "समास ओळखा: 'रामलक्ष्मण'",
        options: ["अव्ययीभाव", "द्वंद्व", "तत्पुरुष", "बहुव्रीहि"],
        answer: "द्वंद्व",
      },
      {
        question: "शब्दसमूहाबद्दल एक शब्द: 'सतत काम करणारा'",
        options: ["कामसू", "कष्टाळू", "दीर्घोद्योगी", "आळशी"],
        answer: "दीर्घोद्योगी",
      },
      {
        question: "मराठी वृत्तपत्रांचे जनक कोण?",
        options: ["टिळक", "आगरकर", "बाळशास्त्री जांभेकर", "भाऊ महाजन"],
        answer: "बाळशास्त्री जांभेकर",
      },
      {
        question: "'डोळे झाकणे' या वाक्प्रचाराचा अर्थ सांगा.",
        options: ["झोपणे", "दुर्लक्ष करणे", "शांत बसणे", "काहीही न दिसणे"],
        answer: "दुर्लक्ष करणे",
      },
      {
        question: "पुढीलपैकी कोणते सर्वनाम आहे?",
        options: ["आम्ही", "सुंदर", "गाव", "धावणे"],
        answer: "आम्ही",
      },
    ],
  },
  // --- STANDARD 9 ---
  "9": {
    "Mathematics": [
      {
        question: "What is (a+b)²?",
        options: ["a²+b²", "a²+2ab+b²", "a²-b²", "2a+2b"],
        answer: "a²+2ab+b²",
      },
      {
        question: "Value of sin 90°?",
        options: ["0", "1", "1/2", "Undefined"],
        answer: "1",
      },
      {
        question: "Which is a rational number?",
        options: ["√2", "π", "3/4", "√3"],
        answer: "3/4",
      },
      {
        question: "Sum of angles in a quadrilateral?",
        options: ["180°", "360°", "90°", "540°"],
        answer: "360°",
      },
      {
        question: "Probability of a sure event is...",
        options: ["0", "0.5", "1", "-1"],
        answer: "1",
      },
    ],
    "Science": [
      {
        question: "Unit of Force is...",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: "Newton",
      },
      {
        question: "Chemical symbol of Gold?",
        options: ["Ag", "Fe", "Au", "Pb"],
        answer: "Au",
      },
      {
        question: "Power house of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"],
        answer: "Mitochondria",
      },
      {
        question: "Newton's First Law is also called Law of...",
        options: ["Inertia", "Gravity", "Momentum", "Action"],
        answer: "Inertia",
      },
      {
        question: "What is the pH of pure water?",
        options: ["1", "7", "14", "5"],
        answer: "7",
      },
    ],
    "English": [
      {
        question: "Identify the Figure of Speech: 'Life is a dream'.",
        options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
        answer: "Metaphor",
      },
      {
        question: "Which is an Abstract Noun?",
        options: ["Honesty", "Book", "Team", "City"],
        answer: "Honesty",
      },
      {
        question: "Change to Passive: 'He eats an apple'.",
        options: [
          "An apple is eaten by him",
          "He was eating an apple",
          "Apple eaten by him",
          "An apple he eats",
        ],
        answer: "An apple is eaten by him",
      },
      {
        question: "Meaning of 'Abundant'?",
        options: ["Scarcity", "Plentiful", "Rare", "Missing"],
        answer: "Plentiful",
      },
      {
        question: "A person who writes a book is an...",
        options: ["Editor", "Author", "Painter", "Poet"],
        answer: "Author",
      },
    ],
    "Social Science": [
      {
        question: "French Revolution started in...",
        options: ["1789", "1857", "1914", "1776"],
        answer: "1789",
      },
      {
        question: "Fundamental Rights are in which part of Constitution?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: "Part III",
      },
      {
        question: "Highest peak in the World?",
        options: ["K2", "Mount Everest", "Lhotse", "Makalu"],
        answer: "Mount Everest",
      },
      {
        question: "Earth's core is mainly made of...",
        options: ["Iron/Nickel", "Silicon", "Magnesium", "Carbon"],
        answer: "Iron/Nickel",
      },
      {
        question: "Who was the first woman President of India?",
        options: [
          "Indira Gandhi",
          "Pratibha Patil",
          "Droupadi Murmu",
          "Sarojini Naidu",
        ],
        answer: "Pratibha Patil",
      },
    ],
    "Marathi": [
      {
        question: "खालीलपैकी कोणता 'अलंकार' आहे?",
        options: ["नाम", "यमक", "विशेषण", "क्रियापद"],
        answer: "यमक",
      },
      {
        question: "विरामचिन्हे ओळखा: (?)",
        options: ["स्वल्पविराम", "प्रश्नचिन्ह", "पूर्णविराम", "उद्गारचिन्ह"],
        answer: "प्रश्नचिन्ह",
      },
      {
        question: "समास ओळखा: 'पंचवटी'",
        options: ["द्विगु", "द्वंद्व", "अव्ययीभाव", "बहुव्रीहि"],
        answer: "द्विगु",
      },
      {
        question: "आकाशाला भिडणे म्हणजे काय?",
        options: ["खूप उंच जाणे", "आकाश धरणे", "गर्व होणे", "यश मिळवणे"],
        answer: "यश मिळवणे",
      },
      {
        question: "पुढील शब्दाचा विरुद्धार्थी शब्द लिहा: 'विधायक'",
        options: ["अविभक्त", "विघातक", "विचार", "विनायकी"],
        answer: "विघातक",
      },
    ],
  },
  "10": {
    "Mathematics": [
      {
        question: "What is the value of x in the equation 2x + 3 = 11?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
    ],
    "Science": [
      {
        question:
          "What is the value of the Universal Gravitational Constant (G)?",
        options: [
          "9.8 m/s²",
          "6.673 × 10⁻¹¹ Nm²/kg²",
          "1.6 m/s²",
          "6.673 × 10⁻¹¹ N",
        ],
        answer: "6.673 × 10⁻¹¹ Nm²/kg²",
      },
      {
        question:
          "How does the gravitational force change if the distance between two objects is doubled?",
        options: [
          "It doubles",
          "It is halved",
          "It becomes one-fourth",
          "It quadruples",
        ],
        answer: "It becomes one-fourth",
      },
      {
        question: "Which of Kepler's laws is known as the Law of Periods?",
        options: ["First Law", "Second Law", "Third Law", "Newton's Law"],
        answer: "Third Law",
      },
      {
        question: "The acceleration due to gravity (g) is maximum at:",
        options: [
          "The Equator",
          "The Poles",
          "The Center of Earth",
          "Mount Everest",
        ],
        answer: "The Poles",
      },
      {
        question: "What is the weight of an object at the center of the Earth?",
        options: [
          "Same as surface",
          "Infinite",
          "Zero",
          "Double the surface weight",
        ],
        answer: "Zero",
      },
      {
        question:
          "The value of 'g' on the Moon is approximately ____ times the value of 'g' on Earth.",
        options: ["1/2", "6", "1/6", "1/10"],
        answer: "1/6",
      },
      {
        question:
          "Which force is responsible for keeping the planets in their orbits around the Sun?",
        options: [
          "Magnetic force",
          "Centripetal force",
          "Nuclear force",
          "Frictional force",
        ],
        answer: "Centripetal force",
      },
      {
        question: "Escape velocity on Earth is approximately:",
        options: ["11.2 km/s", "9.8 m/s", "8 km/s", "42 km/s"],
        answer: "11.2 km/s",
      },
      {
        question:
          "Mass is a ______ quantity, while weight is a ______ quantity.",
        options: [
          "Scalar, Vector",
          "Vector, Scalar",
          "Scalar, Scalar",
          "Vector, Vector",
        ],
        answer: "Scalar, Vector",
      },
      {
        question:
          "According to Kepler's First Law, the orbit of a planet is an:",
        options: ["Circle", "Ellipse", "Parabola", "Straight line"],
        answer: "Ellipse",
      },
    ],
    "Social Science": [
      {
        question: "Who was the first Prime Minister of India?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Sardar Patel",
          "Indira Gandhi",
        ],
        answer: "Jawaharlal Nehru",
      },
    ],
  },
};

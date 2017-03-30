/**
 * Created by malaka on 2/17/17.
 */

var School = require('../models/school');
var school = [
    new School({name: "Akkaraipattu Muslim Central College", district: "Ampara"}),
    new School({name: "Al Arshath Muslim School, Sammanthurai", district: "Ampara"}),
    new School({name: "Al Ashraq National School (M.m.v.), Nintavur", district: "Ampara"}),
    new School({name: "Al Fathimiy Vidyalaya, Akkaraipattu", district: "Ampara"}),
    new School({name: "Al Ishraq Vidyalaya, Pasarichenai", district: "Ampara"}),
    new School({name: "Al Mathina Maha Vidyalaya, Nintavur", district: "Ampara"}),
    new School({name: "Al Musthafsir International School, Nintavur", district: "Ampara"}),
    new School({name: "Al Siraj Maha Vidyalayam, Akkaraipattu", district: "Ampara"}),
    new School({name: "Bandaranayake Balika Vidyalaya, Ampara", district: "Ampara"}),
    new School({name: "Carmel Fatima College, Kalmunai", district: "Ampara"}),
    new School({name: "Dehiattakandiya Central College", district: "Ampara"}),
    new School({name: "Dharussalam Maha Vidyalaya, Sammanthurai", district: "Ampara"}),
    new School({name: "D. S. Senanayaka National College (M.m.v.) (Central College), Ampara", district: "Ampara"}),
    new School({name: "Gazzaly Muslim Vidyalaya, Sammanthurai", district: "Ampara"}),
    new School({name: "Medagama Navodya School, Nawa Medagama", district: "Ampara"}),
    new School({name: "Muslim Central College, Akkaraipattu", district: "Ampara"}),
    new School({name: "Muslim Madya Maha Vidyalaya - Sammanthurai", district: "Ampara"}),
    new School({name: "Muslim Ladies College, Sammanthurai", district: "Ampara"}),
    new School({name: "Padiyathalawa National School", district: "Ampara"}),
    new School({name: "Rameen Podiyan College", district: "Ampara"}),
    new School({name: "Sri Ramakrishna College, Akkaraipattu", district: "Ampara"}),
    new School({name: "Zahira College, Kalmunai", district: "Ampara"}),
    new School({name: "Wesley High School, Kalmunai", district: "Ampara"}),
    new School({name: "Akbar Vidyalaya, Periyaneelavanai", district: "Ampara"}),
    new School({name: "Ak/minhaj Maha Vidyalaya, palamunai", district: "Ampara"}),
    new School({name: "Al Hamra Vidyalaya, maruthamunai", district: "Ampara"}),
    new School({name: "Al Hilal Maha Vidyalaya, sainthamaruthu", district: "Ampara"}),
    new School({name: "Al Manar Central College Maruthamunai", district: "Ampara"}),
    new School({name: "Al Marjan College, sammanthurai", district: "Ampara"}),
    new School({name: "Al Minan Vidyalaya, maruthamunai", district: "Ampara"}),
    new School({name: "As Siraj Maha Vidyalayam, Chlambaikkeni, Central Camp", district: "Ampara"}),
    new School({name: "Gamini Maha Vidyalaya, Ampara", district: "Ampara"}),
    new School({name: "Kawantissa Maha Vidyalaya, Ampara", district: "Ampara"}),
    new School({name: "Kepitipola Navodya School, Mahaoya", district: "Ampara"}),
    new School({name: "Madawalanda Maha Vidyalaya, Damana", district: "Ampara"}),
    new School({name: "Mahmood Ladies College, Kalmunai", district: "Ampara"}),
    new School({name: "Malharu Sams School, Sainthamaruthu", district: "Ampara"}),
    new School({name: "Muhmad Ladies College, Kalmunai", district: "Ampara"}),
    new School({name: "Polwaththa Maha Vidyalaya", district: "Ampara"}),
    new School({name: "Potuvil Central College", district: "Ampara"}),
    new School({name: "Pulavermani Sharifdeen Vidyalaya, Periyaneelavanai", district: "Ampara"}),
    new School({name: "Ranamadu Hindu Maha Vidyalayam, Central Camp", district: "Ampara"}),
    new School({name: "Rathmalkandura Maha Vidyalaya", district: "Ampara"}),
    new School({name: "Serankada Maha Vidyalaya", district: "Ampara"}),
    new School({name: "Shams Central College, maruthamunai", district: "Ampara"}),
    new School({name: "Sivasakthy Vidyalaya, Natpiddimunai", district: "Ampara"}),
    new School({name: "Thambiluvil Madhya Maha Vidyalayam (Central College)", district: "Ampara"}),
    new School({name: "Uhana Maha Vidyalaya", district: "Ampara"}),
    new School({name: "Vipulananda Central College, Karaitivu", district: "Ampara"}),
    new School({name: "Vinayagapuram Maha Vidyalayam (V.m.v)", district: "Ampara"}),
    new School({name: "Ibnu Zeena Junior Vidyalaya, Palamunai", district: "Ampara"}),
    new School({name: "Al- Ashraf Maha Vidyalaya, Mawadippalli", district: "Ampara"}),
    new School({name: "Safeena Muslim Vidyalayam. Maligaikadu", district: "Ampara"}),
    new School({name: "Veerathidal Al-Hidaya M.v.", district: "Ampara"}),
    new School({name: "Km/ganesha Maha Vidyalayam Chenaikudiyiruppu", district: "Ampara"}),
    new School({name: "Al Adhan Maha Vidyalaya, Badulla", district: "Badulla"}),
    new School({name: "Andaulpotha National School,andaulpotha.", district: "Badulla"}),
    new School({name: "Al Murshid Maha Vidyalaya, Silmiyapura", district: "Badulla"}),
    new School({name: "Badulla Central College, Badulla", district: "Badulla"}),
    new School({name: "Badulla Dharmadutha College, Badulla", district: "Badulla"}),
    new School({name: "Bandarawela Central College", district: "Badulla"}),
    new School({name: "<B>bandarawela Dharmashoka Central College''</b>", district: "Badulla"}),
    new School({name: "Bandarawela Dharmapala Vidyalaya", district: "Badulla"}),
    new School({name: "Bibilegama Navodiya Viddhiyala, Bibilegama", district: "Badulla"}),
    new School({name: "Halpe National School, Halpe", district: "Badulla"}),
    new School({name: "Kahagolla National School, Diyatalawa, Bandarawela", district: "Badulla"}),
    new School({name: "Kuda Kusum Balika Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Mahiyangana National School. Mahiyanganaya", district: "Badulla"}),
    new School({name: "Naulla Central College, Demodara", district: "Badulla"}),
    new School({name: "Rilpola Dharmaraja Maha Vidyalaya, Badulla", district: "Badulla"}),
    new School({name: "Saraswathy Central College, Badulla", district: "Badulla"}),
    new School({name: "Sri Janananda National School, Kadurugamuwa", district: "Badulla"}),
    new School({name: "Sri Rahula Maha Vidyalaya, Badulla", district: "Badulla"}),
    new School({name: "St. Joseph's College, Bandarawela", district: "Badulla"}),
    new School({name: "Uva College, Badulla", district: "Badulla"}),
    new School({name: "Uva Science College, Hali-Ela", district: "Badulla"}),
    new School({name: "Vihara Mahadevi Balika Vidyalya, Badulla", district: "Badulla"}),
    new School({name: "Vishaka Girls' High School, Badulla", district: "Badulla"}),
    new School({name: "Visakha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Vishaka Girls' High School, Badulla", district: "Badulla"}),
    new School({name: "National School Medagama", district: "Badulla"}),
    new School({name: "Ananda Central School, Walhaputenna", district: "Badulla"}),
    new School({name: "Hali Ela Central College (Lakshman)", district: "Badulla"}),
    new School({name: "Janadhipathi Vidyalaya, Ambagasdowa", district: "Badulla"}),
    new School({name: "Sri Ramakrishna Tamil Vidyalayam.", district: "Badulla"}),
    new School({name: "Al Adhan Muslim Mahavidyalaya", district: "Badulla"}),
    new School({name: "Al-Badriya Muslim Maha Vidyalaya,kahagolla,diyatalawa", district: "Badulla"}),
    new School({name: "Al Murshid Muslim Maha Vidyalaya, Silmiyapura", district: "Badulla"}),
    new School({name: "Al Yaseen Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Alubogolla Prathamika Vidyalaya", district: "Badulla"}),
    new School({name: "Bandarawela Tamil Central College", district: "Badulla"}),
    new School({name: "Dimbulana Vidyala", district: "Badulla"}),
    new School({name: "Darmapala Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Bandarawela Dharmasoka Central College", district: "Badulla"}),
    new School({name: "Ethtlapitiya Maha Vidyalaya", district: "Badulla"}),
    new School({name: "Gothamie Junior School", district: "Badulla"}),
    new School({name: "Haputale Tamil Central College", district: "Badulla"}),
    new School({name: "Kadana Siri Seewali Vidyalaya", district: "Badulla"}),
    new School({name: "Kahataruppa Maha Vidyalaya", district: "Badulla"}),
    new School({name: "Koslanda National College, Koslanda", district: "Badulla"}),
    new School({name: "Kudakusum Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Lunugala Madya Maha Vidyalaya, Lunugala", district: "Badulla"}),
    new School({name: "Mahagama Sekara Maha Vidyalaya, Radawana", district: "Badulla"}),
    new School({name: "Medawelagama Maha Vidyalala, Medawelagama", district: "Badulla"}),
    new School({name: "Megahakiula Maha Vidyalaya", district: "Badulla"}),
    new School({name: "Rahula Vidyalaya", district: "Badulla"}),
    new School({name: "Rilpola Darmaraja Vidyalaya", district: "Badulla"}),
    new School({name: "Rookatenna Tamil Vidyalayam, Hali Ela", district: "Badulla"}),
    new School({name: "Seevali Navodya Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Sirisumana Vidyalaya", district: "Badulla"}),
    new School({name: "Sir Rasik Fareed Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "St. Mary's Maha Vidayalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Sujatha Vidyalaya", district: "Badulla"}),
    new School({name: "Udayaraja Widyalaya", district: "Badulla"}),
    new School({name: "Viharamahadevi Girls School", district: "Badulla"}),
    new School({name: "Vishaka Maha Vidyalaya, Bandarawela", district: "Badulla"}),
    new School({name: "Welimada Muslim Maha Vidyalaya", district: "Badulla"}),
    new School({name: "Yasodara Devi Balika Maha Vidyalaya", district: "Badulla"}),
    new School({name: "D.s.senanayaka Maha Vidyalaya Inginiyagala", district: "Badulla"}),
    new School({name: "Kalthota Dakunu Ewra Vidyalaya", district: "Badulla"}),
    new School({name: "Kotawehera Mankada Maha Vidyalaya", district: "Badulla"}),
    new School({name: "S. Thomas' College, Bandarawela", district: "Badulla"}),
    new School({name: "S. Thomas' College, Gurutalawa", district: "Badulla"}),
    new School({name: "Sussex College, Bandarewela", district: "Badulla"}),
    new School({name: "Oxford International College, Badulla", district: "Badulla"}),
    new School({name: "Welimada International School", district: "Badulla"}),
    new School({name: "Guruthalawa Oxford International College, Gurutalawa", district: "Badulla"}),
    new School({name: "Alighar Central College, Eravur", district: "Batticaloa"}),
    new School({name: "An-Noor Maha Vidyalaya, Valaichenai", district: "Batticaloa"}),
    new School({name: "Arayampathy Maha Vithiyalayam", district: "Batticaloa"}),
    new School({name: "Eravur Rahumaniya Maha Vidyalaya", district: "Batticaloa"}),
    new School({name: "Eravur Tamil Maha Vidyalayam", district: "Batticaloa"}),
    new School({name: "Eravur Vipulanantha Vidyalayam", district: "Batticaloa"}),
    new School({name: "Ignisius College", district: "Batticaloa"}),
    new School({name: "Kalkudah Namagal Vidyalayam", district: "Batticaloa"}),
    new School({name: "Kottamunai Kanishta Vithiyalayam", district: "Batticaloa"}),
    new School({name: "Kudiyiruppu Kalaimakal Vidyalaya", district: "Batticaloa"}),
    new School({name: "Oddamavady Central College", district: "Batticaloa"}),
    new School({name: "Paddiruppu Madya Maha Vithiyalayam (National School)", district: "Batticaloa"}),
    new School({name: "Shivananda National College, Batticaloa", district: "Batticaloa"}),
    new School({name: "St. Cecilia's Girls' College (Convent) (M.v.), Batticaloa", district: "Batticaloa"}),
    new School({name: "St. Mary's College", district: "Batticaloa"}),
    new School({name: "St. Michael's College, Batticaloa", district: "Batticaloa"}),
    new School({name: "Thandavam Veli School", district: "Batticaloa"}),
    new School({name: "Thresa Convent", district: "Batticaloa"}),
    new School({name: "Vantharumulai Maha Vithiyalayam", district: "Batticaloa"}),
    new School({name: "Vincent Girls' High School, Batticaloa", district: "Batticaloa"}),
    new School({name: "Vishnu Vithiyalayam", district: "Batticaloa"}),
    new School({name: "Zahira College", district: "Batticaloa"}),
    new School({name: "St.vipulananda Vithiyalayam Kallady , Battical", district: "Batticaloa"}),
    new School({name: "Batticaloa Hindu College", district: "Batticaloa"}),
    new School({name: "Chenkalady Central College", district: "Batticaloa"}),
    new School({name: "Kallady Vivekananda College, Batticaloa", district: "Batticaloa"}),
    new School({name: "Karuwakkerny Vigneshwara Vidyalayam", district: "Batticaloa"}),
    new School({name: "Kattankudy Central College (M. M. V.)", district: "Batticaloa"}),
    new School({name: "Mahajana College, Batticaloa", district: "Batticaloa"}),
    new School({name: "Methodist Central College, Batticaloa", district: "Batticaloa"}),
    new School({name: "Valaichenai Al Noor Maha Vidyalaya", district: "Batticaloa"}),
    new School({name: "Valaichenai Hindu College", district: "Batticaloa"}),
    new School({name: "Kattankudy Bathuriya School", district: "Batticaloa"}),
    new School({name: "Al Azhar Vidyalayam", district: "Batticaloa"}),
    new School({name: "Al Nasser College, Colombo", district: "Colombo"}),
    new School({name: "Ananda College, Colombo", district: "Colombo"}),
    new School({name: "Ananda Sastralaya, Kotte", district: "Colombo"}),
    new School({name: "Ananda Balika Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Anula Vidyalaya, Nugegoda", district: "Colombo"}),
    new School({name: "Asoka Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Bomiriya National School", district: "Colombo"}),
    new School({name: "Buddhist Ladies College", district: "Colombo"}),
    new School({name: "C. W. W. Kannangara College", district: "Colombo"}),
    new School({name: "Colombo Hindu College", district: "Colombo"}),
    new School({name: "Defence Services School, Colombo", district: "Colombo"}),
    new School({name: "D. S. Senanayake College, Colombo", district: "Colombo"}),
    new School({name: "Devi Balika Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Dharmapala Vidyalaya, Kottawa", district: "Colombo"}),
    new School({name: "Dharmapala Vidyalaya, Pannipitiya", district: "Colombo"}),
    new School({name: "Gothami Balika Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Hameed Al Husseinie College, Colombo", district: "Colombo"}),
    new School({name: "Hewavitharana Maha Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Isipathana College, Colombo", district: "Colombo"}),
    new School({name: "Mahanama College, Colombo", district: "Colombo"}),
    new School({name: "Mahamaya Balika Maha Vidyalaya", district: "Colombo"}),
    new School({name: "Muslims Ladies College, Colombo", district: "Colombo"}),
    new School({name: "Mutwal Hindu College", district: "Colombo"}),
    new School({name: "Nalanda College, Colombo", district: "Colombo"}),
    new School({name: "Piliyandala Central College", district: "Colombo"}),
    new School({name: "President's College, Sri Jayawardenapura Kotte", district: "Colombo"}),
    new School({name: "Presbyterian Girls' National School, Dehiwala", district: "Colombo"}),
    new School({name: "Prince of Wales' College, Moratuwa", district: "Colombo"}),
    new School({name: "Princess of Wales' College, Moratuwa", district: "Colombo"}),
    new School({name: "Ramanathan Hindu Ladies College", district: "Colombo"}),
    new School({name: "Royal College, Colombo", district: "Colombo"}),
    new School({name: "Rathnawali Balika Vidyalaya, Borella", district: "Colombo"}),
    new School({name: "Samudradevi Balika Vidyalaya Nugegoda", district: "Colombo"}),
    new School({name: "Seethawaka National School, Avissawella", district: "Colombo"}),
    new School({name: "Sirimavo Bandaranaike Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Sir Baron Jayathilaka Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Sri Subhuthi National School, Battaramulla.", district: "Colombo"}),
    new School({name: "St. John's College Colombo", district: "Colombo"}),
    new School({name: "St. Paul's Girls School, Milagiriya", district: "Colombo"}),
    new School({name: "Susamaya Wardana College", district: "Colombo"}),
    new School({name: "Thurstan College, Colombo", district: "Colombo"}),
    new School({name: "Veluwana College, Dematagoda", district: "Colombo"}),
    new School({name: "Visakha Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Vivekananda College Colombo", district: "Colombo"}),
    new School({name: "Zahira College, Colombo", district: "Colombo"}),
    new School({name: "Al Hikma College", district: "Colombo"}),
    new School({name: "Al Badriya M.v Kahatowita", district: "Colombo"}),
    new School({name: "Ananda Balika Vidyalaya Kotte", district: "Colombo"}),
    new School({name: "Al Hidhaya Maha Vidyalaya", district: "Colombo"}),
    new School({name: "All Saints' College, Colombo", district: "Colombo"}),
    new School({name: "Anurudhdha Balika Maha Vidyalaya, Dematagoda", district: "Colombo"}),
    new School({name: "Basilica College, Colombo", district: "Colombo"}),
    new School({name: "Atamie International School, Kotahena", district: "Colombo"}),
    new School({name: "Clifton Girls School, Colombo", district: "Colombo"}),
    new School({name: "C. W. W.r Kannangara Vidyalaya", district: "Colombo"}),
    new School({name: "Dehiwala Central College", district: "Colombo"}),
    new School({name: "Devi Balika Vidyalaya", district: "Colombo"}),
    new School({name: "Dharmasena Attygala Balika Vidyalaya, Kesbewa.", district: "Colombo"}),
    new School({name: "Dharmaraja Vidyalaya, Homagama", district: "Colombo"}),
    new School({name: "Dudley Senanayake Maha Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "Fathima Muslim Ladies College", district: "Colombo"}),
    new School({name: "Galagedara Muslim Vidyalaya, Padukka", district: "Colombo"}),
    new School({name: "Girls' High School, Mount Lavinia", district: "Colombo"}),
    new School({name: "Good Shepherd Convent, Colombo", district: "Colombo"}),
    new School({name: "Gothami Balika Vidyalaya", district: "Colombo"}),
    new School({name: "Herman Gminer School, Kesbewa", district: "Colombo"}),
    new School({name: "Hewavitharana Maha Vidyalaya, Rajagiriya", district: "Colombo"}),
    new School({name: "Indrajothi Vidyalaya, Battaramulla.", district: "Colombo"}),
    new School({name: "Lanka Sabaha Primary School, Battaramulla.", district: "Colombo"}),
    new School({name: "Lalith Athulathmudali College, Mt-Lavinia", district: "Colombo"}),
    new School({name: "Logos College, Havelock Town", district: "Colombo"}),
    new School({name: "Janadhipathi Balika Vidyalaya, Nawala", district: "Colombo"}),
    new School({name: "Karlshrue College, Colombo", district: "Colombo"}),
    new School({name: "Kottawa Dharmapala Maha Vidyalaya", district: "Colombo"}),
    new School({name: "Lumbini Vidyalaya", district: "Colombo"}),
    new School({name: "M.d.h. Jayawardhana Primary School, Padukka", district: "Colombo"}),
    new School({name: "M.d.h. Jayawardhana Vidyalaya, Battaramulla.", district: "Colombo"}),
    new School({name: "Malagala Maha Vidyalaya, Malagala, Padukka", district: "Colombo"}),
    new School({name: "Meegoda Dharmaraja Vidyalaya, Meegoda", district: "Colombo"}),
    new School({name: "Mutwal Hindu College, Colombo", district: "Colombo"}),
    new School({name: "Musaeus Vidyalaya", district: "Colombo"}),
    new School({name: "Presbyterian Girls School,regent Street, Colombo", district: "Colombo"}),
    new School({name: "President's College, Maharagama", district: "Colombo"}),
    new School({name: "Ramanathan Hindu Ladies College, Colombo", district: "Colombo"}),
    new School({name: "Rathnawali Balika Maha Vidyalaya, Borella", district: "Colombo"}),
    new School({name: "Samudradevi Balika Maha Vidyalaya, Nugegoda", district: "Colombo"}),
    new School({name: "Sevalee Vidyalaya, Dematagoda", district: "Colombo"}),
    new School({name: "Science College, Mount Lavinia", district: "Colombo"}),
    new School({name: "Sirimavo Balika Vidyalaya", district: "Colombo"}),
    new School({name: "Sri Dharmarama Maha Vidyalaya, Ratmalana", district: "Colombo"}),
    new School({name: "Siri Piyarathana Maha Vidyalaya, Padukka", district: "Colombo"}),
    new School({name: "Siri Piyarathana Kanshta Vidyalaya, Padukka", district: "Colombo"}),
    new School({name: "Somaweera Chandrasiri Vidyalaya, Piliyandala.", district: "Colombo"}),
    new School({name: "Sri Jayawardenepura Maha Vidyalaya, Kotte", district: "Colombo"}),
    new School({name: "Sri Jayawardenapura Balika Mahaya Vidyalaya, Kotte", district: "Colombo"}),
    new School({name: "Sri Rahula Maha Vidyalaya, Mulleriyawa New Town", district: "Colombo"}),
    new School({name: "Sri Rahula Balika Vidyalaya, Malabe", district: "Colombo"}),
    new School({name: "Sri Revatha Royal College, Nugegoda", district: "Colombo"}),
    new School({name: "Sri Shuboothi Madaya Maha Vidyalaya, Baththaramulla", district: "Colombo"}),
    new School({name: "St. Anne's Girls Maha Vidyalayam, Colombo", district: "Colombo"}),
    new School({name: "St. Anthony's Balika Vidyalaya, Colombo", district: "Colombo"}),
    new School({name: "St. Anthony's Boys Maha Vidyalayam, Colombo", district: "Colombo"}),
    new School({name: "St.john's College-Nugegoda", district: "Colombo"}),
    new School({name: "St. Joseph's Girls' School, Nugegoda", district: "Colombo"}),
    new School({name: "St. Peter's College, Colombo", district: "Colombo"}),
    new School({name: "St. Thomas'college, Kotte", district: "Colombo"}),
    new School({name: "Susamaya Wardana Maha Vidyalaya, Borella", district: "Colombo"}),
    new School({name: "Sunathra Davi Balika Vidyalaya, Pepiliyana", district: "Colombo"}),
    new School({name: "T.b.jayah Zahira College, Colombo-02", district: "Colombo"}),
    new School({name: "Vidura College, Nawala", district: "Colombo"}),
    new School({name: "Vidya Wardhana Vidyalaya, Battaramulla.", district: "Colombo"}),
    new School({name: "Vidyaraja Maha Vidyalaya,hokandara", district: "Colombo"}),
    new School({name: "Vipulanantha Tamil Maha Vidyalayam, Dematagoda", district: "Colombo"}),
    new School({name: "Yashodara Balika Vidyalaya", district: "Colombo"}),
    new School({name: "Zahira College, Maradana", district: "Colombo"}),
    new School({name: "Vivekananda College, Colombo", district: "Colombo"}),
    new School({name: "Wesley College, Colombo", district: "Colombo"}),
    new School({name: "Wulfendal High School, Colombo", district: "Colombo"}),
    new School({name: "Alethea School (Government Recognised)", district: "Colombo"}),
    new School({name: "Amal International School, Colombo", district: "Colombo"}),
    new School({name: "Bishop's College, Colombo", district: "Colombo"}),
    new School({name: "Buddhist Ladies College (Semi-Government)", district: "Colombo"}),
    new School({name: "Carey College, Colombo", district: "Colombo"}),
    new School({name: "Christ King College, Pannipitiya", district: "Colombo"}),
    new School({name: "C.m.s. Ladies' College, Colombo", district: "Colombo"}),
    new School({name: "Dharul Hikma International School, Colombo 15.", district: "Colombo"}),
    new School({name: "Dharul Hikma Institute, Colombo 15.", district: "Colombo"}),
    new School({name: "Girls' High School, Mount Lavinia", district: "Colombo"}),
    new School({name: "Good Shepherd Convent, Colombo", district: "Colombo"}),
    new School({name: "Highlands College, Nugegoda", district: "Colombo"}),
    new School({name: "Holy Family Convent, Colombo (Semi-Government)", district: "Colombo"}),
    new School({name: "Holy Family Convent, Dehiwela (Semi-Government)", district: "Colombo"}),
    new School({name: "Ikra International School, Colombo", district: "Colombo"}),
    new School({name: "Ladies College, Colombo", district: "Colombo"}),
    new School({name: "Mutwal Hindu College, Colombo", district: "Colombo"}),
    new School({name: "Methodist College, Colombo (Semi-Government)", district: "Colombo"}),
    new School({name: "Musaeus College, Colombo 7", district: "Colombo"}),
    new School({name: "Our Lady of Victories Convent, Moratuwa (Semi-Government)", district: "Colombo"}),
    new School({name: "St. Anthony's College, Wattala", district: "Colombo"}),
    new School({name: "St Benedict's College Colombo", district: "Colombo"}),
    new School({name: "St Bridget's Convent, Colombo", district: "Colombo"}),
    new School({name: "Vidura College, Hokandara, Thalawathugoda", district: "Colombo"}),
    new School({name: "St. Joseph's College, Colombo (Semi-Government)", district: "Colombo"}),
    new School({name: "St. Joseph's Boys' College, Nugegoda (Semi-Government)", district: "Colombo"}),
    new School({name: "St. Lawrence's Convent, Colombo (Semi -Government)", district: "Colombo"}),
    new School({name: "St. Lucia's College Colombo 13", district: "Colombo"}),
    new School({name: "St. Michael's College, Homagama", district: "Colombo"}),
    new School({name: "St. Michael's College, Meegoda", district: "Colombo"}),
    new School({name: "St. Paul's Girls School, Milagiriya (Semi-Government)", district: "Colombo"}),
    new School({name: "St Peter's College, Colombo (Semi-Government)", district: "Colombo"}),
    new School({name: "St. Sebastian's College, Moratuwa (Semi-Government)", district: "Colombo"}),
    new School({name: "S. Thomas' College, Kotte (Semi-Government)", district: "Colombo"}),
    new School({name: "S. Thomas' College, Mount Lavinia", district: "Colombo"}),
    new School({name: "S. Thomas' Preparatory School, Kollupitiya", district: "Colombo"}),
    new School({name: "Sujatha Vidyalaya, Nugegoda", district: "Colombo"}),
    new School({name: "The School for the Blind", district: "Colombo"}),
    new School({name: "The Learning Room, Avissawella", district: "Colombo"}),
    new School({name: "Wesley College, Colombo (Semi-Government)", district: "Colombo"}),
    new School({name: "Zahira College, Colombo", district: "Colombo"}),
    new School({name: "St.peter's College Gampaha (Semi-Government)", district: "Colombo"}),
    new School({name: "Al- Manar International School, Colombo", district: "Colombo"}),
    new School({name: "Alexor International College, Colombo", district: "Colombo"}),
    new School({name: "Alethea International School, Colombo", district: "Colombo"}),
    new School({name: "All Nations International School, Ganemulla", district: "Colombo"}),
    new School({name: "American College of Higher Education", district: "Colombo"}),
    new School({name: "Amal International School, Colombo", district: "Colombo"}),
    new School({name: "Al Quds Arabic International School", district: "Colombo"}),
    new School({name: "Asian International School", district: "Colombo"}),
    new School({name: "Belvoir College International", district: "Colombo"}),
    new School({name: "Bond International School", district: "Colombo"}),
    new School({name: "Brightens College", district: "Colombo"}),
    new School({name: "Buckingham International College", district: "Colombo"}),
    new School({name: "Buddhist Ladies College International", district: "Colombo"}),
    new School({name: "The British School in Colombo", district: "Colombo"}),
    new School({name: "C.p.m Faith School", district: "Colombo"}),
    new School({name: "College of World Education", district: "Colombo"}),
    new School({name: "Colombo International School", district: "Colombo"}),
    new School({name: "Colombo Overseas School", district: "Colombo"}),
    new School({name: "Colombo South International College", district: "Colombo"}),
    new School({name: "Dharul Hikma Institute, Colombo 15.", district: "Colombo"}),
    new School({name: "Dharul Hikma International School, Colombo 15", district: "Colombo"}),
    new School({name: "Dharul Hikma International Montessori, Colombo 15.", district: "Colombo"}),
    new School({name: "Dharul Uloom Academy, Bambalapitiya", district: "Colombo"}),
    new School({name: "Dhilshaath International College, Dematagoda", district: "Colombo"}),
    new School({name: "Elizabeth Moir School, Colombo", district: "Colombo"}),
    new School({name: "East Asian International College, Nugegoda", district: "Colombo"}),
    new School({name: "Gateway College, Sri Lanka Gateway College, Colombo", district: "Colombo"}),
    new School({name: "Gateway College, Dehiwala", district: "Colombo"}),
    new School({name: "Graceland International Academy- Mount Lavinia", district: "Colombo"}),
    new School({name: "Green Bridge International College", district: "Colombo"}),
    new School({name: "Harcourts International School", district: "Colombo"}),
    new School({name: "Harrow International College", district: "Colombo"}),
    new School({name: "Hejaaz International School", district: "Colombo"}),
    new School({name: "Horizon College International", district: "Colombo"}),
    new School({name: "Ikra International School", district: "Colombo"}),
    new School({name: "Ilma International Girls' School", district: "Colombo"}),
    new School({name: "Institute for London A/l Studies, Havelock Town", district: "Colombo"}),
    new School({name: "Jennings International School", district: "Colombo"}),
    new School({name: "J.m.c. International School", district: "Colombo"}),
    new School({name: "Kingston College International", district: "Colombo"}),
    new School({name: "Learnium International School, Ethul Kotte", district: "Colombo"}),
    new School({name: "Lakeland Inter-American School", district: "Colombo"}),
    new School({name: "Lead the Way Girls' International", district: "Colombo"}),
    new School({name: "Learningexcellence International College of Education, Battaramulla", district: "Colombo"}),
    new School({name: "Leeds International School, Kotte", district: "Colombo"}),
    new School({name: "Lpf Academy", district: "Colombo"}),
    new School({name: "Louvre College, Pannipitiya", district: "Colombo"}),
    new School({name: "Lyceum International School", district: "Colombo"}),
    new School({name: "Mukarramah International School", district: "Colombo"}),
    new School({name: "Negombo South International School, Negombo", district: "Colombo"}),
    new School({name: "Negombo South International School, Piliyandala", district: "Colombo"}),
    new School({name: "Negombo South International School, Nettambuwa", district: "Colombo"}),
    new School({name: "Oxford Overseas School, Colombo", district: "Colombo"}),
    new School({name: "The overseas School of Colombo", district: "Colombo"}),
    new School({name: "Oxford College International", district: "Colombo"}),
    new School({name: "Oki International School, Wattala", district: "Colombo"}),
    new School({name: "Oki International School, Kiribathgoda", district: "Colombo"}),
    new School({name: "Oki International School, Kadana", district: "Colombo"}),
    new School({name: "Rawdha Aysha, Wellawatha", district: "Colombo"}),
    new School({name: "Readway International College of Education, Dematagoda.", district: "Colombo"}),
    new School({name: "Rotary International School", district: "Colombo"}),
    new School({name: "Royal Institute, Nugegoda", district: "Colombo"}),
    new School({name: "Royal Institute, Havelock Town", district: "Colombo"}),
    new School({name: "Royal Institute, Maharagama", district: "Colombo"}),
    new School({name: "Royal Institute Girls School, Havelock Town", district: "Colombo"}),
    new School({name: "Linfield College International", district: "Colombo"}),
    new School({name: "Southgate International Academy", district: "Colombo"}),
    new School({name: "Stafford International School", district: "Colombo"}),
    new School({name: "St. Nicholas' International School", district: "Colombo"}),
    new School({name: "Willesden College International", district: "Colombo"}),
    new School({name: "Wycherley International School, Colombo", district: "Colombo"}),
    new School({name: "Winway International School", district: "Colombo"}),
    new School({name: "Wise International School, Kandana", district: "Colombo"}),
    new School({name: "The Victoria International College", district: "Colombo"}),
    new School({name: "York International School - Sapugaskanda", district: "Colombo"}),
    new School({name: "York International School - Wattala", district: "Colombo"}),
    new School({name: "York International School - Kadawatha", district: "Colombo"}),
    new School({name: "Yoshida International School", district: "Colombo"}),
    new School({name: "Sri Devananda College ambalangoda", district: "Galle"}),
    new School({name: "Dharmasoka College ambalangoda", district: "Galle"}),
    new School({name: "Kularathna College ambalangoda", district: "Galle"}),
    new School({name: "Revatha College Balapitiya", district: "Galle"}),
    new School({name: "Devapathiraja Central College Rathgama", district: "Galle"}),
    new School({name: "Sri Sumangala Central College Hikkaduwa", district: "Galle"}),
    new School({name: "Gamini Central College Benthota", district: "Galle"}),
    new School({name: "Ananda Central College, Elpitiya", district: "Galle"}),
    new School({name: "Nalanda Maha Vidyalaya, Elpitiya Awiththawa, Elpitiya", district: "Galle"}),
    new School({name: "Karandeniya Central College Karandeniya", district: "Galle"}),
    new School({name: "Amarasuriya Vidyalaya Meepawala, Poddala", district: "Galle"}),
    new School({name: "Siridhamma College Labuduwa, Akmeemana", district: "Galle"}),
    new School({name: "Upananda Central College Manavila, Walahanduwa", district: "Galle"}),
    new School({name: "Christ Church Boys College Baddegama", district: "Galle"}),
    new School({name: "Christ Church Girls College Baddegama", district: "Galle"}),
    new School({name: "Mahinda College Galle", district: "Galle"}),
    new School({name: "Richmond College Galle", district: "Galle"}),
    new School({name: "Rippon Girls' College Galle", district: "Galle"}),
    new School({name: "Sanghamitta Girls College Galle", district: "Galle"}),
    new School({name: "Southlands College Galle", district: "Galle"}),
    new School({name: "St. Aloysius' College Galle", district: "Galle"}),
    new School({name: "Vidyaloka College Galle", district: "Galle"}),
    new School({name: "Zahira Central College Ginthota", district: "Galle"}),
    new School({name: "Batemulla National College, Imaduwa", district: "Galle"}),
    new School({name: "Kathaluwa Central College Kathaluwa, Ahangama", district: "Galle"}),
    new School({name: "Nagoda Royal National College Nagoda", district: "Galle"}),
    new School({name: "Neluwa National College Neluwa", district: "Galle"}),
    new School({name: "Vidyaraja National School Thawalama Galle", district: "Galle"}),
    new School({name: "Akmeemana Maha Vidyalaya, Akmeemana", district: "Galle"}),
    new School({name: "All Saints College, Galle", district: "Galle"}),
    new School({name: "Aluthwala Maha Vidyalaya,aluthwala", district: "Galle"}),
    new School({name: "Ananda Maha Vidyalaya, Kitulampitiya, Galle", district: "Galle"}),
    new School({name: "Angulugaha Maha Vidyalaya, Angulugaha", district: "Galle"}),
    new School({name: "Ankokkawala Maha Vidyalaya, Ankokkawala", district: "Galle"}),
    new School({name: "Anuladevi Bhalika Vidyalaya,magalle", district: "Galle"}),
    new School({name: "Aththadassi Maha Vidyalaya, Thotagoda, Akmeemana", district: "Galle"}),
    new School({name: "Aththadassi Prathamika Vidyalaya, Thiththagalla, Ahangama", district: "Galle"}),
    new School({name: "Atanikitha Kanishta Vidyalaya, Thiththagalla, Ahangama", district: "Galle"}),
    new School({name: "Balagoda Maha Vidyalaya, Poddala", district: "Galle"}),
    new School({name: "Cww Kannangara Vidyalaya, Mahamodara, Galle", district: "Galle"}),
    new School({name: "Dombagoda Maha Vidyalaya Thiththagalla, Ahangama", district: "Galle"}),
    new School({name: "Dorape Maha Vidyalaya, Bogahagoda", district: "Galle"}),
    new School({name: "Gintota Maha Vidyalaya, Ginthota, Galle", district: "Galle"}),
    new School({name: "Halpathota Kanishta Vidyalaya, Baddegama", district: "Galle"}),
    new School({name: "Hapugala Maha Vidyalaya, Hapugala", district: "Galle"}),
    new School({name: "Haupe Maha Vidyalaya, Haupe", district: "Galle"}),
    new School({name: "Hinidumgoda Kanishta Vidyalaya, Akmeemana", district: "Galle"}),
    new School({name: "Hiyare Maha Vidyalaya, Hiyare", district: "Galle"}),
    new School({name: "Hiyare Eas Maha Vidyalaya, Hiyare", district: "Galle"}),
    new School({name: "Jayanthi Kanishta Vidyalaya, Pinnaduwa, Walahanduwa", district: "Galle"}),
    new School({name: "Jayawardene Maha Vidyalaya, Dangedara, Galle", district: "Galle"}),
    new School({name: "Janadhipathi Balika Viduhala, Walahanduwa", district: "Galle"}),
    new School({name: "Kathaluwa Central College, Ahangama", district: "Galle"}),
    new School({name: "Mihiripenna Dhammarathana Maha Vidyalaya,thalpe, Habaraduwa", district: "Galle"}),
    new School({name: "Nalanda Prathamika Vidyalaya, Imaduwa", district: "Galle"}),
    new School({name: "Nandimithra Maha Vidyalaya, Kapuhenpola, Akmeemana", district: "Galle"}),
    new School({name: "Narawala Maha Vidyalaya, Poddala", district: "Galle"}),
    new School({name: "Navinna Muslim Vidyala, Galle", district: "Galle"}),
    new School({name: "Olcott College, Galle", district: "Galle"}),
    new School({name: "Paramananda Vidyalaya, Galle", district: "Galle"}),
    new School({name: "Piyatissa Vidyalaya, Kalegana, Galle", district: "Galle"}),
    new School({name: "Pitadeniya Maha Vidyalaya, Pitadeniya", district: "Galle"}),
    new School({name: "Rohana Vidyalaya, Ahangama", district: "Galle"}),
    new School({name: "Sariputhra Maha Vidyalaya, Ahangama", district: "Galle"}),
    new School({name: "Sarwamithra Kanishta Vidyalaya, Meegoda, Walahanduwa", district: "Galle"}),
    new School({name: "Siddhartha Maha Vidyalaya, Dikkumbura", district: "Galle"}),
    new School({name: "Sri Rathanajothi Maha Vidyalaya, Bataduwa, Galle", district: "Galle"}),
    new School({name: "Sri Rathnasare Maha Vidyaleya, Baddegama", district: "Galle"}),
    new School({name: "St. Anthony's (Navodaya) College, Baddegama", district: "Galle"}),
    new School({name: "Sudarshi Vidyalaya, Eththiligoda, Galle", district: "Galle"}),
    new School({name: "Sudharma Vidyalaya, Magalle", district: "Galle"}),
    new School({name: "Sulaimaniya Maha Vidyalaya, Galle", district: "Galle"}),
    new School({name: "Sumangala Adarsha Vidyalaya, Ihalagoda, Akmeemana", district: "Galle"}),
    new School({name: "Thakshila Kanishta Vidyalaya, Pilana", district: "Galle"}),
    new School({name: "Thalawa Kanishta Vidyalaya, Wanduramba", district: "Galle"}),
    new School({name: "Thelikada Maha Vidyalaya, Baddegama", district: "Galle"}),
    new School({name: "Uluvitike Maha Vidyalaya, Galle", district: "Galle"}),
    new School({name: "Uswatgun Hasana Maha Vidyalaya, Katugoda, Galle", district: "Galle"}),
    new School({name: "Unawatuna Maha Vidyalaya, Unawatuna", district: "Galle"}),
    new School({name: "Vidyarthodaya Maha Vidyalaya, Pilana", district: "Galle"}),
    new School({name: "Wijaya Maha Vidyalaya, Ihalagoda, Akmeemana", district: "Galle"}),
    new School({name: "Wijaya Kanishta Vidyalaya, Lanumodara, Habaraduwa", district: "Galle"}),
    new School({name: "Devapathiraja College, Rathgama", district: "Galle"}),
    new School({name: "Batapola Central College, Batapola", district: "Galle"}),
    new School({name: "Kularathna Maha Vidyalaya, Ambalangoda", district: "Galle"}),
    new School({name: "Madampa Central College, Kuleegoda", district: "Galle"}),
    new School({name: "Nindana Maha Vidayalaya, Batapola", district: "Galle"}),
    new School({name: "Prajapathi Gothami Balika Vidayalaya, Ambalangoda", district: "Galle"}),
    new School({name: "Rajapaksha College, Ahungalla", district: "Galle"}),
    new School({name: "Wathurawila Maha Vidyalaya, Wathurawila", district: "Galle"}),
    new School({name: "Sri Kalyanathissa Vidyalaya, Batapola", district: "Galle"}),
    new School({name: "Karandeniya Central College, Karandeniya", district: "Galle"}),
    new School({name: "St. Theresa Kanitu Viduhala", district: "Galle"}),
    new School({name: "St. Theresa Balika Maha Vidyalaya, Kurundugaha", district: "Galle"}),
    new School({name: "Thunduwa Muslim Maha Vidyala, Benthara", district: "Galle"}),
    new School({name: "Sir/razik Fareed Muslim Maha Vidiyalaya,panapitiya,karandaniya", district: "Galle"}),
    new School({name: "Udugama Maha Vidyalaya, Udugama", district: "Galle"}),
    new School({name: "Siri Sunanda Maha Vidyalaya, Mapalagama", district: "Galle"}),
    new School({name: "Mapalagama Central College, Mapalagama", district: "Galle"}),
    new School({name: "Udalamaththa Maha Vidyalaya, Udalamaththa", district: "Galle"}),
    new School({name: "Magedara Maha Vidyalaya, Magedara", district: "Galle"}),
    new School({name: "Nabadawa Sumangala Maha Vidyala, Yakkalamulla", district: "Galle"}),
    new School({name: "Polpagoda Maha Vidyalaya, Polpagoda", district: "Galle"}),
    new School({name: "Opatha Maha Vidyalaya, Opatha, Galle", district: "Galle"}),
    new School({name: "Muslim Ladies College", district: "Galle"}),
    new School({name: "Sacred Heart Convent (Semi-Government)", district: "Galle"}),
    new School({name: "Jennath International School", district: "Galle"}),
    new School({name: "Leeds International School", district: "Galle"}),
    new School({name: "Ceylinco Sussex College", district: "Galle"}),
    new School({name: "British College Sri Lanka", district: "Galle"}),
    new School({name: "Kingston International School", district: "Galle"}),
    new School({name: "Thomas Gall International School", district: "Galle"}),
    new School({name: "Grand Orchid International School", district: "Galle"}),
    new School({name: "Galle International College", district: "Galle"}),
    new School({name: "The International School", district: "Galle"}),
    new School({name: "Al Hilal Central College", district: "Gampaha"}),
    new School({name: "Al-Mubarak Central College, Malwana", district: "Gampaha"}),
    new School({name: "Bandaranayaika Maha Vidyalaya, Hunupitiya, Wattala", district: "Gampaha"}),
    new School({name: "Bandaranayake College", district: "Gampaha"}),
    new School({name: "Bandaranayake Central College, Veyangoda", district: "Gampaha"}),
    new School({name: "Christ King College, Tudella", district: "Gampaha"}),
    new School({name: "Dalupatha Maha Vidyalaya, Negombo", district: "Gampaha"}),
    new School({name: "Davisamara Maha Vidyalaya, Seeduwa (Davisamara College)", district: "Gampaha"}),
    new School({name: "D. S. Senanayake College Mirigama", district: "Gampaha"}),
    new School({name: "Ellakkala Maha Vidyalaya, Ellakkala", district: "Gampaha"}),
    new School({name: "Galahitiyawa Central College, Ganemulla", district: "Gampaha"}),
    new School({name: "Rathnavali Balika Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Gurukula College, Kelaniya", district: "Gampaha"}),
    new School({name: "Good Shepherd Girls School, Wattala", district: "Gampaha"}),
    new School({name: "Harischandra National College Negombo", district: "Gampaha"}),
    new School({name: "Holy Cross College, Gampaha", district: "Gampaha"}),
    new School({name: "Kelaniya President College", district: "Gampaha"}),
    new School({name: "Mahagama Sekara Maha Vidyalaya, Radawana", district: "Gampaha"}),
    new School({name: "Nalanda (Boys') Central College, Minuwangoda", district: "Gampaha"}),
    new School({name: "Nalanda (Girls') Central College, Minuwangoda", district: "Gampaha"}),
    new School({name: "Negombo Wisdom College", district: "Gampaha"}),
    new School({name: "Newstead Girls College, Negombo", district: "Gampaha"}),
    new School({name: "Pannala National School", district: "Gampaha"}),
    new School({name: "Rathnavali Balika Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Regent International College, Gampaha", district: "Gampaha"}),
    new School({name: "Sailan International School, Seeduwa", district: "Gampaha"}),
    new School({name: "Sapu / Vishaka Balika Vidyalaya", district: "Gampaha"}),
    new School({name: "Sri Bodhi College, Gampaha", district: "Gampaha"}),
    new School({name: "Sri Chandrajothi Navodya Vidyalaya", district: "Gampaha"}),
    new School({name: "Sri Dharmaloka College Kelaniya", district: "Gampaha"}),
    new School({name: "Sri Pangnananda Vidyalaya, Seeduwa", district: "Gampaha"}),
    new School({name: "Sri Sanghabodhi Madya Maha Vidyalaya Nittambuwa", district: "Gampaha"}),
    new School({name: "Sri Siddhartha Kumara Maha Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "St. Ann's Balika Maha Vidyalaya, Wattala", district: "Gampaha"}),
    new School({name: "St. Ann's Daluvakotuva Maha Vidyalaya, Negombo", district: "Gampaha"}),
    new School({name: "St. Anthony's College, Wattala", district: "Gampaha"}),
    new School({name: "St. Peter's College", district: "Gampaha"}),
    new School({name: "Thakshila College, Gampaha", district: "Gampaha"}),
    new School({name: "Vidyadeepa Maha Vidyalaya, Weboda", district: "Gampaha"}),
    new School({name: "Vidyaloka Maha Vidyalaya - veyangoda", district: "Gampaha"}),
    new School({name: "Vihara Maha Devi Balika Vidyalaya, Kiribathgoda", district: "Gampaha"}),
    new School({name: "Wijayarathnam Hindu Central College", district: "Gampaha"}),
    new School({name: "Yasodara Devi Balika Maha Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Padmawathe Central Colleague.dekatana, Delgoda", district: "Gampaha"}),
    new School({name: "Bandarawatta Parakrama Maha Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Galahitiyawa Central College (National School), Ganemulla", district: "Gampaha"}),
    new School({name: "Gothami Kanishta Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Harischandra National College, Negombo", district: "Gampaha"}),
    new School({name: "Holy Cross College (Semi-Government)", district: "Gampaha"}),
    new School({name: "Kamburagalla Maha Vidyalaya, Nittambuwa", district: "Gampaha"}),
    new School({name: "Karunaratne Buddhist Maha Vidyalaya, Welisara", district: "Gampaha"}),
    new School({name: "Keppetipola Vidyalaya", district: "Gampaha"}),
    new School({name: "Kirindiwela Central College, Kirindiwela", district: "Gampaha"}),
    new School({name: "Kiththammahara Maha Vidyalaya, Nittambuwa", district: "Gampaha"}),
    new School({name: "Kopiwatta Kanishta Vidyalaya, Kopiwatta", district: "Gampaha"}),
    new School({name: "Kuravalana Kanishta Vidyalaya, Nittambuwa", district: "Gampaha"}),
    new School({name: "Nalanda Girls' School, Minuwangoda", district: "Gampaha"}),
    new School({name: "Maddumabandara Vidyalaya", district: "Gampaha"}),
    new School({name: "President's College, Minuwangoda", district: "Gampaha"}),
    new School({name: "Padmawathe Central College, Dekatana", district: "Gampaha"}),
    new School({name: "President's College, Veyangoda", district: "Gampaha"}),
    new School({name: "Ranpokunagama Maha Vidyalaya, Nittambuwa", district: "Gampaha"}),
    new School({name: "Sanghabodhi Central College, Nittambuwa", district: "Gampaha"}),
    new School({name: "Sangamitta Balika Vidyalaya", district: "Gampaha"}),
    new School({name: "Sri Siddhartha Kumara Maha Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Siyane National College, Dompe", district: "Gampaha"}),
    new School({name: "Sri Bodhi Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Sri Sangabodhi Central College, Nittumbuva", district: "Gampaha"}),
    new School({name: "St. Mary's College, Veyangoda", district: "Gampaha"}),
    new School({name: "St. Pauls Balika Maha Vidyalaya, Kelaniya", district: "Gampaha"}),
    new School({name: "St. Sebastian's College Kandana", district: "Gampaha"}),
    new School({name: "Thakshila Maha Vidyalaya, Gampaha", district: "Gampaha"}),
    new School({name: "Yashodara Balika Vidyalaya", district: "Gampaha"}),
    new School({name: "Anura Junior Model School - Yakkala", district: "Gampaha"}),
    new School({name: "Balathawa Kanishta Vidyalaya - Ambepussa", district: "Gampaha"}),
    new School({name: "Vidyalankara Maha Vidyalaya −Negombo", district: "Gampaha"}),
    new School({name: "All Nations International College, Ganemulla", district: "Gampaha"}),
    new School({name: "Westminster College, Mahara", district: "Gampaha"}),
    new School({name: "Ave Maria Convent Branch School, Negombo", district: "Gampaha"}),
    new School({name: "Ceylinco Sussex College, Negombo", district: "Gampaha"}),
    new School({name: "Negombo South International School, Negombo", district: "Gampaha"}),
    new School({name: "De Mazenod College, Kandana", district: "Gampaha"}),
    new School({name: "Helena Wijayawardhana Girls' College, Kelaniya", district: "Gampaha"}),
    new School({name: "Holy Cross College, Gampaha", district: "Gampaha"}),
    new School({name: "Loyola College, Negombo", district: "Gampaha"}),
    new School({name: "Lyceum International School, Wattala", district: "Gampaha"}),
    new School({name: "Maris Stella College, Negombo", district: "Gampaha"}),
    new School({name: "Negombo Wisdom College, Negombo", district: "Gampaha"}),
    new School({name: "Regent International College, Gampaha", district: "Gampaha"}),
    new School({name: "St. Mary's College, Negombo", district: "Gampaha"}),
    new School({name: "St. Michell's College, Negombo", district: "Gampaha"}),
    new School({name: "St. Nicholas International College, Negombo", district: "Gampaha"}),
    new School({name: "St. Paul's Girls' College, Kelaniya", district: "Gampaha"}),
    new School({name: "St Thomas' Girls School, Matale", district: "Gampaha"}),
    new School({name: "Sumedha College", district: "Gampaha"}),
    new School({name: "Sussex College, Gampaha", district: "Gampaha"}),
    new School({name: "British International School, Kiribathgoda", district: "Gampaha"}),
    new School({name: "Optimum Knowledge Institute, Wattala (Oki)", district: "Gampaha"}),
    new School({name: "Malwana International School, Malwana", district: "Gampaha"}),
    new School({name: "Mubarak International Academy, Malwana (Mia)", district: "Gampaha"}),
    new School({name: "Adarsha Vidyalaya, Walasmulla", district: "Hambantota"}),
    new School({name: "Debarawewa Central College, Tissamaharama", district: "Hambantota"}),
    new School({name: "Mahanaga National School, Angunukolapelessa", district: "Hambantota"}),
    new School({name: "St. Mary's College, Hambantota", district: "Hambantota"}),
    new School({name: "Suriyaweva National School, Suriyawewa", district: "Hambantota"}),
    new School({name: "Theraputta National College, Ambalantota", district: "Hambantota"}),
    new School({name: "Tangalle Boys' School, tangalle", district: "Hambantota"}),
    new School({name: "Tangalle Girls' School, Tangalle", district: "Hambantota"}),
    new School({name: "Tsuchi College Hambantota", district: "Hambantota"}),
    new School({name: "Rajapaksha Central College, weeraketiya", district: "Hambantota"}),
    new School({name: "Vijayaba Central College, Hungama", district: "Hambantota"}),
    new School({name: "Zahira National School,hambantota", district: "Hambantota"}),
    new School({name: "M.r.thassim Mkv, Hambantota", district: "Hambantota"}),
    new School({name: "Katuwana National School,katuwana", district: "Hambantota"}),
    new School({
        name: "Sri Lanka Singapore Friendship College,weeraketiya",
        district: "Hambantota"
    }),
    new School({name: "Kudabolana Maha Vidyalaya, Ambalantota", district: "Hambantota"}),
    new School({name: "Ambalantota Maha Vidyalaya, Ambalantota", district: "Hambantota"}),
    new School({name: "Beliatta Maha Vidyalaya, Beliatta", district: "Hambantota"}),
    new School({name: "Puwakdandawa Dammapala B.v", district: "Hambantota"}),
    new School({name: "Dharmapala M.v, Barawakumbuka", district: "Hambantota"}),
    new School({name: "Manju Galle, College", district: "Hambantota"}),
    new School({name: "Nihiluwa M.v", district: "Hambantota"}),

    new School({
        name: "C. W. W. Kannangara Madya Maha Vidyalaya, Mathugama",
        district: "Kalutara"
    }),
    new School({name: "Gurulugomi Vidyalya, Kaluthara", district: "Kalutara"}),
    new School({name: "Horana Royal College", district: "Kalutara"}),
    new School({name: "Kalutara Balika National School", district: "Kalutara"}),
    new School({name: "Kalutara Vidyalaya National School", district: "Kalutara"}),
    new School({name: "Miriswatta National School, Dodangoda", district: "Kalutara"}),
    new School({name: "Sri Palee College, Horana", district: "Kalutara"}),
    new School({name: "Sri Sumangala College, Panadura", district: "Kalutara"}),
    new School({name: "Sri Sumangala Girls College", district: "Kalutara"}),
    new School({name: "St. John's College Panadura", district: "Kalutara"}),
    new School({name: "St. Mary's College, Maggona", district: "Kalutara"}),
    new School({name: "Taxila Central College, Horana", district: "Kalutara"}),
    new School({name: "Tissa Maha Vidyalaya", district: "Kalutara"}),
    new School({
        name: "Bulathsinhala Central College, Bulathsinhala",
        district: "Kalutara"
    }),
    new School({name: "Panadura Balika Maha Vidyalaya, Panadura", district: "Kalutara"}),
    new School({name: "Bandaragama National School", district: "Kalutara"}),
    new School({name: "Gamini Center College , Ingiriya", district: "Kalutara"}),
    new School({name: "Al Fahriya Central College, panadura", district: "Kalutara"}),
    new School({name: "Al Hambra Maha Vidyalaya, dharga Town", district: "Kalutara"}),
    new School({name: "Agamathi Balika Vidyalaya, Panadura", district: "Kalutara"}),
    new School({name: "Ananda Sastralaya, Matugama", district: "Kalutara"}),
    new School({name: "Jeelan Central College, Panadura", district: "Kalutara"}),
    new School({name: "Mawala Vidyalaya, Wadduwa", district: "Kalutara"}),
    new School({name: "Mihindhu Central College, Agalawatte", district: "Kalutara"}),
    new School({name: "Muslim Central College", district: "Kalutara"}),
    new School({name: "Panadura Balika Maha Vidyalaya, Panadura", district: "Kalutara"}),
    new School({name: "Panadura Royal College", district: "Kalutara"}),
    new School({name: "Sripali Maha Vidyalaya, Horana", district: "Kalutara"}),
    new School({name: "St. Mary's College, Matugama", district: "Kalutara"}),
    new School({name: "Weediya Bandara M.v , Morapitiya ", district: "Kalutara"}),
    new School({name: "Wadduwa Central College", district: "Kalutara"}),
    new School({name: "Colvin R. De Silva Maha Vidyalaya, Ittapana", district: "Kalutara"}),
    new School({name: "Zahira College, Dharga Town", district: "Kalutara"}),
    new School({name: "Sri Gnanissara College, Darga Town", district: "Kalutara"}),
    new School({
        name: "Raigam Saraswathy Tamil Maha Vidayalayam,ingiriya",
        district: "Kalutara"
    }),
    new School({
        name: "Raigam Lower Division Tamil Maha Vidyalayam, Ingiriya",
        district: "Kalutara"
    }),
    new School({name: "Ashoka English Medium School, Horana", district: "Kalutara"}),
    new School({name: "Holy Cross College, Kalutara", district: "Kalutara"}),
    new School({name: "Holy Family Convent, Kalutara", district: "Kalutara"}),
    new School({
        name: "Rathnaloka College (Semi-Government), Matugama",
        district: "Kalutara"
    }),
    new School({name: "Ikra International School - Panadura", district: "Kalutara"}),
    new School({name: "Colombo Overseas School colombo 8", district: "Kalutara"}),
    new School({name: "Beaconhall International School, panadura", district: "Kalutara"}),
    new School({
        name: "Dharul Hikma International School, Mattakkuliya",
        district: "Kalutara"
    }),
    new School({
        name: "Mount Hira International Boys School, Panadura",
        district: "Kalutara"
    }),
    new School({
        name: "Mount Hira International Girls School, Panadura",
        district: "Kalutara"
    }),
    new School({name: "Golden Gate International School, beruwala", district: "Kalutara"}),
    new School({name: "Taprobane International School, kalutara", district: "Kalutara"}),
    new School({name: "Leeds International School, Panadura", district: "Kalutara"}),
    new School({name: "Leeds International School, horana", district: "Kalutara"}),
    new School({name: "Leeds International School, mathugama", district: "Kalutara"}),
    new School({name: "Angelkids Preschool,ittapana kaluthara", district: "Kalutara"}),
    new School({name: "Noor International School", district: "Kalutara"}),
    new School({
        name: "House of Scholars International School, Gorakana, Panadura",
        district: "Kalutara"
    }),

    new School({name: "Al - Manar National School, Handessa", district: "Kandy"}),
    new School({name: "Al Manar Central College, Galhinna", district: "Kandy"}),
    new School({
        name: "Alawathugoda National College, Alawathugoda",
        district: "Kandy"
    }),
    new School({name: "Ankumbura Parakrama Central College", district: "Kandy"}),
    new School({
        name: "Anuruddha Kumara National School, Nawalapitiya",
        district: "Kandy"
    }),
    new School({name: "Badi-Ud-Din Balika Vidyalaya, Kandy", district: "Kandy"}),
    new School({name: "Dharmaraja College, Kandy", district: "Kandy"}),
    new School({name: "D. S. Senanayaka College, Kandy", district: "Kandy"}),
    new School({name: "Gamini Dissanayake Model School, Hasalaka", district: "Kandy"}),
    new School({name: "Girls' High School, Kandy", district: "Kandy"}),
    new School({name: "Hatharaliyadda Central College", district: "Kandy"}),
    new School({name: "Kadugannawa Central College", district: "Kandy"}),
    new School({name: "Kingston English School, Kandy", district: "Kandy"}),
    new School({name: "Kingswood College, Kandy", district: "Kandy"}),
    new School({name: "Madina National School, Kandy", district: "Kandy"}),
    new School({
        name: "Mahamaya Girls' College, Kandy (Balika Maha Vidyalaya)",
        district: "Kandy"
    }),
    new School({name: "Medawala Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Naranwita Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Nugawela Central College", district: "Kandy"}),
    new School({name: "Poojapitiya M.M.V. (Central College)", district: "Kandy"}),
    new School({name: "Pushpadana Girls' College, Kandy", district: "Kandy"}),
    new School({name: "Pussellawa Hindu National School", district: "Kandy"}),
    new School({name: "Senadhikara National School, Udahenthenna", district: "Kandy"}),
    new School({name: "Sri Rahula College Kandy", district: "Kandy"}),
    new School({name: "St. Paul's College Kandy", district: "Kandy"}),
    new School({
        name: "S. W. R. D. Bandaranayake National School, Kundasale",
        district: "Kandy"
    }),
    new School({name: "Teldeniya National School", district: "Kandy"}),
    new School({name: "Vidyartha College, Kandy", district: "Kandy"}),
    new School({
        name: "Wickramabahu Central College (National School), Gampola",
        district: "Kandy"
    }),
    new School({name: "Wimaladharma National School, Atabage", district: "Kandy"}),
    new School({name: "Zahira College Matale", district: "Kandy"}),
    new School({
        name: "Akurana Muslim Balika Maha Vidyalaya, Akurana",
        district: "Kandy"
    }),
    new School({name: "Alapalawela Maha Vidyalaya, Handessa", district: "Kandy"}),
    new School({name: "Alawathugoda Kanishta Vidyalaya", district: "Kandy"}),
    new School({name: "As Siraj Vidyalaya, Dellanga, Gelioya", district: "Kandy"}),
    new School({name: "Atabage Udagama Maha Vidyalaya, Gampola", district: "Kandy"}),
    new School({name: "Azhar College, Akurana", district: "Kandy"}),
    new School({name: "Berawatts Maha Vidyalaya, Ampitiya", district: "Kandy"}),
    new School({name: "Danthure Central College", district: "Kandy"}),
    new School({
        name: "Dehianga Al Azar Muslim Vidyalaya, Muruthalawajk",
        district: "Kandy"
    }),
    new School({name: "Deltota Muslim Central College, Deltota", district: "Kandy"}),
    new School({name: "Dharmawickrama Balika M.V", district: "Kandy"}),
    new School({name: "Dheerananda Maha Vidyalaya, Pilimathalawa", district: "Kandy"}),
    new School({name: "Dudley Senanayaka Central College", district: "Kandy"}),
    new School({name: "Dunuhappawa Kanishta Vidyalaya, Panwila", district: "Kandy"}),
    new School({name: "Enasalgolla Muslim Vidyalaya, Delthota", district: "Kandy"}),
    new School({
        name: "Fathima Balika Musim MahaVidyalaya, Muruthagahamula",
        district: "Kandy"
    }),
    new School({name: "Gampola Zahira College", district: "Kandy"}),
    new School({name: "Gelioya Pragnarathna Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Giragama Junior School, Pilimathalawa", district: "Kandy"}),
    new School({
        name: "Girihagama Maha Vi * Gohagoda Maha Vidyalaya",
        district: "Kandy"
    }),
    new School({name: "Gonadika Sinhala Tamil Vidyalayam", district: "Kandy"}),
    new School({name: "Halloluwa Navodya Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Hemamali Balika MahaVidyalaya, Kandy", district: "Kandy"}),
    new School({name: "Hewaheta Central College, Kandy", district: "Kandy"}),
    new School({name: "Huluganga Muslim Maha Vidyalaya, Huluganga", district: "Kandy"}),
    new School({
        name: "Hurikaduwa Balika MahaVidyalaya, Menikhinna",
        district: "Kandy"
    }),
    new School({
        name: "Irriyagama Pushpadana Maha Vidyalaya, Peradeniya",
        district: "Kandy"
    }),
    new School({name: "Jinaraja Boys'College,Sinhapitiya, Gampola", district: "Kandy"}),
    new School({
        name: "Jammul Azar Muslim Vidyalaya, Pallethalawi * Jamaliya Muslim Maha Vidyalaya, Batagolladeniya",
        district: "Kandy"
    }),
    new School({name: "Jamaliya Muslim Maha Vidyalaya, Danture", district: "Kandy"}),
    new School({name: "Kandy Model School, Polgolla", district: "Kandy"}),
    new School({name: "Kathiresan Central College, Gampola", district: "Kandy"}),
    new School({name: "Kengalla Navodya Vidyalaya", district: "Kandy"}),
    new School({name: "Kumbukkandura Muslim Maha Vidy", district: "Kandy"}),
    new School({name: "Kurugoda M.V.", district: "Kandy"}),
    new School({
        name: "Kurukuththala Muslim Vidyalaya, Kadugannawa",
        district: "Kandy"
    }),
    new School({name: "Kurunduwatta Royal College, Udapalatha", district: "Kandy"}),
    new School({
        name: "Lunuketiyamaditta Central College, Lunuketiyamadiththa",
        district: "Kandy"
    }),
    new School({name: "Mahanama Vidyalaya, Kandy", district: "Kandy"}),
    new School({name: "Mahapathana Maha Vidyalaya, Madolkele", district: "Kandy"}),
    new School({
        name: "Mahaweli MahaVidyalaya, Nawayalatenna, Katugastota",
        district: "Kandy"
    }),
    new School({name: "Maleimagal Central College, Delthota", district: "Kandy"}),
    new School({name: "Marathugoda Central College, Poojapitiya", district: "Kandy"}),
    new School({name: "Napana Kanishta Vidyalaya, Gunnepana", district: "Kandy"}),
    new School({name: "Nugawela Boys' College", district: "Kandy"}),
    new School({name: "Nugawela Girls' College", district: "Kandy"}),
    new School({name: "Panwilathenna Maha Vidyalaya", district: "Kandy"}),
    new School({
        name: "Paranagama Central College, Jambugahapitiya",
        district: "Kandy"
    }),
    new School({name: "Pelawa Maha Vidyalaya, Muruthalawa", district: "Kandy"}),
    new School({name: "Peradeniya Central College, Peradeniya", district: "Kandy"}),
    new School({name: "Peradeniya Tamil Vidyalayam, Peradeniya", district: "Kandy"}),
    new School({name: "Pilawala Navodya MahaVidyalaya, Kundasale", district: "Kandy"}),
    new School({name: "Pilimatalawa Central College", district: "Kandy"}),
    new School({name: "Pitawalawatta Maha Vidyalaya, Gelioya", district: "Kandy"}),
    new School({
        name: "Pushpadana Girls' College (Balika Vidyalaya)",
        district: "Kandy"
    }),
    new School({name: "Rajawella Hindu National College", district: "Kandy"}),
    new School({name: "Ramakrishna Central College, Galaha", district: "Kandy"}),
    new School({name: "Ranabima Royal College, Gannoruwa", district: "Kandy"}),
    new School({
        name: "Ranasinghe Premadasa National College, Hasalaka",
        district: "Kandy"
    }),
    new School({
        name: "Rathanajothi Maha Vidyalaya, udathalawinna, Katugasthota",
        district: "Kandy"
    }),
    new School({
        name: "Rathnayake Central College, Walala, Menikhinna",
        district: "Kandy"
    }),
    new School({
        name: "Sarasavi Uyana College (Maha Vidyalaya), Peradeniya",
        district: "Kandy"
    }),
    new School({
        name: "Seethadevi Girls' College (Balika Maha Vidyalaya), Kandy",
        district: "Kandy"
    }),
    new School({name: "Siddi-lebbe Muslim Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Silverline College, Gelioya", district: "Kandy"}),
    new School({name: "Sirimalwatta MahaVidyalaya, Gunnepana", district: "Kandy"}),
    new School({
        name: "St. Andrew's Balika MahaVidyalaya, Nawalapitiya",
        district: "Kandy"
    }),
    new School({name: "St. Anthony Girls College, Kandy", district: "Kandy"}),
    new School({
        name: "St. Joseph's Balika Maha Vidyalaya, Gampola",
        district: "Kandy"
    }),
    new School({
        name: "St. Mary's Muslim MahaVidyalaya, Nawalapitiya",
        district: "Kandy"
    }),
    new School({name: "St. Sylvester's College, Kandy", district: "Kandy"}),
    new School({name: "Sujatha Balika Maha Vidyalaya, Galagedara", district: "Kandy"}),
    new School({name: "Sussex College, Kandy", district: "Kandy"}),
    new School({name: "Swarnamalie Balika Maha Vidyalaya, Kandy", district: "Kandy"}),
    new School({name: "Teldeniya National College, Teldeniya", district: "Kandy"}),
    new School({name: "Tumpane Central College", district: "Kandy"}),
    new School({name: "Uda Aludeniya Maha Vidyalaya, Welamboda", district: "Kandy"}),
    new School({
        name: "Viharamaha Devi Balika Vidyalaya (Girls' College), Kandy",
        district: "Kandy"
    }),
    new School({name: "Vivekananda Tamil Vidyalayam", district: "Kandy"}),
    new School({name: "Wariyapola Sri Sumangala College, Kandy", district: "Kandy"}),
    new School({name: "Wattappola Maha Vidyalaya", district: "Kandy"}),
    new School({name: "Wattegama Central College", district: "Kandy"}),
    new School({name: "Zahira Boys College, Katugasthota", district: "Kandy"}),
    new School({name: "Yahalatenne Muslim Maha Vidyalaya, Kandy", district: "Kandy"}),
    new School({name: "St.Anthony's College, Kandy", district: "Kandy"}),
    new School({name: "Trinity College, Kandy", district: "Kandy"}),
    new School({name: "St. Benedict's College Kandy", district: "Kandy"}),
    new School({name: "Hillwood College, Kandy", district: "Kandy"}),
    new School({name: "Asoka College, Kandy", district: "Kandy"}),
    new School({name: "Good Shepherd Convent, Kandy", district: "Kandy"}),
    new School({name: "Sri Chandananda Buddhist College, Kandy", district: "Kandy"}),
    new School({name: "Mowbray College, Kandy", district: "Kandy"}),
    new School({name: "Sinhala Buddhist College, Matale", district: "Kandy"}),
    new School({name: "École internationale, Kandy", district: "Kandy"}),
    new School({
        name: "Gateway College, Kandy (formally Kandy International School)",
        district: "Kandy"
    }),
    new School({name: "Leeds International School Nawalapitiya", district: "Kandy"}),
    new School({name: "Lexicon International School, Kandy", district: "Kandy"}),
    new School({name: "Vision International School, Kandy", district: "Kandy"}),
    new School({name: "Colombo International School, Kandy", district: "Kandy"}),
    new School({name: "Dhurham College Galhinna", district: "Kandy"}),
    new School({name: "Gampola International School Gampola", district: "Kandy"}),
    new School({name: "Greenwood International School, Kandy", district: "Kandy"}),
    new School({name: "Hill Country International School, Kandy", district: "Kandy"}),
    new School({name: "Kandy Grammar School, Kandy", district: "Kandy"}),
    new School({name: "Kingston English School, Kandy", district: "Kandy"}),
    new School({name: "Loyal Ladies' College Polgolla", district: "Kandy"}),
    new School({name: "Netherfield International School, Kandy", district: "Kandy"}),
    new School({name: "Niswan Model School, Ambathanne", district: "Kandy"}),
    new School({name: "Rightway International School Kandy", district: "Kandy"}),
    new School({name: "Irish International School", district: "Kandy"}),
    new School({name: "Sherwood Girls College", district: "Kandy"}),
    new School({name: "Springfield International School, Kandy", district: "Kandy"}),
    new School({
        name: "Wesswood International Boys' College Katugastota",
        district: "Kandy"
    }),
    new School({name: "Yaqeen Model School, Ambathanne", district: "Kandy"}),
    new School({
        name: "Aranayake Central College (M.m.v.), Ussapitiya",
        district: "Kegalle"
    }),
    new School({name: "Baduriya College, Mawanella", district: "Kegalle"}),
    new School({name: "Bandaranayake Maha Vidyalaya, Hettimulla", district: "Kegalle"}),
    new School({name: "Dehiowita National School", district: "Kegalle"}),
    new School({
        name: "Dharul Uloom Muslim Maha Vidyalaya, Rambukkana",
        district: "Kegalle"
    }),
    new School({
        name: "Dudley Senanayaka Central College (M.m.v.), Tholangamuwa",
        district: "Kegalle"
    }),
    new School({name: "Hathgampala Maha Vidyalaya, Aranayaka", district: "Kegalle"}),
    new School({name: "Kegalu Balika Vidyalaya, Kegalle", district: "Kegalle"}),
    new School({name: "Kegalu Vidyalaya, Kegalle", district: "Kegalle"}),
    new School({name: "Kolonna National School", district: "Kegalle"}),
    new School({name: "Mayura Pada M.m.v., Mawanella", district: "Kegalle"}),
    new School({name: "Molagoda Jayapala Maha Vidyalaya", district: "Kegalle"}),
    new School({name: "Nooraniy Maha Vidyalaya, Uyanwatte", district: "Kegalle"}),
    new School({
        name: "Pinnawala Central College (M.m.v.), Rambukkana",
        district: "Kegalle"
    }),
    new School({name: "Rajagiriya Maha Vidyalaya, Dippitiya", district: "Kegalle"}),
    new School({
        name: "Rajasinghe Central College (M.m.v.), Ruwanwella",
        district: "Kegalle"
    }),
    new School({name: "Sirisaman M.m.v., Deraniyagala", district: "Kegalle"}),
    new School({
        name: "St. Josephs' Balika Maha Vidyalaya, Kegalle",
        district: "Kegalle"
    }),
    new School({name: "St.mary's College, Kegalle.", district: "Kegalle"}),
    new School({name: "Sulaimaniya Navodya School, Kannattota", district: "Kegalle"}),
    new School({name: "Swarna Jayanthi Mahavidyalaya, Kegalle", district: "Kegalle"}),
    new School({
        name: "Thalgaspitiya Muslim Maha Vidyalaya, Aranayake",
        district: "Kegalle"
    }),
    new School({name: "Walagama Maha Vidyalaya, Dewalegama", district: "Kegalle"}),
    new School({name: "Yatiyantota M.m.v.", district: "Kegalle"}),
    new School({name: "Zahira College Mawanella (Muslim M.m.v.)", district: "Kegalle"}),
    new School({name: "Al Azhar Central College Hemmatagama", district: "Kegalle"}),
    new School({
        name: "Aranayake Central College (Rivisada Madya Maha Vidyalaya)",
        district: "Kegalle"
    }),
    new School({name: "Ashoka Maha Vidyalaya, Rambukkana", district: "Kegalle"}),
    new School({
        name: "Babul Hassen Central College (Navodya School), Warakapola",
        district: "Kegalle"
    }),
    new School({name: "Bandaranayake Maha Vidyalaya, Hettimulla", district: "Kegalle"}),
    new School({name: "Danagama Mahavidyala, Mawanella", district: "Kegalle"}),
    new School({name: "Deliwala Maha Vidyalaya, Rambukkana", district: "Kegalle"}),
    new School({name: "Iddamalpana Maha Vidyalaya, Atale", district: "Kegalle"}),
    new School({name: "Kegalle Balika Vidyalaya", district: "Kegalle"}),
    new School({name: "Kegalu Vidyalaya", district: "Kegalle"}),
    new School({name: "Mns Meegaliwa", district: "Kegalle"}),
    new School({name: "Nooraniya Central College, Uyanwatte", district: "Kegalle"}),
    new School({name: "Olcotte Vidyalaya, Henepola", district: "Kegalle"}),
    new School({name: "Parakrama Maha Vidyalaya, Rambukkana", district: "Kegalle"}),
    new School({name: "Pinnawala Central College, Rambukkana", district: "Kegalle"}),
    new School({name: "Rajasinghe Central College, Ruwanwella", district: "Kegalle"}),
    new School({name: "St. Mary's College, Kegalle", district: "Kegalle"}),
    new School({name: "Sujatha Vidyalaya, Rambukkana", district: "Kegalle"}),
    new School({
        name: "Sulaimaniya Central College (Navodya School), Kannattota",
        district: "Kegalle"
    }),
    new School({
        name: "Golinda Tamil Kanishta Vidyalayam - Hettimulla",
        district: "Kegalle"
    }),
    new School({
        name: "Ranjan Wijayarathna Maha Vidyalaya, Panawala",
        district: "Kegalle"
    }),

    new School({name: "Maliyadeva College, Kurunegala", district: "Kurunegala"}),
    new School({name: "Royal College Wayamba, Kurunegala", district: "Kurunegala"}),
    new School({name: "Holy Family Balika, Kurunegala", district: "Kurunegala"}),
    new School({
        name: "Ibbagamuwa Central College (M.m.v.)",
        district: "Kurunegala"
    }),
    new School({
        name: "Kekunagolla Central College, Kekunagolla",
        district: "Kurunegala"
    }),
    new School({name: "Central College Kuliyapitiya", district: "Kurunegala"}),
    new School({name: "Lakdas College, Kurunegala", district: "Kurunegala"}),
    new School({
        name: "Madeena National School, Siyambalagaskotuwa",
        district: "Kurunegala"
    }),
    new School({
        name: "Maliyadeva Girls' College (Balika Vidyalaya), Kurunegala",
        district: "Kurunegala"
    }),
    new School({
        name: "Maliyadeva Model College (Adarsha Maha Vidyalaya), Kurunegala",
        district: "Kurunegala"
    }),
    new School({
        name: "Mayurapada Central College (M.m.v.), Narammala",
        district: "Kurunegala"
    }),
    new School({
        name: "Mawatagama Central College (M.m.v.)",
        district: "Kurunegala"
    }),
    new School({
        name: "Nakkawatte Central College (M.m.v.)",
        district: "Kurunegala"
    }),
    new School({
        name: "Paragahadeniya Muslim M.m.v., Mawathagama",
        district: "Kurunegala"
    }),
    new School({name: "Parakramabahu M.m.v., Polgahawela", district: "Kurunegala"}),
    new School({
        name: "S.b.herath National College,ganewattha,nikadalupotha",
        district: "Kurunegala"
    }),
    new School({
        name: "Sri Nishshanka M.m.v., Indulgodakanda",
        district: "Kurunegala"
    }),
    new School({name: "Sri Rahula M.m.v., Alawwa", district: "Kurunegala"}),
    new School({name: "St. Anne's College, Kurunegala", district: "Kurunegala"}),
    new School({name: "Udabadalawa Sudarsana College", district: "Kurunegala"}),
    new School({name: "Vijayaba National College, Maho", district: "Kurunegala"}),
    new School({
        name: "Wickramashila Central College, Giriulla",
        district: "Kurunegala"
    }),
    new School({name: "Pannala National School, Pannala", district: "Kurunegala"}),
    new School({name: "Megalawa Mahaweli Jathika Pasala", district: "Kurunegala"}),
    new School({name: "Polpithigama National School", district: "Kurunegala"}),
    new School({
        name: "Rideevihara Maha Vidyalaya - Kappitigala Road, Kurunegala.",
        district: "Kurunegala"
    }),
    new School({name: "Kavisigamuva M.m.v", district: "Kurunegala"}),
    new School({
        name: "Sri Viddiya Raja M.v Palleyaya,dodangaslanda Ibbagamuwa.",
        district: "Kurunegala"
    }),
    new School({
        name: "Abukkagama Muslim Maha Vidyalaya, Nikaweratiya",
        district: "Kurunegala"
    }),
    new School({
        name: "Ambanpola Central College, Ambanpola",
        district: "Kurunegala"
    }),
    new School({
        name: "Ambanpola Kanista Vidyalaya, Ambanpola",
        district: "Kurunegala"
    }),
    new School({
        name: "Dambadeniya Central College (Navodya School)",
        district: "Kurunegala"
    }),
    new School({
        name: "Holy Angels Girls' College Kuliyapitiya",
        district: "Kurunegala"
    }),
    new School({name: "Mahasen College, Nikaweratuya", district: "Kurunegala"}),
    new School({
        name: "Maliyadeva Adarsha M.v., Kurunegala",
        district: "Kurunegala"
    }),
    new School({
        name: "Dharmaraja Adarsha M.v., Kuliyapitiya",
        district: "Kurunegala"
    }),
    new School({name: "St.joseph's College Kuliyapitiya", district: "Kurunegala"}),
    new School({name: "Paragahadeniya Central College", district: "Kurunegala"}),
    new School({name: "Sandalankawa Central College", district: "Kurunegala"}),
    new School({name: "Saranath College, Kuliyapitiya", district: "Kurunegala"}),
    new School({
        name: "Sir John Kotalawala College, Kurunegala",
        district: "Kurunegala"
    }),
    new School({name: "Sri Sumangala College, Wariyapola", district: "Kurunegala"}),
    new School({name: "Udanvita Vidayalaya,melsiripura", district: "Kurunegala"}),
    new School({name: "Wickramasheela College, Giriulla", district: "Kurunegala"}),
    new School({
        name: "Pannawa Muslim Central College,pannawa",
        district: "Kurunegala"
    }),
    new School({
        name: "Al-Ameen Central College - Elabadagama.",
        district: "Kurunegala"
    }),
    new School({
        name: "Al- Ilmiya Maha Vidayalaya, Welpothuwewa",
        district: "Kurunegala"
    }),
    new School({
        name: "Athuruwala Galpeella Primary School, Dambadeniya",
        district: "Kurunegala"
    }),
    new School({name: "National School, Pannala", district: "Kurunegala"}),
    new School({name: "Paduwasnuwara Central College", district: "Kurunegala"}),
    new School({name: "Kubukkadawala Kanitu Viduhala", district: "Kurunegala"}),
    new School({
        name: "Ahatuwewa Bandaranayake Nawodya Pasala",
        district: "Kurunegala"
    }),
    new School({name: "Karabe Maha Midyalaya", district: "Kurunegala"}),
    new School({name: "Yapahuwa Maha Vidyalaya", district: "Kurunegala"}),
    new School({name: "Nk/nammuwawa M.m.v", district: "Kurunegala"}),
    new School({name: "Nk/hulogedara M.v", district: "Kurunegala"}),
    new School({name: "Nungamuwa Damsen M.m.v", district: "Kurunegala"}),
    new School({name: "Manelebuwa Maha Vidyalaya", district: "Kurunegala"}),
    new School({name: "Wanekolaniya Prathamika Viduhala", district: "Kurunegala"}),
    new School({name: "Konwewa Maha Vidyalaya", district: "Kurunegala"}),
    new School({
        name: "Galmegalawa Adarsha Prathamika Viduhala",
        district: "Kurunegala"
    }),
    new School({name: "Megalawa Mahaweli Jathika Pasala", district: "Kurunegala"}),
    new School({name: "Vikadenigama Viduhala", district: "Kurunegala"}),
    new School({name: "Humbuluwa M.m.v", district: "Kurunegala"}),
    new School({
        name: "Roman Catholic College , Mawathagama",
        district: "Kurunegala"
    }),
    new School({
        name: "Dp Wickramasinge College , Mawathagama",
        district: "Kurunegala"
    }),
    new School({name: "Mallawapitiya Samodaya M.v", district: "Kurunegala"}),
    new School({name: "Bibiladeniya Sri Gunannda M.m.v", district: "Kurunegala"}),
    new School({name: "Gomu Gomuwa K.v", district: "Kurunegala"}),
    new School({name: "Nk/ Muslim Model Central Collage", district: "Kurunegala"}),

    new School({name: "Al Furkhan Muslim M.v. Galewela", district: "Matale"}),
    new School({name: "Aluthwewa K.v. Bambaragaswewa", district: "Matale"}),
    new School({name: "Andagala P.s.bambaragaswewa", district: "Matale"}),
    new School({name: "Bambawa P.s.galewela", district: "Matale"}),
    new School({name: "Beligamuwa K.v.beligamuwa", district: "Matale"}),
    new School({name: "Bulanawewa P.s. Dewahuwa", district: "Matale"}),
    new School({name: "Damunumulla K.v.damunumulla", district: "Matale"}),
    new School({name: "Dandubendiruppa K.v.dewahuwa", district: "Matale"}),
    new School({name: "Dewahuwa Mus M.v.dewahuwa", district: "Matale"}),
    new School({
        name: "Dewahuwa Sin K.v.boralukanda,dewahuwa.",
        district: "Matale"
    }),
    new School({name: "Diulgaskotuwa P.s.beligamuwa", district: "Matale"}),
    new School({name: "Elamalpotha Mus M.v.wahakotte", district: "Matale"}),
    new School({name: "Galewela M.m.v.galewela", district: "Matale"}),
    new School({name: "Galewela P.s.galewela", district: "Matale"}),
    new School({name: "Hombawa M.v.bambaragaswewa", district: "Matale"}),
    new School({name: "Ihaladiggala P.s.ihaladiggala", district: "Matale"}),
    new School({name: "Kandangamuwa P.s.madipola", district: "Matale"}),
    new School({name: "Keppitiya Mus K.v.galewela", district: "Matale"}),
    new School({name: "Kosgahaheenna P.s.bambaragaswewa", district: "Matale"}),
    new School({name: "Madipola M.v. Matale", district: "Matale"}),
    new School({name: "Makulugasewa M.v.dewahuwa", district: "Matale"}),
    new School({name: "Mendabedda M.v.wahakotte", district: "Matale"}),
    new School({name: "Morogolla M.v.bambaragaswewa", district: "Matale"}),
    new School({name: "Neerangamuwa K.v.wahakotte", district: "Matale"}),
    new School({name: "Nikawehera K.v.galewela", district: "Matale"}),
    new School({name: "Nilagama K.v.nilagama", district: "Matale"}),
    new School({name: "Pahaladiggala P.s.dewahuwa", district: "Matale"}),
    new School({name: "Pathkolagolla K.v.galewela", district: "Matale"}),
    new School({name: "Pattiwela K.v.galewela", district: "Matale"}),
    new School({name: "Silwathgala M.v.beliyakanda", district: "Matale"}),
    new School({name: "Silwathgama P.s.silwatgama", district: "Matale"}),
    new School({name: "Siyambalagahawela K.v.wahakotte", district: "Matale"}),
    new School({name: "Srisugatha P.s.galewela", district: "Matale"}),
    new School({name: "St.anthony's M.v.wahakotte", district: "Matale"}),
    new School({
        name: "Thalakiriyagama M.v.thalakiriyagama",
        district: "Matale"
    }),
    new School({
        name: "Thennakoonpura P.s.thalakiriyagama",
        district: "Matale"
    }),
    new School({name: "Tholanbugolla K.v.galewela", district: "Matale"}),
    new School({name: "Yatigalpotta K.v.galewela", district: "Matale"}),
    new School({
        name: "Alakolawewa P.s.wewalawewa, Dambulla",
        district: "Matale"
    }),
    new School({name: "Bellanneoya P.s.inamaluwa", district: "Matale"}),
    new School({name: "Bulagala P.s.dambulla", district: "Matale"}),
    new School({name: "D.s. Senanayaka P.s.dambulla", district: "Matale"}),
    new School({
        name: "D.s. Senanayake M.v.ereula Janction, Damblla",
        district: "Matale"
    }),
    new School({name: "Dambulla P.s.dambulla", district: "Matale"}),
    new School({name: "Dambulla, M.m.v.dambulla", district: "Matale"}),
    new School({name: "Digampathaha K.v.kimbssa", district: "Matale"}),
    new School({name: "Diyakedilla P.s.sigiriya", district: "Matale"}),
    new School({
        name: "Eraula K.v.eraula Jonction,dambulla",
        district: "Matale"
    }),
    new School({name: "Ethabendiwewa K.v.dambulla", district: "Matale"}),
    new School({
        name: "Ihala Ereula P.s.ereula Junction,dambulla",
        district: "Matale"
    }),
    new School({
        name: "Kalogahaela P.s.ereula Junction,dambulla",
        district: "Matale"
    }),
    new School({
        name: "Kandalama Madeena Mus K.v.dambulla",
        district: "Matale"
    }),
    new School({name: "Kimbissa K.v.kimbissa", district: "Matale"}),
    new School({name: "Kiralagolla P.s.dmbulla", district: "Matale"}),
    new School({name: "Lenadora K.v.lenadora", district: "Matale"}),
    new School({name: "Lenawa P.s.kimbissa", district: "Matale"}),
    new School({name: "Mahasen K.v.kalundawa, Dambulla.", district: "Matale"}),
    new School({name: "Nagalawewa P.s.kimbissa", district: "Matale"}),
    new School({name: "Nikawatawana Mus K.v.kimbissa", district: "Matale"}),
    new School({name: "Palutawa P.s.kimbissa", district: "Matale"}),
    new School({name: "Pannampitiya M.v.lenadora", district: "Matale"}),
    new School({name: "Pelwehera K.v.dambulla", district: "Matale"}),
    new School({name: "Pohoranwewa P.s.dambulla", district: "Matale"}),
    new School({name: "Polaththawa P.s.sigiriya", district: "Matale"}),
    new School({name: "Rathmalgahaela K.v.dambulla", district: "Matale"}),
    new School({name: "Sigiriya M.v.sigiriya", district: "Matale"}),
    new School({name: "Tennakoon M.v.kandalama,dambulla", district: "Matale"}),
    new School({name: "Thalkote P.s.sigiriya", district: "Matale"}),
    new School({name: "Thithawelgolla P.s.dambulla", district: "Matale"}),
    new School({name: "Thiththawelgolla K.v.dambulla", district: "Matale"}),
    new School({name: "Udawelayagama K.v.sigiriya", district: "Matale"}),
    new School({
        name: "Veera Vijaya Wimalarathna M.v.inamaluwa",
        district: "Matale"
    }),
    new School({name: "Walgamwewa K.v.lenadora", district: "Matale"}),
    new School({name: "Wattegammedda P.s.lenadora", district: "Matale"}),
    new School({
        name: "Weera Mohan Jayamaha K.v.dambulugama, Dambulla",
        district: "Matale"
    }),
    new School({name: "Welamitiyawa P.s.galewela", district: "Matale"}),
    new School({
        name: "Wewalawewa M.v.wewalawewa,dambulla",
        district: "Matale"
    }),
    new School({name: "Akuramboda K. V.akuramboda", district: "Matale"}),
    new School({name: "Al Azhar Mus M.v.mananwaththa", district: "Matale"}),
    new School({name: "Ambokka P. S.millawana", district: "Matale"}),
    new School({name: "Arafa Mus.m.v.madipola", district: "Matale"}),
    new School({name: "Demadaoya P.s.nalanda", district: "Matale"}),
    new School({name: "Dimbulgamuwa K.v.madawela Ulpatha", district: "Matale"}),
    new School({name: "Ebbawala P.s.mananwatta", district: "Matale"}),
    new School({name: "Kandewattha P.s.millawana", district: "Matale"}),
    new School({name: "Kirioruwa P. S.akuramboda", district: "Matale"}),
    new School({name: "Kobbewehera K. V.millawana", district: "Matale"}),
    new School({name: "Kohalanwela K.v.madawela Ulpatha", district: "Matale"}),
    new School({name: "Kosgolla P. S.akuramboda", district: "Matale"}),
    new School({name: "Mahabodhi M.v.pallepola", district: "Matale"}),
    new School({name: "Mananwatta K. V.mananwatta", district: "Matale"}),
    new School({name: "Maningamuwa M.v.pallepola", district: "Matale"}),
    new School({name: "Millawana M.v.millawana", district: "Matale"}),
    new School({name: "Millawana P.s.millawana", district: "Matale"}),
    new School({name: "Monarawila K.v.pallepola", district: "Matale"}),
    new School({name: "Nilannoruwa P.s.madipola", district: "Matale"}),
    new School({name: "Rusigama M.v.pallepola", district: "Matale"}),
    new School({name: "Thalakiriyawa K.v.madipola", district: "Matale"}),
    new School({name: "Walmoruwa K. V.nalanda", district: "Matale"}),
    new School({
        name: "Weera Keppetipola M. M.v.akuramboda (National School)",
        district: "Matale"
    }),
    new School({
        name: "Weeramadduma Bandara K.v.pallepola",
        district: "Matale"
    }),
    new School({name: "Aluvihara M.v. Aluvihara, Matale", district: "Matale"}),
    new School({
        name: "Amina M.v. Molandapitiya Road, Matale",
        district: "Matale"
    }),
    new School({
        name: "Buddhagosha M.v. Palapathwala, Matale",
        district: "Matale"
    }),
    new School({name: "Christ Church College Matale", district: "Matale"}),
    new School({name: "Sinhala Buddhist College Matale", district: "Matale"}),
    new School({name: "Dodamdeniya V. Dodamdeniy, Matale", district: "Matale"}),
    new School({name: "Government Science College Matale", district: "Matale"}),
    new School({name: "Hathamunagala V. Madawala Ulpotha", district: "Matale"}),
    new School({name: "Hindu M.v. Mandandawela, Matale", district: "Matale"}),
    new School({name: "Hulangamuwa V. Matale", district: "Matale"}),
    new School({name: "Imulandanda V. Dunkolawatta", district: "Matale"}),
    new School({
        name: "Ismaliya V. Gongawela Road, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kalaimagal M.v. Kawdupalelle, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kanangamuwa V. Dumkolawatta, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kaudupelella Sinhala V. Kaudupelella, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kawatayamuna Ananda M.v. Mahawela, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kottagoda Mus.v Palapathwala, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kotuwegedara V. Kotuwegedara, Matale",
        district: "Matale"
    }),
    new School({
        name: "Madawala Ulpotha M.v. Madawala Ulpotha",
        district: "Matale"
    }),
    new School({
        name: "Moragahamada V. Moragahamada, Madawala Ulpotha",
        district: "Matale"
    }),
    new School({
        name: "Pakkiya M.v. Dharmapala Mawatha, Matale",
        district: "Matale"
    }),
    new School({
        name: "Rajjammana Mus. V. Madawala Ulpotha, Matale",
        district: "Matale"
    }),
    new School({
        name: "Sirimavo Bandaranayaka M.p.s. Matale",
        district: "Matale"
    }),
    new School({name: "Sri Rahula V. Dombawela, Mahawela", district: "Matale"}),
    new School({name: "Sri Sangamitta B.m.v. Matale", district: "Matale"}),
    new School({name: "Gateway Independent School Matale", district: "Matale"}),
    new School({name: "St.thoma's College Matale", district: "Matale"}),
    new School({
        name: "Sujatha B.m.v. Kumbiyangoda, Matale",
        district: "Matale"
    }),
    new School({name: "Thiruwalluwar T.v. Palapthwala", district: "Matale"}),
    new School({name: "Vijaya V. Matale", district: "Matale"}),
    new School({
        name: "Vijayapala M.v. Richard Pamunuwa Mawatha, Matale",
        district: "Matale"
    }),
    new School({name: "Zahira College Matale", district: "Matale"}),
    new School({name: "Abdul Hameed Mus. V. Rattota", district: "Matale"}),
    new School({name: "Alakolamada V. Kaikawala", district: "Matale"}),
    new School({name: "Bambaragalla T.v. Rattota", district: "Matale"}),
    new School({name: "Bandarapola M.v. Kula, Matale", district: "Matale"}),
    new School({name: "Bandarapola T.v. Muwandeniya", district: "Matale"}),
    new School({name: "Baptist V. Rattota", district: "Matale"}),
    new School({name: "Dankanda M.v. Dankanda, Matale", district: "Matale"}),
    new School({name: "Dankanda T.v. Rattota", district: "Matale"}),
    new School({name: "Dikkubura V. Dikkubura, Rattota", district: "Matale"}),
    new School({
        name: "Ganeshwara V. Thambalagala, Matale",
        district: "Matale"
    }),
    new School({name: "Gansarapola P.s Kaikawala", district: "Matale"}),
    new School({name: "Hapuvida V. Alwatte, Matale", district: "Matale"}),
    new School({
        name: "Kaikawala M.m.v. Kaikawala, Matale",
        district: "Matale"
    }),
    new School({name: "Kaikawela Pri.v Kaikawela, Matale", district: "Matale"}),
    new School({name: "Kandenuwara T.v. Alwatta", district: "Matale"}),
    new School({name: "Kawdagammana .V Dankanda, Matale", district: "Matale"}),
    new School({name: "Kiula Ulpotha V. Kiula, Matale", district: "Matale"}),
    new School({name: "Koswana V. Koswana, Kaikawala", district: "Matale"}),
    new School({name: "Madakumbura P.s Rattota", district: "Matale"}),
    new School({
        name: "Mausagala T.v. Welangahawatta, Rattota",
        district: "Matale"
    }),
    new School({name: "Midland T.v. Rattota", district: "Matale"}),
    new School({
        name: "Musthafa Mus.v. Ulpatha Pitiya, Kiula",
        district: "Matale"
    }),
    new School({
        name: "Muwandeniya V. Muwandeniya, Matale",
        district: "Matale"
    }),
    new School({
        name: "Neluwakanda Baptist V. Neluwakanda, Alwatta",
        district: "Matale"
    }),
    new School({
        name: "Neluwakanda Bauddha M.v. Muwandeniya",
        district: "Matale"
    }),
    new School({name: "Nichaloya T.v Nicholoya, Rattota", district: "Matale"}),
    new School({name: "Owala V. Kaikawala", district: "Matale"}),
    new School({
        name: "Parakrama V. Meda Weragama, Kaikawala",
        district: "Matale"
    }),
    new School({
        name: "Pitakanda K.v. Pitakanda, Kaikawala",
        district: "Matale"
    }),
    new School({name: "Pitakande T.v. Pitakande, Matale", district: "Matale"}),
    new School({name: "Polwattakanda V. Dankanda, Matale", district: "Matale"}),
    new School({name: "Rattota Hindu.m.v. Rattota", district: "Matale"}),
    new School({
        name: "Sariputta Model S. Karagahalanda, Alwatta, Matale",
        district: "Matale"
    }),
    new School({name: "Sri Parakrama M.v. Rattota", district: "Matale"}),
    new School({
        name: "Sriseevali M.v. Weragama, Kaikawala",
        district: "Matale"
    }),
    new School({
        name: "Vivegananda T.v. Wiharegama Estate, Matale",
        district: "Matale"
    }),
    new School({
        name: "Welangahawatte V. Welangahawatte, Rattota",
        district: "Matale"
    }),
    new School({
        name: "Weralugastenna .V Weralugastenna, Dankanda",
        district: "Matale"
    }),
    new School({
        name: "Wewelmadde T.v. Welanghawatta, Rattota",
        district: "Matale"
    }),
    new School({name: "Ajmeer Mus.m.v Ukuwela", district: "Matale"}),
    new School({name: "An-Noor M.m.v Warakamura, Ukuwela", district: "Matale"}),
    new School({name: "Balakaduwa P.v Alawathugoda", district: "Matale"}),
    new School({
        name: "Bowatta Sri Sumangala V. Bowatta, Ukuwela",
        district: "Matale"
    }),
    new School({
        name: "Dehideniya P.s Dehideniya Leiambe.",
        district: "Matale"
    }),
    new School({name: "Elkaduwa Sinhala K.v. Elkaduwa", district: "Matale"}),
    new School({name: "Elkaduwa T.m.v. Elkaduwa", district: "Matale"}),
    new School({name: "Elwala K.v. Elwala", district: "Matale"}),
    new School({name: "Guralawela .V. Ukuwela", district: "Matale"}),
    new School({name: "Hunugala T.v. Elkaduwa", district: "Matale"}),
    new School({
        name: "Imbulpitiya .M.v. Karagahahinna, Via Matale",
        district: "Matale"
    }),
    new School({name: "Kaduwela V. Ukuwela, Matale", district: "Matale"}),
    new School({name: "Kalalpitiya V. Ukuwela", district: "Matale"}),
    new School({
        name: "Katudeniya M.v. Katudeniya, Matale",
        district: "Matale"
    }),
    new School({
        name: "Kirimetiyawa Kirimetiyawa Oviliy Kanda",
        district: "Matale"
    }),
    new School({name: "Kuriwela Hameediya Mus.v Ukuwela", district: "Matale"}),
    new School({
        name: "Kuriwela Sinhala M.v. Kuriwela, Ukuwela",
        district: "Matale"
    }),
    new School({name: "Leliabe Pri. S. Leliabe", district: "Matale"}),
    new School({name: "Leliambe M.v. Leliambe", district: "Matale"}),
    new School({name: "Matale West T.v. Matale", district: "Matale"}),
    new School({name: "Nagolla Pri. S. Nagolla, Ukuwela", district: "Matale"}),
    new School({name: "Nagolla Siddhartha M.m.v. Ukuwela", district: "Matale"}),
    new School({
        name: "Ovilikanda M.v. Ovilikanda, Matale",
        district: "Matale"
    }),
    new School({
        name: "Ovilikanda Pri.v. Ovilikanda, Matale",
        district: "Matale"
    }),
    new School({
        name: "Owilikanda T.v. Owilikanda, Matale",
        district: "Matale"
    }),
    new School({name: "Panngnarama M.v. Udatenna, Matale", district: "Matale"}),
    new School({name: "Pathingolla V. Owilikanda, Matale", district: "Matale"}),
    new School({
        name: "Pujagoda Mahinda Vidyalaya Rathalawala Ukuwela",
        district: "Matale"
    }),
    new School({name: "Ratwatta T.v. Ratwatta, Ukuwela", district: "Matale"}),
    new School({name: "Tenna M.v. Tenna, Matale", district: "Matale"}),
    new School({
        name: "Udupihilla Sri Saranankara .M. Udupihilla, Matale",
        district: "Matale"
    }),
    new School({name: "Vaani T.v Hunnasgiriya, Elkaduwa", district: "Matale"}),
    new School({
        name: "Wademada Govt.s. Wademada, Ovilikanda",
        district: "Matale"
    }),
    new School({name: "Wariapola T.v. Kandy Road, Matale", district: "Matale"}),
    new School({
        name: "Watagoda Sri Indarathna Pri.s. Watagoda, Matale",
        district: "Matale"
    }),
    new School({name: "Wehigala M.v. Wehigala, Matale", district: "Matale"}),
    new School({
        name: "Aluthgama K.v. Aluthgama, Walawela",
        district: "Matale"
    }),
    new School({
        name: "Anagarika Dharmapala M.v. Udasgiriya, Matale",
        district: "Matale"
    }),
    new School({
        name: "Athipola V. Athipola, Dullawa, Matale",
        district: "Matale"
    }),
    new School({name: "D.m. Gunaratna M.v. Mahawela", district: "Matale"}),
    new School({
        name: "Devilla Maliyadewa V. Devilla, Yatawatta",
        district: "Matale"
    }),
    new School({name: "Dullewa M.v. Dullewa, Matale", district: "Matale"}),
    new School({
        name: "Idamgama P.s. Idamgama, Udasgiriya, Matale",
        district: "Matale"
    }),
    new School({name: "Mahalewakanda T.v. Kawdupellala", district: "Matale"}),
    new School({
        name: "Matalapitiya V. Matalapitiya, Walawela",
        district: "Matale"
    }),
    new School({name: "Minhaj M.v. Nikagolla, Yatawatta", district: "Matale"}),
    new School({name: "Nandana V. Udasgiriya, Matale", district: "Matale"}),
    new School({name: "Pamunuwa K.v. Walawela, Matale", district: "Matale"}),
    new School({name: "Ratalawewa V. Mahawela", district: "Matale"}),
    new School({name: "Selagama T.v. Selagama", district: "Matale"}),
    new School({name: "Selagama V. Selagama, Matale", district: "Matale"}),
    new School({
        name: "Weera Parakrama M.m.v. Yatawatta, Matale.",
        district: "Matale"
    }),
    new School({name: "Yatawatta T.v. Yatawatta", district: "Matale"}),
    new School({name: "Arafa National College, Weligama", district: "Matara"}),
    new School({
        name: "Deiyandara National College, Deiyandara",
        district: "Matara"
    }),
    new School({
        name: "Dickwella Vijitha Maha Vidyalaya, Dickwella",
        district: "Matara"
    }),
    new School({name: "Matara Central College, Matara", district: "Matara"}),
    new School({
        name: "Minhath National College, Dickwella",
        district: "Matara"
    }),
    new School({name: "Rahula College, Matara", district: "Matara"}),
    new School({name: "Siddartha College, Weligama", district: "Matara"}),
    new School({
        name: "Sri Sumangala Balika Vidyalaya, Weligama",
        district: "Matara"
    }),
    new School({name: "St. Servatius' College, Matara", district: "Matara"}),
    new School({
        name: "St. Thomas' Girls' High School, Matara",
        district: "Matara"
    }),
    new School({name: "St.thomas' College, Matara", district: "Matara"}),
    new School({name: "Sujatha Vidyalaya, Matara", district: "Matara"}),
    new School({name: "Telijjawila Central College", district: "Matara"}),
    new School({
        name: "Godapitiya Maha Vidyalaya, Akuressa",
        district: "Matara"
    }),
    new School({name: "Thihagoda M.m.v , Thihagoda", district: "Matara"}),
    new School({
        name: "Palatuwa Gunarathana Central College, Matara",
        district: "Matara"
    }),
    new School({
        name: "Yasodara Devi Balika Maha Vidyalaya",
        district: "Matara"
    }),
    new School({name: "Deniyaya Central College,deniyaya", district: "Matara"}),
    new School({name: "Devinuwara Central College", district: "Matara"}),
    new School({name: "Puhulwella Central College", district: "Matara"}),
    new School({name: "Vipulasara Central College", district: "Matara"}),
    new School({name: "Akuressa Maha Vidyalaya", district: "Matara"}),
    new School({
        name: "Annor Muslim National College, Weligama",
        district: "Matara"
    }),
    new School({
        name: "Arankahadeniya Vidyalaya, Urugamuwa",
        district: "Matara"
    }),
    new School({
        name: "As-Safa Muslim School, Madurapura, Denipitiya",
        district: "Matara"
    }),
    new School({name: "Atapattukanda K.v., Deiyandara", district: "Matara"}),
    new School({name: "Buddhajayanthi K.v., Hakmana", district: "Matara"}),
    new School({name: "Deiyandara M.m.v.", district: "Matara"}),
    new School({
        name: "Gagodagama Jayawardana M.v., Hakmana",
        district: "Matara"
    }),
    new School({
        name: "Goda Uda Maha Vidyalaya, Dickwella",
        district: "Matara"
    }),
    new School({
        name: "Kamburupitiya Maha Vidyalaya, Kamburupitiya",
        district: "Matara"
    }),
    new School({name: "Ketiyape M.v., Deiyandara", district: "Matara"}),
    new School({name: "Kongala M.m.v., Hakmana", district: "Matara"}),
    new School({
        name: "Maha Maya Balika Vidyalaya, Matara",
        district: "Matara"
    }),
    new School({
        name: "Malimbada North Maha Vidyalaya, Matara",
        district: "Matara"
    }),
    new School({name: "Motagedara Maha Vidyalaya, Matara", district: "Matara"}),
    new School({name: "Narandeniya M.m.v., Kamburupitiya", district: "Matara"}),
    new School({
        name: "Rajakeeya Maha Vidyalaya, Telijjawila",
        district: "Matara"
    }),
    new School({name: "Rohana Vidyalaya, Matara", district: "Matara"}),
    new School({name: "Kubalgoda K.v", district: "Matara"}),
    new School({
        name: "Polwathumodara Maha Vidyala, Modara",
        district: "Matara"
    }),
    new School({name: "Polwatta Kanishta Vidyalaya", district: "Matara"}),
    new School({
        name: "Thalalla North Maha Vidyalaya, Matara",
        district: "Matara"
    }),
    new School({
        name: "Keerthi Abewikrama College-Morawaka",
        district: "Matara"
    }),
    new School({
        name: "Thalpavila Central College, Matara",
        district: "Matara"
    }),
    new School({name: "Vijayaba Vidyalaya, Matara", district: "Matara"}),
    new School({name: "Seenipalla Kanista Vidyalaya", district: "Matara"}),
    new School({name: "Makadura Madya Maha Vidyalaya", district: "Matara"}),
    new School({name: "Sulthanagoda K.v", district: "Matara"}),
    new School({name: "Warakapitiya M.v", district: "Matara"}),
    new School({name: "Wehalla Vidyalaya", district: "Matara"}),
    new School({name: "Kirinda Kanishta Vidyalaya", district: "Matara"}),
    new School({name: "Nimalawa Kanishta Vidyalaya", district: "Matara"}),
    new School({name: "Henagama Kanishta Vidyalaya", district: "Matara"}),
    new School({
        name: "Karagoda Uyangoda Maha Vidyalaya, Kamburupitiya",
        district: "Matara"
    }),
    new School({
        name: "Salahiya International School- Weligama.",
        district: "Matara"
    }),
    new School({
        name: "St. Mary's Convent, Matara (Semi-Government)",
        district: "Matara"
    }),
    new School({
        name: "Dutugamunu National School",
        district: "Moneragala"
    }),
    new School({
        name: "Mahanama Madya Maha Vidyalaya",
        district: "Moneragala"
    }),
    new School({name: "Monaragala Royal College", district: "Moneragala"}),
    new School({
        name: "Thanamalwila National School",
        district: "Moneragala"
    }),
    new School({
        name: "Athpattiya Kanitu Viduhala",
        district: "Moneragala"
    }),
    new School({
        name: "Monarawana Kanitu Viduhala",
        district: "Moneragala"
    }),
    new School({name: "Buddhama Maha Viduhala", district: "Moneragala"}),
    new School({
        name: "Waragama Prathamika Viduhala",
        district: "Moneragala"
    }),
    new School({name: "Ethimale Secondary School", district: "Moneragala"}),

    new School({
        name: "Ananda National College,puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Puttalam Hindu Central College, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Anamaduwa Central College (M.m.)",
        district: "Puttalam"
    }),
    new School({
        name: "Ananda National College, Chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "Dhammissara National College, Nattandiya",
        district: "Puttalam"
    }),
    new School({
        name: "Fathima Muslim Girls School, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Holy Family Girls School, Wennappuwa",
        district: "Puttalam"
    }),
    new School({
        name: "Holy Family Girls School, Marawila",
        district: "Puttalam"
    }),
    new School({
        name: "Joseph Vaz College, Wennappuwak",
        district: "Puttalam"
    }),
    new School({
        name: "Kumarathungu Munidas C/c Maha Vidyalaya, Dickwella",
        district: "Puttalam"
    }),
    new School({
        name: "Senanayake National College, Madampe",
        district: "Puttalam"
    }),
    new School({
        name: "St. Andrew's Central College, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "St. Mary's Tamil Maha Vidyalayam, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "St.xavier's College, Marawila",
        district: "Puttalam"
    }),
    new School({
        name: "Zahira National College, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Puttalam Hindu Central College, Puttalam",
        district: "Puttalam"
    }),
    new School({name: "Ananda College, Chilaw", district: "Puttalam"}),
    new School({
        name: "Dhammissara National College, Nattandiya",
        district: "Puttalam"
    }),
    new School({
        name: "Fathima Balika Maha Vidyalaya, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Girl's College, Dankotuwa",
        district: "Puttalam"
    }),
    new School({
        name: "Carmel Girls College, Chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "Siri Sujatha College,kakkapalliya,chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "Karukkuwa Sugathananda Maha Vidyalaya, Madampe",
        district: "Puttalam"
    }),
    new School({
        name: "Medagama Abaya Adarsha Maha Vidyalaya, Panirendawa",
        district: "Puttalam"
    }),
    new School({
        name: "Pankulava Maha Vidyalaya, Chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "Sri Sangha Bodhi Central College, Dakotuwa",
        district: "Puttalam"
    }),
    new School({
        name: "St. Bernadett's College, Chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "St. Mary's College (Chilaw)",
        district: "Puttalam"
    }),
    new School({
        name: "St. Sebastian Maha Vidyalaya, Madampe",
        district: "Puttalam"
    }),
    new School({
        name: "Udappu Tamil Maha Vidyalaya, Udappu.",
        district: "Puttalam"
    }),
    new School({
        name: "Thissa Vidyalaya, Padavi Sri Thissapura",
        district: "Puttalam"
    }),
    new School({name: "Vijaya School, Chilaw", district: "Puttalam"}),
    new School({
        name: "Pallivasal Thurai Muslim Maha Vidyalayam, Puttalam",
        district: "Puttalam"
    }),
    new School({
        name: "Alhira Maha Vidyalaya, Ihala Kottaramulla",
        district: "Puttalam"
    }),
    new School({
        name: "Weerapura K.v, Saliyawwewa",
        district: "Puttalam"
    }),
    new School({
        name: "Kayamottai Muslim Central College, madurankuli",
        district: "Puttalam"
    }),
    new School({
        name: "Medagama Abaya Adarsha Maha Vidyala",
        district: "Puttalam"
    }),
    new School({
        name: "Ch/kadupity Madampe Dharmapala Vidyalaya",
        district: "Puttalam"
    }),
    new School({
        name: "Herath Gunarathana Maha Vidyalaya ,Galmuruwa",
        district: "Puttalam"
    }),
    new School({
        name: "Mawila Mahinda Buddhist Vidyalaya",
        district: "Puttalam"
    }),
    new School({
        name: "Wattakkandal Muslim Maha Vidayalaya",
        district: "Puttalam"
    }),
    new School({
        name: "Glasgow International School, Chilaw",
        district: "Puttalam"
    }),
    new School({
        name: "Jennings International School, Nainamadama",
        district: "Puttalam"
    }),
    new School({
        name: "Sussex College, Wennapuwa",
        district: "Puttalam"
    }),
    new School({
        name: "Ikra International School, Puttalam",
        district: "Puttalam"
    }),

    new School({
        name: "Janadhipathi College, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Ananda Maitreya Central College, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Convent of Infant Jesus, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Damahana Maha Vidyalaya, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Eheliyagoda Central College, Eheliyagoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Elapatha Mahaiya College, Elapatha",
        district: "Ratnapura"
    }),
    new School({
        name: "Erathna Maha Vidyalaya",
        district: "Ratnapura"
    }),
    new School({
        name: "Ferguson High School, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Gankanda Central College, Pelmadulla",
        district: "Ratnapura"
    }),
    new School({
        name: "Halkandaliya Viddaylaya",
        district: "Ratnapura"
    }),
    new School({
        name: "Jeilani Central College, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Kiriella Central College, Kiriella",
        district: "Ratnapura"
    }),
    new School({
        name: "Malwala Navodya School, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Prince College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Rambuka Evillage School, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Sivali Central College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "St. Aloysius College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Sumana Balika Vidyalaya, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Sumana Central College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Sumana Saman Maha Vidyalaya, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Embilipitiya Primary School, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Akarella Vidyalaya, Opanayake",
        district: "Ratnapura"
    }),
    new School({
        name: "Vidyakara Maha Vidyalaya, Opanayake",
        district: "Ratnapura"
    }),
    new School({
        name: "Al Makkiah Muslim College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Bibilegama Maha Vidyalaya, Hapugastenna",
        district: "Ratnapura"
    }),
    new School({
        name: "Batugedara Maha Vidyalaya, Batugedara, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Dharmapala Vidyalaya, Eheliyagoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Dharmapala Vidyalaya, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Embilipitiya Maha Vidyalaya",
        district: "Ratnapura"
    }),
    new School({
        name: "Erathna Maha Vidyalaya",
        district: "Ratnapura"
    }),
    new School({
        name: "Moraketiya Maha, Vidyalaya, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Halmillaketiya Maha Vidyalaya, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Modarawana Maha Vidayala, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Weeraba Maha Vidyalaya, Konkatuwa, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Kalawana Gamini Central College, Koswaththa",
        district: "Ratnapura"
    }),
    new School({
        name: "Karawita Central College",
        district: "Ratnapura"
    }),
    new School({
        name: "Kuruwita Central College, Kuruwita",
        district: "Ratnapura"
    }),
    new School({
        name: "Mihindu Vidyalaya, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "R/prince College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Rambuka Evillage School - rambuka Maha Vidyalaya",
        district: "Ratnapura"
    }),
    new School({
        name: "Sivali Maha Vidyalaya, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "St. Agnes Balika Maha Vidyalaya, balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "St. Luke's College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Udagama Maha Vidyalaya, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Udagama Maha Vidyalaya, Pinnawla, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Marapana Maha Vidyalaya, Marapana",
        district: "Ratnapura"
    }),
    new School({
        name: "R/matuvagala Vidyalaya,matuvagala,kiriella",
        district: "Ratnapura"
    }),
    new School({
        name: "Kalawana National School",
        district: "Ratnapura"
    }),
    new School({
        name: "R/n/erabadda Vidyalaya ",
        district: "Ratnapura"
    }),
    new School({name: "Sumanajothi K V", district: "Ratnapura"}),
    new School({
        name: "Deheragoda Kanitu Viduhala",
        district: "Ratnapura"
    }),
    new School({
        name: "Wajirawansa Maha Vidyalaya,ambawila",
        district: "Ratnapura"
    }),
    new School({
        name: "Sri Darmananda Vidayrathana, Pirivana, Balangoda.",
        district: "Ratnapura"
    }),
    new School({
        name: "Jmc College International, 5 Lenthadiya Road, Moragahayata, Rathnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Bodhiraja International School, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Reliance International School, Batugedara, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Vertex International School ,No 276,bandarnayake Mw Kegalle",
        district: "Ratnapura"
    }),
    new School({
        name: "British International School, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Hilburn College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Lyceum International School, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Oxford International College, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Sussex College, Kegalle",
        district: "Ratnapura"
    }),
    new School({
        name: "Sussex College, Ratnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Universal International School, Balangoda",
        district: "Ratnapura"
    }),
    new School({
        name: "Jmc College International, 5 Lenthadiya Road, Moragahayata, Rathnapura",
        district: "Ratnapura"
    }),
    new School({
        name: "Bodhiraja International School, Embilipitiya",
        district: "Ratnapura"
    }),
    new School({
        name: "Buddhist International College, Warakapola",
        district: "Ratnapura"
    }),
    new School({
        name: "Vertex International School ,Kegalle",
        district: "Ratnapura"
    }),

    new School({
        name: "Kinniya Central College",
        district: "Trincomalee"
    }),
    new School({
        name: "Muttur Central College",
        district: "Trincomalee"
    }),
    new School({
        name: "R. K. M. Sri Koneswara Hindu College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Siraj Muslim College",
        district: "Trincomalee"
    }),
    new School({
        name: "Sri Shanmuga Hindu Ladies College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "St. Joseph's College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "St. Mary's College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Al Aqza College (Maha Vidyalaya),kinniya",
        district: "Trincomalee"
    }),
    new School({
        name: "Al Hidaya Maha Vidyalayam, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Al Hilal Central College, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Al Thaj Maha Vidyalayam, Thoppur",
        district: "Trincomalee"
    }),
    new School({
        name: "Annahar Ladies College, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Anpuvalipuram Kalaimagal Vidyalayam",
        district: "Trincomalee"
    }),
    new School({
        name: "Cenaiyoor Central College, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Fathima Muslim Girls Maha Vidyalaya, Thoppur",
        district: "Trincomalee"
    }),
    new School({
        name: "Kantalai Central College",
        district: "Trincomalee"
    }),
    new School({
        name: "Kinniya Muslim Girls College (Maha Vidyalayam)",
        district: "Trincomalee"
    }),
    new School({
        name: "Methodist Girls' College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Muttur Muslim Ladies College, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Neelapola Maha Vidyalaya, Dehiwatta",
        district: "Trincomalee"
    }),
    new School({
        name: "Orr's Hill Vivekananda College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Pulmoddi Muslim Maha Vidyalaya",
        district: "Trincomalee"
    }),
    new School({
        name: "Rajakeeya Vidyaloka National School",
        district: "Trincomalee"
    }),
    new School({
        name: "Somadevi Maha Vidyalaya, Somapura",
        district: "Trincomalee"
    }),
    new School({
        name: "Sri Konalinga Maha Vidyalayam",
        district: "Trincomalee"
    }),
    new School({
        name: "St. Antanis Maha Vidyalayam, Muttur",
        district: "Trincomalee"
    }),
    new School({
        name: "Vigneshwara Maha Vidyalaya, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Vipulalnda College",
        district: "Trincomalee"
    }),
    new School({
        name: "Zahira College, Trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "Al-Hambra Maha Vid. Thoppur",
        district: "Trincomalee"
    }),
    new School({
        name: "T/selvanayagapuram Hindu Maha Vidyalayam,trincomalee",
        district: "Trincomalee"
    }),
    new School({
        name: "T.b.jaya Vidyalayam,kinniya",
        district: "Trincomalee"
    }),
    new School({
        name: "Bt/al-Ameen Maha Vidyalayam,kawattamunai",
        district: "Trincomalee"
    }),
    new School({
        name: "T/mu/ Kiliveddy Maha Vidyalayam, Kiliveddy",
        district: "Trincomalee"
    }),
    new School({
        name: "T/palugaswanguwa M.v",
        district: "Trincomalee"
    }),
    new School({
        name: "T/palugaswanguwa Primary School",
        district: "Trincomalee"
    }),
    new School({
        name: "Al Minhaj National School (M.m.v.), Hapugastalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gamini Central College (M.m.v.) (National School), Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gamini Dissanayake National School, Kotmale",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ginigathhena M.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Cambridge College, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands M.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holbrook Tamil T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holy Trinity C.c.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Jayahela National School, Punduloya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Lyceum International School",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Norwood T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Our Lady's School, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poramadulla Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sri Sumangala National School, Nildandahinna",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Josephs T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St Xavier's College, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Talawakelle Tamil Maha Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Victoria National School, Adikarigama, Gonagantennai",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ambagamuwa Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Cambridge College, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Delta Gemunupura Maha Vidyalaya, Pussellawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Denike Isuru Vidyalaya, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Dharmakeerthi Sinhala Vidyalaya, Bogawanthalawas",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Dimbulkumbura Vidyalaya, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Diyathilaka Central College, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ekiriya Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Fetteresso Tamil Vidyalaya, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holyrosary Maha Vidyalaya, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gouravilla Tamil Maha Vidyalaya-Upcot",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gangapalatha Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gonakele Vidyalaya,kandapola",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ginigathhena Central College, Ginigathhena",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Good Shephered Convent, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Hanguranketha C.c. Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holy Trinity Central College, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Kahira Muslim Vidyalaya, Ahaswewa, Hapuagastalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Lakshapana Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Madulla Secondary School, Udapussellawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Nayapana Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "New Tispane Maha Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Painters Memorial Vidyalaya, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Pallebowala Maha Vidyalaya, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poodaluoya Tamil Maha Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poramadulla Central College, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ragala Tamil Vidyalayam, Halagranoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ramboda Hindu Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Rikillagaskada Model School, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sirimavo Bandaranayake Balika Vidyalaya, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sripada Central College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sri Pada Nawodya College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Gabriel's Girls College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sumana Secondary College, Talawakelle",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Mary's Central College, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "T. B. M. Herath Vidyalaya, Ragala, Halagranoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Trafford College International School, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Vidulipura Maha Vidyalaya, Vidulipura",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Watapola Sinhala Kanitu Widuhala , Watapola",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Drayton Tamil Vidyalaya, Drayton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Kotagala Tamil Maha Vidyalaya, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Maria Tamil Maha Idyalayam Lindula",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Life Spring Christian College, Dickoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands Central College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. John Bosco's College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Patrick's College, Talawakelle",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Jmc International College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "High Level International School, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Al Minhaj National School (M.m.v.), Hapugastalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gamini Central College (M.m.v.) (National School), Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gamini Dissanayake National School, Kotmale",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ginigathhena M.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Cambridge College, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands M.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holbrook Tamil T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holy Trinity C.c.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Jayahela National School, Punduloya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Lyceum International School",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Norwood T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Our Lady's School, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poramadulla Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sri Sumangala National School, Nildandahinna",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Josephs T.m.v.",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St Xavier's College, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Talawakelle Tamil Maha Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Victoria National School, Adikarigama, Gonagantennai",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ambagamuwa Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Cambridge College, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Delta Gemunupura Maha Vidyalaya, Pussellawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Denike Isuru Vidyalaya, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Dharmakeerthi Sinhala Vidyalaya, Bogawanthalawas",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Dimbulkumbura Vidyalaya, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Diyathilaka Central College, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ekiriya Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Fetteresso Tamil Vidyalaya, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holyrosary Maha Vidyalaya, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gouravilla Tamil Maha Vidyalaya-Upcot",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gangapalatha Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Gonakele Vidyalaya,kandapola",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ginigathhena Central College, Ginigathhena",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Good Shephered Convent, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Hanguranketha C.c. Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Holy Trinity Central College, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Kahira Muslim Vidyalaya, Ahaswewa, Hapuagastalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Lakshapana Central College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Madulla Secondary School, Udapussellawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Nayapana Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "New Tispane Maha Vidyalaya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Painters Memorial Vidyalaya, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Pallebowala Maha Vidyalaya, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poodaluoya Tamil Maha Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Poramadulla Central College, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ragala Tamil Vidyalayam, Halagranoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Ramboda Hindu Vidyalayam",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Rikillagaskada Model School, Rikillagaskada",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sirimavo Bandaranayake Balika Vidyalaya, Hanguranketha",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sripada Central College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sri Pada Nawodya College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Gabriel's Girls College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Sumana Secondary College, Talawakelle",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Mary's Central College, Bogawantalawa",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "T. B. M. Herath Vidyalaya, Ragala, Halagranoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Trafford College International School, Nuwara Eliya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Vidulipura Maha Vidyalaya, Vidulipura",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Watapola Sinhala Kanitu Widuhala , Watapola",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Drayton Tamil Vidyalaya, Drayton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Kotagala Tamil Maha Vidyalaya, Kotagala",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Maria Tamil Maha Idyalayam Lindula",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Life Spring Christian College, Dickoya",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Highlands Central College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. John Bosco's College, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "St. Patrick's College, Talawakelle",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Jmc International College",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "High Level International School, Hatton",
        district: "Nuwara Eliya"
    }),
    new School({
        name: "Polonnaruwa Royal Central College",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Medirigiriya National School",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Minneriya National College",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Ananda Balika National College",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Kaduruwela Muslim Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Gal Amuna Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Hingurakdamana Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Kaduruwela Nagara Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Lankapura Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Manampitiya Sinhala Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Palugasdamana Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Sewamuktha Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Sewanapitiya Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Sungavila Muslim Maha Vidyalayam, Sungavila",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Thopawewa Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Vijitha Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Welikanda Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Vilayaya Madya Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Girithalegama Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Nugagahadamana Muslim Kanishta Vidyalaya.",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Nelliyagama Muslim Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Rajarata Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Divulankadawala Madya Maha Vidyalaya",
        district: "Polonnaruwa"
    }),
    new School({
        name: "Anuradhapura Central College",
        district: "Anuradhapura"
    }),
    new School({
        name: "Kakirawa Central College",
        district: "Anuradhapura"
    }),
    new School({
        name: "Swarnapali Balika MahaVidyalaya - Anuradhapura",
        district: "Anuradhapura"
    }),
    new School({
        name: "Eppawala Sri Siddhartha Central College",
        district: "Anuradhapura"
    }),
    new School({
        name: "Maithripala Senanayake Central College",
        district: "Anuradhapura"
    }),
    new School({
        name: "Zahira Maha Vidyalaya - Anuradhapura",
        district: "Anuradhapura"
    }),
    new School({
        name: "Vivekananda Tamil Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Lyceum International School - Anuradhapura",
        district: "Anuradhapura"
    }),
    new School({
        name: "Kebithigollewa Central College",
        district: "Anuradhapura"
    }),
    new School({
        name: "Siddhartha Maha Vidyalaya - Maha Vilachchiya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Habarana Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Ruwanweli Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Buddhangala Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Galkiriyagama Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Saliyamala Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Kaluwila Sena Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Vidyadarsha Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "St. Joshep's Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Walisinghe Harischandra Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Niwaththaka Chathiya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Rambewa Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Wanithammannawa Dipani Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Ganthiriyagama Mahinda Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Thibbtuwewa Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Bastian Silva College - Kakirawa",
        district: "Anuradhapura"
    }),
    new School({
        name: "Galenbindunuwewa Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Kahatagasdigiliya Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Mihintale Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Ruwanwali Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Mahasen (Nawodya) Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Galnewa Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Rajanganaya Tract 05 Navodya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Rajanganaya 13/14 Mahasen Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Talawa Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Thabuththegama Madya Maha Vidyalaya",
        district: "Anuradhapura"
    }),
    new School({
        name: "Jaffna Central College",
        district: "Jaffna"
    }),
    new School({
        name: "Vembadi Girls’ High School",
        district: "Jaffna"
    }),
    new School({
        name: "Jaffna Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Chavakachcheri Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Sithivinayagar Hindu College",
        district: "Mannar"
    }),
    new School({
        name: "St. Xavier's Boys' College",
        district: "Mannar"
    }),
    new School({
        name: "St. Xavier's Girls' College",
        district: "Mannar"
    }),
    new School({
        name: "Madukanda National School (M.V.)",
        district: "Vavuniya"
    }),
    new School({
        name: "Rambaikulam Girl's M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vavuniya Muslim M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vavuniya Tamil M.M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Chundikuli Girls' College",
        district: "Jaffna"
    }),
    new School({
        name: "St. John's College",
        district: "Jaffna"
    }),
    new School({
        name: "St. Patrick's College",
        district: "Jaffna"
    }),
    new School({
        name: "Nuffield School",
        district: "Jaffna"
    }),
    new School({
        name: "Jaffna College",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil Girls' College",
        district: "Jaffna"
    }),
    new School({
        name: "Attiar Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Hartley College",
        district: "Jaffna"
    }),
    new School({
        name: "Manipay Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Palayauruwa Vidyalayam",
        district: "Vavuniya"
    }),
    new School({name: "Delft M.V.", district: "Jaffna"}),
    new School({
        name: "Velanai Central College",
        district: "Jaffna"
    }),
    new School({
        name: "Neervely S.H.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Canagaratnam M.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Muthuthamby M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Meesalai Veerasingam M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Nelliady M.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Vathiry Sacred Heart College",
        district: "Jaffna"
    }),
    new School({
        name: "Methodist Girls' High School",
        district: "Jaffna"
    }),
    new School({
        name: "Vaddukoddai Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Manipay Memorial English School",
        district: "Jaffna"
    }),
    new School({
        name: "Erukkalampiddy Muslim M.M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Arippu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Mavilankerny R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Parakum M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Srisumana M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vavuniya Hindu College",
        district: "Vavuniya"
    }),
    new School({
        name: "Delft R.C. Ladies' College",
        district: "Jaffna"
    }),
    new School({
        name: "Maheswary Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Mankayarkarasi Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Mavilithurai R.C.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Puthukkudiyiruppu Bharathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Seekiriyampallam G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sriskanda Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Subramaniya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Analaitivu South G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Dr. A. Thiyagarajah M.M.V. (Karainagar Hindu College)",
        district: "Jaffna"
    }),
    new School({
        name: "Eluvaitivu R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Ganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Ilakady A.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Karai East A.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Karai Meigandan Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Karampon Shanmuganatha M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kathireshanantha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kayts R.C. Boys' Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Little Flower's M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Maraignanasampanthar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Melinchimunai R.C.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Murugavel Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Naranthanai R.C.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Palavodai H.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Saravanai Sinnamadu R.C.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sathasiva M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sivagnanothaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sivakurunatha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Antony's College",
        district: "Jaffna"
    }),
    new School({
        name: "St. Mary's R.C.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sundaramoorthy Nayanar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Suruvil R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Thambaddy G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Uri A.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Vadaloor G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Valanthalai North A.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Valanthalai South A.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Veerappiddy Ganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Viyavil Saiva Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Yarlton College",
        district: "Jaffna"
    }),
    new School({
        name: "Aiyanar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Allaippiddy R.C.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Ariyanayaganpulam A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Aththisoody Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chettypulam G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Duraisuwamy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Garthigesu Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Iruppiddy A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kamalambikai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kurikaduvan G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mandaitivu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Mandaitivu R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Mankumpan G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Mankumpan G.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Nadarajah Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nageswary M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Nainativu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Parashakthy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Parashakthy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Pungudutivu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Pungudutivu R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Pungudutivu West A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Rajarajeswary Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Ganesha Kanista M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Ganesha M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Nagapooshany Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Shanmuganatha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Subramaniya M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Srisithivinayagar M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Thirunavukkarasu Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Velanai East M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Anaippanthy Gurunathasamy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Columbuthutai Hindu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Holy Family Convent",
        district: "Jaffna"
    }),
    new School({name: "Katheeja M.V.", district: "Jaffna"}),
    new School({
        name: "Koddady Namasivaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Mazrutheen G.M.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mohamadeeja Girls' Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Nallur Ananda Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nallur South Sri Vigneswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Navanthurai R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Osmania College",
        district: "Jaffna"
    }),
    new School({
        name: "Periyakadai Barathyvasha",
        district: "Jaffna"
    }),
    new School({
        name: "Pommaivelli G.M.M.S.",
        district: "Jaffna"
    }),
    new School({name: "Sanmarka M.V.", district: "Jaffna"}),
    new School({name: "Sinhala M.V.", district: "Jaffna"}),
    new School({
        name: "St. Antony's Girls' School",
        district: "Jaffna"
    }),
    new School({
        name: "St. Charles' M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "St. James' Girls' School",
        district: "Jaffna"
    }),
    new School({
        name: "St. James' M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "St. John Bosco's Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Joseph's Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Mary's R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "St. Roche's R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Thurayappah Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vaitheeswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Van West G.M.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vannai Navalar M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Atchelu M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Atchelu Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Achchuveli Central College",
        district: "Jaffna"
    }),
    new School({
        name: "Atchuvely North R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Atchuvely Sri Vipasi Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Avarangal M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Idaikkadu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Irupalai C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Karanthan Ramuppillai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kopay Christian College",
        district: "Jaffna"
    }),
    new School({name: "Kopay M.V.", district: "Jaffna"}),
    new School({
        name: "Kopay North C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kopay North R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kopay South Kanthvel T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kopay South R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nadaraja Ramalingam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Navalar Tamil Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Navatkiri A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Neervely C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Neervely R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Pathamaney Radneswary Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Pootharmadam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Puthakaladdy Sri Vishnu Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Puttur Hindu Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Puttur M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saravanapavanantha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Siruppiddy G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Siruppiddy H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Panchasika Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Somaskanda College",
        district: "Jaffna"
    }),
    new School({
        name: "St. Theresa's Girls' College",
        district: "Jaffna"
    }),
    new School({
        name: "Subramaniyam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thoppu Arulnanthy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Urelu C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Urelu Ganesha Vidyasalai",
        district: "Jaffna"
    }),
    new School({
        name: "Urmpirai Santhrothaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Urumpirai Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Urumpirai R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Urumpirai Saiva T.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Valalai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vatharawattai Vigneswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Anaipanthy M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ariyalai East G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ariyalai Sri Parvathi Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chedditheru M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Elayathamby Hindu Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Gnamothaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Jaffna Hindu Ladies' College",
        district: "Jaffna"
    }),
    new School({
        name: "Jaffna Hindu Ladies' Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Jaffna Hindu Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Kaladdy M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kalviyankadu H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kantharmadam Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kasippillai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kokuvil Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Kokuvil Hindu Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Kokuvil Station C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kokuvil West C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kondavil C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kondavil Hindu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kondavil R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Maheswary Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nallur H.T.G.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nallur Station C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Namagal Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Paranchsothy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Periyapulam M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Poompuhar G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ramkrishna M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Senmkuntha Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Gnanapaditha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Ramakirishana Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Benedict's R.C.T.M.",
        district: "Jaffna"
    }),
    new School({
        name: "Thirunelveli H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thirunelveli R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Uyarappulam M.M.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Van Sri Vaithiligam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Allarai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Amirthambikai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chandramouleesa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chavakachcheri Hindu Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Chavakachcheri Ladies College",
        district: "Jaffna"
    }),
    new School({
        name: "Chavakachcheri R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Drieberg College",
        district: "Jaffna"
    }),
    new School({
        name: "Eluthumadduval C.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Eluthumadduwal G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Eruthidal G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Iyattalai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kachchai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaithady G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaithady Gurusamy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kaithady Navatkuli G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kalaivani Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kamalambikai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Karambaikkurichchy G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Karampai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Karampakam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ketpely G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kodikamam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kodikamam Thirunavukkarasu M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kudamiyan G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Madduval North G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Madduvil Kamalasiny Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Madduvil South A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mahaluxmy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Manthuvil G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Manthuvil R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mirusuvil G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mirusuvil R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Muthukumarasamy M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Navatkadu Kanapathippillai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Navatkuly M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Nunavil G.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Nunavil West G.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Odduveli A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Pokkaddy G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Pokkaddy R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapiragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sakalakalavalli Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sakthiyamman T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Santhanayaki Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sarasalai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Sarasalai Sri Ganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sethukavalar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Skanthavarodaya M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Subramaniya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sribharathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sriganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Srishanmugananda Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thanankillappu G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Usan Ramanathan M.V.",
        district: "Jaffna"
    }),
    new School({name: "Varany M.V.", district: "Jaffna"}),
    new School({
        name: "Varany North G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Varany Station A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vidathatpalai Kamalasani Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vigneswara M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Vigneswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Alvai Sinnathamby Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Ehampara Vidyalayam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Gnanasariyar College",
        district: "Jaffna"
    }),
    new School({
        name: "Imayanan G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaddaiveli M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaddaiveli Yarkkaru Vinayagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Kamparmalai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Karanavai M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Karanavai South Vinayagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Karaveddy East G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kasinathar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Manickavasagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Maniyakaran Thodda G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nelliady M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ponnampalam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy Mahalir Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Srinaratha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thamothara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thevaraiyali Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Thunnalai South G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Udupiddy American Mission College",
        district: "Jaffna"
    }),
    new School({
        name: "Udupiddy Girls' College",
        district: "Jaffna"
    }),
    new School({
        name: "Uduppiddy Saivapiragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vadamarachchi Central Ladies' College",
        district: "Jaffna"
    }),
    new School({
        name: "Valvettithurai H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Valvettiturai Vinayagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vathiry North M.M.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Vetharanieswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vigneswara College",
        district: "Jaffna"
    }),
    new School({
        name: "Vigneswara Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Aliyawalai C.C.T.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Ampan A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Chempianpattu G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Chempianpattu R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaddaikadu R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kevil G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kudathanai Karaiyoor A.M.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Kudathathanai Karaiyoor R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kudaththanai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Mamunai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Manatkadu R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Maruthankerny H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nagarkovil A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nagarkovil M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Pokkaruppu G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thalayady R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Uduthurai M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Vettilaikerny Parameswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vettilaikerny R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Alvai Ambal Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Alvai North H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Alvai North R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Alvai Sri Lanka Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Cithambara College",
        district: "Jaffna"
    }),
    new School({
        name: "Kaladdy R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Katkovalam M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kerudavil H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kottawattai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({name: "Mahalir M.V.", district: "Jaffna"}),
    new School({
        name: "Mathanai M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Melaipuloly Saivapiragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Polikandy H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Puloly East G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Puloly M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({name: "Puttalai M.V.", district: "Jaffna"}),
    new School({
        name: "Sithivinayagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sivaguru Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Thomas' R.C.G.S",
        district: "Jaffna"
    }),
    new School({
        name: "Thaddatheru M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thambasiddy M.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thikkam Sithyvinayagar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thumpalai Sivapiragasa M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Thunnalai West M.M.T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Vadamarachchi Hindu Girls' College",
        district: "Jaffna"
    }),
    new School({
        name: "Valvettithurai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Valvettithurai R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Veerakathippilla M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Velautham M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Araly East A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Araly Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Araly North A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Arumuga Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chankanai Station A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Chulipuram Aikiya Sanga Saiva",
        district: "Jaffna"
    }),
    new School({
        name: "Chulipuram East A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaddupulam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Meihandan M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Moolai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Murugamoorthy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Pannagam North A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Pilawathai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saraswathy M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sinnammah Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sivapragasa M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Ganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Subramaniya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thirunavukkarasu Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thiruvadinilai S.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Tholpuram A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Tholpuram Vigneswara",
        district: "Jaffna"
    }),
    new School({
        name: "Thunavi A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vaddukoddai Central College",
        district: "Jaffna"
    }),
    new School({
        name: "Vaddukoddai Karthikeya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vaddukoddai West A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Valliammai Memorial School",
        district: "Jaffna"
    }),
    new School({
        name: "Varatharajah Perumal",
        district: "Jaffna"
    }),
    new School({
        name: "Victoria College",
        district: "Jaffna"
    }),
    new School({
        name: "Anaicoddai A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Anaicoddai R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Attagiri Saiva Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Balasubramania Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chankanai East Vigneswara",
        district: "Jaffna"
    }),
    new School({
        name: "Chinmaya Bharathy Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Gunapala Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Ilavalai Convent M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Ilavalai R.C.T.B.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kaddudai Saiva Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Manipay Ladies' College",
        district: "Jaffna"
    }),
    new School({
        name: "Manipay Vivekananda Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Mareesankoodal R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({name: "Navali M.V.", district: "Jaffna"}),
    new School({
        name: "Navali South A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Navali Station A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Nunasai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Pandateruppu Girls' High School",
        district: "Jaffna"
    }),
    new School({
        name: "Pandateruppu Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Pandateruppu Jacintha R.C.T.M.",
        district: "Jaffna"
    }),
    new School({
        name: "Periyavilan R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Piranpattu Kalaimagal Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sandilipay G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Sandilipay Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Sandilipay North T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Santhai Sittampalam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sillalai R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Siruvilan Kanagasabai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sothivembady Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Anne's R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "St. Henry's College",
        district: "Jaffna"
    }),
    new School({
        name: "St. Joseph's M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "St. Peter's R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "St. Thomas' R.C. Girls' School",
        district: "Jaffna"
    }),
    new School({
        name: "Subramaniya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Suthumalai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Suthumalai North T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vigneswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Alaveddy North A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Alaveddy South A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Alaveddy South R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Arunasalam Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Arunodaya College",
        district: "Jaffna"
    }),
    new School({
        name: "Holly Rosary R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "K.K.S. Sinhala M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kadduvanpulam M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kankesanthurai M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kankesanthurai R.C",
        district: "Jaffna"
    }),
    new School({
        name: "Keeremalai Naguleswara M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Kollankallady Saiva T.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Kuddiyapulam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kulamangal R.C.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Mahajana College",
        district: "Jaffna"
    }),
    new School({
        name: "Mallakam Kanishda Vidyalayam",
        district: "Jaffna"
    }),
    new School({name: "Mallakam M.V.", district: "Jaffna"}),
    new School({
        name: "Maviddapuram North A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Maviddapuram South A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Meihandan M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Myliddy North Kalaimagal M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Myliddy R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Myliddy South Gnanodaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nadeswaea Kanishda Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nadeswara College",
        district: "Jaffna"
    }),
    new School({
        name: "Oddakappulam G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Palali North G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Palali Sithivinayakar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Palaly G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ponparamananthar M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Saivapragasa Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sathanantha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Seenankaladdy Gnanodaya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sir Kanagasabai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Sivagurunathar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Thanthai Selva Thodakka",
        district: "Jaffna"
    }),
    new School({
        name: "Thiyiddy Ganesha Vidyalayam",
        district: "Jaffna"
    }),
    new School({name: "Union College", district: "Jaffna"}),
    new School({
        name: "Urani Kanista Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Valiththundal R.C.",
        district: "Jaffna"
    }),
    new School({
        name: "Varuthalaivilan",
        district: "Jaffna"
    }),
    new School({
        name: "Vasavilan R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Vasavilan Sriveluppillai Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Vayavilan M.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Veemankamam M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Visaladchi Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Chunnakam R.T.M.S.",
        district: "Jaffna"
    }),
    new School({name: "Earlalai M.V.", district: "Jaffna"}),
    new School({
        name: "Erlalai North A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Erlalai South A.M.T.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Evinai G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Inuvil Central College",
        district: "Jaffna"
    }),
    new School({
        name: "Inuvil Hindu College",
        district: "Jaffna"
    }),
    new School({
        name: "Kantharodai Tamil Kanthaiya Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Koddaikkadu G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Kuppilan Vikneswara Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Mylani Saivamaha Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Nahesvari Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Punnalaikkadduvan A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Punnalaikkadduvan M.M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Punnalaikkadduvan North H.T.M.",
        district: "Jaffna"
    }),
    new School({
        name: "Punnalaikkadduvang T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Puthumadam R.C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Ramanathan College",
        district: "Jaffna"
    }),
    new School({
        name: "Saiva Makajana Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Saivasanmarka Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Sanguveli G.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Skandavarodaya College",
        district: "Jaffna"
    }),
    new School({
        name: "Skandavarodaya Primary School",
        district: "Jaffna"
    }),
    new School({
        name: "Sri Murukan Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "St. Isidor's C.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thavady H.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Thirugnanasamnthar Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil A.M.T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil Malvaththi R.C.M.S",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil Mann's M.V.",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil Mann's T.M.S.",
        district: "Jaffna"
    }),
    new School({
        name: "Uduvil Murugamoorthi Vidyalayam",
        district: "Jaffna"
    }),
    new School({
        name: "Elephant Pass T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kaddaikadu G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kalaweddithidal Nageswara Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kallaru T.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kalmadunagar G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kandawalai M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kannakai Amman Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kumarasamypuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Murasumoddai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Murugananda M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Mylvaganapuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Nagendra Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Paranthan G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Paranthan Hindu M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Periyakulam Iynar Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Piramanthanaru M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Punnaineeravi G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Ramanathapuram East G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Tarmapuram M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Thambiraspuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Tharumapuram No. 1 G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Umayalpuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Akkarayan G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Akkarayan M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Alagapuri Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Anaivilunthankulam G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Bharathy Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Ganesha Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Iyanar Puram G.T.M.S",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kanagambikaikulam G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kanagapuram M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kannakaipuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kilinochchi Central College",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kilinochchi Hindu College",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kilinochchi Hindu Primary Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kilinochchi M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Mayavanoor Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Oottupulam G.T.M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Pannakkandy H.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Puthumurippu Vigneswara Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Ramanathapuram M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Ramanathapuram West G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Santhapuram Kalaimahal Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Selvanagar G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sinhala M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sivanagar G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sivapatha Kalayagam.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Skanthapuram No. 1 G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Skanthapuram No. 2 G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "St. Antony's R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "St. Fatima R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "St. Theresa's G.C.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Thiruvaiyaru M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Unionkulam G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Uruthirapuram M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vaddakachchi M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vaddakachchi South G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vannerikulam M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vivekanantha Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Allippallai C.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Iyakkachchi G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kilaly R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kovilvayal C.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Masar G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Muhamalai R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Muhavil G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Palai C.C",
        district: "Kilinochchi"
    }),
    new School({
        name: "Pallai R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sooranpattu C.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Soranpattu Ganesha Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Tharmakerny G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vempodukerny C.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Celliyativu G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Cheddiakuruchchi G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Chempankunru G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Gnanimadam G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Iranaitivu R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Jayapuram G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kariyalai Nagapaduvan No. 2 G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kariyalai Nagapaduvan No. 3 G.T.M.S",
        district: "Kilinochchi"
    }),
    new School({
        name: "Karukkaiththivu M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kiranchi G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kowtharimunai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Kumulamunai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Madduvilnadu G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Mukkompan G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Mulankavil M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Muththukumarasamy Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Nachchikuda G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Pallavarajankaddu H.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Paramankirai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Ponnavely Saivaprasa Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Poonakary M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Poonakary Nallur M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Samipulam G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sri Vikneswara Vidyalayam",
        district: "Kilinochchi"
    }),
    new School({
        name: "Sunnavil G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Thambirai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Valaippadu R.C.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Veravil Hindu M.V.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Vinasiyodai G.T.M.S.",
        district: "Kilinochchi"
    }),
    new School({
        name: "Iranaiillupaikulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kaddaiadampan R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kakkayankulam Mus.V",
        district: "Mannar"
    }),
    new School({
        name: "Keerisuddan G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Mullikkulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Navatkulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Palampiddy G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Periyakunchukulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Periyamurippu G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Periyapandivirichan M.V.",
        district: "Mannar"
    }),
    new School({name: "Sinhala M.V.", district: "Mannar"}),
    new School({
        name: "Sinnapandivirichan G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Sinnavalayankaddu G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thatchanamaruthamadhu G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thiruketheeswaram H.B.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Vilathikulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Abdeen G.M.M.S.",
        district: "Mannar"
    }),
    new School({name: "Al Azhar M.V.", district: "Mannar"}),
    new School({name: "Al Mina M.V.", district: "Mannar"}),
    new School({
        name: "Ansari G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Eluthoor R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Erukkalampiddy East G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Erukkalampiddy Mahalir M.V.",
        district: "Mannar"
    }),
    new School({name: "Fatima M.M.V.", district: "Mannar"}),
    new School({
        name: "Gowriambal G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Hazban G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Iyoob G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kaddukarankurdiyiruppu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Karisal R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Nochchikulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Olaithoduwai R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Punithavalanar R.C.T.M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Puthukkamam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Puthukkudiyiruppu G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Rishad Bathiudeen M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Rizwan G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Santhipuram G.T.M.S.",
        district: "Mannar"
    }),
    new School({name: "Sinhala M.V.", district: "Mannar"}),
    new School({
        name: "Siruthoppu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "St. Lawrence R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "St. Lucias M.V.",
        district: "Mannar"
    }),
    new School({
        name: "St. Mary's Girls' Vidyalayam",
        district: "Mannar"
    }),
    new School({
        name: "Talaimannar Pier G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Talaimannar Pier G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Talaimannar Pier R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thoddaveli G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thullukudiyiruppu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Uyilankulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Uyirtharasankulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Vannamoddai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Adampan M.M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Adampan R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({name: "Aligar M.M.V.", district: "Mannar"}),
    new School({
        name: "Andankulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Athimoddai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Illuppaikadavai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kalliyadi G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Karunkandal R.C.T.M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Koorai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kovilkulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Marathykannaddy R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Maruthonduvan Velakulam G.M.M.",
        district: "Mannar"
    }),
    new School({
        name: "Minukkan G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Moonrampiddy G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Palaikuly R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Palayadiputhukkulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Pappamoddai R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Parappankandal R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Parappukadanthan G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Periyamadhu M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Sornapuri G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thevanpiddy R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thuya Joseph Vaz M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Vaddakandal G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Velankuli G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Vellankulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Ahaththimurippu G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Chilawaththurai G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Karadikkuli G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kokkupadayan R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Kondachchi G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Marichchukaddy G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Maruthamadu G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Mullikulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({name: "Musali M.V.", district: "Mannar"}),
    new School({
        name: "Palaikkuli G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Pandaraveli G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Periya Pullachchi Potkerny G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Saveriyarpuram R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Thambapanni Sinhala Vidyalayam",
        district: "Mannar"
    }),
    new School({
        name: "Veppankulam G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Achchankulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Alavakkai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Cheddiyarkaddaiadampan G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Ilahadipiddy R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Ilanthaimoddai G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Isaimalaithalvu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Katkidanthakulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Madhukkarai G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Malihipiddy G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Moddaikadai G.T.M.S.",
        district: "Mannar"
    }),
    new School({name: "Murunkan M.V.", district: "Mannar"}),
    new School({name: "Nanattan M.V.", district: "Mannar"}),
    new School({
        name: "Naruvilikulam G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Nochikkulam Hijra G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Parikarikandal G.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Pontheevukandal R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Puthuvely G.M.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Sirukkandal R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Sooriyakaddaikadu R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "St. Anne's M.M.V.",
        district: "Mannar"
    }),
    new School({
        name: "Valkaippaddankandal R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Vanchiyankulam R.C.T.M.S.",
        district: "Mannar"
    }),
    new School({
        name: "Alampil R.C.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ampalavanpokkanai M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Arumugaththankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Chemmalai M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kalaimahal Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kallappadu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Karunaddukkerny G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Keppapulavu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kokkulai G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kokkuththoduwai G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kumulamunai M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Maththalan R.C.G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mullaitivu H.B.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mullaitivu M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mullaitivu Muslim Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mullaitivu R.C.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mullivaikkal West K.S.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mulliwaikkal East G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mulliyawalai R.C.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mulliyawalai T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Murippu T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Nayaru G.S.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Silawaththai R.C.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Silawaththai T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thannimurippu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thanniruttu C.C.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thanniyoothu Muslim Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thanniyootu H.B.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Uduppukkulam T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Unnapulavu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Valayanmadam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vattappalai M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vedduwaikkal G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vidyananda College",
        district: "Mullaitivu"
    }),
    new School({
        name: "Anandapuram G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Arasaratnam Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Barathy Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ganesha Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Iranappalai M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Iruddumadu T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kompavil Vigneswara Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kuravil T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mannakandal G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Neththaliyaru T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Puthukkudiyiruppu Central College",
        district: "Mullaitivu"
    }),
    new School({
        name: "Puthukkudiyiruppu R.C.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Sivanagar T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Srimurugananda Vidyalayam",
        district: "Mullaitivu"
    }),
    new School({
        name: "Srisubramaniya Vidyasalai",
        district: "Mullaitivu"
    }),
    new School({
        name: "Suthanthirapuram G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Theravil T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thevipuram G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Udaiyarkaddu M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vallipunam Secondary High School",
        district: "Mullaitivu"
    }),
    new School({
        name: "Visvamadu M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ambalpuram T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kollavilankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Koothimoolai T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Moonrumurippu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Naddankandal G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Palaipani T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Palinagar M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Panankamam Moonrumurippu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Panankamam Poovarasankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Pandiyankulam M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Seraddikulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vannivilankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vavunikkulam Central Sulusu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vinayagapuram G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Alaikalluppoddakulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ambakamam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Karippaddamurippu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Karuvelankandal G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Katchilaimadu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kathaliyar Sammalankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Koolamurippu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mamadupalampasi G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mankulam M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Muththaiyankaddu L.B.G.T.M.S",
        district: "Mullaitivu"
    }),
    new School({
        name: "Muththaiyankaddu R.B. G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Oddusuddan H.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Oddusuddan M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Olumadu T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Othiyamalai G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Peraru T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Periyaiththimadu G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Periyakulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Periyapuliyankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thanduvan G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thirumurikandi H.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Alankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Amathipuram T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ambalapperumalkulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Aninchiyankulam T.M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Arokkiyapuram T.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Iyankankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Kalvilankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Koddaikaddiyakulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Mallavi Central College",
        district: "Mullaitivu"
    }),
    new School({
        name: "Palayamurikandy G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Panikkankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Pulumachchinathakulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Puththuvedduvan G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thenniyankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Therankandal G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Thunukkai G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Uyilankulam G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Vavunikkulam Unit 4 G.T.M.S.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Yogapuram M.V.",
        district: "Mullaitivu"
    }),
    new School({
        name: "Ananthapuliyankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Ayilady G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kanagarayankulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kanapathipillai Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Karappukuththy G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Katkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Koramoddai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kovilpuliyankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kulavisuddan G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kurisuddakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Mamadu Sri Vaani Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Mannakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Maraviluppai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Maruthodai G.T.M.S",
        district: "Vavuniya"
    }),
    new School({
        name: "Muruganantha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Nainamadu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Navalar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Navaratnam Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Nedunkerny M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nochchikkulam No. 2 G.T.M.S",
        district: "Vavuniya"
    }),
    new School({
        name: "Nochchikulam Muthumary Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Olumadu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Paddadaipirinthakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Paddikudiyiruppu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Palayawady G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pandaravanniyan Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyadampan Sri Ganesha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyamadu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Puliyankulam Hindu College",
        district: "Vavuniya"
    }),
    new School({
        name: "Puthoor G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Puthuvilankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Selvavinayagar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Senaipulavu Umayal Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sinnadampan Barathy Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sri Ramakrishna Vid",
        district: "Vavuniya"
    }),
    new School({
        name: "Thaninayagam Adikalar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Unchalkaddy G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vedivaiththakallu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Velankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vickneswara M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vivekanantha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Ananthakumarasamy Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Arumugaththanputhukkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Bharathithasan Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Chemamadu Unit 2 G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Ilamaruthankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kalmadukkulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kalmadukulam Unit 2 G.M.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Karunkalikkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kidachori Karuveppankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Koliyakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Konthakkarankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kothandanochchikkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kovilkunchukkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kovilmoddai Velankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kovilpuliankulam Muthamil Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Madukkulam Navajothy Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Manikka Iluppaikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Marayadiththkulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Marukkarampalai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Maruthodai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Matharpanikkarmakilankulam J.S.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nadarajanantha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Nochchikkulam No. 1 J.S.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nochchimoddai J.S.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Omanthai Central College",
        district: "Vavuniya"
    }),
    new School({
        name: "Palamoddai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pampaimadu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pantrikeithakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Paranaddakallu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyamadu Ambal Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Poompukar Kannaki Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Puthiyasinnakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Puthukkulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Puthukulam Junior School",
        district: "Vavuniya"
    }),
    new School({
        name: "Sengalpadai Thirukumaran Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Shanmuganantha M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Sinnathampanai Sri Krishna Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sithamparam Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sri Muththumary Amman Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sri Vaany Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Suntharapuram G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Suntharapuram Saraswathy Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Tharanikkulam Ganesh Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Thavasiyakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Thiruvalluvar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Varudayar Iluppaikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vedarmakilankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Veeramamunivar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Al Ameen Muslim Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Al Hamiya M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Al Iqbal Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Anaivilunthan G.M.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Andiyapuliyankulam G.M.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Anpupuram Namagal Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Aruvithoddam Sivanantha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Cheddikulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Ganeshapuram Shanmuganantha",
        district: "Vavuniya"
    }),
    new School({
        name: "Illuppaikulam R.C.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kallaru Srisithivinayagar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kandakkulam Thirunavukarasu",
        district: "Vavuniya"
    }),
    new School({
        name: "Kandasamy Nagar Vipulananda",
        district: "Vavuniya"
    }),
    new School({
        name: "Kannaddy G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Katkarankulam Ilango Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kiristokulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Koolankulam Navalar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kurukkalputhukulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Maniyarkulam Vithiyanandha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Muhathankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Muhaththankulam Vigneswara",
        district: "Vavuniya"
    }),
    new School({
        name: "Muthaliyarkulam R.C.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nedunkaraichenai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Neeliyamoddai Saraswathi Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Niththiyanagar Loogeswara Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Nochchikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Parayanalankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pavatkulam Ganeswara M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pavatkulam Kalaimagal Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Pavatkulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pavatkulam St-3, No. 9 J.H.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyakaddu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyapuliyalankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyathampanai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Piramanalankulam Vigneswara",
        district: "Vavuniya"
    }),
    new School({
        name: "Poosanipiddy Thayumanavar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Puliyadimurippu Somaskantha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sinnaththampanai G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Sri Subramaniya Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Tharul-Uloom Muslim Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Veeramanikkankulam Thirumagal",
        district: "Vavuniya"
    }),
    new School({
        name: "Veerapuram Manivasagar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Agrabodhi M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Alagalla Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Arugampulleliya Sinhala Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Dharmapala Vidyalayam",
        district: "Vavuniya"
    }),
    new School({name: "Gamini M.V.", district: "Vavuniya"}),
    new School({
        name: "Kalukunnammaduwa G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Katumankulam Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kokweliya G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kovilputhukulam Sinhala Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kudakachchakodiya Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Mahakachchakodiya G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Mahamylankulam Viduhala",
        district: "Vavuniya"
    }),
    new School({
        name: "Maradammaduwa G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Moonrumurippu G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nedunkulam G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pavatkulam Stage 1 Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Pirappanmaduwa G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Varikuttiuruwa G.S.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Al Aksha M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Arafa Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Asikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Chekkadipulavu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Eyankaravoor G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Kalnaddinakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Karumpanichankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Katharsinnakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Katpakapuram G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Ketheeswara Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Kudiyiruppu C.C.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Madeena Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Maharambaikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Moonrumurippu G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Nelukkulam Kalaimagal M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Parameswara Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Parasakthy Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Parathi Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Periyakomarasankulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Peyadikoolankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Poonthoddam G.T.M.S. (M.V.)",
        district: "Vavuniya"
    }),
    new School({
        name: "Poovarasankulam M.V.",
        district: "Vavuniya"
    }),
    new School({
        name: "Pramandu Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Rajendrakulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Saivapragasa Ladies' College",
        district: "Vavuniya"
    }),
    new School({
        name: "Samalankulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Saratha Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sithivinayagar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Sivapuram Primary School",
        district: "Vavuniya"
    }),
    new School({
        name: "Srinagarajah Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Thalikulam G.T.M.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Thirugnanasampanthar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Vanni Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Velikulam J.H.S.",
        district: "Vavuniya"
    }),
    new School({
        name: "Vinayagar Vidyalayam",
        district: "Vavuniya"
    }),
    new School({
        name: "Vipulanantha College",
        district: "Vavuniya"
    })
];


module.exports.schools = school;
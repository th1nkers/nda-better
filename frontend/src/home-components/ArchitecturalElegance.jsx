import React, { useState } from "react";
import "./ArchitecturalElegance.css";
import Header from "../shared/components/uiElements/Header";
import hut from "../assets/home/slide-section/hut-of-remembrance.jpg";
import habibulah from "../assets/home/habibulah.jpg";
import Modal from "../shared/components/uiElements/Modal";

const ARCHITECTURAL_GALLERY = [
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Sudan_Block.jpg/1280px-Sudan_Block.jpg",
    header: "Sudan Block",
    detail:
      "The Sudan Block today is an iconic symbol of this Tri-Services Academy. Its Massive Dome is its most eye-catching and remarkable feature and looms over the landscape of the lush Khadakwasla estate Iike a colossus. The Dome has an ECC Shell lined with Pink Jodhpur Stone. At its peak is an eight Inch diameter Blue Glass Dharma Chakra. It looms over a massive roof of Taylor Tiles.",
  },
  {
    imgUrl: hut,
    header: "Hut of Remembrance",
    detail:
      "The sublime memorial hut enshrines and commemorates the sacrifices of all those alumni who laid down their lives for their motherland. It is a spiritual place of inspiration for all the cadets and officers. Situated on a scenic hill slope, west of the Sudan Block, Hut of Remembrance was built by the cadets between January 1956 and May 1957. The Garden around the hut was landscaped in 1992 to complement the serenity and the inspirational aura of the shrine. In this reverential place, passing out cadets and the officers of the Academy assemble in a solemn ceremony to pay homage to the martyred and decorated heroes and seek the blessings of God.",
  },
  {
    imgUrl: habibulah,
    header: "Habibullah Hall",
    detail:
      "Habibullah Hall, named in honor of the first Commandant of NDA at Khadakwasla was constructed in 1959 at a cost of Rs. 1,25,000. This impressive double-storeyed auditorium, with a seating capacity of over 1700, hosts various events such as lectures, presentations, musical evenings, debates, quiz competitions, Inter-Battalion variety entertainment programmes etc., in addition to the momentous Convocation Ceremony. Hindi and English movies are screened once a week in the Hall.",
  },
  {
    imgUrl: "https://live.staticflickr.com/4111/5028768462_51ae7a8e9a_b.jpg",
    header: "Museum",
    detail:
      "The building spread over 18,000 sq ft area also houses the largest Inter Service Museum of our country having 16,000 rare exhibits arranged in four large galleries and halls. The NDA Museum, a veritable treasure house of antique memorabilia, archives, relics and splendid exhibits carefully preserved and maintained, is visited by all guests of the Academy. Some of the prized possessions of the Museum include Sword of Captain Console Fernandez of Cordoba used in the Dynastic Wars of the XV and XVI Century, a Sapphire studded silver plaque, original Stone Age weapons, an Ivory Dinner Gong from Kenya , captured Pakistani and Portuguese flags and Uzi sub-machine guns among many others.",
  },
  {
    imgUrl:
      "https://images.shiksha.com/mediadata/images/1503288065phpvRuDTX.jpeg",
    header: "Vyas Library",
    detail:
      "In Jan 1955 when the Academy was formally opened at Khadakwasla, Pune, the NDA library made its modest beginning in the Geography Laboratory. Today Vyas Library is situated on the left flank of the Sudan Block and was named after the renowned scholar, teacher, golfer and administrator, Mr T N Vyas who had been the Principal of NDA for fifteen years (1953-1968). Before being appointed as the Principal of NDA, he had been a distinguished House master at Doon School and had later been the Principal of Mayo College, Ajmer. Vyas Library, in conjunction with NTT building, resembles an anchor from aerial view.",
  },
  {
    imgUrl:
      "https://www.ssbcrack.com/wp-content/uploads/2017/12/NDA-Passing-Out-Parade-30-Nov-2017-4-1024x683.jpg",
    header: "Parade Ground",
    detail: `The NDA parade ground is a sprawling expanse of tarmac in front of the Manoj Pandey Block. The majestic background to the parade ground is provided by the QM Fort. The Quarter-Deck towers in the foreground, keeping constant vigil on cadets undergoing the rigours of foot, cane and ceremonial drill. The drill square measures 450 x 150 m. The inter-services character is evident throughout the length and breadth of the parade ground. It is reflected in the immaculately positioned guns at the entrance and four corners of the tarmac, the two T-55 tanks, the towering Quarter Deck mast (99' 6 3/4" high) and the two aircrafts, representing the three Services.

    Drill is the bedrock of discipline. The Adjutant on his white charger is a symbol of authority and discipline. The grand inale of the Passing Out Parade is enacted each term with clockwork precision amidst ceremony and fanfare on this hallowed ground. The soulful and solemn strains of 'Auld Lang Syne' orchestrate the slow march at the Passing Out Parade. The parade ground was named 'Khetarpal Parade Ground' in everlasting memory of 2/Lt Arun Khetarpal (38 Course/‘F' Squadron) who was posthumously awarded the Param Vir Chakra for displaying unparalleled gallantry in the Battle of Basantar in 1971.`,
  },
  {
    imgUrl:
      "https://content.jdmagicbox.com/comp/pune/g5/020pxx20.xx20.181024200558.g9g5/catalogue/nda-parade-ground-khadakwasla-pune-znjf43curq.jpg",
    header: "Ashoka Pillar",
    detail: `The 30 foot Ashoka Pillar, erected in the centre of the circular road junction where the President's Drive meetsTrishul Marg in front of the Sudan Block, was completed on 02 Feb 1958. The structure is an adaptation of the Lion Capitol of Ashoka at Sarnath. The Ashoka Pillar junction becomes a beehive of activity at the sound of the siren. Cadets ebb and flow in assorted rigs across the junction in all directions in a mad race against time. The Ashoka Pillar befittingly stands at the cross-roads of Trishul Marg and the President's Drive as a symbol for steadfastness in the choice of the 'Harder Right rather than the Easier Wrong'.`,
  },
  {
    imgUrl:
      "https://gs-post-images.grdp.co/2020/6/stadium-img1592218855588-74.JPG-rs-high-webp.JPG",
    header: "NDA stadium",
    detail: `The NDA stadium was named Bombay Stadium in recognition of the generosity of the erstwhile state of Bombay which gifted 8022 acres of land at Khadakwasla for housing the Academy. The construction of the stadium was completed on 20th July, 1959 at a cost of Rupees three lakhs.The velvet turf of the stadium offers a high quality cricket ground. The stadium is partially enclosed by the Officers' Mess on one side and a grandstand with a seating capacity of approximately 5000 spectators on the other. Events such as athletics, cricket, mass PT, continuity drill display and the end of term Tattoo Show are held at this venue.`,
  },
  {
    imgUrl:
      "https://content3.jdmagicbox.com/comp/pune/t6/020pxx20.xx20.180626132929.k7t6/catalogue/peacock-bay-nda-khadakwasla-pune-museums-7m89s1g05z.jpg",
    header: "Peacock Bay",
    detail: `Peacock Bay is situated on the North-East of the Khadakwasla Lake. It is the nerve centre of all watermanship training. The facilities at the picturesque Bay to train the cadets include an array of seamanship training equipments, sailing boats of all classes, speed boats, wind surfers, water skis, whalers, dinghies and cutters. Peacock Bay derives its name from the abundance of peacocks found in the area. The bay is also home to other fauna such as the deer, Lion-tailed monkeys and civets.`,
  },
];

const ArchitecturalElegance = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgContent, setImgContent] = useState();

  const modalImageHandler = (index) => {
    setImgContent(ARCHITECTURAL_GALLERY[index]);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal imgContent={imgContent} onClose={closeModalHandler} />
      )}
      <div className="architectural-elegance">
        <img
          src="https://www.xtremz.in/dynamic/framework/xtreme/images/product_images/0_QZ8F.jpg"
          alt="elegance-logo"
        />
        <Header id="architectural-header">Architectural Elegance</Header>
        <div className="architectural-gallery">
          {ARCHITECTURAL_GALLERY.map((image, index) => (
            <img
              onClick={() => modalImageHandler(index)}
              key={index}
              src={image.imgUrl}
              alt={image.header}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArchitecturalElegance;

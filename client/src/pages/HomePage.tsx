import { NavLink } from "react-router-dom";
import "./homePage.css";

function HomePage() {
  const articles = [
    {
      id: 1,
      name: "Lion",
      species: "Panthera leo",
      family: "Felidae",
      habitat: "Grasslands and Savannas",
      place_of_found: "Africa",
      diet: "Carnivore",
      description:
        "The lion is a large and powerful wild cat known for its majestic appearance and social behavior.",
      weight_kg: 190,
      height_cm: 120,
      image:
        "https://as1.ftcdn.net/jpg/03/70/01/74/1000_F_370017416_R31sIGCIP9zcsA5DUOCBKZGYxivetzhA.jpg",
    },
    {
      id: 2,
      name: "Elephant",
      species: "Loxodonta africana",
      family: "Elephantidae",
      habitat: "Savannas, Grasslands, and Forests",
      place_of_found: "Africa, Asia",
      diet: "Herbivore",
      description:
        "The elephant is the largest land animal on Earth and is known for its intelligence and long trunk.",
      weight_kg: 6000,
      height_cm: 300,
      image:
        "https://cdn.futura-sciences.com/buildsv6/images/square1280/2/6/c/26c6b1ba6c_50196213_elephant-d-afrique-loxodonta-africana-peterfodor.jpg",
    },
    {
      id: 3,
      name: "Tiger",
      species: "Panthera tigris",
      family: "Felidae",
      habitat: "Forests, Grasslands, and Swamps",
      place_of_found: "Asia",
      diet: "Carnivore",
      description:
        "The tiger is a powerful predator with striking orange fur and black stripes.",
      weight_kg: 250,
      height_cm: 100,
      image:
        "https://as2.ftcdn.net/v2/jpg/00/88/74/71/1000_F_88747131_OIL6X2l7Nur139dUHTdaRK51NwqW02DE.jpg",
    },
    {
      id: 4,
      name: "Kangaroo",
      species: "Macropus",
      family: "Macropodidae",
      habitat: "Forests, Grasslands, and Deserts",
      place_of_found: "Australia",
      diet: "Herbivore",
      description:
        "Kangaroos are marsupials known for their powerful hind legs and pouches.",
      weight_kg: 85,
      height_cm: 150,
      image:
        "https://c02.purpledshub.com/uploads/sites/62/2024/07/kangaroo-facts.jpg?w=1029&webp=1",
    },
    {
      id: 5,
      name: "Gorilla",
      species: "Gorilla beringei",
      family: "Hominidae",
      habitat: "Forests and Mountains",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Gorillas are large and powerful primates known for their intelligence and social structure.",
      weight_kg: 180,
      height_cm: 160,
      image:
        "https://www.mondedesmammiferes.fr/wp-content/uploads/2020/03/Gorilla-beringei.jpg",
    },
    {
      id: 6,
      name: "Polar Bear",
      species: "Ursus maritimus",
      family: "Ursidae",
      habitat: "Arctic Region",
      place_of_found: "Arctic",
      diet: "Carnivore",
      description:
        "Polar bears are large carnivorous mammals adapted to life in the Arctic and primarily feed on seals.",
      weight_kg: 500,
      height_cm: 130,
      image:
        "https://mdm.sandre.eaufrance.fr/sites/default/files/Polar_Bear_-_Alaska_%2528cropped%2529.jpg?1573725000",
    },
    {
      id: 7,
      name: "Koala",
      species: "Phascolarctos cinereus",
      family: "Phascolarctidae",
      habitat: "Eucalyptus Forests",
      place_of_found: "Australia",
      diet: "Herbivore",
      description:
        "Koalas are arboreal marsupials known for their love of eucalyptus leaves.",
      weight_kg: 12,
      height_cm: 60,
      image:
        "https://as1.ftcdn.net/v2/jpg/03/70/59/62/1000_F_370596273_rO6rnsBEEqKyMYmGmgh8veBAMY98wsGe.jpg",
    },
    {
      id: 8,
      name: "Giraffe",
      species: "Giraffa camelopardalis",
      family: "Giraffidae",
      habitat: "Savannas and Grasslands",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Giraffes are the tallest land animals and have long necks and legs.",
      weight_kg: 800,
      height_cm: 550,
      image:
        "https://www.monde-animal.fr/wp-content/uploads/2020/04/fiche-animale-monde-animal-girafe.jpg",
    },
    {
      id: 9,
      name: "Panda",
      species: "Ailuropoda melanoleuca",
      family: "Ursidae",
      habitat: "Bamboo Forests",
      place_of_found: "China",
      diet: "Herbivore",
      description:
        "Pandas are bears known for their distinctive black and white markings and love for bamboo.",
      weight_kg: 85,
      height_cm: 90,
      image:
        "https://static.posters.cz/image/750/art-photo/giant-panda-baby-cub-in-chengdu-area-china-i210464.jpg",
    },
    {
      id: 10,
      name: "Cheetah",
      species: "Acinonyx jubatus",
      family: "Felidae",
      habitat: "Grasslands and Savannas",
      place_of_found: "Africa",
      diet: "Carnivore",
      description:
        "Cheetahs are the fastest land animals and have slender bodies built for speed.",
      weight_kg: 50,
      height_cm: 80,
      image:
        "https://thesudantimes.com/wp-content/uploads/2024/09/image_12760e-Cheetah.jpg",
    },
    {
      id: 11,
      name: "Hippopotamus",
      species: "Hippopotamus amphibius",
      family: "Hippopotamidae",
      habitat: "Rivers and Lakes",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Hippopotamuses are large semi-aquatic mammals known for their massive size and aggression.",
      weight_kg: 2000,
      height_cm: 150,
      image:
        "https://media.gettyimages.com/id/185509882/fr/photo/wildlife-of-chobe-natiobal-park.jpg?s=612x612&w=gi&k=20&c=Ysr8iyNS7QHDp2T5HyvrOs8kWRWFNtXiA-Qf8w3rANQ=",
    },
    {
      id: 12,
      name: "Chimpanzee",
      species: "Pan troglodytes",
      family: "Hominidae",
      habitat: "Forests and Savannas",
      place_of_found: "Africa",
      diet: "Omnivore",
      description:
        "Chimpanzees are highly intelligent primates and share about 98% of their DNA with humans.",
      weight_kg: 50,
      height_cm: 100,
      image:
        "https://www.animaux-animal.com/wp-content/uploads/2021/12/Portrait-dun-chimpanze-Pan-troglodytes-dans-son-habitat-1024x682.jpg",
    },
    {
      id: 13,
      name: "Red Panda",
      species: "Ailurus fulgens",
      family: "Ailuridae",
      habitat: "Himalayan Forests",
      place_of_found: "Asia",
      diet: "Omnivore",
      description:
        "Red pandas are small arboreal mammals known for their distinctive reddish fur and bushy tails.",
      weight_kg: 5,
      height_cm: 50,
      image:
        "https://img.freepik.com/photos-premium/panda-roux-ailurus-fulgens-portrait-fond-noir_410516-38062.jpg",
    },
    {
      id: 14,
      name: "Komodo Dragon",
      species: "Varanus komodoensis",
      family: "Varanidae",
      habitat: "Islands of Indonesia",
      place_of_found: "Asia",
      diet: "Carnivore",
      description:
        "Komodo dragons are the largest lizards and are known for their deadly venomous bite.",
      weight_kg: 90,
      height_cm: 150,
      image:
        "https://i.natgeofe.com/k/c02b35d2-bfd7-4ed9-aad4-8e25627cd481/komodo-dragon-head-on_3x2.jpg",
    },
    {
      id: 15,
      name: "Orangutan",
      species: "Pongo",
      family: "Hominidae",
      habitat: "Tropical Rainforests",
      place_of_found: "Southeast Asia",
      diet: "Omnivore",
      description:
        "Orangutans are great apes known for their intelligence and distinctive reddish-brown fur.",
      weight_kg: 70,
      height_cm: 130,
      image:
        "https://d244bobtshbp4.cloudfront.net/listing-images/_888xAUTO_crop_center-center_none_ns/International-primate-day-Post.jpg",
    },
    {
      id: 16,
      name: "Platypus",
      species: "Ornithorhynchus anatinus",
      family: "Ornithorhynchidae",
      habitat: "Rivers and Streams",
      place_of_found: "Australia",
      diet: "Carnivore",
      description:
        "Platypuses are unique egg-laying mammals with a duck-like bill and webbed feet.",
      weight_kg: 2,
      height_cm: 20,
      image:
        "https://lh4.googleusercontent.com/proxy/HQldt3kTmRBx5TbUCyf51WiEkjrAogH6Xt-C4_CKao70C_r7YR5jyfzkblwxJMUa1LpuS3mWHhI-x8R54hQ3yjgWcIKj5C1o",
    },
    {
      id: 17,
      name: "Sloth",
      species: "Folivora",
      family: "Megalonchidae",
      habitat: "Tropical Rainforests",
      place_of_found: "Central and South America",
      diet: "Herbivore",
      description:
        "Sloths are slow-moving arboreal mammals known for their laziness and long claws.",
      weight_kg: 5,
      height_cm: 60,
      image:
        "https://www.promegaconnections.com/wp-content/uploads/2021/10/63985762-Sloth-Day-2-1024x512-1.jpg",
    },
    {
      id: 18,
      name: "Pangolin",
      species: "Manis",
      family: "Manidae",
      habitat: "Tropical and Subtropical Regions",
      place_of_found: "Africa, Asia",
      diet: "Insectivore",
      description:
        "Pangolins are unique mammals covered in protective scales and are often referred to as 'scaly anteaters'.",
      weight_kg: 10,
      height_cm: 40,
      image:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x10000:format=jpg/path/s5dde8bff85c81b2f/image/idd98b19f3db4672e/version/1584096107/pangolin-geant-animaux-menaces-en-danger-fiche-habitat-comportement-poids-taille.jpg",
    },
    {
      id: 19,
      name: "Quokka",
      species: "Setonix brachyurus",
      family: "Macropodidae",
      habitat: "Islands of Australia",
      place_of_found: "Australia",
      diet: "Herbivore",
      description:
        "Quokkas are small marsupials known for their adorable smiling faces and friendly nature.",
      weight_kg: 3,
      height_cm: 40,
      image:
        "https://ih1.redbubble.net/image.4731311574.3068/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
    {
      id: 20,
      name: "Fennec Fox",
      species: "Vulpes zerda",
      family: "Canidae",
      habitat: "Deserts of North Africa",
      place_of_found: "Africa",
      diet: "Omnivore",
      description:
        "Fennec foxes are small foxes known for their large ears and adaptability to desert environments.",
      weight_kg: 1.5,
      height_cm: 20,
      image:
        "https://lazoo.org/wp-content/uploads/2023/05/Fennec-Fox-Male-JEP_4230-1024x731.jpg",
    },
    {
      id: 21,
      name: "Armadillo",
      species: "Dasypus",
      family: "Dasypodidae",
      habitat: "Grasslands, Forests, and Deserts",
      place_of_found: "North, Central, and South America",
      diet: "Omnivore",
      description:
        "Armadillos are armored mammals known for their protective bony plates and burrowing behavior.",
      weight_kg: 5,
      height_cm: 25,
      image:
        "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_nine-banded-armadillo_600x300.jpg",
    },
    {
      id: 22,
      name: "Tapir",
      species: "Tapirus",
      family: "Tapiridae",
      habitat: "Forests and Grasslands",
      place_of_found: "Central and South America, Southeast Asia",
      diet: "Herbivore",
      description:
        "Tapirs are large herbivorous mammals with a unique elongated snout and excellent swimmers.",
      weight_kg: 300,
      height_cm: 100,
      image:
        "https://actus.zoobeauval.com/wp-content/uploads/2021/04/2021_visuel_actu_journee_tapirs.jpg",
    },
    {
      id: 23,
      name: "Red Fox",
      species: "Vulpes vulpes",
      family: "Canidae",
      habitat: "Forests, Grasslands, and Mountains",
      place_of_found: "North America, Europe, Asia",
      diet: "Omnivore",
      description:
        "Red foxes are clever and adaptable mammals known for their reddish-orange fur and bushy tails.",
      weight_kg: 5,
      height_cm: 35,
      image:
        "https://static.wikia.nocookie.net/creatures-of-the-world/images/7/7c/Red-Fox.jpg/revision/latest?cb=20160406133317",
    },
    {
      id: 24,
      name: "Arctic Wolf",
      species: "Canis lupus arctos",
      family: "Canidae",
      habitat: "Arctic Region",
      place_of_found: "Arctic",
      diet: "Carnivore",
      description:
        "Arctic wolves are white-furred wolves that inhabit the Arctic regions and are well-adapted to the cold climate.",
      weight_kg: 45,
      height_cm: 80,
      image:
        "https://d1jyxxz9imt9yb.cloudfront.net/medialib/4332/image/s768x1300/Arctic_wolf_1.jpg",
    },
    {
      id: 25,
      name: "Serval",
      species: "Leptailurus serval",
      family: "Felidae",
      habitat: "Grasslands and Wetlands",
      place_of_found: "Africa",
      diet: "Carnivore",
      description:
        "Servals are slender and medium-sized wild cats known for their exceptional jumping and hunting abilities.",
      weight_kg: 18,
      height_cm: 60,
      image:
        "https://serval-savannah.com/wp-content/uploads/2021/11/serval-egypte.jpg",
    },
    {
      id: 26,
      name: "Jaguar",
      species: "Panthera onca",
      family: "Felidae",
      habitat: "Rainforests, Grasslands, and Swamps",
      place_of_found: "Central and South America",
      diet: "Carnivore",
      description:
        "Jaguars are large and powerful wild cats known for their stunning spotted coat and strong jaws.",
      weight_kg: 100,
      height_cm: 75,
      image:
        "https://as1.ftcdn.net/v2/jpg/00/05/17/90/1000_F_5179092_YqRcZY86FSEuKCQGaKY5wjOi4hl1hJT6.jpg",
    },
    {
      id: 27,
      name: "Gazelle",
      species: "Gazella",
      family: "Bovidae",
      habitat: "Grasslands and Savannas",
      place_of_found: "Africa, Asia",
      diet: "Herbivore",
      description:
        "Gazelles are slender and graceful antelopes known for their exceptional speed and agility.",
      weight_kg: 40,
      height_cm: 60,
      image: "https://www.zoologiste.com/images/xl/gazelle-brousse.jpg",
    },
    {
      id: 28,
      name: "Spectacled Bear",
      species: "Tremarctos ornatus",
      family: "Ursidae",
      habitat: "Andean cloud forests",
      place_of_found: "South America",
      diet: "Omnivore",
      description:
        "The Spectacled Bear is a South American bear species known for its distinctive facial markings.",
      weight_kg: 100,
      height_cm: 70,
      image:
        "https://www.shutterstock.com/image-photo/spectacled-bear-tremarctos-ornatus-sitting-260nw-2470621363.jpg",
    },
    {
      id: 29,
      name: "Lemur",
      species: "Lemuridae",
      family: "Lemuriformes",
      habitat: "Madagascar",
      place_of_found: "Madagascar",
      diet: "Omnivore",
      description:
        "Lemurs are primates endemic to Madagascar, known for their diverse species and playful behaviors.",
      weight_kg: 3,
      height_cm: 40,
      image: "https://cdn.britannica.com/20/154120-050-78DE15C0/lemur.jpg",
    },
    {
      id: 30,
      name: "Capybara",
      species: "Hydrochoerus hydrochaeris",
      family: "Caviidae",
      habitat: "Wetlands and Grasslands",
      place_of_found: "South America",
      diet: "Herbivore",
      description:
        "Capybaras are the largest rodents in the world and are known for their social and friendly nature.",
      weight_kg: 60,
      height_cm: 60,
      image:
        "https://www.zooplus.fr/magazine/wp-content/uploads/2024/04/capybara2.jpeg",
    },
    {
      id: 31,
      name: "Zebra",
      species: "Equus zebra",
      family: "Equidae",
      habitat: "Grasslands and Savannahs",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Zebras are strikingly beautiful animals known for their black and white stripes.",
      weight_kg: 300,
      height_cm: 150,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/1200px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg",
    },
    {
      id: 32,
      name: "Arctic Fox",
      species: "Vulpes lagopus",
      family: "Canidae",
      habitat: "Arctic Tundra",
      place_of_found: "Arctic",
      diet: "Omnivore",
      description:
        "Arctic foxes are small foxes adapted to life in cold Arctic regions, known for their thick fur.",
      weight_kg: 3.5,
      height_cm: 25,
      image:
        "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/a8404de3-13c9-4d22-a16f-03e165313f87/Arctic%20fox%2C%20Alopex%20lagopus%2C%20in%20the%20snow%20dreamstime_xxl_34412245%20(1).jpg?auto=compress%2Cformat&h=630&w=1200",
    },
    {
      id: 33,
      name: "Gibbon",
      species: "Hylobatidae",
      family: "Hylobatidae",
      habitat: "Tropical Rainforests",
      place_of_found: "Southeast Asia",
      diet: "Omnivore",
      description:
        "Gibbons are small apes known for their agility and loud calls in the treetops.",
      weight_kg: 6.5,
      height_cm: 50,
      image:
        "https://img.freepik.com/photos-gratuite/joli-gibbon-dans-nature_23-2150773687.jpg?semt=ais_hybrid",
    },
    {
      id: 34,
      name: "Fossa",
      species: "Cryptoprocta ferox",
      family: "Eupleridae",
      habitat: "Rainforests",
      place_of_found: "Madagascar",
      diet: "Carnivore",
      description:
        "Fossas are carnivorous mammals endemic to Madagascar, known for their slender and agile bodies.",
      weight_kg: 6.5,
      height_cm: 40,
      image:
        "https://mammiferesafricains.org/wp-content/uploads/2017/06/Fossa_Tete.jpg",
    },
    {
      id: 35,
      name: "Puma",
      species: "Puma concolor",
      family: "Felidae",
      habitat: "Various habitats including forests, mountains, and grasslands",
      place_of_found: "North and South America",
      diet: "Carnivore",
      description:
        "Pumas, also known as mountain lions or cougars, are powerful wild cats with a wide distribution in the Americas.",
      weight_kg: 60,
      height_cm: 75,
      image:
        "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-06/mini/puma-102319-650-400.jpg",
    },
    {
      id: 36,
      name: "Gray Wolf",
      species: "Canis lupus",
      family: "Canidae",
      habitat: "Diverse habitats including forests, tundra, and deserts",
      place_of_found: "North America, Europe, Asia",
      diet: "Carnivore",
      description:
        "Gray wolves, also known as timber wolves, are social and highly adaptable predators with a complex pack structure.",
      weight_kg: 45,
      height_cm: 80,
      image:
        "https://awionline.org/sites/default/files/styles/art/public/page/image/iStock-177794699.jpg?itok=QknLnjS5",
    },
    {
      id: 37,
      name: "Bison",
      species: "Bison bison",
      family: "Bovidae",
      habitat: "Grasslands and Plains",
      place_of_found: "North America",
      diet: "Herbivore",
      description:
        "Bisons are large and strong herbivores known for their massive size and iconic hump.",
      weight_kg: 900,
      height_cm: 200,
      image:
        "https://master.salamandre.net/media/21601/bison-deurope-1-1800x1200.jpg",
    },
    {
      id: 38,
      name: "Gharial",
      species: "Gavialis gangeticus",
      family: "Gavialidae",
      habitat: "Rivers",
      place_of_found: "India, Nepal",
      diet: "Carnivore",
      description:
        "Gharials are large crocodiles with long, slender snouts, and they primarily eat fish.",
      weight_kg: 350,
      height_cm: 500,
      image: "https://cdn.mos.cms.futurecdn.net/tzLiegiu7vvL6ecYw4eNFP.jpg",
    },
    {
      id: 39,
      name: "Black Rhinoceros",
      species: "Diceros bicornis",
      family: "Rhinocerotidae",
      habitat: "Grasslands, Savannas, and Forests",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Black Rhinoceroses are large mammals known for their hooked upper lip and solitary behavior.",
      weight_kg: 1400,
      height_cm: 160,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Black_Rhino_at_Working_with_Wildlife.jpg",
    },
    {
      id: 40,
      name: "Mandrill",
      species: "Mandrillus sphinx",
      family: "Cercopithecidae",
      habitat: "Rainforests",
      place_of_found: "Central Africa",
      diet: "Omnivore",
      description:
        "Mandrills are colorful and social primates known for their distinct facial markings.",
      weight_kg: 35,
      height_cm: 70,
      image:
        "https://www.safari-peaugres.com/wp-content/uploads/2023/12/mandrill-e1713019554500.jpg",
    },
    {
      id: 41,
      name: "Beluga Whale",
      species: "Delphinapterus leucas",
      family: "Monodontidae",
      habitat: "Arctic and subarctic regions",
      place_of_found: "Arctic",
      diet: "Carnivore",
      description:
        "Beluga whales, also known as white whales, are known for their distinctive white color and melon-shaped head.",
      weight_kg: 1400,
      height_cm: 400,
      image:
        "https://www.treehugger.com/thmb/RGhLgko-1jxEvkNs-3fLeUtiWSw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-564105119-e090a2a5023c4c058c75d7cdd689479b.jpg",
    },
    {
      id: 42,
      name: "Manatee",
      species: "Trichechus",
      family: "Trichechidae",
      habitat: "Shallow, slow-moving rivers, estuaries, and coastal waters",
      place_of_found:
        "North America, Central America, South America, West Africa, and the Caribbean",
      diet: "Herbivore",
      description:
        "Manatees, also known as sea cows, are gentle herbivores known for their slow movements and docile behavior.",
      weight_kg: 500,
      height_cm: 150,
      image:
        "https://www.treehugger.com/thmb/_BL-0-39uBvVWB-RitnArqlD2vY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/manatee.primary-e6d6754efdc94e5bb635af7a5f456ca1.jpg",
    },
    {
      id: 43,
      name: "Snow Leopard",
      species: "Panthera uncia",
      family: "Felidae",
      habitat: "Mountainous regions of Central and South Asia",
      place_of_found: "Asia",
      diet: "Carnivore",
      description:
        "Snow leopards are elusive and beautiful big cats known for their ability to thrive in cold, mountainous terrains.",
      weight_kg: 50,
      height_cm: 60,
      image:
        "https://fanzoj.com/wp-content/uploads/2024/02/snow-leopard-post-04.jpg",
    },
    {
      id: 44,
      name: "Leopard Seal",
      species: "Hydrurga leptonyx",
      family: "Phocidae",
      habitat: "Antarctic coastal waters and ice packs",
      place_of_found: "Antarctica",
      diet: "Carnivore",
      description:
        "Leopard seals are large and formidable predators known for their striking spotted coat and their skill in hunting.",
      weight_kg: 450,
      height_cm: 320,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Antarctic_Sound-2016-Brown_Bluff%E2%80%93Leopard_seal_%28Hydrurga_leptonyx%29_04.jpg",
    },
    {
      id: 45,
      name: "Okapi",
      species: "Okapia johnstoni",
      family: "Giraffidae",
      habitat: "Rainforests of the Democratic Republic of the Congo",
      place_of_found: "Africa",
      diet: "Herbivore",
      description:
        "Okapis are rare and unique mammals known for their zebra-like stripes and long necks.",
      weight_kg: 250,
      height_cm: 150,
      image:
        "https://t3.ftcdn.net/jpg/05/88/99/18/360_F_588991832_xMNar4rNHMCgNQTMPhDk2ZPoSPuG9Xri.jpg",
    },
    {
      id: 46,
      name: "Red-eyed Tree Frog",
      species: "Agalychnis callidryas",
      family: "Hylidae",
      habitat: "Rainforests of Central America",
      place_of_found: "Central America",
      diet: "Insectivore",
      description:
        "The Red-eyed Tree Frog is a colorful tree-dwelling frog known for its striking red eyes.",
      weight_kg: 0.1,
      height_cm: 7,
      image:
        "https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_2x1.jpg",
    },
    {
      id: 47,
      name: "Chameleon",
      species: "Chamaeleonidae",
      family: "Squamata",
      habitat: "Tropical and subtropical regions",
      place_of_found: "Africa, Asia, Europe, and Madagascar",
      diet: "Insectivore",
      description:
        "Chameleons are unique reptiles known for their ability to change color and their long, sticky tongues.",
      weight_kg: 0.1,
      height_cm: 20,
      image:
        "https://www.reviewofreligions.org/wp-content/uploads/2024/09/shutterstock_2265417157.jpg",
    },
    {
      id: 48,
      name: "Blue Whale",
      species: "Balaenoptera musculus",
      family: "Balaenopteridae",
      habitat: "Oceans",
      place_of_found: "Various oceans worldwide",
      diet: "Carnivore",
      description:
        "The blue whale is the largest animal to have ever existed on Earth, known for its massive size and distinct blue-gray coloration.",
      weight_kg: 200000,
      height_cm: 2500,
      image:
        "https://t4.ftcdn.net/jpg/09/57/70/31/360_F_957703184_CFYUVV3tiIdpAipj4x01bhgjlJ96CWNt.jpg",
    },
    {
      id: 49,
      name: "Mongoose",
      species: "Herpestidae",
      family: "Herpestidae",
      habitat: "Grasslands, forests, and wetlands",
      place_of_found: "Africa, Asia, and Europe",
      diet: "Carnivore",
      description:
        "Mongooses are small carnivores known for their agility and ability to take on venomous snakes.",
      weight_kg: 1.5,
      height_cm: 25,
      image:
        "https://hellointern.in/blog/uploads/images/2024/07/image_750x_66913107a19ed.jpg",
    },
    {
      id: 50,
      name: "Capuchin Monkey",
      species: "Cebus",
      family: "Cebidae",
      habitat: "Tropical forests and savannas",
      place_of_found: "Central and South America",
      diet: "Omnivore",
      description:
        "Capuchin monkeys are intelligent and agile primates known for using tools to obtain food.",
      weight_kg: 3.9,
      height_cm: 40,
      image:
        "https://pangovet.com/wp-content/uploads/2024/06/Capuchin-Monkey-front-view_Pixabay.jpg",
    },
  ];

  return (
    <main>
      <section id="recent-articl
        {articles?.map((el) => (
          <NavLink
            to={`/dtail/${el.id}`}
            key={el.id}
            className="clickable-card"
          >
            <h3 className="nemeAnimal">{el.name}</h3>
            <img src={el.image} alt={el.name} />
            <a href="/" className="like-dons">
              Dons
            </a>
          </NavLink>
        ))}
      </section>
    </main>
  );
}

export default HomePage;

const cats = [
  {
    image: "./images/cat1.jpg",
    title: "Playful Kitten",
    description:
      "This curious and playful kitten loves to explore its surroundings and chase after toys. Its energetic personality makes it the perfect companion for an active household.",
  },
  {
    image: "./images/cat2.jpg",
    title: "Elegant Tabby",
    description:
      "An elegant tabby cat with mesmerizing green eyes and soft striped fur. Known for its affectionate nature and calm demeanor, it enjoys lounging by sunny windows.",
  },
  {
    image: "./images/cat3.jpg",
    title: "Fluffy Friend",
    description:
      "A fluffy and cuddly companion with a luxurious coat. This cat is as soft as a cloud and loves to snuggle up on your lap for hours of warmth and comfort.",
  },
  {
    image: "./images/cat4.jpg",
    title: "Majestic Maine Coon",
    description:
      "With its large size and tufted ears, the Maine Coon exudes majesty. Friendly and intelligent, this breed is often called a 'gentle giant' due to its loving nature.",
  },
  {
    image: "./images/cat5.jpg",
    title: "Sleek Siamese",
    description:
      "A sleek Siamese cat with striking blue eyes and a melodious voice. This social feline thrives on attention and enjoys engaging with its human companions.",
  },
  {
    image: "./images/cat6.jpg",
    title: "Charming Calico",
    description:
      "The calico cat stands out with its vibrant patches of orange, black, and white. Known for its unique personality, each calico is truly one of a kind.",
  },
  {
    image: "./images/cat7.jpg",
    title: "Adventurous Abyssinian",
    description:
      "An Abyssinian cat with a short, ticked coat and a love for adventure. This active breed is known for its playful antics and boundless curiosity.",
  },
  {
    image: "./images/cat8.jpg",
    title: "Graceful Russian Blue",
    description:
      "The Russian Blue is admired for its plush silver-gray coat and piercing green eyes. Quiet and gentle, it forms deep bonds with its chosen family members.",
  },
  {
    image: "./images/cat9.jpg",
    title: "Persian Beauty",
    description:
      "With its long, flowing coat and expressive eyes, the Persian cat is a true beauty. It enjoys a calm environment where it can relax and be pampered.",
  },
  {
    image: "./images/cat10.jpg",
    title: "Quirky Sphynx",
    description:
      "The Sphynx cat may lack fur, but it makes up for it with personality. Friendly and outgoing, this unique breed loves to be the center of attention.",
  },
  {
    image: "./images/cat11.jpg",
    title: "Bengal Explorer",
    description:
      "With its exotic spotted coat, the Bengal cat looks like a tiny leopard. Energetic and intelligent, it loves climbing and interactive play.",
  },
  {
    image: "./images/cat12.png",
    title: "Ragdoll Companion",
    description:
      "The Ragdoll cat is known for its laid-back personality and stunning blue eyes. It adores being held and will happily go limp in your arms like a ragdoll.",
  },
];

const $container = document.querySelector(".container");
const $template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();

for (const c of cats) {
  $template.querySelector("img").setAttribute("src", c.image);
  $template.querySelector("img").setAttribute("alt", c.title);
  $template.querySelector("h3").textContent = c.title;
  $template.querySelector("p").textContent = c.description;

  fragment.appendChild(document.importNode($template, true));
}

$container.appendChild(fragment);

import CategoryDirectory from "../../../components/category-directory/category-directory.component";
import "./home.styles.scss";

const categories = [
  {
    id: 1,
    title: "jackets",
    copyOne: "So Fresh",
    copyTwo: "And So",
    copyThree: "Clean Clean",
    copyFour: "Oh yeah.  New jackets are in!",
    imageUrl:
      "https://images.pexels.com/photos/605206/pexels-photo-605206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "womens",
    copyOne: "The Ultimate",
    copyTwo: "Desk-To-Party",
    copyThree: "Outfits",
    copyFour: "We got you covered.  So what are you waiting for?",
    imageUrl:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "mens",
    copyOne: "New Styles",
    copyTwo: "to Make",
    copyThree: "You Smile",
    copyFour: "All of the best gear to get you stylin'.",
    imageUrl:
      "https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "hats",
    copyOne: "Hats That Refine",
    copyTwo: "Styles",
    copyThree: "That Shine",
    copyFour: "Check out our new hats for the season!",
    imageUrl:
      "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "sneakers",
    copyOne: "Accessories",
    copyTwo: "To",
    copyThree: "Murder",
    copyFour: "The best sneakers in the game!",
    imageUrl:
      "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
];

const Home = () => {
  return <CategoryDirectory categories={categories} />;
};

export default Home;

import CategoryDirectory from "../../../components/category-directory/category-directory.component";
import "./home.styles.scss";

const categories = [
    {
        id: 1,
        title: "new",
        copyOne: "So Fresh",
        copyTwo: "And So",
        copyThree: "Clean Clean",
        imageUrl:
            "https://images.pexels.com/photos/605206/pexels-photo-605206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        title: "womens",
        copyOne: "The Ultimate",
        copyTwo: "Desk-To-Party",
        copyThree: "Outfits",
        imageUrl:
            "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "mens",
        copyOne: "New Styles",
        copyTwo: "to",
        copyThree: "Make You Smile",
        imageUrl:
            "https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        title: "bags",
        copyOne: "Bags That Refine",
        copyTwo: "Styles",
        copyThree: "That Shine",
        imageUrl:
            "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 5,
        title: "accessories",
        copyOne: "Accessories",
        copyTwo: "To",
        copyThree: "Murder",
        imageUrl:
            "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    },
];

const Home = () => {
    return <CategoryDirectory categories={categories} />;
};

export default Home;

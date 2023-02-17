import { createContext, useState, useEffect } from "react"; // eslint-disable-line
import {
    addCollectionAndDocuments, // eslint-disable-line
    getCategoriesAndDocuments, // eslint-disable-line
} from "../../utilities/firebase.utils"; // eslint-disable-line
import SHOP_DATA from "../../shop-data"; // eslint-disable-line

export const CategoriesContext = createContext({
    CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({}); // eslint-disable-line
    // enable the code below if there are new product items to be added to
    //firebase.  Then run once, and disable.
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    useEffect(() => {
        //async call inside of useEffect, so it's wrapped in
        //it's own async function to accomdate this, and then called
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};

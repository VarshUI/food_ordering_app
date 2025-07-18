import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_IMG } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        if (resData) {
            // Extract restaurant info
            const restaurantInfo = resData?.cards?.find((obj) =>
                obj?.card?.card["@type"]?.includes("food.v2.Restaurant")
            )?.card?.card?.info;

            // Extract menu data
            const menuData = resData?.cards
                ?.find((obj) => obj?.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                    (obj) =>
                        obj?.card?.card["@type"]?.includes("ItemCategory") ||
                        obj?.card?.card["@type"]?.includes("NestedItemCategory")
                );

            const organisedMenuData = menuData?.map((obj) => {
                const type = obj?.card?.card["@type"];
                const title = obj?.card?.card?.title;
                const itemCards = obj?.card?.card?.itemCards;
                const categories = obj?.card?.card?.categories;

                if (type?.includes("Nested")) {
                    return {
                        title,
                        type: "nested",
                        categories: categories?.map((subcategory) => ({
                            title: subcategory?.title,
                            itemCards: subcategory?.itemCards
                        }))
                    };
                } else {
                    return {
                        title,
                        type: "item",
                        itemCards
                    };
                }
            });

            setResInfo(restaurantInfo);
            setResMenu(organisedMenuData);
        }
    }, [resData]);

    if (resInfo === null) return <Shimmer />;

    const { name, areaName, cuisines, costForTwoMessage } = resInfo;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-6">
                {/* Go Back Button */}
                <button 
                    className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                    onClick={() => history.back()}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                </button>

                {/* Restaurant Details */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-3">{name}</h1>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                            <span className="font-semibold">Outlet:</span> 
                            <span className="ml-2 text-gray-800">{areaName}</span>
                        </p>
                        <p className="text-gray-700">
                            {cuisines?.join(", ")} - <span className="font-semibold text-green-600">{costForTwoMessage}</span>
                        </p>
                    </div>
                </div>

                {/* Menu Categories */}
                <div className="space-y-6">
                    {resMenu?.map((category) =>
                        category?.type === "nested" ? (
                            <NestedMenuCategory
                                key={category?.title}
                                category={category}
                            />
                        ) : (
                            <MenuCategory
                                key={category?.title}
                                category={category}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

const truncateString = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};

const MenuCategory = ({ category }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className="text-lg font-semibold text-gray-800">
                    {category?.title} ({category?.itemCards?.length})
                </h3>
                <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            
            {isExpanded && (
                <div className="divide-y divide-gray-100">
                    {category?.itemCards?.map((item) => (
                        <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
                    ))}
                </div>
            )}
        </div>
    );
};

const NestedMenuCategory = ({ category }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-orange-50 border-b border-orange-200">
                <h3 className="text-xl font-bold text-gray-800">{category?.title}</h3>
            </div>
            <div className="space-y-4 p-4">
                {category?.categories?.map((subcategory) => (
                    <div key={subcategory?.title} className="border border-gray-200 rounded-lg overflow-hidden">
                        <SubMenuCategory subcategory={subcategory} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const SubMenuCategory = ({ subcategory }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <>
            <button
                className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h4 className="text-md font-semibold text-gray-800">
                    {subcategory?.title} ({subcategory?.itemCards?.length})
                </h4>
                <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            
            {isExpanded && (
                <div className="divide-y divide-gray-100">
                    {subcategory?.itemCards?.map((item) => (
                        <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
                    ))}
                </div>
            )}
        </>
    );
};

const MenuItem = ({ item }) => {
    const { name, description, price, defaultPrice, imageId } = item;

    return (
        <div className="p-4 flex gap-4 hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-1">
                {name && <h4 className="text-lg font-semibold text-gray-800 mb-2">{name}</h4>}
                {description && (
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {truncateString(description, 120)}
                    </p>
                )}
                {(price || defaultPrice) && (
                    <p className="text-lg font-bold text-green-600">
                        ₹{((price || defaultPrice) / 100).toFixed(2)}
                    </p>
                )}
            </div>

            {imageId && (
                <div className="flex-shrink-0">
                    <img
                        className="w-24 h-24 object-cover rounded-lg shadow-md"
                        src={RESTAURANT_MENU_IMG + imageId}
                        alt={name}
                    />
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;
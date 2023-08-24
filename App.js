import React from "react";
import ReactDOM from "react-dom/client";

/*
*
* - Header Component
    - Logo
    - NavItems

* - Body Component
    - Search
    - Restaurant Container
      - Restaurant Cards

* - Footer Component
    - Copyright
    - Links
    - Address
    - Contact
*
*/


const resList = [
                  {
                    "info": {
                      "id": "52630",
                      "name": "McDonald's",
                      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                      "locality": "City Gold Multiplex, Ashram Road",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "feeDetails": {
                        "restaurantId": "52630",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "630",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-25 01:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-city-gold-multiplex-ashram-road-navrangpura-ahmedabad-52630",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "36780",
                      "name": "Kabir Restaurant",
                      "cloudinaryImageId": "cqmmjxbgwqt844sjpecy",
                      "locality": "Gurukul",
                      "areaName": "Memnagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Indian",
                        "Gujarati",
                        "Chinese",
                        "South Indian",
                        "Snacks"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "36780",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5900
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5900
                      },
                      "parentId": "405732",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 6.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "6.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 15:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kabir-restaurant-gurukul-memnagar-ahmedabad-36780",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "114323",
                      "name": "Iscon Thal",
                      "cloudinaryImageId": "bd68ec66db6e8459145694c17f5aecde",
                      "locality": "SG Road",
                      "areaName": "Satellite",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Gujarati",
                        "Thalis",
                        "Indian",
                        "Sweets",
                        "Desserts",
                        "Jain"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "114323",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 6100
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 6100
                      },
                      "parentId": "107384",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "31 mins",
                        "lastMileTravelString": "8.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 15:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/iscon-thal-sg-road-satellite-ahmedabad-114323",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "395939",
                      "name": "KFC",
                      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                      "locality": "Panchwati Cross",
                      "areaName": "Paldi & Ambawadi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "feeDetails": {
                        "restaurantId": "395939",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3300
                      },
                      "parentId": "547",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-25 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/kfc-panchwati-cross-paldi-and-ambawadi-ahmedabad-395939",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "81814",
                      "name": "Burger King",
                      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      "locality": "3rd Eye II,CG Road",
                      "areaName": "Ellisbridge",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Salads",
                        "Beverages",
                        "Chaat"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "81814",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "166",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-25 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹129",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/burger-king-3rd-eye-ii-cg-road-ellisbridge-ahmedabad-81814",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "36969",
                      "name": "Domino's Pizza",
                      "cloudinaryImageId": "il4hgznny2evcxg607h5",
                      "locality": "Near Law Garden",
                      "areaName": "Ellisbridge",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                      ],
                      "avgRating": 3.9,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "36969",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "2456",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:57:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-law-garden-ellisbridge-ahmedabad-36969",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "91930",
                      "name": "Swati Snacks",
                      "cloudinaryImageId": "g6xg0octgknysvln5wxd",
                      "locality": "Ellis Bridge",
                      "areaName": "Ellisbridge",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Gujarati",
                        "Indian",
                        "South Indian",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "91930",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3300
                      },
                      "parentId": "8581",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/swati-snacks-ellis-bridge-ellisbridge-ahmedabad-91930",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "49562",
                      "name": "Season 9",
                      "cloudinaryImageId": "nmtw1jxfhkurmmyosfly",
                      "locality": "Shivalik Yash",
                      "areaName": "Naranpura",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Continental"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "49562",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 4700
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 4700
                      },
                      "parentId": "179676",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/season-9-shivalik-yash-naranpura-ahmedabad-49562",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "419924",
                      "name": "Jayhind Sweets",
                      "cloudinaryImageId": "takhc38rjdd0xmhllmve",
                      "locality": "Manekchowk",
                      "areaName": "LalDarwaja",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Sweets",
                        "Desserts",
                        "Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "419924",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "4419",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 20:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/jayhind-sweets-manekchowk-laldarwaja-ahmedabad-419924",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "36676",
                      "name": "Jugaad Nights",
                      "cloudinaryImageId": "ptqijjpjqkoxszwo0qtn",
                      "locality": "Swastik Society",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Thalis",
                        "Indian",
                        "Chinese",
                        "North Indian",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "36676",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "5244",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 15:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/jugaad-nights-swastik-society-navrangpura-ahmedabad-36676",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "131419",
                      "name": "The Shake Maker",
                      "cloudinaryImageId": "dferqhtglrgwiaypa5vg",
                      "locality": "Paldi",
                      "areaName": "Paldi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "feeDetails": {
                        "restaurantId": "131419",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "5303",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:31:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-shake-maker-paldi-ahmedabad-131419",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "45037",
                      "name": "Mocha",
                      "cloudinaryImageId": "becb6f10a63f391672c48c16ed00e9de",
                      "locality": "Navrangpura",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "American",
                        "Italian",
                        "Indian",
                        "Jain",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Desserts",
                        "Pastas",
                        "Pizzas",
                        "Thai"
                      ],
                      "avgRating": 4.5,
                      "feeDetails": {
                        "restaurantId": "45037",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3300
                      },
                      "parentId": "5417",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mocha-navrangpura-ahmedabad-45037",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50934",
                      "name": "Choice Snack Bar",
                      "cloudinaryImageId": "sj8eh6dtxlplwc5a5vl3",
                      "locality": "C G Road",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "50934",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "4866",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/choice-snack-bar-c-g-road-navrangpura-ahmedabad-50934",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "37578",
                      "name": "Gwalia Sweets & Fast Food",
                      "cloudinaryImageId": "mglb0z3qdofmpfd7qauw",
                      "locality": "Stadium Circle",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets",
                        "North Indian",
                        "Chaat",
                        "Snacks",
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "37578",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "92340",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-stadium-circle-navrangpura-ahmedabad-37578",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "40837",
                      "name": "1944 The Hocco Kitchen",
                      "cloudinaryImageId": "mparwfx5mpi5k3hrbc24",
                      "locality": "Navrangpura Bus Stand",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "North Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "40837",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 3300
                      },
                      "parentId": "22966",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/1944-the-hocco-kitchen-bus-stand-navrangpura-ahmedabad-40837",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "72430",
                      "name": "Vipul Dudhiya Sweets",
                      "cloudinaryImageId": "sdatp7pqqctty8i3j3t8",
                      "locality": "Mahalaxmi Cross Road",
                      "areaName": "Paldi",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "72430",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "223924",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 20:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "FREE ITEM",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/vipul-dudhiya-sweets-mahalaxmi-cross-road-paldi-ahmedabad-72430",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "40831",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "Mithakali",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "feeDetails": {
                        "restaurantId": "40831",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "2",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "30% OFF",
                        "subHeader": "UPTO ₹75",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/subway-mithakali-navrangpura-ahmedabad-40831",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "47589",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "City Gold Complex",
                      "areaName": "Navrangpura",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.8,
                      "feeDetails": {
                        "restaurantId": "47589",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "721",
                      "avgRatingString": "3.8",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "28 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-25 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/pizza-hut-city-gold-complex-navrangpura-ahmedabad-47589",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "378472",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "haujstay6r8mbuxfgwzq",
                      "locality": "Maninagar",
                      "areaName": "KHOKHARA",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "feeDetails": {
                        "restaurantId": "378472",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 5400
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 5400
                      },
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 6.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "34 mins",
                        "lastMileTravelString": "6.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-24 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-maninagar-khokhara-ahmedabad-378472",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "62979",
                      "name": "LunchBox - Meals and Thalis",
                      "cloudinaryImageId": "ohhbevxuw3iucwxw3x09",
                      "locality": "SV Desai Marg",
                      "areaName": "CG Road RK",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Punjabi",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "feeDetails": {
                        "restaurantId": "62979",
                        "fees": [
                          {
                            "name": "BASE_DISTANCE",
                            "fee": 2800
                          },
                          {
                            "name": "BASE_TIME"
                          },
                          {
                            "name": "ANCILLARY_SURGE_FEE"
                          }
                        ],
                        "totalFee": 2800
                      },
                      "parentId": "4925",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-08-25 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "discountCalloutInfo": {
                          "message": "Free Delivery",
                          "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sv-desai-marg-cg-road-rk-ahmedabad-62979",
                      "type": "WEBLINK"
                    }
                  }
                ];
// const resList = [
  
//   {
//     info: {
//       id: "36780",
//       name: "Kabir Restaurant",
//       cloudinaryImageId: "cqmmjxbgwqt844sjpecy",
//       locality: "Gurukul",
//       areaName: "Memnagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Indian", "Gujarati", "Chinese", "South Indian", "Snacks"],
//       avgRating: 4.3,
//       veg: true,
//       feeDetails: {
//         restaurantId: "36780",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5900,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5900,
//       },
//       parentId: "405732",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 6.5,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "6.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 15:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹150 OFF",
//         subHeader: "ABOVE ₹599",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kabir-restaurant-gurukul-memnagar-ahmedabad-36780",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "114323",
//       name: "Iscon Thal",
//       cloudinaryImageId: "bd68ec66db6e8459145694c17f5aecde",
//       locality: "SG Road",
//       areaName: "Satellite",
//       costForTwo: "₹200 for two",
//       cuisines: ["Gujarati", "Thalis", "Indian", "Sweets", "Desserts", "Jain"],
//       avgRating: 4.2,
//       veg: true,
//       feeDetails: {
//         restaurantId: "114323",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 6100,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 6100,
//       },
//       parentId: "107384",
//       avgRatingString: "4.2",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 31,
//         lastMileTravel: 8,
//         serviceability: "SERVICEABLE",
//         slaString: "31 mins",
//         lastMileTravelString: "8.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 15:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹150 OFF",
//         subHeader: "ABOVE ₹399",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/iscon-thal-sg-road-satellite-ahmedabad-114323",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "395939",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Panchwati Cross",
//       areaName: "Paldi & Ambawadi",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 3.9,
//       feeDetails: {
//         restaurantId: "395939",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3300,
//       },
//       parentId: "547",
//       avgRatingString: "3.9",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 17,
//         lastMileTravel: 1.7,
//         serviceability: "SERVICEABLE",
//         slaString: "17 mins",
//         lastMileTravelString: "1.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-25 04:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kfc-panchwati-cross-paldi-and-ambawadi-ahmedabad-395939",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "81814",
//       name: "Burger King",
//       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       locality: "3rd Eye II,CG Road",
//       areaName: "Ellisbridge",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "81814",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "166",
//       avgRatingString: "4.1",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 1.7,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "1.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-25 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "EVERY ITEM",
//         subHeader: "@ ₹129",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/burger-king-3rd-eye-ii-cg-road-ellisbridge-ahmedabad-81814",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "36969",
//       name: "Domino's Pizza",
//       cloudinaryImageId: "il4hgznny2evcxg607h5",
//       locality: "Near Law Garden",
//       areaName: "Ellisbridge",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//       avgRating: 3.9,
//       veg: true,
//       feeDetails: {
//         restaurantId: "36969",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "2456",
//       avgRatingString: "3.9",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 25,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:57:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹999",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/dominos-pizza-near-law-garden-ellisbridge-ahmedabad-36969",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "91930",
//       name: "Swati Snacks",
//       cloudinaryImageId: "g6xg0octgknysvln5wxd",
//       locality: "Ellis Bridge",
//       areaName: "Ellisbridge",
//       costForTwo: "₹600 for two",
//       cuisines: [
//         "Gujarati",
//         "Indian",
//         "South Indian",
//         "Desserts",
//         "Ice Cream",
//         "Beverages",
//       ],
//       avgRating: 4.6,
//       veg: true,
//       feeDetails: {
//         restaurantId: "91930",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3300,
//       },
//       parentId: "8581",
//       avgRatingString: "4.6",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 1.7,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "1.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 22:30:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//             description: "OnlyOnSwiggy",
//           },
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "OnlyOnSwiggy",
//                   imageId:
//                     "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//                 },
//               },
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/swati-snacks-ellis-bridge-ellisbridge-ahmedabad-91930",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "49562",
//       name: "Season 9",
//       cloudinaryImageId: "nmtw1jxfhkurmmyosfly",
//       locality: "Shivalik Yash",
//       areaName: "Naranpura",
//       costForTwo: "₹300 for two",
//       cuisines: ["Indian", "Chinese", "Continental"],
//       avgRating: 4,
//       veg: true,
//       feeDetails: {
//         restaurantId: "49562",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 4700,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 4700,
//       },
//       parentId: "179676",
//       avgRatingString: "4.0",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 33,
//         lastMileTravel: 5,
//         serviceability: "SERVICEABLE",
//         slaString: "33 mins",
//         lastMileTravelString: "5.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/season-9-shivalik-yash-naranpura-ahmedabad-49562",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "419924",
//       name: "Jayhind Sweets",
//       cloudinaryImageId: "takhc38rjdd0xmhllmve",
//       locality: "Manekchowk",
//       areaName: "LalDarwaja",
//       costForTwo: "₹250 for two",
//       cuisines: ["Sweets", "Desserts", "Indian"],
//       avgRating: 4.4,
//       veg: true,
//       feeDetails: {
//         restaurantId: "419924",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "4419",
//       avgRatingString: "4.4",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 2.2,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "2.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 20:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "20% OFF",
//         subHeader: "UPTO ₹50",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/jayhind-sweets-manekchowk-laldarwaja-ahmedabad-419924",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "36676",
//       name: "Jugaad Nights",
//       cloudinaryImageId: "ptqijjpjqkoxszwo0qtn",
//       locality: "Swastik Society",
//       areaName: "Navrangpura",
//       costForTwo: "₹400 for two",
//       cuisines: ["Thalis", "Indian", "Chinese", "North Indian", "Beverages"],
//       avgRating: 4.2,
//       veg: true,
//       feeDetails: {
//         restaurantId: "36676",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "5244",
//       avgRatingString: "4.2",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 2.6,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "2.6 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 15:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/jugaad-nights-swastik-society-navrangpura-ahmedabad-36676",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "131419",
//       name: "The Shake Maker",
//       cloudinaryImageId: "dferqhtglrgwiaypa5vg",
//       locality: "Paldi",
//       areaName: "Paldi",
//       costForTwo: "₹250 for two",
//       cuisines: ["Beverages"],
//       avgRating: 4.6,
//       feeDetails: {
//         restaurantId: "131419",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "5303",
//       avgRatingString: "4.6",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 2.5,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "2.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:31:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹100 OFF",
//         subHeader: "ABOVE ₹999",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/the-shake-maker-paldi-ahmedabad-131419",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "45037",
//       name: "Mocha",
//       cloudinaryImageId: "becb6f10a63f391672c48c16ed00e9de",
//       locality: "Navrangpura",
//       areaName: "Navrangpura",
//       costForTwo: "₹600 for two",
//       cuisines: [
//         "American",
//         "Italian",
//         "Indian",
//         "Jain",
//         "Bakery",
//         "Beverages",
//         "Continental",
//         "Desserts",
//         "Pastas",
//         "Pizzas",
//         "Thai",
//       ],
//       avgRating: 4.5,
//       feeDetails: {
//         restaurantId: "45037",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3300,
//       },
//       parentId: "5417",
//       avgRatingString: "4.5",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 2.1,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "2.1 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:15:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "40% OFF",
//         subHeader: "UPTO ₹100",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/mocha-navrangpura-ahmedabad-45037",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "50934",
//       name: "Choice Snack Bar",
//       cloudinaryImageId: "sj8eh6dtxlplwc5a5vl3",
//       locality: "C G Road",
//       areaName: "Navrangpura",
//       costForTwo: "₹450 for two",
//       cuisines: ["Beverages"],
//       avgRating: 4.3,
//       veg: true,
//       feeDetails: {
//         restaurantId: "50934",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "4866",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 2.4,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "2.4 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "10% OFF",
//         subHeader: "UPTO ₹40",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/choice-snack-bar-c-g-road-navrangpura-ahmedabad-50934",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "37578",
//       name: "Gwalia Sweets & Fast Food",
//       cloudinaryImageId: "mglb0z3qdofmpfd7qauw",
//       locality: "Stadium Circle",
//       areaName: "Navrangpura",
//       costForTwo: "₹300 for two",
//       cuisines: [
//         "Sweets",
//         "North Indian",
//         "Chaat",
//         "Snacks",
//         "Bakery",
//         "Desserts",
//         "Beverages",
//       ],
//       avgRating: 4.4,
//       veg: true,
//       feeDetails: {
//         restaurantId: "37578",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "92340",
//       avgRatingString: "4.4",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 16,
//         lastMileTravel: 2.2,
//         serviceability: "SERVICEABLE",
//         slaString: "16 mins",
//         lastMileTravelString: "2.2 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 22:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "40% OFF",
//         subHeader: "UPTO ₹80",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-stadium-circle-navrangpura-ahmedabad-37578",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "40837",
//       name: "1944 The Hocco Kitchen",
//       cloudinaryImageId: "mparwfx5mpi5k3hrbc24",
//       locality: "Navrangpura Bus Stand",
//       areaName: "Navrangpura",
//       costForTwo: "₹500 for two",
//       cuisines: ["North Indian"],
//       avgRating: 4.4,
//       veg: true,
//       feeDetails: {
//         restaurantId: "40837",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 3300,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 3300,
//       },
//       parentId: "22966",
//       avgRatingString: "4.4",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 2,
//         serviceability: "SERVICEABLE",
//         slaString: "18 mins",
//         lastMileTravelString: "2.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "newg.png",
//             description: "Gourmet",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "Gourmet",
//                   imageId: "newg.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/1944-the-hocco-kitchen-bus-stand-navrangpura-ahmedabad-40837",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "72430",
//       name: "Vipul Dudhiya Sweets",
//       cloudinaryImageId: "sdatp7pqqctty8i3j3t8",
//       locality: "Mahalaxmi Cross Road",
//       areaName: "Paldi",
//       costForTwo: "₹300 for two",
//       cuisines: ["Sweets", "Snacks"],
//       avgRating: 4.5,
//       veg: true,
//       feeDetails: {
//         restaurantId: "72430",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "223924",
//       avgRatingString: "4.5",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 15,
//         lastMileTravel: 1.9,
//         serviceability: "SERVICEABLE",
//         slaString: "15 mins",
//         lastMileTravelString: "1.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 20:30:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "FREE ITEM",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/vipul-dudhiya-sweets-mahalaxmi-cross-road-paldi-ahmedabad-72430",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "40831",
//       name: "Subway",
//       cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
//       locality: "Mithakali",
//       areaName: "Navrangpura",
//       costForTwo: "₹350 for two",
//       cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
//       avgRating: 4,
//       feeDetails: {
//         restaurantId: "40831",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "2",
//       avgRatingString: "4.0",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 1.8,
//         serviceability: "SERVICEABLE",
//         slaString: "18 mins",
//         lastMileTravelString: "1.8 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "30% OFF",
//         subHeader: "UPTO ₹75",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/subway-mithakali-navrangpura-ahmedabad-40831",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "47589",
//       name: "Pizza Hut",
//       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       locality: "City Gold Complex",
//       areaName: "Navrangpura",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 3.8,
//       feeDetails: {
//         restaurantId: "47589",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "721",
//       avgRatingString: "3.8",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 28,
//         lastMileTravel: 1.5,
//         serviceability: "SERVICEABLE",
//         slaString: "28 mins",
//         lastMileTravelString: "1.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-25 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/pizza-hut-city-gold-complex-navrangpura-ahmedabad-47589",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "378472",
//       name: "La Pino'z Pizza",
//       cloudinaryImageId: "haujstay6r8mbuxfgwzq",
//       locality: "Maninagar",
//       areaName: "KHOKHARA",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
//       avgRating: 4.2,
//       veg: true,
//       feeDetails: {
//         restaurantId: "378472",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 5400,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 5400,
//       },
//       parentId: "4961",
//       avgRatingString: "4.2",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 34,
//         lastMileTravel: 6.3,
//         serviceability: "SERVICEABLE",
//         slaString: "34 mins",
//         lastMileTravelString: "6.3 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-24 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹399",
//         discountTag: "FLAT DEAL",
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-maninagar-khokhara-ahmedabad-378472",
//       type: "WEBLINK",
//     },
//   },
//   {
//     info: {
//       id: "62979",
//       name: "LunchBox - Meals and Thalis",
//       cloudinaryImageId: "ohhbevxuw3iucwxw3x09",
//       locality: "SV Desai Marg",
//       areaName: "CG Road RK",
//       costForTwo: "₹200 for two",
//       cuisines: [
//         "Biryani",
//         "North Indian",
//         "Punjabi",
//         "Healthy Food",
//         "Desserts",
//         "Beverages",
//       ],
//       avgRating: 4.1,
//       feeDetails: {
//         restaurantId: "62979",
//         fees: [
//           {
//             name: "BASE_DISTANCE",
//             fee: 2800,
//           },
//           {
//             name: "BASE_TIME",
//           },
//           {
//             name: "ANCILLARY_SURGE_FEE",
//           },
//         ],
//         totalFee: 2800,
//       },
//       parentId: "4925",
//       avgRatingString: "4.1",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 2.5,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "2.5 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-08-25 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         discountCalloutInfo: {
//           message: "Free Delivery",
//           logoCtx: {
//             logo: "v1655895371/free_delivery_logo_hqipbo.png",
//           },
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {},
//     cta: {
//       link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sv-desai-marg-cg-road-rk-ahmedabad-62979",
//       type: "WEBLINK",
//     },
//   },
// ];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.w3schools.com/images/picture.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((res, i) =>{
            return <RestaurantCard resData={res} key={res.info.id} />
          })
        }
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId}  = resData?.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId
          }
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

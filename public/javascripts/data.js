module.exports = {
    "users" : [
        {
            "user_id" : 0,
            "username" : "Komanta1",
            "email" : "tyronwyt@gmail.com",
            "first_name" : "Tyron",
            "last_name" : "Wytrykowski",
            "packages" : [ 
                {
                    "booking_id" : "VIV001",
                    "date" : "03/10/2019",
                    "days" : 12,
                    "destination" : "Cape Town",
                    "destination_slug" : "cape_town",
                    "pax" : 2,
                    "itinerary" : [
                            {  "date" : "03/10/2019",
                                "time" : "16:00",
                                "description" : "Depart London Gatwick International Airport",
                                "action" : "fa-plane" 
                            },
                            {  "date" : "03/11/2019",
                                "time" : "07:00",
                                "description" : "Land at Cape Town International Airport",
                                "action" : "fa-plane" 
                            },
                            {  "date" : "03/11/2019",
                                "time" : "07:40",
                                "description" : "Shuttle transfer from airport to Hotel",
                                "action" : "fa-shuttle-van" 
                            },
                            {  "date" : "03/11/2019",
                                "time" : "08:30",
                                "description" : "Check Baggage into Table Bay Hotel",
                                "action" : "fa-concierge-bell" 
                            },
                            {  "date" : "03/11/2019",
                                "time" : "free",
                                "description" : "Relax and spend your first evening settling into your hotel and enjoying a dip in the pool.",
                                "action" : "fa-umbrella-beach" 
                            },
                            {  "date" : "03/12/2019",
                                "time" : "10:00",
                                "description" : "Explore the exciting Victoria & Alfred Waterfront, where there's an abundance of shops, restaurants and entertainment to delve into",
                                "action" : "fa-shopping-bag" 
                            },
                            {  "date" : "03/12/2019",
                                "time" : "14:00",
                                "description" : "Visit Robben Island, where you can learn about South Africa's turbulent past and see the prison where Nelson Mandela was kept for 18 years",
                                "action" : "fa-map-marked-alt" 
                            },
                        ]
                },
                {
                    "booking_id" : "VIV002",
                    "date" : "10/03/2019",
                    "days" : 12,
                    "destination" : "Singapore",
                    "destination_slug" : "singapore",
                    "pax" : 2,
                    "itinerary" : [
                        {  "date" : "10/03/2019",
                            "time" : "16:00",
                            "description" : "Depart London Gatwick International Airport",
                            "action" : "depart_air" 
                        },
                        {  "date" : "10/03/2019",
                            "time" : "07:00",
                            "description" : "Land at Cape Town International Airport",
                            "action" : "land_air" 
                        },
                    ]
                },
            ] 
        },
    ]
}
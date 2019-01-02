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
                                "action" : "depart_air" 
                            },
                            {  "date" : "03/11/2019",
                                "time" : "07:00",
                                "description" : "Land at Cape Town International Airport",
                                "action" : "land_air" 
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
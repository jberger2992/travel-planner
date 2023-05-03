# Travel Planner

* GET route `/api/travellers` returns all traveller data without associated trips in Insomnia.

* POST route `/api/travellers` creates traveller data and returns a successful response in Insomnia.

* GET route `/api/travellers/:id` returns a single traveller's data with their associated trips and a list of locations in Insomnia. 

* DELETE route `/api/travellers/:id` removes a traveller and any trips associated with them and returns a successful response in Insomnia.

* POST route `/api/trips` creates trip data between associated travellers and locations.

* DELETE route `/api/trips/:id` removes a trip and returns a successful response in Insomnia.
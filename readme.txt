This document is for intentional purposes only - this functionality may be partial or incomplete until noted otherwise.

List of commands:


/newTrade [username]
This command will open a new trade with the user passed in to the [username] argument. A trade ID will be assigned dynamically, based on a continuous sequence of existing trade IDs in the current guild/server.
For example, if a guild/server already has trades that have been started across various other users, the trade ID may be id:001149 if this is the 1,149th trade (assuming a 6-digit sequence from zero). 
These trade IDs are intended to be stored in an external database, and/or inside this bot.
An example of an entry here might be /opentrade [damnablebear].

/activateTrade [tradeId] [itemsSent]
While the /newTrade command technically starts the trade and generates a trade ID, the /activateTrade command allows a user to enter a trade ID and a description of the items they will be sending.
An example of an entry here might be [001149] [one million dollars and a really nice sandwich].
Both users in a trade will need to do this in order for a trade to become active.

/activeTradeList
This command will display one or more lines as a response. 
Each line will have a trade ID listed, along with the users and their sent item descriptions provided when the trade was started. 
This will only display active trades and not 'new' or 'closed' trades. It will however display active trades where the opposing trader has finished their side and the current trader has not.
An example response might read: 
[001149] [damnablebear] [one million dollars and a really nice sandwich] | [couchSitter760] [one million dollars]
[004482] [mechaGator] [a sealed WATA 1.0-rated copy of Barbie Horse Adventures for Playstation] | [bigLargeMan251] [5 cents]
following the template of:
[tradeID] [user1] [user1SentItems] | [user2] [user2SentItems]

/addTracking [tradeId] [trackingNum] [courierService]
This command will let a user add tracking to a given trade ID, and the tracking will tie to that user's end of the trade. If I, as damnablebear, used this command like this:
/addTracking [001149] [940037000292389312] [USPS]
...then the tracking number would get added to the items that I'm sending.
It is intended that there is/will be validation between the courier service noted and the format of the tracking number provided.
Courier can be entered as "N/A", "NA", or "None" and no validation will take place - this is useful if sending money or digital goods.
The other trader will be notified that tracking has been added for their incoming item(s).

/checkMyTracking [tradeId]
This command lets the user check their own (sent item's) tracking for the given trade ID.
An example entry might be /checkMyTracking [001149].
An example output would (theoretically) show the tracking number, the ETA/Expected Arrival date, and the latest status in the courier's API - i.e. "Delivered", "Arrived at Post Office", "Out for Delivery". 
i.e. [001149] [940037000292389312] [USPS] [ETA: 02/29/2023] [Arrived at Post Office]

/checkTracking [tradeId]
This command lets the user check the tracking for the incoming (opposite trader's) items. 
An example entry might be /checkTracking [001149].
An example output would (theoretically) show the tracking number, the ETA/Expected Arrival date, and the latest status in the courier's API - i.e. "Delivered", "Arrived at Post Office", "Out for Delivery". 
i.e. [001149] [940037006546135489] [USPS] [ETA: 03/06/2023] [Pre-Shipping Info Created]

/finishTrade [tradeId]
This command lets the user close their side of the trade, indicating that their trader's item(s) have been received. It takes both users performing this action for a trade to be closed.
Taking this action will send a message to the opposing trader, informing them that the user has closed their side of the trade.
An example output back to the user might read: 
"Thank you - you have closed your side of the trade for trade ID [001149]. We will notify your trade partner of this action."

/help
Provides a numbered help menu (possibly?) stating something like:
Please specify what you would like help with:
1 - Creating a new trade
2 - Activating a trade
3 - Adding tracking information
4 - Checking incoming / outgoing tracking information
5 - Finishing a trade
6 - Rankings
7 - General information on trade progression
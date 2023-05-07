## Front end for hosting data gathered from an Arduino

### Goals:
A rough approximation can be found [here](https://learn.microsoft.com/en-us/archive/blogs/israelo/streaming-iot-telemetry-to-azure-event-hub-part-1). The link is outdated, so revisions are likely.
* Realtime data is collected by an Arduino and sent to a server.
* The server stores that data in a database.
* Azure collects the data, processes it, and stores it.
* This repo then fetches that data from Azure and shows it to the user.

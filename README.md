Quick demo of handling client skew when checking time on server.

- run the server: `node server`
- run the client: `npx serve app`

Try changing your machine's timezone, and/or turning off automatic date/time
to make your machine have a skewed value for seconds since the Unix epoch -
the client app should still correctly calculate the server time in these cases.

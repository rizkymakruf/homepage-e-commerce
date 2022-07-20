import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import fetchJson, { FetchError } from "lib/fetchJson";
import checker from "lib/checker";
import refreshToken from "lib/refresh";

export default withIronSessionApiRoute(async (req, res) => {

  var user = await req.session.user;

  const check = await checker( user.access_token )
  const resCheck = await JSON.parse(check)

  if (resCheck.error) {
    const refresh = await refreshToken( user.refresh_token )
    const resRef = await JSON.parse(refresh)

    if (resRef.error) {
      await req.session.destroy();
      res.status(500).json({ message: resRef.error });
    }

    user = { isLoggedIn: true, access_token: resRef.data.access_token, refresh_token: resRef.data.refresh_token };
    req.session.user = user;
    await req.session.save();
  }

  user = await req.session.user;

  try {
    let resx = await fetchJson(`${process.env.SERVICE_URL}${req.body.uri}`, {
                  method: `PUT`,
                  headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + user.access_token },
                  body: JSON.stringify(req.body),
                 });

     res.status(200).json(resx)
   } catch (error) {
     res.status(500).json({ message: error.data });
   }

}, sessionOptions);

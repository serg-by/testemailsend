export default async function handler(req, res){
    const {email, name, message} = JSON.parse(req.body);

    if(!email || !name || !message) {
        return res.status(404).json({error: "Missinf Fields"})
    }
if(req.method !== "POST") {
    return res.status(405).json({error: "Method not allowed"})
}
// const request = await fetch('https://api.airtable.com/v0/appAHdmWAJXY63PvG/tesnow',{
const request = await fetch('https://api.telegram.org/bot5434566567:AAF9DWIaN1Pk9eCBdU1BezfxhCND_E2r41c/sendMessage',{
    method: 'POST',
    headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        'Content-Type': "application/json"
    },
    body: JSON.stringify({fields: {name, message, email}})
});

if(request.ok){
    return res.status(200).json({data: "ok"});
}
return res.status(400).json({error: "error returned"});

}

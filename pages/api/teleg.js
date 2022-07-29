export default async function handler(req, res){
    const {email, name, message} = JSON.parse(req.body);

    if(!email || !name || !message) {
        return res.status(404).json({error: "Missinf Fields"})
    }
if(req.method !== "POST") {
    return res.status(405).json({error: "Method not allowed"})
}

const chat_id = '500354566';
    
const request = await fetch('https://api.telegram.org/bot5434566567:AAF9DWIaN1Pk9eCBdU1BezfxhCND_E2r41c/sendMessage',{
    method: 'POST',
    headers: {
        headers: { "Content-Type": "application/json" },
        'Content-Type': "application/json"
    },
    body: JSON.stringify({ chat_id, text }),
});

if(request.ok){
    return res.status(200).json({data: "ok"});
}
return res.status(400).json({error: "error returned"});

}

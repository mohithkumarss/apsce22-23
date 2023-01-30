const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/',(req,res)=>{
    console.log(req.body);

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'apsceadmission@gmail.com',
                clientId: '174977354751-sjhujjmcmfphbvdn53g3i30ur7cu4d1a.apps.googleusercontent.com',
                clientSecret: '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',
                refreshToken: '1//04NY2ZLMQameYCgYIARAAGAQSNwF-L9IrxQ2zy5gWd8_muvfBO-ZbCfNaGKEX65C1qdP2d39FF8VdFPD1xmSFKXeH3mmPMYJBnpU',
                accessToken: 'ya29.A0ARrdaM-rr6ws6xS--MqCuyyS_gTguLm0VrCBj71qipYlK2wTFS6l13i75BUAF6B2AUA5NBQvYjagNMJQ85N8HSTjgNmuW4M2PcE_2MeHKNYkROKgluMx-0TEeoWKmfwuQX-V8sgwsTIQcgGvqDJ2W_ikzJH8',
                
            }
        });

    const mailOptions = {
        from:req.body.email,
        to:'sriharshasimha@gmail.com',
        subject:` ${req.body.name}: wants to connect with you. Phone: ${req.body.phone}`,
        text:`Department: ${req.body.department},
        Year of Graduation:${req.body.passoutyear},
        Company:${req.body.company},
        Designation:${req.body.designation}`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');

        }
        else{
            console.log('Email sent:' + info.response);
            res.send('success')
        }
    })
    
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
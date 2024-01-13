const db = require('knex')(require('../Configuration/DBConfig')['development']);

exports.addCamera = (async(req,res)=>{
    const {uid,longitude,latitude,rtsp,pov,resolution}=req;
    try {
        const cam = await db('cameras')
                .insert({
                    owner_id:uid,
                    longitude:longitude,
                    latitude:latitude,
                    resolution:resolution,
                    pov_direction:pov,
                    RTSP_Link:rtsp
                }).returning('*');
                console.log("camera added ",cam);
        return res.status(200).json({success:true,message:"Camera Successfully Added"});
    } catch (error) {
        console.log(error.message);
        return res.status(403).json({success:false,message:"unknown Error"});
    }
});
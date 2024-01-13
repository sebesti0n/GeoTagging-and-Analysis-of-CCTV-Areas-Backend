const db = require('knex')(require('../Configuration/DBConfig')['development']);

exports.addCamera = (async(req,res)=>{
    const {owner_id,longitude,latitude,RTSP_Link,pov_direction,resolution}=req;
    try {
        const cam = await db('cameras')
                .insert({
                    owner_id:owner_id,
                    longitude:longitude,
                    latitude:latitude,
                    resolution:resolution,
                    pov_direction:pov_direction,
                    RTSP_Link:RTSP_Link
                }).returning('*');
                console.log("camera added ",cam);
        return res.status(200).json({success:true,message:"Camera Successfully Added"});
    } catch (error) {
        console.log(error.message);
        return res.status(403).json({success:false,message:"unknown Error"});
    }
});
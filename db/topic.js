const Joi=require('joi');
const db=require('./connection');

const schema=Joi.object().keys({
    title:Joi.string().alphanum().required(),
    description:Joi.string().required(),
    docurl:Joi.string().uri(
        {
            scheme:[
                /https?/
            ]
        }
    )

});

const topics=db.get('topics');


function getTopics(){

    return topics.find();
}
function create(topic){
    const result=Joi.validate(topic, schema);
    if(result.error==null){
        topic.created= new Date();
        return topics.insert(topic);
    }else{
        return Promise.reject(result.error);
    }
    
}
module.exports={
    create,
    getTopics
}
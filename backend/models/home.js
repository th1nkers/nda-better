const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subLinkSchema = new Schema({
    linksHeader: { type: String, required: true },
    links: { type: String, required: true }
});

const subNavSchema = new Schema({
    subHeader: { type: String, required: true },
    subIcon: {type: String, required: true},
    subLinksHeader: [subLinkSchema],
    subPara: { type: String, required: true },
    subImgUrl: { type: String, required: true }
});

const slidesDataSchema = new Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    detail: { type: String, required: true }
});

const architecturalDataSchema = new Schema({
    imgUrl: { type: String, required: true },
    header: { type: String, required: true },
    detail: { type: String, required: true }
});

const commandantMsgSchema = new Schema({
    commandantImgPath: { type: String, required: true },
    para: { type: String, required: true },
    writer: { type: String, required: true },
    position: { type: String, required: true },
    metaDetail: { type: String, required: true }
});

const homeSchema = new Schema({
    navData: [subNavSchema],
    slidesData: [slidesDataSchema],
    architecturalData: [architecturalDataSchema],
    commandant_msg: [commandantMsgSchema]
});

module.exports = mongoose.model('Home', homeSchema);

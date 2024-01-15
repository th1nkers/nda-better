const Page = require('../models/page');
const Home = require('../models/home'); 
const HttpError = require('../models/http-error');

const getHomeData = async (req, res, next) => {
  let homeData;
  try {
    homeData = await Page.findById("65a4b7d6ec5a6ad171155c77").populate('home');
  } catch (err) {
    console.log(err);
    const error = new HttpError('Fetching homepage failed, please try again later.', 500);
    return next(error);
  }
  res.status(200).json(homeData);
};

exports.getHomeData = getHomeData;

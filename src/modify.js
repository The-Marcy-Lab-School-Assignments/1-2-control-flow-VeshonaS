const wildlyBiasedReview = (location) => {
  if (location === 'NYC') return ('THE GREATEST CITY IN THE WORLD');
   if (location === 'NYC')return ('THE CITY THAT NEVER SLEEPS');
    if (location === 'NYC')return ('WOW WHAT A CITY');
  else {
    return ('Yea that place is cool I guess');
  }
};
wildlyBiasedReview('NYC')
module.exports = {
  wildlyBiasedReview,
};

const wildlyBiasedReview = (location) => {
  if (location === 'NYC')console.log('THE GREATEST CITY IN THE WORLD');
   if (location === 'NYC')console.log('THE CITY THAT NEVER SLEEPS');
    if (location === 'NYC')console.log('WOW WHAT A CITY');
  else {
    console.log('Yea that place is cool I guess');
  }
};
wildlyBiasedReview('NY')
module.exports = {
  wildlyBiasedReview,
};

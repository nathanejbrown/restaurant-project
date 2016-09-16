exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert(
          {
            name: 'Nathan\'s Nerd Food',
            type: 'American',
            pic_url: 'https://static.pexels.com/photos/5317/food-salad-restaurant-person-medium.jpg',
            description: 'When other websites give you text, they\’re not sending the best. They’re not sending you, they\’re sending words that have lots of problems and they\’re bringing those problems with us. They\’re bringing mistakes. They\’re bringing misspellings. They\’re typists… And some, I assume, are good words. He\’s not a word hero. He\’s a word hero because he was captured. I like text that wasn\’t captured.'
          }),
        knex('restaurants').insert(
          {
            name: 'RestauRyanT',
            type: 'Steakhouse',
            pic_url: 'https://static.pexels.com/photos/65175/pexels-photo-65175-medium.jpeg',
            description: 'Look at these words. Are they small words? And he referred to my words - if they\'re small, something else must be small. I guarantee you there\'s no problem, I guarantee. You\’re disgusting.'
          }),
        knex('restaurants').insert(
          {
            name: 'Tommy\'s Tapas',
            type: 'Tapas', pic_url: 'https://static.pexels.com/photos/5929/food-salad-dinner-eating-medium.jpg',
            description: 'Be careful, or I will spill the beans on your placeholder text. If Trump Ipsum weren\’t my own words, perhaps I\’d be dating it. I\'m speaking with myself, number one, because I have a very good brain and I\'ve said a lot of things. That other text? Sadly, it\’s no longer a 10. Does everybody know that pig named Lorem Ipsum? She\'s a disgusting pig, right?'
          }),
        knex('restaurants').insert(
          {
            name: 'Goergies Gyro\'s',
            type: 'Greek',
            pic_url: 'https://static.pexels.com/photos/5931/food-salad-healthy-black-medium.jpg',
            description: 'I\’m the best thing that ever happened to placeholder text.'
          }),
        knex('restaurants').insert(
          {
            name: 'Ice-Soup House',
            type: 'Ramen', pic_url: 'https://static.pexels.com/photos/8717/food-pot-kitchen-cooking-medium.jpg',
            description: 'It\’s about making placeholder text great again. That\’s what people want, they want placeholder text to be great again. Lorem Ipsum\'s father was with Lee Harvey Oswald prior to Oswald\'s being, you know, shot. Does everybody know that pig named Lorem Ipsum? She\'s a disgusting pig, right? An ‘extremely credible source’ has called my office and told me that Barack Obama\’s placeholder text is a fraud. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive.'
          }),
        knex('restaurants').insert(
          {
            name: 'Dennis\' Homestyle Cooking', type: 'American',
            pic_url: 'https://static.pexels.com/photos/70497/pexels-photo-70497-medium.jpeg',
            description: 'I\'m speaking with myself, number one, because I have a very good brain and I\'ve said a lot of things. It\’s about making placeholder text great again. That\’s what people want, they want placeholder text to be great again. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That\'s to be expected. My placeholder text, I think, is going to end up being very good with women. You know, it really doesn\’t matter what you write as long as you\’ve got a young, and beautiful, piece of text. You know, it really doesn\’t matter what you write as long as you\’ve got a young, and beautiful, piece of text. I know words. I have the best words.'
          }),
        knex('restaurants').insert(
          {
            name: 'Vickstrom Vino',
            type: 'Italian',
            pic_url: 'https://static.pexels.com/photos/5249/bread-food-restaurant-people-medium.jpg',
            description: 'He\’s not a word hero. He\’s a word hero because he was captured. I like text that wasn\’t captured. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?!'
          }),
        knex('restaurants').insert(
          {
            name: 'Harings the Ham',
            type: 'BBQ', pic_url: 'https://static.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131-medium.jpeg',
            description: 'An ‘extremely credible source’ has called my office and told me that Barack Obama\’s placeholder text is a fraud. When other websites give you text, they\’re not sending the best. They\’re not sending you, they\’re sending words that have lots of problems and they\’re bringing those problems with us. They\’re bringing mistakes. They\’re bringing misspellings. They\’re typists… And some, I assume, are good words.'
          }),
        knex('restaurants').insert(
          {
            name: 'Gaessler\'s Gazpacho',
            type: 'Tapas',
            pic_url: 'https://static.pexels.com/photos/66639/pexels-photo-66639-medium.jpeg',
            description: 'Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. The other thing with Lorem Ipsum is that you have to take out its family. Be careful, or I will spill the beans on your placeholder text. Does everybody know that pig named Lorem Ipsum? She\'s a disgusting pig, right?'
          }),
        knex('restaurants').insert(
          {
            name: 'Fabulous Fourth-Meal',
            type: 'Steakhouse',
            pic_url: 'https://static.pexels.com/photos/109395/pexels-photo-109395-medium.jpeg',
            description: 'My text is long and beautiful, as, it has been well documented, are various other parts of my website. I\’m the best thing that ever happened to placeholder text. It\’s about making placeholder text great again. That\’s what people want, they want placeholder text to be great again.'
          })
      ]);
    });
};

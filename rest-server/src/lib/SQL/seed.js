import db from '../../config/database/index.js'


export const createSeedUsers = async () => {
   try{
       let query = "insert into users values (1, 'Danieo Sanchez', 'damndanieo@skynet.com', 'asdj4569ssf90', 'https://media.mnn.com/assets/images/2015/09/river-otters-lead-photo.jpg.638x0_q80_crop-smart.jpg', 0, 0, 0, 0.05, 323)"
        await db.queryAsync(query)
        console.log('user seed data 1 inserted'); 
   } catch (err) {
        console.log('user seed data 1 did not insert', err)
   }
   try{
        let query = "insert into users values (2, 'Chris King-Kong', 'emergency@poopvan.com', 'asdf823r9asd', 'https://images-na.ssl-images-amazon.com/images/I/513Y54TGdwL._SY445_.jpg', 0, 0, 0, 2.2, 43)"
        await db.queryAsync(query)
        console.log('user seed data 2 inserted'); 
    } catch (err) {
        console.log('user seed data 2 did not insert', err)
    }try{
        let query = "insert into users values (3, 'Brian Hong', 'briguy@aol.com', 'asdfi34309', 'https://www.google.com/imgres?imgurl=https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png&imgrefurl=https://www.pokemon.com/us/pokedex/oddish&h=215&w=215&tbnid=WrwAjzyZuIzfJM:&tbnh=186&tbnw=186&usg=__CSzNNoD5rLyNQI3NT7NIN5qNubI%3D&vet=10ahUKEwj8oceH24LZAhUH7mMKHdEdCP0Q_B0ItAEwEw..i&docid=49mknwwZxyCNfM&itg=1&sa=X&ved=0ahUKEwj8oceH24LZAhUH7mMKHdEdCP0Q_B0ItAEwEw', 1, 3.2, 12, 0, 0)"
        await db.queryAsync(query)
        console.log('user seed data 3 inserted'); 
    } catch (err) {
        console.log('user seed data 3 did not insert', err)
    }try{
        let query = "insert into users values (4, 'ErIc Carmona', 'BballinEric@lakers.com', 'sdiwef23r8nv', 'https://www.google.com/imgres?imgurl=https://cdn-s3.si.com/s3fs-public/teams/basketball/nba/players/214152-300x300.png&imgrefurl=https://www.si.com/nba/player/214152/lebron-james&h=300&w=300&tbnid=Um0-ny3STqIOgM:&tbnh=186&tbnw=186&usg=__mS80Wbc4A7om2qWHMAX-4jeAL6s%3D&vet=10ahUKEwi2pfC83ILZAhVNwWMKHcnjDskQ_B0IwAEwHA..i&docid=l9fHBl84MfA_GM&itg=1&sa=X&ved=0ahUKEwi2pfC83ILZAhVNwWMKHcnjDskQ_B0IwAEwHA', 1, .01, 14, 5, 22)"
        await db.queryAsync(query)
        console.log('user seed data 4 inserted'); 
    } catch (err) {
        console.log('user seed data 4 did not insert', err)
    }
}

export const createSeedListings = async () => {
    try {
        let query = "insert into listings values (1, 'The comfiest dining room bed in the world', '2/3/18', '2/26/18', 1.2032934, 123.2340923, 3, null, 'Need a place to sleep in privacy and comfort? Well then, this is not for you. Come join me for a roof over your head, a comfy bed and a table to eat at, all from the same position.', 'PENDING')"; 
        await db.queryAsync(query); 
        console.log('listing seed data 1 inserted')
    } catch (err) {
        console.log('lising seed data 1 did not insert', err); 
    }

    try {
        let query = "insert into listings values (2, 'Erics bitchin pad', '2/14/18', '2/15/18', 24.3424, 54093.1234, 4, null, 'Come sleep here for some tutuchu tutuchu', 'PENDING') "
        await db.queryAsync(query); 
        console.log('listing seed data 2 inserted'); 
    } catch (err) {
        console.log('listing seed data 2 did not insert', err)
    }
}

export const createSeedRequests = async () => {
    try {
        let query = "insert into requests values (1, 1, 1)"
        await db.queryAsync(query); 
        console.log('request seed data 1 inserted'); 
    } catch (err) {
        console.log('request seed data 1 did not insert')
    }

    try{
        let query = "insert into requests values (2, 3, 2)";
        await db.queryAsync(query); 
        console.log('request seed data 2 inserted'); 
    } catch (err) {
        console.log('request seed data 2 did not insert'); 
    }
}

export const createSeedReviews = async () => {
    try {
        let query = "insert into reviews values (1, null, 5, 'This place was great! I loved the breakfast in bed, it was even right from the table!', 2, 3)"
        await db.queryAsync(query); 
        console.log('review seed data 1 inserted'); 
    } catch (err) {
        console.log('review seed data 1 did not insert')
    }

    try {
        let query = "insert into reviews values (2, null, 0, 'DO NOT BOOK. Host misunderstood my offer to help him make music...', 1, 4)"
        await db.queryAsync(query); 
        console.log('review seed data 2 inserted'); 
    } catch (err) {
        console.log('review seed data 2 did not insert')
    }
}

export const createSeedImages = async () => {
    try {
        let query = "insert into images values (1, 1, 'http://www.westchestergardenapts.com/new/wp-content/uploads/2017/12/interior4.jpg')"
        await db.queryAsync(query); 
        console.log('image seed data 1 inserted'); 
    } catch (err) {
        console.log('image seed data 1 did not insert')
    }

    try {
        let query = "insert into images values (2, 2, 'http://www.topinspired.com/wp-content/uploads/2013/11/Ideas-For-Unforgettable-Romantic-Surprise-1.jpg')"
        await db.queryAsync(query); 
        console.log('image seed data 2 inserted'); 
    } catch (err) {
        console.log('image seed data 2 did not insert')
    }
}

export const createSeedSkills = async () => {
    try {
        let query = "insert into skills values (1, 1, null, 'make music')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 1 inserted')
    } catch (err) {
        console.log('skill seed data 1 did not insert', err)
    }

    try {
        let query = "insert into skills values (2, 1, null, 'teach photography')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 2 inserted')
    } catch (err) {
        console.log('skill seed data 2 did not insert')
    }

    try {
        let query = "insert into skills values (3, 2, null, 'I will teach you to smash anyone in smash bros')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 3 inserted')
    } catch (err) {
        console.log('skill seed data 3 did not insert')
    }

    try {
        let query = "insert into skills values (4, 4, null, 'I can show you how to shoot hoops')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 4 inserted')
    } catch (err) {
        console.log('skill seed data 4 did not insert')
    }

    try {
        let query = "insert into skills values (5, null, 1, 'Do dishes')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 5 inserted')
    } catch (err) {
        console.log('skill seed data 5 did not insert')
    }

    try {
        let query = "insert into skills values (6, null, 2, 'Totochu-totochu')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 6 inserted')
    } catch (err) {
        console.log('skill seed data 6 did not insert')
    }

    try {
        let query = "insert into skills values (7, 3, null, 'I will cook some bomb food')"; 
        await db.queryAsync(query); 
        console.log('skill seed data 7 inserted')
    } catch (err) {
        console.log('skill seed data 7 did not insert')
    }

}

export const createRequestSkill = async () => {
    try {
        let query = "insert into requestSkills values (1, 2, 1)"; 
        await db.queryAsync(query); 
        console.log('RequestSkill seed data 1 inserted')
    } catch (err) {
        console.log('RequestSkill seed data 1 did not insert')
    }; 

    try {
        let query = "insert into requestSkills values (2, 7, 2)"; 
        await db.queryAsync(query); 
        console.log('RequestSkill seed data 2 inserted')
    } catch (err) {
        console.log('RequestSkill seed data 2 did not insert')
    }; 

}

const seedData = async () => {
    await createSeedUsers(); 
    await createSeedListings(); 
    await createSeedRequests(); 
    await createSeedReviews(); 
    await createSeedImages(); 
    await createSeedSkills(); 
    await createRequestSkill(); 
}

seedData(); 
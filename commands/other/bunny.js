const commando = require('discord.js-commando');

class BunnyPicsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bunny',
            group: 'fun',
            memberName: 'bunny',
            description: 'Get a picture of a rabbit!'
        });
    }

    async run (message) {
   
    const bunny_images = [
        "http://s3.amazonaws.com/cute-baby-rabbits/wp-content/uploads/2016/03/27122619/shutterstock_160546226.jpg",
        "https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555462744/shape/mentalfloss/557234-istock-176022518.jpg?itok=vTfujzKh",
        "https://i.pinimg.com/originals/22/a8/d7/22a8d72164ec71862f003974258e9a10.jpg",
        "http://getwallpapers.com/wallpaper/full/c/e/d/1054590-cute-bunnies-wallpaper-1920x1200-for-mac.jpg",
        "https://www.cheatsheet.com/wp-content/uploads/2017/07/Cute-rabbit-sitting-on-marble-surface.jpg",
        "https://worcestervets.co.uk/wp-content/uploads/2018/02/cute-rabbits.png",
        "https://pixfeeds.com/images/21/509352/1200-513384940-cute-little-female-bunny.jpg",
        "https://cdn.thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-020.jpg",
        "https://i.imgur.com/bpOnHEc.jpg",
        "http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-07.jpg",
        "https://d.newsweek.com/en/full/1519575/rabbits-california-neighborhood.jpg",
        "https://d25tv1xepz39hi.cloudfront.net/2016-08-22/files/rabbit-sample_1350-1.jpg",
        "http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-14.jpg",
        "https://i.ytimg.com/vi/Fv5MZFWn7lE/maxresdefault.jpg",
        "https://i.ytimg.com/vi/8BYa0U1h5Fs/hqdefault.jpg",
        "http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-18.jpg",
        "http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-10.jpg",
        "http://www.cuded.com/wp-content/uploads/2013/06/2-Bunny-Picture.jpg",
        "https://i.pinimg.com/originals/4a/43/1f/4a431f438271361eef9856f007acb5eb.jpg",
        "https://i.pinimg.com/originals/4f/f3/d9/4ff3d925ffdf2abb3ce0982cfa420a6e.jpg",
        "https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-28__605.jpg",
        "https://vetstreet-brightspot.s3.amazonaws.com/c3/75/7f18b8cd4fc2be0ad651d60515eb/cute-young-rabbit-thinkstockphotos-471567314-335.jpg",
        "http://images6.fanpop.com/image/photos/41600000/Cute-Bunnies-gdragon612-41682136-564-752.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/45-Bunny-Picture.jpg",
        "http://bhrabbitrescue.org/wp-content/uploads/2015/02/cute-bunnies-27.jpg",
        "https://cdn.thedesigninspiration.com/wp-content/uploads/2014/07/Cute-Rabbits-014.jpg",
        "https://thetempest.co/wp-content/uploads/2018/04/Untitled-design-100.png",
        "https://cdn.discordapp.com/attachments/526614057680240641/628292987633532948/clip_image001.png",
        "https://www.cuded.com/wp-content/uploads/2013/06/2-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/25-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/28-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/31-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/40-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/41-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/42-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/44-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/45-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/6-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/8-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/12-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/14-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/15-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/19-Bunny-Picture.jpg",
        "https://www.cuded.com/wp-content/uploads/2013/06/21-Bunny-Picture.jpg",
        "https://i.pinimg.com/564x/e0/7b/59/e07b59ed6c4c43441be586d48a56ad62.jpg",
        "https://d39l2hkdp2esp1.cloudfront.net/img/photo/150736/150736_00_2x.jpg",
        "https://www.petakids.com/wp-content/uploads/2019/01/bunny.jpg",
        "https://static9.depositphotos.com/1594920/1089/i/600/depositphotos_10897074-stock-photo-two-rabbits-in-front-of.jpg",
        "https://1.bp.blogspot.com/-5WgGTdAwSQI/UZPaPR3pRmI/AAAAAAAACfM/EnbjkU_UBwo/s1600/TRR+_53+Photo+Inspiration.jpg",
        "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2019/12/unsplash-sandy-millar-cute-bunny-rabbit-floppy-ears.jpg",
        "https://cdn.arstechnica.net/wp-content/uploads/2013/04/82C795C8-1DD8-B71C-07793A6439519ECE-640x480.jpg",
        "https://media.tenor.com/images/4e53118980f267b2af70001aa04de451/tenor.gif",
        "https://images6.fanpop.com/image/photos/43000000/cute-bunnies-laura1233214-43062039-564-376.jpg",
        "https://pbs.twimg.com/profile_images/738528951312781312/Lr4e6tBb_400x400.jpg",
        "https://c4.wallpaperflare.com/wallpaper/442/124/958/cute-bunnies-wallpaper-preview.jpg",
        "https://s.abcnews.com/images/Lifestyle/CB_rabbits_06_jef_150403_3x2_1600.jpg",
        "https://2.bp.blogspot.com/-lLVDb9y66RU/T1O-zZuHSUI/AAAAAAAAEAc/eLMHmGqxzVw/s640/cute-bunny-pictures-001.jpg"
    ]

    var randobun = bunny_images[Math.floor(Math.random() * bunny_images.length)]


    var image = {
        "embed": {
        "title": "Bunnies! :rabbit2:",
        "color": 3319968,
        "footer": {
            "text": "LyraBot - Made with ❤️ by Lyra Rose"
        },
        "image": {
          "url": randobun
        }
      }
    }
        message.say(image);
    }
}

module.exports = BunnyPicsCommand;
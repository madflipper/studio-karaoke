import { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import { FaSearch, FaMicrophone, FaPlus } from 'react-icons/fa';

const songData = [
    {
        Title: 'Inget Stoppar Oss Nu',
        Artist: 'Black Jack',
        Comment: 'SKF419-05',
        Length: '03:21',
        'Play Count': 43,
        'File Name': 'SKF419-05 - Black Jack - Inget Stoppar Oss Nu.dat',
    },
    {
        Title: 'Tomas Ledin - Du Kan Lita På Mig',
        Artist: 'SKF02',
        Comment: '',
        Length: '03:14',
        'Play Count': 30,
        'File Name': 'SKF02 - Tomas Ledin - Du Kan Lita På Mig.mp3',
    },
    {
        Title: 'Nikita',
        Artist: 'John, Elton',
        Comment: "Tester2's CD+G Archives.",
        Length: '05:50',
        'Play Count': 29,
        'File Name': 'ZMP106-05 - ELTON JOHN - Nikita.zip',
    },
    {
        Title: 'Easy',
        Artist: 'Commodores, The',
        Comment: 'SC7535-05',
        Length: '04:35',
        'Play Count': 24,
        'File Name': 'SC7535-05 - Commodores, The - Easy.mp3',
    },
    {
        Title: 'Rock The Night',
        Artist: 'Europe',
        Comment: 'SKF11-12',
        Length: '04:15',
        'Play Count': 21,
        'File Name': 'SKF11-12 - Europe - Rock The Night.dat',
    },
    {
        Title: 'Du Är Min Sommar Marie',
        Artist: 'Vikingarna',
        Comment: 'SKF419-02',
        Length: '03:02',
        'Play Count': 19,
        'File Name': 'SKF419-02 - Vikingarna - Du Är Min Sommar Marie.dat',
    },
    {
        Title: 'Gyllene Tider - När Vi Två Blir En',
        Artist: 'GTH',
        Comment: '',
        Length: '03:06',
        'Play Count': 18,
        'File Name': 'GTH - Gyllene Tider - När Vi Två Blir En.dat',
    },
    {
        Title: 'Ticks Brad Paisley',
        Artist: '',
        Comment: '',
        Length: '04:13',
        'Play Count': 18,
        'File Name': 'Ticks Brad Paisley.mov',
    },
    {
        Title: 'The Look',
        Artist: 'Roxette',
        Comment: 'SC8634-11',
        Length: '04:19',
        'Play Count': 17,
        'File Name': 'SC8634-11 - Roxette - The Look.zip',
    },
    {
        Title: 'Then',
        Artist: 'Brad Paisley',
        Comment: '',
        Length: '04:23',
        'Play Count': 16,
        'File Name':
            'Brad_Paisley_Then(Video_Karaoke_with_a_black_background)_57370.mp4',
    },
    {
        Title: 'Tomas Ledin - Just Nu',
        Artist: 'SKF02',
        Comment: '',
        Length: '03:01',
        'Play Count': 15,
        'File Name': 'SKF02 - Tomas Ledin - Just Nu.mp3',
    },
    {
        Title: 'Whiskey In A Jar',
        Artist: 'Metallica',
        Comment: 'SC8531-15',
        Length: '04:53',
        'Play Count': 14,
        'File Name': 'SC8531-15 - Metallica - Whiskey In A Jar.zip',
    },
    {
        Title: 'Suspicious Minds',
        Artist: 'SFG050-01 Presley, Elvis',
        Comment: '',
        Length: '03:59',
        'Play Count': 12,
        'File Name': 'SFG050-01 Presley, Elvis - Suspicious Minds.zip',
    },
    {
        Title: 'Great Balls Of Fire',
        Artist: 'Lewis, Jerry Lee',
        Comment: 'SC7201-14',
        Length: '02:09',
        'Play Count': 11,
        'File Name': 'SC7201-14 - Lewis, Jerry Lee - Great Balls Of Fire.mp3',
    },
    {
        Title: 'Unchain My Heart',
        Artist: 'Cocker, Joe',
        Comment: 'SC7523-09',
        Length: '05:12',
        'Play Count': 11,
        'File Name': 'SC7523-09 - Cocker, Joe - Unchain My Heart.mp3',
    },
    {
        Title: 'Redemption Song',
        Artist: 'Bob Marley & The Wailers',
        Comment: 'LGR02-03',
        Length: '03:55',
        'Play Count': 11,
        'File Name':
            'LGR02-03 - Bob Marley & The Wailers - Redemption Song.mp3',
    },
    {
        Title: 'Night Shift',
        Artist: 'Commodores',
        Comment: 'DKG021-09',
        Length: '04:25',
        'Play Count': 11,
        'File Name': 'DKG021-09 - Commodores - Night Shift.mp3',
    },
    {
        Title: 'Purple Rain',
        Artist: 'Prince',
        Comment: 'SC7542-11',
        Length: '05:03',
        'Play Count': 10,
        'File Name': 'SC7542-11 - Prince - Purple Rain.mp3',
    },
    {
        Title: 'Have You Ever Seen The Rain',
        Artist: 'Creedence Clearwater Revival',
        Comment: 'SC7533-01',
        Length: '02:59',
        'Play Count': 10,
        'File Name':
            'SC7533-01 - Creedence Clearwater Revival - Have You Ever Seen The Rain.mp3',
    },
    {
        Title: 'Devil In Disguise',
        Artist: 'Elvis Presley',
        Comment: 'SC8154-02',
        Length: '02:30',
        'Play Count': 10,
        'File Name': 'SC8154-02 - Elvis Presley - Devil In Disguise.zip',
    },
    {
        Title: 'Tomas Ledin - Lika Hopplöst Förälskad',
        Artist: 'SKF02',
        Comment: '',
        Length: '04:10',
        'Play Count': 10,
        'File Name': 'SKF02 - Tomas Ledin - Lika Hopplöst Förälskad.mp3',
    },
    {
        Title: 'Tomas Ledin - I Natt Är Jag Din',
        Artist: 'SKF02',
        Comment: '',
        Length: '03:58',
        'Play Count': 10,
        'File Name': 'SKF02 - Tomas Ledin - I Natt Är Jag Din (Blues).mp3',
    },
    {
        Title: 'Scotts',
        Artist: '',
        Comment: '',
        Length: '07:29',
        'Play Count': 9,
        'File Name': 'Scotts.mov',
    },
    {
        Title: 'Set You Free',
        Artist: 'N-Trance',
        Comment: '',
        Length: '04:22',
        'Play Count': 8,
        'File Name':
            'N_Trance_Set_You_Free(Video_Karaoke_with_a_colored_background)_10317524.mp4',
    },
    {
        Title: 'Living Years, The',
        Artist: 'Mike & The Mechanics',
        Comment: 'SC8621-06',
        Length: '05:57',
        'Play Count': 8,
        'File Name': 'SC8621-06 - Mike & The Mechanics - Living Years, The.mp3',
    },
    {
        Title: 'Bon Jovi - Living On A Prayer',
        Artist: 'EK 4809',
        Comment: '',
        Length: '04:09',
        'Play Count': 7,
        'File Name': 'EK 4809 - Bon Jovi - Living On A Prayer.mp3',
    },
    {
        Title: "Du Ska Va' President",
        Artist: 'Imperiet',
        Comment: 'SKF11-04',
        Length: '04:17',
        'Play Count': 7,
        'File Name': "SKF11-04 - Imperiet - Du Ska Va' President.dat",
    },
    {
        Title: 'Hon ser inte mig',
        Artist: 'Peter JÃ¶back',
        Comment: 'MidiCo Karaoke v2.30',
        Length: '04:36',
        'Play Count': 7,
        'File Name': 'Peter Jöback - Hon ser inte mig.mp3',
    },
    {
        Title: 'Björn Rosenström - Raggarrock',
        Artist: 'PKS012',
        Comment: '',
        Length: '02:17',
        'Play Count': 7,
        'File Name': 'PKS012 - Björn Rosenström - Raggarrock.mpg',
    },
    {
        Title: 'Still Got The Blues [INSTR]',
        Artist: 'Gary Moore',
        Comment: '',
        Length: '06:09',
        'Play Count': 7,
        'File Name': 'KV - Gary Moore - Still Got The Blues.mp3',
    },
    {
        Title: 'Black',
        Artist: 'Pearl Jam',
        Comment: 'RSZ601-13',
        Length: '05:44',
        'Play Count': 6,
        'File Name': 'RSZ601-13 - Pearl Jam - Black.mp3',
    },
    {
        Title: "Livin' On A Prayer (Unplugged)",
        Artist: 'Bon Jovi',
        Comment: '',
        Length: '04:50',
        'Play Count': 6,
        'File Name': "KV - Bon Jovi - It's My Life (Unplugged).mp3",
    },
    {
        Title: 'Moondance',
        Artist: 'Michael Bublé',
        Comment: '',
        Length: '04:17',
        'Play Count': 6,
        'File Name':
            'Michael_Buble_Moondance(Video_Karaoke_with_a_black_background)_57963.mp4',
    },
    {
        Title: 'Ljus O Värme',
        Artist: 'Vikingarna',
        Comment: 'SKF419-06',
        Length: '03:56',
        'Play Count': 6,
        'File Name': 'SKF419-06 - Vikingarna - Ljus O Värme.dat',
    },
    {
        Title: 'Gyllene Tider - Flickorna På Tv 2',
        Artist: 'GTH',
        Comment: '',
        Length: '03:44',
        'Play Count': 6,
        'File Name': 'GTH - Gyllene Tider - Flickorna På Tv 2.dat',
    },
    {
        Title: 'Zombie',
        Artist: 'Bad Wolves',
        Comment: '',
        Length: '04:16',
        'Play Count': 5,
        'File Name': 'Bad Wolves - Zombie (Karaoke).mp4',
    },
    {
        Title: 'Breaking The Habit',
        Artist: 'Linkin Park',
        Comment: '',
        Length: '03:19',
        'Play Count': 5,
        'File Name': 'KV - Linkin Park - Breaking The Habit.mp3',
    },
    {
        Title: 'Bon Jovi - Everyday',
        Artist: 'EZH1509',
        Comment: '',
        Length: '03:11',
        'Play Count': 5,
        'File Name': 'EZH1509 - Bon Jovi - Everyday.zip',
    },
    {
        Title: 'Helen Sjöholm - Du måste finnas',
        Artist: 'Svenskt[MPG] SV06-09',
        Comment: '',
        Length: '03:24',
        'Play Count': 5,
        'File Name':
            'Svenskt[MPG] SV06-09 - Helen Sjöholm - Du måste finnas.mpg',
    },
    {
        Title: 'Walking In Memphis',
        Artist: 'Marc Cohn',
        Comment: 'Zo08-12',
        Length: '04:27',
        'Play Count': 5,
        'File Name': 'Zo08-12 - Marc Cohn - Walking In Memphis.mp3',
    },
    {
        Title: 'You Are the Reason (Duet with Leona Lewis)',
        Artist: 'Calum Scott',
        Comment: '',
        Length: '03:12',
        'Play Count': 5,
        'File Name':
            'Calum_Scott_You_Are_the_Reason_(Duet_with_Leona_Lewis)(Video_Karaoke_with_a_black_background)_10241915.mp4',
    },
    {
        Title: 'Who The Fk Is Alice',
        Artist: "Smokie & Roy ' Chubby ' Brown",
        Comment: 'ek11-14',
        Length: '04:07',
        'Play Count': 5,
        'File Name':
            "ek11-14 - Smokie & Roy ' Chubby ' Brown - Who The Fk Is Alice .mp3",
    },
    {
        Title: 'Rebel Yell',
        Artist: 'Billy Idol',
        Comment: 'Sc8477-05',
        Length: '05:02',
        'Play Count': 5,
        'File Name': 'Sc8477-05 - Billy Idol - Rebel Yell.mp3',
    },
    {
        Title: 'Killing In The Name',
        Artist: 'Rage Against The Machine',
        Comment: '',
        Length: '05:23',
        'Play Count': 5,
        'File Name': 'SC - Rage Against The Machine - Killing In The Name.mp4',
    },
    {
        Title: 'Tomas Ledin - Snart Tystnar Musiken',
        Artist: 'SKF09',
        Comment: '',
        Length: '05:07',
        'Play Count': 5,
        'File Name': 'SKF09 - Tomas Ledin - Snart Tystnar Musiken.mp3',
    },
    {
        Title: 'Brolle - Playing With Fire',
        Artist: 'SKF15',
        Comment: '',
        Length: '03:41',
        'Play Count': 5,
        'File Name': 'SKF15 - Brolle - Playing With Fire.mp3',
    },
    {
        Title: 'You Are The Only One',
        Artist: 'Eurovision',
        Comment: '',
        Length: '03:08',
        'Play Count': 5,
        'File Name':
            'Serguei_Lazarev_You_Are_The_Only_One(Video_Karaoke_with_a_black_background)_10096475.mp4',
    },
    {
        Title: 'UB40',
        Artist: 'Kingston Town',
        Comment: 'ZML001-08',
        Length: '03:51',
        'Play Count': 4,
        'File Name': 'ZML001-08 - Kingston Town - UB40.mp3',
    },
    {
        Title: 'Love My Life',
        Artist: 'Robbie Williams',
        Comment: '',
        Length: '03:26',
        'Play Count': 4,
        'File Name':
            'Robbie_Williams_Love_My_Life(Video_Karaoke_with_a_colored_background)_10139866.mp4',
    },
    {
        Title: 'In The Ghetto',
        Artist: 'Elvis Presley',
        Comment: 'SC8154-05',
        Length: '02:53',
        'Play Count': 4,
        'File Name': 'SC8154-05 - Elvis Presley - In The Ghetto.zip',
    },
    {
        Title: 'Westlife - You Raise Me Up',
        Artist: 'SKF23',
        Comment: '',
        Length: '04:11',
        'Play Count': 4,
        'File Name': 'SKF23 - Westlife - You Raise Me Up.mp3',
    },
    {
        Title: 'Walking In Memphis',
        Artist: 'Cohn, Marc',
        Comment: 'SC7584-01',
        Length: '04:27',
        'Play Count': 4,
        'File Name': 'SC7584-01 - Cohn, Marc - Walking In Memphis.mp3',
    },
    {
        Title: 'Candle in the Wind (2018 Version)',
        Artist: 'Ed Sheeran',
        Comment: '',
        Length: '03:18',
        'Play Count': 4,
        'File Name':
            'Ed_Sheeran_Candle_in_the_Wind_(2018_Version)(Video_Karaoke_with_a_colored_background)_10241385.mp4',
    },
    {
        Title: 'Om Igen',
        Artist: 'Patrik Rasmussen',
        Comment: 'FF01-03',
        Length: '03:25',
        'Play Count': 4,
        'File Name': 'FF01-03 - Patrik Rasmussen - Om Igen.dat',
    },
    {
        Title: 'Somebody Like You',
        Artist: 'Urban, Keith',
        Comment: 'SC8854-11',
        Length: '04:02',
        'Play Count': 4,
        'File Name': 'SC8854-11 - Urban, Keith - Somebody Like You.mp3',
    },
    {
        Title: 'Voodoo',
        Artist: 'Godsmack',
        Comment: 'SC8803-04',
        Length: '04:57',
        'Play Count': 3,
        'File Name': 'SC8803-04 - Godsmack - Voodoo.mp3',
    },
    {
        Title: 'Sacrifice',
        Artist: 'Elton John',
        Comment: 'SF004-01',
        Length: '04:58',
        'Play Count': 3,
        'File Name': 'SF004-01 - Elton John - Sacrifice.mp3',
    },
    {
        Title: 'Fields Of Gold',
        Artist: 'Eva Cassidy',
        Comment: 'Zoa03-11',
        Length: '05:01',
        'Play Count': 3,
        'File Name': 'Zoa03-11 - Eva Cassidy - Fields Of Gold.mp3',
    },
    {
        Title: 'Kenneth & The Knutters - Som En Riktig Man',
        Artist: 'SKF27',
        Comment: '',
        Length: '03:50',
        'Play Count': 3,
        'File Name': 'SKF27 - Kenneth & The Knutters - Som En Riktig Man.mp3',
    },
    {
        Title: 'Bella ciao',
        Artist: 'Banda Bassotti',
        Comment: '',
        Length: '02:19',
        'Play Count': 3,
        'File Name':
            'Banda_Bassotti_Bella_ciao(Video_Karaoke_with_a_black_background)_10438381.mp4',
    },
    {
        Title: 'Take Me Home, Country Roads',
        Artist: 'John Denver',
        Comment: '',
        Length: '03:07',
        'Play Count': 3,
        'File Name':
            'John_Denver_Take_Me_Home_Country_Roads(Video_Karaoke_with_a_black_background)_59994.mp4',
    },
    {
        Title: 'Advertising Space',
        Artist: 'Robbie Williams',
        Comment: 'SF238-04',
        Length: '04:57',
        'Play Count': 3,
        'File Name': 'SF238-04 - Robbie Williams - Advertising Space.mp3',
    },
    {
        Title: 'Drunken Sailor',
        Artist: 'The Irish Rovers',
        Comment: '',
        Length: '02:43',
        'Play Count': 3,
        'File Name':
            'The_Irish_Rovers_Drunken_Sailor(Video_Karaoke_with_a_black_background)_104968.mp4',
    },
    {
        Title: 'Breaking Me',
        Artist: 'Topic',
        Comment: '',
        Length: '02:49',
        'Play Count': 3,
        'File Name':
            'Topic_Breaking_Me(Video_Karaoke_with_a_black_background)_10388310.mp4',
    },
    {
        Title: 'Blessed',
        Artist: 'John, Elton',
        Comment: 'SC8220-11',
        Length: '05:13',
        'Play Count': 3,
        'File Name': 'SC8220-11 - John, Elton - Blessed.mp3',
    },
    {
        Title: 'Takida - Handlake Village',
        Artist: 'PKS013',
        Comment: '',
        Length: '04:29',
        'Play Count': 3,
        'File Name': 'PKS013 - Takida - Handlake Village.mpg',
    },
    {
        Title: 'Vulnerable',
        Artist: 'Karaoke Roxette',
        Comment: '',
        Length: '05:06',
        'Play Count': 3,
        'File Name': 'Karaoke Roxette - Vulnerable (with back vocals).mp4',
    },
    {
        Title: 'Wicked Game',
        Artist: 'Chris Isaak',
        Comment: '',
        Length: '04:48',
        'Play Count': 3,
        'File Name': 'PI011-07 - Chris Isaak - Wicked Game.zip',
    },
    {
        Title: 'Morrison, Van',
        Artist: 'Brown Eyed Girl',
        Comment: 'ZML001-01',
        Length: '03:23',
        'Play Count': 3,
        'File Name': 'ZML001-01 - Brown Eyed Girl - Morrison, Van.mp3',
    },
    {
        Title: 'Möt Mig I Gamla Stan',
        Artist: 'Magnus Carlsson',
        Comment: '',
        Length: '03:02',
        'Play Count': 3,
        'File Name':
            'Magnus Carlsson - Möt Mig I Gamla Stan [Instrumental version].mp4',
    },
    {
        Title: 'Valborg',
        Artist: 'Håkan Hellström',
        Comment: '',
        Length: '03:17',
        'Play Count': 3,
        'File Name': 'Håkan Hellström - Valborg.mov',
    },
    {
        Title: 'Every Minute',
        Artist: 'Eric Saade',
        Comment: 'MidiCo Karaoke v2.30',
        Length: '03:11',
        'Play Count': 3,
        'File Name': 'Eric Saade - Every Minute.mp3',
    },
    {
        Title: 'Kryptonite',
        Artist: '3 Doors Down',
        Comment: 'SC8050-06',
        Length: '04:10',
        'Play Count': 3,
        'File Name': 'SC8050-06 - 3 Doors Down - Kryptonite.mp3',
    },
    {
        Title: 'Enter Sandman',
        Artist: 'Metallica',
        Comment: 'Sc8252-02',
        Length: '05:05',
        'Play Count': 3,
        'File Name': 'Sc8252-02 - Metallica - Enter Sandman.mp3',
    },
    {
        Title: 'Soul Society KARAOKE version',
        Artist: 'Kamelot',
        Comment: '',
        Length: '04:18',
        'Play Count': 3,
        'File Name': 'Kamelot- Soul Society KARAOKE version.mp4',
    },
    {
        Title: 'Im Yours',
        Artist: '',
        Comment: '',
        Length: '04:10',
        'Play Count': 3,
        'File Name':
            'Im Yours (Jason Mraz) backing vocal harmony with lyrics.mp4',
    },
    {
        Title: '15 Minuter',
        Artist: 'Brandsta City Släckers',
        Comment: 'SKB05-18',
        Length: '03:03',
        'Play Count': 3,
        'File Name': 'SKB05-18 - Brandsta City Släckers - 15 Minuter.mpg',
    },
    {
        Title: 'Sorry Seems To Be The Hardest Word',
        Artist: 'Blue & Elton John',
        Comment: 'SF199-13',
        Length: '03:55',
        'Play Count': 3,
        'File Name':
            'SF199-13 - Blue & Elton John - Sorry Seems To Be The Hardest Word.mp3',
    },
    {
        Title: 'Dreams',
        Artist: 'Fleetwood Mac',
        Comment: 'SC8785-04',
        Length: '04:30',
        'Play Count': 2,
        'File Name': 'SC8785-04 - Fleetwood Mac - Dreams.mp3',
    },
    {
        Title: 'The Look',
        Artist: 'The Baseballs',
        Comment: '',
        Length: '03:29',
        'Play Count': 2,
        'File Name': 'KV - Baseballs - The Look.mp3',
    },
    {
        Title: 'Tacatà',
        Artist: 'Tacabro',
        Comment: '',
        Length: '03:41',
        'Play Count': 2,
        'File Name': 'ESP - Tacabro - Tacata.mp3',
    },
    {
        Title: 'Only You',
        Artist: 'Smokie',
        Comment: 'SFG028-13',
        Length: '03:44',
        'Play Count': 2,
        'File Name': 'SFG028-13 - Smokie - Only You.mp3',
    },
    {
        Title: 'Last Thing On My Mind',
        Artist: 'Ronan Keating And Leann Rimes',
        Comment: 'EZH35-10',
        Length: '04:19',
        'Play Count': 2,
        'File Name':
            'EZH35-10 - Ronan Keating And Leann Rimes - Last Thing On My Mind.zip',
    },
    {
        Title: 'If You Think You Know How To Love',
        Artist: 'Smokie',
        Comment: 'SF035-05',
        Length: '04:12',
        'Play Count': 2,
        'File Name':
            'SF035-05 - Smokie - If You Think You Know How To Love.mp3',
    },
    {
        Title: 'Smokie - Living Next Door To Alice',
        Artist: 'ToppS-1',
        Comment: '',
        Length: '03:56',
        'Play Count': 2,
        'File Name': 'ToppS-1 - Smokie - Living Next Door To Alice.mp3',
    },
    {
        Title: 'Said I Loved You, But I Lied',
        Artist: 'Bolton, Michael',
        Comment: 'SC8113-02',
        Length: '05:09',
        'Play Count': 2,
        'File Name':
            'SC8113-02 - Bolton, Michael - Said I Loved You, But I Lied.mp3',
    },
    {
        Title: "Rockin' In The Free World",
        Artist: 'Young, Neil',
        Comment: 'SC8715-07',
        Length: '05:19',
        'Play Count': 2,
        'File Name': "SC8715-07 - Young, Neil - Rockin' In The Free World.mp3",
    },
    {
        Title: 'Elton John - Crokodile Rock',
        Artist: 'EK 0710',
        Comment: '',
        Length: '03:59',
        'Play Count': 2,
        'File Name': 'EK 0710 - Elton John - Crokodile Rock.mp3',
    },
    {
        Title: 'All Summer Long',
        Artist: 'Kid Rock',
        Comment: 'SKF033-04',
        Length: '03:54',
        'Play Count': 2,
        'File Name': 'SKF033-04 - Kid Rock - All Summer Long.zip',
    },
    {
        Title: 'Easy way out',
        Artist: '',
        Comment: '',
        Length: '04:27',
        'Play Count': 2,
        'File Name': 'Easy way out.mp4',
    },
    {
        Title: 'Can I Play With Madness - Iron Maiden',
        Artist: 'SFMW881-01',
        Comment: '',
        Length: '03:52',
        'Play Count': 2,
        'File Name': 'SFMW881-01 - Can I Play With Madness - Iron Maiden.zip',
    },
    {
        Title: 'In The Air Tonight',
        Artist: 'Collins, Phil',
        Comment: 'SC8621-02',
        Length: '05:54',
        'Play Count': 2,
        'File Name': 'SC8621-02 - Collins, Phil - In The Air Tonight .mp3',
    },
    {
        Title: 'Keith Urban - Somebody Like You',
        Artist: 'SR',
        Comment: '',
        Length: '03:58',
        'Play Count': 2,
        'File Name': 'SR - Keith Urban - Somebody Like You.mp3',
    },
    {
        Title: 'feel - williams, robbie',
        Artist: 'ZML10 02',
        Comment: '',
        Length: '04:32',
        'Play Count': 2,
        'File Name': 'ZML10 02 - feel - williams, robbie.mp3',
    },
    {
        Title: 'Unforgiven, The',
        Artist: 'Metallica',
        Comment: 'SC8660-02',
        Length: '06:56',
        'Play Count': 2,
        'File Name': 'SC8660-02 - Metallica - Unforgiven, The .mp3',
    },
    {
        Title: "What's Up",
        Artist: 'Four Non Blondes',
        Comment: 'SC7546-11',
        Length: '05:15',
        'Play Count': 2,
        'File Name': "SC7546-11 - Four Non Blondes - What's Up.mp3",
    },
    {
        Title: 'Adele - Someone Like You',
        Artist: 'SF',
        Comment: '',
        Length: '04:58',
        'Play Count': 2,
        'File Name': 'SF - Adele - Someone Like You.mp3',
    },
    {
        Title: 'Wicked Game',
        Artist: 'Isaak, Chris',
        Comment: 'SC7546-13',
        Length: '05:05',
        'Play Count': 2,
        'File Name': 'SC7546-13 - Isaak, Chris - Wicked Game.mp3',
    },
    {
        Title: 'Sweet Dreams',
        Artist: 'Marilyn Manson',
        Comment: '',
        Length: '04:39',
        'Play Count': 2,
        'File Name': 'SC - Marilyn Manson - Sweet Dreams.mp4',
    },
    {
        Title: 'Ängeln I Rummet',
        Artist: 'Laleh',
        Comment: '',
        Length: '04:22',
        'Play Count': 2,
        'File Name': 'Laleh - Ängeln I Rummet.mp3',
    },
    {
        Title: "Mama I'm Coming Home",
        Artist: 'Ozzy Osbourne',
        Comment: 'SC8373-07',
        Length: '04:26',
        'Play Count': 2,
        'File Name': "SC8373-07 - Ozzy Osbourne - Mama I'm Coming Home.zip",
    },
    {
        Title: 'Little Bit More, A',
        Artist: 'SFG028-07 Dr. Hook',
        Comment: '',
        Length: '03:43',
        'Play Count': 2,
        'File Name': 'SFG028-07 Dr. Hook - Little Bit More, A.mp3',
    },
    {
        Title: 'Tomas Ledin - Sensuella Isabella',
        Artist: 'SKF02',
        Comment: '',
        Length: '03:44',
        'Play Count': 1,
        'File Name': 'SKF02 - Tomas Ledin - Sensuella Isabella.mp3',
    },
    {
        Title: 'Last Time for Everything',
        Artist: 'Brad Paisley',
        Comment: '',
        Length: '03:54',
        'Play Count': 1,
        'File Name':
            'Brad_Paisley_Last_Time_for_Everything(Video_Karaoke_with_a_black_background)_10201421.mp4',
    },
    {
        Title: 'When The Children Cry',
        Artist: 'White Lion',
        Comment: 'SC8346-09',
        Length: '04:34',
        'Play Count': 1,
        'File Name': 'SC8346-09 - White Lion - When The Children Cry.mp3',
    },
    {
        Title: 'Whatever You Want',
        Artist: 'STATUS QUO',
        Comment: 'ZMP086-05',
        Length: '04:13',
        'Play Count': 1,
        'File Name': 'ZMP086-05 - STATUS QUO - Whatever You Want.zip',
    },
    {
        Title: 'Keep The Faith',
        Artist: 'SFG056-12 Bon Jovi',
        Comment: '',
        Length: '04:52',
        'Play Count': 1,
        'File Name': 'SFG056-12 Bon Jovi - Keep The Faith.mp3',
    },
    {
        Title: 'Kings Of Leon - Sex On Fire',
        Artist: 'KMIX',
        Comment: '',
        Length: '03:42',
        'Play Count': 1,
        'File Name': 'KMIX - Kings Of Leon - Sex On Fire.mp3',
    },
    {
        Title: 'Diamond, Neil',
        Artist: 'Sweet Caroline',
        Comment: 'ZML001-19',
        Length: '03:50',
        'Play Count': 1,
        'File Name': 'ZML001-19 - Sweet Caroline - Diamond, Neil.mp3',
    },
    {
        Title: 'Home',
        Artist: 'Chris Daughtry',
        Comment: 'SKF033-12',
        Length: '04:24',
        'Play Count': 1,
        'File Name': 'SKF033-12 - Chris Daughtry - Home.zip',
    },
    {
        Title: "Mama, I'm Coming Home",
        Artist: 'Ozzy Osbourne',
        Comment: '',
        Length: '04:18',
        'Play Count': 1,
        'File Name': "SC - Ozzy Osbourne - Mama I'm Coming Home.mp4",
    },
    {
        Title: 'Sorry Seems To Be The Hardest Word',
        Artist: 'Blue & Elton John',
        Comment: 'EZH18-13',
        Length: '03:59',
        'Play Count': 1,
        'File Name':
            'EZH18-13 - Blue & Elton John - Sorry Seems To Be The Hardest Word.zip',
    },
    {
        Title: 'Candle in the Wind (2018 Version)',
        Artist: 'Ed Sheeran',
        Comment: '',
        Length: '03:18',
        'Play Count': 1,
        'File Name':
            'Ed_Sheeran_Candle_in_the_Wind_(2018_Version)(Video_Karaoke_with_a_colored_background)_10241385.mp4',
    },
    {
        Title: 'Annies Song',
        Artist: 'Denver, John',
        Comment: 'ZML007-19',
        Length: '03:05',
        'Play Count': 1,
        'File Name': 'ZML007-19 - Denver, John - Annies Song.mp3',
    },
    {
        Title: 'The Baseballs - The Look',
        Artist: 'Xtreme The Baseballs-06',
        Comment: '',
        Length: '03:33',
        'Play Count': 1,
        'File Name': 'Xtreme The Baseballs-06 - The Baseballs - The Look.mp3',
    },
    {
        Title: 'Martin Stenmarck - Las Vegas',
        Artist: 'MF05',
        Comment: '',
        Length: '03:07',
        'Play Count': 1,
        'File Name': 'MF05 - Martin Stenmarck - Las Vegas.dat',
    },
    {
        Title: 'Cocaine',
        Artist: 'Clapton, Eric',
        Comment: 'SC8115-03',
        Length: '03:44',
        'Play Count': 1,
        'File Name': 'SC8115-03 - Clapton, Eric - Cocaine.mp3',
    },
    {
        Title: "Status Quo - Rockin' All Over The World",
        Artist: 'EK 2502',
        Comment: '',
        Length: '03:26',
        'Play Count': 1,
        'File Name': "EK 2502 - Status Quo - Rockin' All Over The World.mp3",
    },
    {
        Title: 'Martin Stenmarck - 7 Milakliv',
        Artist: 'PKS014',
        Comment: '',
        Length: '03:17',
        'Play Count': 1,
        'File Name': 'PKS014 - Martin Stenmarck - 7 Milakliv.mpg',
    },
    {
        Title: 'SF124 16   Cousins Tina   Mysterious Times Sash',
        Artist: '',
        Comment: '',
        Length: '03:48',
        'Play Count': 1,
        'File Name':
            'SF124 16   Cousins Tina   Mysterious Times Sash [Karaoke].mp4',
    },
    {
        Title: 'Poison',
        Artist: 'Alice Cooper',
        Comment: 'SKF11-11',
        Length: '04:38',
        'Play Count': 1,
        'File Name': 'SKF11-11 - Alice Cooper - Poison.dat',
    },
    {
        Title: 'Suspicious Minds',
        Artist: 'Elvis Presley',
        Comment: 'SC8154-07',
        Length: '03:23',
        'Play Count': 1,
        'File Name': 'SC8154-07 - Elvis Presley - Suspicious Minds.zip',
    },
    {
        Title: 'En del av mitt hjarta -',
        Artist: 'Tomas Ledin',
        Comment: '',
        Length: '05:19',
        'Play Count': 1,
        'File Name': 'Tomas Ledin_-_En del av mitt hjarta_-_.mp3',
    },
    {
        Title: 'Keating, Ronan',
        Artist: 'When You Say Nothing At All',
        Comment: 'ZML003-02',
        Length: '04:42',
        'Play Count': 1,
        'File Name':
            'ZML003-02 - When You Say Nothing At All - Keating, Ronan.mp3',
    },
    {
        Title: 'Jump',
        Artist: 'Van Halen',
        Comment: 'SF013-13',
        Length: '04:09',
        'Play Count': 1,
        'File Name': 'SF013-13 - Van Halen - Jump.mp3',
    },
    {
        Title: 'Shes everything',
        Artist: 'Brad paisley',
        Comment: '',
        Length: '03:55',
        'Play Count': '',
        'File Name': 'Brad paisley - Shes everything.mp4',
    },
    {
        Title: 'Too late for love',
        Artist: 'John Lundvik',
        Comment: 'MidiCo Karaoke v2.44',
        Length: '03:17',
        'Play Count': '',
        'File Name': 'John Lundvik - Too late for love (Sweden).mp3',
    },
    {
        Title: 'You Are The Only One',
        Artist: 'Eurovision',
        Comment: '',
        Length: '03:08',
        'Play Count': '',
        'File Name':
            'Serguei_Lazarev_You_Are_The_Only_One(Video_Karaoke_with_a_black_background)_10096475.mp4',
    },
    {
        Title: 'SonataArcticaTallulahKaraoke',
        Artist: '',
        Comment: '',
        Length: '05:32',
        'Play Count': '',
        'File Name': 'SonataArcticaTallulahKaraoke.mp4',
    },
    {
        Title: 'Brolle - Playing With Fire',
        Artist: 'SKF15',
        Comment: '',
        Length: '',
        'Play Count': '',
        'File Name': 'SKF15 - Brolle - Playing With Fire.mp3',
    },
    {
        Title: 'Desert Rose',
        Artist: 'Sting',
        Comment: 'SFG026-12',
        Length: '04:53',
        'Play Count': '',
        'File Name': 'SFG026-12 - Sting - Desert Rose.mp3',
    },
    {
        Title: 'Rice To The Occasion',
        Artist: 'Kurt Nielsen',
        Comment: 'SKF033-11',
        Length: '03:45',
        'Play Count': '',
        'File Name': 'SKF033-11 - Kurt Nielsen - Rice To The Occasion.mp3',
    },
    {
        Title: 'HEAT - 1000 Miles',
        Artist: 'SKF034-07',
        Comment: '',
        Length: '',
        'Play Count': '',
        'File Name': 'SKF034-07 - HEAT - 1000 Miles.mp3',
    },
    {
        Title: 'Walk Of Life - Dire Straits',
        Artist: 'ZML001-16',
        Comment: '',
        Length: '04:00',
        'Play Count': '',
        'File Name': 'ZML001-16 - Walk Of Life - Dire Straits.mp3',
    },
    {
        Title: 'Best, The',
        Artist: 'SFG045-03 Turner, Tina',
        Comment: '',
        Length: '04:24',
        'Play Count': '',
        'File Name': 'SFG045-03 Turner, Tina - Best, The.mp3',
    },
    {
        Title: 'Hon ser inte mig',
        Artist: 'Peter JÃ¶back',
        Comment: '',
        Length: '04:36',
        'Play Count': '',
        'File Name': 'Peter Jöback - Hon ser inte mig.mp3',
    },
    {
        Title: 'Wanted Dead Or Alive',
        Artist: 'Bon Jovi',
        Comment: 'LG112-01',
        Length: '05:23',
        'Play Count': '',
        'File Name': 'LG112-01 - Bon Jovi - Wanted Dead Or Alive.mp3',
    },
    {
        Title: 'They Live In You',
        Artist: 'The Lion King (Musical)',
        Comment: '',
        Length: '03:05',
        'Play Count': '',
        'File Name':
            'The_Lion_King_(Musical)_They_Live_In_You(MP4_Video_Karaoke_varillisella_taustalla)_10181886.mp4',
    },
    {
        Title: 'Brown Eyed Girl - Morrison, Van',
        Artist: 'ZML001-01',
        Comment: '',
        Length: '03:23',
        'Play Count': '',
        'File Name': 'ZML001-01 - Brown Eyed Girl - Morrison, Van.mp3',
    },
    {
        Title: 'Blue on black karaoke',
        Artist: 'Five finger death punch',
        Comment: '',
        Length: '04:31',
        'Play Count': '',
        'File Name': 'Five finger death punch - Blue on black karaoke.mov',
    },
    {
        Title: 'Legendary',
        Artist: 'Welshly Arms',
        Comment: '',
        Length: '03:51',
        'Play Count': '',
        'File Name':
            'Welshly_Arms_Legendary(MP4_Video_Karaoke_varillisella_taustalla)_10191552.mp4',
    },
    {
        Title: 'Poison',
        Artist: 'Alice Cooper',
        Comment: 'SC8631-04',
        Length: '04:32',
        'Play Count': '',
        'File Name': 'SC8631-04 - Alice Cooper - Poison.zip',
    },
    {
        Title: 'Kamelot Love you to death Karaoke',
        Artist: '',
        Comment: '',
        Length: '05:13',
        'Play Count': '',
        'File Name': 'Kamelot Love you to death Karaoke.mov',
    },
    {
        Title: 'How Will I Know (Who You Are)',
        Artist: 'Jessica Folcker',
        Comment: '',
        Length: '03:29',
        'Play Count': '',
        'File Name':
            'Jessica_Folcker_How_Will_I_Know_(Who_You_Are)(MP4_Video_Karaoke_mustalla_taustalla)_156487.mp4',
    },
    {
        Title: 'sc8894-01',
        Artist: '',
        Comment: 'F8109F11sc8894-01',
        Length: '04:34',
        'Play Count': '',
        'File Name': 'SC8894-01 - Depeche Mode - Enjoy The Silence.mp3',
    },
    {
        Title: 'For Evigt',
        Artist: 'Volbeat',
        Comment: '',
        Length: '04:48',
        'Play Count': '',
        'File Name':
            'Volbeat_For_Evigt(MP4_Video_Karaoke_varillisella_taustalla)_10253272.mp4',
    },
    {
        Title: 'Bye Bye Beautiful',
        Artist: 'Nightwish',
        Comment: '',
        Length: '04:13',
        'Play Count': '',
        'File Name':
            'Nightwish_Bye_Bye_Beautiful(MP4_Video_Karaoke_varillisella_taustalla)_214846.mp4',
    },
    {
        Title: 'Nordman - Ödet Var Min Väg',
        Artist: 'SKF20',
        Comment: '',
        Length: '',
        'Play Count': '',
        'File Name': 'SKF20 - Nordman - Ödet Var Min Väg.mp3',
    },
    {
        Title: 'Burning Heart',
        Artist: 'Survivor',
        Comment: '',
        Length: '04:01',
        'Play Count': '',
        'File Name':
            'Survivor_Burning_Heart(MP4_Video_Karaoke_mustalla_taustalla)_163403.mp4',
    },
    {
        Title: 'Is This Love',
        Artist: 'Whitesnake',
        Comment: 'SC1027-04',
        Length: '05:01',
        'Play Count': '',
        'File Name': 'SC1027-04 - Whitesnake - Is This Love.mp3',
    },
    {
        Title: 'Englishman In New York',
        Artist: 'Sting',
        Comment: 'SF158-10',
        Length: '04:07',
        'Play Count': '',
        'File Name': 'SF158-10 - Sting - Englishman In New York.mp3',
    },
    {
        Title: "Outlaw In 'Em",
        Artist: 'Waylon',
        Comment: 'MidiCo Karaoke v2.44',
        Length: '03:05',
        'Play Count': '',
        'File Name': "Waylon - Outlaw In 'Em (The Netherlands).mp3",
    },
    {
        Title: 'Go beyond',
        Artist: 'Rasmussen',
        Comment: '',
        Length: '04:19',
        'Play Count': '',
        'File Name': 'Go beyond4.m4v',
    },
    {
        Title: 'Vart ska vi sova inatt karaoke',
        Artist: '',
        Comment: '',
        Length: '03:34',
        'Play Count': '',
        'File Name': 'Vart ska vi sova inatt karaoke.mov',
    },
    {
        Title: 'Svenne Rubins - Långa Bollar På Bengt',
        Artist: 'SKF05',
        Comment: '',
        Length: '03:49',
        'Play Count': '',
        'File Name': 'SKF05 - Svenne Rubins - Långa Bollar På Bengt.mp3',
    },
    {
        Title: 'Barbados - Kom Hem',
        Artist: 'SKF13',
        Comment: '',
        Length: '03:44',
        'Play Count': '',
        'File Name': 'SKF13 - Barbados - Kom Hem.mp3',
    },
    {
        Title: 'Abandoned',
        Artist: 'Kamelot',
        Comment: '',
        Length: '03:57',
        'Play Count': '',
        'File Name': 'Kamelot Abandoned.mp4',
    },
    {
        Title: 'Beds Are Burning',
        Artist: 'Midnight Oil',
        Comment: 'DKG047-02',
        Length: '04:21',
        'Play Count': '',
        'File Name': 'DKG047-02 - Midnight Oil - Beds Are Burning.mp3',
    },
    {
        Title: 'Beds Are Burning',
        Artist: 'Midnight Oil',
        Comment: 'SC8671-15',
        Length: '04:34',
        'Play Count': '',
        'File Name': 'SC8671-15 - Midnight Oil - Beds Are Burning .mp3',
    },
    {
        Title: "It's My Life",
        Artist: 'Bon Jovi',
        Comment: 'ET031-09',
        Length: '03:55',
        'Play Count': '',
        'File Name': "ET031-09 - Bon Jovi - It's My Life.mp3",
    },
    {
        Title: 'Walking In Memphis',
        Artist: 'Cohn, Marc',
        Comment: 'SC8397-02',
        Length: '04:27',
        'Play Count': '',
        'File Name': 'SC8397-02 - Cohn, Marc - Walking In Memphis.mp3',
    },
    {
        Title: 'Pet Shop Boys - Always On My Mind',
        Artist: 'SF075-01',
        Comment: '',
        Length: '',
        'Play Count': '',
        'File Name': 'SF075-01 - Pet Shop Boys - Always On My Mind.mp3',
    },
    {
        Title: 'Here I Go Again',
        Artist: 'Whitesnake',
        Comment: 'SC7578-06',
        Length: '05:08',
        'Play Count': '',
        'File Name': 'SC7578-06 - Whitesnake - Here I Go Again.mp3',
    },
];

function Home() {
    const [songs, SetSongs] = useState(songData);
    const [search, SetSearch] = useState('');

    function filterSongs(e) {
        const result = songData
            .filter(
                (song) =>
                    song.Title.toLocaleLowerCase().includes(
                        e.target.value.toLowerCase()
                    ) ||
                    song.Artist.toLocaleLowerCase().includes(
                        e.target.value.toLowerCase()
                    )
            )
            .map((filteredSong) => {
                return filteredSong;
            });

        SetSearch(e.target.value);
        SetSongs(result);
    }

    return (
        <main className="flex flex-col content-center bg-white h-screen">
            <section className="container mx-auto text-center pt-14">
                <h1 className="font-mono font-bold text-gray-900 lg:text-9xl text-6xl mb-10">
                    STUDIO KARAOKE
                </h1>
            </section>
            <section className="flex flex-col  items-center pb-8">
                <h2 className="font-mono text-2xl mb-4">Hur funkar det?</h2>
                <div className="px-2 pb-3 flex flex-col">
                    <div className="flex items-center mb-2">
                        <FaSearch size="17" className="mr-2" />
                        <p className="mr-3 font-mono text-base mt-1">
                            Sök upp låt
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaPlus size="17" className="mr-2" />
                        <p className="mr-3 font-mono text-base mt-1">
                            Lägg till i kö
                        </p>
                    </div>
                    <div className="flex items-center">
                        <FaMicrophone size="17" className="mr-2" />
                        <p className="font-mono text-base mt-1">Sjung</p>
                    </div>
                </div>
            </section>
            <section className="text-center bg-gray-700 px-2 pt-6">
                <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-7 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={(e) => filterSongs(e)}
                    value={search}
                    placeholder="Sök här..."
                />
                <SongList songs={songs} />
            </section>
            <footer>
                <p>Copyright @con.johansson</p>
            </footer>
        </main>
    );
}

function SongList({ songs }) {
    const halfWayPoint = Math.ceil(songs.length / 2);
    const columnA = songs.slice(0, halfWayPoint);
    const columnB = songs.slice(halfWayPoint);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            {songs.map((song, i) => {
                return <SongCard song={song} key={i} />;
            })}
        </div>
    );
}

function SongCard({ song }) {
    return (
        <div className="border-r-6 rounded-lg shadow-lg bg-white mb-2 p-4 flex flex-col content-start text-left">
            <div className="flex items-center">
                <h3 className="font-bold mr-2 text-lg">Artist:</h3>
                <p>{song.Artist}</p>
            </div>
            <div className="flex mb-2 items-center">
                <h3 className="font-bold mr-2 text-lg">Sång:</h3>
                <p>{song.Title}</p>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Lägg till i kön
                </button>
            </div>
        </div>
    );
}

export default Home;

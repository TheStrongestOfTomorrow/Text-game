export const gameData = {
    start: { text: \"You are born. The lights are blinding. Do you wail to announce yourself, or stay quiet?\", age: 0, options: [
        { text: \"Wail loudly\", next: 'scream', stat: 'boldness' },
        { text: \"Stay quiet\", next: 'silent', stat: 'patience' }
    ]},
    scream: { text: \"You grow up boisterous. At age 7, do you lead the playground games or focus on selling lemonade?\", age: 7, options: [
        { text: \"Lead the games\", next: 'leader', stat: 'boldness' },
        { text: \"Sell lemonade\", next: 'entrepreneur', stat: 'boldness' }
    ]},
    silent: { text: \"You are observant. At age 7, do you find a dusty library or start sketching in the garden?\", age: 7, options: [
        { text: \"Library\", next: 'scholar', stat: 'patience' },
        { text: \"Sketching\", next: 'artist', stat: 'patience' }
    ]},
    leader: { text: \"You're 18. You have a chance to enter local politics or join a high-stakes debate team?\", age: 18, options: [
        { text: \"Run for office\", next: 'politician', stat: 'boldness' },
        { text: \"Debate team\", next: 'lawyer', stat: 'boldness' }
    ]},
    entrepreneur: { text: \"You're 18. Your lemonade stand turned into a drop-shipping firm. Do you expand or sell?\", age: 18, options: [
        { text: \"Scale global\", next: 'titan', stat: 'boldness' },
        { text: \"Sell for millions\", next: 'retired_young', stat: 'patience' }
    ]},
    scholar: { text: \"You're 18. You've published a paper. Ivy League or Research Fellowship?\", age: 18, options: [
        { text: \"Ivy League\", next: 'professor', stat: 'patience' },
        { text: \"Fellowship\", next: 'inventor', stat: 'patience' }
    ]},
    artist: { text: \"You're 18. Do you apply to Art School or travel the world to find inspiration?\", age: 18, options: [
        { text: \"Art School\", next: 'masterpiece', stat: 'patience' },
        { text: \"Travel\", next: 'nomad', stat: 'boldness' }
    ]},
    // MID-LIFE CRISIS STAGES
    politician: { text: \"Age 40: You're a senator, but corruption is everywhere. Blow the whistle or play the game?\", age: 40, options: [
        { text: \"Blow the whistle\", next: 'end_hero', stat: 'boldness' },
        { text: \"Play the game\", next: 'end_tyrant', stat: 'boldness' }
    ]},
    titan: { text: \"Age 40: You are wealthy. The world is watching. Do you fund space travel or go off-grid?\", age: 40, options: [
        { text: \"Space travel\", next: 'end_starman', stat: 'boldness' },
        { text: \"Go off-grid\", next: 'end_peace', stat: 'patience' }
    ]},
    // ENDINGS
    end_hero: { text: \"Destiny: The Martyr. You changed laws, but lost your career. History remembers you.\", age: 70, options: [] },
    end_tyrant: { text: \"Destiny: The Iron Fist. You have all the power, but no one loves you.\", age: 70, options: [] },
    end_starman: { text: \"Destiny: The Voyager. You died amongst the stars.\", age: 70, options: [] },
    end_peace: { text: \"Destiny: The Hermit. You found total peace far from humanity.\", age: 70, options: [] },
    masterpiece: { text: \"Destiny: The Legend. Your art is in every museum.\", age: 70, options: [] }
};
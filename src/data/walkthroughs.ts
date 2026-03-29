export interface WalkthroughStep {
  title: string;
  description: string;
  tips?: string[];
  pokemon?: string[];
  items?: string[];
}

export interface WalkthroughChapter {
  title: string;
  summary: string;
  steps: WalkthroughStep[];
}

export interface GameWalkthrough {
  gameId: string;
  chapters: WalkthroughChapter[];
}

// ============================================================
// KANTO (Gen 1) — shared by red, blue, yellow
// ============================================================
const kantoGen1Chapters: WalkthroughChapter[] = [
  {
    title: 'Pallet Town & Route 1',
    summary: 'Your adventure begins in sleepy Pallet Town. Get your starter from Professor Oak and take your first steps north.',
    steps: [
      {
        title: 'Leave Home and Meet Professor Oak',
        description: 'Head north out of Pallet Town. Professor Oak stops you before you can enter the tall grass alone and takes you to his lab. Choose your starter Pokemon wisely!',
        tips: [
          'Bulbasaur is easiest for new players — it handles the first two gyms with ease.',
          'Charmander is the hardest start but very rewarding once it evolves.',
          'Squirtle offers a solid balanced start.',
          'In Yellow, you receive Pikachu automatically — it cannot be evolved in-game.',
        ],
        pokemon: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu (Yellow only)'],
      },
      {
        title: 'Rival Battle #1',
        description: 'Your rival challenges you right in the lab. This is your first battle — you cannot lose it permanently, but give it your all for practice.',
        tips: ['Your rival always picks the starter strong against yours. Bulbasaur players face Charmander, etc.'],
      },
      {
        title: 'Route 1 and Viridian City',
        description: 'Head north through Route 1 to reach Viridian City. You can catch Pidgey and Rattata here. Deliver Oak\'s Parcel from the Poke Mart to unlock the Pokedex.',
        tips: ['Grab the free Potion from the Poke Mart clerk after delivering the parcel.'],
        pokemon: ['Pidgey', 'Rattata'],
        items: ['Oak\'s Parcel', 'Pokedex', 'Town Map (from rival\'s sister in Pallet)'],
      },
      {
        title: 'Viridian City Gym (Locked)',
        description: 'The Viridian Gym is locked for now — you\'ll come back much later. Head west to Route 22 to grab an early optional Rival battle, then continue north through Route 2.',
        tips: ['Fight the Rival on Route 22 for extra experience before Brock.'],
      },
      {
        title: 'Viridian Forest',
        description: 'Work through the maze-like forest, battling Bug Catchers along the way. You can catch Bug-type Pokemon here.',
        pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu (Red/Blue)'],
        items: ['Antidote', 'Potion'],
        tips: ['A Caterpie or Weedle will evolve into a decent early Bug type, though they fall off quickly.'],
      },
    ],
  },
  {
    title: 'Pewter City — Brock\'s Gym',
    summary: 'Tackle the first gym and earn the Boulder Badge from the rock-solid Brock.',
    steps: [
      {
        title: 'Explore Pewter City',
        description: 'Check out the Pokemon Center and Poke Mart. The Pewter Museum is worth a visit (pay the fee or sneak around the back with the right help).',
        items: ['Escape Rope (Poke Mart)'],
      },
      {
        title: 'Train Before Brock',
        description: 'Brock uses Rock/Ground types. Bulbasaur and Squirtle have a major type advantage. Charmander and Pikachu users should grind until level 14+ and use Normal moves.',
        tips: [
          'Mankey (Red only on Route 22) knows Low Kick — a Fighting move that wrecks Brock.',
          'Nidoran can learn Double Kick early and is great here.',
          'If you\'re struggling, Bide (learned by many Pokemon) can be used to reflect Brock\'s own damage.',
        ],
        pokemon: ['Nidoran♂', 'Nidoran♀', 'Mankey (Red)'],
      },
      {
        title: 'Gym Leader Brock',
        description: 'Brock has a Geodude (Lv. 12) and Onix (Lv. 14). His Onix has high Defense so chip away with Water or Grass moves. Watch out for Bind from Onix.',
        tips: [
          'Onix\'s Defense is enormous — use special moves (Water/Grass) rather than physical attacks.',
          'Bide can be a free win if you have a Pokemon that can survive two turns.',
        ],
        items: ['Boulder Badge', 'TM34 Bide'],
      },
      {
        title: 'Head East to Mt. Moon',
        description: 'After the gym, heal up and head east along Route 3. Battle many trainers for excellent EXP. Grab the Pokemon at the end of the route if you like.',
        pokemon: ['Jigglypuff', 'Sandshrew (Blue)', 'Ekans (Red)'],
      },
    ],
  },
  {
    title: 'Mt. Moon & Cerulean City',
    summary: 'Navigate the fossil-filled Mt. Moon and take on Misty, the Water-type gym leader.',
    steps: [
      {
        title: 'Mt. Moon',
        description: 'This cave is full of Zubat and Geodude. Team Rocket is harvesting Fossils here. Fight your way through to find one of two Fossils at the end.',
        tips: [
          'Repels are very useful here to avoid constant random Zubat encounters.',
          'You must choose between the Dome Fossil (Kabuto) and Helix Fossil (Omanyte) — pick based on preference.',
        ],
        pokemon: ['Zubat', 'Geodude', 'Clefairy', 'Paras'],
        items: ['Dome Fossil or Helix Fossil', 'Moon Stone', 'TM12 Water Gun'],
      },
      {
        title: 'Arrive in Cerulean City',
        description: 'Heal up and explore. Check the house north of the Pokemon Center — someone will offer a Bike Voucher later but first there\'s Team Rocket to deal with on the Nugget Bridge.',
        items: ['TM28 Dig (from a house in town, costs nothing)'],
      },
      {
        title: 'Nugget Bridge',
        description: 'Five trainers and then a Team Rocket grunt await on the bridge north of Cerulean. Beat them all for the Nugget — sell it for cash!',
        tips: ['The final "trainer" on the bridge is a Rocket grunt who tries to recruit you. Refuse and battle him.'],
        items: ['Nugget (sell for $5000)'],
      },
      {
        title: 'Rival Battle #2',
        description: 'Your rival appears on Route 24 after the bridge. He now has an evolved starter and a growing team. Be prepared!',
        tips: ['This fight can be tough — make sure your team is healed before crossing the bridge.'],
      },
      {
        title: 'Gym Leader Misty',
        description: 'Misty uses Staryu (Lv. 18) and Starmie (Lv. 21). Starmie has Bubblebeam which hits hard. Grass and Electric types destroy her team.',
        tips: [
          'Pikachu\'s Thundershock/Thunderbolt wrecks both of Misty\'s Pokemon.',
          'Bulbasaur\'s Vine Whip works great here.',
          'Avoid using Fire, Ground, or Rock types.',
        ],
        items: ['Cascade Badge', 'TM11 Bubblebeam'],
      },
    ],
  },
  {
    title: 'Vermilion City — Lt. Surge\'s Gym',
    summary: 'Sail the S.S. Anne, pick up Cut, and zap Lt. Surge\'s Electric team.',
    steps: [
      {
        title: 'Bike Voucher and Cycling Road',
        description: 'Visit the man in the house northeast of the Pokemon Center in Cerulean who will give you the Bike Voucher. Head south through Routes 5/6, then east to Vermilion.',
        items: ['Bike Voucher', 'Bicycle (from Cerulean shop)'],
        tips: ['The Bicycle is free with the voucher — you\'ll use it constantly for the rest of the game.'],
      },
      {
        title: 'S.S. Anne',
        description: 'Board the S.S. Anne with your ticket. Battle trainers throughout the ship for great EXP, then find your Rival for another battle. Find the Captain who is seasick — help him to get HM01 Cut.',
        pokemon: ['Various high-level trainer Pokemon for EXP'],
        items: ['HM01 Cut'],
        tips: [
          'This is one of the best grinding spots in the early game — battle every trainer aboard.',
          'The ship leaves after you get Cut, so explore thoroughly before seeing the Captain.',
        ],
      },
      {
        title: 'Rival Battle #3 (on the S.S. Anne)',
        description: 'Your rival challenges you aboard the ship. His team has grown — watch out for his evolved starter.',
        tips: ['Stock up on Potions before boarding the ship.'],
      },
      {
        title: 'Unlock Lt. Surge\'s Gym',
        description: 'Use Cut to access the gym. Inside, you must find two hidden switches in the trash cans to unlock the door to Surge. The second switch is always adjacent to the first.',
        tips: [
          'If you open the wrong can after the first switch, the puzzle resets.',
          'Check cans methodically in a small area — the two switches are always neighboring cans.',
        ],
      },
      {
        title: 'Gym Leader Lt. Surge',
        description: 'Lt. Surge has a Voltorb (Lv. 21), Pikachu (Lv. 18), and Raichu (Lv. 24). Ground-type moves are immune to Electric. Bring a Diglett or Sandshrew.',
        tips: [
          'Diglett/Dugtrio from Diglett\'s Cave (Route 2 south gate) completely wall Surge\'s entire team.',
          'His Raichu can use Growl and Thunder Wave — paralyze is annoying, bring Paralyz Heals.',
        ],
        items: ['Thunder Badge', 'TM24 Thunderbolt'],
      },
      {
        title: 'Diglett\'s Cave Shortcut',
        description: 'Diglett\'s Cave connects Vermilion back to Route 2 near Pewter. This lets you access the Professor\'s Aide in the Route 2 gatehouse who gives HM05 Flash if you have 10+ Pokemon.',
        pokemon: ['Diglett', 'Dugtrio'],
        items: ['HM05 Flash'],
      },
    ],
  },
  {
    title: 'Lavender Town & Celadon City',
    summary: 'Investigate the haunted Pokemon Tower and infiltrate Team Rocket\'s Game Corner hideout.',
    steps: [
      {
        title: 'Rock Tunnel',
        description: 'Connect Cerulean to Lavender via this dark cave. Flash makes it much easier. Stock up on Repels and Potions before entering.',
        tips: ['Flash lowers the wild encounter rate (not in all versions) and the enemy\'s accuracy — very useful here.'],
        pokemon: ['Geodude', 'Onix', 'Machop', 'Zubat'],
        items: ['Various TMs from trainers'],
      },
      {
        title: 'Lavender Town',
        description: 'The eerie Pokemon Tower looms here. You can\'t progress far without the Silph Scope to identify the ghost. Head west to Celadon City first.',
        tips: ['The Pokemon Tower\'s music is famously unsettling — embrace the spooky atmosphere!'],
      },
      {
        title: 'Celadon City',
        description: 'Big city with a huge Department Store. Buy TMs, evolution stones, and stocked up on supplies. The Game Corner is here — Team Rocket runs a secret base underneath it.',
        items: ['TM18 Counter', 'Fire/Water/Thunder/Leaf Stone (Department Store)', 'Eevee (from Celadon Mansion rooftop)'],
        pokemon: ['Eevee', 'Vaporeon/Jolteon/Flareon (via evolution stones)'],
        tips: [
          'The Eevee on the Celadon Mansion rooftop is free! It can evolve into three different forms.',
          'Save your coins from the Game Corner or just buy them — the prize Pokemon are great.',
        ],
      },
      {
        title: 'Gym Leader Erika',
        description: 'Erika uses Grass types: Victreebel (Lv. 29), Tangela (Lv. 24), Vileplume (Lv. 29). Fire, Ice, Poison, and Flying moves are super effective.',
        tips: ['Charmander/Charmeleon players will have an easy time here.'],
        items: ['Rainbow Badge', 'TM21 Mega Drain'],
      },
      {
        title: 'Game Corner & Rocket Hideout',
        description: 'Find the Rocket hiding behind a poster in the Game Corner to reveal the Team Rocket Hideout beneath. Fight your way down four basement floors to find the Silph Scope and face Giovanni for the first time.',
        tips: ['The Lift Key is on B4F — find it before trying to use the elevator.'],
        items: ['Silph Scope', 'TM07 Horn Drill', 'Various items throughout the hideout'],
      },
      {
        title: 'Pokemon Tower',
        description: 'With the Silph Scope, return to Lavender Town\'s Pokemon Tower. Battle your Rival on the top floors. Free Mr. Fuji from Team Rocket to receive the Pokemon Flute.',
        tips: [
          'Ghost types are immune to Normal and Fighting — use Psychic or other types.',
          'Bring many Potions and Antidotes; the tower is long and draining.',
        ],
        pokemon: ['Gastly', 'Haunter', 'Cubone'],
        items: ['Pokemon Flute'],
      },
    ],
  },
  {
    title: 'Fuchsia City & the Safari Zone',
    summary: 'Earn the Soul Badge, explore the Safari Zone for rare Pokemon, and unlock Surf.',
    steps: [
      {
        title: 'Reach Fuchsia City',
        description: 'Head south from Celadon through the long Cycling Road (you need the Bicycle). Alternatively, go east from Lavender and south through the Safari Zone entrance area.',
        tips: ['The Cycling Road requires the Bicycle and goes only south — good for a quick trip.'],
      },
      {
        title: 'Safari Zone',
        description: 'The Safari Zone is a special area where you use Bait and Rocks instead of battling to catch Pokemon. It has some of the rarest Pokemon in the game. You get 500 steps total.',
        tips: [
          'Use Bait to make Pokemon easier to catch but also more likely to flee.',
          'Use Rocks to make Pokemon harder to catch but more likely to stay.',
          'Scyther, Pinsir, Tauros, Kangaskhan, Dratini, and Chansey all live here — some are incredibly rare.',
          'Find HM03 Surf and HM04 Strength deep in the Safari Zone — these are required for progress.',
        ],
        pokemon: ['Scyther (Red)', 'Pinsir (Blue)', 'Tauros', 'Kangaskhan', 'Chansey', 'Dratini', 'Nidorina', 'Parasect'],
        items: ['HM03 Surf', 'HM04 Strength', 'Gold Teeth (for Strength HM)'],
      },
      {
        title: 'Warden\'s House',
        description: 'Return the Gold Teeth you found in the Safari Zone to the Warden outside. He will reward you with HM04 Strength.',
        items: ['HM04 Strength'],
      },
      {
        title: 'Gym Leader Koga',
        description: 'Koga uses Poison types: Koffing (Lv. 37), Muk (Lv. 39), Koffing (Lv. 37), Weezing (Lv. 43). He loves status moves — bring Antidotes and Full Heals. Psychic types rule here.',
        tips: [
          'Bring lots of Antidotes and Awakenings — Koga uses Smokescreen, Toxic, and Sleep Powder.',
          'Kadabra or any Psychic type makes this fight trivial.',
        ],
        items: ['Soul Badge', 'TM06 Toxic'],
      },
    ],
  },
  {
    title: 'Saffron City & Silph Co.',
    summary: 'Free Saffron City from Team Rocket\'s grip, storm the Silph Co. skyscraper, and defeat two gym leaders.',
    steps: [
      {
        title: 'Unlock Saffron City',
        description: 'Give a thirsty guard on Routes 5, 6, 7, or 8 a Fresh Water, Soda Pop, or Lemonade from the Celadon City Department Store to pass through to Saffron.',
        items: ['Fresh Water / Soda Pop / Lemonade'],
        tips: ['Any of the three drinks work — Lemonade from the vending machine is the best value.'],
      },
      {
        title: 'Silph Co. Takeover',
        description: 'Team Rocket has seized the 11-floor Silph Co. building. Fight through countless Rockets to find the President on the top floor. Use the Teleporters strategically.',
        tips: [
          'There are many teleporters — you\'ll need to figure out which ones lead where.',
          'Your Rival appears for another battle near the top floors.',
          'The Card Key on 5F opens all the locked doors.',
        ],
        items: ['Card Key', 'Lapras (gift from employee on 7F)', 'Master Ball (from Silph Co. President)', 'TM36 Selfdestructo'],
        pokemon: ['Lapras'],
      },
      {
        title: 'Giovanni Battle (Silph Co.)',
        description: 'Face the Team Rocket Boss Giovanni on the top floor. He uses Nidorino, Kangaskhan, Rhyhorn, and Nidoqueen. Ground-type moves from his team hit hard.',
        tips: ['Water and Grass moves work well against his Ground/Rock types.'],
      },
      {
        title: 'Saffron Gym — Sabrina',
        description: 'Sabrina\'s gym is a grid of teleporters. Navigate to her and battle her Kadabra (Lv. 38), Mr. Mime (Lv. 37), Venomoth (Lv. 38), and Alakazam (Lv. 43).',
        tips: [
          'Ghost types are technically immune to Psychic in Gen 1 (though there are bugs). Bug types are also "super effective" on paper.',
          'In practice, a strong Dark-adjacent type or high-level Haunter/Gengar works well.',
          'Her Alakazam is extremely fast and powerful — bring your strongest team.',
        ],
        items: ['Marsh Badge', 'TM46 Psywave'],
      },
      {
        title: 'Fighting Dojo',
        description: 'The Fighting Dojo near Sabrina\'s gym has been defeated by Silph Co. chaos. Beat the trainers and the Black Belt to receive either Hitmonlee or Hitmonchan.',
        tips: ['Hitmonlee is better offensively; Hitmonchan has more coverage moves.'],
        pokemon: ['Hitmonlee or Hitmonchan (your choice)'],
      },
    ],
  },
  {
    title: 'Cinnabar Island & Seafoam Islands',
    summary: 'Restore a fossil, find Moltres, and battle the flame-wielding Blaine.',
    steps: [
      {
        title: 'Seafoam Islands',
        description: 'West of Fuchsia via Surf, these icy caves contain a puzzle using boulders and Strength. At the bottom lurks the legendary Articuno.',
        tips: [
          'Bring the Master Ball or many Ultra Balls and lower Articuno\'s HP before trying to catch it.',
          'Articuno is at level 50 — have a team around level 40–50 ready.',
          'The boulder puzzle involves pushing boulders into holes to slow the current.',
        ],
        pokemon: ['Articuno', 'Seel', 'Dewgong', 'Slowpoke', 'Horsea'],
        items: ['HM02 Fly (not here — from the Route 16 house after Cut)'],
      },
      {
        title: 'Get HM02 Fly',
        description: 'Before heading to Cinnabar, backtrack to Route 16 (west of Celadon). Cut the tree, enter the gatehouse, go upstairs to find a girl who gives you HM02 Fly.',
        items: ['HM02 Fly'],
        tips: ['Fly lets you instantly travel to any city you\'ve previously visited — a game changer.'],
      },
      {
        title: 'Cinnabar Island',
        description: 'Fly or Surf south to Cinnabar Island. The Pokemon Lab here can resurrect your Fossil into Omanyte/Kabuto or Aerodactyl. Explore the Pokemon Mansion for the key to the gym.',
        items: ['Secret Key (in the Pokemon Mansion)', 'Revived Fossil Pokemon'],
        pokemon: ['Omanyte or Kabuto (from fossil)', 'Aerodactyl (Old Amber from Museum)'],
        tips: ['The Pokemon Mansion is full of powerful wild Pokemon and Rockets — great for grinding.'],
      },
      {
        title: 'Pokemon Mansion',
        description: 'Four floors of switches and spinning doors. Find the Secret Key on the bottom floor to unlock Blaine\'s gym. The mansion also hides the locations of Mew in the game\'s lore (via journal entries).',
        pokemon: ['Growlithe (Red)', 'Vulpix (Blue)', 'Ponyta', 'Magmar (Blue)', 'Koffing'],
        items: ['Secret Key', 'Various TMs and Rare Candy'],
      },
      {
        title: 'Gym Leader Blaine',
        description: 'Blaine uses Fire types: Growlithe (Lv. 42), Ponyta (Lv. 40), Rapidash (Lv. 42), Arcanine (Lv. 47). Water, Ground, and Rock moves all work well.',
        tips: [
          'Surf is your best friend here — it hits every Fire type for super effective damage.',
          'Blaine\'s team uses Fire Spin, which traps you for multiple turns. Bring Fire-resistant types.',
        ],
        items: ['Volcano Badge', 'TM38 Fire Blast'],
      },
    ],
  },
  {
    title: 'Viridian City — Giovanni & the Final Gym',
    summary: 'The last gym is finally open — and its leader is a familiar face.',
    steps: [
      {
        title: 'Viridian Gym Opens',
        description: 'With all 7 badges, return to Viridian City. The gym is finally open. Inside is a maze of invisible barriers and strong trainers.',
        tips: ['Make sure your whole team is well leveled (40+) before entering.'],
      },
      {
        title: 'Gym Leader Giovanni (Final Battle)',
        description: 'Giovanni uses Rhyhorn (Lv. 45), Dugtrio (Lv. 42), Nidoqueen (Lv. 44), Nidoking (Lv. 45), and Rhydon (Lv. 50). His team is pure Ground/Poison — Water and Ice moves are excellent.',
        tips: [
          'Surf destroys most of his team.',
          'Watch out for Dugtrio\'s extreme speed — it can outrun most Pokemon.',
          'After defeating him, he disbands Team Rocket and disappears.',
        ],
        items: ['Earth Badge', 'TM27 Fissure'],
      },
      {
        title: 'Route 22 — Rival Battle',
        description: 'Before entering Victory Road, your Rival battles you on Route 22 again with a fully evolved team.',
        tips: ['This is a good benchmark fight — if you struggle here, grind more before Victory Road.'],
      },
      {
        title: 'Victory Road',
        description: 'A cave requiring all 8 HMs to navigate. Push boulders onto switches to open doors. Filled with powerful trainers and wild Pokemon.',
        pokemon: ['Machoke', 'Geodude', 'Graveler', 'Onix', 'Zubat', 'Venomoth'],
        items: ['Various TMs'],
        tips: ['Make sure you have Cut, Surf, Strength, and Flash available before entering.'],
      },
    ],
  },
  {
    title: 'Legendary Pokemon',
    summary: 'Before taking on the Elite Four, track down the legendary birds and Mewtwo.',
    steps: [
      {
        title: 'Zapdos — Power Plant',
        description: 'Surf east on Route 10 north of Cerulean to find the abandoned Power Plant. Zapdos waits at the very back.',
        tips: ['Bring many Ultra Balls and a Pokemon that can paralyze. Zapdos is at level 50.'],
        pokemon: ['Zapdos', 'Voltorb', 'Electrode', 'Magneton'],
        items: ['Ultra Balls', 'Paralysis-inducing moves recommended'],
      },
      {
        title: 'Moltres — Victory Road',
        description: 'Moltres is found on the first floor of Victory Road, inside a dead-end area. It is level 50.',
        tips: ['Water moves work well to weaken it for catching.'],
        pokemon: ['Moltres'],
      },
      {
        title: 'Mewtwo — Cerulean Cave',
        description: 'After becoming Champion, Cerulean Cave opens north of Cerulean City. Navigate the multi-floor cave to find Mewtwo at level 70 — the strongest Pokemon in the game.',
        tips: [
          'Save before approaching Mewtwo — this is the hardest catch in the game.',
          'Consider using the Master Ball here if you haven\'t already.',
          'Lower its HP as much as possible and use Timer Balls or Ultra Balls.',
          'Mewtwo knows Recover, which heals it. Be patient.',
        ],
        pokemon: ['Mewtwo'],
      },
    ],
  },
  {
    title: 'Pokemon League — Elite Four & Champion',
    summary: 'Four powerful trainers stand between you and the Champion. This is what you\'ve trained for.',
    steps: [
      {
        title: 'Prepare Your Team',
        description: 'Stock up on Full Restores, Max Potions, Revives, and Antidotes. Your team should be level 50+ (ideally 55+). Make sure you have coverage moves for all types.',
        tips: [
          'You cannot leave once you enter the Elite Four rooms — bring lots of healing items.',
          'X items (X Attack, X Defend) can be very useful in tough fights.',
          'Having a diverse team with multiple types will carry you through.',
        ],
        items: ['Max Potions', 'Full Restores', 'Revives', 'Antidotes', 'Awakening'],
      },
      {
        title: 'Lorelei — Ice',
        description: 'Lorelei uses Dewgong (Lv. 54), Cloyster (Lv. 53), Slowbro (Lv. 54), Jynx (Lv. 56), and Lapras (Lv. 60). Electric and Grass moves are your best friends.',
        tips: [
          'Thunderbolt wrecks Dewgong, Cloyster, and Lapras instantly.',
          'Watch for Blizzard — it hits all Pokemon and has a freeze chance.',
          'Jynx knows Lovely Kiss (sleep) — bring Awakenings.',
        ],
      },
      {
        title: 'Bruno — Fighting',
        description: 'Bruno uses Onix (Lv. 53), Hitmonchan (Lv. 55), Hitmonlee (Lv. 55), Onix (Lv. 56), and Machamp (Lv. 58). Water and Psychic types are ideal.',
        tips: [
          'Psychic types absolutely destroy his Fighting Pokemon.',
          'Surf handles both Onix easily.',
          'Machamp\'s No Guard ability isn\'t in Gen 1 — still, its raw power is scary.',
        ],
      },
      {
        title: 'Agatha — Ghost',
        description: 'Agatha uses Gengar (Lv. 54), Haunter (Lv. 53), Gengar (Lv. 58), Arbok (Lv. 54), Gengar (Lv. 60). Psychic is strong against Poison. Gengar is immune to Normal/Fighting.',
        tips: [
          'Psychic types handle her Gengar and Arbok.',
          'Watch out for hypnosis and sleep moves — bring Awakenings.',
          'Normal-type moves do nothing against Ghost types.',
        ],
      },
      {
        title: 'Lance — Dragon',
        description: 'Lance uses Gyarados (Lv. 58), Dragonair (Lv. 56), Dragonair (Lv. 56), Aerodactyl (Lv. 60), and Dragonite (Lv. 62). Ice moves shred his whole team.',
        tips: [
          'Ice Beam or Blizzard is practically mandatory here.',
          'His Aerodactyl is Rock/Flying — Electric or Water works.',
          'Dragonite is the first Dragon-type in a main story fight — take it seriously.',
        ],
      },
      {
        title: 'Champion — Your Rival',
        description: 'Your Rival awaits as the Champion. His team includes his fully evolved starter, Pidgeot, Alakazam, Rhydon, Gyarados, and Arcanine (varies by your starter choice).',
        tips: [
          'His team is well rounded — you need coverage moves.',
          'Pidgeot can be a nuisance with Sand-Attack lowering accuracy.',
          'Alakazam is very fast and powerful — KO it quickly with your best attack.',
          'Congratulations — you\'re the new Kanto Champion!',
        ],
      },
    ],
  },
  {
    title: 'Post-Game',
    summary: 'Complete your Pokedex, catch Mewtwo, and trade with other games.',
    steps: [
      {
        title: 'Cerulean Cave and Mewtwo',
        description: 'Now that you\'re Champion, Cerulean Cave is open. Head through the winding cave to find Mewtwo at level 70.',
        tips: ['Mewtwo is the crown jewel of Gen 1 — save before the encounter!'],
        pokemon: ['Mewtwo'],
      },
      {
        title: 'Complete the Pokedex',
        description: 'Many Pokemon require trading between Red and Blue versions (or Yellow). Version exclusives include Ekans/Sandshrew, Oddish/Bellsprout, Growlithe/Vulpix, Scyther/Pinsir, Electabuzz/Magmar, and more.',
        tips: [
          'You need to trade to get Gengar, Alakazam, Machamp, and Golem.',
          'Professor Oak gives you a diploma for completing the Pokedex.',
        ],
      },
      {
        title: 'Diploma and Fame',
        description: 'Bring the completed Pokedex to Game Freak\'s office in Celadon City to receive a diploma from the developer.',
        items: ['Diploma'],
      },
    ],
  },
];

// ============================================================
// KANTO (Gen 3 remakes) — shared by firered, leafgreen
// ============================================================
const kantoFRLGChapters: WalkthroughChapter[] = [
  {
    title: 'Pallet Town — The Journey Begins',
    summary: 'Start your Kanto adventure with a beautiful GBA remake. The story is the same as Gen 1 but with updated mechanics and a new Sevii Islands post-game.',
    steps: [
      {
        title: 'Choose Your Starter',
        description: 'Head north from Pallet Town to be caught by Professor Oak. Choose Bulbasaur, Charmander, or Squirtle. The game plays very similarly to Red and Blue but with Gen 3 mechanics.',
        tips: [
          'Abilities are now in the game — Bulbasaur gets Overgrow, Charmander gets Blaze, Squirtle gets Torrent.',
          'The game uses the Physical/Special split... actually no, Gen 3 still uses the old system.',
          'Items and Pokemon storage have been vastly improved.',
        ],
        pokemon: ['Bulbasaur', 'Charmander', 'Squirtle'],
      },
      {
        title: 'Pallet Town to Viridian City',
        description: 'Deliver Oak\'s Parcel from Viridian to receive your Pokedex. Get the Town Map from your rival\'s sister.',
        items: ['Pokedex', 'Town Map', 'Oak\'s Parcel'],
        tips: ['FireRed/LeafGreen have a much better tutorial and item management system than the originals.'],
      },
      {
        title: 'Viridian Forest',
        description: 'Navigate the forest with its Bug Catchers. FireRed has Weedle/Kakuna/Beedrill in higher numbers; LeafGreen has more Caterpie/Metapod/Butterfree.',
        pokemon: ['Caterpie (LG)', 'Weedle (FR)', 'Pikachu', 'Nidoran♂', 'Nidoran♀'],
      },
      {
        title: 'Brock — Boulder Badge',
        description: 'Brock uses Geodude (Lv. 12) and Onix (Lv. 14). Same as the originals — Water and Grass dominate.',
        tips: ['This is identical to the Gen 1 fight. Bulbasaur and Squirtle win easily.'],
        items: ['Boulder Badge', 'TM39 Rock Tomb'],
      },
    ],
  },
  {
    title: 'Routes 3–5, Mt. Moon & Cerulean City',
    summary: 'Fight through Mt. Moon for a fossil and tackle Misty\'s gym.',
    steps: [
      {
        title: 'Mt. Moon',
        description: 'Team Rocket is mining for fossils. Navigate the cave and choose between the Dome Fossil (Kabuto) and Helix Fossil (Omanyte) at the end.',
        pokemon: ['Clefairy', 'Paras', 'Zubat', 'Geodude'],
        items: ['Dome or Helix Fossil', 'Moon Stone'],
        tips: ['Clefairy is more common in FRLG than in the originals and can be very useful.'],
      },
      {
        title: 'Misty — Cascade Badge',
        description: 'Misty\'s team is the same — Staryu (Lv. 18) and Starmie (Lv. 21) with Bubblebeam. FRLG gives her slightly better AI.',
        tips: ['Pikachu players have it easy here with Thundershock.'],
        items: ['Cascade Badge', 'TM03 Water Pulse'],
      },
    ],
  },
  {
    title: 'Vermilion to Lavender',
    summary: 'Board the S.S. Anne, defeat Lt. Surge, and investigate Lavender\'s haunted tower.',
    steps: [
      {
        title: 'S.S. Anne and Lt. Surge',
        description: 'Same structure as Gen 1. Board the ship for great EXP and the Cut HM, then puzzle out Lt. Surge\'s gym with the trash can switches.',
        items: ['HM01 Cut', 'Thunder Badge', 'TM34 Shock Wave'],
        tips: ['Ground types are still your best bet against Surge. Diglett\'s Cave is nearby.'],
      },
      {
        title: 'Rock Tunnel to Lavender Town',
        description: 'Navigate Rock Tunnel (Flash helps) and arrive in Lavender Town. You still need the Silph Scope from the Rocket Hideout before you can make progress in the Pokemon Tower.',
        pokemon: ['Geodude', 'Onix', 'Machop', 'Zubat'],
        tips: ['In FRLG, the Poke Flute is replaced by the PokeFlute Channel on the Poke Gear. You get the Channel Number from Mr. Fuji.'],
      },
      {
        title: 'Erika — Rainbow Badge',
        description: 'Erika in Celadon uses Victreebel, Tangela, and Vileplume. Fire types handle her easily.',
        items: ['Rainbow Badge', 'TM19 Giga Drain'],
      },
      {
        title: 'Game Corner & Rocket Hideout',
        description: 'Clear Team Rocket from under the Game Corner and get the Silph Scope. Then clear the Pokemon Tower to rescue Mr. Fuji.',
        items: ['Silph Scope', 'Pokemon Flute (PokeFlute channel number from Mr. Fuji)'],
      },
    ],
  },
  {
    title: 'Fuchsia, Saffron & the Sea Route',
    summary: 'Defeat Koga and Sabrina, storm Silph Co., and surf south to Cinnabar.',
    steps: [
      {
        title: 'Safari Zone and Koga',
        description: 'Grab Surf and Strength from the Safari Zone. Defeat Koga with Psychic types.',
        pokemon: ['Tauros', 'Kangaskhan', 'Scyther (FR)', 'Pinsir (LG)', 'Chansey', 'Dratini'],
        items: ['HM03 Surf', 'HM04 Strength', 'Soul Badge', 'TM27 Return'],
      },
      {
        title: 'Silph Co. and Saffron Gym',
        description: 'Give guards Fresh Water to enter Saffron. Storm Silph Co., get the Master Ball, and defeat Sabrina.',
        items: ['Master Ball', 'Lapras', 'Marsh Badge', 'TM04 Calm Mind'],
        tips: ['Calm Mind is a great TM for Psychic types — worth using on Alakazam.'],
      },
      {
        title: 'Cinnabar Island',
        description: 'Surf south, explore the Pokemon Mansion for the Secret Key, resurrect your fossil, and take on Blaine.',
        items: ['Secret Key', 'Volcano Badge', 'TM50 Overheat'],
        pokemon: ['Omanyte or Kabuto', 'Aerodactyl'],
        tips: ['The Pokemon Mansion contains Blaine\'s diary hinting at Mewtwo\'s creation.'],
      },
      {
        title: 'Giovanni — Final Gym',
        description: 'Return to Viridian Gym. Giovanni uses Ground types: Rhyhorn, Dugtrio, Nidoqueen, Nidoking, Rhydon.',
        items: ['Earth Badge', 'TM26 Earthquake'],
        tips: ['Earthquake TM from Giovanni is one of the best TMs in the game.'],
      },
    ],
  },
  {
    title: 'Victory Road & the Pokemon League',
    summary: 'Trek through Victory Road and face the Elite Four.',
    steps: [
      {
        title: 'Victory Road',
        description: 'Navigate the long cave using Strength to push boulders. Trainers here have high-level Pokemon — great for last-minute grinding.',
        pokemon: ['Machoke', 'Graveler', 'Onix', 'Golbat'],
        tips: ['Level your team to 50+ before attempting the Elite Four.'],
      },
      {
        title: 'Elite Four: Lorelei, Bruno, Agatha, Lance',
        description: 'Same as Gen 1 with slightly updated teams and Gen 3 mechanics. Bring Ice coverage for Lance, Psychic for Bruno and Agatha, and Electric for Lorelei.',
        tips: [
          'Full Restores are expensive but essential — bring 20+.',
          'Lance\'s Dragonite now has better moves in the remake.',
        ],
        items: ['Full Restores', 'Revives'],
      },
      {
        title: 'Champion — Your Rival',
        description: 'Same rival fight as the original, now with Gen 3 mechanics. His team reflects your starter choice.',
        tips: ['Congratulations! After becoming Champion, the Sevii Islands await.'],
      },
    ],
  },
  {
    title: 'Sevii Islands Post-Game',
    summary: 'Explore the brand-new Sevii Islands exclusive to FireRed and LeafGreen.',
    steps: [
      {
        title: 'One Island to Three Island',
        description: 'Bill takes you to One Island after the Hall of Fame. Deliver the Meteorite to find your way into the Network Machine. Visit Two Island and Three Island to progress the side story.',
        items: ['Tri-Pass', 'Meteorite (One Island)'],
        tips: ['These islands have Pokemon not normally found in Kanto — great for filling the Pokedex.'],
        pokemon: ['Chansey', 'Lickitung', 'Jinx', 'Electabuzz (FR)', 'Magmar (LG)'],
      },
      {
        title: 'Four through Seven Islands',
        description: 'After getting the National Dex upgrade (60+ Pokemon seen), you can visit islands 4–7. These feature more rare Pokemon, ruins, and the Navel Rock and Birth Island events.',
        tips: [
          'The Sevii Islands allow you to catch Pokemon from Gold/Silver that are otherwise unavailable in Kanto.',
          'Navel Rock holds Ho-Oh (FR) and Lugia (LG) via event Mystery Gift.',
          'Birth Island holds Deoxys via event.',
        ],
        pokemon: ['Psyduck', 'Slowpoke', 'Magikarp', 'Togepi', 'Marill', 'Delibird', 'Sneasel', 'Murkrow', 'Houndour (LG)', 'Larvitar'],
      },
      {
        title: 'Cerulean Cave and Mewtwo',
        description: 'Return to Cerulean Cave after unlocking the National Dex to find Mewtwo at level 70.',
        pokemon: ['Mewtwo'],
        tips: ['Use the Master Ball or bring many Ultra Balls and a fast paralysis inducer.'],
      },
    ],
  },
];

// ============================================================
// KANTO (Let's Go) — shared by lets-go-pikachu, lets-go-eevee
// ============================================================
const kantoLetsGoChapters: WalkthroughChapter[] = [
  {
    title: 'Pallet Town — Partnering Up',
    summary: 'Start your adventure with your partner Pikachu or Eevee in this console remake designed for new and returning players.',
    steps: [
      {
        title: 'Meet Your Partner',
        description: 'Unlike classic games, your partner Pokemon (Pikachu or Eevee) is given to you immediately and travels on your shoulder. It can learn exclusive "Secret Techniques" and special moves.',
        tips: [
          'Your partner cannot be evolved or put in a box — it\'s always with you.',
          'In Let\'s Go Pikachu, your partner Pikachu learns Zippy Zap, Splishy Splash, and Floaty Fall.',
          'In Let\'s Go Eevee, your partner Eevee can learn Bouncy Bubble, Buzzy Buzz, Sizzly Slide, and more elemental moves.',
          'Play with your partner in the main menu to raise its stats temporarily.',
        ],
        pokemon: ['Partner Pikachu (LGP)', 'Partner Eevee (LGE)'],
      },
      {
        title: 'Catching Pokemon — New Mechanic',
        description: 'Wild battles are replaced entirely by a Go-style catching mechanic. Throw Poke Balls at wild Pokemon in real-time. Use Razz Berries to make them easier to catch.',
        tips: [
          'You still battle trainers normally.',
          'Catching many of the same species gives you combo bonuses and candy.',
          'Candy increases your Pokemon\'s stats permanently — catch multiples for easy candies.',
          'If using a Joy-Con, motion controls let you physically throw the ball.',
        ],
        items: ['Poke Balls', 'Razz Berries', 'Great Berries', 'Ultra Berries'],
      },
      {
        title: 'Viridian City and First Steps',
        description: 'Head north from Pallet and deliver Oak\'s Package from the Poke Mart. Get the Pokedex and Town Map. Wild Pokemon now appear on the overworld rather than in random encounters.',
        items: ['Pokedex', 'Town Map'],
        tips: ['Wild Pokemon visible on the overworld means you can avoid fights or choose which Pokemon to catch.'],
      },
    ],
  },
  {
    title: 'Pewter City — Brock',
    summary: 'Defeat Brock and head east toward Mt. Moon.',
    steps: [
      {
        title: 'Viridian Forest',
        description: 'The forest is shorter than in Gen 1. Wild Bug and Pikachu-family Pokemon roam visibly. In Let\'s Go Eevee, Pikachu appears frequently here.',
        pokemon: ['Caterpie', 'Weedle', 'Pikachu'],
        tips: ['Pikachu has a high catch rate — grab one if you\'re playing Let\'s Go Eevee.'],
      },
      {
        title: 'Gym Leader Brock',
        description: 'Brock uses Geodude (Lv. 12) and Onix (Lv. 14). Partner Eevee can learn Water-type moves before this fight — check the Move Tutor in Cerulean.',
        tips: [
          'Partner Eevee can learn Bouncy Bubble (Water) from the Move Tutor in Cerulean — but you need to come back.',
          'For now, use whatever Grass or Water types you\'ve caught.',
        ],
        items: ['Boulder Badge'],
      },
    ],
  },
  {
    title: 'Mt. Moon to Cerulean',
    summary: 'Navigate Mt. Moon and get your Cascade Badge from Misty.',
    steps: [
      {
        title: 'Mt. Moon',
        description: 'Team Rocket is here hunting for fossils. Wild Pokemon appear on screen. Grab your fossil of choice at the end.',
        pokemon: ['Zubat', 'Clefairy', 'Paras', 'Geodude', 'Jigglypuff'],
        items: ['Dome or Helix Fossil'],
      },
      {
        title: 'Misty — Cascade Badge',
        description: 'Misty uses Staryu (Lv. 19) and Starmie (Lv. 23). Partner Pikachu\'s Thunderbolt-equivalent move handles both easily.',
        tips: ['Partner Pikachu handles this gym effortlessly with its powerful Electric moves.'],
        items: ['Cascade Badge'],
      },
      {
        title: 'Nugget Bridge Rival and Trainer Trace',
        description: 'Your new rival Trace appears throughout the game. He battles you on Nugget Bridge. He\'s friendly and upbeat — a big change from the original rival.',
        tips: ['Trace\'s team adapts to be the starter type that\'s weak to yours.'],
      },
    ],
  },
  {
    title: 'Vermilion to Lavender',
    summary: 'S.S. Anne, Lt. Surge, and the haunted Pokemon Tower.',
    steps: [
      {
        title: 'S.S. Anne',
        description: 'Board the ship for great trainer battles and receive HM Cut (now a Secret Technique called "Chop Down" taught to your partner).',
        items: ['Secret Technique: Chop Down'],
        tips: ['In Let\'s Go, HMs are replaced by Secret Techniques taught exclusively to your partner Pokemon.'],
      },
      {
        title: 'Lt. Surge — Thunder Badge',
        description: 'Surge uses Voltorb (Lv. 21), Pikachu (Lv. 26), and Raichu (Lv. 28). Ground types are immune. Partner Eevee can learn Ground-adjacent moves.',
        items: ['Thunder Badge'],
        tips: ['A Diglett or Geodude from nearby routes handles Surge\'s team easily.'],
      },
      {
        title: 'Lavender Town and Pokemon Tower',
        description: 'Get the Silph Scope from the Rocket Hideout in Celadon, then clear Pokemon Tower. Your partner\'s Secret Technique "Light Up" replaces Flash here.',
        items: ['Silph Scope', 'Pokemon Flute channel number'],
        pokemon: ['Gastly', 'Haunter', 'Cubone'],
      },
    ],
  },
  {
    title: 'Celadon, Fuchsia & Saffron',
    summary: 'Defeat three more gym leaders and take down Team Rocket.',
    steps: [
      {
        title: 'Erika — Rainbow Badge',
        description: 'Erika uses Grass types. Partner Pikachu\'s Sizzly Slide (Fire) makes this trivial.',
        items: ['Rainbow Badge'],
        tips: ['Get Eevee\'s fire move from the Move Tutor if playing Let\'s Go Eevee.'],
      },
      {
        title: 'Koga — Soul Badge',
        description: 'Koga uses Poison types. Psychic attacks dominate. Alolan Grimer and Muk appear in his gym.',
        items: ['Soul Badge'],
        tips: ['Partner Pikachu handles Poison types with its varied move pool.'],
      },
      {
        title: 'Silph Co.',
        description: 'Storm the Team Rocket headquarters. Receive the Master Ball from the President. Giovanni awaits on the top floor.',
        items: ['Master Ball', 'Lapras'],
        pokemon: ['Lapras'],
      },
      {
        title: 'Sabrina — Marsh Badge',
        description: 'Sabrina uses Psychic types. Ghost types resist her or use Dark-type moves.',
        items: ['Marsh Badge'],
      },
    ],
  },
  {
    title: 'Cinnabar Island & Viridian Gym',
    summary: 'Blaine\'s fire quiz gym and Giovanni\'s final stand.',
    steps: [
      {
        title: 'Cinnabar Island',
        description: 'Surf south. The Pokemon Mansion hides the Secret Key for Blaine\'s gym. Resurrect your fossil in the Pokemon Lab.',
        items: ['Secret Key', 'Revived Fossil Pokemon'],
        pokemon: ['Aerodactyl (from Old Amber in Pewter Museum)', 'Omanyte or Kabuto'],
        tips: ['In Let\'s Go, the Old Amber is found in the Pewter Museum for free.'],
      },
      {
        title: 'Blaine — Volcano Badge',
        description: 'Blaine uses Growlithe (Lv. 42), Arcanine (Lv. 47), Rapidash (Lv. 40), Ninetales (Lv. 44). Water and Rock moves work well.',
        items: ['Volcano Badge'],
        tips: ['Surfing on your partner Pokemon is a key Secret Technique — use it to reach Cinnabar.'],
      },
      {
        title: 'Giovanni — Earth Badge',
        description: 'Giovanni uses Rhyhorn, Nidoqueen, Nidoking, and Rhydon. Water moves from your partner Pokemon or Surf wipe his team.',
        items: ['Earth Badge'],
      },
    ],
  },
  {
    title: 'Victory Road & Elite Four',
    summary: 'The final stretch — Victory Road and the Pokemon League.',
    steps: [
      {
        title: 'Victory Road',
        description: 'The cave requires Secret Techniques to navigate. Wild Pokemon are visible on the floor. Strong trainers await throughout.',
        pokemon: ['Machoke', 'Graveler', 'Onix'],
        tips: ['Level up to 50+ before the Elite Four.'],
      },
      {
        title: 'Elite Four',
        description: 'Lorelei (Ice), Bruno (Fighting), Agatha (Ghost/Poison), Lance (Dragon). Same format as Gen 1 but with updated teams using Let\'s Go mechanics.',
        tips: [
          'Thunderbolt handles Lorelei\'s Water/Ice types.',
          'Psychic handles Bruno and Agatha.',
          'Ice Beam handles Lance\'s Dragons.',
        ],
        items: ['Full Restores', 'Revives'],
      },
      {
        title: 'Champion Trace',
        description: 'Your rival Trace is the Champion! His friendly demeanor hides a capable trainer. His team includes the fully evolved starter strong against yours.',
        tips: ['Trace has a balanced team — bring coverage for multiple types.'],
      },
    ],
  },
  {
    title: 'Post-Game: Master Trainers & Legendary Pokemon',
    summary: 'Challenge the Master Trainers and catch every legendary.',
    steps: [
      {
        title: 'Legendary Birds',
        description: 'Articuno (Seafoam Islands), Zapdos (Power Plant), and Moltres (Victory Road) all appear in their classic locations but now roam the overworld.',
        tips: ['You battle them rather than catching them in the wild — they join you when you "win" the fight.'],
        pokemon: ['Articuno', 'Zapdos', 'Moltres'],
      },
      {
        title: 'Mewtwo — Cerulean Cave',
        description: 'Mewtwo is at level 70 in Cerulean Cave. This is a full boss battle with catching mechanics afterward.',
        tips: ['Use your Master Ball if you want a sure catch.'],
        pokemon: ['Mewtwo'],
      },
      {
        title: 'Secret Technique: Sea Skim & Sky Dash',
        description: 'Sea Skim (Surf) and Sky Dash (Fly) are learned from NPCs in Fuchsia City and various locations.',
        items: ['Sea Skim (from man near Fuchsia Safari Zone)', 'Sky Dash (from man in Pallet Town after reaching Celadon)'],
      },
      {
        title: 'Master Trainers',
        description: 'After becoming Champion, 153 Master Trainers appear across Kanto — one for each Pokemon including Mew. Each challenges you to a 1-on-1 fight with only that specific Pokemon species.',
        tips: [
          'Master Trainers only allow you to use the same species they\'re training.',
          'Maximize your Pokemon\'s stats with Candy before challenging tough Master Trainers.',
          'Defeat all 153 for special recognition.',
        ],
      },
    ],
  },
];

// ============================================================
// JOHTO (Gen 2) — shared by gold, silver, crystal
// ============================================================
const johtoGen2Chapters: WalkthroughChapter[] = [
  {
    title: 'New Bark Town — A New Beginning',
    summary: 'Start in the small town of New Bark Town and choose your first partner. Johto awaits!',
    steps: [
      {
        title: 'Choose Your Starter',
        description: 'Professor Elm\'s lab is in New Bark Town. Choose between Chikorita (Grass), Cyndaquil (Fire), and Totodile (Water). Each is excellent in its own way.',
        tips: [
          'Cyndaquil is considered the easiest starter — it evolves into the powerful Typhlosion.',
          'Totodile becomes Feraligatr, a strong Physical attacker.',
          'Chikorita becomes Meganium — it struggles against the first several gyms but has great support movepool.',
          'In Crystal, Kris/Lyra is the female playable character for the first time.',
        ],
        pokemon: ['Chikorita', 'Cyndaquil', 'Totodile'],
      },
      {
        title: 'Rival Encounter',
        description: 'Your rival Silver sneaks into Professor Elm\'s lab and steals a starter Pokemon (the one strong against yours). He\'ll be your antagonist throughout the game.',
        tips: ['Silver is one of the most compelling rivals in the series — he\'s genuinely antagonistic and grows throughout the story.'],
      },
      {
        title: 'New Bark Town to Cherrygrove City',
        description: 'Head east, then north to Cherrygrove City. A friendly old man shows you around and gives you the Running Shoes. Continue to Mr. Pokemon\'s house on Route 30.',
        items: ['Running Shoes', 'Mystery Egg (from Mr. Pokemon — it hatches into Togepi)', 'Pokedex (from Oak at Mr. Pokemon\'s house)'],
        tips: ['The Mystery Egg eventually hatches into Togepi — a Fairy type that was all Normal type then.'],
        pokemon: ['Togepi (from egg)'],
      },
      {
        title: 'First Rival Battle',
        description: 'Silver ambushes you on Route 29 while you\'re returning from Mr. Pokemon\'s house. Quick battle — not hard.',
        tips: ['This fight just uses basic moves — just use your starter\'s best attack.'],
      },
    ],
  },
  {
    title: 'Violet City — Falkner\'s Gym',
    summary: 'Explore Sprout Tower and earn the Zephyr Badge from the bird-trainer Falkner.',
    steps: [
      {
        title: 'Route 30 and 31',
        description: 'Head north through these routes to reach Violet City. The dark caves require Flash later. Grab a Bellsprout from a trade if you don\'t have one.',
        pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Rattata', 'Poliwag', 'Bellsprout'],
        tips: ['Bellsprout can be traded from an NPC in Violet City for an Onix — Onix is useful for Falkner!'],
      },
      {
        title: 'Sprout Tower',
        description: 'This swaying tower north of Violet City is filled with Sages training Bellsprout. Team Rocket is up to mischief here. Defeat them to receive Flash.',
        pokemon: ['Bellsprout', 'Hoothoot'],
        items: ['HM05 Flash', 'TM70 Flash'],
        tips: ['Flash will be needed in the dark caves of Johto later.'],
      },
      {
        title: 'Gym Leader Falkner',
        description: 'Falkner uses Pidgey (Lv. 7) and Pidgeot... wait, Pidgeotto (Lv. 9). Flying types are weak to Electric, Ice, and Rock. Onix from the trade helps.',
        tips: [
          'This is an easy gym overall — just bring your starter or any basic Pokemon.',
          'Rock-type moves are super effective against Flying.',
          'Watch out for Mud-Slap lowering your accuracy.',
        ],
        items: ['Zephyr Badge', 'TM31 Mud-Slap'],
      },
      {
        title: 'Hatch the Mystery Egg',
        description: 'Walk enough steps for the Mystery Egg to hatch. Togepi is weak at first but evolves into Togetic with high Friendship — make it happy!',
        tips: ['Give Togepi a Soothe Bell and keep it in your party to raise Friendship quickly.'],
        pokemon: ['Togepi'],
      },
    ],
  },
  {
    title: 'Azalea Town — Bugsy\'s Gym & Team Rocket in Slowpoke Well',
    summary: 'Rescue the Slowpoke from Team Rocket and tackle the Bug-type gym.',
    steps: [
      {
        title: 'Union Cave',
        description: 'Head south through Union Cave to reach Azalea Town. The cave connects Violet City to Azalea and is revisitable — the bottom floor has a rare encounter on Fridays.',
        pokemon: ['Rattata', 'Geodude', 'Zubat', 'Slowpoke', 'Onix'],
        tips: ['Come back on Fridays to find Lapras swimming in the bottom of Union Cave!'],
      },
      {
        title: 'Slowpoke Well',
        description: 'Team Rocket is cutting off Slowpoke tails to sell them. Defeat the Rocket at the entrance, then dive into the well to fight all the Rockets and save the Slowpoke.',
        tips: ['This is one of the most iconic moments showing Team Rocket\'s cruelty — great storytelling.'],
        pokemon: ['Slowpoke'],
        items: ['Lure Ball'],
      },
      {
        title: 'Gym Leader Bugsy',
        description: 'Bugsy uses Metapod (Lv. 14), Kakuna (Lv. 14), and Scyther (Lv. 16). Fire and Flying moves wreck his team. Scyther hits hard with Fury Cutter.',
        tips: [
          'Cyndaquil/Quilava\'s Ember wrecks everything here.',
          'Watch out for Scyther\'s Fury Cutter — it doubles in power each time it hits.',
          'Don\'t let Scyther set up Swords Dance.',
        ],
        items: ['Hive Badge', 'TM49 Fury Cutter'],
      },
      {
        title: 'Rival Battle in Ilex Forest',
        description: 'Silver ambushes you right after the gym. He has a stronger team now including his evolved starter.',
        tips: ['Heal up after Bugsy before exiting the gym.'],
      },
    ],
  },
  {
    title: 'Ilex Forest & Goldenrod City',
    summary: 'Navigate the mysterious Ilex Forest and take on Whitney\'s dreaded Miltank.',
    steps: [
      {
        title: 'Ilex Forest',
        description: 'Help an NPC catch their runaway Farfetch\'d to receive HM01 Cut. The forest also hides the Ilex Forest Shrine where Celebi can be found via event.',
        items: ['HM01 Cut'],
        pokemon: ['Oddish', 'Psyduck', 'Poliwag', 'Hoothoot', 'Paras'],
        tips: ['You need to chase the Farfetch\'d in the right order — follow it carefully.'],
      },
      {
        title: 'Goldenrod City',
        description: 'The biggest city in Johto! The Radio Tower here broadcasts all over Johto. Visit the Game Corner, the Magnet Train station (needs the Pass), Bill\'s house (he upgrades your PC), and the Bike Shop.',
        items: ['Bicycle (from Bike Shop — free!)', 'TM27 Return (from Move Tutor)', 'Coin Case'],
        tips: ['The Bicycle is free this time — just talk to the shop owner!'],
      },
      {
        title: 'Goldenrod City Underground',
        description: 'The underground tunnel connects the north and south gates and has a Haircut Brothers shop (raises Pokemon happiness) and a girl who gives you the Coin Case.',
        items: ['Coin Case'],
        tips: ['The Underground Haircut Brothers are very useful for evolution-based happiness Pokemon.'],
      },
      {
        title: 'Whitney — The Normal Nightmare',
        description: 'Whitney uses Clefairy (Lv. 18) and Miltank (Lv. 20). Miltank\'s Rollout attack is infamous — it gets stronger each hit and Attract makes male Pokemon infatuated.',
        tips: [
          'Use a female Pokemon to avoid Attract.',
          'Rock/Steel types resist Rollout.',
          'Paralyze Miltank with Thunder Wave as soon as possible.',
          'Use a Ghost type to dodge Rollout entirely (it\'s Normal-type).',
          'Whitney cries after losing — talk to her again to get the badge.',
        ],
        items: ['Plain Badge', 'TM45 Attract (after she stops crying and gives it to you)'],
      },
    ],
  },
  {
    title: 'Ecruteak City — Mortimer & The Legendary Beasts',
    summary: 'Explore the Burned Tower and release three legendary Pokemon.',
    steps: [
      {
        title: 'National Park',
        description: 'This park between Goldenrod and Ecruteak hosts the Bug-Catching Contest on Tuesdays, Thursdays, and Saturdays. Win first place for a Sun Stone.',
        pokemon: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Butterfree', 'Beedrill', 'Scyther', 'Pinsir'],
        items: ['Sun Stone (1st place prize)'],
        tips: ['Aim for a high-score Scyther or Pinsir for the best chance to win the Sun Stone.'],
      },
      {
        title: 'Ecruteak City',
        description: 'This ancient city is the cultural heart of Johto. The Kimono Girls perform here — you\'ll need to impress them later for the endgame. Eusine (Crystal only) chases Suicune here.',
        tips: ['Visit the Kimono Girls\' theater for story context — they play a major role in the endgame.'],
      },
      {
        title: 'Burned Tower',
        description: 'The Burned Tower collapsed and is now home to wild Pokemon. Deep inside, find the legendary beasts — Raikou, Entei, and Suicune — frozen in place. When Eusine triggers them, they awaken and scatter across Johto.',
        pokemon: ['Raikou', 'Entei', 'Suicune', 'Magmar', 'Koffing', 'Zubat'],
        tips: [
          'The Legendary Beasts now roam Johto at random — use your Pokedex to track their location.',
          'They flee on the first turn. Mean Look or a fast Pokemon with a trapping move is needed to catch them.',
          'Crystal players can catch Suicune at a special location instead of it roaming.',
        ],
      },
      {
        title: 'Ecruteak Gym — Morty',
        description: 'Morty uses Ghost types: Gastly (Lv. 21), Haunter (Lv. 21), Haunter (Lv. 23), Gengar (Lv. 25). Only Normal and Fighting are blocked — use Psychic or Dark.',
        tips: [
          'Dark-type moves (Bite, Crunch) are very effective here.',
          'Avoid using Normal-type moves — they do nothing.',
          'A Kadabra or Espeon destroys his team quickly.',
        ],
        items: ['Fog Badge', 'TM30 Shadow Ball'],
      },
    ],
  },
  {
    title: 'Olivine & Cianwood — Jasmine & Chuck',
    summary: 'Heal a sick Ampharos, sail to Cianwood, and earn two more badges.',
    steps: [
      {
        title: 'Surf West to Olivine City',
        description: 'Surf west from Ecruteak (get Surf from the Kimono Girls\' dance instructor in Ecruteak first). Olivine is a port city with the Glitter Lighthouse.',
        items: ['HM03 Surf (from Eusine in Ecruteak after clearing Burned Tower)'],
        pokemon: ['Tentacool', 'Tentacruel', 'Staryu'],
        tips: ['Surf is given to you relatively early in Gold/Silver — use it to access new routes.'],
      },
      {
        title: 'Glitter Lighthouse',
        description: 'The lighthouse Pokemon Ampharos (nicknamed Amphy) is sick and needs the SecretPotion from a pharmacy in Cianwood. Climb to the top and meet Jasmine who explains the situation.',
        tips: ['You\'ll have to cross to Cianwood City by surfing — it\'s to the southwest of Olivine.'],
      },
      {
        title: 'Cianwood City',
        description: 'Head southwest across the water. Battle the trainers along the way for great EXP. Find the pharmacy for the SecretPotion and prepare to face Chuck.',
        items: ['SecretPotion', 'HM02 Fly (from Chuck\'s wife after defeating him)'],
        pokemon: ['Shuckle (gift from a man in Cianwood)'],
        tips: ['A man in Cianwood gives you a Shuckle temporarily — you can keep it by making it happy enough.'],
      },
      {
        title: 'Chuck — Cianwood Gym',
        description: 'Chuck uses Primeape (Lv. 27) and Poliwrath (Lv. 30). Flying and Psychic types handle his Fighting-type team.',
        tips: [
          'Your starter should be strong enough by now.',
          'Poliwrath is also Water type — Electric or Grass works on it too.',
        ],
        items: ['Storm Badge', 'TM01 DynamicPunch'],
      },
      {
        title: 'Return to Olivine — Jasmine',
        description: 'Fly back to Olivine and give Jasmine the SecretPotion. Now she\'ll battle you. Jasmine uses Steel types: Magnemite (Lv. 30), Magnemite (Lv. 30), Steelix (Lv. 35).',
        tips: [
          'Fire and Fighting moves destroy Steel types.',
          'Steelix has enormous Defense — use Special attacks rather than Physical ones.',
          'Her Steelix uses Screech to lower your Defense before Sandstorm and Iron Tail.',
        ],
        items: ['Mineral Badge', 'TM23 Iron Tail'],
      },
    ],
  },
  {
    title: 'Mahogany Town & Team Rocket\'s Lake Hideout',
    summary: 'Break up Team Rocket\'s radio wave scheme and earn the Ice Badge.',
    steps: [
      {
        title: 'Route 42 and Pryce\'s Gym',
        description: 'Head east from Ecruteak through Route 42 (Surf needed to navigate fully). Arrive in Mahogany Town, but the gym is blocked by a red Gyarados sighting at the Lake of Rage.',
        tips: ['The Lake of Rage is just north of Mahogany Town.'],
      },
      {
        title: 'Lake of Rage — Red Gyarados',
        description: 'A red (shiny) Gyarados is rampaging in the lake, controlled by Team Rocket\'s radio signals. Catch or defeat it — this is the series\' first guaranteed Shiny Pokemon encounter!',
        tips: [
          'Catch the Red Gyarados! It\'s a guaranteed Shiny — a very rare opportunity.',
          'Use the first turn to put it to sleep or paralyze, then throw balls.',
          'Even if you beat it without catching, you still get the Red Scale.',
        ],
        pokemon: ['Red Gyarados'],
        items: ['Red Scale (from Red Gyarados)', 'Shiny Gyarados if caught'],
      },
      {
        title: 'Team Rocket Hideout under Mahogany',
        description: 'Lance of the Elite Four is already investigating. Team Rocket has a base under the Mahogany Town shop. Fight through their forces, disable the generator, and stop the radio signals.',
        tips: [
          'Lance helps you out here — he\'s on your side.',
          'There are multiple items to grab in the hideout.',
          'The passwords for the door change — pay attention to conversations to learn them.',
        ],
        items: ['TM46 Thief', 'Various items from grunts'],
      },
      {
        title: 'Pryce — Mahogany Gym',
        description: 'Pryce uses Seel (Lv. 27), Dewgong (Lv. 29), Piloswine (Lv. 31). Ice types are weak to Fire, Fighting, Rock, and Steel.',
        tips: [
          'This gym has an ice-floor sliding puzzle — take your time.',
          'Fire, Fighting, and Rock moves are best here.',
          'Piloswine is Ice/Ground — don\'t use Electric, Poison, or Normal.',
        ],
        items: ['Glacier Badge', 'TM16 Icy Wind'],
      },
    ],
  },
  {
    title: 'Goldenrod Radio Tower — Stopping Team Rocket',
    summary: 'Team Rocket has taken over the Goldenrod Radio Tower. Stop them and save the Johto airwaves.',
    steps: [
      {
        title: 'Blackthorn City Route',
        description: 'After Pryce, head toward Blackthorn City through Ice Path, a puzzle-filled ice cave.',
        pokemon: ['Delibird (Silver only)', 'Swinub', 'Jynx', 'Sneasel (Gold only at night)'],
        items: ['HM07 Waterfall (found in Ice Path)', 'TM44 Rest'],
        tips: ['Waterfall is needed to ascend to certain areas — grab it here.'],
      },
      {
        title: 'Team Rocket Radio Tower Takeover',
        description: 'Trainers disguised as Rocket grunts tip you off that Team Rocket has seized the Goldenrod Radio Tower. Fight through all five floors to reach the boss.',
        tips: [
          'You need the Card Key from the Underground to access higher floors.',
          'The real Director is locked in a cell in the nearby Goldenrod Underground.',
          'This is an extended dungeon — come well supplied.',
        ],
        items: ['Card Key (from Underground Warehouse)', 'Clear Bell (Crystal, from the Director) or Rainbow Wing/Silver Wing'],
      },
      {
        title: 'Defeat the Team Rocket Executive',
        description: 'Fight the Executive at the top of the Radio Tower who has been pretending to be the director. Defeating him ends Team Rocket\'s final scheme and they disband for good.',
        tips: ['After this point, Team Rocket is gone from the story permanently.'],
        items: ['Rainbow Wing (Gold/HeartGold) or Silver Wing (Silver/SoulSilver) — allows catching the game\'s legendary bird'],
      },
    ],
  },
  {
    title: 'Blackthorn City — Clair & Dragon\'s Den',
    summary: 'Face the most challenging gym leader in Johto and prove yourself in the Dragon\'s Den.',
    steps: [
      {
        title: 'Ice Path',
        description: 'A tricky ice-floor dungeon connecting Mahogany to Blackthorn. Slide on the ice to navigate the puzzle rooms. Grab the useful HMs and TMs hidden here.',
        pokemon: ['Delibird', 'Swinub', 'Jynx', 'Zubat'],
        items: ['HM07 Waterfall', 'TM44 Rest'],
      },
      {
        title: 'Blackthorn City',
        description: 'Home of the Dragon-type gym. The Dragon\'s Den is a cave behind the gym with a sacred shrine. You must answer the Dragon Shrine Master\'s quiz after beating Clair.',
        tips: ['The Move Deleter in Blackthorn can delete HMs from your Pokemon — very useful.'],
      },
      {
        title: 'Clair — Blackthorn Gym',
        description: 'Clair uses Dragonair (Lv. 37), Dragonair (Lv. 37), Dragonair (Lv. 37), and Kingdra (Lv. 40). Ice is the best move type here, but Kingdra resists everything except Dragon.',
        tips: [
          'Ice Beam or Blizzard from an Ice type destroys her Dragonairs instantly.',
          'Kingdra is Water/Dragon — it only takes neutral damage from Ice. Dragon vs Dragon works.',
          'Clair refuses to give the badge initially — head into the Dragon\'s Den and answer the quiz first.',
        ],
        items: ['Rising Badge', 'TM24 DragonBreath (only after completing the Dragon\'s Den quiz)'],
      },
      {
        title: 'Dragon\'s Den Quiz',
        description: 'A Shrine Master asks you several questions about Pokemon battling philosophy. Answer with kindness and sportsmanship — the "correct" answers reflect good trainer values.',
        tips: [
          'The "right" answers are the ones that show respect for Pokemon.',
          'After the quiz, you receive Dratini as a gift (it knows Extreme Speed if you answered correctly)!',
        ],
        items: ['Dratini (with Extreme Speed if answers are correct)'],
        pokemon: ['Dratini'],
      },
    ],
  },
  {
    title: 'The Pokemon League & Silver Cave',
    summary: 'Take on the Johto Elite Four and the true final Champion.',
    steps: [
      {
        title: 'Preparing for Victory Road',
        description: 'Head south from New Bark Town (Surf east to get there) to reach the Pokemon League entrance. Stock up on Full Restores, Revives, and Ethers in Blackthorn or New Bark.',
        tips: ['Your team should be level 40–50 before entering. The Johto Elite Four is challenging.'],
        items: ['Full Restores', 'Max Ethers', 'Revives'],
      },
      {
        title: 'Elite Four: Will',
        description: 'Will uses Psychic types: Xatu (Lv. 40), Jynx (Lv. 41), Exeggutor (Lv. 41), Slowbro (Lv. 41), Xatu (Lv. 42). Dark and Ghost moves work great.',
        tips: ['Umbreon or Espeon are excellent choices here.'],
      },
      {
        title: 'Elite Four: Koga',
        description: 'Koga (formerly Fuchsia Gym Leader) uses Poison types: Ariados (Lv. 40), Venomoth (Lv. 41), Forretress (Lv. 43), Muk (Lv. 42), Crobat (Lv. 44).',
        tips: [
          'Psychic moves destroy most of his team.',
          'Crobat is very fast — have a fast Pokemon or a priority move ready.',
          'Forretress sets up Toxic Spikes — try to knock it out quickly.',
        ],
      },
      {
        title: 'Elite Four: Bruno',
        description: 'Bruno uses Fighting types: Hitmontop (Lv. 42), Hitmonlee (Lv. 42), Hitmonchan (Lv. 42), Onix (Lv. 43), Machamp (Lv. 46). Psychic and Flying decimate his team.',
        tips: ['His Machamp has No Guard in later generations but not here — still hits hard with Cross Chop.'],
      },
      {
        title: 'Elite Four: Karen',
        description: 'Karen uses Dark types: Umbreon (Lv. 42), Vileplume (Lv. 42), Gengar (Lv. 45), Murkrow (Lv. 44), Houndoom (Lv. 47). Fighting moves work on Dark types.',
        tips: [
          'Houndoom is Dark/Fire — Water and Fighting are your best bets.',
          'Karen is the one who says "Strong Pokemon. Weak Pokemon. That is only the selfish perception of people" — iconic.',
        ],
      },
      {
        title: 'Champion Lance',
        description: 'Lance is now the Johto Champion! He uses Gyarados (Lv. 44), Dragonite (Lv. 47), Dragonite (Lv. 47), Aerodactyl (Lv. 46), Charizard (Lv. 46), and Dragonite (Lv. 50).',
        tips: [
          'Ice moves are essential — they hit his three Dragonite for 4x damage.',
          'Thunderbolt handles his Gyarados.',
          'His team is surprisingly well-rounded but Ice Beam wins the day.',
        ],
      },
    ],
  },
  {
    title: 'Post-Game: Kanto',
    summary: 'After defeating the Johto Elite Four, an entire second region opens up — Kanto!',
    steps: [
      {
        title: 'Sail to Kanto',
        description: 'Board the ferry in Olivine City to sail to Vermilion City in Kanto. The whole of Kanto from Gen 1 is available to explore — it\'s like getting a second game for free.',
        tips: [
          'All 8 Kanto gym leaders are here, waiting with much higher level Pokemon than in Gen 1.',
          'You need all 8 Kanto badges to access the final content.',
          'Kanto is slightly toned down compared to Gen 1 but still large and explorable.',
        ],
      },
      {
        title: 'Kanto Gym Leaders',
        description: 'All 8 Kanto gym leaders return with much higher levels: Brock (Lv. 51+), Misty (Lv. 54+), Lt. Surge (Lv. 51+), Erika (Lv. 54+), Janine (replacing Koga, Lv. 53+), Sabrina (Lv. 55+), Blaine (Lv. 54+), Blue (replacing Giovanni, Lv. 58+).',
        tips: [
          'Blue (your Red/Blue rival) is now the Viridian Gym Leader — a great callbacks for Gen 1 fans.',
          'Janine is Koga\'s daughter and has taken over his gym.',
          'These fights are much harder than in Gen 1 — bring your best team.',
        ],
      },
      {
        title: 'Mt. Silver and Red',
        description: 'After earning all 16 badges, Professor Oak calls you. Mt. Silver opens in western Kanto. Climb to the top to find the silent Trainer RED — the protagonist from Gen 1.',
        tips: [
          'Red is the strongest trainer in the game. His team: Pikachu (Lv. 88!), Espeon (Lv. 73), Snorlax (Lv. 75), Venusaur (Lv. 77), Charizard (Lv. 77), Blastoise (Lv. 77).',
          'You need your own Pokemon in the 70–80+ range.',
          'Bring Blizzard for his starters, Earthquake for Pikachu, and a strong Psychic type for Snorlax.',
          'Defeating Red is the true end of the game.',
        ],
        pokemon: ['Red\'s Pikachu (Lv. 88)', 'Red\'s Espeon', 'Red\'s Snorlax', 'Red\'s Venusaur', 'Red\'s Charizard', 'Red\'s Blastoise'],
      },
      {
        title: 'Legendary Pokemon',
        description: 'Track down the Legendary Beasts roaming Johto, find Ho-Oh at Tin Tower (Gold) or Lugia at Whirl Islands (Silver), and catch the birds of Kanto.',
        tips: [
          'Ho-Oh is at the top of Tin Tower in Gold/HeartGold after getting the Rainbow Wing.',
          'Lugia is in the depths of Whirl Islands in Silver/SoulSilver after getting the Silver Wing.',
          'Use the Masterball on whichever Legendary Beast you find hardest to catch.',
          'Entei, Raikou, and Suicune roam Johto — Mean Look or Shadow Tag is needed to keep them in battle.',
        ],
        pokemon: ['Ho-Oh', 'Lugia', 'Raikou', 'Entei', 'Suicune'],
      },
    ],
  },
];

// ============================================================
// JOHTO (Gen 4 remakes) — shared by heartgold, soulsilver
// ============================================================
const johtoHGSSChapters: WalkthroughChapter[] = [
  {
    title: 'New Bark Town — The Johto Adventure Remade',
    summary: 'Experience the beloved Gen 2 story with the gorgeous DS graphics and the iconic Pokemon walking behind you feature.',
    steps: [
      {
        title: 'Choose Your Starter',
        description: 'Head to Professor Elm\'s lab in New Bark Town. Choose Chikorita, Cyndaquil, or Totodile. In HGSS, your first Pokemon immediately follows you on the overworld — a fan-favorite feature.',
        tips: [
          'The Pokemon walking behind you mechanic is back — every Pokemon in your party can follow you!',
          'Talk to the Pokemon following you for flavor text about its mood.',
          'The Pokewalker is a pedometer peripheral that lets you take Pokemon on walks in real life.',
          'Cyndaquil remains the easiest starter choice for gym matchups.',
        ],
        pokemon: ['Chikorita', 'Cyndaquil', 'Totodile'],
      },
      {
        title: 'Early Routes and the Rival Silver',
        description: 'Silver steals a Pokemon from the lab. Chase him briefly, then head through Routes 29–30 to Mr. Pokemon\'s house to get the Mystery Egg.',
        items: ['Mystery Egg (hatches into Togepi)', 'Pokedex (from Professor Oak at Mr. Pokemon\'s house)'],
        tips: ['In HGSS, there are touching moments with Silver throughout that explain his troubled backstory.'],
      },
      {
        title: 'Violet City',
        description: 'Head northwest through Route 31 and 32, past the grass and caves, to reach Violet City. The layout is the same as Gen 2 but everything looks stunning in HD-ish DS graphics.',
        pokemon: ['Mareep', 'Bellsprout', 'Hoppip', 'Wooper'],
        tips: ['Mareep is a great Electric type found on Route 32 — highly recommended!'],
      },
      {
        title: 'Sprout Tower and Falkner',
        description: 'Clear Sprout Tower of Team Rocket to get HM05 Flash. Then defeat Falkner\'s Flying types.',
        items: ['HM05 Flash', 'Zephyr Badge', 'TM51 Roost'],
        tips: ['TM51 Roost is a new and useful move added in HGSS for Flying types.'],
      },
    ],
  },
  {
    title: 'Azalea Town & Ilex Forest',
    summary: 'Take down Team Rocket in Slowpoke Well, defeat Bugsy, and navigate Ilex Forest.',
    steps: [
      {
        title: 'Union Cave',
        description: 'Navigate Union Cave to reach Azalea Town. Lapras appears in the bottom floor on Fridays — come back for it!',
        pokemon: ['Geodude', 'Zubat', 'Onix', 'Wooper', 'Quagsire'],
        tips: ['Wooper is a Water/Ground type — excellent for several upcoming gyms.'],
      },
      {
        title: 'Slowpoke Well',
        description: 'Rescue the Slowpoke from Team Rocket Executives. This is your first encounter with the more powerful Rocket Executives — they have stronger teams than Grunts.',
        pokemon: ['Slowpoke'],
        items: ['Lure Ball'],
      },
      {
        title: 'Bugsy and Rival',
        description: 'Defeat Bugsy with Fire or Flying, then fight Silver in Ilex Forest right after.',
        items: ['Hive Badge', 'TM89 U-turn'],
        tips: ['U-turn is a great scouting move for competitive play.'],
      },
      {
        title: 'Ilex Forest',
        description: 'Help catch the Farfetch\'d for the HM Cut. The forest also features the Ilex Forest Shrine — place the GS Ball (event item) to encounter Celebi.',
        items: ['HM01 Cut'],
        pokemon: ['Oddish', 'Psyduck', 'Paras', 'Slowpoke', 'Hoothoot'],
      },
    ],
  },
  {
    title: 'Goldenrod City & Whitney',
    summary: 'Explore the biggest city in Johto and survive the Miltank nightmare.',
    steps: [
      {
        title: 'Goldenrod City',
        description: 'HGSS Goldenrod is beautifully expanded. The Radio Tower, Underground, Game Corner, Bike Shop, and more are all present. The Pokeathlon Dome is a brand-new sports mini-game.',
        items: ['Bicycle (free from Bike Shop)', 'Coin Case', 'Fashion Case'],
        tips: ['The Pokeathlon Dome is a fun side activity that lets you earn Apricorn items and rare prizes.'],
      },
      {
        title: 'Whitney — Miltank Returns',
        description: 'Whitney\'s Clefairy (Lv. 17) and Miltank (Lv. 19) are back. In HGSS, Miltank has Milk Drink to restore HP. Same strategy applies: female Pokemon to avoid Attract, Ghost type for Rollout immunity.',
        tips: [
          'In HGSS, Miltank uses Milk Drink to heal herself mid-battle — be ready for a longer fight.',
          'Ghost types are immune to Rollout, which is Normal type.',
          'Paralyze with Thunder Wave before she sets up.',
        ],
        items: ['Plain Badge', 'TM45 Attract'],
      },
      {
        title: 'Pokeathlon Dome',
        description: 'The brand-new Pokeathlon Dome northeast of Goldenrod offers athletics competitions for your Pokemon. Win to earn Athlete Points (AP) and exchange them for rare items.',
        items: ['Evolution Stones (via AP)', 'Rare Candies (via AP)'],
        tips: ['The Pokeathlon is a great way to obtain evolution stones that are otherwise rare in Johto.'],
      },
    ],
  },
  {
    title: 'Ecruteak City & the Legendary Beasts',
    summary: 'Release the legendary beasts from Burned Tower and get Surf.',
    steps: [
      {
        title: 'National Park',
        description: 'Bug-Catching Contest happens Tue/Thu/Sat. Win for Sun Stone prizes.',
        pokemon: ['Caterpie', 'Weedle', 'Scyther', 'Pinsir', 'Beedrill', 'Butterfree'],
        items: ['Sun Stone (1st place)'],
      },
      {
        title: 'Ecruteak and Burned Tower',
        description: 'Explore the Burned Tower. The encounter with Eusine and the release of the legendary beasts plays out beautifully in HGSS with updated graphics.',
        pokemon: ['Raikou', 'Entei', 'Suicune'],
        tips: ['Suicune has its own special storyline in HGSS — follow it around Johto before the final encounter at the Bell Tower stairs.'],
      },
      {
        title: 'HM Surf from Kimono Girls\' Teacher',
        description: 'Receive Surf from the dance instructor in the Kimono Girls\' theater. This opens up the western routes of Johto.',
        items: ['HM03 Surf'],
      },
      {
        title: 'Morty — Fog Badge',
        description: 'Morty\'s Ghost-type gym is unchanged — navigate the invisible walkways and defeat his Gengar.',
        items: ['Fog Badge', 'TM30 Shadow Ball'],
        tips: ['Shadow Ball is a Special Ghost-type move — a great TM for many Pokemon.'],
      },
    ],
  },
  {
    title: 'Olivine, Cianwood & Two Gym Badges',
    summary: 'Heal Amphy, defeat Chuck, and take on the Steel-type Jasmine.',
    steps: [
      {
        title: 'Surf to Olivine and Glitter Lighthouse',
        description: 'Head west from Ecruteak. Climb the lighthouse to meet Jasmine and sick Amphy. Go get the SecretPotion from Cianwood.',
        tips: ['The lighthouse has great wild Pokemon for grinding on the higher floors.'],
        pokemon: ['Magnemite', 'Voltorb'],
      },
      {
        title: 'Cianwood City',
        description: 'Head southwest by Surfing. Get the SecretPotion from the pharmacy. Defeat Chuck and get Fly from his wife.',
        items: ['SecretPotion', 'HM02 Fly', 'Storm Badge', 'TM01 Focus Punch'],
        pokemon: ['Shuckle (from a man in Cianwood)'],
      },
      {
        title: 'Jasmine — Mineral Badge',
        description: 'Jasmine uses Magnemite (Lv. 30) x2 and Steelix (Lv. 35). Fire types destroy Steel. Fighting moves work too. Her Steelix now has the ability Rock Head, preventing recoil from Double-Edge.',
        items: ['Mineral Badge', 'TM23 Iron Tail'],
        tips: ['Fire moves are the easy answer. Ember should do well by now.'],
      },
    ],
  },
  {
    title: 'Mahogany Town & Radio Tower Takeover',
    summary: 'Stop Team Rocket\'s plan at the Lake of Rage and in the Radio Tower.',
    steps: [
      {
        title: 'Lake of Rage — Shiny Gyarados',
        description: 'The Red Gyarados is at the Lake of Rage north of Mahogany. Catch it for a guaranteed shiny!',
        pokemon: ['Red Gyarados'],
        items: ['Red Scale (trade with Mr. Pokemon for the EXP Share)'],
        tips: ['Trade the Red Scale to Mr. Pokemon for the EXP Share — very useful for leveling the whole team.'],
      },
      {
        title: 'Team Rocket Mahogany Hideout',
        description: 'Under the Mahogany souvenir shop is Team Rocket\'s signal-jamming base. Lance helps you infiltrate it.',
        tips: ['Watch the TV sets carefully — they give hints about passwords.'],
        items: ['Various items throughout', 'TM49 Snatch'],
      },
      {
        title: 'Pryce — Glacier Badge',
        description: 'Pryce\'s Ice-floor gym is the same puzzle. He uses Seel, Dewgong, and Piloswine.',
        items: ['Glacier Badge', 'TM07 Hail'],
        tips: ['Fire types make this trivially easy.'],
      },
      {
        title: 'Goldenrod Radio Tower Invasion',
        description: 'Team Rocket invades the Radio Tower. Fight through all five floors, then find the real Director locked in the Underground.',
        items: ['Clear Bell (HeartGold) / Tidal Bell (SoulSilver)', 'Card Key'],
        tips: ['These bells summon Ho-Oh and Lugia respectively when combined with the wings.'],
      },
    ],
  },
  {
    title: 'Blackthorn City, Clair & the Pokemon League',
    summary: 'Conquer the last gym and take on the Elite Four.',
    steps: [
      {
        title: 'Ice Path to Blackthorn',
        description: 'Slide through the ice puzzle cave to reach Blackthorn City. Grab the HM Waterfall.',
        pokemon: ['Swinub', 'Delibird (HeartGold)', 'Jynx', 'Sneasel (SoulSilver)'],
        items: ['HM07 Waterfall'],
      },
      {
        title: 'Clair and Dragon\'s Den',
        description: 'Clair uses three Dragonair and a Kingdra. After defeating her, complete the Dragon\'s Den quiz to receive TM24 Dragon Pulse and a Dratini.',
        items: ['Rising Badge', 'TM24 Dragon Pulse', 'Dratini with Extreme Speed'],
        tips: ['Ice Beam wrecks Dragonair. Kingdra needs Dragon-type moves or just very high powered attacks.'],
      },
      {
        title: 'Kimono Girls\' Final Task',
        description: 'The five Kimono Girls challenge you to one final test before the Pokemon League. Defeat all five of their Eeveelutions to unlock access to the Bell Tower or Whirl Islands.',
        tips: [
          'Each Kimono Girl uses a different Eeveelution: Vaporeon, Jolteon, Flareon, Espeon, Umbreon.',
          'After defeating them, they perform a dance that summons Ho-Oh (HeartGold) or Lugia (SoulSilver).',
        ],
        pokemon: ['Vaporeon', 'Jolteon', 'Flareon', 'Espeon', 'Umbreon'],
      },
      {
        title: 'Catch Ho-Oh or Lugia',
        description: 'Head to Tin Tower (Ho-Oh, HeartGold) or the Whirl Islands\' lowest depths (Lugia, SoulSilver). These are special Lv. 45 encounters.',
        tips: [
          'Bring the Master Ball or stock up on Ultra Balls.',
          'Lower their HP to red and paralyze or sleep them for best catch rates.',
          'Ho-Oh knows Sacred Fire; Lugia knows Aeroblast — both signature moves.',
        ],
        pokemon: ['Ho-Oh (HeartGold)', 'Lugia (SoulSilver)'],
        items: ['Master Ball (save for here if you haven\'t used it)'],
      },
      {
        title: 'Elite Four and Champion Lance',
        description: 'Same order as Gold/Silver: Will, Koga, Bruno, Karen, and finally Lance with his fearsome Dragon team.',
        tips: [
          'HGSS has slightly updated Elite Four teams with Gen 4 Pokemon.',
          'Ice Beam is essential for Lance\'s Dragonite team.',
          'Bring 20+ Full Restores.',
        ],
        items: ['Full Restores', 'Revives', 'Max Ethers'],
      },
    ],
  },
  {
    title: 'Post-Game: Kanto and Red',
    summary: 'Sail to Kanto, conquer 8 more gyms, and face the legendary Trainer Red.',
    steps: [
      {
        title: 'Sail to Kanto',
        description: 'Take the ferry from Olivine to Vermilion. All of Kanto awaits with 8 gym leaders at much higher levels than in Gen 1.',
        tips: ['HGSS Kanto is better presented than it was in the original Gold/Silver.'],
      },
      {
        title: 'All 8 Kanto Gym Leaders',
        description: 'Brock, Misty, Surge, Erika, Janine, Sabrina, Blaine, and Blue await. Blue is the final Kanto leader in Viridian City — your old rival from Gen 1.',
        tips: [
          'All Kanto gym leaders are in the 50s–60s level range.',
          'Blue\'s team is especially strong — bring your full team.',
          'You can also get the Kanto starters from Professor Oak after completing Kanto.',
        ],
        pokemon: ['Bulbasaur, Charmander, or Squirtle (gift from Professor Oak in Pallet Town after getting all 16 badges)'],
      },
      {
        title: 'Mt. Silver — Facing Red',
        description: 'After collecting all 16 badges, climb Mt. Silver and find Trainer Red at the summit in silence.',
        tips: [
          'Red\'s team: Pikachu (Lv. 88), Lapras (Lv. 80), Snorlax (Lv. 82), Charizard (Lv. 84), Blastoise (Lv. 84), Venusaur (Lv. 84).',
          'Level your team to at least 70+ before attempting this fight.',
          'Bring Ice moves for Venusaur/Charizard, Thunder for Lapras, and a strong Fighting type for Snorlax.',
          'Red\'s team has full held items and optimal movesets — this is the ultimate challenge.',
        ],
      },
      {
        title: 'Legendary Pokemon',
        description: 'Hunt down Raikou, Entei, and Suicune across Johto using the Pokeradar or just roaming encounters. Also find Latias (HG) and Latios (SS) roaming Kanto.',
        pokemon: ['Raikou', 'Entei', 'Suicune', 'Latias (HG)', 'Latios (SS)'],
        tips: ['Use the Poke Gear\'s map to track roaming legendaries by calling Professor Oak.'],
      },
    ],
  },
];

// ============================================================
// HOENN — shared by ruby, sapphire, emerald, omega-ruby, alpha-sapphire
// ============================================================
const hoennChapters: WalkthroughChapter[] = [
  {
    title: 'Littleroot Town — Welcome to Hoenn',
    summary: 'You\'ve just moved to Hoenn. Save Professor Birch from a wild Pokemon and claim your starter.',
    steps: [
      {
        title: 'Arrive in Littleroot Town',
        description: 'You move in via moving truck. Explore your new home, meet your mom, and head next door to find Professor Birch\'s daughter May (or Brendan). Head to Route 101 to find the Professor being chased by a wild Poochyena.',
        tips: [
          'Treecko is popular for its Speed and cool evolution line into Sceptile.',
          'Torchic becomes Blaziken, a Fire/Fighting powerhouse — one of the best starters in the series.',
          'Mudkip becomes Swampert, a bulky Water/Ground type that is only weak to Grass.',
        ],
        pokemon: ['Treecko', 'Torchic', 'Mudkip'],
      },
      {
        title: 'Oldale Town and First Steps',
        description: 'Head north to Oldale Town. A scientist blocks the route west until you\'ve visited the Pokemon Center and Poke Mart. Your rival (May or Brendan) introduces you to catching Pokemon.',
        items: ['Pokedex (from Professor Birch in Littleroot after the rescue)'],
        tips: ['In Emerald both rivals appear — the one you didn\'t choose as your player character shows up.'],
      },
      {
        title: 'Route 103 — First Rival Battle',
        description: 'Find your rival on Route 103 for a quick battle. They always use the starter strong against yours, so it\'s a tough first fight.',
        tips: ['Don\'t worry about losing — it\'s optional progress-wise and just good for EXP.'],
      },
    ],
  },
  {
    title: 'Petalburg City & Rustboro — First Two Gyms',
    summary: 'Meet your father Norman (the Petalburg Gym Leader), get through Petalburg Woods, and defeat Roxanne.',
    steps: [
      {
        title: 'Petalburg City',
        description: 'Your dad Norman is the Petalburg Gym Leader, but he won\'t fight you until you have four badges. He teaches you how to catch Pokemon. Wally catches a Ralts here with your help.',
        tips: ['Norman is one of the tougher gym leaders in the game — you\'ll face him later with much more experience.'],
        pokemon: ['Ralts (rare on Route 102 — worth catching, it evolves into Gardevoir)'],
      },
      {
        title: 'Petalburg Woods',
        description: 'A large forest filled with Bug types. A Team Aqua/Magma grunt is hassling a Devon researcher here — save him to receive a Great Ball.',
        pokemon: ['Wurmple', 'Silcoon', 'Cascoon', 'Shroomish', 'Slakoth'],
        items: ['Great Ball (from the Devon researcher)'],
        tips: ['Shroomish evolves into Breloom — a Grass/Fighting type that is great later in the game.'],
      },
      {
        title: 'Roxanne — Rustboro Gym',
        description: 'Roxanne uses Geodude (Lv. 12), Geodude (Lv. 12), and Nosepass (Lv. 15). Rock types are weak to Water, Grass, Fighting, and Ground.',
        tips: [
          'Mudkip/Marshtomp destroys this gym with Water Gun.',
          'Treecko can use Absorb.',
          'Torchic users should train a Machop (Route 112) or Shroomish for Fighting coverage.',
        ],
        items: ['Stone Badge', 'TM39 Rock Tomb'],
      },
      {
        title: 'Devon Corporation and Stolen Goods',
        description: 'After the gym, a Team Aqua/Magma grunt steals the Devon Goods. Chase them down on Route 116 and return the goods to the Devon Corp. president who asks you to deliver a letter to Steven Stone in Dewford.',
        items: ['Devon Goods', 'Letter for Steven', 'PokéNav (from Devon Corp. president)'],
        tips: ['The PokéNav tracks trainer rematches and shows the map — check it regularly.'],
      },
    ],
  },
  {
    title: 'Dewford Town & Slateport City',
    summary: 'Earn the Knuckle Badge, explore Granite Cave, and deliver the Devon Goods in Slateport.',
    steps: [
      {
        title: 'Surf to Dewford Town',
        description: 'Get HM01 Cut from the captain in Rustboro\'s ship, then sail south. You need to find Mr. Briney south of Rustboro in his cottage near Petalburg to get a boat ride to Dewford.',
        items: ['HM01 Cut'],
        tips: ['Mr. Briney\'s cottage is on Route 104 south of Rustboro — use Cut to reach him.'],
      },
      {
        title: 'Granite Cave',
        description: 'Find Steven Stone deep inside Granite Cave (you need Flash to navigate parts of it). Deliver the letter. Steven studies stones here and will become an important character.',
        pokemon: ['Abra', 'Makuhita', 'Geodude', 'Zubat', 'Aron'],
        items: ['HM05 Flash (from Hiker at entrance)', 'TM36 Sludge Bomb'],
        tips: ['Aron evolves into Aggron — a powerful Steel/Rock type worth training.'],
      },
      {
        title: 'Brawly — Dewford Gym',
        description: 'Brawly uses Machop (Lv. 17) and Makuhita (Lv. 18). Fighting types are weak to Psychic and Flying.',
        tips: [
          'Ralts/Kirlia with Confusion wrecks Fighting types.',
          'Any Flying type works well here.',
          'Brawly\'s gym is dark — use Flash on wild encounters to make navigating easier.',
        ],
        items: ['Knuckle Badge', 'TM08 Bulk Up'],
      },
      {
        title: 'Slateport City',
        description: 'Sail north with Mr. Briney to Slateport. Deliver the Devon Goods to Captain Stern at the Oceanic Museum. Team Aqua/Magma interrupts — defeat their admins.',
        items: ['Contest Pass', 'Devon Goods delivered'],
        tips: ['Pokemon Contests begin here! They\'re a fun side activity separate from battling.'],
      },
    ],
  },
  {
    title: 'Mauville City — Wattson\'s Gym',
    summary: 'Travel through Route 110, visit the seaside cycling road, and tackle the Electric gym.',
    steps: [
      {
        title: 'Route 110 and Cycling Road',
        description: 'Head north from Slateport. The Cycling Road is a long elevated path requiring the Bicycle. Pick up the Bicycle from Rydel\'s Bikes in Mauville for free.',
        pokemon: ['Electrike', 'Plusle', 'Minun', 'Wingull', 'Pelipper'],
        items: ['Bicycle (from Rydel in Mauville — free!)'],
        tips: ['Electrike evolves into Manectric, an excellent Electric type for this run.'],
      },
      {
        title: 'New Mauville (Optional)',
        description: 'Wattson asks you to shut down a generator in New Mauville — an underground facility east of Mauville. You get a useful TM as thanks.',
        items: ['TM24 Thunderbolt'],
        pokemon: ['Voltorb', 'Electrode', 'Magnemite'],
        tips: ['Thunderbolt is one of the best Electric TMs — grab it!'],
      },
      {
        title: 'Wattson — Mauville Gym',
        description: 'Wattson uses Magnemite (Lv. 22), Voltorb (Lv. 20), Magneton (Lv. 22), Raichu (Lv. 23). Ground types are immune to all his attacks.',
        tips: [
          'A Mudkip/Marshtomp or Geodude/Graveler completely walls his Electric team.',
          'Watch out for Voltorb and Electrode using Selfdestruct/Explosion.',
          'Wattson in Emerald has Manectric (Lv. 24) as well — tougher fight.',
        ],
        items: ['Dynamo Badge', 'TM34 Shock Wave'],
      },
    ],
  },
  {
    title: 'Mt. Chimney & Lavaridge Town',
    summary: 'Climb the volcano, stop Team Magma/Aqua, and earn the Heat Badge.',
    steps: [
      {
        title: 'Route 111 and Fiery Path',
        description: 'Head north from Mauville. Route 111 has a desert in the middle (inaccessible until you get Goggles). Go through the Fiery Path tunnel to reach the other side of the mountain.',
        pokemon: ['Numel', 'Geodude', 'Machop', 'Torkoal'],
        tips: ['Torkoal is a pure Fire type with great Defense — worth catching for the next gym or two.'],
      },
      {
        title: 'Meteor Falls',
        description: 'Briefly visit Meteor Falls — Team Magma/Aqua is here stealing a meteorite. You\'ll return here later for Bagon.',
        pokemon: ['Bagon (rare, later in the game)', 'Zubat', 'Golbat', 'Solrock (Ruby/OR)', 'Lunatone (Sapphire/AS)'],
        tips: ['Come back much later when you have Surf and Waterfall for Bagon — it evolves into the mighty Salamence!'],
      },
      {
        title: 'Mt. Chimney Cable Car',
        description: 'Take the cable car to the top of Mt. Chimney. Team Magma (Ruby) or Team Aqua (Sapphire) is at the summit trying to use a meteorite to awaken Groudon or Kyogre respectively. Defeat their leader.',
        tips: [
          'Maxie leads Team Magma in Ruby/Omega Ruby.',
          'Archie leads Team Aqua in Sapphire/Alpha Sapphire.',
          'Emerald has both teams equally present.',
        ],
      },
      {
        title: 'Lavaridge Town',
        description: 'Descend through Jagged Pass. Pick up a free Egg from the old lady near the hot springs — it hatches into Wynaut.',
        pokemon: ['Wynaut (from egg)'],
        items: ['Go-Goggles (from your rival after defeating Flannery)', 'Houndoominite (ORAS only)'],
        tips: ['The hot springs in Lavaridge restore HP and cure status — useful before the gym.'],
      },
      {
        title: 'Flannery — Lavaridge Gym',
        description: 'Flannery uses Numel (Lv. 24), Slugma (Lv. 24), Slugma (Lv. 26), and Torkoal (Lv. 29). Water and Ground types are excellent here.',
        tips: [
          'Water moves are super effective on all her Fire types.',
          'Torkoal\'s Overheat hits extremely hard but drops her Special Attack sharply each use.',
          'Bring Burn Heals — her Pokemon love Will-O-Wisp.',
        ],
        items: ['Heat Badge', 'TM50 Overheat'],
      },
    ],
  },
  {
    title: 'Petalburg Gym & Fallarbor Town',
    summary: 'Finally face your dad Norman and explore the northern parts of Hoenn.',
    steps: [
      {
        title: 'Norman — Petalburg Gym',
        description: 'Your dad Norman uses Spinda (Lv. 27), Vigoroth (Lv. 27), Linoone (Lv. 29), and Slaking (Lv. 31). Fighting types hit Normal for super effective damage.',
        tips: [
          'Slaking has the highest base stat total of any non-legendary Pokemon, but its Truant ability means it can only attack every other turn.',
          'Exploit Slaking\'s idle turns to set up or heal.',
          'Makuhita/Hariyama is great here if you trained one.',
        ],
        items: ['Balance Badge', 'HM03 Surf (from Wally\'s father after defeating Norman)'],
      },
      {
        title: 'Route 111 Desert',
        description: 'With the Go-Goggles from your rival, you can explore the desert north of Mauville. Ancient fossils and rare Pokemon live here.',
        pokemon: ['Trapinch', 'Cacnea', 'Sandshrew (Ruby/OR)', 'Baltoy'],
        items: ['Root Fossil (Lileep, Sapphire) or Claw Fossil (Anorith, Ruby) — choose one'],
        tips: ['Trapinch evolves into Vibrava then Flygon — a Dragon/Ground type that\'s excellent endgame.'],
      },
      {
        title: 'Fallarbor Town and Team Magma/Aqua at Meteor Falls',
        description: 'Head northwest to Fallarbor Town, then chase Team Magma/Aqua to Meteor Falls. They steal a meteorite from a scientist. Professor Cosmo gives you TM27 Return after you help him.',
        items: ['TM27 Return'],
        tips: ['Contest Hall in Fallarbor is great for obtaining ribbons.'],
      },
    ],
  },
  {
    title: 'Fortree City — Winona\'s Gym',
    summary: 'Head east through Route 119, cross the Weather Institute, and earn the Feather Badge.',
    steps: [
      {
        title: 'Route 119 and Weather Institute',
        description: 'Surf east from Mauville\'s north exit. Navigate the long rainy Route 119. Team Aqua/Magma has taken over the Weather Institute — clear them out to rescue the scientist and receive Castform.',
        pokemon: ['Feebas (rare, appears only on 6 specific water tiles on Route 119)', 'Tropius', 'Oddish'],
        items: ['Castform (gift from grateful scientist)'],
        tips: [
          'Feebas evolves into Milotic — one of the most beautiful and powerful Water types. It requires high Beauty Condition in RSE or trading with high friendship in ORAS.',
          'In ORAS, Feebas evolves with high Beauty stat from Poke Puffs or by leveling with a Prism Scale.',
        ],
      },
      {
        title: 'Rival Battle on Route 119',
        description: 'Your rival appears again after the Weather Institute. Their team is growing strong — they should be around level 30+ now.',
        tips: ['Use this fight to gauge where your team stands before the next gym.'],
      },
      {
        title: 'Fortree City',
        description: 'A treetop city connected by bridges. An invisible Devon Scope-blocking Kecleon blocks the gym entrance. Get the Devon Scope from Steven on Route 120.',
        items: ['Devon Scope (from Steven on Route 120 east of Fortree)'],
        pokemon: ['Kecleon'],
        tips: ['The Devon Scope reveals the invisible Kecleon — it\'s a fun quirky puzzle unique to Hoenn.'],
      },
      {
        title: 'Winona — Fortree Gym',
        description: 'Winona uses Swellow (Lv. 31), Pelipper (Lv. 30), Skarmory (Lv. 32), Altaria (Lv. 33). Electric and Ice moves are best.',
        tips: [
          'Thunderbolt from Manectric or Pikachu wrecks most of her team.',
          'Ice Beam handles Altaria (Dragon/Flying) for 4x damage.',
          'Skarmory is Steel/Flying — very tanky. Use Electric moves.',
        ],
        items: ['Feather Badge', 'TM40 Aerial Ace'],
      },
    ],
  },
  {
    title: 'Mossdeep City & the Space Center',
    summary: 'Defeat the twin gym leaders and stop Team Magma/Aqua from stealing a rocket engine.',
    steps: [
      {
        title: 'Route 120–124 and Eastern Hoenn',
        description: 'Surf east along the coast. These routes have excellent wild Pokemon for your team. Route 123 has the Safari Zone berries and a great Berry patch.',
        pokemon: ['Shuppet (Ruby/OR)', 'Duskull (Sapphire/AS)', 'Absol', 'Zangoose (Ruby/OR)', 'Seviper (Sapphire/AS)'],
        tips: ['Absol appears only on Route 120 — it\'s a powerful Dark type worth training.'],
      },
      {
        title: 'Lati@s Encounter',
        description: 'After defeating the Aqua/Magma leader at the Space Center, your mom calls about a TV program. Latias roams Hoenn in Ruby/Omega Ruby; Latios roams in Sapphire/Alpha Sapphire.',
        tips: [
          'Track the roaming Lati@s with the Pokedex location tracker.',
          'Use a Master Ball or Mean Look + sleep strategy.',
          'In ORAS, you receive the Eon Flute to soar the skies on Latias/Latios — an incredible feature.',
        ],
        pokemon: ['Latias (Ruby/OR)', 'Latios (Sapphire/AS)'],
      },
      {
        title: 'Tate & Liza — Mossdeep Gym',
        description: 'The twin gym leaders use Lunatone (Lv. 42) and Solrock (Lv. 42) in a Double Battle. Dark, Ghost, and Water moves work well.',
        tips: [
          'This is a Double Battle — use Pokemon with spread moves or two strong attackers.',
          'Lunatone and Solrock are Psychic/Rock — Dark moves hit both for super effective damage.',
          'Bring two strong attackers and lots of healing items.',
        ],
        items: ['Mind Badge', 'HM08 Dive (from Steven Stone after the gym)'],
      },
      {
        title: 'Magma/Aqua at the Space Center',
        description: 'Team Magma/Aqua attacks the Mossdeep Space Center to steal rocket fuel for their submarine. Fight their admins and stop them — though they escape with the fuel.',
        tips: ['This sets up the next major story beat at Seafloor Cavern.'],
      },
    ],
  },
  {
    title: 'Seafloor Cavern & Awakening the Legendary',
    summary: 'Dive deep to find Team Magma/Aqua\'s lair and witness Groudon or Kyogre awakening.',
    steps: [
      {
        title: 'Sootopolis City Route',
        description: 'Use Dive to explore underwater routes south of Mossdeep. Find the entrance to Seafloor Cavern underwater.',
        pokemon: ['Wailmer', 'Tentacool', 'Relicanth', 'Chinchou', 'Clamperl'],
        tips: [
          'Relicanth is needed for a special puzzle involving the Regi trio — it goes in your party.',
          'Wailord is also needed for the Regi puzzle — evolve a Wailmer (level 40).',
        ],
      },
      {
        title: 'Seafloor Cavern',
        description: 'Dive down into this deep-sea cave. Navigate the multi-room puzzle to reach the deepest chamber where Archie (Aqua) or Maxie (Magma) uses the Blue/Red Orb to awaken Kyogre or Groudon.',
        tips: [
          'This is a climactic story moment — the world will change after this.',
          'In Ruby: Groudon awakens and causes intense drought.',
          'In Sapphire: Kyogre awakens and causes torrential rain.',
          'In Emerald: Both awaken and clash.',
        ],
      },
      {
        title: 'Sootopolis City in Crisis',
        description: 'Emerge at Sootopolis City, a town built inside a volcanic crater. The legendary Pokemon is rampaging. Find Steven and Wallace who direct you to Sky Pillar.',
        tips: ['Sootopolis City is one of the most visually iconic cities in the series.'],
      },
      {
        title: 'Sky Pillar — Awakening Rayquaza',
        description: 'Ride your Mach Bike (you need it!) up the crumbling floors of Sky Pillar to the top where Rayquaza sleeps. It awakens and descends to stop the conflict between Groudon and Kyogre.',
        tips: [
          'The Mach Bike is essential — you need to ride quickly over crumbling tiles.',
          'In ORAS, this sequence is expanded into the dramatic "Delta Episode" post-game storyline.',
          'In Emerald, Sky Pillar is more developed with a better story.',
        ],
        pokemon: ['Rayquaza (catch it here in Emerald after the story)'],
        items: ['Mach Bike required'],
      },
    ],
  },
  {
    title: 'Sootopolis City — Juan/Wallace\'s Gym',
    summary: 'The weather crisis is over. Now defeat the Sootopolis Gym Leader.',
    steps: [
      {
        title: 'Wallace — Sootopolis Gym (Ruby/Sapphire)',
        description: 'Wallace uses Luvdisc (Lv. 40), Whiscash (Lv. 42), Sealeo (Lv. 40), Seaking (Lv. 42), Milotic (Lv. 43). Grass and Electric moves dominate.',
        tips: [
          'Milotic is beautiful and powerful — it can use Recover. Bring strong attackers.',
          'Thunderbolt handles most of his team.',
          'His gym has ice-floor puzzles.',
        ],
        items: ['Rain Badge', 'HM07 Waterfall'],
      },
      {
        title: 'Juan — Sootopolis Gym (Emerald)',
        description: 'In Emerald, Juan replaces Wallace. He uses Luvdisc (Lv. 41), Whiscash (Lv. 41), Sealeo (Lv. 43), Crawdaunt (Lv. 43), Kingdra (Lv. 46). Grass and Electric are key.',
        tips: [
          'Kingdra resists Water and only takes neutral from Electric — Dragon or very powerful moves are needed.',
          'Juan\'s Kingdra knows Swift which never misses.',
        ],
        items: ['Rain Badge', 'HM07 Waterfall'],
      },
    ],
  },
  {
    title: 'Victory Road & the Pokemon League',
    summary: 'Trek through Victory Road and face the Hoenn Elite Four and Champion.',
    steps: [
      {
        title: 'Ever Grande City and Victory Road',
        description: 'Waterfall up to Ever Grande City. Victory Road is a multi-floor cave filled with powerful trainers — one of the best grinding spots in the game.',
        pokemon: ['Golbat', 'Hariyama', 'Medicham', 'Geodude', 'Graveler', 'Mawile (Ruby/OR)', 'Sableye (Sapphire/AS)'],
        tips: ['Level your team to 45–50 before attempting the Elite Four.'],
      },
      {
        title: 'Elite Four: Sidney',
        description: 'Sidney uses Dark types: Mightyena (Lv. 46), Shiftry (Lv. 48), Cacturne (Lv. 46), Crawdaunt (Lv. 48), Absol (Lv. 49). Fighting moves hit Dark types super effectively.',
        tips: ['Fighting moves crush his entire team. Bring a solid Fighting type like Hariyama.'],
      },
      {
        title: 'Elite Four: Phoebe',
        description: 'Phoebe uses Ghost types: Dusclops (Lv. 48) x2, Banette (Lv. 49) x2, Sableye (Lv. 50). Dark and Ghost moves work. Normal/Fighting moves do nothing.',
        tips: [
          'Dark moves like Crunch are your best bet.',
          'Sableye is Dark/Ghost — it has no weaknesses in Gen 3! Use strong neutral attacks.',
        ],
      },
      {
        title: 'Elite Four: Glacia',
        description: 'Glacia uses Ice types: Sealeo (Lv. 50) x2, Glalie (Lv. 50) x2, Walrein (Lv. 52). Fire, Fighting, Rock, and Steel all work well.',
        tips: ['Fighting and Rock moves handle her team well. Fire is also excellent.'],
      },
      {
        title: 'Elite Four: Drake',
        description: 'Drake uses Dragon types: Shelgon (Lv. 52), Altaria (Lv. 54) x2, Flygon (Lv. 53), Salamence (Lv. 55). Ice moves are devastating.',
        tips: [
          'Ice Beam or Blizzard is mandatory here.',
          'Salamence is the real threat — it hits incredibly hard.',
          'Dragon moves also work if you have a Dragon type yourself.',
        ],
      },
      {
        title: 'Champion Steven (Ruby/Sapphire)',
        description: 'Steven uses Steel types heavily: Skarmory (Lv. 57), Claydol (Lv. 55), Aggron (Lv. 56), Cradily (Lv. 56), Armaldo (Lv. 56), Metagross (Lv. 58).',
        tips: [
          'Fire moves handle Skarmory and Metagross.',
          'Water handles Cradily and Armaldo (part Rock).',
          'Metagross is Psychic/Steel — a formidable tank. Ground moves work well on it.',
        ],
      },
      {
        title: 'Champion Wallace (Emerald)',
        description: 'In Emerald, Wallace is the Champion with a Water-heavy team: Wailord (Lv. 57), Tentacruel (Lv. 55), Ludicolo (Lv. 56), Whiscash (Lv. 56), Gyarados (Lv. 56), Milotic (Lv. 58).',
        tips: [
          'Thunderbolt is extremely useful across his whole team.',
          'Milotic will Recover — bring strong attackers to push through.',
          'Grass moves handle Whiscash and Ludicolo.',
        ],
      },
    ],
  },
  {
    title: 'Post-Game: Legendary Pokemon & Battle Frontier',
    summary: 'Catch the legendary Pokemon and conquer the Battle Frontier (Emerald).',
    steps: [
      {
        title: 'Catch Groudon (Ruby/OR) or Kyogre (Sapphire/AS)',
        description: 'After becoming Champion, the Cave of Origin in Sootopolis reopens. Groudon (Ruby) or Kyogre (Sapphire) waits inside at level 45.',
        tips: [
          'Save before the encounter.',
          'Use the Master Ball if you haven\'t already.',
          'Bring Pokemon with Thunder Wave and many Ultra Balls as backup.',
        ],
        pokemon: ['Groudon (Ruby/OR)', 'Kyogre (Sapphire/AS)', 'Both (Emerald — after getting the Red/Blue Orb)'],
      },
      {
        title: 'Catch Rayquaza — Sky Pillar',
        description: 'Return to Sky Pillar after becoming Champion. Rayquaza is at the top at level 70 in RSE, or level 70 with a special encounter in ORAS.',
        tips: [
          'Rayquaza is level 70 — bring a strong team.',
          'Paralysis + Ultra Balls strategy works.',
          'In ORAS, Rayquaza can Mega Evolve — it\'s even more powerful.',
        ],
        pokemon: ['Rayquaza'],
      },
      {
        title: 'Regi Trio — Ancient Tomb Puzzle',
        description: 'Navigate the Sealed Chamber on Route 134 using Relicanth and Wailord in specific positions. Then access the three Regi caves: Regirock (Desert Ruins), Regice (Island Cave), Registeel (Ancient Tomb).',
        tips: [
          'The Sealed Chamber puzzle requires Relicanth (first in party) and Wailord (last in party).',
          'Each Regi has a unique Braille puzzle to open its chamber.',
          'In ORAS the puzzles are simplified slightly.',
        ],
        pokemon: ['Regirock', 'Regice', 'Registeel'],
      },
      {
        title: 'Battle Frontier (Emerald only)',
        description: 'The Battle Frontier on the southern island is the most in-depth post-game challenge in the series. Seven facilities each test different battle skills.',
        tips: [
          'The Battle Tower is the most accessible facility — aim for 50-win streaks.',
          'Earn Battle Points (BP) to purchase rare items, TMs, and tutored moves.',
          'Building a competitive team is essential for the tougher facilities.',
          'The Frontier Brains (Anabel, Tucker, Greta, Noland, Spenser, Lucy, Brandon) are incredibly challenging.',
        ],
        items: ['Battle Points (BP) for TMs, Move Tutors, and items'],
      },
      {
        title: 'Delta Episode (ORAS Only)',
        description: 'After the main story in Omega Ruby and Alpha Sapphire, the Delta Episode begins — an extended post-game arc involving the Devon Corporation, a meteorite threatening Hoenn, and the return of Zinnia.',
        tips: [
          'The Delta Episode culminates in catching Rayquaza and Mega Evolving it.',
          'Deoxys awaits at the end of the Delta Episode in space.',
          'This is one of the best post-game stories in the series.',
        ],
        pokemon: ['Rayquaza (Mega)', 'Deoxys'],
      },
    ],
  },
];

// ============================================================
// SINNOH — shared by diamond, pearl, platinum, brilliant-diamond, shining-pearl
// ============================================================
const sinnohChapters: WalkthroughChapter[] = [
  {
    title: 'Twinleaf Town — A New Adventure Begins',
    summary: 'Start in the quiet Twinleaf Town, rush to Lake Verity, and claim your starter from Professor Rowan.',
    steps: [
      {
        title: 'Head to Lake Verity with Barry',
        description: 'Your childhood friend Barry is in a rush (as always). Head north to Lake Verity where Professor Rowan and his assistant (Dawn or Lucas) left their bags. A wild Starly attacks and you must use one of the starter Pokemon from the bag to defend yourself.',
        tips: [
          'Turtwig is a bulky Grass/Ground type — great for early gyms.',
          'Chimchar becomes Infernape, a Fire/Fighting speedster — fan favorite.',
          'Piplup becomes Empoleon, a unique Water/Steel type — very elegant.',
        ],
        pokemon: ['Turtwig', 'Chimchar', 'Piplup'],
      },
      {
        title: 'Return to Sandgem Town',
        description: 'Professor Rowan lets you keep the starter. Head to Sandgem Town and get your Pokedex from Rowan\'s lab. Dawn/Lucas shows you how to catch Pokemon on Route 202.',
        items: ['Pokedex', 'Town Map (from Dawn/Lucas\'s little sister in Twinleaf)'],
        tips: ['In Platinum, the game opens with a dramatic encounter with Giratina right away — excellent hook.'],
      },
      {
        title: 'Barry\'s First Challenge',
        description: 'Barry challenges you right before you leave for Jubilife City. His starter is always the one that\'s strong against yours.',
        tips: ['Barry is a fast, impulsive trainer — his characterization is fun throughout the game.'],
      },
    ],
  },
  {
    title: 'Jubilife City & Oreburgh City — Roark\'s Gym',
    summary: 'Explore the big city, deal with Team Galactic\'s first appearance, and earn your first badge.',
    steps: [
      {
        title: 'Jubilife City',
        description: 'The biggest and most modern city in Sinnoh. Get the Poketch (digital watch with apps) from three Clowns by saying "Yes" to their questions. Team Galactic appears here — they\'re confrontational from the start.',
        items: ['Poketch (from Poketch Company, answer yes three times to the clowns)'],
        tips: ['The Poketch has many useful apps including a step counter, berry checker, and friendship checker. Collect more apps throughout the game.'],
      },
      {
        title: 'Oreburgh Gate and Oreburgh City',
        description: 'Head east to Oreburgh Gate (a small cave) and then south to Oreburgh City. Find Roark in the Oreburgh Mine demonstrating fossil excavation.',
        pokemon: ['Geodude', 'Onix', 'Zubat', 'Psyduck'],
        items: ['HM06 Rock Smash (from a hiker in Oreburgh Gate)'],
      },
      {
        title: 'Roark — Oreburgh Gym',
        description: 'Roark uses Geodude (Lv. 12), Onix (Lv. 12), and Cranidos (Lv. 14). Rock types are weak to Water, Grass, Fighting, Ground, and Steel.',
        tips: [
          'Turtwig\'s Grass moves are very effective here.',
          'Piplup handles Roark with Bubble.',
          'Chimchar has the hardest time — bring a Shinx (Route 202) or Budew for coverage.',
          'In Platinum, Roark has slightly higher levels.',
        ],
        items: ['Coal Badge', 'TM76 Stealth Rock'],
      },
    ],
  },
  {
    title: 'Floaroma Town & Valley Windworks',
    summary: 'Rescue the Valley Windworks from Team Galactic and head toward Eterna City.',
    steps: [
      {
        title: 'Floaroma Town',
        description: 'A lovely town covered in flowers. A man is selling honey here — use it to coat special "Honey Trees" throughout Sinnoh to attract rare Pokemon.',
        items: ['Honey (buy from the man in Floaroma Town)'],
        tips: ['Honey Trees take 6+ hours in real time to attract a Pokemon. Leave one overnight for a surprise!'],
        pokemon: ['Munchlax (rare Honey Tree encounter)', 'Combee', 'Wurmple'],
      },
      {
        title: 'Valley Windworks',
        description: 'Team Galactic has taken over the power plant. A girl\'s father is trapped inside. Fight Galactic grunts and Commander Mars to free the worker.',
        tips: ['This is Team Galactic\'s first major antagonist encounter — they\'re more sinister than previous villainous teams.'],
      },
      {
        title: 'Eterna Forest',
        description: 'A mysterious forest with a teammate walk mechanic — Cheryl joins your party and heals your Pokemon after every battle! Great opportunity to grind.',
        pokemon: ['Budew', 'Buneary', 'Chansey', 'Gastly', 'Murkrow (Diamond/BD)', 'Misdreavus (Pearl/SP)'],
        tips: ['Cheryl doubles your EXP and heals after each fight — use this to grind your team extensively.'],
      },
    ],
  },
  {
    title: 'Eterna City — Gardenia\'s Gym',
    summary: 'Explore the historic city and defeat the Grass-type gym leader.',
    steps: [
      {
        title: 'Team Galactic Eterna Building',
        description: 'Team Galactic has a building in Eterna City. Clear it out with Looker\'s help (Platinum) to rescue stolen Pokemon. Receive the Explorer Kit for the Underground.',
        items: ['Explorer Kit (from the Underground Man in a house south of the gym)', 'Bicycle (from Rad Rickshaw after saving his shop from Galactic)'],
        tips: ['The Underground allows digging for fossils and items — great fun and very replayable.'],
      },
      {
        title: 'Gardenia — Eterna Gym',
        description: 'Gardenia uses Turtwig (Lv. 20), Cherubi (Lv. 20), and Roserade (Lv. 22). Fire and Flying types are excellent here.',
        tips: [
          'Chimchar/Monferno tears through this gym.',
          'Ponyta from Route 211 is a great Fire type for this fight.',
          'Roserade can be tricky with its speed and poison moves — bring Antidotes.',
        ],
        items: ['Forest Badge', 'TM86 Grass Knot'],
      },
      {
        title: 'Old Chateau',
        description: 'A creepy abandoned mansion in Eterna Forest. Rotom is hidden inside on the TV at night. This spooky optional dungeon has ghost-type wild encounters.',
        pokemon: ['Rotom (in the TV at night)', 'Gastly', 'Haunter', 'Gengar'],
        tips: ['Rotom can change forms with appliances in the Old Chateau in Platinum — each form has a different secondary type.'],
      },
    ],
  },
  {
    title: 'Hearthome City & Veilstone City',
    summary: 'Contest Hall awaits in Hearthome, and Maylene\'s Fighting gym is in Veilstone.',
    steps: [
      {
        title: 'Hearthome City',
        description: 'A large city with the Pokemon Contest Hall, Poffin-making house, and the Amity Square park. Cynthia gives you the first hint of the Galactic\'s true plan and gifts you HM04 Strength.',
        items: ['HM04 Strength (from Cynthia in front of the Gym)', 'Poffin Case (from the Poffin House)'],
        tips: [
          'Fantina is the gym leader but won\'t battle until you have two more badges in Diamond/Pearl.',
          'Poffins are treats that raise Contest stats — make them with friends for better results.',
        ],
      },
      {
        title: 'Route 209 and Solaceon Town',
        description: 'Head east. Solaceon Town has the Pokemon Nursery (for breeding) and the Solaceon Ruins filled with Unown.',
        pokemon: ['Unown (28 forms in the Solaceon Ruins)', 'Mime Jr.', 'Chansey', 'Happiny'],
        items: ['HM05 Defog (from a hiker in the Safari Game)'],
        tips: ['Collecting all 28 Unown forms unlocks a special room in the ruins.'],
      },
      {
        title: 'Veilstone City and Game Corner',
        description: 'Head north to Veilstone. The Game Corner is here. Team Galactic HQ looms large in the city — you\'ll storm it later.',
        items: ['HM02 Fly (from Dawn/Lucas after a battle near the city)'],
        tips: ['Your rival shows up here and battles you — their team is getting formidable.'],
      },
      {
        title: 'Maylene — Veilstone Gym',
        description: 'Maylene uses Meditite (Lv. 28), Machoke (Lv. 29), and Lucario (Lv. 32). Flying and Psychic types are strong against Fighting.',
        tips: [
          'Staravia or Staraptor\'s Aerial Ace handles her team.',
          'Lucario is also part Steel — Ground and Fire moves work.',
          'Her Lucario uses Force Palm and can paralyze.',
        ],
        items: ['Cobble Badge', 'TM60 Drain Punch'],
      },
    ],
  },
  {
    title: 'Pastoria City & Celestic Town',
    summary: 'Defeat the Water gym, stop Team Galactic at the Lake, and learn about the Sinnoh legends.',
    steps: [
      {
        title: 'Pastoria City and the Great Marsh',
        description: 'Head south and east to Pastoria City. The Great Marsh is a Safari Zone variant — use binoculars to spot rare Pokemon before venturing in.',
        pokemon: ['Tropius', 'Carnivine', 'Yanma', 'Quagsire', 'Croagunk'],
        items: ['HM05 Defog (from a hiker in the Great Marsh area)'],
        tips: ['The Great Marsh Pokemon rotate daily — check the binoculars each visit for different encounters.'],
      },
      {
        title: 'Crasher Wake — Pastoria Gym',
        description: 'Crasher Wake uses Gyarados (Lv. 33), Quagsire (Lv. 34), and Floatzel (Lv. 37). Electric and Grass destroy his Water types.',
        tips: [
          'Thunderbolt from Luxray or Jolteon wrecks his whole team.',
          'Grass moves handle Quagsire perfectly.',
          'Floatzel is fast — make sure your attacker is faster or bring a priority move.',
        ],
        items: ['Fen Badge', 'TM55 Brine'],
      },
      {
        title: 'Team Galactic at Lake Valor',
        description: 'After the gym, Team Galactic drains Lake Valor and captures Azelf. Chase them to Celestic Town, where Cynthia\'s grandmother explains the Sinnoh creation legends.',
        tips: ['The Sinnoh creation myth involves Arceus, the original one — this lore is fascinating and builds throughout the game.'],
        items: ['HM03 Surf (from Cynthia\'s grandmother in Celestic Town)'],
      },
      {
        title: 'Team Galactic HQ — Veilstone',
        description: 'Break into Team Galactic\'s headquarters in Veilstone City. Fight your way to rescue the three Lake Pokemon (Azelf, Mesprit, Uxie) from Commander Saturn.',
        items: ['Storage Key', 'Galactic Key', 'HM02 Fly (if not already obtained)'],
        tips: ['The HQ has the most powerful Grunt-level trainers in the game — great for grinding.'],
      },
    ],
  },
  {
    title: 'Canalave City & Iron Island',
    summary: 'Earn the Mine Badge and team up with Riley for a trip through Iron Island.',
    steps: [
      {
        title: 'Canalave City',
        description: 'Cross the canal to reach this harbor city. Team Galactic\'s activities are affecting the region — Barry challenges you on the bridge.',
        tips: ['Byron is the gym leader and Roark\'s father — great father/son storyline.'],
      },
      {
        title: 'Iron Island',
        description: 'Take the ferry to Iron Island. Partner up with Aura trainer Riley to battle through the cave together — he heals after every battle, just like Cheryl!',
        pokemon: ['Steelix', 'Graveler', 'Golbat', 'Onix'],
        items: ['Riolu Egg (from Riley at the end of the island)'],
        tips: ['The Riolu egg hatches into the rare Riolu — evolve it into Lucario with high Friendship during the day.'],
      },
      {
        title: 'Byron — Canalave Gym',
        description: 'Byron uses Bronzor (Lv. 37), Steelix (Lv. 38), and Bastiodon (Lv. 41). Fire, Ground, and Fighting moves are excellent against Steel.',
        tips: [
          'Infernape\'s Fire moves wreck this gym entirely.',
          'Bastiodon has monstrous Defense — use Special attackers.',
          'Ground moves hit Steelix and Bastiodon neutrally.',
        ],
        items: ['Mine Badge', 'TM91 Flash Cannon'],
      },
    ],
  },
  {
    title: 'Lake Legendaries & Mt. Coronet',
    summary: 'Stop Team Galactic at the three lakes and storm Spear Pillar.',
    steps: [
      {
        title: 'Three Lake Battles',
        description: 'Head to Lake Valor, Lake Verity, and Lake Acuity. Each lake holds one of the Lake Guardian trio (Azelf, Mesprit, Uxie) and a Team Galactic commander. Defeat all three commanders.',
        tips: [
          'Commander Saturn guards Lake Valor.',
          'Commander Mars guards Lake Verity (with Barry getting defeated).',
          'Commander Jupiter guards Lake Acuity.',
          'All three Lake Guardians are captured — Cyrus has what he needs.',
        ],
      },
      {
        title: 'Snowpoint City',
        description: 'Head north through Routes 216–217 in a blizzard. Snowpoint City is icy and remote. Stock up before the gym.',
        pokemon: ['Snover', 'Sneasel', 'Swinub', 'Abomasnow'],
        tips: ['The blizzard conditions on Route 217 make navigation tough — use the trees as landmarks.'],
      },
      {
        title: 'Candice — Snowpoint Gym',
        description: 'Candice uses Sneasel (Lv. 40), Piloswine (Lv. 40), Abomasnow (Lv. 42), and Froslass (Lv. 44). Fire, Fighting, Rock, and Steel moves destroy Ice types.',
        tips: [
          'Infernape or Rapidash trivializes this gym.',
          'Froslass is Ice/Ghost — Dark moves also work on it.',
          'The puzzle involves pushing snowballs into holes.',
        ],
        items: ['Icicle Badge', 'TM72 Avalanche'],
      },
      {
        title: 'Mt. Coronet — Spear Pillar',
        description: 'The final ascent through Mt. Coronet. Team Galactic has assembled at Spear Pillar at the summit. Fight through hordes of Grunts and all five Commanders to reach Cyrus.',
        tips: [
          'Bring many healing items — this is the longest dungeon in the game.',
          'The weather inside Mt. Coronet changes based on which game you\'re playing.',
          'In Platinum, Giratina plays a role here as well.',
        ],
      },
      {
        title: 'Cyrus Battle and Dialga/Palkia',
        description: 'Defeat Cyrus atop Spear Pillar. He summons either Dialga (Diamond/BD) or Palkia (Pearl/SP) with the Red Chain. Cynthia appears and the Lake Guardians break the chain.',
        tips: [
          'The legendary appears at level 47 — bring your best team.',
          'Save before engaging the legendary!',
          'Use the Master Ball here or bring many Ultra Balls.',
        ],
        pokemon: ['Dialga (Diamond/BD)', 'Palkia (Pearl/SP)', 'Both + Giratina (Platinum)'],
      },
    ],
  },
  {
    title: 'Sunyshore City & the Pokemon League',
    summary: 'Get the final gym badge and face the Elite Four and Champion Cynthia.',
    steps: [
      {
        title: 'Sunyshore City',
        description: 'The coastal city powered entirely by solar energy. Volkner, the gym leader, is bored of trainers and almost quit until he hears about your progress.',
        items: ['HM07 Waterfall (from Jasmine who visits Sunyshore from Johto)'],
        tips: ['Getting Waterfall from Jasmine is a fun cameo from Gen 2!'],
      },
      {
        title: 'Volkner — Sunyshore Gym',
        description: 'Volkner uses Jolteon (Lv. 46), Raichu (Lv. 46), Luxray (Lv. 48), and Electivire (Lv. 50). Ground types are immune and essential.',
        tips: [
          'Ground-type moves are completely immune to Electric — bring a Ground type.',
          'Garchomp, Golem, or Quagsire/Gastrodon are all excellent here.',
          'Luxray and Electivire are physically strong — bring physically bulky Pokemon.',
        ],
        items: ['Beacon Badge', 'TM57 Charge Beam'],
      },
      {
        title: 'Victory Road',
        description: 'Long, challenging cave. Requires multiple HMs. Bring Strength, Rock Smash, Surf, and Waterfall.',
        pokemon: ['Steelix', 'Gabite', 'Golbat', 'Graveler'],
        tips: ['Gabite can be caught here — it evolves into the powerful Garchomp. Worth catching!'],
      },
      {
        title: 'Elite Four: Aaron',
        description: 'Aaron uses Bug types: Dustox (Lv. 53), Beautifly (Lv. 53), Vespiquen (Lv. 54), Heracross (Lv. 54), Drapion (Lv. 57). Fire, Rock, and Flying work great.',
        tips: ['Rock moves hit most of his team. Heracross is Bug/Fighting — Flying moves hit it for 4x damage.'],
      },
      {
        title: 'Elite Four: Bertha',
        description: 'Bertha uses Ground types: Whiscash (Lv. 55), Gliscor (Lv. 55), Golem (Lv. 56), Rhyperior (Lv. 61), Hippowdon (Lv. 59). Water and Grass are excellent.',
        tips: ['Surf or Grass Knot handles most of her team. Gliscor is Ground/Flying — Ice moves hit it for 4x!'],
      },
      {
        title: 'Elite Four: Flint',
        description: 'Flint uses Fire types (and some non-Fire in D/P): Houndoom (Lv. 58), Flareon (Lv. 57), Rapidash (Lv. 58), Infernape (Lv. 61), Magmortar (Lv. 61). Water and Ground moves.',
        tips: ['Surf handles his whole team. In Platinum his team is all Fire types.'],
      },
      {
        title: 'Elite Four: Lucian',
        description: 'Lucian uses Psychic types: Mr. Mime (Lv. 59), Espeon (Lv. 59), Bronzong (Lv. 63), Alakazam (Lv. 60), Gallade (Lv. 63). Dark, Ghost, and Bug moves.',
        tips: [
          'Dark moves like Crunch or Dark Pulse are essential.',
          'Bronzong is Steel/Psychic — Ground or Fire moves work best.',
          'Gallade is Psychic/Fighting — Ghost or Flying moves are effective.',
        ],
      },
      {
        title: 'Champion Cynthia',
        description: 'Cynthia is widely considered the hardest Champion in the series. Her team: Spiritomb (Lv. 61), Roserade (Lv. 60), Togekiss (Lv. 60), Lucario (Lv. 63), Milotic (Lv. 63), Garchomp (Lv. 66).',
        tips: [
          'Spiritomb has no weaknesses in Gen 4 (Ghost/Dark). Use strong neutral moves.',
          'Togekiss knows Air Slash and flinches constantly — use fast Pokemon.',
          'Garchomp is her ace — it is extremely fast and powerful. Ice moves deal 4x damage.',
          'Milotic will Recover — bring your strongest moves.',
          'This fight requires a fully prepared team of 50+. Good luck!',
        ],
      },
    ],
  },
  {
    title: 'Post-Game: Stark Mountain & Legendary Pokemon',
    summary: 'Explore Stark Mountain, find more legendaries, and complete the National Dex.',
    steps: [
      {
        title: 'National Pokedex and Fight Area',
        description: 'After becoming Champion, receive the National Pokedex upgrade from Professor Rowan. Fly to the Fight Area to explore the Battle Zone islands.',
        tips: ['The Fight Area, Survival Area, and Resort Area are all accessible post-game with new trainer rematches.'],
      },
      {
        title: 'Stark Mountain — Heatran',
        description: 'Navigate Stark Mountain in the northeast of the Battle Zone. Stop Charon (Team Galactic remnant) from stealing the Magma Stone. Heatran then appears in the cave at level 50.',
        pokemon: ['Heatran'],
        items: ['Magma Stone'],
        tips: ['Save before Heatran — use a Dusk Ball at night for best catch rate.'],
      },
      {
        title: 'Legendary Lake Guardians',
        description: 'After the main story, Azelf, Mesprit, and Uxie return to their respective lakes. Mesprit roams Sinnoh — track it with the Pokeradar.',
        pokemon: ['Azelf (Lake Valor)', 'Uxie (Lake Acuity)', 'Mesprit (roaming Lake Verity area)'],
        tips: ['Bring the Master Ball for Mesprit since it roams. Azelf and Uxie are stationary.'],
      },
      {
        title: 'Giratina — Turnback Cave (Diamond/Pearl)',
        description: 'Giratina is found in Turnback Cave north of the Spring Path after the main story. The Distortion World is only accessible in Platinum.',
        pokemon: ['Giratina'],
        tips: ['Turnback Cave has a complex puzzle with fog and rooms — bring Defog and Max Repel.'],
      },
      {
        title: 'The Distortion World (Platinum only)',
        description: 'In Platinum, Giratina drags Cyrus into the Distortion World — a gravity-defying dimension. Navigate this surreal world and catch Giratina at the end.',
        pokemon: ['Giratina (Origin Forme in Platinum)'],
        tips: ['The Distortion World is one of the most unique and memorable dungeons in Pokemon history.'],
      },
      {
        title: 'Regigigas — Snowpoint Temple (Platinum)',
        description: 'With Regirock, Regice, and Registeel in your party, you can awaken Regigigas in Snowpoint Temple.',
        pokemon: ['Regigigas'],
        tips: ['Regigigas has the ability Slow Start — it is very weak for the first five turns. Use this time to set up.'],
      },
    ],
  },
];

// ============================================================
// UNOVA (Gen 5) — Black / White
// ============================================================
const unovaChapters: WalkthroughChapter[] = [
  {
    title: 'Nuvema Town — A New Beginning',
    summary: 'Professor Juniper delivers a gift box to you and your friends Cheren and Bianca. Choose your starter and begin your Unova adventure!',
    steps: [
      { title: 'Choose Your Starter', description: 'Open the gift box in your room and pick Snivy, Tepig, or Oshawott. You\'ll have a battle with Bianca right away, then another with Cheren.', tips: ['Tepig has an easier early game with Grass-type Gyms ahead.', 'Snivy is the most defensive starter.'], pokemon: ['Snivy', 'Tepig', 'Oshawott'] },
      { title: 'Visit Professor Juniper', description: 'Head to the lab to receive your Pokédex and Poké Balls. Bianca\'s dad tries to stop her from leaving — drama!', items: ['Pokédex', 'Poké Balls x5'] },
      { title: 'Route 1 — First Catches', description: 'Professor Juniper teaches you how to catch Pokémon. Explore the tall grass for early catches.', pokemon: ['Patrat', 'Lillipup'], tips: ['Lillipup is an excellent early-game Pokémon with Pickup ability.'] },
      { title: 'Accumula Town', description: 'Watch Team Plasma\'s first public speech in the town square. Meet N for the first time and battle him. Visit the Pokémon Center.', pokemon: ['Purrloin'] },
    ],
  },
  {
    title: 'Striaton City — Triple Trouble',
    summary: 'The first gym has three leaders! Your opponent depends on your starter choice. Explore the Dreamyard along the way.',
    steps: [
      { title: 'Route 2 — Training', description: 'Battle trainers and wild Pokémon to level up. Your Mom gives you the Running Shoes!', pokemon: ['Patrat', 'Lillipup', 'Purrloin'], items: ['Running Shoes'] },
      { title: 'Explore Striaton City', description: 'Visit the Trainer\'s School and learn about type matchups. Heal up before the gym.', items: ['Great Ball (from NPC)'] },
      { title: 'Dreamyard — Get Your Counter', description: 'Before the gym, visit the Dreamyard to get a Pokémon that counters the gym leader you\'ll face. You receive a monkey Pokémon: Pansage, Pansear, or Panpour.', pokemon: ['Pansage', 'Pansear', 'Panpour', 'Munna'], tips: ['The monkey you receive is super effective against your gym leader.'] },
      { title: 'Gym Battle: Cilan / Chili / Cress', description: 'Face the Striaton triplets! Your opponent is determined by your starter. Use your gifted monkey for a type advantage.', tips: ['Cilan (Grass) if you chose Oshawott, Chili (Fire) if you chose Snivy, Cress (Water) if you chose Tepig.', 'Their ace is Lv. 14.'], items: ['Trio Badge', 'TM83 Work Up'] },
    ],
  },
  {
    title: 'Nacrene City — Museum Mysteries',
    summary: 'Travel through Route 3 and Wellspring Cave to reach Nacrene City, home to a museum and the second gym.',
    steps: [
      { title: 'Route 3 — Daycare & Battles', description: 'Battle Cheren on Route 3. Find the Pokémon Day Care and explore the area.', pokemon: ['Blitzle', 'Pidove', 'Roggenrola'], tips: ['Blitzle is a great Electric-type addition to your team.'] },
      { title: 'Wellspring Cave — Team Plasma', description: 'Team Plasma grunts have stolen a Pokémon! Chase them into Wellspring Cave with Cheren.', pokemon: ['Roggenrola', 'Woobat'] },
      { title: 'Nacrene City — Prep', description: 'Explore the museum and café. Get ready for a Normal-type gym battle.', tips: ['Fighting-type moves are key here. Timburr from Pinwheel Forest entrance works great.'] },
      { title: 'Gym Battle: Lenora', description: 'Lenora uses Normal-type Pokémon. Her Watchog is tricky with Retaliate — especially if she just lost her Herdier.', tips: ['Watch out for Retaliate — it doubles in power if her previous Pokémon just fainted!', 'Her ace Watchog is Lv. 20.'], items: ['Basic Badge', 'TM67 Retaliate'] },
      { title: 'Pinwheel Forest — Recover the Skull', description: 'Team Plasma steals the Dragon Skull from the museum! Chase them through Pinwheel Forest.', pokemon: ['Timburr', 'Throh/Sawk', 'Sewaddle', 'Venipede', 'Cottonee/Petilil'] },
    ],
  },
  {
    title: 'Castelia City — The Big City',
    summary: 'Cross the Skyarrow Bridge to reach the massive Castelia City. Face Burgh\'s Bug-type gym!',
    steps: [
      { title: 'Skyarrow Bridge', description: 'Cross the iconic bridge to Castelia City. Enjoy the amazing views!', tips: ['This is one of the most memorable moments in Gen 5.'] },
      { title: 'Explore Castelia City', description: 'This huge city has tons to find. Visit the piers, get items from NPCs, and explore the streets.', items: ['Amulet Coin', 'Miracle Seed', 'Charcoal', 'Mystic Water'], tips: ['Talk to everyone — Castelia is packed with free items!'] },
      { title: 'Battle Café & Team Plasma', description: 'Help Bianca recover her stolen Pokémon from Team Plasma. Then explore the Battle Company for great battles and rewards.', items: ['Exp. Share', 'Scope Lens'] },
      { title: 'Gym Battle: Burgh', description: 'Burgh uses Bug-type Pokémon. Fire, Flying, and Rock types are your friends here.', tips: ['His Leavanny is Lv. 23 and can hit hard with Razor Leaf.', 'Flying-type moves are especially effective.'], items: ['Insect Badge', 'TM76 Struggle Bug'] },
    ],
  },
  {
    title: 'Nimbasa City — Lights & Thunder',
    summary: 'Head through the Desert Resort and Route 4 to reach the entertainment capital of Unova.',
    steps: [
      { title: 'Route 4 — Desert Sands', description: 'Navigate the sandstorm on Route 4. Lots of trainers and wild Pokémon here.', pokemon: ['Sandile', 'Darumaka', 'Scraggy'], tips: ['Sandile evolves into the excellent Krookodile. Highly recommended!', 'Darumaka has insane Attack — catch one!'] },
      { title: 'Desert Resort & Relic Castle', description: 'Explore the ruins for rare Pokémon and items. Watch for quicksand floors!', pokemon: ['Sigilyph', 'Yamask', 'Sandshrew'], items: ['Cover Fossil / Plume Fossil'] },
      { title: 'Nimbasa City — Fun & Games', description: 'Ride the Ferris wheel with N, explore the stadiums, and check out the musicals.', tips: ['The Battle Subway opens up here for competitive-style battles.'] },
      { title: 'Gym Battle: Elesa', description: 'Elesa uses Electric-type Pokémon. Ground-types like Sandile are your best bet!', tips: ['Her Emolga have Volt Switch and are part Flying — Ground moves won\'t work on them!', 'Her ace Zebstrika is Lv. 27.'], items: ['Bolt Badge', 'TM72 Volt Switch'] },
    ],
  },
  {
    title: 'Driftveil City — Ground Work',
    summary: 'Cross the Driftveil Drawbridge and face Clay\'s Ground-type gym. Team Plasma activity intensifies!',
    steps: [
      { title: 'Route 5 & Driftveil Drawbridge', description: 'Battle trainers on Route 5 and cross the drawbridge. Watch for feathers that blow in the wind!', pokemon: ['Minccino', 'Gothita/Solosis', 'Liepard'], items: ['HM02 Fly'] },
      { title: 'Cold Storage — Team Plasma', description: 'Help Clay track down Team Plasma grunts hiding in the Cold Storage warehouse.', pokemon: ['Vanillite'], tips: ['Vanillite is a cute Ice-type option if you need one.'] },
      { title: 'Gym Battle: Clay', description: 'Clay uses Ground-type Pokémon. Water and Grass moves work great here.', tips: ['His Excadrill is Lv. 31 and very strong — don\'t underestimate it!', 'Bring Grass or Water types.'], items: ['Quake Badge', 'TM78 Bulldoze'] },
      { title: 'PWT & Route 6', description: 'After the badge, explore Route 6 and the seasonal forest. Meet Bianca and Cheren again.', pokemon: ['Deerling', 'Karrablast', 'Shelmet', 'Foongus'] },
    ],
  },
  {
    title: 'Mistralton City — Sky High',
    summary: 'Travel through Chargestone Cave to reach Mistralton City and challenge Skyla\'s Flying gym!',
    steps: [
      { title: 'Chargestone Cave', description: 'Navigate this electric cave full of magnetic puzzles. N and Team Plasma are also here.', pokemon: ['Joltik', 'Ferroseed', 'Klink', 'Tynamo'], tips: ['Joltik evolves into the fantastic Galvantula — great special attacker.', 'Ferroseed is an amazing defensive Pokémon.'] },
      { title: 'Mistralton City & Celestial Tower', description: 'Visit the Celestial Tower to ring the bell at the top. Battle trainers along the way.', pokemon: ['Litwick', 'Elgyem'] },
      { title: 'Gym Battle: Skyla', description: 'Skyla uses Flying-type Pokémon. Electric, Ice, and Rock moves are effective.', tips: ['Her Swanna is part Water, so Electric is 4x effective!', 'Her ace is Lv. 35.'], items: ['Jet Badge', 'TM62 Acrobatics'] },
      { title: 'Route 7 & Twist Mountain', description: 'Continue through Route 7 and enter Twist Mountain to reach Icirrus City.', pokemon: ['Cubchoo', 'Cryogonal', 'Boldore'] },
    ],
  },
  {
    title: 'Icirrus City — Ice & Dragons',
    summary: 'Challenge Brycen\'s Ice-type gym, then face a major Team Plasma confrontation at Dragonspiral Tower!',
    steps: [
      { title: 'Icirrus City', description: 'Explore the wintery city. Visit the fan club and prepare for an Ice-type gym.', tips: ['Fire and Fighting types shine in this gym.'] },
      { title: 'Gym Battle: Brycen', description: 'Brycen uses Ice-type Pokémon. Fighting and Fire moves work great.', tips: ['His Beartic is Lv. 39 — bring your strongest counters.'], items: ['Freeze Badge', 'TM79 Frost Breath'] },
      { title: 'Dragonspiral Tower', description: 'Team Plasma storms Dragonspiral Tower! Race to the top where N awakens the legendary dragon Pokémon.', tips: ['This is a pivotal story moment — N has awakened Reshiram (Black) or Zekrom (White).'] },
      { title: 'Route 8 & Moor of Icirrus', description: 'Explore the wetlands and Route 8 heading south. Battle trainers and catch new Pokémon.', pokemon: ['Stunfisk', 'Palpitoad', 'Shelmet'] },
    ],
  },
  {
    title: 'Opelucid City — The Final Badge',
    summary: 'Travel through Route 9 and Shopping Mall Nine to reach Opelucid City for the eighth badge!',
    steps: [
      { title: 'Route 9 & Shopping Mall Nine', description: 'Browse the mall for TMs and supplies. Battle biker trainers on Route 9.', pokemon: ['Pawniard', 'Garbodor'], tips: ['Stock up on healing items for the gym and upcoming challenges.'] },
      { title: 'Opelucid City', description: 'Learn about the legendary dragons from Drayden (or Iris in White). The city looks different between versions!', tips: ['The city is futuristic in Black and traditional in White.'] },
      { title: 'Gym Battle: Drayden / Iris', description: 'Face the Dragon-type gym! Ice moves are your biggest weapon here.', tips: ['Dragon and Ice types are super effective.', 'Their ace Haxorus is Lv. 43 — it hits HARD.'], items: ['Legend Badge', 'TM82 Dragon Tail'] },
      { title: 'Route 10 & Badge Check Gates', description: 'Head to Route 10 and pass through the Badge Check Gates leading to Victory Road.', pokemon: ['Bouffalant', 'Rufflet/Vullaby'] },
    ],
  },
  {
    title: 'Victory Road & Pokémon League',
    summary: 'Conquer Victory Road, face the Elite Four, and then confront N and Ghetsis in the final showdown!',
    steps: [
      { title: 'Victory Road', description: 'Navigate the treacherous Victory Road cave. Battle strong trainers and find items.', tips: ['Make sure your team is Lv. 45+ before entering the Pokémon League.', 'Stock up on Full Restores and Revives!'], pokemon: ['Deino', 'Mienfoo'] },
      { title: 'Elite Four: Shauntal & Marshal', description: 'Face Shauntal (Ghost) and Marshal (Fighting). You can challenge them in any order.', tips: ['Dark types handle Shauntal well.', 'Flying and Psychic types counter Marshal.'] },
      { title: 'Elite Four: Grimsley & Caitlin', description: 'Face Grimsley (Dark) and Caitlin (Psychic). Continue through the League.', tips: ['Fighting types for Grimsley, Dark or Ghost for Caitlin.'] },
      { title: 'N\'s Castle — Catch the Legendary!', description: 'N\'s Castle rises from the ground! Battle through Team Plasma and face N. You MUST catch Reshiram (Black) or Zekrom (White) to proceed!', tips: ['The legendary has a very high catch rate — don\'t worry about wasting your Master Ball here.', 'This is one of the best story moments in Pokémon history.'], pokemon: ['Reshiram (Black)', 'Zekrom (White)'] },
      { title: 'Final Battle: Ghetsis', description: 'After defeating N, Ghetsis reveals his true plan and battles you. His Hydreigon is extremely dangerous!', tips: ['Ghetsis\'s Hydreigon is the toughest fight in the game. Ice moves help.', 'His team is around Lv. 52-54.'] },
      { title: 'Post-Game: Eastern Unova', description: 'After the credits, explore the eastern half of Unova! New routes, cities, and the legendary roamer await.', pokemon: ['Tornadus (Black)', 'Thundurus (White)', 'Landorus', 'Kyurem'], tips: ['You can now catch Kyurem in the Giant Chasm!'] },
    ],
  },
];

// ============================================================
// UNOVA (Gen 5) — Black 2 / White 2
// ============================================================
const unovaBW2Chapters: WalkthroughChapter[] = [
  {
    title: 'Aspertia City — Two Years Later',
    summary: 'Set two years after Black/White, your journey begins in a new city in southwest Unova.',
    steps: [
      { title: 'Meet Hugh & Choose Your Starter', description: 'Your rival Hugh is searching for his sister\'s stolen Purrloin. Choose your starter from Bianca, who is now Professor Juniper\'s assistant.', pokemon: ['Snivy', 'Tepig', 'Oshawott'], tips: ['The starter type matchups are the same, but the gym order is different!'] },
      { title: 'Route 19 & Floccesy Town', description: 'Head north through Route 19 to reach Floccesy Town. Meet Alder, the former Champion!', pokemon: ['Patrat', 'Purrloin'] },
      { title: 'Floccesy Ranch', description: 'Help Hugh find Team Plasma grunts at the ranch. Catch some early Pokémon.', pokemon: ['Mareep', 'Riolu', 'Lillipup', 'Azurill'], tips: ['Riolu is available here — an incredible early catch! It evolves into Lucario.'] },
      { title: 'Gym Battle: Cheren', description: 'Your first gym leader is Cheren from BW1! He uses Normal-types. Fight back with Fighting moves.', tips: ['His ace is Lv. 13. Riolu with Force Palm works great!'], items: ['Basic Badge', 'TM83 Work Up'] },
    ],
  },
  {
    title: 'Virbank City — Rocking Out',
    summary: 'Head south to Virbank City and challenge the rockin\' Poison-type gym leader Roxie!',
    steps: [
      { title: 'Route 20 & Virbank Complex', description: 'Explore the industrial complex for wild Pokémon and items.', pokemon: ['Sewaddle', 'Venipede', 'Pidove', 'Magnemite', 'Growlithe/Elekid'], tips: ['Magnemite is excellent — Steel/Electric typing is incredible.'] },
      { title: 'Gym Battle: Roxie', description: 'Roxie runs a Poison-type gym inside a rock club! Ground and Psychic moves work well.', tips: ['Her Whirlipede is Lv. 18. Watch for Venoshock after poison.'], items: ['Toxic Badge', 'TM09 Venoshock'] },
      { title: 'Pokéstar Studios', description: 'Try your hand at making movies! It\'s a fun optional activity with good rewards.', tips: ['Good movie performances earn you items and fans.'] },
      { title: 'Set Sail', description: 'Take the boat from Virbank to Castelia City with Hugh.', tips: ['Make sure you\'ve explored everything before leaving!'] },
    ],
  },
  {
    title: 'Castelia City — Sewers & Bugs',
    summary: 'Return to the big city and explore the new Castelia Sewers. Face Burgh again!',
    steps: [
      { title: 'Castelia Sewers', description: 'Team up with Hugh to battle Team Plasma in the sewers beneath Castelia.', pokemon: ['Zubat', 'Rattata', 'Grimer'], items: ['HM04 Strength'] },
      { title: 'Explore Castelia City', description: 'Visit the piers, get free items, and check the medal office.', items: ['Amulet Coin', 'Miracle Seed'] },
      { title: 'Gym Battle: Burgh', description: 'Burgh still leads the Bug gym. Fire and Flying types dominate.', tips: ['His Leavanny is Lv. 24 now.'], items: ['Insect Badge', 'TM76 Struggle Bug'] },
      { title: 'Route 4 — Desert', description: 'Head north through the desert-themed Route 4.', pokemon: ['Sandile', 'Darumaka', 'Scraggy'] },
    ],
  },
  {
    title: 'Nimbasa City — Join Avenue',
    summary: 'Reach Nimbasa through the Desert Resort and discover the new Join Avenue feature!',
    steps: [
      { title: 'Desert Resort & Relic Passage', description: 'Explore the desert and find the Relic Passage connecting to the sewers.', pokemon: ['Sigilyph', 'Trapinch', 'Maractus'] },
      { title: 'Join Avenue', description: 'You become the manager of Join Avenue! Invite visitors to open shops.', tips: ['Level up Join Avenue for access to great shops and services.'] },
      { title: 'Gym Battle: Elesa', description: 'Elesa\'s gym has a runway fashion show theme now! Still Electric-type.', tips: ['Her Zebstrika is Lv. 30. Ground-types remain essential.', 'Sandile/Krokorok handles this gym perfectly.'], items: ['Bolt Badge', 'TM72 Volt Switch'] },
      { title: 'Route 5 — Onward', description: 'Continue west across the Driftveil Drawbridge.', pokemon: ['Minccino', 'Liepard', 'Trubbish'] },
    ],
  },
  {
    title: 'Driftveil — Clay Returns',
    summary: 'Challenge Clay\'s Ground gym again and deal with Team Plasma\'s growing threat.',
    steps: [
      { title: 'Driftveil City & PWT', description: 'The Pokémon World Tournament is now in Driftveil! Battle past gym leaders and champions.', tips: ['PWT is amazing for battling classic characters — come back often!'] },
      { title: 'Relic Passage Exploration', description: 'Find the path to the Relic Castle through the sewers.', pokemon: ['Onix', 'Drilbur', 'Raticate'] },
      { title: 'Gym Battle: Clay', description: 'Clay\'s Ground gym returns. Water and Grass types are still the way to go.', tips: ['His Excadrill is now Lv. 34 — even stronger than before!'], items: ['Quake Badge', 'TM78 Bulldoze'] },
      { title: 'Team Plasma Frigate', description: 'Infiltrate the Team Plasma Frigate docked near Driftveil!', tips: ['This is the first encounter with the new Team Plasma.'] },
    ],
  },
  {
    title: 'Mistralton & Lentimas',
    summary: 'Fly through Mistralton\'s gym and explore the volcanic Reversal Mountain with Bianca!',
    steps: [
      { title: 'Chargestone Cave', description: 'Navigate the electric cave once more. Team Plasma has a presence here too.', pokemon: ['Joltik', 'Ferroseed', 'Tynamo'] },
      { title: 'Gym Battle: Skyla', description: 'Skyla\'s Flying gym is back! Electric and Rock types are your best options.', tips: ['Her ace Swanna is Lv. 39.'], items: ['Jet Badge', 'TM62 Acrobatics'] },
      { title: 'Lentimas Town & Reversal Mountain', description: 'Fly to Lentimas Town and explore Reversal Mountain with Bianca.', pokemon: ['Skorupi', 'Numel/Spoink', 'Camerupt/Grumpig'] },
      { title: 'Strange House', description: 'Explore the haunted Strange House to find the Lunar Wing.', pokemon: ['Litwick', 'Banette'], items: ['Lunar Wing'] },
    ],
  },
  {
    title: 'Undella to Opelucid',
    summary: 'Travel the eastern coast, explore Undella Bay, and earn your seventh and eighth badges.',
    steps: [
      { title: 'Undella Town', description: 'Visit the resort town on the coast. Cynthia can be battled here!', tips: ['Cynthia\'s team is incredibly strong — save this fight for later if needed.'] },
      { title: 'Route 13 & Lacunosa Town', description: 'Head north through Route 13 to reach Lacunosa Town, known for its meteor legend.', pokemon: ['Absol', 'Tangela', 'Lunatone/Solrock'] },
      { title: 'Gym Battle: Drayden', description: 'Drayden\'s Dragon gym in Opelucid City. Ice types dominate here.', tips: ['His Haxorus is Lv. 49 — bring your strongest Ice moves.'], items: ['Legend Badge', 'TM82 Dragon Tail'] },
      { title: 'Team Plasma Attacks Opelucid!', description: 'Team Plasma freezes Opelucid City with the Plasma Frigate! The DNA Splicers are stolen!', tips: ['This is a dramatic story sequence — pursue Team Plasma!'] },
    ],
  },
  {
    title: 'Humilau & Giant Chasm',
    summary: 'Earn the final badge at Humilau City and pursue Team Plasma to the Giant Chasm for the climax!',
    steps: [
      { title: 'Route 21 & Seaside Cave', description: 'Navigate Seaside Cave to reach Humilau City.', pokemon: ['Frillish', 'Seel'] },
      { title: 'Gym Battle: Marlon', description: 'Marlon uses Water-type Pokémon. Grass and Electric moves are key.', tips: ['His Jellicent is Lv. 51 — tricky with Cursed Body ability.'], items: ['Wave Badge', 'TM55 Scald'] },
      { title: 'Plasma Frigate Assault', description: 'Board the Plasma Frigate and battle through Team Plasma forces. Face the Shadow Triad!', tips: ['Prepare a balanced team — you\'ll face many battles in a row.'] },
      { title: 'Giant Chasm & Kyurem', description: 'Chase Team Plasma to the Giant Chasm. Ghetsis fuses Kyurem with Reshiram/Zekrom to create Black/White Kyurem!', pokemon: ['Black Kyurem (B2)', 'White Kyurem (W2)'], tips: ['After defeating Ghetsis, you can catch Kyurem in the cave!'] },
      { title: 'Final Battle: Ghetsis', description: 'Face Ghetsis one final time. His team is even stronger than in BW1!', tips: ['His Hydreigon is Lv. 54. Ice and Fairy-type moves are essential.'] },
    ],
  },
  {
    title: 'Victory Road & Champion',
    summary: 'Conquer Victory Road and face the Pokémon League — with a new Champion waiting!',
    steps: [
      { title: 'Route 23 & Victory Road', description: 'Navigate the updated Victory Road to reach the Pokémon League.', tips: ['Your team should be Lv. 55+ for the Elite Four.'] },
      { title: 'Elite Four', description: 'Face Shauntal (Ghost), Marshal (Fighting), Grimsley (Dark), and Caitlin (Psychic) — in any order.', tips: ['Same Elite Four as BW1, but with stronger teams.'] },
      { title: 'Champion: Iris!', description: 'The new Champion is Iris! She uses a powerful Dragon-type team. This is a tough fight!', tips: ['Her Haxorus is Lv. 59. Ice Beam and Dragon moves are critical.', 'Iris has a very diverse team — prepare for multiple types.'] },
      { title: 'Post-Game', description: 'Explore new areas, catch legendary Pokémon, and complete the Unova Pokédex!', pokemon: ['Latios/Latias', 'Heatran', 'Regigigas', 'Cresselia'], tips: ['The post-game in B2W2 is one of the largest in the series!'] },
    ],
  },
];

// ============================================================
// KALOS (Gen 6) — X / Y
// ============================================================
const kalosChapters: WalkthroughChapter[] = [
  {
    title: 'Vaniville Town — Bonjour Kalos!',
    summary: 'Welcome to the Kalos region! Meet your neighbors, pick your starter, and start your journey through beautiful France-inspired landscapes.',
    steps: [
      { title: 'Move to Vaniville Town', description: 'You\'ve just moved to Vaniville Town. Go outside to meet your new neighbors Shauna, Tierno, Trevor, and your rival Calem/Serena.', tips: ['Sit back and enjoy the gorgeous 3D graphics — this was the first 3D Pokémon game!'] },
      { title: 'Aquacorde Town — Pick Your Starter', description: 'Meet your friends in the café at Aquacorde Town to receive your starter Pokémon and Pokédex.', pokemon: ['Chespin', 'Fennekin', 'Froakie'], tips: ['Froakie evolves into the fan-favorite Greninja.', 'You also get to pick a Kanto starter later!'] },
      { title: 'Route 2 — First Steps', description: 'Head through Route 2 to learn catching and battling basics.', pokemon: ['Bunnelby', 'Fletchling', 'Zigzagoon'], tips: ['Fletchling evolves into the amazing Talonflame — catch one!'] },
      { title: 'Santalune Forest', description: 'Navigate through the forest, battling trainers and catching Pokémon.', pokemon: ['Pikachu', 'Caterpie', 'Weedle', 'Pansage/Pansear/Panpour'] },
    ],
  },
  {
    title: 'Santalune City — Shutterbug',
    summary: 'Face your first gym leader Viola and her Bug-type Pokémon in the photography-themed gym!',
    steps: [
      { title: 'Explore Santalune City', description: 'Visit the Pokémon Center, shops, and talk to NPCs for items.', items: ['Roller Skates'] },
      { title: 'Gym Battle: Viola', description: 'Viola uses Bug-type Pokémon. Fire and Flying moves are super effective!', tips: ['Her Vivillon is Lv. 12 and knows Infestation — annoying but manageable.', 'Fletchling makes this gym easy.'], items: ['Bug Badge', 'TM83 Infestation'] },
      { title: 'Route 4 — Parterre Way', description: 'Beautiful flower gardens line this route to Lumiose City.', pokemon: ['Budew', 'Ralts', 'Flabébé'], tips: ['Ralts is a fantastic catch — evolves into Gardevoir or Gallade.'] },
      { title: 'Lumiose City — First Visit', description: 'Arrive in the massive Lumiose City, but most of it is blocked due to a power outage. Visit Professor Sycamore\'s lab!', tips: ['You get a free Kanto starter from Sycamore! Charmander, Squirtle, or Bulbasaur.'], pokemon: ['Charmander', 'Squirtle', 'Bulbasaur'], items: ['Kanto Starter'] },
    ],
  },
  {
    title: 'Cyllage City — Climbing High',
    summary: 'Travel through Connecting Cave and Route 8 to reach the seaside Cyllage City and its Rock-type gym.',
    steps: [
      { title: 'Route 5 — Versant Road', description: 'Roller skate down Route 5 and battle trainers. Meet Korrina for the first time!', pokemon: ['Pancham', 'Furfrou', 'Gulpin'] },
      { title: 'Camphrier Town & Route 7', description: 'Visit the castle and watch the Snorlax event. Get the Poké Flute!', pokemon: ['Snorlax'], items: ['Poké Flute'] },
      { title: 'Connecting Cave & Route 8', description: 'Travel through the cave and coastal route to reach Cyllage.', pokemon: ['Zubat', 'Absol (rare!)', 'Inkay', 'Drifloon'] },
      { title: 'Gym Battle: Grant', description: 'Grant uses Rock-type Pokémon in a rock-climbing gym! Water, Grass, and Fighting moves work well.', tips: ['His Tyrunt is Lv. 25 and has Strong Jaw ability.'], items: ['Cliff Badge', 'TM39 Rock Tomb'] },
    ],
  },
  {
    title: 'Shalour City — Mega Evolution!',
    summary: 'Reach the Tower of Mastery and unlock the power of Mega Evolution with Korrina!',
    steps: [
      { title: 'Route 11 & Reflection Cave', description: 'Navigate the mirror-filled cave.', pokemon: ['Solosis/Gothita', 'Chingling', 'Sableye/Carbink'] },
      { title: 'Shalour City & Tower of Mastery', description: 'Meet Korrina at the Tower of Mastery and learn about Mega Evolution!', items: ['Mega Ring'] },
      { title: 'Gym Battle: Korrina', description: 'Korrina uses Fighting-type Pokémon. She Mega Evolves her Lucario!', tips: ['Flying and Psychic types are effective.', 'Her Mega Lucario is Lv. 32.'], items: ['Rumble Badge', 'TM98 Power-Up Punch'] },
      { title: 'Mega Lucario Battle', description: 'After the gym, battle Korrina\'s Mega Lucario one-on-one with the Mega Lucario she gives you!', pokemon: ['Lucario (with Lucarionite)'], tips: ['You receive a Lucario that can Mega Evolve — amazing gift!'] },
    ],
  },
  {
    title: 'Coumarine City — Nature\'s Badge',
    summary: 'Surf along Route 12, explore the seaside, and challenge Ramos\'s Grass-type gym.',
    steps: [
      { title: 'Route 12 — Fourrage Road', description: 'Ride Skiddo along the ranch route and find items.', pokemon: ['Skiddo', 'Tauros', 'Miltank', 'Pachirisu'], items: ['HM03 Surf'] },
      { title: 'Azure Bay', description: 'Optional area with great Water-type encounters.', pokemon: ['Lapras', 'Chinchou'] },
      { title: 'Gym Battle: Ramos', description: 'Ramos uses Grass-type Pokémon in a hedge-maze gym. Fire, Ice, and Flying work great.', tips: ['His Gogoat is Lv. 34. Fire types make this easy.'], items: ['Plant Badge', 'TM86 Grass Knot'] },
      { title: 'Route 13 — Power Plant', description: 'Help fix the Lumiose City power plant. Team Flare is causing trouble!', tips: ['After restoring power, all of Lumiose City becomes accessible!'] },
    ],
  },
  {
    title: 'Lumiose City — City of Light',
    summary: 'Return to a fully powered Lumiose City and face Clemont\'s Electric-type gym!',
    steps: [
      { title: 'Explore Lumiose City', description: 'Now fully accessible! Visit boutiques, cafés, the Pokémon Lab, and restaurants.', tips: ['Lumiose has SO much to do — PR Videos, Battle Institute, Looker missions post-game.', 'The restaurants are great for money and Exp.'], items: ['TMs from boutiques'] },
      { title: 'Gym Battle: Clemont', description: 'Clemont uses Electric-type Pokémon in a quiz-show themed gym. Ground types sweep!', tips: ['His Heliolisk is Lv. 37 and can be tricky with Grass Knot.'], items: ['Voltage Badge', 'TM24 Thunderbolt'] },
      { title: 'Route 14 — Laverre Nature Trail', description: 'Head through the spooky swamp to reach Laverre City.', pokemon: ['Goomy', 'Haunter', 'Quagsire'], tips: ['CATCH GOOMY! It evolves into Goodra, one of the best pseudo-legendaries.'] },
    ],
  },
  {
    title: 'Laverre & Dendemille — Team Flare Rises',
    summary: 'Challenge the Fairy-type gym and face Team Flare\'s growing threat at the Poké Ball Factory!',
    steps: [
      { title: 'Gym Battle: Valerie', description: 'Valerie runs the Fairy-type gym — the first ever! Poison and Steel moves are effective.', tips: ['Her Mr. Mime is Lv. 39 and her Sylveon is Lv. 42.'], items: ['Fairy Badge', 'TM99 Dazzling Gleam'] },
      { title: 'Poké Ball Factory', description: 'Team Flare has taken over the Poké Ball Factory! Clear them out with Calem/Serena.', tips: ['You\'ll battle several Team Flare admins in a row.'], items: ['Master Ball', 'Big Nugget'] },
      { title: 'Route 15 & Dendemille Town', description: 'Travel to the snowy Dendemille Town.', pokemon: ['Klefki', 'Sneasel'] },
      { title: 'Frost Cavern', description: 'Help an Abomasnow from Team Flare in the icy cavern.', pokemon: ['Beartic', 'Piloswine', 'Cryogonal'] },
    ],
  },
  {
    title: 'Anistar City — Psychic Power',
    summary: 'Challenge Olympia\'s Psychic gym and uncover Team Flare\'s ultimate weapon!',
    steps: [
      { title: 'Route 17 — Mamoswine Road', description: 'Ride Mamoswine through the deep snow to reach Anistar City!', tips: ['One of the most memorable routes in the game.'] },
      { title: 'Gym Battle: Olympia', description: 'Olympia uses Psychic-type Pokémon in a space-themed gym. Dark, Ghost, and Bug moves work well.', tips: ['Her Meowstic is Lv. 44 and her Slowking is tanky.'], items: ['Psychic Badge', 'TM04 Calm Mind'] },
      { title: 'Lysandre\'s Broadcast', description: 'Lysandre reveals Team Flare\'s plan to the world! The ultimate weapon is about to fire!', tips: ['This is the point of no return for the main story — prepare your team!'] },
    ],
  },
  {
    title: 'Team Flare Showdown',
    summary: 'Infiltrate Team Flare\'s secret HQ in Geosenge Town and stop the ultimate weapon!',
    steps: [
      { title: 'Geosenge Town — Secret Lab', description: 'Enter Team Flare\'s hidden laboratory beneath Geosenge Town.', tips: ['Your team should be Lv. 45+ for the battles ahead.'] },
      { title: 'Battle Lysandre', description: 'Face Team Flare\'s leader Lysandre. He uses a powerful team with Mega Gyarados!', tips: ['His Mega Gyarados is Water/Dark — Electric and Fairy moves work.'] },
      { title: 'Catch the Legendary!', description: 'Encounter Xerneas (X) or Yveltal (Y) in the underground chamber! You must catch it to continue.', pokemon: ['Xerneas (X)', 'Yveltal (Y)'], tips: ['Like other box legendaries, they have a high catch rate. Save your Master Ball!'] },
      { title: 'Final Lysandre Battle', description: 'Face Lysandre one more time. He\'s even more powerful now!', tips: ['Use your new legendary if you need to!'] },
    ],
  },
  {
    title: 'Snowbelle City & Pokémon League',
    summary: 'Earn the final badge in the icy Snowbelle City, then conquer the Kalos Pokémon League!',
    steps: [
      { title: 'Route 19 — Grande Vallée Way', description: 'Travel south to Snowbelle City through the autumn-colored routes.', pokemon: ['Sliggoo', 'Druddigon'] },
      { title: 'Gym Battle: Wulfric', description: 'Wulfric uses Ice-type Pokémon. Fighting, Fire, and Steel types are effective.', tips: ['His Avalugg is Lv. 48 and incredibly bulky!'], items: ['Iceberg Badge', 'TM13 Ice Beam'] },
      { title: 'Victory Road', description: 'Navigate the challenging Victory Road cave. Battle strong trainers!', tips: ['Level your team to 55+ before the Elite Four.'] },
      { title: 'Elite Four & Champion Diantha', description: 'Face Wikstrom (Steel), Malva (Fire), Drasna (Dragon), and Siebold (Water). Then battle Champion Diantha!', tips: ['Diantha\'s Mega Gardevoir is Lv. 68 and hits very hard with Moonblast.', 'A Poison or Steel type Pokémon helps a lot against Diantha.'] },
      { title: 'Post-Game: Looker Missions', description: 'Return to Lumiose City for the Looker detective side-quest. Also hunt for Zygarde and Mewtwo!', pokemon: ['Mewtwo (in Unknown Dungeon)', 'Zygarde (in Terminus Cave)'] },
    ],
  },
];

// ============================================================
// ALOLA (Gen 7) — Sun / Moon
// ============================================================
const alolaChapters: WalkthroughChapter[] = [
  {
    title: 'Melemele Island — Aloha!',
    summary: 'Welcome to the tropical Alola region! Move from Kanto to Melemele Island and begin your island challenge.',
    steps: [
      { title: 'Arrive in Alola', description: 'You\'ve just moved from Kanto! Meet Professor Kukui and head to Iki Town for the festival.', tips: ['Alola replaces gyms with Island Trials — a fresh twist!'] },
      { title: 'Choose Your Starter', description: 'Pick your partner from Rowlet, Litten, or Popplio at the festival!', pokemon: ['Rowlet', 'Litten', 'Popplio'], tips: ['Litten evolves into the powerful Incineroar.', 'Popplio becomes the beautiful Primarina.'] },
      { title: 'Route 1 & Trainer\'s School', description: 'Learn the basics and catch your first Alolan Pokémon!', pokemon: ['Pikipek', 'Yungoos', 'Grubbin', 'Caterpie'], tips: ['Grubbin evolves into Vikavolt — a great Electric/Bug type.'] },
      { title: 'Hau\'oli City', description: 'Explore the big city, get your Rotom Dex, and shop for supplies.', items: ['Rotom Dex'] },
    ],
  },
  {
    title: 'Melemele Trials',
    summary: 'Complete your first trial in Verdant Cavern and face Kahuna Hala in a grand trial!',
    steps: [
      { title: 'Route 2 & Berry Fields', description: 'Explore Route 2 and the berry farm.', pokemon: ['Makuhita', 'Drowzee', 'Smeargle'] },
      { title: 'Trial: Verdant Cavern (Ilima)', description: 'Your first trial! Navigate the cavern and face the Totem Gumshoos (Sun) or Alolan Raticate (Moon).', tips: ['The Totem Pokémon has boosted stats — Fighting types help against Gumshoos.'], items: ['Normalium Z'] },
      { title: 'Route 3 & Melemele Meadow', description: 'Find Nebby (Cosmog) in Melemele Meadow. Explore the area for new catches.', pokemon: ['Oricorio (Pom-Pom)', 'Cutiefly', 'Spearow'] },
      { title: 'Grand Trial: Kahuna Hala', description: 'Face Hala in the first Grand Trial! He uses Fighting-type Pokémon.', tips: ['Flying and Psychic types are super effective.', 'His Crabrawler is Lv. 15.'], items: ['Fightinium Z'] },
    ],
  },
  {
    title: 'Akala Island — Fire & Water',
    summary: 'Sail to Akala Island and face two trials plus Kahuna Olivia!',
    steps: [
      { title: 'Heahea City & Route 4', description: 'Arrive on Akala and explore. Meet Mallow, Lana, and Kiawe.', pokemon: ['Eevee', 'Mudbray', 'Lillipup'] },
      { title: 'Trial: Brooklet Hill (Lana)', description: 'Navigate the water trial and face Totem Wishiwashi! It uses School Form to become massive.', tips: ['Electric and Grass types are essential. Wishiwashi in School Form has huge stats!'], items: ['Waterium Z'], pokemon: ['Wishiwashi', 'Dewpider'] },
      { title: 'Trial: Wela Volcano Park (Kiawe)', description: 'Watch dance performances and face Totem Marowak (Alolan)! It\'s Fire/Ghost type.', tips: ['Water and Ground moves are super effective. Dark types resist Ghost.'], items: ['Firium Z'] },
      { title: 'Route 7 & Royal Avenue', description: 'Visit the Battle Royal Dome and shop at the mall.', pokemon: ['Stufful (rare!)'], tips: ['Stufful evolves into the incredibly strong Bewear!'] },
      { title: 'Trial: Lush Jungle (Mallow)', description: 'Find ingredients in the jungle and face Totem Lurantis! It\'s surprisingly tough.', tips: ['Lurantis has Solar Blade and summons sun. Fire types do well here.'], items: ['Grassium Z'] },
      { title: 'Grand Trial: Kahuna Olivia', description: 'Face Olivia who uses Rock-type Pokémon. Water, Grass, and Fighting moves dominate.', tips: ['Her Lycanroc is Lv. 28.'], items: ['Rockium Z'] },
    ],
  },
  {
    title: 'Ula\'ula Island — Darkness Falls',
    summary: 'Travel to Ula\'ula Island for more trials, a visit to Po Town, and the third Grand Trial!',
    steps: [
      { title: 'Malie City', description: 'Explore the Johto-inspired Malie City and garden.', pokemon: ['Grimer (Alolan)'] },
      { title: 'Route 10 & Mount Hokulani', description: 'Take the bus up Mount Hokulani for the Electric trial.', pokemon: ['Skarmory', 'Beldum'] },
      { title: 'Trial: Hokulani Observatory (Sophocles)', description: 'Answer quiz questions and face Totem Vikavolt! It\'s powerful with Electric/Bug coverage.', tips: ['Ground types are safe. Fire types handle the Bug side.'], items: ['Electrium Z'] },
      { title: 'Route 11-13 & Tapu Village', description: 'Explore the desert and ruins on the way to the Ghost trial.', pokemon: ['Sandygast', 'Vulpix (Alolan - Sun)', 'Sandshrew (Alolan - Moon)'] },
      { title: 'Trial: Abandoned Thrifty Megamart (Acerola)', description: 'Navigate the creepy abandoned store and face Totem Mimikyu!', tips: ['Mimikyu\'s Disguise blocks the first hit. Use a weak move to break it, then strike hard.'], items: ['Ghostium Z'] },
      { title: 'Po Town — Team Skull HQ', description: 'Infiltrate Team Skull\'s rain-soaked headquarters to rescue a stolen Pokémon!', tips: ['Bring Potions and status heals — lots of grunt battles!'] },
      { title: 'Grand Trial: Kahuna Nanu', description: 'Face Nanu who uses Dark-type Pokémon. Fighting, Bug, and Fairy moves are effective.', tips: ['His Alolan Persian is Lv. 38.'], items: ['Darkinium Z'] },
    ],
  },
  {
    title: 'Aether Paradise — Truth Revealed',
    summary: 'Visit the Aether Foundation and discover the truth about Lusamine\'s obsession with Ultra Beasts!',
    steps: [
      { title: 'Aether Paradise Visit', description: 'Tour the Aether Foundation\'s artificial island. Things seem off...', tips: ['Pay attention to the story — things aren\'t what they seem!'] },
      { title: 'Lusamine\'s Reveal', description: 'Lusamine reveals her true plan — to open Ultra Wormholes and connect to Ultra Space!', tips: ['This is a big story moment with dramatic battles.'] },
      { title: 'Battle Lusamine', description: 'Face Lusamine in the depths of Aether Paradise. Her team is strong and diverse.', tips: ['Her Clefable and Bewear are particularly tough. Level 40+.'] },
      { title: 'Escape & Regroup', description: 'Gladion helps you escape. Prepare for the journey to Poni Island.', tips: ['Heal up and restock — the adventure intensifies from here.'] },
    ],
  },
  {
    title: 'Poni Island — Final Trials',
    summary: 'Travel to the wild Poni Island, complete the Dragon trial, and prepare for the ultimate confrontation!',
    steps: [
      { title: 'Seafolk Village', description: 'Arrive at the nomadic Seafolk Village. Meet Hapu, the Kahuna.', pokemon: ['Wailmer', 'Dhelmise (fishing)'] },
      { title: 'Exeggutor Island', description: 'Visit the island to get a special flute needed for the legendary Pokémon.', pokemon: ['Exeggutor (Alolan)'] },
      { title: 'Vast Poni Canyon', description: 'Navigate the treacherous canyon — the site of the final trial.', pokemon: ['Jangmo-o', 'Carbink'], tips: ['Jangmo-o evolves into the powerful Kommo-o! Catch one!'] },
      { title: 'Trial: Vast Poni Canyon (Dragon)', description: 'Face Totem Kommo-o! It\'s Dragon/Fighting with boosted stats.', tips: ['Fairy types are 4x effective! Also Ice and Flying work.'], items: ['Dragonium Z'] },
      { title: 'Grand Trial: Kahuna Hapu', description: 'Face Hapu who uses Ground-type Pokémon. Water, Grass, and Ice are effective.', items: ['Groundium Z'] },
    ],
  },
  {
    title: 'Altar & Ultra Space',
    summary: 'Reach the Altar of the Sunne/Moone and enter Ultra Space to face Lusamine and the legendary Pokémon!',
    steps: [
      { title: 'Play the Flutes at the Altar', description: 'Use the Sun and Moon flutes to open the way. The legendary appears!', pokemon: ['Solgaleo (Sun)', 'Lunala (Moon)'], tips: ['Save before this encounter! The legendary joins your team to help.'] },
      { title: 'Enter Ultra Space', description: 'Ride the legendary into Ultra Space to confront Lusamine.', tips: ['This is a visually stunning sequence!'] },
      { title: 'Lusamine Final Battle', description: 'Face Lusamine who has fused with a Nihilego Ultra Beast! Her Pokémon are boosted.', tips: ['Her team is around Lv. 50. Status moves help.', 'Poison types resist Fairy, which is useful here.'] },
      { title: 'Return Home', description: 'After defeating Lusamine, return to Alola with Lillie and Nebby.', tips: ['The story isn\'t over yet — the Pokémon League awaits!'] },
    ],
  },
  {
    title: 'Pokémon League & Beyond',
    summary: 'Mount Lanakila hosts the first-ever Alola Pokémon League! Become the first Champion!',
    steps: [
      { title: 'Mount Lanakila', description: 'Climb the snowy mountain to reach the newly built Pokémon League.', pokemon: ['Absol', 'Sneasel', 'Vanilluxe'], tips: ['Level your team to 55+ before the Elite Four.'] },
      { title: 'Elite Four', description: 'Face Hala (Fighting), Olivia (Rock), Acerola (Ghost), and Kahili (Flying).', tips: ['A balanced team with good type coverage will serve you well.'] },
      { title: 'Champion Battle: Kukui', description: 'Professor Kukui challenges you to become the first Alolan Champion! He uses a balanced team.', tips: ['Kukui\'s ace depends on your starter — he always has the type advantage!', 'His team is around Lv. 58.'] },
      { title: 'Post-Game: Ultra Beasts', description: 'Looker and Anabel task you with catching Ultra Beasts across Alola!', pokemon: ['Nihilego', 'Buzzwole/Pheromosa', 'Xurkitree', 'Kartana/Celesteela', 'Guzzlord'], tips: ['Beast Balls work best on Ultra Beasts.', 'The Tapus can also be caught at their ruins.'] },
    ],
  },
];

// ============================================================
// ALOLA (Gen 7) — Ultra Sun / Ultra Moon (variations)
// ============================================================
const alolaUSUMChapters: WalkthroughChapter[] = [
  ...alolaChapters.slice(0, 5),
  {
    title: 'Aether Paradise & Ultra Recon Squad',
    summary: 'Discover the truth about the Aether Foundation and meet the Ultra Recon Squad from another dimension!',
    steps: [
      { title: 'Meet the Ultra Recon Squad', description: 'Encounter Dulse/Zossie (US) or Phyco/Soliera (UM) — visitors from Ultra Megalopolis.', tips: ['The Ultra Recon Squad is unique to USUM and adds a new dimension to the story.'] },
      { title: 'Aether Paradise Invasion', description: 'Navigate the Aether Foundation as Team Skull and Aether collide.', tips: ['Similar to SM but with new dialogue and encounters.'] },
      { title: 'Battle Lusamine', description: 'Face Lusamine — but this time the story diverges from Sun/Moon!', tips: ['She is not the final villain in USUM — the threat goes deeper.'] },
      { title: 'Ultra Wormholes Open', description: 'Necrozma emerges and absorbs the legendary Pokémon!', tips: ['This sets up the climax unique to USUM.'] },
    ],
  },
  {
    title: 'Poni Island & Ultra Megalopolis',
    summary: 'Complete Poni Island and travel to Ultra Megalopolis to face Necrozma!',
    steps: [
      { title: 'Poni Trials & Grand Trial', description: 'Complete the Dragon trial and Grand Trial with Hapu.', items: ['Dragonium Z', 'Groundium Z'] },
      { title: 'Ultra Wormhole Ride', description: 'Ride Solgaleo/Lunala through Ultra Wormholes! Find Ultra Beasts and legendaries from past games.', pokemon: ['Mewtwo', 'Lugia/Ho-Oh', 'Rayquaza', 'Giratina', 'many more'], tips: ['The further you travel, the rarer the wormholes. Legendary Pokémon await in special ones!'] },
      { title: 'Ultra Megalopolis — Necrozma', description: 'Travel to Ultra Megalopolis and face Ultra Necrozma! This is one of the hardest battles in Pokémon history.', tips: ['Ultra Necrozma is Lv. 60 with a massive stat boost. Bring a Pokémon with Toxic or focus on Fairy/Dark types.', 'Zoroark\'s Illusion can cheese this fight — disguise it as a Psychic type!'], pokemon: ['Necrozma'] },
      { title: 'Catch Necrozma', description: 'After the story, Necrozma can be caught at Mount Lanakila.', tips: ['Necrozma has a low catch rate — come prepared with Timer and Dusk Balls.'] },
    ],
  },
  {
    title: 'Pokémon League & Post-Game',
    summary: 'Conquer the Pokémon League and explore USUM\'s expanded post-game with Team Rainbow Rocket!',
    steps: [
      { title: 'Mount Lanakila & Elite Four', description: 'Same Elite Four as SM but with slightly adjusted teams.', tips: ['Level 55+ recommended.'] },
      { title: 'Champion Battle: Kukui', description: 'Face Professor Kukui to become Champion!', tips: ['Same structure as SM — his ace counters your starter.'] },
      { title: 'Episode RR: Team Rainbow Rocket!', description: 'Giovanni returns with a team of ALL past villains! Archie, Maxie, Cyrus, Ghetsis, Lysandre — all with their legendary Pokémon!', tips: ['Each villain boss has their signature legendary. Your team should be Lv. 65+.', 'This is the ultimate villain gauntlet in Pokémon!'] },
      { title: 'Battle Agency & Ultra Beasts', description: 'Enjoy the Battle Agency, catch remaining Ultra Beasts, and complete the Alola Dex!', pokemon: ['Poipole/Naganadel', 'Stakataka/Blacephalon'] },
    ],
  },
];

// ============================================================
// GALAR (Gen 8) — Sword / Shield
// ============================================================
const galarChapters: WalkthroughChapter[] = [
  {
    title: 'Postwick — The Champion\'s Endorsement',
    summary: 'Begin your journey in the quiet Postwick village with your friend Hop — the Champion\'s little brother!',
    steps: [
      { title: 'Meet the Champion', description: 'Watch Leon, the undefeated Champion, arrive home. He gives you and Hop your starter Pokémon!', pokemon: ['Grookey', 'Scorbunny', 'Sobble'], tips: ['Scorbunny evolves into the powerful Cinderace.', 'Sobble becomes the sneaky Inteleon.'] },
      { title: 'Slumbering Weald', description: 'Chase a Wooloo into the mysterious forest and encounter a strange fog...', tips: ['You\'ll meet a legendary Pokémon here — but can\'t catch it yet!'] },
      { title: 'Get Endorsed', description: 'Leon endorses you for the Gym Challenge! Head to the train station.', items: ['Pokédex', 'Endorsement'] },
      { title: 'Wild Area — First Visit', description: 'Step into the vast Wild Area for the first time! Pokémon roam freely at all levels.', tips: ['Don\'t fight the high-level Pokémon yet — they can one-shot you!', 'Raid Dens can give you great early Pokémon!'], pokemon: ['Stufful', 'Machop', 'Onix', 'and many more'] },
    ],
  },
  {
    title: 'Turffield — The Grass Gym',
    summary: 'Travel through the Wild Area to Motostoke, then reach Turffield for the first gym!',
    steps: [
      { title: 'Motostoke & Opening Ceremony', description: 'Arrive in the steampunk city and attend the Gym Challenge Opening Ceremony. Meet your rivals!', tips: ['Meet Bede and Marnie — they\'ll be recurring rivals.'] },
      { title: 'Route 3 & Galar Mine', description: 'Head through the mine to reach Turffield.', pokemon: ['Rolycoly', 'Roggenrola', 'Timburr'], tips: ['Rolycoly evolves into the powerful Coalossal.'] },
      { title: 'Turffield Geoglyph', description: 'Explore the town and learn about the ancient Dynamax legend.', tips: ['Check behind the hill for the hidden geoglyph and lore!'] },
      { title: 'Gym Battle: Milo', description: 'Milo uses Grass-type Pokémon and Dynamaxes his Eldegoss! Fire and Flying work great.', tips: ['This is your first Dynamax gym battle! Save your own Dynamax for his Eldegoss.', 'His ace Eldegoss is Lv. 20.'], items: ['Grass Badge', 'TM10 Magical Leaf'] },
    ],
  },
  {
    title: 'Hulbury — Water & Rivalry',
    summary: 'Continue to Hulbury for the Water gym and deal with Team Yell interference!',
    steps: [
      { title: 'Route 5', description: 'Battle trainers and cross the bridge. Meet Team Yell for the first time!', pokemon: ['Applin', 'Farfetch\'d (Galarian)', 'Swirlix/Spritzee'], tips: ['Applin is version-exclusive in evolution — Flapple (Sword) or Appletun (Shield).'] },
      { title: 'Hulbury Exploration', description: 'Visit the market and lighthouse. Explore the seaside town.', items: ['Incense from market'] },
      { title: 'Gym Battle: Nessa', description: 'Nessa uses Water-type Pokémon and Dynamaxes Drednaw! Electric and Grass are key.', tips: ['Drednaw is Water/Rock — Grass is 4x effective!', 'Her ace is Lv. 24.'], items: ['Water Badge', 'TM36 Whirlpool'] },
      { title: 'Battle with Bede', description: 'Your rival Bede challenges you. He uses Psychic-type Pokémon.', tips: ['Dark and Ghost types counter Bede\'s team.'] },
    ],
  },
  {
    title: 'Motostoke & Stow-on-Side',
    summary: 'Return to Motostoke for the Fire gym, then head to Stow-on-Side for the Fighting/Ghost gym!',
    steps: [
      { title: 'Gym Battle: Kabu', description: 'Kabu uses Fire-type Pokémon and is known as the first major wall. He Dynamaxes Centiskorch!', tips: ['Water, Rock, and Ground types are effective.', 'His Centiskorch is Lv. 27 — this gym is a step up in difficulty!'], items: ['Fire Badge', 'TM38 Will-O-Wisp'] },
      { title: 'Galar Mine No. 2', description: 'Navigate the second mine. Battle Bede again.', pokemon: ['Wimpod', 'Binacle', 'Noibat'] },
      { title: 'Route 6 & Stow-on-Side', description: 'Travel the desert route and reach the ancient town.', pokemon: ['Silicobra', 'Hippopotas', 'Torkoal'] },
      { title: 'Gym Battle: Bea (Sword) / Allister (Shield)', description: 'Bea uses Fighting types (Sword) while Allister uses Ghost types (Shield). Both Dynamax their aces!', tips: ['For Bea: Flying, Psychic, Fairy. For Allister: Dark, Ghost.', 'Their aces are Lv. 36.'], items: ['Fighting/Ghost Badge'] },
    ],
  },
  {
    title: 'Ballonlea & Circhester',
    summary: 'Journey through the Glimwood Tangle to Ballonlea\'s Fairy gym, then on to Circhester!',
    steps: [
      { title: 'Glimwood Tangle', description: 'Navigate the eerie, bioluminescent forest. Unique Pokémon appear when mushrooms glow!', pokemon: ['Ponyta (Galarian)', 'Hatenna', 'Impidimp', 'Morgrem'], tips: ['Galarian Ponyta is Shield-exclusive. Impidimp is great for the upcoming Fairy gym!'] },
      { title: 'Gym Battle: Opal', description: 'Opal uses Fairy-type Pokémon and asks quiz questions during battle! Wrong answers lower your stats.', tips: ['Poison and Steel types are super effective.', 'Her Alcremie Gigantamaxes!', 'Answer her questions correctly for stat boosts.'], items: ['Fairy Badge', 'TM87 Draining Kiss'] },
      { title: 'Route 7-8 & Circhester', description: 'Travel through snowy routes to the icy Circhester.', pokemon: ['Mr. Mime (Galarian)', 'Snom', 'Eiscue (Shield)/Stonjourner (Sword)'], tips: ['Snom evolves into the beautiful Frosmoth with high friendship at night!'] },
      { title: 'Gym Battle: Gordie (Sword) / Melony (Shield)', description: 'Gordie uses Rock (Sword), Melony uses Ice (Shield). Both Dynamax their aces!', tips: ['For Gordie: Water, Grass, Fighting. For Melony: Fire, Fighting, Steel.'], items: ['Rock/Ice Badge'] },
    ],
  },
  {
    title: 'Spikemuth & Hammerlocke',
    summary: 'Visit Team Yell\'s hometown for the Dark gym, then return to Hammerlocke for the Dragon gym!',
    steps: [
      { title: 'Route 9 & Spikemuth', description: 'Travel through icy Route 9. Spikemuth is a run-down town — no Dynamaxing allowed here!', pokemon: ['Cramorant', 'Mantyke'] },
      { title: 'Gym Battle: Piers', description: 'Piers uses Dark-type Pokémon. No Dynamax in this gym — just pure skill!', tips: ['Fighting, Bug, and Fairy types are effective.', 'His Obstagoon is Lv. 44.'], items: ['Dark Badge', 'TM85 Snarl'] },
      { title: 'Return to Hammerlocke', description: 'Prepare for the final gym in the castle city of Hammerlocke.', tips: ['This is the last gym — make sure your team is ready!'] },
      { title: 'Gym Battle: Raihan', description: 'Raihan uses Dragon-type Pokémon with weather strategies! He sets up Sandstorm.', tips: ['His team isn\'t pure Dragon — Sandaconda and Flygon mix things up.', 'Ice and Fairy types are your best bet. His Duraludon Gigantamaxes!'], items: ['Dragon Badge', 'TM99 Breaking Swipe'] },
    ],
  },
  {
    title: 'The Darkest Day',
    summary: 'Chairman Rose triggers the Darkest Day! Stop the rampaging Eternatus and save Galar!',
    steps: [
      { title: 'Rose Tower', description: 'Storm Rose Tower with Hop to confront Chairman Rose. Battle through Macro Cosmos employees.', tips: ['This is a gauntlet of battles — heal up!'] },
      { title: 'Champion Cup Semi-Finals', description: 'Battle Marnie and Hop in the Champion Cup tournament at Wyndon Stadium!', tips: ['Both have strong teams around Lv. 47-49.'] },
      { title: 'The Darkest Day Begins', description: 'Rose triggers the Darkest Day! Dynamax Pokémon run rampant across Galar.', tips: ['The story accelerates from here — dramatic climax!'] },
      { title: 'Catch Eternatus!', description: 'Face Eternatus at the top of Hammerlocke Stadium. Zacian and Zamazenta help you in a special Max Raid!', pokemon: ['Eternatus'], tips: ['Eternatus has a 100% catch rate — you can\'t miss!', 'After catching it, the Champion battle begins.'] },
    ],
  },
  {
    title: 'Champion Battle & Post-Game',
    summary: 'Face the undefeated Champion Leon and explore the post-game story!',
    steps: [
      { title: 'Champion Battle: Leon', description: 'Face the undefeated Champion Leon! His team is diverse and powerful, and he Gigantamaxes his Charizard.', tips: ['His Charizard is Lv. 65 — bring Rock types!', 'Leon has great team coverage — no single type handles everything.', 'Level 60+ recommended.'] },
      { title: 'Post-Game: Sordward & Shielbert', description: 'Two eccentric brothers cause Dynamax rampages across Galar. Stop them and calm the Dynamaxed Pokémon.', tips: ['You\'ll revisit gyms and face Dynamaxed legendary Pokémon.'] },
      { title: 'Catch Zacian (Sword) / Zamazenta (Shield)', description: 'Return to the Slumbering Weald to catch your version\'s legendary!', pokemon: ['Zacian (Sword)', 'Zamazenta (Shield)'], tips: ['Save before the encounter! They have low catch rates.'] },
      { title: 'Battle Tower & DLC', description: 'Challenge the Battle Tower, explore the Wild Area fully, and dive into the Isle of Armor and Crown Tundra DLC!', tips: ['The Crown Tundra DLC has almost every legendary from past games!'] },
    ],
  },
];

// ============================================================
// HISUI (Gen 8) — Legends: Arceus
// ============================================================
const hisuiChapters: WalkthroughChapter[] = [
  {
    title: 'Arrival in Hisui',
    summary: 'Fall through a space-time rift into ancient Sinnoh — now called Hisui. Join the Galaxy Expedition Team!',
    steps: [
      { title: 'Meet Arceus & Awaken', description: 'A mysterious voice sends you through a rift. You awaken on a beach with Professor Laventon.', tips: ['This game plays very differently from traditional Pokémon — open-world action RPG!'] },
      { title: 'Choose Your Starter', description: 'Pick from Rowlet, Cyndaquil, or Oshawott — Pokémon Laventon brought from other regions.', pokemon: ['Rowlet', 'Cyndaquil', 'Oshawott'], tips: ['Cyndaquil\'s Hisuian Typhlosion (Fire/Ghost) is very unique.', 'Oshawott\'s Hisuian Samurott (Water/Dark) is excellent.'] },
      { title: 'Join the Galaxy Team', description: 'Prove yourself by catching Pokémon and join the Survey Corps in Jubilife Village.', items: ['Crafting Kit'] },
      { title: 'Learn the Basics', description: 'Complete your first survey missions. Learn to craft Poké Balls, use stealth, and dodge attacks!', tips: ['You can get hurt by wild Pokémon! Dodge roll to avoid attacks.', 'Back strikes (throwing balls from behind) give higher catch rates.'] },
    ],
  },
  {
    title: 'Obsidian Fieldlands — Kleavor',
    summary: 'Explore the first area and quell the frenzied Noble Pokémon, Kleavor!',
    steps: [
      { title: 'Explore the Fieldlands', description: 'Catch Pokémon, complete research tasks, and fill your Pokédex. Talk to villagers for side quests.', pokemon: ['Shinx', 'Starly', 'Bidoof', 'Ponyta', 'Eevee', 'Abra'], tips: ['Complete Pokédex entries by using moves, catching, evolving — not just catching one!', 'Alpha Pokémon are big, strong, and have special moves. Come back when stronger!'] },
      { title: 'Reach Star Rank 1', description: 'Complete enough research to reach Star Rank 1. Report to Captain Cyllene.', tips: ['Higher Star Ranks let you control higher-level Pokémon.'] },
      { title: 'Boss Fight: Kleavor', description: 'Quell the frenzied Noble Kleavor by throwing balms and battling it when stunned!', tips: ['Dodge its attacks, throw balms when it\'s recovering.', 'You can battle it to stun it faster — use Water or Rock types.'] },
      { title: 'Space-Time Distortions', description: 'Space-Time Distortions start appearing! These rifts contain rare Pokémon and valuable items.', pokemon: ['Magnemite', 'Porygon', 'Gengar (in distortions)'], tips: ['Wait inside distortions — rare Pokémon and evolution items spawn!'] },
    ],
  },
  {
    title: 'Crimson Mirelands — Lilligant',
    summary: 'Journey to the swampy Crimson Mirelands and face the Noble Hisuian Lilligant!',
    steps: [
      { title: 'Explore the Mirelands', description: 'Navigate the swamps and highlands. Find new Pokémon and complete requests.', pokemon: ['Hippopotas', 'Croagunk', 'Tangela', 'Pachirisu', 'Ursaring'] },
      { title: 'Ursaluna Ride Pokémon', description: 'Unlock Ursaluna as a ride Pokémon! It can sniff out buried treasures and items.', tips: ['Use Ursaluna constantly — it finds rare items buried underground!'] },
      { title: 'Boss Fight: Hisuian Lilligant', description: 'Face the frenzied Noble Lilligant! It uses graceful martial arts attacks.', tips: ['Dodge its spinning kicks and throw balms. Fire and Ice types help in battle.'] },
      { title: 'Diamond & Pearl Clan Tensions', description: 'Learn about the conflict between the Diamond and Pearl Clans. Who is Almighty Sinnoh?', tips: ['The clan conflict is central to the story — it mirrors Dialga and Palkia.'] },
    ],
  },
  {
    title: 'Cobalt Coastlands — Arcanine',
    summary: 'Explore the coastal region and challenge the Noble Hisuian Arcanine!',
    steps: [
      { title: 'Explore the Coastlands', description: 'Swim, fish, and explore beaches and ocean caves.', pokemon: ['Tentacool', 'Mantyke', 'Duskull', 'Chatot', 'Gastrodon'] },
      { title: 'Basculegion Ride', description: 'Unlock Basculegion to ride across water!', tips: ['Now you can explore oceans and reach new islands.'] },
      { title: 'Boss Fight: Hisuian Arcanine', description: 'Face the majestic frenzied Arcanine on the cliffside arena!', tips: ['It uses rock-slide attacks. Dodge to the side, then throw balms.', 'Water and Ground types are effective in battle.'] },
      { title: 'Volo & Ginkgo Guild', description: 'Meet Volo from the Ginkgo Guild — a traveling merchant with a keen interest in ancient legends.', tips: ['Pay attention to Volo... he\'s more important than he seems.'] },
    ],
  },
  {
    title: 'Coronet Highlands — Electrode',
    summary: 'Climb to the highlands around Mount Coronet and quell the Noble Hisuian Electrode!',
    steps: [
      { title: 'Explore the Highlands', description: 'Mountainous terrain with rare Pokémon. Alpha Pokémon are common here.', pokemon: ['Clefairy', 'Bronzor', 'Gligar', 'Misdreavus', 'Sneasel (Hisuian)'] },
      { title: 'Sneasler Ride', description: 'Unlock Sneasler to climb cliff faces!', tips: ['Now you can reach elevated areas and hidden caves.'] },
      { title: 'Ancient Retreat', description: 'Discover the ruins and learn more about the ancient hero\'s legend.', tips: ['The plates you\'re collecting are very important to the endgame.'] },
      { title: 'Boss Fight: Hisuian Electrode', description: 'Face the explosive Noble Electrode in an electric arena!', tips: ['Ground types are immune to Electric attacks. Dodge the electrical explosions!'] },
    ],
  },
  {
    title: 'Alabaster Icelands — Avalugg',
    summary: 'Brave the frozen north and face the final Noble Pokémon — the massive Hisuian Avalugg!',
    steps: [
      { title: 'Explore the Icelands', description: 'Navigate blizzards, icy lakes, and snowfields.', pokemon: ['Swinub', 'Snover', 'Froslass', 'Zorua (Hisuian)', 'Bergmite'], tips: ['Hisuian Zorua (Normal/Ghost) is found here — a fan favorite!'] },
      { title: 'Braviary Ride', description: 'Unlock Hisuian Braviary to fly! Soar across all regions.', tips: ['Flying opens up so much exploration. Revisit old areas from the sky!'] },
      { title: 'Boss Fight: Hisuian Avalugg', description: 'Face the enormous ice monster. Its attacks cover wide areas!', tips: ['Fire, Fighting, and Steel types are effective.', 'This is the toughest Noble fight — be patient with dodging.'] },
      { title: 'The Truth Revealed', description: 'Learn the full truth about the space-time rift and what must be done to close it.', tips: ['Prepare your best team — the climax is coming!'] },
    ],
  },
  {
    title: 'Temple of Sinnoh — Dialga & Palkia',
    summary: 'Ascend to the Temple of Sinnoh for the climactic battle against the frenzied Dialga or Palkia!',
    steps: [
      { title: 'Banished from Jubilife', description: 'After being falsely accused, you must prove your innocence by quelling all the Nobles again.', tips: ['This section requires revisiting areas — it goes fast.'] },
      { title: 'Gather the Plates', description: 'Collect the remaining plates needed to challenge the legendary Pokémon.', items: ['Various Type Plates'] },
      { title: 'Temple of Sinnoh', description: 'Ascend to the peak and face the frenzied Origin Dialga (or Origin Palkia).', pokemon: ['Dialga (Origin Forme)', 'Palkia (Origin Forme)'], tips: ['This is a multi-phase boss fight with both action dodging and Pokémon battles!'] },
      { title: 'Credits & Post-Game Begins', description: 'The rift is sealed! But there\'s much more to do...', tips: ['The true endgame involves catching BOTH Dialga and Palkia, plus a secret final boss.'] },
    ],
  },
  {
    title: 'Post-Game — Arceus Awaits',
    summary: 'Complete the Pokédex, catch all legendaries, and face the ultimate challenge: Arceus!',
    steps: [
      { title: 'Catch Remaining Legendaries', description: 'Track down the Lake Trio, Forces of Nature, Regis, and other legendaries across Hisui.', pokemon: ['Uxie', 'Mesprit', 'Azelf', 'Heatran', 'Regigigas', 'Cresselia', 'Tornadus', 'Thundurus', 'Landorus', 'Enamorus'] },
      { title: 'Complete the Pokédex', description: 'Reach Research Level 10 for every Pokémon in the Hisui Dex. This is required to face Arceus!', tips: ['You need to complete tasks, not just catch — use moves, evolve, etc.'] },
      { title: 'Secret Boss: Volo', description: 'Face Volo at the Temple of Sinnoh. He reveals his true plan and battles you with an incredibly powerful team — followed by Giratina!', tips: ['This is arguably the hardest trainer battle in Pokémon history.', 'You fight Volo\'s full team, then Origin Giratina, with NO healing between!'], pokemon: ['Giratina (Origin Forme)'] },
      { title: 'Meet Arceus', description: 'With all plates and a complete Pokédex, face the creator of all Pokémon at the peak!', pokemon: ['Arceus'], tips: ['This is the ultimate culmination of the game. Arceus is a special boss/catch.'] },
    ],
  },
];

// ============================================================
// PALDEA (Gen 9) — Scarlet / Violet
// ============================================================
const paldeaChapters: WalkthroughChapter[] = [
  {
    title: 'Cabo Poco — Welcome to Paldea!',
    summary: 'Arrive at Naranja/Uva Academy, meet your legendary ride Pokémon, and start your open-world Treasure Hunt!',
    steps: [
      { title: 'Choose Your Starter', description: 'Meet Director Clavell and pick your partner: Sprigatito, Fuecoco, or Quaxly!', pokemon: ['Sprigatito', 'Fuecoco', 'Quaxly'], tips: ['Fuecoco evolves into the awesome Skeledirge with a great signature move.', 'Sprigatito becomes the speedy Meowscarada.'] },
      { title: 'Meet Koraidon/Miraidon', description: 'Find the weakened legendary Pokémon on the beach! It becomes your ride Pokémon.', pokemon: ['Koraidon (Scarlet)', 'Miraidon (Violet)'], tips: ['Your legendary can\'t battle yet — it serves as your mount first.'] },
      { title: 'Arrive at the Academy', description: 'Enroll at Naranja (Scarlet) or Uva (Violet) Academy. Meet your classmates and teachers.', tips: ['Talk to teachers and students for lore and side content!'] },
      { title: 'The Treasure Hunt Begins', description: 'Three story paths open up: Victory Road (gyms), Path of Legends (Titans), and Starfall Street (Team Star). You can do them in any order!', tips: ['This is a true open-world game — go wherever you want!', 'Recommended to alternate between paths for balanced leveling.'] },
    ],
  },
  {
    title: 'Victory Road — First Gyms',
    summary: 'Challenge the first few gyms across Paldea. Each has a Gym Test before the battle!',
    steps: [
      { title: 'Cortondo Gym: Katy (Bug)', description: 'Complete the olive-rolling Gym Test, then face Katy\'s Bug-type team.', tips: ['Fire, Flying, Rock moves are effective. She Terastallizes her Teddiursa to Bug type!', 'Recommended level: 14-15.'], items: ['Bug Badge', 'TM021 Pounce'] },
      { title: 'Artazon Gym: Brassius (Grass)', description: 'Find the Sunflora around town for the Gym Test, then battle Brassius.', tips: ['Fire, Ice, Poison work well. His Sudowoodo Terastallizes to Grass — use Grass counters!', 'Recommended level: 16-17.'], items: ['Grass Badge', 'TM020 Trailblaze'] },
      { title: 'Levincia Gym: Iono (Electric)', description: 'Complete the livestream "Where\'s Mr. Walksabout?" Gym Test.', tips: ['Ground types are immune to Electric! Her Bellibolt Terastallizes.', 'Recommended level: 23-24.'], items: ['Electric Badge', 'TM048 Volt Switch'] },
      { title: 'Cascarrafa Gym: Kofu (Water)', description: 'Buy ingredients at Porto Marinada\'s auction for the Gym Test.', tips: ['Grass and Electric types dominate. His Crabominable Terastallizes to Water.', 'Recommended level: 29-30.'], items: ['Water Badge', 'TM022 Chilling Water'] },
    ],
  },
  {
    title: 'Path of Legends — First Titans',
    summary: 'Hunt down massive Titan Pokémon with Arven to unlock new abilities for your ride legendary!',
    steps: [
      { title: 'Stony Cliff Titan: Klawf', description: 'Face the giant Rock-type Klawf on the cliffside! Battle it twice to defeat it.', tips: ['Water, Grass, Fighting moves work. Recommended level: 15-16.'], pokemon: ['Klawf'] },
      { title: 'Unlock Dash', description: 'After defeating Klawf, Koraidon/Miraidon can dash! Cook a sandwich with Arven.', tips: ['Each Titan unlocks a new ride ability — you need them all for full exploration.'] },
      { title: 'Open Sky Titan: Bombirdier', description: 'Battle the Flying/Dark Titan Bombirdier. Electric, Ice, Rock moves are effective.', tips: ['Recommended level: 19-20.'], pokemon: ['Bombirdier'] },
      { title: 'Unlock Swim', description: 'Your legendary can now cross water! Open up tons of new exploration.', tips: ['Go back and explore beaches and lakes you couldn\'t reach before!'] },
      { title: 'Lurking Steel Titan: Orthworm', description: 'Face the massive Steel-type Orthworm underground.', tips: ['Fire, Fighting, Ground are effective. Recommended level: 28-29.'], pokemon: ['Orthworm'] },
    ],
  },
  {
    title: 'Starfall Street — Team Star',
    summary: 'Take on Team Star\'s bases across Paldea with Penny\'s help!',
    steps: [
      { title: 'Segin Squad (Dark): Giacomo', description: 'Use the Let\'s Go auto-battle mechanic to defeat 30 Pokémon, then face squad boss Giacomo.', tips: ['Fighting, Bug, Fairy types counter Dark. Send out 3 Pokémon at once in Let\'s Go!', 'Recommended level: 20-21.'], items: ['TM062 Foul Play'] },
      { title: 'Schedar Squad (Fire): Mela', description: 'Clear the Fire-type base and face Mela in her Starmobile!', tips: ['Water, Ground, Rock types are effective. Recommended level: 26-27.', 'The Starmobile has high defense — use special attacks!'], items: ['TM038 Flame Charge'] },
      { title: 'Navi Squad (Poison): Atticus', description: 'Take on the Poison-type base.', tips: ['Ground and Psychic types dominate. Recommended level: 32-33.'], items: ['TM102 Gunk Shot'] },
      { title: 'Learn Team Star\'s History', description: 'Between bases, learn why Team Star was formed — it\'s actually a touching story!', tips: ['Pay attention to the backstory — Team Star\'s motivations are sympathetic.'] },
    ],
  },
  {
    title: 'Victory Road — Final Gyms',
    summary: 'Challenge the remaining gyms to earn all eight badges!',
    steps: [
      { title: 'Medali Gym: Larry (Normal)', description: 'Figure out the secret menu item for the Gym Test! Larry is hilariously unmotivated.', tips: ['Fighting types are super effective. His Staraptor Terastallizes to Normal.', 'Recommended level: 35-36.'], items: ['Normal Badge', 'TM025 Facade'] },
      { title: 'Montenevera Gym: Ryme (Ghost)', description: 'Win the rap battle Gym Test, then face Ryme\'s Ghost types in a double battle!', tips: ['Dark and Ghost types work well. It\'s a Double Battle format!', 'Recommended level: 41-42.'], items: ['Ghost Badge', 'TM114 Shadow Ball'] },
      { title: 'Alfornada Gym: Tulip (Psychic)', description: 'Complete the emotional expression Gym Test.', tips: ['Bug, Ghost, Dark types are effective. Recommended level: 44-45.'], items: ['Psychic Badge', 'TM120 Psychic'] },
      { title: 'Glaseado Gym: Grusha (Ice)', description: 'Complete the snow slope challenge, then face Grusha.', tips: ['Fire, Fighting, Rock, Steel work well. His Altaria Terastallizes to Ice.', 'Recommended level: 47-48.'], items: ['Ice Badge', 'TM124 Ice Spinner'] },
    ],
  },
  {
    title: 'Path of Legends & Team Star — Finale',
    summary: 'Face the remaining Titans and Team Star bosses to complete those storylines!',
    steps: [
      { title: 'Quaking Earth Titan: Great Tusk/Iron Treads', description: 'Face the version-exclusive Titan! Great Tusk (Scarlet) or Iron Treads (Violet).', tips: ['Recommended level: 44-45. These are Paradox Pokémon!'], pokemon: ['Great Tusk (Scarlet)', 'Iron Treads (Violet)'] },
      { title: 'False Dragon Titan: Dondozo & Tatsugiri', description: 'The final Titan is a two-phase fight! The massive Dondozo is being commanded by tiny Tatsugiri.', tips: ['Dragon, Fairy, and Electric work on Dondozo. Recommended level: 55+.'], pokemon: ['Dondozo', 'Tatsugiri'] },
      { title: 'Unlock All Ride Abilities', description: 'Your legendary now has Dash, Swim, Jump, Glide, and Climb!', tips: ['Explore EVERYWHERE — tons of hidden items and Pokémon are now accessible!'] },
      { title: 'Ruchbah Squad (Fairy): Ortega', description: 'Clear the Fairy base. Poison and Steel types help.', tips: ['Recommended level: 50-51.'] },
      { title: 'Caph Squad (Fighting): Eri', description: 'The final Team Star base! Flying, Psychic, Fairy are effective.', tips: ['Recommended level: 55-56. Eri is the toughest Star boss.'] },
      { title: 'Cassiopeia Revealed', description: 'Face the true leader behind Team Star — Penny! Battle her Eevee-lution team.', tips: ['She has every Eeveelution. Bring diverse type coverage!'] },
    ],
  },
  {
    title: 'Victory Road — The Pokémon League',
    summary: 'Challenge the Elite Four and Top Champion Geeta at the Pokémon League!',
    steps: [
      { title: 'Victory Road Assessment', description: 'Answer interview questions from Rika to prove you\'re ready for the Elite Four.', tips: ['Your team should be Lv. 57+ for the Elite Four.'] },
      { title: 'Elite Four: Rika & Poppy', description: 'Face Rika (Ground) and Poppy (Steel). Both Terastallize their aces!', tips: ['Water and Grass for Rika. Fire and Fighting for Poppy.'] },
      { title: 'Elite Four: Larry & Hassel', description: 'Larry returns with Flying types this time! Hassel uses Dragons.', tips: ['Electric and Ice for Larry. Ice and Fairy for Hassel.'] },
      { title: 'Top Champion: Geeta', description: 'Face Top Champion Geeta! Her team is diverse with a Glimmora ace.', tips: ['Geeta\'s team is around Lv. 61-62. She Terastallizes Glimmora to Rock.'] },
      { title: 'Champion Assessment: Nemona!', description: 'Your true rival battle! Nemona challenges you to a full 6v6 as the final test.', tips: ['Nemona is tougher than Geeta! Her team is around Lv. 65-66.', 'She has your starter\'s type disadvantage as her ace.'] },
    ],
  },
  {
    title: 'The Way Home — Area Zero',
    summary: 'All three storylines converge! Descend into the Great Crater of Paldea to discover the truth about your legendary Pokémon.',
    steps: [
      { title: 'Gather Your Friends', description: 'Arven, Penny, and Nemona join you for the descent into Area Zero — the forbidden Great Crater.', tips: ['This is the true final chapter. Bring your best team, fully healed and stocked!'] },
      { title: 'Descend Through Area Zero', description: 'Navigate the prehistoric (Scarlet) or futuristic (Violet) environment. Paradox Pokémon roam wild!', pokemon: ['Various Paradox Pokémon'], tips: ['Paradox Pokémon are very strong — catch them if you can!'] },
      { title: 'The Professor\'s Lab', description: 'Discover the truth about Professor Sada (Scarlet) / Turo (Violet) and the time machine.', tips: ['Major story revelations here. The professor is not what you expected...'] },
      { title: 'Final Battle: AI Professor', description: 'Face the AI version of the Professor! They use Paradox Pokémon and their own legendary.', tips: ['Your legendary Koraidon/Miraidon finally battles! This is an emotional climax.', 'The final fight has restrictions — you must use your legendary.'] },
      { title: 'Koraidon/Miraidon Fully Restored', description: 'Your legendary is now at full power and can be used in battle!', tips: ['Post-game opens up — explore, catch Paradox Pokémon, and complete your Dex!'] },
    ],
  },
  {
    title: 'Post-Game Adventures',
    summary: 'Explore the post-game content: rematches, Academy Ace Tournament, and catching rare Pokémon!',
    steps: [
      { title: 'Academy Ace Tournament', description: 'Battle teachers and classmates in the Academy\'s tournament — repeatable for rewards!', tips: ['Great for leveling up and earning money. Can be repeated!'] },
      { title: '5-Star & 6-Star Raids', description: 'Tackle high-level Tera Raid battles for rare Pokémon and rewards.', tips: ['6-star raids unlock after completing the post-game tournament. 7-star event raids are the hardest!'] },
      { title: 'Complete the Pokédex', description: 'Catch all 400 Paldea Pokémon. Trade version exclusives with friends!', tips: ['Some Pokémon only appear in specific weather, time of day, or areas.'] },
      { title: 'DLC: The Teal Mask & Indigo Disk', description: 'Travel to Kitakami and Blueberry Academy for two massive expansions with new Pokémon and stories!', pokemon: ['Ogerpon', 'Terapagos', 'Pecharunt'], tips: ['The DLC adds 200+ returning Pokémon and new storylines!'] },
    ],
  },
];

export const WALKTHROUGHS: GameWalkthrough[] = [
  { gameId: 'red', chapters: kantoGen1Chapters },
  { gameId: 'blue', chapters: kantoGen1Chapters },
  { gameId: 'yellow', chapters: kantoGen1Chapters },
  { gameId: 'firered', chapters: kantoFRLGChapters },
  { gameId: 'leafgreen', chapters: kantoFRLGChapters },
  { gameId: 'lets-go-pikachu', chapters: kantoLetsGoChapters },
  { gameId: 'lets-go-eevee', chapters: kantoLetsGoChapters },
  { gameId: 'gold', chapters: johtoGen2Chapters },
  { gameId: 'silver', chapters: johtoGen2Chapters },
  { gameId: 'crystal', chapters: johtoGen2Chapters },
  { gameId: 'heartgold', chapters: johtoHGSSChapters },
  { gameId: 'soulsilver', chapters: johtoHGSSChapters },
  { gameId: 'ruby', chapters: hoennChapters },
  { gameId: 'sapphire', chapters: hoennChapters },
  { gameId: 'emerald', chapters: hoennChapters },
  { gameId: 'omega-ruby', chapters: hoennChapters },
  { gameId: 'alpha-sapphire', chapters: hoennChapters },
  { gameId: 'diamond', chapters: sinnohChapters },
  { gameId: 'pearl', chapters: sinnohChapters },
  { gameId: 'platinum', chapters: sinnohChapters },
  { gameId: 'brilliant-diamond', chapters: sinnohChapters },
  { gameId: 'shining-pearl', chapters: sinnohChapters },
  { gameId: 'black', chapters: unovaChapters },
  { gameId: 'white', chapters: unovaChapters },
  { gameId: 'black-2', chapters: unovaBW2Chapters },
  { gameId: 'white-2', chapters: unovaBW2Chapters },
  { gameId: 'x', chapters: kalosChapters },
  { gameId: 'y', chapters: kalosChapters },
  { gameId: 'sun', chapters: alolaChapters },
  { gameId: 'moon', chapters: alolaChapters },
  { gameId: 'ultra-sun', chapters: alolaUSUMChapters },
  { gameId: 'ultra-moon', chapters: alolaUSUMChapters },
  { gameId: 'sword', chapters: galarChapters },
  { gameId: 'shield', chapters: galarChapters },
  { gameId: 'legends-arceus', chapters: hisuiChapters },
  { gameId: 'scarlet', chapters: paldeaChapters },
  { gameId: 'violet', chapters: paldeaChapters },
];

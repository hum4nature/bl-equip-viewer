const e = "1.0.0", r = {
  vex: {
    id: "vex",
    name: "Vex",
    traitIcon: "icons/characters/vex/trait.webp",
    skillBackground: "icons/characters/vex/skill-background.webp"
  },
  rafa: {
    id: "rafa",
    name: "Rafa",
    traitIcon: "icons/characters/rafa/trait.webp",
    skillBackground: "icons/characters/rafa/skill-background.webp"
  },
  amon: {
    id: "amon",
    name: "Amon",
    traitIcon: "icons/characters/amon/trait.webp",
    skillBackground: "icons/characters/amon/skill-background.webp"
  },
  harlowe: {
    id: "harlowe",
    name: "Harlowe",
    traitIcon: "icons/characters/harlowe/trait.webp",
    skillBackground: "icons/characters/harlowe/skill-background.webp"
  }
}, o = {
  passive: {
    id: "passive",
    name: "Passive",
    pluralName: "Passives"
  },
  "action-skill": {
    id: "action-skill",
    name: "Action Skill",
    pluralName: "Action Skills"
  },
  augment: {
    id: "augment",
    name: "Augment",
    pluralName: "Augments"
  },
  capstone: {
    id: "capstone",
    name: "Capstone",
    pluralName: "Capstones"
  }
}, d = {
  atlas: {
    name: "Atlas",
    isBaseItemManufacturer: !1,
    bannerIcon: "icons/manufacturer/atlas-banner.webp",
    logoIcon: "icons/manufacturer/atlas-logo.webp",
    headerLogoIcon: "icons/manufacturer/atlas-header-logo.webp"
  },
  cov: {
    name: "CoV",
    isBaseItemManufacturer: !1,
    bannerIcon: "icons/manufacturer/cov-banner.webp",
    logoIcon: "icons/manufacturer/cov-logo.webp",
    headerLogoIcon: "icons/manufacturer/cov-header-logo.webp"
  },
  daedalus: {
    name: "Daedalus",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/daedalus-banner.webp",
    logoIcon: "icons/manufacturer/daedalus-logo.webp",
    headerLogoIcon: "icons/manufacturer/daedalus-header-logo.webp"
  },
  hyperion: {
    name: "Hyperion",
    isBaseItemManufacturer: !1,
    bannerIcon: "icons/manufacturer/hyperion-banner.webp",
    logoIcon: "icons/manufacturer/hyperion-logo.webp",
    headerLogoIcon: "icons/manufacturer/hyperion-header-logo.webp"
  },
  jakobs: {
    name: "Jakobs",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/jakobs-banner.webp",
    logoIcon: "icons/manufacturer/jakobs-logo.webp",
    headerLogoIcon: "icons/manufacturer/jakobs-header-logo.webp"
  },
  maliwan: {
    name: "Maliwan",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/maliwan-banner.webp",
    logoIcon: "icons/manufacturer/maliwan-logo.webp",
    headerLogoIcon: "icons/manufacturer/maliwan-header-logo.webp"
  },
  order: {
    name: "Order",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/order-banner.webp",
    logoIcon: "icons/manufacturer/order-logo.webp",
    headerLogoIcon: "icons/manufacturer/order-header-logo.webp"
  },
  ripper: {
    name: "Ripper",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/ripper-banner.webp",
    logoIcon: "icons/manufacturer/ripper-logo.webp",
    headerLogoIcon: "icons/manufacturer/ripper-header-logo.webp"
  },
  tediore: {
    name: "Tediore",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/tediore-banner.webp",
    logoIcon: "icons/manufacturer/tediore-logo.webp",
    headerLogoIcon: "icons/manufacturer/tediore-header-logo.webp"
  },
  torgue: {
    name: "Torgue",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/torgue-banner.webp",
    logoIcon: "icons/manufacturer/torgue-logo.webp",
    headerLogoIcon: "icons/manufacturer/torgue-header-logo.webp"
  },
  vladof: {
    name: "Vladof",
    isBaseItemManufacturer: !0,
    bannerIcon: "icons/manufacturer/vladof-banner.webp",
    logoIcon: "icons/manufacturer/vladof-logo.webp",
    headerLogoIcon: "icons/manufacturer/vladof-header-logo.webp"
  }
}, a = {
  corrosive: {
    name: "Corrosive",
    hasStatusEffect: !0,
    isDamagingStatusEffect: !0,
    icon: "icons/element/corrosive.webp",
    hasBanner: !0,
    color: "#76f800",
    backgroundColor: "#1f3f21"
  },
  cryo: {
    name: "Cryo",
    hasStatusEffect: !0,
    isDamagingStatusEffect: !1,
    icon: "icons/element/cryo.webp",
    hasBanner: !0,
    color: "#57fbfb",
    backgroundColor: "#1a3f47"
  },
  incendiary: {
    name: "Incendiary",
    hasStatusEffect: !0,
    isDamagingStatusEffect: !0,
    icon: "icons/element/incendiary.webp",
    hasBanner: !0,
    color: "#ff5628",
    backgroundColor: "#352627"
  },
  kinetic: {
    name: "Kinetic",
    hasStatusEffect: !1,
    isDamagingStatusEffect: !1,
    icon: "icons/element/kinetic.webp",
    hasBanner: !1
  },
  radiation: {
    name: "Radiation",
    hasStatusEffect: !0,
    isDamagingStatusEffect: !0,
    icon: "icons/element/radiation.webp",
    hasBanner: !0,
    color: "#f1ff00",
    backgroundColor: "#334021"
  },
  shock: {
    name: "Shock",
    hasStatusEffect: !0,
    isDamagingStatusEffect: !0,
    icon: "icons/element/shock.webp",
    hasBanner: !0,
    color: "#3367f8",
    backgroundColor: "#152947"
  }
}, i = {
  "action-fist": {
    name: "Action Fist",
    icon: "icons/firmware/action-fist.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Melee Damage[/keyword] is increased by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Action Skill Damage[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 3,
        description: 'On [keyword id="secondary"]Melee[/keyword] kill, [keyword id="secondary"]Action Skill Damage[/keyword] is increased by [keyword id="secondary"]25%[/keyword] for [keyword id="secondary"]8s[/keyword]'
      }
    ]
  },
  airstrike: {
    name: "Airstrike",
    icon: "icons/firmware/airstrike.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Splash Radius[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Splash Damage[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 3,
        description: "On kill, drop a Missile Strike on nearby enemies"
      }
    ]
  },
  "atlas-ex": {
    name: "Atlas EX",
    icon: "icons/firmware/atlas-ex.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Mode Switch Speed[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Damage[/keyword] is increased by [keyword id="secondary"]10%[/keyword] while an [keyword id="primary"] [/keyword]Atlas[keyword id="/primary"] [/keyword] [keyword id="secondary"]Target Lock[/keyword] is active'
      },
      {
        level: 3,
        description: 'When killing an [keyword id="primary"] [/keyword]Atlas[keyword id="/primary"] [/keyword] [keyword id="secondary"]Target Locked[/keyword] enemy, [keyword id="secondary"]automatically Target Lock[/keyword] another nearby enemy'
      }
    ]
  },
  "atlas-infinum": {
    name: "Atlas Infinum",
    icon: "icons/firmware/atlas-infinum.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Fire Rate[/keyword] is increased by [keyword id="secondary"]5%[/keyword] while an [keyword id="primary"] [/keyword]Atlas[keyword id="/primary"] [/keyword] [keyword id="secondary"]Target Lock[/keyword] is active'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Atlas[/keyword]-licensed parts gain [keyword id="secondary"]10% Damage[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="primary"] [/keyword]Atlas[keyword id="/primary"] [/keyword] [keyword id="secondary"]Target Locks[/keyword] are infinite, unless you swap [keyword id="secondary"]Guns[/keyword]'
      }
    ]
  },
  baker: {
    name: "Baker",
    icon: "icons/firmware/baker.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Shield Capacity[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Repkit Cooldown Duration[/keyword] is reduced by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Maximum Health[/keyword] is increased by [keyword id="secondary"]25%[/keyword]'
      }
    ]
  },
  "bullets-to-spare": {
    name: "Bullets to Spare",
    icon: "icons/firmware/bullets-to-spare.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Fire Rate[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Magazine Size[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Gun Fire Rate[/keyword] is increased by [keyword id="secondary"]50%[/keyword] of [keyword id="secondary"]Gun Magazine Size[/keyword]'
      }
    ]
  },
  "daed-dy-o": {
    name: "Daed-dy O",
    icon: "icons/firmware/daed-dy-o.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Mode Switch Speed[/keyword] is increased by [keyword id="secondary"]25%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Magazine Size[/keyword] is increased by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 3,
        description: 'On [keyword id="secondary"]Mode Switch[/keyword], grants [keyword id="secondary"]20% Damage[/keyword] and [keyword id="secondary"]20% Fire Rate[/keyword] for [keyword id="secondary"]5s[/keyword]'
      }
    ]
  },
  deadeye: {
    name: "Deadeye",
    icon: "icons/firmware/deadeye.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Accuracy[/keyword] is increased by [keyword id="secondary"]30%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Critical Damage[/keyword] is increased by [keyword id="secondary"]25%[/keyword]'
      },
      {
        level: 3,
        description: 'Every [keyword id="secondary"]Critical Hit[/keyword] grants [keyword id="secondary"]15% Critical Damage[/keyword] per Stack (for a Maximum [keyword id="secondary"]5[/keyword] Stacks) for [keyword id="secondary"]10s[/keyword]'
      }
    ]
  },
  "gadget-ahoy": {
    name: "Gadget Ahoy",
    icon: "icons/firmware/gadget-ahoy.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Ordnance Cooldown Duration[/keyword] is reduced by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Ordnance Damage[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Ordnance[/keyword] kills grant [keyword id="secondary"]20% Damage[/keyword] for [keyword id="secondary"]15s[/keyword]'
      }
    ]
  },
  "get-throwin": {
    name: "Get Throwin",
    icon: "icons/firmware/get-throwin.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Ordnance Damage[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Splash Radius[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Grenades[/keyword] and [keyword id="primary"] [/keyword]Tediore[keyword id="/primary"] [/keyword] [keyword id="secondary"]Thrown Guns[/keyword] have a [keyword id="secondary"]50%[/keyword] Chance to spawn homing Missiles that home in on nearby enemies'
      }
    ]
  },
  "god-killer": {
    name: "God Killer",
    icon: "icons/firmware/god-killer.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Damage Dealt[/keyword] to [keyword id="secondary"]Badass Enemies[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Damage Taken[/keyword] from [keyword id="secondary"]Badass Enemies[/keyword] is reduced by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 3,
        description: 'On killing a [keyword id="secondary"]Badass Enemy[/keyword], [keyword id="secondary"]Damage Dealt[/keyword] is increased by [keyword id="secondary"]20%[/keyword] for [keyword id="secondary"]60s[/keyword]'
      }
    ]
  },
  goojfc: {
    name: "GOOJFC",
    icon: "icons/firmware/goojfc.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Action Skill Cooldown Rate[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Action Skill Damage[/keyword] is increased by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Action Skill Cooldown Rate[/keyword] is increased by an additional [keyword id="secondary"]20%[/keyword]'
      }
    ]
  },
  "heating-up": {
    name: "Heating Up",
    icon: "icons/firmware/heating-up.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Reload Speed[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 2,
        description: 'Amount of [keyword id="secondary"]Overheated[/keyword] shots before breaking is increased by [keyword id="secondary"]50%[/keyword] with [keyword id="primary"]CoV[/keyword]-Licensed [keyword id="secondary"]Gun[/keyword] Parts'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Gun Damage[/keyword] is increased by [keyword id="secondary"]25%[/keyword] while [keyword id="secondary"]Overheating[/keyword] with [keyword id="primary"]CoV[/keyword]-Licensed [keyword id="secondary"]Gun[/keyword] Parts'
      }
    ]
  },
  "high-caliber": {
    name: "High Caliber",
    icon: "icons/firmware/high-caliber.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Projectile Speed[/keyword] is increased by [keyword id="secondary"]25%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Damage[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 3,
        description: 'Bullets [keyword id="secondary"]Pierce[/keyword] enemies'
      }
    ]
  },
  jacked: {
    name: "Jacked",
    icon: "icons/firmware/jacked.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Zoom In Speed[/keyword] is increased by [keyword id="secondary"]20%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="primary"] [/keyword]Hyperion[keyword id="/primary"] [/keyword] [keyword id="secondary"]Gun Shield Capacity[/keyword] is increased by [keyword id="secondary"]25%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="primary"] [/keyword]Hyperion[keyword id="/primary"] [/keyword] [keyword id="secondary"]Gun Shields[/keyword] have a [keyword id="secondary"]30%[/keyword] Chance to [keyword id="secondary"]Ricochet Projectiles[/keyword] back to the enemy'
      }
    ]
  },
  lifeblood: {
    name: "Lifeblood",
    icon: "icons/firmware/lifeblood.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Repkit Healing[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Lifesteal[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      },
      {
        level: 3,
        description: 'On kill, regenerates [keyword id="secondary"]10%[/keyword] of [keyword id="secondary"]Maximum Health[/keyword]'
      }
    ]
  },
  "oscar-mike": {
    name: "Oscar Mike",
    icon: "icons/firmware/oscar-mike.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Reload Speed[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 2,
        description: `[keyword id="secondary"]Gun Damage[/keyword] is increased by up to [keyword id="secondary"]20%[/keyword] based on the emptiness of your [keyword id="secondary"]Gun's Magazine[/keyword]`
      },
      {
        level: 3,
        description: 'After [keyword id="secondary"]Reloading[/keyword], [keyword id="secondary"]Gun Fire Rate[/keyword] is increased by [keyword id="secondary"]30%[/keyword] for [keyword id="secondary"]4s[/keyword]'
      }
    ]
  },
  "reel-big-fist": {
    name: "Reel Big Fist",
    icon: "icons/firmware/reel-big-fist.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Melee Damage[/keyword] is increased by [keyword id="secondary"]15%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Melee Damage[/keyword] is increased by an additional [keyword id="secondary"]25%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Melee[/keyword] kills trigger a Nova explosion for [keyword id="secondary"]200% Melee Damage[/keyword]'
      }
    ]
  },
  "risky-boots": {
    name: "Risky Boots",
    icon: "icons/firmware/risky-boots.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: 'When [keyword id="secondary"]Health[/keyword] is less than [keyword id="secondary"]35%[/keyword], [keyword id="secondary"]Damage Taken[/keyword] is reduced by [keyword id="secondary"]30%[/keyword]'
      },
      {
        level: 2,
        description: 'When [keyword id="secondary"]Health[/keyword] is less than [keyword id="secondary"]35%[/keyword], [keyword id="secondary"]Movement Speed[/keyword] is increased by [keyword id="secondary"]35%[/keyword]'
      },
      {
        level: 3,
        description: 'When [keyword id="secondary"]Health[/keyword] is less than [keyword id="secondary"]35%[/keyword], [keyword id="secondary"]Damage Dealt[/keyword] is increased by [keyword id="secondary"]100%[/keyword] and [keyword id="secondary"]Lifesteal[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      }
    ]
  },
  "rubberband-man": {
    name: "Rubberband Man",
    icon: "icons/firmware/rubberband-man.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Damage Reduction[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Lifesteal[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      },
      {
        level: 3,
        description: '[keyword id="secondary"]Bonuses[/keyword] granted by this Firmware are [keyword id="secondary"]doubled[/keyword]'
      }
    ]
  },
  trickshot: {
    name: "Trickshot",
    icon: "icons/firmware/trickshot.webp",
    maxLevel: 3,
    effects: [
      {
        level: 1,
        description: '[keyword id="secondary"]Gun Reload Speed[/keyword] is increased by [keyword id="secondary"]5%[/keyword]'
      },
      {
        level: 2,
        description: '[keyword id="secondary"]Gun Critical Damage[/keyword] is increased by [keyword id="secondary"]10%[/keyword]'
      },
      {
        level: 3,
        description: `[keyword id="secondary"]Critical Hits[/keyword] have a [keyword id="secondary"]50%[/keyword] Chance to refill [keyword id="secondary"]1[/keyword] Ammo to the currently-equipped [keyword id="secondary"]Gun's Magazine[/keyword]`
      }
    ]
  }
}, n = {
  "grenade-manu-dad": {
    icon: "icons/item-augments/grenade-manu-dad.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Grenades[/keyword] cook while held, and [keyword id="secondary"]explode[/keyword] after a set [keyword id="secondary"]Duration[/keyword]',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "grenade-manu-jak": {
    icon: "icons/item-augments/grenade-manu-jak.webp",
    description: '[keyword id="jakobs_icon"] [/keyword] [keyword id="secondary"]Jakobs[/keyword] - [keyword id="secondary"]Grenades[/keyword] deal [keyword id="secondary"]Critical Damage[/keyword] when hitting [keyword id="secondary"]Weak Points[/keyword]',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "jakobs"
  },
  "grenade-manu-mal": {
    icon: "icons/item-augments/grenade-manu-mal.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - [keyword id="secondary"]Grenades stick[/keyword] to enemies, and any that land on the ground will [keyword id="secondary"]propel[/keyword] themselves at the nearest incoming enemy',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "maliwan"
  },
  "grenade-manu-ord": {
    icon: "icons/item-augments/grenade-manu-ord.webp",
    description: '[keyword id="order_icon"] [/keyword] [keyword id="secondary"]Order[/keyword] - [keyword id="secondary"]Grenades home in[/keyword] on nearby enemies',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "order"
  },
  "grenade-manu-ted": {
    icon: "icons/item-augments/grenade-manu-ted.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"] [/keyword]Double tap[keyword id="/secondary"] [/keyword] [keyword id="glyph"]action_gadget[/keyword] to [keyword id="secondary"]remotely detonate[/keyword] thrown [keyword id="secondary"]Grenades[/keyword]',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "grenade-manu-tor": {
    icon: "icons/item-augments/grenade-manu-tor.webp",
    description: '[keyword id="torgue_icon"] [/keyword] [keyword id="secondary"]Torgue[/keyword] - [keyword id="secondary"]Grenades explode[/keyword] when impacting an enemy',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "torgue"
  },
  "grenade-manu-vla": {
    icon: "icons/item-augments/grenade-manu-vla.webp",
    description: '[keyword id="vladof_icon"] [/keyword] [keyword id="secondary"]Vladof[/keyword] - [keyword id="secondary"]Grenades explode[/keyword] upon impact',
    source: "grenade",
    type: "manufacturer-specific",
    manufacturerId: "vladof"
  },
  "grenade-payload-artillery": {
    icon: "icons/item-augments/grenade-payload-artillery.webp",
    description: '[keyword id="secondary"]Artillery Payload[/keyword] - Fires bullets around the [keyword id="secondary"]Grenade[/keyword], dealing [keyword id="secondary"]{mod1} Damage/s[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-payload-artillery-aug-duration": {
    icon: "icons/item-augments/grenade-payload-artillery-aug-duration.webp",
    description: '[keyword id="secondary"]Duration Augment[/keyword] - Increases the [keyword id="secondary"]Duration[/keyword] of the [keyword id="secondary"]Artillery Grenade[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    source: "grenade",
    type: "artillery"
  },
  "grenade-payload-artillery-aug-maglock": {
    icon: "icons/item-augments/grenade-payload-artillery-aug-maglock.webp",
    description: '[keyword id="secondary"]Maglock Augment[/keyword] - Homes in on nearby [keyword id="secondary"]enemies[/keyword]',
    source: "grenade",
    type: "artillery"
  },
  "grenade-payload-artillery-aug-missiles": {
    icon: "icons/item-augments/grenade-payload-artillery-aug-missiles.webp",
    description: '[keyword id="secondary"]Missiles Augment[/keyword] - Fires [keyword id="secondary"]Micro-Missiles[/keyword] that home in on nearby [keyword id="secondary"]enemies[/keyword], each dealing [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "grenade",
    type: "artillery"
  },
  "grenade-payload-artillery-aug-mortar": {
    icon: "icons/item-augments/grenade-payload-artillery-aug-mortar.webp",
    description: '[keyword id="secondary"]Mortar Augment[/keyword] - Fires [keyword id="secondary"]Mortars[/keyword] toward [keyword id="secondary"]enemy[/keyword] positions, each dealing [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "grenade",
    type: "artillery"
  },
  "grenade-payload-artillery-aug-ricochet": {
    icon: "icons/item-augments/grenade-payload-artillery-aug-ricochet.webp",
    description: '[keyword id="secondary"]Ricochet Augment[/keyword] - [keyword id="secondary"]Artillery Projectiles[/keyword] will bounce off of [keyword id="secondary"]enemies[/keyword], and [keyword id="secondary"]Ricochet[/keyword] toward another nearby [keyword id="secondary"]enemy[/keyword]',
    source: "grenade",
    type: "artillery"
  },
  "grenade-payload-damage-amp": {
    icon: "icons/item-augments/grenade-payload-damage-amp.webp",
    description: '[keyword id="secondary"]Damage Amp Payload[/keyword] - [keyword id="secondary"]Damage Taken[/keyword] by impacted [keyword id="secondary"]target[/keyword] is increased by [keyword id="secondary"]{mod2}[/keyword] for [keyword id="secondary"]{mod1}s[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-payload-damage-amp-aug-bouncing-blade": {
    icon: "icons/item-augments/grenade-payload-damage-amp-aug-bouncing-blade.webp",
    description: '[keyword id="secondary"]Bouncing Blade Augment[/keyword] - [keyword id="secondary"]Ricochets[/keyword] additional [keyword id="secondary"]knives[/keyword] toward nearby [keyword id="secondary"]enemies[/keyword], dealing [keyword id="secondary"]{dmg} Damage[/keyword]',
    source: "grenade",
    type: "damage-amp"
  },
  "grenade-payload-damage-amp-aug-penetrator": {
    icon: "icons/item-augments/grenade-payload-damage-amp-aug-penetrator.webp",
    description: '[keyword id="secondary"]Penetrator Augment[/keyword] - [keyword id="secondary"]Damage[/keyword] to the impacted [keyword id="secondary"]target[/keyword] are [keyword id="secondary"]automatic Critical Hits[/keyword] for [keyword id="secondary"]{mod1}s[/keyword]',
    source: "grenade",
    type: "damage-amp"
  },
  "grenade-payload-damage-amp-aug-suppressor": {
    icon: "icons/item-augments/grenade-payload-damage-amp-aug-suppressor.webp",
    description: '[keyword id="secondary"]Suppressor Augment[/keyword] - [keyword id="secondary"]Damage Dealt[/keyword] by impacted [keyword id="secondary"]target[/keyword] is reduced by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{mod2}s[/keyword]',
    source: "grenade",
    type: "damage-amp"
  },
  "grenade-payload-divider": {
    icon: "icons/item-augments/grenade-payload-divider.webp",
    description: '[keyword id="secondary"]Divider Payload[/keyword] - Spawns a [keyword id="secondary"]second Grenade[/keyword] while midflight',
    source: "grenade",
    type: "generic"
  },
  "grenade-payload-divider-aug-children": {
    icon: "icons/item-augments/grenade-payload-divider-aug-children.webp",
    description: '[keyword id="secondary"]Long Division Augment[/keyword] - Spawns another additional [keyword id="secondary"]Grenade[/keyword] while midflight',
    source: "grenade",
    type: "divider"
  },
  "grenade-payload-divider-aug-repeater": {
    icon: "icons/item-augments/grenade-payload-divider-aug-repeater.webp",
    description: '[keyword id="secondary"]Repeater Augment[/keyword] - Spawns additional [keyword id="secondary"]Grenades[/keyword] downward while midflight',
    source: "grenade",
    type: "divider"
  },
  "grenade-payload-divider-aug-repeater-jak": {
    icon: "icons/item-augments/grenade-payload-divider-aug-repeater-jak.webp",
    description: '[keyword id="secondary"]Repeater Augment[/keyword] - Spawns additional [keyword id="secondary"]Grenades[/keyword] while midflight',
    source: "grenade",
    type: "divider",
    manufacturerId: "jakobs"
  },
  "grenade-payload-divider-aug-seeker": {
    icon: "icons/item-augments/grenade-payload-divider-aug-seeker.webp",
    description: '[keyword id="secondary"]Splinter Augment[/keyword] - Launches the second spawned [keyword id="secondary"]Grenade[/keyword] toward an enemy',
    source: "grenade",
    type: "divider"
  },
  "grenade-payload-divider-aug-singularity": {
    icon: "icons/item-augments/grenade-payload-divider-aug-singularity.webp",
    description: '[keyword id="secondary"]Pulling Augment[/keyword] - Each [keyword id="secondary"]Grenade[/keyword] spawns a [keyword id="secondary"]Singularity[/keyword]',
    source: "grenade",
    type: "divider"
  },
  "grenade-payload-divider-aug-spring": {
    icon: "icons/item-augments/grenade-payload-divider-aug-spring.webp",
    description: '[keyword id="secondary"]Spring Augment[/keyword] - Each [keyword id="secondary"]Grenade[/keyword] bounces in place, [keyword id="secondary"]exploding 3[/keyword] extra times',
    source: "grenade",
    type: "divider"
  },
  "grenade-payload-lingering-aug-alchemic": {
    icon: "icons/item-augments/grenade-payload-lingering-aug-alchemic.webp",
    description: '[keyword id="secondary"]Alchemic Augment[/keyword] - [keyword id="secondary"]Grenade Status Effect Chance[/keyword] increased by [keyword id="secondary"]{mod}[/keyword]',
    source: "grenade",
    type: "lingering"
  },
  "grenade-payload-lingering-aug-duration": {
    icon: "icons/item-augments/grenade-payload-lingering-aug-duration.webp",
    description: '[keyword id="secondary"]Duration Augment[/keyword] - Increases the [keyword id="secondary"]Duration[/keyword] of the [keyword id="secondary"]Lingering Grenade[/keyword] by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "lingering"
  },
  "grenade-payload-lingering-aug-fracture": {
    icon: "icons/item-augments/grenade-payload-lingering-aug-fracture.webp",
    description: '[keyword id="secondary"]Fracture Augment[/keyword] - Spawns [keyword id="secondary"] [/keyword]3[keyword id="/secondary"] [/keyword] [keyword id="secondary"]Elemental Pillars[/keyword] in the direction the Grenade was thrown, each dealing [keyword id="secondary"]{mod1}[/keyword] Damage',
    source: "grenade",
    type: "lingering"
  },
  "grenade-payload-lingering-aug-pulse": {
    icon: "icons/item-augments/grenade-payload-lingering-aug-pulse.webp",
    description: '[keyword id="secondary"]Pulsing Augment[/keyword] - Radiates [keyword id="secondary"]Elemental Pulses[/keyword] from the [keyword id="secondary"]Grenade[/keyword], each [keyword id="secondary"]Pulse[/keyword] dealing [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "grenade",
    type: "lingering"
  },
  "grenade-payload-lingering-aug-splat-pack": {
    icon: "icons/item-augments/grenade-payload-lingering-aug-splat-pack.webp",
    description: '[keyword id="secondary"]Splat Pack Augment[/keyword] - Launches [keyword id="secondary"] [/keyword]3[keyword id="/secondary"] [/keyword] [keyword id="secondary"]Projeciles[/keyword] that each spawn an [keyword id="secondary"]Elemental Puddle[/keyword] on landing',
    source: "grenade",
    type: "lingering"
  },
  "grenade-payload-lingering-corrosive": {
    icon: "icons/item-augments/grenade-payload-lingering-corrosive.webp",
    description: '[keyword id="secondary"]Lingering Payload[/keyword] - Spawns [keyword id="secondary"]4[/keyword] rotating [keyword id="secondary"]beams[/keyword], dealing [keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]{mod1} Corrosive Damage/s[/keyword]',
    source: "grenade",
    type: "lingering",
    elements: [
      "corrosive"
    ]
  },
  "grenade-payload-lingering-cryo": {
    icon: "icons/item-augments/grenade-payload-lingering-cryo.webp",
    description: '[keyword id="secondary"]Lingering Payload[/keyword] - Spawns a [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Puddle[/keyword], dealing [keyword id="cryo"]{mod1} Damage/s[/keyword] to all enemies within it',
    source: "grenade",
    type: "lingering",
    elements: [
      "cryo"
    ]
  },
  "grenade-payload-lingering-fire": {
    icon: "icons/item-augments/grenade-payload-lingering-fire.webp",
    description: '[keyword id="secondary"]Lingering Payload[/keyword] - Spawns [keyword id="secondary"]4[/keyword] rotating [keyword id="secondary"]beams[/keyword] dealing [keyword id="fire_icon"] [/keyword] [keyword id="fire"]{mod1} Incendiary Damage/s[/keyword]',
    source: "grenade",
    type: "lingering",
    elements: [
      "fire"
    ]
  },
  "grenade-payload-lingering-radiation": {
    icon: "icons/item-augments/grenade-payload-lingering-radiation.webp",
    description: '[keyword id="secondary"]Lingering Payload[/keyword] - Spawns [keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation Globules[/keyword] that [keyword id="secondary"]home in[/keyword] on nearby enemies, dealing [keyword id="radiation"]{mod1} Damage[/keyword]',
    source: "grenade",
    type: "lingering",
    elements: [
      "radiation"
    ]
  },
  "grenade-payload-lingering-shock": {
    icon: "icons/item-augments/grenade-payload-lingering-shock.webp",
    description: '[keyword id="secondary"]Lingering Payload[/keyword] - Lashes out at [keyword id="secondary"]3[/keyword] nearby enemies, dealing [keyword id="shock_icon"] [/keyword] [keyword id="shock"]{mod1} Shock Damage/s[/keyword] to each',
    source: "grenade",
    type: "lingering",
    elements: [
      "shock"
    ]
  },
  "grenade-payload-mirv": {
    icon: "icons/item-augments/grenade-payload-mirv.webp",
    description: '[keyword id="secondary"]MIRV Payload[/keyword] - Spawns [keyword id="secondary"]{mod1} MIRV Grenades[/keyword] on [keyword id="secondary"]exploding[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-payload-mirv-aug-bouncer": {
    icon: "icons/item-augments/grenade-payload-mirv-aug-bouncer.webp",
    description: '[keyword id="secondary"]Rubberized Augment[/keyword] - [keyword id="secondary"]MIRV Grenades[/keyword] bounce up to [keyword id="secondary"]5[/keyword] times before [keyword id="secondary"]exploding[/keyword]',
    source: "grenade",
    type: "mirv"
  },
  "grenade-payload-mirv-aug-children": {
    icon: "icons/item-augments/grenade-payload-mirv-aug-children.webp",
    description: '[keyword id="secondary"]Tightly Packed Augment[/keyword] - Increases amount of [keyword id="secondary"]MIRV Grenades[/keyword] spawned by [keyword id="secondary"]+2[/keyword]',
    source: "grenade",
    type: "mirv"
  },
  "grenade-payload-mirv-aug-micro-mirv": {
    icon: "icons/item-augments/grenade-payload-mirv-aug-micro-mirv.webp",
    description: '[keyword id="secondary"]Micro MIRV Augment[/keyword] - [keyword id="secondary"]MIRV Grenades[/keyword] each spawn [keyword id="secondary"]3 Micro MIRVs[/keyword] when they [keyword id="secondary"]explode[/keyword]',
    source: "grenade",
    type: "mirv"
  },
  "grenade-payload-mirv-aug-spring": {
    icon: "icons/item-augments/grenade-payload-mirv-aug-spring.webp",
    description: '[keyword id="secondary"]Spring Augment[/keyword] - [keyword id="secondary"]MIRV Grenades[/keyword] bounce in place [keyword id="secondary"]3[/keyword] times, [keyword id="secondary"]exploding[/keyword] on each bounce',
    source: "grenade",
    type: "mirv"
  },
  "grenade-payload-singularity": {
    icon: "icons/item-augments/grenade-payload-singularity.webp",
    description: '[keyword id="secondary"]Singularity Payload[/keyword] - Spawns a [keyword id="secondary"]Singularity[/keyword] that pulls in nearby [keyword id="secondary"]enemies[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-payload-singularity-aug-collapsing": {
    icon: "icons/item-augments/grenade-payload-singularity-aug-collapsing.webp",
    description: '[keyword id="secondary"]Collapsing Augment[/keyword] - The [keyword id="secondary"]Singularity[/keyword] pulls in [keyword id="secondary"]enemies[/keyword] more rapidly, and with increased [keyword id="secondary"]Force[/keyword], within a large [keyword id="secondary"]Radius[/keyword]',
    source: "grenade",
    type: "singularity"
  },
  "grenade-payload-singularity-aug-duration": {
    icon: "icons/item-augments/grenade-payload-singularity-aug-duration.webp",
    description: '[keyword id="secondary"]Prolonged Augment[/keyword] - Increases the [keyword id="secondary"]Duration[/keyword] of the [keyword id="secondary"]Singularity Grenade[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    source: "grenade",
    type: "singularity"
  },
  "grenade-payload-singularity-aug-lingering": {
    icon: "icons/item-augments/grenade-payload-singularity-aug-lingering.webp",
    description: '[keyword id="secondary"]Gnawing Augment[/keyword] - Deals [keyword id="secondary"]{mod1} Damage/s[/keyword] for the [keyword id="secondary"]Duration[/keyword] of the [keyword id="secondary"]Singularity[/keyword]',
    source: "grenade",
    type: "singularity"
  },
  "grenade-payload-singularity-aug-repulsor": {
    icon: "icons/item-augments/grenade-payload-singularity-aug-repulsor.webp",
    description: '[keyword id="secondary"]Repulsor Augment[/keyword] - Upon [keyword id="secondary"]exploding[/keyword], pushes [keyword id="secondary"]enemies[/keyword] away from the [keyword id="secondary"]Singularity[/keyword]',
    source: "grenade",
    type: "singularity"
  },
  "grenade-payload-spring": {
    icon: "icons/item-augments/grenade-payload-spring.webp",
    description: '[keyword id="secondary"]Spring Payload[/keyword] - Bounces in place, [keyword id="secondary"]exploding 3[/keyword] additional times',
    source: "grenade",
    type: "singularity"
  },
  "grenade-payload-spring-aug-apex": {
    icon: "icons/item-augments/grenade-payload-spring-aug-apex.webp",
    description: '[keyword id="secondary"]Apex Augment[/keyword] - Each [keyword id="secondary"]Grenade[/keyword] also [keyword id="secondary"]explodes[/keyword] at the apex of each bounce',
    source: "grenade",
    type: "spring"
  },
  "grenade-payload-spring-aug-artillery": {
    icon: "icons/item-augments/grenade-payload-spring-aug-artillery.webp",
    description: '[keyword id="secondary"]Spawning Augment[/keyword] - Spawns additional [keyword id="secondary"]Grenades[/keyword] on each bounce',
    source: "grenade",
    type: "spring"
  },
  "grenade-payload-spring-aug-bouncer": {
    icon: "icons/item-augments/grenade-payload-spring-aug-bouncer.webp",
    description: '[keyword id="secondary"]Bouncer Augment[/keyword] - Each [keyword id="secondary"]Grenade[/keyword] bounces toward nearby [keyword id="secondary"]enemies[/keyword]',
    source: "grenade",
    type: "spring"
  },
  "grenade-payload-spring-aug-compound": {
    icon: "icons/item-augments/grenade-payload-spring-aug-compound.webp",
    description: '[keyword id="secondary"]Compounding Augment[/keyword] - With every bounce, [keyword id="secondary"]Damage[/keyword] increases by [keyword id="secondary"]{mod1}[/keyword] and [keyword id="secondary"]Damage Radius[/keyword] by [keyword id="secondary"]{mod2}[/keyword]',
    source: "grenade",
    type: "spring"
  },
  "grenade-payload-spring-aug-springs": {
    icon: "icons/item-augments/grenade-payload-spring-aug-springs.webp",
    description: '[keyword id="secondary"]Tightly Coiled Augment[/keyword] - [keyword id="secondary"]Grenade[/keyword] bounces in place, [keyword id="secondary"]exploding[/keyword] an additional [keyword id="secondary"]+3[/keyword] times',
    source: "grenade",
    type: "spring"
  },
  "grenade-stat-cdr": {
    icon: "icons/item-augments/grenade-stat-cdr.webp",
    description: '[keyword id="secondary"]Express[/keyword] - [keyword id="secondary"]Grenade Cooldown Duration[/keyword] is reduced by [keyword id="secondary"]{mod}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-crit-chance": {
    icon: "icons/item-augments/grenade-stat-crit-chance.webp",
    description: '[keyword id="secondary"]Exacting[/keyword] - [keyword id="secondary"]Grenade[/keyword] has a [keyword id="secondary"]{mod1}[/keyword] Chance to deal [keyword id="secondary"]Critical Damage[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-crit-damage": {
    icon: "icons/item-augments/grenade-stat-crit-damage.webp",
    description: '[keyword id="secondary"]Merciless[/keyword] - [keyword id="secondary"]Grenade Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-damage": {
    icon: "icons/item-augments/grenade-stat-damage.webp",
    description: '[keyword id="secondary"]Explosive[/keyword] - [keyword id="secondary"]Grenade Damage[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-elemental-power": {
    icon: "icons/item-augments/grenade-stat-elemental-power.webp",
    description: '[keyword id="secondary"]Hazardous[/keyword] - [keyword id="secondary"]Grenade Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword] and [keyword id="secondary"]Greande Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod2}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-extra-charge": {
    icon: "icons/item-augments/grenade-stat-extra-charge.webp",
    description: '[keyword id="secondary"]Overflow[/keyword] - [keyword id="secondary"]Maximum Grenade Charge[/keyword] is increased by [keyword id="secondary"]+1[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-force": {
    icon: "icons/item-augments/grenade-stat-force.webp",
    description: '[keyword id="secondary"]Concussive[/keyword] - [keyword id="secondary"]Knockback Force[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-nuke": {
    icon: "icons/item-augments/grenade-stat-nuke.webp",
    description: '[keyword id="secondary"]Nuke[/keyword] - [keyword id="secondary"]Grenade Damage[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword], [keyword id="secondary"]Grenade Damage Radius[/keyword] is increased by [keyword id="secondary"]{mod2}[/keyword], and [keyword id="secondary"]Grenade Cooldown Duration[/keyword] is increased by [keyword id="secondary"]{mod3}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-oversized": {
    icon: "icons/item-augments/grenade-stat-oversized.webp",
    description: '[keyword id="secondary"]Lethal[/keyword] - [keyword id="secondary"]Grenade Damage[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword], and [keyword id="secondary"]Grenade Projectile Speed[/keyword] is reduced by [keyword id="secondary"]{mod2}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-radius": {
    icon: "icons/item-augments/grenade-stat-radius.webp",
    description: '[keyword id="secondary"]Expansive[/keyword] - [keyword id="secondary"]Grenade Damage Radius[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-transfusion": {
    icon: "icons/item-augments/grenade-stat-transfusion.webp",
    description: '[keyword id="secondary"]Bloodthirsty[/keyword] - [keyword id="secondary"]Grenade Lifesteal[/keyword] is increased by [keyword id="secondary"]{mod1}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "grenade-stat-wideload": {
    icon: "icons/item-augments/grenade-stat-wideload.webp",
    description: '[keyword id="secondary"]Wideload[/keyword] - Damage Radius increased by [keyword id="secondary"]{mod1}[/keyword], Homing Turn Rate reduced by [keyword id="secondary"]{mod2}[/keyword]',
    source: "grenade",
    type: "generic"
  },
  "hw-bor-barrel-01-a": {
    icon: "icons/item-augments/hw-bor-barrel-01-a.webp",
    description: '[keyword id="secondary"]Explosive[/keyword] - [keyword id="secondary"]Damage splashes[/keyword] to other enemies near the [keyword id="secondary"]target[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-01-b": {
    icon: "icons/item-augments/hw-bor-barrel-01-b.webp",
    description: '[keyword id="secondary"]Thermal Convection[/keyword] - [keyword id="secondary"]Damage[/keyword] increases the longer the [keyword id="secondary"]beam[/keyword] is fired',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-01-c": {
    icon: "icons/item-augments/hw-bor-barrel-01-c.webp",
    description: '[keyword id="secondary"]Heat Sink[/keyword] - [keyword id="secondary"]Magazine Size[/keyword] increased by [keyword id="secondary"]{magsize}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-01-d": {
    icon: "icons/item-augments/hw-bor-barrel-01-d.webp",
    description: '[keyword id="secondary"]Beam Splitter[/keyword] - The [keyword id="secondary"]beam[/keyword] splits to up to [keyword id="secondary"]2[/keyword] other nearby [keyword id="secondary"]targets[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-02-a": {
    icon: "icons/item-augments/hw-bor-barrel-02-a.webp",
    description: '[keyword id="secondary"]Wide Disk[/keyword] - Increases the [keyword id="secondary"]Projectile[/keyword] width',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-02-b": {
    icon: "icons/item-augments/hw-bor-barrel-02-b.webp",
    description: '[keyword id="secondary"]Heat Exchange[/keyword] - Fires [keyword id="secondary"]full auto[/keyword] after the initial [keyword id="secondary"]charge[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-02-c": {
    icon: "icons/item-augments/hw-bor-barrel-02-c.webp",
    description: '[keyword id="secondary"]Compound[/keyword] - Deals increased [keyword id="secondary"]Damage[/keyword] per enemy hit',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "borg"
  },
  "hw-bor-barrel-02-d": {
    icon: "icons/item-augments/hw-bor-barrel-02-d.webp",
    description: '[keyword id="secondary"]Ricochet[/keyword] - [keyword id="secondary"]Projectiles bounce[/keyword] off of surfaces',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "borg"
  },
  "hw-mal-barrel-01-a": {
    icon: "icons/item-augments/hw-mal-barrel-01-a.webp",
    description: '[keyword id="secondary"]Ricochet[/keyword] - [keyword id="secondary"]Projectiles bounce[/keyword] off of surfaces',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-01-b": {
    icon: "icons/item-augments/hw-mal-barrel-01-b.webp",
    description: '[keyword id="secondary"]Penetration[/keyword] - [keyword id="secondary"]Projectiles pierce[/keyword] through enemies',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-01-c": {
    icon: "icons/item-augments/hw-mal-barrel-01-c.webp",
    description: '[keyword id="secondary"]Speed Loader[/keyword] - [keyword id="secondary"]Fire Rate[/keyword] is increased by [keyword id="secondary"]30%[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-01-d": {
    icon: "icons/item-augments/hw-mal-barrel-01-d.webp",
    description: '[keyword id="secondary"]Overload[/keyword] - Directly damaged enemies [keyword id="secondary"]explode[/keyword] for [keyword id="secondary"]additional Damage[/keyword] after a delay',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-02-a": {
    icon: "icons/item-augments/hw-mal-barrel-02-a.webp",
    description: '[keyword id="secondary"]MIRV[/keyword] - Spawns [keyword id="secondary"]3 MIRV Orbs[/keyword] on [keyword id="secondary"]explosion[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-02-b": {
    icon: "icons/item-augments/hw-mal-barrel-02-b.webp",
    description: '[keyword id="secondary"]Two-Shot[/keyword] - Fires [keyword id="secondary"]2 Projectiles[/keyword] at a time',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-02-c": {
    icon: "icons/item-augments/hw-mal-barrel-02-c.webp",
    description: '[keyword id="secondary"]Aerodynamics[/keyword] - [keyword id="secondary"]Projectile Speed[/keyword] is increased by [keyword id="secondary"]+100%[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "maliwan"
  },
  "hw-mal-barrel-02-d": {
    icon: "icons/item-augments/hw-mal-barrel-02-d.webp",
    description: '[keyword id="secondary"]Proxy Homing[/keyword] - [keyword id="secondary"]Homes in[/keyword] on a nearby [keyword id="secondary"]target[/keyword] before [keyword id="secondary"]exploding[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "maliwan"
  },
  "hw-tor-barrel-01-a": {
    icon: "icons/item-augments/hw-tor-barrel-01-a.webp",
    description: '[keyword id="secondary"]Triple Barrel[/keyword] - Fires [keyword id="secondary"]swirling Rockets[/keyword], or [keyword id="secondary"]charge up[/keyword] to fire all of them at once',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-01-b": {
    icon: "icons/item-augments/hw-tor-barrel-01-b.webp",
    description: '[keyword id="secondary"]Shrapnel Rockets[/keyword] - On [keyword id="secondary"]exploding[/keyword], [keyword id="secondary"]propels shrapnel[/keyword] forward',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-01-c": {
    icon: "icons/item-augments/hw-tor-barrel-01-c.webp",
    description: '[keyword id="secondary"]Air Burst[/keyword] - [keyword id="secondary"]Rockets[/keyword] explode when in [keyword id="secondary"]proximity[/keyword] of an enemy',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-01-d": {
    icon: "icons/item-augments/hw-tor-barrel-01-d.webp",
    description: `[keyword id="secondary"]Reticle Homing[/keyword] - [keyword id="secondary"]Rocket homes in[/keyword] on the [keyword id="secondary"]Reticle's target[/keyword]`,
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-02-a": {
    icon: "icons/item-augments/hw-tor-barrel-02-a.webp",
    description: '[keyword id="secondary"]Two-Shot[/keyword] - Fires [keyword id="secondary"]2 Rockets[/keyword] at a time',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-02-b": {
    icon: "icons/item-augments/hw-tor-barrel-02-b.webp",
    description: '[keyword id="secondary"]Fire Rate[/keyword] - [keyword id="secondary"]Fire Rate[/keyword] is increased by [keyword id="secondary"]{firerate}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-02-c": {
    icon: "icons/item-augments/hw-tor-barrel-02-c.webp",
    description: '[keyword id="secondary"]Extended Magazine[/keyword] - [keyword id="secondary"]Magazine Size[/keyword] is increased by [keyword id="secondary"]{magsize}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "torgue"
  },
  "hw-tor-barrel-02-d": {
    icon: "icons/item-augments/hw-tor-barrel-02-d.webp",
    description: '[keyword id="secondary"]Scanning[/keyword] - [keyword id="secondary"]Rockets home toward[/keyword] nearby [keyword id="secondary"]targets[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "torgue"
  },
  "hw-vla-barrel-01-a": {
    icon: "icons/item-augments/hw-vla-barrel-01-a.webp",
    description: '[keyword id="secondary"]Additional Barrel[/keyword] - Adds [keyword id="secondary"]1[/keyword] additional barrel, increasing [keyword id="secondary"]Fire Rate[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-01-b": {
    icon: "icons/item-augments/hw-vla-barrel-01-b.webp",
    description: `[keyword id="secondary"]Angel's Share[/keyword] - Every [keyword id="secondary"]{mod}th[/keyword] shot doesn't cost [keyword id="secondary"]Ammo[/keyword]`,
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-01-c": {
    icon: "icons/item-augments/hw-vla-barrel-01-c.webp",
    description: '[keyword id="secondary"]Magic Bullet[/keyword] - Every [keyword id="secondary"]{mod}th[/keyword] shot is [keyword id="secondary"]homing[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-01-d": {
    icon: "icons/item-augments/hw-vla-barrel-01-d.webp",
    description: `[keyword id="secondary"]Devil's Share[/keyword] - Every [keyword id="secondary"]6th[/keyword] shot deals [keyword id="secondary"]+100% Damage[/keyword]`,
    source: "heavy-weapon",
    type: "hw-barrel-1",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-02-a": {
    icon: "icons/item-augments/hw-vla-barrel-02-a.webp",
    description: '[keyword id="secondary"]Additional Barrels[/keyword] - Adds [keyword id="secondary"]2[/keyword] additional barrels, increasing [keyword id="secondary"]Fire Rate[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-02-b": {
    icon: "icons/item-augments/hw-vla-barrel-02-b.webp",
    description: '[keyword id="secondary"]Explosive Rounds[/keyword] - Increases [keyword id="secondary"]Damage[/keyword] by [keyword id="secondary"]{mod}[/keyword] and [keyword id="secondary"]Damage Radius[/keyword] by [keyword id="secondary"]{mod2}[/keyword]',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-02-c": {
    icon: "icons/item-augments/hw-vla-barrel-02-c.webp",
    description: '[keyword id="secondary"]Two-Shot[/keyword] - [keyword id="secondary"]2[/keyword] barrels fire simultaneously',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "vladof"
  },
  "hw-vla-barrel-02-d": {
    icon: "icons/item-augments/hw-vla-barrel-02-d.webp",
    description: '[keyword id="secondary"]Penetration[/keyword] - [keyword id="secondary"]Projectiles pierce[/keyword] through enemies',
    source: "heavy-weapon",
    type: "hw-barrel-2",
    manufacturerId: "vladof"
  },
  "lp-atlas-dart-desc": {
    icon: "icons/item-augments/lp-atlas-dart-desc.webp",
    description: '[keyword id="atlas_icon"] [/keyword] [keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Atlas-Licensed Underbarrel[/keyword] - Fires [keyword id="secondary"]Tracker Darts[/keyword], tagging [keyword id="secondary"]enemies[/keyword] that your [keyword id="secondary"]Projectiles[/keyword] will [keyword id="secondary"]home in on[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "atlas"
  },
  "lp-atlas-grenade-desc": {
    icon: "icons/item-augments/lp-atlas-grenade-desc.webp",
    description: '[keyword id="atlas_icon"] [/keyword] [keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Atlas-Licensed Underbarrel[/keyword] - Fires [keyword id="secondary"]Tracker Grenades[/keyword], tagging [keyword id="secondary"]enemies[/keyword] that your [keyword id="secondary"]Projectiles[/keyword] will [keyword id="secondary"]home in on[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "grenade",
    type: "generic",
    manufacturerId: "atlas"
  },
  "lp-bor-mag": {
    icon: "icons/item-augments/lp-bor-mag.webp",
    description: '[keyword id="borg_icon"] [/keyword] [keyword id="secondary"]Ripper-Licensed Magazine[/keyword] - This [keyword id="secondary"]Gun[/keyword] charges before [keyword id="secondary"]Full Auto[/keyword] firing',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "borg"
  },
  "lp-bor-mag-order": {
    icon: "icons/item-augments/lp-bor-mag-order.webp",
    description: `[keyword id="borg_icon"] [/keyword] [keyword id="secondary"]Ripper-Licensed Magazine[/keyword] - This [keyword id="secondary"]Gun[/keyword] charges before [keyword id="secondary"]Full Auto[/keyword] firing, overriding the [keyword id="primary"]Order[/keyword] manufacturer's Charge functionality`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "order"
  },
  "lp-cov-mag": {
    icon: "icons/item-augments/lp-cov-mag.webp",
    description: '[keyword id="cov_icon"] [/keyword] [keyword id="secondary"]CoV-Licensed Magazine[/keyword] - This [keyword id="secondary"]Gun[/keyword] has an unlimited [keyword id="secondary"]Magazine[/keyword] size, however it will [keyword id="secondary"]heat up[/keyword], and eventually break',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "cov"
  },
  "lp-dad-ar": {
    icon: "icons/item-augments/lp-dad-ar.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus-Licensed Multi-Loader[/keyword] - Secondary fire consumes [keyword id="secondary"]Assault Rifle Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "daedalus"
  },
  "lp-dad-ps": {
    icon: "icons/item-augments/lp-dad-ps.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus-Licensed Multi-Loader[/keyword] - Secondary fire consumes [keyword id="secondary"]Pistol Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "daedalus"
  },
  "lp-dad-sg": {
    icon: "icons/item-augments/lp-dad-sg.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus-Licensed Multi-Loader[/keyword] - Secondary fire consumes [keyword id="secondary"]Shotgun Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "daedalus"
  },
  "lp-dad-smg": {
    icon: "icons/item-augments/lp-dad-smg.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus-Licensed Multi-Loader[/keyword] - Secondary fire consumes [keyword id="secondary"]SMG Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "daedalus"
  },
  "lp-dad-sr": {
    icon: "icons/item-augments/lp-dad-sr.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus-Licensed Multi-Loader[/keyword] - Secondary fire consumes [keyword id="secondary"]Sniper Rifle Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "daedalus"
  },
  "lp-hyp-acc": {
    icon: "icons/item-augments/lp-hyp-acc.webp",
    description: '[keyword id="hyperion_icon"] [/keyword] [keyword id="secondary"]Hyperion-Licensed Grip[/keyword] - [keyword id="secondary"]Accuracy[/keyword] increases with [keyword id="secondary"]continuous fire[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "hyperion"
  },
  "lp-hyp-shield-ammo": {
    icon: "icons/item-augments/lp-hyp-shield-ammo.webp",
    description: '[keyword id="hyperion_icon"] [/keyword] [keyword id="secondary"]Hyperion-Licensed Absorb Shield[/keyword] - [keyword id="secondary"]Damage[/keyword] to [keyword id="secondary"]Gun Shields[/keyword] absorbs [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "hyperion"
  },
  "lp-hyp-shield-amp": {
    icon: "icons/item-augments/lp-hyp-shield-amp.webp",
    description: '[keyword id="hyperion_icon"] [/keyword] [keyword id="secondary"]Hyperion-Licensed Amp Shield[/keyword] - [keyword id="secondary"]Damage[/keyword] to [keyword id="secondary"]Gun Shields[/keyword] amplifies [keyword id="secondary"]Gun Damage[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "hyperion"
  },
  "lp-hyp-shield-default": {
    icon: "icons/item-augments/lp-hyp-shield-default.webp",
    description: '[keyword id="hyperion_icon"] [/keyword] [keyword id="secondary"]Hyperion-Licensed Shield[/keyword] - [keyword id="secondary"]Zoom[/keyword] to enable [keyword id="secondary"]Gun Shields[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "hyperion"
  },
  "lp-hyp-shield-ricochet": {
    icon: "icons/item-augments/lp-hyp-shield-ricochet.webp",
    description: '[keyword id="hyperion_icon"] [/keyword] [keyword id="secondary"]Hyperion-Licensed Ricochet Shield[/keyword] - [keyword id="secondary"]Damage[/keyword] to [keyword id="secondary"]Gun Shields[/keyword] can [keyword id="secondary"]Ricochet[/keyword] back toward enemies',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "hyperion"
  },
  "lp-jak-ricochet": {
    icon: "icons/item-augments/lp-jak-ricochet.webp",
    description: '[keyword id="jakobs_icon"] [/keyword] [keyword id="secondary"]Jakobs-Licensed Accessory[/keyword] - [keyword id="secondary"]Critical Hits[/keyword] will [keyword id="secondary"]Ricochet Projectiles[/keyword] to nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "jakobs"
  },
  "lp-mal-corrosive-cryo": {
    icon: "icons/item-augments/lp-mal-corrosive-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "corrosive"
    ]
  },
  "lp-mal-corrosive-fire": {
    icon: "icons/item-augments/lp-mal-corrosive-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "corrosive"
    ]
  },
  "lp-mal-corrosive-radiation": {
    icon: "icons/item-augments/lp-mal-corrosive-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "radiation"
    ]
  },
  "lp-mal-corrosive-shock": {
    icon: "icons/item-augments/lp-mal-corrosive-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "shock"
    ]
  },
  "lp-mal-cryo-corrosive": {
    icon: "icons/item-augments/lp-mal-cryo-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "corrosive"
    ]
  },
  "lp-mal-cryo-fire": {
    icon: "icons/item-augments/lp-mal-cryo-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "cryo"
    ]
  },
  "lp-mal-cryo-radiation": {
    icon: "icons/item-augments/lp-mal-cryo-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "radiation"
    ]
  },
  "lp-mal-cryo-shock": {
    icon: "icons/item-augments/lp-mal-cryo-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "shock"
    ]
  },
  "lp-mal-fire-corrosive": {
    icon: "icons/item-augments/lp-mal-fire-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "corrosive"
    ]
  },
  "lp-mal-fire-cryo": {
    icon: "icons/item-augments/lp-mal-fire-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "cryo"
    ]
  },
  "lp-mal-fire-radiation": {
    icon: "icons/item-augments/lp-mal-fire-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "radiation"
    ]
  },
  "lp-mal-fire-shock": {
    icon: "icons/item-augments/lp-mal-fire-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "shock"
    ]
  },
  "lp-mal-radiation-corrosive": {
    icon: "icons/item-augments/lp-mal-radiation-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "radiation"
    ]
  },
  "lp-mal-radiation-cryo": {
    icon: "icons/item-augments/lp-mal-radiation-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "radiation"
    ]
  },
  "lp-mal-radiation-fire": {
    icon: "icons/item-augments/lp-mal-radiation-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "radiation"
    ]
  },
  "lp-mal-radiation-shock": {
    icon: "icons/item-augments/lp-mal-radiation-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "shock",
      "radiation"
    ]
  },
  "lp-mal-shock-corrosive": {
    icon: "icons/item-augments/lp-mal-shock-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "shock"
    ]
  },
  "lp-mal-shock-cryo": {
    icon: "icons/item-augments/lp-mal-shock-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "shock"
    ]
  },
  "lp-mal-shock-fire": {
    icon: "icons/item-augments/lp-mal-shock-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "shock"
    ]
  },
  "lp-mal-shock-radiation": {
    icon: "icons/item-augments/lp-mal-shock-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan-Licensed Underbarrel[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "maliwan",
    elements: [
      "shock",
      "radiation"
    ]
  },
  "lp-ted-combo": {
    icon: "icons/item-augments/lp-ted-combo.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-combo": {
    icon: "icons/item-augments/cond-ted-combo.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-combo-homing": {
    icon: "icons/item-augments/lp-ted-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-homing": {
    icon: "icons/item-augments/cond-ted-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-combo-javelin": {
    icon: "icons/item-augments/lp-ted-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-javelin": {
    icon: "icons/item-augments/cond-ted-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-combo-legs": {
    icon: "icons/item-augments/lp-ted-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-legs": {
    icon: "icons/item-augments/cond-ted-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-default": {
    icon: "icons/item-augments/lp-ted-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - Throws a [keyword id="secondary"]Gun[/keyword] on [keyword id="secondary"]Reload[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-default": {
    icon: "icons/item-augments/cond-ted-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - Throws a [keyword id="secondary"]Gun[/keyword] on [keyword id="secondary"]Reload[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-default-homing": {
    icon: "icons/item-augments/lp-ted-default-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] on nearby [keyword id="secondary"]enemies[/keyword] before [keyword id="secondary"]exploding[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-default-homing": {
    icon: "icons/item-augments/cond-ted-default-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] on nearby [keyword id="secondary"]enemies[/keyword] before [keyword id="secondary"]exploding[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-default-javelin": {
    icon: "icons/item-augments/lp-ted-default-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward at high speed',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-default-javelin": {
    icon: "icons/item-augments/cond-ted-default-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward at high speed',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-default-legs": {
    icon: "icons/item-augments/lp-ted-default-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and [keyword id="secondary"]runs[/keyword] toward [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-default-legs": {
    icon: "icons/item-augments/cond-ted-default-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and [keyword id="secondary"]runs[/keyword] toward [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-mirv": {
    icon: "icons/item-augments/lp-ted-mirv.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv": {
    icon: "icons/item-augments/cond-ted-mirv.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-mirv-homing": {
    icon: "icons/item-augments/lp-ted-mirv-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-homing": {
    icon: "icons/item-augments/cond-ted-mirv-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-mirv-javelin": {
    icon: "icons/item-augments/lp-ted-mirv-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-javelin": {
    icon: "icons/item-augments/cond-ted-mirv-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-mirv-legs": {
    icon: "icons/item-augments/lp-ted-mirv-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-legs": {
    icon: "icons/item-augments/cond-ted-mirv-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]MIRV Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-shooting": {
    icon: "icons/item-augments/lp-ted-shooting.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] until it is out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting": {
    icon: "icons/item-augments/cond-ted-shooting.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] until it is out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-shooting-homing": {
    icon: "icons/item-augments/lp-ted-shooting-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-homing": {
    icon: "icons/item-augments/cond-ted-shooting-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-shooting-javelin": {
    icon: "icons/item-augments/lp-ted-shooting-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-javelin": {
    icon: "icons/item-augments/cond-ted-shooting-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-ted-shooting-legs": {
    icon: "icons/item-augments/lp-ted-shooting-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-legs": {
    icon: "icons/item-augments/cond-ted-shooting-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore-Licensed Accessory[/keyword] - [keyword id="secondary"]Shooting Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "tediore"
  },
  "lp-tor-gyro": {
    icon: "icons/item-augments/lp-tor-gyro.webp",
    description: '[keyword id="torgue_icon"] [/keyword] [keyword id="secondary"]Torgue-Licensed Impact Magazine[/keyword] -  Fires [keyword id="secondary"]Gyrojets[/keyword] that [keyword id="secondary"]explode[/keyword] on impact',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "torgue"
  },
  "lp-tor-sticky": {
    icon: "icons/item-augments/lp-tor-sticky.webp",
    description: '[keyword id="torgue_icon"] [/keyword] [keyword id="secondary"]Torgue-Licensed Sticky Magazine[/keyword] - Fires [keyword id="secondary"]sticky Gyrojets[/keyword] that [keyword id="secondary"]explode[/keyword] on [keyword id="secondary"]Reload[/keyword], or when switching [keyword id="secondary"]Modes[/keyword] - which increases [keyword id="secondary"]explosion Damage[/keyword] by [keyword id="secondary"]{stickymulti}[/keyword] each',
    source: "gun",
    type: "licensed-part",
    manufacturerId: "torgue"
  },
  "manu-bor-mag": {
    icon: "icons/item-augments/manu-bor-mag.webp",
    description: '[keyword id="borg_icon"] [/keyword] [keyword id="secondary"]Ripper[/keyword] - This [keyword id="secondary"]Gun[/keyword] charges before [keyword id="secondary"]Full Auto[/keyword] firing',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "borg"
  },
  "manu-dad-ar": {
    icon: "icons/item-augments/manu-dad-ar.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Secondary fire[/keyword] consumes [keyword id="secondary"]Assault Rifle Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "manu-dad-ps": {
    icon: "icons/item-augments/manu-dad-ps.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Secondary fire[/keyword] consumes [keyword id="secondary"]Pistol Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "manu-dad-sg": {
    icon: "icons/item-augments/manu-dad-sg.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Secondary fire[/keyword] consumes [keyword id="secondary"]Shotgun Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "manu-dad-smg": {
    icon: "icons/item-augments/manu-dad-smg.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Secondary fire[/keyword] consumes [keyword id="secondary"]SMG Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "manu-dad-sr": {
    icon: "icons/item-augments/manu-dad-sr.webp",
    description: '[keyword id="daedalus_icon"] [/keyword] [keyword id="secondary"]Daedalus[/keyword] - [keyword id="secondary"]Secondary fire[/keyword] consumes [keyword id="secondary"]Sniper Rifle Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "daedalus"
  },
  "manu-jak-ricochet": {
    icon: "icons/item-augments/manu-jak-ricochet.webp",
    description: '[keyword id="jakobs_icon"] [/keyword] [keyword id="secondary"]Jakobs[/keyword] - [keyword id="secondary"]Critical Hits[/keyword] will [keyword id="secondary"]Ricochet Projectiles[/keyword] to nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "jakobs"
  },
  "manu-mal-corrosive-cryo": {
    icon: "icons/item-augments/manu-mal-corrosive-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "corrosive"
    ]
  },
  "manu-mal-corrosive-fire": {
    icon: "icons/item-augments/manu-mal-corrosive-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "corrosive"
    ]
  },
  "manu-mal-corrosive-radiation": {
    icon: "icons/item-augments/manu-mal-corrosive-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "radiation"
    ]
  },
  "manu-mal-corrosive-shock": {
    icon: "icons/item-augments/manu-mal-corrosive-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "corrosive",
      "shock"
    ]
  },
  "manu-mal-cryo-corrosive": {
    icon: "icons/item-augments/manu-mal-cryo-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "corrosive"
    ]
  },
  "manu-mal-cryo-fire": {
    icon: "icons/item-augments/manu-mal-cryo-fire.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "cryo"
    ]
  },
  "manu-mal-cryo-radiation": {
    icon: "icons/item-augments/manu-mal-cryo-radiation.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "radiation"
    ]
  },
  "manu-mal-cryo-shock": {
    icon: "icons/item-augments/manu-mal-cryo-shock.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "cryo",
      "shock"
    ]
  },
  "manu-mal-fire-corrosive": {
    icon: "icons/item-augments/manu-mal-fire-corrosive.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "corrosive"
    ]
  },
  "manu-mal-fire-cryo": {
    icon: "icons/item-augments/manu-mal-fire-cryo.webp",
    description: '[keyword id="maliwan_icon"] [/keyword] [keyword id="secondary"]Maliwan[/keyword] - Can switch between [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] and [keyword id="nowrap"] [/keyword][keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo[/keyword][keyword id="/nowrap"] [/keyword] Elements',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "maliwan",
    elements: [
      "fire",
      "cryo"
    ]
  },
  "manu-ord": {
    icon: "icons/item-augments/manu-ord.webp",
    description: '[keyword id="order_icon"] [/keyword] [keyword id="secondary"]Order[/keyword] - Can [keyword id="secondary"]charge up[/keyword] to fire [keyword id="secondary"]multiple rounds[/keyword] at once',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "order"
  },
  "manu-ted-combo": {
    icon: "icons/item-augments/manu-ted-combo.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-homing": {
    icon: "icons/item-augments/manu-ted-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-javelin": {
    icon: "icons/item-augments/manu-ted-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-legs": {
    icon: "icons/item-augments/manu-ted-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-replicator-default": {
    icon: "icons/item-augments/manu-ted-combo-replicator-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-replicating-default": {
    icon: "icons/item-augments/cond-ted-combo-replicating-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-replicator-homing": {
    icon: "icons/item-augments/manu-ted-combo-replicator-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-replicating-homing": {
    icon: "icons/item-augments/cond-ted-combo-replicating-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-replicator-javelin": {
    icon: "icons/item-augments/manu-ted-combo-replicator-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-replicating-javelin": {
    icon: "icons/item-augments/cond-ted-combo-replicating-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-combo-replicator-legs": {
    icon: "icons/item-augments/manu-ted-combo-replicator-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-combo-replicating-legs": {
    icon: "icons/item-augments/cond-ted-combo-replicating-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Combo Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv": {
    icon: "icons/item-augments/manu-ted-mirv.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-combo-default": {
    icon: "icons/item-augments/manu-ted-mirv-combo-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-combo-default": {
    icon: "icons/item-augments/cond-ted-mirv-combo-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-combo-homing": {
    icon: "icons/item-augments/manu-ted-mirv-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-combo-homing": {
    icon: "icons/item-augments/cond-ted-mirv-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-combo-javelin": {
    icon: "icons/item-augments/manu-ted-mirv-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-combo-javelin": {
    icon: "icons/item-augments/cond-ted-mirv-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-combo-legs": {
    icon: "icons/item-augments/manu-ted-mirv-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-combo-legs": {
    icon: "icons/item-augments/cond-ted-mirv-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-homing": {
    icon: "icons/item-augments/manu-ted-mirv-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-javelin": {
    icon: "icons/item-augments/manu-ted-mirv-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-legs": {
    icon: "icons/item-augments/manu-ted-mirv-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-replicator-default": {
    icon: "icons/item-augments/manu-ted-mirv-replicator-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-replicating-default": {
    icon: "icons/item-augments/cond-ted-mirv-replicating-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-replicator-homing": {
    icon: "icons/item-augments/manu-ted-mirv-replicator-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and spawn [keyword id="secondary"]4 Grenades[/keyword] on impact ',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-replicating-homing": {
    icon: "icons/item-augments/cond-ted-mirv-replicating-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and spawn [keyword id="secondary"]4 Grenades[/keyword] on impact ',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-replicator-javelin": {
    icon: "icons/item-augments/manu-ted-mirv-replicator-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward and spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-replicating-javelin": {
    icon: "icons/item-augments/cond-ted-mirv-replicating-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward and spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-mirv-replicator-legs": {
    icon: "icons/item-augments/manu-ted-mirv-replicator-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-mirv-replicating-legs": {
    icon: "icons/item-augments/cond-ted-mirv-replicating-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]MIRV Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that spawn [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-replicator": {
    icon: "icons/item-augments/manu-ted-replicator.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator[/keyword] - Throws additional [keyword id="secondary"]Gun[/keyword] on [keyword id="secondary"]Reload[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-replicating": {
    icon: "icons/item-augments/cond-ted-replicating.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator[/keyword] - Throws additional [keyword id="secondary"]Gun[/keyword] on [keyword id="secondary"]Reload[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-replicator-homing": {
    icon: "icons/item-augments/manu-ted-replicator-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-replicating-homing": {
    icon: "icons/item-augments/cond-ted-replicating-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-replicator-javelin": {
    icon: "icons/item-augments/manu-ted-replicator-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward at high speed',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-replicating-javelin": {
    icon: "icons/item-augments/cond-ted-replicating-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]propel[/keyword] forward at high speed',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-replicator-legs": {
    icon: "icons/item-augments/manu-ted-replicator-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that run toward enemies',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-replicating-legs": {
    icon: "icons/item-augments/cond-ted-replicating-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that run toward enemies',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting": {
    icon: "icons/item-augments/manu-ted-shooting.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-combo-default": {
    icon: "icons/item-augments/manu-ted-shooting-combo-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-combo-default": {
    icon: "icons/item-augments/cond-ted-shooting-combo-default.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-combo-homing": {
    icon: "icons/item-augments/manu-ted-shooting-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-combo-homing": {
    icon: "icons/item-augments/cond-ted-shooting-combo-homing.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-combo-javelin": {
    icon: "icons/item-augments/manu-ted-shooting-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-combo-javelin": {
    icon: "icons/item-augments/cond-ted-shooting-combo-javelin.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-combo-legs": {
    icon: "icons/item-augments/manu-ted-shooting-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-combo-legs": {
    icon: "icons/item-augments/cond-ted-shooting-combo-legs.webp",
    description: `[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Combo Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and can be shot to increase the [keyword id="secondary"]explosion's Damage[/keyword]`,
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-homing": {
    icon: "icons/item-augments/manu-ted-shooting-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword] and shoots [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-javelin": {
    icon: "icons/item-augments/manu-ted-shooting-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward and  shoots [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-legs": {
    icon: "icons/item-augments/manu-ted-shooting-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword] and shoot [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-mirv-default": {
    icon: "icons/item-augments/manu-ted-shooting-mirv-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-mirv-default": {
    icon: "icons/item-augments/cond-ted-shooting-mirv-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] shoots [keyword id="secondary"]enemies[/keyword] and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-mirv-homing": {
    icon: "icons/item-augments/manu-ted-shooting-mirv-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-mirv-homing": {
    icon: "icons/item-augments/cond-ted-shooting-mirv-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Homing[/keyword] - [keyword id="secondary"]Thrown Gun homes in[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-mirv-javelin": {
    icon: "icons/item-augments/manu-ted-shooting-mirv-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-mirv-javelin": {
    icon: "icons/item-augments/cond-ted-shooting-mirv-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Javelin[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] is [keyword id="secondary"]propelled[/keyword] forward, shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-mirv-legs": {
    icon: "icons/item-augments/manu-ted-shooting-mirv-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-mirv-legs": {
    icon: "icons/item-augments/cond-ted-shooting-mirv-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting MIRV Legs[/keyword] - [keyword id="secondary"]Thrown Gun[/keyword] has [keyword id="secondary"]legs[/keyword], shoots [keyword id="secondary"]enemies[/keyword], and spawns [keyword id="secondary"]4 Grenades[/keyword] on impact',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-replicator-default": {
    icon: "icons/item-augments/manu-ted-shooting-replicator-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-replicating-default": {
    icon: "icons/item-augments/cond-ted-shooting-replicating-default.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-replicator-homing": {
    icon: "icons/item-augments/manu-ted-shooting-replicator-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-replicating-homing": {
    icon: "icons/item-augments/cond-ted-shooting-replicating-homing.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Homing[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that [keyword id="secondary"]home in[/keyword] and shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-replicator-javelin": {
    icon: "icons/item-augments/manu-ted-shooting-replicator-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that are [keyword id="secondary"]propelled[/keyword] forward and shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-replicating-javelin": {
    icon: "icons/item-augments/cond-ted-shooting-replicating-javelin.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Javelin[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] that are [keyword id="secondary"]propelled[/keyword] forward and shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-ted-shooting-replicator-legs": {
    icon: "icons/item-augments/manu-ted-shooting-replicator-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "tediore"
  },
  "cond-ted-shooting-replicating-legs": {
    icon: "icons/item-augments/cond-ted-shooting-replicating-legs.webp",
    description: '[keyword id="tediore_icon"] [/keyword] [keyword id="secondary"]Tediore[/keyword] - [keyword id="secondary"]Shooting Replicator Legs[/keyword] - Throws [keyword id="secondary"]2 Guns[/keyword] with [keyword id="secondary"]legs[/keyword] that shoot [keyword id="secondary"]enemies[/keyword] until out of [keyword id="secondary"]Ammo[/keyword]',
    source: "gun",
    type: "generic",
    manufacturerId: "tediore"
  },
  "manu-tor-sticky": {
    icon: "icons/item-augments/manu-tor-sticky.webp",
    description: '[keyword id="torgue_icon"] [/keyword] [keyword id="secondary"]Torgue[/keyword] - Secondary fire shoots [keyword id="secondary"]sticky Gyrojets[/keyword] that [keyword id="secondary"]explode[/keyword] on [keyword id="secondary"]Reload[/keyword] or when switching [keyword id="secondary"]Modes[/keyword] - which increases [keyword id="secondary"]explosion Damage[/keyword] by [keyword id="secondary"]{stickymulti}[/keyword] each',
    source: "gun",
    type: "manufacturer-specific",
    manufacturerId: "torgue"
  },
  "repkit-aug-d-aoe-heal": {
    icon: "icons/item-augments/repkit-aug-d-aoe-heal.webp",
    description: `[keyword id="secondary"]Medic[/keyword] - On use, [keyword id="secondary"]Heals[/keyword] nearby [keyword id="secondary"]allies[/keyword] for [keyword id="secondary"]{mod}[/keyword] of the [keyword id="secondary"]Repkit's Healing[/keyword]`,
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-elemental-immunity-corrosive": {
    icon: "icons/item-augments/repkit-aug-d-elemental-immunity-corrosive.webp",
    description: '[keyword id="secondary"]Elemental Immunity[/keyword] - On use, grants [keyword id="secondary"]immunity[/keyword] to [keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "corrosive"
    ]
  },
  "repkit-aug-d-elemental-immunity-cryo": {
    icon: "icons/item-augments/repkit-aug-d-elemental-immunity-cryo.webp",
    description: '[keyword id="secondary"]Elemental Immunity[/keyword] - On use, grants [keyword id="secondary"]immunity[/keyword] to [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "cryo"
    ]
  },
  "repkit-aug-d-elemental-immunity-fire": {
    icon: "icons/item-augments/repkit-aug-d-elemental-immunity-fire.webp",
    description: '[keyword id="secondary"]Elemental Immunity[/keyword] - On use, grants [keyword id="secondary"]immunity[/keyword] to [keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "fire"
    ]
  },
  "repkit-aug-d-elemental-immunity-radiation": {
    icon: "icons/item-augments/repkit-aug-d-elemental-immunity-radiation.webp",
    description: '[keyword id="secondary"]Elemental Immunity[/keyword] - On use, grants [keyword id="secondary"]immunity[/keyword] to [keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "radiation"
    ]
  },
  "repkit-aug-d-elemental-immunity-shock": {
    icon: "icons/item-augments/repkit-aug-d-elemental-immunity-shock.webp",
    description: '[keyword id="secondary"]Elemental Immunity[/keyword] - On use, grants [keyword id="secondary"]immunity[/keyword] to [keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "shock"
    ]
  },
  "repkit-aug-d-elemental-resist-corrosive": {
    icon: "icons/item-augments/repkit-aug-d-elemental-resist-corrosive.webp",
    description: '[keyword id="secondary"]Elemental Resistance[/keyword] - On use, grants [keyword id="secondary"]{mod}[/keyword] [keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive Resistance[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "corrosive"
    ]
  },
  "repkit-aug-d-elemental-resist-cryo": {
    icon: "icons/item-augments/repkit-aug-d-elemental-resist-cryo.webp",
    description: '[keyword id="secondary"]Elemental Resistance[/keyword] - On use, grants [keyword id="secondary"]{mod}[/keyword] [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Resistance[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "cryo"
    ]
  },
  "repkit-aug-d-elemental-resist-fire": {
    icon: "icons/item-augments/repkit-aug-d-elemental-resist-fire.webp",
    description: '[keyword id="secondary"]Elemental Resistance[/keyword] - On use, grants [keyword id="secondary"]{mod}[/keyword] [keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary Resistance[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "fire"
    ]
  },
  "repkit-aug-d-elemental-resist-radiation": {
    icon: "icons/item-augments/repkit-aug-d-elemental-resist-radiation.webp",
    description: '[keyword id="secondary"]Elemental Resistance[/keyword] - On use, grants [keyword id="secondary"]{mod}[/keyword] [keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation Resistance[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "radiation"
    ]
  },
  "repkit-aug-d-elemental-resist-shock": {
    icon: "icons/item-augments/repkit-aug-d-elemental-resist-shock.webp",
    description: '[keyword id="secondary"]Elemental Resistance[/keyword] - On use, grants [keyword id="secondary"]{mod}[/keyword] [keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock Resistance[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive",
    elements: [
      "shock"
    ]
  },
  "repkit-aug-d-health-burst": {
    icon: "icons/item-augments/repkit-aug-d-health-burst.webp",
    description: `[keyword id="secondary"]Health Burst[/keyword] - On use, grants an [keyword id="secondary"]additional burst[/keyword] worth [keyword id="secondary"]{mod}[/keyword] of the [keyword id="secondary"]Repkit's[/keyword] initial [keyword id="secondary"]Healing[/keyword] after [keyword id="secondary"]{duration}s[/keyword]`,
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-increased-healing": {
    icon: "icons/item-augments/repkit-aug-d-increased-healing.webp",
    description: '[keyword id="secondary"]Overdose[/keyword] - On use, increases all [keyword id="secondary"]Healing[/keyword] received by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-lifesteal": {
    icon: "icons/item-augments/repkit-aug-d-lifesteal.webp",
    description: '[keyword id="secondary"]Leech[/keyword] - On use, grants [keyword id="secondary"] [/keyword]{mod}[keyword id="/secondary"] [/keyword] [keyword id="secondary"]Lifesteal[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-overshield": {
    icon: "icons/item-augments/repkit-aug-d-overshield.webp",
    description: `[keyword id="secondary"]Overshield[/keyword] - On use, rather than [keyword id="secondary"]Healing[/keyword], grants an [keyword id="secondary"]Overshield[/keyword] equal to the [keyword id="secondary"]Repkit's[/keyword] initial [keyword id="secondary"]Heal[/keyword] amount`,
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-shield-recharge": {
    icon: "icons/item-augments/repkit-aug-d-shield-recharge.webp",
    description: '[keyword id="secondary"]Power Cycle[/keyword] - On use, instantly starts [keyword id="secondary"]recharging[/keyword] equipped [keyword id="secondary"]Energy Shield[/keyword]',
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-d-turtle": {
    icon: "icons/item-augments/repkit-aug-d-turtle.webp",
    description: '[keyword id="secondary"]Tank[/keyword] - On use, reduces [keyword id="secondary"]Damage Taken[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "defensive"
  },
  "repkit-aug-o-amp": {
    icon: "icons/item-augments/repkit-aug-o-amp.webp",
    description: '[keyword id="secondary"]Amp[/keyword] - On use, grants increased [keyword id="secondary"]Damage[/keyword] of the next [keyword id="secondary"]shot[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-elemental-damage": {
    icon: "icons/item-augments/repkit-aug-o-elemental-damage.webp",
    description: '[keyword id="secondary"]Elemental Affinity[/keyword] - On use, grants increased [keyword id="secondary"]Elemental Damage Dealt[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-firerate": {
    icon: "icons/item-augments/repkit-aug-o-firerate.webp",
    description: '[keyword id="secondary"]Fire Rate[/keyword] - On use, grants increased [keyword id="secondary"]Fire Rate[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-melee-damage": {
    icon: "icons/item-augments/repkit-aug-o-melee-damage.webp",
    description: '[keyword id="secondary"]Hard Hitter[/keyword] - On use, grants increased [keyword id="secondary"]Melee Damage Dealt[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-nova-corrosive": {
    icon: "icons/item-augments/repkit-aug-o-nova-corrosive.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - On use, releases a [keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive Nova[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "corrosive"
    ]
  },
  "repkit-aug-o-nova-cryo": {
    icon: "icons/item-augments/repkit-aug-o-nova-cryo.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - On use, releases a [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Nova[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "cryo"
    ]
  },
  "repkit-aug-o-nova-fire": {
    icon: "icons/item-augments/repkit-aug-o-nova-fire.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - On use, releases a [keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary  Nova[/keyword] ',
    source: "repkit",
    type: "offensive",
    elements: [
      "fire"
    ]
  },
  "repkit-aug-o-nova-radiation": {
    icon: "icons/item-augments/repkit-aug-o-nova-radiation.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - On use, releases a [keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation Nova[/keyword] ',
    source: "repkit",
    type: "offensive",
    elements: [
      "radiation"
    ]
  },
  "repkit-aug-o-nova-shock": {
    icon: "icons/item-augments/repkit-aug-o-nova-shock.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - On use, releases a [keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock Nova[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "shock"
    ]
  },
  "repkit-aug-o-reloadspeed": {
    icon: "icons/item-augments/repkit-aug-o-reloadspeed.webp",
    description: '[keyword id="secondary"]Reload Speed[/keyword] - On use, grants increased [keyword id="secondary"]Reload Speed[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-splash-damage": {
    icon: "icons/item-augments/repkit-aug-o-splash-damage.webp",
    description: '[keyword id="secondary"]Splash Damage[/keyword] - On use, grants increased [keyword id="secondary"]Splash Damage Dealt[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "offensive"
  },
  "repkit-aug-o-splat-corrosive": {
    icon: "icons/item-augments/repkit-aug-o-splat-corrosive.webp",
    description: '[keyword id="secondary"]Splat[/keyword] - On use, spawns a [keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Corrosive Splat[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "corrosive"
    ]
  },
  "repkit-aug-o-splat-cryo": {
    icon: "icons/item-augments/repkit-aug-o-splat-cryo.webp",
    description: '[keyword id="secondary"]Splat[/keyword] - On use, spawns a [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Splat[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "cryo"
    ]
  },
  "repkit-aug-o-splat-fire": {
    icon: "icons/item-augments/repkit-aug-o-splat-fire.webp",
    description: '[keyword id="secondary"]Splat[/keyword] - On use, spawns a [keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary Splat[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "fire"
    ]
  },
  "repkit-aug-o-splat-radiation": {
    icon: "icons/item-augments/repkit-aug-o-splat-radiation.webp",
    description: '[keyword id="secondary"]Splat[/keyword] - On use, spawns a [keyword id="radiation_icon"] [/keyword] [keyword id="radiation"]Radiation Splat[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "radiation"
    ]
  },
  "repkit-aug-o-splat-shock": {
    icon: "icons/item-augments/repkit-aug-o-splat-shock.webp",
    description: '[keyword id="secondary"]Splat[/keyword] - On use, spawns a [keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock Splat[/keyword]',
    source: "repkit",
    type: "offensive",
    elements: [
      "shock"
    ]
  },
  "repkit-aug-u-actionskill-cdr": {
    icon: "icons/item-augments/repkit-aug-u-actionskill-cdr.webp",
    description: '[keyword id="secondary"]Accelerator[/keyword] - On use, grants increased  [keyword id="secondary"]Action Skill Cooldown Rate[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "utility"
  },
  "repkit-aug-u-alldmg": {
    icon: "icons/item-augments/repkit-aug-u-alldmg.webp",
    description: '[keyword id="secondary"]Enrage[/keyword] - On use, grants an increase to all [keyword id="secondary"]Damage Dealt[/keyword] by [keyword id="secondary"]{mod1}[/keyword], and all [keyword id="secondary"]Damage Taken[/keyword] by [keyword id="secondary"]{mod2}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "utility"
  },
  "repkit-aug-u-gadget-cdr": {
    icon: "icons/item-augments/repkit-aug-u-gadget-cdr.webp",
    description: '[keyword id="secondary"]Go Go Gadget[/keyword] - On use, grants increased [keyword id="secondary"]Ordnance Cooldown Rate[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "utility"
  },
  "repkit-aug-u-movespeed": {
    icon: "icons/item-augments/repkit-aug-u-movespeed.webp",
    description: '[keyword id="secondary"]Speed[/keyword] - On use, grants increased [keyword id="secondary"]Movement Speed[/keyword] by [keyword id="secondary"]{mod}[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "repkit",
    type: "utility"
  },
  "repkit-aug-u-repkit-cdr": {
    icon: "icons/item-augments/repkit-aug-u-repkit-cdr.webp",
    description: `[keyword id="secondary"]Repkit Cooling[/keyword] - The [keyword id="secondary"]Repkit's Cooldown Duration[/keyword] is reduced by [keyword id="secondary"]{mod}[/keyword]`,
    source: "repkit",
    type: "utility"
  },
  "repkit-aug-u-repkit-duration": {
    icon: "icons/item-augments/repkit-aug-u-repkit-duration.webp",
    description: `[keyword id="secondary"]Everlasting[/keyword] - The [keyword id="secondary"]Repkit's Healing Capacity[/keyword] and [keyword id="secondary"]Duration[/keyword] are increased by [keyword id="secondary"]{mod1}[/keyword]`,
    source: "repkit",
    type: "utility"
  },
  "repkit-charges": {
    icon: "icons/item-augments/repkit-charges.webp",
    description: '[keyword id="order_icon"] [/keyword] [keyword id="secondary"]Order[/keyword] - This Repkit has [keyword id="secondary"]{mod}[/keyword] Charges',
    source: "repkit",
    type: "utility",
    manufacturerId: "order"
  },
  "shieldaug-eng-amp": {
    icon: "icons/item-augments/shieldaug-eng-amp.webp",
    description: '[keyword id="secondary"]Amp[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are [keyword id="secondary"]full[/keyword], shots drain [keyword id="secondary"]{mod1}[/keyword] of those [keyword id="secondary"]Shields[/keyword] for [keyword id="secondary"]{mod2} Gun Damage[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-berserker": {
    icon: "icons/item-augments/shieldaug-eng-berserker.webp",
    description: '[keyword id="secondary"]Berserker[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are empty, grants [keyword id="secondary"]{mod1} Melee Damage[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-brimming": {
    icon: "icons/item-augments/shieldaug-eng-brimming.webp",
    description: '[keyword id="secondary"]Brimming[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are full, [keyword id="secondary"]regenerates {mod1} Health/s[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-fleeting": {
    icon: "icons/item-augments/shieldaug-eng-fleeting.webp",
    description: '[keyword id="secondary"]Fleeting[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are empty, grants [keyword id="secondary"]{mod1} Movement Speed[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-nova": {
    icon: "icons/item-augments/shieldaug-eng-nova.webp",
    description: '[keyword id="secondary"]Nova[/keyword] - When [keyword id="secondary"]Energy Shield[/keyword] breaks, triggers a [keyword id="secondary"]Nova[/keyword] that deals [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-recharge-delay": {
    icon: "icons/item-augments/shieldaug-eng-recharge-delay.webp",
    description: '[keyword id="secondary"]Recharge Delay[/keyword] - When equipped, grants [keyword id="secondary"]{mod1} Shield Recharge Delay[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-recharge-rate": {
    icon: "icons/item-augments/shieldaug-eng-recharge-rate.webp",
    description: '[keyword id="secondary"]Recharge Rate[/keyword] - When equipped, grants [keyword id="secondary"]{mod1} Shield Recharge Rate[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-shield-booster": {
    icon: "icons/item-augments/shieldaug-eng-shield-booster.webp",
    description: '[keyword id="secondary"]Shield Booster[/keyword] - When damaged, [keyword id="secondary"]{mod1}[/keyword] chance to spawn a [keyword id="secondary"]Shield Booster[/keyword] that [keyword id="secondary"]refills[/keyword] up to [keyword id="secondary"]{mod2}[/keyword] of [keyword id="secondary"]Shield Capacity[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-siphon": {
    icon: "icons/item-augments/shieldaug-eng-siphon.webp",
    description: '[keyword id="secondary"]Siphon[/keyword] - When dealing [keyword id="secondary"]Damage[/keyword], [keyword id="secondary"]{mod1}[/keyword] chance to grant [keyword id="secondary"]{mod2} Overshield[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-trigger-happy": {
    icon: "icons/item-augments/shieldaug-eng-trigger-happy.webp",
    description: '[keyword id="secondary"]Trigger Happy[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are empty, grants [keyword id="secondary"]{mod1} Fire Rate[/keyword] and [keyword id="secondary"]{mod2} Reload Speed[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-eng-vagabond": {
    icon: "icons/item-augments/shieldaug-eng-vagabond.webp",
    description: '[keyword id="secondary"]Vagabond[/keyword] - When [keyword id="secondary"]Energy Shields[/keyword] are full, grants [keyword id="secondary"]{mod1} Movement Speed[/keyword]',
    source: "shield",
    type: "energy-shield"
  },
  "shieldaug-ra-armor-segment": {
    icon: "icons/item-augments/shieldaug-ra-armor-segment.webp",
    description: '[keyword id="secondary"]Armor Segment[/keyword] - Grants [keyword id="secondary"]{mod1} Armor Segment(s)[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-armor-strength": {
    icon: "icons/item-augments/shieldaug-ra-armor-strength.webp",
    description: '[keyword id="secondary"]Armor Strength[/keyword] - When [keyword id="secondary"]Armor Shield[/keyword] is active, grants [keyword id="secondary"]{mod1} Damage Reduction[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-bladed": {
    icon: "icons/item-augments/shieldaug-ra-bladed.webp",
    description: '[keyword id="secondary"]Bladed[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] filled, grants [keyword id="secondary"]{mod1} Gun Damage[/keyword] for [keyword id="secondary"]{mod2}s[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-boxer": {
    icon: "icons/item-augments/shieldaug-ra-boxer.webp",
    description: '[keyword id="secondary"]Boxer[/keyword] - On [keyword id="secondary"]Melee Hit[/keyword], consumes an [keyword id="secondary"]Armor Segment[/keyword] to increase the [keyword id="secondary"]Damage Dealt[/keyword] by [keyword id="secondary"]{mod1}[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-flanking": {
    icon: "icons/item-augments/shieldaug-ra-flanking.webp",
    description: '[keyword id="secondary"]Flanking[/keyword] - Grants up to [keyword id="secondary"]{mod1} Movement Speed[/keyword], scaling with broken [keyword id="secondary"]Armor Segments[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-heavy-plating": {
    icon: "icons/item-augments/shieldaug-ra-heavy-plating.webp",
    description: '[keyword id="secondary"]Heavy Plating[/keyword] - Grants up to [keyword id="secondary"]{mod1} Damage Reduction[/keyword], scaling with broken [keyword id="secondary"]Armor Segments[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-knockback": {
    icon: "icons/item-augments/shieldaug-ra-knockback.webp",
    description: '[keyword id="secondary"]Knockback[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] break, [keyword id="secondary"]knocks back enemies[/keyword], and grants [keyword id="secondary"]{mod1} Movement Speed[/keyword] for [keyword id="secondary"]5s[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-mini-nova": {
    icon: "icons/item-augments/shieldaug-ra-mini-nova.webp",
    description: '[keyword id="secondary"]Mini Nova[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] break, triggers a [keyword id="secondary"]Nova[/keyword] that deals [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-missile-swarm": {
    icon: "icons/item-augments/shieldaug-ra-missile-swarm.webp",
    description: '[keyword id="secondary"]Missile Swarm[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] break, launches [keyword id="secondary"]{mod2} Missiles[/keyword], each dealing [keyword id="secondary"]{mod1} Damage[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-positive-reinforcement": {
    icon: "icons/item-augments/shieldaug-ra-positive-reinforcement.webp",
    description: '[keyword id="secondary"]Positive Reinforcement[/keyword] - On kill, [keyword id="secondary"]{mod1}[/keyword] Chance for [keyword id="secondary"]enemies[/keyword] to drop an [keyword id="secondary"]Armor Shard[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-reinforced": {
    icon: "icons/item-augments/shieldaug-ra-reinforced.webp",
    description: '[keyword id="secondary"]Reinforced[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] filled, grants [keyword id="secondary"]{mod1} Overshield[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-scavenger": {
    icon: "icons/item-augments/shieldaug-ra-scavenger.webp",
    description: `[keyword id="secondary"]Scavenger[/keyword] - On [keyword id="secondary"]Armor Segment[/keyword] filled, refills up to [keyword id="secondary"]{mod1}[/keyword] of current [keyword id="secondary"]Gun's Magazine[/keyword]`,
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-ra-spunky": {
    icon: "icons/item-augments/shieldaug-ra-spunky.webp",
    description: '[keyword id="secondary"]Spunky[/keyword] - Grants up to [keyword id="secondary"]{mod1} Damage Dealt[/keyword], scaling with broken [keyword id="secondary"]Armor Segments[/keyword]',
    source: "shield",
    type: "armor-shield"
  },
  "shieldaug-unv-absorb": {
    icon: "icons/item-augments/shieldaug-unv-absorb.webp",
    description: '[keyword id="secondary"]Absorb[/keyword] - When equipped, grants [keyword id="secondary"]{mod1}[/keyword] Chance to [keyword id="secondary"]absorb[/keyword] bullets, adding them to your [keyword id="secondary"]Ammo[/keyword] count instead',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-adaptive": {
    icon: "icons/item-augments/shieldaug-unv-adaptive.webp",
    description: '[keyword id="secondary"]Adaptive[/keyword] - When equipped, grants [keyword id="secondary"]{mod3} Maximum Health[/keyword].  When [keyword id="secondary"]Shield[/keyword] is active, grants [keyword id="secondary"]{mod1} Resistance[/keyword] to the last [keyword id="secondary"]Damage type[/keyword] received for [keyword id="secondary"]{mod2}s[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-capacity": {
    icon: "icons/item-augments/shieldaug-unv-capacity.webp",
    description: '[keyword id="secondary"]Capacity[/keyword] - When equipped, grants [keyword id="secondary"]{mod1} Shield Capacity[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-evasive": {
    icon: "icons/item-augments/shieldaug-unv-evasive.webp",
    description: '[keyword id="secondary"]Evasive[/keyword] - When damaging [keyword id="secondary"]enemies[/keyword], [keyword id="secondary"]{mod1}[/keyword] Chance to grant [keyword id="secondary"]{mod2} Movement Speed[/keyword] for [keyword id="secondary"]5s[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-health-booster": {
    icon: "icons/item-augments/shieldaug-unv-health-booster.webp",
    description: '[keyword id="secondary"]Health Booster[/keyword] - When damaged, [keyword id="secondary"]{mod1}[/keyword] Chance to spawn a [keyword id="secondary"]Health Booster[/keyword] that restores up to [keyword id="secondary"]{mod2} Health[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-healthy": {
    icon: "icons/item-augments/shieldaug-unv-healthy.webp",
    description: '[keyword id="secondary"]Healthy[/keyword] - When equipped, grants [keyword id="secondary"]{mod1} Maximum Health[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-mag-booster": {
    icon: "icons/item-augments/shieldaug-unv-mag-booster.webp",
    description: '[keyword id="secondary"]Magazine Booster[/keyword] - On kill, [keyword id="secondary"]{mod1}[/keyword] Chance to spawn a [keyword id="secondary"]Magazine Booster[/keyword] that instantly [keyword id="secondary"]refills[/keyword] your [keyword id="secondary"]Gun[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-overshield-booster": {
    icon: "icons/item-augments/shieldaug-unv-overshield-booster.webp",
    description: '[keyword id="secondary"]Overshield Booster[/keyword] - On kill, [keyword id="secondary"]{mod1}[/keyword] Chance to spawn an [keyword id="secondary"]Overshield Booster[/keyword] that grants [keyword id="secondary"]{mod2} Overshield[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-pinpoint": {
    icon: "icons/item-augments/shieldaug-unv-pinpoint.webp",
    description: '[keyword id="secondary"]Pinpoint[/keyword] - When [keyword id="secondary"]Shield[/keyword] is empty, grants [keyword id="secondary"]{mod1} Accuracy[/keyword], [keyword id="secondary"]{mod2} Gun Handling[/keyword], and [keyword id="secondary"]{mod3} Projectile Speed[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-power-booster": {
    icon: "icons/item-augments/shieldaug-unv-power-booster.webp",
    description: '[keyword id="secondary"]Power Booster[/keyword] - When damaged,  [keyword id="secondary"]{mod1}[/keyword] Chance to spawn a [keyword id="secondary"]Power Booster[/keyword] that grants [keyword id="secondary"]{mod2} Gun Damage[/keyword] for [keyword id="secondary"]5s[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-reflect": {
    icon: "icons/item-augments/shieldaug-unv-reflect.webp",
    description: '[keyword id="secondary"]Reflect[/keyword] - When [keyword id="secondary"]Shield[/keyword] is active, [keyword id="secondary"]{mod1}[/keyword] Chance to [keyword id="secondary"]reflect Projectiles[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-resistant": {
    icon: "icons/item-augments/shieldaug-unv-resistant.webp",
    description: '[keyword id="secondary"]Resistant[/keyword] - When [keyword id="secondary"]Shield[/keyword] is active, grants [keyword id="secondary"]{mod1} Resistance[/keyword] to [keyword id="secondary"]Elemental Damage[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-spike": {
    icon: "icons/item-augments/shieldaug-unv-spike.webp",
    description: '[keyword id="secondary"]Spike[/keyword] - When receiving [keyword id="secondary"]Melee Damage[/keyword] while [keyword id="secondary"]Shield[/keyword] is active, [keyword id="secondary"]{mod1} Damage[/keyword] is [keyword id="secondary"]reflected[/keyword] back to [keyword id="secondary"]enemies[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-sturdy": {
    icon: "icons/item-augments/shieldaug-unv-sturdy.webp",
    description: '[keyword id="secondary"]Sturdy[/keyword] - When damaging [keyword id="secondary"]enemies[/keyword], [keyword id="secondary"]{mod1}[/keyword] Chance to grant [keyword id="secondary"]{mod2} Damage Reduction[/keyword] for [keyword id="secondary"]5s[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-turtle": {
    icon: "icons/item-augments/shieldaug-unv-turtle.webp",
    description: '[keyword id="secondary"]Turtle[/keyword] - When equipped, grants [keyword id="secondary"]{mod1} Shield Capacity[/keyword] and [keyword id="secondary"]{mod2} Maximum Health[/keyword]',
    source: "shield",
    type: "universal"
  },
  "shieldaug-unv-utility": {
    icon: "icons/item-augments/shieldaug-unv-utility.webp",
    description: '[keyword id="secondary"]Utility[/keyword] - When [keyword id="secondary"]Shield[/keyword] is empty, grants [keyword id="secondary"]{mod1} Gun Handling[/keyword] and [keyword id="secondary"]{mod2} Movement Speed[/keyword]',
    source: "shield",
    type: "universal"
  },
  "ub-bor-sg-01": {
    icon: "icons/item-augments/ub-bor-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Lightning Beam[/keyword] - Fires a [keyword id="shock"]Beam[/keyword] that deals [keyword id="shock"]{damage} Shock Damage/s[/keyword] and can [keyword id="secondary"]chain[/keyword] to an additional [keyword id="secondary"]target[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sg-02": {
    icon: "icons/item-augments/ub-bor-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gauss Gun[/keyword] - Charge-fires a [keyword id="secondary"]Projectile[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sg-03": {
    icon: "icons/item-augments/ub-bor-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Fuel Rod Discharge[/keyword] - Fires a spent [keyword id="radiation"]Fuel Rod[/keyword] that [keyword id="secondary"]explodes[/keyword] after [keyword id="secondary"]3s[/keyword] and deals [keyword id="radiation"]{damage} Radiation Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sm-01": {
    icon: "icons/item-augments/ub-bor-sm-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shrapnel Cannon[/keyword] - Fires [keyword id="secondary"]shrapnel[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sm-02": {
    icon: "icons/item-augments/ub-bor-sm-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Ripper Rocket Launcher[/keyword] - Launches [keyword id="secondary"]bursts[/keyword] of [keyword id="secondary"]6 Rockets[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sm-03": {
    icon: "icons/item-augments/ub-bor-sm-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gas Trap[/keyword] - Fires a [keyword id="secondary"]Projectile[/keyword] that [keyword id="secondary"]explodes[/keyword], causing a [keyword id="secondary"]cloud[/keyword] of [keyword id="nowrap"] [/keyword][keyword id="corrosive_icon"] [/keyword] [keyword id="corrosive"]Noxious Gas[/keyword][keyword id="/nowrap"] [/keyword] that deals [keyword id="corrosive"]{damage} Corrosive Damage[/keyword] to [keyword id="secondary"]enemies[/keyword] over time',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sr-01": {
    icon: "icons/item-augments/ub-bor-sr-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gravity Trap[/keyword] - Fires a [keyword id="secondary"]Singularity[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword], and [keyword id="secondary"]pulls in[/keyword] nearby enemies',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sr-02": {
    icon: "icons/item-augments/ub-bor-sr-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Seeker Missiles[/keyword] - Fires [keyword id="secondary"]Missiles[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-bor-sr-03": {
    icon: "icons/item-augments/ub-bor-sr-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Target Marker[/keyword] - Fires a [keyword id="secondary"]Marker[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword], [keyword id="secondary"]Marking[/keyword] the enemy to receive an additional [keyword id="secondary"]{dmg_pct} Damage[/keyword] for [keyword id="secondary"]{duration}s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "borg"
  },
  "ub-dad-ar-01": {
    icon: "icons/item-augments/ub-dad-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Grenade Launcher[/keyword] - Launches a [keyword id="secondary"]Grenade[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-ar-02": {
    icon: "icons/item-augments/ub-dad-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword], dealing [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-dad-ar-03": {
    icon: "icons/item-augments/ub-dad-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Micro-Rocket POD[/keyword] - Fires a [keyword id="secondary"]Rocket[/keyword], dealing [keyword id="secondary"]{damage} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-ps-01": {
    icon: "icons/item-augments/ub-dad-ps-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Taser[/keyword] - Fires a [keyword id="shock"]Taser Dart[/keyword] that deals [keyword id="shock"]{damage} Damage/s[/keyword] to a nearby [keyword id="secondary"]enemy[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-ps-02": {
    icon: "icons/item-augments/ub-dad-ps-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Tactical Knife Launcher[/keyword] - Fires a [keyword id="secondary"]Knife[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-ps-03": {
    icon: "icons/item-augments/ub-dad-ps-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Demolition Charge[/keyword] - Fires [keyword id="secondary"]timed explosives[/keyword], each dealing [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-sg-01": {
    icon: "icons/item-augments/ub-dad-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Micro-Rocket POD[/keyword] - Fires a [keyword id="secondary"]Rocket[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-sg-02": {
    icon: "icons/item-augments/ub-dad-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gravity Harpoon[/keyword] - Fires a [keyword id="secondary"]Harpoon[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-dad-sg-03": {
    icon: "icons/item-augments/ub-dad-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Proxy Mine Launcher[/keyword] - Launches a [keyword id="secondary"]Mine[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-dad-sm-01": {
    icon: "icons/item-augments/ub-dad-sm-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Grenade Launcher[/keyword] - Launches a [keyword id="secondary"]Grenade[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-dad-sm-02": {
    icon: "icons/item-augments/ub-dad-sm-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-dad-sm-03": {
    icon: "icons/item-augments/ub-dad-sm-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Overcharge[/keyword] - Increases [keyword id="secondary"]Burst Count[/keyword] to [keyword id="secondary"]6[/keyword] and [keyword id="secondary"]Fire Rate[/keyword] to [keyword id="secondary"]{firerate}[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "daedalus"
  },
  "ub-jak-ar-01": {
    icon: "icons/item-augments/ub-jak-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Double Flintlocks[/keyword] - Fires twin [keyword id="secondary"]Musket Barrels[/keyword] that deal [keyword id="secondary"]{damage}x2 Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-ar-02": {
    icon: "icons/item-augments/ub-jak-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Hand Crank[/keyword] - Use a [keyword id="secondary"]hand crank[/keyword] to fire [keyword id="secondary"]Full Auto[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-ar-03": {
    icon: "icons/item-augments/ub-jak-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Underbarrel Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deal [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-ps-01": {
    icon: "icons/item-augments/ub-jak-ps-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Zip Rockets[/keyword] - Fires [keyword id="secondary"]Zip Rockets[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-ps-02": {
    icon: "icons/item-augments/ub-jak-ps-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Knife Launcher[/keyword] - Launches a [keyword id="secondary"]Knife[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-ps-03": {
    icon: "icons/item-augments/ub-jak-ps-03.webp",
    description: `[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Vial Launcher[/keyword] - Launches a [keyword id="corrosive"]Corrosive Vial[/keyword] that deals [keyword id="corrosive"]{damage} Corrosive Damage[/keyword] on impact and increases the [keyword id="secondary"]target's Damage Taken[/keyword] by [keyword id="secondary"]{dmgpct}[/keyword] for [keyword id="secondary"]6s[/keyword]`,
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sg-01": {
    icon: "icons/item-augments/ub-jak-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Knife Launcher[/keyword] - Fires a [keyword id="secondary"]Knife[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sg-02": {
    icon: "icons/item-augments/ub-jak-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gravity Harpoon[/keyword] - Fires a [keyword id="secondary"]Gravity Harpoon[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] and pulls in nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sg-03": {
    icon: "icons/item-augments/ub-jak-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Spread Launcher[/keyword] - Fires a spread of [keyword id="secondary"]Grenades[/keyword] that deal [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sr-01": {
    icon: "icons/item-augments/ub-jak-sr-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sr-02": {
    icon: "icons/item-augments/ub-jak-sr-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Big Rocket[/keyword] - Fires a large [keyword id="secondary"]Rocket[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-jak-sr-03": {
    icon: "icons/item-augments/ub-jak-sr-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Crank SMG[/keyword] - Crank-fires a [keyword id="secondary"]SMG[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "jakobs"
  },
  "ub-mal-sg-01": {
    icon: "icons/item-augments/ub-mal-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Energy Blast[/keyword] - Charge-fires a wide-angled [keyword id="secondary"]Blast[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sg-02": {
    icon: "icons/item-augments/ub-mal-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Energy Disc[/keyword] - Launches a [keyword id="secondary"]bouncing Energy Disc[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] per bounce',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sg-03": {
    icon: "icons/item-augments/ub-mal-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Beam Tosser[/keyword] - Launches a [keyword id="secondary"]Projectile[/keyword] that fires [keyword id="secondary"]3 Beams[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sm-01": {
    icon: "icons/item-augments/ub-mal-sm-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Laser Wire[/keyword] - Spawns a [keyword id="secondary"]Laser Wire[/keyword] that deals [keyword id="secondary"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sm-02": {
    icon: "icons/item-augments/ub-mal-sm-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Energy Discharge[/keyword] - Charge-fires a [keyword id="secondary"]Blast[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sm-03": {
    icon: "icons/item-augments/ub-mal-sm-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Railgun[/keyword] - Charge-fires a [keyword id="secondary"]piercing Railgun[/keyword] shot that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sr-01": {
    icon: "icons/item-augments/ub-mal-sr-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Singularity Grenade Launcher[/keyword] - Fires a [keyword id="secondary"]Singularity[/keyword] that deals [keyword id="secondary"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sr-02": {
    icon: "icons/item-augments/ub-mal-sr-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shock Field[/keyword] - On impact, creates a [keyword id="shock"]Shock Field[/keyword] that deals [keyword id="secondary"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-mal-sr-03": {
    icon: "icons/item-augments/ub-mal-sr-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Rocket Pod[/keyword] - Fires a [keyword id="secondary"]salvo[/keyword] of [keyword id="secondary"]Homing Rockets[/keyword] that deal [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "maliwan"
  },
  "ub-ord-ar-01": {
    icon: "icons/item-augments/ub-ord-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Seeker Missiles[/keyword] - [keyword id="secondary"]Charge[/keyword] to fire up to [keyword id="secondary"]4 Seeker Missiles[/keyword] each dealing [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-ar-02": {
    icon: "icons/item-augments/ub-ord-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Death Sphere[/keyword] - Launches a [keyword id="secondary"]Death Sphere[/keyword] that deals [keyword id="secondary"]{damage} Damage/s[/keyword] to nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-ar-03": {
    icon: "icons/item-augments/ub-ord-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Kill Drone[/keyword] - Launches a [keyword id="secondary"]Drone[/keyword] that fires at [keyword id="secondary"]enemies[/keyword] for [keyword id="secondary"]{damage} Damage[/keyword] per shot, before [keyword id="secondary"]exploding[/keyword] for [keyword id="secondary"]{explode} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-ps-01": {
    icon: "icons/item-augments/ub-ord-ps-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Energy Burst[/keyword] - Charge-fires an [keyword id="secondary"]Energy Burst[/keyword], that deals up to [keyword id="secondary"]{damage} Damage[/keyword] to nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-ps-02": {
    icon: "icons/item-augments/ub-ord-ps-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Gravity Well[/keyword] - Charge-fires a [keyword id="secondary"]Gravity Well[/keyword] that deals up to [keyword id="secondary"]{damage} Damage[/keyword] and pulls in nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-ps-03": {
    icon: "icons/item-augments/ub-ord-ps-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Micro-Rockets[/keyword] - Charge-fires up to [keyword id="secondary"]{ammo} Micro-Rockets[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-sr-01": {
    icon: "icons/item-augments/ub-ord-sr-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Ordonite Spike[/keyword] - Launches a [keyword id="secondary"]Spike[/keyword] that drains [keyword id="secondary"]power[/keyword] from nearby enemies before exploding for up to [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-sr-02": {
    icon: "icons/item-augments/ub-ord-sr-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Tether Snare[/keyword] - Fires a [keyword id="secondary"]Tether[/keyword] that creates [keyword id="secondary"]Beams[/keyword] between all other [keyword id="secondary"]Tethers[/keyword], dealing [keyword id="secondary"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ord-sr-03": {
    icon: "icons/item-augments/ub-ord-sr-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Railgun[/keyword] - Charge-fires dual [keyword id="secondary"]Railguns[/keyword] that deal [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "order"
  },
  "ub-ted-ar-01": {
    icon: "icons/item-augments/ub-ted-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Support Drone[/keyword] - Launches a [keyword id="secondary"]Support Drone[/keyword] that will [keyword id="secondary"]Heal {damage}/s[/keyword] and grants [keyword id="secondary"]+20% Damage, Movement Speed[/keyword] and [keyword id="secondary"]Reload Rate[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-ar-02": {
    icon: "icons/item-augments/ub-ted-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"] C.O.M.B.O.[/keyword] - Fires an [keyword id="secondary"]Orb[/keyword] that can be shot to deal [keyword id="secondary"]{damage} Damage[/keyword] to nearby [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-ar-03": {
    icon: "icons/item-augments/ub-ted-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-ps-01": {
    icon: "icons/item-augments/ub-ted-ps-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Attack Drone[/keyword] - Launches a [keyword id="secondary"]Drone[/keyword] that [keyword id="secondary"]homes in[/keyword] on a nearby [keyword id="secondary"]enemy[/keyword], exploding for [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-ps-02": {
    icon: "icons/item-augments/ub-ted-ps-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Zip Rockets[/keyword] - Launches [keyword id="secondary"]Zip Rockets[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-ted-ps-03": {
    icon: "icons/item-augments/ub-ted-ps-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Micro-Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-ted-sg-01": {
    icon: "icons/item-augments/ub-ted-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Digital Backup[/keyword] - Deploys a [keyword id="primary"] [/keyword]Tediore[keyword id="/primary"] [/keyword] [keyword id="secondary"]Assault Rifle[/keyword] with legs that fires at [keyword id="secondary"]enemies[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-sg-02": {
    icon: "icons/item-augments/ub-ted-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Proximity Mines[/keyword] - Fires [keyword id="secondary"]Proximity Mines[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-ted-sg-03": {
    icon: "icons/item-augments/ub-ted-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Deployable Barrier[/keyword] - Deploys a [keyword id="secondary"]Shield[/keyword] that [keyword id="secondary"]blocks[/keyword] incoming [keyword id="secondary"]Projectiles[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "tediore"
  },
  "ub-tor-ar-01": {
    icon: "icons/item-augments/ub-tor-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]MIRV Grenade Launcher[/keyword] - Launches a [keyword id="secondary"]MIRV Grenade[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-ar-02": {
    icon: "icons/item-augments/ub-tor-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Sticky Shotgun[/keyword] - Fires a [keyword id="secondary"]Sticky Shotgun[/keyword] that deal [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-ar-03": {
    icon: "icons/item-augments/ub-tor-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Airstrike[/keyword] - [keyword id="secondary"]Mark[/keyword] an area to call in an [keyword id="secondary"]Airstrike[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-ps-01": {
    icon: "icons/item-augments/ub-tor-ps-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Magnum Rockets[/keyword] - Fires a [keyword id="secondary"]Rocket[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-ps-02": {
    icon: "icons/item-augments/ub-tor-ps-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Exhaust Blast[/keyword] - Releases a [keyword id="secondary"]Blast[/keyword] on nearby [keyword id="secondary"]enemies[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-ps-03": {
    icon: "icons/item-augments/ub-tor-ps-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Turbine Cleaver[/keyword] - Fires a [keyword id="secondary"]piercing Cleaver[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-sg-01": {
    icon: "icons/item-augments/ub-tor-sg-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Seeker Missiles[/keyword] - Launches [keyword id="secondary"]Homing Missiles[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-sg-02": {
    icon: "icons/item-augments/ub-tor-sg-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Flame Blast[/keyword] - Fires an [keyword id="fire"]Incendiary Blast[/keyword] that deals [keyword id="fire"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-tor-sg-03": {
    icon: "icons/item-augments/ub-tor-sg-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Rolling Thunder Grenades[/keyword] - Fires [keyword id="secondary"]Grenades[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "torgue"
  },
  "ub-vla-ar-01": {
    icon: "icons/item-augments/ub-vla-ar-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Grenade Launcher[/keyword] - Launches a [keyword id="secondary"]Grenade[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-ar-02": {
    icon: "icons/item-augments/ub-vla-ar-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-ar-03": {
    icon: "icons/item-augments/ub-vla-ar-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Bipod[/keyword] - Enabling the [keyword id="secondary"]Bipod[/keyword] increases [keyword id="secondary"]Accuracy[/keyword] by [keyword id="secondary"]+75%[/keyword], but decreases [keyword id="secondary"]Movement Speed[/keyword] by [keyword id="secondary"]-50%[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-ar-03-acc": {
    icon: "icons/item-augments/ub-vla-ar-03-acc.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Motile Bipod[/keyword] - Enabling the [keyword id="secondary"]Bipod[/keyword] increases [keyword id="secondary"]Accuracy[/keyword] without decreasing [keyword id="secondary"]Movement Speed[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-ar-07": {
    icon: "icons/item-augments/ub-vla-ar-07.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Extra Barrel[/keyword] - Enables a [keyword id="secondary"]secondary Barrel[/keyword], increasing [keyword id="secondary"]Fire Rate[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sm-01": {
    icon: "icons/item-augments/ub-vla-sm-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Zip Rockets[/keyword] - Fires [keyword id="secondary"]Zip Rockets[/keyword] that deal [keyword id="secondary"]{damage} Damage[/keyword] each',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sm-02": {
    icon: "icons/item-augments/ub-vla-sm-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Taser[/keyword] - Fires a [keyword id="shock"]Taser[/keyword] that damages a nearby [keyword id="secondary"]enemy[/keyword] for [keyword id="shock"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sm-03": {
    icon: "icons/item-augments/ub-vla-sm-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Flamethrower[/keyword] - Fires a [keyword id="fire"]Flamethrower[/keyword] that deals [keyword id="fire"]{damage} Damage/s[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sm-07": {
    icon: "icons/item-augments/ub-vla-sm-07.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Extra Barrel[/keyword] - Enables a [keyword id="secondary"]Secondary Barrel[/keyword], increasing [keyword id="secondary"]Fire Rate[/keyword] by [keyword id="secondary"]{rate}[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sr-01": {
    icon: "icons/item-augments/ub-vla-sr-01.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Shotgun[/keyword] - Fires a [keyword id="secondary"]Shotgun[/keyword] that deals [keyword id="secondary"]{damage}x{projectiles} Damage[/keyword] per shot',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sr-02": {
    icon: "icons/item-augments/ub-vla-sr-02.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Big Rocket[/keyword] - Fires a [keyword id="secondary"]Rocket[/keyword] that deals [keyword id="secondary"]{damage} Damage[/keyword] on impact',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sr-03": {
    icon: "icons/item-augments/ub-vla-sr-03.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Bipod[/keyword] - Enabling the [keyword id="secondary"]Bipod[/keyword] increases [keyword id="secondary"]Accuracy[/keyword] by [keyword id="secondary"]+75%[/keyword], but decreases [keyword id="secondary"]Movement Speed[/keyword] by [keyword id="secondary"]-50%[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sr-03-acc": {
    icon: "icons/item-augments/ub-vla-sr-03-acc.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Motile Bipod[/keyword] - Enabling the [keyword id="secondary"]Bipod[/keyword] increases [keyword id="secondary"]Accuracy[/keyword] by [keyword id="secondary"]+75%[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  },
  "ub-vla-sr-07": {
    icon: "icons/item-augments/ub-vla-sr-07.webp",
    description: '[keyword id="primary"] [/keyword][Alt Fire][keyword id="/primary"] [/keyword] [keyword id="secondary"]Extra Barrel[/keyword] - Enables a [keyword id="secondary"]Third Barrel[/keyword], increasing [keyword id="secondary"]Fire Rate[/keyword]',
    source: "gun",
    type: "underbarrel",
    manufacturerId: "vladof"
  }
}, s = {
  "phase-phamiliar": {
    icon: "icons/action-skills/vex/SkilliconSiren_skill_PhaseFamiliar.webp",
    id: "phase-phamiliar",
    name: "Phase Phamiliar",
    description: `[keyword id="#b45f06"]Vex[/keyword] is joined by her [keyword id="#b45f06"]Minion[/keyword], [keyword id="#b45f06"]Trouble[/keyword]. When killed, [keyword id="#b45f06"]Trouble[/keyword] will [keyword id="#1c4587"]Respawn[/keyword] after a cooldown.

Press F to teleport [keyword id="#b45f06"]Trouble[/keyword], dealing [keyword id="#1c4587"]Damage[/keyword] in an area. [keyword id="#b45f06"]Trouble[/keyword] then transforms into a [keyword id="#1c4587"]Badass[/keyword], fully restoring [keyword id="#1c4587"]Health[/keyword] and gaining increased [keyword id="#1c4587"]Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

Activating [keyword id="#b45f06"]Phase Phamiliar[/keyword] will [keyword id="#1c4587"]Respawn[/keyword] [keyword id="#b45f06"]Trouble[/keyword] if currently dead.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Trouble Respawn Cooldown[/keyword]: 20 seconds
[keyword id="#1c4587"]Trouble Damage[/keyword]: 18
[keyword id="#1c4587"]Teleport Damage[/keyword]: 82
[keyword id="#1c4587"]Badass Damage Multiplier[/keyword]: +50%
[keyword id="#1c4587"]Cooldown[/keyword]: 45 seconds
[keyword id="#1c4587"]Duration[/keyword]: 20 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "red",
    type: "action-skill"
  },
  "grave-sustenance": {
    icon: "icons/skills/vex/ico_passive_siren_grave_sustain.webp",
    id: "grave-sustenance",
    name: "Grave Sustenance",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Restore a percentage of [keyword id="#1c4587"]missing Action Skill Duration[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Missing Action Skill Duration Restored[/keyword]: +5%, +25%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  enchantment: {
    icon: "icons/skills/vex/ico_passive_siren_phase_bullets.webp",
    id: "enchantment",
    name: "Enchantment",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains [keyword id="#434343"]Bonus Kinetic Damage[/keyword] with [keyword id="#1c4587"]Weapons[/keyword] while her [keyword id="#1c4587"]Action Skill[/keyword] is active.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Bonus Kinetic Damage[/keyword]: +7.5%, +37.5%',
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "blood-is-magic": {
    icon: "icons/skills/vex/ico_passive_siren_overpowered.webp",
    id: "blood-is-magic",
    name: "Blood Is Magic",
    description: '[keyword id="#b45f06"]Vex[/keyword] deals increased [keyword id="#1c4587"]Action Skill Damage[/keyword] the higher her [keyword id="#1c4587"]Health[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Action Skill Damage[/keyword]: +7% at full Health, +35%',
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "hasty-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_tempering.webp",
    id: "hasty-fiends",
    name: "Hasty Fiends",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Movement Speed[/keyword] and [keyword id="#1c4587"]Damage Reduction[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Movement Speed[/keyword]: +5%, +10%, +15%
[keyword id="#1c4587"]Damage Reduction[/keyword]: +7.69%, +14.29%, 20%`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "grave-command": {
    icon: "icons/skills/vex/ico_passive_siren_grave_command.webp",
    id: "grave-command",
    name: "Grave Command",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Restore a percentage of [keyword id="#b45f06"]Trouble's Command Skill Cooldown[/keyword] and [keyword id="#b45f06"]Respawn Cooldown[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Command Skill Cooldown[/keyword]: +8%, +24%
[keyword id="#1c4587"]Respawn Cooldown[/keyword]: +8%, +24%`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "violent-outburst": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_Outburst.webp",
    id: "violent-outburst",
    name: "Violent Outburst",
    description: `[keyword id="#b45f06"]Command Skill[/keyword]. Press and hold F to [keyword id="#b45f06"]Command Trouble[/keyword] to explode himself, dealing [keyword id="#1c4587"]Ordnance Damage[/keyword] to all nearby enemies and [keyword id="#1c4587"]restoring Health[/keyword] to [keyword id="#b45f06"]Vex[/keyword].

While [keyword id="#b45f06"]Phase Phamiliar[/keyword] is active, [keyword id="#1c4587"]sacrifice 33%[/keyword] of his [keyword id="#1c4587"]Maximum Health Capacity[/keyword] instead.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 185
[keyword id="#1c4587"]Health Restored[/keyword]: 75% of [keyword id="#1c4587"]Maximum Health Capacity[/keyword].`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  overprotective: {
    icon: "icons/skills/vex/ico_passive_siren_overprotective.webp",
    id: "overprotective",
    name: "Overprotective",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Overshield[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Overshield[/keyword]: +4%, +20%',
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "blink-strike": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_Blinkstrike.webp",
    id: "blink-strike",
    name: "Blink Strike",
    description: `[keyword id="#b45f06"]Command Skill[/keyword]. Press and hold F to [keyword id="#b45f06"]Command Trouble[/keyword] to [keyword id="#b45f06"]Blink Strike[/keyword] target enemy, dealing [keyword id="#1c4587"]Damage[/keyword].

[keyword id="#b45f06"]Blink Strike[/keyword] always [keyword id="#1c4587"]Critically Strikes[/keyword] enemies below [keyword id="#1c4587"]50% HP[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 86
[keyword id="#1c4587"]Cooldown[/keyword]: 25 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "red",
    type: "augment"
  },
  "yowl-and-bay": {
    icon: "icons/skills/vex/ico_passive_siren_ranger.webp",
    id: "yowl-and-bay",
    name: "Yowl and Bay",
    description: `[keyword id="#b45f06"]Vex's Minions[/keyword] gain increased [keyword id="#1c4587"]Maximum Health Capacity[/keyword].

[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Commanding Trouble[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Maximum Health Capacity[/keyword]: +8%, +40%
[keyword id="#1c4587"]Gun Damage[/keyword]: +5%, +25%
[keyword id="#1c4587"]Gun Damage Duration[/keyword]: 8 seconds`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  mourning: {
    icon: "icons/skills/vex/ico_passive_siren_phase_harvest.webp",
    id: "mourning",
    name: "Mourning",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Kill Skills[/keyword] gain increased [keyword id="#1c4587"]Effectiveness[/keyword].`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Kill Skill Effectiveness[/keyword]: +6%, +30%',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "claw-and-bang": {
    icon: "icons/skills/vex/ico_passive_siren_claw_and_bang.webp",
    id: "claw-and-bang",
    name: "Claw and Bang",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Melee Damage[/keyword] and [keyword id="#1c4587"]Ordnance Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Melee Damage[/keyword]: +6%, 30%
[keyword id="#1c4587"]Ordnance Damage[/keyword]: +6%, 30%`,
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  overheal: {
    icon: "icons/skills/vex/ico_passive_siren_overseer.webp",
    id: "overheal",
    name: "Overheal",
    description: 'While [keyword id="#b45f06"]Vex[/keyword] has [keyword id="#1c4587"]Overshield[/keyword], she and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Health Regeneration[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Health Regeneration[/keyword]: +1%, +3%',
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "vorpal-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_vorpal_fiends.webp",
    id: "vorpal-fiends",
    name: "Vorpal Fiends",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Critical Hit Damage[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Critical Hit Damage[/keyword]: +5%, +25%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "icy-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_cryo_attunement.webp",
    id: "icy-attunement",
    name: "Icy Attunement",
    description: `[keyword id="#b45f06"]Attune Kill Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is Attuned to [keyword id="#00a79a"]Cryo[/keyword], killing an enemy restores [keyword id="#1c4587"]Ammo[/keyword] and [keyword id="#1c4587"]Ordnance Cooldown[/keyword].

Effects persist for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Attunement[/keyword] is switched.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Ammo Restoration[/keyword]: +4%, +20%
[keyword id="#1c4587"]Ordnance Cooldown Restoration[/keyword]: +4%, +20%
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "hexus-nexus": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_ChargeMode.webp",
    id: "hexus-nexus",
    name: "Hexus Nexus",
    description: `[keyword id="#b45f06"]Trouble[/keyword] now [keyword id="#1c4587"]Taunts[/keyword] enemies, making them more likely to target him.

[keyword id="#b45f06"]Command Skill[/keyword]. Press and hold F to [keyword id="#b45f06"]Command Trouble[/keyword] to [keyword id="#1c4587"]charge[/keyword] a target enemy, dealing [keyword id="#1c4587"]Melee Damage[/keyword] in an area on impact and creating a [keyword id="#1c4587"]Singularity[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 129
[keyword id="#1c4587"]Cooldown[/keyword]: 45 seconds
[keyword id="#1c4587"]Singularity Duration[/keyword]: 10 seconds`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "blast-rites": {
    icon: "icons/skills/vex/ico_passive_siren_primed_and_ready.webp",
    id: "blast-rites",
    name: "Blast Rites",
    description: 'On [keyword id="#1c4587"]Ordnance Activation[/keyword], [keyword id="#b45f06"]Vex[/keyword] gains [keyword id="#1c4587"]Overshield[/keyword] and increased [keyword id="#1c4587"]Fire Rate[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Overshield[/keyword]: +5%, +25%
[keyword id="#1c4587"]Fire Rate[/keyword]: +5%, +25%
[keyword id="#1c4587"]Fire Rate Duration[/keyword]: 8 seconds`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  overspirited: {
    icon: "icons/skills/vex/ico_passive_siren_shard_remnant.webp",
    id: "overspirited",
    name: "Overspirited",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy with [keyword id="#1c4587"]Ordnance Damage[/keyword] or an [keyword id="#1c4587"]Action Skill[/keyword] will spawn an [keyword id="#b45f06"]Explosive Remnant[/keyword] that deals [keyword id="#00a79a"]Cryo Ordnance Damage[/keyword] to nearby enemies. [keyword id="#b45f06"]Explosive Remnant[/keyword] gains increased [keyword id="#1c4587"]Damage[/keyword] based on [keyword id="#1c4587"]Overkill Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: +15, +75
[keyword id="#1c4587"]Overkill Bonus Damage[/keyword]: +10%, +50%
[keyword id="#1c4587"]Cooldown[/keyword]: 6 seconds`,
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "blasted-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_explosive_fiends.webp",
    id: "blasted-fiends",
    name: "Blasted Fiends",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Ordnance Damage[/keyword].

A percentage of [keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Ordnance Damage[/keyword] increases [keyword id="#b45f06"]Minion Damage[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Ordnance Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Minion Damage[/keyword]: +10% of all increases to Ordnance Damage, +50%`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  corporeal: {
    icon: "icons/skills/vex/ico_passive_siren_hardened_spirit.webp",
    id: "corporeal",
    name: "Corporeal",
    description: `[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Maximum Overshield Capacity[/keyword] and [keyword id="#1c4587"]Overshield Duration[/keyword].

While [keyword id="#b45f06"]Vex[/keyword] has [keyword id="#1c4587"]Overshield[/keyword], she and her [keyword id="#b45f06"]Minion(s)[/keyword] gain increased [keyword id="#1c4587"]Damage Dealt[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Maximum Overshield Capacity[/keyword]: +12%, +36%
[keyword id="#1c4587"]Overshield Duration[/keyword]: +12%, +36%
[keyword id="#1c4587"]Damage Dealt[/keyword]: +6% while [keyword id="#b45f06"]Vex[/keyword] has [keyword id="#b45f06"]Overshield[/keyword], +18%`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  shiver: {
    icon: "icons/skills/vex/ico_passive_siren_cryonic_influence.webp",
    id: "shiver",
    name: "Shiver",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#00a79a"]Cryo Damage[/keyword] and [keyword id="#00a79a"]Cryo Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Cryo Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Cryo Status Effect Damage[/keyword]: +6%, +30%`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "trouble-bubble": {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_ArmoredBeast.webp",
    id: "trouble-bubble",
    name: "Trouble Bubble",
    description: `[keyword id="#b45f06"]Trouble[/keyword] now gains [keyword id="#1c4587"]Overshield[/keyword] whenever he deals [keyword id="#1c4587"]Damage[/keyword].

While [keyword id="#b45f06"]Phase Phamiliar[/keyword] is active, [keyword id="#b45f06"]Trouble[/keyword] gains an [keyword id="#1c4587"]Elemental Aura[/keyword], dealing [keyword id="#1c4587"]Ordnance Damage[/keyword] over time to nearby enemies,`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Overshield Gained[/keyword]: 80% of [keyword id="#1c4587"]Damage Dealt[/keyword]
[keyword id="#1c4587"]Aura Damage[/keyword]: 6 every 0.5 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "elemental-essence": {
    icon: "icons/skills/vex/ico_passive_siren_elemental_essence.webp",
    id: "elemental-essence",
    name: "Elemental Essence",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Elemental Damage[/keyword].

[keyword id="#1c4587"]Double[/keyword] this effect when an [keyword id="#1c4587"]Action Skill[/keyword] is active.`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Elemental Damage[/keyword]: +4%, +20%',
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "vorpal-fang": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_CriticalMode.webp",
    id: "vorpal-fang",
    name: "Vorpal Fang",
    description: `[keyword id="#b45f06"]Trouble[/keyword] gains a chance to [keyword id="#1c4587"]Critically Hit[/keyword] with all attacks,

[keyword id="#b45f06"]Command Skill[/keyword]. Press and hold F to [keyword id="#b45f06"]Command Trouble[/keyword] to summon [keyword id="#b45f06"]Phase Daggers[/keyword] overhead that fire at nearby enemies, dealing [keyword id="#1c4587"]Melee Damage[/keyword] on impact.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Trouble Crit Chance[/keyword]: +10%
[keyword id="#1c4587"]Phase Dagger Damage[/keyword]: 23
[keyword id="#1c4587"]Phase Daggers Max Stack[/keyword]: 5
[keyword id="#1c4587"]Phase Dagger Duration[/keyword]: 15 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 35 seconds`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "keen-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_keen_fiends.webp",
    id: "keen-fiends",
    name: "Keen Fiends",
    description: '[keyword id="#b45f06"]Minion Damage[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] against any part of enemies.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Minion Critical Hit Chance[/keyword]: +4%, +20%',
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "infernal-sum": {
    icon: "icons/skills/vex/ico_passive_siren_the_reaping.webp",
    id: "infernal-sum",
    name: "Infernal Sum",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] deals increased [keyword id="#1c4587"]Critical Hit Damage[/keyword] to enemies below [keyword id="#1c4587"]66.6% HP[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Critical Hit Damage[/keyword]: +8%, +40%',
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "sacrificial-essence": {
    icon: "icons/skills/vex/ico_passive_siren_sacrificial_essence.webp",
    id: "sacrificial-essence",
    name: "Sacrificial Essence",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Damage Dealt[/keyword], but [keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Damage Taken[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

Stacks are lost when [keyword id="#b45f06"]Vex[/keyword] [keyword id="#1c4587"]Dodges[/keyword] or enters [keyword id="#1c4587"]Fight For Your Life[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage Dealt[/keyword]: +1.5% per Stack, +7.5%
[keyword id="#1c4587"]Damage Taken[/keyword]: +3% per Stack
[keyword id="#1c4587"]Max Stacks[/keyword]: 10
[keyword id="#1c4587"]Stack Duration[/keyword]: 40 seconds`,
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  reawakening: {
    icon: "icons/skills/vex/ico_passive_siren_keen_preservation.webp",
    id: "reawakening",
    name: "Reawakening",
    description: 'Whenever [keyword id="#b45f06"]Vex[/keyword] or her [keyword id="#b45f06"]Minions[/keyword] [keyword id="#1c4587"]Critically Hit[/keyword], there is a chance to restore [keyword id="#1c4587"]Action Skill Cooldown[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Restoration Chance[/keyword]: +5%, +25%
[keyword id="#1c4587"]Action Skill Cooldown Restored[/keyword]: 4 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 2 seconds`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "tail-whip": {
    icon: "icons/skills/vex/ico_passive_siren_tail_whip.webp",
    id: "tail-whip",
    name: "Tail Whip",
    description: '[keyword id="#b45f06"]Trouble[/keyword] gains the ability to [keyword id="#1c4587"]Tail Whip[/keyword], dealing [keyword id="#1c4587"]Damage[/keyword] in an area over [keyword id="#1c4587"]2 hits[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage per Hit[/keyword]: 47
[keyword id="#1c4587"]Cooldown[/keyword]: 15 seconds`,
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "double-trouble": {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_DoubleTrouble.webp",
    id: "double-trouble",
    name: "Double Trouble",
    description: `[keyword id="#b45f06"]Trouble[/keyword] now gains a Chance to create an [keyword id="#b45f06"]Illusion[/keyword] near the enemy when dealing Damage. [keyword id="#1c4587"]Critical Hits[/keyword] have double that Chance.

[keyword id="#b45f06"]Illusions[/keyword] become [keyword id="#1c4587"]Badasses[/keyword] while [keyword id="#b45f06"]Phase Phamiliar[/keyword] is active.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Illusion Chance[/keyword]: 15%
[keyword id="#1c4587"]Illusion Duration[/keyword]: 5 seconds
[keyword id="#1c4587"]Illusion Damage Multiplier[/keyword]: 50%
[keyword id="#1c4587"]Illusion Damage Taken Multiplier[/keyword]: 300%
[keyword id="#1c4587"]Max Illusions[/keyword]: 3`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "shocking-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_shocking_attunement.webp",
    id: "shocking-attunement",
    name: "Shocking Attunement",
    description: `[keyword id="#b45f06"]Attune Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is [keyword id="#b45f06"]Attuned[/keyword] to [keyword id="#0000ff"]Shock[/keyword], [keyword id="#b45f06"]Vex[/keyword] gains [keyword id="#1c4587"]Movement Speed[/keyword] and [keyword id="#1c4587"]Gun Damage[/keyword] while moving.

Effects persist for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Attunement[/keyword] is switched.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Movement Speed[/keyword]: +4%, +20%
[keyword id="#1c4587"]Gun Damage[/keyword]: +6% while [keyword id="#1c4587"]Walking[/keyword], +30%
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "beast-mode": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_Beastmode.webp",
    id: "beast-mode",
    name: "Beast Mode",
    description: `[keyword id="#b45f06"]Command Skill[/keyword]. Press and hold F to [keyword id="#b45f06"]Command Trouble[/keyword] to enter [keyword id="#b45f06"]Beast Mode[/keyword], becoming [keyword id="#1c4587"]Immune to Damage[/keyword] and gaining increased [keyword id="#b45f06"]Minion Attack Speed[/keyword] and [keyword id="#1c4587"]Movement Speed[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#1c4587"]Kill Skill[/keyword]. Extend [keyword id="#b45f06"]Beast Mode's[/keyword] [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Trouble Attack Speed Multiplier[/keyword]: +30%
[keyword id="#1c4587"]Trouble Movement Speed Multiplier[/keyword]: +30%
[keyword id="#1c4587"]Cooldown[/keyword]: 25 seconds
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "grave-current": {
    icon: "icons/skills/vex/ico_passive_siren_grave_shock.webp",
    id: "grave-current",
    name: "Grave Current",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex's Minions[/keyword] gain [keyword id="#1c4587"]Bonus[/keyword] [keyword id="#0000ff"]Shock Damage[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Minion Bonus Shock Damage[/keyword]: +8% per stack, +40%
[keyword id="#1c4587"]Stack Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  deadwire: {
    icon: "icons/skills/vex/ico_passive_siren_undead_wire.webp",
    id: "deadwire",
    name: "Deadwire",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] deals [keyword id="#1c4587"]Gun Damage[/keyword], there is a chance to spawn a [keyword id="#b45f06"]Spark Remnant[/keyword] that will seek out a nearby enemy and explode, dealing [keyword id="#0000ff"]Shock Minion Damage[/keyword] to nearby enemies.',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Chance[/keyword]: 10%
[keyword id="#1c4587"]Damage[/keyword]: +80% of Gun Damage Dealt, +400%
[keyword id="#1c4587"]Cooldown[/keyword]: 2 seconds`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "grave-thirst": {
    icon: "icons/skills/vex/ico_passive_siren_gravy_drain.webp",
    id: "grave-thirst",
    name: "Grave Thirst",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Lifesteal[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Lifesteal[/keyword]: +1.5% per stack, +7.5%
[keyword id="#1c4587"]Minion Lifesteal[/keyword]: +3.0% per stack, +15%
[keyword id="#1c4587"]Stack Duration[/keyword]: 16 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  infusion: {
    icon: "icons/skills/vex/ico_passive_siren_runic_medicine.webp",
    id: "infusion",
    name: "Infusion",
    description: `When [keyword id="#b45f06"]Vex[/keyword] uses a [keyword id="#1c4587"]Repkit[/keyword], [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Bonus Damage[/keyword] with [keyword id="#1c4587"]Weapons[/keyword] and [keyword id="#1c4587"]Melee Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#1c4587"]Bonus Damage Elemental Type[/keyword] is based on [keyword id="#b45f06"]Vex's[/keyword] currently equipped [keyword id="#1c4587"]Weapon[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Bonus Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Duration[/keyword]: 15 seconds`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  stormblessed: {
    icon: "icons/skills/vex/ico_passive_siren_shocking_influence.webp",
    id: "stormblessed",
    name: "Stormblessed",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#0000ff"]Shock Damage[/keyword] and [keyword id="#0000ff"]Shock Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Shock Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Shock Status Effect Damage[/keyword]: +6%, +30%`,
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  unsealed: {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_ApexBeast.webp",
    id: "unsealed",
    name: "Unsealed",
    description: `[keyword id="#b45f06"]Trouble[/keyword] will now [keyword id="#1c4587"]Mark[/keyword] his current target, causing them to take increased [keyword id="#1c4587"]Gun Damage[/keyword] from [keyword id="#b45f06"]Vex[/keyword].

[keyword id="#1c4587"]Kill Skill[/keyword]. When a [keyword id="#1c4587"]Marked[/keyword] enemy is killed, [keyword id="#b45f06"]Trouble[/keyword] gains a Stack of [keyword id="#b45f06"]Unsealed[/keyword] for a [keyword id="#1c4587"]Duration[/keyword], granting [keyword id="#1c4587"]Health Regeneration[/keyword] and increased [keyword id="#1c4587"]Damage[/keyword]. While [keyword id="#b45f06"]Phase Phamiliar[/keyword] is active, [keyword id="#b45f06"]Unsealed[/keyword] effects are [keyword id="#1c4587"]doubled[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +50% against Marked Target
[keyword id="#1c4587"]Health Regeneration[/keyword]: +1% per Stack
[keyword id="#1c4587"]Damage Dealt[/keyword]: +10% per Stack
[keyword id="#1c4587"]Stack Duration[/keyword]: 12 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  incarnate: {
    icon: "icons/action-skills/vex/SkilliconSiren_skill_PhaseAvatar.webp",
    id: "incarnate",
    name: "Incarnate",
    description: `[keyword id="#b45f06"]Vex[/keyword] creates a [keyword id="#b45f06"]Phase Explosion[/keyword], dealing [keyword id="#1c4587"]Damage[/keyword] to nearby enemies and fully restoring her [keyword id="#1c4587"]Health[/keyword]. While active, [keyword id="#b45f06"]Vex[/keyword] can use [keyword id="#b45f06"]Eldritch Blast[/keyword] and gains increased [keyword id="#1c4587"]Movement Speed[/keyword].

[keyword id="#b45f06"]Eldritch Blast[/keyword]: Press F to fire an [keyword id="#b45f06"]Eldritch Blast[/keyword] from her [keyword id="#1c4587"]offhand[/keyword], dealing [keyword id="#1c4587"]Damage[/keyword] to nearby enemies on impact. Dealing [keyword id="#1c4587"]Gun Damage[/keyword] reduces [keyword id="#b45f06"]Eldritch Blast's[/keyword] [keyword id="#1c4587"]Cooldown[/keyword].

Press and hold F to end [keyword id="#b45f06"]Incarnate[/keyword] early, partially refunding [keyword id="#1c4587"]Cooldown[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Phase Explosion Damage[/keyword]: 151
[keyword id="#1c4587"]Eldritch Blast Damage[/keyword]: 100
[keyword id="#1c4587"]Eldritch Blast Cooldown Reduction[/keyword]: 4%
[keyword id="#1c4587"]Movement Speed[/keyword]: +25%
[keyword id="#1c4587"]Cooldown[/keyword]: 55 seconds
[keyword id="#1c4587"]Duration[/keyword]: 25 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "green",
    type: "action-skill"
  },
  "guns-and-needles": {
    icon: "icons/skills/vex/ico_passive_siren_guns_and_needles.webp",
    id: "guns-and-needles",
    name: "Guns and Needles",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Restore [keyword id="#1c4587"]Repkit Cooldown[/keyword] by a percentage.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Repkit Cooldown Restored[/keyword]: +7%, +21%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "volatile-essence": {
    icon: "icons/skills/vex/ico_passive_siren_volatile_essence.webp",
    id: "volatile-essence",
    name: "Volatile Essence",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Splash Damage[/keyword].

[keyword id="#1c4587"]Double[/keyword] this effect when an [keyword id="#1c4587"]Action Skill[/keyword] is active.`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Splash Damage[/keyword]: +4%, +20%',
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "leeching-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_draining_attunement.webp",
    id: "leeching-attunement",
    name: "Leeching Attunement",
    description: `[keyword id="#b45f06"]Attune Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is [keyword id="#b45f06"]Attuned[/keyword] to [keyword id="#434343"]Kinetic[/keyword], she gains increased [keyword id="#1c4587"]Lifesteal[/keyword] and [keyword id="#1c4587"]Reload Speed[/keyword].

Effects persist for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Attunement[/keyword] is switched.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Lifesteal[/keyword]: +2%, +10%
[keyword id="#1c4587"]Reload Speed[/keyword]: +6%, +12%, +17%, +21%, +25%
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "grave-sights": {
    icon: "icons/skills/vex/ico_passive_siren_grave_sights.webp",
    id: "grave-sights",
    name: "Grave Sights",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Critical Hit Damage[/keyword] and [keyword id="#1c4587"]Weapon Handling[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Critical Hit Damage[/keyword]: +3% per Stack, +15%
[keyword id="#1c4587"]Gun Handling[/keyword]: +3% per Stack, +15%
[keyword id="#1c4587"]Stack Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "fiendish-invigoration": {
    icon: "icons/skills/vex/ico_passive_siren_stimpack.webp",
    id: "fiendish-invigoration",
    name: "Fiendish Invigoration",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] uses a [keyword id="#1c4587"]Repkit[/keyword], she and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Movement Speed[/keyword] and [keyword id="#1c4587"]Fire Rate[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Movement Speed[/keyword]: +6%, +30%
[keyword id="#1c4587"]Fire Rate[/keyword]: +6%, +30%
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  geistwave: {
    icon: "icons/augments/vex/SkilliconSiren_Augment_Geistwave.webp",
    id: "geistwave",
    name: "Geistwave",
    description: `Instead of causing a [keyword id="#b45f06"]Phase Explosion[/keyword], [keyword id="#b45f06"]Vex[/keyword] launches a [keyword id="#b45f06"]Geistwave[/keyword], dealing [keyword id="#1c4587"]Ordnance Damage[/keyword] to enemies it passes through.

Each affected enemy takes increased [keyword id="#1c4587"]Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 98
[keyword id="#1c4587"]Enemy Damage Taken[/keyword]: 30%
[keyword id="#1c4587"]Enemy Damage Taken Duration[/keyword]: 15`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  bloodletter: {
    icon: "icons/skills/vex/ico_passive_siren_bleed.webp",
    id: "bloodletter",
    name: "Bloodletter",
    description: `[keyword id="#1c4587"]Gun[/keyword] and [keyword id="#1c4587"]Skill Critical Hits[/keyword] have a chance to apply [keyword id="#b45f06"]Bleed[/keyword], causing [keyword id="#434343"]Kinetic Status Effect Damage[/keyword] over time for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#b45f06"]Bleed[/keyword] is affected by [keyword id="#1c4587"]Status Effect Application Chance[/keyword] and is considered a [keyword id="#1c4587"]Status Effect[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Chance[/keyword]: 50%
[keyword id="#1c4587"]Damage[/keyword]: +6% of [keyword id="#1c4587"]Gun Damage[/keyword] per second, +30%
[keyword id="#1c4587"]Duration[/keyword]: 4 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "energy-vampire": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_EnergyVampire.webp",
    id: "energy-vampire",
    name: "Energy Vampire",
    description: `[keyword id="#b45f06"]Vex[/keyword] deals [keyword id="#1c4587"]Status Effect Damage[/keyword] to nearby enemies over time and gains [keyword id="#1c4587"]Overshield[/keyword] for each enemy affected.

[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy while [keyword id="#b45f06"]Incarnate[/keyword] is active will grant a Stack of [keyword id="#b45f06"]Energy Vampire[/keyword], increasing [keyword id="#1c4587"]Status Effect Damage[/keyword]. Stacks are lost when [keyword id="#b45f06"]Incarnate[/keyword] ends.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 5 every 0.5 seconds
[keyword id="#1c4587"]Overshield[/keyword]: 2 per enemy every 0.5 seconds
[keyword id="#1c4587"]Status Effect Damage[/keyword]: +10% per Stack
[keyword id="#1c4587"]Max Stacks[/keyword]: 5`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "green",
    type: "augment"
  },
  "grave-implements": {
    icon: "icons/skills/vex/ico_passive_siren_grave_weaponry.webp",
    id: "grave-implements",
    name: "Grave Implements",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Gun Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +4%, +20%
[keyword id="#1c4587"]Stack Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  channeling: {
    icon: "icons/skills/vex/ico_passive_siren_phase_sync.webp",
    id: "channeling",
    name: "Channeling",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Action Skill Duration[/keyword] and [keyword id="#b45f06"]Attunement Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Action Skill Duration[/keyword]: +5%, +25%
[keyword id="#1c4587"]Attunement Duration[/keyword]: +7%, +35%`,
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "material-components": {
    icon: "icons/skills/vex/ico_passive_siren_kinetic_influence.webp",
    id: "material-components",
    name: "Material Components",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#434343"]Kinetic Damage[/keyword] and [keyword id="#434343"]Kinetic Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Kinetic Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Kinetic Status Effect Damage[/keyword]: +4%, +20%`,
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "grave-power": {
    icon: "icons/skills/vex/ico_passive_siren_grave_power.webp",
    id: "grave-power",
    name: "Grave Power",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Kill Skills[/keyword] gain increased [keyword id="#1c4587"]Max Stacks[/keyword].`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Kill Skill Max Stacks[/keyword]: +1, +3',
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "target-prescience": {
    icon: "icons/skills/vex/ico_passive_siren_target_prescience.webp",
    id: "target-prescience",
    name: "Target Prescience",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Gun Damage[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] against any part of enemies.`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Gun Critical Hit Chance[/keyword]: +3%, +15%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "radiant-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_radiating_attunement.webp",
    id: "radiant-attunement",
    name: "Radiant Attunement",
    description: `[keyword id="#b45f06"]Attune Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is [keyword id="#b45f06"]Attuned[/keyword] to [keyword id="#b8b800" bold=true]Radiation[/keyword], she gains increased [keyword id="#1c4587"]Splash Damage[/keyword] and [keyword id="#1c4587"]Maximum Shield Capacity[/keyword].

Effects persist for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Attunement[/keyword] is switched.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Splash Damage[/keyword]: +6%, +30%
[keyword id="#1c4587"]Maximum Shield Capacity[/keyword]: +8%, +40%
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "iron-maiden": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_IronMaiden.webp",
    id: "iron-maiden",
    name: "Iron Maiden",
    description: `[keyword id="#b45f06"]Phase Explosion[/keyword] and [keyword id="#b45f06"]Eldritch Blast[/keyword] restore [keyword id="#1c4587"]Shield[/keyword] for each enemy hit and deal increased [keyword id="#1c4587"]Damage[/keyword] based on [keyword id="#b45f06"]Vex's[/keyword] current [keyword id="#1c4587"]Shield[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Shield Restoration[/keyword]: 25%
[keyword id="#1c4587"]Increased Damage[/keyword]: 15% of [keyword id="#1c4587"]Maximum Shield Capacity[/keyword].`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  conjunction: {
    icon: "icons/skills/vex/ico_passive_siren_duality.webp",
    id: "conjunction",
    name: "Conjunction",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] the more [keyword id="#1c4587"]Full[/keyword] her [keyword id="#1c4587"]Shield[/keyword] and gains [keyword id="#1c4587"]Damage Reduction[/keyword] the less [keyword id="#1c4587"]Full[/keyword] her [keyword id="#1c4587"]Health[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +6% at full [keyword id="#1c4587"]Shield[/keyword], +30%
[keyword id="#1c4587"]Damage Reduction[/keyword]: +16.7% at 1 [keyword id="#1c4587"]Health[/keyword], +28.6%, +37.5%, +44.4%, +50%`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  dreadlight: {
    icon: "icons/skills/vex/ico_passive_siren_radioactive_resonance.webp",
    id: "dreadlight",
    name: "Dreadlight",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] deals [keyword id="#1c4587"]Gun Damage[/keyword], there is a chance to spawn a [keyword id="#b8b800" bold=true]Radioactive Hazard[/keyword], dealing [keyword id="#b8b800" bold=true]Radiation Damage[/keyword] over time.',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Chance[/keyword]: 5%
[keyword id="#1c4587"]Hazard Damage[/keyword]: +6 per second, +30
[keyword id="#1c4587"]Hazard Duration[/keyword]: 8 seconds`,
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "restorative-tonic": {
    icon: "icons/skills/vex/ico_passive_siren_refreshing_waters.webp",
    id: "restorative-tonic",
    name: "Restorative Tonic",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] uses a [keyword id="#1c4587"]Repkit[/keyword], she gains [keyword id="#1c4587"]Shield Regeneration[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Shield Regeneration[/keyword]: +4%, +12%
[keyword id="#1c4587"]Duration[/keyword]: 4 seconds`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "full-moon": {
    icon: "icons/skills/vex/ico_passive_siren_spirit_cooling.webp",
    id: "full-moon",
    name: "Full Moon",
    description: 'Vex gains [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword] and [keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword] based on the fullness of her [keyword id="#1c4587"]Shield[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]: +6% at full Shield, +30%
[keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword]: +6% at full Shield, +30%`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  havoc: {
    icon: "icons/skills/vex/ico_passive_siren_radiating_influence.webp",
    id: "havoc",
    name: "Havoc",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#b8b800" bold=true]Radiation Damage[/keyword] and [keyword id="#b8b800" bold=true]Radiation Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Radiation Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Radiation Status Effect Damage[/keyword]: +6%, +30%`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  desecration: {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_Desecration.webp",
    id: "desecration",
    name: "Desecration",
    description: `[keyword id="#b45f06"]Phase Explosion[/keyword] and [keyword id="#b45f06"]Eldritch Blast[/keyword] create [keyword id="#1c4587"]Hazards[/keyword], dealing [keyword id="#1c4587"]Damage[/keyword] over time for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#b45f06"]Eldritch Blast[/keyword] is now [keyword id="#1c4587"]Homing[/keyword]. If it hits an [keyword id="#1c4587"]airborne[/keyword] enemy, it [keyword id="#1c4587"]bursts[/keyword] after a delay, dealing [keyword id="#1c4587"]Damage[/keyword] to nearby enemies,`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Hazard Damage[/keyword]: 15 per second
[keyword id="#1c4587"]Hazard Duration[/keyword]: 8 seconds
[keyword id="#1c4587"]Flying Burst Damage[/keyword]: 65`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "drink-full": {
    icon: "icons/skills/vex/ico_passive_siren_wombo_combo.webp",
    id: "drink-full",
    name: "Drink Full",
    description: `Whenever [keyword id="#b45f06"]Vex[/keyword] deals [keyword id="#1c4587"]Gun Damage[/keyword], gain a Stack of [keyword id="#b45f06"]Drink Full[/keyword], increasing [keyword id="#1c4587"]Fire Rate[/keyword].

Stacks of [keyword id="#b45f06"]Drink Full[/keyword] are lost if a new Stack has not been gained for a [keyword id="#1c4587"]Duration[/keyword]`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Fire Rate[/keyword]: +0.12% per stack, +0.6%
[keyword id="#1c4587"]Max Stacks[/keyword]: 50
[keyword id="#1c4587"]Duration[/keyword]: 5 seconds`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "witchy-trigger-finger": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_WitchyTriggerFinger.webp",
    id: "witchy-trigger-finger",
    name: "Witchy Trigger Finger",
    description: `Dealing [keyword id="#1c4587"]Damage[/keyword] with [keyword id="#b45f06"]Eldritch Blast[/keyword] or [keyword id="#b45f06"]Phase Explosion[/keyword] will [keyword id="#1c4587"]Reload[/keyword] [keyword id="#b45f06"]Vex's[/keyword] current [keyword id="#1c4587"]Gun[/keyword] and grant a stack of [keyword id="#b45f06"]Witchy Trigger Finger[/keyword], increasing [keyword id="#1c4587"]Gun Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

Stacks of [keyword id="#b45f06"]Witchy Trigger Finger[/keyword] persist even after [keyword id="#b45f06"]Incarnate[/keyword] ends.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +15% per stack
[keyword id="#1c4587"]Max Stacks[/keyword]: 3
[keyword id="#1c4587"]Stack Duration[/keyword]: 15`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "keen-mind": {
    icon: "icons/skills/vex/ico_passive_siren_keen_mind.webp",
    id: "keen-mind",
    name: "Keen Mind",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Skill Damage[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] against any part of enemies.`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Skill Critical Hit Chance[/keyword]: +3%, +15%',
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "phase-pocket": {
    icon: "icons/skills/vex/ico_passive_siren_phase_pocket.webp",
    id: "phase-pocket",
    name: "Phase Pocket",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Magazine Size[/keyword] and [keyword id="#1c4587"]Weapon Switch Speed[/keyword].

[keyword id="#1c4587"]Double[/keyword] this effect when an [keyword id="#1c4587"]Action Skill[/keyword] is active.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Magazine Size[/keyword]: +10%, +20%, +30%
[keyword id="#1c4587"]Weapon Switch Speed[/keyword]: +11%, +22%, +30%`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "mortal-terror": {
    icon: "icons/skills/vex/ico_passive_siren_extra.webp",
    id: "mortal-terror",
    name: "Mortal Terror",
    description: 'Chance to trigger [keyword id="#1c4587"]Kill Skills[/keyword] when [keyword id="#1c4587"]Critically Hitting[/keyword] enemies.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Chance[/keyword]: +1%, +5%',
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "grave-elements": {
    icon: "icons/skills/vex/ico_passive_siren_grave_elements.webp",
    id: "grave-elements",
    name: "Grave Elements",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Elemental Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Elemental Damage[/keyword]: +1% per stack, +5%
[keyword id="#1c4587"]Stack Duration[/keyword]: 20 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 10`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "vibe-check": {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_VibeCheck.webp",
    id: "vibe-check",
    name: "Vibe Check",
    description: `[keyword id="#b45f06"]Eldritch Blast[/keyword] is now a [keyword id="#1c4587"]Charge Skill (3)[/keyword].

[keyword id="#1c4587"]Activating[/keyword] [keyword id="#b45f06"]Eldritch Blast[/keyword] [keyword id="#1c4587"]consumes[/keyword] all [keyword id="#1c4587"]Charges[/keyword] to [keyword id="#1c4587"]Ricochet[/keyword] on hitting an enemy, for each [keyword id="#1c4587"]Charge consumed[/keyword].

[keyword id="#b45f06"]Eldritch Blast's[/keyword] [keyword id="#1c4587"]Cooldown[/keyword] reduction from [keyword id="#1c4587"]Gun Damage[/keyword] is [keyword id="#1c4587"]doubled[/keyword].`,
    character: "vex",
    attributes: "",
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "strike-me-down": {
    icon: "icons/skills/vex/ico_passive_siren_spirited_away.webp",
    id: "strike-me-down",
    name: "Strike Me Down",
    description: 'Whenever [keyword id="#b45f06"]Vex[/keyword] would enter [keyword id="#1c4587"]Fight For Your Life[/keyword], she immediately gets a [keyword id="#1c4587"]Second Wind[/keyword], becomes [keyword id="#0c343d"]Invisible[/keyword] for a [keyword id="#1c4587"]Duration[/keyword], and causes a [keyword id="#b45f06"]Phase Explosion[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Phase Explosion Damage[/keyword]: 151
[keyword id="#1c4587"]Invisibility Duration[/keyword]: 4 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 120 seconds`,
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  "grave-vitality": {
    icon: "icons/skills/vex/ico_passive_siren_grave_vitality.webp",
    id: "grave-vitality",
    name: "Grave Vitality",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Maximum Health Capacity[/keyword] and [keyword id="#1c4587"]Health Regeneration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Maximum Health Capacity[/keyword]: +1.0% per Stack, +5.0%
[keyword id="#1c4587"]Health Regeneration[/keyword]: +0.1% per Stack, +0.5%
[keyword id="#1c4587"]Stack Duration[/keyword]: 20 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 10`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "grave-harvest": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_PhaseReap.webp",
    id: "grave-harvest",
    name: "Grave Harvest",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy while [keyword id="#b45f06"]Incarnate[/keyword] is active will spawn a [keyword id="#b45f06"]Soul Orb[/keyword] that deals [keyword id="#1c4587"]Status Effect Damage[/keyword] over time to nearby enemies for a [keyword id="#1c4587"]Duration[/keyword].

Detonate a [keyword id="#b45f06"]Soul Orb[/keyword] at range by pressing E, dealing [keyword id="#1c4587"]Ordnance Damage[/keyword] to nearby enemies.

Picking up a [keyword id="#b45f06"]Soul Orb[/keyword] will restore [keyword id="#1c4587"]Health[/keyword] and [keyword id="#1c4587"]Action Skill Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Damage Over TIme[/keyword]: 4 every 0.5 seconds
[keyword id="#1c4587"]Detonation Damage[/keyword]: 97
[keyword id="#1c4587"]Health Restored[/keyword]: 35%
[keyword id="#1c4587"]Action Skill Duration Restored[/keyword]: 20%`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "ars-arcana": {
    icon: "icons/skills/vex/ico_passive_siren_enlightenment.webp",
    id: "ars-arcana",
    name: "Ars Arcana",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Skill Damage[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Skill Damage[/keyword]: +8%, +40%',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "a-deeper-grave": {
    icon: "icons/skills/vex/ico_passive_siren_phase_extension.webp",
    id: "a-deeper-grave",
    name: "A Deeper Grave",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Kill Skills[/keyword] gain increased [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Kill Skill Duration[/keyword]: +8%, +24%',
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "blood-shot": {
    icon: "icons/skills/vex/ico_passive_siren_bloodshot.webp",
    id: "blood-shot",
    name: "Blood Shot",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] uses a [keyword id="#1c4587"]Repair Kit[/keyword], her next [keyword id="#1c4587"]Gun Shot[/keyword] will become a [keyword id="#b45f06"]Blood Shot[/keyword], converting damage dealt into [keyword id="#434343"]Kinetic Damage[/keyword] and dealing [keyword id="#1c4587"]Bonus Damage[/keyword] based on her [keyword id="#1c4587"]current Health[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +10% of [keyword id="#1c4587"]Current Health[/keyword], +50%',
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "essence-leech": {
    icon: "icons/skills/vex/ico_passive_siren_draining_essence.webp",
    id: "essence-leech",
    name: "Essence Leech",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains [keyword id="#1c4587"]Lifesteal[/keyword].

[keyword id="#1c4587"]Double[/keyword] this effect when an [keyword id="#1c4587"]Action Skill[/keyword] is active.`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Lifesteal[/keyword]: +2%, +10%',
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  heartpiercer: {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_HeartPiercer.webp",
    id: "heartpiercer",
    name: "Heartpiercer",
    description: `[keyword id="#b45f06"]Eldritch Blast[/keyword] now [keyword id="#1c4587"]Sacrifices Health[/keyword] on use, but becomes a [keyword id="#1c4587"]Piercing wave[/keyword]. Enemies hit take [keyword id="#1c4587"]Damage[/keyword] and [keyword id="#1c4587"]Allies[/keyword] hit restore [keyword id="#1c4587"]Health[/keyword]. Gain [keyword id="#1c4587"]Bonus Damage[/keyword] and [keyword id="#1c4587"]Healing[/keyword] based on [keyword id="#1c4587"]Sacrificed Health[/keyword].

[keyword id="#b45f06"]Eldritch[/keyword] Blast no longer has a [keyword id="#1c4587"]Cooldown[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Health Sacrificed[/keyword]: 20% of [keyword id="#1c4587"]Current Health[/keyword]
[keyword id="#1c4587"]Damage/Health Restored[/keyword]: 78
[keyword id="#1c4587"]Bonus Damage/Healing[/keyword]: 150% of [keyword id="#1c4587"]Sacrificed Health[/keyword]`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "blood-is-power": {
    icon: "icons/skills/vex/ico_passive_siren_blood_is_power.webp",
    id: "blood-is-power",
    name: "Blood Is Power",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains [keyword id="#1c4587"]Bonus[/keyword] [keyword id="#434343"]Kinetic Damage[/keyword] with [keyword id="#1c4587"]Guns[/keyword] based on [keyword id="#1c4587"]Lifesteal[/keyword] when her [keyword id="#1c4587"]Health[/keyword] is [keyword id="#1c4587"]Full[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +100% of [keyword id="#1c4587"]Lifesteal[/keyword], +300%',
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 3,
    requirement: "essence-leech"
  },
  "dead-ringer": {
    icon: "icons/action-skills/vex/SkilliconSiren_skill_DeadRinger.webp",
    id: "dead-ringer",
    name: "Dead Ringer",
    description: `[keyword id="#1c4587"]Charge Skill (3)[/keyword]. [keyword id="#1c4587"]Spawn[/keyword] a [keyword id="#b45f06"]Phase Clone Minion[/keyword], choosing a [keyword id="#b45f06"]Specter[/keyword] or [keyword id="#b45f06"]Reaper[/keyword]. [keyword id="#b45f06"]Phase Clones[/keyword] lose an ever-increasing amount of [keyword id="#1c4587"]Health[/keyword] per second, and their [keyword id="#1c4587"]Damage Type[/keyword] matches [keyword id="#b45f06"]Vex's[/keyword] current [keyword id="#b45f06"]Attunement[/keyword] when spawned.

Press M1 to [keyword id="#1c4587"]Spawn[/keyword] a [keyword id="#b45f06"]Reaper[/keyword], that [keyword id="#1c4587"]Taunts[/keyword] enemies and deals [keyword id="#1c4587"]Melee Attack Damage[/keyword].

Press M2 to [keyword id="#1c4587"]Spawn[/keyword] a [keyword id="#b45f06"]Specter[/keyword], that deals [keyword id="#1c4587"]Gun Damage[/keyword] and cannot move.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Reaper Damage[/keyword]: 26
[keyword id="#1c4587"]Specter Damage[/keyword]: 8 per shot
[keyword id="#1c4587"]Health loss per second[/keyword]: 5%
[keyword id="#1c4587"]Health loss increase per second[/keyword]: +4%
[keyword id="#1c4587"]Cooldown[/keyword]: 35 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "blue",
    type: "action-skill"
  },
  "sanguine-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_sanguine_brood.webp",
    id: "sanguine-fiends",
    name: "Sanguine Fiends",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] regenerate [keyword id="#1c4587"]Health[/keyword] over time.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Health Regeneration[/keyword]: +4%, +20%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "idle-hands": {
    icon: "icons/skills/vex/ico_passive_siren_undead_hands.webp",
    id: "idle-hands",
    name: "Idle Hands",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Reload Speed[/keyword] based on the fullness of her [keyword id="#1c4587"]Health[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Reload Speed[/keyword]: +12% at full [keyword id="#1c4587"]Health[/keyword], +22%, +30%',
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "cold-iron": {
    icon: "icons/skills/vex/ico_passive_siren_spectral_weaponry.webp",
    id: "cold-iron",
    name: "Cold Iron",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Gun Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +3%, +15%
[keyword id="#1c4587"]Minion Gun Damage: [/keyword]+6%, +30%`,
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "fell-inscriptions": {
    icon: "icons/skills/vex/ico_passive_siren_demonic_inscriptions.webp",
    id: "fell-inscriptions",
    name: "Fell Inscriptions",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Melee Damage[/keyword], and [keyword id="#1c4587"]Maximum Health Capacity[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Melee Damage[/keyword]: +6%, +30%
[keyword id="#1c4587"]Maximum Health Capacity[/keyword]: +6%, +30%`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "grave-assault": {
    icon: "icons/skills/vex/ico_passive_siren_grave_assault.webp",
    id: "grave-assault",
    name: "Grave Assault",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Fire Rate[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Fire Rate[/keyword]: +1.5% per Stack, +7.5%
[keyword id="#1c4587"]Stack Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "ghast-blaster": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_GhastBlaster.webp",
    id: "ghast-blaster",
    name: "Ghast Blaster",
    description: `[keyword id="#b45f06"]Minion Skill[/keyword]. [keyword id="#b45f06"]Specters[/keyword] gain the ability to use [keyword id="#b45f06"]Ghast Blast[/keyword], dealing [keyword id="#1c4587"]Gun Damage[/keyword] to all nearby enemies on impact.

[keyword id="#b45f06"]Specters[/keyword] will use [keyword id="#b45f06"]Ghast Blast[/keyword] on spawn, and after they [keyword id="#1c4587"]Reload[/keyword].`,
    character: "vex",
    attributes: '[keyword id="#1c4587"]Damage[/keyword]: 78',
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "portents-of-suffering": {
    icon: "icons/skills/vex/ico_passive_siren_grim_suffering.webp",
    id: "portents-of-suffering",
    name: "Portents of Suffering",
    description: '[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain increased [keyword id="#1c4587"]Status Effect Damage[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Status Effect Damage[/keyword]: +7%, +35%',
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  coven: {
    icon: "icons/augments/vex/SkilliconSiren_Augment_MediumArmor.webp",
    id: "coven",
    name: "Coven",
    description: `[keyword id="#1c4587"]Spawning[/keyword] a [keyword id="#b45f06"]Reaper[/keyword] grants [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] [keyword id="#1c4587"]Health Regeneration[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#1c4587"]Spawning[/keyword] a [keyword id="#b45f06"]Specter[/keyword] grant [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] [keyword id="#1c4587"]Critical Hit Chance[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

Both effects can stack.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Health Regeneration[/keyword]: 10%
[keyword id="#1c4587"]Critical Hit Chance[/keyword]: 10%
[keyword id="#1c4587"]Duration[/keyword]: 20 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "blue",
    type: "augment"
  },
  "cursed-blade": {
    icon: "icons/skills/vex/ico_passive_siren_cursed_blade.webp",
    id: "cursed-blade",
    name: "Cursed Blade",
    description: `[keyword id="#b45f06"]Vex's[/keyword] [keyword id="#1c4587"]Melee Attacks[/keyword] apply [keyword id="#b45f06"]Cursed[/keyword] to hit enemies, making them take [keyword id="#434343"]Kinetic Status Effect Damage[/keyword] any time they take [keyword id="#1c4587"]Gun Damage[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Curse Damage[/keyword]: +1, +5
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "blood-sacrifice": {
    icon: "icons/skills/vex/ico_passive_siren_blood_sacrifice.webp",
    id: "blood-sacrifice",
    name: "Blood Sacrifice",
    description: `[keyword id="#1c4587"]Kill Skills[/keyword] are triggered whenever [keyword id="#b45f06"]Vex's Minion(s)[/keyword] die.`,
    character: "vex",
    attributes: "",
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "grave-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_grave_fiends.webp",
    id: "grave-fiends",
    name: "Grave Fiends",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] deal increased [keyword id="#1c4587"]Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage Dealt[/keyword]: +2.5%, +12.5%
[keyword id="#1c4587"]Max Stacks[/keyword]: 3
[keyword id="#1c4587"]Stack Duration[/keyword]: 16 seconds`,
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "grave-quickening": {
    icon: "icons/skills/vex/ico_passive_siren_grave_quickening.webp",
    id: "grave-quickening",
    name: "Grave Quickening",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]: +3.5% per Stack, +17.5%
[keyword id="#1c4587"]Stack Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 3`,
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "extra-cursed": {
    icon: "icons/skills/vex/ico_passive_siren_extra_cursed.webp",
    id: "extra-cursed",
    name: "Extra Cursed",
    description: '[keyword id="#b45f06"]Cursed[/keyword] [keyword id="#1c4587"]Damage[/keyword] now triggers on [keyword id="#b45f06"]Minion[/keyword] [keyword id="#1c4587"]Melee Damage[/keyword] and deals increased [keyword id="#1c4587"]Damage[/keyword] when its triggered by a [keyword id="#1c4587"]Critical Hit[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Curse Damage on Critical Hit[/keyword]: +200%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1,
    requirement: "cursed-blade"
  },
  "blight-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_corroding_attunement.webp",
    id: "blight-attunement",
    name: "Blight Attunement",
    description: `[keyword id="#b45f06"]Attune Kill Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is [keyword id="#b45f06"]Attuned[/keyword] to [keyword id="#34a853"]Corrosive[/keyword], killing an enemy creates a [keyword id="#b45f06"]Haunting Remnant Minion[/keyword] for a [keyword id="#1c4587"]Duration[/keyword] that seeks out nearby enemies, dealing [keyword id="#34a853"]Corrosive Status Effect Damage[/keyword] over time.

[keyword id="#1c4587"]Kill Skill[/keyword]. Restore [keyword id="#b45f06"]Haunting Remnant's[/keyword] [keyword id="#1c4587"]Duration[/keyword], if active.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage over time[/keyword]: +6 per second, +30
[keyword id="#1c4587"]Remnant Duration[/keyword]: 24 seconds
[keyword id="#1c4587"]Remnant Duration Restored on Kill[/keyword]: 4 seconds
[keyword id="#1c4587"]Remnant Cooldown[/keyword]: 60 seconds
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  wither: {
    icon: "icons/augments/vex/SkilliconSiren_Augment_Wither.webp",
    id: "wither",
    name: "Wither",
    description: `[keyword id="#b45f06"]Minion Skill[/keyword]. [keyword id="#b45f06"]Specters[/keyword] cast [keyword id="#b45f06"]Wither[/keyword] on an enemy when they [keyword id="#1c4587"]Spawn[/keyword], dealing [keyword id="#1c4587"]Status Effect Damage[/keyword] over time, and increasing [keyword id="#1c4587"]Damage[/keyword] taken for a [keyword id="#1c4587"]Duration[/keyword].

[keyword id="#1c4587"]Kill Skill[/keyword]. Killing a [keyword id="#b45f06"]Withered[/keyword] enemy allows [keyword id="#b45f06"]Specters[/keyword] to use [keyword id="#b45f06"]Wither[/keyword] again.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 7 per second
[keyword id="#1c4587"]Damage Taken[/keyword]: +30%
[keyword id="#1c4587"]Duration[/keyword]: 15 seconds`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "prismatic-ichor": {
    icon: "icons/skills/vex/ico_passive_siren_prismatic_poisons.webp",
    id: "prismatic-ichor",
    name: "Prismatic Ichor",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] or her [keyword id="#b45f06"]Minions[/keyword] apply a [keyword id="#1c4587"]Status Effect[/keyword], apply another random [keyword id="#1c4587"]Elemental Status Effect[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: +30% of the initial [keyword id="#1c4587"]Status Effect[/keyword], +150%
[keyword id="#1c4587"]Cooldown[/keyword]: 2 seconds`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "keen-suffering": {
    icon: "icons/skills/vex/ico_passive_siren_critical_suffering.webp",
    id: "keen-suffering",
    name: "Keen Suffering",
    description: '[keyword id="#1c4587"]Status Effect Damage[/keyword] gains a chance to [keyword id="#1c4587"]Critically Hit[/keyword].',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Critical Hit Chance[/keyword]: +4%, +20%',
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  ghasterbait: {
    icon: "icons/skills/vex/ico_passive_siren_spectral_escape.webp",
    id: "ghasterbait",
    name: "Ghasterbait",
    description: 'Whenever [keyword id="#b45f06"]Vex[/keyword] [keyword id="#1c4587"]Dodges[/keyword], she creates a [keyword id="#b45f06"]Specter[/keyword] nearby and becomes [keyword id="#1c4587"]Invisible[/keyword] for a [keyword id="#1c4587"]duration[/keyword], or her next [keyword id="#1c4587"]Gun Shot[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Invisibility Duration[/keyword]: 8 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 120 seconds, 100, 80`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "shot-to-go": {
    icon: "icons/skills/vex/ico_passive_siren_hot_to_go.webp",
    id: "shot-to-go",
    name: "Shot To Go!",
    description: 'When [keyword id="#b45f06"]Vex[/keyword] swaps her current [keyword id="#1c4587"]Gun[/keyword], her new [keyword id="#1c4587"]Gun[/keyword] has its [keyword id="#1c4587"]Ammo[/keyword] partially restored.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Ammo Refilled[/keyword]: +15%, +45%',
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  necrosis: {
    icon: "icons/skills/vex/ico_passive_siren_corroding_influence.webp",
    id: "necrosis",
    name: "Necrosis",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#34a853"]Corrosive Damage[/keyword] and [keyword id="#34a853"]Corrosive Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Corrosive Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Corrosive Status Effect Damage[/keyword]: +6%, +30%`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  heirloom: {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_Heirloom.webp",
    id: "heirloom",
    name: "Heirloom",
    description: `[keyword id="#b45f06"]Specters[/keyword] gain a [keyword id="#1c4587"]copy[/keyword] of [keyword id="#b45f06"]Vex's[/keyword] currently equipped [keyword id="#1c4587"]Gun[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

Only one [keyword id="#b45f06"]Specter[/keyword] can have a [keyword id="#1c4587"]copied Gun[/keyword] at a time, and spawning a new [keyword id="#b45f06"]Specter[/keyword] will remove the [keyword id="#1c4587"]copied Gun[/keyword] from the previous [keyword id="#b45f06"]Specter[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Copied Gun Damage[/keyword]: 100%
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "burning-attunement": {
    icon: "icons/skills/vex/ico_passive_siren_fiery_attunement.webp",
    id: "burning-attunement",
    name: "Burning Attunement",
    description: `[keyword id="#b45f06"]Attune Skill[/keyword]. While [keyword id="#b45f06"]Vex[/keyword] is [keyword id="#b45f06"]Attuned[/keyword] to [keyword id="#ea4335"]Incendiary[/keyword], [keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#b45f06"]Minions[/keyword] gain [keyword id="#1c4587"]Critical Hit[/keyword] Damage and [keyword id="#1c4587"]Status Effect Application Chance[/keyword].

Effects persist for a [keyword id="#1c4587"]Duration[/keyword] after [keyword id="#b45f06"]Attunement[/keyword] is switched.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Critical Hit Damage[/keyword]: +6%, +30%
[keyword id="#1c4587"]Status Effect Application Chance[/keyword]: +7%, +35%
[keyword id="#1c4587"]Attunement Duration[/keyword]: 6 seconds`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "hellish-harvest": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_HellishHarvest.webp",
    id: "hellish-harvest",
    name: "Hellish Harvest",
    description: `[keyword id="#b45f06"]Minion Skill[/keyword]. [keyword id="#b45f06"]Reapers[/keyword] gain the ability to use [keyword id="#b45f06"]Hellish Harvest[/keyword], dealing [keyword id="#1c4587"]Melee Damage[/keyword] 3 times in a large area around themselves and [keyword id="#1c4587"]regenerate Health[/keyword] for each enemy hit.

[keyword id="#b45f06"]Reapers[/keyword] will use [keyword id="#b45f06"]Hellish Harvest[/keyword] on spawn, and every [keyword id="#1c4587"]third time[/keyword] they [keyword id="#1c4587"]Melee Attack[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 32 per hit
[keyword id="#1c4587"]Health Regeneration[/keyword]: 15% of [keyword id="#1c4587"]Maximum Health[/keyword] per hit`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  recurrence: {
    icon: "icons/skills/vex/ico_passive_siren_tameshigiri.webp",
    id: "recurrence",
    name: "Recurrence",
    description: `Whenever [keyword id="#b45f06"]Vex[/keyword] deals [keyword id="#1c4587"]Gun Damage[/keyword] or [keyword id="#1c4587"]Melee Damage[/keyword], gain a Stack of [keyword id="#b45f06"]Recurrence[/keyword] which increases her and her [keyword id="#b45f06"]Minions'[/keyword] [keyword id="#1c4587"]Gun Damage[/keyword] and [keyword id="#1c4587"]Melee Damage[/keyword].

Stacks of [keyword id="#b45f06"]Recurrence[/keyword] are lost if a new Stack has not been gained for a [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Gun Damage Damage[/keyword]: +0.16% per Stack, +0.80%
[keyword id="#1c4587"]Melee Damage[/keyword]: +0.16% per Stack, +0.80%
[keyword id="#1c4587"]Max Stacks[/keyword]: 50
[keyword id="#1c4587"]Duration[/keyword]: 5 seconds`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  reverburnations: {
    icon: "icons/skills/vex/ico_passive_siren_reverburnations.webp",
    id: "reverburnations",
    name: "Reverburnations",
    description: '[keyword id="#1c4587"]Melee Damage[/keyword] dealt by [keyword id="#b45f06"]Vex[/keyword] or her [keyword id="#b45f06"]Minions[/keyword] have a chance to deal [keyword id="#ea4335"]Incendiary Melee Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Chance[/keyword]: 50%
[keyword id="#1c4587"]Damage Dealt[/keyword]: +30% of initial [keyword id="#1c4587"]Damage Dealt[/keyword], +150%`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  haruspex: {
    icon: "icons/skills/vex/ico_passive_siren_phase_dagger.webp",
    id: "haruspex",
    name: "Haruspex",
    description: `[keyword id="#1c4587"]Melee Override[/keyword]. [keyword id="#b45f06"]Vex[/keyword] now throws a [keyword id="#b45f06"]Phase Dagger[/keyword] from her [keyword id="#1c4587"]offhand[/keyword] that deals [keyword id="#1c4587"]Melee Damage[/keyword] to enemies hit. [keyword id="#b45f06"]Phase Daggers[/keyword] can [keyword id="#1c4587"]Critically Hit[/keyword].

[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Phase Dagger's[/keyword] [keyword id="#1c4587"]Cooldown[/keyword] is [keyword id="#1c4587"]reset[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: +18, +90
[keyword id="#1c4587"]Cooldown[/keyword]: 18 seconds`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "burnt-offering": {
    icon: "icons/skills/vex/ico_passive_siren_incendiary_influence.webp",
    id: "burnt-offering",
    name: "Burnt Offering",
    description: '[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#ea4335"]Incendiary Damage[/keyword] and [keyword id="#ea4335"]Incendiary Status Effect Damage[/keyword].',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Incendiary Damage[/keyword]: +8%, +40%
[keyword id="#1c4587"]Incendiary Status Effect Damage[/keyword]: +6%, +30%`,
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "grim-reaper": {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_Reaper.webp",
    id: "grim-reaper",
    name: "Grim Reaper",
    description: `Press and hold F to spawn a [keyword id="#b45f06"]Grim Reaper[/keyword] that drains nearby enemies, dealing [keyword id="#1c4587"]Status Effect Damage[/keyword] over time and [keyword id="#1c4587"]restoring Health[/keyword] for each drained enemy.

When an enemy dies while being drained, there is a [keyword id="#1c4587"]chance[/keyword] a new [keyword id="#b45f06"]Reaper[/keyword] will be spawned.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 7 per second
[keyword id="#1c4587"]Health Restored[/keyword]: +1% per second
[keyword id="#1c4587"]Chance to spawn Reaper[/keyword]: 33%
[keyword id="#1c4587"]Cooldown[/keyword]: 120 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  pincushion: {
    icon: "icons/skills/vex/ico_passive_siren_volley.webp",
    id: "pincushion",
    name: "Pincushion",
    description: `[keyword id="#b45f06"]Haruspex[/keyword] now throws [keyword id="#b45f06"]5 Phase Daggers[/keyword] from [keyword id="#1c4587"]both hands[/keyword] in a [keyword id="#1c4587"]fan pattern[/keyword].

Killing an enemy now [keyword id="#1c4587"]only refunds[/keyword] 33% of [keyword id="#b45f06"]Phase Dagger's[/keyword] [keyword id="#1c4587"]Cooldown[/keyword].`,
    character: "vex",
    attributes: "",
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1,
    requirement: "haruspex"
  },
  "prismatic-weaponry": {
    icon: "icons/skills/vex/ico_passive_siren_prismatic_armaments.webp",
    id: "prismatic-weaponry",
    name: "Prismatic Weaponry",
    description: `[keyword id="#b45f06"]Vex[/keyword] and her [keyword id="#e69138"]Specters[/keyword] deal [keyword id="#1c4587"]Bonus Damage[/keyword] with [keyword id="#1c4587"]Gun Critical Hits[/keyword].

[keyword id="#1c4587"]Bonus Damage[/keyword] is a random [keyword id="#1c4587"]Elemental Type[/keyword] that changes on [keyword id="#1c4587"]Reload[/keyword], and is increased for each active [keyword id="#b45f06"]Attunement[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Bonus Damage[/keyword]: +6%, +30%
[keyword id="#1c4587"]Bonus Damage Multiplier[/keyword]: 50% per active [keyword id="#b45f06"]Attunement[/keyword]`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "banshees-wail": {
    icon: "icons/augments/vex/SkilliconSiren_Augment_BansheeWail.webp",
    id: "banshees-wail",
    name: "Banshee's Wail",
    description: `[keyword id="#b45f06"]Minion Skill[/keyword]. [keyword id="#b45f06"]Reapers[/keyword] can now use [keyword id="#b45f06"]Banshee's Wail[/keyword] periodically, dealing [keyword id="#1c4587"]Damage[/keyword] to nearby enemies and granting [keyword id="#1c4587"]Overshield[/keyword] to nearby [keyword id="#1c4587"]Allies[/keyword]. Damage increases apply to [keyword id="#1c4587"]Overshield[/keyword] granted [keyword id="#1c4587"]Allies[/keyword].

Damaged enemies deal reduced [keyword id="#1c4587"]Damage[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 52
[keyword id="#1c4587"]Overshield[/keyword]: 52
[keyword id="#1c4587"]Enemy Damage Dealt[/keyword]: -33%
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 20 seconds`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "obedient-fiends": {
    icon: "icons/skills/vex/ico_passive_siren_commanding_influence.webp",
    id: "obedient-fiends",
    name: "Obedient Fiends",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains increased [keyword id="#b45f06"]Minion Damage[/keyword].

[keyword id="#b45f06"]Minion Skills[/keyword] and [keyword id="#b45f06"]Command Skills[/keyword] gain further increased [keyword id="#1c4587"]Damage[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Minion Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Command Skill Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Minion Skill Damage[/keyword]: +7%, +35%`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "spirit-bomb": {
    icon: "icons/skills/vex/ico_passive_siren_spirit_bomb.webp",
    id: "spirit-bomb",
    name: "Spirit Bomb",
    description: '[keyword id="#b45f06"]Reapers[/keyword] gain [keyword id="#1c4587"]Maximum Health Capacity[/keyword] and will release a [keyword id="#b45f06"]Spirit Bomb Remnant[/keyword] when they die, dealing [keyword id="#1c4587"]Damage[/keyword] of their [keyword id="#1c4587"]Elemental Type[/keyword] to nearby enemies.',
    character: "vex",
    attributes: `[keyword id="#1c4587"]Reaper Maxium Health Capacity[/keyword]: +12%, +36%
[keyword id="#1c4587"]Spirit Bomb Damage[/keyword]: +37, +111`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "ancient-rites": {
    icon: "icons/skills/vex/ico_passive_siren_ancient_rites.webp",
    id: "ancient-rites",
    name: "Ancient Rites",
    description: `[keyword id="#b45f06"]Vex[/keyword] gains a stack of [keyword id="#b45f06"]Ancient Rites[/keyword] for each of her active [keyword id="#b45f06"]Minions[/keyword] every second, increasing [keyword id="#b45f06"]Minion Damage[/keyword].

Stacks are lost after a duration with no active [keyword id="#b45f06"]Minion[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Minion Damage[/keyword]: +0.2% per Stack, +1.0%
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 40`,
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "death-follows-closer": {
    icon: "icons/skills/vex/ico_passive_siren_reapers_respite.webp",
    id: "death-follows-closer",
    name: "Death Follows Closer",
    description: 'Whenever [keyword id="#b45f06"]Vex[/keyword] takes Damage while at [keyword id="#1c4587"]Low Health[/keyword], [keyword id="#1c4587"]Spawn[/keyword] a [keyword id="#b45f06"]Reaper[/keyword] nearby.',
    character: "vex",
    attributes: '[keyword id="#1c4587"]Cooldown[/keyword]: 120 seconds, 100, 80',
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  diener: {
    icon: "icons/skills/vex/ico_passive_siren_diener.webp",
    id: "diener",
    name: "Diener",
    description: '[keyword id="#b45f06"]Dead Ringer[/keyword] gains an additional [keyword id="#1c4587"]Charge[/keyword].',
    character: "vex",
    attributes: "",
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "dark-pact": {
    icon: "icons/capstones/vex/SkilliconSiren_Capstone_WakeTheDead.webp",
    id: "dark-pact",
    name: "Dark Pact",
    description: `[keyword id="#b45f06"]Vex[/keyword] can equip [keyword id="#b45f06"]two Augments[/keyword], and gains the ability to use [keyword id="#b45f06"]Dark Pact[/keyword].

[keyword id="#b45f06"]Dark Pact[/keyword]: Press and hold F to fully restore [keyword id="#1c4587"]Health[/keyword] of all active [keyword id="#1c4587"]Phase Clones[/keyword], as well as granting increased [keyword id="#1c4587"]Movement Speed[/keyword] and [keyword id="#1c4587"]Minion Attack Speed[/keyword] for a Duration.

[keyword id="#b45f06"]Phase Clones[/keyword] do not lose [keyword id="#1c4587"]Health[/keyword] over time while [keyword id="#b45f06"]Dark Pact[/keyword] is active, and [keyword id="#1c4587"]Health[/keyword] loss is [keyword id="#1c4587"]reset[/keyword] when [keyword id="#b45f06"]Dark Pact[/keyword] ends.`,
    character: "vex",
    attributes: `[keyword id="#1c4587"]Minion Movement Speed Multiplier[/keyword]: +30%
[keyword id="#1c4587"]Minion Attack Speed Multiplier[/keyword]: +30%
[keyword id="#1c4587"]Duration[/keyword]: 12 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 42 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "arc-knives": {
    icon: "icons/action-skills/rafa/SkilliconExo_skill_ArcKnives.webp",
    id: "arc-knives",
    name: "Arc-Knives",
    description: `[keyword id="#b45f06"]Rafa[/keyword] puts down his guns and equips his [keyword id="#b45f06"]Arc-Knives[/keyword], blades that deal [keyword id="#1c4587"]Melee Damage[/keyword] and [keyword id="#b45f06"]Mark Enemies[/keyword] whenever they damage them, causing them to take increased [keyword id="#1c4587"]Damage[/keyword] for every [keyword id="#b45f06"]Mark[/keyword] on them.

M1: Perform Melee Attacks with [keyword id="#b45f06"]Rafa's Arc-Knives[/keyword].
M2: Dash forward and performa [keyword id="#0000ff"]Shock Melee[/keyword] attack.
F: Unleash [keyword id="#b45f06"]Rafa's Blade Fury[/keyword], which deals [keyword id="#0000ff"]Shock Damage[/keyword] to all [keyword id="#b45f06"]Marked[/keyword] enemies, and ends the Skill.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Duration[/keyword]: 25 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 45 seconds
[keyword id="#1c4587"]Max Marks[/keyword]: 4 per enemy
[keyword id="#1c4587"]Mark Bonus[/keyword]: +6% damage per mark
[keyword id="#1c4587"]Melee Attack Damage[/keyword]: 28
[keyword id="#1c4587"]Blade Fury Damage[/keyword]: 55`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "green",
    type: "action-skill"
  },
  "handshake-deal": {
    icon: "icons/skills/rafa/ico_passive_exo_handshake_deal.webp",
    id: "handshake-deal",
    name: "Handshake Deal",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] and [keyword id="#1c4587"]Melee Damage[/keyword]',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +3%, +15%
[keyword id="#1c4587"]Melee Damage[/keyword]: +7%, +35%,`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "midnight-oil": {
    icon: "icons/skills/rafa/ico_passive_exo_burn_the_midnight_oil.webp",
    id: "midnight-oil",
    name: "Midnight Oil",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] Action Skills deal [keyword id="#34a853"]Bonus Corrosive Damage[/keyword]. The longer the [keyword id="#1c4587"]Skill[/keyword] has been active, the greater the [keyword id="#1c4587"]Bonus Damage[/keyword]`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Bonus Damage[/keyword]: +1% per second, +5%
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  expedite: {
    icon: "icons/skills/rafa/ico_passive_exo_move_the_needle.webp",
    id: "expedite",
    name: "Expedite",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Overdrive[/keyword] grants [keyword id="#b45f06"]Rafa[/keyword] further increased [keyword id="#1c4587"]Move Speed[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Move Speed[/keyword]: +5%, +25%',
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "dial-in": {
    icon: "icons/skills/rafa/ico_passive_exo_trama.webp",
    id: "dial-in",
    name: "Dial In",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] damages an enemy with a [keyword id="#1c4587"]Melee Attack[/keyword], his [keyword id="#1c4587"]Melee Attacks[/keyword] gain [keyword id="#1c4587"]Critical Hit Chance[/keyword]. This [keyword id="#1c4587"]Chance[/keyword] stacks, and all Stacks are removed whenever [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance[/keyword]: +4% per stack, +20%
[keyword id="#1c4587"]Max Stacks:[/keyword] 5`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "altered-cabron": {
    icon: "icons/augments/rafa/SkilliconExo_augment_AlteredCabron.webp",
    id: "altered-cabron",
    name: "Altered Cabrón",
    description: `Whenever [keyword id="#b45f06"]Rafa[/keyword] kills an enemy while [keyword id="#b45f06"]Arc-Knives[/keyword] is active, restore a portion of his [keyword id="#1c4587"]Maximum Health Capacity[/keyword].

Whenever [keyword id="#b45f06"]Rafa[/keyword] gains [keyword id="#1c4587"]Health[/keyword], deal [keyword id="#34a853"]Bonus Corrosive Damage[/keyword] with all attacks, and gain increased [keyword id="#1c4587"]Movement Speed[/keyword]. This effect stacks.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Bonus Corrosive Damage[/keyword]: +10%
[keyword id="#1c4587"]Move Speed[/keyword]: +10%
[keyword id="#1c4587"]Duration[/keyword]: 16 seconds
[keyword id="#1c4587"]Health Restore[/keyword]: 30 on kill
[keyword id="#1c4587"]Max Stacks[/keyword]: 10`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "el-corazon": {
    icon: "icons/skills/rafa/ico_passive_exo_stockpile.webp",
    id: "el-corazon",
    name: "El Corazón",
    description: `A portion of [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Maximum Health Capacity[/keyword] is converted into [keyword id="#1c4587"]Maximum Shield Capacity[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Maximum Health Capacity[/keyword]: +7%, +35%
[keyword id="#1c4587"]Maximum Shield Capacity[/keyword]: +14%, +70%`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "dead-man-walking": {
    icon: "icons/augments/rafa/SkilliconExo_augment_DeadManWalking.webp",
    id: "dead-man-walking",
    name: "Dead Man Walking",
    description: `[keyword id="#b45f06"]Arc-Knives[/keyword] does not end when its [keyword id="#1c4587"]Duration[/keyword] runs out. Instead, it only ends if [keyword id="#b45f06"]Rafa[/keyword] enters [keyword id="#1c4587"]Fight For Your Life[/keyword] or activates [keyword id="#b45f06"]Blade Fury[/keyword]. While [keyword id="#b45f06"]Arc-Knives[/keyword]' Duration is depleted, [keyword id="#b45f06"]Rafa[/keyword] loses [keyword id="#1c4587"]Health[/keyword] instead.

Whenever [keyword id="#b45f06"]Rafa[/keyword] damages an enemy, he gains [keyword id="#1c4587"]Overshield[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Health Drain:[/keyword] +3% per second
[keyword id="#1c4587"]Additional Health Drain:[/keyword] +2% every 10 seconds
[keyword id="#1c4587"]Overshield:[/keyword] 15% of Damage Dealt`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "green",
    type: "augment"
  },
  "diamond-hands": {
    icon: "icons/skills/rafa/ico_passive_exo_doorbuster.webp",
    id: "diamond-hands",
    name: "Diamond Hands",
    description: `Dealing [keyword id="#1c4587"]Melee Damage[/keyword] grants [keyword id="#b45f06"]Rafa[/keyword] a stack of [keyword id="#b45f06"]Diamond Hands[/keyword]. Gain increased [keyword id="#b45f06"]Gun Damage[/keyword] for every Stack of [keyword id="#b45f06"]Diamond Hands[/keyword].

Once Rafa deals [keyword id="#1c4587"]Gun Damage[/keyword], Stacks begin to decay quickly until they run out.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +2% per stack, +10%
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  saldar: {
    icon: "icons/skills/rafa/ico_passive_exo_saldar.webp",
    id: "saldar",
    name: "Saldar",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Melee Critical Hits[/keyword] gain [keyword id="#1155cc"]Lifesteal [/keyword]`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Melee Lifesteal[/keyword]: +6%, +30%',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "dial-in"
  },
  "in-the-zone": {
    icon: "icons/skills/rafa/ico_passive_exo_in_the_zone.webp",
    id: "in-the-zone",
    name: "In the Zone",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy [keyword id="#1c4587"]freezes[/keyword] [keyword id="#b45f06"]Overdrive's Duration[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Duration[/keyword]: +1 seconds, +3',
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "to-the-last": {
    icon: "icons/skills/rafa/ico_passive_exo_to_the_last.webp",
    id: "to-the-last",
    name: "To the Last",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] and [keyword id="#1c4587"]Skill Damage[/keyword]. The lower his [keyword id="#1c4587"]Health[/keyword], the greater the bonuses.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Skill Damage[/keyword]: Up to +6%, +30%
[keyword id="#1c4587"]Gun Damage[/keyword]: Up to +6%, +30%`,
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "el-corazon"
  },
  "hard-sell": {
    icon: "icons/skills/rafa/ico_passive_exo_hard_sell.webp",
    id: "hard-sell",
    name: "Hard Sell",
    description: `Whenever [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Shields[/keyword] break, he instantly gains a portion of his [keyword id="#1c4587"]Shield Maximum Capacity[/keyword] as [keyword id="#1c4587"]Overshield[/keyword]. The skill cannot be used again until [keyword id="#b45f06"]Rafa[/keyword] activates his [keyword id="#1c4587"]Action Skill[/keyword][keyword id="#1155cc"].[/keyword]`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Overshield[/keyword]: +10% of [keyword id="#1c4587"]Maximum Shield Capacity[/keyword], +50%',
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  blowout: {
    icon: "icons/skills/rafa/ico_passive_exo_bottom_line.webp",
    id: "blowout",
    name: "Blowout",
    description: `Whenever [keyword id="#b45f06"]Rafa[/keyword] applies a [keyword id="#b45f06"]Heavy Arms Mark[/keyword] or [keyword id="#1c4587"]Critically Hits[/keyword] an enemy with his [keyword id="#1c4587"]Action Skill[/keyword], they explode in [keyword id="#34a853"]Corrosive Lobbed Projectiles[/keyword]. The longer [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Action Skill[/keyword] has been active, the more [keyword id="#34a853"]Corrosive Projectiles[/keyword] are spawned.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Projectile Damage[/keyword]: +9, +45
[keyword id="#1c4587"]Max Projectiles[/keyword]: 6
[keyword id="#1c4587"]Cooldown[/keyword]: 4 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  thundercutter: {
    icon: "icons/augments/rafa/SkilliconExo_augment_ThunderCutter.webp",
    id: "thundercutter",
    name: "Thundercutter",
    description: '[keyword id="#b45f06"]Arc-Knives[/keyword] attacks deal [keyword id="#0000ff"]Shock Melee Splash Damage[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] deals increased [keyword id="#1c4587"]Splash Damage[/keyword]',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Splash Damage[/keyword]: +35%',
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "el-paraguas": {
    icon: "icons/skills/rafa/ico_passive_exo_coverage.webp",
    id: "el-paraguas",
    name: "El Paraguas",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Splash Damage[/keyword] and increased [keyword id="#1c4587"]Splash Damage Critical Hit Chance[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Splash Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Splash Damage Critical Hit Chance[/keyword]: +2%, +10%`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "protecto-pulse": {
    icon: "icons/skills/rafa/ico_passive_exo_out_the_door.webp",
    id: "protecto-pulse",
    name: "Protecto-Pulse",
    description: `Pressing M2 while [keyword id="#b45f06"]Arc-Knives[/keyword] are active or [keyword id="#b45f06"]Rafa[/keyword] retriggers his [keyword id="#1c4587"]Action Skill[/keyword] drains a portion of [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Shields[/keyword], and deals that much [keyword id="#0000ff"]Shock Damage[/keyword] to nearby enemies.`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Shields Drained[/keyword]: up to 10% of Max[keyword id="#1c4587"] Shields[/keyword], 50%',
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "shock-market": {
    icon: "icons/skills/rafa/ico_passive_exo_shifting_focus.webp",
    id: "shock-market",
    name: "Shock Market",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] deals [keyword id="#1c4587"]Splash Damage[/keyword], deal [keyword id="#0000ff"]Bonus Shock Damage[/keyword] based on the [keyword id="#1c4587"]Damage Dealt[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +8% of Damage Dealt, +40%',
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  liquidation: {
    icon: "icons/skills/rafa/ico_passive_exo_blowout.webp",
    id: "liquidation",
    name: "Liquidation",
    description: '[keyword id="#b45f06"]Marked[/keyword] enemies killed by [keyword id="#b45f06"]Rafa[/keyword] leave behind a [keyword id="#34a853"]Corrosive Hazard[/keyword]',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Hazard Damage: [/keyword]+24 per second
[keyword id="#1c4587"]Hazard Duration:[/keyword] 8 seconds`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  "huracan-especial": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_HuracanEspecial.webp",
    id: "huracan-especial",
    name: "Hurácan Especial",
    description: 'Activating [keyword id="#b45f06"]Blade Fury[/keyword] causes [keyword id="#b45f06"]Rafa[/keyword] to spin his blades, creating a [keyword id="#1c4587"]Singularity[/keyword] that draws in all [keyword id="#b45f06"]Marked[/keyword] enemies and other nearby enemies while dealing continuous [keyword id="#0000ff"]Shock Damage[/keyword]. Whenever this attack kills an enemy, [keyword id="#b45f06"]Overdrive[/keyword] grants increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 111 per second
[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +8% per kill`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  artilleria: {
    icon: "icons/skills/rafa/ico_passive_exo_extra_mile.webp",
    id: "artilleria",
    name: "Artilleria",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword]: +6%, +30%',
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "parting-gift": {
    icon: "icons/augments/rafa/SkilliconExo_augment_PartingGift.webp",
    id: "parting-gift",
    name: "Parting Gift",
    description: `Whenever [keyword id="#b45f06"]Rafa[/keyword] activates his [keyword id="#b45f06"]Dash Attack[/keyword], he leaves behind a [keyword id="#1c4587"]Grenade[/keyword]. If he has a [keyword id="#1c4587"]Grenade[/keyword] equipped, use that [keyword id="#1c4587"]Grenade[/keyword] instead. Enemies damaged by these [keyword id="#1c4587"]Grenades[/keyword] become [keyword id="#b45f06"]Marked[/keyword].

Whenever Rafa applies a [keyword id="#b45f06"]Mark[/keyword] to an enemy, apply an additional [keyword id="#b45f06"]Mark[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Default Grenade Damage[/keyword]: 129',
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "collaborate-ignition": {
    icon: "icons/skills/rafa/ico_passive_exo_blowout_sale.webp",
    id: "collaborate-ignition",
    name: "Collaborate Ignition",
    description: `[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] deals [keyword id="#1c4587"]Bonus Damage[/keyword] of his [keyword id="#1c4587"]Weapon's Element[/keyword] with all [keyword id="#1c4587"]Skills[/keyword] and [keyword id="#1c4587"]Ordnances[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.`,
    character: "rafa",
    attributes: "",
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "booming-business": {
    icon: "icons/skills/rafa/ico_passive_exo_max_value.webp",
    id: "booming-business",
    name: "Booming Business",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, he gains a chance to spawn a [keyword id="#1c4587"]Free Grenade[/keyword]. If [keyword id="#b45f06"]Rafa[/keyword] has a [keyword id="#1c4587"]Grenade[/keyword] equipped, spawn a [keyword id="#1c4587"]Grenade[/keyword] based on that.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Grenade Chance[/keyword]: +10%, +20%, +30%, +40%, +50%
[keyword id="#1c4587"]Cooldown Time[/keyword]: 12 seconds, 10, 8, 6, 4`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  sinergia: {
    icon: "icons/skills/rafa/ico_passive_exo_sinergia.webp",
    id: "sinergia",
    name: "Sinergia",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] deals [keyword id="#1c4587"]Ordnance Damage[/keyword], he also deals increased [keyword id="#1c4587"]Gun Damage[/keyword] and [keyword id="#1c4587"]Melee Damage[/keyword]. This Effect Stacks.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +2% per stack, +6%
[keyword id="#1c4587"]Melee Damage[/keyword]: +3% per stack, +9%
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  hemolitions: {
    icon: "icons/skills/rafa/ico_passive_exo_pull_out_all_the_stops.webp",
    id: "hemolitions",
    name: "Hemolitions",
    description: `[keyword id="#b45f06"]Overdrive Skill[/keyword]. While [keyword id="#b45f06"]Overdrive[/keyword] is active, [keyword id="#b45f06"]Rafa[/keyword] may use [keyword id="#1c4587"]Grenades[/keyword] while cooling down - at the cost of [keyword id="#1c4587"]Health[/keyword]. Every time a [keyword id="#1c4587"]Grenade[/keyword] is used this way, it costs more [keyword id="#1c4587"]Health[/keyword] until [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Grenade[/keyword] fully cools down.`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Health Cost[/keyword]: 20% of current Health',
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  "inferno-protocol": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_InfernoProtocol.webp",
    id: "inferno-protocol",
    name: "Inferno Protocol",
    description: `While [keyword id="#b45f06"]Arc-Knives[/keyword] are active, [keyword id="#b45f06"]Rafa's Exo-Suit[/keyword] stores all [keyword id="#1c4587"]Damage Dealt[/keyword] to him. The [keyword id="#b45f06"]Exo-Suit[/keyword] then heats up and constantly does a small amount of [keyword id="#ea4335"]Fire Damage[/keyword] to him. Additionally, Rafa's [keyword id="#1c4587"]Melee Attacks[/keyword] deal [keyword id="#ea4335"]Bonus Fire Damage[/keyword]. A portion of all [keyword id="#1c4587"]Damage Dealt[/keyword] to [keyword id="#b45f06"]Rafa[/keyword] is also dealt to enemies he has [keyword id="#b45f06"]Marked[/keyword].

Using [keyword id="#b45f06"]Blade Fury[/keyword] causes [keyword id="#b45f06"]Rafa[/keyword] to consume all stored [keyword id="#1c4587"]Damage[/keyword], and deals [keyword id="#ea4335"]Bonus Fire Damage[/keyword] based on stored [keyword id="#1c4587"]Damage[/keyword]. A portion of all [keyword id="#1c4587"]Damage[/keyword] dealt this way is returned to [keyword id="#b45f06"]Rafa[/keyword] as [keyword id="#1c4587"]Health[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Self Damage: [/keyword]1% of [keyword id="#1c4587"]Total HP [/keyword]per second
[keyword id="#1c4587"]Bonus Incendiary Damage:[/keyword] 50% of total Damage Taken
[keyword id="#1c4587"]Marked Enemy Damage:[/keyword] 20% of Damage Taken`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "el-diablito": {
    icon: "icons/skills/rafa/ico_passive_exo_double_dip.webp",
    id: "el-diablito",
    name: "El Diablito",
    description: 'A portion of all [keyword id="#ea4335"]Fire Damage[/keyword] [keyword id="#b45f06"]Rafa[/keyword] deals also deals [keyword id="#ea4335"]Bonus Fire Ordnance Damage[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +10% of Damage Dealt, +50%',
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "el-borracho": {
    icon: "icons/skills/rafa/ico_passive_exo_cant_stop_me_now.webp",
    id: "el-borracho",
    name: "El Borracho",
    description: '[keyword id="#b45f06"]Rafa[/keyword] deals increased [keyword id="#34a853"]Corrosive Damage[/keyword] while his [keyword id="#1c4587"]Action Skill[/keyword] is active. The longer it has been active, the [keyword id="#1c4587"]greater[/keyword] the bonus.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Corrosive Damage[/keyword]: +1% per second, +5%
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "acid-drop": {
    icon: "icons/augments/rafa/SkilliconExo_augment_AcidDrop.webp",
    id: "acid-drop",
    name: "Acid Drop",
    description: `[keyword id="#b45f06"]Arc-Knives' Dash Attack[/keyword] is replaced by [keyword id="#b45f06"]Caustic Leap[/keyword]. Pressing M2 causes [keyword id="#b45f06"]Rafa[/keyword] to [keyword id="#1c4587"]leap forward and[/keyword] create a [keyword id="#34a853"]Caustic Hazard[/keyword] wherever he lands.

Whenever a [keyword id="#b45f06"]Mark[/keyword] is removed from an enemy, it explodes in a [keyword id="#34a853"]Corrosive Nova[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Leap Damage[/keyword]: 146
[keyword id="#1c4587"]Hazard Damage: 17 per second
Nova Damage[/keyword]: 37`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  empuje: {
    icon: "icons/skills/rafa/ico_passive_exo_empuje.webp",
    id: "empuje",
    name: "Empuje",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Action Skill Duration[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Action Skill Duration[/keyword]: +6%, +30%',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "sustainable-energy": {
    icon: "icons/skills/rafa/ico_passive_exo_bright_futures.webp",
    id: "sustainable-energy",
    name: "Sustainable Energy",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains [keyword id="#1c4587"]Health Regeneration[/keyword] based on how much [keyword id="#b45f06"]Overdrive[/keyword] time is remaining.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Health Regen[/keyword]: Up to +0.4% Max [keyword id="#1c4587"]Health[/keyword] per second, +2.0%',
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  moltivar: {
    icon: "icons/skills/rafa/ico_passive_exo_go_viral.webp",
    id: "moltivar",
    name: "Motivar",
    description: 'Pressing M2 during [keyword id="#b45f06"]Arc-Knives[/keyword] grants a stack of [keyword id="#b45f06"]Motivar[/keyword], which grants increased [keyword id="#b45f06"]Overdrive Duration[/keyword]. Stack are lost whenever [keyword id="#b45f06"]Rafa[/keyword] activates an [keyword id="#1c4587"]Action Skill[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Overdrive Duration[/keyword]: +4%, +20%
[keyword id="#1c4587"]Max Stacks[/keyword][keyword id="#1155cc"]:[/keyword]5`,
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "galvanic-panic": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_ViolentFrenzy.webp",
    id: "galvanic-panic",
    name: "Galvanic Panic",
    description: `Whenever [keyword id="#b45f06"]Rafa[/keyword] performs a [keyword id="#1c4587"]Melee Attack[/keyword] while [keyword id="#b45f06"]Arc-Knives[/keyword] is active, fire an [keyword id="#b45f06"]Acid STRM Glider[/keyword] at an enemy in his view. [keyword id="#b45f06"]Acid STRM Gliders[/keyword] deal [keyword id="#34a853"]Corrosive Splash Damage[/keyword] based on the number of total [keyword id="#b45f06"]Marked[/keyword] enemies. Additionally, killing an enemy while [keyword id="#b45f06"]Arc-Knives[/keyword] is active restores [keyword id="#1c4587"]Action Skill Duration[/keyword].

Activating [keyword id="#b45f06"]Blade Fury[/keyword] causes [keyword id="#b45f06"]Rafa[/keyword] to fire a volley of [keyword id="#b45f06"]Acid STRM[/keyword] Gliders in front of him and end [keyword id="#b45f06"]Arc-Knives[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Acid STRM Glider Damage[/keyword]: 46
[keyword id="#1c4587"]Acid STRM Glider Bonus Damage[/keyword]: +8% per Marked enemy
[keyword id="#1c4587"]Actional Skill Duration Restore[/keyword]: +5% per enemy killed`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "cruel-accrual": {
    icon: "icons/skills/rafa/ico_passive_exo_stick_with_it.webp",
    id: "cruel-accrual",
    name: "Cruel Accrual",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Skill Damage[/keyword] with all Skills. The longer his [keyword id="#1c4587"]Action Skill[/keyword] has been active, the [keyword id="#1c4587"]greater[/keyword] the bonus.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Skill Damage[/keyword]: +1% per second
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "apophis-lance": {
    icon: "icons/action-skills/rafa/SkilliconExo_skill_ApophisLance.webp",
    id: "apophis-lance",
    name: "APOPHIS Lance",
    description: `Equip [keyword id="#b45f06"]Rafa's Apophis Lance[/keyword], an offhand [keyword id="#1c4587"]Arm Cannon[/keyword] that decreases [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Gun Handling[/keyword], but allows him to fire [keyword id="#0000ff"]Piercing Shock Ordnance Blasts[/keyword]. Any unused [keyword id="#b45f06"]Charges[/keyword] when [keyword id="#b45f06"]Apophis Lance[/keyword] ends are converted into [keyword id="#1c4587"]Action Skill Cooldown[/keyword].

Press M2 to fire a [keyword id="#0000ff"]Piercing Shock Ordnance Blast[/keyword] at enemies and consume a [keyword id="#b45f06"]Charge[/keyword], or hold M2 to charge [keyword id="#b45f06"]Rafa's Apophis Lance[/keyword] for increased [keyword id="#1c4587"]Damage[/keyword], [keyword id="#1c4587"]Projectile Size[/keyword], and [keyword id="#1c4587"]Projectile Speed[/keyword] - at the cost of more [keyword id="#b45f06"]Charges[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Charges: [/keyword]3
[keyword id="#1c4587"]Damage:[/keyword] 157
[keyword id="#1c4587"]Marked Enemy Damage Taken:[/keyword] +20% per stack
[keyword id="#1c4587"]Mark Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Duration:[/keyword] 24 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 38 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "blue",
    type: "action-skill"
  },
  rinse: {
    icon: "icons/skills/rafa/ico_passive_exo_rinse.webp",
    id: "rinse",
    name: "Rinse",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Reload Speed[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Reload Speed[/keyword]: +4%, +20%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "las-jaras": {
    icon: "icons/skills/rafa/ico_passive_exo_ripped_and_ready.webp",
    id: "las-jaras",
    name: "Las Jaras",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Regenerates Ammo[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Ammo Regeneration[/keyword]: +0.5%, +2.5%',
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "the-thrill": {
    icon: "icons/skills/rafa/ico_passive_exo_im_going_in.webp",
    id: "the-thrill",
    name: "The Thrill",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Fire Rate[/keyword]. Gain further increased [keyword id="#1c4587"]Fire Rate[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Fire Rate[/keyword]: +3%, +15%
[keyword id="#1c4587"]Fire Rate[/keyword]: +2% while [keyword id="#b45f06"]Overdrive[/keyword] is Active, +10%`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  preparado: {
    icon: "icons/skills/rafa/ico_passive_exo_repeat.webp",
    id: "preparado",
    name: "Preparado",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Reloads[/keyword] his current [keyword id="#1c4587"]Gun[/keyword], he gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]. This effect stacks.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]: +3% per stack, +15%
[keyword id="#1c4587"]Max Stacks[/keyword]: 3
[keyword id="#1c4587"]Duration[/keyword]: 6 seconds`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "rinse"
  },
  "sangre-por-sangre": {
    icon: "icons/augments/rafa/SkilliconExo_augment_EfficiencyEngine.webp",
    id: "sangre-por-sangre",
    name: "Sangre por Sangre",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] consumes a [keyword id="#b45f06"]Charge[/keyword], he gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]. This bonus is increased for every [keyword id="#b45f06"]Charge[/keyword] consumed.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Cooldown Rate[/keyword]: +25% per [keyword id="#b45f06"]Charge[/keyword] consumed
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "pa-dentro": {
    icon: "icons/skills/rafa/ico_passive_exo_the_thrill.webp",
    id: "pa-dentro",
    name: "Pa' Dentro",
    description: 'Activating an [keyword id="#1c4587"]Action Skill[/keyword] grants [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Health Regeneration[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Health Regeneration[/keyword]: +1.0%, +5.0%
[keyword id="#1c4587"]Duration[/keyword]: 7 seconds`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "battery-subscription-service": {
    icon: "icons/augments/rafa/SkilliconExo_augment_ExtraBatteries.webp",
    id: "battery-subscription-service",
    name: "Battery Subscription Service",
    description: `[keyword id="#b45f06"]Apophis Lance[/keyword] gains an [keyword id="#1c4587"]Additional Charge[/keyword].

Additionally, whenever [keyword id="#b45f06"]Rafa[/keyword] consumes 4 or more [keyword id="#1c4587"]Charges[/keyword], gain increased [keyword id="#1c4587"]Action Skill Potency[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Action Skill Potency[/keyword]: +50%
[keyword id="#1c4587"]Duration[/keyword]: 14 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "blue",
    type: "augment"
  },
  arriba: {
    icon: "icons/skills/rafa/ico_passive_exo_line_them_up.webp",
    id: "arriba",
    name: "Arriba",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Whenever [keyword id="#b45f06"]Rafa[/keyword] kills an enemy, he gains increased [keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Ordnance Cooldown Rate[/keyword]: +7%, +35%
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "first-impression": {
    icon: "icons/skills/rafa/ico_passive_exo_just_for_you.webp",
    id: "first-impression",
    name: "First Impression",
    description: 'The first shot fired from a fully loaded [keyword id="#1c4587"]Weapon Magazine[/keyword] gains [keyword id="#1c4587"]Increased Damage[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Gun Damage[/keyword]: +10%, +50%',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "al-centro": {
    icon: "icons/skills/rafa/ico_passive_exo_development.webp",
    id: "al-centro",
    name: "Al Centro",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Weapon Handling[/keyword] with all [keyword id="#1c4587"]Weapons[/keyword] and [keyword id="#1c4587"]Action Skills[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active. The longer [keyword id="#b45f06"]Overdrive[/keyword] has been active, the [keyword id="#1c4587"]greater[/keyword] the bonus.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Weapon Handling[/keyword]: +1% per second, +5%',
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "metal-management": {
    icon: "icons/skills/rafa/ico_passive_exo_side_loaded.webp",
    id: "metal-management",
    name: "Metal Management",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] activates or retrigger an [keyword id="#1c4587"]Action Skill[/keyword], his [keyword id="#1c4587"]Gun[/keyword] consumes no [keyword id="#1c4587"]Ammo[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Duration[/keyword]: 2 seconds',
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  abajo: {
    icon: "icons/skills/rafa/ico_passive_exo_knock_them_down.webp",
    id: "abajo",
    name: "Abajo",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] throws a [keyword id="#1c4587"]Grenade[/keyword], he gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]: +7%, +35%
[keyword id="#1c4587"]Duration[/keyword]: 10 seconds`,
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "arriba"
  },
  "brain-dump": {
    icon: "icons/skills/rafa/ico_passive_exo_choque.webp",
    id: "brain-dump",
    name: "Brain Dump",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] with his guns while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Critical Hit Chance[/keyword]: +3%, +15%',
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "ojo-rojo": {
    icon: "icons/augments/rafa/SkilliconExo_augment_Stabilizer.webp",
    id: "ojo-rojo",
    name: "Ojo Rojo",
    description: `[keyword id="#b45f06"]Apophis Lance[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword].

Whenever [keyword id="#b45f06"]Rafa[/keyword] damages an enemy with [keyword id="#b45f06"]Apophis Lance[/keyword], gain further increased [keyword id="#1c4587"]Critical Hit Chance[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance[/keyword]: +25%
[keyword id="#1c4587"]Bonus Critical Hit Chance[/keyword]: +25%
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  conductivo: {
    icon: "icons/skills/rafa/ico_passive_exo_lets_rumble.webp",
    id: "conductivo",
    name: "Conductivo",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Status Effect Chance[/keyword], and also gains further increased [keyword id="#0000ff"]Shock Chance[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Status Effect Chance[/keyword]: +6%, +30%
[keyword id="#1c4587"]Shock Chance[/keyword]: +7%, +35%`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "el-catrin": {
    icon: "icons/skills/rafa/ico_passive_exo_showboat.webp",
    id: "el-catrin",
    name: "El Catrín",
    description: `After [keyword id="#1c4587"]Sliding[/keyword], [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Action Skill[/keyword] deals [keyword id="#0000ff"]Bonus Shock Damage[/keyword], and he deals increased [keyword id="#1c4587"]Critical Hit Damage[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Bonus Damage[/keyword]: +7% of Damage Dealt, +35%
[keyword id="#1c4587"]Critical Hit Damage[/keyword]: +7%, +35%
[keyword id="#1c4587"]Duration[/keyword]: 3 seconds after [keyword id="#1c4587"]Sliding[/keyword]`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  awe: {
    icon: "icons/skills/rafa/ico_passive_exo_temor.webp",
    id: "awe",
    name: "Awe",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#0000ff"]Shocks[/keyword] an enemy, all shots fired at that enemy are [keyword id="#1c4587"]Critical Hits[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Duration[/keyword]: 2 seconds',
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "project-raiju": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_TaserFace.webp",
    id: "project-raiju",
    name: "PROJECT: Raiju",
    description: `[keyword id="#b45f06"]APOPHIS Lance's[/keyword] weapon is replaced with a close range [keyword id="#0000ff"]Shocking Taser Burst[/keyword]. Pressing and holding causes [keyword id="#b45f06"]Rafa[/keyword] to deal [keyword id="#0000ff"]Shock Damage[/keyword] all around him. The longer [keyword id="#b45f06"]Rafa[/keyword] holds this attack, the [keyword id="#1c4587"]greater[/keyword] damage it deals.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 74 per second
[keyword id="#1c4587"]Damage Scalar[/keyword]: +10% per second`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  fiesta: {
    icon: "icons/skills/rafa/ico_passive_exo_fiesta_sopresa.webp",
    id: "fiesta",
    name: "Fiesta",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] applies a [keyword id="#1c4587"]Status Effect[/keyword], his [keyword id="#1c4587"]Action Skills[/keyword] consume no [keyword id="#1c4587"]Duration[/keyword], and [keyword id="#b45f06"]Apophis Lance[/keyword] consumes no [keyword id="#1c4587"]Charges[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Duration[/keyword]: +0.5 seconds, +2.5',
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "drone-defense": {
    icon: "icons/skills/rafa/ico_passive_exo_drone_defense.webp",
    id: "drone-defense",
    name: "Drone Defense",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] activates an [keyword id="#1c4587"]Ordnance[/keyword], spawn [keyword id="#b45f06"]STRM Gliders[/keyword] that hover near him. As he takes Damage, transfer some of that Damage to his [keyword id="#b45f06"]STRM Gliders[/keyword]. Once a [keyword id="#b45f06"]STRM Gliders[/keyword] receives too much damage, it explodes, dealing [keyword id="#34a853"]Corrosive Splash Damage[/keyword] to nearby enemies.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]STRM Glider Health[/keyword]: +45, +225
[keyword id="#1c4587"]Damage[/keyword]: +37, +185
[keyword id="#1c4587"]Max STRM Gliders[/keyword]: 3`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "gibistruct-module": {
    icon: "icons/augments/rafa/SkilliconExo_augment_DuctTapeMod.webp",
    id: "gibistruct-module",
    name: "Gibistruct Module",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] kills an enemy with his [keyword id="#b45f06"]Apophis Lance[/keyword], spawn a free [keyword id="#1c4587"]Grenade[/keyword] on that enemy. If [keyword id="#b45f06"]Rafa[/keyword] has a [keyword id="#1c4587"]Grenade[/keyword] equipped, spawn a copy of that [keyword id="#1c4587"]Grenade[/keyword] Instead',
    character: "rafa",
    attributes: "",
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "el-soldado": {
    icon: "icons/skills/rafa/ico_passive_exo_busted.webp",
    id: "el-soldado",
    name: "El Soldado",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active. This bonus is [keyword id="#1c4587"]doubled[/keyword] while [keyword id="#b45f06"]Rafa[/keyword] is charging [keyword id="#b45f06"]APOPHIS Lance[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Gun Damage[/keyword]: +6%, +30%',
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "the-right-tools": {
    icon: "icons/skills/rafa/ico_passive_exo_the_right_tools.webp",
    id: "the-right-tools",
    name: "The Right Tools",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Ordnance Damage[/keyword] after [keyword id="#1c4587"]Reloading[/keyword] his [keyword id="#1c4587"]Gun[/keyword]. This bonus stacks.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Ordnance Damage[/keyword]: +10%, +50%
[keyword id="#1c4587"]Max Stacks[/keyword]: 5
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds`,
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  debtonation: {
    icon: "icons/skills/rafa/ico_passive_exo_concealed_detonators.webp",
    id: "debtonation",
    name: "Debtonation",
    description: `Whenever [keyword id="#b45f06"]Rafa[/keyword] damages an enemy with an [keyword id="#b45f06"]Action Skill[/keyword], place a [keyword id="#b45f06"]Remote Detonator[/keyword] on that enemy.

[keyword id="#1c4587"]Ordnance Override[/keyword]. Detonate all [keyword id="#b45f06"]Remote Detonators[/keyword]. [keyword id="#b45f06"]Remote Detonators[/keyword] gain increased [keyword id="#1c4587"]Damage[/keyword] and increased [keyword id="#1c4587"]Splash Radius[/keyword] for every [keyword id="#b45f06"]Remote Detonation[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Detonator Damage[/keyword]: +7, +35
[keyword id="#1c4587"]Bonus Damage[/keyword]: +3% per [keyword id="#b45f06"]Detonator[/keyword], +15%
[keyword id="#1c4587"]Splash Radius Scalar[/keyword]: +2% per [keyword id="#b45f06"]Detonator[/keyword], +10%`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "drone-assault": {
    icon: "icons/skills/rafa/ico_passive_exo_seeker_glider.webp",
    id: "drone-assault",
    name: "Drone Assault",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] activates or retriggers an [keyword id="#1c4587"]Action Skill[/keyword], send one of his [keyword id="#b45f06"]STRM Gliders[/keyword] at an enemy in his view. Once it arrives, it explodes in a [keyword id="#34a853"]Corrosive Explosion[/keyword] equal to its remaining health.',
    character: "rafa",
    attributes: "",
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1,
    requirement: "drone-defense"
  },
  "project-basilisk": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_HazardousPayload.webp",
    id: "project-basilisk",
    name: "PROJECT: Basilisk",
    description: '[keyword id="#b45f06"]APOPHIS Lance[/keyword] now fires a [keyword id="#34a853"]Corrosive Blob[/keyword] that leaves a [keyword id="#34a853"]Corrosive Hazard[/keyword] and [keyword id="#1c4587"]Splits[/keyword] into several smaller [keyword id="#1c4587"]Projectiles[/keyword] whenever it detonates. The more [keyword id="#b45f06"]Charges APOPHIS Lance[/keyword] consumes at once, the more it [keyword id="#1c4587"]Splits[/keyword]',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Corrosive Blob Damage[/keyword]: 124
[keyword id="#1c4587"]Hazard Damage: [/keyword]45 per second`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  jaque: {
    icon: "icons/skills/rafa/ico_passive_exo_opening.webp",
    id: "jaque",
    name: "Jaque",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] damages an enemy with a [keyword id="#1c4587"]Skill[/keyword], he gains a Stack of [keyword id="#b45f06"]Jaque[/keyword]. For every Stack of [keyword id="#b45f06"]Jaque[/keyword], he gains increased [keyword id="#b45f06"]Overdrive Bonuses[/keyword]. Whenever [keyword id="#b45f06"]Overdrive[/keyword] ends, lose all Stacks.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Overdrive Bonuses[/keyword]: +0.5%, +2.5%
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "engorged-bore": {
    icon: "icons/augments/rafa/SkilliconExo_augment_MagRail.webp",
    id: "engorged-bore",
    name: "Engorged Bore",
    description: '[keyword id="#b45f06"]Apophis Lance[/keyword] gains increased [keyword id="#1c4587"]Projectile Size[/keyword], [keyword id="#1c4587"]Projectile Speed[/keyword], and increased [keyword id="#1c4587"]Number of Chains[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Projectile Size[/keyword]: +25%
[keyword id="#1c4587"]Projectile Speed[/keyword]: +50%
[keyword id="#1c4587"]Chains[/keyword]: +2`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "la-garza": {
    icon: "icons/skills/rafa/ico_passive_exo_ojos_de_aguila.webp",
    id: "la-garza",
    name: "La Garza",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Weapon Handling[/keyword] with [keyword id="#1c4587"]Weapons[/keyword] and [keyword id="#1c4587"]Action Skills[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Weapon Handling[/keyword]: +12%, +60%
[keyword id="#1c4587"]Action Skill Handling:[/keyword] +12%, +60%`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  mate: {
    icon: "icons/skills/rafa/ico_passive_exo_checkmate.webp",
    id: "mate",
    name: "Mate",
    description: `When [keyword id="#b45f06"]Overdrive[/keyword] ends, convert all [keyword id="#b45f06"]Jaque[/keyword] Stacks into [keyword id="#b45f06"]Mate[/keyword] Stacks. Gain increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword] for every Stack of [keyword id="#b45f06"]Mate[/keyword]. Once [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Action Skill[/keyword] is readied, lose all stacks of [keyword id="#b45f06"]Mate[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Cooldown Rate[/keyword]: +0.5% per Stack, +2.5%
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "jaque"
  },
  deadline: {
    icon: "icons/skills/rafa/ico_passive_exo_debido_tiempo.webp",
    id: "deadline",
    name: "Deadline",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Fire Rate[/keyword] and increased [keyword id="#1c4587"]Reload Speed[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Fire Rate[/keyword]: +3%, +15%
[keyword id="#1c4587"]Reload Speed[/keyword]: +5%,+25%`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "project-gorgon": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_LaserFocused.webp",
    id: "project-gorgon",
    name: "PROJECT: Gorgon",
    description: `[keyword id="#b45f06"]Apophis Lance's[/keyword] weapon is replaced with an [keyword id="#ea4335"]Incendiary Laser[/keyword] that [keyword id="#1c4587"]pierces enemies[/keyword]. Pressing and holding M2 causes the [keyword id="#1c4587"]Laser[/keyword] to deal increased [keyword id="#1c4587"]Damage[/keyword] and [keyword id="#1c4587"]Chain[/keyword] to more enemies as it consumes [keyword id="#b45f06"]Charges[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#b45f06"]Damage[/keyword]: 111 per second',
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "per-my-last": {
    icon: "icons/skills/rafa/ico_passive_exo_tramposo.webp",
    id: "per-my-last",
    name: "Per My Last",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] deals damage with an [keyword id="#1c4587"]Action Skill[/keyword] to an enemy, he gains a chance to [keyword id="#1c4587"]deal that Damage again[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Double Damage Chance[/keyword]: +5%, +25%',
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "peacebreaker-cannons": {
    icon: "icons/action-skills/rafa/SkilliconExo_skill_PeacebreakerCannons.webp",
    id: "peacebreaker-cannons",
    name: "Peacebreaker Cannons",
    description: `Equip [keyword id="#b45f06"]Rafa's Peacebreaker Cannons[/keyword], which automatically fire at enemies in [keyword id="#b45f06"]Rafa's[/keyword] crosshairs, dealing [keyword id="#434343"]Kinetic Gun Damage[/keyword]. If that enemy dies or you press M3, the [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] find a new target.

Holding F ends [keyword id="#b45f06"]Peacebreaker Cannons[/keyword], and refunds a portion of the remaining [keyword id="#1c4587"]Action Skill Duration[/keyword] as [keyword id="#1c4587"]Action Skill Cooldown[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Turret Damage[/keyword]: 6
[keyword id="#1c4587"]Duration[/keyword]: 18 seconds
[keyword id="#1c4587"]Cooldown[/keyword]: 40 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "red",
    type: "action-skill"
  },
  sitiar: {
    icon: "icons/skills/rafa/ico_passive_exo_sitiar.webp",
    id: "sitiar",
    name: "Sitiar",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Gun Damage[/keyword]: +5%, +25%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "deft-hands": {
    icon: "icons/skills/rafa/ico_passive_exo_deft_hands.webp",
    id: "deft-hands",
    name: "Deft Hands",
    description: '[keyword id="#b45f06"]Rafa[/keyword] and his [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] gain increased [keyword id="#1c4587"]Fire Rate[/keyword]',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Fire Rate[/keyword]: +4%, +20%',
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "shield-barriest": {
    icon: "icons/skills/rafa/ico_passive_exo_happy_go_lucky.webp",
    id: "shield-barriest",
    name: "Shield Barriest",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Shield Recharge Rate[/keyword] and improved [keyword id="#1c4587"]Shield Regen Delay[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Shield Recharge Rate[/keyword]: +8%, +40%
[keyword id="#1c4587"]Shield Recharge Delay[/keyword]: +8%, +40%`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  juerga: {
    icon: "icons/skills/rafa/ico_passive_exo_juerga.webp",
    id: "juerga",
    name: "Juerga",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, [keyword id="#1c4587"]Action Skill Duration[/keyword] is restored.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Action Skill Duration Restore[/keyword]: +3%, +15%
[keyword id="#1c4587"]Cooldown[/keyword]: 4 seconds`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  instinto: {
    icon: "icons/augments/rafa/SkilliconExo_augment_Instincto.webp",
    id: "instinto",
    name: "Instinto",
    description: `Rafa's [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] gain increased [keyword id="#1c4587"]Critical Hit Chance[/keyword].

Pressing F while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active causes them to [keyword id="#1c4587"]Double[/keyword] their [keyword id="#1c4587"]Critical Hit Chance[/keyword] and gain increased [keyword id="#1c4587"]Critical Hit Damage[/keyword], while also causing his [keyword id="#1c4587"]Action Skill Duration[/keyword] to drain faster.

[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy causes [keyword id="#b45f06"]Rafa[/keyword] to regain [keyword id="#1c4587"]Action Skill Duration[/keyword], while also causing his [keyword id="#1c4587"]Action Skill Duration[/keyword] to [keyword id="#1c4587"]drain faster[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance[/keyword]: +20%
[keyword id="#1c4587"]Critical Hit Chance and Damage:[/keyword] +20% per stack
[keyword id="#1c4587"]Action Skill Duration Rate: +20% per stack
Action Skill Duration Restore: [/keyword]+10% on kill
[keyword id="#1c4587"]Duration Rate:[/keyword] +3% on each kill
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "field-repairs": {
    icon: "icons/skills/rafa/ico_passive_exo_flexible.webp",
    id: "field-repairs",
    name: "Field Repairs",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] activates an [keyword id="#1c4587"]Action Skill[/keyword], restore a portion of his [keyword id="#1c4587"]Maximum Shield Capacity[/keyword]. If his [keyword id="#1c4587"]Shields[/keyword] are already full, gain [keyword id="#1c4587"]Overshield instead[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Shields Restored[/keyword]: +15%, +45%',
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "bullet-buddy-deluxe": {
    icon: "icons/augments/rafa/SkilliconExo_augment_BulletDaddyDeluxe.webp",
    id: "bullet-buddy-deluxe",
    name: "Bullet-Buddy Deluxe",
    description: `While [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active, [keyword id="#b45f06"]Rafa[/keyword] and his allies [keyword id="#1c4587"]Regenerate Ammo[/keyword]. [keyword id="#b45f06"]Rafa's Peacebreaker Cannons[/keyword] deal [keyword id="#ea4335"]Bonus Fire Damage[/keyword] based on how full his [keyword id="#1c4587"]Gun[/keyword] is, and his [keyword id="#1c4587"]Turrets[/keyword] shoot [keyword id="#1c4587"]Exploding Bullets[/keyword] while his [keyword id="#1c4587"]Magazine[/keyword] is full.

Pressing F while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active causes [keyword id="#b45f06"]Rafa's[/keyword] shots to [keyword id="#1c4587"]consume no Ammo[/keyword], but causes his [keyword id="#1c4587"]Action Skill Duration[/keyword] to drain faster.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Bonus Incendiary Damage[/keyword]: Up to 25%
[keyword id="#1c4587"]Ammo Regen[/keyword]: +5% 
[keyword id="#1c4587"]Action Skill Duration Rate:[/keyword] +35% while active
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "red",
    type: "augment"
  },
  cya: {
    icon: "icons/skills/rafa/ico_passive_exo_fortunate_one.webp",
    id: "cya",
    name: "CYA",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy restores [keyword id="#1c4587"]Shields[/keyword] based on [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Maximum Health Capacity[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Shields Restored[/keyword]: +4% of Maximum Health, +20%',
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  resiliencia: {
    icon: "icons/skills/rafa/ico_passive_exo_gracile.webp",
    id: "resiliencia",
    name: "Resiliencia",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Damage Reduction[/keyword] while [keyword id="#b45f06"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Damage Reduction[/keyword]: +7.69%, +14.29%, +20%, +25%, +29.41%',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  maestro: {
    icon: "icons/skills/rafa/ico_passive_exo_loose_jointed.webp",
    id: "maestro",
    name: "Maestro",
    description: '[keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Skill Damage[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Skill Damage[/keyword]: +9%, +27%',
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  venganza: {
    icon: "icons/skills/rafa/ico_passive_exo_nine_lives.webp",
    id: "venganza",
    name: "Venganza",
    description: `Whenever [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Shields[/keyword] break after being fully recharged, spawn a free [keyword id="#1c4587"]Grenade[/keyword]. If he has a [keyword id="#1c4587"]Grenade[/keyword] equipped use that [keyword id="#1c4587"]Grenade[/keyword] instead.`,
    character: "rafa",
    attributes: "",
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "el-valiente": {
    icon: "icons/skills/rafa/ico_passive_exo_serendipitous.webp",
    id: "el-valiente",
    name: "El Valiente",
    description: `[keyword id="#b45f06"]Rafa[/keyword] deals increased [keyword id="#1c4587"]Damage[/keyword] from all sources. The fuller [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Shields[/keyword] are, the greater the bonus. While [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Shields[/keyword] are at [keyword id="#1c4587"]Maximum Capacity[/keyword], [keyword id="#1c4587"]double the bonus[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Damage Dealt[/keyword]: Up to +10%, +30%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "hell-in-a-shell": {
    icon: "icons/augments/rafa/SkilliconExo_augment_HellInAShell.webp",
    id: "hell-in-a-shell",
    name: "Hell in a Shell",
    description: `Pressing F while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active causes them to fire two [keyword id="#1c4587"]Large Firebombs[/keyword] that deal [keyword id="#ea4335"]Fire Damage[/keyword] to a large area. Killing enemies [keyword id="#1c4587"]Reduces[/keyword] this [keyword id="#1c4587"]Skill's Cooldown[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 150
[keyword id="#1c4587"]Cooldown[/keyword]: 30 seconds
[keyword id="#1c4587"]Cooldown Reduction[/keyword]: 6 seconds per kill`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "asymmetric-warfare": {
    icon: "icons/skills/rafa/ico_passive_exo_sideways_assault.webp",
    id: "asymmetric-warfare",
    name: "Asymmetric Warfare",
    description: '[keyword id="#1c4587"]Indirect Projectiles[/keyword] gain increased [keyword id="#1c4587"]Damage[/keyword]. [keyword id="#1c4587"]Indirect Projectiles[/keyword] include all [keyword id="#1c4587"]Action Skill Weapons[/keyword], [keyword id="#1c4587"]Thrown Weapons[/keyword], and [keyword id="#1c4587"]Projectiles[/keyword] not fired from your [keyword id="#1c4587"]Gun[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Indirect Projectile Damage[/keyword]: +9%, +45%',
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "errant-spark": {
    icon: "icons/skills/rafa/ico_passive_exo_brush_aside.webp",
    id: "errant-spark",
    name: "Errant Spark",
    description: 'All [keyword id="#1c4587"]Indirect Projectiles[/keyword] deal [keyword id="#ea4335"]Bonus Fire Damage[/keyword]. If the [keyword id="#1c4587"]Indirect Projectile[/keyword] already deals [keyword id="#1c4587"]Fire Damage[/keyword], double the [keyword id="#1c4587"]Bonus[/keyword] damage.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bonus Incendiary Damage[/keyword]: +8% of Damage Dealt, +40%',
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  ardid: {
    icon: "icons/skills/rafa/ico_passive_exo_ardid.webp",
    id: "ardid",
    name: "Ardid",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Indirect projectiles[/keyword] gain [keyword id="#1c4587"]Life Steal[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Lifesteal[/keyword]: +10%, +50%',
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "rolling-stone": {
    icon: "icons/skills/rafa/ico_passive_exo_fleet_footed.webp",
    id: "rolling-stone",
    name: "Rolling Stone",
    description: 'While moving, shots have a [keyword id="#1c4587"]Chance[/keyword] to [keyword id="#1c4587"]Bounce Off of[/keyword] [keyword id="#b45f06"]Rafa[/keyword]. This [keyword id="#1c4587"]Chance[/keyword] is doubled while [keyword id="#1c4587"]Sliding[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bounce Chance[/keyword]: +7%, +35%',
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "proprietary-incendiary": {
    icon: "icons/skills/rafa/ico_passive_exo_firestrm.webp",
    id: "proprietary-incendiary",
    name: "Proprietary Incendiary",
    description: `[keyword id="#1c4587"]Melee Override[/keyword]. Press V to lob a [keyword id="#b45f06"]STRM Glider[/keyword] at an enemy. Once it reaches its targets, it explodes and deals [keyword id="#ea4335"]Fire Splash Damage[/keyword] based on the [keyword id="#1c4587"]Ammo[/keyword] in [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Gun[/keyword] when he threw the [keyword id="#b45f06"]STRM Glider[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]STRM Glider Damage[/keyword]: Up to 89
[keyword id="#1c4587"]Cooldown[/keyword]: 28 seconds`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "double-ought-autoshot": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_DoubleOughtAutoshot.webp",
    id: "double-ought-autoshot",
    name: "Double-Ought Autoshot",
    description: `[keyword id="#b45f06"]Rafa's Peacebreaker Cannons'[/keyword] Weapons are replaced with [keyword id="#1c4587"]Shotguns[/keyword] that deal increased [keyword id="#1c4587"]Damage[/keyword] and have increased [keyword id="#1c4587"]Pellet Count[/keyword]. Additionally, [keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Turrets[/keyword] gain a chance to [keyword id="#1c4587"]Ricochet[/keyword] off of targets. [keyword id="#1c4587"]Ricochets[/keyword] deal [keyword id="#1c4587"]Reduced Damage[/keyword], and [keyword id="#1c4587"]Critical Hits[/keyword] always [keyword id="#1c4587"]Ricochet[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Damage[/keyword]: 4
[keyword id="#1c4587"]Pellets[/keyword]: 6
[keyword id="#1c4587"]Ricochet Chance[/keyword]: 10%
[keyword id="#1c4587"]Ricochet Damage[/keyword]: 50% of Damage Dealt`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "lateral-plinking": {
    icon: "icons/skills/rafa/ico_passive_exo_lateral_shot.webp",
    id: "lateral-plinking",
    name: "Lateral Plinking",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Indirect Projectiles[/keyword] gain a chance to [keyword id="#1c4587"]Ricochet[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Ricochet Chance[/keyword]: +25%',
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  confeti: {
    icon: "icons/skills/rafa/ico_passive_exo_confeti.webp",
    id: "confeti",
    name: "Confeti",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Ordnances[/keyword] deal [keyword id="#1c4587"]Bonus Damage[/keyword] in his current [keyword id="#1c4587"]Weapon's Element[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +8%, +40%',
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "insta-fort-battle-system": {
    icon: "icons/augments/rafa/SkilliconExo_augment_InstaFortBattleSystem.webp",
    id: "insta-fort-battle-system",
    name: "Insta-Fort Battle System",
    description: `Rafa's [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] also deal [keyword id="#1c4587"]Ordnance Damage[/keyword], and he deals increased [keyword id="#1c4587"]Ordnance Damage[/keyword] while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active.

Pressing F while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] are active causes them to disconnect from [keyword id="#b45f06"]Rafa[/keyword] and become a [keyword id="#1c4587"]Turret Companion[/keyword] that begins firing at enemies in place. Additionally, it will occasionally fire [keyword id="#1c4587"]Grenades[/keyword] at its targets. If [keyword id="#b45f06"]Rafa[/keyword] has a [keyword id="#1c4587"]Grenade[/keyword] Equipped, it copies that [keyword id="#1c4587"]Grenade[/keyword].

Pressing F again returns the [keyword id="#1c4587"]Turret Companion[/keyword] to [keyword id="#b45f06"]Rafa's[/keyword] back.`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Ordnance Damage[/keyword]: +25%',
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  vitriol: {
    icon: "icons/skills/rafa/ico_passive_exo_caustic_overload.webp",
    id: "vitriol",
    name: "Vitriol",
    description: `The first shot fired from [keyword id="#b45f06"]Rafa's[/keyword] fully-loaded [keyword id="#1c4587"]Magazine[/keyword] deals [keyword id="#34a853"]Bonus Corrosive Damage.[/keyword]`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Bonus Damage[/keyword]: +11%, +55%',
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "pain-reaction": {
    icon: "icons/skills/rafa/ico_passive_exo_two_for_the_show.webp",
    id: "pain-reaction",
    name: "Pain Reaction",
    description: `[keyword id="#b45f06"]Rafa's[/keyword] [keyword id="#1c4587"]Weapons[/keyword] gain a chance to [keyword id="#1c4587"]Ricochet[/keyword] off of enemies with [keyword id="#1c4587"]Status Effects[/keyword]. [keyword id="#1c4587"]Ricochet Damage[/keyword] is based on the [keyword id="#1c4587"]Damage Dealt[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Ricochet Chance[/keyword]: +3% per [keyword id="#1c4587"]Status Effect[/keyword], +15%',
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "concentrated-build-up": {
    icon: "icons/skills/rafa/ico_passive_exo_limitless.webp",
    id: "concentrated-build-up",
    name: "Concentrated Build-Up",
    description: `While Aiming with a Gun, [keyword id="#b45f06"]Rafa [/keyword]deals [keyword id="#1c4587"]Bonus Shock Damage[/keyword]. Each time [keyword id="#b45f06"]Rafa[/keyword] hits an enemy this way, deal increased [keyword id="#1c4587"]Bonus Damage[/keyword] until he zooms out.

This effect can stack.`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Bonus Damage[/keyword]: +2% of Damage Dealt, +10%
[keyword id="#1c4587"]Additional Bonus Damage[/keyword]: +0.5%, +2.5%
[keyword id="#1c4587"]Max Stacks[/keyword]: 20`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "el-alacran": {
    icon: "icons/skills/rafa/ico_passive_exo_open_them_up.webp",
    id: "el-alacran",
    name: "El Alacrán",
    description: `Enemies damaged by [keyword id="#b45f06"]Rafa's Peacebreaker Cannons[/keyword] have increased [keyword id="#1c4587"]Status Effect Chance[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Status Effect Chance[/keyword]: 35%
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds`,
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "beam-team": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_BeamTeam.webp",
    id: "beam-team",
    name: "Beam Team",
    description: `[keyword id="#b45f06"]Rafa's Peacebreaker Cannons'[/keyword] Weapons are replaced with a [keyword id="#0000ff"]Shock Beam[/keyword] and a [keyword id="#34a853"]Corrosive Beam[/keyword]. Each beam automatically locks onto enemies in your view, and may lock onto different enemies.

Whenever [keyword id="#b45f06"]Rafa[/keyword] applies a [keyword id="#1c4587"]Status Effect[/keyword], gain increased [keyword id="#1c4587"]Action Skill Damage[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Beam Damage[/keyword]: 23 per second
[keyword id="#1c4587"]Action Skill Damage[/keyword]: +5%
[keyword id="#1c4587"]Max Stacks[/keyword]: 50`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  inspirado: {
    icon: "icons/skills/rafa/ico_passive_exo_oportuno.webp",
    id: "inspirado",
    name: "Inspirado",
    description: 'Whenever [keyword id="#b45f06"]Rafa[/keyword] inflicts a [keyword id="#1c4587"]Status Effect[/keyword] on an enemy, gain increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword] and improved [keyword id="#1c4587"]Action Skill Duration Rate[/keyword]. This effect stacks.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate: [/keyword]+3%
[keyword id="#1c4587"]Action Skill Duration Rate:[/keyword] -3%
[keyword id="#1c4587"]Duration[/keyword]: 8 seconds
[keyword id="#1c4587"]Max Stacks[/keyword]: 5`,
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3,
    requirement: "concentrated-build-up"
  },
  barrage: {
    icon: "icons/skills/rafa/ico_passive_exo_barrage.webp",
    id: "barrage",
    name: "Barrage",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Splash Damage[/keyword] while [keyword id="#1c4587"]Overdrive[/keyword] is active.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Splash Damage[/keyword]: +7%, +35%',
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "unmissable-missiles": {
    icon: "icons/augments/rafa/SkilliconExo_augment_UnmissableMissiles.webp",
    id: "unmissable-missiles",
    name: "Unmissable Missiles",
    description: 'Pressing F while [keyword id="#b45f06"]Peacebreaker Cannons[/keyword] is active causes them to fire a volley of [keyword id="#1c4587"]Homing Rockets[/keyword] at enemies in view, at the cost of [keyword id="#1c4587"]Action Skill Duration[/keyword].',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Homing Rocket Damage[/keyword]: 61
[keyword id="#1c4587"]Rockets[/keyword]: 6
[keyword id="#1c4587"]Shot Cost[/keyword]: 5% of Max Duration per missile`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  everdrive: {
    icon: "icons/skills/rafa/ico_passive_exo_no_worries.webp",
    id: "everdrive",
    name: "Everdrive",
    description: '[keyword id="#b45f06"]Overdrive[/keyword] gains increased [keyword id="#1c4587"]Duration[/keyword].',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Overdrive Duration[/keyword]: +7%, +35%',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "devil-may-care": {
    icon: "icons/skills/rafa/ico_passive_exo_devil_may_care.webp",
    id: "devil-may-care",
    name: "Devil-May-Care",
    description: `[keyword id="#b45f06"]Overdrive Skill[/keyword]. While [keyword id="#b45f06"]Overdrive[/keyword] is active, [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Move Speed[/keyword], and gains [keyword id="#1c4587"]Health Regeneration[/keyword].

While [keyword id="#b45f06"]Overdrive[/keyword] is not active, [keyword id="#b45f06"]Rafa[/keyword] takes increased [keyword id="#1c4587"]Damage[/keyword] and gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].`,
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Move Speed[/keyword]: +6%, +30%
[keyword id="#1c4587"]Health Regeneration[/keyword]: +0.5% per second, +2.5%
[keyword id="#1c4587"]Damage Taken[/keyword]: +4%, +20%
[keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]: +4%, +20%`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  temerario: {
    icon: "icons/skills/rafa/ico_passive_exo_irresponsible.webp",
    id: "temerario",
    name: "Temerario",
    description: '[keyword id="#b45f06"]Overdrive Skill[/keyword]. [keyword id="#b45f06"]Rafa[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword], but decreased [keyword id="#1c4587"]Weapon Handling[/keyword]. This [keyword id="#1c4587"]Bonus[/keyword] is based on how long [keyword id="#b45f06"]Overdrive[/keyword] has been active.',
    character: "rafa",
    attributes: `[keyword id="#1c4587"]Gun Damage[/keyword]: +1% per second, +5%
[keyword id="#1c4587"]Gun Handling[/keyword]: -1% per second, -5%
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  soltado: {
    icon: "icons/skills/rafa/ico_passive_exo_dejarse_llevar.webp",
    id: "soltado",
    name: "Soltado",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#1c4587"]Double[/keyword] all [keyword id="#b45f06"]Overdrive[/keyword] Bonuses.',
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Duration[/keyword]: 8 seconds',
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "volatile-hollowpoints": {
    icon: "icons/capstones/rafa/SkilliconExo_capstone_VolatileHollowpoints.webp",
    id: "volatile-hollowpoints",
    name: "Volatile Hollowpoints",
    description: `[keyword id="#b45f06"]Rafa's Peacebreaker Cannons'[/keyword] Weapons are replaced with [keyword id="#1c4587"]Rockets[/keyword] that deal [keyword id="#1c4587"]Splash Damage[/keyword].`,
    character: "rafa",
    attributes: '[keyword id="#1c4587"]Rocket Damage[/keyword]: 33',
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  crucible: {
    icon: "icons/action-skills/amon/SkilliconPaladin_Skill_Warforge.webp",
    id: "crucible",
    name: "Crucible",
    description: `Charge Skill (3). [keyword id="#b45f06"]Amon[/keyword] readies Forgeaxes that can be thrown and picked up off the ground to refund Cooldown.\r
\r
Can throw a Flame Axe, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage, or a Frost Axe, dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Damage.\r
\r
Enemies damaged by Forgeaxes are Primed for a Duration, and will Detonate when they die or are damaged by a Forgeskill dealing Damage to nearby enemies.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgeaxe Damage:[/keyword] 91
[keyword id="#1c4587"]Forgeaxe Status Effect Damage:[/keyword] 6 per second
[keyword id="#1c4587"]Detonation Damage:[/keyword] 109 per [keyword id="#b45f06"]Prime[/keyword] Stack
[keyword id="#1c4587"]Prime Duration:[/keyword] 10 seconds
[keyword id="#1c4587"]Maximum Prime Stacks:[/keyword] 10
[keyword id="#1c4587"]Cooldown Refund:[/keyword] 50% on [keyword id="#1c4587"]pick up
Cooldown:[/keyword] 20`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "green",
    type: "action-skill"
  },
  "cast-iron": {
    icon: "icons/skills/amon/ico_passive_paladin_cast_iron.webp",
    id: "cast-iron",
    name: "Cast Iron",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Forgeskill Cooldown Rate and [keyword id="#1c4587"]Gun Handling[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgeskill Cooldown Rate:[/keyword] +5%, +25%
[keyword id="#1c4587"]Gun Handling:[/keyword] +6%, +30%`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "gathering-storm": {
    icon: "icons/skills/amon/ico_passive_paladin_building_storm.webp",
    id: "gathering-storm",
    name: "Gathering Storm",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] deals increased [keyword id="#1c4587"]Elemental Damage[/keyword] for a Duration.

This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Elemental Damage:[/keyword] +2% per stack, +10%
[keyword id="#1c4587"]Stack duration:[/keyword] 14 seconds 
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 3`,
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  executioner: {
    icon: "icons/skills/amon/ico_passive_paladin_weapon_master.webp",
    id: "executioner",
    name: "Executioner",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Critical Hit Damage[/keyword].

The effect is Doubled for a Duration after dealing Melee Damage.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Damage:[/keyword] +3%, +15%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 0,
    column: 3,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "get-the-lead-out": {
    icon: "icons/skills/amon/ico_passive_paladin_rapid_reload.webp",
    id: "get-the-lead-out",
    name: "Get The Lead Out",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Reload Speed[/keyword].

The effect is Doubled for a Duration after causing a Detonation.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Reload speed:[/keyword] +4%, +20%
[keyword id="#1c4587"]Doubled Duration:[/keyword] 12 seconds`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "destruction-engine": {
    icon: "icons/skills/amon/ico_passive_paladin_destruction_engine.webp",
    id: "destruction-engine",
    name: "Destruction Engine",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Forgeskill Damage and Detonation Damage.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgeskill Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Detonation Damage:[/keyword] +6%, +30%`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "axe-and-stone": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_AxeAndStone.webp",
    id: "axe-and-stone",
    name: "Axe and Stone",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Movement Speed[/keyword] for a Duration after damaging an enemy with a Forgeaxe, and can Detonate Primed enemies with a Melee Attack.

Detonating a Flame Axe restores [keyword id="#1c4587"]Action Skill Cooldown[/keyword].

Detonating a [keyword id="#00a79a"]Cryo[/keyword] Axe restores Ordnance Cooldown.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Movement speed:[/keyword] +40%
[keyword id="#1c4587"]Movement speed Duration:[/keyword] 4 seconds
[keyword id="#1c4587"]Active skill Cooldown Restoration:[/keyword] 33%
[keyword id="#1c4587"]Ordnance Cooldown Restoration:[/keyword] 33%`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "tempered-pyre": {
    icon: "icons/skills/amon/ico_passive_paladin_tempered_flame.webp",
    id: "tempered-pyre",
    name: "Tempered Pyre",
    description: `Forgedrone Skill. Whenever [keyword id="#b45f06"]Amon[/keyword] activates his Forgeskill, he spawns an Axe Forgedrone that attacks nearby enemies for a Duration, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage.

Activating a Forgeskill while Tempered Pyre is active fully Restores the Duration of all active Forgedrones.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Axe Forgedrone Damage:[/keyword] 12
[keyword id="#1c4587"]Duration:[/keyword] 20 seconds`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "endless-war": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_WarMachine.webp",
    id: "endless-war",
    name: "Endless War",
    description: `Primed enemies take increased [keyword id="#1c4587"]Gun Damage[/keyword] for each stack of Prime.

If [keyword id="#b45f06"]Amon[/keyword] Detonates a Primed enemy, a new Forgeaxe is spawned that seeks out a nearby enemy.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Gun Damage Taken:[/keyword] +15% per Prime stack
[keyword id="#1c4587"]Cooldown:[/keyword] 2 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "green",
    type: "augment"
  },
  "bolt-action": {
    icon: "icons/skills/amon/ico_passive_paladin_bolt_action.webp",
    id: "bolt-action",
    name: "Bolt Action",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] Reloads, his [keyword id="#1c4587"]Guns[/keyword] gain Bonus [keyword id="#0000ff"]Shock Damage[/keyword] for a Duration.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Bonus Shock Damage:[/keyword] +6%, +30%
[keyword id="#1c4587"]Duration:[/keyword] 4 seconds`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  bellows: {
    icon: "icons/skills/amon/ico_passive_paladin_excitable.webp",
    id: "bellows",
    name: "Bellows",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] Activates his Forgeskill, he gains increased [keyword id="#1c4587"]Gun Damage[/keyword] for a Duration.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +7%, +35%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "twin-tempers": {
    icon: "icons/skills/amon/ico_passive_paladin_twinned_armaments.webp",
    id: "twin-tempers",
    name: "Twin Tempers",
    description: `Tempered Pyre now spawns an additional Axe Forgedrone that deals [keyword id="#00a79a"]Cryo[/keyword] Melee Damage.

Forgedrones from Tempered Pyre have reduced Duration.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Reduced Duration:[/keyword] 20%',
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 1,
    requirement: "tempered-pyre"
  },
  "vital-organs": {
    icon: "icons/skills/amon/ico_passive_paladin_locked_in.webp",
    id: "vital-organs",
    name: "Vital Organs",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] with [keyword id="#1c4587"]Guns[/keyword] for a Duration.

This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Gun Critical Hit Chance:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Stack duration:[/keyword] 10 seconds
[keyword id="#1c4587"]Maximum Stacks: [/keyword]3`,
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "heralds-call": {
    icon: "icons/skills/amon/ico_passive_paladin_heralds_call.webp",
    id: "heralds-call",
    name: "Herald's Call",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#0000ff"]Shock Damage[/keyword].',
    character: "amon",
    attributes: "Shock Damage: +6%, +30%",
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "tempered-ice": {
    icon: "icons/skills/amon/ico_passive_paladin_tempered_ice.webp",
    id: "tempered-ice",
    name: "Tempered Ice",
    description: 'Forgedrone Skill. Whenever [keyword id="#b45f06"]Amon[/keyword] activates his Ordnance, he spawns a Hammer Forgedrone that attacks nearby enemies for a Duration, dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Damage.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Hammer Forgedrone Damage: [/keyword]17, 85
[keyword id="#1c4587"]Duration:[/keyword] 25 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 30 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "hour-of-the-hammer": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_HammerTime.webp",
    id: "hour-of-the-hammer",
    name: "Hour of the Hammer",
    description: `[keyword id="#b45f06"]Amon[/keyword] now readies Forgehammers, choosing Frost or [keyword id="#0000ff"]Shock[/keyword].

Enemies damaged by Forgehammer are Primed for a Duration, and will Detonate when they die or are damaged by a Forgeskill, dealing Damage to nearby enemies.

Can throw a [keyword id="#00a79a"]Cryo[/keyword] Hammer, dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Damage in an area on impact, or a [keyword id="#0000ff"]Shock[/keyword] Hammer, dealing [keyword id="#0000ff"]Shock[/keyword] Melee Damage in an area on impact.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Forgehammer Damage:[/keyword] 442',
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  cacophony: {
    icon: "icons/skills/amon/ico_passive_paladin_detonation_station.webp",
    id: "cacophony",
    name: "Cacophony",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Ordnance Damage[/keyword] and [keyword id="#b45f06"]Detonation Radius[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Detonation Radius:[/keyword] +7%, +35%`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  masterwork: {
    icon: "icons/skills/amon/ico_passive_paladin_empowered_weapons.webp",
    id: "masterwork",
    name: "Masterwork",
    description: '[keyword id="#b45f06"]Forgedrones[/keyword] gain increased [keyword id="#1c4587"]Damage[/keyword] and [keyword id="#1c4587"]Duration[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] +7%, +35%
[keyword id="#1c4587"]Duration:[/keyword] +5%, +25%`,
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "tempered-ice"
  },
  "endless-bombardment": {
    icon: "icons/skills/amon/ico_passive_paladin_engineering.webp",
    id: "endless-bombardment",
    name: "Endless Bombardment",
    description: `[keyword id="#1c4587"]Grenades[/keyword] have a Chance to [keyword id="#1c4587"]refund themselves[/keyword] on use.

[keyword id="#1c4587"]Heavy Ordnance[/keyword] have a Chance to [keyword id="#1c4587"]refund 1 Ammo[/keyword] on damaging enemies.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Grenade Return: [/keyword]+6%, +30%
[keyword id="#1c4587"]Heavy weapons: [/keyword]+6%, +30%`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  stoked: {
    icon: "icons/skills/amon/ico_passive_paladin_annihilation.webp",
    id: "stoked",
    name: "Stoked",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] deals [keyword id="#1c4587"]Ordnance Damage[/keyword], he gains increased [keyword id="#1c4587"]Fire Rate[/keyword] for a [keyword id="#1c4587"]Duration[/keyword].

This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Fire rate:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Stack Duration: [/keyword]12
[keyword id="#1c4587"]Maximum Stacks: [/keyword]3`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "ordained-hammer": {
    icon: "icons/skills/amon/ico_passive_paladin_ordained_hammer.webp",
    id: "ordained-hammer",
    name: "Ordained Hammer",
    description: '[keyword id="#b45f06"]Hammer Forgedrones[/keyword] now deal [keyword id="#1c4587"]Ordnance Damage[/keyword] in addition to their other types and gain a Chance to cause a [keyword id="#1c4587"]Detonation[/keyword] on damaging enemies, dealing [keyword id="#00a79a"]Cryo Damage[/keyword] in an area.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Detonation Chance:[/keyword] 25%',
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 1,
    requirement: "masterwork"
  },
  snowmaul: {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_BoomingBlows.webp",
    id: "snowmaul",
    name: "Snowmaul",
    description: `[keyword id="#b45f06"]Double-Edge[/keyword] is now [keyword id="#b45f06"]Snowmaul[/keyword].

Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to throw a [keyword id="#b45f06"]Twinned Forgehammer[/keyword], dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Damage to nearby enemies on impact that [keyword id="#1c4587"]Ricochets[/keyword] between nearby enemies up to 3 times. If no [keyword id="#1c4587"]Ricochet[/keyword] targets are found, it deals [keyword id="#1c4587"]Damage[/keyword] an additional time before destroying itself.

For each [keyword id="#b45f06"]Detonation[/keyword] caused, it [keyword id="#1c4587"]Ricochets[/keyword] an additional time.`,
    character: "amon",
    attributes: `Twin Forged Hammer Damage: 350
Cooldown: 30 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "blast-furnace": {
    icon: "icons/skills/amon/ico_passive_paladin_escalation.webp",
    id: "blast-furnace",
    name: "Blast Furnace",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] or his Forgedrones Critically Hit an enemy or cause a Detonation, he gains increased Damage Dealt for a Duration. Detonations grant multiple Stacks.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage Dealt: [/keyword]+0.25% per Stack, +1.25%
[keyword id="#1c4587"]Stacks from Detonations: [/keyword]+5
[keyword id="#1c4587"]Stack Duration: [/keyword]12 seconds
[keyword id="#1c4587"]Maximum Stacks: [/keyword]30`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "blade-tempest": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_StormOfSwords.webp",
    id: "blade-tempest",
    name: "Blade Tempest",
    description: `[keyword id="#b45f06"]Amon[/keyword] now readies Forgeswords, choosing Flame or [keyword id="#0000ff"]Shock[/keyword]. Whenever activated, consume all Charges to launch a Barrage of Forgeswords.\r
\r
Enemies damaged by Forgeswords are Primed for a Duration, and will Detonate when they die or are damaged by a Forgeskill dealing Damage to the target, but none to nearby enemies.\r
\r
Can fire a Barrage of Flame Swords, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage, or a Barrage of [keyword id="#0000ff"]Shock[/keyword] Swords, dealing [keyword id="#0000ff"]Shock[/keyword] Melee Damage.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgesword Damage:[/keyword] 222
[keyword id="#1c4587"]Detonation Damage:[/keyword] 242 per [keyword id="#b45f06"]Prime[/keyword] Stack
[keyword id="#1c4587"]Forgeswords:[/keyword] 3 per Charge`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "tempered-lightning": {
    icon: "icons/skills/amon/ico_passive_paladin_tempered_lightning.webp",
    id: "tempered-lightning",
    name: "Tempered Lightning",
    description: `Forgedrone Skill. Whenever [keyword id="#b45f06"]Amon[/keyword] activates his [keyword id="#b45f06"]Action Skill[/keyword], he spawns a Sword Forgedrone that attacks nearby enemies for a Duration, dealing [keyword id="#0000ff"]Shock[/keyword] Melee Damage.

Activating an [keyword id="#b45f06"]Action Skill[/keyword] while Tempered Lightning is active will partially Restore the Duration of all active Forgedrones.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Sword Forgedrone Damage: [/keyword]+9, +45
[keyword id="#1c4587"]Duration: [/keyword]18 seconds`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "armor-of-contempt": {
    icon: "icons/skills/amon/ico_passive_paladin_iron_dome.webp",
    id: "armor-of-contempt",
    name: "Armor of Contempt",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains [keyword id="#1c4587"]Overshield[/keyword] when he deals [keyword id="#1c4587"]Action Skill Damage[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Overshield:[/keyword] +3% of [keyword id="#1c4587"]Action Skill Damage[/keyword] Dealt, +15%',
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "lightning-rod": {
    icon: "icons/skills/amon/ico_passive_paladin_lightning_rod.webp",
    id: "lightning-rod",
    name: "Lightning Rod",
    description: `[keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Gun[/keyword] Shots have a Chance on Critical Hit to spawn an Elemental Bolt, dealing [keyword id="#0000ff"]Shock Damage[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Elemental Bolt Chance:[/keyword] 25%
[keyword id="#1c4587"]Elemental Bolt Damage: [/keyword]+30% of Damage Dealt, +150%
[keyword id="#1c4587"]Cooldown:[/keyword] 8 seconds`,
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  escalation: {
    icon: "icons/skills/amon/ico_passive_paladin_quickened_weapons.webp",
    id: "escalation",
    name: "Escalation",
    description: 'Forgedrones gain increased [keyword id="#1c4587"]Attack Speed[/keyword] and [keyword id="#1c4587"]Movement Speed[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Attack Speed:[/keyword] +3%, +15%
[keyword id="#1c4587"]Movement speed:[/keyword] +3%, +15%`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "tempered-lightning"
  },
  "storm-surge": {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_StormShatter.webp",
    id: "storm-surge",
    name: "Storm Surge",
    description: `Double-Edge is now Storm Surge.

Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to throw a Twinned Forgeblade, dealing [keyword id="#0000ff"]Shock[/keyword] Melee Damage in an area on impact.

Storm Surge creates a Forgestorm on impact for a Duration, dealing [keyword id="#0000ff"]Shock[/keyword] Status Effect Damage over time.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Twinned Forgeblade Damage: [/keyword]504
[keyword id="#1c4587"]Forged Storm Damage:[/keyword] 101 per second
[keyword id="#1c4587"]Duration:[/keyword] 18 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 35 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "honed-point": {
    icon: "icons/skills/amon/ico_passive_paladin_sharpened_weapons.webp",
    id: "honed-point",
    name: "Honed Point",
    description: `Forgedrones have a Chance to Critically Hit.

Whenever a Forgedrone [keyword id="#1c4587"]Critically Hits[/keyword], they partially restore [keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Action Skill Cooldown[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance:[/keyword] +4%, +12%
[keyword id="#1c4587"]Active skill cooldown recovery:[/keyword] +2%, +6%`,
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 3,
    requirement: "escalation"
  },
  permafrost: {
    icon: "icons/skills/amon/ico_passive_paladin_cryogenic_impulse.webp",
    id: "permafrost",
    name: "Permafrost",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] [keyword id="#00a79a"]Freezes[/keyword] an enemy, [keyword id="#00a79a"]Cryo[/keyword] Hazard is created under them, dealing [keyword id="#00a79a"]Cryo Damage[/keyword] for a Duration.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] +7 per second, +35
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 15 seconds`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "searing-cold": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_FrostFire.webp",
    id: "searing-cold",
    name: "Searing Cold",
    description: `Frost Axes apply [keyword id="#00a79a"]Freeze[/keyword] on impact.

Flame Axes now pass through enemies.`,
    character: "amon",
    attributes: "",
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "raging-inferno": {
    icon: "icons/skills/amon/ico_passive_paladin_raging_inferno.webp",
    id: "raging-inferno",
    name: "Raging Inferno",
    description: '[keyword id="#1c4587"]Action Skill Damage[/keyword] has a Chance to Critically Hit and Burn enemies when it does.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance:[/keyword] +3%, +15%
[keyword id="#1c4587"]Burn Damage:[/keyword] +12% of [keyword id="#1c4587"]Damage Dealt[/keyword] per second, +60%`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  wildheart: {
    icon: "icons/skills/amon/ico_passive_paladin_brightburn.webp",
    id: "wildheart",
    name: "Wildheart",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Status Effect Damage and Hazard Damage.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Status Effect Damage: [/keyword]+11%, +33%
[keyword id="#1c4587"]Hazard Damage:[/keyword] +11%, +33%`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "freezer-burn": {
    icon: "icons/skills/amon/ico_passive_paladin_heat_exchange_a.webp",
    id: "freezer-burn",
    name: "Freezer Burn",
    description: `Dealing [keyword id="#ea4335"]Incendiary Damage[/keyword] with [keyword id="#1c4587"]Guns[/keyword] increases [keyword id="#00a79a"]Cryo Damage[/keyword] for a Duration.\r
Dealing [keyword id="#00a79a"]Cryo Damage[/keyword] with [keyword id="#1c4587"]Guns[/keyword] increases [keyword id="#ea4335"]Incendiary Damage[/keyword] for a Duration.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Cryo Damage:[/keyword] +7%, +35%
[keyword id="#1c4587"]Incendiary Damage:[/keyword] +7%, +35%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds`,
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "reactive-armor": {
    icon: "icons/skills/amon/ico_passive_paladin_elemental_font.webp",
    id: "reactive-armor",
    name: "Reactive Armor",
    description: `Detonations partially Restore [keyword id="#b45f06"]Amon[/keyword]'s Shield and Ordnance Cooldown.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Shield Restoration:[/keyword] +7%, +35%
[keyword id="#1c4587"]Ordnance Cooldown Restoration:[/keyword] +6%, +30%`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "reverse-explosion": {
    icon: "icons/skills/amon/ico_passive_paladin_pull_of_the_elements.webp",
    id: "reverse-explosion",
    name: "Reverse Explosion",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] deals Forgeskill Damage, he creates a Drone [keyword id="#1c4587"]Singularity[/keyword] for a Duration.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 60 seconds`,
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  conflangarang: {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_Conflagarang.webp",
    id: "conflangarang",
    name: "Conflangarang",
    description: `Double-Edge now deals [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage in both directions, gains increased Radius, and leaves a trail of Fire as it travels if close enough to the ground, dealing [keyword id="#ea4335"]Incendiary Damage[/keyword] over time.

Causing a Detonation or damaging an enemy with Conflangarang will restore Forgeskill Cooldown.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Double-Edge Radius:[/keyword] +33%
[keyword id="#1c4587"]Fire Trail Damage:[/keyword] 81 per second
[keyword id="#1c4587"]Fire Trail Duration:[/keyword] 5 seconds
[keyword id="#1c4587"]Forgeskill Cooldown Restoration:[/keyword] 10%
[keyword id="#1c4587"]Cooldown:[/keyword] 40 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  scourge: {
    icon: "icons/action-skills/amon/SkilliconPaladin_Skill_Scourge.webp",
    id: "scourge",
    name: "Scourge",
    description: `[keyword id="#b45f06"]Amon[/keyword] equips a Forgeshield that absorbs all frontal Damage as Vengeance. Whenever the Vengeance Meter is filled, Forgeshield provides Damage Reduction instead. Vengeance drains rapidly if it has not been gained recently.\r
\r
Press [keyword id="#b45f06"]Action Skill[/keyword] to launch a Forgewave, dealing [keyword id="#00a79a"]Cryo[/keyword] Ordnance Damage to enemies it passes through, consuming Vengeance to increase Damage Dealt.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Maximum Vengeance: [/keyword]185
[keyword id="#1c4587"]Damage Reduction:[/keyword] 60%
[keyword id="#1c4587"]Forgewave Damage:[/keyword] 49
[keyword id="#1c4587"]Vengeance Consumed:[/keyword] 20% on using [keyword id="#b45f06"]Forgewave[/keyword]
[keyword id="#1c4587"]Duration:[/keyword] 18 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 60 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "blue",
    type: "action-skill"
  },
  "wrath-of-nature": {
    icon: "icons/skills/amon/ico_passive_paladin_wrath_of_nature.webp",
    id: "wrath-of-nature",
    name: "Wrath of Nature",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Status Effect Application Chance[/keyword] and [keyword id="#00a79a"]Cryo[/keyword] Effectiveness.\r
\r
This effect is Doubled when his [keyword id="#b45f06"]Action Skill[/keyword] is active.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Status Effect Application Chance:[/keyword] +7.5%, +37.5%
[keyword id="#1c4587"]Cryo Effectiveness:[/keyword] +7.5%, +37.5%`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "scorched-kairos": {
    icon: "icons/skills/amon/ico_passive_paladin_demolitionist.webp",
    id: "scorched-kairos",
    name: "Scorched Kairos",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Ordnance Damage and Magazine Size.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Ordnance Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Magazine Size:[/keyword] +6%, +30%`,
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "the-thrill-2": {
    icon: "icons/skills/amon/ico_passive_paladin_resolute.webp",
    id: "the-thrill-2",
    name: "The Thrill",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains Missing [keyword id="#1c4587"]Health Regeneration[/keyword].\r
\r
Every time [keyword id="#b45f06"]Amon[/keyword] takes or absorbs Non-Status Effect Damage, he gains a Stack of Resolute for a Duration, which increases this effect.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Health Regeneration:[/keyword] +2%, +6%
I[keyword id="#1c4587"]ncreased Missing Health Regeneration:[/keyword] +10% per Stack of [keyword id="#b45f06"]Resolute[/keyword], +30%
[keyword id="#1c4587"]Stack Duration:[/keyword] 14 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 20`,
    board: 0,
    row: 0,
    column: 3,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  battleborn: {
    icon: "icons/skills/amon/ico_passive_paladin_battleborn.webp",
    id: "battleborn",
    name: "Battleborn",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] the more Full his Health.\r
\r
This effect is Doubled while [keyword id="#b45f06"]Amon[/keyword] is at Maximum Health.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Gun Damage:[/keyword] +3% when [keyword id="#1c4587"]Full[/keyword], +15%',
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  eternal: {
    icon: "icons/skills/amon/ico_passive_paladin_perpetual.webp",
    id: "eternal",
    name: "Eternal",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Action Skill Duration[/keyword] and [keyword id="#1c4587"]Gun[/keyword] Swap Speed.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Active Skill Duration: [/keyword]+4%, +20%
[keyword id="#1c4587"]Gun Swap Speed:[/keyword] +6.67%, +13.33%, +20.00%, +26.67%, +33.33%`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  blastchill: {
    icon: "icons/augments/amon/SkilliconPaladin_augment_Forgestar.webp",
    id: "blastchill",
    name: "Blastchill",
    description: `Forgewaves now consume more Vengeance and explode on impact, dealing [keyword id="#00a79a"]Cryo[/keyword] Ordnance Damage in an area.\r
\r
Explosion Radius is further increased if the Forgewave passes through Firewall.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgewave Damage:[/keyword] 59
[keyword id="#1c4587"]Vengeance Consumed:[/keyword] 30% on using [keyword id="#b45f06"]Forgewave[/keyword]
[keyword id="#1c4587"]Explosion Radius:[/keyword] +50%`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "tail-of-the-comet": {
    icon: "icons/skills/amon/ico_passive_paladin_frostbite.webp",
    id: "tail-of-the-comet",
    name: "Tail of the Comet",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] deals Ordnance Damage, there is a Chance to apply a [keyword id="#00a79a"]Cryo[/keyword] Status Effect that deals [keyword id="#00a79a"]Cryo Damage[/keyword] over time for a Duration.\r
\r
Tail of the Comet is affected by [keyword id="#1c4587"]Status Effect Application Chance[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Cryo Application Chance:[/keyword] 30%
[keyword id="#1c4587"]Damage:[/keyword] +12% of [keyword id="#1c4587"]Damage Dealt[/keyword] per second, +60%
[keyword id="#1c4587"]Duration:[/keyword] 4 seconds`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "cryonic-thrum": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_LiquidCoolingArray.webp",
    id: "cryonic-thrum",
    name: "Cryonic Thrum",
    description: `While Scourge is active, [keyword id="#b45f06"]Amon[/keyword] Taunts enemies and sends out a [keyword id="#00a79a"]Cryo[/keyword]nic Pulse every second, dealing [keyword id="#00a79a"]Cryo Damage[/keyword] to enemies, and restoring Allies' Health.\r
\r
While Aiming, [keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Movement Speed[/keyword] is reduced, but [keyword id="#b45f06"]Amon[/keyword] gains Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] with [keyword id="#1c4587"]Guns[/keyword] and consumes Vengeance on each [keyword id="#1c4587"]Gun[/keyword] Shot.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Pulse Damage:[/keyword] 20
[keyword id="#1c4587"]Health Restoration:[/keyword] 20
[keyword id="#1c4587"]Movement Speed: [/keyword]-60% while [keyword id="#1c4587"]Aiming[/keyword]
[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] 35%
[keyword id="#1c4587"]Vengeance Consumed:[/keyword] 2.5%`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "blue",
    type: "augment"
  },
  "scar-tissue": {
    icon: "icons/skills/amon/ico_passive_paladin_vigor.webp",
    id: "scar-tissue",
    name: "Scar Tissue",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Maximum Health Capacity and Repkit Healing.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Maximum Health Capacity:[/keyword] +8%, +40%
[keyword id="#1c4587"]Repkit Healing:[/keyword] +8%, +40%`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "bullet-hail": {
    icon: "icons/skills/amon/ico_passive_paladin_bullet_hail.webp",
    id: "bullet-hail",
    name: "Bullet Hail",
    description: `[keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Gun[/keyword] Shots have a Chance to Ricochet as an Elemental Shard, dealing [keyword id="#00a79a"]Cryo Damage[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Ricochet Chance:[/keyword] +4%
[keyword id="#1c4587"]Cryo Damage:[/keyword] 75% of the [keyword id="#1c4587"]Damage Dealt[/keyword]`,
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  machinist: {
    icon: "icons/skills/amon/ico_passive_paladin_machinist.webp",
    id: "machinist",
    name: "Machinist",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] Restores a percentage of Ordnance Cooldown.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Ordnance Cooldown Restoration:[/keyword] +7%, +21%',
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "ancient-ways": {
    icon: "icons/skills/amon/ico_passive_paladin_ancient_ways.webp",
    id: "ancient-ways",
    name: "Ancient Ways",
    description: '[keyword id="#b45f06"]Amon[/keyword] deals increased [keyword id="#00a79a"]Cryo Damage[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Cryo Damage: [/keyword]+6%, +30%',
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "warriors-cup": {
    icon: "icons/skills/amon/ico_passive_paladin_feedback_loop.webp",
    id: "warriors-cup",
    name: "Warrior's Cup",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] uses a Repkit while his [keyword id="#b45f06"]Action Skill[/keyword] is active, partially restore [keyword id="#1c4587"]Action Skill Duration[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Action Skill Duration Restoration:[/keyword] +6%, +30%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  wildfire: {
    icon: "icons/skills/amon/ico_passive_paladin_wildfire.webp",
    id: "wildfire",
    name: "Wildfire",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Ricochet Damage, Burning Damage, and Burning Duration.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Ricochet Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Burning Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Burning Duration:[/keyword] +5%, +25%`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "molten-rebuke": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_MoltenRebuke.webp",
    id: "molten-rebuke",
    name: "Molten Rebuke",
    description: `Forgewave is now Molten Rebuke.\r
\r
Press [keyword id="#b45f06"]Action Skill[/keyword] to Consume all Vengeance and throw the Forgeshield at target enemy, dealing [keyword id="#ea4335"]Incendiary[/keyword] Ordnance Damage, and Ricocheting on impact. Molten Rebuke Ricochets additional times based on Vengeance consumed.\r
\r
Whenever the Forgeshield is thrown, Damage Absorption is Disabled until it returns.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgeshield Damage:[/keyword] 188
[keyword id="#1c4587"]Additional Ricochets:[/keyword] +1 per 20% [keyword id="#b45f06"]Vengeance[/keyword] [keyword id="#1c4587"]consumed[/keyword]`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "burning-rage": {
    icon: "icons/skills/amon/ico_passive_paladin_flame_affinity.webp",
    id: "burning-rage",
    name: "Burning Rage",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy with [keyword id="#ea4335"]Incendiary Damage[/keyword] will grant a Stack of Flame Affinity for a Duration. Flame Affinity Stacks grant increased [keyword id="#1c4587"]Reload Speed[/keyword] and [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Reload speed:[/keyword] +0.8% per Stack, 4.0%
[keyword id="#1c4587"]Active skill cooldown: [/keyword]+1.2% per Stack, +6.0%
[keyword id="#1c4587"]Stack Duration:[/keyword] 30 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 5`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "ballistic-bulwark": {
    icon: "icons/skills/amon/ico_passive_paladin_ballistic_shielding.webp",
    id: "ballistic-bulwark",
    name: "Ballistic Bulwark",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains [keyword id="#1c4587"]Overshield[/keyword] when he deals Ordnance Damage.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Overshield:[/keyword] 3% of [keyword id="#1c4587"]Ordnance Damage[/keyword] Dealt, 15%',
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "disco-infernus": {
    icon: "icons/skills/amon/ico_passive_paladin_disco_inferno.webp",
    id: "disco-infernus",
    name: "Disco Infernus",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] applies Burning to an enemy, he gains increased [keyword id="#1c4587"]Fire Rate[/keyword] for a Duration.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Fire rate:[/keyword] +2.0% per Stack, +10.0%
[keyword id="#1c4587"]Stack Duration:[/keyword] 7 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 3`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  worldbreaker: {
    icon: "icons/skills/amon/ico_passive_paladin_worldbreaker.webp",
    id: "worldbreaker",
    name: "Worldbreaker",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] Ground [keyword id="#1c4587"]Slams[/keyword], he consumes all Flame Affinity Stacks to create a Flame Fissure in front of him, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage to all enemies hit.\r
\r
Worldbreaker deals Bonus Damage for each Stack of Flame Affinity consumed.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] +54, +270
[keyword id="#1c4587"]Bonus Damage:[/keyword] +25% per Stack
[keyword id="#1c4587"]Cooldown:[/keyword] 60 seconds`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "burning-rage"
  },
  "ring-of-frostfire": {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_RingofFrostfire.webp",
    id: "ring-of-frostfire",
    name: "Ring of Frostfire",
    description: `Firewall is now a Ring that deals [keyword id="#ea4335"]Incendiary[/keyword] Status Effect Damage to enemies inside of it, and [keyword id="#00a79a"]Cryo Damage[/keyword] to enemies who enter or leave.\r
\r
Firewall grants Friendly Projectiles that pass through it further increased Damage and Projectile Speed.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Incendiary Damage:[/keyword] 61 per second
[keyword id="#1c4587"]Cryo Damage:[/keyword] 202
[keyword id="#1c4587"]Friendly Projectile Damage:[/keyword] +50%
[keyword id="#1c4587"]Friendly Projectile Speed:[/keyword] +100%
[keyword id="#1c4587"]Cooldown: [/keyword]60 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "cooling-mantle": {
    icon: "icons/skills/amon/ico_passive_paladin_attenuation.webp",
    id: "cooling-mantle",
    name: "Cooling Mantle",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Partially Restore Worldbreaker's Cooldown.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Cooldown Restoration:[/keyword] 6 seconds',
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1,
    requirement: "worldbreaker"
  },
  "icy-rage": {
    icon: "icons/skills/amon/ico_passive_paladin_cryo_affinity.webp",
    id: "icy-rage",
    name: "Icy Rage",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy with [keyword id="#00a79a"]Cryo Damage[/keyword] will grant a Stack of [keyword id="#00a79a"]Cryo[/keyword] Affinity for a Duration. [keyword id="#00a79a"]Cryo[/keyword] Affinity Stacks grant increased [keyword id="#1c4587"]Gun Damage[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +1.25% per Stack, 6.25%
[keyword id="#1c4587"]Stack Duration:[/keyword] 30 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 5`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "eternal-winter": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_EternalWinter.webp",
    id: "eternal-winter",
    name: "Eternal Winter",
    description: `Forgewaves now partially restore [keyword id="#1c4587"]Action Skill Duration[/keyword] and Firewall Duration on damaging enemies, and can be activated three times in succession.\r
\r
The third activation launches a Massive Forgewave that deals increased Damage and does not consume Vengeance.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Action Skill Duration Restoration:[/keyword] 2.5%
[keyword id="#1c4587"]Firewall Duration Restoration:[/keyword] 5%
[keyword id="#1c4587"]Massive Forgewave Damage:[/keyword] 314`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "northern-wind": {
    icon: "icons/skills/amon/ico_passive_paladin_brittle_hallow_points.webp",
    id: "northern-wind",
    name: "Northern Wind",
    description: `[keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Gun[/keyword] [keyword id="#1c4587"]Critical Hits[/keyword] have a Chance to apply additional Slow to enemies, as if dealt [keyword id="#00a79a"]Cryo Damage[/keyword].\r
\r
Chance is Doubled while his [keyword id="#b45f06"]Action Skill[/keyword] is active.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Slow Chance:[/keyword] 3%, 15%
[keyword id="#1c4587"]Slow Amount:[/keyword] 25%`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "winters-kiss": {
    icon: "icons/skills/amon/ico_passive_paladin_elemental_echoes.webp",
    id: "winters-kiss",
    name: "Winter's Kiss",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] deals Ordnance Damage, he consumes a Stack of [keyword id="#00a79a"]Cryo[/keyword] Affinity for each nearby enemy to spawn an Elemental Shard, dealing [keyword id="#00a79a"]Cryo Damage[/keyword] in an area.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Cryo Damage:[/keyword] +8% of [keyword id="#1c4587"]Damage Dealt[/keyword], +40%',
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "icy-rage"
  },
  "primal-surge": {
    icon: "icons/skills/amon/ico_passive_paladin_elemental_surge.webp",
    id: "primal-surge",
    name: "Primal Surge",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] applies a Status Effect to an enemy, there is a Chance to partially restore his Shield and Ammo.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Restoration Chance:[/keyword] 25%
[keyword id="#1c4587"]Shield Restoration:[/keyword] 3%, 15% 
[keyword id="#1c4587"]Ammo Restoration:[/keyword] 6%, 30%`,
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "age-of-ice": {
    icon: "icons/skills/amon/ico_passive_paladin_age_of_ice.webp",
    id: "age-of-ice",
    name: "Age of Ice",
    description: '[keyword id="#b45f06"]Amon[/keyword] deals increased Damage to Frozen enemies and Bosses.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Damage:[/keyword] +6%, +30%',
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "caroming-shard": {
    icon: "icons/skills/amon/ico_passive_paladin_split_echoes.webp",
    id: "caroming-shard",
    name: "Caroming Shard",
    description: "Elemental Shard has a Chance to Ricochet.",
    character: "amon",
    attributes: '[keyword id="#1c4587"]Ricochet Chance:[/keyword] +7%, +21%',
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3,
    requirement: "winters-kiss"
  },
  "glacial-rapture": {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_CryonicFissure.webp",
    id: "glacial-rapture",
    name: "Glacial Rapture",
    description: `Firewall is now Glacial Rapture.\r
\r
Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to swing Forgewhips, dealing [keyword id="#00a79a"]Cryo[/keyword] Ordnance Damage over 2 Hits to nearby enemies before slamming into the ground, creating a [keyword id="#00a79a"]Cryo[/keyword]nic Fissure that deals [keyword id="#00a79a"]Cryo[/keyword] Ordnance Damage and leaves [keyword id="#00a79a"]Cryo[/keyword] Hazards for a Duration.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgewhip Damage:[/keyword] 202 per [keyword id="#1c4587"]Hit[/keyword]
[keyword id="#1c4587"]Fissure Damage:[/keyword] 404
[keyword id="#1c4587"]Hazard Damage:[/keyword] 202 per second
[keyword id="#1c4587"]Hazard duration:[/keyword] 6 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 70 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  blackout: {
    icon: "icons/skills/amon/ico_passive_paladin_flashbang.webp",
    id: "blackout",
    name: "Blackout",
    description: 'Ordnance Damage has a Chance to Critically Hit, and [keyword id="#0000ff"]Shock[/keyword] enemies when they do.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Rate:[/keyword] +3%, +15%
[keyword id="#1c4587"]Shock Damage:[/keyword] +21% of [keyword id="#1c4587"]Damage Dealt [/keyword]per second, +105%`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  stormlance: {
    icon: "icons/augments/amon/SkilliconPaladin_augment_StormsCall.webp",
    id: "stormlance",
    name: "Stormlance",
    description: `Press [keyword id="#b45f06"]Action Skill[/keyword] to throw a Forgespear, dealing [keyword id="#0000ff"]Shock[/keyword] Ordnance Damage on impact, consuming Vengeance to increase Damage Dealt.\r
\r
Enemies damaged by Forgespear are Primed for a Duration, and will Detonate when they are damaged by a Forgeskill, dealing [keyword id="#0000ff"]Shock Damage[/keyword] to the target, but none to nearby enemies.\r
\r
Detonations can also be caused by [keyword id="#1c4587"]Gun[/keyword] [keyword id="#1c4587"]Critical Hits[/keyword], but deal less Damage.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgespear Damage:[/keyword] 417
[keyword id="#1c4587"]Vengeance Consumed:[/keyword] 20%
[keyword id="#1c4587"]Detonation Damage:[/keyword] 304
[keyword id="#1c4587"]Gun Critical Hit Detonation Multiplier: [/keyword]50%
[keyword id="#1c4587"]Prime Duration:[/keyword] 10 seconds
[keyword id="#1c4587"]Maximum Prime Stacks:[/keyword] 10`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "thunderous-rage": {
    icon: "icons/skills/amon/ico_passive_paladin_shock_affinity.webp",
    id: "thunderous-rage",
    name: "Thunderous Rage",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy with [keyword id="#0000ff"]Shock Damage[/keyword] will grant a Stack of [keyword id="#0000ff"]Shock[/keyword] Affinity for a Duration. [keyword id="#0000ff"]Shock[/keyword] Affinity Stacks grant increased [keyword id="#1c4587"]Critical Hit Damage[/keyword].',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Damage:[/keyword] +1.25% per Stack, 6.25%
[keyword id="#1c4587"]Stack Duration:[/keyword] 30 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 5`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  tactician: {
    icon: "icons/skills/amon/ico_passive_paladin_tactician.webp",
    id: "tactician",
    name: "Tactician",
    description: `While Hipfiring, [keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Fire Rate[/keyword], but decreased [keyword id="#1c4587"]Gun Handling[/keyword].\r
\r
While Aiming, [keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword] and [keyword id="#1c4587"]Gun Handling[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Fire Rate:[/keyword] +4% while Hipfiring, +20%
[keyword id="#1c4587"]Hipfire Gun Handling:[/keyword] -6%, -30%
[keyword id="#1c4587"]Gun Damage:[/keyword] +5% while Aiming, +25%
[keyword id="#1c4587"]Aiming Gun Handling:[/keyword] +6%, +30%`,
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  smelter: {
    icon: "icons/skills/amon/ico_passive_paladin_forecast.webp",
    id: "smelter",
    name: "Smelter",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] Restores a percentage of Forgeskill Cooldown.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Forgeskill Cooldown Restoration: [/keyword]+3%, +15%',
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "strike-the-anvil": {
    icon: "icons/skills/amon/ico_passive_paladin_elemental_bolt.webp",
    id: "strike-the-anvil",
    name: "Strike the Anvil",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] deals [keyword id="#1c4587"]Action Skill Damage[/keyword], he consumes a Stack of [keyword id="#0000ff"]Shock[/keyword] Affinity to cause an Elemental Bolt to strike that enemy, dealing [keyword id="#0000ff"]Shock Damage[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Shock Damage:[/keyword] +12.5% of [keyword id="#1c4587"]Damage Dealt[/keyword], +62.5%',
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "thunderous-rage"
  },
  wrathfall: {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_StormSmite.webp",
    id: "wrathfall",
    name: "Wrathfall",
    description: `Firewall is now Wrathfall.\r
\r
Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to call down a Massive Forgesword to strike a target enemy, dealing [keyword id="#0000ff"]Shock[/keyword] Ordnance Damage to enemies in the area.\r
\r
Wrathfall always [keyword id="#1c4587"]Critically Hits[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 336
[keyword id="#1c4587"]Cooldown: [/keyword]45 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "high-voltage": {
    icon: "icons/skills/amon/ico_passive_paladin_high_voltage.webp",
    id: "high-voltage",
    name: "High Voltage",
    description: `Elemental Bolts now Stagger enemies, and consume an additional Stack of [keyword id="#0000ff"]Shock[/keyword] Affinity to Multiply Damage Dealt.\r
\r
Bosses cannot be Staggered, and Badasses have a reduced Chance to be Staggered.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Damage Multiplier:[/keyword] 200%',
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1,
    requirement: "strike-the-anvil"
  },
  onslaughter: {
    icon: "icons/action-skills/amon/SkilliconPaladin_Skill_Onslaught.webp",
    id: "onslaughter",
    name: "Onslaughter",
    description: `[keyword id="#b45f06"]Amon[/keyword] overloads his Forgefist, gaining constant Shield Regeneration, Bonus [keyword id="#ea4335"]Incendiary Damage[/keyword] with [keyword id="#1c4587"]Guns[/keyword], and increased [keyword id="#1c4587"]Movement Speed[/keyword].\r
\r
Press [keyword id="#b45f06"]Action Skill[/keyword] or Melee to Rocket Punch, Dashing to target enemy, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Attack Damage in a short-ranged Cone, and causing Stagger.\r
\r
Bosses cannot be Staggered, and Badasses have a chance to be Staggered.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Rocket Punch Damage:[/keyword] 239
[keyword id="#1c4587"]Shield Regeneration:[/keyword] 10%
[keyword id="#1c4587"]Bonus Incendiary Damage:[/keyword] 25%
[keyword id="#1c4587"]Movement speed:[/keyword] 30%
[keyword id="#1c4587"]Duration:[/keyword] 18 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 50 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "red",
    type: "action-skill"
  },
  impetus: {
    icon: "icons/skills/amon/ico_passive_paladin_adaptive_charge.webp",
    id: "impetus",
    name: "Impetus",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] gains increased Shield Regeneration Rate and [keyword id="#1c4587"]Movement Speed[/keyword] for a Duration.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Shield Regeneration Rate: [/keyword]+5% per Stack, +15%
[keyword id="#1c4587"]Movement Speed: [/keyword]+3% per Stack, +9%
[keyword id="#1c4587"]Stack Duration:[/keyword] 15 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 3`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "what-burns-within": {
    icon: "icons/skills/amon/ico_passive_paladin_heat_exchange_b.webp",
    id: "what-burns-within",
    name: "What Burns Within",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#ea4335"]Incendiary Damage[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Incendiary Damage:[/keyword] +6%, +30%',
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  discombobulate: {
    icon: "icons/skills/amon/ico_passive_paladin_brass_knuckles.webp",
    id: "discombobulate",
    name: "Discombobulate",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains melee critical strike chance.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Melee Critical Hit Chance:[/keyword] +5%, +25%',
    board: 0,
    row: 0,
    column: 3,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "heavy-plate": {
    icon: "icons/skills/amon/ico_passive_paladin_armored_plating.webp",
    id: "heavy-plate",
    name: "Heavy Plate",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Melee Damage and Skill Damage.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Maximum Shield Capacity: [/keyword]+6%, +30%
[keyword id="#1c4587"]Maximum Overshield Capacity: [/keyword]+9%, +45%`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "wield-the-storm": {
    icon: "icons/skills/amon/ico_passive_paladin_wield_the_storm.webp",
    id: "wield-the-storm",
    name: "Wield the Storm",
    description: `Increases [keyword id="#b45f06"]Amon[/keyword]'s status effect damage and duration.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Status Effect Damage: [/keyword]+6%, +30%
[keyword id="#1c4587"]Status Effect Duration: [/keyword]+6%, +30%`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  pyroclast: {
    icon: "icons/augments/amon/SkilliconPaladin_augment_Dronezerker.webp",
    id: "pyroclast",
    name: "Pyroclast",
    description: `Whenever Onslaughter is activated, [keyword id="#b45f06"]Amon[/keyword] fully Restores his Health and Shield, and is surrounded by a Forgestorm that deals [keyword id="#ea4335"]Incendiary[/keyword] Status Effect Damage to nearby enemies over time.\r
\r
[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an enemy inside of the Forgestorm restores [keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Action Skill Duration[/keyword], and increases Forgestorm's Damage.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgestorm Damage: [/keyword]40 per second
[keyword id="#1c4587"]Active Skill Duration Restoration:[/keyword] 20%
[keyword id="#1c4587"]Forgestorm Damage Multiplier: [/keyword]20% per kill
[keyword id="#1c4587"]Maximum Damage Multiplier: [/keyword]200%`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "gut-punch": {
    icon: "icons/skills/amon/ico_passive_paladin_weakening_blast.webp",
    id: "gut-punch",
    name: "Gut Punch",
    description: `Melee Damage and Ordnance Damage have a chance to apply Weakness to enemies for a Duration.

Weakened enemies deal reduced Damage, and take increased Damage.

Weakness is affected by [keyword id="#1c4587"]Status Effect Duration[/keyword], and is itself considered a Status Effect.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Melee Chance: [/keyword]+20%, +60%
[keyword id="#1c4587"]Ordnance Chance:[/keyword] +10%, +30%
[keyword id="#1c4587"]Enemy Damage Dealt:[/keyword] -40%
[keyword id="#1c4587"]Enemy Damage Taken: [/keyword]+20%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "thermal-diffusion": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_AdaptiveCore.webp",
    id: "thermal-diffusion",
    name: "Thermal Diffusion",
    description: `Rocket Punch now has two modes, gains increased Radius, and deals Bonus Damage based on [keyword id="#b45f06"]Amon[/keyword]'s [keyword id="#1c4587"]Maximum Shield Capacity[/keyword].\r
\r
Pressing [keyword id="#b45f06"]Action Skill[/keyword] causes Rocket Punch to deal [keyword id="#ea4335"]Incendiary[/keyword] Melee Attack Damage.\r
\r
Pressing Melee causes Rocket Punch to deal [keyword id="#00a79a"]Cryo[/keyword] Melee Attack Damage.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Rocket Punch Radius: [/keyword]+100%
[keyword id="#1c4587"]Bonus Damage:[/keyword] 20% of [keyword id="#1c4587"]Maximum Shield Capacity[/keyword]`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "red",
    type: "augment"
  },
  "tritanium-knuckles": {
    icon: "icons/skills/amon/ico_passive_paladin_doom_fist.webp",
    id: "tritanium-knuckles",
    name: "Tritanium Knuckles",
    description: `Increases [keyword id="#b45f06"]Amon[/keyword]'s melee damage and skill damage.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Melee Damage: [/keyword]+7%, +35%
[keyword id="#1c4587"]Skill Damage: [/keyword]+3%, +9%`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "forged-in-steel": {
    icon: "icons/skills/amon/ico_passive_paladin_forged_in_steel.webp",
    id: "forged-in-steel",
    name: "Forged In Steel",
    description: '[keyword id="#b45f06"]Amon[/keyword] becomes immune to all Damage for a brief Duration whenever he activates a Forgeskill.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Duration:[/keyword] 6 seconds',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "bullet-storm": {
    icon: "icons/skills/amon/ico_passive_paladin_bullet_storm.webp",
    id: "bullet-storm",
    name: "Bullet Storm",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] applies a Status Effect, he gains increased [keyword id="#1c4587"]Gun Damage[/keyword] for a Duration.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Gun Damage: [/keyword]+1.5% per Stack, +7.5%
[keyword id="#1c4587"]Stack Duration:[/keyword] 10 seconds
[keyword id="#1c4587"]Maximum stacks:[/keyword] 5`,
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "metal-urge": {
    icon: "icons/skills/amon/ico_passive_paladin_momentum.webp",
    id: "metal-urge",
    name: "Metal Urge",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] deals [keyword id="#1c4587"]Gun Damage[/keyword], he gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword] for a Duration.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate: [/keyword]+0.5% per Stack, +2.5%
[keyword id="#1c4587"]Stack Duration: [/keyword]12 seconds
[keyword id="#1c4587"]Maximum stacks:[/keyword] 20`,
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "the-best-defense": {
    icon: "icons/skills/amon/ico_passive_paladin_the_best_defense.webp",
    id: "the-best-defense",
    name: "The Best Defense",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains [keyword id="#1c4587"]Overshield[/keyword] when dealing [keyword id="#1c4587"]Melee Damage[/keyword].',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Overshield:[/keyword] +3% of [keyword id="#1c4587"]Melee Damage[/keyword] Dealt, +15%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  berserk: {
    icon: "icons/skills/amon/ico_passive_paladin_berserk.webp",
    id: "berserk",
    name: "Berserk",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] activates his Forgeskill, he becomes Berserk for a Duration, gaining Slow Immunity, and Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] with [keyword id="#1c4587"]Gun Damage[/keyword] and Melee Damage.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] +6%, +30%
[keyword id="#1c4587"]Duration:[/keyword] 15 seconds`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  fellfrost: {
    icon: "icons/augments/amon/SkilliconPaladin_augment_Frostfell.webp",
    id: "fellfrost",
    name: "Fellfrost",
    description: `Pressing [keyword id="#b45f06"]Action Skill[/keyword] immediately after a Rocket Punch causes [keyword id="#b45f06"]Amon[/keyword] to use a follow-up attack, dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Attack Damage in a large area in front of [keyword id="#b45f06"]Amon[/keyword].\r
\r
Non-Boss enemies hit below 25% Total HP are killed.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Follow Up Damage:[/keyword] 491',
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  bloodlust: {
    icon: "icons/skills/amon/ico_passive_paladin_bloodlust.webp",
    id: "bloodlust",
    name: "Bloodlust",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword]'s Shield Breaks, he gains Bloodlust for a Duration, gaining increased [keyword id="#1c4587"]Reload Speed[/keyword] and Lifesteal.\r
\r
Bloodlust is also activated on [keyword id="#b45f06"]Action Skill[/keyword] Activation.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Reload speed: [/keyword]+6%, +30%
[keyword id="#1c4587"]Lifesteal:[/keyword] +3%, +15%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "there-is-only-red": {
    icon: "icons/skills/amon/ico_passive_paladin_seeing_red.webp",
    id: "there-is-only-red",
    name: "There Is Only Red",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Whenever [keyword id="#b45f06"]Amon[/keyword] kills an enemy while Berserk is active, partially restore Berserk's Duration, and increase Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] from Berserk. Passive (requires a point in Berserk)`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Duration Restoration:[/keyword] +3 seconds, +9
[keyword id="#1c4587"]Increased Bonus Damage:[/keyword] +20% per kill, +60%
[keyword id="#1c4587"]Maximum Increased Bonus Damage:[/keyword] +200%, +600%`,
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3,
    requirement: "berserk"
  },
  rimebreak: {
    icon: "icons/skills/amon/ico_passive_paladin_emergency_refresh.webp",
    id: "rimebreak",
    name: "Rimebreak",
    description: `When [keyword id="#b45f06"]Amon[/keyword]'s shield is broken, it partially restores its shield and detonates, dealing [keyword id="#00a79a"]Cryo damage[/keyword] to all nearby enemies and freezing them.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Shield Restoration: [/keyword]+15%, +45%
[keyword id="#1c4587"]Damage:[/keyword] +135, +405
[keyword id="#1c4587"]Cooldown:[/keyword] 45 seconds`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "brimming-vigor": {
    icon: "icons/skills/amon/ico_passive_paladin_frost_titan.webp",
    id: "brimming-vigor",
    name: "Brimming Vigor",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Maximum Health Capacity and deals increased Melee Damage the more full his Health.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Maximum Health Capacity:[/keyword] +7%, +35%
[keyword id="#1c4587"]Melee Damage:[/keyword] +7% when [keyword id="#1c4587"]full[/keyword], +35%`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "my-touch-is-death": {
    icon: "icons/skills/amon/ico_passive_paladin_ancestral_strikes.webp",
    id: "my-touch-is-death",
    name: "My Touch Is Death",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] deals Melee Damage, there is a chance to Activate [keyword id="#1c4587"]Kill Skill[/keyword]s.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Chance:[/keyword] +8%, +24%',
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  hoarcleave: {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_Hoarcleave.webp",
    id: "hoarcleave",
    name: "Hoarcleave",
    description: `Molten Slam is now Hoarcleave.\r
\r
Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to swing a Massive Forgeaxe, launching a Forgewave that deals [keyword id="#00a79a"]Cryo[/keyword] Melee Damage and [keyword id="#00a79a"]Freezes[/keyword] enemies it passes through.\r
\r
Enemies killed by Hoarcleave cause a Detonation, dealing [keyword id="#00a79a"]Cryo Damage[/keyword].`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgewave Damage: [/keyword]442
[keyword id="#1c4587"]Detonation Damage:[/keyword] 417
[keyword id="#1c4587"]Cooldown: [/keyword]65 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "into-the-fray": {
    icon: "icons/skills/amon/ico_passive_paladin_into_the_fray.webp",
    id: "into-the-fray",
    name: "Into the Fray",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased Damage Dealt and Damage Reduction based on his distance from the enemy.\r
\r
The closer the enemy, the greater the bonus.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage Dealt:[/keyword] +5% when close, +25%
[keyword id="#1c4587"]Damage Reduction:[/keyword] +17% when close, +29%, +38%, +44%, +50%`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "force-of-nature": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_PrimalStrikes.webp",
    id: "force-of-nature",
    name: "Force of Nature",
    description: `While Onslaughter is active, [keyword id="#1c4587"]Gun Damage[/keyword] dealt to enemies will Prime them for a Duration, and will Detonate when they die or are damaged by a Forgeskill, dealing [keyword id="#ea4335"]Incendiary Damage[/keyword] to nearby enemies.\r
\r
Detonations can also be caused by Melee Attack Damage, but deal less Damage.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Detonation Damage:[/keyword] 100% of [keyword id="#1c4587"]Gun Damage[/keyword] Dealt
[keyword id="#1c4587"]Prime Duration: [/keyword]10 seconds
[keyword id="#1c4587"]Melee Detonation Multiplier: [/keyword]50%
[keyword id="#1c4587"]Maximum Prime Stacks: [/keyword]10`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment",
    maxRank: 0
  },
  "burning-ramparts": {
    icon: "icons/skills/amon/ico_passive_paladin_burning_man.webp",
    id: "burning-ramparts",
    name: "Burning Ramparts",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Fire Rate[/keyword] and [keyword id="#1c4587"]Status Effect Chance[/keyword] the more full his Shields.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Fire Rate:[/keyword] +4% when [keyword id="#1c4587"]full[/keyword], +20%
[keyword id="#1c4587"]Status Effect Chance:[/keyword] +8% when [keyword id="#1c4587"]full[/keyword], +40%`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  harbinger: {
    icon: "icons/skills/amon/ico_passive_paladin_harbinger.webp",
    id: "harbinger",
    name: "Harbinger",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Amon[/keyword] gains increased Melee Damage and [keyword id="#1c4587"]Maximum Shield Capacity[/keyword] for a Duration.\r
\r
This effect can stack.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Melee Damage:[/keyword] +1% per Stack, +5%
[keyword id="#1c4587"]Maximum Shield Capacity:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Stack Duration:[/keyword] 20 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 5`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  rearm: {
    icon: "icons/skills/amon/ico_passive_paladin_rearm.webp",
    id: "rearm",
    name: "Rearm",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] deals Damage with a Melee Attack, his current [keyword id="#1c4587"]Gun[/keyword] has its Ammo partially refilled.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Ammo Refill:[/keyword] +20% of [keyword id="#1c4587"]Ammo Capacity[/keyword], +60%',
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "maiming-strike": {
    icon: "icons/skills/amon/ico_passive_paladin_weakening_blows.webp",
    id: "maiming-strike",
    name: "Maiming Strike",
    description: `[keyword id="#1c4587"]Gun[/keyword] [keyword id="#1c4587"]Critical Hits[/keyword] have a chance to apply Weakness to enemies for a Duration.\r
\r
Weakened enemies deal reduced Damage, and take increased Damage.\r
\r
Weakness is affected by [keyword id="#1c4587"]Status Effect Duration[/keyword], and is itself considered a Status Effect.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Application Chance:[/keyword] +8%, +24%
[keyword id="#1c4587"]Enemy Damage Dealt:[/keyword] -40%
[keyword id="#1c4587"]Enemy Damage Taken:[/keyword] +20%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "molten-roil": {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_Aftershock.webp",
    id: "molten-roil",
    name: "Molten Roil",
    description: `Molten Slam gains increased Radius and Stores Damage. Pyres erupt under up to 3 enemies after a delay.

Pyres deal additional [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage based on Damage Stored by Molten Slam, distributed [keyword id="#b45f06"]among[/keyword] the remaining targets.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Radius:[/keyword] +33%
[keyword id="#1c4587"]Damage Stored:[/keyword] 40% of[keyword id="#1c4587"] Damage Dealt[/keyword]
[keyword id="#1c4587"]Cooldown:[/keyword] 90 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone",
    maxRank: 3,
    requirement: "maiming-strike"
  },
  "mortal-flare": {
    icon: "icons/skills/amon/ico_passive_paladin_flare_up.webp",
    id: "mortal-flare",
    name: "Mortal Flare",
    description: 'Whenever [keyword id="#b45f06"]Amon[/keyword] kills a Weakened enemy, they Detonate, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage to nearby enemies.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] +125, +375
[keyword id="#1c4587"]Cooldown: [/keyword]5 seconds`,
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  catastrophe: {
    icon: "icons/skills/amon/ico_passive_paladin_cataclysm_a.webp",
    id: "catastrophe",
    name: "Catastrophe",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] applies [keyword id="#0000ff"]Shock[/keyword] to an enemy, he gains increased [keyword id="#1c4587"]Critical Hit Chance[/keyword] for a Duration.\r
\r
Whenever [keyword id="#b45f06"]Amon[/keyword] applies Burning to an enemy, he gains increased [keyword id="#1c4587"]Critical Hit Damage[/keyword] for a Duration.\r
\r
Both effects stack separately.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance:[/keyword] +1% per Stack, +5%
[keyword id="#1c4587"]Critical Hit Damage:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds
[keyword id="#1c4587"]Maximum Stacks:[/keyword] 3`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "fulminating-fist": {
    icon: "icons/augments/amon/SkilliconPaladin_augment_FulminatingFist.webp",
    id: "fulminating-fist",
    name: "Fulminating Fist",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains increased [keyword id="#1c4587"]Status Effect Chance[/keyword] while Onslaughter is active.\r
\r
Pressing [keyword id="#b45f06"]Action Skill[/keyword] launches a concentrated Lightning Wave that deals [keyword id="#0000ff"]Shock[/keyword] Melee Attack Damage to enemies it passes through.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Lightning Wave Damage:[/keyword] 190
[keyword id="#1c4587"]Status Effect Chance:[/keyword] +30%`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "dragons-breath": {
    icon: "icons/skills/amon/ico_passive_paladin_stopping_power.webp",
    id: "dragons-breath",
    name: "Dragon's Breath",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] Activates his Ordnance, his next [keyword id="#1c4587"]Gun[/keyword] Shot is converted to [keyword id="#ea4335"]Incendiary Damage[/keyword], Staggering damaged enemies, and gaining increased Damage Dealt.\r
\r
Bosses cannot be Staggered, and Badasses have a chance to be Staggered.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Damage Increase:[/keyword] +20%, +100%',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  judgment: {
    icon: "icons/skills/amon/ico_passive_paladin_judgement.webp",
    id: "judgment",
    name: "Judgment",
    description: '[keyword id="#b45f06"]Amon[/keyword] deals increased Melee Damage to enemies below 50% total HP.',
    character: "amon",
    attributes: '[keyword id="#1c4587"]Melee Damage: [/keyword]+8%, +40%',
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "fists-of-stone": {
    icon: "icons/skills/amon/ico_passive_paladin_thunderclap.webp",
    id: "fists-of-stone",
    name: "Fists of Stone",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] deals Melee Damage, Restore a percentage of Forgeskill Cooldown.\r
\r
Melee Attacks Double this effect.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Forgeskill Cooldown Restoration:[/keyword] +1%, +5%',
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "crackling-aegis": {
    icon: "icons/skills/amon/ico_passive_paladin_shield_matrix.webp",
    id: "crackling-aegis",
    name: "Crackling Aegis",
    description: '[keyword id="#b45f06"]Amon[/keyword] gains increased Status Effect Damage and Ordnance Damage based on his Shields. The fuller his Shield, the greater the effect.',
    character: "amon",
    attributes: `[keyword id="#1c4587"]Status Effect Damage:[/keyword] +8% when [keyword id="#1c4587"]full[/keyword], +24%
[keyword id="#1c4587"]Ordnance Damage:[/keyword] +8% when[keyword id="#1c4587"] full[/keyword], +24%`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "electrical-fire": {
    icon: "icons/skills/amon/ico_passive_paladin_electrical_fire.webp",
    id: "electrical-fire",
    name: "Electrical Fire",
    description: `Whenever [keyword id="#b45f06"]Amon[/keyword] Burns an enemy, he also [keyword id="#0000ff"]Shock[/keyword]s them.\r
\r
Whenever [keyword id="#b45f06"]Amon[/keyword] [keyword id="#0000ff"]Shock[/keyword]s an enemy, he also Burns them.`,
    character: "amon",
    attributes: '[keyword id="#1c4587"]Cooldown:[/keyword] 2 Seconds',
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  stormcutter: {
    icon: "icons/capstones/amon/SkilliconPaladin_Capstone_ThunderousVeil.webp",
    id: "stormcutter",
    name: "Stormcutter",
    description: `Molten Slam is now Stormcutter.

Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to swing a Massive Forgesword, launching a Forgewave that deals [keyword id="#0000ff"]Shock[/keyword] Melee Damage to all enemies it passes through.

Restore [keyword id="#1c4587"]Action Skill Cooldown[/keyword], [keyword id="#1c4587"]Action Skill Duration[/keyword], and Ordnance Cooldown for each enemy hit.`,
    character: "amon",
    attributes: `[keyword id="#1c4587"]Forgewave Damage: [/keyword]385
[keyword id="#1c4587"]Action Skill Cooldown Restoration: [/keyword]20%
[keyword id="#1c4587"]Action Skill Duration Restoration:[/keyword] 20%
[keyword id="#1c4587"]Ordnance Cooldown Restoration: [/keyword]20%
[keyword id="#1c4587"]Cooldown:[/keyword] 75 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  forgeskill: {
    icon: "icons/traits/amon/vh_trait_paladin_icon.webp",
    id: "forgeskill",
    name: "Forgeskill",
    description: `[keyword id="#b45f06"]Amon[/keyword] gains Forgeskill, depending on his equipped [keyword id="#b45f06"]Action Skill[/keyword].

Forgeskills can be Activated by pressing and holding an [keyword id="#b45f06"]Action Skill[/keyword].

Molten Slam (Onslaughter [keyword id="#b45f06"]Action Skill[/keyword] equipped): Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to Slam a Molten Forgehammer into the ground, dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage to enemies in a large area.

Firewall (Scourge [keyword id="#b45f06"]Action Skill[/keyword] equipped): Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to deploy a Firewall that absorbs enemy Projectiles, and grants Friendly Projectiles that pass through it increased Damage and Projectile Speed. Absorbed Damage is converted into Vengeance if Scourge is active. Enemies near Firewall take [keyword id="#ea4335"]Incendiary[/keyword] Status Effect Damage over time.

Double-Edge (Crucible [keyword id="#b45f06"]Action Skill[/keyword] equipped): Press and hold [keyword id="#b45f06"]Action Skill[/keyword] to throw a twinned Forgeaxe, dealing [keyword id="#00a79a"]Cryo[/keyword] Melee Damage to enemies it passes through and returning to [keyword id="#b45f06"]Amon[/keyword], dealing [keyword id="#ea4335"]Incendiary[/keyword] Melee Damage on the way back.`,
    character: "amon",
    attributes: "",
    board: null,
    row: null,
    column: null,
    type: "vault-hunter-trait"
  },
  "zero-point": {
    icon: "icons/action-skills/harlowe/SkilliconGrav_skill_Stasis.webp",
    id: "zero-point",
    name: "Zero-Point",
    description: `Press [keyword id="#b45f06"]Action Skill[/keyword] to use [keyword id="#b45f06"]Harlowe[/keyword]'s HALO Accelerator to place an enemy in [keyword id="#b45f06"]Stasis[/keyword] for a duration. Enemies immune to [keyword id="#b45f06"]Stasis[/keyword] take Damage instead.

Pressing [keyword id="#b45f06"]Action Skill[/keyword] again causes the enemy in [keyword id="#b45f06"]Stasis[/keyword] to be [keyword id="#1c4587"]slammed[/keyword] into the ground in the direction [keyword id="#b45f06"]Harlowe[/keyword] is facing, and creates a small explosion.

Retriggering [keyword id="#b45f06"]Stasis[/keyword] has a Cooldown`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Slam Damage:[/keyword] 282
[keyword id="#1c4587"]Immune Damage:[/keyword] 572
[keyword id="#1c4587"]Duration:[/keyword] 10 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 35 seconds
[keyword id="#1c4587"]Retrigger Cooldown:[/keyword] 1.5 second`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "blue",
    type: "action-skill"
  },
  "quantum-immortality": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_spirit_away.webp",
    id: "quantum-immortality",
    name: "Quantum Immortality",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Entangles[/keyword] an enemy, she gains [keyword id="#1c4587"]Health Regeneration[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Health Regeneration:[/keyword] +1%, +5%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "parallel-circuit": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_eager.webp",
    id: "parallel-circuit",
    name: "Parallel Circuit",
    description: 'After triggering or retriggering an [keyword id="#b45f06"]Action Skill[/keyword], [keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Gun Damage[/keyword]',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +6%, +30%
[keyword id="#1c4587"]Duration: [/keyword]8 seconds`,
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "pulse-drive": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_make_time.webp",
    id: "pulse-drive",
    name: "Pulse Drive",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Cooldown Rate: [/keyword]+5%, +25%',
    board: 0,
    row: 0,
    column: 3,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "make-extraordinary": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_make_extraordinary.webp",
    id: "make-extraordinary",
    name: "Make Extraordinary",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] with all Skills. This chance increases every time [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Entangles[/keyword] an enemy. This effect stacks.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Critical Hit Chance:[/keyword] +2%, +10%
[keyword id="#1c4587"]Additional Critical Hit Chance:[/keyword] +1%, +5%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "bright-future": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_bright_future.webp",
    id: "bright-future",
    name: "Bright Future",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] triggers or retriggers an [keyword id="#b45f06"]Action Skill[/keyword], she gains increased [keyword id="#1c4587"]Fire Rate[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Fire Rate:[/keyword] +6%, +30%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "strange-attractor": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_BulletMagnet.webp",
    id: "strange-attractor",
    name: "Strange Attractor",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] shoots an enemy with a [keyword id="#1c4587"]Gun[/keyword], bullets Ricochet off of that enemy onto all enemies in [keyword id="#b45f06"]Stasis[/keyword]. If [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, that enemy becomes [keyword id="#b45f06"]Entangled[/keyword].',
    character: "harlowe",
    attributes: "",
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "negative-entropy": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_dazzling_determination.webp",
    id: "negative-entropy",
    name: "Negative Entropy",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Gun Handling[/keyword]. This bonus is Doubled while an enemy is in [keyword id="#b45f06"]Stasis[/keyword]',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Gun Handling: [/keyword]+13%, +65%',
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "peer-review": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_PeerReview.webp",
    id: "peer-review",
    name: "Peer Review",
    description: `Whenever an enemy enters [keyword id="#b45f06"]Stasis[/keyword], spawn a homing Rejuvenation Projectile that targets [keyword id="#b45f06"]Harlowe[/keyword] or her Allies once the enemy is [keyword id="#1c4587"]Slammed[/keyword], killed, or Status ends.

The Rejuvenation Projectile grants decreased [keyword id="#1c4587"]Action Skill Duration[/keyword] Rate and increased [keyword id="#b45f06"]Action Skill[/keyword] Cooldown Rate for a Duration 

If that target is in Fight For Your Life, they immediately gain [keyword id="#1c4587"]Second Wind[/keyword] as if they kill an enemy.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +50%
[keyword id="#1c4587"]Action Skill Duration Rate:[/keyword] -50%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "blue",
    type: "augment"
  },
  "periodic-table-flip": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_warm_heart.webp",
    id: "periodic-table-flip",
    name: "Periodic Table Flip",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Elemental Damage[/keyword], [keyword id="#1c4587"]Status Effect Application Chance[/keyword], and [keyword id="#00a79a"]Cryo[/keyword] Effectiveness.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Elemental Damage:[/keyword] +4%, +20%
[keyword id="#1c4587"]Status Effect Application Chance:[/keyword] +4%, +20%
[keyword id="#1c4587"]Cryo Effectiveness:[/keyword] +4%, +20%`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "ripple-effect": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_coupling.webp",
    id: "ripple-effect",
    name: "Ripple Effect",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] kills an [keyword id="#b45f06"]Entangled[/keyword] enemy, automatically [keyword id="#b45f06"]Entangle[/keyword] another nearby enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Nearby Enemies:[/keyword] +1',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "precision-engineering": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_glow_up.webp",
    id: "precision-engineering",
    name: "Precision Engineering",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased Critical Hit Damage.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Critical Hit Damage: [/keyword]+10%, +30%',
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3,
    requirement: "negative-entropy"
  },
  "too-coolant-for-schoolant": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_solstice.webp",
    id: "too-coolant-for-schoolant",
    name: "Too Coolant For Schoolant",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] deals [keyword id="#00a79a"]Cryo Damage[/keyword], gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +7%, +35%
[keyword id="#1c4587"]Duration:[/keyword] 4 Seconds`,
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  cryodynamics: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_cool_wisdom.webp",
    id: "cryodynamics",
    name: "Cryodynamics",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#00a79a"]Cryo Damage[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Cryo Damage: [/keyword]+7%, +21%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3,
    requirement: "periodic-table-flip"
  },
  concurrence: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_concurrence.webp",
    id: "concurrence",
    name: "Concurrence",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Action Skill Duration[/keyword] for every [keyword id="#b45f06"]Entangled[/keyword] enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Duration:[/keyword] +3% per [keyword id="#b45f06"]Entangled[/keyword] enemy, +15%',
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "wildcat-destabilization": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_MorePower.webp",
    id: "wildcat-destabilization",
    name: "Wildcat Destabilization",
    description: `[keyword id="#b45f06"]Entangled[/keyword] enemies take Bonus [keyword id="#b8b800"]Radiation Damage[/keyword] from [keyword id="#b45f06"]Entangle[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] deals [keyword id="#b8b800"]Radiation[/keyword] [keyword id="#1c4587"]Gun Damage[/keyword] to an enemy, restore [keyword id="#1c4587"]Action Skill Duration[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] kills an enemy in [keyword id="#b45f06"]Stasis[/keyword], create a [keyword id="#b8b800"]Radiation[/keyword] Nova.

The [keyword id="#b8b800"]Radiation[/keyword] Nova deals Damage based on remaining [keyword id="#b45f06"]Action Skill[/keyword] Duration.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonus Radiation Damage:[/keyword] 25% of [keyword id="#1c4587"]Damage Dealt[/keyword]
[keyword id="#1c4587"]Duration Restored: [/keyword]1% of [keyword id="#1c4587"]Duration[/keyword]
[keyword id="#1c4587"]Radiation Nova Damage:[/keyword] 111`,
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "force-of-will": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_force_of_will.webp",
    id: "force-of-will",
    name: "Force of Will",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, [keyword id="#b45f06"]Daze[/keyword] that enemy. [keyword id="#b45f06"]Dazed[/keyword] enemies have decreased [keyword id="#1c4587"]Movement Speed[/keyword] and [keyword id="#1c4587"]Attack Speed[/keyword]. [keyword id="#b45f06"]Daze[/keyword] can stack.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Enemy Speed Reduction: [/keyword]+10%, +50%
[keyword id="#1c4587"]Duration:[/keyword] 7 seconds`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "control-group": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_reclamation_project.webp",
    id: "control-group",
    name: "Control Group",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an [keyword id="#b45f06"]Entangled[/keyword] enemy restores a portion of [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Action Skill Cooldown[/keyword] and [keyword id="#1c4587"]Action Skill Duration[/keyword].`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] +3% on kill, +15%
[keyword id="#1c4587"]Action Skill Duration:[/keyword] +2% on kill, +10%`,
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  slingshot: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_speed_sap.webp",
    id: "slingshot",
    name: "Slingshot",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Dazes[/keyword] an enemy, She also [keyword id="#b45f06"]Entangles[/keyword] them, and then she gains increased [keyword id="#1c4587"]Movement Speed[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Movement Speed:[/keyword] +8%, +40%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 1,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "force-of-will"
  },
  "freeze-frame": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_biting_cold.webp",
    id: "freeze-frame",
    name: "Freeze Frame",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Guns[/keyword] deal Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] for every enemy she has in [keyword id="#b45f06"]Stasis[/keyword].`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] +10% of [keyword id="#1c4587"]Damage Dealt[/keyword]
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "falling-bodies": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_ParticleDiffuser.webp",
    id: "falling-bodies",
    name: "Falling Bodies",
    description: '[keyword id="#b45f06"]Action Skill[/keyword]: Places an additional enemy in [keyword id="#b45f06"]Stasis[/keyword]s at the cost of [keyword id="#1c4587"]Action Skill Duration[/keyword]. When [keyword id="#b45f06"]Stasis[/keyword] ends, automatically Slam all enemies straight down.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Duration Cost:[/keyword] 4 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 45 seconds
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 14 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "stun-lock": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_quantum_spin.webp",
    id: "stun-lock",
    name: "Stun Lock",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, she briefly puts that enemy into [keyword id="#b45f06"]Stasis[/keyword]. This form of [keyword id="#b45f06"]Stasis[/keyword] lasts for a short duration, or until the enemy is shot again.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Duration:[/keyword] 5 seconds
[keyword id="#1c4587"]Cooldown: [/keyword]10 seconds`,
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "unstable-ice-otope": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_zero_point_bullets.webp",
    id: "unstable-ice-otope",
    name: "Unstable Ice-otope",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. [keyword id="#b45f06"]Harlowe[/keyword] deals Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] with all sources.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] +7% of [keyword id="#1c4587"]Damage Dealt[/keyword], +35%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "cold-storage": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_ControlledChaos.webp",
    id: "cold-storage",
    name: "Cold Storage",
    description: 'All Damage Dealt to enemies in [keyword id="#b45f06"]Stasis[/keyword] is stored. Whenever an enemy is [keyword id="#1c4587"]Slammed[/keyword] or [keyword id="#b45f06"]Stasis[/keyword] ends, create a [keyword id="#00a79a"]Cryo[/keyword] Explosion based on all Stored Damage, centered on that enemy, and also automatically [keyword id="#00a79a"]Freezes[/keyword] other enemies nearby.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Maximum Stored Damage: [/keyword]3,363',
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  "keep-ice-on-that": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_paralyzing_cold.webp",
    id: "keep-ice-on-that",
    name: "Keep Ice On That",
    description: `All [keyword id="#00a79a"]Cryo Damage[/keyword] [keyword id="#b45f06"]Harlowe[/keyword] deals gains Lifesteal. If [keyword id="#b45f06"]Harlowe[/keyword]'s Health is full, she gains [keyword id="#1c4587"]Overshield[/keyword] instead.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Lifesteal:[/keyword] +3%, +15%
[keyword id="#1c4587"]Overshield Steal:[/keyword] +4%, +20%`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "endothermic-reaction": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_windchill.webp",
    id: "endothermic-reaction",
    name: "Endothermic Reaction",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#00a79a"]Freezes[/keyword] an enemy, create an Endothermic Aura that deals constant [keyword id="#00a79a"]Cryo Damage[/keyword] to enemies around it. [keyword id="#b45f06"]Harlowe[/keyword]'s Endothermic Aura deals increased Damage based on her [keyword id="#1c4587"]Overshield[/keyword]. The more full, the greater the bonus.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 27 per second, 135
[keyword id="#1c4587"]Bonus Damage: [/keyword]up to +5%, +25%
[keyword id="#1c4587"]Duration:[/keyword] +2 seconds, +10
[keyword id="#1c4587"]Cooldown:[/keyword] 4 seconds`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "flash-freeze": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_ground_state.webp",
    id: "flash-freeze",
    name: "Flash Freeze",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] deals [keyword id="#00a79a"]Cryo Damage[/keyword] with an [keyword id="#b45f06"]Action Skill[/keyword], she gains a chance to [keyword id="#00a79a"]Freeze[/keyword] that enemy.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Freeze Chance:[/keyword] +30%
[keyword id="#1c4587"]Freeze Duration:[/keyword] 8 seconds`,
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "heat-sink": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_heat_sink.webp",
    id: "heat-sink",
    name: "Heat Sink",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#00a79a"]Freezes[/keyword] an enemy, she gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +9%, +45%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "triple-point": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_absolute_zero.webp",
    id: "triple-point",
    name: "Triple Point",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] deals non-[keyword id="#00a79a"]Cryo Damage[/keyword] to an [keyword id="#b45f06"]Entangled[/keyword] enemy, she deals Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] to that enemy. If she deals [keyword id="#00a79a"]Cryo Damage[/keyword] to an Entangled enemy, she deals increased bonus damage.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] +15% of non-Cryo Damage Dealt
[keyword id="#1c4587"]Bonus Cryo Damage:[/keyword] +30% of Cryo Damage Dealt`,
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 1
  },
  "cold-plunge": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_NthDimension.webp",
    id: "cold-plunge",
    name: "Cold Plunge",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Slams[/keyword] an enemy, create a [keyword id="#1c4587"]Singularity[/keyword] on that enemy, followed by a [keyword id="#00a79a"]Cryo[/keyword] Explosion.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Cryo Nova Damage:[/keyword] 190
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 40 seconds
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 10 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "indiscrete-math": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_rush_of_ideas.webp",
    id: "indiscrete-math",
    name: "Indiscrete Math",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Splash Damage[/keyword]',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Splash Damage: [/keyword]+7%, +35%',
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  inertia: {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_InPerpetuity.webp",
    id: "inertia",
    name: "Inertia",
    description: `Whenever an enemy [keyword id="#b45f06"]Harlowe[/keyword] has in [keyword id="#b45f06"]Stasis[/keyword] dies, a new enemy is automatically added to [keyword id="#b45f06"]Stasis[/keyword]. When this happens, [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Action Skill Duration[/keyword] resets, however it drains quicker.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Stasis Duration Rate:[/keyword] +20% per additional enemy',
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "blue",
    type: "augment"
  },
  experimentation: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_experimentation.webp",
    id: "experimentation",
    name: "Experimentation",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an [keyword id="#b45f06"]Entangled[/keyword] enemy causes an Elemental Explosion on all other [keyword id="#b45f06"]Entangled[/keyword] enemies.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Elemental Explosion Damage:[/keyword] +61, +305',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5
  },
  "domino-effect": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_domino_effect.webp",
    id: "domino-effect",
    name: "Domino Effect",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] deal [keyword id="#1c4587"]Splash Damage[/keyword] to an [keyword id="#b45f06"]Entangled[/keyword] enemy, she gains a chance to trigger [keyword id="#b45f06"]Entangled Damage[/keyword] Share again.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Retrigger Chance:[/keyword] +15%, +45%',
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "sustained-reaction": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_outpour.webp",
    id: "sustained-reaction",
    name: "Sustained Reaction",
    description: `[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an [keyword id="#b45f06"]Entangled[/keyword] enemy restores a portion of [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Action Skill Duration[/keyword].`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Duration:[/keyword] +5%, +15%',
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "blue",
    type: "passive",
    maxRank: 3
  },
  "ground-state": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_KineticChaos.webp",
    id: "ground-state",
    name: "Ground State",
    description: `Every time [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Slams[/keyword] an enemy, gain increased Slam Damage and Slam Damage Radius. Enemies in [keyword id="#b45f06"]Stasis[/keyword] take Decreased Damage.

[keyword id="#b45f06"]Action Skill[/keyword]: Slam all enemies in [keyword id="#b45f06"]Stasis[/keyword] Straight Down.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Slam Damage:[/keyword] +30% per Slam
[keyword id="#1c4587"]Slam Radius:[/keyword] +30% per Slam
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 35 seconds
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 14 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "blue",
    type: "capstone"
  },
  "gordian-knot": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_verification.webp",
    id: "gordian-knot",
    name: "Gordian Knot",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] Kills an [keyword id="#b45f06"]Entangled[/keyword] enemy, she gains a chance to instantly fully restore her [keyword id="#b45f06"]Action Skill[/keyword]',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Restoration Chance:[/keyword] +7%, +35%',
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "blue",
    type: "passive",
    maxRank: 5,
    requirement: "experimentation"
  },
  "chroma-accelerator": {
    icon: "icons/action-skills/harlowe/SkilliconGrav_skill_Exodus.webp",
    id: "chroma-accelerator",
    name: "CHROMA Accelerator",
    description: `Fire an Unstable Energy Pocket from [keyword id="#b45f06"]Harlowe[/keyword]'s CHROMA Accelerator. The Unstable Energy Pocket passes through enemies and deals [keyword id="#00a79a"]Cryo Damage[/keyword] to all enemies it passes near. Pressing [keyword id="#b45f06"]Action Skill[/keyword] causes the Unstable Energy Pocket to explode and deal heavy [keyword id="#b8b800"]Radiation Damage[/keyword] in a large area.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Cooldown:[/keyword] 38 seconds
[keyword id="#1c4587"]Passby Damage:[/keyword] 269 
[keyword id="#1c4587"]Detonation Damage:[/keyword] 807`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "red",
    type: "action-skill"
  },
  cyclotron: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_limits.webp",
    id: "cyclotron",
    name: "Cyclotron",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Fire rate[/keyword]',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Fire Rate:[/keyword] +4%, +20%',
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  ppe: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_harmonics.webp",
    id: "ppe",
    name: "PPE",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Maximum Shield Capacity[/keyword] and Shield Recharge Rate.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Maximum Shield Capacity:[/keyword] +6%, +30%
[keyword id="#1c4587"]Shield Recharge Rate:[/keyword] +6%, +30%`,
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "fuzzy-math": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_fuzzy_math.webp",
    id: "fuzzy-math",
    name: "Fuzzy Math",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Status Effect Chance[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Chance:[/keyword] +10%, +50%',
    board: 0,
    row: 0,
    column: 3,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "field-ready-prototype": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_embellish.webp",
    id: "field-ready-prototype",
    name: "Field Ready Prototype",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Action Skill Damage[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Damage:[/keyword] +6%, +30%',
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "bleeding-edge": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_broken.webp",
    id: "bleeding-edge",
    name: "Bleeding Edge",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Reload Speed[/keyword]',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Reload Speed:[/keyword] +5%, +25%',
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  voidstar: {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_Demi.webp",
    id: "voidstar",
    name: "Voidstar",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket passes by an enemy, it loses a portion of its current Total Health and becomes Frozen.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Health Loss:[/keyword] 30%
[keyword id="#1c4587"]Max Health Drain:[/keyword] 673`,
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "neutron-capture": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_TemporalLoop.webp",
    id: "neutron-capture",
    name: "Neutron Capture",
    description: `All Damage [keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket deals to enemies is stored. Whenever it explodes, a portion of that Stored Damage is transferred to [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Gun[/keyword], causing her to deal Bonus [keyword id="#b8b800"]Radiation Damage[/keyword].`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage Transfer:[/keyword] 4% of [keyword id="#1c4587"]Action Skill [/keyword]Damage Dealt
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "red",
    type: "augment"
  },
  elementary: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_elemental_inclination.webp",
    id: "elementary",
    name: "Elementary",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Elemental Damage[/keyword] and Status Effect Damage.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Elemental Damage:[/keyword] +4%, +20%
[keyword id="#1c4587"]Status Effect Damage:[/keyword] +4%, +20%`,
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "test-subjects": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_test_subjects.webp",
    id: "test-subjects",
    name: "Test Subjects",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] applies a Status Effect to an enemy, she gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +7%, +35%
[keyword id="#1c4587"]Duration:[/keyword] 8 Seconds`,
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "get-up-and-go": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_get_up_and_go.webp",
    id: "get-up-and-go",
    name: "Get Up and Go",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] activates or retrigger an [keyword id="#b45f06"]Action Skill[/keyword], she gains increased [keyword id="#1c4587"]Movement Speed[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Movement Speed:[/keyword] +6%, +30%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 0,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "elephants-foot": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_fracture.webp",
    id: "elephants-foot",
    name: "Elephant's Foot",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword]'s Shield breaks, she deals [keyword id="#b8b800"]Radiation Damage[/keyword] to all Entangled enemies. Harlowe gains [keyword id="#1c4587"]Overshield[/keyword] equal to the amount of Damage dealt this way.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 101
[keyword id="#1c4587"]Cooldown:[/keyword] 16 seconds`,
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "great-red-dot": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_everstorm.webp",
    id: "great-red-dot",
    name: "Great Red DoT",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Status Effect Duration[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Duration:[/keyword] +12%, +36%',
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  enriched: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_choosing_favorites.webp",
    id: "enriched",
    name: "Enriched",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#b8b800"]Radiation Damage[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Radiation Damage:[/keyword] +7%, +21%',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "red",
    type: "passive",
    maxRank: 3,
    requirement: "elementary"
  },
  "practical-applications": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_mean_business.webp",
    id: "practical-applications",
    name: "Practical Applications",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased Skill Damage',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Skill Damage:[/keyword] +7%, +35%',
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "field-research": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_Anachrony.webp",
    id: "field-research",
    name: "Field Research",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] kills an enemy with her Unstable Energy Pocket and when she kills an [keyword id="#b45f06"]Entangled[/keyword] enemy while her Unstable Energy Pocket is active, refund a portion of her [keyword id="#1c4587"]Action Skill Cooldown[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Cooldown Refund:[/keyword] 15% per enemy killed.',
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "carry-the-one": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_carry_the_one.webp",
    id: "carry-the-one",
    name: "Carry the One",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] Entagles an enemy, she gains a chance to [keyword id="#b45f06"]Entangle[/keyword] another nearby enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Entangle Chance:[/keyword] +10%, +50%',
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "core-sample": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_debugging_the_problem.webp",
    id: "core-sample",
    name: "Core Sample",
    description: `[keyword id="#b45f06"]Harlowe[/keyword] gains Lifesteal against Frozen enemies. If she's at full Health, she gains [keyword id="#1c4587"]Overshield[/keyword] Instead.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Lifesteal:[/keyword] +5%, +25%',
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "break-the-ice": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_break_the_ice.webp",
    id: "break-the-ice",
    name: "Break the Ice",
    description: 'Convert all CHROMA Accelerator Damage to [keyword id="#00a79a"]Cryo Damage[/keyword].',
    character: "harlowe",
    attributes: "",
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "opposing-force": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_turn_it_on_and_off_again.webp",
    id: "opposing-force",
    name: "Opposing Force",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#00a79a"]Freezes[/keyword] an enemy, she gains increased [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]. This effect stacks.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Cooldown Rate:[/keyword] +4%, +12%
[keyword id="#1c4587"]Duration:[/keyword] 16 seconds 
[keyword id="#1c4587"]Max Stacks:[/keyword] 10`,
    board: 1,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "q-ball": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_Dynamism.webp",
    id: "q-ball",
    name: "Q-Ball",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket bounces as it travels and can no longer be manually detonated. Each time it bounces, it creates a [keyword id="#b8b800"]Radiation[/keyword] Explosion. Whenever it strikes an enemy, it changes direction and bounces towards another enemy.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Maximum Bounces: [/keyword]10
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 16 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 38 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "cold-welding": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_ice_cold_of_space.webp",
    id: "cold-welding",
    name: "Cold Welding",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] Freezes an Entangled enemy, it deals [keyword id="#00a79a"]Cryo Damage[/keyword] to itself and all other [keyword id="#b45f06"]Entangled[/keyword] enemies.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 61 per second, 183
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds`,
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3,
    requirement: "carry-the-one"
  },
  "poisoned-sun": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_proven_results.webp",
    id: "poisoned-sun",
    name: "Poisoned Sun",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#b8b800"]Radiation Damage[/keyword] and [keyword id="#b8b800"]Irradiation Chance[/keyword].',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Radiation Damage:[/keyword] +6%, +30%
[keyword id="#1c4587"]Irradiation Chance:[/keyword] +12%, +60%`,
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "special-purpose-magnets": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_SpecialPurposeMagnets.webp",
    id: "special-purpose-magnets",
    name: "Special Purpose Magnets",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket pulls enemies along as it passes by, and its detonation deals increased Damage for every enemy it has already hit.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Damage:[/keyword] +11% per enemy hit',
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "glow-up": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_meltdown.webp",
    id: "glow-up",
    name: "Glow Up",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains [keyword id="#1c4587"]Critical Hit Chance[/keyword] with [keyword id="#1c4587"]Guns[/keyword] against Irradiated enemies.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Critical Hit Chance: [/keyword]5%, 25%',
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "fissile-launcher": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_fissile_bolts.webp",
    id: "fissile-launcher",
    name: "Fissile Launcher",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] damages an Irradiated enemy or an Entalged enemy, shoot a [keyword id="#b8b800"]Radiation[/keyword] Dart at another enemy.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Radiation Dart Damage:[/keyword] 81, 243
[keyword id="#1c4587"]Cooldown: [/keyword]2 seconds`,
    board: 2,
    row: 1,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  "chain-reactor": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_shorten_the_leash.webp",
    id: "chain-reactor",
    name: "Chain Reactor",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] deals Bonus [keyword id="#b8b800"]Radiation Damage[/keyword] to [keyword id="#b45f06"]Entangled[/keyword] enemies.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Bonus Radiation Damage:[/keyword] 6% of Damage Dealt, 18%',
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 3
  },
  wasted: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_unraveled.webp",
    id: "wasted",
    name: "Wasted",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Killing an Irradiated enemy or killing an enemy with [keyword id="#b8b800"]Radiation Damage[/keyword] leave behind a [keyword id="#b8b800"]Radiation[/keyword] Hazard.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Hazard Damage:[/keyword] 61 per second
[keyword id="#1c4587"]Hazard Duration:[/keyword] 5 seconds`,
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "demon-core": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_devestation.webp",
    id: "demon-core",
    name: "Demon Core",
    description: `As [keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket travels, it shoots [keyword id="#b8b800"]Radiation[/keyword] Darts at enemies. Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Entangles[/keyword] an enemy while her [keyword id="#b45f06"]Action Skill[/keyword] is active, automatically Irradiate that enemy.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Radiation Dart Damage:[/keyword] 336
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 42 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  "dirty-bomb": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_u_mad.webp",
    id: "dirty-bomb",
    name: "Dirty Bomb",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] Irradiates an enemy, create a [keyword id="#b8b800"]Radiation[/keyword] Explosion on that enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Damage:[/keyword] +40% of Total [keyword id="#b8b800"]Irradiated Damage[/keyword]',
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "highly-efficient": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_highly_efficient.webp",
    id: "highly-efficient",
    name: "Highly Efficient",
    description: '[keyword id="#1c4587"]Kill Skill[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] kills an enemy with a Skill, Restore a portion of her Shield Capacity.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Shield Capacity Restored:[/keyword] +8%, +40%',
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "containment-breach": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_Inflation.webp",
    id: "containment-breach",
    name: "Containment Breach",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword]'s Unstable Energy Pocket detonates, it Splits into several smaller, fast moving Unstable Energy Pockets.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage: [/keyword]222
[keyword id="#1c4587"]Additional Projectiles:[/keyword] 5`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "red",
    type: "augment"
  },
  "mechanical-brilliance": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_mechanical_brilliance.webp",
    id: "mechanical-brilliance",
    name: "Mechanical Brilliance",
    description: "Whenever Harlowe damages an enemy with a Skill, she gains increased Skill Damage. This effect stacks.",
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Skill Damage:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 5`,
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  eureka: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_out_of_phase.webp",
    id: "eureka",
    name: "Eureka!",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] enters Fight For Your Life, she throws a free Unstable Energy Pocket at a nearby enemy - if there are any.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 807
[keyword id="#1c4587"]Cooldown:[/keyword] 40 seconds`,
    board: 3,
    row: 1,
    column: 1,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "rounding-up": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_tidy_up.webp",
    id: "rounding-up",
    name: "Rounding Up",
    description: 'For every enemy her [keyword id="#1c4587"]Action Skill Damage[/keyword]s, [keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Gun[/keyword] Damage when her [keyword id="#b45f06"]Action Skill[/keyword] ends.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +2% per enemy damaged, +10%
[keyword id="#1c4587"]Duration:[/keyword] 14 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 5`,
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "alternative-fuel-source": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_relative_ease.webp",
    id: "alternative-fuel-source",
    name: "Alternative Fuel Source",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] activates CHROMA Accelerator, drain her Shield and Amp her next Unstable Energy Pocket.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Shield Drained:[/keyword] 10%, 50%',
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "red",
    type: "passive",
    maxRank: 5
  },
  "the-shattering-light": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_destruction.webp",
    id: "the-shattering-light",
    name: "The Shattering Light",
    description: `Charge Skill. CHROMA Accelerator gains Charges as [keyword id="#b45f06"]Harlowe[/keyword] keeps it readied for the Duration of CHROMA Accelerator or until all Charges are used. Holding [keyword id="#b45f06"]Action Skill[/keyword] ends The Shattering Light early and refunds a portion of the Cooldown for every Charge remaining.

[keyword id="#b45f06"]Action Skill[/keyword]: Fire a fast-moving Unstable Energy Pocket consuming a Charge.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Charges: [/keyword]5
[keyword id="#1c4587"]Detonation Damage: [/keyword]437
[keyword id="#1c4587"]Action Skill Duration[/keyword]: 21 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 50 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "red",
    type: "capstone"
  },
  qed: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_qed.webp",
    id: "qed",
    name: "QED",
    description: 'Melee Overdrive. [keyword id="#b45f06"]Harlowe[/keyword] attaches an Unstable Energy Pocket to her fist, and [keyword id="#1c4587"]slams[/keyword] it into an enemy in front of her.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 437
[keyword id="#1c4587"]Cooldown:[/keyword] 40 seconds`,
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "red",
    type: "passive",
    maxRank: 1
  },
  "flux-generator": {
    icon: "icons/action-skills/harlowe/SkilliconGrav_skill_Terminal.webp",
    id: "flux-generator",
    name: "Flux Generator",
    description: `[keyword id="#b45f06"]Harlowe[/keyword] throws her Flux Generator in front of her, which projects an Energy Field, dealing [keyword id="#00a79a"]Cryo Damage[/keyword] over time, and Entangling enemies. Allies inside the Energy Field gain [keyword id="#1c4587"]Overshield[/keyword].

Press [keyword id="#b45f06"]Action Skill[/keyword] to pick up her Flux Generator and toss it again.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 84 per second
[keyword id="#1c4587"]Duration:[/keyword] 22 seconds
[keyword id="#1c4587"]Cooldown:[/keyword] 55 seconds`,
    board: -1,
    row: -1,
    column: -1,
    specializationColor: "green",
    type: "action-skill"
  },
  "mains-hum": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_extra_galactic.webp",
    id: "mains-hum",
    name: "Mains Hum",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Maximum Shield Capacity[/keyword] and increased Maximum [keyword id="#1c4587"]Overshield[/keyword] Capacity.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Maximum Shield Capacity:[/keyword] +5%, +25%
[keyword id="#1c4587"]Maximum Overshield Capacity:[/keyword] +10%, +50%`,
    board: 0,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "personal-observation": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_personal_observation.webp",
    id: "personal-observation",
    name: "Personal Observation",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] deals increased Melee Damage and her Melee Attacks gain a chance to [keyword id="#b45f06"]Entangle[/keyword] enemies.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Melee Damage:[/keyword] +6%, +30%
[keyword id="#1c4587"]Entanglement Chance: [/keyword]6%, 30%`,
    board: 0,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "action-at-a-distance": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_accretion.webp",
    id: "action-at-a-distance",
    name: "Action at a Distance",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] applies a Status Effect to an enemy, she gains a chance to apply that Status Effect to each [keyword id="#b45f06"]Entangled[/keyword] enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Chance:[/keyword] +10%, +50%',
    board: 0,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  momentum: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_momentum.webp",
    id: "momentum",
    name: "Momentum",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Entangles[/keyword] an enemy, she and her allies deal increased Critical Hit Damage.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Critical Hit Damage:[/keyword] +5%, +25%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds`,
    board: 0,
    row: 0,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "mass-function": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_blazar.webp",
    id: "mass-function",
    name: "Mass Function",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] and her allies gain increased [keyword id="#1c4587"]Reload Speed[/keyword] for every [keyword id="#b45f06"]Entangled[/keyword] enemy.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Reload Speed:[/keyword] +3% per [keyword id="#b45f06"]Entangled[/keyword] enemy, +15%',
    board: 0,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "coronal-mass-ejection": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_Corona.webp",
    id: "coronal-mass-ejection",
    name: "Coronal Mass Ejection",
    description: `Enemies inside [keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator lose all Elemental Resistances. [keyword id="#b45f06"]Harlowe[/keyword] and her Allies inside her Flux Generator gain increased [keyword id="#1c4587"]Status Effect Chance[/keyword].`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Chance:[/keyword] +100%',
    board: 0,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "neutron-decay": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_afterglow.webp",
    id: "neutron-decay",
    name: "Neutron Decay",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] Irradiates an enemy, she gains increased [keyword id="#1c4587"]Gun Damage[/keyword]. This effect stacks.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +2% per Stack, +10%
[keyword id="#1c4587"]Duration:[/keyword] 12 seconds 
[keyword id="#1c4587"]Max Stacks:[/keyword] 5`,
    board: 0,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "blue-giant": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_RedGiant.webp",
    id: "blue-giant",
    name: "Blue Giant",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator gains increased Radius. Additionally, whenever she retriggers Flux Generator, she creates a [keyword id="#00a79a"]Cryo[/keyword] Hazard where her Flux Generator was located, and a [keyword id="#b8b800"]Radiation[/keyword] Hazard wherever she next places her Flux Generator.

Only one of each of these Hazards may be active at a time.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Terminal Radius:[/keyword] +50%
[keyword id="#1c4587"]Hazard Damage:[/keyword] 61 per second
[keyword id="#1c4587"]Hazard Duration:[/keyword] 5 seconds`,
    board: 0,
    row: 1,
    column: 3,
    specializationColor: "green",
    type: "augment"
  },
  "heat-death": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_heat_death.webp",
    id: "heat-death",
    name: "Heat Death",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] Gains increased [keyword id="#00a79a"]Cryo[/keyword] Efficiency',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Cryo Efficiency:[/keyword] +10%, +50%',
    board: 0,
    row: 1,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "creative-overflow": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_creative_life.webp",
    id: "creative-overflow",
    name: "Creative Overflow",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] deals increased [keyword id="#1c4587"]Gun Damage[/keyword] based on her [keyword id="#1c4587"]Overshield[/keyword]. The more [keyword id="#1c4587"]Overshield[/keyword] she has, the bigger the bonus.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Gun Damage:[/keyword] up to +12%, +36%',
    board: 0,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "resonance-cascade": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_resonating_light.webp",
    id: "resonance-cascade",
    name: "Resonance Cascade",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] deals [keyword id="#b8b800"]Radiation[/keyword] Damage to an enemy, she gains increased [keyword id="#1c4587"]Action Skill Damage[/keyword]. This effect stacks.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action SKill Damage:[/keyword] +3% per Stack, +9%
[keyword id="#1c4587"]Duration:[/keyword] 8 seconds
[keyword id="#1c4587"]Max Stacks:[/keyword] 5`,
    board: 0,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 3,
    requirement: "neutron-decay"
  },
  "confirmative-reality": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_flux.webp",
    id: "confirmative-reality",
    name: "Confirmative Reality",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] shoots an [keyword id="#b45f06"]Entangled[/keyword] enemy, she and all allies restore a portion of their [keyword id="#1c4587"]Action Skill Cooldown[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 0.5% per shot, 1.5%',
    board: 0,
    row: 2,
    column: 3,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "absolute-zero": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_snapshot.webp",
    id: "absolute-zero",
    name: "Absolute Zero",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#00a79a"]Freezes[/keyword] an enemy, she receives a Stack of Zero Point. For every Stack of Zero Point, her [keyword id="#1c4587"]Action Skill Duration[/keyword] [keyword id="#00a79a"]Freezes[/keyword] for a short time.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Duration:[/keyword] 0.8 seconds, 4.0',
    board: 0,
    row: 2,
    column: 4,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "blue-shift": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_blueshift.webp",
    id: "blue-shift",
    name: "Blue Shift",
    description: `While her [keyword id="#b45f06"]Action Skill[/keyword] is Cooling Down, [keyword id="#b45f06"]Harlowe[/keyword] deals Bonus [keyword id="#00a79a"]Cryo Damage[/keyword] with her Melee Attacks. 

While her [keyword id="#b45f06"]Action Skill[/keyword] is Active, [keyword id="#b45f06"]Harlowe[/keyword] deals Bonus [keyword id="#b8b800"]Radiation Damage[/keyword] with her Melee Attacks.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonsu Cryo Damage:[/keyword] 10% of Damage Dealt, 50%
[keyword id="#1c4587"]Bonus Radiation Damage: [/keyword]10% of Damage Dealt, 50%`,
    board: 1,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "unified-theory": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_HeatTransference.webp",
    id: "unified-theory",
    name: "Unified Theory",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator gains increased [keyword id="#1c4587"]Action Skill Damage[/keyword]. This effect is increased based on how many Allies and Enemies are inside of her Flux Generator.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Action Skill Damage:[/keyword] +10% per Ally and Enemy in Radius',
    board: 1,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  decoherence: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_event_horizon.webp",
    id: "decoherence",
    name: "Decoherence",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] deals increased Damage with all sources to Entangled enemies. Enemies inside of her Flux Generator take further increased Damage.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Entangled Enemies Bonus Damage:[/keyword] 5%, 25%
[keyword id="#1c4587"]Flux Generator Enemies Bonus Damage:[/keyword] 3%, 15%`,
    board: 1,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "latent-charge": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_showing_potential.webp",
    id: "latent-charge",
    name: "Latent Charge",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] deals Bonus Damage with [keyword id="#1c4587"]Guns[/keyword], Melee Attacks, and [keyword id="#b45f06"]Action Skill[/keyword] while hse has [keyword id="#1c4587"]Overshield[/keyword]. The more [keyword id="#1c4587"]Overshield[/keyword] she has, the bigger the bonus.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Bonus Damage:[/keyword] up to 10% of Damage Dealt, 50%',
    board: 1,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "feedback-loop": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_cluster.webp",
    id: "feedback-loop",
    name: "Feedback Loop",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#b45f06"]Entangles[/keyword] an enemy, she gains increased [keyword id="#1c4587"]Action Skill Damage[/keyword], [keyword id="#1c4587"]Action Skill Duration[/keyword], and [keyword id="#1c4587"]Action Skill Cooldown Rate[/keyword]. This effect stacks.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Action Skill Power: [/keyword]+2% per Stack, +10%
[keyword id="#1c4587"]Max Stacks:[/keyword] 5
[keyword id="#1c4587"]Stack Duration:[/keyword] 8 seconds`,
    board: 1,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "potential-transference": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_PotentialTransference.webp",
    id: "potential-transference",
    name: "Potential Transference",
    description: 'Charge Skill. Whenever [keyword id="#b45f06"]Harlowe[/keyword] relocates her Flux Generator, it Teleports to a location in her crosshairs, consuming a Chare and creating a [keyword id="#0000ff"]Shock[/keyword] Bust that deals [keyword id="#0000ff"]Shock Damage[/keyword] to enemies inside it, grants a free [keyword id="#1c4587"]Second Wind[/keyword] to allies, and [keyword id="#1c4587"]Heals[/keyword] allies within the Flux Generator.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Burst Damage:[/keyword] 538
[keyword id="#1c4587"]Health Restore:[/keyword] 111
[keyword id="#1c4587"]Charges:[/keyword] 3
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 22 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 52 seconds`,
    board: 1,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  "runaway-reaction": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_galactic_halo.webp",
    id: "runaway-reaction",
    name: "Runaway Reaction",
    description: `[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Status Effect Chance[/keyword].

Whenever [keyword id="#b45f06"]Harlowe[/keyword] applies a Status Effect to an enemy, it becomes [keyword id="#b45f06"]Entangled[/keyword].`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Chance:[/keyword] +25%',
    board: 1,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  "gamma-ray-burst": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_aperture.webp",
    id: "gamma-ray-burst",
    name: "Gamma Ray Burst",
    description: 'Whenever [keyword id="#b45f06"]Harlowe[/keyword] retrigger her [keyword id="#b45f06"]Action Skill[/keyword], the next shot fired from her [keyword id="#1c4587"]Gun[/keyword] drains her Shield and deals Bonus [keyword id="#b8b800"]Radiation Damage[/keyword] based on the amount drained.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Bonus Radiation Damage:[/keyword] Up to +10% of [keyword id="#1c4587"]Maximum Shield Capacity[/keyword], +50%',
    board: 2,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "nuclear-winter": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_Irradiance.webp",
    id: "nuclear-winter",
    name: "Nuclear Winter",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword] and her allies are inside the Flux Generator's Radius, they deal Bonus [keyword id="#00a79a"]Cryo Damage[/keyword]. Whenever [keyword id="#b45f06"]Harlowe[/keyword] and her allies leave the Flux Generator's Radius, they instead deal Bonus [keyword id="#b8b800"]Radiation Damage[/keyword] for a Duration.

Whenever [keyword id="#b45f06"]Harlowe[/keyword] inflicts [keyword id="#00a79a"]Cryo[/keyword] or [keyword id="#b8b800"]Radiation[/keyword] Status Effects, that enemy becomes [keyword id="#b45f06"]Entangled[/keyword].`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Bonus Cryo Damage[/keyword]: 25% of Damage Dealt
[keyword id="#1c4587"]Bonus Radiation Damage:[/keyword] 25% of Damage Dealt
[keyword id="#1c4587"]Bonus Damage Duration:[/keyword] 12 seconds`,
    board: 2,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "harlowes-certainty-principle": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_certainty_principle.webp",
    id: "harlowes-certainty-principle",
    name: "Harlowe's Certainty Principle",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Gun Handling[/keyword], which is further increased with every enemy in her Flux Generator.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Gun Handling:[/keyword] +10%, +50%
[keyword id="#1c4587"]Bonus Gun Handling:[/keyword] +3% per enemy in Flux Generator, +15%`,
    board: 2,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  jaunt: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_binary_star.webp",
    id: "jaunt",
    name: "Jaunt",
    description: 'Press and hold (insert specific button) to make [keyword id="#b45f06"]Harlowe[/keyword] swap places with her Flux Generator.',
    character: "harlowe",
    attributes: "",
    board: 2,
    row: 1,
    column: 1,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  "critical-funding": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_assure.webp",
    id: "critical-funding",
    name: "Critical Funding",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword] [keyword id="#1c4587"]Critically Hits[/keyword] an enemy, she gains a chance to [keyword id="#b45f06"]Entangle[/keyword] it, and Refills a portion of her [keyword id="#1c4587"]Gun[/keyword]'s Magazine.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Ammo Added:[/keyword] 1 on Critical Hit, 5
[keyword id="#1c4587"]Chance:[/keyword] 15%`,
    board: 2,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "harlowes-certainty-principle"
  },
  "exposed-core": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_exposure.webp",
    id: "exposed-core",
    name: "Exposed Core",
    description: 'While her Shield is down, [keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Status Effect chance[/keyword].',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Status Effect Chance:[/keyword] +20%, +100%',
    board: 2,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5,
    requirement: "gamma-ray-burst"
  },
  "violent-horizon": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_UltraviolentRadiation.webp",
    id: "violent-horizon",
    name: "Violent Horizon",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator occasionally shoots [keyword id="#b8b800"]Radiation[/keyword] Projectiles at nearby enemies outside of its radius. If these Projectiles Irradiate an enemy, the Flux Generator then drags them within its radius. 

Retrigger: [keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator creates a [keyword id="#1c4587"]Singularity[/keyword] bust that drags in nearby enemies and increases [keyword id="#b45f06"]Action Skill[/keyword] Power.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage:[/keyword] 269
[keyword id="#1c4587"]Action Skill Damage: [/keyword]+10% per Retrigger
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 25 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 60 seconds
[keyword id="#1c4587"]Retrigger Cooldown:[/keyword] 3 seconds`,
    board: 2,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  meltdown: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_meltdown.webp",
    id: "meltdown",
    name: "Meltdown",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Critical Hits[/keyword] with [keyword id="#1c4587"]Guns[/keyword] deal Bonus [keyword id="#b8b800"]Radiation Damage[/keyword]`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Bonus Radiation Damage:[/keyword] 8% of Damage Dealt, 40%',
    board: 2,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  refraction: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_grav_wave.webp",
    id: "refraction",
    name: "Refraction",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] and her allies gain Ricochet Chance against [keyword id="#b45f06"]Entangled[/keyword] enemies. [keyword id="#1c4587"]Critical Hits[/keyword] Double this chance. Ricochets have Reduced Damage.',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Ricochet Chance:[/keyword] 6%, 30%
[keyword id="#1c4587"]Ricochet Damage Reduction:[/keyword] 50%`,
    board: 3,
    row: 0,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "perpetual-engine": {
    icon: "icons/augments/harlowe/SkilliconGrav_augment_CoronalLoop.webp",
    id: "perpetual-engine",
    name: "Perpetual Engine",
    description: 'When [keyword id="#b45f06"]Harlowe[/keyword] activates her Flux Generator, she gains Damage Reduction and increased [keyword id="#1c4587"]Action Skill Duration[/keyword] for each [keyword id="#b45f06"]Entangled[/keyword] enemy and each additional enemy she Entagles while her [keyword id="#b45f06"]Action Skill[/keyword] is active',
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Damage Reduction:[/keyword] +7% per [keyword id="#b45f06"]Entangled[/keyword] enemy
[keyword id="#1c4587"]Action Skill Duration:[/keyword] +7% per [keyword id="#b45f06"]Entangled[/keyword] enemy`,
    board: 3,
    row: 0,
    column: 1,
    specializationColor: "green",
    type: "augment"
  },
  "excited-state": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_epicenter.webp",
    id: "excited-state",
    name: "Excited State",
    description: `[keyword id="#b45f06"]Harlowe[/keyword] gains increased [keyword id="#1c4587"]Critical Hit Damage[/keyword]. 

Whenever an enemy is damaged by [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#b45f06"]Action Skill[/keyword], the next shot on that enemy will be an Automatic Critical Hit.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Critical Hit Damage:[/keyword] +7%, +35%',
    board: 3,
    row: 0,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  accretion: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_absorption.webp",
    id: "accretion",
    name: "Accretion",
    description: '[keyword id="#b45f06"]Harlowe[/keyword] and her allies gain Lifesteal against [keyword id="#b45f06"]Entangled[/keyword] enemies.',
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Lifesteal:[/keyword] 3%, 15%',
    board: 3,
    row: 1,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "distribution-function": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_starburst.webp",
    id: "distribution-function",
    name: "Distribution Function",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Action Skill damage[/keyword][keyword id="#1155cc"]s[/keyword] an enemy, restore a portion of hers and all allies' Shield Capacity. If their Shields are full, gain [keyword id="#1c4587"]Overshield[/keyword] instead.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Shield Restore:[/keyword] 6% of Damage Dealt, 30%',
    board: 3,
    row: 1,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 5
  },
  "pencils-down": {
    icon: "icons/skills/harlowe/ico_passive_gravitar_vestige.webp",
    id: "pencils-down",
    name: "Pencils Down",
    description: `While [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#b45f06"]Action Skill[/keyword] is Cooling Down, she grants herself and her allies increased [keyword id="#1c4587"]Reload Speed[/keyword] and [keyword id="#1c4587"]Fire Rate[/keyword].`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Reload Speed: [/keyword]+7%, +21%
[keyword id="#1c4587"]Fire Rate:[/keyword] +7%, +21%`,
    board: 3,
    row: 2,
    column: 0,
    specializationColor: "green",
    type: "passive",
    maxRank: 3
  },
  "group-study": {
    icon: "icons/capstones/harlowe/SkilliconGravi_capstone_Halomotivator.webp",
    id: "group-study",
    name: "Group Study",
    description: `[keyword id="#b45f06"]Harlowe[/keyword] Spawns a HALO Sidekick for each ally instead of her Flux Generator. HALO Sidekicks automatically fly to each ally and hover near them, granting increased [keyword id="#1c4587"]Gun Damage[/keyword], [keyword id="#1c4587"]Fire Rate[/keyword], and [keyword id="#1c4587"]Reload Speed[/keyword]. 

[keyword id="#b45f06"]Action Skill[/keyword] Retrigger: Overload [keyword id="#b45f06"]Harlowe[/keyword]'s HALO Sidekick to increase their effects. This effect stacks. While Overloaded, [keyword id="#b45f06"]Harlowe[/keyword]'s [keyword id="#1c4587"]Action SKill Duration[/keyword] drains faster.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Gun Damage:[/keyword] +25% per activation
[keyword id="#1c4587"]Fire Rate:[/keyword] +10% per activation
[keyword id="#1c4587"]Reload Speed:[/keyword] +10% per activation
[keyword id="#1c4587"]Duration Rate:[/keyword] +25% per activation
[keyword id="#1c4587"]Action Skill Duration:[/keyword] 28 seconds
[keyword id="#1c4587"]Action Skill Cooldown:[/keyword] 32 seconds`,
    board: 3,
    row: 2,
    column: 1,
    specializationColor: "green",
    type: "capstone"
  },
  annihilation: {
    icon: "icons/skills/harlowe/ico_passive_gravitar_duplicator.webp",
    id: "annihilation",
    name: "Annihilation",
    description: `[keyword id="#b45f06"]Harlowe[/keyword]'s Flux Generator occasionally throws Grenades. If [keyword id="#b45f06"]Harlowe[/keyword] or her Allies are inside the Flux Generator and have a Grenade equipped, it throws a copy of that Grenade.`,
    character: "harlowe",
    attributes: '[keyword id="#1c4587"]Grenade Spawn Rate: [/keyword]7 seconds',
    board: 3,
    row: 2,
    column: 2,
    specializationColor: "green",
    type: "passive",
    maxRank: 1
  },
  entanglement: {
    icon: "icons/traits/harlowe/vh_trait_gravitar_icon.webp",
    id: "entanglement",
    name: "Entanglement",
    description: `Whenever [keyword id="#b45f06"]Harlowe[/keyword] Uses her [keyword id="#b45f06"]Action Skill[/keyword] on enemies, those enemies become [keyword id="#b45f06"]Entangled[/keyword].

[keyword id="#b45f06"]Entangled[/keyword]: [keyword id="#b45f06"]Entangled[/keyword] enemies share a portion of [keyword id="#1c4587"]Gun Damage[/keyword] and Skill Damage with all other [keyword id="#b45f06"]Entangled[/keyword] enemies.`,
    character: "harlowe",
    attributes: `[keyword id="#1c4587"]Shared Damage:[/keyword] 7% of Damage Dealt
[keyword id="#1c4587"]Duration: [/keyword]12 seconds`,
    board: null,
    row: null,
    column: null,
    type: "vault-hunter-trait"
  }
}, y = {
  "phase-phamiliar": {
    icon: "icons/class-specialization/PhaseFamiliar.webp",
    id: "phase-phamiliar",
    character: "vex",
    color: "red",
    name: "Phase Phamiliar",
    skillId: "phase-phamiliar"
  },
  incarnate: {
    icon: "icons/class-specialization/PhaseAvatar.webp",
    id: "incarnate",
    character: "vex",
    color: "green",
    name: "Incarnate",
    skillId: "incarnate"
  },
  "dead-ringer": {
    icon: "icons/class-specialization/DeadRinger.webp",
    id: "dead-ringer",
    character: "vex",
    color: "blue",
    name: "Dead Ringer",
    skillId: "dead-ringer"
  },
  "arc-knives": {
    icon: "icons/class-specialization/ArcKnives.webp",
    id: "arc-knives",
    character: "rafa",
    color: "green",
    name: "Arc Knives",
    skillId: "arc-knives"
  },
  "apophis-lance": {
    icon: "icons/class-specialization/ApophisLance.webp",
    id: "apophis-lance",
    character: "rafa",
    color: "blue",
    name: "APOPHIS LANCE",
    skillId: "apophis-lance"
  },
  "peacebreaker-cannons": {
    icon: "icons/class-specialization/PeacebreakerCannons.webp",
    id: "peacebreaker-cannons",
    character: "rafa",
    color: "red",
    name: "Peacebreaker Cannons",
    skillId: "peacebreaker-cannons"
  },
  cybernetics: {
    icon: "icons/class-specialization/Warforge.webp",
    id: "cybernetics",
    character: "amon",
    color: "green",
    name: "Cybernetics",
    skillId: "crucible"
  },
  vengeance: {
    icon: "icons/class-specialization/Scourge.webp",
    id: "vengeance",
    character: "amon",
    color: "blue",
    name: "Vengeance",
    skillId: "scourge"
  },
  calamity: {
    icon: "icons/class-specialization/Onslaught.webp",
    id: "calamity",
    character: "amon",
    color: "red",
    name: "Calamity",
    skillId: "calamity"
  },
  "seize-the-day": {
    icon: "icons/class-specialization/Stasis.webp",
    id: "seize-the-day",
    character: "harlowe",
    color: "blue",
    name: "Seize the Day",
    skillId: "zero-point"
  },
  "creative-bursts": {
    icon: "icons/class-specialization/Exodus.webp",
    id: "creative-bursts",
    character: "harlowe",
    color: "red",
    name: "Creative Bursts",
    skillId: "chroma-accelerator"
  },
  "cosmic-brilliance": {
    icon: "icons/class-specialization/Terminal.webp",
    id: "cosmic-brilliance",
    character: "harlowe",
    color: "green",
    name: "Cosmic Brilliance",
    skillId: "flux-generator"
  }
}, c = {
  survivor: {
    icon: "icons/character-specialization/survivor.webp",
    name: "Survivor",
    tree: "survivor",
    requirements: [],
    isBaseSpecialization: !0,
    position: {
      row: 0,
      column: 0
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Maximum Health[/keyword] and [keyword id="secondary"]Shields[/keyword].',
    effects: [
      '[keyword id="secondary"]Maximum Health:[/keyword] +X%',
      '[keyword id="secondary"]Maximum Shield:[/keyword] +X%'
    ]
  },
  "sturdy-stuff": {
    icon: "icons/character-specialization/sturdy-stuff.webp",
    name: "Sturdy Stuff",
    tree: "survivor",
    requirements: [
      {
        tree: "survivor",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 1,
      column: 0
    },
    description: `[keyword id="secondary"]Fight For Your Life[/keyword] lasts longer when not moving, and [keyword id="secondary"]Second Winds[/keyword] fully restore the [keyword id="primary"] [/keyword]Vault Hunter's[keyword id="/primary"] [/keyword] [keyword id="secondary"]Health[/keyword].`,
    effects: [
      '[keyword id="secondary"]FFYL Duration:[/keyword] +50% when not moving',
      '[keyword id="secondary"]Health Restoration:[/keyword] 100%'
    ]
  },
  "bullets-are-scared-of-me": {
    icon: "icons/character-specialization/bullets-are-scared-of-me.webp",
    name: "Bullets Are Scared Of Me",
    tree: "survivor",
    requirements: [
      {
        tree: "survivor",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 2,
      column: 0
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Damage Reduction[/keyword] based on the fullness of their [keyword id="secondary"]Shield[/keyword] or [keyword id="secondary"]Health[/keyword], whichever has higher [keyword id="secondary"]Maximum Capacity[/keyword].',
    effects: [
      '[keyword id="secondary"]Damage Reduction:[/keyword] +30% when [keyword id="secondary"]Full[/keyword]'
    ]
  },
  "the-best-defense": {
    icon: "icons/character-specialization/the-best-defense.webp",
    name: "The Best Defense",
    tree: "survivor",
    requirements: [
      {
        tree: "survivor",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 0
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Damage Dealt[/keyword] based on the fullness of their [keyword id="secondary"]Shield[/keyword] or [keyword id="secondary"]Health[/keyword], whichever has higher [keyword id="secondary"]Maximum Capacity[/keyword].',
    effects: [
      '[keyword id="secondary"]Damage Dealt:[/keyword] +30% when [keyword id="secondary"]Full[/keyword]'
    ]
  },
  brute: {
    icon: "icons/character-specialization/brute.webp",
    name: "Brute",
    tree: "brute",
    requirements: [],
    isBaseSpecialization: !0,
    position: {
      row: 0,
      column: 2
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Gun Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Gun Damage:[/keyword] +X%'
    ]
  },
  "lead-or-alive": {
    icon: "icons/character-specialization/lead-or-alive.webp",
    name: "Lead or Alive",
    tree: "brute",
    requirements: [
      {
        tree: "brute",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 1,
      column: 2
    },
    description: 'When entering [keyword id="secondary"]Fight For Your Life[/keyword], all [keyword id="secondary"]Guns[/keyword] are automatically [keyword id="secondary"]Reloaded[/keyword], and the [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Fire Rate[/keyword].',
    effects: [
      '[keyword id="secondary"]Fire Rate:[/keyword] +25% while in [keyword id="secondary"]FFYL[/keyword]'
    ]
  },
  cqc: {
    icon: "icons/character-specialization/cqc.webp",
    name: "CQC",
    tree: "brute",
    requirements: [
      {
        tree: "brute",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 2,
      column: 2
    },
    description: '[keyword id="secondary"]Melee Damage[/keyword] grants the [keyword id="primary"]Vault Hunter[/keyword] increased [keyword id="secondary"]Fire Rate[/keyword] for a [keyword id="secondary"]Duration[/keyword].',
    effects: [
      '[keyword id="secondary"]Fire Rate:[/keyword] +30%',
      '[keyword id="secondary"]Duration:[/keyword] 8 seconds'
    ]
  },
  "riddle-you-this": {
    icon: "icons/character-specialization/riddle-you-this.webp",
    name: "Riddle You This",
    tree: "brute",
    requirements: [
      {
        tree: "brute",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 2
    },
    description: `Whenever the [keyword id="primary"]Vault Hunter[/keyword] deals [keyword id="secondary"]Gun Damage[/keyword], gain a Stack of  [keyword id="primary"]Riddle You This[/keyword], increasing [keyword id="secondary"]Gun Damage[/keyword]. 

Stacks are lost if a new Stack has not been gained for a [keyword id="secondary"]Duration[/keyword].`,
    effects: [
      '[keyword id="secondary"]Gun Damage:[/keyword] +1% per Stack',
      '[keyword id="secondary"]Maximum Stacks:[/keyword] 50',
      '[keyword id="secondary"]Duration:[/keyword] 6 seconds'
    ]
  },
  sharpshooter: {
    icon: "icons/character-specialization/sharpshooter.webp",
    name: "Sharpshooter",
    tree: "sharpshooter",
    requirements: [],
    isBaseSpecialization: !0,
    position: {
      row: 0,
      column: 4
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Reload Speed[/keyword] and [keyword id="secondary"]Accuracy[/keyword].',
    effects: [
      '[keyword id="secondary"]Gun Reload Speed:[/keyword] +X%',
      '[keyword id="secondary"]Gun Accuracy:[/keyword] +X%'
    ]
  },
  "down-but-not-out": {
    icon: "icons/character-specialization/down-but-not-out.webp",
    name: "Down But Not Out",
    tree: "sharpshooter",
    requirements: [
      {
        tree: "sharpshooter",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 1,
      column: 4
    },
    description: 'During [keyword id="secondary"]Fight For Your Life[/keyword] the [keyword id="primary"]Vault Hunter[/keyword] can now [keyword id="secondary"]Aim[/keyword] down sights and does not suffer [keyword id="secondary"]Gun Accuracy[/keyword] penalties.'
  },
  "in-the-zone": {
    icon: "icons/character-specialization/in-the-zone.webp",
    name: "In The Zone",
    tree: "sharpshooter",
    requirements: [
      {
        tree: "sharpshooter",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 2,
      column: 4
    },
    description: 'While [keyword id="secondary"]Aiming[/keyword], the [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Gun Damage[/keyword] and [keyword id="secondary"]Critical Hit Damage[/keyword] per second. Bonuses are lost after 2 seconds of not [keyword id="secondary"]Aiming[/keyword].',
    effects: [
      '[keyword id="secondary"]Gun Damage:[/keyword] +5% per Stack',
      '[keyword id="secondary"]Critical Hit Damage:[/keyword] +5% per Stack',
      '[keyword id="secondary"]Maximum Stacks:[/keyword] 5'
    ]
  },
  "one-shot-one-kill": {
    icon: "icons/character-specialization/one-shot-one-kill.webp",
    name: "One Shot, One Kill",
    tree: "sharpshooter",
    requirements: [
      {
        tree: "sharpshooter",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 4
    },
    description: '[keyword id="secondary"]Kill Skill.[/keyword] Excess [keyword id="secondary"]Damage[/keyword] will be [keyword id="secondary"]Stored[/keyword] and added to your next [keyword id="secondary"]Gun Shot[/keyword].',
    effects: [
      '[keyword id="secondary"]Excess Damage Stored:[/keyword] 100%',
      '[keyword id="secondary"]Stored Duration:[/keyword] 12 seconds'
    ]
  },
  runner: {
    icon: "icons/character-specialization/runner.webp",
    name: "Runner",
    tree: "runner",
    requirements: [],
    isBaseSpecialization: !0,
    position: {
      row: 0,
      column: 6
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Movement Speed[/keyword] and [keyword id="secondary"]Melee Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Movement Speed:[/keyword] +X%',
      '[keyword id="secondary"]Melee Damage:[/keyword] +Y%'
    ]
  },
  "bear-arms": {
    icon: "icons/character-specialization/bear-arms.webp",
    name: "Bear Arms",
    tree: "runner",
    requirements: [
      {
        tree: "runner",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 1,
      column: 6
    },
    description: '[keyword id="secondary"]Melee Damage[/keyword] now benefits from increases to [keyword id="secondary"]Gun Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Melee Damage:[/keyword] 50% of increases to [keyword id="secondary"]Gun Damage[/keyword]'
    ]
  },
  "bullet-train": {
    icon: "icons/character-specialization/bullet-train.webp",
    name: "In The Zone",
    tree: "runner",
    requirements: [
      {
        tree: "runner",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 2,
      column: 6
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] can now [keyword id="secondary"]Hipfire[/keyword] while [keyword id="secondary"]Sprinting[/keyword], and gain [keyword id="secondary"]Gun Damage[/keyword] the faster they move.',
    effects: [
      '[keyword id="secondary"]Gun Damage:[/keyword] 15% when [keyword id="secondary"]Walking[/keyword]'
    ]
  },
  groundbreaker: {
    icon: "icons/character-specialization/groundbreaker.webp",
    name: "Groundbreaker",
    tree: "runner",
    requirements: [
      {
        tree: "runner",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 6
    },
    description: `[keyword id="secondary"]Non-Melee Attack Damage[/keyword] and [keyword id="secondary"]Slam Damage[/keyword] are [keyword id="secondary"]Stored[/keyword].

[keyword id="secondary"]Melee Attacks[/keyword] and [keyword id="secondary"]Slam[/keyword] deal [keyword id="nowrap"] [/keyword][keyword id="kinetic_icon"] [/keyword] [keyword id="kinetic"]Bonus[/keyword][keyword id="/nowrap"] [/keyword] [keyword id="kinetic"]Kinetic Melee Damage[/keyword] based on [keyword id="secondary"]Stored Damage[/keyword], and [keyword id="secondary"]consume[/keyword] it.`,
    effects: [
      '[keyword id="secondary"]Stored Damage:[/keyword] 20%',
      '[keyword id="secondary"]Stored Damage Duration:[/keyword] 5 seconds'
    ]
  },
  gadgeteer: {
    icon: "icons/character-specialization/gadgeteer.webp",
    name: "Gadgeteer",
    tree: "gadgeteer",
    requirements: [
      {
        tree: "survivor",
        points: 10
      },
      {
        tree: "brute",
        points: 10
      }
    ],
    isBaseSpecialization: !0,
    position: {
      row: 2,
      column: 1
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Ordnance Cooldown Rate[/keyword].',
    effects: [
      '[keyword id="secondary"]Ordnance Cooldown Rate:[/keyword] +X%'
    ]
  },
  tripwire: {
    icon: "icons/character-specialization/tripwire.webp",
    name: "Tripwire",
    tree: "gadgeteer",
    requirements: [
      {
        tree: "gadgeteer",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 1
    },
    description: 'Reduce [keyword id="secondary"]Ordnance Cooldown[/keyword] whenever [keyword id="secondary"]Action Skill[/keyword] is activated.',
    effects: [
      '[keyword id="secondary"]Ordnance Cooldown Reduction:[/keyword] 25%'
    ]
  },
  "full-spectrum-arsenal": {
    icon: "icons/character-specialization/full-spectrum-arsenal.webp",
    name: "Full Spectrum Arsenal",
    tree: "gadgeteer",
    requirements: [
      {
        tree: "gadgeteer",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 4,
      column: 1
    },
    description: '[keyword id="secondary"]Ordnance Damage[/keyword] now benefits from increases to [keyword id="secondary"]Gun Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Ordnance Damage:[/keyword] 50% of increases to [keyword id="secondary"]Gun Damage[/keyword]'
    ]
  },
  "fragmentation-payload": {
    icon: "icons/character-specialization/fragmentation-payload.webp",
    name: "Fragmentation Payload",
    tree: "gadgeteer",
    requirements: [
      {
        tree: "gadgeteer",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 5,
      column: 1
    },
    description: '[keyword id="secondary"]Ordnance[/keyword] gains a chance to [keyword id="secondary"]Critically Hit[/keyword] enemies, and also gains increased [keyword id="secondary"]Ordnance Critical Hit Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Ordnance Critical Hit Chance:[/keyword] 5%',
      '[keyword id="secondary"]Ordnance Critical Hit Damage:[/keyword] +50%'
    ]
  },
  killer: {
    icon: "icons/character-specialization/killer.webp",
    name: "Killer",
    tree: "killer",
    requirements: [
      {
        tree: "brute",
        points: 10
      },
      {
        tree: "sharpshooter",
        points: 10
      }
    ],
    isBaseSpecialization: !0,
    position: {
      row: 2,
      column: 3
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Critical Hit Damage[/keyword] and [keyword id="secondary"]Status Effect Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Critical Hit Damage:[/keyword] +X%',
      '[keyword id="secondary"]Status Effect Damage:[/keyword] +X%'
    ]
  },
  contamination: {
    icon: "icons/character-specialization/contamination.webp",
    name: "Contamination",
    tree: "killer",
    requirements: [
      {
        tree: "killer",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 3
    },
    description: '[keyword id="secondary"]Critical Hits[/keyword] grant increased [keyword id="secondary"]Status Effect Application Chance[/keyword].',
    effects: [
      '[keyword id="secondary"]Status Effect Application Chance:[/keyword] +10% per Stack',
      '[keyword id="secondary"]Stack Duration:[/keyword] 10 seconds',
      '[keyword id="secondary"]Maximum Stacks:[/keyword] 10'
    ]
  },
  "compounding-afflictions": {
    icon: "icons/character-specialization/compounding-afflictions.webp",
    name: "Compounding Afflictions",
    tree: "killer",
    requirements: [
      {
        tree: "killer",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 4,
      column: 3
    },
    description: 'Enemies take increased [keyword id="secondary"]Damage[/keyword] for each [keyword id="secondary"]Status Effect[/keyword] applied to them.',
    effects: [
      '[keyword id="secondary"]Damage Taken:[/keyword] +1%'
    ]
  },
  overkill: {
    icon: "icons/character-specialization/overkill.webp",
    name: "Overkill",
    tree: "killer",
    requirements: [
      {
        tree: "killer",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 5,
      column: 3
    },
    description: '[keyword id="secondary"]Kill Skill.[/keyword] Killing an enemy with a [keyword id="secondary"]Critical Hit[/keyword] will cause them to explode, dealing [keyword id="secondary"]Skill Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Damage Dealt:[/keyword] 50% of [keyword id="secondary"]initial hit[/keyword]'
    ]
  },
  daredevil: {
    icon: "icons/character-specialization/daredevil.webp",
    name: "Daredevil",
    tree: "daredevil",
    requirements: [
      {
        tree: "sharpshooter",
        points: 10
      },
      {
        tree: "runner",
        points: 10
      }
    ],
    isBaseSpecialization: !0,
    position: {
      row: 2,
      column: 5
    },
    description: 'The [keyword id="primary"]Vault Hunter[/keyword] gains increased [keyword id="secondary"]Action Skill Cooldown Rate[/keyword].',
    effects: [
      '[keyword id="secondary"]Action Skill Cooldown Rate:[/keyword] +X%'
    ]
  },
  "now-with-caffeine": {
    icon: "icons/character-specialization/now-with-caffeine.webp",
    name: "Now with Caffeine",
    tree: "daredevil",
    requirements: [
      {
        tree: "daredevil",
        points: 1
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 3,
      column: 5
    },
    description: 'Reduce [keyword id="secondary"]Action Skill Cooldown[/keyword] whenever a [keyword id="secondary"]Repkit[/keyword] is activated.',
    effects: [
      '[keyword id="secondary"]Action Skill Cooldown Reduction:[/keyword] 25%'
    ]
  },
  "i-am-a-gun": {
    icon: "icons/character-specialization/i-am-a-gun.webp",
    name: "I am a Gun",
    tree: "daredevil",
    requirements: [
      {
        tree: "daredevil",
        points: 10
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 4,
      column: 5
    },
    description: '[keyword id="secondary"]Action Skill Damage[/keyword] now benefits from increases to [keyword id="secondary"]Gun Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Action Skill Damage:[/keyword] 50% of increases to [keyword id="secondary"]Gun Damage[/keyword]'
    ]
  },
  "a-honed-mind": {
    icon: "icons/character-specialization/a-honed-mind.webp",
    name: "A Honed Mind",
    tree: "daredevil",
    requirements: [
      {
        tree: "daredevil",
        points: 20
      }
    ],
    isBaseSpecialization: !1,
    position: {
      row: 5,
      column: 5
    },
    description: '[keyword id="secondary"]Action Skills[/keyword] gain a chance to [keyword id="secondary"]Critically Hit[/keyword] enemies, and also gain increased [keyword id="secondary"]Action Skill Critical Hit Damage[/keyword].',
    effects: [
      '[keyword id="secondary"]Action Skill Critical Hit Chance:[/keyword] 5%',
      '[keyword id="secondary"]Action Skill Critical Hit Damage:[/keyword] +50%'
    ]
  }
}, t = {
  0: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_VLA_AdrenalinePump",
    description: "[rarity_legendary]Blood Rush[/rarity_legendary] - [secondary]Automatically restores Health[/secondary] on [secondary]Second Wind[/secondary]"
  },
  1: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_DualDamage",
    description: "[rarity_legendary]Prophetic[/rarity_legendary]"
  },
  2: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_anarchy",
    description: "[rarity_legendary]Mutualism[/rarity_legendary] - On [secondary]Auto-Reload[/secondary] or kill, grants [secondary]{dmg} Damage[/secondary] and [secondary]{acc} Accuracy[/secondary] for a Maximum [secondary]{stack}[/secondary] Stacks, which reset on manual [secondary]Reload[/secondary]"
  },
  3: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_anchor",
    description: "[rarity_legendary]Anchor[/rarity_legendary] - anchor desc"
  },
  4: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_asher",
    description: "[rarity_legendary]Slow Burn[/rarity_legendary] - [secondary]Critical Hits[/secondary] apply [secondary]Status Effects[/secondary] instead of increased [secondary]impact Damage[/secondary]"
  },
  5: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_AtlingGun",
    description: "[rarity_legendary]Whistler[/rarity_legendary]"
  },
  6: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_BOR_Augmenter",
    description: "[rarity_legendary]Time Dilation[/rarity_legendary] - The [secondary]Repkit's Duration[/secondary] is increased by [secondary]{mod1}[/secondary], and its [secondary]Cooldown Duration[/secondary] is decreased by [secondary]{mod2}[/secondary]"
  },
  7: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_BeeGun",
    description: "[rarity_legendary]Hivemind[/rarity_legendary]"
  },
  8: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_MAL_BloodAnalyzer",
    description: "[rarity_legendary]Immunity Shot[/rarity_legendary] - On use, grants  [secondary]Immunity[/secondary] to the last [secondary]Elemental Damage Taken[/secondary] for [secondary]{duration}s[/secondary]"
  },
  9: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_bod",
    description: "[rarity_legendary]All-Arounder[/rarity_legendary] - Counts as a [secondary]Shotgun[/secondary], an [secondary]Assault Rifle[/secondary], a [secondary]Sniper Rifle[/secondary], a [secondary]Pistol[/secondary], and an [secondary]SMG[/secondary]"
  },
  10: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_BonnieClyde",
    description: "[rarity_legendary]Pair of Thieves[/rarity_legendary] - On kill, grants [secondary]{mod} Damage[/secondary] for the [secondary]Gun's[/secondary] other [secondary]Mode[/secondary] and [secondary]refills[/secondary] its [secondary]Magazine[/secondary]"
  },
  11: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Boomslang",
    description: "[rarity_legendary]Bullet Pollinator[/rarity_legendary] - After [secondary]Reloading[/secondary], the first [secondary]Critical Hit Ricochets[/secondary] a [secondary]Sticky Projectile[/secondary] to up to [secondary]{mod}[/secondary] nearby enemies"
  },
  12: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ballista",
    description: "[rarity_legendary]Propagation[/rarity_legendary]"
  },
  13: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_BottledLightning",
    description: "[rarity_legendary]Strike Twice[/rarity_legendary]"
  },
  14: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ATLien",
    description: "[rarity_legendary]D.O.P.E. Buoys[/rarity_legendary] - Throws [secondary]2 Combo Orbs[/secondary], which place the [primary]Atlas[/primary] [secondary]Target Lock[/secondary] on enemies damaged by the [secondary]Combo Orbs[/secondary]"
  },
  15: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_buoy",
    description: "[rarity_legendary]Buoyant[/rarity_legendary]"
  },
  16: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Axe",
    description: "[rarity_legendary]Makeshift[/rarity_legendary]"
  },
  17: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Chuck",
    description: "[rarity_legendary]Pitcher[/rarity_legendary]"
  },
  18: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_cindershelly",
    description: "[rarity_legendary]Glass[/rarity_legendary] - When damaged, grants a Stack of [secondary]Resolve[/secondary] that reduces [secondary]Damage Taken[/secondary] by [secondary]{dmgrdc}[/secondary] per Stack,  up to [secondary]{stack}[/secondary] Stacks.  When the [secondary]Energy Shield[/secondary] breaks, releases a [secondary]Nova[/secondary] that deals [secondary]{nova} Damage[/secondary], with each Stack of [secondary]Resolve[/secondary] increasing the [secondary]Damage[/secondary] by [secondary]{dmgscl}[/secondary]."
  },
  19: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_coldshoulder",
    description: "[rarity_legendary]Iced Out[/rarity_legendary]"
  },
  20: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_compleat",
    description: "[rarity_legendary]Sisyphusian[/rarity_legendary] - When [secondary]Armor Shield[/secondary] is full, it instantly [secondary]loses[/secondary] an [secondary]Armor Segment[/secondary]"
  },
  21: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_complex_root",
    description: "[rarity_legendary]Sierpinski[/rarity_legendary] - Spawns additional [secondary]diverging Projectiles[/secondary] along its path"
  },
  22: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_convergence",
    description: "[rarity_legendary]Asymptotic[/rarity_legendary]"
  },
  23: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_convergence",
    description: "[rarity_legendary]Heirloom[/rarity_legendary]"
  },
  24: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_JAK_Defibrillator",
    description: "[rarity_legendary]Cardiac Shock[/rarity_legendary] - When [secondary]Health[/secondary] goes below [secondary]{mod2}[/secondary], there is a [secondary]{mod}[/secondary] chance to [secondary]replenish[/secondary] a [secondary]Repkit Charge [/secondary]"
  },
  25: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_disco_disc",
    description: "[rarity_legendary]Groove[/rarity_legendary]"
  },
  26: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_DiscJockey",
    description: "[rarity_legendary]Bouncing Biscuits[/rarity_legendary] - [secondary]Energy disc Projectiles[/secondary] bounce up to [secondary]{mod}[/secondary] times, and gain [secondary]{mod2} Damage[/secondary] per bounce"
  },
  27: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_DividedFocus",
    description: "[rarity_legendary]Conquerer[/rarity_legendary] - Fires [secondary]bouncing Projectiles[/secondary] that [secondary]pierce enemies[/secondary]"
  },
  28: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_supernova",
    description: "[rarity_legendary]Nucleosynthesis[/rarity_legendary] - When [secondary]Energy Shield[/secondary] breaks or fills, it triggers a [secondary]Nova[/secondary] that deals [secondary]{dmg} Damage[/secondary]"
  },
  29: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_FaultyDetonator",
    description: "[rarity_legendary]Sticky Trigger[/rarity_legendary] - [secondary]Grenade[/secondary] spawns [secondary]Combo Orbs[/secondary] upon [secondary]detonation[/secondary]"
  },
  30: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Finnity",
    description: "[rarity_legendary]Pipin' Hot Barrels[/rarity_legendary] - Does not consume [secondary]Ammo[/secondary] while [secondary]Overheating[/secondary]"
  },
  31: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_firepot",
    description: "[rarity_legendary]Spicy[/rarity_legendary] - Spawns homing [primary]Torgue[/primary] [secondary]Stickies[/secondary] over time"
  },
  32: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_firewerks",
    description: "[rarity_legendary]Bundled[/rarity_legendary] - On kill, spawns [secondary]Missiles[/secondary] that [secondary]home in[/secondary] on nearby [secondary]enemies[/secondary] and deal [secondary]{dmg} Damage[/secondary] each"
  },
  33: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Fisheye",
    description: "[rarity_legendary]Ultima Ratio Regum[/rarity_legendary] - Fires wide, [secondary]penetrating[/secondary] triple [secondary]Railgun[/secondary] shots with [secondary]{mod} Critical Damage[/secondary]"
  },
  34: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_commBD",
    description: "[rarity_legendary]Wide Net[/rarity_legendary]"
  },
  35: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_fuse",
    description: "[rarity_legendary]Fortified Position[/rarity_legendary]"
  },
  36: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_GMR",
    description: "[rarity_legendary]Big Name Hunter[/rarity_legendary] - When [secondary]Zoomed In[/secondary], [secondary]Damage[/secondary] increases by [secondary]{mod1}[/secondary], [secondary]Shot Cost[/secondary] increases by [secondary]{mod2}[/secondary], and [secondary]Fire Rate[/secondary] decreases by [secondary]{mod3}[/secondary]"
  },
  37: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_GammaVoid",
    description: "[rarity_legendary]Radiation Exposure[/rarity_legendary] - Creates a [secondary]Singularity[/secondary] for [secondary]{duration}s,[/secondary] in which enemies take [secondary]{mod}[/secondary] [radiation_icon][radiation]Radiation Damage[/radiation] over time"
  },
  38: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Goalkeeper",
    description: "[rarity_legendary]Amper Camper[/rarity_legendary] - When [secondary]Gun Shield[/secondary] is depleted, grants  [secondary]{mod} Damage[/secondary] for [secondary]{duration}s[/secondary]"
  },
  39: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_GoldenGod",
    description: "[rarity_legendary]Rage[/rarity_legendary] - When [secondary]Overheating[/secondary], the [secondary]Bulletforge[/secondary] does not break, but instead continually consumes greater amounts of [secondary]Ammo[/secondary]"
  },
  40: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_GoreMaster",
    description: "[rarity_legendary]Chief Execution Officer[/rarity_legendary] - Deals [secondary]{DmgScalar} Damage[/secondary] to [secondary]enemies[/secondary] below [secondary]{LowHPThreshold} Health[/secondary]"
  },
  41: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_angel",
    description: "[rarity_legendary]Wings of Grace[/rarity_legendary] - When equipped, grants faster [secondary]revival[/secondary] from [secondary]Fight for Your Life.[/secondary] When [secondary]FFYL[/secondary] expires, grants [secondary]1[/secondary] free [secondary]Second Wind[/secondary] once every [secondary]{mod}s[/secondary]"
  },
  42: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_HeavyWeight",
    description: "[rarity_legendary]Bareknuckle[/rarity_legendary] - On [secondary]Melee Hit[/secondary], consumes an [secondary]Armor Segment[/secondary] to grant [secondary]{mod1} Melee Damage[/secondary].  When [secondary]Armor Shield[/secondary] is empty, grants [secondary]{mod2} Melee Damage[/secondary]"
  },
  43: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_hellfire",
    description: "[rarity_legendary]Burning Desire[/rarity_legendary]"
  },
  44: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Hellwalker",
    description: "[rarity_legendary]Soothslayer[/rarity_legendary]"
  },
  45: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Hoarder",
    description: "[rarity_legendary]Refreshments[/rarity_legendary] - On kill, [secondary]{mod}[/secondary] chance to spawn an [secondary]Ammo Booster[/secondary] that instantly [secondary]refills[/secondary] your [secondary]Gun[/secondary]"
  },
  46: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Slugger",
    description: "[rarity_legendary]Blazing Barrel[/rarity_legendary] - On kill, deal [secondary]{mod} Damage[/secondary] for [secondary]{duration}s[/secondary] for a Maximum [secondary]3[/secondary] Stacks"
  },
  47: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_HeavyTurret",
    description: "[rarity_legendary]Husky Auto Turret[/rarity_legendary]"
  },
  48: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Splatoon",
    description: "[rarity_legendary]Inkling[/rarity_legendary] - Fires bouncing [secondary]Projectiles[/secondary] that leave an [secondary]Elemental Splat[/secondary] on bounce"
  },
  49: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_rubber",
    description: "[rarity_legendary]Self-Replicating[/rarity_legendary]"
  },
  50: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Kaleidosplode",
    description: "[rarity_legendary]Colorful Mess[/rarity_legendary]"
  },
  51: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Kaoson",
    description: "[rarity_legendary]Granted[/rarity_legendary]"
  },
  52: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_katagawa",
    description: "[rarity_legendary]Stormcloud[/rarity_legendary]"
  },
  53: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_kickballer",
    description: "[rarity_legendary]Pipin' Hot Barrels[/rarity_legendary] - Does not consume [secondary]Ammo[/secondary] while [secondary]Overheating[/secondary]"
  },
  54: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_kickballer",
    description: "[rarity_legendary] Force Bunt [/rarity_legendary]"
  },
  55: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_TED_KillSpring",
    description: "[rarity_legendary]Blood Siphon[/rarity_legendary] - On kill, converts [secondary]{mod}[/secondary] of any [secondary]excess Damage[/secondary] into [secondary]Healing Orbs[/secondary] that [secondary]seek out[/secondary] nearby [secondary]allies[/secondary]"
  },
  56: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_KingsGambit",
    description: "[rarity_legendary]Holy Hell[/rarity_legendary] - When shot, thrown [secondary]Gun Ricochets Projectiles[/secondary] to nearby [secondary]enemies[/secondary]"
  },
  57: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_LeadBalloon",
    description: "[rarity_legendary]Lightweight[/rarity_legendary] - [secondary]Projectiles[/secondary] float upward and spawn child [secondary]Projectiles[/secondary] upon [secondary]exploding[/secondary]"
  },
  58: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Linebacker",
    description: "[rarity_legendary]Full Coverage[/rarity_legendary] - [secondary]Bouncing Projectiles[/secondary] increase [secondary]Damage[/secondary] by [secondary]{mod}[/secondary] and [secondary]Damage Radius[/secondary] by [secondary]{mod2}[/secondary] per bounce"
  },
  59: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Lucian",
    description: "[rarity_legendary]Trample[/rarity_legendary] - [secondary]Critical Hits refill[/secondary] up to [secondary]{ammo} Ammo[/secondary] to the [secondary]Gun's Magazine[/secondary]"
  },
  60: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_CrowdSourced",
    description: "[rarity_legendary]Crowd Sourced[/rarity_legendary] - On hit, additional [secondary]Projectiles[/secondary] spawn from nearby enemies"
  },
  61: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_NoisyCricket",
    description: "[rarity_legendary]Silence[/rarity_legendary]"
  },
  62: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_barrelAged",
    description: "[rarity_legendary]Vintage[/rarity_legendary]"
  },
  63: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OhmIgot",
    description: "[rarity_legendary]Energy Transfer[/rarity_legendary] - When [secondary]Energy Shield[/secondary] is active, grants [secondary]{mod} Damage[/secondary] by consuming the [secondary]Shield's energy[/secondary] instead of [secondary]Ammo[/secondary].   When [secondary]Overshield[/secondary] is also active, [secondary]Energy Shield[/secondary] will not [secondary]deplete[/secondary]."
  },
  64: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OnionLayeredGuard",
    description: "[rarity_legendary]Shallot Shell[/rarity_legendary] - On [secondary]Armor Segment[/secondary] break, grants [secondary]Immunity[/secondary] to [secondary]Damage[/secondary] for [secondary]{mod}s[/secondary]"
  },
  65: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Onslaught",
    description: "[rarity_legendary]Keep It Coming[/rarity_legendary] - There's a [secondary]{mod}[/secondary] Chance for every bullet fired to deal extra [secondary]Damage[/secondary] and not consume [secondary]Ammo[/secondary]"
  },
  66: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OM",
    description: "[rarity_legendary]Timber[/rarity_legendary]"
  },
  67: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OM",
    description: "[rarity_legendary]Tactical Rounds[/rarity_legendary] - The first half of your [secondary]Magazine[/secondary] deals [secondary]+50% Bonus Damage[/secondary]"
  },
  68: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OM",
    description: "[rarity_legendary]Fragcendiary Grenades[/rarity_legendary] - [primary][Alt-Fire][/primary] Launches [secondary]Grenades[/secondary] that deal [fire]{damage} Incendiary Damage[/fire] and spawn a [fire]Fire Hazard.[/fire]"
  },
  69: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_OM",
    description: "[rarity_legendary]Space Laser[/rarity_legendary] - [primary][Alt-Fire][/primary] Calls down a [secondary]Space Laser[/secondary] dealing [secondary]{damage} Damage[/secondary] every [secondary].2s[/secondary]"
  },
  70: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_VLA_Pacemaker",
    description: "[rarity_legendary]Pulsometer[/rarity_legendary] - Passively [secondary]regenerates Health[/secondary] over time, increasing in [secondary]Rate[/secondary] when your [secondary]Health[/secondary] is [secondary]low[/secondary]"
  },
  71: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_momento",
    description: "[rarity_legendary]Psychosis[/rarity_legendary] - When damaged, grants [secondary]{resist} Elemental Resistance[/secondary] and [secondary]{mod1} Resistance[/secondary] to the last [secondary]Damage Type[/secondary] received for [secondary]{mod2}s[/secondary]"
  },
  72: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_phantom_flame",
    description: "[rarity_legendary]Midday[/rarity_legendary] - [secondary]Zooming In[/secondary] acquires [secondary]Lock On targets[/secondary] over time, and firing while [secondary]Zoomed In[/secondary] shoots the entire [secondary]Magazine[/secondary]"
  },
  73: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_PlasmaCoil",
    description: "[rarity_legendary]Superheated[/rarity_legendary]"
  },
  74: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_PotatoThrower",
    description: "[rarity_legendary]Spud Gun[/rarity_legendary]"
  },
  75: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_prince",
    description: "[rarity_legendary]Pamplemousse[/rarity_legendary] - Hitting [secondary]enemies[/secondary] deals [secondary]{selfdmg} Damage[/secondary] to you, and grants a Stack of [secondary]Cruelty[/secondary] - which, on kill, restores [secondary]{over} Overshield[/secondary] per Stack of [secondary]Cruelty[/secondary] - for a Maximum [secondary]{max}[/secondary] Stacks"
  },
  76: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ShieldBoi",
    description: "[rarity_legendary]Shield Boi[/rarity_legendary] - Spawns a [flavor]Shield Boi[/flavor] when the last [secondary]Armor Segment[/secondary] breaks"
  },
  77: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ProteanCell",
    description: "[rarity_legendary]Direct Current[/rarity_legendary] - [secondary]Ground Slam[/secondary] to toggle this effect.  While enabled, drains [secondary]Shield over time[/secondary] to grant [secondary]{mod} Bonus[/secondary] [shock_icon][shock]Shock Damage[/shock], and [secondary]Damage Taken[/secondary] passes through the [secondary]Shield[/secondary]"
  },
  78: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_QueensRest",
    description: "[rarity_legendary]Royal Armory[/rarity_legendary] - Fires [secondary]high-speed rounds[/secondary], and damaging [secondary]enemies[/secondary] has a [secondary]{chn}[/secondary] Chance to spawn a [secondary]Homing Sticky Projectile[/secondary]"
  },
  79: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [fire]Incendiary[/fire] [secondary]droplets[/secondary]"
  },
  80: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]"
  },
  81: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  82: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [fire]Incendiary,[/fire] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]"
  },
  83: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [fire]Incendiary,[/fire] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  84: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  85: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [fire]Incendiary,[/fire] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]"
  },
  86: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [fire]Incendiary,[/fire] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  87: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  88: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RainbowVomit",
    description: "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [fire]Incendiary,[/fire] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
  },
  89: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_rangefinder",
    description: "[rarity_legendary]Precision[/rarity_legendary]"
  },
  90: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ravenfire",
    description: "[rarity_legendary]621[/rarity_legendary] - [secondary]Explosions[/secondary] radiate outward from the point of impact"
  },
  91: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_recursive",
    description: "[rarity_legendary]Looping[/rarity_legendary]"
  },
  92: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Roach",
    description: "[rarity_legendary]Flesh Eaters[/rarity_legendary] - Shoots [secondary]eggs[/secondary] that hatch [secondary]flying roaches[/secondary] when attached to flesh, living or dead"
  },
  93: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Rowan",
    description: "[rarity_legendary]Stalker[/rarity_legendary] - Grants a [secondary]{mod1}[/secondary] Chance for shots to be a [secondary]Critical Hit[/secondary], and [secondary]refunds {mod2} Ammo[/secondary] on [secondary]Critical Hit[/secondary]"
  },
  94: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_RubysGrasp",
    description: "[rarity_legendary]Grasp[/rarity_legendary] - [secondary]Reloading[/secondary] the [secondary]Gun[/secondary] fires [secondary]{quantify} Homing[/secondary] copies"
  },
  95: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_QuickDraw",
    description: "[rarity_legendary]Dueling Pistol[/rarity_legendary] - Deals [secondary]{mod1} Damage[/secondary] for [secondary]{duration}s[/secondary] after [secondary]swapping Guns[/secondary]"
  },
  96: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_seventh_sense",
    description: "[rarity_legendary]Proprioception[/rarity_legendary] - Hitting [secondary]enemies[/secondary] spawns [secondary]Orbs[/secondary] that float upward and [secondary]home in[/secondary] on [secondary]targets[/secondary] on [secondary]Reload[/secondary]"
  },
  97: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_TOR_ShinyWarPaint",
    description: "[rarity_legendary]Chrome[/rarity_legendary] - On use, grants [secondary]{mod} Fire Rate[/secondary] and [secondary]{mod2} Movement Speed[/secondary] for [secondary]{duration}s[/secondary], and reduces [secondary]Repkit Cooldown[/secondary] by [secondary]{mod3}s[/secondary] each time [secondary]Damage[/secondary] is taken"
  },
  98: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_ShoKunai",
    description: "[rarity_legendary]Ninja Speed[/rarity_legendary] - Grants [secondary]{mod} Movement Speed[/secondary] for a short [secondary]Duration[/secondary] with each [secondary]consecutive hit[/secondary], for a Maximum of [secondary]{mod2}[/secondary] Stacks"
  },
  99: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Sideshow",
    description: "[rarity_legendary]Juggler[/rarity_legendary] - Let's play a game. Shoot as many [secondary]targets[/secondary] as possible before they hit the ground, and [secondary]refill[/secondary] up to [secondary]2 Ammo[/secondary] per [secondary]target[/secondary] hit"
  },
  100: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_slippy",
    description: "[rarity_legendary]Swordfish[/rarity_legendary] - Deals [secondary]Melee Damage[/secondary] on [secondary]detonation[/secondary]"
  },
  101: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_lightning",
    description: "[rarity_legendary]Short Circuit[/rarity_legendary] - While [secondary]Energy Shield[/secondary] is not [secondary]full[/secondary], it periodically [shock_icon][shock]Shocks[/shock] nearby enemies"
  },
  102: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_spinning_blade",
    description: "[rarity_legendary]Incessant[/rarity_legendary] - Continuously [secondary]homes in[/secondary] on a [secondary]target[/secondary]"
  },
  103: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_spinning_blade",
    description: "[rarity_legendary]Juggler[/rarity_legendary] - [secondary]Catch[/secondary] the [secondary]rebound[/secondary] to [secondary]refund 1 Grenade Charge[/secondary]"
  },
  104: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Javelin",
    description: "[rarity_legendary]Gungnir[/rarity_legendary]"
  },
  105: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_star_helix",
    description: "[rarity_legendary]Constellation[/rarity_legendary] - [secondary]Projectiles[/secondary] can be fired vertically or horizontally"
  },
  106: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_StopGap",
    description: "[rarity_legendary]Reconfigure[/rarity_legendary] - When firing, [secondary]Fire Rate[/secondary] decreases down to [secondary]{mod1}[/secondary], but [secondary]Damage[/secondary] increases up to [secondary]{mod2}[/secondary]"
  },
  107: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Stray",
    description: "[rarity_legendary]Stray[/rarity_legendary] - Fires [secondary]2 secondary bullets[/secondary] that [secondary]home in[/secondary] on nearby target(s)"
  },
  108: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Streamer",
    description: "[rarity_legendary]Delegation[/rarity_legendary] - Launches [secondary]stationary Projectiles[/secondary] that each fire a [secondary]Beam[/secondary] forward"
  },
  109: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_SuperSoldier",
    description: "[rarity_legendary]Power Play[/rarity_legendary] - When [secondary]Energy Shield[/secondary] fills, grants an [secondary]Overshield.[/secondary] When [secondary]Energy Shield[/secondary] is [secondary]full[/secondary], grants [secondary]{mod} Fire Rate[/secondary], [secondary]{mod3} Movement Speed[/secondary], and [secondary]regens {mod2} Ammo/s[/secondary]"
  },
  110: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_swarm",
    description: "[rarity_legendary]Swoosh[/rarity_legendary]"
  },
  111: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_sweet_embrace",
    description: "[rarity_legendary]Adoration[/rarity_legendary]"
  },
  112: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_symmetry",
    description: "[rarity_legendary]Bilateral[/rarity_legendary] - Fires from [secondary]reserve Ammo[/secondary] while charging"
  },
  113: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_TKsWave",
    description: "[rarity_legendary]Heirloom[/rarity_legendary]"
  },
  114: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_timekeeper",
    description: "[rarity_legendary]Bininu[/rarity_legendary] - When equipped, grants [secondary]{hcap} Maximum Health[/secondary], [secondary]{hregen} Health Regeneration/s[/secondary], and reduces [secondary]Damage Taken[/secondary] by [secondary]{dmgtaken}[/secondary]"
  },
  115: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_repkit_uni_ORD_TripleBypass",
    description: "[rarity_legendary]Heart Pump[/rarity_legendary] - This [secondary]Repkit[/secondary] has [secondary]3 Charges[/secondary], and has a [secondary]{mod}[/secondary] chance to [secondary]replenish[/secondary] a [secondary]Charge[/secondary] on kill"
  },
  116: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Truck",
    description: "[rarity_legendary]Fixer-Upper[/rarity_legendary]"
  },
  117: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_PredatorDrone",
    description: "[rarity_legendary]Death From Above[/rarity_legendary]"
  },
  118: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Vamoose",
    description: "[rarity_legendary]Scarce[/rarity_legendary]"
  },
  119: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Waterfall",
    description: "[rarity_legendary]Waterfall[/rarity_legendary] - Causes additional [secondary]explosions[/secondary] when damaging [secondary]targets[/secondary]"
  },
  120: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Watts4Dinner",
    description: "[rarity_legendary]Overshield Eater[/rarity_legendary] - When [secondary]Energy Shield[/secondary] is active, enemies have a [secondary]{mod}[/secondary] chance to drop an [secondary]Overshield[/secondary] when hit. When [secondary]Overshield[/secondary] is also active, grants [secondary]{mod2}[/secondary] [shock_icon][shock]Shock Damage[/shock]"
  },
  121: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_WF",
    description: "[rarity_legendary]Overdrive[/rarity_legendary] - Switches to a [secondary]secondary Magazine[/secondary] that can be fired on [secondary]Full Auto[/secondary]"
  },
  122: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_WF",
    description: "[rarity_legendary]Scrap Cannon[/rarity_legendary] - Fires a [secondary]spread of shrapnel[/secondary] from the [secondary]Underbarrel[/secondary] that deals [secondary]{damage}x{proj} Damage[/secondary], and increases [secondary]target's Damage Taken[/secondary] for [secondary]4s[/secondary]"
  },
  123: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_WomboCombo",
    description: "[rarity_legendary]Rip Rockets[/rarity_legendary] - [secondary]Rockets[/secondary] automatically fire from the [secondary]Underbarrel[/secondary]"
  },
  124: {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "np_Zipgun",
    description: "[rarity_legendary]Prison Rules[/rarity_legendary] - Grants [secondary]{mod} Critical Damage[/secondary] and [secondary]{mod2} Damage[/secondary] when hitting a [secondary]target[/secondary] in the back"
  },
  "-1": {
    icon: "icons/item-augment/legendary/legendary-augment.webp",
    sourceItem: "NP_Heartgun",
    description: "[rarity_legendary]LUV[/rarity_legendary]"
  }
}, w = {
  NP_Heartgun: {
    itemName: "Acey May",
    itemType: "shotgun",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]LUV[/rarity_legendary]"
    ]
  },
  np_repkit_uni_VLA_AdrenalinePump: {
    itemName: "Adrenaline Pump",
    itemType: "repkit",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Blood Rush[/rarity_legendary] - [secondary]Automatically restores Health[/secondary] on [secondary]Second Wind[/secondary]"
    ]
  },
  NP_DualDamage: {
    itemName: "Aegon's Dream",
    itemType: "ar",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Prophetic[/rarity_legendary]"
    ]
  },
  np_anarchy: {
    itemName: "Anarchy",
    itemType: "shotgun",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Mutualism[/rarity_legendary] - On [secondary]Auto-Reload[/secondary] or kill, grants [secondary]{dmg} Damage[/secondary] and [secondary]{acc} Accuracy[/secondary] for a Maximum [secondary]{stack}[/secondary] Stacks, which reset on manual [secondary]Reload[/secondary]"
    ]
  },
  np_anchor: {
    itemName: "Anchor",
    itemType: "sniper",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Anchor[/rarity_legendary] - anchor desc"
    ]
  },
  np_asher: {
    itemName: "Asher's Rise",
    itemType: "sniper",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Slow Burn[/rarity_legendary] - [secondary]Critical Hits[/secondary] apply [secondary]Status Effects[/secondary] instead of increased [secondary]impact Damage[/secondary]"
    ]
  },
  np_AtlingGun: {
    itemName: "Atling Gun",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Whistler[/rarity_legendary]"
    ]
  },
  np_repkit_uni_BOR_Augmenter: {
    itemName: "Augmenter AF1000",
    itemType: "repkit",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Time Dilation[/rarity_legendary] - The [secondary]Repkit's Duration[/secondary] is increased by [secondary]{mod1}[/secondary], and its [secondary]Cooldown Duration[/secondary] is decreased by [secondary]{mod2}[/secondary]"
    ]
  },
  np_BeeGun: {
    itemName: "Birt's Bees",
    itemType: "smg",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Hivemind[/rarity_legendary]"
    ]
  },
  np_repkit_uni_MAL_BloodAnalyzer: {
    itemName: "Blood Analyzer",
    itemType: "repkit",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Immunity Shot[/rarity_legendary] - On use, grants  [secondary]Immunity[/secondary] to the last [secondary]Elemental Damage Taken[/secondary] for [secondary]{duration}s[/secondary]"
    ]
  },
  np_bod: {
    itemName: "Bod",
    itemType: "shotgun",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]All-Arounder[/rarity_legendary] - Counts as a [secondary]Shotgun[/secondary], an [secondary]Assault Rifle[/secondary], a [secondary]Sniper Rifle[/secondary], a [secondary]Pistol[/secondary], and an [secondary]SMG[/secondary]"
    ]
  },
  np_BonnieClyde: {
    itemName: "Bonnie and Clyde",
    itemType: "ar",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Pair of Thieves[/rarity_legendary] - On kill, grants [secondary]{mod} Damage[/secondary] for the [secondary]Gun's[/secondary] other [secondary]Mode[/secondary] and [secondary]refills[/secondary] its [secondary]Magazine[/secondary]"
    ]
  },
  np_Boomslang: {
    itemName: "Boomslang",
    itemType: "sniper",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Bullet Pollinator[/rarity_legendary] - After [secondary]Reloading[/secondary], the first [secondary]Critical Hit Ricochets[/secondary] a [secondary]Sticky Projectile[/secondary] to up to [secondary]{mod}[/secondary] nearby enemies"
    ]
  },
  np_ballista: {
    itemName: "Borstel Ballista",
    itemType: "sniper",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Propagation[/rarity_legendary]"
    ]
  },
  np_BottledLightning: {
    itemName: "Bottled Lightning",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Strike Twice[/rarity_legendary]"
    ]
  },
  np_ATLien: {
    itemName: "Budget Deity",
    itemType: "pistol",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]D.O.P.E. Buoys[/rarity_legendary] - Throws [secondary]2 Combo Orbs[/secondary], which place the [primary]Atlas[/primary] [secondary]Target Lock[/secondary] on enemies damaged by the [secondary]Combo Orbs[/secondary]"
    ]
  },
  np_buoy: {
    itemName: "Buoy",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Buoyant[/rarity_legendary]"
    ]
  },
  np_Axe: {
    itemName: "Buzz Axe",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Makeshift[/rarity_legendary]"
    ]
  },
  np_Chuck: {
    itemName: "Chuck",
    itemType: "ar",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Pitcher[/rarity_legendary]"
    ]
  },
  np_cindershelly: {
    itemName: "Cindershelly",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Glass[/rarity_legendary] - When damaged, grants a Stack of [secondary]Resolve[/secondary] that reduces [secondary]Damage Taken[/secondary] by [secondary]{dmgrdc}[/secondary] per Stack,  up to [secondary]{stack}[/secondary] Stacks.  When the [secondary]Energy Shield[/secondary] breaks, releases a [secondary]Nova[/secondary] that deals [secondary]{nova} Damage[/secondary], with each Stack of [secondary]Resolve[/secondary] increasing the [secondary]Damage[/secondary] by [secondary]{dmgscl}[/secondary]."
    ]
  },
  NP_coldshoulder: {
    itemName: "Cold Shoulder",
    itemType: "ar",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Iced Out[/rarity_legendary]"
    ]
  },
  np_compleat: {
    itemName: "Compleation",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Sisyphusian[/rarity_legendary] - When [secondary]Armor Shield[/secondary] is full, it instantly [secondary]loses[/secondary] an [secondary]Armor Segment[/secondary]"
    ]
  },
  np_complex_root: {
    itemName: "Complex Root",
    itemType: "sniper",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Sierpinski[/rarity_legendary] - Spawns additional [secondary]diverging Projectiles[/secondary] along its path"
    ]
  },
  np_convergence: {
    itemName: "Convergence",
    itemType: "shotgun",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Asymptotic[/rarity_legendary]",
      "[rarity_legendary]Heirloom[/rarity_legendary]"
    ]
  },
  np_repkit_uni_JAK_Defibrillator: {
    itemName: "Defibrillator",
    itemType: "repkit",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Cardiac Shock[/rarity_legendary] - When [secondary]Health[/secondary] goes below [secondary]{mod2}[/secondary], there is a [secondary]{mod}[/secondary] chance to [secondary]replenish[/secondary] a [secondary]Repkit Charge [/secondary]"
    ]
  },
  np_disco_disc: {
    itemName: "Destructo Disco",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Groove[/rarity_legendary]"
    ]
  },
  np_DiscJockey: {
    itemName: "Disc Jockey",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Bouncing Biscuits[/rarity_legendary] - [secondary]Energy disc Projectiles[/secondary] bounce up to [secondary]{mod}[/secondary] times, and gain [secondary]{mod2} Damage[/secondary] per bounce"
    ]
  },
  np_DividedFocus: {
    itemName: "Divided Focus",
    itemType: "ar",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Conquerer[/rarity_legendary] - Fires [secondary]bouncing Projectiles[/secondary] that [secondary]pierce enemies[/secondary]"
    ]
  },
  np_supernova: {
    itemName: "Extra Medium",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Nucleosynthesis[/rarity_legendary] - When [secondary]Energy Shield[/secondary] breaks or fills, it triggers a [secondary]Nova[/secondary] that deals [secondary]{dmg} Damage[/secondary]"
    ]
  },
  np_FaultyDetonator: {
    itemName: "Faulty Detonator",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Sticky Trigger[/rarity_legendary] - [secondary]Grenade[/secondary] spawns [secondary]Combo Orbs[/secondary] upon [secondary]detonation[/secondary]"
    ]
  },
  np_Finnity: {
    itemName: "Finnity XXX-L",
    itemType: "sniper",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Pipin' Hot Barrels[/rarity_legendary] - Does not consume [secondary]Ammo[/secondary] while [secondary]Overheating[/secondary]"
    ]
  },
  np_firepot: {
    itemName: "Firepot",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Spicy[/rarity_legendary] - Spawns homing [primary]Torgue[/primary] [secondary]Stickies[/secondary] over time"
    ]
  },
  np_firewerks: {
    itemName: "Firewerks",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Bundled[/rarity_legendary] - On kill, spawns [secondary]Missiles[/secondary] that [secondary]home in[/secondary] on nearby [secondary]enemies[/secondary] and deal [secondary]{dmg} Damage[/secondary] each"
    ]
  },
  np_Fisheye: {
    itemName: "Fisheye",
    itemType: "sniper",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Ultima Ratio Regum[/rarity_legendary] - Fires wide, [secondary]penetrating[/secondary] triple [secondary]Railgun[/secondary] shots with [secondary]{mod} Critical Damage[/secondary]"
    ]
  },
  np_commBD: {
    itemName: "Forsaken Chaos",
    itemType: "shotgun",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Wide Net[/rarity_legendary]"
    ]
  },
  np_fuse: {
    itemName: "Fuse",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Fortified Position[/rarity_legendary]"
    ]
  },
  np_GMR: {
    itemName: "G.M.R.",
    itemType: "ar",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Big Name Hunter[/rarity_legendary] - When [secondary]Zoomed In[/secondary], [secondary]Damage[/secondary] increases by [secondary]{mod1}[/secondary], [secondary]Shot Cost[/secondary] increases by [secondary]{mod2}[/secondary], and [secondary]Fire Rate[/secondary] decreases by [secondary]{mod3}[/secondary]"
    ]
  },
  np_GammaVoid: {
    itemName: "Gamma Void",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Radiation Exposure[/rarity_legendary] - Creates a [secondary]Singularity[/secondary] for [secondary]{duration}s,[/secondary] in which enemies take [secondary]{mod}[/secondary] [radiation_icon][radiation]Radiation Damage[/radiation] over time"
    ]
  },
  np_Goalkeeper: {
    itemName: "Goalkeeper",
    itemType: "ar",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Amper Camper[/rarity_legendary] - When [secondary]Gun Shield[/secondary] is depleted, grants  [secondary]{mod} Damage[/secondary] for [secondary]{duration}s[/secondary]"
    ]
  },
  NP_GoldenGod: {
    itemName: "Golden God",
    itemType: "shotgun",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Rage[/rarity_legendary] - When [secondary]Overheating[/secondary], the [secondary]Bulletforge[/secondary] does not break, but instead continually consumes greater amounts of [secondary]Ammo[/secondary]"
    ]
  },
  NP_GoreMaster: {
    itemName: "Goremaster",
    itemType: "shotgun",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Chief Execution Officer[/rarity_legendary] - Deals [secondary]{DmgScalar} Damage[/secondary] to [secondary]enemies[/secondary] below [secondary]{LowHPThreshold} Health[/secondary]"
    ]
  },
  np_angel: {
    itemName: "Guardian Angel",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Wings of Grace[/rarity_legendary] - When equipped, grants faster [secondary]revival[/secondary] from [secondary]Fight for Your Life.[/secondary] When [secondary]FFYL[/secondary] expires, grants [secondary]1[/secondary] free [secondary]Second Wind[/secondary] once every [secondary]{mod}s[/secondary]"
    ]
  },
  np_HeavyWeight: {
    itemName: "Heavyweight",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Bareknuckle[/rarity_legendary] - On [secondary]Melee Hit[/secondary], consumes an [secondary]Armor Segment[/secondary] to grant [secondary]{mod1} Melee Damage[/secondary].  When [secondary]Armor Shield[/secondary] is empty, grants [secondary]{mod2} Melee Damage[/secondary]"
    ]
  },
  np_hellfire: {
    itemName: "Hellfire",
    itemType: "smg",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Burning Desire[/rarity_legendary]"
    ]
  },
  np_Hellwalker: {
    itemName: "Hellwalker",
    itemType: "shotgun",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Soothslayer[/rarity_legendary]"
    ]
  },
  np_Hoarder: {
    itemName: "Hoarder",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Refreshments[/rarity_legendary] - On kill, [secondary]{mod}[/secondary] chance to spawn an [secondary]Ammo Booster[/secondary] that instantly [secondary]refills[/secondary] your [secondary]Gun[/secondary]"
    ]
  },
  np_Slugger: {
    itemName: "Hot Slugger",
    itemType: "shotgun",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Blazing Barrel[/rarity_legendary] - On kill, deal [secondary]{mod} Damage[/secondary] for [secondary]{duration}s[/secondary] for a Maximum [secondary]3[/secondary] Stacks"
    ]
  },
  np_HeavyTurret: {
    itemName: "Husky Friend",
    itemType: "shotgun",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Husky Auto Turret[/rarity_legendary]"
    ]
  },
  np_Splatoon: {
    itemName: "Inkling",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Inkling[/rarity_legendary] - Fires bouncing [secondary]Projectiles[/secondary] that leave an [secondary]Elemental Splat[/secondary] on bounce"
    ]
  },
  np_rubber: {
    itemName: "Jelly",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Self-Replicating[/rarity_legendary]"
    ]
  },
  np_Kaleidosplode: {
    itemName: "Kaleidosplode",
    itemType: "shotgun",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Colorful Mess[/rarity_legendary]"
    ]
  },
  np_Kaoson: {
    itemName: "Kaoson",
    itemType: "smg",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Granted[/rarity_legendary]"
    ]
  },
  np_katagawa: {
    itemName: "Katagawa's Revenge",
    itemType: "sniper",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Stormcloud[/rarity_legendary]"
    ]
  },
  np_kickballer: {
    itemName: "Kickballer",
    itemType: "shotgun",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Pipin' Hot Barrels[/rarity_legendary] - Does not consume [secondary]Ammo[/secondary] while [secondary]Overheating[/secondary]",
      "[rarity_legendary] Force Bunt [/rarity_legendary]"
    ]
  },
  np_repkit_uni_TED_KillSpring: {
    itemName: "Kill Spring",
    itemType: "repkit",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Blood Siphon[/rarity_legendary] - On kill, converts [secondary]{mod}[/secondary] of any [secondary]excess Damage[/secondary] into [secondary]Healing Orbs[/secondary] that [secondary]seek out[/secondary] nearby [secondary]allies[/secondary]"
    ]
  },
  np_KingsGambit: {
    itemName: "King's Gambit",
    itemType: "pistol",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Holy Hell[/rarity_legendary] - When shot, thrown [secondary]Gun Ricochets Projectiles[/secondary] to nearby [secondary]enemies[/secondary]"
    ]
  },
  np_LeadBalloon: {
    itemName: "Lead Balloon",
    itemType: "shotgun",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Lightweight[/rarity_legendary] - [secondary]Projectiles[/secondary] float upward and spawn child [secondary]Projectiles[/secondary] upon [secondary]exploding[/secondary]"
    ]
  },
  np_Linebacker: {
    itemName: "Linebacker",
    itemType: "shotgun",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Full Coverage[/rarity_legendary] - [secondary]Bouncing Projectiles[/secondary] increase [secondary]Damage[/secondary] by [secondary]{mod}[/secondary] and [secondary]Damage Radius[/secondary] by [secondary]{mod2}[/secondary] per bounce"
    ]
  },
  np_Lucian: {
    itemName: "Lucian's Flank",
    itemType: "ar",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Trample[/rarity_legendary] - [secondary]Critical Hits refill[/secondary] up to [secondary]{ammo} Ammo[/secondary] to the [secondary]Gun's Magazine[/secondary]"
    ]
  },
  np_CrowdSourced: {
    itemName: "Midnight Defiance",
    itemType: "sniper",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Crowd Sourced[/rarity_legendary] - On hit, additional [secondary]Projectiles[/secondary] spawn from nearby enemies"
    ]
  },
  NP_NoisyCricket: {
    itemName: "Noisy Cricket",
    itemType: "pistol",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Silence[/rarity_legendary]"
    ]
  },
  np_barrelAged: {
    itemName: "Oak-Aged Cask",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Vintage[/rarity_legendary]"
    ]
  },
  np_OhmIgot: {
    itemName: "Ohm I Got",
    itemType: "smg",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Energy Transfer[/rarity_legendary] - When [secondary]Energy Shield[/secondary] is active, grants [secondary]{mod} Damage[/secondary] by consuming the [secondary]Shield's energy[/secondary] instead of [secondary]Ammo[/secondary].   When [secondary]Overshield[/secondary] is also active, [secondary]Energy Shield[/secondary] will not [secondary]deplete[/secondary]."
    ]
  },
  np_OnionLayeredGuard: {
    itemName: "Onion",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Shallot Shell[/rarity_legendary] - On [secondary]Armor Segment[/secondary] break, grants [secondary]Immunity[/secondary] to [secondary]Damage[/secondary] for [secondary]{mod}s[/secondary]"
    ]
  },
  np_Onslaught: {
    itemName: "Onslaught",
    itemType: "smg",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Keep It Coming[/rarity_legendary] - There's a [secondary]{mod}[/secondary] Chance for every bullet fired to deal extra [secondary]Damage[/secondary] and not consume [secondary]Ammo[/secondary]"
    ]
  },
  np_OM: {
    itemName: "Oscar Mike",
    itemType: "ar",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Timber[/rarity_legendary]",
      "[rarity_legendary]Tactical Rounds[/rarity_legendary] - The first half of your [secondary]Magazine[/secondary] deals [secondary]+50% Bonus Damage[/secondary]",
      "[rarity_legendary]Fragcendiary Grenades[/rarity_legendary] - [primary][Alt-Fire][/primary] Launches [secondary]Grenades[/secondary] that deal [fire]{damage} Incendiary Damage[/fire] and spawn a [fire]Fire Hazard.[/fire]",
      "[rarity_legendary]Space Laser[/rarity_legendary] - [primary][Alt-Fire][/primary] Calls down a [secondary]Space Laser[/secondary] dealing [secondary]{damage} Damage[/secondary] every [secondary].2s[/secondary]"
    ]
  },
  np_repkit_uni_VLA_Pacemaker: {
    itemName: "Pacemaker",
    itemType: "repkit",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Pulsometer[/rarity_legendary] - Passively [secondary]regenerates Health[/secondary] over time, increasing in [secondary]Rate[/secondary] when your [secondary]Health[/secondary] is [secondary]low[/secondary]"
    ]
  },
  np_momento: {
    itemName: "Pandoran Memento",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Psychosis[/rarity_legendary] - When damaged, grants [secondary]{resist} Elemental Resistance[/secondary] and [secondary]{mod1} Resistance[/secondary] to the last [secondary]Damage Type[/secondary] received for [secondary]{mod2}s[/secondary]"
    ]
  },
  np_phantom_flame: {
    itemName: "Phantom Flame",
    itemType: "pistol",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Midday[/rarity_legendary] - [secondary]Zooming In[/secondary] acquires [secondary]Lock On targets[/secondary] over time, and firing while [secondary]Zoomed In[/secondary] shoots the entire [secondary]Magazine[/secondary]"
    ]
  },
  np_PlasmaCoil: {
    itemName: "Plasma Coil",
    itemType: "smg",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Superheated[/rarity_legendary]"
    ]
  },
  NP_PotatoThrower: {
    itemName: "Potato Thrower IV",
    itemType: "ar",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Spud Gun[/rarity_legendary]"
    ]
  },
  np_prince: {
    itemName: "Prince Harming",
    itemType: "smg",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Pamplemousse[/rarity_legendary] - Hitting [secondary]enemies[/secondary] deals [secondary]{selfdmg} Damage[/secondary] to you, and grants a Stack of [secondary]Cruelty[/secondary] - which, on kill, restores [secondary]{over} Overshield[/secondary] per Stack of [secondary]Cruelty[/secondary] - for a Maximum [secondary]{max}[/secondary] Stacks"
    ]
  },
  np_ShieldBoi: {
    itemName: "Principal",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Shield Boi[/rarity_legendary] - Spawns a [flavor]Shield Boi[/flavor] when the last [secondary]Armor Segment[/secondary] breaks"
    ]
  },
  np_ProteanCell: {
    itemName: "Protean Cell",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Direct Current[/rarity_legendary] - [secondary]Ground Slam[/secondary] to toggle this effect.  While enabled, drains [secondary]Shield over time[/secondary] to grant [secondary]{mod} Bonus[/secondary] [shock_icon][shock]Shock Damage[/shock], and [secondary]Damage Taken[/secondary] passes through the [secondary]Shield[/secondary]"
    ]
  },
  np_QueensRest: {
    itemName: "Queen's Rest",
    itemType: "pistol",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Royal Armory[/rarity_legendary] - Fires [secondary]high-speed rounds[/secondary], and damaging [secondary]enemies[/secondary] has a [secondary]{chn}[/secondary] Chance to spawn a [secondary]Homing Sticky Projectile[/secondary]"
    ]
  },
  np_RainbowVomit: {
    itemName: "Rainbow Vomit",
    itemType: "shotgun",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [fire]Incendiary[/fire] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [cryo]Cryo,[/cryo] and [shock]Shock[/shock] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [fire]Incendiary,[/fire] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [fire]Incendiary,[/fire] and [shock]Shock[/shock] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [corrosive]Corrosive,[/corrosive] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [fire]Incendiary,[/fire] and [radiation]Radiation[/radiation] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [fire]Incendiary,[/fire] and [shock]Shock[/shock] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [cryo]Cryo,[/cryo] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]",
      "[rarity_legendary]Color Spray[/rarity_legendary] - Shoots [fire]Incendiary,[/fire] [radiation]Radiation,[/radiation] and [shock]Shock[/shock] [secondary]droplets[/secondary]"
    ]
  },
  np_rangefinder: {
    itemName: "Rangefinder",
    itemType: "pistol",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Precision[/rarity_legendary]"
    ]
  },
  np_ravenfire: {
    itemName: "Ravenfire",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]621[/rarity_legendary] - [secondary]Explosions[/secondary] radiate outward from the point of impact"
    ]
  },
  np_recursive: {
    itemName: "Recursive",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Looping[/rarity_legendary]"
    ]
  },
  np_Roach: {
    itemName: "Roach",
    itemType: "pistol",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Flesh Eaters[/rarity_legendary] - Shoots [secondary]eggs[/secondary] that hatch [secondary]flying roaches[/secondary] when attached to flesh, living or dead"
    ]
  },
  np_Rowan: {
    itemName: "Rowan's Charge",
    itemType: "ar",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Stalker[/rarity_legendary] - Grants a [secondary]{mod1}[/secondary] Chance for shots to be a [secondary]Critical Hit[/secondary], and [secondary]refunds {mod2} Ammo[/secondary] on [secondary]Critical Hit[/secondary]"
    ]
  },
  np_RubysGrasp: {
    itemName: "Ruby's Grasp",
    itemType: "pistol",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Grasp[/rarity_legendary] - [secondary]Reloading[/secondary] the [secondary]Gun[/secondary] fires [secondary]{quantify} Homing[/secondary] copies"
    ]
  },
  np_QuickDraw: {
    itemName: "San Saba Songbird",
    itemType: "pistol",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Dueling Pistol[/rarity_legendary] - Deals [secondary]{mod1} Damage[/secondary] for [secondary]{duration}s[/secondary] after [secondary]swapping Guns[/secondary]"
    ]
  },
  np_seventh_sense: {
    itemName: "Seventh Sense",
    itemType: "pistol",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Proprioception[/rarity_legendary] - Hitting [secondary]enemies[/secondary] spawns [secondary]Orbs[/secondary] that float upward and [secondary]home in[/secondary] on [secondary]targets[/secondary] on [secondary]Reload[/secondary]"
    ]
  },
  np_repkit_uni_TOR_ShinyWarPaint: {
    itemName: "Shiny War Paint",
    itemType: "repkit",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Chrome[/rarity_legendary] - On use, grants [secondary]{mod} Fire Rate[/secondary] and [secondary]{mod2} Movement Speed[/secondary] for [secondary]{duration}s[/secondary], and reduces [secondary]Repkit Cooldown[/secondary] by [secondary]{mod3}s[/secondary] each time [secondary]Damage[/secondary] is taken"
    ]
  },
  np_ShoKunai: {
    itemName: "Sho Kunai",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Ninja Speed[/rarity_legendary] - Grants [secondary]{mod} Movement Speed[/secondary] for a short [secondary]Duration[/secondary] with each [secondary]consecutive hit[/secondary], for a Maximum of [secondary]{mod2}[/secondary] Stacks"
    ]
  },
  np_Sideshow: {
    itemName: "Sideshow",
    itemType: "pistol",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Juggler[/rarity_legendary] - Let's play a game. Shoot as many [secondary]targets[/secondary] as possible before they hit the ground, and [secondary]refill[/secondary] up to [secondary]2 Ammo[/secondary] per [secondary]target[/secondary] hit"
    ]
  },
  np_slippy: {
    itemName: "Slippy",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Swordfish[/rarity_legendary] - Deals [secondary]Melee Damage[/secondary] on [secondary]detonation[/secondary]"
    ]
  },
  np_lightning: {
    itemName: "Sparky Shield",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Short Circuit[/rarity_legendary] - While [secondary]Energy Shield[/secondary] is not [secondary]full[/secondary], it periodically [shock_icon][shock]Shocks[/shock] nearby enemies"
    ]
  },
  np_spinning_blade: {
    itemName: "Spinning Blade",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Incessant[/rarity_legendary] - Continuously [secondary]homes in[/secondary] on a [secondary]target[/secondary]",
      "[rarity_legendary]Juggler[/rarity_legendary] - [secondary]Catch[/secondary] the [secondary]rebound[/secondary] to [secondary]refund 1 Grenade Charge[/secondary]"
    ]
  },
  np_Javelin: {
    itemName: "Sprezzatura",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "torgue",
    effects: [
      "[rarity_legendary]Gungnir[/rarity_legendary]"
    ]
  },
  np_star_helix: {
    itemName: "Star Helix",
    itemType: "ar",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Constellation[/rarity_legendary] - [secondary]Projectiles[/secondary] can be fired vertically or horizontally"
    ]
  },
  np_StopGap: {
    itemName: "Stop Gap",
    itemType: "sniper",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Reconfigure[/rarity_legendary] - When firing, [secondary]Fire Rate[/secondary] decreases down to [secondary]{mod1}[/secondary], but [secondary]Damage[/secondary] increases up to [secondary]{mod2}[/secondary]"
    ]
  },
  np_Stray: {
    itemName: "Stray",
    itemType: "sniper",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Stray[/rarity_legendary] - Fires [secondary]2 secondary bullets[/secondary] that [secondary]home in[/secondary] on nearby target(s)"
    ]
  },
  np_Streamer: {
    itemName: "Streamer",
    itemType: "ordnance",
    itemSubtype: "heavy-weapon",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Delegation[/rarity_legendary] - Launches [secondary]stationary Projectiles[/secondary] that each fire a [secondary]Beam[/secondary] forward"
    ]
  },
  np_SuperSoldier: {
    itemName: "Super Soldier",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Power Play[/rarity_legendary] - When [secondary]Energy Shield[/secondary] fills, grants an [secondary]Overshield.[/secondary] When [secondary]Energy Shield[/secondary] is [secondary]full[/secondary], grants [secondary]{mod} Fire Rate[/secondary], [secondary]{mod3} Movement Speed[/secondary], and [secondary]regens {mod2} Ammo/s[/secondary]"
    ]
  },
  np_swarm: {
    itemName: "Swarm",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Swoosh[/rarity_legendary]"
    ]
  },
  np_sweet_embrace: {
    itemName: "Sweet Embrace",
    itemType: "shotgun",
    manufacturerId: "maliwan",
    effects: [
      "[rarity_legendary]Adoration[/rarity_legendary]"
    ]
  },
  np_symmetry: {
    itemName: "Symmetry",
    itemType: "sniper",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Bilateral[/rarity_legendary] - Fires from [secondary]reserve Ammo[/secondary] while charging"
    ]
  },
  np_TKsWave: {
    itemName: "T.K's Wave",
    itemType: "shotgun",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Heirloom[/rarity_legendary]"
    ]
  },
  np_timekeeper: {
    itemName: "Timekeeper's New Shield",
    itemType: "shield",
    itemSubtype: "armor",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Bininu[/rarity_legendary] - When equipped, grants [secondary]{hcap} Maximum Health[/secondary], [secondary]{hregen} Health Regeneration/s[/secondary], and reduces [secondary]Damage Taken[/secondary] by [secondary]{dmgtaken}[/secondary]"
    ]
  },
  np_repkit_uni_ORD_TripleBypass: {
    itemName: "Triple Bypass",
    itemType: "repkit",
    manufacturerId: "order",
    effects: [
      "[rarity_legendary]Heart Pump[/rarity_legendary] - This [secondary]Repkit[/secondary] has [secondary]3 Charges[/secondary], and has a [secondary]{mod}[/secondary] chance to [secondary]replenish[/secondary] a [secondary]Charge[/secondary] on kill"
    ]
  },
  np_Truck: {
    itemName: "Truck",
    itemType: "sniper",
    manufacturerId: "jakobs",
    effects: [
      "[rarity_legendary]Fixer-Upper[/rarity_legendary]"
    ]
  },
  np_PredatorDrone: {
    itemName: "UAV",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "tediore",
    effects: [
      "[rarity_legendary]Death From Above[/rarity_legendary]"
    ]
  },
  np_Vamoose: {
    itemName: "Vamoose",
    itemType: "sniper",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Scarce[/rarity_legendary]"
    ]
  },
  np_Waterfall: {
    itemName: "Waterfall",
    itemType: "ordnance",
    itemSubtype: "grenade",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Waterfall[/rarity_legendary] - Causes additional [secondary]explosions[/secondary] when damaging [secondary]targets[/secondary]"
    ]
  },
  np_Watts4Dinner: {
    itemName: "Watts 4 Dinner",
    itemType: "shield",
    itemSubtype: "energy",
    manufacturerId: "ripper",
    effects: [
      "[rarity_legendary]Overshield Eater[/rarity_legendary] - When [secondary]Energy Shield[/secondary] is active, enemies have a [secondary]{mod}[/secondary] chance to drop an [secondary]Overshield[/secondary] when hit. When [secondary]Overshield[/secondary] is also active, grants [secondary]{mod2}[/secondary] [shock_icon][shock]Shock Damage[/shock]"
    ]
  },
  NP_WF: {
    itemName: "Whiskey Foxtrot",
    itemType: "ar",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Overdrive[/rarity_legendary] - Switches to a [secondary]secondary Magazine[/secondary] that can be fired on [secondary]Full Auto[/secondary]",
      "[rarity_legendary]Scrap Cannon[/rarity_legendary] - Fires a [secondary]spread of shrapnel[/secondary] from the [secondary]Underbarrel[/secondary] that deals [secondary]{damage}x{proj} Damage[/secondary], and increases [secondary]target's Damage Taken[/secondary] for [secondary]4s[/secondary]"
    ]
  },
  np_WomboCombo: {
    itemName: "Wombo Combo",
    itemType: "ar",
    manufacturerId: "vladof",
    effects: [
      "[rarity_legendary]Rip Rockets[/rarity_legendary] - [secondary]Rockets[/secondary] automatically fire from the [secondary]Underbarrel[/secondary]"
    ]
  },
  np_Zipgun: {
    itemName: "Zipper",
    itemType: "pistol",
    manufacturerId: "daedalus",
    effects: [
      "[rarity_legendary]Prison Rules[/rarity_legendary] - Grants [secondary]{mod} Critical Damage[/secondary] and [secondary]{mod2} Damage[/secondary] when hitting a [secondary]target[/secondary] in the back"
    ]
  }
}, k = {
  "enhancement-0": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-1": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-2": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-3": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-4": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-5": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Fire Rate[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-6": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-7": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-8": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-9": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-10": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-11": {
    source: "enhancement",
    description: '[keyword id="secondary"]Assault Rifle Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-12": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-13": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-14": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-15": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Damage[/keyword] is increased by [keyword id="secondary"]{damage}[/keyword]'
  },
  "enhancement-16": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-17": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Fire Rate[/keyword] is increased by [keyword id="secondary"]{firerate}[/keyword]'
  },
  "enhancement-18": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-19": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-20": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-21": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-22": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-23": {
    source: "enhancement",
    description: '[keyword id="secondary"]Gun Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{damage}[/keyword]'
  },
  "enhancement-24": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-25": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-26": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-27": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-28": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-29": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Fire Rate[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-30": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-31": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-32": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-33": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-34": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-35": {
    source: "enhancement",
    description: '[keyword id="secondary"]Pistol Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-36": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-37": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-38": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-39": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-40": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-41": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Fire Rate[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-42": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-43": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-44": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-45": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-46": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-47": {
    source: "enhancement",
    description: '[keyword id="secondary"]SMG Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-48": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-49": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-50": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-51": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-52": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-53": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Fire Rate[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-54": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-55": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-56": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-57": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-58": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-59": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shotgun Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-60": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle ADS Proficiency[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-61": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Accuracy[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-62": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Critical Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-63": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-64": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Equip Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-65": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Fire Rate[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-66": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Magazine Size[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-67": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Reload Speed[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-68": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Splash Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-69": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Splash Radius[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-70": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Status Effect Chance[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "enhancement-71": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sniper Rifle Status Effect Damage[/keyword] is increased by [keyword id="secondary"]{mod}[/keyword]'
  },
  "class-mod-0": {
    source: "class-mod",
    description: "{damage} Corrosive Resistance"
  },
  "class-mod-1": {
    source: "class-mod",
    description: "{damage} Cryo Resistance"
  },
  "class-mod-2": {
    source: "class-mod",
    description: "{damage} Energy Shield Regen Delay"
  },
  "class-mod-3": {
    source: "class-mod",
    description: "{damage} Fire Resistance"
  },
  "class-mod-4": {
    source: "class-mod",
    description: "{damage} Heavy Ordnance Damage"
  },
  "class-mod-5": {
    source: "class-mod",
    description: "{damage} Mag Size"
  },
  "class-mod-6": {
    source: "class-mod",
    description: "{damage} Radiation Resistance"
  },
  "class-mod-7": {
    source: "class-mod",
    description: "{damage} Shock Resistance"
  },
  "class-mod-8": {
    source: "class-mod",
    description: "{damage} Weapon Accuracy"
  },
  "class-mod-9": {
    source: "class-mod",
    description: "{damage} Weapon Charge Speed"
  },
  "class-mod-10": {
    source: "class-mod",
    description: "{damage} Weapon Splash Radius"
  },
  "class-mod-11": {
    source: "class-mod",
    description: '{damage} [keyword id="cryo_icon"] [/keyword] [keyword id="cryo"]Cryo Damage[/keyword]'
  },
  "class-mod-12": {
    source: "class-mod",
    description: '{damage} [keyword id="elemental_icon"] [/keyword] [keyword id="secondary"]Elemental Damage[/keyword]'
  },
  "class-mod-13": {
    source: "class-mod",
    description: '{damage} [keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary Damage[/keyword]'
  },
  "class-mod-14": {
    source: "class-mod",
    description: '{damage} [keyword id="kinetic_icon"] [/keyword] [keyword id="kinetic"]Kinetic Damage[/keyword]'
  },
  "class-mod-15": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Attunement Skill Duration[/keyword]'
  },
  "class-mod-16": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"] [/keyword]Command Skill[keyword id="/primary"] [/keyword] [keyword id="secondary"]Cooldown Rate[/keyword]'
  },
  "class-mod-17": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Detonation Damage[/keyword]'
  },
  "class-mod-18": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Forgedrone Duration[/keyword]'
  },
  "class-mod-19": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Forgeskill Damage[/keyword]'
  },
  "class-mod-20": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Minion Damage[/keyword]'
  },
  "class-mod-21": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"] [/keyword]Phase Clone[keyword id="/primary"] [/keyword] [keyword id="secondary"]Health[/keyword] loss over time'
  },
  "class-mod-22": {
    source: "class-mod",
    description: '{damage} [keyword id="primary"]Stasis Damage[/keyword]'
  },
  "class-mod-23": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Action Skill Cooldown Rate[/keyword]'
  },
  "class-mod-24": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Action Skill Damage[/keyword]'
  },
  "class-mod-25": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Action Skill Damage[/keyword] and {ordnance} [keyword id="secondary"]Ordnance Damage[/keyword]'
  },
  "class-mod-26": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Assault Rifle Damage[/keyword]'
  },
  "class-mod-27": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Critical Hit Damage[/keyword]'
  },
  "class-mod-28": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Damage Dealt[/keyword]'
  },
  "class-mod-29": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Damage Reduction[/keyword]'
  },
  "class-mod-30": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Energy Shield Regeneration Rate[/keyword]'
  },
  "class-mod-31": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Fire Rate[/keyword]'
  },
  "class-mod-32": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Gun Critical Hit Chance[/keyword]'
  },
  "class-mod-33": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Gun Damage[/keyword]'
  },
  "class-mod-34": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Gun Damage[/keyword] and {melee} [keyword id="secondary"]Melee Damage[/keyword]'
  },
  "class-mod-35": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Hazard Damage[/keyword]'
  },
  "class-mod-36": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Health Regen per second[/keyword]'
  },
  "class-mod-37": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Lifesteal[/keyword]'
  },
  "class-mod-38": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Maximum Health Capacity[/keyword]'
  },
  "class-mod-39": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Maximum Shield Capacity[/keyword]'
  },
  "class-mod-40": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Melee Critical Hit Chance[/keyword]'
  },
  "class-mod-41": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Melee Damage[/keyword]'
  },
  "class-mod-42": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Movement Speed[/keyword]'
  },
  "class-mod-43": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Ordnance Cooldown Rate[/keyword]'
  },
  "class-mod-44": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Ordnance Critical Hit Chance[/keyword]'
  },
  "class-mod-45": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Ordnance Damage[/keyword]'
  },
  "class-mod-46": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Pistol Damage[/keyword]'
  },
  "class-mod-47": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Reload Speed[/keyword]'
  },
  "class-mod-48": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Shotgun Damage[/keyword]'
  },
  "class-mod-49": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Skill Critical Hit Chance[/keyword]'
  },
  "class-mod-50": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Skill Damage[/keyword]'
  },
  "class-mod-51": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Sniper Rifle Damage[/keyword]'
  },
  "class-mod-52": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Splash Damage[/keyword]'
  },
  "class-mod-53": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Status Effect Application Chance[/keyword]'
  },
  "class-mod-54": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Status Effect Damage[/keyword]'
  },
  "class-mod-55": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Status Effect Damage[/keyword] and {chance} [keyword id="secondary"]Status Effect Chance[/keyword]'
  },
  "class-mod-56": {
    source: "class-mod",
    description: '{damage} [keyword id="secondary"]Submachine Gun Damage[/keyword]'
  },
  "class-mod-57": {
    source: "class-mod",
    description: '{duration} [keyword id="secondary"]Action Skill Duration[/keyword]'
  },
  "class-mod-58": {
    source: "class-mod",
    description: '{reload} [keyword id="secondary"]Reload Speed[/keyword] and {fire_rate} [keyword id="secondary"]Fire Rate[/keyword]'
  }
}, l = {
  "enhancement-0": {
    source: "enhancement",
    description: '[keyword id="secondary"]Accelerator[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Daedalus[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Fire Rate[/keyword] per each bullet fired, for up to a Maximum [keyword id="secondary"]{mod2}[/keyword] Stacks, which reset on [keyword id="secondary"]Reload[/keyword]',
    manufacturerId: "daedalus"
  },
  "enhancement-1": {
    source: "enhancement",
    description: '[keyword id="secondary"]Air Burst[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Torgue[/keyword]-licensed parts fire [keyword id="secondary"]Projectiles[/keyword] that explode on proximity',
    manufacturerId: "torgue"
  },
  "enhancement-2": {
    source: "enhancement",
    description: '[keyword id="secondary"]Ammo Generator[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Order[/keyword]-licensed parts slowly [keyword id="secondary"]refill[/keyword] from reserve [keyword id="secondary"]Ammo[/keyword] while held',
    manufacturerId: "order"
  },
  "enhancement-3": {
    source: "enhancement",
    description: '[keyword id="secondary"]Backup Plan[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Daedalus[/keyword]-licensed parts slowly [keyword id="secondary"]regenerate[/keyword] reserve [keyword id="secondary"]Ammo[/keyword] while equipped',
    manufacturerId: "daedalus"
  },
  "enhancement-4": {
    source: "enhancement",
    description: '[keyword id="secondary"]Banger[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Tediore[/keyword]-licensed parts use [keyword id="secondary"]{mod} Maximum Loaded Ammo[/keyword] when calculating [keyword id="secondary"]Thrown Damage[/keyword]',
    manufacturerId: "tediore"
  },
  "enhancement-5": {
    source: "enhancement",
    description: '[keyword id="secondary"]Boompuppy[/keyword] - On kill, [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Torgue[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to call down a Missile Barrage on a nearby [keyword id="secondary"]enemy[/keyword]',
    manufacturerId: "torgue"
  },
  "enhancement-6": {
    source: "enhancement",
    description: '[keyword id="secondary"]Bottom Feeder[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Vladof[/keyword]-licensed parts reduce [keyword id="secondary"]Underbarrel Cooldown Duration[/keyword] by [keyword id="secondary"]{mod}[/keyword]',
    manufacturerId: "vladof"
  },
  "enhancement-7": {
    source: "enhancement",
    description: '[keyword id="secondary"]Bounce Pass[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Jakobs[/keyword]-licensed parts increase the number of possible [keyword id="secondary"]Ricochets[/keyword] by [keyword id="secondary"]{num}[/keyword]',
    manufacturerId: "jakobs"
  },
  "enhancement-8": {
    source: "enhancement",
    description: '[keyword id="secondary"]Box Magazine[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Vladof[/keyword]-licensed parts gain [keyword id="secondary"]{firerate} Fire Rate[/keyword] and [keyword id="secondary"]{magsize} Magazine Size[/keyword]',
    manufacturerId: "vladof"
  },
  "enhancement-9": {
    source: "enhancement",
    description: '[keyword id="secondary"]Bullet Fabricator[/keyword] - On kill, [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Daedalus[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to [keyword id="secondary"]refill[/keyword] your [keyword id="secondary"]Magazines[/keyword]',
    manufacturerId: "daedalus"
  },
  "enhancement-10": {
    source: "enhancement",
    description: '[keyword id="secondary"]Bullet Hose[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Vladof[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to add an extra [keyword id="secondary"]Projectile[/keyword] per shot',
    manufacturerId: "vladof"
  },
  "enhancement-11": {
    source: "enhancement",
    description: '[keyword id="secondary"]Bulwark[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Hyperion[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Gun Shield Capacity[/keyword]',
    manufacturerId: "hyperion"
  },
  "enhancement-12": {
    source: "enhancement",
    description: '[keyword id="secondary"]Cold Open[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]CoV[/keyword]-licensed [keyword id="secondary"]Magazines[/keyword] gain [keyword id="secondary"]{damage} Damage[/keyword] when below [keyword id="secondary"]{heat} Heat[/keyword]',
    manufacturerId: "cov"
  },
  "enhancement-13": {
    source: "enhancement",
    description: '[keyword id="secondary"]Digi-Divider[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Tediore[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to spawn an additional [keyword id="secondary"]Projectile[/keyword] on [keyword id="secondary"]Reload[/keyword]',
    manufacturerId: "tediore"
  },
  "enhancement-14": {
    source: "enhancement",
    description: '[keyword id="secondary"]Duct Tape[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]CoV[/keyword]-licensed [keyword id="secondary"]Magazines[/keyword] have a [keyword id="secondary"]{mod}[/keyword] Chance to deal [keyword id="secondary"]Critical Damage[/keyword] while [keyword id="secondary"]Overheating[/keyword]',
    manufacturerId: "cov"
  },
  "enhancement-15": {
    source: "enhancement",
    description: '[keyword id="secondary"]Explosi-ception[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Torgue[/keyword]-licensed [keyword id="secondary"]Sticky Magazines[/keyword] deal [keyword id="secondary"]{mod}[/keyword] of [keyword id="secondary"]Gun Damage[/keyword] on impact',
    manufacturerId: "torgue"
  },
  "enhancement-16": {
    source: "enhancement",
    description: '[keyword id="secondary"]Extend-a-Friend[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Tediore[/keyword]-licensed parts have [keyword id="secondary"]{mod}[/keyword] longer Lifetime for Thrown Turrets',
    manufacturerId: "tediore"
  },
  "enhancement-17": {
    source: "enhancement",
    description: `[keyword id="secondary"]Free Charger[/keyword] - When firing from [keyword id="secondary"]Maximum Charge[/keyword], [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Order[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to make the next shot's [keyword id="secondary"]Charge Time[/keyword] and [keyword id="secondary"]Ammo[/keyword] cost [keyword id="secondary"]0[/keyword]`,
    manufacturerId: "order"
  },
  "enhancement-18": {
    source: "enhancement",
    description: `[keyword id="secondary"]Freeloader[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Ripper[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to instantly refill its [keyword id="secondary"]Magazine[/keyword] when it's empty`,
    manufacturerId: "ripper"
  },
  "enhancement-19": {
    source: "enhancement",
    description: '[keyword id="secondary"]Hard Charger[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Ripper[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Damage[/keyword], but [keyword id="secondary"]Charge Time[/keyword] is increased by [keyword id="secondary"]{mod2}[/keyword]',
    manufacturerId: "ripper"
  },
  "enhancement-20": {
    source: "enhancement",
    description: '[keyword id="secondary"]Head Ringer[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Torgue[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Damage[/keyword], and [keyword id="secondary"]{mod2} Damage Radius[/keyword]',
    manufacturerId: "torgue"
  },
  "enhancement-21": {
    source: "enhancement",
    description: '[keyword id="secondary"]High Roller[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Ripper[/keyword]-licensed parts increase [keyword id="secondary"]Gun Damage[/keyword] by [keyword id="secondary"]{mod}[/keyword] for each consecutive shot fired, for a Maximum [keyword id="secondary"]{mod2}[/keyword] Stacks',
    manufacturerId: "ripper"
  },
  "enhancement-22": {
    source: "enhancement",
    description: '[keyword id="secondary"]Leaper[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Jakobs[/keyword]-licensed parts gain a [keyword id="secondary"]{mod}[/keyword] Chance to [keyword id="secondary"]Ricochet[/keyword] non-[keyword id="secondary"]Critical Hits[/keyword]',
    manufacturerId: "jakobs"
  },
  "enhancement-23": {
    source: "enhancement",
    description: `[keyword id="secondary"]Mixologist[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Maliwan[/keyword]-licensed parts deal [keyword id="secondary"]{mod} Bonus Damage[/keyword] from the inactive [keyword id="secondary"]Mode[/keyword]'s Element`,
    manufacturerId: "maliwan"
  },
  "enhancement-24": {
    source: "enhancement",
    description: '[keyword id="secondary"]Muzzle Brake[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Order[/keyword]-licensed parts gain [keyword id="secondary"]{mod1} Accuracy[/keyword] and [keyword id="secondary"]{mod2} Burst Fire Speed[/keyword] when firing from [keyword id="secondary"]Maximum Charge[/keyword]',
    manufacturerId: "order"
  },
  "enhancement-25": {
    source: "enhancement",
    description: '[keyword id="secondary"]Piercer[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Jakobs[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to grant a [keyword id="secondary"]Critical Hit[/keyword]',
    manufacturerId: "jakobs"
  },
  "enhancement-26": {
    source: "enhancement",
    description: '[keyword id="secondary"]Power Shot[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Order[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Damage[/keyword] when firing from [keyword id="secondary"]Maximum Charge[/keyword]',
    manufacturerId: "order"
  },
  "enhancement-27": {
    source: "enhancement",
    description: '[keyword id="secondary"]Primed Potency[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Maliwan[/keyword]-licensed parts have [keyword id="secondary"]{mod} Status Effect Chance[/keyword] on the first bullet after [keyword id="secondary"]Reload[/keyword]',
    manufacturerId: "maliwan"
  },
  "enhancement-28": {
    source: "enhancement",
    description: '[keyword id="secondary"]Protractor[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Atlas[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to not consume [keyword id="secondary"]Ammo[/keyword] while [keyword id="secondary"]Target Lock[/keyword] is active',
    manufacturerId: "atlas"
  },
  "enhancement-29": {
    source: "enhancement",
    description: `[keyword id="secondary"]Recycler[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Tediore[/keyword]-licensed parts keep [keyword id="secondary"]{ammopercent}[/keyword] of a [keyword id="secondary"]Magazine's Ammo[/keyword] on [keyword id="secondary"]Reload[/keyword]`,
    manufacturerId: "tediore"
  },
  "enhancement-30": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sequencer[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Jakobs[/keyword]-licensed parts grant consecutive [keyword id="secondary"]Critical Hits[/keyword] a stacking [keyword id="secondary"]{mod} Bonus Damage[/keyword], for a Maximum [keyword id="secondary"]{mod2}[/keyword] Stacks',
    manufacturerId: "jakobs"
  },
  "enhancement-31": {
    source: "enhancement",
    description: '[keyword id="secondary"]Shock Guard[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Hyperion[/keyword]-licensed parts trigger a [keyword id="shock_icon"] [/keyword] [keyword id="shock"]Shock Nova[/keyword] when deployed (this feature has an [keyword id="secondary"]{mod}s Cooldown[/keyword])',
    manufacturerId: "hyperion"
  },
  "enhancement-32": {
    source: "enhancement",
    description: `[keyword id="secondary"]Short Circuit[/keyword] - After [keyword id="secondary"]Reloading[/keyword] an empty [keyword id="secondary"]Magazine[/keyword], [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Ripper[/keyword]-licensed parts have a [keyword id="secondary"]{mod}[/keyword] Chance to increase the next [keyword id="secondary"]Magazine's Fire Rate {firerate}[/keyword]`,
    manufacturerId: "ripper"
  },
  "enhancement-33": {
    source: "enhancement",
    description: '[keyword id="secondary"]Smelter[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]CoV[/keyword]-licensed [keyword id="secondary"]Magazines[/keyword] have [keyword id="secondary"]{mod} Fire Rate[/keyword] when over [keyword id="secondary"]{mod2} Heat[/keyword]',
    manufacturerId: "cov"
  },
  "enhancement-34": {
    source: "enhancement",
    description: '[keyword id="secondary"]Stabilizer[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Hyperion[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Accuracy[/keyword]',
    manufacturerId: "hyperion"
  },
  "enhancement-35": {
    source: "enhancement",
    description: '[keyword id="secondary"]Stim Converter[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Hyperion[/keyword]-licensed parts regenerate up to [keyword id="secondary"]{mod} Health[/keyword] when the [keyword id="secondary"]Gun Shield[/keyword] is hit',
    manufacturerId: "hyperion"
  },
  "enhancement-36": {
    source: "enhancement",
    description: '[keyword id="secondary"]Stockpiler[/keyword] - On [keyword id="secondary"]Reload[/keyword], [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Daedalus[/keyword]-licensed parts gain up to [keyword id="secondary"]{mod} Damage[/keyword] based on the amount of spare [keyword id="secondary"]Ammo[/keyword] for the currently-equipped [keyword id="secondary"]Gun[/keyword]',
    manufacturerId: "daedalus"
  },
  "enhancement-37": {
    source: "enhancement",
    description: '[keyword id="secondary"]Sure Shot[/keyword] - [keyword id="secondary"]Projectiles[/keyword] from [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Atlas[/keyword]-licensed parts automatically attach a [keyword id="secondary"]Tracker Dart[/keyword] every [keyword id="secondary"]{mod}s[/keyword]',
    manufacturerId: "atlas"
  },
  "enhancement-38": {
    source: "enhancement",
    description: '[keyword id="secondary"]Synthesizer[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Maliwan[/keyword]-licensed parts have [keyword id="secondary"]{mod} Status Effect Damage[/keyword]',
    manufacturerId: "maliwan"
  },
  "enhancement-39": {
    source: "enhancement",
    description: '[keyword id="secondary"]Tracker Antenna[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Atlas[/keyword]-licensed parts gain [keyword id="secondary"]{firerate} Fire Rate[/keyword] while [keyword id="secondary"]Target Lock[/keyword] is active',
    manufacturerId: "atlas"
  },
  "enhancement-40": {
    source: "enhancement",
    description: '[keyword id="secondary"]Transfuser[/keyword] - On kill, [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Maliwan[/keyword]-licensed parts spread their active [keyword id="secondary"]Status Effect[/keyword] to up to [keyword id="secondary"]{mod}[/keyword] nearby [keyword id="secondary"]targets[/keyword]',
    manufacturerId: "maliwan"
  },
  "enhancement-41": {
    source: "enhancement",
    description: '[keyword id="secondary"]Trauma Bond[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Atlas[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Damage[/keyword] while [keyword id="secondary"]Target Lock[/keyword] is active',
    manufacturerId: "atlas"
  },
  "enhancement-42": {
    source: "enhancement",
    description: '[keyword id="secondary"]Underdog[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]Vladof[/keyword]-licensed parts gain [keyword id="secondary"]{mod} Underbarrel Damage[/keyword]',
    manufacturerId: "vladof"
  },
  "enhancement-43": {
    source: "enhancement",
    description: '[keyword id="secondary"]Ventilator[/keyword] - [keyword id="secondary"]Guns[/keyword] with [keyword id="primary"]CoV[/keyword]-licensed [keyword id="secondary"]Magazines[/keyword] have a [keyword id="secondary"]{mod}[/keyword] Chance to cost [keyword id="secondary"]0 Heat[/keyword] when fired',
    manufacturerId: "cov"
  },
  "class-mod-0": {
    source: "class-mod",
    description: 'All [keyword id="primary"]Forgeskills[/keyword] can now be used [keyword id="secondary"]once[/keyword] while on [keyword id="secondary"]Cooldown[/keyword].',
    characterId: "amon"
  },
  "class-mod-1": {
    source: "class-mod",
    description: 'Killing an enemy with a [keyword id="secondary"]Sniper Rifle[/keyword] will trigger [keyword id="primary"]Blood Shot[/keyword]. [keyword id="secondary"]Critically Hitting[/keyword] an enemy with a [keyword id="secondary"]Sniper Rifle[/keyword] has a 33% chance to trigger [keyword id="primary"]Blood Shot[/keyword].',
    characterId: "vex"
  },
  "class-mod-2": {
    source: "class-mod",
    description: 'On Action Skill Retrigger [keyword id="primary"]spawn a free grenade[/keyword]. If you have a [keyword id="secondary"]Grenade[/keyword] equipped, [keyword id="primary"]spawn a copy of that grenade[/keyword] instead.',
    characterId: "rafa"
  },
  "class-mod-3": {
    source: "class-mod",
    description: 'Using a [keyword id="primary"]Command Skill[/keyword] grants [keyword id="primary"]Vex[/keyword] [keyword id="kinetic_icon"] [/keyword] [keyword id="kinetic"]Bonus Kinetic Minion Damage[/keyword] with [keyword id="secondary"]Guns[/keyword] for a [keyword id="secondary"]Duration[/keyword]. [keyword id="primary"]Command Skills[/keyword] deal [keyword id="secondary"]Gun Damage[/keyword] in addition to its other types.',
    characterId: "vex"
  },
  "class-mod-4": {
    source: "class-mod",
    description: 'When [keyword id="primary"]Vex[/keyword] has [keyword id="secondary"]Maximum Health[/keyword], her [keyword id="secondary"]Lifesteal[/keyword] partially applies to [keyword id="secondary"]Shields[/keyword].When [keyword id="primary"]Vex[/keyword] has [keyword id="secondary"]Maximum Shield[/keyword], her [keyword id="secondary"]Lifesteal[/keyword] partially grants [keyword id="secondary"]Overshield[/keyword].',
    characterId: "vex"
  },
  "class-mod-5": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Harlowe[/keyword] [keyword id="nowrap"] [/keyword][keyword id="shock"] [/keyword][keyword id="shock_icon"] [/keyword]Shocks[keyword id="/shock"] [/keyword][keyword id="/nowrap"] [/keyword] an [keyword id="secondary"]enemy[/keyword], she automatically [keyword id="primary"]Entangles[/keyword] and [keyword id="nowrap"] [/keyword][keyword id="radiation"] [/keyword][keyword id="radiation_icon"] [/keyword]Irradiates[keyword id="/radiation"] [/keyword][keyword id="/nowrap"] [/keyword] that [keyword id="secondary"]enemy[/keyword]. Whenever [keyword id="primary"] [/keyword]Harlowe[keyword id="/primary"] [/keyword] [keyword id="primary"]Entangles[/keyword] an [keyword id="secondary"]enemy[/keyword], [keyword id="nowrap"] [/keyword][keyword id="shock"] [/keyword][keyword id="shock_icon"] [/keyword]Electric[keyword id="/shock"] [/keyword][keyword id="/nowrap"] [/keyword] [keyword id="shock"]Arcs[/keyword] shoot out from that [keyword id="secondary"]enemy[/keyword] at other nearby [keyword id="secondary"]enemies[/keyword].',
    characterId: "harlowe"
  },
  "class-mod-6": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"] [/keyword]Harlowe[keyword id="/primary"] [/keyword] [keyword id="primary"]Entangles[/keyword] an [keyword id="secondary"]enemy[/keyword], she gains a [keyword id="secondary"]Reactor Stack[/keyword]. For every Stack, she gains [keyword id="secondary"]{1} Movement Speed[/keyword]. When she gains [keyword id="secondary"]{0}[/keyword] Stacks, she also gains [keyword id="secondary"]{2} Gun Damage[/keyword], [keyword id="secondary"]{2} Fire Rate[/keyword], [keyword id="secondary"]{2} Reload Speed[/keyword], and [keyword id="secondary"]{2} Status Effect Damage[/keyword] for [keyword id="secondary"]{3} seconds[/keyword], and loses all Stacks once the [keyword id="secondary"]Duration[/keyword] ends.',
    characterId: "harlowe"
  },
  "class-mod-7": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"] [/keyword]Harlowe[keyword id="/primary"] [/keyword] [keyword id="primary"]Entangles[/keyword] an enemy, she creates alternating [keyword id="cryo"] [/keyword][keyword id="cryo_icon"] [/keyword]Cryo Hazards[keyword id="/cryo"] [/keyword] and [keyword id="radiation"] [/keyword][keyword id="radiation_icon"] [/keyword]Radiation Hazards[keyword id="/radiation"] [/keyword].',
    characterId: "harlowe"
  },
  "class-mod-8": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"] [/keyword]Harlowe[keyword id="/primary"] [/keyword] [keyword id="secondary"]Slams[/keyword] an [keyword id="secondary"]enemy[/keyword] in [keyword id="primary"]Stasis[/keyword], she automatically fires [keyword id="radiation"] [/keyword][keyword id="radiation_icon"] [/keyword]Radiation Darts[keyword id="/radiation"] [/keyword] and [keyword id="cryo"] [/keyword][keyword id="cryo_icon"] [/keyword]Cryo Darts[keyword id="/cryo"] [/keyword] that [keyword id="secondary"]home in[/keyword] on [keyword id="secondary"]enemies[/keyword]. Shooting [keyword id="secondary"]enemies[/keyword] with an active [keyword id="secondary"] [/keyword]Status Effect[keyword id="/secondary"] [/keyword] [keyword id="secondary"]restores {0}[/keyword] of [keyword id="secondary"]Action Skill Cooldown[/keyword].',
    characterId: "harlowe"
  },
  "class-mod-9": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Harlowe[/keyword] activates her [keyword id="primary"]Flux Generator[/keyword], she decreases her remaining [keyword id="secondary"]Action Skill Duration[/keyword] by [keyword id="secondary"]{0}[/keyword] and gains  [keyword id="secondary"]{1} Action Skill Power[/keyword].',
    characterId: "harlowe"
  },
  "class-mod-10": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Harlowe[/keyword] fires [keyword id="primary"]CHROMA Accelerator[/keyword], she drains all but [keyword id="secondary"]1[/keyword] of her [keyword id="secondary"]Health[/keyword] and [keyword id="secondary"] [/keyword]Amps[keyword id="/secondary"] [/keyword] [keyword id="primary"]CHROMA Accelerator[/keyword]. [keyword id="primary"]CHROMA Accelerator[/keyword] gains [keyword id="secondary"]{0} Lifesteal[/keyword].',
    characterId: "harlowe"
  },
  "class-mod-11": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Peacebreaker Cannons[/keyword] fire at an [keyword id="secondary"]enemy[/keyword], gain a Stack of [keyword id="primary"]Instigator[/keyword] and lose all Stacks when [keyword id="primary"]Peacebreaker Cannons[/keyword] fire at a new [keyword id="secondary"]enemy[/keyword]. [keyword id="primary"]Rafa[/keyword] gains [keyword id="secondary"]{0} Gun Damage[/keyword] for every Stack of [keyword id="primary"]Instigator[/keyword].',
    characterId: "rafa"
  },
  "class-mod-12": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Rafa[/keyword] retriggers his [keyword id="secondary"]Action Skill[/keyword], he spawns a free [keyword id="secondary"]Grenade[/keyword]. If he has a [keyword id="secondary"]Grenade[/keyword] equipped, he spawns one based on that. This [keyword id="secondary"]Skill[/keyword] has a {0} second cooldown.',
    characterId: "rafa"
  },
  "class-mod-13": {
    source: "class-mod",
    description: 'Whenever [keyword id="primary"]Rafa[/keyword] throws a [keyword id="secondary"]Grenade[/keyword] or [keyword id="secondary"]Tediore Gun[/keyword], he throws an additional one.',
    characterId: "rafa"
  },
  "class-mod-14": {
    source: "class-mod",
    description: '[keyword id="primary"]APOPHIS Lance[/keyword] gains a [keyword id="secondary"]{0}[/keyword] Chance to not consume [keyword id="primary"]Charges[/keyword]. The more [keyword id="primary"]Charges[/keyword] used at once, the greater the Chance.',
    characterId: "rafa"
  },
  "class-mod-15": {
    source: "class-mod",
    description: '[keyword id="primary"]Crucible[/keyword] gains [keyword id="secondary"]+2 Charges[/keyword], increased [keyword id="secondary"]Duration[/keyword], and grants [keyword id="primary"]Amon[/keyword] increased [keyword id="secondary"]Damage Reduction[/keyword] while active.',
    characterId: "amon"
  },
  "class-mod-16": {
    source: "class-mod",
    description: `[keyword id="primary"]Eldritch Blast[/keyword] deals [keyword id="secondary"]Ordnance Damage[/keyword] in addition to its other types. Killing an enemy, triggering [keyword id="secondary"]Kill Skills[/keyword], or using a [keyword id="secondary"]Grenade[/keyword] will [keyword id="secondary"] [/keyword]reset[keyword id="/secondary"] [/keyword] [keyword id="primary"]Eldritch Blast's[/keyword] [keyword id="secondary"]Cooldown[/keyword].`,
    characterId: "vex"
  },
  "class-mod-17": {
    source: "class-mod",
    description: '[keyword id="primary"]Forgewaves[/keyword] now deal [keyword id="secondary"]Melee Damage[/keyword] in addition to their other types. [keyword id="primary"]Melee Attacks[/keyword] while [keyword id="primary"]Scourge[/keyword] is active gain increased [keyword id="cryo"]Cryo Efficiency[/keyword] and [keyword id="secondary"]Radius[/keyword].',
    characterId: "amon"
  },
  "class-mod-18": {
    source: "class-mod",
    description: `[keyword id="primary"]Overdrive[/keyword] bonuses are increased by [keyword id="secondary"]{0}[/keyword]. [keyword id="primary"]Overdrive[/keyword] ends whenever [keyword id="primary"] [/keyword]Rafa's[keyword id="/primary"] [/keyword] [keyword id="secondary"]Action Skill[/keyword] ends.`,
    characterId: "rafa"
  },
  "class-mod-19": {
    source: "class-mod",
    description: `[keyword id="primary"] [/keyword]Rafa's[keyword id="/primary"] [/keyword] [keyword id="secondary"]Melee Attacks[/keyword] gain a [keyword id="secondary"]{0} Critical Hit Chance[/keyword]. [keyword id="secondary"]Critical Hits[/keyword] with [keyword id="secondary"]Melee Attacks[/keyword] restore [keyword id="secondary"]{1}[/keyword] of [keyword id="secondary"]Action Skill Duration[/keyword].`,
    characterId: "rafa"
  },
  "class-mod-20": {
    source: "class-mod",
    description: `[keyword id="primary"]Specters[/keyword] and [keyword id="primary"]Reapers[/keyword] have a chance to be [keyword id="secondary"]Badasses[/keyword], gaining increased [keyword id="secondary"]Maximum Health[/keyword] and [keyword id="secondary"]Damage Dealt[/keyword]. This chance increases the longer it hasn't occurred and will at least occur once every [keyword id="secondary"]90 seconds[/keyword].`,
    characterId: "vex"
  },
  "class-mod-21": {
    source: "class-mod",
    description: '[keyword id="primary"]Vex[/keyword] and her [keyword id="primary"]Minions[/keyword] gain increased [keyword id="secondary"]Damage Dealt[/keyword] for each active [keyword id="primary"]Attunement Skill[/keyword]. Each active [keyword id="primary"]Attunement Skill[/keyword] also grants [keyword id="primary"]Vex[/keyword] and her [keyword id="primary"] [/keyword]Minions[keyword id="/primary"] [/keyword] [keyword id="secondary"]Damage Reduction[/keyword] against its matching [keyword id="secondary"]Elemental Type[/keyword].',
    characterId: "vex"
  },
  "class-mod-22": {
    source: "class-mod",
    description: '[keyword id="secondary"]Damage[/keyword] from [keyword id="primary"]Fellfrost[/keyword], [keyword id="primary"]Hoarcleave[/keyword], [keyword id="primary"]Fulminating Fist[/keyword], and [keyword id="primary"]Stormcutter[/keyword] is converted to [keyword id="nowrap"] [/keyword][keyword id="fire_icon"] [/keyword] [keyword id="fire"]Incendiary[/keyword][keyword id="/nowrap"] [/keyword] [keyword id="fire"]Damage[/keyword].'
  },
  "class-mod-23": {
    source: "class-mod",
    description: `[keyword id="secondary"]Kill Skill.[/keyword] Partially restores all active [keyword id="primary"] [/keyword]Forgedrone's[keyword id="/primary"] [/keyword] [keyword id="secondary"]Duration[/keyword]. For each active [keyword id="primary"]Forgedrone[/keyword], [keyword id="primary"]Amon[/keyword] deals increased [keyword id="secondary"]Gun Damage[/keyword].`,
    characterId: "amon"
  }
}, m = {
  np_cm_ds_leg_01: {
    name: "Technomancer",
    effect: "[primary]Eldritch Blast[/primary] deals [secondary]Ordnance Damage[/secondary] in addition to its other types. Killing an enemy, triggering [secondary]Kill Skills[/secondary], or using a [secondary]Grenade[/secondary] will [secondary]reset[/secondary] [primary]Eldritch Blast's[/primary] [secondary]Cooldown[/secondary].",
    character: "vex"
  },
  np_cm_ds_leg_02: {
    name: "Avatar",
    effect: "[primary]Vex[/primary] and her [primary]Minions[/primary] gain increased [secondary]Damage Dealt[/secondary] for each active [primary]Attunement Skill[/primary]. Each active [primary]Attunement Skill[/primary] also grants [primary]Vex[/primary] and her [primary]Minions[/primary] [secondary]Damage Reduction[/secondary] against its matching [secondary]Elemental Type[/secondary].",
    character: "vex"
  },
  np_cm_ds_leg_03: {
    name: "Undead Eye",
    effect: "Killing an enemy with a [secondary]Sniper Rifle[/secondary] will trigger [primary]Blood Shot[/primary]. [secondary]Critically Hitting[/secondary] an enemy with a [secondary]Sniper Rifle[/secondary] has a 33% chance to trigger [primary]Blood Shot[/primary].",
    character: "vex"
  },
  np_cm_ds_leg_04: {
    name: "Kindread Spirits",
    effect: "Using a [primary]Command Skill[/primary] grants [primary]Vex[/primary] [kinetic_icon][kinetic]Bonus Kinetic Minion Damage[/kinetic] with [secondary]Guns[/secondary] for a [secondary]Duration[/secondary]. [primary]Command Skills[/primary] deal [secondary]Gun Damage[/secondary] in addition to its other types.",
    character: "vex"
  },
  np_cm_ds_leg_05: {
    name: "Illusionist",
    effect: "[primary]Specters[/primary] and [primary]Reapers[/primary] have a chance to be [secondary]Badasses[/secondary], gaining increased [secondary]Maximum Health[/secondary] and [secondary]Damage Dealt[/secondary]. This chance increases the longer it hasn't occurred and will at least occur once every [secondary]90 seconds[/secondary].",
    character: "vex"
  },
  np_cm_ds_leg_06: {
    name: "Teen Witch",
    effect: "When [primary]Vex[/primary] has [secondary]Maximum Health[/secondary], her [secondary]Lifesteal[/secondary] partially applies to [secondary]Shields[/secondary].When [primary]Vex[/primary] has [secondary]Maximum Shield[/secondary], her [secondary]Lifesteal[/secondary] partially grants [secondary]Overshield[/secondary].",
    character: "vex"
  },
  np_cm_exo_leg_01: {
    name: "Dancer",
    effect: "[primary]Overdrive[/primary] bonuses are increased by [secondary]+100%[/secondary]. [primary]Overdrive[/primary] ends whenever [primary]Rafa's[/primary] [secondary]Action Skill[/secondary] ends.",
    character: "rafa"
  },
  np_cm_exo_leg_02: {
    name: "Filántropo",
    effect: "Whenever [primary]Rafa[/primary] retriggers his [secondary]Action Skill[/secondary], he spawns a free [secondary]Grenade[/secondary]. If he has a [secondary]Grenade[/secondary] equipped, he spawns one based on that. This [secondary]Skill[/secondary] has a 4 second cooldown.",
    character: "rafa"
  },
  np_cm_exo_leg_03: {
    name: "Instigator",
    effect: "Whenever [primary]Peacebreaker Cannons[/primary] fire at an [secondary]enemy[/secondary], gain a Stack of [primary]Instigator[/primary] and lose all Stacks when [primary]Peacebreaker Cannons[/primary] fire at a new [secondary]enemy[/secondary]. [primary]Rafa[/primary] gains [secondary]+2% Gun Damage[/secondary] for every Stack of [primary]Instigator[/primary].",
    character: "rafa"
  },
  np_cm_exo_leg_04: {
    name: "Buster",
    effect: "[primary]APOPHIS Lance[/primary] gains a [secondary]25%[/secondary] Chance to not consume [primary]Charges[/primary]. The more [primary]Charges[/primary] used at once, the greater the Chance.",
    character: "rafa"
  },
  np_cm_exo_leg_05: {
    name: "Esgrimidor",
    effect: "[primary]Rafa's[/primary] [secondary]Melee Attacks[/secondary] gain a [secondary]+10% Critical Hit Chance[/secondary]. [secondary]Critical Hits[/secondary] with [secondary]Melee Attacks[/secondary] restore [secondary]+5%[/secondary] of [secondary]Action Skill Duration[/secondary].",
    character: "rafa"
  },
  np_cm_exo_leg_06: {
    name: "Grenazerker",
    effect: "Whenever [primary]Rafa[/primary] throws a [secondary]Grenade[/secondary] or [secondary]Tediore Gun[/secondary], he throws an additional one.",
    character: "rafa"
  },
  np_cm_grav_leg_01: {
    name: "Bio-Robot",
    effect: "Whenever [primary]Harlowe[/primary] [primary]Entangles[/primary] an enemy, she creates alternating [cryo][cryo_icon]Cryo Hazards[/cryo] and [radiation][radiation_icon]Radiation Hazards[/radiation].",
    character: "harlowe"
  },
  np_cm_grav_leg_02: {
    name: "Reactor",
    effect: "Whenever [primary]Harlowe[/primary] [primary]Entangles[/primary] an [secondary]enemy[/secondary], she gains a [secondary]Reactor Stack[/secondary]. For every Stack, she gains [secondary]+2% Movement Speed[/secondary]. When she gains [secondary]10[/secondary] Stacks, she also gains [secondary]+20% Gun Damage[/secondary], [secondary]+20% Fire Rate[/secondary], [secondary]+20% Reload Speed[/secondary], and [secondary]+20% Status Effect Damage[/secondary] for [secondary]12 seconds[/secondary], and loses all Stacks once the [secondary]Duration[/secondary] ends.",
    character: "harlowe"
  },
  np_cm_grav_leg_03: {
    name: "Generator",
    effect: "Whenever [primary]Harlowe[/primary] activates her [primary]Flux Generator[/primary], she decreases her remaining [secondary]Action Skill Duration[/secondary] by [secondary]50%[/secondary] and gains  [secondary]+200% Action Skill Power[/secondary].",
    character: "harlowe"
  },
  np_cm_grav_leg_04: {
    name: "Driver",
    effect: "Whenever [primary]Harlowe[/primary] fires [primary]CHROMA Accelerator[/primary], she drains all but [secondary]1[/secondary] of her [secondary]Health[/secondary] and [secondary]Amps[/secondary] [primary]CHROMA Accelerator[/primary]. [primary]CHROMA Accelerator[/primary] gains [secondary]+20% Lifesteal[/secondary].",
    character: "harlowe"
  },
  np_cm_grav_leg_05: {
    name: "Skeptic",
    effect: "Whenever [primary]Harlowe[/primary] [secondary]Slams[/secondary] an [secondary]enemy[/secondary] in [primary]Stasis[/primary], she automatically fires [radiation][radiation_icon]Radiation Darts[/radiation] and [cryo][cryo_icon]Cryo Darts[/cryo] that [secondary]home in[/secondary] on [secondary]enemies[/secondary]. Shooting [secondary]enemies[/secondary] with an active [secondary]Status Effect[/secondary] [secondary]restores 5%[/secondary] of [secondary]Action Skill Cooldown[/secondary].",
    character: "harlowe"
  },
  np_cm_grav_leg_06: {
    name: "Scientist",
    effect: "Whenever [primary]Harlowe[/primary] [nowrap][shock][shock_icon]Shocks[/shock][/nowrap] an [secondary]enemy[/secondary], she automatically [primary]Entangles[/primary] and [nowrap][radiation][radiation_icon]Irradiates[/radiation][/nowrap] that [secondary]enemy[/secondary]. Whenever [primary]Harlowe[/primary] [primary]Entangles[/primary] an [secondary]enemy[/secondary], [nowrap][shock][shock_icon]Electric[/shock][/nowrap] [shock]Arcs[/shock] shoot out from that [secondary]enemy[/secondary] at other nearby [secondary]enemies[/secondary].",
    character: "harlowe"
  },
  np_cm_pal_leg_01: {
    name: "Furnace",
    effect: "[secondary]Damage[/secondary] from [primary]Fellfrost[/primary], [primary]Hoarcleave[/primary], [primary]Fulminating Fist[/primary], and [primary]Stormcutter[/primary] is converted to [nowrap][fire_icon][fire]Incendiary[/fire][/nowrap] [fire]Damage[/fire].",
    character: "amon"
  },
  np_cm_pal_leg_02: {
    name: "Elementalist",
    effect: "Whenever an [primary]Affinity Skill[/primary] gains a Stack, all unlocked [primary]Affinity Skills[/primary] also gain a Stack. For each Stack of [primary]Affinity[/primary] from all [primary]Affinity Skills[/primary], [primary]Amon[/primary] gains increased [secondary]Movement Speed[/secondary].",
    character: "amon"
  },
  np_cm_pal_leg_03: {
    name: "Blacksmith",
    effect: "[secondary]Kill Skill.[/secondary] Partially restores all active [primary]Forgedrone's[/primary] [secondary]Duration[/secondary]. For each active [primary]Forgedrone[/primary], [primary]Amon[/primary] deals increased [secondary]Gun Damage[/secondary].",
    character: "amon"
  },
  np_cm_pal_leg_04: {
    name: "Shatterwight",
    effect: "[primary]Forgewaves[/primary] now deal [secondary]Melee Damage[/secondary] in addition to their other types. [primary]Melee Attacks[/primary] while [primary]Scourge[/primary] is active gain increased [cryo]Cryo Efficiency[/cryo] and [secondary]Radius[/secondary].",
    character: "amon"
  },
  np_cm_pal_leg_05: {
    name: "Viking",
    effect: "[primary]Crucible[/primary] gains [secondary]+2 Charges[/secondary], increased [secondary]Duration[/secondary], and grants [primary]Amon[/primary] increased [secondary]Damage Reduction[/secondary] while active.",
    character: "amon"
  },
  np_cm_pal_leg_06: {
    name: "Forge Master",
    effect: "All [primary]Forgeskills[/primary] can now be used [secondary]once[/secondary] while on [secondary]Cooldown[/secondary].",
    character: "amon"
  }
}, p = {
  apiext_version: e,
  characters: r,
  skillTypes: o,
  manufacturers: d,
  elements: a,
  firmwares: i,
  itemAugments: n,
  skills: s,
  specializations: y,
  characterSpecializations: c,
  legendaryItemAugments: t,
  legendaryItemAugmentPool: w,
  statAugments: k,
  itemEffects: l,
  legendaryClassModEffectsPool: m
};
export {
  e as apiext_version,
  c as characterSpecializations,
  r as characters,
  p as default,
  a as elements,
  i as firmwares,
  n as itemAugments,
  l as itemEffects,
  m as legendaryClassModEffectsPool,
  w as legendaryItemAugmentPool,
  t as legendaryItemAugments,
  d as manufacturers,
  o as skillTypes,
  s as skills,
  y as specializations,
  k as statAugments
};

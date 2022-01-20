"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readRosterFile_1 = require("./helpers/readRosterFile");
const roster40k_1 = require("../src/roster40k");
describe("Create40kRoster", function () {
    it("loads test/Black Templar 2000.ros", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield readRosterFile_1.readZippedRosterFile('test/Black Templar 2000.ros');
            const roster = roster40k_1.Create40kRoster(doc);
            expect(roster).toEqual(jasmine.objectContaining({
                '_powerLevel': 104,
                '_points': 1994,
                '_commandPoints': 14,
                '_forces': [
                    jasmine.objectContaining({
                        '_configurations': [],
                        '_units': [
                            jasmine.objectContaining({
                                '_name': "Captain in Phobos Armour",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Captain in Phobos Armour" }),
                                ],
                                '_modelList': [
                                    "Captain in Phobos Armour (Bolt pistol, Master-crafted instigator bolt carbine, Combat knife, Frag & Krak grenades, Camo cloak, Champion of Humanity, Warlord)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Master-crafted instigator bolt carbine" }),
                                    jasmine.objectContaining({ '_name': "Combat knife" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Lieutenants in Phobos Armor",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Lieutenant in Phobos Armour" }),
                                ],
                                '_modelList': [
                                    "Lieutenant in Phobos Armour (Bolt pistol, Master-crafted occulus bolt rifle, Paired Combat Blades, Frag & Krak grenades, Grav-chute, The Armour Indomitus)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Master-crafted occulus bolt rifle" }),
                                    jasmine.objectContaining({ '_name': "Paired Combat Blades" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "The Emperor's Champion",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Emperor's Champion" }),
                                ],
                                '_modelList': [
                                    "The Emperor's Champion (Bolt pistol, Black Sword, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Black Sword" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Crusader Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Initiate" }),
                                    jasmine.objectContaining({ '_name': "Sword Brother" }),
                                ],
                                '_modelList': [
                                    "4x Initiate (Bolt pistol, Boltgun, Frag & Krak grenades)",
                                    "Sword Brother (Boltgun, Power fist, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Boltgun" }),
                                    jasmine.objectContaining({ '_name': "Power fist" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Infiltrator Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Infiltrator" }),
                                    jasmine.objectContaining({ '_name': "Infiltrator Sergeant" }),
                                ],
                                '_modelList': [
                                    "4x Infilltrator (Bolt pistol, Marksman bolt carbine, Frag & Krak grenades)",
                                    "Infiltrator Sergeant (Bolt pistol, Marksman bolt carbine, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Marksman bolt carbine" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Intercessor Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Intercessor" }),
                                    jasmine.objectContaining({ '_name': "Intercessor Sergeant" }),
                                ],
                                '_modelList': [
                                    "4x Intercessor (Auto Bolt Rifle, Bolt pistol, Frag & Krak grenades)",
                                    "Intercessor Sergeant (Auto Bolt Rifle, Bolt pistol, Thunder hammer, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Auto Bolt Rifle" }),
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Thunder hammer" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Intercessor Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Intercessor (Veteran Intercessors)" }),
                                    jasmine.objectContaining({ '_name': "Intercessor Sergeant (Veteran Intercessors)" }),
                                ],
                                '_modelList': [
                                    "4x Intercessor (Auto Bolt Rifle, Bolt pistol, Frag & Krak grenades)",
                                    "Intercessor Sergeant (Auto Bolt Rifle, Bolt pistol, Thunder hammer, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Auto Bolt Rifle" }),
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Thunder hammer" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Scout Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Scout" }),
                                    jasmine.objectContaining({ '_name': "Scout Sergeant" }),
                                ],
                                '_modelList': [
                                    "Scout Squad (2x Bolt pistol, 2x Boltgun, 2x Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Boltgun" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Tactical Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Space Marine" }),
                                    jasmine.objectContaining({ '_name': "Space Marine Sergeant" }),
                                ],
                                '_modelList': [
                                    "4x Space Marine (Bolt pistol, Boltgun, Frag & Krak grenades)",
                                    "Space Marine Sergeant (Bolt pistol, Boltgun, Frag & Krak grenades)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Boltgun" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Aggressor Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Aggressor" }),
                                    jasmine.objectContaining({ '_name': "Aggressor Sergeant" }),
                                ],
                                '_modelList': [
                                    "2x Aggressor (Auto Boltstorm Gauntlets, Fragstorm Grenade Launcher)",
                                    "Aggressor Sergeant (Auto Boltstorm Gauntlets, Fragstorm Grenade Launcher)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Auto Boltstorm Gauntlets (Shooting)" }),
                                    jasmine.objectContaining({ '_name': "Fragstorm Grenade Launcher" }),
                                    jasmine.objectContaining({ '_name': "Auto Boltstorm Gauntlets (Melee)" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Cenobyte Servitors",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Cenobyte Servitors" }),
                                ],
                                '_modelList': [
                                    "Cenobyte Servitors (3x Close Combat Weapon)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Close Combat Weapon" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Redemptor Dreadnought",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Redemptor Dreadnought" }),
                                ],
                                '_modelList': [
                                    "Redemptor Dreadnought (2x Fragstorm Grenade Launchers, Heavy flamer, Heavy Onslaught Gatling Cannon, Redemptor Fist)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Fragstorm Grenade Launcher" }),
                                    jasmine.objectContaining({ '_name': "Heavy flamer" }),
                                    jasmine.objectContaining({ '_name': "Heavy Onslaught Gatling Cannon" }),
                                    jasmine.objectContaining({ '_name': "Redemptor Fist" }),
                                ],
                                '_woundTracker': [
                                    jasmine.objectContaining({ '_name': "Redemptor Dreadnought 1" }),
                                    jasmine.objectContaining({ '_name': "Redemptor Dreadnought 2" }),
                                    jasmine.objectContaining({ '_name': "Redemptor Dreadnought 3" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Assault Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Space Marine (Jump Pack)" }),
                                    jasmine.objectContaining({ '_name': "Space Marine Sergeant (Jump Pack)" }),
                                ],
                                '_modelList': [
                                    "Assault Squad (2x Bolt pistol/Chainsword, 2x Frag & Krak grenades, Bolt pistol, Chainsword, Jump Pack)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Chainsword" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Assault Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Space Marine (Jump Pack)" }),
                                    jasmine.objectContaining({ '_name': "Space Marine Sergeant (Jump Pack)" }),
                                ],
                                '_modelList': [
                                    "Assault Squad (2x Bolt pistol/Chainsword, 2x Frag & Krak grenades, Bolt pistol, Chainsword, Jump Pack)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Chainsword" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Suppressor Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Suppressor" }),
                                    jasmine.objectContaining({ '_name': "Suppressor Sergeant" }),
                                ],
                                '_modelList': [
                                    "2x Suppressor (Accelerator autocannon, Bolt pistol, Frag & Krak grenades, Grav-chute)",
                                    "Suppressor Sergeant (Accelerator autocannon, Bolt pistol, Frag & Krak grenades, Grav-chute)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Accelerator autocannon" }),
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Eliminator Squad",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Eliminator" }),
                                    jasmine.objectContaining({ '_name': "Eliminator Sergeant" }),
                                ],
                                '_modelList': [
                                    "Eliminator Sergeant (Bolt pistol, Bolt sniper rifle, Frag & Krak grenades, Camo cloak)",
                                    "2x Eliminator with Bolt Sniper (Bolt pistol, Bolt sniper rifle, Frag & Krak grenades, Camo cloak)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Bolt pistol" }),
                                    jasmine.objectContaining({ '_name': "Bolt sniper rifle" }),
                                    jasmine.objectContaining({ '_name': "Bolt sniper rifle - Executioner round" }),
                                    jasmine.objectContaining({ '_name': "Bolt sniper rifle - Hyperfrag round" }),
                                    jasmine.objectContaining({ '_name': "Bolt sniper rifle - Mortis round" }),
                                    jasmine.objectContaining({ '_name': "Frag grenade" }),
                                    jasmine.objectContaining({ '_name': "Krak grenade" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Predator",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Predator" }),
                                ],
                                '_modelList': [
                                    "Predator (Two Heavy Bolters, Storm bolter, Twin lascannon)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Heavy bolter" }),
                                    jasmine.objectContaining({ '_name': "Storm bolter" }),
                                    jasmine.objectContaining({ '_name': "Twin lascannon" }),
                                ],
                                '_woundTracker': [
                                    jasmine.objectContaining({ '_name': "Predator 1" }),
                                    jasmine.objectContaining({ '_name': "Predator 2" }),
                                    jasmine.objectContaining({ '_name': "Predator 3" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Repulsor Executioner",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Repulsor Executioner" }),
                                ],
                                '_modelList': [
                                    "Repulsor Executioner (2x Fragstorm Grenade Launcher, Heavy Onslaught Gatling Cannon, Macro Plasma Incinerator, 2x Storm bolter, Twin Heavy Bolter, Twin Icarus Ironhail Heavy Stubber, Auto Launchers)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Fragstorm Grenade Launcher" }),
                                    jasmine.objectContaining({ '_name': "Heavy Onslaught Gatling Cannon" }),
                                    jasmine.objectContaining({ '_name': "Macro Plasma Incinerator, Standard" }),
                                    jasmine.objectContaining({ '_name': "Macro Plasma Incinerator, Supercharged" }),
                                    jasmine.objectContaining({ '_name': "Storm bolter" }),
                                    jasmine.objectContaining({ '_name': "Twin Heavy Bolter" }),
                                    jasmine.objectContaining({ '_name': "Twin Icarus Ironhail Heavy Stubber" }),
                                ],
                                '_woundTracker': [
                                    jasmine.objectContaining({ '_name': "Repulsor Executioner 1" }),
                                    jasmine.objectContaining({ '_name': "Repulsor Executioner 2" }),
                                    jasmine.objectContaining({ '_name': "Repulsor Executioner 3" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Drop Pod",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Drop Pod" }),
                                ],
                                '_modelList': [
                                    "Drop Pod (Storm bolter)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Storm bolter" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "Impulsor",
                                '_modelStats': [
                                    jasmine.objectContaining({ '_name': "Impulsor" }),
                                ],
                                '_modelList': [
                                    "Impulsor (Ironhail Heavy Stubber, 2x Storm Bolters, Shield Dome)"
                                ],
                                '_weapons': [
                                    jasmine.objectContaining({ '_name': "Ironhail Heavy Stubber" }),
                                    jasmine.objectContaining({ '_name': "Storm bolter" }),
                                ],
                                '_woundTracker': [
                                    jasmine.objectContaining({ '_name': "Impulsor Wound Track 1" }),
                                    jasmine.objectContaining({ '_name': "Impulsor Wound Track 2" }),
                                    jasmine.objectContaining({ '_name': "Impulsor Wound Track 3" }),
                                ]
                            }),
                            jasmine.objectContaining({
                                '_name': "**Chapter Selection**",
                                '_modelStats': [],
                                '_modelList': [],
                                '_weapons': []
                            }),
                            jasmine.objectContaining({
                                '_name': "Battle-forged CP",
                                '_modelStats': [],
                                '_modelList': [],
                                '_weapons': []
                            }),
                            jasmine.objectContaining({
                                '_name': "Detachment CP",
                                '_modelStats': [],
                                '_modelList': [],
                                '_weapons': []
                            }),
                        ]
                    }),
                ]
            }));
        });
    });
});
//# sourceMappingURL=BlackTemplar2000Spec.js.map
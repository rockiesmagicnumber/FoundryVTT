export class Character {
    abilities: AbilityScores;
    attributes: Attributes;
    details: Details;
    traits: Traits;
    currency: Currency;
    skills: SkillScores;
    spells: Spells;
    bonuses: Bonuses;
    resources: Resources;
    items?: (ItemsEntity)[] | null;
    name: string;
}
export class AbilityScores {
    str: Ability;
    dex: Ability;
    con: Ability;
    int: Ability;
    wis: Ability;
    cha: Ability;
}
export class Ability {
    value: number;
    proficient: number;
    min: number;
    mod: number;
    prof: number;
    saveBonus: number;
    checkBonus: number;
    save: number;
    dc: number;
}
export class Attributes {
    ac: Ac;
    hp: Hp;
    init: Init;
    movement: Movement;
    senses: Senses;
    spellcasting: string;
    death: Death;
    encumbrance: Encumbrance;
    exhaustion: number;
    inspiration: boolean;
    hd: number;
    prof: number;
    speed: Speed;
    spelldc: number;
}
export class Ac {
    value: number;
    type: string;
    label: string;
}
export class Hp {
    value: number;
    min: number;
    max: number;
    temp?: null;
    tempmax?: null;
}
export class Init {
    value: number;
    bonus: number;
    mod: number;
    prof: number;
    total: number;
}
export class Movement {
    burrow: number;
    climb: number;
    fly: number;
    swim: number;
    walk: number;
    units: string;
    hover: boolean;
}
export class Senses {
    darkvision: number;
    blindsight: number;
    tremorsense: number;
    truesight: number;
    units: string;
    special: string;
}
export class Death {
    success: number;
    failure: number;
}
export class Encumbrance {
    value: number;
    max: number;
    pct: number;
    encumbered: boolean;
}
export class Speed {
    value: string;
    special: string;
}
export class Details {
    biography: Biography;
    alignment: string;
    race: string;
    background: string;
    xp: Xp;
    appearance: string;
    trait: string;
    ideal: string;
    bond: string;
    flaw: string;
    level: number;
}
export class Biography {
    value: string;
    public: string;
}
export class Xp {
    value: number;
    min: number;
    max: number;
    pct: number;
}
export class Traits {
    size: string;
    di: Characteristics;
    dr: Characteristics;
    dv: Characteristics;
    ci: Characteristics;
    languages: Languages;
    weaponProf: Characteristics;
    armorProf: Characteristics;
    toolProf: Characteristics;
    senses: string;
}
export class Characteristics {
    value?: (null)[] | null;
    custom: string;
}
export class Languages {
    value?: (string)[] | null;
    custom: string;
}
export class Currency {
    pp: number;
    gp: number;
    ep: number;
    sp: number;
    cp: number;
}
export class SkillScores {
    acr: SkillScore;
    ani: SkillScore;
    arc: SkillScore;
    ath: SkillScore;
    dec: SkillScore;
    his: SkillScore;
    ins: SkillScore;
    itm: SkillScore;
    inv: SkillScore;
    med: SkillScore;
    nat: SkillScore;
    prc: SkillScore;
    prf: SkillScore;
    per: SkillScore;
    rel: SkillScore;
    slt: SkillScore;
    ste: SkillScore;
    sur: SkillScore;
}
export class SkillScore {
    value: number;
    ability: string;
    type: string;
    label: string;
    mod: number;
    bonus: number;
    prof: number;
    total: number;
    passive: number;
}
export class Spells {
    spell1: Spell;
    spell2: Spell;
    spell3: Spell;
    spell4: Spell;
    spell5: Spell;
    spell6: Spell;
    spell7: Spell;
    spell8: Spell;
    spell9: Spell;
    pact: Pact;
    spell0: Spell;
}
export class Spell {
    value: number;
    override?: null;
    max: number;
    dc: number;
}
export class Pact {
    value: number;
    override?: null;
    max: number;
    level: number;
}
export class Bonuses {
    mwak: Bonus;
    rwak: Bonus;
    msak: Bonus;
    rsak: Bonus;
    abilities: Abilities;
    spell: Spell;
}
export class Bonus {
    attack: string;
    damage: string;
}
export class Abilities {
    check: string;
    save: string;
    skill: string;
}
export class Resources {
    primary: PrimaryOrSecondary;
    secondary: PrimaryOrSecondary;
    tertiary: Tertiary;
}
export class PrimaryOrSecondary {
    value: number;
    max: number;
    sr: boolean;
    lr: boolean;
    label: string;
}
export class Tertiary {
    value?: null;
    max?: null;
    sr: boolean;
    lr: boolean;
    label: string;
}
export class ItemsEntity {
    _id: string;
    name: string;
    type: string;
    data: Data;
    sort: number;
    flags: Flags;
    img?: string | null;
    effects?: (EffectsEntity | null)[] | null;
}
export class Data {
    description: Description;
    source?: string | null;
    levels?: number | null;
    subclass?: string | null;
    hitDice?: string | null;
    hitDiceUsed?: number | null;
    skills?: SkillsData | null;
    spellcasting?: string | null;
    activation?: Activation | null;
    duration?: Duration | null;
    target?: Target | null;
    range?: Range | null;
    uses?: Uses | null;
    consume?: Consume | null;
    ability?: string | null;
    actionType?: string | null;
    attackBonus?: number | string;
    chatFlavor?: string | null;
    critical?: null;
    damage?: Damage | null;
    formula?: string | null;
    save?: Save | null;
    requirements?: string | null;
    recharge?: Recharge | null;
    quantity?: number | null;
    weight?: number | null;
    price?: number | null;
    attuned?: boolean | null;
    attunement?: number | null;
    equipped?: boolean | null;
    rarity?: string | null;
    identified?: boolean | null;
    armor?: Armor | null;
    hp?: HpData | null;
    weaponType?: string | null;
    properties?: Properties | null;
    proficient?: number | boolean;
    capacity?: Capacity | null;
    currency?: Currency | null;
    consumableType?: string | null;
    level?: number | null;
    school?: string | null;
    components?: Components | null;
    materials?: Materials | null;
    preparation?: Preparation | null;
    scaling?: Scaling | null;
}
export class Description {
    value: string;
    chat: string;
    unidentified: boolean | string;
}
export class SkillsData {
    number: number;
    choices?: (null)[] | null;
    value?: (string)[] | null;
}
export class Activation {
    type: string;
    cost: number;
    condition: string;
}
export class Duration {
    value?: number | null;
    units: string;
}
export class Target {
    value?: number | null;
    width?: null;
    units?: string | null;
    type: string;
}
export class Range {
    value?: number | null;
    long?: string | number;
    units: string;
}
export class Uses {
    value: number;
    max: number | string;
    per?: string | null;
    autoDestroy?: boolean | null;
}
export class Consume {
    type: string;
    target?: string | null;
    amount?: null;
}
export class Damage {
    parts?: ((string)[] | null)[] | null;
    versatile: string;
    value?: string | null;
}
export class Save {
    ability: string;
    dc?: null;
    scaling: string;
    value?: string | null;
}
export class Recharge {
    value?: null;
    charged: boolean;
}
export class Armor {
    value: number;
}
export class HpData {
    value: number;
    max: number;
    dt?: null;
    conditions: string;
}
export class Properties {
    amm?: boolean | null;
    fir?: boolean | null;
    fin?: boolean | null;
    hvy?: boolean | null;
    lgt?: boolean | null;
    lod?: boolean | null;
    rch?: boolean | null;
    rel?: boolean | null;
    spc?: boolean | null;
    thr?: boolean | null;
    two?: boolean | null;
    ver?: boolean | null;
    ret?: boolean | null;
    foc?: boolean | null;
}
export class Capacity {
    type: string;
    value: number;
    weightless: boolean;
}
export class Components {
    value: string;
    vocal: boolean;
    somatic: boolean;
    material: boolean;
    ritual: boolean;
    concentration: boolean;
}
export class Materials {
    value: string;
    consumed: boolean;
    cost: number;
    supply: number;
}
export class Preparation {
    mode: string;
    prepared: boolean;
}
export class Scaling {
    mode: string;
    formula: string;
}
export class Flags {
    vtta?: Vtta | null;
    betterRolls5e?: BetterRolls5e | null;
    magicitems?: Magicitems | null;
    core?: Core | null;
    exportSource?: ExportSource | null;
}
export class Vtta {
    dndbeyond: Dndbeyond;
}
export class Dndbeyond {
    requiredLevel?: number | null;
    displayOrder?: number | null;
    class?: string | null;
    type?: string | null;
    damage?: Damage | null;
    classFeatures?: (null)[] | null;
    lookup?: string | null;
    level?: number | null;
    spellLevel?: number | null;
    spellSlots?: SpellSlots | null;
    ability?: string | null;
    mod?: number | null;
    dc?: number | null;
    cantripBoost?: boolean | null;
    overrideDC?: boolean | null;
    tags?: (string)[] | null;
}
export class SpellSlots {
    spell0: Spell;
    spell1: Spell;
    spell2: Spell;
    spell3: Spell;
    spell4: Spell;
    spell5: Spell;
    spell6: Spell;
    spell7: Spell;
    spell8: Spell;
    spell9: Spell;
}
export class BetterRolls5e {
    quickDamage?: QuickDamage | null;
    quickVersatile: QuickVersatile;
}
export class QuickDamage {
    context: Context;
    value: ValueOrAltValue;
    altValue: ValueOrAltValue;
}
export class Context {
    0: string;
}
export class ValueOrAltValue {
    0: boolean;
}
export class QuickVersatile {
    altValue: boolean;
}
export class Magicitems {
    enabled: boolean;
}
export class Core {
    sourceId: string;
}
export class ExportSource {
    world: string;
    system: string;
    coreVersion: string;
    systemVersion: string;
}
export class EffectsEntity {
    _id: string;
    flags: FlagsOrProperties;
    changes?: (ChangesEntity)[] | null;
    disabled: boolean;
    duration: EffectDuration;
    icon: string;
    label: string;
    origin: string;
    tint: string;
    transfer: boolean;
}
export class FlagsOrProperties {
}
export class ChangesEntity {
    key: string;
    value: number;
    mode: number;
}
export class EffectDuration {
    startTime?: null;
    seconds?: null;
    rounds: number;
    turns?: null;
    startRound?: null;
    startTurn?: null;
}

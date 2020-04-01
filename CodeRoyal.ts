/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

type Owner = "ALLIED" | "ENNEMY" | null

type UnitType = "ARCHER" | "KNIGHT" | null

function doN(x: number, func: any) {
    if (x == 0) {
        return []
    } else {
        const nextState = doN(x - 1, func)
        return [...nextState, func()]
    }
}

function ownerDecoder(ownerCode: number): Owner {
    switch (ownerCode) {
        case 0:
            return "ALLIED"
        case 1:
            return "ENNEMY"
        default:
            return null
    }
}

function unitTypeDecoder(unitTypeCode: number): UnitType {
    switch (unitTypeCode) {
        case 1: 
            return "ARCHER"
        case 0:
            return "KNIGHT"
        default:
            return null 
    }
}

interface siteStaticData {
    siteId: number,
    x: number,
    y: number,
    radius: number,
}

interface siteTurnData {
    siteId: number,
    structureType: number,
    owner: Owner,
    trainLoading: number,
    unitType: UnitType,
}

interface unit {
    x: number,
    y: number,
    owner: Owner,
    unitType: UnitType,
    health: number,
}

function buildSiteStaticData(): siteStaticData {
    var inputs: string[] = readline().split(' ');
    return {
        siteId: parseInt(inputs[0]),
        x: parseInt(inputs[1]),
        y: parseInt(inputs[2]),
        radius: parseInt(inputs[3])
    }
}

function buildSiteTurnData(): siteTurnData {
    var inputs: string[] = readline().split(' ');
    return {
        siteId:  parseInt(inputs[0]),
        structureType: parseInt(inputs[3]), // -1 = No structure, 2 = Barracks
        owner: ownerDecoder(parseInt(inputs[4])), // -1 = No structure, 0 = Friendly, 1 = Enemy
        trainLoading:  parseInt(inputs[5]),
        unitType: unitTypeDecoder(parseInt(inputs[6])),
    }
}

function buildUnit(): unit {
    var inputs: string[] = readline().split(' ');
    return { 
        x: parseInt(inputs[0]),
        y: parseInt(inputs[1]),
        owner: ownerDecoder(parseInt(inputs[2])),
        unitType: unitTypeDecoder(parseInt(inputs[3])), // -1 = QUEEN, 0 = KNIGHT, 1 = ARCHER
        health: parseInt(inputs[4]),
    }
}

const numSites: number = parseInt(readline());
const siteStaticDataList: siteStaticData[] = doN(numSites, buildSiteStaticData)

// game loop
while (true) {
    var inputs: string[] = readline().split(' ');
    const gold: number = parseInt(inputs[0]);
    const touchedSite: number = parseInt(inputs[1]); // -1 if none
    const siteTurnDataList: siteTurnData[] = doN(numSites, buildSiteTurnData)
    const numUnits: number = parseInt(readline());
    const unitList: unit[] = doN(numUnits, buildUnit)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // First line: A valid queen action
    // Second line: A set of training instructions
    console.error("siteTurnDataList", siteTurnDataList)
    console.error("unitList", unitList)
    console.error("siteStaticDataList", siteStaticDataList)
    console.log("BUILD 10 BARRACKS-KNIGHT")
    console.log("TRAIN")
}

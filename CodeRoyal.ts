/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

type Owner = "BLUE" | "RED" | null

function doN(x: number, func: any) {
    if (x == 0) {
        return []
    } else {
        const nextState = doN(x - 1, func)
        return [func(), ...nextState]
    }
}

function ownerDecoder(ownerCode: number): Owner {
    if (ownerCode == 0) {
        return "BLUE"
    } else if (ownerCode == 1) {
        return "RED"
    } else {
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
    param1: number,
    param2: number,
}

interface unitPos {
    x: number,
    y: number,
    owner: Owner,
    unitType: number,
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
        param1:  parseInt(inputs[5]),
        param2: parseInt(inputs[6]),
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
    console.error("siteTurnDataList", siteTurnDataList)
    const numUnits: number = parseInt(readline());
    for (let i = 0; i < numUnits; i++) {
        var inputs: string[] = readline().split(' ');
        const x: number = parseInt(inputs[0]);
        const y: number = parseInt(inputs[1]);
        const owner: number = parseInt(inputs[2]);
        const unitType: number = parseInt(inputs[3]); // -1 = QUEEN, 0 = KNIGHT, 1 = ARCHER
        const health: number = parseInt(inputs[4]);
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // First line: A valid queen action
    // Second line: A set of training instructions
    console.error("siteStaticDataList", siteStaticDataList)
    console.log("BUILD 10 BARRACKS-KNIGHT")
    console.log("TRAIN")

// import * as firebaseHelper from "firebase-functions-helper";
// import * as admin from 'firebase-admin';
// const db = admin.firestore();

const route = "/tournament/v4"

interface CreateTournamentCodeQuery {
    count: number,
    tournamentId:string
}

interface CreateTournamentCodeBody {
    allowedSummonerIds:string[],
    mapType:MapType,
    metadata:string|null,
    pickType:PickType,
    spectatorType:SpectatorType,
    teamSize:number
}

enum SpectatorType {
    NONE,
    LOBBYONLY,
    ALL
}

enum PickType {
    BLIND_PICK,
    DRAFT_MODE,
    ALL_RANDOM,
    TOURNAMENT_DRAFT
}

enum MapType {
    SUMMONERS_RIFT,
    TWISTED_TREELINE,
    HOWLING_ABYSS
}

const init = (app:any) => {

// Add new contact
    app.post(`${route}/codes`, async (req:{query: CreateTournamentCodeQuery, body: CreateTournamentCodeBody}, res:any) => {
        try {
            const count:number = req.query.count
            const tournamentId:string = req.query.tournamentId

            const allowedSummonerIds:object = req.body.allowedSummonerIds
            const mapType:string = req.body.mapType
            const metadata:string = req.body.metadata
            const pickType:string = req.body.pickType
            const spectatorType:string = req.body.spectatorType
            const teamSize:number = req.body.teamSize

            if (count > 1000 || count < 0) {
                //throw errors
            }
            if (teamSize > 5 || teamSize < 0)

            // const newDoc = await firebaseHelper.firestoreHelper
            //     .createNewDocument(db, "bob", contact);
            res.status(201).send("S uccess");
        } catch (error) {
            res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
        }
    })
}

export default init
import {Alert} from "react-native";
import {getGameData} from "./getGameData";
import {getPlayerData} from "./getPlayerData";
import { urlProd } from "./../config/urlConfig";
import {serverUnreachableError} from "./constant";

const distributeCards = function (numberOfCardsPerPlayer, gameCode, playerCode,
                                  onChangeGameMessage, onChangecardLeft1, onChangecardLeft2,
                                  onChangecardLeft3, onChangecardLeft4, onChangenickName1, onChangenickName2, onChangenickName3, onChangenickName4, onChangesetsWon1, onChangesetsWon2,
                                  onChangesetsWon3, onChangesetsWon4, onChangesetsPointsWon1, onChangesetsPointsWon2, onChangesetsPointsWon3, onChangesetsPointsWon4,  onChangePlayerToMove,
                                  onChangeTrumpDeclaredBy, onChangeCanGameBeStarted, onChangeTrumpCard, onChangeCurrentSet, onChangeCurrentSet1,  onChangeCurrentSet2,  onChangeCurrentSet3, onChangeCurrentSet4,  setRefreshing,
                                  onChangeHeartData, onChangeSpadeData, onChangeDiamondData,
                                  onChangeClubData,onChangeRelativePlayerToMove) {
    console.log("numberOfCardsPerPlayer " + numberOfCardsPerPlayer);
    if (undefined === numberOfCardsPerPlayer || null === numberOfCardsPerPlayer || '' === numberOfCardsPerPlayer) {
        console.log("inside " + numberOfCardsPerPlayer);
        return;
    }
    if (numberOfCardsPerPlayer.length === 0) {
        return;
    }
    console.log(numberOfCardsPerPlayer);
    var isNumber = console.log(isNaN(numberOfCardsPerPlayer));
    if (isNumber) {
        Alert('Enter valid number');
        return;
    }

    fetch(urlProd+ '/demo/distributeCards?numberOfCardsPerPlayer='
        +numberOfCardsPerPlayer+'&gameCode='+gameCode, {
        method: 'POST',
    })
        .then(response => {
            ////console.log(response);
            return response.json();
        })
        .then(json => {
            //console.log(json);
            Alert.alert(json['message']);
            getGameData(gameCode, playerCode, onChangeGameMessage,
                onChangecardLeft1, onChangecardLeft2, onChangecardLeft3, onChangecardLeft4, onChangenickName1, onChangenickName2, onChangenickName3, onChangenickName4,
                onChangesetsWon1, onChangesetsWon2, onChangesetsWon3, onChangesetsWon4, onChangesetsPointsWon1, onChangesetsPointsWon2, onChangesetsPointsWon3, onChangesetsPointsWon4,
                onChangePlayerToMove, onChangeTrumpDeclaredBy, onChangeCanGameBeStarted, onChangeTrumpCard, onChangeCurrentSet, onChangeCurrentSet1,
                onChangeCurrentSet2,  onChangeCurrentSet3, onChangeCurrentSet4,  setRefreshing, onChangeHeartData, onChangeSpadeData, onChangeDiamondData, onChangeClubData,
                onChangeRelativePlayerToMove);
            getPlayerData(playerCode, onChangeGameMessage,
                onChangecardLeft1, onChangecardLeft2, onChangecardLeft3, onChangecardLeft4, onChangenickName1, onChangenickName2, onChangenickName3, onChangenickName4,
                onChangesetsWon1, onChangesetsWon2, onChangesetsWon3, onChangesetsWon4, onChangesetsPointsWon1, onChangesetsPointsWon2, onChangesetsPointsWon3, onChangesetsPointsWon4,
                onChangePlayerToMove, onChangeHeartData, onChangeSpadeData, onChangeDiamondData,
                onChangeClubData)
        })
        .catch(error => {
            console.log("distributeCards");
            Alert.alert(serverUnreachableError);
        });
}

export {distributeCards}

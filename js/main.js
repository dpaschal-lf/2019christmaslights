

var lights = {
    0: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'red',
            off: 'pink'
        },
        timer: null,
        transitionTime: 1000
    },
    1: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'blue',
            off: 'lightblue'
        },
        timer: null,
        transitionTime: 500
    },
    2: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'green',
            off: 'lightgreen'
        },
        timer: null,
        transitionTime: 1200
    }
}
$(document).ready( startApp );
function startApp(){
    createLights( lights );
    // $("#startSeriesButton").click( startLightToggle );
    initiateLightSequenceForAllLights( lights );
}

function createLights( allLightData ){
    for( var id in allLightData ){
        var element = createLightDomElement( allLightData[id].colors.off);
        allLightData[id].domElement = element;
        $("body").append(element);
    }
}

function createLightDomElement( currentColor ){
    var lightDomElement = $("<div>",{
        'class': 'christmasLight',
        'css': {
            'background-color': currentColor
        }
    });
    return lightDomElement;
}

function initiateLightSequenceForAllLights( lightList ){
    for( var id in lightList){
        var timerDuration = lightList[id].transitionTime;
        var timer = setInterval( alternateLight, timerDuration, id);
        lightList[id].timer = timer;

    }

}

function alternateLight( id ){
    var conversionObject = {
        'on':'off',
        'off':'on'
    }
    var targetLight = lights[id]
    targetLight.currentState = conversionObject[ targetLight.currentState ];
    var availableColors = targetLight.colors;
    var nextColor = availableColors[ targetLight.currentState ];
    targetLight.domElement.css('background-color', nextColor );
}
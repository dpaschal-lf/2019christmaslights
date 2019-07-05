

var lights = {
    0: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'red',
            off: 'pink'
        },
        timer: null,
        transitionTime: {
            on: 1000,
            off: 2000
        }
    },
    1: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'blue',
            off: 'lightblue'
        },
        timer: null,
        transitionTime: {
            on: 2000,
            off: 1000
        }
    },
    2: {
        domElement: null,
        currentState: 'off',
        colors: {
            on: 'green',
            off: 'lightgreen'
        },
        timer: null,
        transitionTime: {
            on: 1000,
            off: 250
        }
    }
}
$(document).ready( startApp );
function startApp(){
    createLights( lights );
    $("#startSeriesButton").click( function(){
        initiateLightSequenceForAllLights( lights );
    } );
    $("#stopSeriesButton").click( function(){
        stopLightSequenceForAllLights( lights );
    } );
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
        triggerTransitionWaitTime( lightList[id] );
    }
}
function triggerTransitionWaitTime( light ){
    var timerDuration = light.transitionTime[ light.currentState ];
    var timer = setTimeout( alternateLight, timerDuration, light);
    light.timer = timer;    
}

function alternateLight( light ){
    var conversionObject = {
        'on':'off',
        'off':'on'
    }
    light.currentState = conversionObject[ light.currentState ];
    var availableColors = light.colors;
    var nextColor = availableColors[ light.currentState ];
    light.domElement.css('background-color', nextColor );
    triggerTransitionWaitTime( light);
}
function stopLightSequenceForAllLights( lightList ){
    for( var id in lightList){
        stopLight( lightList[id] );
    }
}

function stopLight( light ){
    clearTimeout( light.timer );
    light.timer = null;
}
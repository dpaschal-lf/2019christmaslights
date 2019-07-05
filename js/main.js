

var lights = {
    0: {
        domElement: null,
        colors: {
            on: 'red',
            off: 'pink'
        }
    },
    1: {
        domElement: null,
        colors: {
            on: 'blue',
            off: 'lightblue'
        }
    },
    2: {
        domElement: null,
        colors: {
            on: 'green',
            off: 'lightgreen'
        }
    }
}
$(document).ready( startApp );
function startApp(){
    createLights( lights );
    $("#startSeriesButton").click( startLightToggle );
}

function createLights( allLightData ){
    for( var id in allLightData ){
        var element = createLightDomElement( allLightData[id].colors.off);
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

function startLightToggle(){
    var targetLight = 0;

}


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
}

function createLights( AllLightData ){
    for( var id in AllLightData ){
        var element = createLightDomElement( AllLightData[id].colors.off);
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
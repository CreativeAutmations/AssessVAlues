var currentStage = 0;
var stageConfig = [
    {"cond" : "min" , "val" : 24 },
    {"cond" : "exact" , "val" : 24},
    {"cond" : "exact" , "val" : 12},
    {"cond" : "exact" , "val" : 6}
];

var ValueSet = {
    "toselect" : stageConfig[currentStage].val,
    "values" : [
        {"groupname" : "group1",
            "valuelist" : [{"vname": "first"}, {"vname": "second"}, {"vname": "third"}]
        },

        {"groupname" : "group2",
            "valuelist" : [{"vname": "first 2"}, {"vname": "second 2"}, {"vname": "third 2"}]
        },
        
        {"groupname" : "group4",
            "valuelist" : [{"vname": "first 4"}, {"vname": "second 4"}, {"vname": "third 4"}]
        },

        {"groupname" : "group4",
            "valuelist" : [{"vname": "first 4"}, {"vname": "second 4"}, {"vname": "third 4"}]
        },

        {"groupname" : "group4",
            "valuelist" : [{"vname": "first 4"}, {"vname": "second 4"}, {"vname": "third 4"}]
        },

        {"groupname" : "group4",
            "valuelist" : [{"vname": "first 4"}, {"vname": "second 4"}, {"vname": "third 4"}]
        },

        {"groupname" : "group4",
            "valuelist" : [{"vname": "first 4"}, {"vname": "second 4"}, {"vname": "third 4"}]
        },

        {"groupname" : "group5",
            "valuelist" : [{"vname": "first 5"}, {"vname": "second 5"}, {"vname": "third 5"}]
        },

        {"groupname" : "group3",
            "valuelist" : [{"vname": "first 3"}, {"vname": "second 3"}, {"vname": "third 3"}]
        }
    ]
}; 


var selectedValues = [[],[],[],[],[],[]];

function ShowActivity()
{
    $("#explanation").hide();
    $("#element_container").hide();
    var elements_html = Mustache.render(values_template, ValueSet);
    document.getElementById("element_container").innerHTML = elements_html;
    $("#element_container").show();

    var maxheight = 0;
    $( ".mybox" ).each(function( index ) {
    if ( maxheight < $( this ).height() )
        {
            maxheight = $( this ).height() ;
        }
    });
    
    $( ".mybox" ).height(maxheight );
    manageActionButtons();
}

function canAddMore()
{
    if ( stageConfig[currentStage].val > selectedValues[currentStage].length )
        return true;
    if ( stageConfig[currentStage].cond == "min" )
        return true;
    
    return false; 
}

function Next()
{
    // create the structure to populate the template
    // populate the template
    // replace the values

    $("#element_container").hide();

    if ( (currentStage+1) <  stageConfig.length )
    {
        var elementdata = {"toselect": stageConfig[currentStage+1].val , "valuelist": selectedValues[currentStage]} 
        var elements_html = Mustache.render(values_template_1, elementdata);
    }
    else
    { 
        var elementdata = {"toselect": 0 , "valuelist": selectedValues[currentStage]} 
        var elements_html = Mustache.render(result_template, elementdata);
    }

    document.getElementById("element_container").innerHTML = elements_html;
    $("#element_container").show();
    currentStage++;
    manageActionButtons();
}
function Previous()
{
    if ( currentStage == stageConfig.length )
        currentStage--;

    currentStage--;
    var elementdata = {"valuelist": selectedValues[currentStage]} 
    $("#element_container").hide();
    var elements_html = Mustache.render(values_template_1, elementdata);
    document.getElementById("element_container").innerHTML = elements_html;
    $("#element_container").show();
    manageActionButtons();
}
function manageActionButtons()
{

    if ( currentStage >= stageConfig.length )
        $("#next_btn").hide();
    else if ( stageConfig[currentStage].val > selectedValues[currentStage].length )
        $("#next_btn").hide();
    else
        $("#next_btn").show();
}

function SelectValue(e, gvalue)
{
    console.log("test");
    arr = selectedValues[currentStage];
    colornow = e.target.parentNode.style.backgroundColor ;
    if ( colornow == "green")
    {

        for( var i = 0; i < arr.length ; i++){ 
                                   
            if ( arr[i].vname  === gvalue ) { 
                arr.splice(i, 1); 
                i--; 
            }
        }

        e.target.parentNode.style.backgroundColor = "lightgrey";
    }
    else if (canAddMore()){
        e.target.parentNode.style.backgroundColor = "green";
        arr.push({"vname":gvalue});
    }

    manageActionButtons();
}


function ShowResults()
{
    var RED = ["A", "H" , "K" , "N" , "S"];
    var GREEN = ["D", "E" , "L" , "P" , "Q"];
    var BLUE = ["C", "F" , "O" , "J" , "R"];
    var YELLOW = ["B", "G" , "I" , "M" , "T"];

    var color_groups = [];
    color_groups.push( {"code": "red" , "values" : RED});
    color_groups.push( {"code": "green" , "values" : GREEN});
    color_groups.push( {"code": "blue" , "values" : BLUE});
    color_groups.push( {"code": "yellow" , "values" : YELLOW});

    var result_data = {};
    result_data.red = 0;
    result_data.green = 0;
    result_data.blue = 0;
    result_data.yellow = 0;

    var i;
    var j;
    for (i = 0; i < color_groups.length; i++) 
    {
        code = color_groups[i].code;
        for (j = 0; j < color_groups[i].values.length; j++)
        {
            if ( value < 1 )
            {
               // alert("Please provide your assessment for all sections");
               $("#alertcontainer").html(`<div class="alert alert-danger alert-dismissible show" role="alert">
               Please provide your assessment for all sections
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button></div>`);

                return;
            } 
            var boxid  = color_groups[i].values[j];
            var value =  $("#" + boxid).val();
            result_data[code] += parseInt(value);
        } 
    }

    var results_html = Mustache.render(result_template, result_data);

    $("#explanation").show();
    document.getElementById("results").innerHTML = results_html;
    document.getElementById("element_container").innerHTML = "";
}

var currentStage = 0;
var stageConfig = [
    {"cond" : "min" , "val" : 24 },
    {"cond" : "exact" , "val" : 24},
    {"cond" : "exact" , "val" : 12},
    {"cond" : "exact" , "val" : 6}
];

var ValueSet = {};
ValueSet.toselect = stageConfig[currentStage].val;
ValueSet.values = [];

var vobj = {};
vobj.groupname = "family 1";
vobj.valuelist = [];
vobj.valuelist.push({"vname":"Integrity"});
vobj.valuelist.push({"vname":"Accountability"});
vobj.valuelist.push({"vname":"Candor"});
vobj.valuelist.push({"vname":"Commitment"});
vobj.valuelist.push({"vname":"Dependability"});
vobj.valuelist.push({"vname":"Dignity"});
vobj.valuelist.push({"vname":"Honesty"});
vobj.valuelist.push({"vname":"Honor"});
vobj.valuelist.push({"vname":"Responsibility"});
vobj.valuelist.push({"vname":"Sincerity"});
vobj.valuelist.push({"vname":"Transparency"});
vobj.valuelist.push({"vname":"Trust"});
vobj.valuelist.push({"vname":"Trustworthy"});
vobj.valuelist.push({"vname":"Truth"});
vobj.valuelist.push({"vname":"Feelings"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 2";
vobj.valuelist = [];
vobj.valuelist.push({"vname":"Acceptance"});
vobj.valuelist.push({"vname":"Comfort"});
vobj.valuelist.push({"vname":"Compassion"});
vobj.valuelist.push({"vname":"Contentment"});
vobj.valuelist.push({"vname":"Empathy"});
vobj.valuelist.push({"vname":"Grace"});
vobj.valuelist.push({"vname":"Gratitude"});
vobj.valuelist.push({"vname":"Happiness"});
vobj.valuelist.push({"vname":"Hope"});
vobj.valuelist.push({"vname":"Inspiring"});
vobj.valuelist.push({"vname":"Irreverent"});
vobj.valuelist.push({"vname":"Joy"});
vobj.valuelist.push({"vname":"Kindness"});
vobj.valuelist.push({"vname":"Love"});
vobj.valuelist.push({"vname":"Optimism"});
vobj.valuelist.push({"vname":"Passion"});
vobj.valuelist.push({"vname":"Peace"});
vobj.valuelist.push({"vname":"Poise"});
vobj.valuelist.push({"vname":"Respect"});
vobj.valuelist.push({"vname":"Reverence"});
vobj.valuelist.push({"vname":"Satisfaction"});
vobj.valuelist.push({"vname":"Serenity"});
vobj.valuelist.push({"vname":"Thankful"});
vobj.valuelist.push({"vname":"Tranquility"});
vobj.valuelist.push({"vname":"Welcoming"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 3";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Adaptability"});
vobj.valuelist.push({"vname":"Altruism"});
vobj.valuelist.push({"vname":"Balance"});
vobj.valuelist.push({"vname":"Charity"});
vobj.valuelist.push({"vname":"Communication"});
vobj.valuelist.push({"vname":"Community"});
vobj.valuelist.push({"vname":"Connection"});
vobj.valuelist.push({"vname":"Consciousness"});
vobj.valuelist.push({"vname":"Contribution"});
vobj.valuelist.push({"vname":"Cooperation"});
vobj.valuelist.push({"vname":"Courtesy"});
vobj.valuelist.push({"vname":"Devotion"});
vobj.valuelist.push({"vname":"Equality"});
vobj.valuelist.push({"vname":"Ethical"});
vobj.valuelist.push({"vname":"Fairness"});
vobj.valuelist.push({"vname":"Family"});
vobj.valuelist.push({"vname":"Fidelity"});
vobj.valuelist.push({"vname":"Friendship"});
vobj.valuelist.push({"vname":"Generosity"});
vobj.valuelist.push({"vname":"Giving"});
vobj.valuelist.push({"vname":"Goodness"});
vobj.valuelist.push({"vname":"Harmony"});
vobj.valuelist.push({"vname":"Humility"});
vobj.valuelist.push({"vname":"Loyalty"});
vobj.valuelist.push({"vname":"Maturity"});
vobj.valuelist.push({"vname":"Meaning"});
vobj.valuelist.push({"vname":"Selfless"});
vobj.valuelist.push({"vname":"Sensitivity"});
vobj.valuelist.push({"vname":"Service"});
vobj.valuelist.push({"vname":"Sharing"});
vobj.valuelist.push({"vname":"Spirit"});
vobj.valuelist.push({"vname":"Stewardship"});
vobj.valuelist.push({"vname":"Support"});
vobj.valuelist.push({"vname":"Sustainability"});
vobj.valuelist.push({"vname":"Teamwork"});
vobj.valuelist.push({"vname":"Tolerance"});
vobj.valuelist.push({"vname":"Unity"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 4";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Achievement"});
vobj.valuelist.push({"vname":"Accomplishment"});
vobj.valuelist.push({"vname":"Capable"});
vobj.valuelist.push({"vname":"Challenge"});
vobj.valuelist.push({"vname":"Challenge"});
vobj.valuelist.push({"vname":"Competence"});
vobj.valuelist.push({"vname":"Credibility"});
vobj.valuelist.push({"vname":"Determination"});
vobj.valuelist.push({"vname":"Development"});
vobj.valuelist.push({"vname":"Drive"});
vobj.valuelist.push({"vname":"Effectiveness"});
vobj.valuelist.push({"vname":"Empower"});
vobj.valuelist.push({"vname":"Endurance"});
vobj.valuelist.push({"vname":"Excellence"});
vobj.valuelist.push({"vname":"Famous"});
vobj.valuelist.push({"vname":"Greatness"});
vobj.valuelist.push({"vname":"Growth"});
vobj.valuelist.push({"vname":"Hard work"});
vobj.valuelist.push({"vname":"Improvement"});
vobj.valuelist.push({"vname":"Influence"});
vobj.valuelist.push({"vname":"Intensity"});
vobj.valuelist.push({"vname":"Leadership"});
vobj.valuelist.push({"vname":"Mastery"});
vobj.valuelist.push({"vname":"Motivation"});
vobj.valuelist.push({"vname":"Performance"});
vobj.valuelist.push({"vname":"Persistence"});
vobj.valuelist.push({"vname":"Potential"});
vobj.valuelist.push({"vname":"Power"});
vobj.valuelist.push({"vname":"Productivity"});
vobj.valuelist.push({"vname":"Professionalism"});
vobj.valuelist.push({"vname":"Prosperity"});
vobj.valuelist.push({"vname":"Recognition"});
vobj.valuelist.push({"vname":"Results-oriented"});
vobj.valuelist.push({"vname":"Risk"});
vobj.valuelist.push({"vname":"Significance"});
vobj.valuelist.push({"vname":"Skill"});
vobj.valuelist.push({"vname":"Skillfulness"});
vobj.valuelist.push({"vname":"Status"});
vobj.valuelist.push({"vname":"Success"});
vobj.valuelist.push({"vname":"Talent"});
vobj.valuelist.push({"vname":"Victory"});
vobj.valuelist.push({"vname":"Wealth"});
vobj.valuelist.push({"vname":"Winning"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 5";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Creativity"});
vobj.valuelist.push({"vname":"Creation"});
vobj.valuelist.push({"vname":"Curiosity"});
vobj.valuelist.push({"vname":"Discovery"});
vobj.valuelist.push({"vname":"Exploration"});
vobj.valuelist.push({"vname":"Expressive"});
vobj.valuelist.push({"vname":"Imagination"});
vobj.valuelist.push({"vname":"Innovation"});
vobj.valuelist.push({"vname":"Inquisitive"});
vobj.valuelist.push({"vname":"Intuitive"});
vobj.valuelist.push({"vname":"Openness"});
vobj.valuelist.push({"vname":"Originality"});
vobj.valuelist.push({"vname":"Uniqueness"});
vobj.valuelist.push({"vname":"Wonder"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 6";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Enjoyment"});
vobj.valuelist.push({"vname":"Amusement"});
vobj.valuelist.push({"vname":"Enthusiasm"});
vobj.valuelist.push({"vname":"Experience"});
vobj.valuelist.push({"vname":"Fun"});
vobj.valuelist.push({"vname":"Humor"});
vobj.valuelist.push({"vname":"Playfulness"});
vobj.valuelist.push({"vname":"Recreation"});
vobj.valuelist.push({"vname":"Spontaneous"});
vobj.valuelist.push({"vname":"Surprise"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 7";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Presence"});
vobj.valuelist.push({"vname":"Alertness"});
vobj.valuelist.push({"vname":"Attentive"});
vobj.valuelist.push({"vname":"Awareness"});
vobj.valuelist.push({"vname":"Beauty"});
vobj.valuelist.push({"vname":"Calm"});
vobj.valuelist.push({"vname":"Clear"});
vobj.valuelist.push({"vname":"Concentration"});
vobj.valuelist.push({"vname":"Focus"});
vobj.valuelist.push({"vname":"Silence"});
vobj.valuelist.push({"vname":"Simplicity"});
vobj.valuelist.push({"vname":"Solitude"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 8";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Intelligence"});
vobj.valuelist.push({"vname":"Brilliance"});
vobj.valuelist.push({"vname":"Clever"});
vobj.valuelist.push({"vname":"Common sense"});
vobj.valuelist.push({"vname":"Decisiveness"});
vobj.valuelist.push({"vname":"Foresight"});
vobj.valuelist.push({"vname":"Genius"});
vobj.valuelist.push({"vname":"Insightful"});
vobj.valuelist.push({"vname":"Knowledge"});
vobj.valuelist.push({"vname":"Learning"});
vobj.valuelist.push({"vname":"Logic"});
vobj.valuelist.push({"vname":"Openness"});
vobj.valuelist.push({"vname":"Realistic"});
vobj.valuelist.push({"vname":"Reason"});
vobj.valuelist.push({"vname":"Reflective"});
vobj.valuelist.push({"vname":"Smart"});
vobj.valuelist.push({"vname":"Thoughtful"});
vobj.valuelist.push({"vname":"Understanding"});
vobj.valuelist.push({"vname":"Vision"});
vobj.valuelist.push({"vname":"Wisdom"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 9";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Strength"});
vobj.valuelist.push({"vname":"Ambition"});
vobj.valuelist.push({"vname":"Assertiveness"});
vobj.valuelist.push({"vname":"Boldness"});
vobj.valuelist.push({"vname":"Confidence"});
vobj.valuelist.push({"vname":"Dedication"});
vobj.valuelist.push({"vname":"Discipline"});
vobj.valuelist.push({"vname":"Ferocious"});
vobj.valuelist.push({"vname":"Fortitude"});
vobj.valuelist.push({"vname":"Persistence"});
vobj.valuelist.push({"vname":"Power"});
vobj.valuelist.push({"vname":"Restraint"});
vobj.valuelist.push({"vname":"Rigor"});
vobj.valuelist.push({"vname":"Self-reliance"});
vobj.valuelist.push({"vname":"Temperance"});
vobj.valuelist.push({"vname":"Toughness"});
vobj.valuelist.push({"vname":"Vigor"});
vobj.valuelist.push({"vname":"Will"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 10";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Freedom"});
vobj.valuelist.push({"vname":"Independence"});
vobj.valuelist.push({"vname":"Individuality"});
vobj.valuelist.push({"vname":"Liberty"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 11";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Courage"});
vobj.valuelist.push({"vname":"Bravery"});
vobj.valuelist.push({"vname":"Conviction"});
vobj.valuelist.push({"vname":"Fearless"});
vobj.valuelist.push({"vname":"Valor"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 12";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Order"});
vobj.valuelist.push({"vname":"Accuracy"});
vobj.valuelist.push({"vname":"Careful"});
vobj.valuelist.push({"vname":"Certainty"});
vobj.valuelist.push({"vname":"Cleanliness"});
vobj.valuelist.push({"vname":"Consistency"});
vobj.valuelist.push({"vname":"Control"});
vobj.valuelist.push({"vname":"Decisive"});
vobj.valuelist.push({"vname":"Economy"});
vobj.valuelist.push({"vname":"Justice"});
vobj.valuelist.push({"vname":"Lawful"});
vobj.valuelist.push({"vname":"Moderation"});
vobj.valuelist.push({"vname":"Organization"});
vobj.valuelist.push({"vname":"Security"});
vobj.valuelist.push({"vname":"Stability"});
vobj.valuelist.push({"vname":"Structure"});
vobj.valuelist.push({"vname":"Thorough"});
vobj.valuelist.push({"vname":"Timeliness"});
ValueSet.values.push(vobj);

var vobj = {};
vobj.groupname = "family 13";
vobj.valuelist = [];

vobj.valuelist.push({"vname":"Health"});
vobj.valuelist.push({"vname":"Energy"});
vobj.valuelist.push({"vname":"Vitality"});
ValueSet.values.push(vobj);


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
    window.scrollTo(0,0);
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
    window.scrollTo(0,0);
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

    $("#select_status").text(arr.length + " values selected")

    manageActionButtons();
}


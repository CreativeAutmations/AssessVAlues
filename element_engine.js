
values_template_1 = 
`
<div class="row">
<div class="instructions col-md-12">
<p>
<h1>Instructions:</h1>													
<h2>Select {{toselect}} values</h2>
<br> 																		
</p>
</div>
</div>

    <br>
    <div class="row">
        {{#valuelist}}
        <div class="mybox col-md-3">
        <h3 onclick="SelectValue( event, '{{vname}}')"> {{vname}}</h3>
        </div>
        {{/valuelist}}
    </div>

    <div class="row">
    <div class="col-md-12">
    <br>
    <h3 id="select_status" style="color:blue; float: right;"></h3>
    <br>
    </div>
    </div>

    <div class="row">
    <div class="col-md-12">
    <button id="next_btn" onclick="Next()" style="float: right;">Next</button>
    </div>
    </div>


    `;

var values_template = 
`
<div class="row">
<div class="instructions col-md-12">
<p>
<h1>Instructions:</h1>
<h2>Select minimum {{toselect}} values</h2>
</p>
</div>
</div>

{{#values}}
    <br>
    <div class="row">
        {{#valuelist}}
        <div class="mybox col-md-3">
        <h3 onclick="SelectValue( event, '{{vname}}')"> {{vname}}</h3>
        </div>
        {{/valuelist}}
    </div>
    {{/values}}

    <div class="row">
    <div class="col-md-12">
    <br>
    <h3 id="select_status" style="color:blue; float: right;"></h3>
    <br>
    </div>
    </div>

    <div class="row">
    <div class="col-md-12">
    <button id="next_btn" onclick="Next()" style="float: right;">Next</button>
    </div>
    </div>


    `;



var result_template =
`
<div class="row">
<div class="instructions col-md-12">
<p>
<h1>Congratulations:</h1>																
<h2>You have identified your core values</h2>
<br> 																		
</p>
</div>
</div>

    <br>
    <div class="row">
        {{#valuelist}}
        <div class="mybox col-md-3">
        <h3 onclick="SelectValue( event, '{{vname}}')"> {{vname}}</h3>
        </div>
        {{/valuelist}}
    </div>



    `;

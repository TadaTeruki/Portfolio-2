

var tag_color_format = function(i){
    return "rgb("+(255-i).toString()+","+(255-i).toString()+","+(255-i).toString()+")";
}

const tag_color_max = 20;
var no_text_generated = true;

var tarsize = 0;
var target = new Array(10);
var base_color = "";
var inner_text;

var call = function(tag){
    
    tag.style.backgroundColor = tag_color_format(tag.color);
    tag.color *= 0.9;
    if(tag.color > 1) setTimeout(function(){
        if(tag.color != tag_color_max)call(tag);
    },30);
    else tag.color = 0;

};

var mouseover_share = function(){
    this.color = tag_color_max;
    this.style.backgroundColor = tag_color_format(tag_color_max);
}

var mouseout_share = function(){
    call(this);
}

var toggle_inner_text = function(tag, src){
    inner_text.innerHTML = "<object style=\"width:100%;height:100%\" data=\""+src+".html\"></object>";
    for(var i=0; i < tarsize; i++){
        target[i].style.color = base_color;
    }
    tag.style.color = "rgb(150,150,150)";
}

var click_share = function(){
    toggle_inner_text(this, this.src);
    
}

var gentoggle = function(src){

    target[tarsize] = document.getElementById("tag_"+src);

    if(no_text_generated){
        base_color = target[tarsize].style.color;
        toggle_inner_text(target[tarsize],src);
        no_text_generated = false;
    }
    
    target[tarsize].src = src;
    target[tarsize].color = 0;
    target[tarsize].onmouseover = mouseover_share;
    target[tarsize].onmouseout = mouseout_share;
    target[tarsize].onclick = click_share;

    tarsize++;
}



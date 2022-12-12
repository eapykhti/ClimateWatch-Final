const flagged_words = ['God is in control of the climate',
'do not believe the climate is actually changing',
'the increase in CO2 concentration in atmosphere will result in cooling rather than warming',
'climate change is natural and normal',
'Many scientists disagree that human activity is primarily responsible for global climate change',
'climatologists challenge the idea that humans are primarily responsible for climate change',
'the 20th century rise in global temperature is within the bounds of natural temperature fluctuations over the past 3,000 years',
'Human-produced CO2 is re-absorbed by oceans, forests, and other “carbon sinks,” negating any climate changes',
'Global warming and cooling are primarily caused by fluctuations in the sun’s heat',
'climate change fears are based on predictions and inadequate or flawed computer climate models',
'Deep ocean currents, not human activity, are a primary driver of natural climate warming and cooling cycles',
'scientists reject global warming',
'limits on greenhouse gases would harm the environment',
"There is no convincing scientific evidence that human release of carbon dioxide, methane, or other greenhouse gases is causing or will, in the foreseeable future, cause catastrophic heating of the Earth's atmosphere",
'no significant climate warming is taking place at all',
'the warming trend measured by weather stations is an artefact due to urbanisation around those stations',
'global warming is harmless',
'CO2 is not actually increasing',
'the science on climate change is inconclusive',
'Most scientists do not believe human greenhouse gas emissions are a proven threat to the environment or to human well-being',
'the science community is deeply divided and unsure about the causes and consequences of climate change',
'there is nothing we can do to prevent climate change',
'rising atmospheric carbon dioxide levels have will continue to help plants thrive',
'The claim of “scientific consensus” on the causes and consequences of climate change is without merit',
'the greenhouse gas-induced global climate signal is so small as to be embedded within the background variability of the natural climate system',
'the data does not support claims that extreme weather events are becoming more severe or more frequent',
'the environment will be better than the past',
'climate change would result in a slight or significant improvement in the lives of people living today',
'The CO2-driven crisis is a fable',
'computer models that predict temperatures and weather events that bear zero resemblance to what is actually happening',
'climate change is not happening',
'Climate change is not happening',
'As the atmosphere’s CO2 concentration continues to rise, plants will likely respond by growing more robustly',
'there is extensive evidence of scientific disagreement about many of the most important issues that must be resolved before the hypothesis of dangerous man-made global warming can be validated',
'real experts like Joe D’Aleo, Joe Bastardi, Stanley Goldenberg, Roger Pielke, Jr.',
'natural disasters and nonoptimal temperatures claim fewer lives than ever before',
'As the Earth has modestly warmed, the number of people succumbing to heat-related deaths has barely increased',
'human life is improving as the Earth warms',
'carbon dioxide to the atmosphere by humans has helped dramatically reduce hunger',
'Follow the evidence. It should alleviate any fears that a climate apocalypse',
'not even a city, has been “wiped off the face of the Earth by rising sea levels.”',
'there is no direct connection between human greenhouse gas emissions and Greenland’s ice mass',
'nor satellite data indicate the rate of sea level rise over the past 200 years has been accelerating',
'96 Percent of NOAA Surface Temperature Station Data Is Corrupted',
'it is impossible to use any statistical methods to derive an accurate climate trend for the U.S.',
'readings showing rapid warming are pure junk',
'most of the reported surface warming is instrumental error due to local heat contamination',
'climate change will not bring on an end of the world as we know it, or even a long-term net decline for human civilization',
'capacity to adapt to rising temperatures and extreme weather events rose significantly',
'Climate change is only one among many, and as Nordhaus and Smil point out, it is probably not the most pressing.',
'the outlook good from an environmental and climate perspective',
'hurricane frequency and intensity are not increasing',
'human-induced climatic changes are negligible with respect to global forces of nature',
'climate change is not man made',
'Climate change is not man made',
'climate change is not man-made',
'Climate change is not man-made',
'climate change will not change anything',
'Climate change will not change anything',
'Climate change will have no harmful impacts',
'climate change will have no harmful impacts',
'Scientists aren’t in agreement about climate change',
'scientits aren’t in agreement about climate change'];
var num_flags;

//This function gathers all the text from the site and places it in a variable
//It is not currently in use
function searchText(words){
    const bodyText = document.body.innerText;
    for (let i=0; i<words.length; i++){

    }
    console.log(bodyText);
}

//Used to keep track of the amount of times a flagged word was found.
function replacementNum(r){
    num_flags++;
    return r;
}

//selects all the aspects of the page that can contain text
const text = document.querySelectorAll('h2, h3, h4, h5, p, li, td, caption, span, a');

//this function goes through and highlights all instances of our flagged words
function flagMisinfo(text, words, oAndE, manMade, impacts, science, highlightColor){
    num_flags = 0;
    for(let i=0; i<text.length; i++){
        for(let j=0; j<words.length; j++){
            if(text[i].innerText.includes(words[j])){
                text[i].innerHTML = text[i].innerHTML.replace(words[j],replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip'>"+words[j]+"</span>"));
            }
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('not real') && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('not happening') && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('not man-made') && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('not man made') && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('no harm') && impacts){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip impacts'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('no harmful') && impacts){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip impacts'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('no harmful impact') && impacts){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip impacts'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes('no impact') && impacts){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip impacts'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("isn't real") && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("Scientists do not agree") && science){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip science'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("scientists do not agree") && science){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip science'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("Scientists don't agree") && science){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip science'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("scientists don't agree") && science){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip science'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("political fiction") && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerHTML,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerHTML+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("humans cause") && text[i].innerText.includes("not true") && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("humans cause") && text[i].innerText.includes("false") && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if(text[i].innerText.includes('no climate emergency') && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("human responsibility") && text[i].innerText.includes("exaggerated") && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("human responsibility") && text[i].innerText.includes("not realistic") && manMade){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip manMade'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("exaggerated") && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
        if((text[i].innerText.includes('Climate change') || text[i].innerText.includes('climate change')) && text[i].innerText.includes("not realistic") && oAndE){
            text[i].innerHTML = text[i].innerHTML.replace(text[i].innerText,replacementNum("<span style='background-color:"+highlightColor+"' class='climateWatch_tooltip oAndE'>"+text[i].innerText+"</span>"));
        }
    }
    var flaggedElements = document.getElementsByClassName('climateWatch_tooltip');
    for(let i=0; i<flaggedElements.length; i++){
        let span=document.createElement("span"); 
        span.classList.add('climateWatch_tooltipText');
        var ttheader=document.createElement("h4");
        ttheader.innerText="Climate Watch";
        span.appendChild(ttheader);
        var ttText=document.createElement("p");
        ttText.classList.add('climateWatch_tooltipTextMessage'+i);
        var falseClaim = "climate change and its impacts are not real"
        var correctLink = "https://climate.nasa.gov/"
        if (flaggedElements[i].classList.contains("oAndE")) {
            falseClaim = "climate change is not occuring";
            correctLink = "https://climatefeedback.org/claimreview/warming-earths-surface-oceans-continues-apace-contrary-to-claims-daily-sceptic-chris-morrison/";

        } else if (flaggedElements[i].classList.contains("impacts")) {
            falseClaim = "the impacts of climate change will not cause significant harm";
            correctLink = "https://climatefeedback.org/claimreview/the-epoch-times-prints-range-of-inaccurate-misleading-claims-climate-changes-impacts-causes-patrick-moore/";

        } else if (flaggedElements[i].classList.contains("science")) {
            falseClaim = "scientists are not in concensus about climate change";
            correctLink = "https://climatefeedback.org/evaluation/article-by-michael-shellenberger-mixes-accurate-and-inaccurate-claims-in-support-of-a-misleading-and-overly-simplistic-argumentation-about-climate-change/";

        } else if (flaggedElements[i].classList.contains("manmade")) {
            falseClaim = "climate change is not manmade";
            correctLink = "https://climatefeedback.org/claimreview/letter-there-is-no-climate-emergency-repeats-inaccurate-claims-about-climate-science-daily-sceptic-toby-young/";

        }
        ttText.innerHTML="We think this text could potentially be climate misinformation. Particularly, it seems to be making claims that " + falseClaim +". Here is a more reliable source: ";
        span.appendChild(ttText);
        var linkButton=document.createElement("button")
        linkButton.innerText="Click here for correct info (external)"
        linkButton.classList.add('climateWatch_tooltipTextLB'+i)
        linkButton.classList.add('blockButton')
        linkButton.classList.add(correctLink) //store the right link
        linkButton.onclick = function(){
            let ttP = document.querySelector('p.climateWatch_tooltipTextMessage'+i);
            let lb = document.querySelector('button.climateWatch_tooltipTextLB'+i);
            let b1 = document.querySelector('button.climateWatch_tooltipTextB1'+i);
            let b2 = document.querySelector('button.climateWatch_tooltipTextB2'+i);
            ttP.innerText = 'Is this article relevant to the flagged misinformation?';
            b1.style.opacity = 1;
            b2.style.opacity = 1;
            lb.style.visibility = 'hidden';
            window.open(this.classList[this.classList.length - 1], '_blank'); //access the right link
        }
        span.appendChild(linkButton)
        var button1=document.createElement("button");
        button1.innerText="Yes";
        button1.classList.add('climateWatch_tooltipTextB1'+i);
        button1.onclick = function(){
            let ttP = document.querySelector('p.climateWatch_tooltipTextMessage'+i);
            let b1 = document.querySelector('button.climateWatch_tooltipTextB1'+i);
            let b2 = document.querySelector('button.climateWatch_tooltipTextB2'+i);
            b1.style.opacity = 0;
            b2.style.opacity = 0;
            ttP.innerText = 'Thank you for your feedback';
        }
        button1.style.opacity = 0;
        span.appendChild(button1);
        var button2=document.createElement("button");
        button2.innerText="No";
        button2.classList.add('climateWatch_tooltipTextB2'+i);
        button2.onclick = function(){
            let ttP = document.querySelector('p.climateWatch_tooltipTextMessage'+i);
            let b1 = document.querySelector('button.climateWatch_tooltipTextB1'+i);
            let b2 = document.querySelector('button.climateWatch_tooltipTextB2'+i);
            b1.style.visibility = 'hidden';
            b2.style.visibility = 'hidden';
            ttP.innerHTML = 'Thank you for your feedback! If you want to, <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWNWyC1mBsotg548AcznJJy6PaecI-aecJAXvIztlHLhb7wg/viewform" target="_blank">click here to submit a report.</a>';
        }
        button2.style.opacity = 0;
        span.appendChild(button2);
        flaggedElements[i].appendChild(span);
    }
    console.log(num_flags);
}

//flagMisinfo(text,flagged_words);

chrome.storage.sync.get().then((result) => {
    if(result.highlightColor.includes('red')){
        var highlightColor = 'rgba(235, 64, 52, 0.3)';
    }else if(result.highlightColor.includes('blue')){
        var highlightColor = 'rgba(52, 107, 235, 0.3)';
    }else if(result.highlightColor.includes('green')){
        var highlightColor = 'rgba(52, 235, 70, 0.3)';
    }else{
        var highlightColor = 'rgba(246, 252, 68, 0.3)';
    }
    flagMisinfo(text,flagged_words,result.oAndE,result.manMade,result.impacts,result.science,highlightColor);
  });


//This is used to communicate with the popup to display to users amount of flags found
//and warn them when a site contains misinformation
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request) {
        sendResponse({ num_flags: num_flags });
    }
});
(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{286:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return b}));var t=n(3),r=n(7),l=(n(0),n(309)),s={title:"Workshop (0.9.10)",id:"workshop"},o={unversionedId:"reference/workshop",id:"reference/workshop",isDocsHomePage:!1,title:"Workshop (0.9.10)",description:"----",source:"@site/docs/reference/workshop.md",slug:"/reference/workshop",permalink:"/docs/reference/workshop",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/workshop.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621864783},c=[{value:"Getting started",id:"getting-started",children:[{value:"Notes in Haskell",id:"notes-in-haskell",children:[]}]},{value:"Basic patterns",id:"basic-patterns",children:[{value:"Default sample library",id:"default-sample-library",children:[]},{value:"More variety",id:"more-variety",children:[]}]},{value:"Effects",id:"effects",children:[{value:"Learn more about effects",id:"learn-more-about-effects",children:[]}]},{value:"Transforming patterns",id:"transforming-patterns",children:[{value:"Slow, fast and hurry",id:"slow-fast-and-hurry",children:[]},{value:"Reorganise patterns",id:"reorganise-patterns",children:[]},{value:"Even further into transformations",id:"even-further-into-transformations",children:[]}]},{value:"Different kind of patterns",id:"different-kind-of-patterns",children:[{value:"Cyclic / repetitive",id:"cyclic--repetitive",children:[]},{value:"Symmetry",id:"symmetry",children:[]},{value:"Polymetric / polyrhythmic sequences",id:"polymetric--polyrhythmic-sequences",children:[]},{value:"Euclidean rhythm/Bjorklund",id:"euclidean-rhythmbjorklund",children:[]}]},{value:"Randomness",id:"randomness",children:[]},{value:"Manipulating Samples",id:"manipulating-samples",children:[]}],p={toc:c};function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This tutorial is based on Tidalcycles version 0.9.10. Some of the latest features (post 1.0.0) will not be presented. Major features and changes were added post 1.0. This tutorial should still work as an introduction to Tidal but might not present the most recent and ",Object(l.b)("em",{parentName:"p"},"exciting")," features."))),Object(l.b)("p",null,"Welcome to this ",Object(l.b)("strong",{parentName:"p"},"Tidal Cycles")," tutorial. This is designed to be used as a worksheet during hands-on beginner/mixed workshops, and is based on Tidalcycles version ",Object(l.b)("inlineCode",{parentName:"p"},"0.9.10"),". By Lucy Cheesman, adapted to wiki format by Alex McLean."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"getting-started"},"Getting started"),Object(l.b)("p",null,"Once everything is installed, follow the following startup procedure\neach time."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Launch ",Object(l.b)("strong",{parentName:"li"},"SuperDirt")," - In ",Object(l.b)("strong",{parentName:"li"},"SuperCollider"),", type ",Object(l.b)("inlineCode",{parentName:"li"},"'SuperDirt.start'")," and run\nthe code by holding down ",Object(l.b)("inlineCode",{parentName:"li"},"Ctrl")," and pressing ",Object(l.b)("inlineCode",{parentName:"li"},"Enter")," (while your\ncursor is on the same line as the code)."),Object(l.b)("li",{parentName:"ol"},"Launch ",Object(l.b)("strong",{parentName:"li"},"Tidal Cycles")," - In Atom, start a new file and save it with a ",Object(l.b)("inlineCode",{parentName:"li"},".tidal")," extension (e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"examples.tidal"),").")),Object(l.b)("h3",{id:"notes-in-haskell"},"Notes in Haskell"),Object(l.b)("p",null,"Haskell is using double dashes ",Object(l.b)("inlineCode",{parentName:"p"},"--")," at the beginning of a line to denotate a comment. A comment is a piece of code that will be ignored by the interpreter. You can use comments to take notes in your code. You can also use comments to ignore a specific line or pattern:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'\u2013- I\'m a comment\n\n-- this pattern will not play\n-- d1 $\xa0s "bd hh sn hh"\n\n-- "fast 2" will be ignored\nd1\n--  $\xa0fast 2\n  $ s "hh*8"\n\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"basic-patterns"},"Basic patterns"),Object(l.b)("p",null,"The basic format for making sound in Tidal looks like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum"\n')),Object(l.b)("p",null,"You can stop making a sound using ",Object(l.b)("inlineCode",{parentName:"p"},"silence"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"d1 $ silence\n")),Object(l.b)("p",null,"Pick a different sound from the same set, with ",Object(l.b)("inlineCode",{parentName:"p"},":"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum:1"\n')),Object(l.b)("h3",{id:"default-sample-library"},"Default sample library"),Object(l.b)("p",null,"Some of the samples which come with ",Object(l.b)("strong",{parentName:"p"},"Tidal")," are listed below. Try some out!"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-plaintext"},"flick sid can metal future gabba sn mouth co gretsch mt arp h cp\ncr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx\ndiphone2 house off ht tink perc bd industrial pluck trump printshort\njazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy\nrave bottle kurt latibro rm sax lighter lt arpy feel less stab ul\n")),Object(l.b)("p",null,"You can see what other sounds there are (or add your own) by looking in the ",Object(l.b)("inlineCode",{parentName:"p"},"Dirt-Samples")," folder. You can find it via the ",Object(l.b)("inlineCode",{parentName:"p"},"SuperCollider")," menu: ",Object(l.b)("inlineCode",{parentName:"p"},"'File > Open user support directory > downloaded-quarks > Dirt-Samples'"),". Make a sequence:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd hh sn hh"\n')),Object(l.b)("p",null,"The more steps in the sequence, the faster it goes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd bd hh bd sn bd hh bd"\n')),Object(l.b)("p",null,"This is because of the way ",Object(l.b)("strong",{parentName:"p"},"Tidal")," handles time. There is a universal ",Object(l.b)("inlineCode",{parentName:"p"},"\u2018cycle\u2019")," (sort of like a musical 'bar') which is always running. ",Object(l.b)("strong",{parentName:"p"},"Tidal")," will play all of the sounds between the speech marks in one cycle, unless we tell it not to (we\u2019ll learn how to do that later). You\u2019ll also notice ",Object(l.b)("inlineCode",{parentName:"p"},"Tidal")," will space the sounds out evenly within the cycle Which means we can end up with polyrhythmic structures (more on those later). We can change the length of the cycle using ",Object(l.b)("inlineCode",{parentName:"p"},"setcps")," (where ",Object(l.b)("inlineCode",{parentName:"p"},"cps")," stands for cycles per second) - this is a bit like bpm (beats per minute)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"setcps 0.6\n")),Object(l.b)("p",null,"You can use ",Object(l.b)("inlineCode",{parentName:"p"},"d1, d2, d3...d9")," to play multiple sequences at the same time:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d2 $ sound "sn sn:2 sn bd sn"\n')),Object(l.b)("p",null,"You can stop all the running patterns with ",Object(l.b)("inlineCode",{parentName:"p"},"hush"),"."),Object(l.b)("p",null,"You can pause everything by changing the cycle length to a negative number (remember to put negative numbers in brackets)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"setcps (-1)\n")),Object(l.b)("p",null,"Start it up again with a positive number"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},"setcps 0.6\n")),Object(l.b)("p",null,"Or you can ",Object(l.b)("inlineCode",{parentName:"p"},"solo")," one channel:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy cp arpy:2"\n\nd2 $ sound "sn sn:2 bd sn"\n\nsolo 2\n\n-- now only the second pattern will be playing\n\nunsolo 2\n\n-- now both will be playing, again\n')),Object(l.b)("h3",{id:"more-variety"},"More variety"),Object(l.b)("p",null,"Let's add some more variety to our sequences:"),Object(l.b)("p",null,"Add a silence/rest with ",Object(l.b)("inlineCode",{parentName:"p"},"~"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"\n')),Object(l.b)("p",null,"Fit a subsequence into a step with square brackets:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd [bd cp] bd bd"\n')),Object(l.b)("p",null,"This can make for flexible time signatures:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[bd bd sn:5] [bd sn:3]"\n')),Object(l.b)("p",null,"You can put subsequences inside subsequences:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"\n')),Object(l.b)("p",null,"Keep going.."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"\n')),Object(l.b)("p",null,"You can repeat a step with ",Object(l.b)("inlineCode",{parentName:"p"},"*"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sd*2"\n')),Object(l.b)("p",null,"This works with subsequences too:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd [sd cp]*2"\n')),Object(l.b)("p",null,"Or you can do the opposite using ",Object(l.b)("em",{parentName:"p"},"/"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn/2"\n\nd1 $ sound "bd [sn cp]/2"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"*")," works by 'speeding up' a step to play it multiple times. ",Object(l.b)("inlineCode",{parentName:"p"},"/")," works by 'slowing it down'."),Object(l.b)("p",null,"We can also schedule patterns across cycles using ",Object(l.b)("inlineCode",{parentName:"p"},"<")," and ",Object(l.b)("inlineCode",{parentName:"p"},">"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd <sd cp arpy>"\n\nd1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"\n')),Object(l.b)("h2",{id:"effects"},"Effects"),Object(l.b)("p",null,"Tidal has lots of effects we can use to change the way things sound. ",Object(l.b)("inlineCode",{parentName:"p"},"vowel")," is a filter which adds a vowel sound -- try ",Object(l.b)("inlineCode",{parentName:"p"},"a, e, i, o")," and ",Object(l.b)("inlineCode",{parentName:"p"},"u"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a"\n')),Object(l.b)("p",null,"We create patterns of effects in much the same way we create patterns of sounds. We call these effect and sound patterns 'control patterns'. So:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e e"\n')),Object(l.b)("p",null,"Remember that we can use ",Object(l.b)("inlineCode",{parentName:"p"},'"<>"')," to schedule across cycles:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "<a o e e>"\n')),Object(l.b)("p",null,"You can add a non-vowel letter to pause the ",Object(l.b)("inlineCode",{parentName:"p"},"vowel")," effect:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o p p"\n')),Object(l.b)("p",null,"Tidal does its best to map patterns across to one another:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e"\n')),Object(l.b)("p",null,"The structure comes from the left - try swapping the parameters:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ vowel "a o ~ i" # sound "drum"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"gain")," changes the volume of different sounds:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"speed")," and ",Object(l.b)("inlineCode",{parentName:"p"},"note")," are used for pitching samples. ",Object(l.b)("inlineCode",{parentName:"p"},"speed")," affects the speed of playback (e.g. 2 = up an octave):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"\n')),Object(l.b)("p",null,"Or we can take the pattern from the speed parameter:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ speed "1 2 4" # sound "jungbass:6"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"note")," pitches the sample up in semitones (e.g. 12 = up an octave):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ up "0 ~ 12 24" # sound "jungbass:6"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pan")," allows us to create stereo effects (0 = left, 0.5 = middle, 1 = right):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"shape")," adds distortion (but be careful - it also makes the sound much louder):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"\n')),Object(l.b)("h3",{id:"learn-more-about-effects"},"Learn more about effects"),Object(l.b)("p",null,"You can take a look at the ",Object(l.b)("inlineCode",{parentName:"p"},"Basics > Effects")," section to learn more about effects and to see the complete list of effects. We also suggest you to take a look at the ",Object(l.b)("inlineCode",{parentName:"p"},"Basics > Oscillators")," section to see how you can apply an LFO to some of these effects."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"transforming-patterns"},"Transforming patterns"),Object(l.b)("p",null,"We can start to make much more complex patterns using transformations. Using functions like ",Object(l.b)("inlineCode",{parentName:"p"},"slow")," you can start to transcend the cycle. ",Object(l.b)("inlineCode",{parentName:"p"},"slow")," stretches the pattern over more cycles:"),Object(l.b)("h3",{id:"slow-fast-and-hurry"},"Slow, fast and hurry"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy:1 arpy:2 arpy:3"\n\nd1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"fast")," squashes the pattern into less than one cycle. You might also see people writing ",Object(l.b)("inlineCode",{parentName:"p"},"density")," - it\u2019s the same thing. Take a look:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'fast 0.5 is the same as slow 2!\n\nd1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"\n\nd1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"hurry")," is similar to ",Object(l.b)("inlineCode",{parentName:"p"},"fast"),", but also applies a speed transformation:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy arpy:1 arpy:2"\nd1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"\nd1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"\n')),Object(l.b)("h3",{id:"reorganise-patterns"},"Reorganise patterns"),Object(l.b)("p",null,"You can reverse a pattern with ",Object(l.b)("inlineCode",{parentName:"p"},"rev"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,"Or play it forwards and then backwards with ",Object(l.b)("inlineCode",{parentName:"p"},"palindrome"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"iter")," starts the pattern at a different point each cycle, shifting it the given number of times until it gets back to where it started:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"every")," allows us to schedule transformations or effects in different cycles. The following example will play twice as fast every four cycles: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,"... or you could schedule an effect in the same way, using ",Object(l.b)("inlineCode",{parentName:"p"},"#"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"jux")," (short for ",Object(l.b)("inlineCode",{parentName:"p"},"juxtapose"),") takes a transformation or an effect and plays it in one speaker the original pattern plays in the other speaker:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy arpy:1 arpy:2 arpy:3"\nd1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"\nd1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"chunk")," applies a transformation or an effect to a different part of the pattern each time. For example with 4 as a parameter, it will step through each quarter of the cycle."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"\nd1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"\n')),Object(l.b)("h3",{id:"even-further-into-transformations"},"Even further into transformations"),Object(l.b)("p",null,"More than one transformation is possible! You can chain them together using ",Object(l.b)("inlineCode",{parentName:"p"},"."),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"\n')),Object(l.b)("p",null,"Remember that (almost) everything is a pattern so we can apply these transformations to our effects too:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"\nd1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")\n')),Object(l.b)("p",null,"What about slowing down or scaling (using ",Object(l.b)("inlineCode",{parentName:"p"},"scale"),") ",Object(l.b)("inlineCode",{parentName:"p"},"sine")," and ",Object(l.b)("inlineCode",{parentName:"p"},"saw"),"?"),Object(l.b)("hr",null),Object(l.b)("h2",{id:"different-kind-of-patterns"},"Different kind of patterns"),Object(l.b)("p",null,"What is pattern, anyway? Let's think about some different kinds of pattern and how ",Object(l.b)("strong",{parentName:"p"},"Tidal")," can represent them."),Object(l.b)("h3",{id:"cyclic--repetitive"},"Cyclic / repetitive"),Object(l.b)("p",null,"We can use ",Object(l.b)("inlineCode",{parentName:"p"},"n")," to choose samples from a folder, this allows us to apply patterns there too:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 1 2 3" # sound "arpy"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"run")," is a short way of writing out sequential patterns:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (run 4) # sound "arpy"\n')),Object(l.b)("p",null,"or we can use:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n "0 .. 3" # sound "arpy"\n')),Object(l.b)("h3",{id:"symmetry"},"Symmetry"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"\nd1 $ palindrome $ n (run 4) # sound "arpy"\n')),Object(l.b)("h3",{id:"polymetric--polyrhythmic-sequences"},"Polymetric / polyrhythmic sequences"),Object(l.b)("p",null,"Play two subsequences at once by using square brackets (sort of like one big subsequence!) separating with a comma:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"\n')),Object(l.b)("p",null,"If you use curly brackets instead of square you get a different effect. With square brackets both halves of the sequence are fitted into the cycle (polyrhythm). With curly brackets the pulse is set by the left hand pattern. The right hand pattern can then overlap (or underlap!) (polymeter):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"\nd1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"\nd1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"\nd1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"\nd1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"\nd1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"\n')),Object(l.b)("h3",{id:"euclidean-rhythmbjorklund"},"Euclidean rhythm/Bjorklund"),Object(l.b)("p",null,"If you give two numbers in brackets after an element in a pattern, then ",Object(l.b)("strong",{parentName:"p"},"Tidal")," will try to distribute the first number of sounds equally across the second number of steps:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(5,8)"\n')),Object(l.b)("p",null,"You can use this notation within a single element of a pattern:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(3,8) sn*2"\nd1 $ sound "bd(3,8) sn(5,8)"\n')),Object(l.b)("p",null,"You can also add a third parameter, which \u2018rotates\u2019 the pattern so it starts on a different step:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(5,8,2)"\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"randomness"},"Randomness"),Object(l.b)("p",null,"Randomness can help us quickly introduce character and variation into our patterns. ",Object(l.b)("inlineCode",{parentName:"p"},"sometimes")," works a bit like ",Object(l.b)("inlineCode",{parentName:"p"},"every"),", but instead of happening after a set period, changes have a random chance of appearing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sometimes (# speed "2") $ sound "drum*8"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"often")," (75%) works like ",Object(l.b)("inlineCode",{parentName:"p"},"sometimes")," (50%) but happens more often:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ often (# speed "2") $ sound "drum*8"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"irand")," generates a random integer up to the number specified. (e.g. to play a random sample):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy(3,8)" # n (irand 16)\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"rand")," generates a random decimal between ",Object(l.b)("inlineCode",{parentName:"p"},"0")," and ",Object(l.b)("inlineCode",{parentName:"p"},"1"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "tink*16" # gain rand\n')),Object(l.b)("p",null,"You can use ",Object(l.b)("inlineCode",{parentName:"p"},"degradeBy")," to remove random elements. The number indicates how likely a sample is to play:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ degradeBy 0.2 $ sound "tink*16"\n')),Object(l.b)("p",null,"(",Object(l.b)("inlineCode",{parentName:"p"},"degrade")," on its own is the same as ",Object(l.b)("inlineCode",{parentName:"p"},"degradeBy 0.5"),")"),Object(l.b)("p",null,"Or, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"?")," to remove sounds with a 50% likelihood:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd sn:2? bd sn?"\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"manipulating-samples"},"Manipulating Samples"),Object(l.b)("p",null,"So far we've just used short samples. Longer samples can cause us some problems if we\u2019re not careful. Let\u2019s see what happens with a long sample:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev"\n-- wait a bit, then..\nhush\n')),Object(l.b)("p",null,"As you can hear, ",Object(l.b)("strong",{parentName:"p"},"Tidal")," will keep triggering the sample each cycle, even if it\u2019s very long. Even if you stop the pattern playing, you will still need to listen while the samples play out. You can use ",Object(l.b)("inlineCode",{parentName:"p"},"cut")," to truncate the sample when the next one is triggered:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev" # cut 1\n')),Object(l.b)("p",null,"The number in ",Object(l.b)("inlineCode",{parentName:"p"},"cut")," define a group, so you can play with interference across different patterns:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev ~" # cut 1\nd2 $ slow 4 $ sound "pebbles ~" # cut 1\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"legato")," also truncates samples, but using a fixed length:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bev ~ bev ~" # legato 1\n')),Object(l.b)("p",null,"We can also ",Object(l.b)("inlineCode",{parentName:"p"},"chop")," samples for a ",Object(l.b)("em",{parentName:"p"},"granular synthesis")," effect:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop 32 $ sound "bev"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"striate")," is similar to ",Object(l.b)("inlineCode",{parentName:"p"},"chop")," but organises the playback in a different way:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\nd1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"randslice")," chops the sample into pieces and then plays back a random one each cycle:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ randslice 32 $ sound "bev"\n')),Object(l.b)("p",null,"We can also use ",Object(l.b)("inlineCode",{parentName:"p"},"loopAt")," to fit samples to a set number of cycles:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 8 $ sound "bev"\n')),Object(l.b)("p",null,"As always we can add patterns and transformations to these functions, or combine them for interesting effects:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1\nd1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"\n')))}b.isMDXComponent=!0},309:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},i=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=b(n),u=t,m=i["".concat(s,".").concat(u)]||i[u]||d[u]||l;return n?r.a.createElement(m,o(o({ref:a},p),{},{components:n})):r.a.createElement(m,o({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
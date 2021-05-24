(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{169:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return r})),n.d(a,"toc",(function(){return b})),n.d(a,"default",(function(){return p}));var l=n(3),t=n(7),s=(n(0),n(309)),c={title:"Basic Patterns",permalink:"wiki/Basic_Patterns/",layout:"wiki"},r={unversionedId:"Tidal_workshop_worksheet/Basic_Patterns",id:"Tidal_workshop_worksheet/Basic_Patterns",isDocsHomePage:!1,title:"Basic Patterns",description:"The basic format for making sound in Tidal looks like this",source:"@site/docs/Tidal_workshop_worksheet/Basic_Patterns.md",slug:"/Tidal_workshop_worksheet/Basic_Patterns",permalink:"/docs/Tidal_workshop_worksheet/Basic_Patterns",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/Tidal_workshop_worksheet/Basic_Patterns.md",version:"current",lastUpdatedBy:"Koji Ishimoto",lastUpdatedAt:1615136026},b=[{value:"Make a sequence",id:"make-a-sequence",children:[]},{value:"Effects",id:"effects",children:[]},{value:"feeling brave ?",id:"feeling-brave-",children:[]},{value:"Continuous patterns",id:"continuous-patterns",children:[]}],u={toc:b};function p(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(s.b)("wrapper",Object(l.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The basic format for making sound in Tidal looks like this"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum"\n')),Object(s.b)("p",null,"You can stop making a sound using"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"silence\n")),Object(s.b)("p",null,":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"d1 $ silence\n")),Object(s.b)("p",null,"Pick a different sound from the same set, with ","`",":","`"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum:1"\n')),Object(s.b)("p",null,"Some of the samples which come with Tidal are listed below. Try some\nout!"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"flick sid can metal future gabba sn mouth co gretsch mt arp h cp\ncr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx\ndiphone2 house off ht tink perc bd industrial pluck trump printshort\njazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy\nrave bottle kurt latibro rm sax lighter lt arpy feel less stab ul\n")),Object(s.b)("p",null,"You can see what other sounds there are (or add your own) by looking in\nthe ",Object(s.b)("em",{parentName:"p"},"Dirt-Samples")," folder. You can find it via the SuperCollider menu:\n'File ",">"," Open user support directory ",">"," downloaded-quarks ",">","\nDirt-Samples'."),Object(s.b)("h2",{id:"make-a-sequence"},"Make a sequence"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd hh sn hh"\n')),Object(s.b)("p",null,"The more steps in the sequence, the faster it goes:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd bd hh bd sn bd hh bd"\n')),Object(s.b)("p",null,"This is because of the way Tidal handles time. There is a universal\n\u2018cycle\u2019 (sort of like a musical 'bar') which is always running. Tidal\nwill play all of the sounds between the speech marks in one cycle,\nunless we tell it not to (we\u2019ll learn how to do that later). You\u2019ll also\nnotice Tidal will space the sounds out evenly within the cycle Which\nmeans we can end up with polyrhythmic structures (more on those later)."),Object(s.b)("p",null,"We can change the length of the cycle using"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"setcps\n")),Object(s.b)("p",null,"(where cps stands for cycles per second) - this is a bit like bpm (beats\nper minute)."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"setcps 0.6\n")),Object(s.b)("p",null,"You can use d1, d2, d3...d9 to play multiple sequences at the same time"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d2 $ sound "sn sn:2 sn bd sn"\n')),Object(s.b)("p",null,"You can stop all the running patterns with"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"hush\n")),Object(s.b)("p",null,"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"hush\n")),Object(s.b)("p",null,"You can pause everything by changing the cycle length to a negative\nnumber (remember to put negative numbers in brackets)."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"setcps (-1)\n")),Object(s.b)("p",null,"Start it up again with a positive number"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"setcps 0.6\n")),Object(s.b)("p",null,"Or you can ","`","solo","`"," one channel:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "arpy cp arpy:2"\n\n\x3c!--T:84--\x3e\nd2 $ sound "sn sn:2 bd sn"\n\n\x3c!--T:85--\x3e\nsolo 2\n\n\x3c!--T:86--\x3e\n-- now only the second pattern will be playing\n\n\x3c!--T:87--\x3e\nunsolo 2\n\n\x3c!--T:88--\x3e\n-- now both will be playing, again\n')),Object(s.b)("p",null,"Let add some more variety to our sequences."),Object(s.b)("p",null,"Add a silence/rest with"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"~\n")),Object(s.b)("p",null,":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"\n')),Object(s.b)("p",null,"Fit a subsequence into a step with square brackets:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [bd cp] bd bd"\n')),Object(s.b)("p",null,"This can make for flexible time signatures:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[bd bd sn:5] [bd sn:3]"\n')),Object(s.b)("p",null,"You can put subsequences inside subsequences:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"\n')),Object(s.b)("p",null,"Keep going.."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"\n')),Object(s.b)("p",null,"You can repeat a step with"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"*\n")),Object(s.b)("p",null,":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sd*2"\n')),Object(s.b)("p",null,"This works with subsequences too:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [sd cp]*2"\n')),Object(s.b)("p",null,"Or you can do the opposite using"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"/\n")),Object(s.b)("p",null,":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd sn/2"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd [sn cp]/2"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"*\n")),Object(s.b)("p",null,"works by 'speeding up' a step to play it multiple times."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"/\n")),Object(s.b)("p",null,"works by 'slowing it down'."),Object(s.b)("p",null,"We can also schedule patterns across cycles using"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"<\n")),Object(s.b)("p",null,"and"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},">\n")),Object(s.b)("p",null,":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd <sd cp arpy>"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"\n')),Object(s.b)("h2",{id:"effects"},"Effects"),Object(s.b)("p",null,"Tidal has lots of effects we can use to change the way things sound."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"vowel\n")),Object(s.b)("p",null,"is a filter which adds a vowel sound -- try a, e, i, o and u"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a"\n')),Object(s.b)("p",null,"We create patterns of effects in much the same way we create patterns of\nsounds. We call these effect and sound patterns 'control patterns'. So"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e e"\n')),Object(s.b)("p",null,'Remember that we can use "\\<',">",'" to schedule across cycles'),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "<a o e e>"\n')),Object(s.b)("p",null,"You can add a non-vowel letter to pause the vowel effect"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o p p"\n')),Object(s.b)("p",null,"Tidal does its best to map patterns across to one another"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "drum drum drum drum" # vowel "a o e"\n')),Object(s.b)("p",null,"The structure comes from the left - try swapping the parameters"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ vowel "a o ~ i" # sound "drum"\n')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Health warning")," - This is one of the changes coming up in the new\nTidal - you will be able to control which side the structure comes from.\n. Or combine structure from ",Object(s.b)("em",{parentName:"p"},"both")," sides."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"gain\n")),Object(s.b)("p",null,"changes the volume of different sounds"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),Object(s.b)("p",null,"and"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"note\n")),Object(s.b)("p",null,"are used for pitching samples."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),Object(s.b)("p",null,"affects the speed of playback, e.g. 2 = up an octave"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"\n')),Object(s.b)("p",null,"Or we can take the pattern from the"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"speed\n")),Object(s.b)("p",null,"parameter"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ speed "1 2 4" # sound "jungbass:6"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"note\n")),Object(s.b)("p",null,"pitches the sample up in semitones, e.g. 12 = up an octave"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ up "0 ~ 12 24" # sound "jungbass:6"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"pan\n")),Object(s.b)("p",null,"allows us to create stereo effects - 0 = left, 0.5 = middle, 1 = right"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"shape\n")),Object(s.b)("p",null,"adds distortion (but be careful - it also makes the sound much louder)"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"\n')),Object(s.b)("h2",{id:"feeling-brave-"},"feeling brave ?"),Object(s.b)("p",null,"Try more effects:\n",Object(s.b)("a",{parentName:"p",href:"https://tidalcycles.org/index.php/Category:Control_Functions"},"https://tidalcycles.org/index.php/Category:Control_Functions")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"delay\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"delaytime\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"delayfeedback\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"cutoff\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"resonance\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"room\n")),Object(s.b)("p",null,"/"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"size\n")),Object(s.b)("h2",{id:"continuous-patterns"},"Continuous patterns"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"sine\n")),Object(s.b)("p",null,"is a continuous pattern following a sine curve from 0 to 1 and back"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},'d1 $ sound "bd*32" # gain sine\n')),Object(s.b)("p",null,"You can also try"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"tri\n")),Object(s.b)("p",null,","),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"saw\n")),Object(s.b)("p",null,"and"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-Haskell"},"rand\n")),Object(s.b)("p",null,"."))}p.isMDXComponent=!0},309:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return m}));var l=n(0),t=n.n(l);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=t.a.createContext({}),p=function(e){var a=t.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},o=function(e){var a=p(e.components);return t.a.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},i=t.a.forwardRef((function(e,a){var n=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),o=p(n),i=l,m=o["".concat(c,".").concat(i)]||o[i]||d[i]||s;return n?t.a.createElement(m,r(r({ref:a},u),{},{components:n})):t.a.createElement(m,r({ref:a},u))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=n.length,c=new Array(s);c[0]=i;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:l,c[1]=r;for(var u=2;u<s;u++)c[u]=n[u];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);
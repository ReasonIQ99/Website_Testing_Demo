const NOTIFICATION="🔴 LIVE Today 8 PM - Puzzle Trick | Jaldi aao YouTube pe!";
const VIDEOS=[
 {title:"Number Series Full Trick in 10 Min",youtubeId:"dQw4w9WgXcQ",date:"12 Oct 2026",tag:"series"},
 {title:"Puzzle - Floor Based Short Trick",youtubeId:"dQw4w9WgXcQ",date:"10 Oct 2026",tag:"puzzle"},
 {title:"Syllogism Only 2 Rules Se Solve",youtubeId:"dQw4w9WgXcQ",date:"08 Oct 2026",tag:"syllogism"}];
const NOTES=[
 {title:"Syllogism 50 Expected Questions PDF",topic:"Syllogism",link:"https://drive.google.com",size:"2.1 MB"},
 {title:"Blood Relation Complete Notes",topic:"Blood Relation",link:"https://drive.google.com",size:"1.5 MB"}];
const TEST_LIST=[
 {id:"mock1",name:"Reasoning Full Mock Test 1",questions:3,time:"20 min",attempts:"1.2k"},
 {id:"mock2",name:"Puzzle Special Mock",questions:1,time:"15 min",attempts:"890"}];
const PRACTICE_TOPICS=[
 {id:"syllogism",name:"Syllogism",icon:"🧩",qCount:50},
 {id:"blood",name:"Blood Relation",icon:"👨‍👩‍👧‍👦",qCount:40},
 {id:"direction",name:"Direction Sense",icon:"🧭",qCount:35},
 {id:"series",name:"Series",icon:"🔢",qCount:60}];
const MOCK_QUESTIONS={
 mock1:[
 {q:"If A is B's brother, B is C's sister, how is A related to C?",options:["Brother","Sister","Brother or Sister","Can't say"],ans:0,exp:"A is male and B is C's sister, so A is C's brother."},
 {q:"Find the next number: 2, 6, 12, 20, ?",options:["30","32","28","36"],ans:0,exp:"Differences are +4, +6, +8; next is +10. Answer: 30."},
 {q:"If PEN is coded as 35 by adding letter positions, how is PAGE coded?",options:["28","29","30","27"],ans:1,exp:"P=16, A=1, G=7, E=5. Total = 29."}],
 mock2:[{q:"Demo puzzle: Five people A, B, C, D and E sit in a row. If C is explicitly in the middle, who sits in the middle?",options:["A","B","C","D"],ans:2,exp:"The question directly states C sits in the middle. This is a simple demo placeholder."}]
};
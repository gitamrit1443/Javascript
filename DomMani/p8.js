// Traversing dom tree
const rootNode=document.getRootNode();
console.log(rootNode);//returns rootNode o
console.log(rootNode.childNodes);//returns node list [html]
const htmlElementNode=rootNode.childNodes[0];//[head,text,body]
console.log(htmlElementNode.childNodes);
const headElementNode=htmlElementNode.childNodes[0];
console.log(headElementNode)
const textNode1=htmlElementNode.childNodes[1];
console.log(textNode1);
const bodyNode=htmlElementNode.childNodes[2];
console.log(bodyNode)
// printing parent of head element Node
console.log(headElementNode.parentNode)
//displaying next siblinng of head node
console.log(headElementNode.nextSibling)//text
console.log(headElementNode.nextSibling.nextSibling)//body
console.log(headElementNode.childNodes)//displays all child node of head tag

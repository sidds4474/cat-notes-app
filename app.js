


 const notesList = document.querySelector('#notes_list')

 const textArea= document.querySelector('#text-area')

 console.log(textArea)

 const btn = document.querySelector('button')


 btn.addEventListener('click',addNotes)


function addNotes() {

//   <li>
//   <pre class="language-js">
//     <code>WRITE CAT NOTES HERE</code>
//   </pre>

// </li>



  const create_new_Li = document.createElement('li')
  const create_Pre = document.createElement('pre') 
  const create_Code = document.createElement('code')

  create_Pre.setAttribute('class',"language-js")
  

  create_Code.appendChild(document.createTextNode(textArea.value))
  create_Pre.appendChild(create_Code)

  create_new_Li.appendChild(create_Pre)

  // console.log(create_Pre)
   console.log(create_new_Li)
  
  notesList.appendChild(create_new_Li)
  

  textArea.value = ''

}






// {/* 
// <li>
// <pre class="language-js">
//   <code>WRITE CAT NOTES HERE</code>
// </pre>
// </li> 

// */}


// {/*

//  <li>
 
//  <pre class="language-js">
 
//  <code>

//  WRITE CAT NOTES HERE //text node

//  </code>
//  </pre>

//  <li/>
 

// </pre> 
//  const create_new_Li = document.createElement('li')
//  const create_Pre = document.createElement('pre')
//  create_Pre.setAttribute('class',"language-js")

//  const create_Code = document.createElement('code')
 
//  create_Code.appendChild(document.createTextNode(textArea.value))

// */




// {/* <li>
// <pre class="language-js">
//   WRITE CAT NOTES HERE
// </pre>
// </li>
//  */}

// const create_new_Li = document.createElement('li')
// // <li> </li>

// const create_Pre = document.createElement('pre')
// // <pre> </pre>

// create_Pre.setAttribute('class',"language-js")

// // <pre class='language-js'></pre>


// create_Code.appendChild(document.createTextNode(textArea.value))
// // <code>write cat notes here</pre>


// create_Pre.appendChild(create_Code)
// {/* <pre class='language-js'>

//   <code>
//     write cat notes her
//   </code>
// </pre> */}

// {/* <li>
//   {/* <pre class='language-js'>

//   <code>
//     write cat notes her
//   </code>
// </pre> </li>*/}

// //create_li.appendChild(create_pre)

// // li->pr->code->textnode